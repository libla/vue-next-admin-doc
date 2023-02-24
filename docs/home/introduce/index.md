# 介绍

::: danger README.md
项目切换分支后，`README.md` 文件内容都会不一样，请注意看 `README.md` 文件中的第一项 `介绍` 内容，会大概介绍当前分支是干啥的。
:::

## 长期赞助商

vueNextAdmin 是免费和开源的，由优秀的赞助商提供支持 ❤️。

<a href="http://www.ccflow.org/" target="_black" class="next-sponsors-item">
  <img src="/images/ccflowRightNextAdmin.png" alt="驰骋流程+表单+低代码" title="驰骋流程+表单+低代码">
</a>

## 项目介绍

&emsp;&emsp;🎉🎉🔥 项目基于 [vue3.x](https://v3.cn.vuejs.org/) 、[Typescript](https://www.tslang.cn/docs/home.html)、[vite](https://vitejs.cn/)、[Element plus](https://element-plus.gitee.io/zh-CN/#/zh-CN) 等，适配手机、平板、pc 的后台开源免费模板库（[vue2.x](https://cn.vuejs.org/) 请切换 [vue-prev-admin](https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin/) 分支）。此项目永远免费用于学习研究，免费用于商业使用。

&emsp;&emsp;此项目从 2020-12-08 开始作者花了大概 2 个月，中途修修改改，2021-02-28 日正式发布！白天上班，晚上开工（加上周末），由于当时的 vite 1.x 少人用，期间也踩过不少的坑。此项目中你会发现有很多的 `any`，因为作者也是第一次使用 [Typescript](https://www.tslang.cn/docs/home.html)，还请各位大佬不要说 `anyscript` 了 🙏🙏，待作者变强，将彻底改掉 `any`。
您有好的建议，欢迎提 [Issues](https://gitee.com/lyt-top/vue-next-admin/issues)、[Pull Requests](https://gitee.com/lyt-top/vue-next-admin/pulls)。

&emsp;&emsp;做此项目的目的：为了学习 [vue3.x](https://v3.cn.vuejs.org/) 、[Typescript](https://www.tslang.cn/docs/home.html)、[vite](https://vitejs.cn/)，作者也是一个工作了 3 年的小菜鸡，还有很多需要向大佬们学习的地方。作者接受一切有益的建议和善意的批评，但绝不接受 "教师爷" 般颐指气使的说教。

## 项目布局

> 此项目包含四个布局：默认、经典、横向、分栏。查看大图，鼠标右键：`在新标签页中打开图片`

<img src="https://img-blog.csdnimg.cn/c3248cfc00cf404fbc3a28a286a95fb2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://img-blog.csdnimg.cn/25ca8d809aae428c8589c376eab3980e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://img-blog.csdnimg.cn/c636cb89741644f49a627b0a690c5aae.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://img-blog.csdnimg.cn/e05cd231ff234110973ea0db6dc5c3a7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16" width="50%" style="border: 1px solid var(--c-brand);">

> 其它截图

<img src="https://img-blog.csdnimg.cn/3c3d1e20a9514437a4c3db0767943ea7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://img-blog.csdnimg.cn/0b2f77e2aeda4576836cd86ecf9c4a00.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16" width="50%" style="border: 1px solid var(--c-brand);">

## 项目预览

- [vue3.x 版本预览（vue-next-admin）](https://lyt-top.gitee.io/vue-next-admin-preview/#/login)
- [vue2.x 版本预览（vue-prev-admin）](https://lyt-top.gitee.io/vue-prev-admin-preview/#/login)

## 仓库代码各分支说明（后续将添加更多分支）

项目切换分支后，README.md 文件内容都会不一样，请注意看 README.md 文件中的第一项 介绍 内容，会大概介绍当前分支是干啥的。`基础版同步 master 分支主版本`

```ts
├── vueNextAdmin
	├── master (基于 vue3.x、vite、ts、Element plus等，主项目模板)
	├── develop (开发分支，开发完将删除)
	├── vue-prev-admin (基于 vue2.x、vue-cli、element ui 项目模板)
	├── vue-next-admin-template (vue-next-admin 基础版 ts，不带国际化)
	├── vue-next-admin-template-js (基于 vue-next-admin-template 修改 js 版，不带国际化)
	├── vue-next-admin-nest (基于 nestjs+vue-next-admin 开发的权限控制系统（带后台@甜蜜蜜）)
	├── vue-next-admin-mould (基于 vue3.x、vite、ts 配置了 eslint、prettier 通用项目模板)
	├── electron (跨平台的桌面应用程序)
	└── personal ( personal-个人项目)
```
