import{_ as p,W as t,X as o,a0 as n,a1 as s,Z as e,$ as c,C as l}from"./framework-c8643d23.js";const u={},i=n("h1",{id:"剑指-offer-12-矩阵中的路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#剑指-offer-12-矩阵中的路径","aria-hidden":"true"},"#"),s(" 剑指 Offer 12. 矩阵中的路径")],-1),k={href:"https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。</p><p>单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。</p><h2 id="想法-回溯" tabindex="-1"><a class="header-anchor" href="#想法-回溯" aria-hidden="true">#</a> 想法：回溯</h2><p>建议读者读到这题可以亲自试试这题，这道题核心思想就是回溯，是我第二次遇到回溯的问题了，很不熟练，而且这道题评论区说可以升级为困难题，我也是写了一下午，非常浪费时间。如果要看懂是没辙，只能亲自写试试。因为要考虑的问题有点多。</p><p>我的思路是这样：</p><ul><li>先写最后的递归判断<code>at == word.length()</code></li><li><em>边缘检测</em></li><li><em>四周检测</em></li><li>此时递归部分写的差不多了，这时是可以运行的，但是会遇到一个问题 <ul><li>[[&quot;a&quot;,&quot;a&quot;]] &quot;aaa&quot;这个问题是解决不了的，核心问题就是访问了以前访问过的元素</li><li>解决：引出<code>visited</code>进行标记</li></ul></li><li>标记以后，也可以运行，但是会出现另外一个问题 <ul><li>[[&quot;a&quot;,&quot;b&quot;]] &quot;ba&quot; 这个问题是解决不了，核心问题就在于只进行了一次回溯</li><li>解决：那么就加入<code>for循环</code></li></ul></li><li>至此所有问题考虑到位，可以完成此问题</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> visited<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">exist</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">,</span> <span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> m <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">,</span> n <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">backtrack</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> word<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> board<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token class-name">String</span> word<span class="token punctuation">,</span> <span class="token keyword">int</span> at<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//  找到⼀个可⾏解，触发 base case</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>at <span class="token operator">==</span> word<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 边缘检测</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> board<span class="token punctuation">.</span>length <span class="token operator">||</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>at<span class="token punctuation">)</span> <span class="token operator">||</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 遍历过的元素进行标记</span>
        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">// 四周检测</span>
        <span class="token keyword">boolean</span> res <span class="token operator">=</span> 
        <span class="token function">backtrack</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> word<span class="token punctuation">,</span>at <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token function">backtrack</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> word<span class="token punctuation">,</span> at <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> 
        <span class="token function">backtrack</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> word<span class="token punctuation">,</span> at <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token function">backtrack</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i <span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> word<span class="token punctuation">,</span> at <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 还原标记</span>
        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 啥都没找到</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行结果：通过</p><p>执行用时：5 ms, 在所有 Java 提交中击败了57.98% 的用户</p><p>内存消耗：43.2 MB, 在所有 Java 提交中击败了60.52% 的用户</p><p>通过测试用例：87 / 87</p></blockquote>`,9);function d(b,v){const a=l("ExternalLinkIcon");return t(),o("div",null,[i,n("p",null,[n("a",k,[s("https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/"),e(a)])]),r])}const w=p(u,[["render",d],["__file","12-矩阵中的路径.html.vue"]]);export{w as default};
