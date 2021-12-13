# 路由参数

::: tip 开始之前
您可能需要了解 [Vue Router](https://next.router.vuejs.org/zh/guide/) 的动态路由匹配、路由的匹配语法。此演示界面关联 tagsView 标签页部分逻辑，代码位置：`/@/layout/navBars/tagsView/tagsView.vue`
:::

## 普通路由

> [路由参数-普通路由页面演示地址](https://lyt-top.gitee.io/vue-next-admin-preview/#/params/common)，代码位置：`/@/views/params/common`

<p style="font-weight: bold;">一、配置路由</p>

```ts
{
  path: '/params',
  name: 'paramsIndex',
  component: () => import('/@/layout/routerView/parent.vue'),
  redirect: '/params/common',
  ...,
  children: [
    {
      path: '/params/common',
      name: 'paramsCommon',
      component: () => import('/@/views/params/common/index.vue'),
      ...,
    },
    {
      path: '/params/common/details',
      name: 'paramsCommonDetails',
      component: () => import('/@/views/params/common/details.vue'),
      ...,
    },
  ]
}
```

<p style="font-weight: bold;">二、页面跳转</p>

```ts
router.push({
  path: "/params/common/details",
  query: { id: Math.random(), name: "vue-next-admin" },
});
```

<p style="font-weight: bold;">三、参数获取</p>

> 您可能需要了解 [动态路由匹配](https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html)。`route.query`

```html {11}
<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import { useRoute } from "vue-router";
  export default defineComponent({
    name: "paramsCommonDetails",
    setup() {
      const route = useRoute();
      // 页面加载时
      onMounted(() => {
        // 参数：query: { "id": "111", "name": "vue-next-admin" }
        console.log(route.query);
      });
    },
  });
</script>
```

## 动态路由

> [路由参数-动态路由页面演示地址](https://lyt-top.gitee.io/vue-next-admin-preview/#/params/dynamic)，代码位置：`/@/views/params/dynamic`

<p style="font-weight: bold;">一、配置路由</p>

> 注意 `/params/dynamic/details/:t/:id` 中的 `/:t/:id`，您可能需要了解 [路由的匹配语法](https://next.router.vuejs.org/zh/guide/essentials/route-matching-syntax.html)

```ts {16}
{
  path: '/params',
  name: 'paramsIndex',
  component: () => import('/@/layout/routerView/parent.vue'),
  redirect: '/params/dynamic',
  ...,
  children: [
    {
      path: '/params/dynamic',
      name: 'paramsDynamic',
      component: () => import('/@/views/params/dynamic/index.vue'),
      ...,
    },
    {
      path: '/params/dynamic/details/:t/:id',
      name: 'paramsDynamicDetails',
      component: () => import('/@/views/params/dynamic/details.vue'),
      ...,
    },
  ]
}
```

<p style="font-weight: bold;">二、页面跳转</p>

> 注意这里用 `name` 跳转，参数用 `params`

```ts {3,4}
// name 值为路由中的 name
router.push({
  name: "paramsDynamicDetails",
  params: {
    t: "vue-next-admin",
    id: Math.random(),
  },
});
```

<p style="font-weight: bold;">三、参数获取</p>

> 您可能需要了解 [动态路由匹配](https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html)。`route.params`

```html {11}
<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import { useRoute } from "vue-router";
  export default defineComponent({
    name: "paramsDynamicDetails",
    setup() {
      const route = useRoute();
      // 页面加载时
      onMounted(() => {
        // 参数：params: { "t": "vue-next-admin", "id": "111" }
        console.log(route.params);
      });
    },
  });
</script>
```
