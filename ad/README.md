#  鲁班 api 介绍

[luban-api](http://test0m.wukonglicai.com/act/bfe/luban/template-static/doc/) 是给鲁班系统生成的静态页面提供 api 的工具项目，包括调用钱包悟空 app 方法，微信方法，axios sha1 等工具方法。


## 开发
```sh
# 拉取项目
 git clone git@gitlab.9fprivate.com:bfe/luban/template-static.git
# 进入目录
 cd luban-api
# 安装依赖
 npm install 
# 打包
 npm run build
```

::: tip 

打包后生成压缩和未压缩两个文件
- template-static/js/api/index.aio.js
- template-static/js/api/index.aio.min.js
  
:::



## 部署

- [测试环境 job 通过`分支`部署](http://47.94.191.56:28080/jenkins/view/qbcs-test-4/job/luban-template-static-4/build?delay=0sec)
- [线上环境 job 通过 `tag` 部署](https://jenkins.9fprivate.com/job/Front-End/job/luban/job/Front-luban-static/)

## 引用

- [测试环境访问链接`http://test*rb.9f.cn/ruban/file/template-static/js/api/index.aio.js`](http://test*rb.9f.cn/ruban/file/template-static/js/api/index.aio.js)
- [线上环境访问链接`https://rbs.9f.cn/file/template-static/js/api/index.aio.min.js`](https://rbs.9f.cn/file/template-static/js/api/index.aio.min.js)

```html
<html>
    <head>
        <script src="https://rbs.9f.cn/file/template-static/js/api/index.aio.min.js"></script>
        <script>
            // 判断当前设备是否是 isIPhoneX 系列手机
            console.log(window.luban_api.isIPhoneX())
        </script>   
    </head>    
</html>    
```

## 部署doc
[doc job](http://47.94.191.56:28080/jenkins/job/luban-api-doc/8/console)

 git clone git@gitlab.9fprivate.com:bfe/luban/template-static.git

```sh
# 进入目录
 cd luban-api
# 安装依赖
 npm install 
# 打包
 npm run build:doc
 # 上传
docs/.vuepress/dist 里的内容
```

访问链接
 http://test0m.wukonglicai.com/act/bfe/luban/template-static/doc/index.html
