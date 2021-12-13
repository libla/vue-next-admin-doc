# 标签页

> 代码路径：`/@/layout/navBars/tagsView`，tagsView 国际化移步 [国际化-tagsview-标签页](/config/i18n/#tagsview-标签页)

## 右键菜单

> 代码路径：`/@/layout/navBars/tagsView/contextmenu.vue`，右键菜单与 [当前页操作](/config/tagsView/#当前页操作) 一样，包含 0 刷新当前，1 关闭当前，2 关闭其它，3 关闭全部 4 当前页全屏。具体可查看代码 `/@/layout/navBars/tagsView/tagsView.vue` 中的 `onCurrentContextmenuClick` 方法

```ts
// 当前项右键菜单点击
const onCurrentContextmenuClick = async (item) => {
  const cParams = item.meta.isDynamic ? item.params : item.query;
  if (!getCurrentRouteItem(item.path, cParams))
    return ElMessage({
      type: "warning",
      message: "请正确输入路径及完整参数（query、params）",
    });
  const { path, name, params, query, meta, url } = getCurrentRouteItem(
    item.path,
    cParams
  );
  switch (item.contextMenuClickId) {
    case 0:
      // 刷新当前
      if (meta.isDynamic) await router.push({ name, params });
      else await router.push({ path, query });
      refreshCurrentTagsView(route.fullPath);
      break;
    case 1:
      // 关闭当前
      closeCurrentTagsView(getThemeConfig.value.isShareTagsView ? path : url);
      break;
    case 2:
      // 关闭其它
      if (meta.isDynamic) await router.push({ name, params });
      else await router.push({ path, query });
      closeOtherTagsView(path);
      break;
    case 3:
      // 关闭全部
      closeAllTagsView();
      break;
    case 4:
      // 开启当前页面全屏
      openCurrenFullscreen(getThemeConfig.value.isShareTagsView ? path : url);
      break;
  }
};
```

## 当前页操作

> 参数说明：0 刷新当前，1 关闭当前，2 关闭其它，3 关闭全部 4 当前页全屏。tagsView 只支持对当前页进行操作，请看高亮部分代码。查看演示 [tagsView 操作](https://lyt-top.gitee.io/vue-next-admin-preview/#/fun/tagsView)

<p style="font-weight: bold;">一、刷新</p>

```ts {7}
// 获取路由信息
const route = useRoute();

// 0、刷新当前 tagsView
const refreshCurrentTagsView = () => {
  const params = { contextMenuClickId: 0, ...route };
  proxy.mittBus.emit("onCurrentContextmenuClick", Object.assign({}, params));
};
```

<p style="font-weight: bold;">二、关闭</p>

```ts {7}
// 获取路由信息
const route = useRoute();

// 1、关闭当前 tagsView
const closeCurrentTagsView = () => {
  const params = { contextMenuClickId: 1, ...route };
  proxy.mittBus.emit("onCurrentContextmenuClick", Object.assign({}, params));
};
```

<p style="font-weight: bold;">三、关闭其它</p>

```ts {7}
// 获取路由信息
const route = useRoute();

// 2、关闭其它 tagsView
const closeOtherTagsView = () => {
  const params = { contextMenuClickId: 2, ...route };
  proxy.mittBus.emit("onCurrentContextmenuClick", Object.assign({}, params));
};
```

<p style="font-weight: bold;">四、全部关闭</p>

```ts {7}
// 获取路由信息
const route = useRoute();

// 3、关闭全部 tagsView
const closeAllTagsView = () => {
  const params = { contextMenuClickId: 3, ...route };
  proxy.mittBus.emit("onCurrentContextmenuClick", Object.assign({}, params));
};
```

<p style="font-weight: bold;">五、当前页全屏</p>

```ts {7}
// 获取路由信息
const route = useRoute();

// 4、开启当前页面全屏
const openCurrenFullscreen = () => {
  const params = { contextMenuClickId: 4, ...route };
  proxy.mittBus.emit("onCurrentContextmenuClick", Object.assign({}, params));
};
```

## 滚动方式

::: tip 内容溢出时，鼠标滚轮 + 鼠标左键

- 1、移入到 tagsView 标签页中，可通过鼠标滚轮（中键）进行查看

- 2、移入到 tagsView 标签页中，拖动滚动条进行滚动

- 3、移动端：常规操作即可

:::

## 布局控制

> 详细介绍移步 [布局配置](/config/layoutConfig/)
