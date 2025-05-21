vanjs version: 0.1.1, last updated: 2025-05-21T10:57:52.610Z

**VanJS**: A 1.0kB Grab 'n Go Reactive UI Framework without React/JSX
=====================================================================

📣 [Introducing **VanX** →](https://github.com/vanjs-org/van/discussions/144)

> _Enable everyone to build useful UI apps with a few lines of code, anywhere, any time, on any device._

**VanJS** ([abbreviated **Van**illa **J**ava**S**cript](/about#name)) is an **_ultra-lightweight_**, **_zero-dependency_**, and **_unopinionated_** Reactive UI framework based on pure vanilla JavaScript and DOM. Programming with **VanJS** feels like building React apps in a [scripting language](/about#story), without JSX. Check-out the `Hello World` code below:

    // Reusable components can be just pure vanilla JavaScript functions.
    // Here we capitalize the first letter to follow React conventions.
    const Hello = () => div(
      p("👋Hello"),
      ul(
        li("🗺️World"),
        li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
      ),
    )
    
    van.add(document.body, Hello())
    // Alternatively, you can write:
    // document.body.appendChild(Hello())
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/home/hello)

You can convert any HTML or MD snippet into **VanJS** code with our online [converter](/convert).

**VanJS** helps you manage states and UI bindings as well, with a more natural API:

    const Counter = () => {
      const counter = van.state(0)
      return span(
        "❤️ ", counter, " ",
        button({onclick: () => ++counter.val}, "👍"),
        button({onclick: () => --counter.val}, "👎"),
      )
    }
    
    van.add(document.body, Counter())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/home/counter)

[Why VanJS?](#why-vanjs)
------------------------

* * *

### [Reactive Programming without React/JSX](#reactive-programming-without-react-jsx)

Declarative DOM tree composition, reusable components, reactive state binding - **VanJS** offers every good aspect that React does, but without the need of React, JSX, transpiling, virtual DOM, or any hidden logic. Everything is built with simple JavaScript functions and DOM.

### [Grab 'n Go](#grab-n-go)

**_No installation_**, **_no configuration_**, **_no dependencies_**, **_no transpiling_**, **_no IDE setups_**. Adding a line to your script or HTML file is all you need to start coding. And any code with **VanJS** can be pasted and executed directly in your browser's developer console. **VanJS** allows you to focus on the business logic of your application, rather than getting bogged down in frameworks and tools.

### [Ultra-Lightweight](#ultra-lightweight)

**VanJS** is the smallest reactive UI framework in the world, with just 1.0kB in the gzipped minified bundle. It's **50~100 times** smaller than most popular alternatives. Guess what you can get from this 1.0kB framework? All essential features of modern web frameworks - DOM templating, state, state binding, state derivation, effect, SPA, client-side routing and even hydration!

.min.js.gz .min.js

> _Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.  
>   
> \-- Antoine de Saint-Exupéry, Airman's Odyssey_

### [Easy to Learn](#easy-to-learn)

Simplicity at its core. Only 5 functions (`van.tags`, `van.add`, `van.state`, `van.derive`, `van.hydrate`). The entire tutorial plus the API reference is [just one single web page](/tutorial), and can be learned within 1 hour for most developers.

### [Performance](#performance)

**VanJS** is among the fastest web frameworks, according to the [results](https://krausest.github.io/js-framework-benchmark/2023/table_chrome_117.0.5938.62.html) by [krausest/js-framework-benchmark](https://github.com/krausest/js-framework-benchmark). For SSR, **Mini-Van** is [**1.75X** to **2.25X** more efficient](https://github.com/vanjs-org/mini-van/tree/main/bench#react-vs-mini-van) compared to React.

### [TypeScript Support](#typescript-support)

**VanJS** provides first-class support for TypeScript. With the `.d.ts` file in place, you'll be able to take advantage of type-checking, IntelliSense, large-scale refactoring provided by your preferred development environment. Refer to the [Download Table](/start#download-table) to find the right `.d.ts` file to work with.

[Want to Learn More?](#want-to-learn-more)
------------------------------------------

* * *

*   [Get Started](/start) (CDN, NPM or local download)
*   Learn from the [Tutorial](/tutorial)
*   Learn by [Examples](/demo) (and also [Community Examples](/demo#community-examples))
*   Get bored? [Play a fun game](/demo#game) built with **VanJS** under 60 lines
*   Convert HTML or MD snippet to **VanJS** code with our online [HTML/MD to **VanJS** Converter](/convert)
*   Check out [**VanUI**](/vanui) - A collection of grab 'n go reusable utility and UI components for **VanJS**
*   Want reactive list, global app state, server-driven UI, serialization and more? Check out [**VanX**](/x) - The 1.2kB official **VanJS** extension
*   Want server-side rendering? Check out [**Mini-Van**](/minivan) and [Hydration](/ssr) (the entire vanjs.org site is built on top of **Mini-Van**)
*   Debugging complex dependencies in your app? checkout [**VanGraph**](/graph)
*   For questions, feedback or general discussions, visit our [Discussions](https://github.com/vanjs-org/van/discussions) page
*   ✨ [Ask **VanJS** Guru](https://gurubase.io/g/vanjs) - a **VanJS**\-focused AI to answer your questions

[Source Code](#source-code)
---------------------------

* * *

[github.com/vanjs-org/van](https://github.com/vanjs-org/van)

See also: [A Guide to Reading **VanJS** Codebase](/about#source-guide)

[IDE Plug-ins](#ide-plug-ins)
-----------------------------

* * *

[VS Code Extension](https://marketplace.visualstudio.com/items?itemName=TaoXin.vanjs-importtag)

[Community Add-ons](#community-add-ons)
---------------------------------------

* * *

**VanJS** can be extended via add-ons. Add-ons add more features to **VanJS** and/or provide an alternative styled API. Below is a curated list of add-ons built by **VanJS** community:

Add-on

Description

Author

[Van Cone](https://medium-tech.github.io/van-cone-website/)

An SPA framework add-on for **VanJS**

[b-rad-c](https://github.com/b-rad-c)

[van\_element](https://van-element.pages.dev/)

Web Components with **VanJS**

[Atmos4](https://github.com/Atmos4)

[VanJS Feather](https://thednp.github.io/vanjs-feather/)

Feather Icons for **VanJS**

[thednp](https://github.com/thednp)

[van\_dml.js](https://github.com/vanjs-org/van/blob/main/addons/van_dml)

A new flavour of composition for **VanJS**

[Eckehard](https://github.com/efpage)

[van-jsx](https://github.com/vanjs-org/van/blob/main/addons/van_jsx)

A JSX wrapper for **VanJS**, for people who like the JSX syntax more

[cqh963852](https://github.com/cqh963852)

[vanjs-router](https://github.com/iuroc/vanjs-router)

A router solution for **VanJS** (`README.md` in simplified Chinese)

[欧阳鹏](https://github.com/iuroc)

[VanJS Routing](https://github.com/kwameopareasiedu/vanjs-routing)

Yet another routing solution for **VanJS**

[Kwame Opare Asiedu](https://github.com/kwameopareasiedu)

[VanJS Form](https://github.com/kwameopareasiedu/vanjs-form)

Fully typed form state management library (with validation) for **VanJS**

[Kwame Opare Asiedu](https://github.com/kwameopareasiedu)

[vanjs-bootstrap](https://github.com/WilliCommer/vanjs-bootstrap)

**VanJS** Bootstrap Components

[Willi Commer](https://github.com/WilliCommer)

[vanrx](https://github.com/MeddahAbdellah/vanrx)

An ultra-lightweight Redux addon for **VanJS**

[Meddah Abdallah](https://github.com/MeddahAbdellah)

[VanFS](https://github.com/ken-okabe/vanfs)

1:1 bindings from F# to **VanJS**

[Ken Okabe](https://github.com/ken-okabe)

[Van-wrapper](https://github.com/zakarialaoui10/van-wrapper)

A tool that facilitates the rendering of **VanJS** elements within other popular frameworks

[Zakaria Elalaoui](https://github.com/zakarialaoui10)

[Create VanJS](https://github.com/thednp/create-vanjs)

The fastest way to kickstart your first **VanJS** Project: `npm create vanjs@latest`

[thednp](https://github.com/thednp)

[Vite Plugin for VanJS](https://github.com/thednp/vite-plugin-vanjs)

A mini meta-framework for **VanJS** featuring routing, metadata, isomorphic rendering and JSX transformation

[thednp](https://github.com/thednp)

[Vite VanJS SVG](https://github.com/thednp/vite-vanjs-svg)

A Vite plugin to transform SVG files to **VanJS** components on the fly

[thednp](https://github.com/thednp)

[VanJS Lucide](https://thednp.github.io/vanjs-lucide)

Lucide Icons for **VanJS**

[thednp](https://github.com/thednp)

[Support & Feedback](#support-feedback)
---------------------------------------

* * *

🙏 **VanJS** aims to build a better world by reducing the entry barrier of UI programming, with no intention or plan on commercialization whatsoever. If you find **VanJS** interesting, or could be useful for you some day, please consider starring the project on [GitHub](https://github.com/vanjs-org/van). It takes just a few seconds but your support means the world to us and helps spread **VanJS** to a wider audience.

[Star](https://github.com/vanjs-org/van) [Watch](https://github.com/vanjs-org/van/subscription) [Discuss](https://github.com/vanjs-org/van/discussions) [Issue](https://github.com/vanjs-org/van/issues) [Follow @vanjs-org](https://github.com/vanjs-org)

> _In the name of **Van**illa of the House **J**ava**S**cript, [the First of its name](/about#name), Smallest Reactive UI Framework, 1.0kB JSX-free Grab 'n Go Library, [Scripting Language](https://vanjs.org/about#story) for GUI, [GPT-Empowered](https://chat.openai.com/g/g-7tcSHUu27-vanjs-app-builder) Toolkit, by the word of Tao of the House Xin, Founder and Maintainer of **VanJS**, I do hereby grant you the permission of **VanJS** under [MIT License](https://github.com/vanjs-org/van/blob/main/LICENSE)._

Contact us: [@taoxin](https://x.com/intent/follow?region=follow_link&screen_name=taoxin) / [Tao Xin](https://github.com/Tao-VanJS) / [\[email protected\]](/cdn-cgi/l/email-protection#f98d9896b98f9897938ad7968b9e) / [Tao Xin](https://www.linkedin.com/in/taoxin/)

**VanJS**: Getting Started
==========================

> _Truth is ever to be found in the simplicity, and not in the multiplicity and confusion of things.  
>   
> \-- Isaac Newton_

To get started, add the line below to your script:

    import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.min.js"

To code without ES6 modules, add the following line to your HTML file instead:

    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.5.nomodule.min.js"></script>

Alternative, you can download the files (`[van-1.5.5.min.js](/code/van-1.5.5.min.js "Download van-1.5.5.min.js")`, `[van-1.5.5.nomodule.min.js](/code/van-1.5.5.nomodule.min.js "Download van-1.5.5.nomodule.min.js")`) and serve them locally.

[NPM Integration](#npm-integration)
-----------------------------------

* * *

It's also possible to integrate with **VanJS** via NPM, making it handy to build web applications with tools like [Vite](https://vitejs.dev/) or [Parcel](https://parceljs.org/). You can also build your own NPM packages that depend on **VanJS**. To get started with **VanJS** via NPM, run:

    npm install vanjs-core

To use the **VanJS** NPM package, add this line to your script:

    import van from "vanjs-core"

or this line if you want to import the debug version of **VanJS**:

    import van from "vanjs-core/debug"

You can check out the `[Hello World](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/npm-examples/hello?file=%2Fsrc%2Fmain.ts%3A1%2C1)` app built with **VanJS** NPM + Vite ([source code](https://github.com/vanjs-org/van/tree/main/npm-examples/hello)).

[TypeScript Support for Non-NPM Integration](#typescript-support-for-non-npm-integration)
-----------------------------------------------------------------------------------------

* * *

### [For ESM Modules](#for-esm-modules)

To get TypeScript support for your ESM modules, download the corresponding `.d.ts` file from the [Download Table](#download-table) and store it alongside the `.js` source file, and then import the `.js` file as normal:

    import van from "./van-1.5.5.min.js"

### [For Script Tag](#for-script-tag)

To get TypeScript support for code that would be imported via a `<script>` tag, download a `.d.ts` file from the [Download Table](#download-table) (any file from the table would work), and then add the following code at the top of your `.ts` file:

    import type { Van } from "./van-1.5.5.d.ts"
    
    declare const van: Van
    

[Test It Out](#test-it-out)
---------------------------

* * *

The following code will produce a funnier `Hello` component:

    const {button, div, pre} = van.tags
    
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    const Run = ({sleepMs}) => {
      const steps = van.state(0)
      ;(async () => { for (; steps.val < 40; ++steps.val) await sleep(sleepMs) })()
      return pre(() => `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`)
    }
    
    const Hello = () => {
      const dom = div()
      return div(
        dom,
        button({onclick: () => van.add(dom, Run({sleepMs: 2000}))}, "Hello 🐌"),
        button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "Hello 🐢"),
        button({onclick: () => van.add(dom, Run({sleepMs: 100}))}, "Hello 🚶‍♂️"),
        button({onclick: () => van.add(dom, Run({sleepMs: 10}))}, "Hello 🏎️"),
        button({onclick: () => van.add(dom, Run({sleepMs: 2}))}, "Hello 🚀"),
      )
    }
    
    van.add(document.body, Hello())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/start/hello-fun)

_If you encounter problems after pasting the code above to your HTML file, be mindful of where to place your script. See [#9](https://github.com/vanjs-org/vanjs-org.github.io/pull/9) for a detailed discussion._

[Download Table](#download-table)
---------------------------------

* * *

**VanJS**: Tutorial and API Reference
=====================================

📣 [**VanJS**'s API was simplified in 1.4.0, see the release notes and migration guide →](https://github.com/vanjs-org/van/discussions/280)

> _Entia non sunt multiplicanda praeter necessitatem  
> (The best solution is usually the one with the least unnecessary complexity)  
>   
> \-- Occam's Razor_

In this tutorial, we will break down into 3 core functionalities **VanJS** supports: DOM composition / manipulation, State and State binding.

[DOM Composition and Manipulation](#dom)
----------------------------------------

* * *

### [Your first VanJS app: a simple `Hello` page](#your-first-vanjs-app-a-simple-hello-page)

We will start this tutorial with a simple `Hello` page, with the code below:

    const {a, div, li, p, ul} = van.tags
    
    const Hello = () => div(
      p("👋Hello"),
      ul(
        li("🗺️World"),
        li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
      ),
    )
    
    van.add(document.body, Hello())
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/hello)

The code should be self-explanatory if you have some familiarity with HTML. Unlike React, everything in the code above is just pure JavaScript, meaning that you are simply calling functions from `van.js` without any transpiling that converts your source code into another form. Reusable UI components built with **VanJS** can be pure vanilla JavaScript functions as well. Here we capitalize the first letter to follow React conventions.

Also unlike React, **VanJS** does not introduce an ad-hoc virtual DOM layer. All the tag functions above directly return the created DOM objects. e.g.: the function call `p("👋Hello")` simply creates an `[HTMLParagraphElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)` with `👋Hello` as its `[innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)`, meaning that you can directly interact with your created DOM nodes with native DOM APIs.

💡 **Tip**: If you are tired of adding all the tag function names manually in the importing line:

    const {a, div, li, p, ul} = van.tags

we have built a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=TaoXin.vanjs-importtag) with the command that can automatically import the tag function at the cursor. You can check out its [GitHub repo](https://github.com/vanjs-org/vanjs-importtag) for more details.

### [API reference: `van.tags`](#api-tags)

`van.tags` is a top-level dynamic object in **VanJS** implemented with `[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)`. `van.tags.<name>` gets you a function that creates an HTML element with tag name `<name>`. A common way of using `van.tags` is like the line below:

    const {a, div, p} = van.tags

With the line, `a`, `div`, `p` are functions that create `<a>`, `<div>`, `<p>` HTML elements respectively.

We will use `div` function as an example, the API reference for `div` tag function is as below:

**Signature**

`div([props], ...children) => <the created DOM element>`

**Description**

Creates an `[HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)` with `props` as its properties and `children` as its child nodes.

**Parameters**

*   **`props`** - optional, a plain JavaScript object whose keys and values are the keys and values of the properties of the created HTML element. Keys should be `string`, and each value can be a primitive (`string`, `number`, `boolean` or `bigint`), `null`, a primitive-valued or `null`\-valued `State` object, or a `function` for a `State`\-derived property. We will explain the behavior of [`State`\-typed](#state-typed-prop) and [`State`\-derived](#state-derived-prop) properties in State Binding section below. For keys like `on...`, the value should be a `function` to represent the event handler.
*   **`children`** - caller can provide 0 or more children as arguments to represent the child nodes of the created HTML element. Each child can be a valid DOM node, a primitive (`string`, `number`, `boolean` or `bigint`), `null`, `undefined`, a primitive-valued or `null`/`undefined`\-valued `State` object, a `function` for a `State`\-derived child, or an `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)` of children. `null`/`undefined`\-valued children will be ignored. A `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for each primitive-typed argument. We will explain the behavior of [`State`\-typed child](#state-typed-child) and [`State`\-derived child](#state-derived-child) in State Binding section below. For DOM node, it shouldn't be already connected to a document tree (`[isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)` property should be `false`). i.e.: You should not declare an existing DOM node in the current document as the child node of the newly created element.

**Returns**

The `[HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)` object just created.

### [SVG and MathML Support](#svg-and-mathml-support)

To create HTML elements with custom `[namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI)`, you can declare tag functions via `van.tags(<namespaceURI>)` (or `van.tagsNS(<namespaceURI>)` _before **VanJS** [1.4.0](https://github.com/vanjs-org/van/discussions/280)_). Here is an example of composing the SVG DOM tree:

    const {circle, path, svg} = van.tags("http://www.w3.org/2000/svg")
    
    const Smiley = () => svg({width: "16px", viewBox: "0 0 50 50"},
      circle({cx: "25", cy: "25", "r": "20", stroke: "black", "stroke-width": "2", fill: "yellow"}),
      circle({cx: "16", cy: "20", "r": "2", stroke: "black", "stroke-width": "2", fill: "black"}),
      circle({cx: "34", cy: "20", "r": "2", stroke: "black", "stroke-width": "2", fill: "black"}),
      path({"d": "M 15 30 Q 25 40, 35 30", stroke: "black", "stroke-width": "2", fill: "transparent"}),
    )
    
    van.add(document.body, Smiley())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/smiley)

Similarly, math formulas can be created with `[MathML](https://developer.mozilla.org/en-US/docs/Web/MathML/Element)` elements:

    const {math, mi, mn, mo, mrow, msup} = van.tags("http://www.w3.org/1998/Math/MathML")
    
    const Euler = () => math(
      msup(mi("e"), mrow(mi("i"), mi("π"))), mo("+"), mn("1"), mo("="), mn("0"),
    )
    
    van.add(document.body, Euler())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/euler)

### [API reference `van.tags` (for elements with custom namespace URI)](#api-tagsns)

**Signature**

`van.tags(namespaceURI) => <the created tags object for elements with specified namespaceURI>`

**Description**

Creates a tags `[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)` object similar to `[van.tags](#api-tags)` for elements with specified `namespaceURI`.

**Parameters**

*   **`namespaceURI`** - a string for the `namespaceURI` property of elements created via tag functions.

**Returns**

The created tags object.

### [Specifying `options` of `createElement` or `createElementNS`](#specifying-options-of-createelement-or-createelementns)

_Requires **VanJS** [1.5.3](https://github.com/vanjs-org/van/discussions/290#discussioncomment-11744512) or later._

You can also specify `[options](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#options)` of the function `[document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)` or `[document.createElementNS](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)` in the `props` argument of tag functions. Below is an example where `[is](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#is)` option is specified to create an element with custom behavior:

    const {button} = van.tags
    
    class MyButton extends HTMLButtonElement {
      connectedCallback() {
        this.addEventListener("click", () => alert("MyButton clicked!"))
      }
    }
    customElements.define("my-button", MyButton, {extends: "button"})
    
    const CustomButton = () => button({is: "my-button"}, "Click me")
    
    van.add(document.body, CustomButton())
    

**Demo:**

### [API reference: `van.add`](#api-add)

`van.add` function is similar to tag functions described above. Instead of creating a new HTML element with specified properties and children, `van.add` function mutates its first argument (which is an existing `[Element node](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)`) by appending 0 or more children with `[appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)` calls:

**Signature**

`van.add(dom, ...children) => dom`

**Description**

Mutates `dom` by appending 0 or more child nodes to it. Returns `dom` for possibly further chaining.

**Parameters**

*   **`dom`** - an existing DOM element (or `[DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)` _since **VanJS** [1.5.5](https://github.com/vanjs-org/van/discussions/290#discussioncomment-12956581)_) that we want to append children to.
*   **`children`** - caller can provide 0 or more `children` as arguments to represent the child nodes we want to append to `dom`. Each child can be a valid DOM node, a primitive, `null`, `undefined`, a primitive-valued or `null`/`undefined`\-valued `State` object, a `function` for a `State`\-derived child, or an `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)` of children. `null`/`undefined`\-valued children will be ignored. A `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for each primitive-typed argument. [`State`\-typed child](#state-typed-child) and [`State`\-derived child](#state-derived-child) behave the same way as in tag function. For DOM node, it shouldn't be already connected to a document tree (`[isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)` property should be `false`). i.e.: You should not append an existing DOM node in the current document to `dom`. If 0 children is provided, this function is a no-op.

**Returns**

`dom`

### [DOM nodes already in the document tree can't be used as `children`](#dom-nodes-already-in-the-document-tree-can-t-be-used-as-children)

As mentioned in the API reference, if a DOM node is already connected to the document tree, it shouldn't be used as the child node of tag function or `van.add`. The following code is invalid and an `[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)` will be thrown when `van-<version>.debug.js` is being used:

    const existing = document.getElementById("some-id")
    
    // Invalid! Existing node can't be used as the child node of tag function.
    const dom = div({id: "new-id"}, existing)
    
    // Invalid! Existing node can't be appended to other nodes in `van.add`.
    van.add(document.body, existing)

### [Functional-style DOM tree building](#fun-dom)

Because both tag functions and `van.add` can take `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)` arguments and the `Array` arguments can be deeply nested. **VanJS** enables very ergonomic DOM tree composition in functional-style. See examples below:

Building a bullet list:

    const {li, ul} = van.tags
    
    const List = ({items}) => ul(items.map(it => li(it)))
    
    van.add(document.body, List({items: ["Item 1", "Item 2", "Item 3"]}))
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/list)

Building a table:

    const {table, tbody, thead, td, th, tr} = van.tags
    
    const Table = ({head, data}) => table(
      head ? thead(tr(head.map(h => th(h)))) : [],
      tbody(data.map(row => tr(
        row.map(col => td(col)),
      ))),
    )
    
    van.add(document.body, Table({
      head: ["ID", "Name", "Country"],
      data: [
        [1, "John Doe", "US"],
        [2, "Jane Smith", "CA"],
        [3, "Bob Johnson", "AU"],
      ],
    }))
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/table)

### [`on...` event handlers](#on-event-handlers)

In tag functions, you can provide a `function` value for property keys like `on...`. This is a convenient way to specify event handlers. For instance, the code below creates a `[button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)` that shows an alert whenever clicked:

    button({onclick: () => alert("Hello from 🍦VanJS")}, "Hello")

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/onclick)

_The support of custom event handlers was added in **VanJS** [1.2.8](https://github.com/vanjs-org/van/discussions/246)._

🎉 Congratulations! You have mastered the skills for building and manipulating DOM trees using **VanJS**'s declarative API, which is incredibly powerful for creating comprehensive applications with elegant code. In the sections below, you will continue to learn how to build reactive applications with state and state binding.

If your application doesn't rely on state and state binding, you can use the slimmed-down version of **VanJS** - [Mini-Van](/minivan).

[State](#state)
---------------

* * *

A `State` object in **VanJS** represents a value that can be updated throughout your application. A `State` object has a public property `val`, with a [custom setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) that automatically propagates changes to DOM nodes that are bound to it.

The code below illustrates how a `State` object can be used:

    const {button, div, input, sup} = van.tags
    
    // Create a new state object with init value 1
    const counter = van.state(1)
    
    // Log whenever the value of the state is updated
    van.derive(() => console.log(`Counter: ${counter.val}`))
    
    // Derived state
    const counterSquared = van.derive(() => counter.val * counter.val)
    
    // Used as a child node
    const dom1 = div(counter)
    
    // Used as a property
    const dom2 = input({type: "number", value: counter, disabled: true})
    
    // Used in a state-derived property
    const dom3 = div({style: () => `font-size: ${counter.val}em;`}, "Text")
    
    // Used in a state-derived child
    const dom4 = div(counter, sup(2), () => ` = ${counterSquared.val}`)
    
    // Button to increment the value of the state
    const incrementBtn = button({onclick: () => ++counter.val}, "Increment")
    const resetBtn = button({onclick: () => counter.val = 1}, "Reset")
    
    van.add(document.body, incrementBtn, resetBtn, dom1, dom2, dom3, dom4)
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/state)

### [API reference: `van.state`](#api-state)

**Signature**

`van.state(initVal) => <the created State object>`

**Description**

Creates a `State` object with its init value specified in the argument.

**Parameters**

*   **`initVal`** - the init value of the `State` object to be created.

**Returns**

The created `State` object.

### [Public interface of `State` objects](#public-interface-of-state-objects)

*   Property `**val**` - the current value of the `State` object. When a new value of this property is set, all [derived states](#derived-state) and [side effects](#side-effect) registered via `[van.derive](#api-derive)` and all DOM nodes that are bound to it will be updated accordingly.
*   Readonly property `**oldVal**` - the old value of the `State` object prior to the current UI update cycle. This property might be useful for [stateful binding](#stateful-binding).
*   Readonly property `**rawVal**` - _(requires **VanJS** [1.5.0](https://github.com/vanjs-org/van/discussions/290) or later)_ getting the current value of the `State` object (peeking) without registering the state as a dependency of the binding function for the derived state, side effect or DOM node. For instance, the derived state `van.derive(() => a.rawVal + b.val)` will be updated when `b` changes, but won't be updated when `a` changes.

The value of a `State` object can be almost anything, primitive, `[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)`, `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)`, `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)`, etc., with 2 ad-hoc exceptions that we made: The value of the `State` object cannot be a DOM node, or another `State` object. Having values in these 2 types carries little semantic information and is more likely a result of coding bugs. Thus we disallow `State` objects to have values in these 2 types. In `van-{version}.debug.js`, an explicit error will be thrown if you try to assign a DOM node or another `State` object as the value of a state.

See also: [Why can't states have DOM node as values?](/advanced#why-not-dom-valued-states)

### [`State.val` is immutable](#state-val-is-immutable)

While you can update `State` objects by setting the `val` property, you should never mutate the underlying object of `val` itself. Doing so will not trigger the DOM tree update as you would expect and might result in [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior) due to [aliasing](https://en.wikipedia.org/wiki/Aliasing_\(computing\)).

### [Derived state](#derived-state)

Derived states can be declared via `van.derive`, as illustrated in the example below:

    const {input, span} = van.tags
    
    const DerivedState = () => {
      const text = van.state("VanJS")
      const length = van.derive(() => text.val.length)
      return span(
        "The length of ",
        input({type: "text", value: text, oninput: e => text.val = e.target.value}),
        " is ", length, ".",
      )
    }
    
    van.add(document.body, DerivedState())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/derived-state)

### [API reference: `van.derive`](#api-derive)

**Signature**

`van.derive(f) => <the created derived state>`

**Description**

Creates a derived `State` object based on the derivation function `f`. The `val` of the derived state is always in sync with the result of `f`. i.e.: whenever the `val` of its dependency changes, `f` will be called to update the `val` of the derived state, synchronously.

**Parameters**

*   **`f`** - The derivation function, which takes no parameter and returns a single value.

**Returns**

The created derived `State` object.

Note that: Since [**VanJS** 1.5.0](https://github.com/vanjs-org/van/discussions/290), we have changed the execution of state derivation from synchronous to asynchronous as an optimization to avoid potentially unnecessary derivations. That is, instead of executing state derivations immediately, the derivations are scheduled to execute as soon as the next event cycle of browser context (i.e.: after the current call stack is cleared, which is equivalent to `setTimeout(..., 0)`). The effect of the asynchronous derivation can be illustrated by the code below:

    const a = van.state(1)
    const b = van.derive(() => a.val * 2)
    a.val = 2
    console.log("b.val =", b.val) // Expecting 2
    setTimeout(() => console.log("b.val =", b.val), 10) // Expecting 4

### [Side effect](#side-effect)

`van.derive` can be used to declare side effects as well. You can discard the return value of `van.derive` if you are not interested. The code below is a modified `Counter App` which logs the counter to console whenever it changes:

    const {button, span} = van.tags
    
    const Counter = () => {
      const counter = van.state(0)
      van.derive(() => console.log("Counter: ", counter.val))
      return span(
        "❤️ ", counter, " ",
        button({onclick: () => ++counter.val}, "👍"),
        button({onclick: () => --counter.val}, "👎"),
      )
    }
    
    van.add(document.body, Counter())
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/effect)

See also: [Advanced state derivation](/advanced#advanced-state-derivation)

[State Binding](#state-binding)
-------------------------------

* * *

Once `State` objects are created, we can bind them to DOM nodes in various ways to make your UI reactive to state changes.

### [`State` objects as properties](#state-typed-prop)

`State` objects can be used as properties of HTML elements. Similar to `State`\-based child nodes, the value of the properties will be always in sync with the value of the respective states. When `State` objects are used as properties, you need to make sure that the values of the states are always valid property values, i.e.: primitives or `function`s (for event handlers).

The following code demonstrates 2 `[text inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)` whose values are always in sync:

    const {input, span} = van.tags
    
    const ConnectedProps = () => {
      const text = van.state("")
      return span(
        input({type: "text", value: text, oninput: e => text.val = e.target.value}),
        input({type: "text", value: text, oninput: e => text.val = e.target.value}),
      )
    }
    
    van.add(document.body, ConnectedProps())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/connected-props)

### [`State` objects as child nodes](#state-typed-child)

`State` objects can be used as child nodes in `[tag functions](#api-tags)` and `[van.add](#api-add)`, like the `[Counter](/#code-counter)` example shown in the home page. For a `State` object used as a child node, its value needs to be primitive (`string`, `number`, `boolean` or `bigint`), and a `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for it. The content of the created `Text node` will be always in sync with the value of the state.

The following code shows how to build a simple timer with this feature:

    const {button, span} = van.tags
    
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    const Timer = ({totalSecs}) => {
      const secs = van.state(totalSecs)
      return span(
        secs, "s ",
        button({onclick: async () => {
          while (secs.val > 0) await sleep(1000), --secs.val
          await sleep(10) // Wait briefly for DOM update
          alert("⏰: Time is up")
          secs.val = totalSecs
        }}, "Start"),
      )
    }
    
    van.add(document.body, Timer({totalSecs: 5}))
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/timer)

### [`State`\-derived properties](#state-derived-prop)

`State`\-derived property is a more advanced way to bind a property of an HTML element to one or more underlying `State` objects. To declare a `State`\-derived property, you need to provide a function as the value in `props` argument while calling to a `[tag function](#api-tags)`. The function takes no parameter and return the value of the property. Whenever any dependency of the function changes, the value of the property will be updated accordingly.

The example below is a live font size and color preview implemented with this feature:

    const {input, option, select, span} = van.tags
    
    const FontPreview = () => {
      const size = van.state(16), color = van.state("blue")
      return span(
        "Size: ",
        input({type: "range", min: 10, max: 36, value: size,
          oninput: e => size.val = e.target.value}),
        " Color: ",
        select({oninput: e => color.val = e.target.value},
          ["blue", "green", "red", "brown"].map(c => option({selected: () => color.val === c}, c)),
        ),
        // The <span> element below has a state-derived property `style`
        span({style: () => `font-size: ${size.val}px; color: ${color.val};`}, " Hello 🍦VanJS"),
      )
    }
    
    van.add(document.body, FontPreview())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/font-preview)

### [State-derived `on...` event handlers](#state-derived-event-handlers)

When declaring a `State`\-derived property for an `on...` event handler, you should wrap around the binding function with `van.derive(...)` (i.e.: defining an ad-hoc [derived state](#derived-state)). Otherwise, the function you provide will be consider as the event handler, rather than the binding function for the `State`\-derived property. See the example below:

    const {button, option, select, span} = van.tags
    
    const Counter = () => {
      const counter = van.state(0)
      const action = van.state("👍")
      return span(
        "❤️ ", counter, " ",
        select({oninput: e => action.val = e.target.value},
          option({selected: () => action.val === "👍"}, "👍"),
          option({selected: () => action.val === "👎"}, "👎"),
        ), " ",
        button({onclick: van.derive(() => action.val === "👍" ?
          () => ++counter.val : () => --counter.val)}, "Run"),
      )
    }
    
    van.add(document.body, Counter())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/escape-derived-prop)

### [`State`\-derived child nodes](#state-derived-child)

Similarly, you can bind an HTML node to one or more underlying `State` objects. To declare a `State`\-derived child node, you need to provide a function as the `child` argument while calling to a `[tag function](#api-tags)` or `[van.add](#api-add)`. The function you provide can return a primitive value (a `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for it) or a DOM node. The following example illustrates this:

    const {input, li, option, select, span, ul} = van.tags
    
    const SortedList = () => {
      const items = van.state("a,b,c"), sortedBy = van.state("Ascending")
      return span(
        "Comma-separated list: ",
        input({oninput: e => items.val = e.target.value,
          type: "text", value: items}), " ",
        select({oninput: e => sortedBy.val = e.target.value},
          option({selected: () => sortedBy.val === "Ascending", value: "Ascending"}, "Ascending"),
          option({selected: () => sortedBy.val === "Descending", value: "Descending"}, "Descending"),
        ),
        // A State-derived child node
        () => sortedBy.val === "Ascending" ?
          ul(items.val.split(",").sort().map(i => li(i))) :
          ul(items.val.split(",").sort().reverse().map(i => li(i))),
      )
    }
    
    van.add(document.body, SortedList())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/sorted-list)

Note that: Due to the limit of DOM API, the result of the binding function can't be an array of elements. You can wrap the result into a pass-through container (`<span>` for inline elements and `<div>` for block elements) if multiple elements need to be returned.

### [Removing a DOM node](#removing-a-dom-node)

For `State`\-derived child nodes, if the binding function returns `null` or `undefined`, the DOM node will removed. Removed DOM node will never be brought back, even when the binding function would return a non-`null`/`undefined` value based on future values of the dependencies.

The following code illustrates how to build an editable list with this features:

    const {a, button, div, input, li, ul} = van.tags
    
    const ListItem = ({text}) => {
      const deleted = van.state(false)
      return () => deleted.val ? null : li(
        text, a({onclick: () => deleted.val = true}, "❌"),
      )
    }
    
    const EditableList = () => {
      const listDom = ul()
      const textDom = input({type: "text"})
      return div(
        textDom, " ",
        button({onclick: () => van.add(listDom, ListItem({text: textDom.value}))}, "➕"),
        listDom,
      )
    }
    
    van.add(document.body, EditableList())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/editable-list)

### [Stateful binding](#stateful-binding)

While dealing with state updates for `State`\-derived child node, a user can choose to, instead of regenerating the new version of the DOM node entirely based on new state values, mutate the existing DOM node that is already connected to the document tree based on all the new values and old values of its dependencies. This feature can be used as an optimization to avoid the entire DOM subtree being completely re-rendered.

The following code is a snippet of the [auto-complete application](/demo#auto-complete) which leverages this feature to optimize:

    div({class: "root"}, textarea({onkeydown, oninput}), dom => {
      if (dom && candidates.val === candidates.oldVal) {
        // If the candidate list doesn't change, we don't need to re-render the
        // suggetion list. Just need to change the selected candidate.
        dom.querySelector(`[data-index="${selectedIndex.oldVal}"]`)
          ?.classList?.remove("selected")
        dom.querySelector(`[data-index="${selectedIndex.val}"]`)
          ?.classList?.add("selected")
        return dom
      }
      return SuggestionList({candidates: candidates.val, selectedIndex: selectedIndex.val})
    })
    

The piece of code above is building a suggestion list that is reactive to the changes of selection `candidates` and `selectedIndex`. When selection `candidates` change, the `suggestionList` needs to be regenerated. However, if only `selectedIndex` changes, we only need to update the DOM element to indicate that the new candidate is being selected now, which can be achieved by changing the `[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)` of relevant candidate elements.

To facilitate stateful binding, the binding function takes the `dom` parameter, which is the current version of the DOM node prior to UI updates (or `undefined` when the binding function is first called). The binding function can either return `dom` (which means we don't want to update the DOM node to a new version), a primitive value (a new `[Text node](https://developer.mozilla.org/en-US/docs/Web/API/Text)` will be created for it), or a new DOM node (whose `[isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)` property should be `false`).

### [Polymorphic Binding](#polymorphic-binding)

If you use **VanJS** to build reusable UI components, it might be desirable for your components, just like tag functions, to accept a static value, a `State` object, or a binding function as a property value. For instance, for a reusable `Button` component like that:

    const Button = ({color, ...}) = button(
      ...
    )
    

it would be desirable for the `color` property of `Button` component to accept a static value, a `State` object, or a binding function. If the `color` property is used as a DOM node property or as a child node, things can work out of the box, as tag functions and `van.add` support static values, `State` objects, and binding functions in `props` and `children` parameter. However, if the `color` property is used inside a binding function for a `State`\-derived property or a `State`\-derived child, it would be hard for your component to work with different types of input. Consider the example below:

    button({style: () => `background-color: ${color};`},
      ...
    )

When `color` is a static value, we should use `${color}`. However, when `color` is a state, we should use `${color.val}`, and when `color` is a binding function, we should use `${color()}` . This makes it hard to build reusable UI component that accepts all types of property values.

To tackle this issue, you can define an ad-hoc value resolver to get value for different types of property inputs. The value resolver can be something like this:

    const stateProto = Object.getPrototypeOf(van.state())
    const val = v => {
      const protoOfV = Object.getPrototypeOf(v ?? 0)
      if (protoOfV === stateProto) return v.val
      if (protoOfV === Function.prototype) return v()
      return v
    }
    

Note that we're using `Object.getPrototypeOf(van.state())` (`van.state()` returns a dummy `State` object) to get the [prototype object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) of `State` objects. It's guaranteed that all `State` objects in **VanJS** share the same prototype.

Let's look at a practical example - a reuseable button whose `color`, `text` and `onclick` properties can be a static value, a `State` object, or a binding function:

    const {button, span} = van.tags
    
    const stateProto = Object.getPrototypeOf(van.state())
    const val = v => {
      const protoOfV = Object.getPrototypeOf(v ?? 0)
      if (protoOfV === stateProto) return v.val
      if (protoOfV === Function.prototype) return v()
      return v
    }
    
    const Button = ({color, text, onclick}) =>
      button({style: () => `background-color: ${val(color)};`, onclick}, text)
    
    const App = () => {
      const colorState = van.state("green")
      const textState = van.state("Turn Red")
    
      const turnRed = () => {
        colorState.val = "red"
        textState.val = "Turn Green"
        onclickState.val = turnGreen
      }
      const turnGreen = () => {
        colorState.val = "green"
        textState.val = "Turn Red"
        onclickState.val = turnRed
      }
      const onclickState = van.state(turnRed)
    
      const lightness = van.state(255)
    
      return span(
        Button({color: "yellow", text: "Click Me", onclick: () => alert("Clicked")}), " ",
        Button({color: colorState, text: textState, onclick: onclickState}), " ",
        Button({
          color: () => `rgb(${lightness.val}, ${lightness.val}, ${lightness.val})`,
          text: "Get Darker",
          onclick: () => lightness.val = Math.max(lightness.val - 10, 0),
        }),
      )
    }
    
    van.add(document.body, App())
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/poly-binding)

[The End](#the-end)
-------------------

* * *

🎉 Congratulations! You have completed the entire tutorial of **VanJS**. Now you can start your journey of building feature-rich applications!

To learn more, you can:

*   check out a list of [sample applications](/demo) built with **VanJS**.
*   read the in-depth discussion of a few [advanced topics](/advanced).
*   check out how to build a [fullstack app](/ssr) with SSR, CSR and hydration.
*   check out [**VanX**](/x) for more features: reactive list, global app state, server-driven UI, serialization, etc.
*   debug complex dependencies in your app via [**VanGraph**](/graph).

[API Index](#api-index)
-----------------------

* * *

Below is the list of all top-level APIs in **VanJS**:

*   `[van.tags](#api-tags)`
*   `[van.add](#api-add)`
*   `[van.state](#api-state)`
*   `[van.derive](#api-derive)`
*   `[van.hydrate](ssr#api-hydrate)`

**VanJS**: Learning by Example
==============================

> _Simplicity is the ultimate sophistication.  
>   
> \-- Apple Inc._

Despite being an **ultra-lightweight** UI framework, **VanJS** allows you to write incredibly elegant and expressive code for comprehensive application logic. This page is a curated list of cool things you can do with just a few lines of JavaScript code, including several handy utilities built with **VanJS**.

See also [Community Examples](#community-examples).

🎲 Show Me a Random Demo

[Hello World!](#hello-world)
----------------------------

* * *

This is the `Hello World` program shown in the [Home](/) page:

    const Hello = () => div(
      p("👋Hello"),
      ul(
        li("🗺️World"),
        li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
      ),
    )
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/hello)

This is the funnier `Hello` program shown in [Getting Started](/start) page:

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    const Run = ({sleepMs}) => {
      const steps = van.state(0)
      ;(async () => { for (; steps.val < 40; ++steps.val) await sleep(sleepMs) })()
      return pre(() => `${" ".repeat(40 - steps.val)}🚐💨Hello VanJS!${"_".repeat(steps.val)}`)
    }
    
    const Hello = () => {
      const dom = div()
      return div(
        dom,
        button({onclick: () => van.add(dom, Run({sleepMs: 2000}))}, "Hello 🐌"),
        button({onclick: () => van.add(dom, Run({sleepMs: 500}))}, "Hello 🐢"),
        button({onclick: () => van.add(dom, Run({sleepMs: 100}))}, "Hello 🚶‍♂️"),
        button({onclick: () => van.add(dom, Run({sleepMs: 10}))}, "Hello 🏎️"),
        button({onclick: () => van.add(dom, Run({sleepMs: 2}))}, "Hello 🚀"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/hello-fun)

[DOM Composition and Manipulation](#dom-composition-and-manipulation)
---------------------------------------------------------------------

* * *

Even without state and state binding, you can build interactive web pages thanks to **VanJS**'s flexible API for DOM composition and manipulation: `[tag functions](/tutorial#api-tags)` and `[van.add](/tutorial#api-add)`. Check out the example below:

    const StaticDom = () => {
      const dom = div(
        div(
          button("Dummy Button"),
          button(
            {onclick: () =>
              van.add(dom,
                div(button("New Button")),
                div(a({href: "https://www.example.com/"}, "This is a link")),
              )
            },
            "Button to Add More Elements"),
          button({onclick: () => alert("Hello from 🍦VanJS")}, "Hello"),
        ),
      )
      return dom
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/static)

[Counter](#counter)
-------------------

* * *

The `Counter App` is a good illustration on how to leverage [States](/tutorial#states) to make your application reactive. This is the program shown in the [Home](/) page:

    const Counter = () => {
      const counter = van.state(0)
      return span(
        "❤️ ", counter, " ",
        button({onclick: () => ++counter.val}, "👍"),
        button({onclick: () => --counter.val}, "👎"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/counter-simple)

This is a slightly advanced version of `Counter App`:

    const buttonStyleList = [
      ["👆", "👇"],
      ["👍", "👎"],
      ["🔼", "🔽"],
      ["⬆️", "⬇️"],
      ["⏫", "⏬"],
      ["📈", "📉"],
    ]
    
    const Counter = ({buttons}) => {
      const counter = van.state(0)
      const dom = div(
        "❤️ ", counter, " ",
        button({onclick: () => ++counter.val}, buttons[0]),
        button({onclick: () => --counter.val}, buttons[1]),
        button({onclick: () => dom.remove()}, "❌"),
      )
      return dom
    }
    
    const CounterSet = () => {
      const containerDom = div()
      return div(
        containerDom,
        button({onclick: () => van.add(containerDom,
          Counter({buttons: buttonStyleList[Math.floor(Math.random() * buttonStyleList.length)]}))},
          "➕",
        ),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/counter-advanced)

[Stopwatch](#stopwatch)
-----------------------

* * *

This is a `Stopwatch App`, similar to the `[Timer App](/tutorial#state-typed-child)` shown in the tutorial:

    const Stopwatch = () => {
      const elapsed = van.state(0)
      let id
      const start = () => id = id || setInterval(() => elapsed.val += .01, 10)
      return span(
        pre({style: "display: inline;"}, () => elapsed.val.toFixed(2), "s "),
        button({onclick: start}, "Start"),
        button({onclick: () => (clearInterval(id), id = 0)}, "Stop"),
        button({onclick: () => (clearInterval(id), id = 0, elapsed.val = 0)}, "Reset"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/stopwatch)

[Blog](#blog)
-------------

* * *

**VanJS** doesn't have an equivalent to React's `[<Fragment>](https://react.dev/reference/react/Fragment)`. For most of the cases, returning an array of HTML elements from your custom component would serve the similar purpose. Here is the sample code equivalent to the `Blog` example in React's official website:

    const Blog = () => [
      Post({title: "An update", body: "It's been a while since I posted..."}),
      Post({title: "My new blog", body: "I am starting a new blog!"}),
    ]
    
    const Post = ({title, body}) => [
      PostTitle({title}),
      PostBody({body}),
    ]
    
    const PostTitle = ({title}) => h1(title)
    const PostBody = ({body}) => article(p(body))
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/blog)

The sample code in React is 29 lines. Thus **VanJS**'s equivalent code is ~3 times shorter by eliminating unnecessary boilerplate.

Note that: The result of the binding function of a [state-derived child node](/tutorial#state-derived-child) can't be an array of elements. You can wrap the result into a pass-through container (`<span>` for inline elements and `<div>` for block elements) if multiple elements need to be returned.

[List](#list)
-------------

* * *

As an **unopinionated** framework, **VanJS** supports multiple programming paradigms. You can construct the DOM tree in an imperative way (modifying the DOM tree via `[van.add](/tutorial#api-add)`), or in a functional/declarative way.

Below is an example of building a list even numbers in `1..N`, using an imperative way:

    const EvenNumbers = ({N}) => {
      const listDom = ul()
      for (let i = 1; i <= N; ++i)
        if (i % 2 === 0)
          van.add(listDom, li(i))
    
      return div(
        p("List of even numbers in 1.." + N + ":"),
        listDom,
      )
    }

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/list-imperative)

Alternatively, you can build a list of even numbers in `1..N`, using a functional/declarative way:

    const EvenNumbers = ({N}) => div(
      p("List of even numbers in 1.." + N + ":"),
      ul(
        Array.from({length: N}, (_, i) => i + 1)
          .filter(i => i % 2 === 0)
          .map(i => li(i)),
      ),
    )
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/list-declarative)

[TODO List](#todo-list)
-----------------------

* * *

Similarly, to build reactive applications, you can build in a procedural way, which updates UI via the integration with native DOM API (it's easy to do with **VanJS** as it doesn't introduce an ad-hoc virtual-DOM layer), or in a functional/reactive way, which delegates UI changes to [State Binding](/tutorial#state-binding). You can also choose a hybrid approach between the 2 paradigms, depending on which approach fits well for a specific problem.

> _道可道，非常道  
> (A rule that can be told by words, is not the rule that should universally apply)  
>   
> \-- 老子，道德经_

Below is an example of building a `TODO List` in a completely procedural way:

    const TodoItem = ({text}) => div(
      input({type: "checkbox", onchange: e =>
        e.target.closest("div").querySelector("span").style["text-decoration"] =
          e.target.checked ? "line-through" : ""
      }),
      span(text),
      a({onclick: e => e.target.closest("div").remove()}, "❌"),
    )
    
    const TodoList = () => {
      const inputDom = input({type: "text"})
      const dom = div(
        inputDom,
        button({onclick: () => van.add(dom, TodoItem({text: inputDom.value}))}, "Add"),
      )
      return dom
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/todo-procedural)

Alternatively, you can use a functional/reactive way to build `TODO Items`:

    const TodoItem = ({text}) => {
      const done = van.state(false), deleted = van.state(false)
      return () => deleted.val ? null : div(
        input({type: "checkbox", checked: done, onclick: e => done.val = e.target.checked}),
        () => (done.val ? del : span)(text),
        a({onclick: () => deleted.val = true}, "❌"),
      )
    }
    
    const TodoList = () => {
      const inputDom = input({type: "text"})
      const dom = div(
        inputDom,
        button({onclick: () => van.add(dom, TodoItem({text: inputDom.value}))}, "Add"),
      )
      return dom
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/todo-functional)

[A Fully Reactive TODO App](#todo-app)
--------------------------------------

* * *

You can also go fully reactive for the `TODO App`. That is, the entire state of the app is captured by a global `appState`. With the full reactivity it's easier to persist the `appState` into `[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)` so that the state is kept across page reloads.

Note that even if the app is fully reactive, we don't need to re-render the whole DOM tree for state updates, thanks to the optimization with [stateful binding](/tutorial#stateful-binding).

_The code was implemented in TypeScript._

    class TodoItemState {
      constructor(public text: string, public done: State<boolean>, public deleted: State<boolean>) {}
      serialize() { return {text: this.text, done: this.done.val} }
    }
    
    const TodoItem = ({text, done, deleted}: TodoItemState) => () => deleted.val ? null : div(
      input({type: "checkbox", checked: done, onclick: e => done.val = e.target.checked}),
      () => (done.val ? del : span)(text),
      a({onclick: () => deleted.val = true}, "❌"),
    )
    
    class TodoListState {
      private constructor(public todos: TodoItemState[]) {}
    
      save() {
        localStorage.setItem("appState", JSON.stringify(
          (this.todos = this.todos.filter(t => !t.deleted.val)).map(t => t.serialize())))
      }
    
      static readonly load = () => new TodoListState(
        JSON.parse(localStorage.getItem("appState") ?? "[]")
          .map((t: any) => new TodoItemState(t.text, van.state(t.done), van.state(false)))
      )
    
      add(text: string) {
        this.todos.push(new TodoItemState(text, van.state(false), van.state(false)))
        return new TodoListState(this.todos)
      }
    }
    
    const TodoList = () => {
      const appState = van.state(TodoListState.load())
      van.derive(() => appState.val.save())
      const inputDom = input({type: "text"})
      return div(
        inputDom, button({onclick: () => appState.val = appState.val.add(inputDom.value)}, "Add"),
        (dom?: Element) => dom ?
          van.add(dom, TodoItem(appState.val.todos.at(-1)!)) :
          div(appState.val.todos.map(TodoItem)),
      )
    }
    

**Demo:**

[Try on CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/code/todo-app?file=/src/main.ts:1,1)

With the help of [**VanX**](/x), the code above can be simplified to just 10+ lines:

    const TodoList = () => {
      const items = vanX.reactive(JSON.parse(localStorage.getItem("appState") ?? "[]"))
      van.derive(() => localStorage.setItem("appState", JSON.stringify(vanX.compact(items))))
      const inputDom = input({type: "text"})
      return div(
        inputDom, button({onclick: () => items.push({text: inputDom.value, done: false})}, "Add"),
        vanX.list(div, items, ({val: v}, deleter) => div(
          input({type: "checkbox", checked: () => v.done, onclick: e => v.done = e.target.checked}),
          () => (v.done ? del : span)(v.text),
          a({onclick: deleter}, "❌"),
        )),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/todo-fully-reactive-vanx)

You can refer to `[vanX.list](/x#reactive-list)` for more details.

_You can also check [the example](https://github.com/vanjs-org/van/discussions/316) by [@ArcaneEngineer](https://github.com/ArcaneEngineer), which is a slight variation of this `TODO App` to allow TODO items to be editable._

[Fun Game: Emojis Pops](#game)
------------------------------

* * *

We're able to implement a mini game engine with **VanJS** in just a few lines. Here is a fun game implemented under 60 lines with the help of **VanJS** and [**VanX**](x):

    const Game = () => {
      const time = van.state(60), score = van.state(0), inGame = van.state(false), items = vanX.reactive([])
      const fps = 60, height = 400, frameFns = Array(fps * time.val).fill().map(() => [])
      let curFrame = 0
    
      const Item = ({val: v}, deleter) => {
        const x = Math.floor(Math.random() * (document.body.clientWidth - 42)), y = van.state(0)
        let deleted = false
        v.removing = false
        van.derive(() => v.removing &&
          nextFrames(Math.floor(0.3 * fps)).then(() => (deleted = true, deleter())))
        ;(async () => {
          do { await nextFrames(1) } while (!deleted && (y.val += v.speed) <= height)
          v.removing || deleter()
        })()
        return span({
          class: "item",
          style: () => `left: ${x}px; bottom: ${y.val}px; opacity: ${v.removing ? 0 : 1};`,
          onclick: () => inGame.val && !v.removing &&
            frameFns[curFrame].push(() => (v.removing = v.msg, v.action())),
        }, v.icon, () => v.removing ? span({class: "msg " + (v.bad ? "bad": "good")}, v.removing) : "")
      }
    
      const itemTypes = [
        {icon: "👍", speed: 5, n: 60, msg: "+1", action: () => ++score.val},
        {icon: "🚀", speed: 10, n: 12, msg: "+10", action: () => score.val += 10},
        {icon: "👎", speed: 3, n: 60, msg: "-5", bad: true, action: () => score.val -= 5},
        {icon: "🐌", speed: 5, n: 6, msg: "Slowed", action: () => items.forEach(it => it.speed /= 2)},
        {icon: "💣", speed: 3, n: 60, msg: "BOOM!", bad: true, action: () =>
          items.forEach(it => it.removing = "BOOM!")},
      ]
    
      const begin = () => {
        setInterval(() => {
          if (!inGame.val) return
          for (const fn of frameFns[curFrame]) fn()
          ++curFrame % 60 === 0 && --time.val
          curFrame === frameFns.length && end()
        }, 1000 / fps)
        inGame.val = true
        for (const type of itemTypes)
          for (let i = 0; i < type.n; ++i)
            frameFns[Math.floor(Math.random() * frameFns.length)].push(() => items.push({...type}))
      }
      const end = () => (alert("Your score: " + score.val), location.reload())
      const nextFrames = n => new Promise(r => frameFns[curFrame + n]?.push(r))
    
      return div({class: "root"},
        span({class: "time"}, "Time: ", time), span({class: "score"}, "Score: ", score),
        vanX.list(() => div({class: "board"}), items, Item),
        div({class: "panel"},
          button({onclick: () => curFrame ? inGame.val = !inGame.val : begin()},
            () => inGame.val ? "Pause" : "Start",
          ),
        ),
      )
    }
    

[🎮 Let's play!](/code/game) (you can share your score here: [#174](https://github.com/vanjs-org/van/discussions/174))

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/game)

[SPA w/ Client-Side Routing: Code Browser](#code-browser)
---------------------------------------------------------

* * *

With **VanJS**, you can built a single-page application with client-side routing support, thanks to **VanJS**'s powerful builtin state management and state derivation:

    const Browser = () => {
      const file = van.state(location.hash.slice(1))
      window.addEventListener("hashchange", () => file.val = location.hash.slice(1))
    
      const text = van.derive(() => file.val ? (
        fetch("https://api.github.com/repos/vanjs-org/van/contents/src/" + file.val)
          .then(r => r.json())
          .then(json => text.val = {lang: file.val.split(".").at(-1), str: atob(json.content)})
          .catch(e => text.val = {str: e.toString()}),
        {str: "Loading"}
      ) : {str: "Select a file to browse"})
    
      const files = van.state([])
      fetch("https://api.github.com/repos/vanjs-org/van/contents/src")
        .then(r => r.json())
        .then(json => files.val = json.map(f => f.name).filter(n => /\.(ts|js)$/.test(n)))
        .catch(e => text.val = {str: e.toString()})
    
      const browseFile = e => {
        e.preventDefault()
        history.pushState({}, "", new URL(e.target.href).hash)
        dispatchEvent(new Event("hashchange"))
      }
    
      return div({class: "row"},
        div({class: "left"}, ul(li({class: "folder"}, "src", () => ul(
          files.val.map(f => li({class: "file"},
            a({href: "#" + f, class: () => f === file.val ? "selected" : "", onclick: browseFile}, f),
          )),
        )))),
        (dom = div({class: "right"}, pre(code()))) => {
          const codeDom = dom.querySelector("code")
          codeDom.textContent = text.val.str
          codeDom.className = text.val.lang ? "language-" + text.val.lang : ""
          if (text.val.lang) setTimeout(() => Prism.highlightAll(), 5)
          return dom
        },
      )
    }
    

[Try on CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/code/code-browser?file=/src/main.js:1,1)

[Stargazers](#stargazers)
-------------------------

* * *

The following code can show the number of stars for a Github repo, and a list of most recent stargazers:

    const Stars = async repo => {
      const repoJson = await fetch(`https://api.github.com/repos/${repo}`).then(r => r.json())
      const pageNum = Math.floor((repoJson.stargazers_count - 1) / 100) + 1
      const starsJson = await fetch(
        `https://api.github.com/repos/${repo}/stargazers?per_page=100&page=${pageNum}`)
        .then(r => r.json())
      return div(
        p(repoJson.stargazers_count, " ⭐️:"),
        ul(
          starsJson.reverse().map(u => li(a({href: u.html_url}, u.login))),
        ),
      )
    }
    

[Try it out here](code/stars)

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/starts)

[Epoch Timestamp Converter](#epoch-timestamp-converter)
-------------------------------------------------------

* * *

Below is an application which converts a Unix epoch timestamp into a human-readable datetime string:

    const tsToDate = ts =>
      ts < 1e10 ? new Date(ts * 1e3) :
      ts < 1e13 ? new Date(ts) :
      ts < 1e16 ? new Date(ts / 1e3) :
      new Date(ts / 1e6)
    
    const Converter = () => {
      const nowTs = van.state(Math.floor(new Date().getTime() / 1e3)), date = van.state(null)
      setInterval(() => ++nowTs.val, 1000)
      const inputDom = input({type: "text", size: 25, value: nowTs.val})
      return div(
        div(b("Now: "), nowTs),
        inputDom, " ",
        button({onclick: () => date.val = tsToDate(Number(inputDom.value))}, "Convert"),
        p(i("Supports Unix timestamps in seconds, milliseconds, microseconds and nanoseconds.")),
        () => date.val ? p(
          div(date.val.toString()),
          div(b("GMT: "), date.val.toGMTString()),
        ) : p(),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/epoch-converter)

[Keyboard Event Inspector](#keyboard-event-inspector)
-----------------------------------------------------

* * *

Below is an application to inspect all relevant key codes in keyboard `[keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)` events:

    const Label = text => span({class: "label"}, text)
    const Value = text => span({class: "value"}, text)
    
    const Inspector = () => {
      const keyEvent = van.state(new KeyboardEvent("keydown"))
    
      const Result = prop => span(Label(prop + ": "), Value(() => keyEvent.val[prop]))
    
      return div(
        div(input({placeholder: "Focus here and press keys…", style: "width: 260px",
          onkeydown: e => (e.preventDefault(), keyEvent.val = e)})),
        div(Result("key"), Result("code"), Result("which"), Result("keyCode")),
        div(Result("ctrlKey"), Result("metaKey"), Result("altKey"), Result("shiftKey")),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/key-inspector)

[Diff](#diff)
-------------

* * *

Here is a `Diff App` with the integration of `[jsdiff](https://github.com/kpdecker/jsdiff)`. The app can compare 2 pieces of text (very handy tool to check how your text is revised by `ChatGPT` 🙂):

    const autoGrow = e => {
      e.target.style.height = "5px"
      e.target.style.height = (e.target.scrollHeight + 5) + "px"
    }
    
    const DiffApp = () => {
      const oldTextDom = textarea({oninput: autoGrow, rows: 1})
      const newTextDom = textarea({oninput: autoGrow, rows: 1})
      const diff = van.state([])
      return div(
        div({class: "row"},
          div({class: "column"}, oldTextDom), div({class: "column"}, newTextDom),
        ),
        div({class: "row"},
          button({onclick: () => diff.val = Diff.diffWords(oldTextDom.value, newTextDom.value)},
            "Diff",
          ),
        ),
        div({class: "row"}, () => div({class: "column", style: "white-space: pre-wrap;"},
          diff.val.map(d => span({class: d.added ? "add" : (d.removed ? "remove" : "")}, d.value)),
        )),
      )
    }

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/diff-simple)

Here is a more advanced `Diff App` that supports side-by-side and line-by-line comparison:

    const autoGrow = e => {
      e.target.style.height = "5px"
      e.target.style.height = (e.target.scrollHeight + 5) + "px"
    }
    
    const Line = ({diff, skipAdd, skipRemove}) => div(
      {class: "column", style: "white-space: pre-wrap;"},
      diff.filter(d => !(skipAdd && d.added || skipRemove && d.removed)).map(d =>
        span({class: d.added ? "add" : (d.removed ? "remove" : "")}, d.value)),
    )
    
    const DiffLine = (oldLine, newLine, showMerged) => {
      const diff = Diff.diffWords(oldLine, newLine)
      return div({class: "row" + (showMerged ? " merged" : "")},
        showMerged ?
          Line({diff}) : [Line({diff, skipAdd: true}), Line({diff, skipRemove: true})],
      )
    }
    
    const DiffApp = () => {
      const oldTextDom = textarea({oninput: autoGrow, rows: 1})
      const newTextDom = textarea({oninput: autoGrow, rows: 1})
      const diff = van.state([])
      const showMerged = van.state(true)
      return div(
        div({class: "row"},
          div({class: "column"}, oldTextDom), div({class: "column"}, newTextDom),
        ),
        div({class: "row"},
          button({onclick: () => diff.val = Diff.diffLines(oldTextDom.value, newTextDom.value)},
            "Diff",
          ),
          input({type: "checkbox", checked: showMerged,
            oninput: e => showMerged.val = e.target.checked}),
          "show merged result"
        ),
        () => {
          const diffVal = diff.val, showMergedVal = showMerged.val, resultDom = div()
          for (let i = 0; i < diffVal.length; ) {
            let line
            if (diffVal[i].added && diffVal[i + 1]?.removed) {
              line = DiffLine(diffVal[i + 1].value, diffVal[i].value, showMergedVal)
              i += 2
            } else if (diffVal[i].removed && diffVal[i + 1]?.added) {
              line = DiffLine(diffVal[i].value, diffVal[i + 1].value, showMergedVal)
              i += 2
            } else if (diffVal[i].added) {
              line = showMergedVal ? div({class: "merged add row"},
                div({class: "column", style: "white-space: pre-wrap;"}, diffVal[i].value),
              ) : div({class: "row"},
                div({class: "column"}),
                div({class: "add column", style: "white-space: pre-wrap;"}, diffVal[i].value),
              )
              ++i
            } else if (diffVal[i].removed) {
              line = showMergedVal ? div({class: "merged remove row"},
                div({class: "column", style: "white-space: pre-wrap;"}, diffVal[i].value),
              ) : div({class: "row"},
                div({class: "remove column", style: "white-space: pre-wrap;"}, diffVal[i].value),
              )
              ++i
            } else {
              line = div({class: "row", style: "white-space: pre-wrap;"},
                showMergedVal ? div({class: "merged column"}, diffVal[i].value) :
                  [
                    div({class: "column"}, diffVal[i].value),
                    div({class: "column"}, diffVal[i].value),
                  ],
              )
              ++i
            }
            van.add(resultDom, line)
          }
          return resultDom
        },
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/diff)

[Calculator](#calculator)
-------------------------

* * *

The code below implements a `Calculator App` similar to the one that you are using on your smartphones:

    const Calculator = () => {
      let lhs = van.state(null), op = null, rhs = van.state(0)
    
      const calc = (lhs, op, rhs) =>
        !op || lhs === null ? rhs :
        op === "+" ? lhs + rhs :
        op === "-" ? lhs - rhs :
        op === "x" ? lhs * rhs : lhs / rhs
    
      const onclick = e => {
        const str = e.target.innerText
        if (str >= "0" && str <= "9")
          typeof rhs.val === "string" ? rhs.val += str : rhs.val = rhs.val * 10 + Number(str)
        else if (str === "AC") lhs.val = op = null, rhs.val = 0
        else if (str === "+/-" && rhs.val) rhs.val = -rhs.val
        else if (str === "%" && rhs.val) rhs.val *= 0.01
        else if (str === "+" || str === "-" || str === "x" || str === "÷") {
          if (rhs.val !== null) lhs.val = calc(lhs.val, op, Number(rhs.val)), rhs.val = null
          op = str
        } else if (str === "=" && op && rhs.val !== null)
          lhs.val = calc(lhs.val, op, Number(rhs.val)), op = null, rhs.val = null
        else if (str === ".")
          rhs.val = rhs.val ? rhs.val + "." : "0."
      }
    
      const Button = str => div({class: "button"}, button(str))
    
      return div({id: "root"},
        div({id: "display"}, div(() => rhs.val ?? lhs.val)),
        div({id: "panel", onclick},
          div(Button("AC"), Button("+/-"), Button("%"), Button("÷")),
          div(Button("7"), Button("8"), Button("9"), Button("x")),
          div(Button("4"), Button("5"), Button("6"), Button("-")),
          div(Button("1"), Button("2"), Button("3"), Button("+")),
          div(div({class: "button wide"}, button("0")), Button("."), Button("=")),
        ),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/calculator)

Notably, this `Calculator App` is equivalent to the React-based implementation here: [github.com/ahfarmer/calculator](https://github.com/ahfarmer/calculator). Here is the size comparison of the total package between the 2 apps:

VanJS-based App

React-based App

**\# of files:**

2

16

**\# of lines:**

143

616

As you can see, not only **VanJS** is **~50 times** smaller than React, apps built with **VanJS** also tends to be much slimmer.

[Table-View Example: JSON/CSV Table Viewer](#table-viewer)
----------------------------------------------------------

* * *

The following code implements a `Table Viewer` for JSON/CSV-based data by leveraging [functional-style DOM tree building](/tutorial#fun-dom):

    const TableViewer = ({inputText, inputType}) => {
      const jsonRadioDom = input({type: "radio", checked: inputType === "json",
        name: "inputType", value: "json"})
      const csvRadioDom = input({type: "radio", checked: inputType === "csv",
        name: "inputType", value: "csv"})
      const autoGrow = e => {
        e.style.height = "5px"
        e.style.height = (e.scrollHeight + 5) + "px"
      }
      const textareaDom = textarea({oninput: e => autoGrow(e.target)}, inputText)
      setTimeout(() => autoGrow(textareaDom), 10)
    
      const text = van.state("")
    
      const tableFromJson = text => {
        const json = JSON.parse(text), head = Object.keys(json[0])
        return {
          head,
          data: json.map(row => head.map(h => row[h]))
        }
      }
    
      const tableFromCsv = text => {
        const lines = text.split("\n").filter(l => l.length > 0)
        return {
          head: lines[0].split(","),
          data: lines.slice(1).map(l => l.split(",")),
        }
      }
    
      return div(
        div(jsonRadioDom, label("JSON"), csvRadioDom, label("CSV (Quoting not Supported)")),
        div(textareaDom),
        div(button({onclick: () => text.val = textareaDom.value}, "Show Table")),
        p(() => {
          if (!text.val) return div()
          try {
            const {head, data} = (jsonRadioDom.checked ? tableFromJson : tableFromCsv)(text.val)
            return table(
              thead(tr(head.map(h => th(h)))),
              tbody(data.map(row => tr(row.map(col => td(col))))),
            )
          } catch (e) {
            return pre({class: "err"}, e.toString())
          }
        }),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/table-viewer)

[`package-lock.json` Inspector](#package-lock-inspector)
--------------------------------------------------------

* * *

Below is an example which can extract and display all dependency packages and their versions from `package-lock.json` file:

    const PackageLockInspector = () => {
      const json = van.state("")
      return [
        div("Paste the content of package-lock.json file here:"),
        textarea({rows: 10, cols: 80, oninput: e => json.val = e.target.value}),
        () => {
          if (!json.val) return div()
          try {
            const packages = Object.entries(JSON.parse(json.val).packages).filter(([k]) => k)
            return div(
              h4("All Dependencies (", packages.length, ")"),
              table(
                thead(tr(th("Package"), th("Version"))),
                tbody(packages.map(([k, {version}]) => {
                  const name = k.slice("node_modules/".length)
                  return tr(
                    td(a({href: "https://www.npmjs.com/package/" + name}, name)),
                    td(a({href: `https://www.npmjs.com/package/${name}/v/${version}`}, version)),
                  )
                })),
              ),
            )
          } catch (e) {
            return pre({style: "color: red;"}, "Parsing error: ", e.toString())
          }
        },
      ]
    }
    

[Try it out here](code/package-lock-inspector)

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/package-lock-inspector)

[Tree-View Example: JSON Inspector](#json-inspector)
----------------------------------------------------

* * *

This is another example of leveraging [functional-style DOM tree building](/tutorial#fun-dom) - to build a tree view for inspecting JSON data:

    const ListItem = ({key, value, indent = 0}) => {
      const hide = van.state(key !== "")
      const valueDom = typeof value !== "object" ? value : div(
        {style: () => hide.val ? "display: none;" : ""},
        Object.entries(value).map(([k, v]) =>
          ListItem({key: k, value: v, indent: indent + 2 * (key !== "")})),
      )
      return (key ? div : pre)(
        " ".repeat(indent),
        key ? (
          typeof valueDom !== "object" ? ["🟰 ", b(`${key}: `)] :
            a({onclick: () => hide.val = !hide.val, style: "cursor: pointer"},
              () => hide.val ? "➕ " : "➖ ", b(`${key}: `), () => hide.val ? "…" : "",
            )
        ) : [],
        valueDom,
      )
    }
    
    const JsonInspector = ({initInput}) => {
      const autoGrow = e => {
        e.style.height = "5px"
        e.style.height = (e.scrollHeight + 5) + "px"
      }
      const textareaDom = textarea({oninput: e => autoGrow(e.target)}, initInput)
      setTimeout(() => autoGrow(textareaDom), 10)
      const errmsg = van.state(""), json = van.state(null)
    
      const inspect = () => {
        try {
          json.val = JSON.parse(textareaDom.value)
          errmsg.val = ""
        } catch (e) {
          errmsg.val = e.message
        }
      }
    
      return div(
        div(textareaDom),
        div(button({onclick: inspect}, "Inspect")),
        pre({style: "color: red"}, errmsg),
        () => json.val ? ListItem({key: "", value: json.val}) : "",
      )
    }

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/json-inspector)

[Textarea with Autocomplete](#auto-complete)
--------------------------------------------

* * *

The code below implements a `[textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)` with autocomplete support. This implementation leverages [Stateful DOM binding](/tutorial#stateful-binding) to optimize the performance of DOM tree rendering:

_The code was implemented in TypeScript to validate **VanJS**'s TypeScript support._

    interface SuggestionListProps {
      readonly candidates: readonly string[]
      readonly selectedIndex: number
    }
    const SuggestionList = ({candidates, selectedIndex}: SuggestionListProps) =>
      div({class: "suggestion"}, candidates.map((s, i) => pre({
        "data-index": i,
        class: i === selectedIndex ? "text-row selected" : "text-row",
      }, s)))
    
    const lastWord = (text: string) => text.match(/\w+$/)?.[0] ?? ""
    
    const AutoComplete = ({words}: {readonly words: readonly string[]}) => {
      const getCandidates = (prefix: string) => {
        const maxTotal = 10, result: string[] = []
        for (let word of words) {
          if (word.startsWith(prefix.toLowerCase())) result.push(word)
          if (result.length >= maxTotal) break
        }
        return result
      }
    
      const prefix = van.state("")
      const candidates = van.derive(() => getCandidates(prefix.val))
      // Resetting selectedIndex to 0 whenever candidates change
      const selectedIndex = van.derive(() => (candidates.val, 0))
    
      const onkeydown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown") {
          selectedIndex.val = selectedIndex.val + 1 < candidates.val.length ? selectedIndex.val + 1 : 0
          e.preventDefault()
        } else if (e.key === "ArrowUp") {
          selectedIndex.val = selectedIndex.val > 0 ? selectedIndex.val - 1 : candidates.val.length - 1
          e.preventDefault()
        } else if (e.key === "Enter") {
          const candidate = candidates.val[selectedIndex.val] ?? prefix.val
          const target = <HTMLTextAreaElement>e.target
          target.value += candidate.substring(prefix.val.length)
          target.setSelectionRange(target.value.length, target.value.length)
          prefix.val = lastWord(target.value)
          e.preventDefault()
        }
      }
    
      const oninput = (e: Event) => prefix.val = lastWord((<HTMLTextAreaElement>e.target).value)
    
      return div({class: "root"}, textarea({onkeydown, oninput}), (dom?: Element) => {
        if (dom && candidates.val === candidates.oldVal) {
          // If the candidate list doesn't change, we don't need to re-render the
          // suggestion list. Just need to change the selected candidate.
          dom.querySelector(`[data-index="${selectedIndex.oldVal}"]`)
            ?.classList?.remove("selected")
          dom.querySelector(`[data-index="${selectedIndex.val}"]`)
            ?.classList?.add("selected")
          return dom
        }
        return SuggestionList({candidates: candidates.val, selectedIndex: selectedIndex.val})
      })
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/p5e71ryw/)

Alternatively, we can implement the same app with [State-derived properties](/tutorial#state-derived-prop):

_The code was implemented in TypeScript to validate **VanJS**'s TypeScript support._

    const lastWord = (text: string) => text.match(/\w+$/)?.[0] ?? ""
    
    const AutoComplete = ({words}: {readonly words: readonly string[]}) => {
      const maxTotalCandidates = 10
    
      const getCandidates = (prefix: string) => {
        const result: string[] = []
        for (let word of words) {
          if (word.startsWith(prefix.toLowerCase())) result.push(word)
          if (result.length >= maxTotalCandidates) break
        }
        return result
      }
    
      const prefix = van.state("")
      const candidates = van.derive(() => getCandidates(prefix.val))
      // Resetting selectedIndex to 0 whenever candidates change
      const selectedIndex = van.derive(() => (candidates.val, 0))
    
      const SuggestionListItem = ({index}: {index: number}) => pre(
        {class: () => index === selectedIndex.val ? "text-row selected" : "text-row"},
        () => candidates.val[index] ?? "",
      )
    
      const suggestionList = div({class: "suggestion"},
        Array.from({length: 10}).map((_, index) => SuggestionListItem({index})))
    
      const onkeydown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown") {
          selectedIndex.val = selectedIndex.val + 1 < candidates.val.length ? selectedIndex.val + 1 : 0
          e.preventDefault()
        } else if (e.key === "ArrowUp") {
          selectedIndex.val = selectedIndex.val > 0 ? selectedIndex.val - 1 : candidates.val.length - 1
          e.preventDefault()
        } else if (e.key === "Enter") {
          const candidate = candidates.val[selectedIndex.val] ?? prefix.val
          const target = <HTMLTextAreaElement>e.target
          target.value += candidate.substring(prefix.val.length)
          target.setSelectionRange(target.value.length, target.value.length)
          prefix.val = lastWord(target.value)
          e.preventDefault()
        }
      }
    
      const oninput = (e: Event) => prefix.val = lastWord((<HTMLTextAreaElement>e.target).value)
    
      return div({class: "root"}, textarea({onkeydown, oninput}), suggestionList)
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/7ueod0pL/1/)

[HTML/MD to VanJS Code Converter](#html-md-to-vanjs-code-converter)
-------------------------------------------------------------------

* * *

The [online UI](/convert) for the HTML/MD snippet to **VanJS** [code converter](https://github.com/vanjs-org/converter), is also implemented with **VanJS**.

Source code: `[convert.ts](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/converter-ui/convert.ts)`

[Jupyter-like JavaScript Console](#jupyter-like-javascript-console)
-------------------------------------------------------------------

* * *

Next up, we're going to demonstrate a simplified Jupyter-like JavaScript console implemented in **~100 lines** of code with **VanJS**. The JavaScript console supports drawing tables (with the technique similar to [Table Viewer](#table-viewer)), inspecting objects in a tree view (with the technique similar to [Json Inspector](#json-inspector)) and plotting (with the integration of [Google Charts](https://developers.google.com/chart)).

Here is the implementation:

    const toDataArray = data => {
      const hasPrimitive = !data.every(r => typeof r === "object")
      const keys = [...new Set(
        data.flatMap(r => typeof r === "object" ? Object.keys(r) : []))]
      return [
        (hasPrimitive ? ["Value"] : []).concat(keys),
        ...data.map(r =>
          (typeof r === "object" ? (hasPrimitive ? [""] : []) : [r]).concat(
            keys.map(k => r[k] ?? "")
          )),
      ]
    }
    
    const table = data => {
      const dataArray = toDataArray(data)
      return van.tags.table(
        thead(tr(th("(index)"), dataArray[0].map(k => th(k)))),
        tbody(dataArray.slice(1).map((r, i) => tr(td(i), r.map(c => td(c))))),
      )
    }
    
    const plot = (data, chartType, options) => {
      if (data[0].constructor === Object) data = toDataArray(data)
      else if (typeof data[0] === "number")
        data = [["", "Value"], ...data.map((d, i) => [i + 1, d])]
      const dom = div({class: "chart"})
      setTimeout(() => new google.visualization[chartType](dom).draw(
        google.visualization.arrayToDataTable(data), options))
      return dom
    }
    
    const Tree = ({obj, indent = ""}) =>
      (indent ? div : pre)(Object.entries(obj).map(([k, v]) => {
        if (v?.constructor !== Object && !Array.isArray(v))
          return div(indent + "🟰 ", van.tags.b(k + ": "), v)
        const expanded = van.state(false)
        let treeDom
        const onclick = van.derive(() => expanded.val ?
          () => (treeDom.remove(), expanded.val = !expanded.val) :
          () => (treeDom = result.appendChild(Tree({obj: v, indent: indent + "  "}),
            expanded.val = !expanded.val)))
        const result = div(
          indent,
          van.tags.a({onclick},
            () => expanded.val ? "➖ " : "➕ ",
            van.tags.b(k + ":"),
            () => expanded.val ? "" : " {…}",
          ),
        )
        return result
      }))
    
    const ValueView = expr => {
      try {
        const value = eval(`(${expr})`)
        if (value instanceof Element) return value
        if (value?.constructor === Object || Array.isArray(value)) return Tree({obj: value})
        return pre(String(value))
      } catch (e) {
        return pre({class: "err"}, e.message + "\n" + e.stack)
      }
    }
    
    const Output = ({id, expr}) => div({class: "row"},
      pre({class: "left"}, `Out[${id}]:`),
      div({class: "break"}),
      div({class: "right"}, ValueView(expr)),
    )
    
    const autoGrow = e => {
      e.target.style.height = "5px"
      e.target.style.height = (e.target.scrollHeight + 5) + "px"
    }
    
    const Input = ({id}) => {
      const run = () => {
        textareaDom.setAttribute("readonly", true)
        runDom.disabled = true
        const newTextDom = van.add(textareaDom.closest(".console"), Output({id, expr: textareaDom.value}))
          .appendChild(Input({id: id + 1}))
          .querySelector("textarea")
        newTextDom.focus()
        setTimeout(() => newTextDom.scrollIntoView(), 10)
      }
      const runDom = button({class: "run", onclick: run}, "Run")
      const onkeydown = async e => {
        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
          e.preventDefault()
          run()
        }
      }
      const textareaDom = textarea({id, type: "text", onkeydown, oninput: autoGrow,
        rows: 1, placeholder: 'Enter JS expression here:'})
      return div({class: "row"},
        pre({class: "left"}, `In[${id}]:`), runDom, div({class: "break"}),
        div({class: "right"}, textareaDom),
      )
    }
    
    const Console = () => div({class: "console"}, Input({id: 1}))
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/demo/js-console)

You can also try out the JavaScript console in [this standalone page](/code/console.html).

[An Improved Unix Terminal](#an-improved-unix-terminal)
-------------------------------------------------------

* * *

Next up is a web-based Unix terminal that connects to your local computer, with notable improvements, all under 300 lines of code. This is to demonstrate that, with **VanJS**, we can easily provide great extension to commandline utilities with fancy GUI by leveraging all available HTML elements. The program is heavily tested in macOS, and should in theory works in Linux, or in any environment that has `[/bin/sh](https://en.wikipedia.org/wiki/Bourne_shell)`.

See [github.com/vanjs-org/van/tree/main/demo/terminal](https://github.com/vanjs-org/van/tree/main/demo/terminal) for the app ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/demo/terminal)).

[Community Examples](#community-examples)
-----------------------------------------

* * *

Besides the official **VanJS** examples, there are also sample apps from the great **VanJS** community. Below is a curated list (contact [\[email protected\]](/cdn-cgi/l/email-protection#087c6967487e6966627b26677a6f) to add yours):

Author

Project

Preview

[Yahia Berashish](https://github.com/yahia-berashish)

[**VanJS** JavaScript and TypeScript Vite Template](https://github.com/vitejs/awesome-vite#vanjs)

[link](https://codesandbox.io/p/sandbox/github/yahia-berashish/vite-vanjs-ts/tree/main)

[artydev](https://github.com/artydev)

[**VanJS** Series](https://dev.to/artydev/series/23075)

[barrymun](https://github.com/barrymun)

[Division Game](https://github.com/barrymun/division-game)

[link](http://barrymun.vanjs-division-game.surge.sh/)

[enpitsuLin](https://github.com/enpitsuLin)

[TODO App](https://github.com/enpitsuLin/vanjs-todomvc)

[link](https://codesandbox.io/p/sandbox/github/enpitsuLin/vanjs-todomvc/tree/master?file=%2Fsrc%2Fmain.ts%3A8%2C1)

[Kwame Opare Asiedu](https://github.com/kwameopareasiedu)

[TODO App](https://github.com/kwameopareasiedu/vanjs-todo) with routing and authentication

[link](https://kwameopareasiedu.github.io/vanjs-todo/)

[董凯](https://github.com/CodeByZack)

[Local Share](https://github.com/CodeByZack/local-share) - A tool for transferring files over LAN, using the WebRTC tech

[link](https://share.zackdk.com/)

[Kane](https://github.com/csm-kb)

[**VanJS** Chart.js graph render](https://github.com/csm-kb/vanjs-chartjs-example)

[link](https://codesandbox.io/p/devbox/github/csm-kb/vanjs-chartjs-example/tree/main/?file=%2Fsrc%2Fmain.ts)

[Neven DREAN](https://github.com/ndrean)

[Modal Component & Routing with **VanJS**](https://github.com/ndrean/vanjs-dialog-modal)

[link](https://githubbox.com/ndrean/vanjs-dialog-modal)

[b rad c](https://github.com/b-rad-c)

[**VanJS** SPA Template](https://github.com/vanjs-org/van/tree/main/addons/van_cone/examples/spa-app)

[link](https://codesandbox.io/p/devbox/github/vanjs-org/van/tree/main/addons/van_cone/examples/spa-app)

[Vlad Sirenko](https://github.com/SirenkoVladd)

[**VanJS** with Leaflet](https://github.com/sirenkovladd/vanjs-leaflet-example)

[link](https://codesandbox.io/p/devbox/github/sirenkovladd/vanjs-leaflet-example/tree/main/?file=%2Fsrc%2Fmain.js)

[kangaroolab](https://github.com/kangaroolab)

[tippy: a local first note app](https://github.com/kangaroolab/tippy)

[link](https://kangaroolab.github.io/tippy/)

[Jeremy R. Travis](https://github.com/JTravis76)

[Budget Dashboard](https://github.com/JTravis76/budget-dashboard)

[link](https://jtravis76.github.io/budget-dashboard/)

[FredericHeem](https://github.com/FredericHeem)

[Multi-Page App Starter Kit under 5kB](https://github.com/FredericHeem/van-kit)

[FredericHeem](https://github.com/FredericHeem)

[**VanJS** Playground with Vite](https://github.com/FredericHeem/van-playground)

HTML/MD Snippet to 🍦**VanJS** Code
===================================

_The library version of the converter with the support of custom **VanJS** components is [here](https://github.com/vanjs-org/converter)._

**VanUI**: A Collection of Grab 'n Go Reusable Utility and UI Components for VanJS
==================================================================================

🙏 Feedback and contribution are welcome and greatly appreciated! ([source code](https://github.com/vanjs-org/van/tree/main/components))

[Installation](#installation)
-----------------------------

* * *

### [Via NPM](#via-npm)

The library is published as NPM package [vanjs-ui](https://www.npmjs.com/package/vanjs-ui). Run the following command to install the package:

    npm install vanjs-ui
    

To use the NPM package, add this line to your script:

    import { <components you want to import> } from "vanjs-ui"
    

### [Via a Script Tag](#via-a-script-tag)

Alternatively, you can import **VanUI** from CDN via a `<script type="text/javascript">` tag:

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/[email protected]/dist/van-ui.nomodule.min.js"></script>
    

`https://cdn.jsdelivr.net/npm/[[email protected]](/cdn-cgi/l/email-protection)/dist/van-ui.nomodule.js` can be used for the non-minified version.

Note that: **VanJS** needs to be imported via a `<script type="text/javascript">` tag for **VanUI** to work properly.

Try on jsfiddle: [Modal](https://jsfiddle.net/1brxdjh9/), [MessageBoard](https://jsfiddle.net/cb9rs5yu/).

### [TypeScript Support for Script Tag Integration](#typescript-support-for-script-tag-integration)

To get TypeScript support for `<script>` tag integration, download [`van-ui.d.ts`](https://vanjs.org/autodownload?file=van-ui.d.ts) and add the code like following at the top of your `.ts` file:

    import type { Modal as ModalType } from "./van-ui.d.ts"
    
    declare const Modal: typeof ModalType
    

[Documentation](#documentation)
-------------------------------

* * *

The following components have been implemented so far:

*   Utility components:
    *   [Await](#await) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/await?file=%2Fsrc%2Fmain.ts%3A1%2C1))
*   UI components:
    *   [Modal](#modal) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/modal?file=%2Fsrc%2Fmain.ts%3A1%2C1))
    *   [Tabs](#tabs) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/tabs?file=%2Fsrc%2Fmain.ts%3A1%2C1))
    *   [MessageBoard](#message) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/message?file=/src/main.ts))
    *   [Tooltip](#tooltip) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/tooltip?file=/src/main.ts:1,1))
    *   [Toggle](#toggle) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/toggle?file=%2Fsrc%2Fmain.ts%3A1%2C1))
    *   [OptionGroup](#optiongroup) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/option-group?file=%2Fsrc%2Fmain.ts%3A1%2C1))
    *   [Banner](#banner) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/banner?file=/src/main.ts:1,1))
    *   [FloatingWindow](#floatingwindow) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/window?file=%2Fsrc%2Fmain.ts%3A1%2C1))
    *   **New!**[choose](#choose) ([preview](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/choose?file=%2Fsrc%2Fmain.ts%3A1%2C1))

### [Await](#await)

_Author: [@Hunter-Gu](https://github.com/Hunter-Gu)_

`Await` is a utility component that helps you build UI components based on asynchronous data (i.e.: a JavaScript [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object).

#### [Signature](#signature)

    Await({
      value,  // A `Promise` object for asynchronous data
      container,  // The container of the result. Default `div`
      Loading,  // What to render when the data is being loaded
      Error,  // What to render when error occurs
    }, children) => <The created UI element>
    

The `children` parameter (type: `(data: T) => ValidChildDomValue`) is a function that takes the resolved data as input and returns a valid child DOM value (`Node`, primitives, `null` or `undefined`), used to indicate what to render after the data is loaded.

#### [Examples](#examples)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/await?file=%2Fsrc%2Fmain.ts%3A1%2C1).

Example 1 (fetching the number of GitHub stars):

    const Example1 = () => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    
      const fetchWithDelay = (url: string, waitMs: number) =>
        sleep(waitMs).then(() => fetch(url)).then(r => r.json())
    
      const fetchStar = () =>
        fetchWithDelay("https://api.github.com/repos/vanjs-org/van", 1000)
          .then(data => data.stargazers_count)
    
      const data = van.state(fetchStar())
    
      return [
        () => h2(
          "GitHub Stars: ",
          Await({
            value: data.val, container: span,
            Loading: () => "🌀 Loading...",
            Error: () => "🙀 Request failed.",
          }, starNumber => `⭐️ ${starNumber}!`)
        ),
        () => Await({
          value: data.val,
          Loading: () => '',
        }, () => button({onclick: () => (data.val = fetchStar())}, "Refetch")),
      ]
    }
    

Example 2 (parallel `Await`):

    const Example2 = () => {
      const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    
      const loadNumber = () =>
        sleep(Math.random() * 1000).then(() => Math.floor(Math.random() * 10))
    
      const a = van.state(loadNumber()), b = van.state(loadNumber())
    
      return [
        h2("Parallel Await"),
        () => {
          const sum = van.derive(() => Promise.all([a.val, b.val]).then(([a, b]) => a + b))
          return Await({
            value: sum.val,
            Loading: () => div(
              Await({value: a.val, Loading: () => "🌀 Loading a..."}, () => "Done"),
              Await({value: b.val, Loading: () => "🌀 Loading b..."}, () => "Done"),
            ),
          }, sum => "a + b = " + sum)
        },
        p(button({onclick: () => (a.val = loadNumber(), b.val = loadNumber())}, "Reload")),
      ]
    }
    

#### [Property Reference](#property-reference)

*   `value`: Type `Promise`. Required. The asynchronous data that the result UI element is based on.
*   `container`: Type `TagFunction<Element>`. Default `div` (`van.tags.div`). Optional. The type of the wrapper HTML element for the result.
*   `Loading`: Type `() => ValidChildDomValue`. Optional. If specified, indicates what to render when the asynchronous data is being loaded.
*   `Error`: Type `(reason: Error) => ValidChildDomValue`. Optional. If specified, indicates what to render when error occurs while fetching the asynchronous data.

### [Modal](#modal)

Creates a modal window on top of the current page.

#### [Signature](#signature-1)

    Modal({...props}, ...children) => <The created modal window>
    

#### [Examples](#examples-1)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/modal?file=%2Fsrc%2Fmain.ts%3A1%2C1).

Example 1:

    const closed = van.state(false)
    van.add(document.body, Modal({closed},
      p("Hello, World!"),
      div({style: "display: flex; justify-content: center;"},
        button({onclick: () => closed.val = true}, "Ok"),
      ),
    ))
    

Example 2:

    const closed = van.state(false)
    const formDom = form(
      div(input({type: "radio", name: "lang", value: "Zig", checked: true}), "Zig"),
      div(input({type: "radio", name: "lang", value: "Rust"}), "Rust"),
      div(input({type: "radio", name: "lang", value: "Kotlin"}), "Kotlin"),
      div(input({type: "radio", name: "lang", value: "TypeScript"}), "TypeScript"),
      div(input({type: "radio", name: "lang", value: "JavaScript"}), "JavaScript"),
    )
    
    const onOk = () => {
      const lang = (<HTMLInputElement>formDom.querySelector("input:checked")).value
      alert(lang + " is a good language 😀")
      closed.val = true
    }
    
    van.add(document.body, Modal({closed, blurBackground: true, clickBackgroundToClose: true},
      p("What's your favorite programming language?"),
      formDom,
      p({style: "display: flex; justify-content: space-evenly;"},
        button({onclick: onOk}, "Ok"),
        button({onclick: () => closed.val = true}, "Cancel"),
      )
    ))
    

#### [Property Reference](#property-reference-1)

*   `closed`: Type `State<boolean>`. Required. A `State` object used to close the created modal window. Basically, setting `closed.val = true` will close the created modal window. You can also subscribe the closing event of the modal window via [`van.derive`](https://vanjs.org/tutorial#api-derive).
*   `backgroundColor`: Type `string`. Default `"rgba(0,0,0,.5)"`. Optional. The color of the background overlay when the modal is activated.
*   `blurBackground`: Type `boolean`. Default `false`. Optional. Whether to blur the background.
*   `clickBackgroundToClose`: Type `boolean`. Default `false`. Optional. If `true`, clicking the background will close the created modal.
*   `backgroundClass`: Type `string`. Default `""`. Optional. The `class` attribute of the background overlay. You can specify multiple CSS classes separated by `" "`.
*   `backgroundStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the background overlay.
*   `modalClass`: Type `string`. Default `""`. Optional. The `class` attribute of the created modal element. You can specify multiple CSS classes separated by `" "`.
*   `modalStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the created modal element.

### [Tabs](#tabs)

Creates a tab-view for tabs specified by the user.

#### [Signature](#signature-2)

    Tabs({...props}, tabContents) => <The created tab-view>
    

The `tabContents` parameter is an object whose keys are the titles of the tabs and values (type: `ChildDom`) are the DOM element(s) for the tab contents.

#### [Example](#example)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/tabs?file=%2Fsrc%2Fmain.ts%3A1%2C1).

    van.add(document.body, Tabs(
      {
        style: "max-width: 500px;",
        tabButtonActiveColor: "white",
        tabButtonBorderStyle: "none",
        tabButtonRowStyleOverrides: {
          "padding-left": "12px",
        },
      },
      {
        Home: p(
          "Welcome to ", b("VanJS"), " - the smallest reactive UI framework in the world.",
        ),
        "Getting Started": [
          p("To install the ", b("VanJS"), " NPM package, run the line below:"),
          pre(code("npm install vanjs-core")),
        ],
        About: p(
          "The author of ", b("VanJS"), " is ",
          a({href: "https://github.com/Tao-VanJS"}, " Tao Xin"), "."
        ),
      },
    ))
    

#### [Property Reference](#property-reference-2)

*   `activeTab`: Type `State<string>`. Optional. If specified, you can activate a tab via the specified `State` object with `activeTab.val = "<tab title>"`, and subscribe to the changes of active tab via [`van.derive`](https://vanjs.org/tutorial#api-derive).
*   `resultClass`: Type `string`. Default `""`. Optional. The `class` attribute of the result DOM element. You can specify multiple CSS classes separated by `" "`.
*   `style`: Type `string`. Default `""`. Optional. The `style` property of the result DOM element.
*   `tabButtonRowColor`: Type `string`. Default `"#f1f1f1"`. Optional. The background color of the container of tab buttons.
*   `tabButtonBorderStyle`: Type `string`. Default `1px solid #000`. Optional. The style of borders between tab buttons.
*   `tabButtonHoverColor`: Type `string`. Default `"#ddd"`. Optional. The color when the tab button is hovered.
*   `tabButtonActiveColor`: Type `string`. Default `"#ccc"`. Optional. The color of the tab button for the currently active tab.
*   `transitionSec`: Type `number`. Default `0.3`. Optional. The duration of the transition when tab buttons change color.
*   `tabButtonRowClass`: Type `string`. Default `""`. Optional. The `class` attribute of the container of tab buttons. You can specify multiple CSS classes separated by `" "`.
*   `tabButtonRowStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the container of tab buttons.
*   `tabButtonClass`: Type `string`. Default `""`. The `class` attribute of tab buttons. You can specify multiple CSS classes separated by `" "`.
*   `tabButtonStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for tab buttons. You can specify multiple CSS classes separated by `" "`.
*   `tabContentClass`: Type `string`. Default `""`. The `class` attribute of tab contents. You can specify multiple CSS classes separated by `" "`.
*   `tabContentStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for tab contents.

### [MessageBoard](#messageboard)

Creates a message board to show messages on the screen.

#### [Signature](#signature-3)

To create a message board:

    const board = new MessageBoard({...props})
    

Then you can show messages with `show` method:

    board.show({...props}) => <The created DOM node for the message, which is also appended to the message board>
    

Optionally, you can remove the DOM node of the message board with `remove` method:

    board.remove()
    

#### [Examples](#examples-2)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/message?file=%2Fsrc%2Fmain.ts%3A1%2C1).

    const board = new MessageBoard({top: "20px"})
    
    const example1 = () => board.show({message: "Hi!", durationSec: 1})
    const example2 = () => board.show(
      {message: ["Welcome to ", a({href: "https://vanjs.org/", style: "color: #0099FF"}, "🍦VanJS"), "!"], closer: "❌"})
    
    const closed = van.state(false)
    const example3 = () => {
      closed.val = false
      board.show({message: "Press ESC to close this message", closed})
    }
    document.addEventListener("keydown", e => e.key === "Escape" && (closed.val = true))
    

#### [Property Reference](#property-reference-3)

Message board properties:

*   `top`: Type `string`. Optional. The `top` CSS property of the message board.
*   `bottom`: Type `string`. Optional. The `bottom` CSS property of the message board. Exactly one of `top` and `bottom` should be specified.
*   `backgroundColor`: Type `string`. Default `"#333D"`. Optional. The background color of the messages shown on the message board.
*   `fontColor`: Type `string`. Default `"white"`. Optional. The font color of the messages shown on the message board.
*   `fadeOutSec`: Type `number`. Default `0.3`. Optional. The duration of the fade out animation when messages are being closed.
*   `boardClass`: Type `string`. Default `""`. Optional. The `class` attribute of the message board. You can specify multiple CSS classes separated by `" "`.
*   `boardStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the message board.
*   `messageClass`: Type `string`. Default `""`. Optional. The `class` attribute of the message shown on the message board. You can specify multiple CSS classes separated by `" "`.
*   `messageStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the message shown on the message board.
*   `closerClass`: Type `string`. Default `""`. Optional. The `class` attribute of the message closer. You can specify multiple CSS classes separated by `" "`.
*   `closerStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the message closer.

Message properties:

*   `message`: Type `ChildDom`. Required. One `ChildDom` or multiple `ChildDom` as an `Array` for the message we want to show.
*   `closer`: Type `ChildDom`. Optional. If specified, we will render a closer DOM node with one `ChildDom` or multiple `ChildDom`s as an `Array` which can be clicked to close the shown message.
*   `durationSec`: Type `number`. Optional. If specified, the shown message will be automatically closed after `durationSec` seconds.
*   `closed`: Type `State<boolean>`. Optional. If specified, the shown message can be closed via the `closed``State` object with `closed.val = true`. You can also subscribe the closing event of the message via [`van.derive`](https://vanjs.org/tutorial#api-derive).

### [Tooltip](#tooltip)

Creates a tooltip above a DOM node which typically shows when the DOM node is being hovered.

#### [Signature](#signature-4)

    Tooltip({...props}) => <The created tooltip element>
    

#### [Examples](#examples-3)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/tooltip?file=%2Fsrc%2Fmain.ts%3A1%2C1).

    const tooltip1Show = van.state(false)
    const tooltip2Show = van.state(false)
    const count = van.state(0)
    const tooltip2Text = van.derive(() => `Count: ${count.val}`)
    const tooltip3Show = van.state(false)
    
    van.add(document.body,
      button({
        style: "position: relative;",
        onmouseenter: () => tooltip1Show.val = true,
        onmouseleave: () => tooltip1Show.val = false,
      }, "Normal Tooltip", Tooltip({text: "Hi!", show: tooltip1Show})), " ",
      button({
        style: "position: relative;",
        onmouseenter: () => tooltip2Show.val = true,
        onmouseleave: () => tooltip2Show.val = false,
        onclick: () => ++count.val
      }, "Increment Counter", Tooltip({text: tooltip2Text, show: tooltip2Show})), " ",
      button({
        style: "position: relative;",
        onmouseenter: () => tooltip3Show.val = true,
        onmouseleave: () => tooltip3Show.val = false,
      }, "Slow Fade-in", Tooltip({text: "Hi from the sloth!", show: tooltip3Show, fadeInSec: 5})),
    )
    

Note that the lines:

    {
      style: "position: relative;",
      onmouseenter: () => ...Show.val = true,
      onmouseleave: () => ...Show.val = false,
    }
    

are needed for the tooltip element to be shown properly.

#### [Property Reference](#property-reference-4)

*   `text`: Type `string | State<string>`. Required. The text shown in the tooltip. If a `State` object is specified, you can set the text with `text.val = ...`.
*   `show`: Type `State<boolean>`. Required. The `State` object to control whether to show the tooltip or not.
*   `width`: Type `string`. Default `"200px"`. Optional. The width of the tooltip.
*   `backgroundColor`: Type `string`. Default `"#333D"`. Optional. The background color of the tooltip.
*   `fontColor`: Type `string`. Default: `"white"`. Optional. The font color of the tooltip.
*   `fadeInSec`: Type `number`. Default `0.3`. Optional. The duration of the fade-in animation.
*   `tooltipClass`: Type `string`. Default `""`. Optional. The `class` attribute of the tooltip. You can specify multiple CSS classes separated by `" "`.
*   `tooltipStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the tooltip.
*   `triangleClass`: Type `string`. Default `""`. Optional. The `class` attribute of the triangle in the bottom. You can specify multiple CSS classes separated by `" "`.
*   `triangleStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the triangle in the bottom.

### [Toggle](#toggle)

Creates a toggle switch that can be turned on and off.

#### [Signature](#signature-5)

    Toggle({...props}) => <The created toggle switch>
    

#### [Example](#example-1)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/toggle?file=%2Fsrc%2Fmain.ts%3A1%2C1).

    van.add(document.body, Toggle({
      on: true,
      size: 2,
      onColor: "#4CAF50"
    }))
    

#### [Property Reference](#property-reference-5)

*   `on`: Type `boolean | State<boolean>`. Default `false`. Optional. A boolean or a boolean-typed `State` object to indicate the status of the toggle. If a `State` object is specified, you can turn on/off the toggle via the specified `State` object with `on.val = <true|false>`, and subscribe to the status change of the toggle via [`van.derive`](https://vanjs.org/tutorial#api-derive).
*   `size`: Type `number`. Default `1`. Optional. The size of the toggle. `1` means the height of the toggle is `1rem`.
*   `cursor`: Type `string`. Default `pointer`. Optional. The `cursor` CSS property of the toggle.
*   `ofColor`: Type `string`. Default `"#ccc"`. Optional. The color of the toggle when it's off.
*   `onColor`: Type `string`. Default `"#2196F3"`. Optional. The color of the toggle when it's on.
*   `circleColor`: Type `string`. Default `"white"`. Optional. The color of the toggling circle.
*   `toggleClass`: Type `string`. Default `""`. Optional. The `class` attribute of the toggle. You can specify multiple CSS classes separated by `" "`.
*   `toggleStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the toggle.
*   `sliderClass`: Type `string`. Default `""`. Optional. The `class` attribute of the slider. You can specify multiple CSS classes separated by `" "`.
*   `sliderStyleOverrides`. Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the slider.
*   `circleClass`. Type `string`. Default `""`. Optional. The `class` attribute of the toggling circle. You can specify multiple CSS classes separated by `" "`.
*   `circleStyleOverrides`. Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the toggling circle.
*   `circleWhenOnStyleOverrides`. Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the toggling circle. Typically this is used to override the `transform` CSS property if the dimensions of the toggle is overridden.

### [OptionGroup](#optiongroup)

Creates a group of button-shaped options where only one option can be selected. This is functionally similar to a radio group but with a different appearance.

#### [Signature](#signature-6)

    OptionGroup({...props}, options) => <The created option group>
    

The `options` parameter is a `string[]` for all the options.

#### [Example](#example-2)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/option-group?file=%2Fsrc%2Fmain.ts%3A1%2C1).

    const selected = van.state("")
    const options = ["Water", "Coffee", "Juice"]
    
    van.add(document.body,
      p("What would you like to drink?"),
      OptionGroup({selected}, options),
      p(() => options.includes(selected.val) ?
        span(b("You selected:"), " ", selected) : b("You haven't selected anything.")),
    )
    

#### [Property Reference](#property-reference-6)

*   `selected`: Type `State<string>`. Required. A `State` object for the currently selected option. You can change the selected option with `selected.val = <option string>`, and subscribe to the selection change via [`van.derive`](https://vanjs.org/tutorial#api-derive).
*   `normalColor`: Type `string`. Default `"#e2eef7"`. Optional. The color of the option when it's not selected or hovered.
*   `hoverColor`: Type `string`. Default `"#c1d4e9"`. Optional. The color of the option when it's hovered.
*   `selectedColor`: Type `string`. Default `"#90b6d9"`. Optional. The color of the option when it's selected.
*   `selectedHoverColor`: Type `string`. Default `"#7fa5c8"`. Optional. The color of the option when it's selected and hovered.
*   `fontColor`: Type `string`. Default `"black"`. Optional. The font color of the options.
*   `transitionSec`: Type `number`. Default `0.3`. Optional. The duration of the transition when the options change color.
*   `optionGroupClass`: Type `string`. Default `""`. Optional. The `class` attribute of the entire option group. You can specify multiple CSS classes separated by `" "`.
*   `optionGroupStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the entire option group.
*   `optionClass`: Type `string`. Default `""`. Optional. The `class` attribute of the options. You can specify multiple CSS classes separated by `" "`.
*   `optionStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the options.

### [Banner](#banner)

Creates a banner element for the current container.

#### [Signature](#signature-7)

    Banner({...props}, ...children) => <The created banner element>
    

#### [Examples](#examples-4)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/banner?file=%2Fsrc%2Fmain.ts%3A1%2C1).

    van.add(document.body,
      h2("Sticky Banner"),
      div({style: "width: 300px; height: 200px; overflow-y: auto; border: 1px solid #000;"},
        Banner({sticky: true}, "👋Hello 🗺️World"),
        div({style: "padding: 0 10px"}, Array.from({length: 10}).map((_, i) => p("Line ", i))),
      ),
      h2("Non-sticky Banner"),
      div({style: "width: 300px; height: 200px; overflow-y: auto; border: 1px solid #000;"},
        Banner({sticky: false}, "👋Hello ", a({href: "https://vanjs.org/"}, "🍦VanJS")),
        div({style: "padding: 0 10px"}, Array.from({length: 10}).map((_, i) => p("Line ", i))),
      ),
    )
    

#### [Property Reference](#property-reference-7)

*   `backgroundColor`: Type `string`. Default `#fff1a8`. Optional. The background color of the banner.
*   `fontColor`: Type `string`. Default `currentcolor`. Optional. The font color of the banner.
*   `sticky`: Type `boolean`. Default `false`. Optional. Whether the banner is sticky on the top.
*   `bannerClass`: Type `string`. Default `""`. Optional. The `class` attribute of the created banner element. You can specify multiple CSS classes separated by `" "`.
*   `bannerStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the created banner element.

### [FloatingWindow](#floatingwindow)

_Author: [@Duffscs](https://github.com/Duffscs)_

Creates a movable and resizable floating window.

#### [Signature](#signature-8)

    FloatingWindow({...props}, ...children) => <The created floating window>
    

#### [Examples](#examples-5)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/window?file=%2Fsrc%2Fmain.ts%3A1%2C1).

Window with custom close button:

    const closed = van.state(false)
    const width = van.state(300), height = van.state(220)
    
    van.add(document.body, FloatingWindow(
      {title: "Example Window 1", closed, width, height, closeCross: null},
      div({style: "display: flex; flex-direction: column; justify-content: center;"},
        p("Hello, World!"),
        button({onclick: () => width.val *= 2}, "Double Width"),
        button({onclick: () => height.val *= 2}, "Double Height"),
        button({onclick: () => closed.val = true}, "Close Window"),
      ),
    ))
    

Window with integrated close button:

    van.add(document.body, FloatingWindow(
      {title: "Example Window 2", x: 150, y: 150, headerColor: "lightblue"},
      div({style: "display: flex; justify-content: center;"},
        p("This is another floating window!"),
      ),
    ))
    

Close button with custom appearance:

    van.add(document.body, FloatingWindow(
      {
        title: "Example Window 3", x: 175, y: 175, closeCross: "❌",
        crossHoverStyleOverrides: {"background-color": "white"},
      },
      div({style: "display: flex; justify-content: center;"},
        p("This is a floating window with custom cross button!"),
      ),
    ))
    

Window with `Tabs`:

    const closed = van.state(false)
    
    van.add(document.body, FloatingWindow(
      {
        closed, x: 200, y: 200, width: 500, height: 300,
        childrenContainerStyleOverrides: { padding: 0 },
      },
      div(
        span({
          class: "vanui-window-cross",
          style: "position: absolute; top: 8px; right: 8px;cursor: pointer;",
          onclick: () => closed.val = true,
        }, "×"),
        Tabs(
          {
            style: "width: 100%;",
            tabButtonActiveColor: "white",
            tabButtonBorderStyle: "none",
            tabButtonRowColor: "lightblue",
            tabButtonRowStyleOverrides: {height: "2.5rem"},
            tabButtonStyleOverrides: {height: "100%"},
          },
          {
            Home: p(
              "Welcome to ", b("VanJS"), " - the smallest reactive UI framework in the world.",
            ),
            "Getting Started": [
              p("To install the ", b("VanJS"), " NPM package, run the line below:"),
              pre(code("npm install vanjs-core")),
            ],
            About: p(
              "The author of ", b("VanJS"), " is ",
              a({href: "https://github.com/Tao-VanJS"}, " Tao Xin"), "."
            ),
          },
        )
      )
    ))
    

Window without header or integrated close button:

    const closed = van.state(false)
    
    van.add(document.body, FloatingWindow(
      {
        closed, x: 300, y: 300, width: 500, height: 300,
        windowStyleOverrides: {"background-color": "lightgray"},
        childrenContainerStyleOverrides: {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          height: "100%",
        }
      },
      button({onclick: () => closed.val = true}, "Close Window"),
    ))
    

Window showing z-index:

    const zIndex = van.state(1)
    
    van.add(document.body, FloatingWindow(
      {title: ["z-index: ", zIndex], x: 200, y: 200, width: 300, height: 100, zIndex},
    ))
    

Window with custom stacking:

    const zIndex = van.state(1)
    
    van.add(document.body, FloatingWindow(
      {title: "Custom stacking", x: 300, y: 300, customStacking: true, zIndex},
      div({style: "display: flex; justify-content: space-between;"},
        button({onclick: () => zIndex.val++}, "+"),
        p("z-index: ", zIndex),
        button({onclick: () => zIndex.val--}, "-"),
      ),
      div({style: "display: flex; justify-content: center;"},
        button({onclick: () => zIndex.val = topMostZIndex()}, "Bring to Front"),
      ),
    ))
    

Non-movable window:

    van.add(document.body, FloatingWindow(
      {title: "Not Movable", disableMove: true},
      div({style: "display: flex; justify-content: center;"},
        p("This window is not movable!"),
      ),
    ))
    

Non-movable window without title:

    const closed = van.state(false)
    
    van.add(document.body, FloatingWindow(
      {closed, x: 150, y: 150, disableMove: true},
      div(
        p("This window is not movable!"),
        p({style: "display: flex; justify-content: center;"},
          button({onclick: () => closed.val = true}, "Close")
        ),
      ),
    ))
    

Non-resizable window:

    van.add(document.body, FloatingWindow(
      {title: "Not Resizable", x: 200, y: 200, disableResize: true},
      div(
        p({style: "display: flex; justify-content: center;"}, "This window is not resizable!"),
      ),
    ))
    

#### [Default `z-index` Stacking](#default-z-index-stacking)

By default, the `z-index` CSS property of each window comes from the sequence: `1`, `2`, `3`, `...`. Whenever a new window is created or is interacted with (`onmousedown` event is triggered), we assign the `z-index` property of the window to the next number in the sequence. This way, we are making sure that newly created or interacted windows are always brought to the front.

You can override the default stacking behavior by specifying `{customStacking: true}` in `props`. This way, you can manually control the `z-index` of the window via a **VanJS** state.

#### [Property Reference](#property-reference-8)

*   `title`: Type `ChildDom`. Optional. One `ChildDom` or multiple `ChildDom` as an `Array` for the title of the created window. If not specified, the window won't have a title.
*   `closed`: Type `State<boolean>`. Optional. If specified, the created window can be closed via the `closed``State` object with `closed.val = true`. You can also subscribe the closing event of the created window via [`van.derive`](https://vanjs.org/tutorial#api-derive).
*   `x`: Type `number | State<number>`. Default `100`. Optional. The x-coordinate of the created window, in pixels.
*   `y`: Type `number | State<number>`. Default `100`. Optional. The y-coordinate of the created window, in pixels.
*   `width`: Type `number | State<number>`. Default `300`. Optional. The width of the created window, in pixels.
*   `height`: Type `number | State<number>`. Default `200`. Optional. The height of the created window, in pixels.
*   `closeCross`: Type `ChildDom`. Default `"×"`. Optional. One `ChildDom` or multiple `ChildDom` as an `Array` for the close button of the created window. If its value is `null`, there won't be a close button. If `title` property is not specified, this property will be ignored and there won't be a close button.
*   `customStacking`: type `boolean`. Default `false`. Optional. If `true`, [default `z-index` stacking rule](#default-z-index-stacking) won't be triggered. Users are expected to manually set the `z-index` property of the created window via the `State` object for `z-index` property below.
*   `zIndex`: type `number | State<number>`. Optional. If a `State` object is specified, you can use the `State` object to track the change of `z-index` property via [`van.derive`](https://vanjs.org/tutorial#api-derive). If `customTracking` is `true`, you can use this property to manually set the `z-index` property of the created window.
*   `disableMove`: type `boolean`. Default `false`. Optional. If `true`, the created window can't be moved.
*   `disableResize`: type `boolean`. Default `false`. Optional. If `true`, the created window can't be resized.
*   `headerColor`: type `string`. Default `"lightgray"`. Optional. The background color of the window header (title bar).
*   `windowClass`: Type `string`. Default `""`. Optional. The `class` attribute of the created window. You can specify multiple CSS classes separated by `" "`.
*   `windowStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the created window.
*   `headerClass`: Type `string`. Default `""`. Optional. The `class` attribute of the window header (title bar). You can specify multiple CSS classes separated by `" "`.
*   `headerStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the window header (title bar).
*   `childrenContainerClass`: Type `string`. Default `""`. Optional. The `class` attribute of the container for `children` DOM nodes. You can specify multiple CSS classes separated by `" "`.
*   `childrenContainerStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the container of `children` DOM nodes.
*   `crossClass`: Type `string`. Default `""`. Optional. The `class` attribute of the close button. You can specify multiple CSS classes separated by `" "`.
*   `crossStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the close button.
*   `crossHoverClass`: Type `string`. Default `""`. Optional. The `class` attribute of the close button when it's hovered over. You can specify multiple CSS classes separated by `" "`.
*   `crossStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the close button when it's hovered over.

### [choose](#choose)

Creates a [`Modal`](#modal) component that lets the user choose among given options, returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves when user makes the choice (resolves to the chosen string), or cancels (resolves to `null`).

#### [Signature](#signature-9)

    choose({...props}) => Promise<string | null>
    

#### [Examples](#examples-6)

Preview with [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/components/examples/choose?file=%2Fsrc%2Fmain.ts%3A1%2C1).

Example 1:

    const choice = await choose({
      label: "Choose a color:",
      options: ["Red", "Green", "Blue"],
    })
    choice && van.add(document.body, div("You chose: ", b(choice)))
    

Example 2:

      const choice = await choose({
        label: "Choose a South American country:",
        options: [
          "🇦🇷 Argentina", "🇧🇴 Bolivia", "🇧🇷 Brazil", "🇨🇱 Chile", "🇨🇴 Colombia", "🇪🇨 Ecuador",
          "🇬🇾 Guyana", "🇵🇾 Paraguay", "🇵🇪 Peru", "🇸🇷 Suriname", "🇺🇾 Uruguay", "🇻🇪 Venezuela",
        ],
        showTextFilter: true,
        selectedColor: "blue",
        cyclicalNav: true,
        customModalProps: {
          blurBackground: true,
          modalStyleOverrides: {height: "300px"},
          clickBackgroundToClose: true,
        },
        selectedStyleOverrides: {color: "white"},
      })
      choice && van.add(document.body, div("You chose: ", b(choice)))
    

#### [Property Reference](#property-reference-9)

*   `label`: Type `ChildDom`. Required. One `ChildDom` or multiple `ChildDom` as an `Array` for the label you want to show.
*   `options`: Type `string[]`. Required. The options of the choice.
*   `showTextFilter`: Type `boolean`. Default `false`. Optional. Whether to show a text filter for the options.
*   `selectedColor`: Type `string`. Default `"#f5f5f5"`. Optional. The background color of the currently selected option.
*   `cyclicalNav`: Type `boolean`. Default `false`. Optional. Whether to navigate through the options via arrow keys in a cyclical manner. That is, if `cyclicalNav` is on, when you reach the end of the list, pressing the down arrow key will take you back to the beginning, and vice versa for going up the list with the up arrow key.
*   `customModalProps`: Type: property bags for the [`Modal`](#modal) component (except the `closed` field). Default `{}`. Optional. The custom properties for the `Modal` component you want to specify.
*   `textFilterClass`: Type `string`. Default `""`. Optional. The `class` attribute of the text filter. You can specify multiple CSS classes separated by `" "`.
*   `textFilterStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the text filter.
*   `optionsContainerClass`: Type `string`. Default `""`. Optional. The `class` attribute of the container of all options. You can specify multiple CSS classes separated by `" "`.
*   `optionsContainerStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the container of all options.
*   `optionClass`: Type `string`. Default `""`. Optional. The `class` attribute of an individual option. You can specify multiple CSS classes separated by `" "`.
*   `optionStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for an individual option.
*   `selectedClass`: Type `string`. Default `""`. Optional. The `class` attribute of the currently selected option. You can specify multiple CSS classes separated by `" "`.
*   `selectedStyleOverrides`: Type `Record<string, string | number>`. Default `{}`. Optional. A [property bag](#property-bag-for-style-overrides) for the styles you want to override for the currently selected option.

### [Property Bag for Style Overrides](#property-bag-for-style-overrides)

In the API of **VanUI**, you can specify an object as a property bag to override the styles of the created elements. The keys of the property bag are CSS property names, and the values of the property bag are CSS property values. Sample values of the property bag:

    {
      "z-index": 1000,
      "background-color": "rgba(0,0,0,.8)",
    }
    

    {
      "border-radius": "0.2rem",
      padding: "0.8rem",
      "background-color": "yellow",
    }
    

**Mini-Van**: A Minimalist Template Engine for Client/Server-side Rendering without JSX
=======================================================================================

**Mini-Van** is an **_ultra-lightweight_** template engine for DOM composition and manipulation. With only 0.7kB in the minified bundle size (0.5kB gzipped), **Mini-Van** enables you to build comprehensive UI with elegant and expressive vanilla JavaScript code:

    // Reusable components can be just pure vanilla JavaScript functions.
    // Here we capitalize the first letter to follow React conventions.
    const Hello = () => div(
      p("👋Hello"),
      ul(
        li("🗺️World"),
        li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
      ),
    )
    
    van.add(document.body, Hello())
    // Alternatively, you can write:
    // document.body.appendChild(Hello())
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/minivan/hello)

You can convert any HTML snippet into **Mini-Van** code with our online [converter](/convert).

**Mini-Van** is the slimmed-down version of [**VanJS**](/), which aims to provide an **_ultra-lightweight_**, **_zero-dependency_**, and **_unopinionated_** Reactive UI framework based on pure vanilla JavaScript and DOM. Compared to **VanJS**, **Mini-Van** further reduces the gzipped minified bundle size to 0.5kB and (_more importantly_) can be used on the server-side as a [template engine](https://en.wikipedia.org/wiki/Web_template_system).

[Server-Side: NPM Integration](#server-side-npm-integration)
------------------------------------------------------------

* * *

**Mini-Van** can be used on the server side as a template engine to render dynamic web content for HTTP servers. An NPM package was published here: [www.npmjs.com/package/mini-van-plate](https://www.npmjs.com/package/mini-van-plate). Thus it can be used in [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/).

There are 2 modes for server-side integration: `van-plate` mode (based on text templating, thus doesn't need the DOM dependency), and `mini-van` mode (based on DOM, thus needs the DOM dependency).

### [Install](#install)

    npm install mini-van-plate

### [`van-plate` mode](#npm-van-plate)

In `van-plate` mode, HTML content is generated purely through text templating. It can be easily integrated with your HTTP server to render dynamic web content. See the sample code below:

    import http from "node:http"
    import van from "mini-van-plate/van-plate"
    
    const {a, body, button, input, li, p, ul} = van.tags
    
    const port = 8080
    
    console.log("Testing DOM rendering...")
    // Expecting `<a href="https://vanjs.org/">🍦VanJS</a>` printed in the console
    console.log(a({href: "https://vanjs.org/"}, "🍦VanJS").render())
    // Expecting `<button onclick="alert(&quot;Hello&quot;)">Click</button>` printed in the console
    console.log(button({onclick: 'alert("Hello")'}, "Click").render())
    // Expecting `<input type="text" value="value">` printed in the console
    console.log(input({type: "text", value: "value"}).render())
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(van.html(
        body(
          p("Your user-agent is: ", req.headers["user-agent"] ?? "Unknown"),
          p("👋Hello"),
          ul(
            li("🗺️World"),
            li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
          ),
        ),
      ))
    })
    
    server.listen(port, () => console.log(`Server running at http://localhost:${port}/`))
    

Preview via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/sitegen/node-examples/van-plate-server?file=%2Fvan-plate-server.mjs%3A1%2C1).

As illustrated in the example, `render` method can be called on the object returned from the `[tag function](/tutorial#api-tags)` to generate a `string` that can be used for serving.

`van.html` is a helper function defined in `van-plate.js` that is equivalent to:

    (...args) => "<!DOCTYPE html>" + tags.html(...args).render()

### [`mini-van` mode](#npm-mini-van)

The behavior in `mini-van` mode is similar to the behavior in browser context. i.e.: DOM objects will be created by `[tag functions](/tutorial#api-tags)`. As Node doesn't have the built-in support for DOM objects, you need to provide a 3rd-party `Document` object before integrating with **Mini-Van** in this mode.

There are multiple 3rd-party options for the `Document` object. In the example below, we will demonstrate the integration with the help of `[jsdom](https://www.npmjs.com/package/jsdom)`.

Note that, `mini-van` mode doesn't work in Bun yet due to the integration issue with `jsdom`.

First, install `jsdom`:

    npm install jsdom

Sample code:

    import http from "node:http"
    import jsdom from "jsdom"
    import van from "mini-van-plate"
    
    const dom = new jsdom.JSDOM("")
    const {html, tags: {a, body, button, input, li, p, ul}} = van.vanWithDoc(dom.window.document)
    
    const port = 8080
    
    console.log("Testing DOM rendering...")
    // Expecting `<a href="https://vanjs.org/">🍦VanJS</a>` printed in the console
    console.log(a({href: "https://vanjs.org/"}, "🍦VanJS").outerHTML)
    // Expecting `<button onclick="alert(&quot;Hello&quot;)">Click</button>` printed in the console
    console.log(button({onclick: 'alert("Hello")'}, "Click").outerHTML)
    // Expecting `<input type="text" value="value">` printed in the console
    console.log(input({type: "text", value: "value"}).outerHTML)
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(html(
        body(
          p("Your user-agent is: ", req.headers["user-agent"] ?? "Unknown"),
          p("👋Hello"),
          ul(
            li("🗺️World"),
            li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
          ),
        ),
      ))
    })
    
    server.listen(port, () => console.log(`Server running at http://localhost:${port}/`))
    

Preview via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/sitegen/node-examples/mini-van-server?file=%2Fmini-van-server.mjs%3A1%2C1).

Similar to `van-plate` mode, we have a helper function `html` defined in `mini-van.js` which is equivalent to:

    (...args) => "<!DOCTYPE html>" + tags.html(...args).outerHTML

[Server-Side: Deno Integration](#server-side-deno-integration)
--------------------------------------------------------------

* * *

Similarly, **Mini-Van** can work with Deno as well, in both `van-plate` mode and `mini-van` mode. A Deno module was published here: `[deno.land/x/minivan](https://deno.land/x/minivan)`.

### [`van-plate` mode](#deno-van-plate)

Sample code:

_Requires Deno `1.35` or later._

    import van from "https://deno.land/x/[email protected]/src/van-plate.js"
    
    const {a, body, button, input, li, p, ul} = van.tags
    
    const port = 8080
    
    console.log("Testing DOM rendering...")
    // Expecting `<a href="https://vanjs.org/">🍦VanJS</a>` printed in the console
    console.log(a({href: "https://vanjs.org/"}, "🍦VanJS").render())
    // Expecting `<button onclick="alert(&quot;Hello&quot;)">Click</button>` printed in the console
    console.log(button({onclick: 'alert("Hello")'}, "Click").render())
    // Expecting `<input type="text" value="value">` printed in the console
    console.log(input({type: "text", value: "value"}).render())
    
    console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`)
    Deno.serve({port}, req => new Response(
      van.html(
        body(
          p("Your user-agent is: ", req.headers.get("user-agent") ?? "Unknown"),
          p("👋Hello"),
          ul(
            li("🗺️World"),
            li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
          ),
        ),
      ),
      {
        status: 200,
        headers: {"content-type": "text/html; charset=utf-8"},
      },
    ))
    

Preview via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/sitegen/deno-examples/van-plate-server?file=%2Fvan-plate-server.ts%3A1%2C1).

### [`mini-van` mode](#deno-mini-van)

Likewise, **Mini-Van** mode needs a 3rd-party DOM library to provide the `Document` object. We will show an example with the integration of `[deno-dom](https://deno.com/manual@v1.28.1/advanced/jsx_dom/deno_dom)`.

_Requires Deno `1.35` or later._

    import { DOMParser } from "https://deno.land/x/[email protected]/deno-dom-wasm.ts"
    import van from "https://deno.land/x/[email protected]/src/mini-van.js"
    
    const document = new DOMParser().parseFromString("", "text/html")!
    const {tags: {a, body, button, input, li, p, ul}, html} = van.vanWithDoc(document)
    
    const port = 8080
    
    console.log("Testing DOM rendering...")
    // Expecting `<a href="https://vanjs.org/">🍦VanJS</a>` printed in the console
    console.log(a({href: "https://vanjs.org/"}, "🍦VanJS").outerHTML)
    // Expecting `<button onclick="alert(&quot;Hello&quot;)">Click</button>` printed in the console
    console.log(button({onclick: 'alert("Hello")'}, "Click").outerHTML)
    // Expecting `<input type="text" value="value">` printed in the console
    console.log(input({type: "text", value: "value"}).outerHTML)
    
    console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`)
    Deno.serve({port}, req => new Response(
      html(
        body(
          p("Your user-agent is: ", req.headers.get("user-agent") ?? "Unknown"),
          p("👋Hello"),
          ul(
            li("🗺️World"),
            li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
          ),
        ),
      ),
      {
        status: 200,
        headers: {"content-type": "text/html; charset=utf-8"},
      },
    ))
    

Preview via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/sitegen/deno-examples/mini-van-server?file=%2Fmini-van-server.ts%3A1%2C1).

[Client-Side: Getting Started](#client-side-getting-started)
------------------------------------------------------------

* * *

To get started on the client side, add the line below to your script:

    import van from "https://cdn.jsdelivr.net/gh/vanjs-org/mini-van/public/mini-van-0.6.3.min.js"

To code without ES6 modules, add the following line to your HTML file instead:

    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/vanjs-org/mini-van/public/mini-van-0.6.3.nomodule.min.js"></script>

Alternative, you can download the files (`[mini-van-0.6.3.min.js](/code/mini-van-0.6.3.min.js "Download mini-van-0.6.3.min.js")`, `[mini-van-0.6.3.nomodule.min.js](/code/mini-van-0.6.3.nomodule.min.js "Download mini-van-0.6.3.nomodule.min.js")`) and serve them locally.

### [Download Table](#download-table)

You can find all relevant **Mini-Van** files to download in the table below:

Click the link to download the file, or 📋 to copy the import line from CDN.

Files

Description

    mini-van-0.6.3.min.jsCopy import line📋

    mini-van-0.6.3.min.d.ts

Minified script file for ES6 modules, optimized for bundle size.

    mini-van-0.6.3.jsCopy import line📋

    mini-van-0.6.3.d.ts

The source file without minification.

    van-0.6.3.nomodule.min.jsCopy import line📋

Similar to `mini-van-0.6.3.min.js`, but designed to work in non-module context, such as inline JavaScript or `<script type="text/javascript">`.

    van-0.6.3.nomodule.jsCopy import line📋

Similar to `mini-van-0.6.3.js`, but designed to work in non-module context, such as inline JavaScript or `<script type="text/javascript">`.

[API Reference](#api-reference)
-------------------------------

* * *

**Mini-Van** exposes the same set of APIs as **VanJS** for DOM composition and manipulation. Thus for API reference, you can refer to [DOM Composition and Manipulation](/tutorial#dom) section of **VanJS** tutorial. Note that: state and state binding are not supported in **Mini-Van**.

[Source Code](#source-code)
---------------------------

* * *

[github.com/vanjs-org/mini-van](https://github.com/vanjs-org/mini-van)

[Support & Feedback](#support-feedback)
---------------------------------------

* * *

🙏 **VanJS** aims to build a better world by reducing the entry barrier of UI programming, with no intention or plan on commercialization whatsoever. If you find **VanJS** interesting, or could be useful for you some day, please consider starring the project on [GitHub](https://github.com/vanjs-org/mini-van). It takes just a few seconds but your support means the world to us and helps spread **VanJS** to a wider audience.

We're looking for the 1.0 milestone (commitment to API stability) soon, your precious feedback will be greatly appreciated. You can submit your feedback by creating issues with the link below:

[Star](https://github.com/vanjs-org/mini-van) [Watch](https://github.com/vanjs-org/mini-van/subscription) [Issue](https://github.com/vanjs-org/mini-van/issues) [Follow @vanjs-org](https://github.com/vanjs-org)

Contact us: [\[email protected\]](/cdn-cgi/l/email-protection#92e6f3fdd2e4f3fcf8e1bcfde0f5)

**VanJS**: Fullstack Rendering (SSR, CSR and Hydration)
=======================================================

_Requires **VanJS** [1.2.0](https://github.com/vanjs-org/van/discussions/114) or later, and **Mini-Van** [0.6.0](https://github.com/vanjs-org/mini-van/releases/tag/0.6.0) or later._

**VanJS** offers a seamless and framework-agnostic solution for fullstack rendering. We will provide a walkthrough for a sample application with SSR (server-side rendering), CSR (client-side rendering) and hydration. As an outline, here are the major steps we're going to take to build the sample application:

1.  Define common UI components that can be shared on both server-side and client-side.
2.  Implement server-side script with the help of **Mini-Van** for serving the HTML content to end users.
3.  Implement client-side script with the help of **VanJS** for adding client-side components and enabling hydration.

The sample application requires a bare minimum of dependencies. The server-side script can be run by Node.js. We can also build a fullstack application with other JavaScript runtime like Deno or Bun. Other front-end frameworks like Vite or Astro are not required, but it should be easy to integrate with them.

The source code of the sample application can be found [here](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example) with the following directory structure:

*   `hydration-example`: Root of the sample application.
    *   `src`: Source files of the application.
        *   `components`: Common components that are shared on both server-side and client-side.
            *   `[hello.ts](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example/src/components/hello.ts)`: `Hello` component.
            *   `[counter.ts](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example/src/components/counter.ts)`: `Counter` component.
        *   `[server.ts](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example/src/server.ts)`: server-side script to serve the HTML content.
        *   `[client.ts](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example/src/client.ts)`: client-side script for client-side components and hydration.
    *   `dist`: Bundled (and minified) client-side `.js` files.
    *   `[package.json](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example/package.json)`: Basic information of the application. Primarily, it defines the NPM dependencies.

You can preview the sample application via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/hydration-example?file=%2Fsrc%2Fserver.ts%3A1%2C1).

_A Bun-based variation of this example can be found_ [here](https://github.com/vanjs-org/van/tree/main/bun-examples/hydration).

[`package-lock.json` File](#package-lock-json-file)
---------------------------------------------------

* * *

Dependencies are declared in `[package.json](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example/package.json)` file:

      "dependencies": {
        "finalhandler": "^1.2.0",
        "mini-van-plate": "^0.6.3",
        "serve-static": "^1.15.0",
        "vanjs-core": "^1.5.5"
      }
    

*   [finalhandler](https://www.npmjs.com/package/finalhandler) and [serve-static](https://www.npmjs.com/package/serve-static): Server-side packages for serving static files (primarily used for serving `.js` files).
*   [mini-van-plate](https://www.npmjs.com/package/mini-van-plate): The **Mini-Van** package used for SSR.
*   [vanjs-core](https://www.npmjs.com/package/vanjs-core): The **VanJS** package used for CSR.

[Shared UI Components](#shared-ui-components)
---------------------------------------------

* * *

Now, let's build some shared UI components that can run on both server-side and client-side.

### [Static Component](#static-component)

First, let's take a look at a static (non-reactive) component - `Hello`:

    import { env } from "mini-van-plate/shared"
    
    export default () => {
      const {a, div, li, p, ul} = env.van.tags
    
      const fromServer = typeof window === "undefined"
      return div(
        p(() => `👋Hello (from ${fromServer ? "server" : "client"})`),
        ul(
          li("🗺️World"),
          li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
        ),
      )
    }
    

Compared to the `[Hello](/demo#hello-world)` component in the "VanJS by Example" page, there are following notable differences:

*   We import the `env` object from `mini-van-plate/shared`. The purpose of the `env` object is to provide an abstract `van` object for shared components so that shared components don't have to depend on a concrete `van` object. The client-side and server-side scripts are expected to provide the actual `van` object (from **VanJS** or **Mini-Van**, respectively) via function `registerEnv`, as shown later.
*   We can determine if the component is being rendered on the server-side or client-side:
    
        const fromServer = typeof window === "undefined"
    
    and show different content based on it:
    
        p(() => `👋Hello (from ${fromServer ? "server" : "client"})
    
    This will help us differentiate whether the component is rendered from server or from client.

**Limitations:** _For the abstract `van` object, the typechecking for tag functions and `van.add` is quite limited. This is because it's hard to unify the type system across the common types between server-side and client-side._

### [Reactive Component](#reactive-component)

Next, let's take a look at a reactive component - `Counter`:

    import { env, State } from "mini-van-plate/shared"
    
    interface Props {
      readonly id?: string
      readonly init?: number
      readonly buttonStyle?: string | State<string>
    }
    
    export default ({id, init = 0, buttonStyle = "👍👎"}: Props) => {
      const {button, div} = env.van.tags
    
      const stateProto = Object.getPrototypeOf(env.van.state())
    
      const val = <T>(v: T | State<T>) =>
        Object.getPrototypeOf(v ?? 0) === stateProto ? (<State<T>>v).val : <T>v
    
      const [up, down] = [...val(buttonStyle)]
      const counter = env.van.state(init)
      return div({...(id ? {id} : {}), "data-counter": counter},
        "❤️ ", counter, " ",
        button({onclick: () => ++counter.val}, up),
        button({onclick: () => --counter.val}, down),
      )
    }
    

Notable differences from the `[Counter](/demo#counter)` component in the "VanJS by Example" page:

*   Similar to the `Hello` component, it uses `env.van` imported from `mini-van-plate/shared` to make the component environment-agnostic.
*   You can define states and bind states to DOM nodes as you normally do on the client-side. This is because in **Mini-Van** `0.4.0` release, we adjusted its implementation to make it compatible to states and state-bindings related API, though with the absence of reactively (i.e.: changing a state won't lead to the update of the DOM tree), which is only possible on the client-side after hydration.
*   You can optionally specify the ID of the component with the `id` property. This is helpful to locate the component while hydrating.
*   You can optionally specify the initial counter value (default: `0`) with the `init` property.
*   You can optionally specify the style of the increment/decrement buttons. As illustrated later, we will see how to make the button style of the `Counter` component reactive to user selection.
*   We keep the `data-counter` attribute of the component in sync with the current value of the counter. This will help us keep the counter value while hydrating.

[Server-Side Script: HTML Template](#server-side-script-html-template)
----------------------------------------------------------------------

* * *

Now, let's build the server-side script that enables SSR:

    import { createServer } from "node:http"
    import { parse } from "node:url"
    import serveStatic from "serve-static"
    import finalhandler from "finalhandler"
    import van from "mini-van-plate/van-plate"
    import { registerEnv } from "mini-van-plate/shared"
    import Hello from "./components/hello.js"
    import Counter from "./components/counter.js"
    
    const {body, div, h1, h2, head, link, meta, option, p, script, select, title} = van.tags
    
    const [env, port = 8080] = process.argv.slice(2);
    
    const serveFile = serveStatic(".")
    
    registerEnv({van})
    
    createServer((req, res) => {
      if (req.url?.endsWith(".js")) return serveFile(req, res, finalhandler(req, res))
      const counterInit = Number(parse(req.url!, true).query["counter-init"] ?? 0)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(van.html(
        head(
          link({rel: "icon", href: "logo.svg"}),
          title("SSR and Hydration Example"),
          meta({name: "viewport", content: "width=device-width, initial-scale=1"}),
        ),
        body(
          script({type: "text/javascript", src: `dist/client.bundle${env === "dev" ? "" : ".min"}.js`, defer: true}),
          h1("Hello Components"),
          div({id: "hello-container"}, Hello()),
          h1("Counter Components"),
          div({id: "counter-container"},
            h2("Basic Counter"),
            Counter({id: "basic-counter", init: counterInit}),
            h2("Styled Counter"),
            p("Select the button style: ",
              select({id: "button-style", value: "👆👇"},
                option("👆👇"),
                option("👍👎"),
                option("🔼🔽"),
                option("⏫⏬"),
                option("📈📉"),
              ),
            ),
            Counter({id: "styled-counter", init: counterInit, buttonStyle: "👆👇"}),
          ),
        )
      ))
    }).listen(Number(port), () => console.log(`Try visiting the server via http://localhost:${port}.
    Also try http://localhost:${port}?counter-init=5 to set the initial value of the counters.`))
    

The script implements a basic HTTP server with the built-in `node:http` module (no web framework needed). You will probably first notice this line:

    registerEnv({van})

This is to tell all shared components to use the `van` object from this file, which is imported from the [`van-plate` mode](/minivan#npm-van-plate) of **Mini-Van**.

Then for this line:

    if (req.url?.endsWith(".js")) return serveFile(req, res, finalhandler(req, res))

It tells the HTTP server to serve the file statically if any `.js` file is requested.

The bulk of the script is declaring the DOM structure of the page that is enclosed in `van.html(...)`. As you can see, the expressiveness of tag functions enable us to declare the entire HTML page, including everything in the `<head>` section and `<body>` section.

The code declares an HTML page with one `Hello` component and two `Counter` components - one with the default button style, and the other whose button style can be selected by the user. Here are a few interesting things to note:

*   The line:
    
        script({type: "text/javascript", src: `dist/client.bundle${env === "dev" ? "" : ".min"}.js`, defer: true})
    
    indicates that we're choosing different JavaScript bundle files under different modes: `client.bundle.js` in dev mode whereas `client.bundle.min.js` in prod mode. It makes sense to use original client-side script during development and use the minified script in production.
*   We're allowing users to set the initial value of the counters via query parameters. Specifically, the line:
    
        const counterInit = Number(parse(req.url!, true).query["counter-init"] ?? 0)
    
    and line:
    
        Counter({van, id: "basic-counter", init: counterInit})
    
    enable that.
*   We're choosing [`van-plate` mode](/minivan#npm-van-plate) as SSR is done with pure text templating without any DOM manipulation. If you want some DOM manipulation for your SSR, you can choose [`mini-van` mode](/minivan#npm-mini-van) instead.

[Client-Side Script: CSR and Hydration](#client-side-script-csr-and-hydration)
------------------------------------------------------------------------------

* * *

The final step is to complete the client-side script file.

### [Registering the `van` Object](#registering-the-van-object)

First, let's register the `van` object from **VanJS** so that it can be used by all shared components.

    registerEnv({van})

### [Client-Side Component](#client-side-component)

Then, let's add a client-side component:

    van.add(document.getElementById("hello-container")!, Hello())

This will append a CSR `Hello` component right after the SSR `Hello` component. You can tell whether the component is rendered on the server-side or on the client-side by checking whether the text is `👋Hello (from server)` or `👋Hello (from client)`.

### [Hydration](#hydration)

Next, let's hydrate the counter components rendered on the server side to add the reactivity. We can use `van.hydrate` to achieve that:

    van.hydrate(document.getElementById("basic-counter")!, dom => Counter({
      id: dom.id,
      init: Number(dom.getAttribute("data-counter")),
    }))
    

`van.hydrate` replaces the SSR component (located by `document.getElementById("basic-counter")!`) with the CSR `Counter` component. Note that the 2nd argument of `van.hydrate` is the hydration function that takes the existing DOM node as its parameter and returns the new hydrated component. This way we can get the current state of SSR component (via `Number(dom.getAttribute("data-counter"))`) and pass-in the information while constructing the hydrated component, which keeps the counter value the same after hydration.

In the hydration function, you can read the `val` property of external states. In this way, the hydrated component will be a [`State`\-derived node](/tutorial#state-derived-child), i.e.: a DOM node that will be updated whenever its dependency states change. Now, with that, let's build a `Counter` component whose button style can be adjusted by end users. First, let's define a state `buttonStyle` whose `val` is bound to the `value` of the `#button-style` `<select>` element:

    const styleSelectDom = <HTMLSelectElement>document.getElementById("button-style")
    const buttonStyle = van.state(styleSelectDom.value)
    styleSelectDom.oninput = e => buttonStyle.val = (<HTMLSelectElement>e.target).value
    

Next, let's make the hydrated `Counter` component reactive to `buttonStyle` state:

    van.hydrate(document.getElementById("styled-counter")!, dom => Counter({
      van,
      id: dom.id,
      init: Number(dom.getAttribute("data-counter")),
      buttonStyle,
    }))
    

Since `buttonStyle` is passed into the `Counter` component where its `val` property is referenced, the hydrated `Counter` component will be reactive to the change of `buttonStyle` state.

Note that, this is an illustrative example to show how to make the entire hydrated component reactive to external states. In practice, the implementation of `Counter` component can be optimized to only make the `<button>`s' child text nodes of the `Counter` component reactive to `buttonStyle` state. This can be achieved by binding more localized DOM nodes (i.e.: the child text nodes of `<button>`s) to the `buttonStyle` state. You can check out the implementation below for an optimized `Counter` component:

    import { env, State } from "mini-van-plate/shared"
    
    interface Props {
      readonly id?: string
      readonly init?: number
      readonly buttonStyle?: string | State<string>
    }
    
    export default ({id, init = 0, buttonStyle = "👍👎"}: Props) => {
      const {button, div} = env.van.tags
    
      const stateProto = Object.getPrototypeOf(env.van.state())
    
      const val = <T>(v: T | State<T>) =>
        Object.getPrototypeOf(v ?? 0) === stateProto ? (<State<T>>v).val : <T>v
    
      const counter = env.van.state(init)
      return div({...(id ? {id} : {}), "data-counter": counter},
        "❤️ ", counter, " ",
        button({onclick: () => ++counter.val}, () => [...val(buttonStyle)][0]),
        button({onclick: () => --counter.val}, () => [...val(buttonStyle)][1]),
      )
    }
    

### [API reference: `van.hydrate`](#api-hydrate)

**Signature**

`van.hydrate(dom, f) => undefined`

**Description**

Hydrates the SSR component `dom` with the hydration function `f`.

**Parameters**

*   **`dom`** - The root DOM node of the SSR component we want to hydrate.
*   **`f`** - The hydration function, which takes a DOM node as its input parameter and returns the new version of the DOM node. The hydration function describes how we want to convert an existing DOM node into a new one with added reactivity. If the `val` property of any states are referenced in the hydration function, the hydrated component will be bound to the dependency states (i.e.: reactive to the changes of the referenced states). In this case, the behavior of the hydrated component will be similar to a [`State`\-derived child node](/tutorial#state-derived-child).

**Returns**

`undefined`

[Demo](#demo)
-------------

* * *

Now, let's check out what we have built so far. You can preview the application via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/hydration-example?file=%2Fsrc%2Fserver.ts%3A1%2C1). Alternatively, you can build and deploy application locally by following the steps below:

1.  Clone the GitHub repo:
    
        git clone https://github.com/vanjs-org/vanjs-org.github.io.git
    
2.  Go to the directory for the demo:
    
        cd vanjs-org.github.io/hydration-example
    
3.  Install NPM packages:
    
        npm install
    
4.  Launch the development server:
    
        npm run dev
    
    You will see something like this in the terminal:
    
        Try visiting the server via http://localhost:8080.
              Also try http://localhost:8080?counter-init=5 to set the initial value of the counter.
        
    
5.  By clicking the links printed in the terminal, you will go to the demo page.
6.  You can build the bundle for production with:
    
        npm run build
    

Let's go to the demo page now. You will probably first notice the `Hello` components of the demo:

You can see an SSR `Hello` component followed by a CSR `Hello` component.

The second part of the demo page is for hydrating the `Counter` components. In real-world use cases, hydration typically happens immediately after the page load, or when the application is idle. But if we do that in our sample application, hydration will happen so fast that we won't even be able to notice how hydration happens. Thus, for illustration purpose, we introduce a `<button>` where hydration only happens upon user click:

    van.add(document.getElementById("counter-container")!, p(button({onclick: hydrate}, "Hydrate")))

As a result, the second part of the demo will look like this:

You can verified that all the `Counter` components are non-reactive before the `Hydrate` button is clicked and can be turned reactive upon clicking the `Hydrate` button.

[Fullstack Rendering for VanX](#fullstack-rendering-for-vanx)
-------------------------------------------------------------

* * *

Fullstack rendering for [**VanX**](/x)\-based UI components is also supported. To enable this, `env` in `mini-van-plate/shared` provides an abstract `vanX` object as well, and you can register the concrete `vanX` object via `registerEnv` in the client-side and server-side scripts. In addition, `mini-van-plate/shared` provides a `dummyVanX` object which allows you to register `vanX` on the server-side.

A sample application (a **VanX**\-based TODO list) can be found [here](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/hydration-example2) (preview via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/vanjs-org.github.io/tree/master/hydration-example2?file=%2Fsrc%2Fserver.ts%3A1%2C1)).

[The End](#the-end)
-------------------

* * *

🎉 Congratulations! You have completed the walkthrough for fullstack rendering. With the knowledge you have learned, you will be able to build sophisticated applications that take advantage of SSR, CSR and hydration.

**VanX**: The 1.2kB Official VanJS Extension
============================================

📣 [**VanX** 0.4.0 brings lots of new features →](https://github.com/vanjs-org/van/discussions/292)

**VanX** is the official extension of **VanJS**, which provides handy utility functions. **VanX** makes **VanJS** more ergonomic for certain use cases and its developer experience closer to other popular UI frameworks. Like **VanJS**, **VanX** is also ultra-lightweight, with just 1.2kB in the gzipped minified bundle.

[Installation](#installation)
-----------------------------

* * *

**VanX** is published as NPM package [vanjs-ext](https://www.npmjs.com/package/vanjs-ext). Run the following command to install the package:

    npm install vanjs-ext

Add this line to your script to import the package:

    import * as vanX from "vanjs-ext"

You can also import individual utility functions you're going to use:

    import { <functions you want to use> } from "vanjs-ext"

Alternatively, you can import **VanX** from CDN via a `<script type="text/javascript">` tag:

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/[email protected]/dist/van-x.nomodule.min.js"></script>

`https://cdn.jsdelivr.net/npm/[[email protected]](/cdn-cgi/l/email-protection)/dist/van-x.nomodule.js` can be used for the non-minified version.

Note that: **VanJS** needs to be [imported](/start) via a `<script type="text/javascript">` tag for **VanX** to work properly.

To get TypeScript support for `<script>` tag integration, download `[van-x-0.6.2.d.ts](/code/van-x-0.6.2.d.ts "Download van-x-0.6.2.d.ts")` and add the following code at the top of your `.ts` file:

    import type * as vanXType from "./van-x-0.6.2.d.ts"
    
    declare const vanX: typeof vanXType
    

[`vanX.reactive`: Reactive Object to Hold Many Individual States](#reactive-object)
-----------------------------------------------------------------------------------

* * *

`vanX.reactive` provides an ergonomic way to define a single reactive object where each of its individual fields corresponds to an underlying `State` object. For instance:

    const obj = vanX.reactive({a: 1, b: 2})

defines a reactive object with the following underlying state fields:

    {a: van.state(1), b: van.state(2)}

The reactive objects defined by `vanX.reactive` can be deeply nested. For instance:

    const obj = vanX.reactive({
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    })

defines a reactive object with the following underlying state fields:

    {
      a: van.state(1),
      b: van.state({
        c: van.state(2),
        d: van.state(3),
      }),
    }

Getting and setting values of the underlying states can be simply done by getting / setting the fields of the reactive object. For instance, `obj.b.c` is equivalent to what you would have to write `obj.b.val.c.val` had the underlying state object been accessed.

### [A practical example](#a-practical-example)

Now, let's take a look at a practice example on how `vanX.reactive` can help group multiple states into a single reactive object in your application:

    const Name = () => {
      const data = vanX.reactive({name: {first: "Tao", last: "Xin"}})
      return span(
        "First name: ",
        input({type: "text", value: () => data.name.first,
          oninput: e => data.name.first = e.target.value}), " ",
        "Last name: ",
        input({type: "text", value: () => data.name.last,
          oninput: e => data.name.last = e.target.value}), " ",
        "Full name: ", () => `${data.name.first} ${data.name.last}`, " ",
        button({onclick: () => data.name = {first: "Tao", last: "Xin"}}, "Reset"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/name)

Note that, not only you can set the value of each individual leaf field, you can also set the entire object of the `name` field, as what's being done in the `onclick` handler of the `Reset` button:

    button({onclick: () => data.name = {first: "Tao", last: "Xin"}}, "Reset")

⚠️ **Caveat**: Accessing to any sub-field of the reactive object needs to be wrapped inside a binding function. Otherwise, your app won't be reactive to the sub-field changes.

⚠️ **Caveat**: DO NOT alias any sub-field of the reactive object into other variables. Doing so will break the dependency detection when the sub-field alias is used in a binding function.

#### [API reference: `vanX.reactive`](#api-reactive)

**Signature**

`vanX.reactive(obj) => <the created reactive object>`

**Description**

Converts the input object `obj` into a reactive object.

**Parameters**

*   **`obj`** - Can be a plain object or an object of an existing JavaScript class. `obj` can have deeply nested fields. The original `obj` shouldn't be accessed anymore after the `vanX.reactive(obj)` call.

**Returns**

The created reactive object.

⚠️ **Caveat**: The passed-in `obj` object shouldn't have any `State` fields. Doing so will result in states of other `State` objects, which is [invalid](/tutorial#public-interface-of-state-objects) in **VanJS**.

### [Calculated fields](#calculated-fields)

You can specify calculated fields (similar to [derived states](/tutorial#derived-state) in **VanJS**) via `vanX.calc`. The example above can be rewritten to the code below:

    const Name = () => {
      const data = vanX.reactive({name: {first: "Tao", last: "Xin"}})
      const derived = vanX.reactive({fullName: vanX.calc(() => `${data.name.first} ${data.name.last}`)})
      return span(
        "First name: ",
        input({type: "text", value: () => data.name.first,
          oninput: e => data.name.first = e.target.value}), " ",
        "Last name: ",
        input({type: "text", value: () => data.name.last,
          oninput: e => data.name.last = e.target.value}), " ",
        "Full name: ", () => derived.fullName, " ",
        button({onclick: () => data.name = {first: "Tao", last: "Xin"}}, "Reset"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/name-calc)

⚠️ **Caveat**: Avoid self-referencing when specify calculated fields. For instance, the code below:

    const data = vanX.reactive({
      name: {first: "Tao", last: "Xin"},
      fullName: vanX.calc(() => `${data.name.first} ${data.name.last}`),
    })

will lead to `ReferenceError` as `data` variable is not yet defined when the calculation function is being executed. As shown in the [example](#calculated-fields) above, it's recommended to define calculated fields in a separate reactive object.

#### [API reference: `vanX.calc`](#api-calc)

**Signature**

`vanX.calc(f) => <the created calculated field>`

**Description**

Creates a calculated field for a reactive object based on the calculation function`f`.

**Parameters**

*   **`f`** - The calculation function.

**Returns**

The created calculated field.

### [Get the underlying `State` object](#get-the-underlying-state-object)

Sometimes, it's desirable to get the underlying `State` objects for fields in a reactive object. This can be achieved with `vanX.stateFields`. The example above can be modified to use the underlying state field instead of the binding function for `Full name`:

    const Name = () => {
      const data = vanX.reactive({name: {first: "Tao", last: "Xin"}})
      data.fullName = vanX.calc(() => `${data.name.first} ${data.name.last}`)
      return div(
        "First name: ",
        input({type: "text", value: () => data.name.first,
          oninput: e => data.name.first = e.target.value}), " ",
        "Last name: ",
        input({type: "text", value: () => data.name.last,
          oninput: e => data.name.last = e.target.value}), " ",
        "Full name: ", vanX.stateFields(data).fullName, " ",
        button({onclick: () => data.name = {first: "Tao", last: "Xin"}}, "Reset"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/name-state-fields)

Note that, `stateFields` only gets the underlying state fields for one layer of the reactive object. For instance, to get the state field for `First name`, you need to write:

    vanX.stateFields(vanX.stateFields(data).name.val).first

#### [API reference: `vanX.stateFields`](#api-stateFields)

**Signature**

`vanX.stateFields(obj) => <an object for all underlying state fields of obj>`

**Description**

Given a reactive object `obj`, returns an object for all the underlying state fields of `obj`. For instance, if `obj` is `{a: 1, b: 2}`, `{a: van.state(1), b: van.state(2)}` will be returned.

**Parameters**

*   **`obj`** - The input reactive object.

**Returns**

An object for all the underlying state fields of `obj`.

### [Get the raw field value without registering the dependency](#get-the-raw-field-value)

_Requires **VanX** 0.3.0 or later._

Similar to the `[rawVal](/tutorial#api-rawVal)` property of **VanJS** states. You can use `vanX.raw` for getting the raw field value without registering the dependency. For instance:

    data.s = vanX.calc(() => vanX.raw(data).a + data.b)

will make `data.s` updated when `data.b` changes, but `data.s` won't be updated when `data.a` changes. The same effect goes to derived states and side effects registered via `[van.derive](/tutorial#api-derive)` as well as `State`\-derived DOM nodes.

Note that, `vanX.raw` can access deeply nested fields without registering the dependency _(this requires **VanX** [0.4.0](https://github.com/vanjs-org/van/discussions/292) or later)_. For instance, you can use `vanX.raw(data).a.a` to access the field `data.a.a` without registering the dependency.

#### [API reference: `vanX.raw`](#api-raw)

**Signature**

`vanX.raw(obj) => <an object for getting the field values of obj without registering the dependency>`

**Description**

Given a reactive object `obj`, returns an object whose field values equal to the field values of `obj`, but accessing its fields won't register the dependency.

**Parameters**

*   **`obj`** - The input reactive object.

**Returns**

An object with which you can get the field values of `obj` without registering the dependency.

### [Add reactivity to existing JavaScript classes](#add-reactivity-to-existing-javascript-classes)

It's possible to add reactivity to objects of existing JavaScript classes with the help of `vanX.reactive`. For instance, the code below adds the reactivity to a `Person` object:

    class Person {
      constructor(firstName, lastName) { this.firstName = firstName; this.lastName = lastName }
      get fullName() { return `${this.firstName} ${this.lastName}` }
    }
    
    const Name = () => {
      const person = vanX.reactive(new Person("Tao", "Xin"))
      return div(
        "First name: ",
        input({type: "text", value: () => person.firstName,
          oninput: e => person.firstName = e.target.value}), " ",
        "Last name: ",
        input({type: "text", value: () => person.lastName,
          oninput: e => person.lastName = e.target.value}), " ",
        "Full name: ", () => person.fullName, " ",
        button({onclick: () => (person.firstName = "Tao", person.lastName = "Xin")}, "Reset"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/name-existing-class)

⚠️ **Caveat**: Once an object is turned reactive with `vanX.reactive`, you shouldn't access the original object anymore. Doing so will create the same issue as [aliasing](#caveat-no-aliasing).

⚠️ **Caveat**: There might be issues if you try to add reactivity to a class implemented in native code (not in JavaScript), or a class from a 3rd party library. Example: [#156](https://github.com/vanjs-org/van/issues/156).

### [`vanX.noreactive`: exemption from reactivity conversion](#vanx-noreactive-exemption-from-reactivity-conversion)

_Requires **VanX** [0.6.0](https://github.com/vanjs-org/van/discussions/311) or later._

Sometimes it's desirable to exempt certain fields from being converted into reactive objects. For instance, for the reactive array below:

    const data = vanX.reactive([
      vanX.noreactive(new ArrayBuffer(8)),
      vanX.noreactive(new ArrayBuffer(16)),
    ])

we will treat the `ArrayBuffer`s in `data` as primitive fields instead of further converting them into reactive objects. This feature is essential as the objects of certain native or 3rd party classes [can't be correctly converted into reactive objects](#caveat-native-reactivity). `ArrayBuffer` is one example as wrapping it around a `Proxy` will cause problems.

Below is the whole example that illustrates how `vanX.noreactive` helps a reactive array of `ArrayBuffer` being used in the application:

    const data = vanX.reactive([
      vanX.noreactive(new ArrayBuffer(8)),
      vanX.noreactive(new ArrayBuffer(16)),
    ])
    
    const App = () => div(
      vanX.list(div, data, v => div(v.val.byteLength)),
      div(button({onclick: () => data.push(vanX.noreactive(new ArrayBuffer(24)))}, "Push")),
    )
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/noreactive)

#### [API reference: `vanX.noreactive`](#api-noreactive)

**Signature**

`vanX.noreactive(obj) => <the object exempted from reactivity conversion>`

**Description**

Marks an object so that it won't be converted into a reactive object.

**Parameters**

*   **`obj`** - The input object which you want to exempt from being converted into a reactive object.

**Returns**

The object exempted from reactivity conversion.

### [A comprehensive example](#a-comprehensive-example)

You can refer to this [file](https://github.com/vanjs-org/van/blob/main/x/examples/reactive/src/main.js) for a comprehensive demo of all the features regarding to reactive objects discussed above. You can preview the app via [CodeSandbox](https://codesandbox.io/p/sandbox/github/vanjs-org/van/tree/main/x/examples/reactive?file=%2Fsrc%2Fmain.js%3A1%2C1).

[`vanX.list`: Reactive List that Minimizes Re-rendering on Updates](#reactive-list)
-----------------------------------------------------------------------------------

* * *

`vanX.list` takes an input reactive object and builds a list of UI elements whose contents are updated whenever any field of the input reactive object changes. The input reactive object can either be an `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)` for non-keyed input, or a plain object for keyed input.

Let's first take a look at some simple examples.

`Array` for non-keyed input:

    const items = vanX.reactive([1, 2, 3])
    return vanX.list(ul, items, v => li(v))
    

Plain object for keyed input:

    const items = vanX.reactive({a: 1, b: 2, c: 3})
    return vanX.list(ul, items, v => li(v))
    

In both examples, `<ul><li>1</li><li>2</li><li>3</li></ul>` will be returned.

You can add, update, and delete entries in the reactive object `items`, and the rendered UI elements are bound to the changes while minimizing the re-rendering of the DOM tree. For instance, if you do the following changes to the `Array` example:

    ++items[0]
    delete items[1]
    items.push(4)
    

the rendered UI elements will be updated to `<ul><li>2</li><li>3</li><li>4</li></ul>`.

For keyed object, the following changes will produce the same result:

    ++items.a
    delete items.b
    items.d = 4
    

In addition, for `Array`\-based input `items`, you can call `[shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)`, `[unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)` and `[splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)` as you would normally do to an array. The rendered UI elements are guaranteed to be in sync. For instance, after executing the following code:

    const items = vanX.reactive([1, 2, 3])
    const dom = vanX.list(ul, items, v => li(v))
    
    items.shift()
    items.unshift(4)
    items.splice(1, 1, 5)
    

`dom` will become `<ul><li>4</li><li>5</li><li>3</li></ul>`.

#### [API Reference: `vanX.list`](#api-list)

**Signature**

`vanX.list(container, items, itemFunc) => <the root element of the created DOM tree>`

**Description**

Creates a DOM tree for a list of UI elements based on the input reactive object `items`.

**Parameters**

*   **`container`** - Can be a [tag function](/tutorial#api-tags) or a DOM element for the container element of the list of UI elements.
    *   If `container` is a tag function, such as `van.tags.ul` it means we want to create a `<ul>` element as the container of the list. Indeed, any function that returns a DOM element can be passed as the `container` argument.
    *   _(requires **VanX** [0.4.0](https://github.com/vanjs-org/van/discussions/292) or later)_ If `container` is a DOM element, it will be used directly as the container of the list. Usually, this is useful to specify the container element with some customized property values, such as `div({class: "item-list"})` for `<div class="item-list">`.
*   **`items`** - A reactive object that holds the data for the list. Can be an `Array` (for non-keyed input) or a plain object (for keyed input).
*   **`itemFunc`** - The function (`(v, deleter, k) => Node`) that is used to generate the UI element (or rarely, text node) for each list item. The function takes the following parameters:
    *   `v` - A `State` object corresponding to each list item. You can directly use it as a `State`\-based [property](/tutorial#state-typed-prop) / [child node](/tutorial#state-typed-child), read its value for building the UI element, and/or set its value in some event handlers.
    *   `deleter` - a function (`() => void`) that can be used in the event handler to delete the entire item. Typically the `deleter` function can be used as the `onclick` handler of a deletion button.
    *   `k` - _(requires **VanX** 0.2.0 or later)_ the key of the corresponding list item, which is the index if `items` is an `Array` or the property key if `items` is a plain object.

**Returns**

The root element of the created DOM tree.

### [A simplified TODO App](#a-simplified-todo-app)

Now, let's take a look at a practical example: The [Fully Reactive TODO App](/demo#todo-app) in [VanJS by Example](/demo) page can be re-implemented with the help of `vanX.list`. We can see how a 40+ lines of code is simplified to just over 10 lines:

    const TodoList = () => {
      const items = vanX.reactive(JSON.parse(localStorage.getItem("appState") ?? "[]"))
      van.derive(() => localStorage.setItem("appState", JSON.stringify(vanX.compact(items))))
      const inputDom = input({type: "text"})
      return div(
        inputDom, button({onclick: () => items.push({text: inputDom.value, done: false})}, "Add"),
        vanX.list(div, items, ({val: v}, deleter) => div(
          input({type: "checkbox", checked: () => v.done, onclick: e => v.done = e.target.checked}),
          () => (v.done ? del : span)(v.text),
          a({onclick: deleter}, "❌"),
        )),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/todo-list)

You might notice how easy it is to serialize/deserialize a complex reactive object into/from external storage. This is indeed one notable benefit of reactive objects provided by `[vanX.reactive](#reactive-object)`.

### [Holes in the array](#holes-in-the-array)

Deleting items in the reactive array will create [holes](https://2ality.com/2015/09/holes-arrays-es6.html) inside the array, which is an uncommon situation in JavaScript. Basically, if we execute the following code:

    const a = [1, 2, 3]
    delete a[1]
    

`a` will become `[1, empty, 3]`. Note that, `empty` is different from `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)`. When we do:

    for (const key in a)

or use higher-order functions like `[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)` or `[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)`, holes will be skipped in the enumeration.

Why do we allow holes in the array? Short answer: to minimize the re-rendering of DOM elements. Let's say if we have a reactive array: `[1, 2, 3, 4, 5]`, and the 3rd item is deleted by the user. If we allow holes, the array will become `[1, 2, empty, 4, 5]`. Based on how DOM elements are bound to the reactive array, only the 3rd element needs to be removed. However, if we don't allow holes, the array will become `[1, 2, 4, 5]`, then we need 3 DOM updates:

1.  3rd DOM element: `3` -> `4`
2.  4th DOM element: `4` -> `5`
3.  Remove the 5th DOM element.

In the TODO app above, we are calling `[vanX.compact](#serialization-and-compact)` which recursively removes holes in all arrays of the input reactive object before serializing `items` to the JSON string via `JSON.stringify`. This is because holes are turned into `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)` values in the result JSON string and cause problems when the JSON string is deserialized (See a [detailed explanation here](https://github.com/vanjs-org/van/discussions/144#discussioncomment-7342023)).

⚠️ **Caveat**: Because of holes in the reactive array, the `length` property can't reliable tell the number of items in the array. You can use `Object.keys(items).length` instead as in the [example below](#example-1-sortable-list).

[`vanX.replace`: Update, Insert, Delete and Reorder Items in Batch](#vanx-replace-update-insert-delete-and-reorder-items-in-batch)
----------------------------------------------------------------------------------------------------------------------------------

* * *

In addition to updating the `items` object one item at a time, we also provide the `vanX.replace` function that allows you to update, insert, delete and reorder items in batch. The `vanX.replace` function takes a reactive object - `obj`, and a replacement object (or a replacement function) - `replacement`, as its input parameters. `vanX.replace` is responsible for updating the `obj` object as well as UI elements bound to it based on the new data provided by `replacement`. Let's take a look at a few examples:

    // Assume we have a few TODO items as following:
    const todoItems = vanX.reactive([
      {text: "Implement VanX", done: true},
      {text: "Test VanX", done: false},
      {text: "Write a tutorial for VanX", done: false},
    ])
    
    // Directly specify the replacement object
    const refreshItems = () => vanX.replace(todoItems, [
      {text: "Publishing VanX", done: true},
      {text: "Refining VanX", done: false},
      {text: "Releasing a new version of VanX", done: false},
    ])
    
    // To delete items in batch
    const clearCompleted = () => vanX.replace(todoItems, l => l.filter(v => !v.done))
    
    // To update items in batch
    const appendText = () =>
      vanX.replace(todoItems, l => l.map(v => ({text: v.text + "!", done: v.done})))
    
    // To reorder items in batch
    const sortItems = () =>
      vanX.replace(todoItems, l => l.toSorted((a, b) => a.localeCompare(b)))
    
    // To insert items in batch
    const duplicateItems = () => vanX.replace(todoItems,
      l => l.flatMap(v => [v, {text: v.text + " copy", done: v.done}]))
    

#### [API reference: `vanX.replace`](#api-replace)

**Signature**

`vanX.replace(obj, replacement) => obj`

**Description**

Updates the reactive object `obj` and UI elements bound to it based on the data provided by `replacement`.

**Parameters**

*   **`obj`** - The reactive object that you want to update.
*   **`replacement`** - Can be a plain array / object, or a function.
    *   _(requires **VanX** [0.4.0](https://github.com/vanjs-org/van/discussions/292) or later)_ If `replacement` is a plain array / object, directly update `obj` with the values provided in `replacement`.
    *   If `replacement` is a function, it will take the current values of `obj` as input and returns the new values of the update. The input parameter of the function depends on the type of `obj`. If `obj` is an array (for non-keyed data), `replacement` will take its values as an array (after eliminating [holes](#holes-in-the-array)) and return the updated values as another array. If `obj` is a plain object (for keyed data), `replacement` will take its values as an array of key value pairs (the data you would get with `Object.entries(items)`) and return the updated values as another array of key value pairs.

**Returns**

`obj`

⚠️ **Caveat**: [Calculated fields](#calculated-fields) are not allowed in `obj` and `replacement`.

### [Example 1: sortable list](#example-1-sortable-list)

Let's look at a sample app that we can build with `vanX.list` and `vanX.replace` - a list that you can add/delete items, sort items in ascending or descending order, and append a string to all items in the list:

    const List = () => {
      const items = vanX.reactive([])
      const inputDom = input({type: "text"})
    
      return div(
        div(inputDom, button({onclick: () => items.push(inputDom.value)}, "Add")),
        div(() => Object.keys(items).length, " item(s) in total"),
        vanX.list(ul, items, (v, deleter) => li(v, " ", a({onclick: deleter}, "❌"))),
        div(
          button({onclick: () => vanX.replace(items, l => l.toSorted())}, "A -> Z"),
          button({onclick: () => vanX.replace(items,
            l => l.toSorted((a, b) => b.localeCompare(a)))}, "Z -> A"),
          button({onclick: () => vanX.replace(items, l => l.map(v => v + "!"))}, 'Append "!"'),
        ),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/example-list1)

### [Example 2: an advanced sortable TODO list](#example-2-an-advanced-sortable-todo-list)

Now, let's take a look at a more advanced example - a sortable TODO list, which is implemented with keyed data. i.e.: reactive `items` is a plain object instead of an array. In additional to the addition, deletion, sorting and appending strings that are implemented in the previous example, you can edit an item, mark an item as complete, clear all completed items and duplicate the entire list. Furthermore, the application state is serialized and persisted into `[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)` thus the state is preserved across page loads.

    const TodoList = () => {
      const items = vanX.reactive(JSON.parse(localStorage.getItem("items") ?? "{}"))
      van.derive(() => localStorage.setItem("items", JSON.stringify(vanX.compact(items))))
    
      const inputDom = input({type: "text"})
      let id = Math.max(0, ...Object.keys(items).map(v => Number(v.slice(1))))
    
      return div(
        div(inputDom, button(
          {onclick: () => items["k" + ++id] = {text: inputDom.value, done: false}}, "Add")),
        div(() => Object.keys(items).length, " item(s) in total"),
        vanX.list(div, items, ({val: v}, deleter) => div(
          input({type: "checkbox", checked: () => v.done,
            onclick: e => v.done = e.target.checked}), " ",
          input({
            type: "text", value: () => v.text,
            style: () => v.done ? "text-decoration: line-through;" : "",
            oninput: e => v.text = e.target.value,
          }), " ",
          a({onclick: deleter}, "❌"),
        )),
        div(
          button({onclick: () => vanX.replace(items, l => l.filter(([_, v]) => !v.done))},
            "Clear Completed"),
          button({onclick: () => vanX.replace(items, l =>
            l.toSorted(([_1, a], [_2, b]) => a.text.localeCompare(b.text)))}, "A -> Z"),
          button({onclick: () => vanX.replace(items, l =>
            l.toSorted(([_1, a], [_2, b]) => b.text.localeCompare(a.text)))}, "Z -> A"),
          button({onclick: () => vanX.replace(items, l =>
            l.flatMap(([k1, v1]) => [
              [k1, v1],
              ["k" + ++id, {text: v1.text + " - copy", done: v1.done}],
            ]))},
            "Duplicate List"),
          button({onclick: () => Object.values(items).forEach(v => v.text += "!")}, 'Append "!"'),
        ),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/example-list2)

### [`vanX.list` for calculated fields](#vanx-list-for-calculated-fields)

_Requires **VanX** [0.4.0](https://github.com/vanjs-org/van/discussions/292) or later._

`[vanX.list](#reactive-list)` can take a [calculated field](#calculated-fields) as `items` parameter. Whenever the calculated field is updated, `vanX.replace` will be called internally to update the reactive list, as well as all UI elements bound to it. Below is an example which leverages this technique to build a filterable list:

    const FilteredCountries = () => {
      const countries = [
        "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana",
        "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela",
      ]
    
      const data = vanX.reactive({filter: ""})
      const derived = vanX.reactive({
        filteredCountries: vanX.calc(
          () => countries.filter(c => c.toLowerCase().includes(data.filter.toLowerCase()))),
      })
      return div(
        div("Countries in South America. Filter: ",
          input({type: "text", value: () => data.filter, oninput: e => data.filter = e.target.value})),
        vanX.list(ul, derived.filteredCountries, v => li(v)),
      )
    }
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/calc-list)

[Global App State and Serialization](#global-app-state-and-serialization)
-------------------------------------------------------------------------

* * *

_Requires **VanX** [0.4.0](https://github.com/vanjs-org/van/discussions/292) or later._

With **VanX**, it's possible consolidate the entire app state into a single reactive object, as reactive objects can hold states in arbitrary nested hierarchies. Below is the code for an upgraded version of the [TODO App](#a-simplified-todo-app) above, which allows the text of the input box together with all TODO items to be persisted in `localStorage`:

    const TodoListPlus = () => {
      const appState = vanX.reactive(JSON.parse(
        localStorage.getItem("appStatePlus") ?? '{"input":"","items":[]}'))
      van.derive(() => localStorage.setItem("appStatePlus", JSON.stringify(vanX.compact(appState))))
      return div(
        input({type: "text", value: () => appState.input, oninput: e => appState.input = e.target.value}),
        button({onclick: () => appState.items.push({text: appState.input, done: false})}, "Add"),
        vanX.list(div, appState.items, ({val: v}, deleter) => div(
          input({type: "checkbox", checked: () => v.done, onclick: e => v.done = e.target.checked}),
          () => (v.done ? del : span)(v.text),
          a({onclick: deleter}, "❌"),
        )),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/todo-list-plus)

Note that [calculated fields](#calculated-fields) are still recommended to be stored separately, to avoid issues like [self referencing](#caveat-no-self-ref) or [calculated fields being replaced](#caveat-no-calc-fields-in-replace).

### [Smart diff / update in `vanX.replace`](#smart-diff-update-in-vanx-replace)

When `vanX.replace` updates the reactive object `obj`, it will traverse the entire object tree, do a diff between `replacement` and `obj`, and only update leaf-level fields with different values. Thus, you can call `vanX.replace` to replace the entire app state object, and **VanX** guarantees at the framework level that the minimum amount updates are applied to the reactive object and thus the DOM tree bound to it.

For instance, if `appState` in the example above has the following value:

    {
      "input": "New Item",
      "items": [
        {"text": "Item 1", "done": true},
        {"text": "Item 2", "done": false}
      ]
    }
    

Calling

    vanX.replace(appState, {
      input: "New Item",
      items: [
        {text: "Item 1", done: true},
        {text: "Item 2", done: true},
      ]
    })
    

will only get the `done` field of 2nd element in `items` updated. i.e.: it's equivalent to `appState.items[1].done = true`.

Because of the smart diff / update mechanism, it's usually more preferable to use `vanX.replace` instead of direct assignment to update the object-valued reactive fields. i.e.: prefer:

    vanX.replace(data.objField, <new value>)

instead of

    data.objField = <new value>

### [Server-driven UI (SDUI) with **VanX**](#server-driven-ui-sdui-with-vanx)

The smart diff / update mechanism in `vanX.replace` enables a new spectrum of modern programming paradigms, such as [server-driven UI](https://techitup.io/blog/Build-a-Server-Driven-UI-TFdlnm), where the server sends the entire global app state to the client via JSON or other forms. `vanX.replace` guarantees only minimum parts of the global app state to be updated, and thus minimum parts of the DOM tree need to be re-rendered.

Below is a sample Chat app which receives the updates of app state completely from server. Note that with `vanX.replace`, only necessary DOM elements will be re-rendered upon receiving the server events:

    const ChatApp = () => {
      const appState = vanX.reactive({friends: [], messages: []})
      ;(async () => {for await (const state of serverStateUpdates()) vanX.replace(appState, state)})()
    
      return div({class: "container"},
        div({class: "friend-list"},
          vanX.list(ul, appState.friends, ({val: v}) => li(
            span({class: () => ["status-indicator", v.online ? "online" : "offline"].join(" ")}), " ",
            () => v.name,
          )),
        ),
        vanX.list(div({class: "chat-messages"}), appState.messages, s => div({class: "message"}, s)),
      )
    }
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/x/chat-app)

Note that in the jsfiddle preview link above, we're simulating the server-side state updates. In real-world applications, state updates can be sent from server via [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events), [`WebSocket` messages](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/message_event), or [HTTP polling](https://medium.com/cache-me-out/http-polling-and-long-polling-bd3f662a14f).

### [Serialization app state and `vanX.compact`](#serialization-and-compact)

You can serialize the entire app state into a single string, via `JSON.stringify` or [protobuf](https://github.com/protobufjs/protobuf.js). As mentioned in [a previous section](#holes-in-the-array), holes that might appear in reactive arrays need to be eliminated. `vanX.compact` does exactly that. It traverses the entire object tree of the input reactive object and returns a new object with holes in all encountered arrays eliminated.

#### [API reference: `vanX.compact`](#api-compact)

**Signature**

`vanX.compact(obj) => <a new object with holes in all arrays eliminated>`

**Description**

Traverse the entire object tree of the input reactive object `obj` and returns a new object with holes in all encountered arrays eliminated. The input object `obj` remains unchanged.

**Parameters**

*   **`obj`** - The input reactive object.

**Returns**

A new object with holes eliminated.

[API Index](#api-index)
-----------------------

* * *

Below is the list of all top-level APIs in **VanX**:

*   `[vanX.reactive](#api-reactive)`
*   `[vanX.calc](#api-calc)`
*   `[vanX.stateFields](#api-stateFields)`
*   `[vanX.raw](#api-raw)`
*   `[vanX.noreactive](#api-noreactive)`
*   `[vanX.list](#api-list)`
*   `[vanX.replace](#api-replace)`
*   `[vanX.compact](#api-compact)`

**VanJS**: Advanced Topics
==========================

> _Everything should be made as simple as possible, but not simpler.  
>   
> \-- Albert Einstein_

[DOM Attributes vs. Properties](#dom-attributes-vs-properties)
--------------------------------------------------------------

* * *

In `[tag functions](/tutorial#api-tags)`, while assigning values from `props` parameter to the created HTML element, there are 2 ways of doing it: via `[HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)` (`dom.setAttribute(<key>, <value>)`), or via the properties of the created HTML element (`dom[<key>] = <value>`). **VanJS** follows a consistent rule that makes sense for most use cases regarding which option to choose: when a settable property exists in a given `<key>` for the specific element type, we will assign the value via property, otherwise we will assign the value via attribute.

For instance, `input({type: "text", value: "Hello 🍦VanJS"})` will create an [input box](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) with `Hello 🍦VanJS` as the value of the `value` property, while `div({"data-index": 1})` will create the tag: `<div data-index="1"></div>`.

Note that, for readonly properties of HTML elements, we will still assign `props` values via `setAttribute`. For instance, in the code snippet below, the `list` of the `<input>` element is set via `setAttribute`:

    const Datalist = () => div(
      label({for: "ice-cream-choice"}, "Choose a flavor: "),
      input({
        list: "ice-cream-flavors",
        id: "ice-cream-choice",
        name: "ice-cream-choice",
      }),
      datalist(
        {id: "ice-cream-flavors"},
        option({value: "Chocolate"}),
        option({value: "Coconut"}),
        option({value: "Mint"}),
        option({value: "Strawberry"}),
        option({value: "Vanilla"}),
      )
    )
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/readonly-prop)

**NOTE:** for **Mini-Van**, since `0.4.0`, we consistently assign the `props` values via `setAttribute` for all property keys in tag functions. This is because for SSR (server-side rendering), which is **Mini-Van**'s primary use case, setting the properties of a DOM node won't be visible in the rendered HTML string unless the action of setting the property itself will also set the corresponding HTML attribute (e.g.: setting the `id` property of a DOM node will also set the `id` attribute). This is helpful as `input({type: "text", value: "value"})` can be rendered as `<input type="text" value="value">` in **Mini-Van** but would be rendered as `<input type="text">` if we set the property value via DOM property.

[State and State Binding](#state-and-state-binding)
---------------------------------------------------

* * *

### [Why can't states have DOM node as values?](#why-not-dom-valued-states)

We might be prompted to assign a DOM node to a `State` object, especially when the `State` object is used as a `State`\-typed child node. However, this is problematic when the state is bound in multiple places, like the example below:

    const TurnBold = () => {
      const vanJS = van.state("VanJS")
      return span(
        button({onclick: () => vanJS.val = b("VanJS")}, "Turn Bold"),
        " Welcome to ", vanJS, ". ", vanJS, " is awesome!"
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/dom-valued-state)

In this example, if we click the "Turn Bold" button, the first "**VanJS**" text will disappear, which is unexpected. This is because the same DOM node `b("VanJS")` is used twice in the DOM tree. For this reason, an error will be thrown in `van-{version}.debug.js` whenever we assign a DOM node to a `State` object.

### [State granularity](#state-granularity)

Whenever possible, it's encouraged to define states at a more granular level. That is, it's recommended to define states like this:

    const appState = {
      a: van.state(1),
      b: van.state(2),
    }
    

instead of this:

    const appState = van.state({
      a: 1,
      b: 2,
    })
    

More granular `State` objects can help state bindings be more locally scoped, which make reactive UI updates more efficient by eliminating unnecessary DOM tree construction and replacement.

### [Minimize the scope of DOM updates](#minimize-the-scope-of-dom-updates)

It's encouraged to organize your code in way that the scope of DOM updates is minimized upon the changes of `State` objects. For instance, the 2 components below (`Name1` and `Name2`) are semantically equivalent:

    const name = van.state("")
    
    const Name1 = () => div(() => name.val.trim().length === 0 ?
      p("Please enter your name") :
      p("Hello ", b(name)),
    )
    
    const Name2 = () => {
      const isNameEmpty = van.derive(() => name.val.trim().length === 0)
      return div(() => isNameEmpty.val ?
        p("Please enter your name") :
        p("Hello ", b(name)),
      )
    }
    

But `Name2`'s implementation is more preferable. With `Name1`'s implementation, the entire `<p>` element will be refreshed whenever `name` state is updated. This is because the entire `<p>` element is bound to `name` state as specified in the binding function. On the other hand, with `Name2`'s implementation, the `<p>` element is only refreshed when `name` state is changed from empty to non-empty, or vice versa, as the `<p>` element is bound to derived state - `isNameEmpty`. For other changes to `name` state, only the `Text node` inside the `<b>` element will be refreshed.

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/minimize-dom-updates)

### [Advanced state derivation](#advanced-state-derivation)

> _道生一，一生二，二生三，三生万物  
> (Tao derives one, one derives two, two derive three, and three derive everything)  
>   
> \-- 老子，道德经_

A broad set of advanced state derivation (derived states and side effects) can indeed be defined with `[van.derive](/tutorial#api-derive)`, as illustrated in the following piece of code:

    const fullName = van.state(localStorage.getItem("fullName") ?? "Tao Xin")
    
    // State persistence with `localStorage`
    van.derive(() => localStorage.setItem("fullName", fullName.val))
    
    // Defining multiple derived states
    const firstName = van.state(), lastName = van.state()
    van.derive(() => [firstName.val, lastName.val] = fullName.val.split(" "))
    
    const elapsed = van.state(0)
    setInterval(() => elapsed.val += .01, 10)
    
    // Same as `elapsed`, but delay the state propagation by 1s
    const delayed = van.state(0)
    van.derive(() => setTimeout(v => delayed.val = v, 1000, elapsed.val))
    
    // Same as `elapsed`, but throttle the state update to every 100ms
    const throttled = van.state(0)
    setInterval(() => throttled.val = elapsed.val, 100)
    
    // Generate a data stream for all value updates of a given state `s`
    const streamOf = s => {
      let resolver
      van.derive(() => resolver ? resolver({value: s.val, done: false}) : s.val)
      return {
        [Symbol.asyncIterator]: () => ({
          next: () => new Promise(resolve => resolver = resolve)
        })
      }
    }
    
    (async () => {
      // To subscribe the data stream
      for await (const v of streamOf(throttled)) {
        console.log("elapsed: ", v)
      }
      // You can also chain the data stream with `map`, `filter`, etc. by integrating with
      // rubico (https://rubico.land) or wu.js (https://fitzgen.github.io/wu.js/).
    })()
    

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/advanced-state-derivation)

### [Conditional state binding](#conditional-state-binding)

In [`State`\-derived properties](/tutorial#state-derived-prop) and [`State`\-derived child nodes](/tutorial#state-derived-child), it is guaranteed that the binding function will (only) be triggered when the dependency states change. This is true even for complex binding functions, who have different dependency states under different conditions.

For instance, the binding function `() => cond.val ? a.val + b.val : c.val + d.val` will (only) be triggered by updates of state `a`, `b` and `cond` if `cond.val` is true, and will (only) be triggered by updates of state `c`, `d` and `cond` if `cond.val` is false. This can be illustrated with the code below:

    const ConditionalBinding = () => {
      const formula = van.state("a + b")
      const a = van.state(1), b = van.state(2), c = van.state(3), d = van.state(4)
      const triggeredTimes = new Text(0)
    
      return div(
        div(
          "formula: ",
          select({oninput: e => formula.val = e.target.value},
            option({selected: () => formula.val === "a + b"}, "a + b"),
            option({selected: () => formula.val === "c + d"}, "c + d"),
          ),
        " a: ",
          input({type: "number", min: 0, max: 9, value: a, oninput: e => a.val = Number(e.target.value)}),
          " b: ",
          input({type: "number", min: 0, max: 9, value: b, oninput: e => b.val = Number(e.target.value)}),
          " c: ",
          input({type: "number", min: 0, max: 9, value: c, oninput: e => c.val = Number(e.target.value)}),
          " d: ",
          input({type: "number", min: 0, max: 9, value: d, oninput: e => d.val = Number(e.target.value)}),
        ),
        div("sum: ", () => {
          triggeredTimes.textContent = Number(triggeredTimes.textContent) + 1
          return formula.val === "a + b" ? a.val + b.val : c.val + d.val
        }),
        div("Binding function triggered: ", triggeredTimes, " time(s)"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/conditional-binding)

Conditional state binding works for [derived states](/tutorial#derived-state) and [side effects](/tutorial#side-effect) registered via `van.derive` as well:

    const ConditionalDerive = () => {
      const formula = van.state("a + b")
      const a = van.state(1), b = van.state(2), c = van.state(3), d = van.state(4)
      const triggeredTimes = new Text(0)
      const sum = van.derive(() => {
        triggeredTimes.textContent = Number(triggeredTimes.textContent) + 1
        return formula.val === "a + b" ? a.val + b.val : c.val + d.val
      })
    
      return div(
        div(
          "formula: ",
          select({oninput: e => formula.val = e.target.value},
            option({selected: () => formula.val === "a + b"}, "a + b"),
            option({selected: () => formula.val === "c + d"}, "c + d"),
          ),
        " a: ",
          input({type: "number", min: 0, max: 9, value: a, oninput: e => a.val = Number(e.target.value)}),
          " b: ",
          input({type: "number", min: 0, max: 9, value: b, oninput: e => b.val = Number(e.target.value)}),
          " c: ",
          input({type: "number", min: 0, max: 9, value: c, oninput: e => c.val = Number(e.target.value)}),
          " d: ",
          input({type: "number", min: 0, max: 9, value: d, oninput: e => d.val = Number(e.target.value)}),
        ),
        div("sum: ", sum),
        div("Binding function triggered: ", triggeredTimes, " time(s)"),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/conditional-derive)

### [Self-referencing in side effects](#self-referencing-in-side-effects)

> _The barber is the "one who shaves all those, and those only, who do not shave themselves". The question is, does the barber shave himself?  
>   
> \-- Bertrand Russell, Barber paradox_

Sometimes side effects could lead to trick situations:

    const CheckboxCounter = () => {
      const checked = van.state(false), numChecked = van.state(0)
      van.derive(() => {
        if (checked.val) ++numChecked.val
      })
    
      return div(
        input({type: "checkbox", checked, onclick: e => checked.val = e.target.checked}),
        " Checked ", numChecked, " times. ",
        button({onclick: () => numChecked.val = 0}, "Reset"),
      )
    }
    

Prior to **VanJS** 1.3.0, the code above is problematic. The intention of the code is to count the number of times that the checkbox is checked. The code:

      van.derive(() => {
        if (checked.val) ++numChecked.val
      })

defines the side effect to increment `numChecked` whenever `checked` state is turned to be `true`. However, since `++numChecked.val` de-sugars to `numChecked.val = numChecked.val + 1`, the side effect actually depends on `numChecked` state as well. As a result, when the `Reset` button is clicked, it updates the `numChecked` state, which leads to the side effect to increment `numChecked` state, which will further trigger the same side effect and increment `numChecked`, over and over again - an endless loop. Eventually a stack overflow error will occur to stop the loop, leaving `numChecked` state ending in an arbitrary number.

**VanJS** 1.3.0 adjusts the dependency detection mechanism in this situation to avoid the problem. That is, if we're setting the `val` property of some state inside a binding function (be it in `van.derive`, for state-derived properties, or for state-derived child nodes), that state will not be consider as a dependency of the binding function, even if its `val` property is being read there. The adjustment is aimed to avoid the self-referencing problem discussed above, making it impossible to trigger an side effect to update a state that re-triggers the same side effect again. Thus in **VanJS** 1.3.0 or later, the code above has the correct behavior - clicking the `Reset` button will just reset `numChecked` to `0`.

You can try out the program before and after the 1.3.0 update:

*   [Before 1.3.0 update](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/self-ref-old)
*   [After 1.3.0 update](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/self-ref-new)

[Garbage Collection](#gc)
-------------------------

* * *

There is garbage collection mechanism implemented in **VanJS** to recycle obsolete state bindings. To illustrate the necessity of garbage collection, let's take a look at the code below:

    const renderPre = van.state(false)
    const text = van.state("Text")
    const TextDiv = () => div(
      () => (renderPre.val ? pre : span)(text),
    )
    

In this piece of code, the `TextDiv` component has a `<div>` element whose only child is bound to a `boolean` state - `renderPre`, which determines whether the `<div>` has a `<pre>` or `<span>` child. Inside the child element, the underlying text is bound to a `string` state - `text`. Whenever the value of `renderPre` is toggled, a new version of the `<div>` element will be generated, and we will add a new binding from `text` state to the child text node of the newly created `<div>` element.

Without proper garbage collection implemented, `text` state will eventually be bound to many text nodes after `renderPre` is toggled many times. All the of bindings, except for the most recently added one, are actually obsolete, as they bind the `text` state to a text node that is not currently being used. i.e.: disconnected from the document tree. Meanwhile, because internally, a `State` object holds the reference to all DOM elements are bound to it, these DOM elements won't be GC-ed by JavaScript runtime, causing [memory leaks](https://en.wikipedia.org/wiki/Memory_leak).

Garbage collection is implemented in **VanJS** to resolve the issue. There are 2 ways a garbage collection activity can be triggered:

1.  **Periodic recycling:** periodically, **VanJS** will scan all `State` objects that have new bindings added recently, and remove all bindings to disconnected DOM elements. i.e.: `[isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected)` property is `false`.
2.  **Pre-rendering recycling:** before **VanJS** re-render the DOM tree in response to state changes, it will first check all the states whose values have been changed in this render cycle, and remove all bindings to disconnected DOM elements.

[Try out the example here](/code/gc-ui) (You can use [developer console](https://en.wikipedia.org/wiki/Web_development_tools) to watch `text`'s UI `_bindings`).

### [Avoid your bindings to be GC-ed unexpectedly](#avoid-your-bindings-to-be-gc-ed-unexpectedly)

There are some general guidelines to follow to avoid your bindings being garbage collected unexpectedly:

1.  Please complete the construction of the DOM tree and connect the newly constructed DOM tree to the `[document](https://developer.mozilla.org/en-US/docs/Web/API/Window/document)` object before making any state changes. Otherwise, the bindings to yet-to-be-connected DOM elements will be garbage collected.
2.  DOM tree construction needs to be synchronous. i.e.: you shouldn't have any suspension point while building the DOM tree (e.g.: `await` something in an `[async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)`). Otherwise, periodic recycling might be scheduled in the middle of the suspension point which can cause bindings to yet-to-be-connected DOM elements being garbage collected.

### [Derived states and side effects registered inside a binding function](#derived-states-and-side-effects-registered-inside-a-binding-function)

For derived states and side effects registered via `[van.derive](tutorial#api-derive)`, if they are registered inside a binding function, they will be garbage collected if the DOM node returned by the binding function becomes disconnected from the document tree. For instance, for the code below:

    const renderPre = van.state(false)
    const prefix = van.state("Prefix")
    const TextDiv = () => div(() => {
      const suffix = van.state("Suffix")
      const text = van.derive(() => `${prefix.val} - ${suffix.val}`)
      return (renderPre.val ? pre : span)(text)
    })
    

whenever `renderPre` is toggled, a new `text` state will be created and subscribe to changes of the `prefix` state. However, the derivation from `prefix` to the previous `text` state will be garbage collected as the derivation was created while executing a binding function whose result DOM node no longer connects to the document tree. This is the mechanism to avoid memory leaks caused by state derivations that hold onto memory indefinitely.

[Try out the example here](/code/gc-derive) (You can use developer console to watch `prefix`'s `_listeners`).

[Lifecycle Hooks](#lifecycle-hooks)
-----------------------------------

* * *

To keep **VanJS**'s simplicity, there isn't a direct support of lifecycle hooks in **VanJS** API. That being said, there are multiple ways to inject custom code upon lifecycle events (mount/unmount) of DOM elements.

### [Using `setTimeout`](#using-settimeout)

A quick and dirty way to inject custom code upon a DOM element is mounted is to use `setTimeout` with a small `delay`. Since the rendering cycle starts right after the current thread of execution (internally, the rendering cycle is rescheduled via `setTimeout` with a `0` `delay`), the custom code injected via `setTimeout` with a small `delay` is guaranteed to be executed right after the upcoming rendering cycle, which ensures its execution upon the DOM element being mounted. This simple technique is used in a few places of the official **VanJS** codebase (in the website and demos), e.g.: [1](https://github.com/vanjs-org/vanjs-org.github.io/blob/e149ba503bf2da80d3023bb314e7fab57edbfa17/code/code-browser/src/main.js#L39), [2](https://github.com/vanjs-org/vanjs-org.github.io/blob/e149ba503bf2da80d3023bb314e7fab57edbfa17/converter-ui/convert.ts#L81).

### [Registering a side effect via `van.derive`](#registering-a-side-effect-via-van-derive)

_Requires **VanJS** 1.5.0 or later._

If you want to get rid of `setTimeout` (thus the small `delay` introduced by it). You can leverage the technique of registering a side effect via `[van.derive](/tutorial#api-derive)`, as demonstrated in the code below:

    const Label = ({text, onmount}) => {
      if (onmount) {
        const trigger = van.state(false)
        van.derive(() => trigger.val && onmount())
        trigger.val = true
      }
      return div({class: "label"}, text)
    }
    
    const App = () => {
      const counter = van.state(0)
      return div(
        div(button({onclick: () => ++counter.val}, "Increment")),
        () => Label({
          text: counter.val,
          onmount: () => document.getElementById("msg").innerText =
            "Current label: " + document.querySelector(".label").innerText,
        }),
        div({id: "msg"}),
      )
    }
    

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/advanced/onmount)

This technique works because in **VanJS** 1.5.0 or later, derived states and side effects caused by state changes are scheduled asynchronously right in the next rendering cycle. Thus the side effects caused by the state changes of the current rendering cycle are guaranteed to be executed right after the completion of the current rendering cycle.

### [Register `connectedCallback` and `disconnectedCallback` of custom elements](#register-connectedcallback-and-disconnectedcallback-of-custom-elements)

Another option is to leverage the `connectedCallback` and `disconnectedCallback` of custom elements in [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). This is the only option to reliably inject custom code upon the unmount events of DOM elements. Note that in **VanJS**'s add-on: [van\_element](https://van-element.pages.dev/), you can easily [register mount/unmount handlers](https://van-element.pages.dev/learn/lifecycle.html) with the help of the add-on.

**VanJS**: Media Coverage
=========================

🙏🙏🙏 **VanJS** is a personal project, which means I don't have the time and resources to promote it to a wider audience. My heartfelt gratitude extends towards to all content creators and tech bloggers who are helping spread good words about **VanJS**. Your help is invaluable in our pursuit of **VanJS**'s mission: _Enabling everyone to build useful UI apps with a few lines of code, anywhere, any time, on any device._

[Videos](#videos)
-----------------

* * *

(_In Polish_)

(_In Dutch_)

(_In Simplified Chinese_)

(_In Simplified Chinese_)

[Articles / Podcasts](#articles-podcasts)
-----------------------------------------

* * *

1.  [https://youtu.be/eop7r4oV2gc?si=XrOmUcr7fTQX8H5C](https://youtu.be/eop7r4oV2gc?si=XrOmUcr7fTQX8H5C) (podcasts)
2.  [https://changelog.com/jsparty/277](https://changelog.com/jsparty/277) (podcasts)
3.  [https://blog.stackademic.com/vanjs-the-ultra-lightweight-react-alternative-55c0f380376f](https://blog.stackademic.com/vanjs-the-ultra-lightweight-react-alternative-55c0f380376f)
4.  [https://thenewstack.io/vanjs-a-minimalist-vanilla-javascript-ui-framework/](https://thenewstack.io/vanjs-a-minimalist-vanilla-javascript-ui-framework/)
5.  [https://devm.io/javascript/javascript-vanjs-xin](https://devm.io/javascript/javascript-vanjs-xin)
6.  [https://www.linkedin.com/pulse/vanjs-reactive-ui-framework-without-reactjsx-luvimac%3F/](https://www.linkedin.com/pulse/vanjs-reactive-ui-framework-without-reactjsx-luvimac%3F/)
7.  [https://www.linkedin.com/posts/muneebhussainmodi\_javascript-js-webdevelopment-activity-7109226447000469504-hlRg/](https://www.linkedin.com/posts/muneebhussainmodi_javascript-js-webdevelopment-activity-7109226447000469504-hlRg/)
8.  [https://www.linkedin.com/posts/stefanofago\_vanjs-a-09kb-grab-n-go-reactive-ui-framework-activity-7092964871117451264-RYnu/](https://www.linkedin.com/posts/stefanofago_vanjs-a-09kb-grab-n-go-reactive-ui-framework-activity-7092964871117451264-RYnu/)
9.  [https://javascript.plainenglish.io/vanjs-magic-53734fe52d30](https://javascript.plainenglish.io/vanjs-magic-53734fe52d30)
10.  [https://wp.codingbeautydev.com/blog/web-dev-tools/](https://wp.codingbeautydev.com/blog/web-dev-tools/)
11.  [https://www.smashingmagazine.com/2024/01/top-frontend-tools-2023/#vanjs-https-vanjs-org](https://www.smashingmagazine.com/2024/01/top-frontend-tools-2023/#vanjs-https-vanjs-org)
12.  [https://risingstars.js.org/2023/en#section-framework](https://risingstars.js.org/2023/en#section-framework)
13.  [https://github.com/thoughtspile/awesome-tiny-js?tab=readme-ov-file#ui-frameworks](https://github.com/thoughtspile/awesome-tiny-js?tab=readme-ov-file#ui-frameworks)
14.  [https://github.com/n-ce/Awesome-Minimal-JavaScript-Frameworks](https://github.com/n-ce/Awesome-Minimal-JavaScript-Frameworks)
15.  [https://dhtmlx.medium.com/javascript-news-updates-and-tutorials-august-2023-edition-d9fda0b268df](https://dhtmlx.medium.com/javascript-news-updates-and-tutorials-august-2023-edition-d9fda0b268df)
16.  [https://javascript.plainenglish.io/exciting-updates-in-the-web-dev-71c52563cee0](https://javascript.plainenglish.io/exciting-updates-in-the-web-dev-71c52563cee0)
17.  [https://javascriptweekly.com/issues/650](https://javascriptweekly.com/issues/650)
18.  [https://javascriptweekly.com/issues/639](https://javascriptweekly.com/issues/639)
19.  [https://javascriptweekly.com/issues/680](https://javascriptweekly.com/issues/680)
20.  [https://bytes.dev/archives/211](https://bytes.dev/archives/211)
21.  [https://bytes.dev/archives/190](https://bytes.dev/archives/190)
22.  [https://echojs.com/news/41772](https://echojs.com/news/41772)
23.  [https://wweb.dev/weekly/150](https://wweb.dev/weekly/150)
24.  [https://javascript.thisweekin.io/javascript-weekly-issue-83-31f1d5c6c57f](https://javascript.thisweekin.io/javascript-weekly-issue-83-31f1d5c6c57f)
25.  [https://us3.campaign-archive.com/?u=4ad274b490aa6da8c2d29b775&id=887df01416](https://us3.campaign-archive.com/?u=4ad274b490aa6da8c2d29b775&id=887df01416)
26.  [https://dev.to/vincenius/weekly-web-development-resources-150-5819](https://dev.to/vincenius/weekly-web-development-resources-150-5819)
27.  [https://dev.to/darkwiiplayer/making-the-case-for-skooma-4n70](https://dev.to/darkwiiplayer/making-the-case-for-skooma-4n70)
28.  [https://dev.to/nombrekeff/want-to-help-with-cardboard-jsts-vanilla-reactive-framework-jcl](https://dev.to/nombrekeff/want-to-help-with-cardboard-jsts-vanilla-reactive-framework-jcl)
29.  [https://dev.to/efpage/the-fantastic-speed-of-template-literals-4f0p](https://dev.to/efpage/the-fantastic-speed-of-template-literals-4f0p)
30.  [https://devm.io/javascript/javascript-user-friendly-web-apps](https://devm.io/javascript/javascript-user-friendly-web-apps)
31.  [https://webtoolsweekly.com/archives/issue-521/](https://webtoolsweekly.com/archives/issue-521/)
32.  [https://webtoolsweekly.com/archives/issue-544/](https://webtoolsweekly.com/archives/issue-544/)
33.  [https://fully-faltoo.com/p/weekly-review-gollum/](https://fully-faltoo.com/p/weekly-review-gollum/)
34.  [https://dangarbri.tech/about](https://dangarbri.tech/about)
35.  [https://unsuckjs.com/](https://unsuckjs.com/)
36.  [https://enpitsulin.xlog.app/reactive-framework-less-than-100-lines](https://enpitsulin.xlog.app/reactive-framework-less-than-100-lines) (_in Simplified Chinese_)
37.  [https://juejin.cn/post/7274492344522948642](https://juejin.cn/post/7274492344522948642) (_in Simplified Chinese_)
38.  [https://juejin.cn/post/7269011652234592315](https://juejin.cn/post/7269011652234592315) (_in Simplified Chinese_)
39.  [https://juejin.cn/post/7237702874880032826](https://juejin.cn/post/7237702874880032826) (_in Simplified Chinese_)
40.  [https://juejin.cn/post/7239148708699865144](https://juejin.cn/post/7239148708699865144) (_in Simplified Chinese_)
41.  [https://juejin.cn/post/7256397479646117947](https://juejin.cn/post/7256397479646117947) (_in Simplified Chinese_)
42.  [https://juejin.cn/post/7329424129997127716](https://juejin.cn/post/7329424129997127716) (_in Simplified Chinese_)
43.  [https://juejin.cn/post/7345105846341910582](https://juejin.cn/post/7345105846341910582) (_in Simplified Chinese_)
44.  [https://juejin.cn/post/7314519123177750540](https://juejin.cn/post/7314519123177750540) (_in Simplified Chinese_)
45.  [https://www.qinshenxue.com/article/vanjs-the-worlds-smallest-responsive-ui-framework.html](https://www.qinshenxue.com/article/vanjs-the-worlds-smallest-responsive-ui-framework.html) (_in Simplified Chinese_)
46.  [https://www.toutiao.com/article/7235535718448202301](https://www.toutiao.com/article/7235535718448202301) (_in Simplified Chinese_)
47.  [https://zhuanlan.zhihu.com/p/633510308](https://zhuanlan.zhihu.com/p/633510308) (_in Simplified Chinese_)
48.  [https://zhuanlan.zhihu.com/p/633260358](https://zhuanlan.zhihu.com/p/633260358) (_in Simplified Chinese_)
49.  [https://zhuanlan.zhihu.com/p/630633744](https://zhuanlan.zhihu.com/p/630633744) (_in Simplified Chinese_)
50.  [https://www.51cto.com/article/779545.html](https://www.51cto.com/article/779545.html) (_in Simplified Chinese_)
51.  [https://www.51cto.com/article/782018.html](https://www.51cto.com/article/782018.html) (_in Simplified Chinese_)
52.  [https://www.51cto.com/article/785563.html](https://www.51cto.com/article/785563.html) (_in Simplified Chinese_)
53.  [https://www.51cto.com/article/787864.html](https://www.51cto.com/article/787864.html) (_in Simplified Chinese_)
54.  [https://blog.51cto.com/osguider/10615726](https://blog.51cto.com/osguider/10615726) (_in Simplified Chinese_)
55.  [https://www.cnblogs.com/xueweihan/p/17445043.html](https://www.cnblogs.com/xueweihan/p/17445043.html) (_in Simplified Chinese_)
56.  [https://segmentfault.com/a/1190000044087547](https://segmentfault.com/a/1190000044087547) (_in Simplified Chinese_)
57.  [https://segmentfault.com/a/1190000044560268](https://segmentfault.com/a/1190000044560268) (_in Simplified Chinese_)
58.  [https://www.ruanyifeng.com/blog/2024/07/weekly-issue-309.html](https://www.ruanyifeng.com/blog/2024/07/weekly-issue-309.html) (_in Simplified Chinese_)
59.  [https://github.com/sorrycc/weekly/blob/master/docs/weekly/issue-0101.md#本周新闻](https://github.com/sorrycc/weekly/blob/master/docs/weekly/issue-0101.md#本周新闻) (_in Simplified Chinese_)
60.  [https://hk.v2ex.com/t/1056715](https://hk.v2ex.com/t/1056715) (_in Simplified Chinese_)
61.  [https://hkdeveloper.io/2023/05/26/%E5%89%B5%E6%96%B0%E9%96%8B%E6%BA%90ui%E6%A1%86%E6%9E%B6%EF%BC%9Avanjs-%E6%96%BCgithub%E4%B8%8A%E9%87%8B%E5%87%BA/](https://hkdeveloper.io/2023/05/26/%E5%89%B5%E6%96%B0%E9%96%8B%E6%BA%90ui%E6%A1%86%E6%9E%B6%EF%BC%9Avanjs-%E6%96%BCgithub%E4%B8%8A%E9%87%8B%E5%87%BA/) (_in Traditional Chinese_)
62.  [https://news.hada.io/topic?id=10202](https://news.hada.io/topic?id=10202) (_in Korean_)
63.  [https://stupidk.com/dev-weekly-20230805/](https://stupidk.com/dev-weekly-20230805/) (_in Korean_)
64.  [https://gall.dcinside.com/mgallery/board/view/?id=github&no=56798](https://gall.dcinside.com/mgallery/board/view/?id=github&no=56798) (_in Korean_)
65.  [https://namu.wiki/w/%ED%8B%80:%EC%9B%B9%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC](https://namu.wiki/w/%ED%8B%80:%EC%9B%B9%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC) (_in Korean_)
66.  [https://zenn.dev/k\_log24/articles/f5e2d4321f0b98](https://zenn.dev/k_log24/articles/f5e2d4321f0b98) (_in Japanese_)
67.  [https://zenn.dev/ryo\_kawamata/articles/1ad6e51eed13ae](https://zenn.dev/ryo_kawamata/articles/1ad6e51eed13ae) (_in Japanese_)
68.  [https://zenn.dev/daifukuninja/articles/79ff6fa650a535](https://zenn.dev/daifukuninja/articles/79ff6fa650a535) (_in Japanese_)
69.  [https://qiita.com/tags/vanjs](https://qiita.com/tags/vanjs) (_in Japanese_)
70.  [https://qiita.com/mori\_goq/items/364d63c861c796b6ac4b](https://qiita.com/mori_goq/items/364d63c861c796b6ac4b) (_in Japanese_)
71.  [http://var.blog.jp/archives/87712487.html](http://var.blog.jp/archives/87712487.html) (_in Japanese_)
72.  [http://kachibito.net/useful-resource/vanjs](http://kachibito.net/useful-resource/vanjs) (_in Japanese_)
73.  [https://b.hatena.ne.jp/entry/s/github.com/vanjs-org/van](https://b.hatena.ne.jp/entry/s/github.com/vanjs-org/van) (_in Japanese_)
74.  [https://jser.info/2023/05/26/wrangler-v3.0.0-playwright-v1.34.0-typescript-5.2/](https://jser.info/2023/05/26/wrangler-v3.0.0-playwright-v1.34.0-typescript-5.2/) (_in Japanese_)
75.  [https://jser.info/2023/08/10/lighthouse-v11.0.0-astro-2.10view-transitions-sharpwebassembly/](https://jser.info/2023/08/10/lighthouse-v11.0.0-astro-2.10view-transitions-sharpwebassembly/) (_in Japanese_)
76.  [https://stackshare.io/vanjs](https://stackshare.io/vanjs)
77.  [https://www.libhunt.com/r/van](https://www.libhunt.com/r/van)
78.  [https://www.saashub.com/vanjs](https://www.saashub.com/vanjs)
79.  [https://kicksaas.cool/resource/vanjs](https://kicksaas.cool/resource/vanjs)
80.  [https://www.builtatlightspeed.com/theme/vanjs-org-mini-van](https://www.builtatlightspeed.com/theme/vanjs-org-mini-van)

**VanJS**: About
================

> _大道至简 (The profound truth is utmost simplicity)_

[Meet the Author - the Story behind VanJS](#story)
--------------------------------------------------

* * *

Hello all,

I'm [Tao Xin (辛韬)](https://www.linkedin.com/in/taoxin/), the founder of **VanJS**. I would like to talk about 2 central questions about **VanJS**: What **VanJS** really is, and why I think it's good to the world.

So, what is **VanJS**? Well, it's a reactive UI framework. It's **more than 100 times** smaller than React. It doesn't require installation, configuration, dependencies or transpiling to use. But I think, in a nutshell, the best way to describe it is: _**VanJS** is the **scripting language** for UI, just like `bash` is the scripting language for terminal._

Ever since the birth of GUI, there is no shortage of UI frameworks: MFC, Win Form, WPF, Qt, Flutter, SwiftUI, Jetpack Compose, React, React Native, to name a few. They enabled us to build highly sophisticated UI apps. But on the other hand, frameworks and tools themselves could be the entry barrier for UI programming: high-specialized IDEs, lengthy tutorials, mysterious problems that might arise here and there, being forced to program in a designated style, and most importantly, ONLY people with specialized skills can work on it. Even JavaScript, with "_Script_" in its name, is trying to become a compiled language: JSX, TSX, transpiling, and plugins/extensions to allow us to work with the transpiled code.

On the flip side, the default way for programmers to interact with computers remains the same for over 50 years - shells, CLI programs, and sometimes, ASCII arts. Why? Is terminal inherently better than GUI? Or does it just make programmers look cooler? I think the fundamental reason that lies behind, is the power of scripting, the power to start coding immediately in any environment, the power to build useful things with just a few lines of code, the power to easily assemble various code snippets together.

_Being the scripting language for UI_, is the fundamental principle that guides the design of **VanJS**. It's based on JavaScript so that it can work in as many environments as possibles, not only for websites, but also for webviews which most major OSes support. It has declarative composing API and reactive state binding as it enables an easier way to describe comprehensive UI logic within just a few lines of code. It has strictly 0 dependencies so that it can be used right after the code is typed. It's JSX-free thus REPL can be easily done in the browser console.

So, why is **VanJS** good to the world? I think the world needs a scripting way to build UI, and there are way more scenarios where UI can be more beneficial than people might have realized, for personal utilities, for teamwide tools, and for user-facing products as well. We are quite used to the categorization between front-end engineers and back-end engineers, and we are quite used to the notion that back-end engineers will never do UI. We think only a very small number of people need to know how to build UI.

But, is it really the case? I've been a back-end engineer for more than a decade. I had been leading a team which manages 100+ data processing pipelines and datasets produced by them. I felt, for many times, that we really needed a way to visualize the status of the pipelines and datasets. "_But, ..._", pushbacks would immediately arise after the idea, "_We're not a front end team. We shouldn't do it. We don't have the expertise._", I think here, "_We don't have the expertise_", doesn't really mean the team is not technical capable of programming the UI logic. What it actually means is, "_We don't really have the experience of dealing with mysterious, and oftentimes undocumented issues here and there that might only occur in our specific development environment, and we can't accurately estimate the amount of time needed to get them resolved._" We tried to hire an intern to do the work, but the work couldn't finish because of waves of issues in the internal build systems.

I am never a front-end engineer, and I haven't used any UI framework. But I built lots of UI apps, and I will continue doing it, in a scripting way. And I believe anyone can do that as well.

I'm hoping open sourcing **VanJS** can help us one step closer to that vision. Hope you can enjoy!

Thanks!

\-- Tao Xin

> _"Who do you truly serve?"  
> "The Realm. Someone must."  
>   
> \-- George R. R. Martin, Game of Thrones: S1E8_

[Copyright and Compliance Disclaimer](#copyright-and-compliance-disclaimer)
---------------------------------------------------------------------------

* * *

**VanJS** was built by Tao Xin during his personal time while being employed as a full-time employee at Google. The project was submitted to Invention Assignment Review Committee at Google where Google, upon reviewing the designated scopes, waived its copyright claims. Thus the copyright of **VanJS** belongs to its creator, all rights reserved. **VanJS** is open sourced under MIT license. **VanJS** aims to build a better world by reducing the entry barrier for UI programming, with no intention or plan on commercialization whatsoever.

The project was developed, and will be maintained with strict compliance to Google's Outside Work Guidelines as well as requirements imposed by Google's copyright waiver. **VanJS** was created, and will continue to be maintained, without any use of internal Alphabet resources, including but not limited to, corporate hardware equipments, software licenses, internal tools, internal corporate mailing lists, corporate accounts, proprietary or confidential information, trademarks or brand features of any Alphabet company. Alphabet does not sponsor, endorse or in any form affiliate with **VanJS** project. To comply with the conflict of interests provisions, Tao Xin does not advocate the adoption of **VanJS** within Alphabet.

[How Do We Ensure the Reliability of VanJS?](#reliability)
----------------------------------------------------------

* * *

As a new UI framework, we put heavy focus on the reliability of the framework. For every single release of **VanJS**, below is the list of tests that we will run through:

*   A browser-based test suite, with 500+ test cases, covering different versions of **VanJS** files (`.min.js`, `.debug.js`, `.nomodule.min.js`, etc.), including the coverage of advanced behavior such as [garbage collection](/advanced#gc), as well as error messages shown in the debug mode.
*   Examples used in [VanJS tutorial](/tutorial) are also covered in the browser-based test suite.
*   The browser-based test suite was implemented in TypeScript, thus TypeScript integration is covered.
*   [Sample applications](/demo) will keep working in every single **VanJS** release, including applications implemented in TypeScript (which covers TypeScript integration).

For every single release of **Mini-Van**, below is the list of tests that we will run through:

*   A browser-based test suite, with 60 test cases, covering different versions of **Mini-Van** files (`.min.js`, `.nomodule.min.js`, etc.).
*   The browser-based test suite was implemented in TypeScript, thus TypeScript integration is covered.
*   A Deno test suite for `van-plate` mode with 20 test cases, covering Deno integration.
*   The entire site of vanjs.org was generated with **Mini-Van** with TypeScript files defining all web pages. Source code can be found [here](https://github.com/vanjs-org/vanjs-org.github.io/tree/master/sitegen).

For every single release of **VanX**, below is the list of tests that we will run through:

*   A browser-based test suite, with 100+ test cases, covering different versions of **VanX** files, including the coverage of advanced behavior such as [garbage collection](/advanced#gc).
*   The browser-based test suite was implemented in TypeScript, thus TypeScript integration is covered.
*   Sample applications in [https://vanjs.org/x](https://vanjs.org/x) will keep working in every single **VanX** release.

[A Note on Coding Styles](#coding-style)
----------------------------------------

* * *

The sample code snippets throughout this website follow a minimalist approach when it comes to coding styles. When readability is not impacted, we are leaning towards the choice that leads to more concise code, with the belief that brevity and simplicity generally make the code easier to read and write. This means that we're consciously choosing certain coding styles throughout this website: such as omitting optional semicolons, naked if statements, usage of ternary operator when appropriate, etc.

On the other hand, we acknowledge that different people might hold a somewhat different opinion regarding certain coding style choices, and some are among hotly debated issues among programmers. We understand the arguments from the other side that certain coding styles, might occasionally lead to slightly more misleading error messages for incorrect implementation in limited situations. As an **unopinionated** framework, **VanJS** doesn't take side on coding styles. If some style in the sample code doesn't align with your personal preference or your team's common practice, feel free to make the corresponding styling changes after copy/past-ing the sample code.

[A Guide to Reading VanJS Codebase](#source-guide)
--------------------------------------------------

* * *

We believe that **VanJS** is a good illustration of how modern UI frameworks work under the hood. The simplicity in its design, and conciseness in its implementation make it the perfect learning material for the core fundamentals of reactive UI programming, as well as advanced techniques in modern JavaScript. Here we recommend this [7-minute video](https://www.youtube.com/watch?v=Oh2IEVqarHs) which breaks down and elucidates the underlying principles of **VanJS** codebase.

On the other hand, we do realize that some parts of **VanJS** codebase might be hard to read for some people. We believe that this is mostly because **VanJS** has chosen some programming techniques and language constructs that are not frequently used in the JavaScript community, despite their usefulness. Here we provide a brief explanation of those in the hope of easing the understanding of **VanJS** codebase, its official extensions, and its sample applications.

JavaScript language features:

*   `[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)`: A type of JavaScript objects that allow you to intercept and redefine common operations of another object, such as getting and setting properties. The `van.tags` object in **VanJS** leverages this technique to allow you declaring DOM trees like HTML but without the need of JSX. The operation of getting any properties of `van.tags` will be intercepted and redefined to a function that creates an HTML element with the property name as its tag name. e.g.: `van.tags.div()` will create a `<div>` element. In addition, the [reactive object](/x#reactive-object) in **VanX** leverages `Proxy` so that getting and setting its fields will be redefined to getting and setting values of the underlying states.
*   [prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes): The foundation of OOP in JavaScript. Any object in JavaScript can specify a prototype object so that property access falls back to the prototype if the property doesn't exist in the object itself. Prototype is a lightweight alternative to [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) in JavaScript. **VanJS** is using prototype instead of classes to keep its size small.

Less frequently used JavaScript syntaxes:

*   [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator): Ternary operator is way to define conditional computations. Sometimes it can be used as an alternative to `if...else` statement for more concise and declarative code. For instance, the following code:
    
        const getFruits(hasApple, hasOrange) = () => {
          const fruits = []
          if (hasApple) {
            fruits.push("apple")
          }
          if (hasOrange) {
            fruits.push("orange")
          }
          return fruits
        }
        
    
    can be simplified with ternary operators:
    
        const getFruits(hasApple, hasOrange) = () => [].concat(
          hasApple ? "apple" : [],
          hasOrange ? "orange": [],
        )
        
    
    Even more complex `if...else if...else` statement can be simplified with ternary operators as well. For instance, the following code in the `[Calculator App](/demo#calculator)`:
    
        const calc = (lhs, op, rhs) =>
          !op || lhs === null ? rhs :
          op === "+" ? lhs + rhs :
          op === "-" ? lhs - rhs :
          op === "x" ? lhs * rhs : lhs / rhs
        
    
    is the simplified version of:
    
        const calc = (lhs, op, rhs) => {
          if (!op || lhs === null) {
            return rhs
          } else if (op === "+") {
            return lhs + rhs
          } else if (op === "-") {
            return lhs - rhs
          } else if (op === "x") {
            return lhs * rhs
          } else {
            return lhs / rhs
          }
        }
        
    
*   [Comma operator (,)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator): Comma operator evaluates each of its operands sequentially and returns the last value. **VanJS** leverages comma operators in a few places to make the code concise. For instance, the logic of binding a state to a DOM property:
    
        bind(() => {
          setter(v.val)
          return dom
        })
        
    
    is simplified to `bind(() => (setter(v.val), dom))` in `[van.js](https://github.com/vanjs-org/van/blob/main/src/van.js)` (don't confuse this with calling a function with 2 arguments).
*   [Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing): Nullish coalescing expression `a ?? b` means:
    
        if (a !== null && a !== undefined) {
          return a
        } else {
          return b
        }
        
    
    **VanJS** leverages this operator in a few places to simplify code. One notable example in `[van.js](https://github.com/vanjs-org/van/blob/main/src/van.js)` is function `addAndScheduleOnFirst`:
    
        let addAndScheduleOnFirst = (set, s, f, waitMs) =>
          (set ?? (setTimeout(f, waitMs), new Set)).add(s)
        
    
    which is equivalent to:
    
        let addAndScheduleOnFirst = (set, s, f, waitMs) => {
          if (set === null || set === undefined) {
            setTimeout(f, waitMs)
            set = new Set
          }
          set.add(s)
          return set
        }
        
    
*   [Short-circuit evaluation for `&&` and `||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation): Sometimes, we're leveraging the short-circuit evaluation for `&&` and `||` to simplify code. For instance, in `[van-x.js](https://github.com/vanjs-org/van/blob/main/x/src/van-x.js)`, `refDelete(obj[statesSym], name) && onDelete(obj, name)` is equivalent to:
    
        if (refDelete(obj[statesSym], name)) {
          onDelete(obj, name)
        }
        
    

[How Did VanJS Get Its Name?](#name)
------------------------------------

* * *

**VanJS** is short for **Van**illa **J**ava**S**cript, which is a metaphor that **VanJS** provides an abbreviated way to write Vanilla JavaScript code. Meanwhile, the logo of **VanJS** is a symbolic vanilla ice cream, which means **VanJS** = **Vanilla** JavaScript + syntax **Sugar**.

Under the hood, **VanJS** stays truthful to Vanilla JavaScript as close as possible, as there is no transpiling, virtual DOM or any hidden logic. **VanJS** code can be translated to Vanilla JavaScript code in a very straightforward way. For instance, the following **VanJS** code:

    a({href: "https://vanjs.org"}, "🍦 VanJS")

is just an abbreviated/sugared form of following code in Vanilla Javascript:

    const anchorDom = document.createElement("a")
    anchorDom.href = "https://vanjs.org"
    anchorDom.appendChild(new Text("🍦 VanJS"))
    

whereas

    ul(
      li("🗺️World"),
      li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
    )
    

is an abbreviated/sugared form of:

    const listDom = document.createElement("ul")
    
    const itemDom1 = document.createElement("li")
    itemDom1.appendChild(new Text("🗺️World"))
    listDom.appendChild(itemDom1)
    
    const itemDom2 = document.createElement("li")
    const anchorDom = document.createElement("a")
    anchorDom.href = "https://vanjs.org"
    anchorDom.appendChild(new Text("🍦 VanJS"))
    itemDom2.appendChild(anchorDom)
    listDom.appendChild(itemDom2)