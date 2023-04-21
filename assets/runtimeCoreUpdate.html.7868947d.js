import{_ as n,o as e,c as s,b as a}from"./app.a6f56f7f.js";var i="/blog/assets/runtimeCoreUpdate.e16437cd.png";const r={},t=a('<h1 id="runtime-core-\u66F4\u65B0\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#runtime-core-\u66F4\u65B0\u6D41\u7A0B" aria-hidden="true">#</a> runtime-core \u66F4\u65B0\u6D41\u7A0B</h1><p><img src="'+i+`" alt="runtime-core update"></p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>

a<span class="token text string">((\u54CD\u5E94\u5F0F\u7684\u503C\u53D8\u66F4))</span>
b<span class="token text string">((\u89E6\u53D1\u5F53\u524D\u7EC4\u4EF6\u7684effect\u51FD\u6570\u6267\u884C - instance.update))</span>
c1<span class="token text string">((\u518D\u6B21\u6267\u884C\u5F53\u524D\u7EC4\u4EF6\u7684 render \u51FD\u6570 &amp; \u83B7\u53D6\u6700\u65B0\u7684 VNode - subTree))</span>
c2<span class="token text string">((\u89E6\u53D1 beforeUpdate hook))</span>
c3<span class="token text string">((\u89E6\u53D1 onVnodeBeforeUpdate))</span>
c4<span class="token text string">((\u91CD\u65B0\u8C03\u7528 patch - \u53C2\u6570 prevTree, nextTree ))</span>
c5<span class="token text string">((\u89E6\u53D1 updated hook))</span>
c6<span class="token text string">((\u89E6\u53D1onVnodeUpdated))</span>

c4-1<span class="token text string">((\u57FA\u4E8E VNode \u7684\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5904\u7406))</span>

c4-1-1<span class="token text string">((\u5904\u7406 shapeFlag &amp; ShapeFlags.COMPONENT \u7C7B\u578B))</span>
c4-1-2<span class="token text string">((\u5904\u7406 shapeFlag &amp; ShapeFlags.ELEMENT \u7C7B\u578B))</span>

a <span class="token arrow operator">--&gt;</span> b

b <span class="token arrow operator">--&gt;</span> c1
b <span class="token arrow operator">--&gt;</span> c2
b <span class="token arrow operator">--&gt;</span> c3
b <span class="token arrow operator">--&gt;</span> c4
b <span class="token arrow operator">--&gt;</span> c5
b <span class="token arrow operator">--&gt;</span> c6

c4 <span class="token arrow operator">--&gt;</span> c4-1

c4-1 <span class="token arrow operator">--&gt;</span> c4-1-1
c4-1 <span class="token arrow operator">--&gt;</span> c4-1-2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function l(d,o){return e(),s("div",null,c)}var v=n(r,[["render",l],["__file","runtimeCoreUpdate.html.vue"]]);export{v as default};
