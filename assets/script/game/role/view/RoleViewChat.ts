/*
 * @Author: SS
 * @Date: 2022-06-27
 */

import { AudioSource, EditBox, EventTouch, Label, Node, Toggle, v3, Vec3, _decorator } from 'cc';
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
const { ccclass, property } = _decorator;

/** 角色摇撼控制 */
@ccclass("RoleViewChat")
@ecs.register('RoleViewUIChat', false)
export class RoleViewChat extends CCComp {

    @property({ type: EditBox })
    chatContent: EditBox = null!;
    @property({ type: Node })
    channelGroup: Node = null!;
    @property({ type: Node })
    activeRoom: Node = null!;
    @property({ type: Node })
    myRoom: Node = null!;

    closeSelf() {
        this.node.active = false;
        this.node.getChildByName('threeAttendees').active = false;
    }

    openCreateChannelDialog() {
        oops.gui.open(UIID.Demo_createChannel);
    }

    openChannelPopup() {
        oops.gui.open(UIID.Demo_channelPopup);
        if (this.channelGroup.active) {
            if (this.activeRoom.getComponent(Toggle).isChecked) {
                smc.room.RoomModel.channelStatus = 1;
            }
            if (this.myRoom.getComponent(Toggle).isChecked) {
                smc.room.RoomModel.channelStatus = 2;
            }
        } else {
            smc.room.RoomModel.channelStatus = 3;
        }
    }

    /** 聊天 */
    private chat() {
        if (this.chatContent.string != "") {
            smc.room.chat(this.chatContent.string);
            this.chatContent.string = "";
        }
    }

    reset(): void {

    }
}