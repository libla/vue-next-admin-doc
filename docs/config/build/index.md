# 打包预览

::: tip 开始之前
框架中使用基于原生 ES-Module 的前端构建工具 Vite，您可能需要了解 [Vite 配置](https://vitejs.cn/config/)
:::

## 打包

<p style="font-weight: bold;">一、.env 文件</p>

> 根目录 `.env` 文件，去了解 [.env-文件](/config/server/#env-文件)。`/vue-next-admin-preview/` 为预览仓库 [vue-next-admin-preview](https://gitee.com/lyt-top/vue-next-admin-preview) 的仓库名，打包时得根据具体情况进行修改打包路径。

```bash
# public path 配置线上环境路径（打包）、本地通过 http-server 访问时，请置空即可
VITE_PUBLIC_PATH = /vue-next-admin-preview/
```

<p style="font-weight: bold;">二、打包后链接效果</p>

<img src="https://img-blog.csdnimg.cn/1f5484d02645451d94ccfffab1cb09db.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16">

<p style="font-weight: bold;">三、打包命令</p>

```bash
# 项目根目录运行
cnpm run build

# 或者，package.json 中，鼠标放入 build 上点击 `运行脚本`
"scripts": {
  "build": "vite build",
},
```

## 预览

<p style="font-weight: bold;">一、本地预览</p>

> 1.1、本地预览必须把：根目录 `.env` 文件中的 `VITE_PUBLIC_PATH` 置空

```bash
VITE_PUBLIC_PATH = ''
```

> 1.2、安装 `http-server` 插件，或者拖到 `HBuilderX` 中去

```bash
# 安装
cnpm install -g http-server

# 运行，打包后的 dist 文件夹里打开 cmd
http-server
```

> 1.3、或者在 `package.json` 中添加脚本

```json {5}
"scripts": {
  "dev": "vite --force",
  "build": "vite build",
  "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/",
  "serve": "http-server ./dist"
},

// 项目根目录运行
cnpm run serve
```

> 1.4、成功代码

```bash
λ cnpm run serve

> vue-next-admin@1.2.0 serve C:\Users\Desktop\vue-next-admin
> http-server ./dist

Starting up http-server, serving ./dist

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://10.111.171.255:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

<p style="font-weight: bold;">二、线上预览</p>

> 部署到服务器，方法 [自行前往学习](https://www.baidu.com/)。
