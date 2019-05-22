const fs = require("fs");
// 相册相对路径
const path = "../../node_modules/photo_album/";

var qiniu = require("qiniu");


//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'L1__K2wfsgkd07pf6LCPLEL_daimtShrBYxN8dUG';
qiniu.conf.SECRET_KEY = 'iJjmQUPSDp50Nky_tPrLxb5KTMoxf_fwRxj1elIi';

//要上传的空间
bucket = 'photos';

//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}

//构造上传函数
function uploadFile(uptoken, key, localFile) {
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        console.log('upload success : ',ret.hash, ret.key);
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
      }
  });
}

//读取文件后缀名称，并转化成小写
function getFilenameSuffix(file_name) {
  if(file_name=='.DS_Store'){
    return '.DS_Store';
  }
    if (file_name == null || file_name.length == 0)
        return null;
    var result = /\.[^\.]+/.exec(file_name);
    return result == null ? null : (result + "").toLowerCase();
}

//获取文件名后缀名
String.prototype.extension = function(){
    var ext = null;
    var name = this.toLowerCase();
    var i = name.lastIndexOf(".");
    if(i > -1){
    var ext = name.substring(i);
    }
    return ext;
}

//判断Array中是否包含某个值
Array.prototype.contain = function(obj){
    for(var i=0; i