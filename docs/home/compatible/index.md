# 兼容性

::: danger xxx.? .token 报错
如遇报错问题，请升级最新浏览器，有可能是浏览器不支持最新语法。
:::

Element Plus 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [ResizeObserver](https://caniuse.com/resizeobserver) 的浏览器上运行。 如果您需要支持旧版本的浏览器，请添加 [Babel](https://babeljs.io/) 和相应的 [Polyfill](https://polyfill.io/v3/) 。

| Edge                                                                     | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |

> 由于 [Vue3](https://v3.cn.vuejs.org/guide/introduction.html) 不再支持 IE11，故而 [ElementPlus](https://element-plus.gitee.io/zh-CN/guide/design.html) 也不支持 IE11 及之前版本。
