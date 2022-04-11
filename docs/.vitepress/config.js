module.exports = {
  head: [
    [
      "link",
      { rel: "icon", href: "/vue-next-admin-doc-preview/images/favicon.ico" },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "doc、vue-next-admin、vue-next-admin-doc、vue3、element-plus、vuejs/vue-next",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc 的后台开源免费模板库（vue2.x请切换vue-prev-admin分支）开发文档",
      },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dd9ada7b25f65a181a42780f04b764e6";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],
  title: "vue-next-admin",
  description:
    "🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc 的后台开源免费模板库（vue2.x请切换vue-prev-admin分支）开发文档",
  lang: "zh",
  base: "/vue-next-admin-doc-preview/",
  themeConfig: {
    logo: "/images/logo-mini.svg",
    search: true,
    repo: "https://gitee.com/lyt-top/vue-next-admin-doc",
    repoLabel: "文档仓库",
    editLinks: true,
    editLinkText: "欢迎到 Gitee 上编辑此页！",
    author: "lyt_20201208",
    lastUpdated: "上次更新",
    algolia: {
      apiKey: "4d147eca3b892b30c89755c01165bc23",
      indexName: "vue-next-admin-doc-preview",
    },
    nav: [
      {
        text: "指南",
        link: "/home/",
      },
      {
        text: "配置参考",
        link: "/config/",
      },
      {
        text: "集成后端",
        items: [
          {
            text: "@熊猫 PandaGoAdmin",
            link: "https://github.com/PandaGoAdmin/PandaX",
          },
          {
            text: "@甜蜜蜜 GoPro平台",
            link: "https://toscode.gitee.com/GionConnection/gopro_free",
          },
        ],
      },
      {
        text: "线上演示",
        items: [
          {
            text: "vue3.x 版本预览（vue-next-admin）",
            link: "https://lyt-top.gitee.io/vue-next-admin-preview/#/login",
          },
          {
            text: "vue2.x 版本预览（vue-prev-admin）",
            link: "https://lyt-top.gitee.io/vue-prev-admin-preview/#/login",
          },
        ],
      },
      {
        text: "更新日志",
        link: "https://gitee.com/lyt-top/vue-next-admin/blob/master/CHANGELOG.md",
      },
      {
        text: "代码仓库",
        items: [
          {
            text: "gitee（国内：实时更新）",
            link: "https://gitee.com/lyt-top/vue-next-admin",
          },
          {
            text: "github（国外：定期更新）",
            link: "https://github.com/lyt-Top/vue-next-admin",
          },
        ],
      },
    ],
    sidebar: {
      "/home/": [
        {
          text: "入门须知",
          children: [
            { text: "许可", link: "/home/" },
            { text: "兼容性", link: "/home/compatible/" },
            { text: "适用人群", link: "/home/forPeople/" },
            { text: "学习文档", link: "/home/doc/" },
            { text: "特别鸣谢", link: "/home/thank/" },
          ],
        },
        {
          text: "开发指南",
          children: [
            { text: "介绍", link: "/home/introduce/" },
            { text: "安装", link: "/home/install/" },
            { text: "快速上手", link: "/home/fast/" },
          ],
        },
        {
          text: "代码规范",
          children: [
            { text: "eslint", link: "/home/eslint/" },
            { text: "prettier", link: "/home/prettier/" },
            { text: "vsCode 配置", link: "/home/vscode/" },
            { text: "git 提交规范", link: "/home/gitPush/" },
          ],
        },
      ],
      "/config/": [
        {
          text: "基础",
          children: [
            { text: "简介", link: "/config/" },
            { text: "菜单配置", link: "/config/menu/" },
            { text: "布局配置", link: "/config/layoutConfig/" },
            { text: "字体图标", link: "/config/iconfont/" },
            { text: "服务端交互", link: "/config/server/" },
            { text: "vuex", link: "/config/vuex/" },
            { text: "打包预览", link: "/config/build/" },
          ],
        },
        {
          text: "高级",
          children: [
            { text: "权限管理", link: "/config/power/" },
            { text: "路由参数", link: "/config/route/" },
            { text: "国际化", link: "/config/i18n/" },
            { text: "标签页", link: "/config/tagsView/" },
            { text: "内置指令", link: "/config/directive/" },
          ],
        },
        {
          text: "其它",
          children: [
            { text: "数据可视化", link: "/config/charts/" },
            { text: "工具类集合", link: "/config/tool/" },
            { text: "第三方插件使用", link: "/config/partyPlug/" },
            { text: "内置插件的使用", link: "/config/builtPlug/" },
            { text: "其它问题", link: "/config/otherIssues/" },
          ],
        },
        {
          text: "赞助",
          children: [{ text: "支持开源", link: "/config/support/" }],
        },
      ],
    },
  },
};
