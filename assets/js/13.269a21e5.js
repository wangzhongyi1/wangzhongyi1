(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{292:function(t,i,v){"use strict";v.r(i);var _=v(14),e=Object(_.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"git-日常使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-日常使用"}},[t._v("#")]),t._v(" git 日常使用")]),t._v(" "),i("h2",{attrs:{id:"git-基本使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-基本使用"}},[t._v("#")]),t._v(" git 基本使用")]),t._v(" "),i("ul",[i("li",[t._v("在 github 上新建一个仓库")]),t._v(" "),i("li",[t._v("在本地使用 "),i("code",[t._v("git clone xxx")]),t._v(" 命令拉取远程仓库到本地")]),t._v(" "),i("li",[t._v("修改文件后使用 "),i("code",[t._v("git add xxx")]),t._v(" 添加更改\n"),i("ul",[i("li",[i("code",[t._v("git add .")]),t._v(" 添加本次修改的所有文件到暂存区")]),t._v(" "),i("li",[i("code",[t._v("git add <filename>")]),t._v(" 指定本次修改的文件到暂存区")])])]),t._v(" "),i("li",[t._v("使用 "),i("code",[t._v('git commit -m "xxx"')]),t._v(" 添加本次提交注释")]),t._v(" "),i("li",[t._v("使用 "),i("code",[t._v("git push")]),t._v(" 推送到远程仓库\n"),i("ul",[i("li",[i("code",[t._v("git push origin main")]),t._v(" 指定推送到远程的 main 仓库")]),t._v(" "),i("li",[i("code",[t._v("git push")]),t._v(" 实际上是简写\n"),i("ul",[i("li",[i("code",[t._v("gut push -u origin master")]),t._v(" 推送到远程的 master 仓库，并且记住当前操作")]),t._v(" "),i("li",[t._v("下次直接使用 "),i("code",[t._v("git push")]),t._v(" 就会自动推送到远程 master 仓库，就不用每次都指定推送的远程仓库了")])])])])])]),t._v(" "),i("h2",{attrs:{id:"查看本次修改内容"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#查看本次修改内容"}},[t._v("#")]),t._v(" 查看本次修改内容")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git diff")])])]),t._v(" "),i("h2",{attrs:{id:"撤销本次修改内容"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#撤销本次修改内容"}},[t._v("#")]),t._v(" 撤销本次修改内容")]),t._v(" "),i("h3",{attrs:{id:"未使用-git-add-缓存代码时"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#未使用-git-add-缓存代码时"}},[t._v("#")]),t._v(" 未使用 git add 缓存代码时")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git checkout -- readme.md")])])]),t._v(" "),i("blockquote",[i("p",[t._v("本地修改会消失")])]),t._v(" "),i("h3",{attrs:{id:"已经使用了-git-add-缓存代码时"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#已经使用了-git-add-缓存代码时"}},[t._v("#")]),t._v(" 已经使用了 git add 缓存代码时")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git reset HEAD readme.md")])]),t._v(" "),i("li",[t._v("放弃所有的缓存 "),i("code",[t._v("git reset HEAD .")])])]),t._v(" "),i("blockquote",[i("p",[t._v("此命令用来清除 git 对于文件修改的缓存。仅仅撤出 add 区域，本地修改不会消失")])]),t._v(" "),i("h2",{attrs:{id:"git-查看分支图"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-查看分支图"}},[t._v("#")]),t._v(" git 查看分支图")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git log --graph --decorate --oneline --simplify-by-decoration --all")])])]),t._v(" "),i("h2",{attrs:{id:"版本回退"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[t._v("#")]),t._v(" 版本回退")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git reset --hard HEAD^")]),t._v(" 回退到上一个版本")]),t._v(" "),i("li",[t._v("回退到指定版本\n"),i("ul",[i("li",[i("code",[t._v("git log")]),t._v(" 查看日志，"),i("code",[t._v("git reflog")]),t._v(" 查看所有操作的日志")]),t._v(" "),i("li",[i("code",[t._v("git reset --hard 版本号")])]),t._v(" "),i("li",[i("code",[t._v("git push -f")]),t._v(" 强制推送到远程仓库")])])])]),t._v(" "),i("h2",{attrs:{id:"commit-以后-想撤销"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commit-以后-想撤销"}},[t._v("#")]),t._v(" commit 以后，想撤销")]),t._v(" "),i("h3",{attrs:{id:"撤销到-add-状态-即不改变修改的代码-仅仅撤出-commit-区域"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#撤销到-add-状态-即不改变修改的代码-仅仅撤出-commit-区域"}},[t._v("#")]),t._v(" 撤销到 add 状态，即不改变修改的代码，仅仅撤出 commit 区域")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git reset --soft HEAD^")])])]),t._v(" "),i("h3",{attrs:{id:"直接撤销本次修改-会回退到上个本版的代码"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#直接撤销本次修改-会回退到上个本版的代码"}},[t._v("#")]),t._v(" 直接撤销本次修改，会回退到上个本版的代码")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git reset --hard HEAD^")])])]),t._v(" "),i("blockquote",[i("p",[t._v("可查看：https://www.jianshu.com/p/a9f327da3562")])]),t._v(" "),i("h2",{attrs:{id:"git-反做某次提交"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-反做某次提交"}},[t._v("#")]),t._v(" git 反做某次提交")]),t._v(" "),i("ul",[i("li",[t._v("如果你有 commit1，commit2(最新)，但此时要回退commit1的内容，同时要保留commit2内容")]),t._v(" "),i("li",[i("code",[t._v("git revert -n 版本号")]),t._v(" 需要回退的commit1版本号")]),t._v(" "),i("li",[t._v("可能会有冲突，需要手动解决，要重新 git add")]),t._v(" "),i("li",[t._v("然后正常 "),i("code",[t._v("git commit")]),t._v(" 来生成一条记录，同时commit1改动的内容已经被取消了")]),t._v(" "),i("li",[t._v("也可以你自己去手动把 commit1 改动的内容删除掉，"),i("code",[t._v("git revert")]),t._v(" 可以理解为代替你做了这件事")])]),t._v(" "),i("h2",{attrs:{id:"git修改-commit注释"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git修改-commit注释"}},[t._v("#")]),t._v(" git修改 commit注释")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git rebase -i HEAD~2")]),t._v(" 会展示最近的两次提交注释,最后面的数字可更改\n"),i("ul",[i("li",[t._v("按键盘 "),i("code",[t._v("i")]),t._v(" 键，进入编辑模式")]),t._v(" "),i("li",[t._v("把你想要修改的注释的前面的 "),i("code",[t._v("pick")]),t._v(" 更改为 "),i("code",[t._v("edit")])]),t._v(" "),i("li",[t._v("然后按 "),i("code",[t._v("esc")]),t._v(" 退出编辑模式，再输入 "),i("code",[t._v(":wq")]),t._v(" 保存并退出")])])]),t._v(" "),i("li",[i("code",[t._v("git commit --amend")]),t._v(" 开始编辑注释")]),t._v(" "),i("li",[i("code",[t._v("git rebase --continue")])]),t._v(" "),i("li",[i("code",[t._v("git push --force origin master")]),t._v(" 强制推送远程仓库，当然你也可以不强制")])]),t._v(" "),i("h2",{attrs:{id:"git-push-某个特定的commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-push-某个特定的commit"}},[t._v("#")]),t._v(" git push 某个特定的commit")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git push <remotename> <commit SHA>:<remotebranchname>")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("remotename")]),t._v(" 远程仓库名，默认为 origin")]),t._v(" "),i("li",[i("code",[t._v("commit SHA")]),t._v(" commit的id")]),t._v(" "),i("li",[i("code",[t._v("remotebranchname")]),t._v(" 远程分支名")]),t._v(" "),i("li",[t._v("例如："),i("code",[t._v("git push origin 503edc5aaf:master")])])])])]),t._v(" "),i("blockquote",[i("p",[t._v("上面的命令会将暂存区内 "),i("code",[t._v("commit SHA")]),t._v(" 代表的提交 "),i("em",[i("strong",[t._v("以及其之前尚未推送到远程的提交一起提交到远程")])])])]),t._v(" "),i("ul",[i("li",[t._v("如果想要通过上面命令推送一个指定的commit，就需要保证这个提交之前没有其他的提交了。如果不是，可以通过"),i("code",[t._v("git rebase i")]),t._v("改变提交的位置，使其之前没有其他提交\n"),i("ul",[i("li",[i("code",[t._v("git rebase i")]),t._v(" 会列出暂存区中所有未push的commit")]),t._v(" "),i("li",[t._v("i键 进入编辑模式，光标定位到当前行，输入命令 "),i("code",[t._v(":m 0")]),t._v(" 就会移入行首，然后输入 "),i("code",[t._v(":x")]),t._v(" 退出")]),t._v(" "),i("li",[t._v("最后通过上面的命令 push 这个特定的 commit")]),t._v(" "),i("li",[t._v("参考：https://blog.csdn.net/u010730126/article/details/100743019")])])])]),t._v(" "),i("h2",{attrs:{id:"git-合并某个分支的某次-commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-合并某个分支的某次-commit"}},[t._v("#")]),t._v(" git 合并某个分支的某次 commit")]),t._v(" "),i("ul",[i("li",[t._v("例如：在 master分支想要合并 dev分支上的某次提交\n"),i("ul",[i("li",[t._v("切换到 dev分支，拷贝下来你想要被合并的 commitId")]),t._v(" "),i("li",[t._v("切换到 master分支，执行 "),i("code",[t._v("git cherry-pick 62ecb3")]),t._v(" 来进行操作")])])])]),t._v(" "),i("h2",{attrs:{id:"git-设置和取消代理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-设置和取消代理"}},[t._v("#")]),t._v(" git 设置和取消代理")]),t._v(" "),i("blockquote",[i("p",[t._v("使用情况：当你 "),i("code",[t._v("git clone xxx")]),t._v(" 时，由于天朝网络原因可能克隆不下来，就可以利用 ssr v2ray vpn 等工具\n开启科学上网工具后，然后设置 git 代理，就会走代理，到外网去拉取资源")])]),t._v(" "),i("h3",{attrs:{id:"查看代理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#查看代理"}},[t._v("#")]),t._v(" 查看代理")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git config --global --get http.proxy")])]),t._v(" "),i("li",[i("code",[t._v("git config --global --get https.proxy")])])]),t._v(" "),i("h3",{attrs:{id:"开启代理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开启代理"}},[t._v("#")]),t._v(" 开启代理")]),t._v(" "),i("ul",[i("li",[t._v("开启 socks 代理\n"),i("ul",[i("li",[i("code",[t._v("git config --global http.proxy 'socks5://127.0.0.1:10809'")]),t._v(" 后面的 127.0.0.1:10809 就是指向科学上网工具的服务地址")]),t._v(" "),i("li",[i("code",[t._v("git config --global https.proxy 'socks5://127.0.0.1:10809'")])])])]),t._v(" "),i("li",[t._v("开启 http/https 代理\n"),i("ul",[i("li",[i("code",[t._v("git config --global http.proxy http://127.0.0.1:10809")])]),t._v(" "),i("li",[i("code",[t._v("git config --global https.proxy http://127.0.0.1:10809")])])])])]),t._v(" "),i("h3",{attrs:{id:"取消代理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#取消代理"}},[t._v("#")]),t._v(" 取消代理")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git config --global --unset http.proxy")])]),t._v(" "),i("li",[i("code",[t._v("git config --global --unset https.proxy")])])])])}),[],!1,null,null,null);i.default=e.exports}}]);