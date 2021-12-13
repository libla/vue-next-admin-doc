# 字体图标

## element plus svg 图标

::: danger Font Icon 向 SVG Icon 迁移
svg 文档地址：[element plus 官网 Icon 图标](https://element-plus.gitee.io/zh-CN/component/icon.html)。`"element-plus": "^1.2.0-beta.4"`。框架版本 [v1.2.0](https://gitee.com/lyt-top/vue-next-admin/releases) 开始迁移。
:::

<p style="font-weight: bold;">一、框架中全局注册 svg</p>

> 1.1、`/@/utils/other.ts`，mian.ts 中引入 `import other from '/@/utils/other';`。添加了 `element` 前缀，防止图标冲突, `el` 前缀已被使用，可以使用 `elxxx`。但是不建议已 `el` svg 前缀，因为会与 element plus 内置组件冲突

```ts
import type { App } from "vue";
import * as svg from "@element-plus/icons";

/**
 * 导出全局注册 element plus svg 图标
 * @param app vue 实例
 * @description 使用：https://element-plus.gitee.io/zh-CN/component/icon.html
 */
export function elSvg(app: App) {
  const icons = svg as any;
  for (const i in icons) {
    app.component(`element${icons[i].name}`, icons[i]);
  }
}

// main.ts
import other from "/@/utils/other";
const app = createApp(App);
other.elSvg(app);
```

<p style="font-weight: bold;">二、页面中使用 svg</p>

::: tip svg 图标说明
如：elementUser，由两部分组成：

1、`element`：`一、框架中全局注册 svg` 中添加的 svg 图标前缀。

2、`User`：为 svg 图标，请注意它的开头都是大写的，[element plus 官网 Icon 图标](https://element-plus.gitee.io/zh-CN/component/icon.html)。
:::

> 2.1、框架中： `elementUser` 为全局注册的 svg，注意这里添加了 `<el-icon></el-icon>` 包裹着。

`2.1.1、框架中直接使用全局注册的 svg，会报：Property "elementUser" was accessed during render but is not defined on instance.`

```html {7}
<el-input
  type="text"
  :placeholder="$t('message.account.accountPlaceholder1')"
  v-model="ruleForm.userName"
  clearable
  autocomplete="off"
  :prefix-icon="elementUser"
>
</el-input>
```

`2.1.2、所以使用了 <el-icon></el-icon> 包裹着`

```html {9}
<el-input
  type="text"
  :placeholder="$t('message.account.accountPlaceholder1')"
  v-model="ruleForm.userName"
  clearable
  autocomplete="off"
>
  <template #prefix>
    <el-icon class="el-input__icon"><elementUser /></el-icon>
  </template>
</el-input>
```

> 2.2、[element plus 官网 Icon 图标](https://element-plus.gitee.io/zh-CN/component/icon.html)：`Calendar` 为 svg 图标

`2.2.1、需要先引入`

```ts
// 引入方法一
<script setup lang="ts">
  import { Calendar } from "@element-plus/icons";
</script>

// 引入方法二
<script lang="ts">
  import { Calendar } from "@element-plus/icons";
  return {
    Calendar
  }
</script>
```

`2.2.2、然后页面中使用`

```html
<el-input v-model="input1" placeholder="Pick a date" :suffix-icon="Calendar" />
```

<p style="font-weight: bold;">三、全局获取 svg</p>

> 3.1、图标选择器使用，`/@/utils/getStyleSheets.ts`（原初始化获取 css 样式，获取 element plus 自带图标方法）在 [tag v1.1.2](https://gitee.com/lyt-top/vue-next-admin/releases) 中查看。element plus svg 图标也可以在框架中的 [页面/element 字体图标](https://lyt-top.gitee.io/vue-next-admin-preview/#/pages/element) 演示中查看

```ts
import { nextTick } from "vue";
import * as svg from "@element-plus/icons";

// 初始化获取 css 样式，获取 element plus 自带 svg 图标
// 增加了 element 前缀，使用时：elementAim
const getElementPlusIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const icons = svg as any;
      const sheetsIconList = [];
      for (const i in icons) {
        sheetsIconList.push(`element${icons[i].name}`);
      }
      if (sheetsIconList.length > 0) resolve(sheetsIconList);
      else reject("未获取到值，请刷新重试");
    });
  });
};
```

## iconfont & font-awesome 图标

<p style="font-weight: bold;">一、设置在线链接</p>

> 1.1、此处为使用在线链接教程，使用本地请查看：[自定义引入本地图标](#自定义引入本地图标)

```ts
// `/@/utils/setIconfont.ts` cssCdnUrlList 方法中添加在线链接
// 字体图标 url
const cssCdnUrlList: Array<string> = [
  "//at.alicdn.com/t/font_2298093_y6u00apwst.css",
  "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
];
```

<p style="font-weight: bold;">二、App.vue 中引入</p>

```ts
import setIntroduction from "/@/utils/setIconfont";

// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
  // 设置批量第三方 icon 图标
  setIntroduction.cssCdn();
});
```

<p style="font-weight: bold;">三、界面中使用</p>

::: danger 注意前缀

- iconfont：需要添加 `iconfont` 前缀，如：`iconfont xitongshezhi`

- font-awesome：需要添加 `fa` 前缀，如：`fa xitongshezhi`
  :::

```html
<!-- 项目使用 -->
<i class="iconfont xitongshezhi"></i>
<!-- <i class="fa xitongshezhi"></i> -->

<!-- 或者 -->
<SvgIcon name="iconfont xitongshezhi"></SvgIcon>
<!-- <SvgIcon name="fa xitongshezhi"></SvgIcon> -->
```

<p style="font-weight: bold;">四、全局获取 iconfont & font-awesome 图标</p>

> 4.1、`/@/utils/getStyleSheets.ts` 中的 `getAlicdnIconfont` 与 `getAwesomeIconfont` 方法。对应的图标在线演示 [/pages/iocnfont](https://lyt-top.gitee.io/vue-next-admin-preview/#/pages/iocnfont)

```ts
// 获取阿里字体图标
const getAlicdnIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const styles: any = document.styleSheets;
      let sheetsList = [];
      let sheetsIconList = [];
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].href && styles[i].href.indexOf("at.alicdn.com") > -1) {
          sheetsList.push(styles[i]);
        }
      }
      for (let i = 0; i < sheetsList.length; i++) {
        for (let j = 0; j < sheetsList[i].cssRules.length; j++) {
          if (
            sheetsList[i].cssRules[j].selectorText &&
            sheetsList[i].cssRules[j].selectorText.indexOf(".icon-") > -1
          ) {
            sheetsIconList.push(
              `${sheetsList[i].cssRules[j].selectorText
                .substring(1, sheetsList[i].cssRules[j].selectorText.length)
                .replace(/\:\:before/gi, "")}`
            );
          }
        }
      }
      if (sheetsIconList.length > 0) resolve(sheetsIconList);
      else reject("未获取到值，请刷新重试");
    });
  });
};

// 初始化获取 css 样式，这里使用 fontawesome 的图标
const getAwesomeIconfont = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const styles: any = document.styleSheets;
      let sheetsList = [];
      let sheetsIconList = [];
      for (let i = 0; i < styles.length; i++) {
        if (
          styles[i].href &&
          styles[i].href.indexOf("netdna.bootstrapcdn.com") > -1
        ) {
          sheetsList.push(styles[i]);
        }
      }
      for (let i = 0; i < sheetsList.length; i++) {
        for (let j = 0; j < sheetsList[i].cssRules.length; j++) {
          if (
            sheetsList[i].cssRules[j].selectorText &&
            sheetsList[i].cssRules[j].selectorText.indexOf(".fa-") === 0 &&
            sheetsList[i].cssRules[j].selectorText.indexOf(",") === -1
          ) {
            if (/::before/.test(sheetsList[i].cssRules[j].selectorText)) {
              sheetsIconList.push(
                `${sheetsList[i].cssRules[j].selectorText
                  .substring(1, sheetsList[i].cssRules[j].selectorText.length)
                  .replace(/\:\:before/gi, "")}`
              );
            }
          }
        }
      }
      if (sheetsIconList.length > 0) resolve(sheetsIconList.reverse());
      else reject("未获取到值，请刷新重试");
    });
  });
};
```

> 4.2、`/@/utils/getStyleSheets.ts` 中导出使用

```ts
/**
 * 获取字体图标 `document.styleSheets`
 * @method ali 获取阿里字体图标 `<i class="iconfont 图标类名"></i>`
 * @method ele 获取 element plus 自带图标 `<i class="图标类名"></i>`
 * @method ali 获取 fontawesome 的图标 `<i class="fa 图标类名"></i>`
 */
const initIconfont = {
  // iconfont
  ali: () => {
    return getAlicdnIconfont();
  },
  // element plus
  ele: () => {
    return getElementPlusIconfont();
  },
  // fontawesome
  awe: () => {
    return getAwesomeIconfont();
  },
};

// 导出方法
export default initIconfont;
```

## 自定义封装 svg 图标

<p style="font-weight: bold;">一、封装 svg 组件</p>

> [结合 el-icon 使用](https://element-plus.gitee.io/zh-CN/component/icon.html)，`el-icon` 为 raw SVG 图标提供额外的属性, 提供的详细属性请继续阅读。路径：`/@/components/svgIcon`

```html
<script lang="ts">
  // 渲染函数：https://v3.cn.vuejs.org/guide/render-function.html
  import { h, resolveComponent, defineComponent } from "vue";
  export default defineComponent({
    name: "svgIcon",
    props: {
      // svg 图标组件名字
      name: {
        type: String,
      },
      // svg 大小
      size: {
        type: Number,
      },
      // svg 颜色
      color: {
        type: String,
      },
    },
    setup(props) {
      if (props.name?.indexOf("element") > -1) {
        return () =>
          h(
            "i",
            {
              class: "el-icon",
              style: `--font-size: ${props.size};--color: ${props.color}`,
            },
            [h(resolveComponent(props.name))]
          );
      } else {
        return () =>
          h("i", {
            class: props.name,
            style: `font-size: ${props.size};color: ${props.color}`,
          });
      }
    },
  });
</script>
```

<p style="font-weight: bold;">二、局部注册 & 全局注册 svg 组件</p>

> 2.1、局部注册

```html
<script lang="ts">
  import { defineComponent } from "vue";
  import SvgIcon from "/@/components/svgIcon/index.vue";
  export default defineComponent({
    name: "xxx",
    components: { SvgIcon },
  });

  // 页面上使用
  <SvgIcon :name="item.meta.icon" />
</script>
```

> 2.2、全局注册（框架中使用全局注册）

`/@/utils/other.ts` 中的 `elSvg` 方法

```ts
// 全局注册
import SvgIcon from '/@/components/svgIcon/index.vue';
app.component("SvgIcon", SvgIcon);

// 页面上使用
<SvgIcon :name="item.meta.icon" />

// 或者
<SvgIcon name="elementAim" :size="14" color="#333333"/>
```

## 自定义引入本地图标

<p style="font-weight: bold;">一、下载 iconfont 到本地</p>

> 1.1、建议 icon 或者 svg 图标放入到 `/src/theme` 文件夹中，方便管理。[iconfont 下载](https://www.iconfont.cn/)，其它渠道类似操作

如果引入本地 iconfont，需要先删除 `/@/utils/setIconfont.ts` cssCdnUrlList 方法中的在线链接，把刚下载的 `iconfont` 图标文件夹重新命名为 `iconfont` 粘贴到 `/src/theme` 文件夹中

<p style="font-weight: bold;">二、引入 iconfont 本地图标</p>

> 2.1、建议在 `/src/theme/index.scss` 中引入（不建议直接在 main.ts 中引入）

```scss
// 在 `/src/theme/index.scss`
@import "./iconfont/iconfont.css";
```

> 2.2、图标查看，直接进入 `/src/theme/iconfont/demo_index.html` 进行对应的图标查看，然后 cv 到自己项目中使用

```html
<!-- 项目使用 -->
<i class="iconfont xitongshezhi"></i>

<!-- 或者 -->
<SvgIcon name="iconfont xitongshezhi"></SvgIcon>
```
