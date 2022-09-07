/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-24 21:23:51
 */

/*
 * 游戏配置解析，对应 resources/config/config.json 配置
 */
export class GameConfig {
    /** 服务器配置 */
    server = {
        /** 强制HTTPS */
        https: false,
        /** 是否用JSON协议，否则用二进制 */
        json: true,
        /** 网关服务器地址 */
        gate: "http://127.0.0.1:2000",
        /** 匹配服务器地址（网关服务器返回）*/
        match: "http://47.241.9.181:3000",
        /** 两个心跳数据包之间的间隔时间（单位：毫秒） */
        heartbeat_interval: 5000,
        /** 如果在此期间心跳数据包没有得到回复，连接将被关闭（单位：毫秒） */
        heartbeat_timeout: 5000,
        /** 客户端发送玩家状态信息的频率 */
        player_state_update_rate: 0.066
    };

    /** 客户端版本号配置 */
    version = "1.0.0";

    /** 包名 */
    package = "com.oops.game";

    /** 本地存储内容加密 key */
    localDataKey = "oops";

    /** 本地存储内容加密 iv */
    localDataIv = "framework";

    /** Http 服务器地址 */
    httpServer = "http://192.168.0.150/main/";

    /** Http 请求超时时间 */
    httpTimeout = 10000;

    /** 游戏每秒传输帧数 */
    frameRate = 60;

    /** 获取当前客户端支持的语言类型 */
    language = "zh";

    languagePathJson = "language/json";

    languagePathTexture = "language/texture";

}