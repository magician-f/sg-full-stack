/*
 * @Author: SS
 * @Date: 2022-06-27
 */

import { AudioSource, EditBox, EventTouch, Label, Node, tween, UIOpacity, v3, Vec3, WebView, _decorator } from 'cc';
import { DEBUG } from 'cc/env';

import { ecs } from "../../../../../extensions/oops-framework/assets/libs/ecs/ECS";
import VMLabel from '../../../../../extensions/oops-framework/assets/libs/model-view/VMLabel';
import { oops } from '../../../../../extensions/oops-framework/assets/core/Oops';

import { smc } from '../../common/ecs/SingletonModuleComp';
import { CCComp } from '../../common/ecs/view/CCComp';
import { Role } from '../Role';
import { RoleModelComp } from '../model/RoleModelComp';
import { UIID } from '../../common/config/GameUIConfig';
import { MapViewControl } from '../../scene/view/MapViewControl';
import { DelegateComponent } from '../../../../../extensions/oops-framework/assets/core/gui/layer/DelegateComponent';
const { ccclass, property } = _decorator;

/** 角色摇撼控制 */
@ccclass("RoleViewWebview")
@ecs.register('RoleViewWebview', false)
export class RoleViewWebview extends CCComp {

    @property({ type: Node })
    webView: Node = null!;
    @property({ type: Node })
    loading: Node = null!;
    private id = 0;

    onLoad() {
        this.id = this.node.getComponent(DelegateComponent).viewParams.params;
        this.init();
        this.loadingAnim();
    }

    init() {
        switch (this.id) {
            case 5: //找牛
                this.webView.getComponent(WebView).url = 'https://findtheinvisiblecow.com/';
                break;
            case 6: //超级玛丽
                this.webView.getComponent(WebView).url = 'https://www.yikm.net/play?id=3501&n=L2Zjcm9tL2R6bXgvU3VwZXIgTWFyaW8gQnJvcy4gKFcpIFshXS5uZXM=&t=%E8%B6%85%E7%BA%A7%E9%A9%AC%E9%87%8C%E5%A5%A5&ac=3&p=/fcpic/2146a.png';
                break;
            case 7: //连连看
                this.webView.getComponent(WebView).url = 'https://lines.frvr.com/';
                break;
            case 8: //emoji大战
                this.webView.getComponent(WebView).url = 'https://emojia.glitch.me/';
                break;
            case 9: //空project
                this.webView.getComponent(WebView).url = 'https://forms.gle/impXfCz1KAkL7nqw8';
                break;
            case 17: //空garden
                this.webView.getComponent(WebView).url = 'https://forms.gle/gFJbT8egowUV65D69';
                break;
            default:
                console.log('no such webview. some wrong here.');
                break;
        }
    }

    loadingAnim() {
        tween(this.loading.getComponent(UIOpacity))        
            .repeatForever(tween(this.loading.getComponent(UIOpacity))
                .to(0.5, { opacity: 100 })
                .to(0.5, { opacity: 255 })
                .start()).start();
    }

    closeSelf() {
        oops.gui.remove(UIID.Demo_webview800600);
    }

    reset(): void {

    }
}