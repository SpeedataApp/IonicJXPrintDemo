import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  successCallback = function (result) {
    alert(result)
  };
  errorCallback = function (error) {
    alert(error)
  };
  connectPrinter() {
    //连接打印机
    try {
      (<any>window).JXPrintPlugin.connectPrinter(this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  closeConnect() {
    //断开连接
    try {
      (<any>window).JXPrintPlugin.closeConnect(this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  setPaperType() {
    //设置纸类型
    try {
      var jsonstr = [0];
      (<any>window).JXPrintPlugin.setPaperType(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  setDensity() {
    //设置浓度
    try {
      var jsonstr = [2];
      (<any>window).JXPrintPlugin.setDensity(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  setPaperFeed() {
    //走纸
    try {
      var jsonstr = [5];
      (<any>window).JXPrintPlugin.setPaperFeed(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  setPaperBack() {
    //退纸
    try {
      var jsonstr = [1];
      (<any>window).JXPrintPlugin.setPaperBack(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  printSelfCheck() {
    //打印自检页
    try {
      (<any>window).JXPrintPlugin.printSelfCheck(this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  printText() {
    //打印文本
    try {
      var jsonstr = ["打印文本演示\n"];
      (<any>window).JXPrintPlugin.printText(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  printBarCode() {
    //打印条码
    try {
      //设置居中打印
      (<any>window).JXPrintPlugin.setPrinter([2, 1], null, null);
      //打印二维码
      var jsonstr = [9, 0, 76, 6, "abc123"];
      (<any>window).JXPrintPlugin.printBarCode(jsonstr, this.successCallback, this.errorCallback);
      //继续走3字符行
      (<any>window).JXPrintPlugin.setPrinter([1, 3], null, null);
      //恢复左对齐打印
      (<any>window).JXPrintPlugin.setPrinter([2, 0], null, null);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  printImage() {
    //打印图片
    try {
      //需要将图片提前放置的内存根目录中
      var jsonstr = ["img.jpg", 3, 0, false];
      (<any>window).JXPrintPlugin.printImage(jsonstr, this.successCallback, this.errorCallback);
      (<any>window).JXPrintPlugin.setPrinter([1, 3], null, null);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  printTable() {
    //打印表格
    try {
      //创建表格
      var tableTitle = ["品名;数量;单价;金额", ";", "14,6,6,6"];
      (<any>window).JXPrintPlugin.createTable(tableTitle, null, this.errorCallback);
      //添加行
      var tableRow1 = ["保鲜袋;10.00;1;10.00"];
      var tableRow2 = ["铁丝挂钩;5.00;2;10.00"];
      var tableRow3 = ["雨伞;5.00;3;15.00"];
      (<any>window).JXPrintPlugin.addRow(tableRow1, null, this.errorCallback);
      (<any>window).JXPrintPlugin.addRow(tableRow2, null, this.errorCallback);
      (<any>window).JXPrintPlugin.addRow(tableRow3, null, this.errorCallback);
      //打印表格
      (<any>window).JXPrintPlugin.printTable(this.successCallback, this.errorCallback);
      //继续走3字符行
      (<any>window).JXPrintPlugin.setPrinter([1, 3], null, null);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  setFont() {
    //设置字体
    try {
      var jsonstr = [0, 0, 0, 0, 0];
      (<any>window).JXPrintPlugin.setFont(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  setPrinter() {
    //设置打印格式
    try {
      var jsonstr = [1, 3];
      (<any>window).JXPrintPlugin.setPrinter(jsonstr, this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }
  initPrinter() {
    //初始化打印机，清除缓存
    try {
      (<any>window).JXPrintPlugin.initPrinter(this.successCallback, this.errorCallback);
    } catch (error) {
      alert("Error: " + error)
    }
  }

}
