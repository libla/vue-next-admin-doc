import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.da6f02ab.js";const b='{"title":"\u83DC\u5355\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570\u8BF4\u660E","slug":"\u53C2\u6570\u8BF4\u660E"},{"level":2,"title":"\u83DC\u5355\u683C\u5F0F","slug":"\u83DC\u5355\u683C\u5F0F"},{"level":2,"title":"\u8DEF\u5F84\u683C\u5F0F","slug":"\u8DEF\u5F84\u683C\u5F0F"},{"level":2,"title":"\u4E00\u7EA7\u83DC\u5355","slug":"\u4E00\u7EA7\u83DC\u5355"},{"level":2,"title":"\u4E8C\u7EA7\u83DC\u5355","slug":"\u4E8C\u7EA7\u83DC\u5355"},{"level":2,"title":"\u591A\u7EA7\u5D4C\u5957\u83DC\u5355","slug":"\u591A\u7EA7\u5D4C\u5957\u83DC\u5355"},{"level":2,"title":"\u540E\u7AEF\u63A5\u53E3\u83DC\u5355","slug":"\u540E\u7AEF\u63A5\u53E3\u83DC\u5355"}],"relativePath":"config/menu/index.md","lastUpdated":1651056859377}',p={},o=t(`<h1 id="\u83DC\u5355\u914D\u7F6E" tabindex="-1">\u83DC\u5355\u914D\u7F6E <a class="header-anchor" href="#\u83DC\u5355\u914D\u7F6E" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A</p><p>\u5148\u4E0D\u7740\u6025\u4E0A\u624B\uFF0C\u9996\u5148\u5F97\u4E86\u89E3\u5404\u53C2\u6570\u5B57\u6BB5\u662F\u5565\u610F\u601D\uFF0C\u83DC\u5355\u8DEF\u5F84\u5730\u5740\uFF1A<a href="https://gitee.com/lyt-top/vue-next-admin/blob/master/src/router/route.ts" target="_blank" rel="noopener noreferrer">/@/router/route.ts</a>\u3002\u4E5F\u53EF\u770B\u5BF9\u5E94\u7684 <a href="https://next.router.vuejs.org/zh/api/#beforeenter" target="_blank" rel="noopener noreferrer">next.router API \u53C2\u8003\u6587\u6863</a> \u2764\uFE0F\u3002</p><ul><li><p>\u524D\u7AEF\u63A7\u5236\uFF1A<code>/@/router/route.ts</code> \u4FEE\u6539\u83DC\u5355\u6570\u636E</p></li><li><p>\u540E\u7AEF\u63A7\u5236\uFF1A\u9700\u5148\u53BB <code>/@/store/modules/themeConfig.ts</code> \u4E0B\u5F00\u542F <code>isRequestRoutes: true</code>\uFF0C\u7136\u540E\u53BB <code>/@/api/menu/index.ts</code> \u4E2D\u4FEE\u6539\u63A5\u53E3\u62FF\u83DC\u5355\u6570\u636E</p></li></ul></div><blockquote><p>\u4EE5\u4E0B\u5185\u5BB9\u4E3A\u56FD\u9645\u5316\uFF0C\u60F3\u4E86\u89E3\u66F4\u591A\uFF0C\u8BF7\u79FB\u6B65 <a href="/config/i18n/">\u9AD8\u7EA7-\u56FD\u9645\u5316</a></p></blockquote><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1">\u53C2\u6570\u8BF4\u660E <a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \u83DC\u5355\u8DEF\u5F84\uFF0C\u7528\u4E8E\u8DF3\u8F6C</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u83DC\u5355 name\uFF0C\u7528\u4E8E\u754C\u9762 keep-alive \u8DEF\u7531\u7F13\u5B58\u3002</span>
  <span class="token comment">// \u6B64 name \u9700\u8981\u4E0E component \u7EC4\u4EF6\u4E2D\u7684 name \u503C\u76F8\u540C\uFF08\u552F\u4E00\uFF09</span>
  name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7EC4\u4EF6\u8DEF\u5F84</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/home/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9644\u52A0\u81EA\u5B9A\u4E49\u6570\u636E</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83DC\u5355\u6807\u9898\uFF08\u56FD\u9645\u5316\u5199\u6CD5\uFF09</span>
    title<span class="token operator">:</span> <span class="token string">&#39;message.router.home&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u5916\u94FE\u94FE\u63A5</span>
    <span class="token comment">// \u5F00\u542F\u5916\u94FE\u6761\u4EF6\uFF0C\`1\u3001isLink: true 2\u3001\u94FE\u63A5\u5730\u5740\u4E0D\u4E3A\u7A7A\uFF08meta.isLink\uFF09 3\u3001isIframe: false\`</span>
    isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u662F\u5426\u9690\u85CF\uFF08\u83DC\u5355\u4E0D\u663E\u793A\u5728\u754C\u9762\uFF0C\u4F46\u53EF\u4EE5\u8FDB\u884C\u8DF3\u8F6C\uFF09</span>
    isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u662F\u5426\u7F13\u5B58</span>
    isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u662F\u5426\u56FA\u5B9A\uFF08\u56FA\u5B9A\u5728 tagsView \u4E2D\uFF0C\u4E0D\u53EF\u8FDB\u884C\u5173\u95ED\uFF09\uFF0C\u53F3\u952E\u83DC\u5355\u65E0 \`\u5173\u95ED\` \u9879</span>
    isAffix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u662F\u5426\u5185\u5D4C</span>
    <span class="token comment">// \u5F00\u542F\u6761\u4EF6\uFF0C\`1\u3001isIframe: true 2\u3001\u94FE\u63A5\u5730\u5740\u4E0D\u4E3A\u7A7A\uFF08meta.isLink\uFF09\`</span>
    isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F53\u524D\u8DEF\u7531\u6743\u9650\u6807\u8BC6\uFF0C\u53D6\u89D2\u8272\u7BA1\u7406\u3002\u63A7\u5236\u8DEF\u7531\u663E\u793A\u3001\u9690\u85CF\u3002\u8D85\u7EA7\u7BA1\u7406\u5458\uFF1Aadmin \u666E\u901A\u89D2\u8272\uFF1Acommon</span>
    <span class="token comment">// \u4E4B\u524D auth \u53D6\u7528\u6237\uFF08\u89D2\u8272\u4E0B\u6709\u591A\u4E2A\u7528\u6237\uFF09</span>
    roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u83DC\u5355\u56FE\u6807</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-shouye&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u81EA\u884C\u518D\u6DFB\u52A0</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u83DC\u5355\u683C\u5F0F" tabindex="-1">\u83DC\u5355\u683C\u5F0F <a class="header-anchor" href="#\u83DC\u5355\u683C\u5F0F" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u9879\u76EE <code>/@/router/route.ts</code> \u6587\u4EF6\u4E2D\u3002\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\uFF0C\u83DC\u5355\u6570\u636E\u5185\u5BB9\u5FC5\u987B\u5D4C\u5957\u8FDB\u9876\u7EA7\u8282\u70B9\uFF08\u4F5C\u4E3A\u9876\u7EA7\u8DEF\u7531\u51FA\u53E3\uFF09\u7684 <code>children</code> \u5B57\u6BB5\u91CC</p></blockquote><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \u9876\u7EA7\u83DC\u5355\u8DEF\u5F84</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9876\u7EA7\u83DC\u5355 name</span>
  name<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9876\u7EA7\u8DEF\u7531\u51FA\u53E3</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9876\u7EA7\u83DC\u5355\u91CD\u5B9A\u5411\u8DEF\u5F84</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9876\u7EA7\u9644\u52A0\u81EA\u5B9A\u4E49\u6570\u636E</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9876\u7EA7\u83DC\u5355\u662F\u5426\u7F13\u5B58</span>
    isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9876\u7EA7\u83DC\u5355\u7684\u5B50\u7EA7\u83DC\u5355\u6570\u636E</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u65B0\u589E\u7684\u83DC\u5355\u5BF9\u8C61\u5199\u5728\u8FD9\u91CC</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8DEF\u5F84\u683C\u5F0F" tabindex="-1">\u8DEF\u5F84\u683C\u5F0F <a class="header-anchor" href="#\u8DEF\u5F84\u683C\u5F0F" aria-hidden="true">#</a></h2><blockquote><p>1.1\u3001\u5728\u9879\u76EE <code>/@/router/route.ts</code> \u6587\u4EF6\u4E2D\uFF0C\u89C2\u5BDF <code>path</code> \u5B57\u6BB5\uFF0C\u6709 <code>children</code> \u65F6\uFF0C<code>path</code> \u5B57\u6BB5\u662F\u57FA\u4E8E\u4E0A\u4E00\u7EA7\u7EE7\u7EED\u62FC\u63A5\uFF08\u4E3A\u4EC0\u4E48\u8FD9\u6837\uFF1F\u8BE6\u770B <a href="/config/layoutConfig/#breadcrumb-\u9762\u5305\u5C51">\u5E03\u5C40\u914D\u7F6E-breadcrumb-\u9762\u5305\u5C51</a>\uFF09\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A<code>/params/xxx</code>\uFF0C\u8FD9\u6837\u505A\u662F\u4E3A\u4E86 <code>breadcrumb-\u9762\u5305\u5C51</code> \u7684\u663E\u793A\u95EE\u9898\u3002</p></blockquote><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/params&#39;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/params/common&#39;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u9762\u5305\u5C51\uFF1A\u9996\u9875 / \u8DEF\u7531\u53C2\u6570 / \u666E\u901A\u8DEF\u7531</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/common&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u9762\u5305\u5C51\uFF1A\u9996\u9875 / \u8DEF\u7531\u53C2\u6570 / \u666E\u901A\u8DEF\u7531 / \u666E\u901A\u8DEF\u7531\u8BE6\u60C5</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/common/details&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>1.2\u3001\u5982\u679C\u8FD9\u6837\u5199\uFF1A</p></blockquote><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/params&#39;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/params/common&#39;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u9762\u5305\u5C51\uFF1A\u9996\u9875 / \u8DEF\u7531\u53C2\u6570 / \u666E\u901A\u8DEF\u7531</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/common&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u9762\u5305\u5C51\uFF1A\u9996\u9875 / \u8DEF\u7531\u53C2\u6570 / \u666E\u901A\u8DEF\u7531\u8BE6\u60C5</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params/details&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u9762\u5305\u5C51\uFF1A\u9996\u9875</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/params1/common1/details&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E00\u7EA7\u83DC\u5355" tabindex="-1">\u4E00\u7EA7\u83DC\u5355 <a class="header-anchor" href="#\u4E00\u7EA7\u83DC\u5355" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u65B0\u5EFA\u6587\u4EF6\u5939</p><blockquote><p>1.1\u3001\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u6DFB\u52A0\u83DC\u5355\u65F6\uFF0C\u4EE3\u7801\u90FD\u662F\u5728\u7F16\u8BD1\u4E2D\uFF08cnpm run dev\uFF09\u3002\u6240\u4EE5\u6211\u4EEC\u5148\u65B0\u589E\u6587\u4EF6\u5939\uFF0C\u540E\u518D\u6DFB\u52A0\u4EE3\u7801\u5230 <code>/@/router/route.ts</code> \u6587\u4EF6\u4E2D\uFF0C\u9632\u6B62\u9700\u8981\u91CD\u65B0\u518D\u8FD0\u884C\u9879\u76EE\u3002<code>/@/views</code> \u4E0B\u65B0\u589E <code>personal</code> \u6587\u4EF6\u5939</p></blockquote><img src="https://img-blog.csdnimg.cn/3ba519fd2d0e47a2ab10c6a7f2f03d67.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><blockquote><p>1.2\u3001index.vue\uFF0C\u6CE8\u610F <code>name</code> \u503C\u9700\u4E0E <code>/@/router/route.ts</code> \u4E2D\u7684 <code>name</code> \u503C\u4E00\u81F4\uFF0C\u5426\u5219\u5B9E\u73B0\u4E0D\u4E86\u8DEF\u7531\u7684\u7F13\u5B58\uFF08keep-alive\uFF09</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;personal&quot;</span><span class="token operator">&gt;</span>
    personal
    <span class="token operator">...</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;personal&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span>personal <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u65B0\u589E\u4EE3\u7801</p><blockquote><p>\u5728\u9879\u76EE <code>/@/router/route.ts</code> \u6587\u4EF6\u4E2D\uFF0C\u6BD4\u5982\u6211\u4EEC\u4E0A\u9762\u6DFB\u52A0\u4E2A\u4EBA\u4E2D\u5FC3\u754C\u9762\uFF0C\u65B0\u589E\u5982\u4E0B\u4EE3\u7801\uFF1A</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u65B0\u589E\u7684\u83DC\u5355\u5BF9\u8C61\u5199\u5728\u8FD9\u91CC</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/personal&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;personal&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/personal/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;message.router.personal&#39;</span><span class="token punctuation">,</span>
        isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-gerenzhongxin&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E09\u3001\u754C\u9762\u663E\u793A</p><blockquote><p>\u53BB <code>http://localhost:8888/</code> \u4E2D\u67E5\u770B\u663E\u793A\u6548\u679C\uFF0C\u5982\u4E0B\uFF1A</p></blockquote><img src="https://img-blog.csdnimg.cn/01cccea40e51431f9ac16af6ec6b0fbd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><h2 id="\u4E8C\u7EA7\u83DC\u5355" tabindex="-1">\u4E8C\u7EA7\u83DC\u5355 <a class="header-anchor" href="#\u4E8C\u7EA7\u83DC\u5355" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u4E8C\u7EA7\u83DC\u5355\u4E0E\u4E00\u7EA7\u83DC\u5355\u7684\u533A\u522B\uFF1A\uFF08\u53EA\u8981\u5B50\u7EA7\u91CC\u6709 \`children\`\uFF09</p><ul><li><p>1\u3001redirect\uFF1A\u9876\u7EA7\u8BBE\u7F6E\u91CD\u5B9A\u5411</p></li><li><p>2\u3001component\uFF1A\u9876\u7EA7\u4E3A <code>component: () =&gt; import(&#39;/@/layout/routerView/parent.vue&#39;)</code> \u5199\u6B7B\u8DEF\u5F84\u3002<code>component: () =&gt; import(&#39;/@/layout/routerView/parent.vue&#39;)</code> \u4E3A\u8DEF\u7531\u51FA\u53E3</p></li></ul></div><p style="font-weight:bold;">\u4E00\u3001\u65B0\u5EFA\u6587\u4EF6\u5939</p><blockquote><p>1.1\u3001\u6211\u4EEC\u6309\u7167\u5EFA <code>\u4E00\u7EA7\u83DC\u5355</code> \u7684\u6B65\u9AA4\u5EFA <code>\u4E8C\u7EA7\u83DC\u5355</code>\u3002<code>/@/views</code> \u4E0B\u65B0\u589E <code>system</code> \u6587\u4EF6\u5939\u3002<code>system</code> \u6587\u4EF6\u5939\u4E0B\u65B0\u589E <code>menu\u3001user</code> \u7B49\u6587\u4EF6\u5939</p></blockquote><img src="https://img-blog.csdnimg.cn/db3d9ea349a146faa5ba857e35f9ca51.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><blockquote><p>1.2\u3001\u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406\uFF0C\u6211\u4EEC\u5728 <code>/@/views/system/menu</code> \u6216 <code>/@/views/system/user</code> \u4E2D\u90FD\u6DFB\u52A0 <code>index.vue</code> \u7EC4\u4EF6</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;system-menu-container&quot;</span><span class="token operator">&gt;</span>
    systemMenu
    <span class="token operator">...</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;systemMenu&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span>system<span class="token operator">-</span>menu<span class="token operator">-</span>container <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u65B0\u589E\u4EE3\u7801</p><blockquote><p>\u5728\u9879\u76EE <code>/@/router/route.ts</code> \u6587\u4EF6\u4E2D\uFF0C\u6BD4\u5982\u6211\u4EEC\u4E0A\u9762\u6DFB\u52A0\u7CFB\u7EDF\u8BBE\u7F6E\u754C\u9762\uFF0C\u65B0\u589E\u5982\u4E0B\u4EE3\u7801\uFF1A\u4EE3\u7801\u6709\u70B9\u957F\uFF0C\u53EF\u590D\u5236\u7C98\u8D34\u4EE3\u7801\u5230 <a href="https://tool.oschina.net/codeformat/json/" target="_blank" rel="noopener noreferrer">OSCHINA \u5728\u7EBF\u4EE3\u7801\u683C\u5F0F\u5316</a> \u4E2D\u5177\u4F53\u67E5\u770B</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u65B0\u589E\u7684\u83DC\u5355\u5BF9\u8C61\u5199\u5728\u8FD9\u91CC</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/system&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;system&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 2\u3001\u9876\u7EA7\u4E3A \`component: () =&gt; import(&#39;/@/layout/routerView/parent.vue&#39;)\` \u5199\u6B7B\u8DEF\u5F84</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 1\u3001redirect\uFF1A\u91CD\u5B9A\u5411</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/system/menu&#39;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;message.router.system&#39;</span><span class="token punctuation">,</span>
        isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-xitongshezhi&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;/system/menu&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;systemMenu&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/system/menu/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;message.router.systemMenu&#39;</span><span class="token punctuation">,</span>
            isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-caidan&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;/system/user&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;systemUser&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/system/user/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;message.router.systemUser&#39;</span><span class="token punctuation">,</span>
            isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-icon-&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E09\u3001\u754C\u9762\u663E\u793A</p><blockquote><p>\u53BB <code>http://localhost:8888/</code> \u4E2D\u67E5\u770B\u663E\u793A\u6548\u679C\uFF0C\u5982\u4E0B\uFF1A</p></blockquote><img src="https://img-blog.csdnimg.cn/70f38da5ef8b4836b54414f9fb96b028.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><h2 id="\u591A\u7EA7\u5D4C\u5957\u83DC\u5355" tabindex="-1">\u591A\u7EA7\u5D4C\u5957\u83DC\u5355 <a class="header-anchor" href="#\u591A\u7EA7\u5D4C\u5957\u83DC\u5355" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u591A\u7EA7\u5D4C\u5957\u83DC\u5355\u4E0E\u4E8C\u7EA7\u83DC\u5355\u7684\u533A\u522B\uFF1A\uFF08\u53EA\u8981\u5B50\u7EA7\u91CC\u6709 \`children\`\uFF09</p><ul><li><p>1\u3001redirect\uFF1A\u9876\u7EA7\u8BBE\u7F6E\u91CD\u5B9A\u5411</p></li><li><p>2\u3001component\uFF1A\u53EA\u8981\u5F53\u524D\u7EA7\uFF08\u6211\u4EEC\u79F0\u4E3A\u9876\u7EA7\uFF09\u4E0B\u6709\u5B50\u7EA7\uFF08<code>children</code>\uFF09\uFF0C\u90A3\u4E48\u5F53\u524D\u7EA7\u4E3A <code>component: () =&gt; import(&#39;/@/layout/routerView/parent.vue&#39;)</code> \u5199\u6B7B\u8DEF\u5F84</p></li></ul></div><p style="font-weight:bold;">\u4E00\u3001\u65B0\u5EFA\u6587\u4EF6\u5939</p><blockquote><p>1.1\u3001\u6211\u4EEC\u6309\u7167\u5EFA <code>\u4E8C\u7EA7\u83DC\u5355</code> \u7684\u6B65\u9AA4\u5EFA <code>\u591A\u7EA7\u5D4C\u5957\u83DC\u5355</code>\u3002<code>/@/views</code> \u4E0B\u65B0\u589E <code>menu</code> \u6587\u4EF6\u5939\u3002<code>menu</code> \u6587\u4EF6\u5939\u4E0B\u65B0\u589E <code>menu1</code> \u7B49\u6587\u4EF6\u5939\uFF0C<code>menu1</code> \u6587\u4EF6\u5939\u4E0B\u65B0\u589E <code>menu12</code> \u7B49\u3002\u53C2\u8003 <a href="https://gitee.com/lyt-top/vue-next-admin/blob/master/src/router/route.ts" target="_blank" rel="noopener noreferrer">route.ts menu \u7684\u5D4C\u5957\u683C\u5F0F</a></p></blockquote><img src="https://img-blog.csdnimg.cn/be2073d1e4d84505b1e6ff88140a3403.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><blockquote><p>1.2\u3001\u7EC4\u4EF6\u4EE3\u7801\u53C2\u8003 <a href="/config/menu/#\u4E8C\u7EA7\u83DC\u5355">/config/menu/#\u4E8C\u7EA7\u83DC\u5355 1.2</a></p></blockquote><p style="font-weight:bold;">\u4E8C\u3001\u65B0\u589E\u4EE3\u7801</p><blockquote><p>\u5728\u9879\u76EE <code>/@/router/route.ts</code> \u6587\u4EF6\u4E2D\uFF0C\u6BD4\u5982\u6211\u4EEC\u4E0A\u9762\u6DFB\u52A0\u7CFB\u7EDF\u8BBE\u7F6E\u754C\u9762\uFF0C\u65B0\u589E\u5982\u4E0B\u4EE3\u7801\uFF1A\u4EE3\u7801\u6709\u70B9\u957F\uFF0C\u53EF\u590D\u5236\u7C98\u8D34\u4EE3\u7801\u5230 <a href="https://tool.oschina.net/codeformat/json/" target="_blank" rel="noopener noreferrer">OSCHINA \u5728\u7EBF\u4EE3\u7801\u683C\u5F0F\u5316</a> \u4E2D\u5177\u4F53\u67E5\u770B</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;message.router.menu&#39;</span><span class="token punctuation">,</span>
    isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-caidan&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu11&#39;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;message.router.menu1&#39;</span><span class="token punctuation">,</span>
        isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-caidan&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu12&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;menu12&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu12/menu121&#39;</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;message.router.menu12&#39;</span><span class="token punctuation">,</span>
            isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-caidan&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu12/menu121&#39;</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&#39;menu121&#39;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/menu/menu1/menu12/menu121/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">&#39;message.router.menu121&#39;</span><span class="token punctuation">,</span>
                isLink<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                isHide<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                isKeepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                isAffix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                isIframe<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                icon<span class="token operator">:</span> <span class="token string">&#39;iconfont icon-caidan&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E09\u3001\u754C\u9762\u663E\u793A</p><blockquote><p>\u53BB <code>http://localhost:8888/</code> \u4E2D\u67E5\u770B\u663E\u793A\u6548\u679C\uFF0C\u5982\u4E0B\uFF1A</p></blockquote><img src="https://img-blog.csdnimg.cn/94bc62c040884cdab2b0554f5be6ce1b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><h2 id="\u540E\u7AEF\u63A5\u53E3\u83DC\u5355" tabindex="-1">\u540E\u7AEF\u63A5\u53E3\u83DC\u5355 <a class="header-anchor" href="#\u540E\u7AEF\u63A5\u53E3\u83DC\u5355" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u83DC\u5355\u683C\u5F0F</p><blockquote><p>1.1\u3001\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u8BF4\u4E86\uFF0C<a href="/config/menu/#\u83DC\u5355\u683C\u5F0F">\u83DC\u5355\u683C\u5F0F</a>\uFF0C\u83DC\u5355\u6570\u636E\u5185\u5BB9\u5FC5\u987B\u5D4C\u5957\u8FDB\u9876\u7EA7\u8282\u70B9\u7684 <code>children</code> \u5B57\u6BB5\u91CC\uFF0C\u6240\u4EE5\u6211\u4EEC\u540E\u7AEF\u8FD4\u56DE\u7684\u83DC\u5355\u683C\u5F0F\uFF0C\u53EA\u9700\u8981\u8FD4\u56DE\u9876\u7EA7\u8282\u70B9 <code>children</code> \u6570\u7EC4\u5373\u53EF\u3002\u53EF\u4EE5\u53C2\u8003 gitee \u4E0A\u6A21\u62DF\u7684 <a href="https://gitee.com/lyt-top/vue-next-admin-images/blob/master/menu/adminMenu.json" target="_blank" rel="noopener noreferrer">\u83DC\u5355\u6570\u636E\u683C\u5F0F</a></p></blockquote><div class="language-json"><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;adminMenu&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;home/index&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message.router.home&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isLink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isHide&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isKeepAlive&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isAffix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isIframe&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;common&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont icon-shouye&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u5176\u5B83\u83DC\u5355\u6570\u636E</span>
      ...
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>1.2\u3001\u9700\u8981\u6CE8\u610F <code>component</code> \u5B57\u6BB5\u4E3A\u5B57\u7B26\u4E32\u800C\u975E\u51FD\u6570\uFF0C\u4E0A\u9762\u9AD8\u4EAE\u4F4D\u7F6E\u5904\u3002\u8FD9\u91CC\u4E3A\u4EC0\u4E48\u4E0D\u5199\u6210 <code>&quot;component&quot;: &quot;/home/index.vue&quot;</code>\uFF0C\u8BF7\u7EE7\u7EED\u5F80\u4E0B\u770B <code>\u4E8C\u3001\u903B\u8F91\u5904\u7406</code></p></blockquote><div class="language-json"><pre><code><span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;home/index&quot;</span><span class="token punctuation">,</span>
</code></pre></div><blockquote><p>1.3\u3001<code>component</code> \u4F8B\u5B50\u6F14\u793A\uFF0C\u5982\u5D4C\u5957\u83DC\u5355\uFF08\u6587\u6863\u5DF2\u7B80\u5199\uFF0C\u771F\u5B9E\u8BF7\u8865\u6EE1\u5176\u5B83\u53C2\u6570\uFF09\uFF1A</p></blockquote><div class="tip custom-block"><p class="custom-block-title">\u5BF9\u6BD4\u53D1\u73B0</p><ul><li><p>1\u3001layout\uFF1A\u4EE5 <code>layout</code> \u5F00\u5934\u7684\u8BDD\uFF0C\u53BB\u6389\u4E86 <code>/@/</code> \u53CA <code>.vue</code> \u540E\u7F00</p></li><li><p>2\u3001views\uFF1A\u4EE5 <code>views</code> \u5F00\u5934\u7684\u8BDD\uFF0C\u53BB\u6389\u4E86 <code>/@/views/</code> \u53CA <code>.vue</code> \u540E\u7F00</p></li></ul></div><div class="language-ts"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token comment">// \u9ED8\u8BA4\u83DC\u5355\u683C\u5F0F</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1&#39;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/layout/routerView/parent.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu11&#39;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu11&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;menu11&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/menu/menu1/menu11/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u540E\u7AEF\u8FD4\u56DE\u83DC\u5355\u683C\u5F0F</span>
<span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token string">&#39;layout/routerView/parent&#39;</span><span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1&#39;</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token string">&#39;layout/routerView/parent&#39;</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu11&#39;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;/menu/menu1/menu11&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;menu11&#39;</span><span class="token punctuation">,</span>
          component<span class="token operator">:</span> <span class="token string">&#39;menu/menu1/menu11/index&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u903B\u8F91\u5904\u7406</p><blockquote><p>1.1\u3001Glob \u5BFC\u5165\uFF0CVite \u652F\u6301\u4F7F\u7528\u7279\u6B8A\u7684 import.<wbr>meta.glob \u51FD\u6570\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u5BFC\u5165\u591A\u4E2A\u6A21\u5757\u3002\u5177\u4F53\u67E5\u770B <a href="https://vitejs.cn/guide/features.html#glob-import" target="_blank" rel="noopener noreferrer">vite Glob \u5BFC\u5165\u6587\u6863</a>\u3002\u540E\u7AEF\u63A7\u5236\u903B\u8F91\u4EE3\u7801 <a href="https://gitee.com/lyt-top/vue-next-admin/blob/master/src/router/backEnd.ts" target="_blank" rel="noopener noreferrer">/@/router/backEnd.ts</a></p></blockquote><div class="language-ts"><pre><code><span class="token keyword">const</span> layouModules<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&quot;../layout/routerView/*.{vue,tsx}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> viewsModules<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&quot;../views/**/*.{vue,tsx}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>1.2\u3001\u628A component \u4E2D\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u8F6C\u6210\u5B9E\u9645\u7EC4\u4EF6\u5730\u5740\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u8FDB\u884C\u8F6C\u6362</p></blockquote><div class="language-ts"><pre><code><span class="token comment">/**
 * \u540E\u7AEF\u8DEF\u7531 component \u8F6C\u6362
 * @param routes \u540E\u7AEF\u8FD4\u56DE\u7684\u8DEF\u7531\u8868\u6570\u7EC4
 * @returns \u8FD4\u56DE\u5904\u7406\u6210\u51FD\u6570\u540E\u7684 component
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">backEndComponent</span><span class="token punctuation">(</span>routes<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>routes<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> routes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>component<span class="token punctuation">)</span>
      item<span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token function">dynamicImport</span><span class="token punctuation">(</span>
        dynamicViewsModules<span class="token punctuation">,</span>
        item<span class="token punctuation">.</span>component <span class="token keyword">as</span> <span class="token builtin">string</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> <span class="token function">backEndComponent</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u540E\u7AEF\u8DEF\u7531 component \u8F6C\u6362\u51FD\u6570
 * @param dynamicViewsModules \u83B7\u53D6\u76EE\u5F55\u4E0B\u7684 .vue\u3001.tsx \u5168\u90E8\u6587\u4EF6
 * @param component \u5F53\u524D\u8981\u5904\u7406\u9879 component
 * @returns \u8FD4\u56DE\u5904\u7406\u6210\u51FD\u6570\u540E\u7684 component
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">dynamicImport</span><span class="token punctuation">(</span>
  dynamicViewsModules<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>dynamicViewsModules<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> matchKeys <span class="token operator">=</span> keys<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> k <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">..\\/views|..</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> k<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> k<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matchKeys<span class="token operator">?.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> matchKey <span class="token operator">=</span> matchKeys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> dynamicViewsModules<span class="token punctuation">[</span>matchKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matchKeys<span class="token operator">?.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>1.3\u3001\u8F6C\u6362\u5B8C\u6210\u518D\u91CD\u65B0\u8D4B\u503C\u7ED9 <a href="/config/menu/#\u83DC\u5355\u683C\u5F0F">\u83DC\u5355\u683C\u5F0F</a>\uFF0C<code>children</code> \u5B57\u6BB5\u91CC</p></blockquote><div class="language-ts"><pre><code><span class="token comment">// res.data \u4E3A\u94FE\u63A5</span>
<span class="token comment">// https://gitee.com/lyt-top/vue-next-admin/blob/master/src/router/backEnd.ts</span>
<span class="token comment">// \u7684\u83DC\u5355\u6A21\u62DF\u6570\u636E</span>
<span class="token keyword">const</span> dynamicRoutes <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">backEndComponent</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,66),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{b as __pageData,g as default};
