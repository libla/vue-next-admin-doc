# 国际化

::: tip 开始之前
不需要国际化，可以选择 [vue-next-admin-template](https://gitee.com/lyt-top/vue-next-admin/tree/vue-next-admin-template/) 分支基础版，不带国际化，同步 `master` 分支更新。您可能需要了解 [vue-i18n](https://kazupon.github.io/vue-i18n/zh/)、[element-plus Config Provider 全局配置](https://element-plus.gitee.io/zh-CN/component/config-provider.html)、[element-plus 国际化](https://doc-archive.element-plus.org/#/zh-CN/component/i18n)
:::

## 国际化配置

> 框架内置中文简体、英文、中文繁体

### ConfigProvider 配置

> ConfigProvider：`/@/App.vue` 中，使用 `el-config-provider` 包裹路由视图主出口。ElementPlus 还提供了一个 Vue 组件 [ConfigProvider](https://element-plus.gitee.io/zh-CN/guide/i18n.html#configprovider) 用于全局配置国际化的设置。

```html
<!-- i18nLocale 为字符串：zh-cn 简体中文，en English，zh-tw 繁體中文
前提是在 main.ts 中引入了 app.use(i18n) -->
<el-config-provider :locale="i18nLocale">
  <router-view />
</el-config-provider>
```

### 全局配置

> ElementPlus 提供了全局配置国际化的设置。可参考 [vue-next-admin-template 基础版 ts（不带国际化）](https://gitee.com/lyt-top/vue-next-admin/tree/vue-next-admin-template/) `main.ts` 配置，默认中文。

```ts
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

app.use(ElementPlus, {
  locale: zhCn,
});
```

### 多国语言配置

> 1.1、目录结构说明，`/@/i18n`

```ts
├── src/i18n
    ├── lang (框架内置国际化)
    │   ├── en.ts (英文)
    │   ├── zh-cn.ts (中文简体)
    │   └── zh-tw.ts (中文繁体)
    │
    ├── pages (页面国际化模拟数据)
    │
    └── index.ts (国际化出口)
```

> 1.2、`/@/i18n/index.ts` 配置多国语言

```ts
// 引入 element plus 自带多国语言
import zhcnLocale from "element-plus/lib/locale/lang/zh-cn";
import enLocale from "element-plus/lib/locale/lang/en";
import zhtwLocale from "element-plus/lib/locale/lang/zh-tw";

// 引入自定义多国语言（框架）
import nextZhcn from "/@/i18n/lang/zh-cn";
import nextEn from "/@/i18n/lang/en";
import nextZhtw from "/@/i18n/lang/zh-tw";

// 引入自定义多国语言（页面）
// 建议一个模块起一个文件夹，文件夹名与模块名相同。如：home
import pagesHomeZhcn from "/@/i18n/pages/home/zh-cn";
import pagesHomeEn from "/@/i18n/pages/home/en";
import pagesHomeZhtw from "/@/i18n/pages/home/zh-tw";
import pagesLoginZhcn from "/@/i18n/pages/login/zh-cn";
import pagesLoginEn from "/@/i18n/pages/login/en";
import pagesLoginZhtw from "/@/i18n/pages/login/zh-tw";
import pagesFormI18nZhcn from "/@/i18n/pages/formI18n/zh-cn";
import pagesFormI18nEn from "/@/i18n/pages/formI18n/en";
import pagesFormI18nZhtw from "/@/i18n/pages/formI18n/zh-tw";

// 这里添加更多页面多国语言
...
```

> 1.3、多国语言初始化，注意 element plus 字段语言不要放入到 `message` 字段里。`message` 字段为自定义多国语言。

```ts
const messages = {
  [zhcnLocale.name]: {
    ...zhcnLocale,
    message: {
      ...nextZhcn,
      ...pagesHomeZhcn,
      ...pagesLoginZhcn,
      ...pagesFormI18nZhcn,
    },
  },
  [enLocale.name]: {
    ...enLocale,
    message: {
      ...nextEn,
      ...pagesHomeEn,
      ...pagesLoginEn,
      ...pagesFormI18nEn,
    },
  },
  [zhtwLocale.name]: {
    ...zhtwLocale,
    message: {
      ...nextZhtw,
      ...pagesHomeZhtw,
      ...pagesLoginZhtw,
      ...pagesFormI18nZhtw,
    },
  },
};
```

> 1.4、`main.ts` 中引用

```ts
import { i18n } from "/@/i18n/index";

app.use(i18n);
```

### 国际化使用

> 1.1、页面上使用 `.vue`，`$t('message.xxx.xxx')`

```html
<el-button>
  <span>{{ $t('message.account.accountBtnText') }}</span>
</el-button>

<el-divider content-position="left">
  {{ $t('message.layout.oneTitle') }}
</el-divider>
```

> 1.2、ts 上使用 `.ts`，`i18n.global.t(xxx)`

```ts
import { i18n } from "/@/i18n/index";

const webTitle = i18n.global.t(router.currentRoute.value.meta.title as any);
```

> 1.3、setup 里使用 ，`t(xxx)`

```ts
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'xxx',
  setup() {
    const { t } = useI18n();

    // 使用，xxx 为变量
    t(xxx)
  }
})
</script>
```

### 国际化切换

> 代码位置：`/@/layout/navBars/breadcrumb/user.vue`

```ts
// 语言切换
const onLanguageChange = (lang: string) => {
  proxy.$i18n.locale = lang;
};
```

## 框架其它国际化

> 使用方法参考：[国际化-国际化使用](/config/i18n/#国际化使用)。需提前定义多国语言数据 `message.xxx.xxx`

### 菜单

> `/@/layout/navMenu`，取 `/@/router/route.ts` 中的 `meta.title` 字段（`message.router.xxx` 需提前在 `/@/i18n/lang`）中定义

```html
<span>{{ $t(val.meta.title) }}</span>
```

### 浏览器标题

> `/@/utils/other.ts` useTitle 方法，使用时：`other.useTitle()`

```ts
export function useTitle() {
  return () => {
    nextTick(() => {
      let webTitle = "";
      let globalTitle: string = store.state.themeConfig.themeConfig.globalTitle;
      router.currentRoute.value.path === "/login"
        ? (webTitle = router.currentRoute.value.meta.title as any)
        : (webTitle = i18n.global.t(
            router.currentRoute.value.meta.title as any
          ));
      document.title = `${webTitle} - ${globalTitle}` || globalTitle;
    });
  };
}
```

### 顶栏

> `/@/layout/navBars/breadcrumb`，面包屑、组件大小、语言切换、菜单搜索、布局配置、消息、开/关全屏、用户下拉菜单（鼠标放入 `icon 图标` 上会显示图标说明）。基本都使用 `$t(xxx.xxx.xxx)` 语法。

```html
<div>{{ $t(v.meta.title) }}</div>
```

### tagsView 标签页

> 1.1、`/@/layout/navBars/tagsView`，基本都使用 `$t(xxx.xxx.xxx)` 语法

```html
<span>{{ $t(v.meta.title) }}</span>
```

> 1.2、右键菜单国际化定义， 需提前在 `/@/i18n/lang` 目录下中定义多国语言数据

```ts
dropdownList: [
  {
    contextMenuClickId: 0,
    // 刷新
    txt: 'message.tagsView.refresh',
    affix: false,
    icon: 'elementRefreshRight'
  },
  {
    contextMenuClickId: 1,
    // 关闭
    txt: 'message.tagsView.close',
    affix: false,
    icon: 'elementClose'
  },
  {
    contextMenuClickId: 2,
    // 关闭其它
    txt: 'message.tagsView.closeOther',
    affix: false,
    icon: 'elementCircleClose'
  },
  {
    contextMenuClickId: 3,
    // 全部关闭
    txt: 'message.tagsView.closeAll',
    affix: false,
    icon: 'elementFolderDelete'
  },
  {
    contextMenuClickId: 4,
    // 当前页全屏
    txt: 'message.tagsView.fullscreen',
    affix: false,
    icon: 'iconfont icon-fullscreen',
  },
],
```

### 布局配置

> `/@/layout/navBars/breadcrumb/setings.vue`，国际化数据在 `/@/i18n/lang` 中的 `layout` 对象。基本上使用 `$t('message.layout.xxx')` 语法

```html
<div class="layout-breadcrumb-seting-bar-flex-label">
  {{ $t('message.layout.twoMenuBar') }}
</div>
```

### 页面

> `/@/i18n/pages`，包含 [表单国际化演示](https://lyt-top.gitee.io/vue-next-admin-preview/#/pages/formI18n)、[首页](https://lyt-top.gitee.io/vue-next-admin-preview/#/home)、[登录页](https://lyt-top.gitee.io/vue-next-admin-preview/#/login)。基本上使用 `$t('message.xxx.xxx')` 语法
