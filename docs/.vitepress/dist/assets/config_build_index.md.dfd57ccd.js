import{_ as n,c as e,o as s,a}from"./app.fa60a211.js";const b='{"title":"\u6253\u5305\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6253\u5305","slug":"\u6253\u5305"},{"level":2,"title":"\u9884\u89C8","slug":"\u9884\u89C8"}],"relativePath":"config/build/index.md"}',t={},o=a(`<h1 id="\u6253\u5305\u9884\u89C8" tabindex="-1">\u6253\u5305\u9884\u89C8 <a class="header-anchor" href="#\u6253\u5305\u9884\u89C8" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u5F00\u59CB\u4E4B\u524D</p><p>\u6846\u67B6\u4E2D\u4F7F\u7528\u57FA\u4E8E\u539F\u751F ES-Module \u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177 Vite\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4E86\u89E3 <a href="https://vitejs.cn/config/" target="_blank" rel="noopener noreferrer">Vite \u914D\u7F6E</a></p></div><h2 id="\u6253\u5305" tabindex="-1">\u6253\u5305 <a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001.env \u6587\u4EF6</p><blockquote><p>\u6839\u76EE\u5F55 <code>.env</code> \u6587\u4EF6\uFF0C\u53BB\u4E86\u89E3 <a href="/vue-next-admin-doc-preview/config/server/#env-\u6587\u4EF6">.env-\u6587\u4EF6</a>\u3002<code>/vue-next-admin-preview/</code> \u4E3A\u9884\u89C8\u4ED3\u5E93 <a href="https://gitee.com/lyt-top/vue-next-admin-preview" target="_blank" rel="noopener noreferrer">vue-next-admin-preview</a> \u7684\u4ED3\u5E93\u540D\uFF0C\u6253\u5305\u65F6\u5F97\u6839\u636E\u5177\u4F53\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\u6253\u5305\u8DEF\u5F84\u3002</p></blockquote><div class="language-bash"><pre><code><span class="token comment"># public path \u914D\u7F6E\u7EBF\u4E0A\u73AF\u5883\u8DEF\u5F84\uFF08\u6253\u5305\uFF09\u3001\u672C\u5730\u901A\u8FC7 http-server \u8BBF\u95EE\u65F6\uFF0C\u8BF7\u7F6E\u7A7A\u5373\u53EF</span>
VITE_PUBLIC_PATH <span class="token operator">=</span> /vue-next-admin-preview/
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u6253\u5305\u540E\u94FE\u63A5\u6548\u679C</p><img src="https://img-blog.csdnimg.cn/1f5484d02645451d94ccfffab1cb09db.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbHl0LXRvcA==,size_20,color_FFFFFF,t_70,g_se,x_16"><p style="font-weight:bold;">\u4E09\u3001\u6253\u5305\u547D\u4EE4</p><div class="language-bash"><pre><code><span class="token comment"># \u9879\u76EE\u6839\u76EE\u5F55\u8FD0\u884C</span>
cnpm run build

<span class="token comment"># \u6216\u8005\uFF0Cpackage.json \u4E2D\uFF0C\u9F20\u6807\u653E\u5165 build \u4E0A\u70B9\u51FB \`\u8FD0\u884C\u811A\u672C\`</span>
<span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite build&quot;</span>,
<span class="token punctuation">}</span>,
</code></pre></div><h2 id="\u9884\u89C8" tabindex="-1">\u9884\u89C8 <a class="header-anchor" href="#\u9884\u89C8" aria-hidden="true">#</a></h2><p style="font-weight:bold;">\u4E00\u3001\u672C\u5730\u9884\u89C8</p><blockquote><p>1.1\u3001\u672C\u5730\u9884\u89C8\u5FC5\u987B\u628A\uFF1A\u6839\u76EE\u5F55 <code>.env</code> \u6587\u4EF6\u4E2D\u7684 <code>VITE_PUBLIC_PATH</code> \u7F6E\u7A7A</p></blockquote><div class="language-bash"><pre><code>VITE_PUBLIC_PATH <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre></div><blockquote><p>1.2\u3001\u5B89\u88C5 <code>http-server</code> \u63D2\u4EF6\uFF0C\u6216\u8005\u62D6\u5230 <code>HBuilderX</code> \u4E2D\u53BB</p></blockquote><div class="language-bash"><pre><code><span class="token comment"># \u5B89\u88C5</span>
cnpm <span class="token function">install</span> <span class="token parameter variable">-g</span> http-server

<span class="token comment"># \u8FD0\u884C\uFF0C\u6253\u5305\u540E\u7684 dist \u6587\u4EF6\u5939\u91CC\u6253\u5F00 cmd</span>
http-server
</code></pre></div><blockquote><p>1.3\u3001\u6216\u8005\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u811A\u672C</p></blockquote><div class="language-json"><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite --force&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-fix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --fix --ext .js --ext .jsx --ext .vue src/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http-server ./dist&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u9879\u76EE\u6839\u76EE\u5F55\u8FD0\u884C</span>
cnpm run serve
</code></pre></div><blockquote><p>1.4\u3001\u6210\u529F\u4EE3\u7801</p></blockquote><div class="language-bash"><pre><code>\u03BB cnpm run serve

<span class="token operator">&gt;</span> vue-next-admin@1.2.0 serve C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>vue-next-admin
<span class="token operator">&gt;</span> http-server ./dist

Starting up http-server, serving ./dist

http-server settings:
CORS: disabled
Cache: <span class="token number">3600</span> seconds
Connection Timeout: <span class="token number">120</span> seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: <span class="token boolean">false</span>
Serve Brotli Files: <span class="token boolean">false</span>
Default File Extension: none

Available on:
  http://10.111.171.255:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u7EBF\u4E0A\u9884\u89C8</p><blockquote><p>\u90E8\u7F72\u5230\u670D\u52A1\u5668\uFF0C\u65B9\u6CD5 <a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">\u81EA\u884C\u524D\u5F80\u5B66\u4E60</a>\u3002</p></blockquote>`,22),p=[o];function c(r,l,i,d,u,k){return s(),e("div",null,p)}var h=n(t,[["render",c]]);export{b as __pageData,h as default};
