# 其它问题集合

## 更新(升级) vite 2.0 后遇到的问题

### vite 1.x

```ts
import type { UserConfig } from "vite";
import { resolve } from "path";
import { loadEnv } from "./build/utils";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@/": pathResolve("src"),
};

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_OPEN } = loadEnv();

const root: string = process.cwd();

const viteConfig: UserConfig = {
  root,
  alias,
  outDir: "dist",
  minify: "esbuild",
  port: VITE_PORT,
  open: VITE_OPEN,
  base: process.env.NODE_ENV === "production" ? "./" : VITE_PUBLIC_PATH,
  optimizeDeps: {
    include: ["element-plus/lib/locale/lang/zh-cn"],
  },
};

export default viteConfig;
```

### vite 2.x

> alias、server、build

:::tip 提示
需要安装 @vitejs/plugin-vue，否则 `.vue` 文件报错。安装命令：`cnpm install @vitejs/plugin-vue --save-dev`
:::

```ts
import vue from "@vitejs/plugin-vue";
import type { UserConfig } from "vite";
import { loadEnv } from "./build/utils";

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_OPEN } = loadEnv();

const viteConfig: UserConfig = {
  plugins: [vue()],
  root: process.cwd(),
  alias: [
    {
      find: /^\/@\//,
      replacement: "/src/",
    },
  ],
  base: process.env.NODE_ENV === "production" ? VITE_PUBLIC_PATH : "./",
  optimizeDeps: {
    include: ["element-plus/lib/locale/lang/zh-cn"],
  },
  server: {
    port: VITE_PORT,
    open: VITE_OPEN,
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false,
  },
};

export default viteConfig;
```

## 页面打开时空白问题

> 检查浏览器、node 版本：`升级浏览器、node 版本` 或 `重新安装依赖`

### 升级浏览器、node 版本

- 谷歌浏览器版本 `版本 72.0.3626.121` 或者 `版本 < 72.x`，页面将出现报错 `Uncaught SyntaxError: Unexpected token.` ，这是因为老版本浏览器不支持最新语法 `xx?.xx?.xx`。
- node 版本需要 `大于 12xx.xx.x`，[node 官网](https://nodejs.org/zh-cn/)

```bash
# cmd 输入 node -v
node -v

# 得到 node 版本号
v14.16.0
```

### 重新安装依赖

<p style="font-weight: bold;">一、先删除项目中的 node_modules </p>

> 建议使用 cnpm，因为 yarn 有时会报错。[node 版本 > 12xx.xx.x](https://nodejs.org/zh-cn/)

<p style="font-weight: bold;">二、使用 cnpm 获取 yarn 代替 npm，（桌面 cmd 运行）</p>

- 安装 cnpm：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
- 安装 yarn：`npm install -g yarn`

<p style="font-weight: bold;">三、vue-next-admin 项目根目录</p>

```bash
# 使用 cnpm install 或 cnpm i 安装依赖
cnpm install

# 或者使用 yarn install 安装依赖
yarn install
```

## 本地调试接口跨域问题

> No 'Access-Control-Allow-Origin' header is present on the requested resource.

&emsp;&emsp;Access to image at `'https://image.zhangxinxu:9000/#/study/image/blog/201310/2013-10-10203238.png'` from origin `'http://localhost:8888'` has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

&emsp;&emsp;"No `'Access-Control-Allow-Origin'` header is present on the requested resource. Origin `'http://localhost:8888'` is therefore not allowed access."，翻译下，因为被请求的资源没有设置 'Access-Control-Allow-Origin'，所以从 `'http://localhost:8888'` 发起的请求不被允许。

解决：

- 查看文章：[vue cli 4.0+ 解决前端跨域问题](https://blog.csdn.net/qq_34450741/article/details/107444815)
- 基础章节：[服务端交互](/config/server/#跨域处理)

## 安装的依赖与 package.json 中的不一致

::: tip

- '~'（波浪符号）:他会更新到当前 minor version（也就是中间的那位数字）中最新的版本。放到我们的例子中就是："element-plus": "~1.2.0-beta.4"，这个库会去匹配更新到 1.2.x 的最新版本，如果出了一个新的版本为 1.3.0，则不会自动升级。波浪符号是曾经 npm 安装时候的默认符号，现在已经变为了插入符号。

- '^'（插入符号）: 这个符号就显得非常的灵活了，他将会把当前库的版本更新到当前 major version（也就是第一位数字）中最新的版本。放到我们的例子中就是："element-plus": "^1.2.0-beta.4", 这个库会去匹配 1.x.x 中最新的版本，但是他不会自动更新到 2.0.0。
  :::

打开根目录 `package.json`，去掉 `^`，如下：

```json
// 默认
"dependencies": {
  "element-plus": "^1.2.0-beta.4"
}

// 去掉后
"dependencies": {
  "element-plus": "1.2.0-beta.4"
}
```

## cnpm run dev 无法运行项目

<p style="font-weight: bold;">一、错误消息，以 vitepress 为例</p>

> 1.1、此错误为 node 版本过低，因为使用的是 `v13.6.0` 的 node 版本

```bash
failed to start server. error:
 Error: Package exports for 'C:\Users\issuser\Desktop\vue-next-admin-doc\node_modules\_vitepress@0.20.2@vitepress\node_modules\vue' do not define a './dist/vue.runtime.esm-bundler.js' subpath
    at applyExports (internal/modules/cjs/loader.js:531:13)
    at resolveExports (internal/modules/cjs/loader.js:551:12)
    at Function.Module._findPath (internal/modules/cjs/loader.js:657:22)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:960:27)
    at Function.resolve (internal/modules/cjs/helpers.js:78:19)
    at resolveAliases (C:\Users\issuser\Desktop\vue-next-admin-doc\node_modules\_vitepress@0.20.2@vitepress\dist\node\serve-c378302d.js:12331:28)
    at resolveConfig (C:\Users\issuser\Desktop\vue-next-admin-doc\node_modules\_vitepress@0.20.2@vitepress\dist\node\serve-c378302d.js:13372:12)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async Object.createServer (C:\Users\issuser\Desktop\vue-next-admin-doc\node_modules\_vitepress@0.20.2@vitepress\dist\node\serve-c378302d.js:36631:18) {
  code: 'MODULE_NOT_FOUND'
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! vue-next-admin-doc@1.0.0 dev: `vitepress dev docs --port 9000`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the vue-next-admin-doc@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\issuser\AppData\Roaming\npm-cache\_logs\2021-12-07T02_06_33_435Z-debug.log
```

<p style="font-weight: bold;">二、 查看 node 版本，进行版本升级</p>

> 2.1、node 各版本下载地址：[https://npmmirror.com/mirrors/node/](https://npmmirror.com/mirrors/node/)。`.msi` 后缀的为有安装界面应用。

```bash
# win + r，cmd 中输入
λ node -v
# 输出 v16.13.0
```

## 批量更新 package.json

当新建一个项目的时候，有时候会从其他项目的 `package.json` 里面 copy 一份 `dependencies` 过来，或者在 `github` 上下载项目作为改动时，但因为是新项目，我们想用各个依赖包的最新版本。如果手动去修改 `dependencies` 中各个包的版本号，那就太麻烦了，借助 `npm-check-updates` 工具可以很方便的将 `package.json` 中的依赖包版本号更新为最新版本。

::: tip 提示
以下命令都是在 cmd 中执行：
:::

```bash
# 1、安装
cnpm install -g npm-check-updates

# 2、检查 package.json 中是否有更新
ncu

# 3、更新依赖到最新版本 or 更新全部 ncu -a
ncu -u
```

> 更新全部 dependencies 到最新版本(包括当前指定版本范围满足最新版本号的,比如^4.2.0 -> ^4.3.0)

```bash
# 更新全部 dependencies 到最新版本
ncu -a
```

## dependencies 和 devDependencies

> 根目录 `package.json` 中：

npm 安装依赖 `dependencies` 和 `devDependencies` 的区别：

- `dependencies`：是需要发布到生产环境的
- `devDependencies`：里面的插件只用于开发环境，不用于生产环境

npm 安装方式：

- `dependencies`：npm install 依赖名称 --save
- `devDependencies`：npm install 依赖名称 --save-dev

其它说明：

- `dependencies`：插件不管你引不引入都会打包到文件中去
- `devDependencies`：若文件中 import 引入 devDependencies 中插件，依然会把当前引入的插件打包到文件中，不引入则不打包

## 项目编译慢

> cnpm run dev 编译慢，根目录 `package.json`，尝试删除 `--force`

```json
"scripts": {
  "dev": "vite",
},
```

## 哪些文件可以删除

<p style="font-weight: bold;">一、百度统计</p>

> 根目录 `index.html`

```html
<script type="text/javascript">
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d9c8b87d10717013641458b300c552e4";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
</script>
```

<p style="font-weight: bold;">二、百度地图 key</p>

> 根目录 `index.html`

```html
<script
  type="text/javascript"
  src="https://api.map.baidu.com/api?v=3.0&ak=wsijQt8sLXrCW71YesmispvYHitfG9gv&s=1"
></script>
```

<p style="font-weight: bold;">三、演示界面</p>

> `/@/views/fun` 与 `/@/views/pages`，需要删除对应的依赖

<p style="font-weight: bold;">四、其它</p>

> 根据具体情况进行对应的删除修改

## 如何跟随 master 升级项目

> 1.1、[发行版](https://gitee.com/lyt-top/vue-next-admin/releases)，进行下载覆盖（前提是未修改布局等，否则自己修改的将被覆盖，谨慎操作）。

```ts
// 下载
vue-next-admin-v1.1.2.zip
下载 Source code (zip)
下载 Source code (tar.gz)
```

> 1.2、[提交日志](https://gitee.com/lyt-top/vue-next-admin/commits/master)，进行一个一个对比修改（貌似也没有其它好的办法）。

## 壁纸库

[https://wallhaven.cc/](https://wallhaven.cc/)，可下载 4k、8k 壁纸（是否侵权，自行辨别）

## 事件总线 mitt

> 相关文档地址：[mitt](https://github.com/developit/mitt)

<p style="font-weight: bold;">一、发送</p>

```ts
<script lang="ts">
  setup() {
    const { proxy } = getCurrentInstance() as any;

    // 方法名 + 参数
    proxy.mittBus.emit('layoutMobileResize', {
      layout: 'defaults',
      clientWidth,
    });
  }
</script>
```

<p style="font-weight: bold;">二、监听</p>

```ts
<script lang="ts">
  setup() {
    const { proxy } = getCurrentInstance() as any;

    // 回调参数
    proxy.mittBus.on('layoutMobileResize', (res: any) => {
      // 逻辑处理
    });
  }
</script>
```

<p style="font-weight: bold;">三、销毁</p>

```ts
<script lang="ts">
  setup() {
    const { proxy } = getCurrentInstance() as any;

    onUnmounted(() => {
      proxy.mittBus.off('layoutMobileResize');

      // 或者
      proxy.mittBus.off('layoutMobileResize', () => {});
    });
  }
</script>

```

## 设置可视区高度 100%

> 主要是通过 [CSS calc() 函数](https://www.runoob.com/cssref/func-calc.html) 进行动态适配

```ts {4}
<template>
  <div :style="{ height: `calc(100vh - ${initTagViewHeight}` }">
    <div class="layout-view-bg-white">
      <div style="height: 100%">这里是内容区...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from '/@/store/index';
export default {
	name: 'funEchartsMap',
	setup() {
    const store = useStore();
    // 设置主内容的高度
    const initTagViewHeight = computed(() => {
      let { isTagsview } = store.state.themeConfig.themeConfig;
      let { isTagsViewCurrenFull } = store.state.tagsViewRoutes;
      if (isTagsViewCurrenFull) {
        return `30px`;
      } else {
        if (isTagsview) return `114px`;
        else return `80px`;
      }
    });
  }
}
```

## master 分支装依赖时会出现的问题

<p style="font-weight: bold;">一、screenFul 要求的node 版本大于14.x.1</p>

> 解决方法：[升级 node 版本](https://npmmirror.com/mirrors/node/)。`.msi` 后缀的为有安装界面应用。

<p style="font-weight: bold;">二、开发依赖的types 库，已有自己的类型声明</p>

> 解决方法：根目录 `package.json` 下："@types/axios": "^0.14.0"，" @types/clipboard": "^2.0.1", 去掉这两个依赖

<p style="font-weight: bold;">三、会报 error Unexpected end of JSON input while parsing near '...n4m5KyE3UEIxfv0HEAVbz'  这种类型的错误</p>

> 解决方法：cmd 中执行以下命令

```bash
npm cache clean --force
```

## 本地开发，页面空白问题

> 解决方法：删除 [layout/routerView/parent.vue](https://gitee.com/lyt-top/vue-next-admin/blob/master/src/layout/routerView/parent.vue) `keep-alive`。如下：

```html
<router-view v-slot="{ Component }">
  <transition :name="setTransitionName" mode="out-in">
    <keep-alive :include="getKeepAliveNames">
      <component :is="Component" :key="refreshRouterViewKey" class="w100" />
    </keep-alive>
  </transition>
</router-view>
```

改成（你将失去路由缓存功能，发布时再还原代码，未找到解决办法）

```html
<router-view v-slot="{ Component }">
  <transition :name="setTransitionName" mode="out-in">
    <component :is="Component" :key="refreshRouterViewKey" class="w100" />
  </transition>
</router-view>
```
