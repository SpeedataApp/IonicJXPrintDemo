# README

### 文件说明

* ionicJxPrint 为Cordova创建的测试程序 步骤如下

  ```
  1.ionic start ionicJxPrint tabs  #创建printTest项目
  2.cd ionicJxPrint  #进入项目
  3.ionic cordova platform add android  #添加Android平台
  4.ionic cordova build android  #先编译看下自己环境有没有问题
  5.ionic cordova plugin add /$PATH$/JXPrintPlugin #添加uhf的插件,$PATH$为插件所在目录
  6.替换tab1.page.html以及tab1.page.ts页面  #这两个页面为测试调用界面 
  7.ionic cordova build android
  8.打印图片需要先在config.xml中添加读写权限
  ```

​       测试环境

```
npm 6.4.9
ionic 5.4.9
Cordova 9.0.0 (cordova-lib@9.0.1)
android 8.1.0
```





* JXPrintPlugin 插件地址：https://github.com/SpeedataApp/CordovaPluginJXPrint.git
* app-debug.apk  Android测试程序