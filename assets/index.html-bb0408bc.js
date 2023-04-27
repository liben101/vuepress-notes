import{_ as n,p as s,q as a,a1 as e}from"./framework-204010b2.js";const t={},i=e(`<h1 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ruoyi<span class="token punctuation">.</span>production<span class="token punctuation">.</span>enums</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 单据触发规则对应的业务枚举
 * <span class="token keyword">@author</span>: DuanBiqiang
 * <span class="token keyword">@e-mail</span>: duanbq@zbmes.com
 * <span class="token keyword">@date</span>: 2023/04/24 10:59
 */</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">OtherBillPropEnum</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 其他出库单属性
     * 说明：研发类型的其他出库单，必须选择研发项目。free1和free2字段分别存储的是研发项目编码和研发项目名称
     *
     */</span>
    <span class="token function">RESEARCH_AND_DEVELOPMENT</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;研发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SAMPLE</span><span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;试样&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">OTHER</span> <span class="token punctuation">(</span><span class="token string">&quot;99&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;其他&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * 枚举值
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> value <span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 枚举描述
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> text <span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token class-name">OtherBillPropEnum</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">,</span> <span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[i];function p(l,o){return s(),a("div",null,c)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
