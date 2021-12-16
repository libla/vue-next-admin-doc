# 布局配置

::: tip 布局不生效
清空浏览器永久缓存或者点击 `布局配置-一键恢复默认`，前提是修改了 `/@/store/modules/themeConfig.ts` 配置文件内容。布局配置组件路径：`/@/layout/navBars/breadcrumb/setings.vue`。添加或者修改功能，请前往 `/@/layout/navBars/breadcrumb/setings.vue` 组件位置修改
:::

> 大图查看，鼠标右键：`在新标签页中打开图片`

<img src="https://img-blog.csdnimg.cn/b7738eba9c534cffb9e6b648552fa591.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16">

## 全局主题

### 目录结构

<p style="font-weight: bold;">一、`src/theme` 下，后期继续补充，样式都会写在这个文件夹下：</p>

> [vue-prev-admin](https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin/) vue2.x 的目录结构也会基于该结构进行修改

```ts
├── theme (页面样式)
	├── common (基础样式)
	│	├── transition.scss (页面过渡动画)
	│	└── var.scss (全局主题样式，用于全局改变样式)
	│
	├── media (媒体查询)
	│	├── chart.scss (大数据图表)
	│	├── cityLinkage.scss (Cascader 级联选择器城市选择)
	│	├── dialog.scss (弹窗)
	│	├── error.scss (404、401界面)
	│	├── form.scss (表单)
	│	├── home.scss (首页)
	│	├── index.scss (媒体查询定义主样式)
	│	├── layout.scss (框架布局)
	│	├── login.scss (登录界面)
	│	├── media.scss (媒体查询主出口)
	│	├── pagination.scss (分页)
	│	├── personal.scss (个人中心)
	│	├── scrollbar.scss (页面滚动条)
	│	└── tagsView.scss (tagsView 标签页)
	│
	├── mixins (scss混入)
	│	├── element-mixins.scss (定义重置的element plus混入复用样式)
	│	├── function.scs (全局主题颜色调用混入函数)
	│	└── mixins.scss (定义一些常用的全局混入样式)
	│
	├── app.scss (页面主样式，用于重置浏览器默认样式)
	├── base.scss (基础样式、过渡动画引入等)
	├── dark.scss (深色主题)
	├── element.scss (重置的element plus样式，用于改变主题)
	├── iconSelector.scss (图标选择器)
	├── index.scss (页面样式主出口)
	├── loading.scss (loading样式)
	├── other.scss (其它样式)
	└── waves.scss (按钮波浪样式)
```

### scss 部分函数说明

<p style="font-weight: bold;">一、scss @mixin</p>

> 1.1 定义：[scss 官方中文文档](https://www.sass.hk/docs/)，具体请查阅官方文档。使用方法：

```scss
/* Button 按钮
------------------------------- */
@mixin Button($main, $c1, $c2) {
  color: set-color($main);
  background: set-color($c1);
  border-color: set-color($c2);
}
```

> 1.2 页面中使用，先引入，然后在 `css` 类中通过 `@include` 使用

```scss
@import "mixins/element-mixins.scss";

// default
.el-button--default:hover,
.el-button--default:focus {
  @include Button(primary, primary-light-8, primary-light-6);
}
```

<p style="font-weight: bold;">二、scss @function</p>

> 2.1 定义函数

```scss
/* 颜色调用函数
------------------------------- */
@function set-color($key) {
  @return var(--color-#{$key});
}
```

> 2.2 不理解？请看这个 `css3 :root` [CSS var() 函数](https://www.runoob.com/cssref/func-var.html)

```scss
/* 定义一个名为 "--main-bg-color" 的属性，然后使用 var() 函数调用该属性： */
:root {
  --main-bg-color: red;
}

#div1 {
  background-color: var(--main-bg-color);
}

#div2 {
  background-color: var(--main-bg-color);
}
```

<p style="font-weight: bold;">三、为什么不使用这种写法放进 :root 中？</p>

::: tip 原因
因为 scss 不支持这种嵌套 `mix(var(--color-primary), var(--color-success), 10%)`，lighten / darken / saturate / desaturate 等，从而无法用 `document.documentElement.style.setProperty('--color-primary', 'blue');` 改变样式
:::

```scss
$colors: (
	primary: #409eff,
	success: #67c23a,
	info: #909399,
	warning: #e6a23c,
	danger: #f56c6c
)

:root {
	@each $key, $value in $colors {
		--color-#{$key}: #{$value};
	}
}
```

### 自定义全局主题

<p style="font-weight: bold;">一、实现方法，以下方法不晓得会不会影响页面渲染性能：</p>

- 1、定义全局 :root 初始变量，路径：`src/theme/common/var.scss`
- 2、编写覆盖 element plus 的样式：路径：`src/theme/element.scss`
- 3、页面通过 `document.documentElement.style.setProperty` 方法改变 `:root` 中的值

<p style="font-weight: bold;">二、具体实现</p>

::: tip 提示
第 1 第 2 步就不介绍了，直接去路径去看就懂了。接下来我们讲讲第 3 步：
:::

> 2.1、通过 `document.documentElement.style.setProperty` 改变颜色值 [setProperty 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/setProperty)

```ts
// setup 中
import { reactive, toRefs } from "vue"

export defalut {
	setup() {
		const state = reactive({
			color: ''
		})
		function colorChange() {
			// 设置颜色
			document.documentElement.style.setProperty(
				"--color-primary",
				state.color
			)
			// 设置颜色变浅
			document.documentElement.style.setProperty(
				"--color-primary-light-1",
				getLightColor(state.color1, 0.1)
			)
		}
		return {
			colorChange,
			...toRefs(state)
		}
	}
}
```

> 2.2、getLightColor 颜色变浅方法，路径在：`src/utils/theme.ts`

```ts
// 变浅颜色值，level为加深的程度，限0-1之间
export function getLightColor(color: any, level: number) {
  let reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return ElMessage.warning("输入错误的hex颜色值");
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++)
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
```

> 2.3、到此就完成了主题的全局变色了

tip 还有疑问？总的来说，就是通过重新定义 `css` 样式，用来覆盖 [element-plus](https://element-plus.gitee.io/#/zh-CN/component/changelog) 默认的样式，从而实现全局主题变色。其它方法实现全局主题，请自行 [百度一下：https://www.baidu.com/](https://www.baidu.com/)

### 框架中实现例子

<p style="font-weight: bold;">一、全局主题改变时</p>

> 1.1、主题改变时，会调用 `onColorPickerChange` 方法进行重新的覆盖 css `:root` 定义的变量的值

```ts
const onColorPickerChange = (color: string) => {
  document.documentElement.style.setProperty(
    color,
    getThemeConfig.value[color]
  );
};
```

> 1.2、拿到的值会赋值给根节点上 `html`，`document.documentElement.style`。刷新的时再设置 `document.documentElement.style.cssText = Local.get('themeConfigStyle');`，防止数据丢失

<img src="https://img-blog.csdnimg.cn/c6a07541180b448a9d2fc24e2c7686f8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16">

<p style="font-weight: bold;">二、更改主题配置文件路径</p>

> `/@/store/modules/themeConfig.ts`，注意看备注：直接修改时，需要同时修改 `/@/theme/common/var.scss` 对应的值

## 菜单 / 顶栏

### 顶栏

> 文件路径：`/@/layout/navBars/breadcrumb`

<p style="font-weight: bold;">一、顶栏背景、顶栏默认字体颜色、顶栏背景渐变</p>

功能说明：`设置顶栏的背景颜色、字体颜色、背景渐变`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/6efa9498cddb49738ea9d59114185e10.gif#pic_center">

### 菜单

> 文件路径：`/@/layout/navMenu`

<p style="font-weight: bold;">一、菜单背景、菜单默认字体颜色、菜单背景渐变、菜单字体背景高亮</p>

功能说明：`设置菜单的背景颜色、字体颜色、背景渐变、字体高亮背景色（颜色跟随全局主题(primary)）`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/8df792f8a8004a6d804f5d49775e21bb.gif#pic_center">

### 分栏

> 文件路径：`/@/layout/component/columnsAside.vue`

<p style="font-weight: bold;">一、分栏菜单背景、分栏菜单默认字体颜色、分栏菜单背景渐变</p>

功能说明：`设置分栏菜单的背景颜色、字体颜色、背景渐变`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/9dc53c3088164e5d9760eb0b08b38524.gif#pic_center">

## 界面设置

### 菜单设置

> 文件路径：`/@/layout/navMenu`

<p style="font-weight: bold;">一、菜单水平折叠、菜单手风琴、经典布局分割菜单</p>

功能说明：`菜单水平折叠、手风琴（开启一个展开）、经典布局分割菜单（顶级在顶栏处，子级在菜单栏）`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/a186682d39a54748b1efa4660a821d2d.gif#pic_center">

### 固定 Header

> 文件路径：`/@/layout/main`

<p style="font-weight: bold;">一、固定 Header</p>

功能说明：`固定 Header（主内容区滚动，顶栏不跟随滚动）`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/ff1c08f33cea4a4897e1fd702de7f549.gif#pic_center">

### 锁屏

> 文件路径：`/@/layout/lockScreen`

<p style="font-weight: bold;">一、开启锁屏、自动锁屏(s/秒)</p>

功能说明：`开启锁屏（类似于电脑屏保）、自动锁屏(s/秒)`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/4e1a05bffcd44ac6b5bd71272f39fe04.gif#pic_center">

## 界面显示

### 侧边栏 Logo

> 文件路径：`/@/layout/logo`

<p style="font-weight: bold;">一、侧边栏 Logo</p>

功能说明：`显示/隐藏侧边栏 Logo`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/33ea0e305dcc4f228a47f4bc6c39ad80.gif#pic_center">

### Breadcrumb 面包屑

> 文件路径：`/@/layout/navBars/Breadcrumb/breadcrumb.vue`

<p style="font-weight: bold;">一、开启 Breadcrumb、开启 Breadcrumb 图标</p>

功能说明：`开启 Breadcrumb、Breadcrumb 图标`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/67df8ad8c6e641de94545aad586add9c.gif#pic_center">

### Tagsview 标签页

> 文件路径：`/@/layout/navBars/tagsView`

<p style="font-weight: bold;">一、开启 Tagsview、开启 Tagsview 图标、开启 TagsView 缓存、开启 TagsView 拖拽、开启 TagsView 共用</p>

功能说明：`开启 Tagsview、Tagsview 图标、TagsView 缓存、TagsView 拖拽、TagsView 共用（共用详情界面：tagsView只会出现一个；非共用详情界面：tagsView会出现多个）`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/d760ab8798ac428593760226e870879f.gif#pic_center">

### Footer 版权

> 文件路径：`/@/layout/footer`

<p style="font-weight: bold;">一、开启 Footer 版权</p>

功能说明：`显示/隐藏底部版权`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/c1ca33ebf6e64ad3baba268235f348f3.gif#pic_center">

### 颜色模式

> 文件路径：`/@/layout/navBars/breadcrumb/setings.vue`

<p style="font-weight: bold;">一、灰色模式、色弱模式、深色模式</p>

功能说明：`开启灰色模式、色弱模式、深色模式`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/856f60ae98074f4e8c57c3fad16a8d94.gif#pic_center">

### 水印

> 文件路径：`/@/utils/wartermark.ts`

<p style="font-weight: bold;">一、开启水印、水印文案</p>

功能说明：`开启开启水印、设置水印文案`

<p style="font-weight: bold;">二、效果图</p>

<img src="https://img-blog.csdnimg.cn/19e0ced20c2d495599b69f09227f690b.gif#pic_center">

## 其它设置

::: tip 定位查看 css 样式
可使用 el-option 的 `value` 值去对应的 `文件路径` 里搜索查看
:::

### Tagsview 风格

> 文件路径：`/@/layout/navBars/tagsView`。需注意 `value` 值需与定义的 `css 类名` 一致

```html
<el-select v-model="getThemeConfig.tagsStyle">
  <el-option label="风格1" value="tags-style-one"></el-option>
  <el-option label="风格2" value="tags-style-two"></el-option>
  <el-option label="风格3" value="tags-style-three"></el-option>
  <el-option label="风格4" value="tags-style-four"></el-option>
  <!-- 新增的风格 -->
  <el-option label="风格xx" value="tags-style-xxx"></el-option>
  <!-- 继续添加 -->
  ...
</el-select>
```

### 主页面切换动画

> 文件路径：`/@/theme/common/transition.scss`，内置 `slide-right`、`slide-left`、`opacitys` 切换风格。你可能需要了解 [进入过渡 & 离开过渡](https://v3.cn.vuejs.org/guide/transitions-enterleave.html)。新增动画时，需要在 `/@/layout/navBars/breadcrumb/setings.vue` 其它设置中添加如下：

```html
<el-select v-model="getThemeConfig.animation">
  <el-option label="slide-right" value="slide-right"></el-option>
  <el-option label="slide-left" value="slide-left"></el-option>
  <el-option label="opacitys" value="opacitys"></el-option>
  <!-- 新增的动画名 -->
  <el-option label="xxx" value="xxx"></el-option>
  <!-- 继续添加 -->
  ...
</el-select>
```

### 分栏高亮风格

> 文件路径：`/@/layout/component/columnsAside.vue`。需注意 `value` 值需与定义的 `css 类名` 一致

```html
<el-select v-model="getThemeConfig.columnsAsideStyle">
  <el-option label="圆角" value="columns-round"></el-option>
  <el-option label="卡片" value="columns-card"></el-option>
  <!-- 新增的高亮风格 -->
  <el-option label="xxx" value="xxx"></el-option>
  <!-- 继续添加 -->
  ...
</el-select>
```

### 分栏布局风格

> 文件路径：`/@/layout/component/columnsAside.vue`。需注意 `value` 值需与定义的 `css 类名` 一致

```html
<el-select v-model="getThemeConfig.columnsAsideLayout">
  <el-option label="水平" value="columns-horizontal"></el-option>
  <el-option label="垂直" value="columns-vertical"></el-option>
  <!-- 新增的分栏布局风格 -->
  <el-option label="xxx" value="xxx"></el-option>
  <!-- 继续添加 -->
  ...
</el-select>
```

## 布局切换

> 此项目包含四个布局：默认、经典、横向、分栏。查看大图，鼠标右键：`在新标签页中打开图片`

<img src="https://gitee.com/lyt-top/vue-next-admin-images/raw/master/docs/defaults.png" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://gitee.com/lyt-top/vue-next-admin-images/raw/master/docs/classic.png" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://gitee.com/lyt-top/vue-next-admin-images/raw/master/docs/transverse.png" width="50%" style="border: 1px solid var(--c-brand);">
<img src="https://gitee.com/lyt-top/vue-next-admin-images/raw/master/docs/columns.png" width="50%" style="border: 1px solid var(--c-brand);">
