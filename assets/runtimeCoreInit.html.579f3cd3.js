import{_ as n,o as s,c as a,b as e}from"./app.a6f56f7f.js";var r="/blog/assets/runtime-core-init1.fac2d34e.png",i="/blog/assets/runtime-core-init2.18018f0c.png",t="/blog/assets/runtime-core-init3.8d65f3f3.png",l="/blog/assets/runtime-core-init4.195adaf1.png",o="/blog/assets/runtime-core-init5.88c8bc2d.png",p="/blog/assets/runtime-core-init6.95c773b8.png";const c={},d=e('<h1 id="runtime-core-\u521D\u59CB\u5316\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#runtime-core-\u521D\u59CB\u5316\u6D41\u7A0B" aria-hidden="true">#</a> runtime-core \u521D\u59CB\u5316\u6D41\u7A0B</h1><p><img src="'+r+'" alt="runtime-core"><img src="'+i+'" alt="runtime-core"><img src="'+t+'" alt="runtime-core"><img src="'+l+'" alt="runtime-core"><img src="'+o+'" alt="runtime-core"><img src="'+p+`" alt="runtime-core"></p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>

a<span class="token text string">((\u5F00\u59CB))</span>
a1<span class="token text string">((1.\u521B\u5EFAAPP))</span>
a2<span class="token text string">((2.\u8FDB\u884C\u521D\u59CB\u5316))</span>
a2-1<span class="token text string">((1.\u57FA\u4E8E rootComponent \u751F\u6210 VNode))</span>
a2-2<span class="token text string">((2.\u8FDB\u884C render))</span>
a2-2-1<span class="token text string">((\u8C03\u7528 patch))</span>
a2-2-1-1<span class="token text string">((\u57FA\u4E8E VNode \u7684\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5904\u7406*))</span>
a3-2-1-1<span class="token text string">((\u57FA\u4E8E VNode \u7684\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5904\u7406*))</span>
a4-2-1-1<span class="token text string">((\u57FA\u4E8E VNode \u7684\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7C7B\u578B\u7684\u7EC4\u4EF6\u5904\u7406*))</span>
a2-2-1-1-1<span class="token text string">((\u5904\u7406 shapeFlag &amp; ShapeFlags.COMPONENT \u7C7B\u578B))</span>
a2-2-1-1-1-1<span class="token text string">((\u7EC4\u4EF6\u521D\u59CB\u5316))</span>
a2-2-1-1-1-1-1<span class="token text string">((1.\u521B\u5EFA component instance \u5BF9\u8C61))</span>
a2-2-1-1-1-1-2<span class="token text string">((2.setup component))</span>
a2-2-1-1-1-1-2-1<span class="token text string">((\u521D\u59CB\u5316 props))</span>
a2-2-1-1-1-1-2-2<span class="token text string">((\u521D\u59CB\u5316 slots))</span>
a2-2-1-1-1-1-2-3<span class="token text string">((\u8C03\u7528 setup))</span>
a2-2-1-1-1-1-2-4<span class="token text string">((\u8BBE\u7F6E render \u51FD\u6570))</span>
a2-2-1-1-1-1-3<span class="token text string">((3.setupRenderEffect))</span>
a2-2-1-1-1-1-3-1<span class="token text string">((1.\u8C03\u7528 render \u51FD\u6570\u83B7\u53D6 VNode - \u5B50\u7EC4\u4EF6))</span>
a2-2-1-1-1-1-3-2<span class="token text string">((2.\u89E6\u53D1\u751F\u547D\u5468\u671FbeforeMount hook))</span>
a2-2-1-1-1-1-3-3<span class="token text string">((3.\u8C03\u7528 patch \u521D\u59CB\u5316\u5B50\u7EC4\u4EF6 - \u9012\u5F52))</span>
a2-2-1-1-1-1-3-4<span class="token text string">((4.\u89E6\u53D1\u751F\u547D\u5468\u671F mounted hook))</span>
a2-2-1-1-1-2<span class="token text string">((\u7EC4\u4EF6\u66F4\u65B0))</span>
a2-2-1-1-1-2-1<span class="token text string">((\u68C0\u6D4B\u662F\u5426\u9700\u8981\u66F4\u65B0))</span>
a2-2-1-1-1-2-1-1<span class="token text string">((\u5BF9\u6BD4 props))</span>
a2-2-1-1-1-2-2<span class="token text string">((\u63D0\u524D\u66F4\u65B0\u7EC4\u4EF6component\u7684\u6570\u636E))</span>
a2-2-1-1-1-2-2-1<span class="token text string">((\u66F4\u65B0 props))</span>
a2-2-1-1-1-2-2-2<span class="token text string">((\u66F4\u65B0 slots))</span>
a2-2-1-1-1-2-3<span class="token text string">((\u751F\u6210\u6700\u65B0\u7684 subTree))</span>
a2-2-1-1-1-2-4<span class="token text string">((\u8C03\u7528 patch \u5904\u7406 subTree - \u9012\u5F52))</span>

a2-2-1-1-2<span class="token text string">((\u5904\u7406 shapeFlag &amp; ShapeFlags.ELEMENT \u7C7B\u578B))</span>
a2-2-1-1-2-1<span class="token text string">((element \u521D\u59CB\u5316))</span>
a2-2-1-1-2-1-1<span class="token text string">((1.\u8C03\u7528 hostCreateElement \u51FD\u6570\u521B\u5EFA\u771F\u5B9E\u7684 element))</span>
a2-2-1-1-2-1-2<span class="token text string">((2.\u5904\u7406 children \u8282\u70B9))</span>
a2-2-1-1-2-1-3<span class="token text string">((3.\u8C03\u7528 hosePatchProp \u51FD\u6570\u8BBE\u7F6E\u5143\u7D20\u7684 prop))</span>
a2-2-1-1-2-1-4<span class="token text string">((4.\u89E6\u53D1 beforeMount \u94A9\u5B50\u51FD\u6570))</span>
a2-2-1-1-2-1-5<span class="token text string">((5.\u6E32\u67D3 hostInsert))</span>
a2-2-1-1-2-1-6<span class="token text string">((6.\u89E6\u53D1 Mounted \u94A9\u5B50\u51FD\u6570))</span>

a2-2-1-1-2-1-2-1<span class="token text string">((\u6587\u672C\u7C7B\u578B\u8C03\u7528 hostSetElementText\u51FD\u6570))</span>
a2-2-1-1-2-1-2-2<span class="token text string">((\u6570\u7EC4\u7C7B\u578B\u5FAA\u73AF\u8C03\u7528 patch \u51FD\u6570))</span>

a2-2-1-1-2-1-4-1<span class="token text string">((VNodeHook - \u865A\u62DF\u8282\u70B9))</span>
a2-2-1-1-2-1-4-1-1<span class="token text string">((onVNodeBeforeMount))</span>
a2-2-1-1-2-1-4-2<span class="token text string">((DirectiveHook - \u6307\u4EE4))</span>
a2-2-1-1-2-1-4-2-1<span class="token text string">((beforeMount))</span>
a2-2-1-1-2-1-4-3<span class="token text string">((transition - \u52A8\u753B))</span>
a2-2-1-1-2-1-4-3-1<span class="token text string">((beforeEnter))</span>

a2-2-1-1-2-1-5-1<span class="token text string">((\u63D2\u5165\u771F\u5B9E\u7684 dom \u6811))</span>

a2-2-1-1-2-1-6-1<span class="token text string">((VNodeHook - \u865A\u62DF\u8282\u70B9))</span>
a2-2-1-1-2-1-6-1-1<span class="token text string">((onVNodeBeforeMount))</span>
a2-2-1-1-2-1-6-2<span class="token text string">((DirectiveHook - \u6307\u4EE4))</span>
a2-2-1-1-2-1-6-2-1<span class="token text string">((beforeMount))</span>
a2-2-1-1-2-1-6-3<span class="token text string">((transition - \u52A8\u753B))</span>
a2-2-1-1-2-1-6-3-1<span class="token text string">((beforeEnter))</span>

a2-2-1-1-2-2<span class="token text string">((element \u66F4\u65B0))</span>
a2-2-1-1-2-2-1<span class="token text string">((\u5BF9\u6BD4 props))</span>
a2-2-1-1-2-2-2<span class="token text string">((\u5BF9\u6BD4 children))</span>
a2-2-1-1-2-2-2-1<span class="token text string">((\u904D\u5386\u6240\u6709\u7684 child \u8C03\u7528 patch - \u9012\u5F52))</span>


a <span class="token arrow operator">--&gt;</span> a1
a <span class="token arrow operator">--&gt;</span> a2
a2 <span class="token arrow operator">--&gt;</span> a2-1
a2 <span class="token arrow operator">--&gt;</span> a2-2 <span class="token arrow operator">--&gt;</span> a2-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1

a3-2-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1
a2-2-1-1-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-1
a2-2-1-1-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-2
a2-2-1-1-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-3

a2-2-1-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-2-1
a2-2-1-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-2-2
a2-2-1-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-2-3
a2-2-1-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-2-4

a2-2-1-1-1-1-3 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-3-1
a2-2-1-1-1-1-3 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-3-2
a2-2-1-1-1-1-3 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-3-3
a2-2-1-1-1-1-3 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-1-3-4

a2-2-1-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2
a2-2-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-1-1
a2-2-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-2
a2-2-1-1-1-2-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-2-1
a2-2-1-1-1-2-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-2-2

a2-2-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-3
a2-2-1-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-1-2-4

a2-2-1-1-2-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-2-1
a2-2-1-1-2-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-2-2
a2-2-1-1-2-2-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-2-2-1

a4-2-1-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2
a2-2-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1
a2-2-1-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-2

a2-2-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-1
a2-2-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-2
a2-2-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-3
a2-2-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4
a2-2-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-5
a2-2-1-1-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6

a2-2-1-1-2-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-2-1
a2-2-1-1-2-1-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-2-2

a2-2-1-1-2-1-4 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4-1-1
a2-2-1-1-2-1-4 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4-2-1
a2-2-1-1-2-1-4 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4-3 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-4-3-1

a2-2-1-1-2-1-5 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-5-1

a2-2-1-1-2-1-6 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6-1 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6-1-1
a2-2-1-1-2-1-6 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6-2 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6-2-1
a2-2-1-1-2-1-6 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6-3 <span class="token arrow operator">--&gt;</span> a2-2-1-1-2-1-6-3-1

a2-2-1-1-1-1-3-3 <span class="token arrow operator">--&gt;</span> a2-2-1
a2-2-1-1-1-2-4 <span class="token arrow operator">--&gt;</span> a2-2-1
a2-2-1-1-2-1-2-2 <span class="token arrow operator">--&gt;</span> a2-2-1
a2-2-1-1-2-2-2-1 <span class="token arrow operator">--&gt;</span> a2-2-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[d];function m(u,b){return s(),a("div",null,v)}var k=n(c,[["render",m],["__file","runtimeCoreInit.html.vue"]]);export{k as default};
