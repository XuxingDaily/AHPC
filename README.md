# Automatic health punch card

自动健康打卡程序

## 介绍
广州大学自动健康打卡程序
运行环境：Windows

## 运行
- 运行时：node.js
- 依赖库：puppeteer、pkg

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium overthe DevTools Protocol.Puppeteer runs headless by default,but can be configured to run full(nonheadless)Chrome or Chromium.

## 使用
### 安装依赖
```
npm i
```
> puppeteer依赖下载需要较长的时间

在`main.js`中修改account的账号密码，后运行，得到可执行文件exe。
此时可以执行一次查看是否打卡成功。

### 编译为可执行文件：
```
npm start
```

> 如果网络较差可能会由于超时而调用失败

注意：编译为`main.exe`后需要依赖node_module中的chrome.exe，又由于pkg不能编译打包，所以main.exe需要在本路径下运行。

### 挂载自动执行任务
该程序无需手动执行，只需要挂载到Windows的`任务计划程序`挂载即可。
具体参见：[网上教程](https://blog.csdn.net/wd2011063437/article/details/79168735)

注意：若存在Windows下计划任务中运行exe但一闪而过，不运行的情况请检查`编辑操作`中的`起始于(可选)`是否填了该执行文件的路径。
。
