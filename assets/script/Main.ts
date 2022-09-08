/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-23 19:04:35
 */
import { macro, setDisplayStats, _decorator } from 'cc';
import { DEBUG } from 'cc/env';
import { resLoader } from '../../extensions/oops-framework/assets/core/common/loader/ResLoader';
import { AsyncQueue, NextFunction } from '../../extensions/oops-framework/assets/core/common/queue/AsyncQueue';
import { oops } from '../../extensions/oops-framework/assets/core/Oops';
import { ecs } from '../../extensions/oops-framework/assets/libs/ecs/ECS';
import { config } from './game/common/config/Config';
import { UIID } from './game/common/config/GameUIConfig';
import { CommonEnter } from './game/common/ecs/CommonEnter';
import { smc } from './game/common/ecs/SingletonModuleComp';
import { Initialize } from './game/initialize/Initialize';

const { ccclass, property } = _decorator;

macro.ENABLE_MULTI_TOUCH = false;

/** 一格移动，镜头跟随  */
@ccclass('Main')
export class Main extends CommonEnter {
    start() {
        if (DEBUG) setDisplayStats(true);
    }

    protected run() {
        smc.initialize = ecs.getEntity<Initialize>(Initialize);

        console.log(config.query.username);


        var queue: AsyncQueue = new AsyncQueue();

        // 加载多语言包
        this.loadLanguage(queue);
        // 加载游戏内容加载进度提示界面
        this.onComplete(queue);

        queue.play();
    }

    /** 加载化语言包（可选） */
    private loadLanguage(queue: AsyncQueue) {
        queue.push((next: NextFunction, params: any, args: any) => {
            // 设置默认语言
            let lan = oops.storage.get("language");
            if (lan == null) {
                // lan = SDKPlatform.getLanguage();
                lan = "zh";
                oops.storage.set("language", lan!);
            }

            // 设置语言包路径
            oops.language.setAssetsPath(config.game.languagePathJson, config.game.languagePathTexture);

            // 加载语言包资源
            oops.language.setLanguage(lan!, next);
        });
    }

    /** 加载完成进入游戏内容加载界面 */
    private onComplete(queue: AsyncQueue) {
        queue.complete = () => {
            // oops.gui.open(UIID.Demo_Gate);      // 打开登录界面
            oops.gui.open(UIID.Demo_Match);
            // localStorage.setItem('walletAddress', 'test12')  //方便本地不用网页登录测试的代码，发布时需注掉
        };
    }
}