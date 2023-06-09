(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{289:function(v,_,l){"use strict";l.r(_);var i=l(14),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"前端代码走查checklist"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端代码走查checklist"}},[v._v("#")]),v._v(" 前端代码走查CHECKLIST")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("常规项")]),v._v(" "),_("ul",[_("li",[v._v("代码能否正常运行？（在各个环境运行正常，不报错）")]),v._v(" "),_("li",[v._v("代码是否符合编程规范？")]),v._v(" "),_("li",[v._v("是否存在多余或重复的代码？")]),v._v(" "),_("li",[v._v("是否存在注释掉不再使用的代码？")]),v._v(" "),_("li",[v._v("是否存在缩进不一致Tab、空格混用")]),v._v(" "),_("li",[v._v("变量命名是否简单易懂，是否存在未声明就使用的变量，是否存在重复声明的变量，是否存在声明未使用的变量")]),v._v(" "),_("li",[v._v("循环是否设置了长度和正确的终止条件？")]),v._v(" "),_("li",[v._v("数组索引是否在允许范围内？")]),v._v(" "),_("li",[v._v("是否有无用的调试代码")]),v._v(" "),_("li",[v._v("CSS属性是否拼写错误")]),v._v(" "),_("li",[v._v("HTML标签是否书写正确，是否符合语义化，是否嵌套正确，是否正确闭合？")]),v._v(" "),_("li",[v._v("数据输入是否都进行了检查（检测正确的类型、长度、格式、范围）并且进行了编码？")])])]),v._v(" "),_("li",[_("p",[v._v("性能")]),v._v(" "),_("ul",[_("li",[v._v("JS代码是否尽量放底部？CSS是否尽量放顶部？")]),v._v(" "),_("li",[v._v("对接口数据的请求，做到按需异步调用，常用数据做到一次请求后缓存，不重复调用接口；")]),v._v(" "),_("li",[v._v("上线或者发布前，是否对静态资源进行合并、打包、压缩处理？外部插件必须引用压缩版")]),v._v(" "),_("li",[v._v("正确使用预加载、懒加载等技术手段提高性能")]),v._v(" "),_("li",[v._v("是否对图片等资源进行压缩以及小图CSS Sprite 或 base64内嵌？")]),v._v(" "),_("li",[v._v("图标必须采用字体图标库fontawsome或iconfont")]),v._v(" "),_("li",[v._v("对可能频繁执行的方法必须做必要的防抖和节流处理，减少不必要的开支；比如：滚动触发事件、键盘触发事件、按钮点击事件")]),v._v(" "),_("li",[v._v("减少dom访问，多次访问必须局部变量存储，尤其禁止在循环中操作dom，必须离线操作dom树")]),v._v(" "),_("li",[v._v("是多个 if-else 是否确保最可能出现的条件放在首位，超过三个条件是否优先使用switch？")]),v._v(" "),_("li",[v._v("关键算法的时间复杂度多少？有没有可能有潜在的性能瓶颈？")])])]),v._v(" "),_("li",[_("p",[v._v("代码质量")]),v._v(" "),_("ul",[_("li",[v._v("参数过多时，可转化为对象传参，方法参数过多会降低其可维护性")]),v._v(" "),_("li",[v._v("代码逻辑不顺畅，存在走弯路的倾向，能精简的代码要反复重构以达到最优目标")]),v._v(" "),_("li",[v._v("代码是否简单易懂，逻辑清晰？（主流程简洁，注释明确）")]),v._v(" "),_("li",[v._v("重复造轮子问题，常见工具栏(三方库)使用不到位，经常自己写方法实现")]),v._v(" "),_("li",[v._v("需要异步处理的情况避免同步处理，以免影响主流程效率")]),v._v(" "),_("li",[v._v("有没有错误处理，容错处理？(try...catch，&& ||)")]),v._v(" "),_("li",[v._v("是否从npm删除未使用的安装包？")])])]),v._v(" "),_("li",[_("p",[v._v("vue")]),v._v(" "),_("ul",[_("li",[v._v("组件销毁时是否移除了监听器")]),v._v(" "),_("li",[v._v("代码中使用了定时器setTimeout和setInterval，在不使用的时候要清除")]),v._v(" "),_("li",[v._v("组件名为多个单词，避免和现有以及未来的HTML元素冲突")]),v._v(" "),_("li",[v._v("组件的data必须是一个函数")]),v._v(" "),_("li",[v._v("prop的定义应该尽量详细，至少需要指定其类型")]),v._v(" "),_("li",[v._v("v-for中总是说有设置key值。在组件上总是必须用key配合v-for，以便维护内部组件的状态")]),v._v(" "),_("li",[v._v("组件名应该倾向于完整单词而不是缩写")]),v._v(" "),_("li",[v._v("组件模板应该只包含简单的表达式，复杂的表达式应重构为计算属性或方法")]),v._v(" "),_("li",[v._v("指令推荐都使用缩写形式，(用 ：表示v-bing，用 @ 表示v-on，用 # 表示v-slot)")]),v._v(" "),_("li",[v._v("单文件组件应该总是让标签顺序保持为 "),_("code",[v._v("<template>")]),v._v("、"),_("code",[v._v("script")]),v._v("、"),_("code",[v._v("style")])]),v._v(" "),_("li",[v._v("不滥用vuex\n"),_("ul",[_("li",[v._v("父子组件通信推荐使用 prop和emit，而不是 this.$parent 或改变 prop")]),v._v(" "),_("li",[v._v("兄弟组件通信推荐使用 EventBus(on)，而不是滥用vuex")]),v._v(" "),_("li",[v._v("祖孙组件通信推荐使用 listeners 或 provide/inject(依赖注入)，而不是滥用vuex")])])]),v._v(" "),_("li",[v._v("页面跳转，推荐使用路由参数进行传参（页面跳转例如 A页面跳转到 B页面，需要将 A页面的数据传递到 B页面，推荐使用路由传参，而不是将要传递的参数保存在vuex，然后在 B页面取出，因为如果B页面刷新会导致vuex数据丢失，导致B页面无法正常显示数据）")]),v._v(" "),_("li",[v._v("script标签内部的声明顺序如下：\n"),_("ul",[_("li",[v._v("components > prop > data > computed > watch > 钩子函数(钩子函数按其顺序执行) > methods")])])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);