/*
 * @Author: dgflash
 * @Date: 2021-11-11 17:45:23
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-24 21:26:59
 */
import { ecs } from "../../../../extensions/oops-framework/assets/libs/ecs/ECS";
import { LoginSystem } from "./bll/Login";
import { AccountModelComp } from "./model/AccountModelComp";
import { GateNetComp } from "./model/GateNetComp";

/** 游戏进入初始化模块 */
export class Initialize extends ecs.Entity {
    GateNet: GateNetComp;
    AccountModel: AccountModelComp;

    protected init() {
        this.addComponents<ecs.Comp>(
            GateNetComp,
            AccountModelComp);

    }
}

export class EcsInitializeSystem extends ecs.System {
    constructor() {
        super();

        this.add(new LoginSystem());
    }
}