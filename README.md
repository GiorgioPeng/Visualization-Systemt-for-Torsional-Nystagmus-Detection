# 项目结构说明

```
.  
|-- node_modules 项目依赖  
    |-- video-react 进行了更改  
|-- video-react 更改的video-react的拷贝  
|-- yarn.lock   
|-- package.json   
|-- src   
    |-- assets 静态数据，包括疾病列表和一些检查方式
    |-- components 
        |-- Introduction.js 项目介绍组件
        |-- RecordAddTable.js 记录添加组件
        |-- VideoPlayer.js 视频播放器组件
    |-- subPages 子页面
        |-- Cut 视频剪裁对标子页面
        |-- Label 标注系统页面
        |-- LightStream 光流视频子页面
        |-- Location 点击跳转眼震区间视频子页面
        |-- Overview 多个视频总览子页面
        |-- RemoveUselessFrame 无效帧去除子页面
    |-- utils
        |-- baseURL.js 基URL定义
        |-- useForceUpdate.js 强制刷新hook
    |-- globalState.js 全局状态
    |-- setupProxy.js 开发状态nginx反向代理配置

```

# 运行说明
```
yarn
yarn start
```

# 部署
```
yarn build
```