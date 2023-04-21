import{_ as e,o,c,d as n,a as t,w as p,e as s,b as l,r as i}from"./app.a6f56f7f.js";const u={},r=n("h1",{id:"\u95ED\u5305",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u95ED\u5305","aria-hidden":"true"},"#"),s(" \u95ED\u5305")],-1),d=n("p",null,"\u76EE\u5F55",-1),k={class:"table-of-contents"},v=s("\u95ED\u5305\u662F\u5982\u4F55\u5DE5\u4F5C\u7684"),m=s("\u521D\u8BD5"),b=s("\u52A0\u6599"),g=s("\u6838\u5FC3"),h=s("\u4F7F\u7528\u95ED\u5305"),f=s("\u79C1\u6709\u53D8\u91CF"),_=s("\u56DE\u8C03\uFF08callback\uFF09\u4E0E\u8BA1\u65F6\u5668\uFF08timer\uFF09"),w=s("\u7ED1\u5B9A\u51FD\u6570\u4E0A\u4E0B\u6587"),q=s("\u51FD\u6570\u91CD\u8F7D"),y=s("\u51FD\u6570\u5305\u88C5"),x=s("\u5373\u65F6\u51FD\u6570"),j=s("\u4E34\u65F6\u4F5C\u7528\u57DF\u548C\u79C1\u6709\u53D8\u91CF"),F=s("\u5FAA\u73AF"),V=s("\u603B\u7ED3"),O=l(`<blockquote><p>\u95ED\u5305\u662F\u4E00\u4E2A\u51FD\u6570\u5728\u521B\u5EFA\u65F6\u5141\u8BB8\u8BE5\u81EA\u8EAB\u51FD\u6570\u8BBF\u95EE\u5E76\u64CD\u4F5C\u8BE5\u81EA\u8EAB\u51FD\u6570\u4EE5\u5916\u7684\u53D8\u91CF\u65F6\u6240\u521B\u5EFA\u7684\u4F5C\u7528\u57DF\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u95ED\u5305\u53EF\u4EE5\u8BA9\u51FD\u6570\u8BBF\u95EE\u6240\u6709\u7684\u53D8\u91CF\u548C\u51FD\u6570\uFF0C\u53EA\u8981\u8FD9\u4E9B\u53D8\u91CF\u548C\u51FD\u6570\u5B58\u5728\u4E8E\u8BE5\u51FD\u6570\u58F0\u660E\u65F6\u7684\u4F5C\u7528\u57DF\u5185\u5C31\u884C</p></blockquote><h2 id="\u95ED\u5305\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> \u95ED\u5305\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h2><h3 id="\u521D\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u521D\u8BD5" aria-hidden="true">#</a> \u521D\u8BD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> outer <span class="token operator">=</span> <span class="token string">&#39;outer&#39;</span>
<span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  outer <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outer&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// outer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5916\u90E8\u53D8\u91CF\uFF08outer\uFF09\u548C\u5916\u90E8\u51FD\u6570\uFF08outerFunc\uFF09\u90FD\u662F\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u7684\uFF0C\u8BE5\u4F5C\u7528\u57DF\uFF08\u95ED\u5305\uFF09\u4ECE\u672A\u6D88\u5931\u8FC7\uFF1B\u8BE5\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u53D8\u91CF\uFF0C\u56E0\u4E3A\u5B83\u4ECD\u5728\u4F5C\u7528\u57DF\u5185\u5E76\u4E14\u662F\u53EF\u7528\u7684</p></blockquote><h3 id="\u52A0\u6599" tabindex="-1"><a class="header-anchor" href="#\u52A0\u6599" aria-hidden="true">#</a> \u52A0\u6599</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> outer <span class="token operator">=</span> <span class="token string">&#39;outer&#39;</span>

<span class="token keyword">var</span> later

<span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> inner <span class="token operator">=</span> <span class="token string">&#39;inner&#39;</span>
  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    outer <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outer&#39;</span><span class="token punctuation">)</span>
    inner <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inner&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  later <span class="token operator">=</span> innerFunc
<span class="token punctuation">}</span>

<span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">later</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// outer  inner</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\u5916\u90E8\u51FD\u6570\u4E2D\u58F0\u660E innerFunc \u7684\u65F6\u5019\uFF0C\u4E0D\u4EC5\u662F\u58F0\u660E\u4E86\u51FD\u6570\uFF0C\u8FD8\u521B\u5EFA\u4E86\u4E00\u4E2A\u95ED\u5305\uFF0C\u8BE5\u95ED\u5305\u4E0D\u4EC5\u5305\u542B\u51FD\u6570\u58F0\u660E\uFF0C\u8FD8\u5305\u542B\u4E86\u51FD\u6570\u58F0\u660E\u7684\u90A3\u4E00\u65F6\u523B\u70B9\u8BE5\u4F5C\u7528\u57DF\u4E2D\u7684\u6240\u6709\u53D8\u91CF\u3002\u6700\u7EC8\u5F53 innerFunc() \u6267\u884C\u65F6\uFF0C\u5F53\u65F6\u58F0\u660E\u7684\u4F5C\u7528\u57DF\u5DF2\u7ECF\u6D88\u5931\u4E86\uFF0C\u901A\u8FC7\u95ED\u5305\uFF0C\u8BE5\u51FD\u6570\u8FD8\u662F\u8FD8\u80FD\u591F\u8BBF\u95EE\u539F\u59CB\u4F5C\u7528\u57DF</p></blockquote><h3 id="\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3" aria-hidden="true">#</a> \u6838\u5FC3</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> outer <span class="token operator">=</span> <span class="token string">&#39;outer&#39;</span>

<span class="token keyword">var</span> later

<span class="token keyword">function</span> <span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> inner <span class="token operator">=</span> <span class="token string">&#39;inner&#39;</span>
  <span class="token keyword">function</span> <span class="token function">innerFunc</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    outer <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outer&#39;</span><span class="token punctuation">)</span>
    inner <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inner&#39;</span><span class="token punctuation">)</span>
    params <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;params&#39;</span><span class="token punctuation">)</span>
    newOuter <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;newOuter&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  later <span class="token operator">=</span> innerFunc
<span class="token punctuation">}</span>

newOuter <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;newOuter&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u5B58\u5728\u53D8\u91CF newOuter</span>

<span class="token keyword">var</span> newOuter <span class="token operator">=</span> <span class="token string">&#39;newOuter&#39;</span>

<span class="token function">outerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">later</span><span class="token punctuation">(</span><span class="token string">&#39;params&#39;</span><span class="token punctuation">)</span> <span class="token comment">// outer  inner  params  newOuter</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u{1F446}\u{1F3FB}\u4EE3\u7801\uFF0C\u95ED\u5305\u6709\u8DA3\u7684\u6982\u5FF5\uFF1A</p><ol><li>\u5185\u90E8\u51FD\u6570\u7684\u53C2\u6570\u662F\u5305\u542B\u5728\u95ED\u5305\u4E2D\u7684</li><li>\u4F5C\u7528\u57DF\u4E4B\u5916\u7684\u6240\u6709\u53D8\u91CF\uFF0C\u5373\u4FBF\u662F\u51FD\u6570\u58F0\u660E\u4E4B\u540E\u7684\u90A3\u4E9B\u58F0\u660E\uFF0C\u4E5F\u90FD\u5305\u542B\u5728\u95ED\u5305\u4E2D</li><li>\u76F8\u540C\u7684\u4F5C\u7528\u57DF\u5185\uFF0C\u5C1A\u672A\u58F0\u660E\u7684\u53D8\u91CF\u4E0D\u80FD\u8FDB\u884C\u63D0\u524D\u5F15\u7528</li></ol><h2 id="\u4F7F\u7528\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u95ED\u5305" aria-hidden="true">#</a> \u4F7F\u7528\u95ED\u5305</h2><h3 id="\u79C1\u6709\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u79C1\u6709\u53D8\u91CF" aria-hidden="true">#</a> \u79C1\u6709\u53D8\u91CF</h3><blockquote><p>\u95ED\u5305\u7684\u4E00\u79CD\u5E38\u89C1\u7528\u6CD5\u662F\u5C01\u88C5\u4E00\u4E9B\u4FE1\u606F\u4F5C\u4E3A\u79C1\u6709\u53D8\u91CF\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u9650\u5236\u8FD9\u4E9B\u53D8\u91CF\u7684\u4F5C\u7528\u57DF</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> run <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

run<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>run<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>run<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u{1F446}\u{1F3FB}\u4EE3\u7801\u663E\u793A\uFF0C\u5373\u4FBF\u6211\u4EEC\u6CA1\u6709\u5BF9\u8BE5\u53D8\u91CF\u76F4\u63A5\u8D4B\u503C\uFF0C\u901A\u8FC7\u65B9\u6CD5\u5C06\u8BE5\u53D8\u91CF\u589E\u52A01\u3002 \u6211\u4EEC\u53EF\u4EE5\u64CD\u4F5C value \u7684\u503C\uFF0C\u662F\u56E0\u4E3A\u5373\u4FBF\u662F\u8BE5\u6784\u9020\u5668\u6267\u884C\u5B8C\u5E76\u4E14\u5DF2\u7ECF\u6CA1\u6709\u4F5C\u7528\u57DF\u4E86\uFF0Cvalue \u53D8\u91CF\u8FD8\u662F<strong>\u4F1A\u7ED1\u5B9A\u5230 add() \u65B9\u6CD5\u58F0\u660E\u521B\u5EFA\u7684\u95ED\u5305</strong>\u4E0A\uFF0C\u5E76\u4E14<strong>\u53EF\u4EE5\u5728 add() \u65B9\u6CD5\u5185\u8FDB\u884C\u4F7F\u7528</strong></p><h3 id="\u56DE\u8C03-callback-\u4E0E\u8BA1\u65F6\u5668-timer" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03-callback-\u4E0E\u8BA1\u65F6\u5668-timer" aria-hidden="true">#</a> \u56DE\u8C03\uFF08callback\uFF09\u4E0E\u8BA1\u65F6\u5668\uFF08timer\uFF09</h3><blockquote><p>\u53E6\u5916\u4E00\u4E2A\u4F7F\u7528\u95ED\u5305\u7684\u6700\u5E38\u89C1\u60C5\u5F62\uFF0C\u662F\u5728\u5904\u7406\u56DE\u8C03\u6216\u4F7F\u7528\u8BA1\u65F6\u5668\u7684\u65F6\u5019\u3002 \u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u90FD\u662F\u5728\u540E\u671F\u672A\u6307\u5B9A\u7684\u4E8B\u4EF6\u8FDB\u884C\u5F02\u6B65\u8C03\u7528\uFF0C\u5728\u8FD9\u79CD\u51FD\u6570\u5185\u90E8\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u8BBF\u95EE\u5916\u90E8\u6570\u636E</p></blockquote><p><strong>\u6CE8\u610F</strong>\uFF1A\u51FD\u6570\u5728\u95ED\u5305\u91CC\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u5728\u95ED\u5305\u521B\u5EFA\u7684\u65F6\u523B\u70B9\u4E0A\u770B\u5230\u8FD9\u4E9B\u53D8\u91CF\u7684\u503C\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u66F4\u65B0\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u95ED\u5305\u4E0D\u662F\u5728\u521B\u5EFA\u90A3\u4E00\u65F6\u523B\u70B9\u7684\u72B6\u6001\u7684\u5FEB\u7167\uFF0C\u800C\u662F\u4E00\u4E2A\u771F\u5B9E\u7684\u72B6\u6001\u5C01\u88C5\uFF0C\u53EA\u8981\u95ED\u5305\u5B58\u5728\uFF0C\u5C31\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539</p><h2 id="\u7ED1\u5B9A\u51FD\u6570\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u51FD\u6570\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u7ED1\u5B9A\u51FD\u6570\u4E0A\u4E0B\u6587</h2><blockquote><p>\u901A\u8FC7\u533F\u540D\u51FD\u6570\u3001apply() \u548C\u95ED\u5305\u3002\u53EF\u4EE5\u5F3A\u5236\u8BA9\u7279\u5B9A\u7684\u51FD\u6570\u5728\u8C03\u7528\u65F6\u90FD\u662F\u7528\u7279\u5B9A\u6240\u9700\u7684\u4E0A\u4E0B\u6587</p></blockquote><h2 id="\u51FD\u6570\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D</h2><h3 id="\u51FD\u6570\u5305\u88C5" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5305\u88C5" aria-hidden="true">#</a> \u51FD\u6570\u5305\u88C5</h3><blockquote><p>\u51FD\u6570\u5305\u88C5\u662F\u4E00\u4E2A\u5C01\u88C5\u51FD\u6570\u903B\u8F91\u7684\u6280\u5DE7\uFF0C\u7528\u4E8E\u5728\u5355\u4E2A\u6B65\u9AA4\u5185\u91CD\u8F7D\u521B\u5EFA\u65B0\u51FD\u6570\u6216\u96C6\u6210\u51FD\u6570\u3002\u6700\u6709\u4EF7\u503C\u7684\u573A\u666F\u662F\uFF0C\u5728\u91CD\u8F7D\u4E00\u4E9B\u5DF2\u7ECF\u5B58\u5728\u7684\u51FD\u6570\u65F6\uFF0C\u540C\u65F6\u4FDD\u6301\u539F\u59CB\u51FD\u6570\u5728\u88AB\u5305\u88C5\u540E\u4ECD\u80FD\u591F\u6709\u6548\u4F7F\u7528</p></blockquote><h2 id="\u5373\u65F6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5373\u65F6\u51FD\u6570" aria-hidden="true">#</a> \u5373\u65F6\u51FD\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F446}\u{1F3FB}\u4EE3\u7801\u7684\u6700\u7EC8\u7ED3\u679C\u662F\u4E00\u4E2A\u6267\u884C\u5982\u4E0B\u{1F447}\u{1F3FB}\u64CD\u4F5C\u7684\u5355\u6761\u8BED\u53E5\u8868\u8FBE\u5F0F</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u5B9E\u4F8B</li><li>\u6267\u884C\u8BE5\u51FD\u6570</li><li>\u9500\u6BC1\u8BE5\u51FD\u6570</li></ul><blockquote><p>\u6B64\u5916\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8981\u5904\u7406\u4E00\u4E2A\u53EF\u4EE5\u6709\u4E00\u4E2A\u95ED\u5305\u7684\u51FD\u6570\uFF0C\u6240\u4EE5\u5728\u51FD\u6570\u8C03\u7528\u7684\u77ED\u6682\u8FC7\u7A0B\u4E2D\uFF0C\u4E5F\u662F\u53EF\u4EE5\u8BBF\u95EE\u548C\u58F0\u660E\u8BED\u53E5\u5904\u5728\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u5185\u7684\u5916\u90E8\u53D8\u91CF\u548C\u53C2\u6570\u7684\u3002\u4E8B\u5B9E\u8BC1\u660E\uFF0C\u8FD9\u4E2A\u7B80\u5355\u7684\u6784\u9020\u88AB\u79F0\u4E4B\u4E3A\u5373\u65F6\u51FD\u6570</p></blockquote><h3 id="\u4E34\u65F6\u4F5C\u7528\u57DF\u548C\u79C1\u6709\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4E34\u65F6\u4F5C\u7528\u57DF\u548C\u79C1\u6709\u53D8\u91CF" aria-hidden="true">#</a> \u4E34\u65F6\u4F5C\u7528\u57DF\u548C\u79C1\u6709\u53D8\u91CF</h3><blockquote><p>\u5229\u7528\u5373\u65F6\u51FD\u6570\uFF0C\u6211\u4EEC\u5EFA\u7ACB\u4E00\u4E2A\u6709\u8DA3\u7684\u5C01\u95ED\u7A7A\u95F4\u6765\u505A\u4E00\u4E9B\u4E8B\u60C5\u3002\u7531\u4E8E\u51FD\u6570\u662F\u7ACB\u5373\u6267\u884C\uFF0C\u5176\u5185\u90E8\u6240\u6709\u7684\u51FD\u6570\u3001\u6240\u6709\u7684\u53D8\u91CF\u90FD\u5C40\u9650\u4E8E\u5176\u5185\u90E8\u4F5C\u7528\u57DF\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5373\u4F7F\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u7684\u4F5C\u7528\u57DF\uFF0C\u7528\u4E8E\u5B58\u50A8\u6570\u636E\u72B6\u6001</p></blockquote><p><strong>\u6CE8\u610F\uFF1A</strong>\uFF1A\u53D8\u91CF\u5728 JavaScript \u4E2D\u7684\u4F5C\u7528\u57DF\u4F9D\u8D56\u4E8E\u5B9A\u4E49\u53D8\u91CF\u7684\u51FD\u6570\uFF0C\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u51FD\u6570\uFF0C\u5229\u7528\u5176\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u6301\u6709\u53D8\u91CF\u7684\u4E34\u65F6\u4F5C\u7528\u57DF</p><h3 id="\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a> \u5FAA\u73AF</h3><blockquote><p>\u5373\u65F6\u51FD\u6570\u53E6\u5916\u4E00\u4E2A\u6709\u7528\u7684\u5730\u65B9\u662F\uFF0C\u5B83\u53EF\u4EE5\u5229\u7528\u5FAA\u73AF\u548C\u95ED\u5305\u89E3\u51B3\u4E00\u4E9B\u68D8\u624B\u7684\u95EE\u9898</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>DIV 0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>DIV 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javaScript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      divs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;divs #&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot; was clicked!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5B9E\u9645\u70B9\u51FB\u540E\uFF0Ci \u7684\u503C\u59CB\u7EC8\u662F 2</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u5728 for \u5FAA\u73AF\u5185\u52A0\u5165\u5373\u65F6\u51FD\u6570\uFF08\u66FF\u6362\u{1F446}\u{1F3FB}\u7684\u4EE3\u7801\u5757\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u6B63\u786E\u7684\u503C\u4F20\u9012\u7ED9\u5373\u65F6\u51FD\u6570\uFF08\u4E5F\u5C31\u662F\u5185\u90E8\u51FD\u6570\u7684\u95ED\u5305\uFF09\uFF0C\u8FDB\u800C\u8BA9\u5904\u7406\u7A0B\u5E8F\u4E5F\u5F97\u5230\u6B63\u786E\u7684\u503C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>DIV 0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>DIV 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javaScript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> divs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> divs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      divs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;divs #&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot; was clicked!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token comment">// \u5B9E\u9645\u70B9\u51FB\u7B2C\u4E00\u4E2A div \u540E\u7684\u63D0\u793A\uFF1Adivs #0 was clicked!!</span>
    <span class="token comment">// \u5B9E\u9645\u70B9\u51FB\u7B2C\u4E8C\u4E2A div \u540E\u7684\u63D0\u793A\uFF1Adivs #2 was clicked!!</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u4ECE\u6700\u57FA\u672C\u7684\u95ED\u5305\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u5F00\u59CB\uFF0C\u7136\u540E\u4E86\u89E3\u5982\u4F55\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u95ED\u5305\u3002\u5728\u5F88\u591A\u5730\u65B9\uFF0C\u6211\u4EEC\u770B\u5230\u95ED\u5305\u90FD\u662F\u7279\u522B\u6709\u7528\u7684\uFF0C\u5305\u62EC\u79C1\u6709\u53D8\u91CF\u7684\u5B9A\u4E49\u548C\u56DE\u8C03\u7684\u4F7F\u7528</li><li>\u63A2\u7D22\u4E00\u4E9B\u6709\u52A9\u4E8E\u5851\u9020 JavaScript \u8BED\u8A00\u7684\u9AD8\u7EA7\u95ED\u5305\u7684\u6982\u5FF5\uFF0C\u5305\u62EC\u5F3A\u5236\u8BBE\u7F6E\u51FD\u6570\u4E0A\u4E0B\u6587\u3001\u504F\u5E94\u7528\u51FD\u6570\u3001\u91CD\u8F7D\u51FD\u6570\uFF0C\u63A5\u7740\u6DF1\u5165\u63A2\u8BA8\u5373\u65F6\u51FD\u6570</li></ul>`,40);function N(B,E){const a=i("router-link");return o(),c("div",null,[r,d,n("nav",k,[n("ul",null,[n("li",null,[t(a,{to:"#\u95ED\u5305\u662F\u5982\u4F55\u5DE5\u4F5C\u7684"},{default:p(()=>[v]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u521D\u8BD5"},{default:p(()=>[m]),_:1})]),n("li",null,[t(a,{to:"#\u52A0\u6599"},{default:p(()=>[b]),_:1})]),n("li",null,[t(a,{to:"#\u6838\u5FC3"},{default:p(()=>[g]),_:1})])])]),n("li",null,[t(a,{to:"#\u4F7F\u7528\u95ED\u5305"},{default:p(()=>[h]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u79C1\u6709\u53D8\u91CF"},{default:p(()=>[f]),_:1})]),n("li",null,[t(a,{to:"#\u56DE\u8C03-callback-\u4E0E\u8BA1\u65F6\u5668-timer"},{default:p(()=>[_]),_:1})])])]),n("li",null,[t(a,{to:"#\u7ED1\u5B9A\u51FD\u6570\u4E0A\u4E0B\u6587"},{default:p(()=>[w]),_:1})]),n("li",null,[t(a,{to:"#\u51FD\u6570\u91CD\u8F7D"},{default:p(()=>[q]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u51FD\u6570\u5305\u88C5"},{default:p(()=>[y]),_:1})])])]),n("li",null,[t(a,{to:"#\u5373\u65F6\u51FD\u6570"},{default:p(()=>[x]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#\u4E34\u65F6\u4F5C\u7528\u57DF\u548C\u79C1\u6709\u53D8\u91CF"},{default:p(()=>[j]),_:1})]),n("li",null,[t(a,{to:"#\u5FAA\u73AF"},{default:p(()=>[F]),_:1})])])]),n("li",null,[t(a,{to:"#\u603B\u7ED3"},{default:p(()=>[V]),_:1})])])]),O])}var D=e(u,[["render",N],["__file","closure.html.vue"]]);export{D as default};