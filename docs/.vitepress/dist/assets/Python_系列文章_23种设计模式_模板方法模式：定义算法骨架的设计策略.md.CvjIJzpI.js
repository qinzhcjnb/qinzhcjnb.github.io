import{_ as s,c as i,o as a,aR as n}from"./chunks/framework.DoYNU3c7.js";const g=JSON.parse('{"title":"模板方法模式：定义算法骨架的设计策略","description":"","frontmatter":{},"headers":[],"relativePath":"Python/系列文章/23种设计模式/模板方法模式：定义算法骨架的设计策略.md","filePath":"Python/系列文章/23种设计模式/模板方法模式：定义算法骨架的设计策略.md","lastUpdated":null}'),l={name:"Python/系列文章/23种设计模式/模板方法模式：定义算法骨架的设计策略.md"},t=n(`<h1 id="模板方法模式-定义算法骨架的设计策略" tabindex="-1">模板方法模式：定义算法骨架的设计策略 <a class="header-anchor" href="#模板方法模式-定义算法骨架的设计策略" aria-label="Permalink to &quot;模板方法模式：定义算法骨架的设计策略&quot;">​</a></h1><p>在软件开发中，模板方法模式是一种行为型设计模式，它在父类中定义一个操作的算法框架，允许子类在不改变算法结构的情况下重定义算法的某些步骤。这种模式是基于继承的基本原则，通过抽象类达到代码复用的目的。本文将详细介绍模板方法模式的定义、实现、应用场景以及优缺点。 <img src="https://img-blog.csdnimg.cn/direct/c041e939c76b40ccaa6d49d70d907096.webp#pic_center" alt="在这里插入图片描述"></p><h2 id="_1-模板方法模式的定义" tabindex="-1">1. 模板方法模式的定义 <a class="header-anchor" href="#_1-模板方法模式的定义" aria-label="Permalink to &quot;1. 模板方法模式的定义&quot;">​</a></h2><p>模板方法模式（Template Method Pattern）允许子类在不改变算法结构的前提下重新定义算法中的某些步骤。这是通过在父类中定义一个方法来完成，这个方法封装了所需的算法步骤，其中一些步骤可以由子类实现。</p><h2 id="_2-实现模板方法模式" tabindex="-1">2. 实现模板方法模式 <a class="header-anchor" href="#_2-实现模板方法模式" aria-label="Permalink to &quot;2. 实现模板方法模式&quot;">​</a></h2><p>在Python中，实现模板方法模式通常涉及创建一个抽象基类，其中包含一个模板方法，这个方法按顺序调用其他抽象或具体方法。以下是模板方法模式的一个简单实现示例：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> abc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ABC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, abstractmethod</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbstractClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ABC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;抽象类定义模板方法框架&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> template_method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;模板方法定义算法的框架&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.base_operation()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.required_operations1()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hook1()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.required_operations2()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hook2()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> base_operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AbstractClass says: I am doing the bulk of the work&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @abstractmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required_operations1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @abstractmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required_operations2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hook1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hook2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ConcreteClass1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AbstractClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;具体类实现抽象类的操作&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required_operations1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ConcreteClass1 says: Implemented Operation1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required_operations2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ConcreteClass1 says: Implemented Operation2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ConcreteClass2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AbstractClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;具体类实现抽象类的操作以及覆盖钩子方法&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required_operations1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ConcreteClass2 says: Implemented Operation1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> required_operations2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ConcreteClass2 says: Implemented Operation2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hook1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ConcreteClass2 says: Overridden Hook1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 客户端代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(abstract_class: AbstractClass):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;客户端代码调用模板方法来执行算法&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    abstract_class.template_method()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client_code(ConcreteClass1())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client_code(ConcreteClass2())</span></span></code></pre></div><h2 id="_3-模板方法模式的应用实例" tabindex="-1">3. 模板方法模式的应用实例 <a class="header-anchor" href="#_3-模板方法模式的应用实例" aria-label="Permalink to &quot;3. 模板方法模式的应用实例&quot;">​</a></h2><p>模板方法模式在许多场景中非常有用，尤其适用于：</p><ul><li><strong>软件框架</strong>：定义框架的骨架，允许用户扩展特定的操作。</li><li><strong>算法库</strong>：提供算法的基本步骤，让用户自定义特定步骤的实现。</li><li><strong>生命周期管理</strong>：在需要控制复杂对象生命周期的场景中。</li></ul><h2 id="_4-优点和缺点" tabindex="-1">4. 优点和缺点 <a class="header-anchor" href="#_4-优点和缺点" aria-label="Permalink to &quot;4. 优点和缺点&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h3><ul><li>提供了代码复用和扩展的强大手段。</li><li>利用模板方法实现了反向控制，即父类调用子类操作。</li></ul><h3 id="缺点" tabindex="-1">缺点： <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点：&quot;">​</a></h3><ul><li>可能导致由于子类扩展方法过多而导致系统更加复杂。</li></ul><h2 id="_5-总结" tabindex="-1">5. 总结 <a class="header-anchor" href="#_5-总结" aria-label="Permalink to &quot;5. 总结&quot;">​</a></h2><p>模板方法模式通过定义一个操作的主要算法框架，并允许子类提供具体的行为实现，提供了一种构建可扩展应用程序的强大方法。这种模式特别适用于一些固定算法框架的场景，但需要在具体情况中灵活应用。</p>`,17),h=[t];function p(e,k,r,d,o,E){return a(),i("div",null,h)}const y=s(l,[["render",p]]);export{g as __pageData,y as default};
