- 调试环境
    - npm run dev:match 启动匹配服务器
    - npm run dev:room 启动房间服务器
    - npm run dev:room2 再启动一个房间服务器测试分布式 //这是原代码的功能，现在取消了
    - node ./scripts/dataServer.js 现在用这个来启动用来存储数据的服务，并且也配置到pm2里面了
    - npm run build 构建发布
- 生产环境
    - npm install pm2@latest -g 安装工具
    - pm2 start ecosystem.config.js --env production 启动生成环境
    - pm2 start ecosystem.config.js --env develop 启动调试环境
    - pm2 delete all 停止所有服务器

- tsrpc细节教程[参考](https://tsrpc.cn/) 
