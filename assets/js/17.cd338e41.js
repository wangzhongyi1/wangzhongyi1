(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{297:function(v,_,a){"use strict";a.r(_);var t=a(14),i=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"npm私服搭建和项目发布"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#npm私服搭建和项目发布"}},[v._v("#")]),v._v(" npm私服搭建和项目发布")]),v._v(" "),_("h2",{attrs:{id:"项目打包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目打包"}},[v._v("#")]),v._v(" 项目打包")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("npm pack")]),v._v(" 项目进行打包，打包出来的就是 .tgz 压缩包\n"),_("ul",[_("li",[v._v("可以本地进行安装试一下效果 "),_("code",[v._v("npm i ./p-nrm-1.0.0.tgz")]),v._v("，或全局安装"),_("code",[v._v("npm i ./p-nrm-1.0.0.tgz -g")])])])])]),v._v(" "),_("h2",{attrs:{id:"版本迭代处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本迭代处理"}},[v._v("#")]),v._v(" 版本迭代处理")]),v._v(" "),_("ul",[_("li",[v._v("可以直接修改 package.json 里面的 version 版本号")]),v._v(" "),_("li",[v._v("使用命令自动迭代版本号\n"),_("ul",[_("li",[_("code",[v._v('npm version major -m "主版本迭代的描述信息"')]),v._v(" "),_("ul",[_("li",[v._v("当功能模块有较大变动，比如增加模块或者整体架构发生变化")])])]),v._v(" "),_("li",[_("code",[v._v('npm version minor -m "次版本迭代的描述信息"')]),v._v(" "),_("ul",[_("li",[v._v("相对于主版本而言，次版本的升级对应的只是局部的变动，但该局部的变动造成和以前版本不能兼容")])])]),v._v(" "),_("li",[_("code",[v._v('npm version patch -m "小版本迭代的描述信息"')]),v._v(" "),_("ul",[_("li",[v._v("修正版本号，一般是BUG的修复或是一些小的变动或是一些功能的扩充")])])])])])]),v._v(" "),_("h2",{attrs:{id:"私服搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#私服搭建"}},[v._v("#")]),v._v(" 私服搭建")]),v._v(" "),_("h3",{attrs:{id:"什么是npm私服"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是npm私服"}},[v._v("#")]),v._v(" 什么是npm私服")]),v._v(" "),_("p",[v._v("  私服与私有的git仓库有着非常相似的作用，当公司中开发了很多 JavaScript 的插件后，若想要良好的在公司内部分享，必要需要将代码打包构建，分享给\n其他部门开发者使用，但每次都构建成tgz文件在使用上会出现很多问题")]),v._v(" "),_("p",[v._v("  这时候公司内部则需要一个私有化的npm服务器用来管理公司内部开发的js依赖包，这主要因为公司开发的插件若不想开源或不希望服务公司外的用户时，\n若直接发布到 npmjs.com 网站上会造成很多隐私泄露问题，所以此时公司更希望存在 npm 的私人服务器，这就是npm的私服。")]),v._v(" "),_("h3",{attrs:{id:"verdaccio简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#verdaccio简介"}},[v._v("#")]),v._v(" verdaccio简介")]),v._v(" "),_("p",[v._v("  Verdaccio 是一个简单的、零配置本地私有 npm 软件包代理注册表。Verdaccio 开箱即用，拥有自己的小型数据库，能够代理其他注册表（例如：npmjs.org），缓存下载的模块。")]),v._v(" "),_("h3",{attrs:{id:"verdaccio-使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#verdaccio-使用"}},[v._v("#")]),v._v(" verdaccio 使用")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("npm i verdaccio -g")]),v._v(" 全局安装")]),v._v(" "),_("li",[_("code",[v._v("verdaccio")]),v._v(" 运行 verdaccio 服务器，运行在本地的4873端口："),_("code",[v._v("http://localhost:4873/")])]),v._v(" "),_("li",[v._v("切换本地npm源\n"),_("ul",[_("li",[_("code",[v._v("nrm add local http://localhost:4873/")]),v._v(" 添加 verdaccio 服务地址作为新npm源")]),v._v(" "),_("li",[_("code",[v._v("nrm use local")]),v._v(" 切换本地npm源")]),v._v(" "),_("li",[v._v("可以使用 "),_("code",[v._v("npm config get registry")]),v._v(" 查看源地址是否切换成功")])])]),v._v(" "),_("li",[v._v("添加当前源下的用户\n"),_("ul",[_("li",[_("code",[v._v("npm adduser")]),v._v(" 然后按提示输入 用户名、密码、邮箱，创建成功即登录")]),v._v(" "),_("li",[v._v("可以使用 "),_("code",[v._v("npm logout")]),v._v(" 进行登出操作，使用 "),_("code",[v._v("npm login")]),v._v(" 然后输入刚刚注册的信息进行登录")])])]),v._v(" "),_("li",[v._v("在网页里进行登录\n"),_("ul",[_("li",[v._v("前一步的登录只是在命令行中登录")])])]),v._v(" "),_("li",[_("code",[v._v("npm publish")]),v._v(" 发布到私服上，然后就可以在网页里搜索到你发布的包了")]),v._v(" "),_("li",[v._v("然后用户就可以使用 "),_("code",[v._v("npm i p-nrm")]),v._v(" 将私服上的包下载下来了\n"),_("ul",[_("li",[v._v("切记 npm 源一定要切换到私服")]),v._v(" "),_("li",[v._v("不用当心安装非私服上的包，因为 verdaccio 在私服上找不到这个包，就会自动代理到外网下载")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);