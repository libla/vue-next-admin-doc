import{_ as n,c as s,o as a,a as t}from"./app.fa60a211.js";const m='{"title":"\u670D\u52A1\u7AEF\u4EA4\u4E92","description":"","frontmatter":{},"headers":[{"level":2,"title":".env \u6587\u4EF6","slug":"env-\u6587\u4EF6"},{"level":2,"title":"axios \u5C01\u88C5","slug":"axios-\u5C01\u88C5"},{"level":2,"title":"\u4F7F\u7528\u8BF4\u660E","slug":"\u4F7F\u7528\u8BF4\u660E"},{"level":2,"title":"\u8DE8\u57DF\u5904\u7406","slug":"\u8DE8\u57DF\u5904\u7406"},{"level":2,"title":"\u5176\u5B83\u793A\u4F8B","slug":"\u5176\u5B83\u793A\u4F8B"}],"relativePath":"config/server/index.md"}',p={},o=t(`<h1 id="\u670D\u52A1\u7AEF\u4EA4\u4E92" tabindex="-1">\u670D\u52A1\u7AEF\u4EA4\u4E92 <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u4EA4\u4E92" aria-hidden="true">#</a></h1><h2 id="env-\u6587\u4EF6" tabindex="-1">.env \u6587\u4EF6 <a class="header-anchor" href="#env-\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5F00\u59CB\u4E4B\u524D</p><p>\u6846\u67B6\u4E2D\u4F7F\u7528 <a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank" rel="noopener noreferrer">Axios</a> HTTP \u5E93\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://vitejs.cn/guide/env-and-mode.html" target="_blank" rel="noopener noreferrer">vite \u73AF\u5883\u53D8\u91CF\u548C\u6A21\u5F0F\u7AE0\u8282</a></p></div><blockquote><p>1.1\u3001\u914D\u7F6E\u6587\u4EF6\u6709\uFF08\u6846\u67B6\u4E2D\u7684\u6839\u76EE\u5F55\uFF09</p></blockquote><div class="language-bash"><pre><code>.env              <span class="token comment"># \u5168\u5C40\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u8BBA\u4EC0\u4E48\u73AF\u5883\u90FD\u4F1A\u52A0\u8F7D\u5408\u5E76</span>
.env.development  <span class="token comment"># \u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u6587\u4EF6</span>
.env.production   <span class="token comment"># \u751F\u4EA7\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u6587\u4EF6</span>
</code></pre></div><blockquote><p>1.2\u3001\u547D\u540D\u89C4\u5219</p></blockquote><p>\u4E3A\u4E86\u9632\u6B62\u610F\u5916\u5730\u5C06\u4E00\u4E9B\u73AF\u5883\u53D8\u91CF\u6CC4\u6F0F\u5230\u5BA2\u6237\u7AEF\uFF0C\u53EA\u6709\u4EE5 <code>VITE_</code> \u4E3A\u524D\u7F00\u7684\u53D8\u91CF\u624D\u4F1A\u66B4\u9732\u7ED9\u7ECF\u8FC7 vite \u5904\u7406\u7684\u4EE3\u7801\u3002\u4F8B\u5982\u4E0B\u9762\u8FD9\u4E2A\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash"><pre><code>DB_PASSWORD <span class="token operator">=</span> foobar
VITE_SOME_KEY <span class="token operator">=</span> <span class="token number">123</span>
</code></pre></div><p>\u53EA\u6709 <code>VITE_SOME_KEY</code> \u4F1A\u88AB\u66B4\u9732\u4E3A <code>import.<wbr>meta.env.VITE_SOME_KEY</code> \u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF\u6E90\u7801\uFF0C\u800C <code>DB_PASSWORD</code> \u5219\u4E0D\u4F1A\u3002</p><h2 id="axios-\u5C01\u88C5" tabindex="-1">axios \u5C01\u88C5 <a class="header-anchor" href="#axios-\u5C01\u88C5" aria-hidden="true">#</a></h2><blockquote><p><a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank" rel="noopener noreferrer">Axios</a> \u662F\u4E00\u4E2A\u57FA\u4E8E promise \u7684 HTTP \u5E93\uFF0C\u53EF\u4EE5\u7528\u5728\u6D4F\u89C8\u5668\u548C node.js \u4E2D\u3002</p></blockquote><p style="font-weight:bold;">\u4E00\u3001\u7279\u5F81</p><ul><li>\u4ECE\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA XMLHttpRequests</li><li>\u4ECE node.js \u521B\u5EFA http \u8BF7\u6C42</li><li>\u652F\u6301 Promise API</li><li>\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94</li><li>\u8F6C\u6362\u8BF7\u6C42\u6570\u636E\u548C\u54CD\u5E94\u6570\u636E</li><li>\u53D6\u6D88\u8BF7\u6C42</li><li>\u81EA\u52A8\u8F6C\u6362 JSON \u6570\u636E</li><li>\u5BA2\u6237\u7AEF\u652F\u6301\u9632\u5FA1 XSRF</li></ul><p style="font-weight:bold;">\u4E8C\u3001\u6846\u67B6\u4E2D\u521B\u5EFA axios</p><p>\u6587\u4EF6\u8DEF\u5F84\uFF1A<code>/@/utils/request.ts</code></p><blockquote><p>1.1\u3001\u914D\u7F6E\u65B0\u5EFA\u4E00\u4E2A axios \u5B9E\u4F8B\uFF0C\u5BF9 <code>import.<wbr>meta.env.VITE_API_URL</code> \u4E0D\u4E86\u89E3\uFF1F\u8BF7\u79FB\u6B65 <a href="/vue-next-admin-doc-preview/config/server/#env-\u6587\u4EF6">env-\u6587\u4EF6</a></p></blockquote><div class="language-ts"><pre><code><span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
  headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>1.2\u3001\u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668</p></blockquote><div class="language-ts"><pre><code>service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u505A\u4E9B\u4EC0\u4E48 token</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Session<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Session<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u8BF7\u6C42\u9519\u8BEF\u505A\u4E9B\u4EC0\u4E48</span>
    <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>1.3\u3001\u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668\u3002\u6CE8\u610F<code>\u9AD8\u4EAE\u5904</code>\u7684\u5224\u65AD\uFF0C\u6839\u636E\u540E\u7AEF\u63A5\u53E3\u8FD4\u56DE\u7684\u53C2\u6570\u505A\u5177\u4F53\u5224\u65AD\uFF0C\u5426\u5219\u53EF\u80FD\u62FF\u4E0D\u5230\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E</p></blockquote><div class="language-ts"><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code>service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u54CD\u5E94\u6570\u636E\u505A\u70B9\u4EC0\u4E48</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`token\` \u8FC7\u671F\u6216\u8005\u8D26\u53F7\u5DF2\u5728\u522B\u5904\u767B\u5F55</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">||</span> res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">4001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Session<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6E05\u9664\u6D4F\u89C8\u5668\u5168\u90E8\u4E34\u65F6\u7F13\u5B58</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u53BB\u767B\u5F55\u9875</span>
        ElMessageBox<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u5DF2\u88AB\u767B\u51FA\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u63D0\u793A&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u54CD\u5E94\u9519\u8BEF\u505A\u70B9\u4EC0\u4E48</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F51\u7EDC\u8D85\u65F6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">==</span> <span class="token string">&quot;Network Error&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F51\u7EDC\u8FDE\u63A5\u9519\u8BEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u53E3\u8DEF\u5F84\u627E\u4E0D\u5230&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4F7F\u7528\u8BF4\u660E" tabindex="-1">\u4F7F\u7528\u8BF4\u660E <a class="header-anchor" href="#\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u7EDF\u4E00 api \u6587\u4EF6\u5939</p><blockquote><p><code>/src</code> \u4E0B\u65B0\u5EFA <code>/src/api</code> \u6587\u4EF6\u5939\u3002\u5EFA\u8BAE\u6BCF\u4E00\u4E2A\u6A21\u5757\uFF0C\u90FD\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF08\u6587\u4EF6\u5939\u540D\u79F0\u4E0E\u6A21\u5757\u540D\u79F0\u76F8\u540C\uFF0C\u65B9\u4FBF\u7EF4\u62A4\uFF09\u3002\u5982\uFF1A<code>login \u6A21\u5757</code>\uFF0Capi \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA <code>/@/api/login</code> \u6587\u4EF6\u5939</p></blockquote><img src="https://img-blog.csdnimg.cn/415d360a095e4c4daefb909c5d61963f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_12,color_FFFFFF,t_70,g_se,x_16"><p style="font-weight:bold;">\u4E8C\u3001\u7EDF\u4E00 api \u7BA1\u7406</p><blockquote><p>1.1\u3001\u524D\u7AEF\u5B9A\u4E49\u63A5\u53E3\u51FD\u6570</p></blockquote><p>\u5982\uFF1A<code>/@/api/login/index.ts</code> \u76EE\u5F55\u4E0B\uFF0C\u9009\u62E9\u65B9\u6CD5\u5B9A\u4E49\uFF1A</p><p>\u65B9\u6CD5\u4E00</p><div class="language-ts"><pre><code><span class="token comment">// \u5148\u5F15\u5165\u7ECF\u8FC7\u81EA\u5B9A\u4E49\u5168\u5C40\u5C01\u88C5\u7684 axios</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/request&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u7528\u6237\u767B\u5F55
 * @param params \u8981\u4F20\u7684\u53C2\u6570\u503C
 * @returns \u8FD4\u56DE\u63A5\u53E3\u6570\u636E
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">signIn</span><span class="token punctuation">(</span>params<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;/user/signIn&quot;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u65B9\u6CD5\u4E8C</p><div class="language-ts"><pre><code><span class="token comment">// \u5148\u5F15\u5165\u7ECF\u8FC7\u81EA\u5B9A\u4E49\u5168\u5C40\u5C01\u88C5\u7684 axios</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/request&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u7528\u6237\u767B\u5F55
   * @param params \u8981\u4F20\u7684\u53C2\u6570\u503C
   * @returns \u8FD4\u56DE\u63A5\u53E3\u6570\u636E
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">signIn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">&quot;/user/signIn&quot;</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> params<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD9\u91CC\u7EE7\u7EED\u6DFB\u52A0</span>
  <span class="token operator">...</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    signIn<span class="token punctuation">,</span>
    <span class="token comment">// \u8FD9\u91CC\u7EE7\u7EED\u6DFB\u52A0</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u65B9\u6CD5\u4E09</p><div class="language-ts"><pre><code><span class="token comment">// \u5148\u5F15\u5165\u7ECF\u8FC7\u81EA\u5B9A\u4E49\u5168\u5C40\u5C01\u88C5\u7684 axios</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/request&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * \u7528\u6237\u767B\u5F55
 * @param params \u8981\u4F20\u7684\u53C2\u6570\u503C
 * @returns \u8FD4\u56DE\u63A5\u53E3\u6570\u636E
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">signIn</span><span class="token punctuation">(</span>params<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;/user/signIn&quot;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u7EDF\u4E00\u6279\u91CF\u5BFC\u51FA
 * @method signIn \u7528\u6237\u767B\u5F55\u63A5\u53E3
 */</span>
<span class="token keyword">const</span> apiLogin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">signIn</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">signIn</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD9\u91CC\u7EE7\u7EED\u6DFB\u52A0</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EDF\u4E00\u6279\u91CF\u5BFC\u51FA</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> apiLogin<span class="token punctuation">;</span>
</code></pre></div><blockquote><p>1.2\u3001\u524D\u7AEF\u754C\u9762\u4F7F\u7528\u63A5\u53E3\u51FD\u6570\uFF08\u65B9\u6CD5\u4E0E <code>1.1\u3001\u524D\u7AEF\u5B9A\u4E49\u63A5\u53E3\u51FD\u6570</code> \u76F8\u5BF9\u5E94\uFF09</p></blockquote><p>\u65B9\u6CD5\u4E00</p><div class="language-ts"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/api/login&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>xxx<span class="token operator">:</span>xxx\u53C2\u6570<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6216\u8005</span>
    <span class="token comment">// onMounted(async () =&gt; {</span>
    <span class="token comment">//  const res = await signIn({xxx:xxx\u53C2\u6570})</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u65B9\u6CD5\u4E8C</p><div class="language-ts"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> apiLogin <span class="token keyword">from</span> <span class="token string">&#39;/@/api/login&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">apiLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">signIn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>xxx<span class="token operator">:</span>xxx\u53C2\u6570<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6216\u8005</span>
    <span class="token comment">// const { signIn } = apiLogin();</span>
    <span class="token comment">// onMounted(() =&gt; {</span>
    <span class="token comment">//   signIn({xxx:xxx\u53C2\u6570}).then(res =&gt; {}).catch(err =&gt; {})</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p>\u65B9\u6CD5\u4E09</p><div class="language-ts"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> apiLogin <span class="token keyword">from</span> <span class="token string">&#39;/@/api/login&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      apiLogin<span class="token punctuation">.</span><span class="token function">signIn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>xxx<span class="token operator">:</span>xxx\u53C2\u6570<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6216\u8005</span>
    <span class="token comment">// onMounted(async () =&gt; {</span>
    <span class="token comment">//  const res = await apiLogin.signIn({xxx:xxx\u53C2\u6570})</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u8DE8\u57DF\u5904\u7406" tabindex="-1">\u8DE8\u57DF\u5904\u7406 <a class="header-anchor" href="#\u8DE8\u57DF\u5904\u7406" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u6700\u5E38\u89C1\u8DE8\u57DF\u4EE3\u7801</p><p>Access to XMLHttpRequest at <code>&#39;https://gitee.com/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json&#39;</code> from origin <code>&#39;http://localhost:8888&#39;</code> has been blocked by CORS policy: Response to preflight request doesn&#39;t pass access control check: No <code>&#39;Access-Control-Allow-Origin&#39;</code> header is present on the requested resource.</p><p style="font-weight:bold;">\u4E8C\u3001\u8DE8\u57DF\u5904\u7406</p><blockquote><p>1.1\u3001\u7EBF\u4E0A</p></blockquote><p>nginx \u914D\u7F6E\u53CD\u5411\u4EE3\u7406</p><blockquote><p>1.2\u3001\u672C\u5730</p></blockquote><div class="tip custom-block"><p class="custom-block-title">\u81EA\u5B9A\u4E49\u4EE3\u7406</p><p><a href="https://cn.vitejs.dev/config/#server-proxy" target="_blank" rel="noopener noreferrer">server.proxy</a>\uFF0C\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219\u3002</p></div><p>\u89E3\u51B3\uFF1A\u67E5\u770B\u6587\u7AE0\uFF1A<a href="https://blog.csdn.net/qq_34450741/article/details/107444815" target="_blank" rel="noopener noreferrer">vue cli 4.0+ \u89E3\u51B3\u524D\u7AEF\u8DE8\u57DF\u95EE\u9898</a></p><p>\u6E90\u8DE8\u57DF\u4EE3\u7801\uFF1A</p><div class="language-ts"><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&quot;https://gitee.com&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * \u83B7\u53D6\u540E\u7AEF\u52A8\u6001\u8DEF\u7531\u83DC\u5355(admin)
 * @link \u53C2\u8003\uFF1Ahttps://gitee.com/lyt-top/vue-next-admin-images/tree/master/menu
 * @param params \u8981\u4F20\u7684\u53C2\u6570\u503C\uFF0C\u975E\u5FC5\u4F20
 * @returns \u8FD4\u56DE\u63A5\u53E3\u6570\u636E
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getMenuAdmin</span><span class="token punctuation">(</span>params<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5904\u7406\u8DE8\u57DF\u540E\u4EE3\u7801\uFF1A\uFF08\u6839\u76EE\u5F55 <code>vite.config.ts</code> <a href="https://cn.vitejs.dev/config/#server-proxy" target="_blank" rel="noopener noreferrer">server.proxy</a>\uFF0C\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219\uFF09</p><div class="language-ts"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token comment">// \u6839\u76EE\u5F55 vite.config.ts</span>
server<span class="token operator">:</span> <span class="token punctuation">{</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/gitee&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      target<span class="token operator">:</span> <span class="token string">&#39;https://gitee.com&#39;</span><span class="token punctuation">,</span>
      ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/gitee</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// /@/api/menu/index.ts</span>
<span class="token comment">// \u4F7F\u7528 /gitee/ \u4EE3\u66FF https://gitee.com</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getMenuAdmin</span><span class="token punctuation">(</span>params<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		url<span class="token operator">:</span> <span class="token string">&#39;/gitee/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json&#39;</span><span class="token punctuation">,</span>
		method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
		params<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5176\u5B83\u793A\u4F8B" tabindex="-1">\u5176\u5B83\u793A\u4F8B <a class="header-anchor" href="#\u5176\u5B83\u793A\u4F8B" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u4E0B\u8F7D\u6587\u4EF6</p><div class="language-ts"><div class="highlight-lines"><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/request&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0B\u8F7D\u6587\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">downloadFile</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    responseType<span class="token operator">:</span> <span class="token string">&quot;blob&quot;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u6E05\u9664\u8BF7\u6C42\u5934 token</p><div class="language-ts"><pre><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/request&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6E05\u9664\u8BF7\u6C42\u5934 token</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deleteToken</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    transformRequest<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">(</span>data<span class="token punctuation">,</span> headers<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span> headers<span class="token punctuation">.</span>Authorization<span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">xxxx/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,59),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{m as __pageData,b as default};
