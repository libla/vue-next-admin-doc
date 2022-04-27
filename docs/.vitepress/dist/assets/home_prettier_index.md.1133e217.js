import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.da6f02ab.js";const g='{"title":"prettier","description":"","frontmatter":{},"relativePath":"home/prettier/index.md","lastUpdated":1651056859389}',e={},p=t(`<h1 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A</p><p>\u6B64\u914D\u7F6E\u4EC5\u9002\u7528\u4E8E <a href="https://gitee.com/lyt-top/vue-next-admin" target="_blank" rel="noopener noreferrer">vue-next-admin</a> \u540E\u53F0\u5F00\u6E90\u514D\u8D39\u6A21\u677F\uFF0C\u5176\u5B83\u8BED\u8A00 react \u6216\u8005\u5176\u5B83 vue-admin \u9879\u76EE\u7B49\u62A5\u9519\u8BF7\u81EA\u884C\u8C03\u6574\u3002\uFF08\u8FD9\u662F\u5173\u4E8E vue-next-admin\uFF1Avue3 + vite + typescript + eslint + prettier + vscode \u7684\u914D\u7F6E\u8BF4\u660E\uFF09</p></div><p><code>prettier</code> \u7684\u4E2D\u6587\u610F\u601D\u662F\u201C\u6F02\u4EAE\u7684\u3001\u673A\u7075\u7684\u201D\uFF0C\u662F\u4E00\u4E2A\u6709\u4E3B\u89C1\u7684\u4EE3\u7801\u683C\u5F0F\u5316\u7A0B\u5E8F\u3002\u7528\u6765\u6279\u91CF\u5904\u7406\u65E7\u4EE3\u7801\u7684\u7EDF\u4E00,\u6D89\u53CA\u5F15\u53F7\uFF0C\u5206\u53F7\uFF0C\u6362\u884C\uFF0C\u7F29\u8FDB\u3002\u652F\u6301\u76EE\u524D\u5927\u90E8\u5206\u8BED\u8A00\u5904\u7406\uFF0C\u5305\u62EC JavaScript\uFF0CFlow\uFF0CTypeScript\uFF0CCSS\uFF0CSCSS\uFF0CLess\uFF0CJSX\uFF0CVue\uFF0CGraphQL\uFF0CJSON\uFF0CMarkdown\u3002\u5B83\u901A\u8FC7\u89E3\u6790\u60A8\u7684\u4EE3\u7801\u5E76\u4F7F\u7528\u81EA\u5DF1\u7684\u89C4\u5219\u6765\u91CD\u65B0\u6253\u5370\u51FA\u683C\u5F0F\u89C4\u8303\u7684\u4EE3\u7801\u3002</p><p style="font-weight:bold;">\u4E00\u3001\u5B89\u88C5\u5BF9\u5E94\u7684 prettier \u4F9D\u8D56</p><div class="language-bash"><pre><code>cnpm <span class="token function">install</span> --save-dev prettier
</code></pre></div><p style="font-weight:bold;">\u4E8C\u3001\u6839\u76EE\u5F55\u65B0\u5EFA .prettierrc.js</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://prettier.io/docs/en/" target="_blank" rel="noopener noreferrer">https://prettier.io/docs/en/</a></p><p>\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-ts"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E00\u884C\u6700\u591A\u591A\u5C11\u4E2A\u5B57\u7B26</span>
  printWidth<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6307\u5B9A\u6BCF\u4E2A\u7F29\u8FDB\u7EA7\u522B\u7684\u7A7A\u683C\u6570</span>
  tabWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528\u5236\u8868\u7B26\u800C\u4E0D\u662F\u7A7A\u683C\u7F29\u8FDB\u884C</span>
  useTabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728\u8BED\u53E5\u672B\u5C3E\u6253\u5370\u5206\u53F7</span>
  semi<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</span>
  singleQuote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u66F4\u6539\u5F15\u7528\u5BF9\u8C61\u5C5E\u6027\u7684\u65F6\u95F4 \u53EF\u9009\u503C&quot;&lt;as-needed|consistent|preserve&gt;&quot;</span>
  quoteProps<span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728JSX\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u800C\u4E0D\u662F\u53CC\u5F15\u53F7</span>
  jsxSingleQuote<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u591A\u884C\u65F6\u5C3D\u53EF\u80FD\u6253\u5370\u5C3E\u968F\u9017\u53F7\u3002\uFF08\u4F8B\u5982\uFF0C\u5355\u884C\u6570\u7EC4\u6C38\u8FDC\u4E0D\u4F1A\u51FA\u73B0\u9017\u53F7\u7ED3\u5C3E\u3002\uFF09</span>
  <span class="token comment">// \u53EF\u9009\u503C&quot;&lt;none|es5|all&gt;&quot;\uFF0C\u9ED8\u8BA4none</span>
  trailingComma<span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728\u5BF9\u8C61\u6587\u5B57\u4E2D\u7684\u62EC\u53F7\u4E4B\u95F4\u6253\u5370\u7A7A\u683C</span>
  bracketSpacing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx \u6807\u7B7E\u7684\u53CD\u5C16\u62EC\u53F7\u9700\u8981\u6362\u884C</span>
  jsxBracketSameLine<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728\u5355\u72EC\u7684\u7BAD\u5934\u51FD\u6570\u53C2\u6570\u5468\u56F4\u5305\u62EC\u62EC\u53F7 always\uFF1A(x) =&gt; x \\ avoid\uFF1Ax =&gt; x</span>
  arrowParens<span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD9\u4E24\u4E2A\u9009\u9879\u53EF\u7528\u4E8E\u683C\u5F0F\u5316\u4EE5\u7ED9\u5B9A\u5B57\u7B26\u504F\u79FB\u91CF\uFF08\u5206\u522B\u5305\u62EC\u548C\u4E0D\u5305\u62EC\uFF09\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u4EE3\u7801</span>
  rangeStart<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  rangeEnd<span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6307\u5B9A\u8981\u4F7F\u7528\u7684\u89E3\u6790\u5668\uFF0C\u4E0D\u9700\u8981\u5199\u6587\u4EF6\u5F00\u5934\u7684 @prettier</span>
  requirePragma<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u9700\u8981\u81EA\u52A8\u5728\u6587\u4EF6\u5F00\u5934\u63D2\u5165 @prettier</span>
  insertPragma<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F7F\u7528\u9ED8\u8BA4\u7684\u6298\u884C\u6807\u51C6 always\\never\\preserve</span>
  proseWrap<span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6307\u5B9AHTML\u6587\u4EF6\u7684\u5168\u5C40\u7A7A\u683C\u654F\u611F\u5EA6 css\\strict\\ignore</span>
  htmlWhitespaceSensitivity<span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// Vue\u6587\u4EF6\u811A\u672C\u548C\u6837\u5F0F\u6807\u7B7E\u7F29\u8FDB</span>
  vueIndentScriptAndStyle<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6362\u884C\u7B26\u4F7F\u7528 lf \u7ED3\u5C3E\u662F \u53EF\u9009\u503C&quot;&lt;auto|lf|crlf|cr&gt;&quot;</span>
  endOfLine<span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,9),o=[p];function c(r,l,i,u,k,m){return a(),s("div",null,o)}var _=n(e,[["render",c]]);export{g as __pageData,_ as default};
