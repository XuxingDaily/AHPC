# Automatic health punch card

自动健康打卡程序

## 介绍
广州大学自动健康打卡程序

## 运行
- 运行时：node.js
- 依赖库：puppeteer、pkg

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium overthe DevTools Protocol.Puppeteer runs headless by default,but can be configured to run full(nonheadless)Chrome or Chromium.

## 使用
首先安装依赖：
```
npm i
```
> puppeteer依赖下载需要较长的时间

在`main.js`中修改account的账号密码，后运行，得到可执行文件exe。

运行：
```
npm start
```

> 如果网络较差可能会由于超时而调用失败

