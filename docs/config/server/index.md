# 服务端交互

## .env 文件

::: tip 开始之前
框架中使用 [Axios](https://www.kancloud.cn/yunye/axios/234845) HTTP 库，您可能需要了解 [vite 环境变量和模式章节](https://vitejs.cn/guide/env-and-mode.html)
:::

> 1.1、配置文件有（框架中的根目录）

```bash
.env              # 全局默认配置文件，不论什么环境都会加载合并
.env.development  # 开发环境下的配置文件
.env.production   # 生产环境下的配置文件
```

> 1.2、命名规则

为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 vite 处理的代码。例如下面这个文件中：

```bash
DB_PASSWORD = foobar
VITE_SOME_KEY = 123
```

只有 `VITE_SOME_KEY` 会被暴露为 `import.meta.env.VITE_SOME_KEY` 提供给客户端源码，而 `DB_PASSWORD` 则不会。

## axios 封装

> [Axios](https://www.kancloud.cn/yunye/axios/234845) 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

<p style="font-weight: bold;">一、特征</p>

- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF

<p style="font-weight: bold;">二、框架中创建 axios</p>

文件路径：`/@/utils/request.ts`

> 1.1、配置新建一个 axios 实例，对 `import.meta.env.VITE_API_URL` 不了解？请移步 [env-文件](/config/server/#env-文件)

```ts
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as any,
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});
```

> 1.2、添加请求拦截器

```ts
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么 token
    if (Session.get("token")) {
      config.headers.common["Authorization"] = `${Session.get("token")}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
```

> 1.3、添加响应拦截器。注意`高亮处`的判断，根据后端接口返回的参数做具体判断，否则可能拿不到接口返回的数据

```ts {5,7}
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code && res.code !== 0) {
      // `token` 过期或者账号已在别处登录
      if (res.code === 401 || res.code === 4001) {
        Session.clear(); // 清除浏览器全部临时缓存
        window.location.href = "/"; // 去登录页
        ElMessageBox.alert("你已被登出，请重新登录", "提示", {})
          .then(() => {})
          .catch(() => {});
      }
      return Promise.reject(service.interceptors.response);
    } else {
      return response.data;
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error.message.indexOf("timeout") != -1) {
      ElMessage.error("网络超时");
    } else if (error.message == "Network Error") {
      ElMessage.error("网络连接错误");
    } else {
      if (error.response.data) ElMessage.error(error.response.statusText);
      else ElMessage.error("接口路径找不到");
    }
    return Promise.reject(error);
  }
);
```

## 使用说明

<p style="font-weight: bold;">一、统一 api 文件夹</p>

> `/src` 下新建 `/src/api` 文件夹。建议每一个模块，都新建一个文件夹（文件夹名称与模块名称相同，方便维护）。如：`login 模块`，api 文件夹下新建 `/@/api/login` 文件夹

<img src="https://img-blog.csdnimg.cn/415d360a095e4c4daefb909c5d61963f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16">

<p style="font-weight: bold;">二、统一 api 管理</p>

> 1.1、前端定义接口函数

如：`/@/api/login/index.ts` 目录下，选择方法定义：

方法一

```ts
// 先引入经过自定义全局封装的 axios
import request from "/@/utils/request";

/**
 * 用户登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export function signIn(params: object) {
  return request({
    url: "/user/signIn",
    method: "post",
    data: params,
  });
}
```

方法二

```ts
// 先引入经过自定义全局封装的 axios
import request from "/@/utils/request";

export default function () {
  /**
   * 用户登录
   * @param params 要传的参数值
   * @returns 返回接口数据
   */
  const signIn = (params: object) => {
    return request({
      url: "/user/signIn",
      method: "post",
      data: params,
    });
  };
  // 这里继续添加
  ...
  return {
    signIn,
    // 这里继续添加
    ...
  };
}
```

方法三

```ts
// 先引入经过自定义全局封装的 axios
import request from "/@/utils/request";

/**
 * 用户登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export function signIn(params: object) {
  return request({
    url: "/user/signIn",
    method: "post",
    data: params,
  });
}

/**
 * 统一批量导出
 * @method signIn 用户登录接口
 */
const apiLogin = {
  signIn: (params: object) => {
    signIn(params);
  },
  // 这里继续添加
  ...
};

// 统一批量导出
export default apiLogin;
```

> 1.2、前端界面使用接口函数（方法与 `1.1、前端定义接口函数` 相对应）

方法一

```ts {3,8}
<script lang="ts">
import { onMounted } from 'vue';
import { signIn } from '/@/api/login';
export default {
  name: 'xxxx',
  setup() {
    onMounted(() => {
      signIn({xxx:xxx参数}).then(res => {}).catch(err => {}).finally(() => {})
    });
    // 或者
    // onMounted(async () => {
    //  const res = await signIn({xxx:xxx参数})
    // });
  },
};
</script>
```

方法二

```ts {3,8}
<script lang="ts">
import { onMounted } from 'vue';
import apiLogin from '/@/api/login';
export default {
  name: 'xxxx',
  setup() {
    onMounted(() => {
      apiLogin().signIn({xxx:xxx参数}).then(res => {}).catch(err => {})
    });
    // 或者
    // const { signIn } = apiLogin();
    // onMounted(() => {
    //   signIn({xxx:xxx参数}).then(res => {}).catch(err => {})
    // });
  },
};
</script>
```

方法三

```ts {3,8}
<script lang="ts">
import { onMounted } from 'vue';
import apiLogin from '/@/api/login';
export default {
  name: 'xxxx',
  setup() {
    onMounted(() => {
      apiLogin.signIn({xxx:xxx参数}).then(res => {}).catch(err => {})
    });
    // 或者
    // onMounted(async () => {
    //  const res = await apiLogin.signIn({xxx:xxx参数})
    // });
  },
};
</script>
```

## 跨域处理

<p style="font-weight: bold;">一、最常见跨域代码</p>

Access to XMLHttpRequest at `'https://gitee.com/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json'` from origin `'http://localhost:8888'` has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No `'Access-Control-Allow-Origin'` header is present on the requested resource.

<p style="font-weight: bold;">二、跨域处理</p>

> 1.1、线上

nginx 配置反向代理

> 1.2、本地

::: tip 自定义代理
[server.proxy](https://cn.vitejs.dev/config/#server-proxy)，为开发服务器配置自定义代理规则。
:::

解决：查看文章：[vue cli 4.0+ 解决前端跨域问题](https://blog.csdn.net/qq_34450741/article/details/107444815)

源跨域代码：

```ts {1}
const url = "https://gitee.com";
/**
 * 获取后端动态路由菜单(admin)
 * @link 参考：https://gitee.com/lyt-top/vue-next-admin-images/tree/master/menu
 * @param params 要传的参数值，非必传
 * @returns 返回接口数据
 */
export function getMenuAdmin(params?: object) {
  return request({
    url: `${url}/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json`,
    method: "get",
    params,
  });
}
```

处理跨域后代码：（根目录 `vite.config.ts` [server.proxy](https://cn.vitejs.dev/config/#server-proxy)，为开发服务器配置自定义代理规则）

```ts {4,18}
// 根目录 vite.config.ts
server: {
  proxy: {
    '/gitee': {
      target: 'https://gitee.com',
      ws: true,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/gitee/, ''),
    },
  },
},

// /@/api/menu/index.ts
// 使用 /gitee/ 代替 https://gitee.com
export function getMenuAdmin(params?: object) {
	return request({
		url: '/gitee/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json',
		method: 'get',
		params,
	});
}
```

## 其它示例

<p style="font-weight: bold;">一、下载文件</p>

```ts {6}
import request from "/@/utils/request";

// 下载文件
export function downloadFile(params) {
  return request({
    responseType: "blob",
    url: "xxxx",
    method: "get",
    params,
  });
}
```

<p style="font-weight: bold;">二、清除请求头 token</p>

```ts
import request from "/@/utils/request";

// 清除请求头 token
export function deleteToken(params) {
  return request({
    transformRequest: [
      (data, headers) => {
        delete headers.Authorization;
        return data;
      },
    ],
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    url: `xxxx/${params.id}`,
    method: "get",
  });
}
```
