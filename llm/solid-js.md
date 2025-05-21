Quick start
===========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/quick-start.mdx)

* * *

[Solid playgrounds](/quick-start#solid-playgrounds)
---------------------------------------------------

Experience Solid in your browser by visiting our [interactive playground](https://playground.solidjs.com/).

Additionally, we offer a [JavaScript](https://stackblitz.com/github/solidjs/templates/tree/master/js) and [Typescript](https://stackblitz.com/github/solidjs/templates/tree/master/ts) Stackblitz starters, which provide a web-based development environment to get you started.

* * *

[Creating a Solid application](/quick-start#creating-a-solid-application)
-------------------------------------------------------------------------

info

*   Familiarity with the command line
*   Install [Node.js](https://nodejs.org/en) or [Deno](https://deno.com)

Solid offers convenient project templates that can help kickstart your development. To get an application running, follow the steps below based on the language you prefer to use.

### [For JavaScript projects](/quick-start#for-javascript-projects)

1.  Run the following command in your terminal to get the JavaScript starter template:

npmpnpmyarnbundeno

    npx degit solidjs/templates/js my-app

    pnpx degit solidjs/templates/js my-app

    yarn dlx degit solidjs/templates/js my-app

    bunx degit solidjs/templates/js my-app

    dpx degit solidjs/templates/js my-app

2.  Navigate to your application's directory:

    cd my-app

3.  Install the necessary dependencies:

npmpnpmyarnbundeno

    npm i

    pnpm i

    yarn i

    bun i

    deno i

4.  Run the application:

npmpnpmyarnbundeno

    npm run dev

    pnpm dev

    yarn dev

    bun run dev

    deno run dev

This will start the development server. Now, you can open your browser and navigate to `localhost:3000` to see your application running.

### [For TypeScript projects](/quick-start#for-typescript-projects)

1.  To use a TypeScript template, run the following command in your terminal:

npmpnpmyarnbundeno

    npx degit solidjs/templates/ts my-app

    pnpx degit solidjs/templates/ts my-app

    yarn dlx degit solidjs/templates/ts my-app

    bunx degit solidjs/templates/ts my-app

    dpx degit solidjs/templates/ts my-app

2.  Navigate to your application's directory:

    cd my-app

3.  Install the necessary dependencies:

npmpnpmyarnbundeno

    npm i

    pnpm i

    yarn i

    bun i

    deno i

4.  Run the application:

npmpnpmyarnbundeno

    npm run dev

    pnpm dev

    yarn dev

    bun run dev

    deno run dev

This will start the development server. Now, you can open your browser and navigate to `localhost:3000` to see your application running.

### [Explore more templates](/quick-start#explore-more-templates)

Solid offers a variety of Vite templates to streamline your development process. These resources are available on [GitHub](https://github.com/solidjs/templates).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/quick-start.mdx&page=https://docs.solidjs.com/quick-start)

Previous[← Overview](/)

Next[Intro to reactivity →](/concepts/intro-to-reactivity)

Concepts

Intro to reactivity
===================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/intro-to-reactivity.mdx)

**Note**: While this guide is useful for understanding reactive systems, it does use some Solid-specific terminology.

Reactivity powers the interactivity in Solid applications. This programming paradigm refers to a system's ability to respond to changes in data or state automatically. With Solid, reactivity is the basis of its design, ensuring applications stay up-to-date with their underlying data.

* * *

[Importance of reactivity](/concepts/intro-to-reactivity#importance-of-reactivity)
----------------------------------------------------------------------------------

1.  Reactivity keeps the user interface (UI) and state in sync, which reduces the need for manual updates.
    
2.  Real-time updates create a more responsive and interactive user experience.
    

    function Counter() {  const [count, setCount] = createSignal(0);  const increment = () => setCount((prev) => prev + 1);
      return (    <div>      <span>Count: {count()}</span>{" "}      {/* Only `count()` is updated when the button is clicked. */}      <button type="button" onClick={increment}>        Increment      </button>    </div>  );}

This `Counter` function sets up a button that, when clicked, calls the `increment` function to increase the `count` by one. This updates just the number displayed _without_ refreshing the entire component.

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=cry9JT4nroFQ4rRxzOpvCg)

* * *

[Reactive principles](/concepts/intro-to-reactivity#reactive-principles)
------------------------------------------------------------------------

### [Signals](/concepts/intro-to-reactivity#signals)

Signals serve as core elements in reactive systems, playing an important role in data management and system responsiveness. They are responsible for storing and managing data, as well as triggering updates across the system. This is done through the use of getters and setters.

    const [count, setCount] = createSignal(0);//     ^ getter  ^ setter

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=lseAEjGlKLslaVsTlfej_g)

*   **Getter**: A function responsible for accessing the current value of the signal. You call a getter to access the data stored in a signal within a component.
    
*   **Setter**: The function used to modify a signal's value. To trigger reactive updates across an application, you call a setter to update the value of a signal.
    

    console.log(count()); // `count()` is a getter that returns the current value of `count`, which is `0`.
    setCount(1); // the setter, `setCount`, updates the value of `count`.
    console.log(count()); // the updated value of `count` is now `1`.

### [Subscribers](/concepts/intro-to-reactivity#subscribers)

Subscribers are the other core element in reactive systems. They are responsible for tracking changes in signals and updating the system accordingly. They are automated responders that keep the system up-to-date with the latest data changes.

Subscribers work based on two main actions:

*   **Observation**: At their core, subscribers observe signals. This keeps the subscriber primed to pick up on any changes to the signal they are tracking.
*   **Response**: When a signal changes, the subscriber is notified. This triggers the subscriber to respond to the change in the signal. This can involve tasks like updating the UI or calling external functions.

    function Counter() {  const [count, setCount] = createSignal(0);  const increment = () => setCount((prev) => prev + 1);
      createEffect(() => {    console.log(count());  });  // the `createEffect` will trigger the console log every time `count` changes.}

* * *

[State management](/concepts/intro-to-reactivity#state-management)
------------------------------------------------------------------

State management is the process of managing the state of an application. This involves storing and updating data, as well as responding to the changes in it.

With Solid, state management is handled through signals and subscribers. Signals are used to store and update data, while subscribers are used to respond to changes in the data.

### [Tracking changes](/concepts/intro-to-reactivity#tracking-changes)

Tracking changes involves monitoring any updates to the data and responding accordingly. This is done through the use of subscribers.

When a signal is not accessed within a tracking scope, an update to the signal will not trigger an update. This happens because if a signal is not being tracked, it is not able to notify any subscribers of the change.

    const [count, setCount] = createSignal(0);
    console.log("Count:", count());
    setCount(1);
    // Output: Count: 0
    // `count` is not being tracked, so the console log will not update when `count` changes.

Since initialization is a **one-time event**, if a signal is accessed _outside of a tracking scope_, it will not be tracked. To track a signal, it must be accessed within the scope of a subscriber. Reactive primitives, such as [effects](/concepts/effects), can be used to create subscribers.

    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log("Count:", count());});
    setCount(1);
    // Output: Count: 0//         Count: 1

### [Updating the UI](/concepts/intro-to-reactivity#updating-the-ui)

The UI of a Solid application is built using [JSX](/concepts/understanding-jsx). JSX creates a tracking scope behind the scenes, which allows signals to be tracked within the return statement of a component.

    function Counter() {  const [count, setCount] = createSignal(0);  const increment = () => setCount((prev) => prev + 1);
      return (    <div>      <span>Count: {count()}</span>{" "}      {/* ✅ will update when `count()` changes. */}      <button type="button" onClick={increment}>        Increment      </button>    </div>  );}

Components, much like other functions, will only run _once_. This means that if a signal is accessed outside of the return statement, it will run on initialization, but any updates to the signal will not trigger an update.

    function Counter() {  const [count, setCount] = createSignal(0);  const increment = () => setCount((prev) => prev + 1);
      console.log("Count:", count()); // ❌ not tracked - only runs once during initialization.
      createEffect(() => {    console.log(count()); // ✅ will update whenever `count()` changes.  });
      return (    <div>      <span>Count: {count()}</span>{/* ✅ will update whenever `count()` changes. */}      <button type="button" onClick={increment}>        Increment      </button>    </div>  );}

To learn more about managing state in Solid, visit the [guide on state management](/guides/state-management).

* * *

[Synchronous vs. asynchronous](/concepts/intro-to-reactivity#synchronous-vs-asynchronous)
-----------------------------------------------------------------------------------------

Reactive systems are designed to respond to changes in data. These responses can be immediate or delayed, depending on the nature of the system. Often, the choice between these two depends on the requirements of the application and the nature of the tasks involved.

### [Synchronous reactivity](/concepts/intro-to-reactivity#synchronous-reactivity)

[Synchronous](https://developer.mozilla.org/en-US/docs/Glossary/Synchronous) reactivity is Solid's default reactivity mode, where a system responds to changes in a direct and linear fashion. When a signal changes, any corresponding subscribers are immediately updated in an ordered manner.

With synchronous reactivity, the system is able to respond to changes in a predictable manner. This is useful in scenarios where the order of updates is important. For example, if a subscriber depends on another signal, it is important that the subscriber is updated after the signal it depends on.

    const [count, setCount] = createSignal(0);const [double, setDouble] = createSignal(0);
    createEffect(() => {  setDouble(count() * 2);});

In this example, the `double` signal will always be updated after `count` due to synchronous reactivity. This ensures that `double` is always up-to-date with the latest value of `count`.

### [Asynchronous reactivity](/concepts/intro-to-reactivity#asynchronous-reactivity)

[Asynchronous](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous) reactivity is when a system responds to changes in a delayed or non-linear fashion. When a signal changes, the corresponding subscribers are not immediately updated. Instead, the system waits for a specific event or task to complete before updating the subscribers.

This is important in scenarios where subscribers depend on multiple signals. In these cases, updating one signal before another could result in data inconsistency. For example, if a subscriber depends on two signals, it is important that the subscriber is updated after both signals have been updated. Rather, the system waits for both signals to be updated before updating the subscriber.

**Note:** When asynchronous reactivity is present, it is important to ensure that the system is able to handle the delay in updates. [`batch`](/reference/reactive-utilities/batch) can be used to delay an update so the subscriber runs after each signal has been updated.

* * *

[Key concepts](/concepts/intro-to-reactivity#key-concepts)
----------------------------------------------------------

*   Signals are the core elements of a reactive system. They are responsible for storing and managing data.
*   Signals are both readable and writeable because of getters and setters.
*   Subscribers are automated responders that track changes in signals and update the system accordingly.
*   Signals and subscribers work together to ensure that the system is kept up-to-date with the latest data changes.
*   A reactive system is built on the principles of data-driven reactivity. This means that the system's reactivity is driven by the data it is built on.
*   Reactive systems can be synchronous or asynchronous.

If you want to dive deeper, visit the [guide on fine-grained reactivity](/advanced-concepts/fine-grained-reactivity).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/intro-to-reactivity.mdx&page=https://docs.solidjs.com/concepts/intro-to-reactivity)

Previous[← Quick start](/quick-start)

Next[Understanding JSX →](/concepts/understanding-jsx)

Concepts

Understanding JSX
=================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/understanding-jsx.mdx)

JSX is an extension for JavaScript. It allows you to write HTML-like code inside your JavaScript file which keeps your rendering logic and content in the same place. This provides a concise and readable way to create and represent components.

* * *

[How Solid uses JSX](/concepts/understanding-jsx#how-solid-uses-jsx)
--------------------------------------------------------------------

Solid was designed to align closely with HTML standards.

    const element = <h1>I'm JSX!!</h1>

It offers a distinct advantage, however: to copy/paste solutions from resources like Stack Overflow; and to allow direct usage of templates from design tools. Solid sets itself apart by using JSX immediately as it returns [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) elements. This lets you use dynamic expressions within your HTML by allowing variables and functions to be references with the use of curly braces (`{ }`):

    const Component = () => {  const animal = { breed: "cat", name: "Midnight" }
      return (    <p>      I have a {animal.breed} named {animal.name}!    </p>  )}

This means JavaScript content can be rendered on web pages based on an application's state or logic.

Additionally, Solid's [reactive](/concepts/intro-to-reactivity) system introduces [fine-grained reactivity](/advanced-concepts/fine-grained-reactivity) with JSX. This updates only the necessary parts of the DOM when changes occur in the underlying state.

* * *

[Using JSX in Solid](/concepts/understanding-jsx#using-jsx-in-solid)
--------------------------------------------------------------------

### [Return a single root element](/concepts/understanding-jsx#return-a-single-root-element)

Where HTML lets you have disconnected tags at the top level, JSX requires that a component to return a single root element.

advanced

When working with JSX, parts of your code are translated into structured HTML that is placed at the start of the file. Static elements are processed differently from dynamic ones, which might change based on data or user actions. For dynamic elements, special markers are added for better handling during rendering.

Having a single root creates a consistent and manageable hierarchy to optimize rendering and updates.

JSX maintains the familiar nested, tree-like structure found in HTML. As a result, parent-child relationships between elements become easier to follow.

### [Close all tags](/concepts/understanding-jsx#close-all-tags)

Self-closing tags are a must in JSX. Unlike in HTML, where elements like `<input>`, `<img>`, or `<br>` don't require explicit closure, JSX requires consistent self-closing tags. This helps to avoid potential rendering issues.

    <img src="./image-here.png" />

### [Properties vs. attributes](/concepts/understanding-jsx#properties-vs-attributes)

HTML attributes and JSX properties may seem similar, but they serve different purposes and behave differently. Both offer ways to specify configurations or pass information. However, HTML is used for standard web content and JSX creates Solid's component logic.

#### [HTML attributes](/concepts/understanding-jsx#html-attributes)

[HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) are values set directly on HTML elements. They provide additional information about an element to guide its initial behavior and state. These attributes are often translated into properties on DOM objects once the browser parses the HTML.

In JSX files, HTML attributes are used much like regular HTML, with a few key differences due to the blend of HTML and JavaScript:

*   Event listeners such as `onClick` can be in camelCase or lowercase. (**Note:** When using ESLint, you will get a warning if you use lowercase.)
*   In cases where you can dynamically specify a value, you can replace the `"` and `"` with curly braces (`{ }`):

    <button class="myClass" onClick={handleClick}>  Click me!</button>

info

If you wish to pass objects in JSX, such as with inline styling, you will have to use double curly braces (`{{ }}`).

    <button style={{color: 'red',font-size: '2rem',}}>Click me!</button>

### [JSX properties (props)](/concepts/understanding-jsx#jsx-properties-props)

JSX properties, commonly known as "props," help with the passing of data and configurations to components within an application. They connect the component with the data it requires, for seamless data flows and dynamic interactions.

#### [Core concepts](/concepts/understanding-jsx#core-concepts)

*   **Static props**: In Solid's JSX, static props are integrated directly into the HTML by cloning the template and using them as attributes.
    
*   **Dynamic props**: Dynamic props rely on state, allowing the content or properties to be dynamic. An example is changing the style of an element in response to interactions within an application. This can be expressed in the form of signals (`value={value()}`).
    
*   **Data transfer**: Props are also used to fill components with data that comes from resources, like [`createResource`](/reference/basic-reactivity/create-resource) calls. This results in components that react in real-time to data changes.
    

info

Expressions, whether fixed or dynamic, get applied _in the order defined within the JSX_. This works for a wide range of DOM elements, but will not work with elements that require attributes to be defined in a special order, such as input types with `type='range'`.

When order influences an element's behavior, users must define the expressions in the order that the element is expected.

For how to use props effectively in Solid, explore the [props page](/concepts/components/props).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/understanding-jsx.mdx&page=https://docs.solidjs.com/concepts/understanding-jsx)

Previous[← Intro to reactivity](/concepts/intro-to-reactivity)

Next[Basics →](/concepts/components/basics)

Components

Basics
======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/basics.mdx)

Components are the building blocks of Solid applications. These units are reusable and can be combined to create more complex applications.

Components are functions that return [JSX](/concepts/understanding-jsx) elements:

    function MyComponent() {  return <div>Hello World</div>;}

A component can be as simple as a single element or as complex as a full page. They can also be nested within each other to create more intricate applications:

    function App() {  return (    <div>      <MyComponent />    </div>  );}

info

Component names must start with a capital letter to distinguish them from regular HTML elements. Otherwise, they won't be recognized as components.

* * *

[Component trees](/concepts/components/basics#component-trees)
--------------------------------------------------------------

A web page is displayed by rendering a component tree, which is a hierarchical structure of components. At the top of the tree is the primary application component, which is the root of the tree. Child components are nested within the primary component, and those components can have their own child components. This nesting can continue as needed.

A simple application may have a component tree that looks like this:

    App // primary application component└── MyComponent // child component

When an application grows, the component tree can become more complex. For example, a more complex application may have a component tree that looks like this:

    App├── Header├── Sidebar├── Content│   ├── Post│   │   ├── PostHeader│   │   ├── PostContent│   │   └── PostFooter│   ├── Post│   │   ├── PostHeader│   │   ├── PostContent│   │   └── PostFooter│   └── Post│       ├── ...└── Footer

In nesting components, you can create a hierarchy of components that can be reused throughout the application. This allows for a more modular approach to building applications, as components can be reused in different contexts.

* * *

[Component lifecycles](/concepts/components/basics#component-lifecycles)
------------------------------------------------------------------------

Components have a lifecycle that defines how they are created, updated, and destroyed. A Solid component's lifecycle is different from other frameworks, as it is tied to the [concept of reactivity](/concepts/intro-to-reactivity).

Where frameworks may re-run components on every state change, a Solid component's lifecycle is tied to its initial run. What this means is that a Solid component is only run once, when it is first rendered into the DOM. After that, the component is not re-run, even if the application's state changes.

When the Solid component renders, it sets up a reactive system that monitors for state changes. When a state change occurs, the component will update the relevant areas without re-running the entire component. By bypassing the full component lifecycle on every state change, Solid has a more predictable behavior compared to frameworks that re-run functions on every update.

Since the component's logic is not continuously visited, getting this setup right is important when working with Solid.

### [Initialization & configuration](/concepts/components/basics#initialization--configuration)

When a component is first rendered into the DOM, the component function is executed. This is where you will set up the component's state and side-effects. This includes setting up [signals](/concepts/signals), [stores](/concepts/stores), [effects](/concepts/effects), and other reactive elements. Since the logic in the component function is not continuously visited, it is important to set up the component correctly from the outset.

Each component instance is independent of other instances, meaning that each component has its own state and side-effects. Through establishing proper dependencies, you can ensure that the component is set up correctly. This allows for components to be reused in different contexts without affecting each other.

    function MyComponent() {  const [count, setCount] = createSignal(0);
      console.log(count());
      return (    <div>      <p>Count: {count()}</p>      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>    </div>  );}

When this component is rendered into the DOM, the function body is executed. This includes creating the `count` signal and executing the `console.log(count())` statement, which will log the current value of `count` to the console. In addition, the component's JSX is returned, which will be rendered into the DOM.

After the component is rendered, the `console.log` statement will not be executed again, even if the component's state changes. However, because the component's JSX is reactive, each press of the button will update the DOM with the new value of `count`.

In essence, Solid splits the concerns:

1.  The initial setup logic, which is executed once when the component is rendered.
2.  The reactive logic, which is executed when the component's state changes.

### [Conditional rendering](/concepts/components/basics#conditional-rendering)

To display different content based on state or other criteria, you can use conditional rendering. Given that the component function is only executed once, conditional statements must be placed within the return statement. This design ensures that conditional paths are clear and immediately understood.

    function MyComponent() {  const [count, setCount] = createSignal(0);  return (    <div>      {count() > 5 ? (        <div>Count limit reached</div>      ) : (        <>          <p>Count: {count()}</p>          <button onClick={() => setCount((prev) => prev + 1)}>            Increment          </button>        </>      )}    </div>  );}

This example uses a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) to conditionally render different content based on the value of `count`. When `count` is greater than 5, the component will display `"Count limit reached"`. Otherwise, it will display the current count with an increment button.

info

To simplify conditional rendering, Solid provides built-in [control-flow](/concepts/control-flow/conditional-rendering) components like [`Show`](/concepts/control-flow/conditional-rendering#show), which create a more readable conditional rendering experience.

    function MyComponent() {  const [count, setCount] = createSignal(0)
      return (    <div>      <Show        when={count() > 5}        fallback={          <>            <p>Count: {count()}</p>            <button onClick={() => setCount((prev) => prev+1)}>Increment</button>          </>        }      >        <div>Count limit reached</div>      </Show>    </div>  )}

* * *

[Importing and exporting](/concepts/components/basics#importing-and-exporting)
------------------------------------------------------------------------------

For components to be reusable, they need to be exported from one module and imported into another. This allows for components to be shared and used where needed.

### [Exporting components](/concepts/components/basics#exporting-components)

Once defined, a component can be [exported](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) to make it available for use in other parts of your application. There are two ways to export a component: [named exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#named_exports) and [default exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#default_exports).

**Named export:**

Named exports allow for multiple components to be exported from a single file. To export a component, you must use the `export` keyword before the function definition or specify the name of the component to export in curly braces (`{}`).

    export function MyComponent() {  return <div>Hello World</div>}
    // or
    function MyComponent() {  return <div>Hello World</div>}
    export { MyComponent }

**Default export:**

Default exports specify a single component to export from a file. This is done by using the `default` keyword.

    // MyComponent.tsexport default function MyComponent() {  return <div>Hello World</div>}

### [Importing components](/concepts/components/basics#importing-components)

To use a component in another file or component, it must be [imported](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). To import a component, you must specify the path to the file containing the component and the name of the component to import.

**Named import:**

When importing a named export, you must specify the name of the component to import in curly braces (`{}`).

    // App.tsimport { MyComponent } from "./MyComponent";
    function App() {  return (    <div>      <MyComponent />    </div>  );}

This is the preferred way to import components, as it allows for better code readability and maintainability. Additionally, it allows for multiple components to be imported from the same file.

    // App.tsimport { MyComponent, MyOtherComponent } from "./MyComponent";
    function App() {  return (    <div>      <MyComponent />      <MyOtherComponent />    </div>  );}

**Default import:**

To import a default export, you must specify the name of the component to import.

    // App.tsimport MyComponent from "./MyComponent";
    function App() {  return (    <div>      <MyComponent />    </div>  );}

### [Importing Solid and its utilities](/concepts/components/basics#importing-solid-and-its-utilities)

To use Solid, you must import the Solid library. The reactive primitives and utilities are exported from Solid's main module.

    import { createSignal } from "solid-js";

However, some of Solid's utilities are exported from their own modules.

    import { createStore } from "solid-js/store";

To see a full list of Solid's utilities, the Reference Tab in the sidebar provides the API Documentation.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/components/basics.mdx&page=https://docs.solidjs.com/concepts/components/basics)

Previous[← Understanding JSX](/concepts/understanding-jsx)

Next[Class and style →](/concepts/components/class-style)

Components

Class and style
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/class-style.mdx)

Similar to HTML, Solid uses `class` and `style` attributes to style elements via [CSS (Cascading Style Sheets)](https://developer.mozilla.org/en-US/docs/Glossary/CSS).

*   **Class attribute**: Enables styling one or more elements through CSS rules.
*   **Style attribute**: Inline styles that style single elements.

* * *

[Inline styling](/concepts/components/class-style#inline-styling)
-----------------------------------------------------------------

The `style` attribute allows you to style a single element and define CSS variables dynamically during runtime. To use it, you can pass either a string or an object.

    // String<div style="color: red;">This is a red div</div>
    // Object<div style={{ color: "red" }}>This is a red div</div>

When using an object, the keys represent the CSS property names, and the values represent the CSS property values. The keys must be in dash-case, and the values must be strings.

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=PgkKTGxuuOtDiQ_1KDA5dw)

While inline styles are useful for rapid prototyping, they are not recommended for production use. This is because they are not reusable, and they can be difficult to maintain over time.

* * *

[Classes](/concepts/components/class-style#classes)
---------------------------------------------------

The `class` attribute allows you to style one or more elements through CSS rules. This provides a more structured approach to styling, as it allows you to reuse styles across multiple elements.

Classes are defined in CSS files, which are then imported into the component files that use them. You can import these files using the `import` statement at the top of your component file. Once imported into a component, the classes are scoped to that component and any of its children.

    import "./Card.css";
    function Card() {  // ...}

### [Dynamic styling](/concepts/components/class-style#dynamic-styling)

Dynamic styling provides a way to change the appearance of a component based on state or other factors like user inputs. This is useful for creating components that can adapt to different scenarios without having to create multiple versions of the same component:

    const [theme, setTheme] = createSignal("light");
    <div class={theme() === "light" ? "light-theme" : "dark-theme"}>  This div's theme is determined dynamically!</div>;

[Props](/concepts/components/props) are another way to change styles. By passing props to components, you can adapt styles based on the component's usage or the data it receives:

    function ThemedButton(props) {  return (    <button class={props.theme}>      {props.theme === "light" ? "Light Button" : "Dark Button"}    </button>  );}

### [`classList`](/concepts/components/class-style#classlist)

When you want to apply multiple classes to an element, you can use the [`classList` attribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList). To use it, you can pass either a string or an object where the keys represent the class names and the values represent a boolean expression. When the value is `true`, the class is applied; when `false`, it is removed.

    const [current, setCurrent] = createSignal("foo");
    <button  classList={{ "selected" : current() === "foo" }}  onClick={() => setCurrent("foo")}>  foo</button>;

`classList` is often more efficient than `class` when handling multiple conditional classes. This is because `classList` selectively toggles only the classes that require alteration, while `class` will be re-evaluated each time. For a single conditional class, using `class` might be simpler but as the number of conditional classes increases, `classList` offers a more readable and declarative approach.

info

While it is possible, mixing `class` and `classList` can introduce unexpected errors. If both are reactive when the `class` value changes, Solid will set the entire `class` attribute. This will remove any classes set by `classList`.

To avoid this, the `class` attribute should be set to a static string or nothing. Alternatively, `class` can be set to a static computed value (e.g. `class={baseClass()}`), but then it must be put before any `classList` attributes.

Additionally, since `classList` is a pseudo-attribute, it doesn't work in prop spreads like `<div {...props} />` or in `<Dynamic>`.

For a guide on how to style your components, see [Styling Your Components](/guides/styling-your-components), where we cover the different ways to style your components using libraries such as [Tailwind CSS](https://tailwindcss.com/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/components/class-style.mdx&page=https://docs.solidjs.com/concepts/components/class-style)

Previous[← Basics](/concepts/components/basics)

Next[Event handlers →](/concepts/components/event-handlers)

Components

Event handlers
==============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/event-handlers.mdx)

Event handlers are functions that are called in response to specific events occurring in the browser, such as when a user clicks or taps on an element.

Solid provides two ways to add event listeners to the browser:

*   [`on:__`](/reference/jsx-attributes/on): adds an event listener to the `element`. This is also known as a _native event_.
*   [`on__`](/reference/jsx-attributes/on_): adds an event listener to the `document` and dispatches it to the `element`. This can be referred to as a _delegated event_.

Delegated events flow through the [_component tree_](/concepts/components/basics#component-trees), and save some resources by performing better on commonly used events. Native events, however, flow through the _DOM tree_, and provide more control over the behavior of the event.

* * *

[Using events](/concepts/components/event-handlers#using-events)
----------------------------------------------------------------

To add an event handler, prefix the event name with either `on` or `on:`, and assign it to the function you wish to call when the event is dispatched.

    // delegated event<button onClick={handleClick}>Click me</button>
    // native event<div on:scroll={handleScroll}>... very long text ...</div>

Delegated events are **not case sensitive**, therefore using delegated event handlers in Solid can be written using camelCase or all lowercase. Note that while delegated events can be written both ways, native events _are_ case sensitive.

    <button onclick={handleClick}>Click me</button>

For any other events, such as custom events or events you wish _not_ to be delegated, the `on:` attribute will add an event listener as-is. This is what makes the event listener case sensitive.

    <button on:Custom-Event={handleClick}>Click me</button>

For typing standard or custom events using `on:`, the TypeScript page has a section about [event handlers](/configuration/typescript#event-handling).

* * *

[Binding events](/concepts/components/event-handlers#binding-events)
--------------------------------------------------------------------

To optimize event handlers, you can pass an array as the event handler, replacing the function. When doing this, the second item passed into the array is supplied as the handler's first argument:

    const handler = (data, event) => {  console.log("Data:", data, "Event:", event);};
    <button onClick={[handler, "Hello!"]}>Click Me</button>;

In this example, the `Hello!` string is passed as the `data` parameter in the `handler` function when the button is clicked.

By binding events in this way, Solid avoids the overhead of using JavaScript's [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) method and adding an additional closure.

### [Dynamic handlers](/concepts/components/event-handlers#dynamic-handlers)

An event handler does not form part of the reactive system. If you were to pass the handler as a signal, it will not respond to the changes of that signal. In other words, events do not dynamically update, and the bindings are not reactive. This is because attaching and detaching listeners is a resource-intensive task.

Since event handlers are called like a standard function, you can design them to call a reactive source, if needed.

In the following example, `handleClick` represents a prop that has the flexibility to adopt any function. As a result, there is no requirement for these functions to be reactive.

    <div onClick={() => props.handleClick?.()} />

* * *

[Event delegation](/concepts/components/event-handlers#event-delegation)
------------------------------------------------------------------------

Instead of attaching event listeners to every individual element, Solid uses _synthetic event delegation_, through the [`on__`](/reference/jsx-attributes/on_) form . In this method, event listeners are attached to the `document` element and dispatch events to the relevant elements as they bubble up.

By keeping the number of event listeners to a minimum, events can be captured more effectively. This is especially useful when working with a large number of elements, such as in a table or list.

Supported events such as `click`, `input` and `keydown` are just a few examples that are optimized in this way. To view the full list see the [references below](/concepts/components/event-handlers#list-of-delegated-events).

If you need to attach an event listener to an element that is not supported by Solid's event delegation, such as a custom event in a [custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements), you can use the [`on:__`](/reference/jsx-attributes/on) form.

    <div on:customEvent={handleCustomEvent} />

### [Event delegation considerations](/concepts/components/event-handlers#event-delegation-considerations)

While delegated events provide some performance enhancements, there are tradeoffs.

Event delegation is designed for event propagation through the JSX Tree, rather than the DOM Tree. This can differ from the previous expectations of how events work and flow.

Some things to keep in mind include:

*   Delegated event listeners are added _once_ per event type and handle all future events of that type. This means that delegated event listeners remain active even if the element that added them and its handler is removed. For example, if a `div` listens for `mousemove` and is later removed, the `mousemove` events will still be dispatched to the `document` in case a different element is also listening for mouse moves.

    <div onMouseMove={handleCustomEvent} />

tip

Rather than using delegated events for events that happen infrequently, **native events** are a better solution. Since these events happen in specific circumstances, they do not benefit from the performance improvements you get with event delegation.

    <div on:mousemove={handleCustomEvent} />

*   `event.stopPropagation()` does not work as expected since events are attached to the `document` rather than the `element`.
    
    With cases like this, a native event is recommended. As an example, using a native event would stop the following event from reaching the `div native` handler, which is _not_ the case for delegated events. You can [view this example in the Solid Playground](https://playground.solidjs.com/anonymous/c5346f84-01e4-4080-8ace-4443ffd0bb10).
    

    onMount(() => {  ref.addEventListener("click", () => {    console.log("div native");  });});<div ref={ref}>  <button    onClick={(event) => {      event.stopPropagation();      console.log("button");    }}  >    button  </button></div>;

    // Button clickeddiv nativebutton

You can solve this by switching the `button` event to using a native event:

    // ...<button  on:click={(event) => {    event.stopPropagation();    console.log("button");  }}>  button</button>// ...

    // Button clickedbutton

[See how this solution differs in the Solid Playground](https://playground.solidjs.com/anonymous/9e2deddc-2e83-4ac2-8ee0-49c7c3a45d11).

*   [Portals](/concepts/control-flow/portal) propagate events following the _component tree_ and not the _DOM tree_, making them easier to use. This means when a `Portal` gets attached to the `body`, any events will propagate up to the `container`.

    <div class="container" onInput={() => console.log("portal key press")}>  <Portal mount={document.body}>    <input onInput={() => console.log("input key press")} />  </Portal></div>

info

`onChange` and `onInput` events work according to their native behavior:

*   `onInput` will fire immediately after the value has changed
*   In `<input>` fields, `onChange` will only fire after the field loses focus.

### [List of delegated events](/concepts/components/event-handlers#list-of-delegated-events)

You can also view this list in our [source code](https://github.com/ryansolid/dom-expressions/blob/main/packages/dom-expressions/src/constants.js) (see `DelegatedEvents`).

*   [`beforeinput`](https://developer.mozilla.org/en-US/docs/Web/API/Element/beforeinput_event)
*   [`click`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click)
*   [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
*   [`contextmenu`](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event)
*   [`focusin`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
*   [`focusout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event)
*   [`input`](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
*   [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
*   [`keyup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)
*   [`mousedown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)
*   [`mousemove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)
*   [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event)
*   [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)
*   [`mouseup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event)
*   [`pointerdown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event)
*   [`pointermove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)
*   [`pointerout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerout_event)
*   [`pointerover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerover_event)
*   [`pointerup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerup_event)
*   [`touchend`](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event)
*   [`touchmove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchmove_event)
*   [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/components/event-handlers.mdx&page=https://docs.solidjs.com/concepts/components/event-handlers)

Previous[← Class and style](/concepts/components/class-style)

Next[Props →](/concepts/components/props)

Components

Props
=====

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/components/props.mdx)

Props are a way to pass state from a parent component to a child component. These read-only properties are passed to components as attributes within JSX and are accessible within the component via the `props` object:

    function App() {  // Passing a prop named "name" to the MyComponent component  return (    <div>      <MyComponent name="Ryan Carniato" />    </div>  );}

To access the props in the child component, you use the `props` object:

    function MyComponent(props) {  return <div>Hello {props.name}</div>;}

* * *

[`mergeProps`](/concepts/components/props#mergeprops)
-----------------------------------------------------

[`mergeProps`](/reference/reactive-utilities/merge-props) is a Solid utility function designed to merge multiple potentially reactive objects together. It behaves similar to [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) but will retain the reactivity of the properties being merged. This helps ensure that when individual properties within the merged object change, their reactivity is not lost.

    import { mergeProps } from "solid-js";
    function MyComponent(props) {  // Using mergeProps to set default values for props  const finalProps = mergeProps({ defaultName: "Ryan Carniato" }, props);
      return <div>Hello {finalProps.defaultName}</div>;}
    // Usage: <MyComponent defaultName="Ryan Carniato" />

When merging props, if there is no existing value for a property, the value from the first object will be used. However, if a value already exists, it will be used instead, all while retaining the reactivity of the property.

* * *

[Destructuring props](/concepts/components/props#destructuring-props)
---------------------------------------------------------------------

Props are read-only so that child components do not directly modify the data passed by the parent. This also encourages one-way data flow, a pattern often seen to promote more predictable data management.

With Solid, destructuring props is not recommended as it can break reactivity. Instead, you should access props directly from the `props` object, or wrap them in a function to ensure they are always up-to-date:

    function MyComponent(props) {  const { name } = props; // ❌: breaks reactivity and will not update when the prop value changes  const name = props.name; // ❌: another example of breaking reactivity  const name = () => props.name; // ✓: by wrapping `props.name` into a function, `name()` always retrieves its current value}

### [`splitProps`](/concepts/components/props#splitprops)

[`splitProps`](/reference/reactive-utilities/split-props) is a utility function designed to help split a single props object into multiple sets of props, retaining the reactivity of the individual properties. It provides a way to destructure props without breaking reactivity.

`splitProps` gives you the ability to define one or more arrays of keys that you wish to extract into separate props objects, all while retaining the reactivity of the individual properties. It will return an array of props objects related to each set of keys, plus an additional props object containing any remaining keys.

When passing props to child components, you can use `splitProps` to split the props into multiple groups, and then pass each group to the appropriate child component:

    import { splitProps } from "solid-js";
    function ParentComponent(props) {  // Splitting props into two groups: 'name' and 'age'  const [greetingProps, personalInfoProps, restProps] = splitProps(    props,    ["name"],    ["age"]  );
      // Using greetingProps and personalInfoProps in the current component  return (    <div>      <Greeting {...greetingProps} />      <PersonalInfo {...personalInfoProps} />      {/* restProps can be passed down or used as needed */}    </div>  );}

* * *

[Passing props to children](/concepts/components/props#passing-props-to-children)
---------------------------------------------------------------------------------

In most instances, simply using `props` within JSX will work without any issues. However, there are some cases where accessing `props.children` multiple times can introduce problems and unexpected behaviours, such as repeated creation of child components or elements. For instances like these, Solid provides a [`children`](/reference/component-apis/children) helper that ensures you always get the right child components without anything unwanted happening.

    import { children } from "solid-js";
    function ColoredList(props) {  const safeChildren = children(() => props.children);
      return <>{safeChildren()}</>;}

* * *

[Prop drilling](/concepts/components/props#prop-drilling)
---------------------------------------------------------

Prop drilling is a term used to describe the process of passing props through multiple layers of components. While it can be a useful pattern, it can also lead to problems. When components are nested deeply, passing props through each component can become difficult to manage. Additionally, this can lead to components receiving props that they do not need, unnecessary re-renders, and trouble refactoring.

Since components in Solid do not own state, props are not needed to pass state between components, but may be used. Because of this, there may be times when you need to pass props through multiple layers of components. A common solution to this problem is to use [Context](/concepts/context) to pass state to deeply nested components without having to pass props through each component in between.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/components/props.mdx&page=https://docs.solidjs.com/concepts/components/props)

Previous[← Event handlers](/concepts/components/event-handlers)

Next[Signals →](/concepts/signals)

Concepts

Signals
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/signals.mdx)

Signals are the primary means of [managing state](/concepts/intro-to-reactivity#state-management) in your Solid application. They provide a way to store and update values, and are the foundation of [reactivity](/concepts/intro-to-reactivity) in Solid.

Signals can be used to represent any kind of state in your application, such as the current user, the current page, or the current theme. This can be any value, including primitive values such as strings and numbers, or complex values such as objects and arrays.

* * *

[Creating a signal](/concepts/signals#creating-a-signal)
--------------------------------------------------------

You can create a signal by calling the [`createSignal`](/reference/basic-reactivity/create-signal) function, which is imported from `solid-js`. This function takes an initial value as an argument, and returns a pair of functions: a **getter** function, and a **setter** function.

    import { createSignal } from "solid-js";
    const [count, setCount] = createSignal(0);//       ^ getter  ^ setter

info

The syntax using `[` and `]` is called [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

This lets you extract values from the array. In the context of `createSignal`, the first value is the getter function, and the second value is the setter function.

* * *

[Accessing values](/concepts/signals#accessing-values)
------------------------------------------------------

The getter function returned by `createSignal` is used to access the value of the signal. You call this function with no arguments to get the current value of the signal:

    console.log(count()); // output: 0

* * *

[Updating values](/concepts/signals#updating-values)
----------------------------------------------------

The setter function returned by `createSignal` is used to update the value of the signal. This function takes an argument that represents the new value of the signal:

    setCount(count() + 1);
    console.log(count()); // output: 1

The setter function can also take a function that passes the previous value.

    setCount((prevCount) => prevCount + 1);
    console.log(count()); // output: 1

* * *

[Reactivity](/concepts/signals#reactivity)
------------------------------------------

Signals are reactive, which means that they automatically update when their value changes. When a signal is called within a [tracking scope](/concepts/intro-to-reactivity#tracking-changes), the signal adds the dependency to a list of subscribers. Once a signal's value changes, it notifies all of its dependencies of the change so they can re-evaluate their values and update accordingly.

    function Counter() {  const [count, setCount] = createSignal(0);  const increment = () => setCount((prev) => prev + 1);
      return (    <div>      <span>Count: {count()}</span> {/* Updates when `count` changes */}      <button type="button" onClick={increment}>        Increment      </button>    </div>  );}

info

A tracking scope can be created by [`createEffect`](/reference/basic-reactivity/create-effect) or [`createMemo`](/reference/basic-reactivity/create-memo), which are other Solid primitives.

Both functions subscribe to the signals accessed within them, establishing a dependency relationship. Once this relationship is established, the function is notified whenever the signal changes.

To learn more about how to use Signals in your application, visit our [state management guide](/guides/state-management).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/signals.mdx&page=https://docs.solidjs.com/concepts/signals)

Previous[← Props](/concepts/components/props)

Next[Conditional rendering →](/concepts/control-flow/conditional-rendering)

Control flow

Conditional rendering
=====================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/conditional-rendering.mdx)

Conditional rendering is the process of displaying different UI elements based on certain conditions. This is a common pattern in UI development, and is often used to show or hide elements based on user input, data, or other conditions.

Solid offers dedicated components to handle conditional rendering in a more straightforward and readable way.

* * *

[Show](/concepts/control-flow/conditional-rendering#show)
---------------------------------------------------------

`<Show>` renders its children when a condition is evaluated to be true. Similar to the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) in JavaScript, it uses control logic flow within JSX to determine what to render.

`<Show>` has a `when` property that is used to determine whether or not to render its children. When there is a change in the state or props it depends on, this property is re-evaluated. This property can be a boolean value, or a function that returns a boolean value.

    import { Show } from "solid-js"
    <Show when={data.loading}>  <div>Loading...</div></Show>

`<Show>` has the `fallback` property that can be used to specify the content to be rendered when the condition evaluates to false. This property can return a JSX element.

    import { Show } from "solid-js"
    <Show when={!data.loading} fallback={<div>Loading...</div>}>  <h1>Hi, I am {data().name}.</h1></Show>

If there are multiple conditions that need to be handled, `<Show>` can be nested to handle each condition.

    import { Show } from "solid-js"
    <Show when={data.loading}>  <div>Loading...</div>  <Show when={data.error}>    <div>Error: {data.error}</div>  </Show></Show>

* * *

[Switch and Match](/concepts/control-flow/conditional-rendering#switch-and-match)
---------------------------------------------------------------------------------

When there are multiple conditions that need to be handled, it can be difficult to manage the logic flow with nested `<Show>` components. Solid has the `<Switch>` and `<Match>` components for this purpose.

Similar to JavaScript's [switch/case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) structure, `<Switch>` wraps multiple `<Match>` components so that each condition is evaluated _in sequence_. The first `<Match>` component that evaluates to true will have its children rendered, and the rest will be ignored.

    import { Switch, Match } from "solid-js"
    <Switch>  <Match when={condition1}>    <p>Outcome 1</p>  </Match>  <Match when={condition2}>    <p>Outcome 2</p>  </Match></Switch>

Similar to `<Show>`, each `<Match>` component has a `when` property that is used to determine whether or not to render its children. An optional `fallback` property can also be passed to `<Switch>` to specify the content be rendered when none of the `<Match>` components evaluate to true.

    import { Switch, Match } from "solid-js"
    <Switch fallback={<p>Fallback content</p>}>  <Match when={condition1}>    <p>Outcome 1</p>  </Match>  <Match when={condition2}>    <p>Outcome 2</p>  </Match></Switch>

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/control-flow/conditional-rendering.mdx&page=https://docs.solidjs.com/concepts/control-flow/conditional-rendering)

Previous[← Signals](/concepts/signals)

Next[Dynamic →](/concepts/control-flow/dynamic)

Control flow

Dynamic
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/dynamic.mdx)

`<Dynamic>` is a Solid component that allows you to render components dynamically based on data. By passing either a string representing a [native HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) or a component function to the `component` prop, you can render the chosen component with the remaining props you provide.

    import { createSignal, For } from "solid-js"import { Dynamic } from "solid-js/web"
    const RedDiv = () => <div style="color: red">Red</div>const GreenDiv = () => <div style="color: green">Green</div>const BlueDiv = () => <div style="color: blue">Blue</div>
    const options = {  red: RedDiv,  green: GreenDiv,  blue: BlueDiv,}
    function App() {  const [selected, setSelected] = createSignal("red")
      return (    <>      <select        value={selected()}        onInput={(e) => setSelected(e.currentTarget.value)}      >        <For each={Object.keys(options)}>          {(color) => <option value={color}>{color}</option>}        </For>      </select>      <Dynamic component={options[selected()]} />    </>  )}

This example renders a `<select>` element that allows you to choose between three colors. Once a color is selected, the `<Dynamic>` component will render the chosen color's corresponding component or element.

`<Dynamic>` creates more concise code than alternative conditional rendering options. For example, the following code renders the same result as the previous example:

    import { createSignal, Switch, Match, For } from "solid-js"
    const RedDiv = () => <div style="color: red">Red</div>const GreenDiv = () => <div style="color: green">Green</div>const BlueDiv = () => <div style="color: blue">Blue</div>
    const options = {  red: RedDiv,  green: GreenDiv,  blue: BlueDiv,}
    function App() {  const [selected, setSelected] = createSignal("red")
      return (    <>      <select        value={selected()}        onInput={(e) => setSelected(e.currentTarget.value)}      >        <For each={Object.keys(options)}>          {(color) => <option value={color}>{color}</option>}        </For>      </select>      <Switch fallback={<BlueDiv />}>        <Match when={selected() === "red"}>          <RedDiv />        </Match>        <Match when={selected() === "green"}>          <GreenDiv />        </Match>      </Switch>    </>  )}

Instead of a more verbose [`<Switch>` and `<Match>`](/concepts/control-flow/conditional-rendering) statement, `<Dynamic>` offers a more concise way to render components dynamically.

* * *

[Props](/concepts/control-flow/dynamic#props)
---------------------------------------------

When working with these components, you can pass [props](/concepts/components/props) to the component you are rendering by passing them to the `<Dynamic>` component. This makes them available to the component you are rendering, similar to how you would pass props to components in JSX.

    import { Dynamic } from "solid-js/web"
    function App() {  return (    <Dynamic component={someComponent} someProp="someValue" />  )}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/control-flow/dynamic.mdx&page=https://docs.solidjs.com/concepts/control-flow/dynamic)

Previous[← Conditional rendering](/concepts/control-flow/conditional-rendering)

Next[List rendering →](/concepts/control-flow/list-rendering)

Control flow

List rendering
==============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/list-rendering.mdx)

List rendering allows you to generate multiple elements from a collection of data, such as an array or object, where each element corresponds to an item in the collection.

When dealing with dynamic data, Solid offers two ways to render lists: the `<For>` and `<Index>` components. Both of these components help you loop over data collections to generate elements, however, they both cater to different scenarios.

* * *

[`<For>`](/concepts/control-flow/list-rendering#for)
----------------------------------------------------

`<For>` is a looping component that allows you to render elements based on the contents of an array or object. This component is designed to be used with **complex data structures**, such as arrays of objects, where the order and length of the list may change frequently.

The sole property in `<For>` is `each` , through which you can specify the data collection to loop over. This property expects an array, however, it can also accept objects that have been converted to arrays using utilities such as [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) or [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values).

    import { For } from "solid-js"
    <For each={data()}>  {(item, index) =>    // rendering logic for each element  }</For>

Between the `<For>` tags, the component requires a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) which will dictate how each item in the data collection should be rendered. This structure resembles the callback used within JavaScript's [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) method, providing a familiar pattern to follow.

The function receives two arguments:

*   `item`: represents the current item in the data collection that is being rendered over.
*   `index`: the current item's index within the collection.

You can access the current `item` and `index` to dynamically set attributes or content of the JSX elements. Index is a [_signal_](/concepts/signals) and must be called as a function to retrieve its value.

    <For each={data()}>  {(item, index) => (    <li      style={{        color: index() % 2 === 0 ? "red" : "blue"      }}    >      {item.name}    </li>  )}</For>

* * *

[`Index`](/concepts/control-flow/list-rendering#index)
------------------------------------------------------

`<Index>`, similar to `<For>`, is a looping component that allows you to render elements based on the contents of an array or object. However, when the order and length of the list remain _stable_, but the content may change frequently, `<Index>` is a better option because it results in fewer re-renders.

    import { Index } from "solid-js"
    <Index each={data()}>  {(item, index) => (    // rendering logic for each element  )}</Index>

Similar to the `<For>` component, `<Index>` accepts a single property named `each`, which is where you pass the structure you wish to loop over.

Where the `index` is a signal with `<For>`, it remains fixed with `<Index>`. This is because `<Index>` is more concerned with the **index** of the elements in the array. Because of this, the `item` is a signal, allowing the _content_ at each index to change without a re-render while the index remains fixed.

    import { Index } from "solid-js"
    <Index each={data()}>  {(item, index) => (    <li>      {item().name} - {item().completed}    </li>  )}</Index>

* * *

[`<Index>` vs `<For>`](/concepts/control-flow/list-rendering#index-vs-for)
--------------------------------------------------------------------------

`<For>` is designed to be used when the _order_ and _length_ of the list may change frequently. When the list value changes in `<For>`, the entire list is re-rendered. However, if the array undergoes a change, such as an element shifting position, `<For>` will manage this by simply **moving** the corresponding DOM node and **updating** the index.

`<Index>`, however, is designed to be used when the **order** and **length** of the list remain _stable_, but the content may change frequently. When the list value changes in `<Index>`, only the content at the specified index is updated.

### [When to use `<For>`](/concepts/control-flow/list-rendering#when-to-use-for)

In cases where signals, nested loops, or dynamic lists are not required, `<For>` is the best option. For example, when creating a list of static elements, such as a list of links, `<For>` is the best option to use. This is because it will only modify the indexes of the elements in the list, rather than re-rendering the entire list.

    import { createSignal, For } from "solid-js"
    function StringList() {  const [items, setItems] = createSignal(["Item 1", "Item 2", "Item 3"])
      return (    <ul>      <input        type="text"        onInput={(e) => {          // add the new item to the list        }}      />      <For each={items()}>        {(item, index) => (          <li>            {item} - {index()}          </li>        )}      </For>    </ul>  )}

If you are working with signals, [JavaScript primitives like strings and numbers](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) or input fields, `<Index>` is the better option to use. If you were using `<For>`, the entire list would be re-rendered when a value changes, even if the length of the list remains unchanged. `<Index>`, instead, will update the content at the specified index, while the rest of the list remains unchanged.

    import { createSignal, Index } from "solid-js"
    function FormList() {  const [inputs, setInputs] = createSignal(['input1','input2','input3'])  return(    <form>      <Index each={inputs()}>        {(input, index) => (          <input            type="text"            value={input()}            onInput={(e) => {              // update the input value            }}          />        )}      </Index>    </form>  )}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/control-flow/list-rendering.mdx&page=https://docs.solidjs.com/concepts/control-flow/list-rendering)

Previous[← Dynamic](/concepts/control-flow/dynamic)

Next[Portal →](/concepts/control-flow/portal)

Control flow

Portal
======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/portal.mdx)

When an element requires rendering outside of the usual document flow, challenges related to stacking contents and z-index can interfere with the desired intention or look of an application. `<Portal>` helps with this by putting elements in a different place in the document, bringing an element into the document flow so they can render as expected.

    import { Portal } from "solid-js/web"
    <Portal>  <div class="popup">...</div></Portal>

The content nested within `<Portal>` is rendered and positioned by default at the end of the document body.

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=IEPk0uiH2OC365hkpKf3wA)

This can be changed by passing a `mount` prop to `<Portal>`. The `mount` prop accepts a [DOM node](https://developer.mozilla.org/en-US/docs/Web/API/Node), which will be used as the mount point for the portal content.

    import { Portal } from "solid-js/web"
    <Portal mount={document.querySelector("main")}>  <div class="popup">...</div></Portal>

Using `<Portal>` can be particularly useful in cases where elements, like information popups, might be clipped or obscured due to the overflow settings of their parent elements. By putting the element outside of the parent element, it is no longer bound by the overflow settings of its parent. This creates a more accessible experience for users, as the content is no longer obscured.

info

`<Portal>` will render wrapped unless specifically targeting `document.head`.

This is so events propagate through the Portal according to the component hierarchy instead of the elements hierarchy.

By default, children will wrap in a `<div>`. If you portal into an SVG, then the `isSVG` prop must be used to avoid wrapping the children in a `<div>` and wrap in a `<g>` instead.

    import { Portal } from "solid-js/web"
    function Rect() {  return (    <Portal mount={document.querySelector("svg")} isSVG={true}>      <rect fill="red" x="25" y="25" height="50" width="50" />    </Portal>  );}
    function SVG() {  return <svg xmlns="http://www.w3.org/2000/svg" />;}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/control-flow/portal.mdx&page=https://docs.solidjs.com/concepts/control-flow/portal)

Previous[← List rendering](/concepts/control-flow/list-rendering)

Next[Error boundary →](/concepts/control-flow/error-boundary)

Control flow

Error boundary
==============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/control-flow/error-boundary.mdx)

By default, if part of an application throws an error during rendering, the entire application can crash, resulting in Solid removing its UI from the screen. Error boundaries provide a way to catch these errors and prevent the entire app from crashing.

The [`<ErrorBoundary>`](/reference/components/error-boundary) component is used to create an error boundary. It catches any error that occurs during the rendering or updating of its children. However, an important note is that errors occurring outside the rendering process, such as in event handlers or after a `setTimeout`, are _not_ caught by error boundaries.

The `fallback` prop can be used to display a user-friendly error message or notification when an error occurs. If a function is passed to `fallback`, it will receive the error object as well as a `reset` function. The `reset` function forces the `<ErrorBoundary>` to re-render its children and reset the error state, providing users with a way to recover from the error.

    import { ErrorBoundary } from "solid-js";import { Header, ErrorProne } from "./components";
    function App() {  return (    <div>      <Header />      <ErrorBoundary        fallback={(error, reset) => (          <div>            <p>Something went wrong: {error.message}</p>            <button onClick={reset}>Try Again</button>          </div>        )}      >        <ErrorProne />      </ErrorBoundary>    </div>  );}

In this example, when the `ErrorProne` component throws an error, the `<ErrorBoundary>` catches it, preventing it from affecting the rest of the application. Instead, it displays the error message passed to the fallback prop.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/control-flow/error-boundary.mdx&page=https://docs.solidjs.com/concepts/control-flow/error-boundary)

Previous[← Portal](/concepts/control-flow/portal)

Next[Effects →](/concepts/effects)

Concepts

Effects
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/effects.mdx)

Effects are functions that are triggered when the signals they depend on change. They play a crucial role in managing side effects, which are actions that occur outside of the application's scope, such as DOM manipulations, data fetching, and subscriptions.

* * *

[Using an effect](/concepts/effects#using-an-effect)
----------------------------------------------------

An effect is created using the `createEffect` function. This function takes a callback as its argument that runs when the effect is triggered.

    import { createEffect } from "solid-js";
    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log(count());});

In this example, an effect is created that logs the current value of `count` to the console. When the value of `count` changes, the effect is triggered, causing it to run again and log the new value of `count`.

* * *

[Managing dependencies](/concepts/effects#managing-dependencies)
----------------------------------------------------------------

Effects can be set to observe any number of dependencies. Dependencies are what allow an effect to track changes and respond accordingly. These can include signals, variables, props, context, or any other reactive values. When any of these change, the effect is notified and will run again to update its state.

Upon initialization, an effect will run _once_, regardless of whether it has any dependencies. This is useful for setting up the effect and initializing variables or subscribing to [signals](/concepts/signals). After this run, the effect will only be triggered when any of its _dependencies_ change.

    createEffect(() => {  console.log("hello"); // will run only once});
    createEffect(() => {  console.log(count()); // will run every time count changes});

Solid automatically tracks the dependencies of an effect, so you do not need to manually specify them. This improves the tracking and minimizes the chances of overlooking or incorrectly identifying dependencies.

* * *

[Subscribing to signals](/concepts/effects#subscribing-to-signals)
------------------------------------------------------------------

When an effect is set to observe a signal, it creates a subscription to it. This subscription allows the effect to track the changes in the signal's value, which causes it to observe any changes that may happen and to execute its callback accordingly.

    import { createSignal, createEffect } from "solid-js";
    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log(count()); // Logs current value of count whenever it changes});

### [Managing multiple signals](/concepts/effects#managing-multiple-signals)

Effects have the ability to observe multiple signals. A single effect can subscribe to multiple signals, and similarly, multiple effects can keep track of a single signal. This is useful when you need to update the UI based on multiple signals.

When multiple signals are observed within a single effect, it will execute its callback whenever _any_ of the signals change. The effect will run even if only one of the signals changes, not necessarily all of them. This means that the effect will run with the latest values of all of the signals that it is observing.

    import { createSignal, createEffect } from "solid-js";
    const [count, setCount] = createSignal(0);const [message, setMessage] = createSignal("Hello");
    createEffect(() => {  console.log(count(), message());});
    setCount(1); // Output: 1, "Hello"setMessage("World"); // Output: 1, "World"

info

When a signal updates, it notifies all of its subscribers sequentially but the _order can vary_. While effects are guaranteed to run when a signal updates, the execution might **not** be instantaneous. This means that the order of execution of effects is _not guaranteed_ and should not be relied upon.

### [Nested effects](/concepts/effects#nested-effects)

When working with effects, it is possible to nest them within each other. This allows each effect to independently track its own dependencies, without affecting the effect that it is nested within.

    createEffect(() => {  console.log("Outer effect starts");  createEffect(() => console.log("Inner effect"));  console.log("Outer effect ends");});

The order of execution is important to note. An inner effect will _not_ affect the outer effect. Signals that are accessed within an inner effect, will _not_ be registered as dependencies for the outer effect. When the signal located within the inner effect changes, it will trigger only the _inner effect_ to re-run, not the outer one.

    import { createSignal, createEffect } from "solid-js";
    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log("Outer effect starts");  createEffect(() => console.log(count())); // when count changes, only this effect will run  console.log("Outer effect ends");});

This forces each effect to be independent of each other, which helps to avoid unexpected behaviour. Additionally, it allows you to create effects that are only triggered when certain conditions are met.

* * *

[Lifecycle functions](/concepts/effects#lifecycle-functions)
------------------------------------------------------------

Effects have a lifecycle that can be managed using certain functions. These functions allow you to control the initialization and disposal of effects to build the type of behaviour that you need. This can include running a side effect only once, or cleaning up a task when it is no longer needed.

### [`onMount`](/concepts/effects#onmount)

In situations where you just want to run a side effect **once**, you can use the [`onMount`](/reference/lifecycle/on-mount) function. This lifecycle function is similar to an effect, but it does not track any dependencies. Rather, once the component has been initialized, the `onMount` callback will be executed and will not run again.

    import { onMount } from "solid-js";
    function Component() {  const [data, setData] = createSignal(null);
      createEffect(() => {    data(); // will run every time data changes  });
      onMount(async () => {    // will run only once, when the component is mounted    const fetchedData = await fetch("https://example.com/data");    setData(fetchedData);  });
      return <div>...</div>;}

`onMount` provides the assurance that the callback will only run once. If using an effect in this situation, there is no guarantee that it will only run once, which can lead to unexpected behaviour. This makes `onMount` useful for API calls and other side effects that only need to be run once per component instance.

### [`onCleanup`](/concepts/effects#oncleanup)

While `onMount` is useful for running a side effect once, [`onCleanup`](/reference/lifecycle/on-cleanup) is helpful for cleaning up a task when it is no longer needed. `onCleanup` will run whenever the component unmounts, removing any subscriptions that the effect has.

    import { onCleanup } from "solid-js";
    function App() {  const [count, setCount] = createSignal(0);
      const timer = setInterval(() => {    setCount((prev) => prev + 1);  }, 1000);
      onCleanup(() => {    clearInterval(timer);  });
      return <div>Count: {count()}</div>;}

In this example, the `onCleanup` function is used to clear the interval that is set up in the effect. To avoid the interval from running indefinitely, the `onCleanup` function is used to clear the interval once the component unmounts.

`onCleanup` can be used to avoid memory leaks. These occur when a component is unmounted, but references to it still exist and, as a result, could still be running in the background. Using `onCleanup` to remove any subscriptions or references to the component can help to avoid this issue.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/effects.mdx&page=https://docs.solidjs.com/concepts/effects)

Previous[← Error boundary](/concepts/control-flow/error-boundary)

Next[Derived signals →](/concepts/derived-values/derived-signals)

Derived values

Derived signals
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/derived-signals.mdx)

Derived signals are functions that rely on one or more [signals](/concepts/signals) to produce a value.

These functions are not executed immediately, but instead are only called when the values they rely on are changed. When the underlying signal is changed, the function will be called again to produce a new value.

    const double = () => count() * 2;

In the above example, the `double` function relies on the `count` signal to produce a value. When the `count` signal is changed, the `double` function will be called again to produce a new value.

Similarly you can create a derived signal that relies on a store value because stores use signals under the hood. To learn more about how stores work, [you can visit the stores section](/concepts/stores).

    const fullName = () => store.firstName + ' ' + store.lastName;

These dependent functions gain reactivity from the signal they access, ensuring that changes in the underlying data propagate throughout your application. It is important to note that these functions do not store a value themselves; instead, they can update any effects or components that depend on them. If included within a component's body, these derived signals will trigger an update when necessary.

While you can create derived values in this manner, Solid created the [`createMemo`](/reference/basic-reactivity/create-memo) primitive. To dive deeper into how memos work, [check out the memos section](/concepts/derived-values/memos).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/derived-values/derived-signals.mdx&page=https://docs.solidjs.com/concepts/derived-values/derived-signals)

Previous[← Effects](/concepts/effects)

Next[Memos →](/concepts/derived-values/memos)

Derived values

Memos
=====

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/derived-values/memos.mdx)

Memos are a type of reactive value that can be used to memoize derived state or expensive computations. They are similar to [derived signals](/concepts/derived-values/derived-signals) in that they are reactive values that automatically re-evaluate when their dependencies change. However, unlike derived signals, memos are optimized to execute only once for each change in their dependencies.

Memos expose a _read-only_ reactive value (like a [signal](/concepts/signals)) and track changes in their dependencies (similar to an [effect](/concepts/effects)). This makes them useful for caching the results of expensive or frequently accessed computations. By doing this, memos minimize unnecessary work within an application by retaining the results of a computation until its dependencies change.

* * *

[Using memos](/concepts/derived-values/memos#using-memos)
---------------------------------------------------------

A memo is created using the `createMemo` function. Within this function, you can define the derived value or computations you wish to memoize. When called, `createMemo` will return a **getter** function that reads the current value of the memo:

    import { createMemo, createSignal } from "solid-js"
    const [count, setCount] = createSignal(0)
    const isEven = createMemo(() => count() % 2 === 0)
    console.log(isEven()) // true
    setCount(3)console.log(isEven()) // false

While memos look similar to effects, they are different in that they _return a value_. This value is the result of the computation or derived state that you wish to memoize.

### [Advantages of using memos](/concepts/derived-values/memos#advantages-of-using-memos)

While you can use a [derived signal](/concepts/derived-values/derived-signals) to achieve similar results, memos offer distinct advantages:

*   Memos are optimized to execute only once for each change in their dependencies.
*   When working with expensive computations, memos can be used to cache the results so they are not recomputed unnecessarily.
*   A memo will only recompute when its dependencies change, and will not trigger subsequent updates (as determined by [`===` or strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)) if its dependencies change but its value remains the same.
*   Any signal or memo accessed within a memo's function is **tracked**. This means that the memo will re-evaluate automatically when these dependencies change.

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=ACJTLvgPnReEQszYSUwoLw)

* * *

[Memo vs. effect](/concepts/derived-values/memos#memo-vs-effect)
----------------------------------------------------------------

Both memos and effects are important when managing reactive computations and side effects. They, however, serve different purposes and each has their own unique behaviors.

Memos

Effects

Return value

Yes - returns a getter for the result of the computation or derived state.

Does not return a value but executes a block of code in response to changes.

Caches results

Yes

No

Behavior

Function argument should be pure without reactive side effects.

Function argument can cause side effects like UI updates or data fetches.

Dependency tracking.

Yes

Yes

Example use cases

Transforming data structures, computing aggregated values, derived state, or other expensive computations.

UI updates, network requests, or external integrations.

* * *

[Best practices](/concepts/derived-values/memos#best-practices)
---------------------------------------------------------------

### [Pure functions](/concepts/derived-values/memos#pure-functions)

When working with memos, it is recommended that you leave them "pure".

    import { createSignal, createMemo } from "solid-js"
    const [count, setCount] = createSignal(0)const isEven = createMemo(() => count() % 2 === 0) // example of a pure function

A pure function is one that does not cause any side effects. This means that the function's output should solely depend on its inputs.

When you introduce side effects into a memo, it can complicate the reactivity chain. This can lead to unexpected behavior, such as infinite loops, that lead your application to crash.

    import { createSignal, createMemo } from "solid-js"
    const [count, setCount] = createSignal(0)const [message, setMessage] = createSignal("")
    const badMemo = createMemo(() => {  if (count() > 10) {    setMessage("Count is too high!") //  side effect  }  return count() % 2 === 0})

These infinite loops can be triggered when a memo has a side effect that causes its dependencies to change. This will cause the memo to re-evaluate, which will then trigger the side effect again, and so on until the application crashes.

This can be avoided by using a [`createEffect`](/reference/basic-reactivity/create-effect) to handle the side effects instead:

    import { createSignal, createMemo, createEffect } from "solid-js"
    const [count, setCount] = createSignal(0)const [message, setMessage] = createSignal("")
    const isEven = createMemo(() => count() % 2 === 0)
    createEffect(() => {  if (count() > 10) {    setMessage("Count is too high!")  }})

Here, the `createEffect` will handle the side effects, while the `isEven` memo will remain pure.

### [Keep logic in memos](/concepts/derived-values/memos#keep-logic-in-memos)

Memos are optimized to execute only once for each change in their dependencies. This means that you can remove unnecessary effects that are triggered by a memo's dependencies.

When working with derived state, memos are the recommended approach over effects. Keeping the logic in a memo prevents unnecessary re-renders that can occur when using an effect. Similarly, effects are better suited to handle side effects, such as DOM updates, rather than derived state. This separation of concerns can help keep your code clean and easy to understand.

    // effect - runs whenever `count` changescreateEffect(() => {  if (count() > 10) {    setMessage("Count is too high!")  } else {    setMessage("")  }})
    // memo - only runs when `count` changes to or from a value greater than 10const message = createMemo(() => {  if (count() > 10) {    return "Count is too high!"  } else {    return ""  }})

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/derived-values/memos.mdx&page=https://docs.solidjs.com/concepts/derived-values/memos)

Previous[← Derived signals](/concepts/derived-values/derived-signals)

Next[Context →](/concepts/context)

Concepts

Context
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/context.mdx)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

* * *

[When to use context](/concepts/context#when-to-use-context)
------------------------------------------------------------

When you have a large [component tree](/concepts/components/basics#component-trees) that requires state to be shared, context can be used. Context can be employed to avoid [prop drilling](/concepts/components/props#prop-drilling), which is the practice of passing props through intermediate elements without using them directly.

If you want to avoid passing some props through a few layers, when applicable, adjusting your component hierarchy may be an easier solution. [Signals](/concepts/signals) are often the simplest solution since they can be imported directly into the components that need them.

Context, however, is designed to share data that is global to an application or for information that is regularly accessed by multiple components in an application's component tree. This offers a way to access state across an application without passing props through intermediate layers or importing them directly into components.

* * *

[Creating context](/concepts/context#creating-context)
------------------------------------------------------

Context is created using the [`createContext`](/reference/component-apis/create-context) function. This function has a `Provider` property that wraps the component tree you want to provide context to.

/context/create.js/context/component.jsx

    import { createContext } from "solid-js";
    const MyContext = createContext();

    import { MyContext } from "./create";
    export function Provider (props) {  return (    <MyContext.Provider>      {props.children}    </MyContext.Provider>  )};

* * *

[Providing context to children](/concepts/context#providing-context-to-children)
--------------------------------------------------------------------------------

To pass a value to the `Provider`, you use the `value` prop which can take in any value, including [signals](/concepts/context#updating-context-values). Once a value is passed to the `Provider`, it is available to all components that are descendants of the `Provider`.

When passing a single value, it can be directly passed to the `value` prop:

    import { createContext, useContext } from "solid-js";import { MyContext } from "./create";
    const Provider = (props) => (  <MyContext.Provider value="new value">{props.children}</MyContext.Provider>);

tip

When passing multiple values (as an `array` or `object`), it is recommended to use a [store](/reference/component-apis/create-context#usage).

* * *

[Consuming context](/concepts/context#consuming-context)
--------------------------------------------------------

Once the values are available to all the components in the context's component tree, they can be accessed using the [`useContext`](/reference/component-apis/use-context) utility. This utility takes in the context object and returns the value(s) passed to the `Provider`:

    import { createContext, useContext } from "solid-js";import { MyContext } from "./create";
    const Provider = (props) => (  <MyContext.Provider value="new value">    {props.children}  </MyContext.Provider>);
    const Child = () => {  const value = useContext(MyContext);
      return (    <span>      {value}    </span>  );};
    export const App = () => (  <Provider>    <Child />  </Provider>);

* * *

[Customizing Context Utilities](/concepts/context#customizing-context-utilities)
--------------------------------------------------------------------------------

When an application contains multiple context objects, it can be difficult to keep track of which context object is being used. To solve this issue, you can create a custom utility to create a more readable way to access the context values.

For example, when wrapping a component tree, you may want to create a custom `Provider` component that can be used to wrap the component tree. This also provides you with the option of re-using the `Provider` component in other parts of your application, if needed.

    import { createSignal, createContext, useContext } from "solid-js";import { CounterContext } from "~/context/counter";
    export function CounterProvider(props) {  return (    <CounterContext.Provider value={props.count ?? 0}>      {props.children}    </CounterContext.Provider>  );}

Now if you had to access the Provider in different areas of your application, you can simply import the `CounterProvider` component and wrap the component tree:

    import { CounterProvider } from "./counterProvider";
    export function App() {  return (    <CounterProvider count={1}>      <h1>Welcome to Counter</h1>      <NestedComponents />    </CounterProvider>  );}

Similarly, you can create a custom utility to access the context values. Instead of importing `useContext` and passing in the context object on each component that you're using it in, creating a customized utility can make it easier to access the values you need:

    export function useCounter() {  return useContext(CounterContext);}

The `useCounter()` utility in this example can now be imported into any component that needs to access the context values:

    import { useCounter } from "./counter";
    export function CounterProvider(props) {  const count = useCounter();  return (    <>      <div>{count()}</div>    </>  );}

* * *

[Updating Context Values](/concepts/context#updating-context-values)
--------------------------------------------------------------------

[Signals](/concepts/signals) offer a way to synchronize and manage data shared across your components using context. You can pass a signal directly to the `value` prop of the `Provider` component, and any changes to the signal will be reflected in all components that consume the context.

App.jsxContext.jsxChild.jsx

    import { CounterProvider } from "./Context";import { Child } from "./Child";
    export function App() {  return (    <CounterProvider count={1}>      <h1>Welcome to Counter App</h1>      <Child />    </CounterProvider>  )}

    import { createSignal, useContext } from "solid-js";
    export function CounterProvider(props) {  const [count, setCount] = createSignal(props.initialCount || 0);  const counter = [    count,    {      increment() {      setCount(prev => prev + 1);      },      decrement() {      setCount(prev => prev - 1);      }    }  ];
      return (    <CounterContext.Provider value={counter}>      {props.children}    </CounterContext.Provider>  );}
    export function useCounter() { return useContext(CounterContext); }

    // /context/counter-component.tsximport { useCounter } from "./Context";
    export function Child(props) {  const [count, { increment, decrement }] = useCounter();
      return (  <>    <div>{count()}</div>    <button onClick={increment}>+</button>    <button onClick={decrement}>-</button>  </>  );};

This offers a way to manage state across your components without having to pass props through intermediate elements.

* * *

[Debugging with context](/concepts/context#debugging-with-context)
------------------------------------------------------------------

`createContext` takes in an _optional_ default value and it is possible it can return `undefined` if not provided. When working with TypeScript, this can introduce type issues that make it difficult to determine why your component is not rendering as expected.

To solve this issue, a default value can be specified when creating a context object, or errors can be handled manually through the use of a custom `useMyContext` utility:

    import { useContext } from "solid-js";
    function useMyContext() {  const value = useContext(MyContext);
      if (!value) {    throw new Error("Missing context Provider");  }
      return value;}
    function Child() {  const value = useMyContext();
      return <div>{value}</div>;}

* * *

[Common issues with `createContext` and `useContext`](/concepts/context#common-issues-with-createcontext-and-usecontext)
------------------------------------------------------------------------------------------------------------------------

If no default value is passed to `createContext`, it is possible for `useContext` to return `undefined`.

info

Read more about default values in the [`createContext`](/reference/component-apis/create-context) entry.

Because of this, if an initial value was not passed to `createContext`, the TS type signature of `useContext` will indicate that the value returned might be `undefined` (as mentioned above). This can be quite annoying when you want to use the context inside a component, and particularly when immediately destructuring the context. Additionally, if you use `useContext` and it returns `undefined` (which is often, but not always, the result of a bug), the error message thrown at runtime can be confusing.

The most common solution for it is to wrap all uses of `useContext` in a function that will explicitly throw a helpful error if the context is `undefined`. This also serves to narrow the type returned, so TS doesn't complain. As an example:

    function useCounterContext() {  const context = useContext(CounterContext)  if (!context) {    throw new Error("can't find CounterContext")  }  return context}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/context.mdx&page=https://docs.solidjs.com/concepts/context)

Previous[← Memos](/concepts/derived-values/memos)

Next[Stores →](/concepts/stores)

Concepts

Stores
======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/stores.mdx)

Similar to [signals](/concepts/signals), stores are a state management primitive. However, while signals manage a single piece of state, stores create a centralized location to reduce code redundancy. Within Solid, these stores can spawn a collection of reactive signals, each corresponding to a particular property which can be useful when working with complex state.

* * *

[Creating a store](/concepts/stores#creating-a-store)
-----------------------------------------------------

Stores can manage many data types, including: objects, arrays, strings, and numbers.

Using JavaScript's [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) mechanism, reactivity extends beyond just the top-level objects or arrays. With stores, you can now target nested properties and elements within these structures to create a dynamic tree of reactive data.

    import { createStore } from "solid-js/store"
    // Initialize storeconst [store, setStore] = createStore({  userCount: 3,  users: [    {      id: 0,      username: "felix909",      location: "England",      loggedIn: false,    },    {      id: 1,      username: "tracy634",      location: "Canada",      loggedIn: true,    },    {      id: 2,      username: "johny123",      location: "India",      loggedIn: true,    },  ],})

* * *

[Accessing store values](/concepts/stores#accessing-store-values)
-----------------------------------------------------------------

Store properties can be accessed directly from the state proxy through directly referencing the targeted property:

    console.log(store.userCount) // Outputs: 3

Accessing stores within a tracking scope follows a similar pattern to signals. While signals are created using the [`createSignal`](/reference/basic-reactivity/create-signal) function and require calling the signal function to access their values, store values can be directly accessed without a function call. This provides access to the store's value directly within a tracking scope:

    const App = () => {  const [mySignal, setMySignal] = createSignal("This is a signal.")  const [store, setStore] = createStore({    userCount: 3,    users: [      {        id: 0,        username: "felix909",        location: "England",        loggedIn: false,      },      {        id: 1,        username: "tracy634",        location: "Canada",        loggedIn: true,      },      {        id: 2,        username: "johny123",        location: "India",        loggedIn: true,      },    ],  })  return (    <div>      <h1>Hello, {store.users[0].username}</h1> {/* Accessing a store value */}      <span>{mySignal()}</span> {/* Accessing a signal */}    </div>  )}

When a store is created, it starts with the initial state but does _not_ immediately set up signals to track changes. These signals are created **lazily**, meaning they are only formed when accessed within a tracking scope.

Once data is used within a tracking scope, such as within the return statement of a component function, computed property, or an effect, a signal is created and dependencies are established.

For example, if you wanted to print out every new user, adding the console log below will not work because it is not within a tracked scope.

    const App = () => {  const [store, setStore] = createStore({    userCount: 3,    users: [ ... ],  })
      const addUser = () => { ... }
      console.log(store.users.at(-1)) // This won't work
      return (    <div>      <h1>Hello, {store.users[0].username}</h1>      <p>User count: {store.userCount}</p>      <button onClick={addUser}>Add user</button>    </div>  )}

Rather, this would need to be in a tracking scope, like inside a [`createEffect`](/reference/basic-reactivity/create-effect), so that a dependency is established.

    const App = () => {  const [store, setStore] = createStore({    userCount: 3,    users: [ ... ],  })
      const addUser = () => { ... }
      console.log(store.users.at(-1))  createEffect(() => {    console.log(store.users.at(-1))  })
      return (    <div>      <h1>Hello, {store.users[0].username}</h1>      <p>User count: {store.userCount}</p>      <button onClick={addUser}>Add user</button>    </div>  )}

* * *

[Modifying store values](/concepts/stores#modifying-store-values)
-----------------------------------------------------------------

Updating values within a store is best accomplished using a setter provided by the `createStore` initialization. This setter allows for the modification of a specific key and its associated value, following the format `setStore(key, newValue)`:

    const [store, setStore] = createStore({  userCount: 3,  users: [ ... ],})
    setStore("users", (currentUsers) => [  ...currentUsers,  {    id: 3,    username: "michael584",    location: "Nigeria",    loggedIn: false,  },])

The value of `userCount` could also be automatically updated whenever a new user is added to keep it synced with the users array:

    const App = () => {  const [store, setStore] = createStore({    userCount: 3,    users: [ ... ],  })
      const addUser = () => { ... }
      createEffect(() => {    console.log(store.users.at(-1))    setStore("userCount", store.users.length)  })
      return (    <div>      <h1>Hello, {store.users[0].username}</h1>      <p>User count: {store.userCount}</p>      <button onClick={addUser}>Add user</button>    </div>  )}

info

Separating the read and write capabilities of a store provides a valuable debugging advantage.

This separation facilitates the tracking and control of the components that are accessing or changing the values.

advanced

A little hidden feature of stores is that you can also create nested stores to help with setting nested properties.

      const [store, setStore] = createStore({    userCount: 3,    users: [ ... ],  })
      const [users, setUsers] = createStore(store.users)
      setUsers((currentUsers) => [    ...currentUsers,    {      id: 3,      username: "michael584",      location: "Nigeria",      loggedIn: false,    },  ])

Changes made through `setUsers` will update the `store.users` property and reading `users` from this derived store will also be in sync with the values from `store.users`.

Note that the above relies on `store.users` to be set already in the existing store.

* * *

[Path syntax flexibility](/concepts/stores#path-syntax-flexibility)
-------------------------------------------------------------------

Modifying a store using this method is referred to as "path syntax." In this approach, the initial arguments are used to specify the keys that lead to the target value you want to modify, while the last argument provides the new value.

String keys are used to precisely target particular values with path syntax. By specifying these exact key names, you can directly retrieve the targeted information. However, path syntax goes beyond string keys and offers more versatility when accessing targeted values.

Instead of employing the use of just string keys, there is the option of using an array of keys. This method grants you the ability to select multiple properties within the store, facilitating access to nested structures. Alternatively, you can use filtering functions to access keys based on dynamic conditions or specific rules.

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=M6Y55ScNFDD_2HmRd4OJkQ)

The flexibility in path syntax makes for efficient navigation, retrieval, and modification of data in your store, regardless of the store's complexity or the requirement for dynamic access scenarios within your application.

* * *

[Modifying values in arrays](/concepts/stores#modifying-values-in-arrays)
-------------------------------------------------------------------------

Path syntax provides a convenient way to modify arrays, making it easier to access and update their elements. Instead of relying on discovering individual indices, path syntax introduces several powerful techniques for array manipulation.

### [Appending new values](/concepts/stores#appending-new-values)

To append a new element to an array within a store, you specify the target array and set the index to the desired position. For example, if you wanted to append the new element to the end of the array, you would set the index to `array.length`:

    setStore("users", (otherUsers) => [  ...otherUsers,  {    id: 3,    username: "michael584",    location: "Nigeria",    loggedIn: false,  },])
    // can become
    setStore("users", store.users.length, {  id: 3,  username: "michael584",  location: "Nigeria",  loggedIn: false,})

### [Modifying multiple elements](/concepts/stores#modifying-multiple-elements)

With path syntax, you can target a subset of elements of an array, or properties of an object, by specifying an array or range of indices.

The most general form is to specify an array of values. For example, if `store.users` is an array of objects, you can set the `loggedIn` property of several indices at once like so:

    setStore("users", [2, 7, 10], "loggedIn", false)// equivalent to (but more efficient than):setStore("users", 2, "loggedIn", false)setStore("users", 7, "loggedIn", false)setStore("users", 10, "loggedIn", false)

This array syntax also works for object property names. For example, if `store.users` is an object mapping usernames to objects, you can set the `loggedIn` property of several users at once like so:

    setStore("users", ["me", "you"], "loggedIn", false)// equivalent to (but more efficient than):setStore("users", ["me"], "loggedIn", false)setStore("users", ["you"], "loggedIn", false)

For arrays specifically, you can specify a range of indices via an object with `from` and `to` keys (both of which are inclusive). For example, assuming `store.users` is an array again, you can set the `loggedIn` state for all users except index 0 as follows:

    setStore("users", { from: 1, to: store.users.length - 1 }, "loggedIn", false)// equivalent to (but more efficient than):for (let i = 1; i <= store.users.length - 1; i++) {  setStore("users", i, "loggedIn", false)}

You can also include a `by` key in a range object to specify a step size, and thereby update a regular subset of elements. For example, you can set the `loggedIn` state for even-indexed users like so:

    setStore("users", { from: 0, to: store.users.length - 1, by: 2 }, "loggedIn", false)// equivalent to (but more efficient than):for (let i = 1; i <= store.users.length - 1; i += 2) {  setStore("users", i, "loggedIn", false)}

Multi-setter syntax differs from the "equivalent" code in one key way: a single store setter call automatically gets wrapped in a [`batch`](/reference/reactive-utilities/batch), so all the elements update at once before any downstream effects are triggered.

### [Dynamic value assignment](/concepts/stores#dynamic-value-assignment)

Path syntax also provides a way to set values within an array using functions instead of static values. These functions receive the old value as an argument, allowing you to compute the new value based on the existing one. This dynamic approach is particularly useful for complex transformations.

    setStore("users", 3, "loggedIn" , (loggedIn) => !loggedIn)

### [Filtering values](/concepts/stores#filtering-values)

To update elements in an array based on specific conditions, you can pass a function as an argument. This function acts as a filter, receiving the old value and index, and gives you the flexibility to apply logic that targets specific cases. This might include using methods like `.startsWith()`, `includes()`, or other comparison techniques to determine which elements should be updated.

    // update users with username that starts with "t"setStore("users", (user) => user.username.startsWith("t"), "loggedIn", false)
    // update users with location "Canada"setStore("users", (user) => user.location == "Canada" , "loggedIn", false)
    // update users with id 1, 2 or 3let ids = [1,2,3]setStore("users", (user) => ids.includes(user.id) , "loggedIn", false)

* * *

[Modifying objects](/concepts/stores#modifying-objects)
-------------------------------------------------------

When using store setters to modify objects, if a new value is an object, it will be shallow merged with the existing value. What this refers to is that the properties of the existing object will be combined with the properties of the "new" object you are setting, updating any overlapping properties with the values from the new object.

What this means, is that you can directly make the change to the store _without_ spreading out properties of the existing user object.

    setStore("users", 0, {  id: 109,})
    // is equivalent to
    setStore("users", 0, (user) => ({  ...user,  id: 109,}))

* * *

[Store utilities](/concepts/stores#store-utilities)
---------------------------------------------------

### [Store updates with `produce`](/concepts/stores#store-updates-with-produce)

Rather than directly modifying a store with setters, Solid has the `produce` utility. This utility provides a way to work with data as if it were a [mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) JavaScript object. `produce` also provides a way to make changes to multiple properties at the same time which eliminates the need for multiple setter calls.

    import { produce } from "solid-js/store"
    // without producesetStore("users", 0, "username", "newUsername")setStore("users", 0, "location", "newLocation")
    // with producesetStore(  "users",  0,  produce((user) => {    user.username = "newUsername"    user.location = "newLocation"  }))

`produce` and `setStore` do have distinct functionalities. While both can be used to modify the state, the key distinction lies in how they handle data. `produce` allows you to work with a temporary draft of the state, apply the changes, then produce a new [immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable) version of the store. Comparatively, `setStore` provides a more straightforward way to update the store directly, without creating a new version.

It's important to note, however, `produce` is specifically designed to work with **arrays** and **objects**. Other collection types, such as JavaScript [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), are not compatible with this utility.

### [Data integration with `reconcile`](/concepts/stores#data-integration-with-reconcile)

When new information needs to be merged into an existing store `reconcile` can be useful. `reconcile` will determine the differences between new and existing data and initiate updates only when there are _changed_ values, thereby avoiding unnecessary updates.

    const { createStore, reconcile } from "solid-js/stores"
    const [data, setData] = createStore({  animals: ['cat', 'dog', 'bird', 'gorilla']})
    const newData = getNewData() // eg. contains ['cat', 'dog', 'bird', 'gorilla', 'koala']setData('animals', reconcile(newData))

In this example, the store will look for the differences between the existing and incoming data sets. Consequently, only `'koala'` - the new edition - will cause an update.

### [Extracting raw data with `unwrap`](/concepts/stores#extracting-raw-data-with-unwrap)

When there is a need for dealing with data outside of a tracking scope, the `unwrap` utility offers a way to transform a store to a standard [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). This conversion serves several important purposes.

Firstly, it provides a snapshot of the current state without the processing overhead associated with reactivity. This can be useful in situations where an unaltered, non-reactive view of the data is needed. Additionally, `unwrap` provides a means to interface with third-party libraries or tools that anticipate regular JavaScript objects. This utility acts as a bridge to facilitate smooth integrations with external components and simplifies the incorporation of stores into various applications and workflows.

    import { createStore, unwrap } from "solid-js/store"
    const [data, setData] = createStore({  animals: ["cat", "dog", "bird", "gorilla"],})
    const rawData = unwrap(data)

To learn more about how to use Stores in practice, visit the [guide on complex state management](/guides/complex-state-management).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/stores.mdx&page=https://docs.solidjs.com/concepts/stores)

Previous[← Context](/concepts/context)

Next[Refs →](/concepts/refs)

Concepts

Refs
====

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/concepts/refs.mdx)

Refs, or references, are a special attribute that can be attached to any element, and are used to reference a DOM element or a component instance. They are particularly useful when you need to access the DOM nodes directly or invoke methods on a component.

* * *

[Accessing DOM elements](/concepts/refs#accessing-dom-elements)
---------------------------------------------------------------

One way of accessing DOM elements is through [element selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) such as [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById). Since elements in Solid can be added or removed from the DOM based on state, you need to wait until the element is attached to the DOM before accessing it. This can be done by using [`onMount`](/reference/lifecycle/on-mount) to wait until the element is attached to the DOM before accessing it:

Accessing DOM elements through element selectors is not recommended for this reason. As elements with the same selectors are added and removed from the DOM, the first element that matches the selector will be returned, which may not be the element you want.

* * *

[JSX as a value](/concepts/refs#jsx-as-a-value)
-----------------------------------------------

JSX can be used as a value and assigned to a variable when looking to directly access DOM elements.

    function Component() {  const myElement = <p>My Element</p>
      return <div>{myElement}</div>}

This lets you create and access DOM elements similar to [`document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) but without having to wait until it is attached to the DOM. It can be used multiple times without having to worry about duplicate selectors.

The downside of this approach is that it separates the element and any child elements from the rest of the JSX structure. This makes the component's JSX structure more difficult to read and understand.

* * *

[Refs in Solid](/concepts/refs#refs-in-solid)
---------------------------------------------

Solid provides a ref system to access DOM elements directly inside the JSX template, which keeps the structure of the elements intact.

To use [`ref`](/reference/jsx-attributes/ref), you declare a variable and use it as the `ref` attribute:

    function Component() {  let myElement;
      return (    <div>      <p ref={myElement}>My Element</p>    </div>  )}

These assignments occur at _creation time_ prior to the element being added to the DOM. If access to an element is needed before it is added to the DOM, you can use the callback form of `ref`:

    <p ref={(el) => {  myElement = el // el is created but not yet added to the DOM  }}>  My Element</p>

info

In TypeScript, you must use a definitive assignment assertion. Since Solid takes care of assigning the variable when the component is rendered, this signals to TypeScript that the variable will be assigned, even if it can't confirm it.

    let myElement!: HTMLDivElement;

### [Signals as refs](/concepts/refs#signals-as-refs)

[Signals](/concepts/signals) can also be used as refs. This is useful when you want to access the element directly, but the element may not exist when the component is first rendered, or may be removed from the DOM at some point.

    function App() {  const [show, setShow] = createSignal(false)  let element!: HTMLParagraphElement
      return (    <div>      <button onClick={() => setShow((isShown) => !isShown)}>Toggle</button>
          <Show when={show()}>        <p ref={element}>This is the ref element</p>      </Show>    </div>  )}

In this example, the paragraph element is only rendered when the `show` signal is `true`. When the component initializes, the paragraph element does not exist, so the `element` variable is not assigned. Once the `show` signal is set to `true`, the paragraph element is rendered, and the `element` variable is assigned to the paragraph element.

You can see a detailed view of the ref update lifecycle in this [Solid playground example](https://playground.solidjs.com/anonymous/22a1abfa-a0f5-44a6-bbe6-40387cf63b95).

* * *

[Forwarding refs](/concepts/refs#forwarding-refs)
-------------------------------------------------

Forwarding refs is a technique that allows you to pass a ref from a parent component to a child component. This is useful when you want to access the DOM element of a child component from the parent component.

To forward a ref, you need to pass the ref to the child component, and then assign the ref to the child component's element.

When a child component receives a `ref` attribute from its parent, the `ref` is passed as a callback function. This is regardless of whether the parent passed it as a simple assignment or a callback.

Once the child component receives the `ref`, it can be assigned to the element that the child component wants to expose through the `ref` attribute. To access the `ref` in the child component, it is passed as a prop:

    // Parent componentimport { Canvas } from "./Canvas.jsx"
    function ParentComponent() {  let canvasRef
      const animateCanvas = () => {    // Manipulate the canvas using canvasRef...  }
      return (    <div>      <Canvas ref={canvasRef} />      <button onClick={animateCanvas}>Animate Canvas</button>    </div>  )}
    // Child componentfunction Canvas(props) {  return (    <div className="canvas-container">      <canvas ref={props.ref} /> {/* Assign the ref to the canvas element */}    </div>  )}

In this example, the `canvas` element is directly assigned the `ref` attribute through the `props.ref` variable. This forwards the reference to the parent component, giving it direct access to the `canvas` element.

* * *

[Directives](/concepts/refs#directives)
---------------------------------------

Directives allow the attachment of reusable behaviours to DOM elements. The [`use:`](/reference/jsx-attributes/use) prefix is used to denote these custom directives. Unlike props or attributes, directives operate at a lower level through providing fine-grained control over the elements they are attached to.

Directives are like callback refs but they enable two extra features:

*   Having multiple directives on an element.
*   Passing in reactive data to the callback.

A directive is essentially a function with a specific signature:

    function directive(element: Element, accessor: () => any): void

*   `element`: The DOM element that the directive is applied to.
*   `accessor`: A function that gives access to the value(s) passed to the directive.

The directive functions are called at render time, but are called before the element is added to the DOM. Due to this order, elements are fully primed with their attributes, properties, or event listeners, therefore minimizing unexpected behaviors or premature interactions.

Within directives, you're able to perform a variety of tasks, including:

*   creating [signals](/concepts/signals)
*   initiating [effects](/guides/state-management#reacting-to-changes)
*   adding [event listeners](/concepts/components/event-handlers)
*   and more.

To learn more about directives and how they work with TypeScript, refer to our [TypeScript for Solid guide](/configuration/typescript).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/concepts/refs.mdx&page=https://docs.solidjs.com/concepts/refs)

Previous[← Stores](/concepts/stores)

Next[Fine-grained reactivity →](/advanced-concepts/fine-grained-reactivity)

Advanced concepts

Fine-grained reactivity
=======================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/advanced-concepts/fine-grained-reactivity.mdx)

Reactivity ensures automatic responses to data changes, eliminating the need for manual updates to the user interface (UI). By connecting UI elements to the underlying data, updates become automated. In a fine-grained reactive system an application will now have the ability to make highly _targeted and specific_ updates.

An example of this can be seen in the contrast between Solid and [React](https://react.dev/). In Solid, updates are made to the targeted attribute that needs to be changed, avoiding broader and, sometimes unnecessary, updates. In contrast, React would re-execute an entire component for a change in the single attribute, which can be less efficient.

Because of the fine-grained reactive system, unnecessary recalculations are avoided. Through targeting only the areas of an application that have changed the user experience becomes smoother and more optimized.

**Note:** If you're new to the concept of reactivity and want to learn the basics, consider starting with our [intro to reactivity guide](/concepts/intro-to-reactivity).

* * *

[Reactive primitives](/advanced-concepts/fine-grained-reactivity#reactive-primitives)
-------------------------------------------------------------------------------------

In Solid's reactivity system, there are two key elements: signals and observers. These core elements serve as the foundation for more specialized reactive features:

*   [Stores](/concepts/stores) which are [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that create, read, and write signals under the hood.
*   [Memos](/concepts/derived-values/memos) resemble [effects](/concepts/effects) but are distinct in that they _return_ a signal and optimize computations through caching. They update based on the behavior of effects, but are more ideal for computational optimization.
*   [Resources](/guides/fetching-data), building on the concept of memos, convert the asynchronicity of network requests into synchronicity, where the results are embedded within a signal.
*   Render effects are a tailored type of effect that initiate immediately, specifically designed for managing the rendering process.

### [Understanding signals](/advanced-concepts/fine-grained-reactivity#understanding-signals)

[Signals](/concepts/signals) are like mutable variables that can point to a value now and another in the future. They are made up of two primary functions:

*   **Getter**: how to read the current value of a signal.
*   **Setter**: a way to modify or update a signal's value.

In Solid, the [`createSignal`](/reference/basic-reactivity/create-signal) function can be used to create a signal. This function returns the getter and setter as a pair in a two-element array, called a tuple.

    import { createSignal } from "solid-js";
    const [count, setCount] = createSignal(1);
    console.log(count()); // prints "1"
    setCount(0); // changes count to 0
    console.log(count()); // prints "0"

Here, `count` serves as the getter, and `setCount` functions as the setter.

### [Effects](/advanced-concepts/fine-grained-reactivity#effects)

[Effects](/concepts/effects) are functions that are triggered when the signals they depend on point to a different value. They can be thought of as automated responders where any changes in the signal's value will trigger the effect to run.

    import { createSignal, createEffect } from "solid-js";
    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log(count());});

The effect takes a function that is called whenever _any_ of the signals it relies on changes, such as `count` in this example.

* * *

[Building a reactive system](/advanced-concepts/fine-grained-reactivity#building-a-reactive-system)
---------------------------------------------------------------------------------------------------

To grasp the concept of reactivity, it is often helpful to construct a reactive system from scratch.

The following example will follow the observer pattern, where data entities (signals) will maintain a list of their subscribers (effects). This is a way to notify subscribers whenever a signal they observe changes.

Here is a basic code outline to begin:

    function createSignal() {}
    function createEffect() {}
    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log("The count is " + count());});

* * *

[Reactive primitives](/advanced-concepts/fine-grained-reactivity#reactive-primitives-1)
---------------------------------------------------------------------------------------

### [`createSignal`](/advanced-concepts/fine-grained-reactivity#createsignal)

The `createSignal` function performs two main tasks:

1.  Initialize the value (in this case, `count` is set to `0`).
2.  Return an array with two elements: the getter and setter function.

    function createSignal(initialValue) {  let value = initialValue;
      function getter() {    return value;  }
      function setter(newValue) {    value = newValue;  }
      return [getter, setter];}
    // ..

This allows you to retrieve the current value through the getter and make any changes via the setter. At this stage, reactivity is not present, however.

### [`createEffect`](/advanced-concepts/fine-grained-reactivity#createeffect)

`createEffect` defines a function that immediately calls the function that is passed into it:

    // ..
    function createEffect(fn) {  fn();}
    // ..

### [Making a system reactive](/advanced-concepts/fine-grained-reactivity#making-a-system-reactive)

Reactivity emerges when linking `createSignal` and `createEffect` and this happens through:

1.  Maintaining a reference to the current subscriber's function.
2.  Registering this function during the creation of an effect.
3.  Adding the function to a subscriber list when accessing a signal.
4.  Notifying all subscribers when the signal has updated.

    let currentSubscriber = null;
    function createSignal(initialValue) {  let value = initialValue;  const subscribers = new Set();
      function getter() {    if (currentSubscriber) {      subscribers.add(currentSubscriber);    }    return value;  }
      function setter(newValue) {    if (value === newValue) return; // if the new value is not different, do not notify dependent effects and memos    value = newValue;    for (const subscriber of subscribers) {      subscriber(); //    }  }
      return [getter, setter];}
    // creating an effectfunction createEffect(fn) {  const previousSubscriber = currentSubscriber; // Step 1  currentSubscriber = fn;  fn();  currentSubscriber = previousSubscriber;}
    //..

A variable is used to hold a reference to the current executing subscriber function. This is used to determine which effects are dependent on which signals.

Inside `createSignal`, the initial value is stored and a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is used to store any subscriber functions that are dependent on the signal. This function will then return two functions for the signal:

*   The `getter` function checks to see if the current subscriber function is being accessed and, if it is, adds it to the list of subscribers before returning the _current_ value of the signal.
*   The `setter` function evaluated the new value against the old value, notifying the dependent functions only when the signal has been updated.

When creating the `createEffect` function, a reference to any previous subscribers is initialized to handle any possible nested effects present. The current subscriber is then passed to the given function, which is run immediately. During this run, if the effect accesses any signals it is then registered as a subscriber to those signals. The current subscriber, once the given function has been run, will be reset to its previous value so that, if there are any nested effects, they are operated correctly.

### [Validating the reactive system](/advanced-concepts/fine-grained-reactivity#validating-the-reactive-system)

To validate the system, increment the `count` value at one-second intervals:

    //..
    const [count, setCount] = createSignal(0);
    createEffect(() => {  console.log("The count is " + count());});
    setInterval(() => {  setCount(count() + 1);}, 1000);

This will display the incremented count value on the console at one-second intervals to confirm the reactive system's functionality.

* * *

[Managing lifecycles in a reactive system](/advanced-concepts/fine-grained-reactivity#managing-lifecycles-in-a-reactive-system)
-------------------------------------------------------------------------------------------------------------------------------

In reactive systems, various elements, often referred to as "nodes", are interconnected. These nodes can be signals, effects, or other reactive primitives. They serve as the individual units that collectively make up the reactive behavior of the system.

When a node changes, the system will re-evaluate the parts connected to that node. This can result in updates, additions, or removals of these connections, which affect the overall behavior of the system.

Now, consider a scenario where a condition influences the data used to calculate an output:

    // Temperature.jsxconsole.log("1. Initialize");const [temperature, setTemperature] = createSignal(72);const [unit, setUnit] = createSignal("Fahrenheit");const [displayTemp, setDisplayTemp] = createSignal(true);
    const displayTemperature = createMemo(() => {  if (!displayTemp()) return "Temperature display is off";  return `${temperature()} degrees ${unit()}`;});
    createEffect(() => console.log("Current temperature is", displayTemperature()));
    console.log("2. Turn off displayTemp");setDisplayTemp(false);
    console.log("3. Change unit");setUnit("Celsius");
    console.log("4. Turn on displayTemp");setDisplayTemp(true);

In this example, the `createMemo` primitive is used to cache the state of a computation. This means the computation doesn't have to be re-run if its dependencies remain unchanged.

The `displayTemperature` memo has an early return condition based on the value of `displayTemp`. When `displayTemp` is false, the memo returns a message saying "Temperature display is off," and as a result, `temperature` and `unit` are not tracked.

If the `unit` is changed while `displayTemp` is false, however, the effect won't trigger since none of the memo's current dependencies (`displayTemp` in this case) have changed.

### [Synchronous nature of effect tracking](/advanced-concepts/fine-grained-reactivity#synchronous-nature-of-effect-tracking)

The reactivity system described above operates synchronously. This operation has implications for how effects and their dependencies are tracked. Specifically, the system registers the subscriber, runs the effect function, and then unregisters the subscriber — all in a linear, synchronous sequence.

Consider the following example:

    createEffect(() => {  setTimeout(() => {    console.log(count());  }, 1000);});

The `createEffect` function in this example, initiates a `setTimeout` to delay the console log. Because the system is synchronous, it doesn't wait for this operation to complete. By the time the `count` getter is triggered within the `setTimeout`, the global scope no longer has a registered subscriber. As a result, this `count` signal will not add the callback as a subscriber which leads to potential issues with tracking the changes to `count`.

### [Handling asynchronous effects](/advanced-concepts/fine-grained-reactivity#handling-asynchronous-effects)

While the basic reactivity system is synchronous, frameworks like Solid offer more advanced features to handle asynchronous scenarios. For example, the `on` function provides a way to manually specify the dependencies of an effect. This is particularly useful for to make sure asynchronous operations are correctly tied into the reactive system.

Solid also introduces the concept of resources for managing asynchronous operations. Resources are specialized reactive primitives that convert the asynchronicity of operations like network requests into synchronicity, embedding the results within a signal. The system can then track asynchronous operations and their state, keeping the UI up-to-date when the operation completes or its' state changes.

Using resources in Solid can assist in complex scenarios when multiple asynchronous operations are involved and the completion may affect different parts of the reactive system. By integrating resources into the system, you can ensure that dependencies are correctly tracked and that the UI remains consistent with the underlying asynchronous data.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/advanced-concepts/fine-grained-reactivity.mdx&page=https://docs.solidjs.com/advanced-concepts/fine-grained-reactivity)

Previous[← Refs](/concepts/refs)

Next[Styling your components →](/guides/styling-your-components)

Guides

Styling your components
=======================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-your-components.mdx)

Solid provides flexible and versatile ways to style your components. [`class` and `style` bindings](/concepts/components/class-style) can both be added to dynamically style components with plain CSS. Solid also supports a range of styling methods - from traditional CSS preprocessors to modern CSS-in-JS solutions - ensuring the flexibility to choose the best approach for your projects.

* * *

[CSS preprocessors](/guides/styling-your-components#css-preprocessors)
----------------------------------------------------------------------

[SASS](/guides/styling-components/sass)

[LESS](/guides/styling-components/less)

SASS LESS

* * *

[CSS modules](/guides/styling-your-components#css-modules)
----------------------------------------------------------

[CSS Modules](/guides/styling-components/css-modules)

* * *

[CSS-in-JS](/guides/styling-your-components#css-in-js)
------------------------------------------------------

CSS-in-JS is a modern approach to styling components. Within the [Solid ecosystem](https://www.solidjs.com/ecosystem), there are various libraries and solutions available for working with CSS-in-JS, including but not limited to:

*   [Solid Styled Components](https://github.com/solidjs/solid-styled-components)
*   [Solid Styled JSX](https://github.com/solidjs/solid-styled-jsx)

CSS-in-JS libraries often come with their own set of APIs and methods for defining, updating, and applying styles dynamically. Many also offer features like theming, media queries, and server-side rendering support right out of the box.

**Note:** Before choosing a CSS-in-JS library, it is recommended to check its compatibility with Solid.

### [Macaron](/guides/styling-your-components#macaron)

[Macaron](/guides/styling-components/macaron)

* * *

[CSS frameworks](/guides/styling-your-components#css-frameworks)
----------------------------------------------------------------

CSS frameworks provide pre-styled components and utility classes to speed up development.

[Tailwind CSS](/guides/styling-components/tailwind)

[UnoCSS](/guides/styling-components/uno)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/styling-your-components.mdx&page=https://docs.solidjs.com/guides/styling-your-components)

Previous[← Fine-grained reactivity](/advanced-concepts/fine-grained-reactivity)

Next[SASS →](/guides/styling-components/sass)

Guides

State management
================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/state-management.mdx)

State management is the process of handling and manipulating data that affects the behavior and presentation of a web application. To build interactive and dynamic web applications, state management is a critical aspect of development. Within Solid, state management is facilitated through the use of reactive primitives.

These state management concepts will be shown using a basic counter example:

    import { createSignal } from "solid-js";
    function Counter() {  const [count, setCount] = createSignal(0);
      const increment = () => {    setCount((prev) => prev + 1);  };
      return (    <>      <div>Current count: {count()}</div>      <button onClick={increment}>Increment</button>    </>  );}

There are 3 elements to state management:

1.  **State (`count`)**: The _data_ that is used to determine what content to display to the user.
    
2.  **View (`<div>{count()}</div>`)**: The _visual representation_ of the state to the user.
    
3.  **Actions (`increment`)**: Any event that _modifies_ the state.
    

These elements work together to create a "one way data flow". When actions modify the state, the view is updated to show the current state to the user. One way data flow simplifies the management of data and user interactions, which provides a more predictable and maintainable application.

* * *

[Managing basic state](/guides/state-management#managing-basic-state)
---------------------------------------------------------------------

State is the source of truth for the application, and is used to determine what content to display to the user. State is represented by a [signal](/concepts/signals), which is a reactive primitive that manages state and notifies the UI of any changes.

To create a piece of state, you use the [`createSignal`](/reference/basic-reactivity/create-signal) function and pass in the initial value of the state:

    import { createSignal } from "solid-js";
    const [count, setCount] = createSignal(0);

To access the current value of the state, you call the signal's getter function:

    console.log(count()); // 0

To update the state, you use the signal's setter function:

    setCount((prev) => prev + 1);
    console.log(count()); // 1

With signals, you can create and manage state in a simple and straightforward manner. This allows you to focus on the logic of your application, rather than the complexities of state management. Additionally, signals are reactive, which means as long as it is accessed within a [tracking scope](/concepts/intro-to-reactivity#tracking-changes), it will always be up to date.

* * *

[Rendering state in the UI](/guides/state-management#rendering-state-in-the-ui)
-------------------------------------------------------------------------------

To achieve a dynamic user interface, the UI must be able to reflect the current state of the data. The UI is the visual representation of the state to the user, and is rendered using JSX. JSX provides a tracking scope, which keeps the view in sync with the state.

Revisiting the `Counter` component presented earlier, rendering the current state of `count` is done within the return body using JSX:

    return (  <>    <div>Current count: {count()}</div>    <button onClick={increment}>Increment</button>  </>);

To render the current state of `count`, the JSX expression `{count()}` is used. The curly braces indicate that the expression is a JavaScript expression, and the parentheses indicate that it is a function call. This expression is representative of a getter function for `count` and will retrieve the current state value. When the state is updated, the UI will be re-rendered to reflect the new state value.

Components in Solid only run once upon their initialization. After this initial render, if any changes are made to the state, only the portion of the DOM that is directly associated with the signal change will be updated.

The ability to update only the relevant portions of the DOM is a key feature of Solid that allows for performant and efficient UI updates. This is known as [fine-grained reactivity](/advanced-concepts/fine-grained-reactivity). Through reducing the re-rendering of entire components or larger DOM segments, UI will remain more efficient and responsive for the user.

* * *

[Reacting to changes](/guides/state-management#reacting-to-changes)
-------------------------------------------------------------------

When the state is updated, any updates are reflected in the UI. However, there may be times when you want to perform additional actions when the state changes.

For example, in the `Counter` component, you may want to display the doubled value of `count` to the user. This can be achieved through the use of [effects](/concepts/effects), which are reactive primitives that perform side effects when the state changes:

    import { createSignal, createEffect } from "solid-js";
    function Counter() {  const [count, setCount] = createSignal(0);  const [doubleCount, setDoubleCount] = createSignal(0); // Initialize a new state for doubleCount
      const increment = () => {    setCount((prev) => prev + 1);  };
      createEffect(() => {    setDoubleCount(count() * 2); // Update doubleCount whenever count changes  });
      return (    <>      <div>Current count: {count()}</div>      <div>Doubled count: {doubleCount()}</div> // Display the doubled count      <button onClick={increment}>Increment</button>    </>  );}

The [`createEffect`](/reference/basic-reactivity/create-effect) function sets up a function to perform side effects whenever the state is modified. Here, a side-effect refers to operations or updates that affect state outside of the local environment - like modifying a global variable or updating the DOM - triggered by those state changes.

In the `Counter` component, a `createEffect` function can be used to update the `doubleCount` state whenever the `count` state changes. This keeps the `doubleCount` state in sync with the `count` state, and allows the UI to display the doubled value of `count` to the user.

View this example of [`doubleCount` in a `createEffect` in the Solid Playground example](https://playground.solidjs.com/anonymous/b05dddaa-e62a-4c56-b745-5704f3a40194).

First renderAfter increment

    Current count: 0 Doubled count: 0

    Current count: 1 Doubled count: 2

* * *

[Derived state](/guides/state-management#derived-state)
-------------------------------------------------------

When you want to calculate new state values based on existing state values, you can use derived state. This is a useful pattern when you want to display a transformation of a state value to the user, but do not want to modify the original state value or create a new state value.

Derived values can be created using a signal within a function, which can be referred to as a [derived signal](/concepts/derived-values/derived-signals).

This approach can be used to simplify the `doubleCount` example above, where the additional signal and effect can be replaced with a derived signal:

    import { createSignal } from "solid-js"
    function Counter() {  const [count, setCount] = createSignal(0);  const [doubleCount, setDoubleCount] = createSignal(0);
      const increment = () => {    setCount((prev) => prev + 1);  };
      createEffect(() => {    setDoubleCount(count() * 2); // Update doubleCount whenever count changes  });
      const doubleCount = () => count() * 2
      return (    <>      <div>Current count: {count()}</div>      <div>Doubled count: {doubleCount()}</div>      <button onClick={increment}>Increment</button>    </>  );}

While this approach works for simple use cases, if `doubleCount` is used several times within a component or contains a computationally expensive calculation, it can lead to performance issues.

The derived signal would be re-evaluated not just each time `count` is changed, but also for each use of `doubleCount()`.

    import { createSignal } from "solid-js"
    function Counter() {  const [count, setCount] = createSignal(0)
      const increment = () => {    setCount(count() + 1)  }
      const doubleCount = () => count() * 2  const doubleCount = () => {    console.log('doubleCount called')    return count() * 2  }
      return (    <>      <div>Current count: {count()}</div>      <div>Doubled count: {doubleCount()}</div>      <div>Doubled count: {doubleCount()}</div>      <div>Doubled count: {doubleCount()}</div>      <button onClick={increment}>Increment</button>    </>  )}

    doubleCount calleddoubleCount calleddoubleCount called

For cases like this, you can use [Memos](/concepts/derived-values/memos) to store the value of `doubleCount`, which are also referred to as a memoized or cached value. When using a memo, the calculation will only run **once** when the value of `count` changes and can be accessed multiple times without re-evaluating for each additional use.

Using the [`createMemo`](/reference/basic-reactivity/create-memo) function, you can create a memoized value:

    import { createSignal, createMemo } from "solid-js"
    function Counter() {  const [count, setCount] = createSignal(0)
      const increment = () => {    setCount((prev) => prev + 1);  };
      const doubleCount = () => {    console.log('doubleCount called')    return count() * 2  }
      const doubleCountMemo = createMemo(() => {    console.log('doubleCountMemo called')    return count() * 2  })
      return (    <>      <div>Current count: {count()}</div>      <div>Doubled count: {doubleCount()}</div>      <div>Doubled count: {doubleCount()}</div>      <div>Doubled count: {doubleCount()}</div>      <div>Doubled count: {doubleCountMemo()}</div>      <div>Doubled count: {doubleCountMemo()}</div>      <div>Doubled count: {doubleCountMemo()}</div>      <button onClick={increment}>Increment</button>    </>  );}

    doubleCountMemo calleddoubleCount calleddoubleCount calleddoubleCount called

While accessed multiple times, the `doubleCountMemo` will only re-evaluate and log once. This is different from the derived signal, `doubleCount`, which is re-evaluated for each time it is accessed.

View a similar [example comparing a derived signal and a memo in the Solid Playground](https://playground.solidjs.com/anonymous/288736aa-d5ba-45f7-a01f-1ac3dcb1b479).

* * *

[Lifting state](/guides/state-management#lifting-state)
-------------------------------------------------------

When you want to share state between components, you can lift state up to a common ancestor component. While state is not tied to components, you may want to link multiple components together in order to access and manipulate the same piece of state. This can keep things synchronized across the [component tree](/concepts/components/basics#component-trees) and allow for more predictable state management.

For example, in the `Counter` component, you may want to display the doubled value of `count` to the user through a separate component:

    import { createSignal, createEffect, createMemo } from "solid-js";
    function App() {  const [count, setCount] = createSignal(0);  const [doubleCount, setDoubleCount] = createSignal(0);  const squaredCount = createMemo(() => count() * count());
      createEffect(() => {    setDoubleCount(count() * 2);  });
      return (    <>      <Counter count={count()} setCount={setCount} />      <DisplayCounts        count={count()}        doubleCount={doubleCount()}        squaredCount={squaredCount()}      />    </>  );}
    function Counter(props) {  const increment = () => {    props.setCount((prev) => prev + 1);  };
      return <button onClick={increment}>Increment</button>;}
    function DisplayCounts(props) {  return (    <div>      <div>Current count: {props.count}</div>      <div>Doubled count: {props.doubleCount}</div>      <div>Squared count: {props.squaredCount}</div>    </div>  );}
    export default App;

To share the `count` state between the `Counter` and `DisplayCounts` components, you can lift the state up to the `App` component. This allows the `Counter` and `DisplayCounts` functions to access the same piece of state, but also allows the `Counter` component to update the state through the `setCount` setter function.

When sharing state between components, you can access the state through [`props`](/concepts/components/props). Props values that are passed down from the parent component are read-only, which means they cannot be directly modified by the child component. However, you can pass down setter functions from the parent component to allow the child component to indirectly modify the parent's state.

info

To encourage one-way data flow, props are passed as read-only or immutable values from the parent to child components.

There are [specific utility functions for props](/concepts/components/props), however, that offer methods to modify props values.

* * *

[Managing complex state](/guides/state-management#managing-complex-state)
-------------------------------------------------------------------------

As applications grow in size and complexity, lifting state can become difficult to manage. To avoid the concept of prop drilling, which is the process of passing props through multiple components, Solid offers [stores](/concepts/stores) to manage state in a more scalable and maintainable manner.

To learn more about managing complex state, navigate to the [complex state management page](/guides/complex-state-management).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/state-management.mdx&page=https://docs.solidjs.com/guides/state-management)

Previous[← UnoCSS](/guides/styling-components/uno)

Next[Routing & navigation →](/guides/routing-and-navigation)

Guides

Routing & navigation
====================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/routing-and-navigation.mdx)

[Solid Router](/solid-router) simplifies routing in Solid applications to help developers manage navigation and rendering by defining routes using JSX or objects passed via props.

* * *

[Getting started](/guides/routing-and-navigation#getting-started)
-----------------------------------------------------------------

**1\. Install the router**

This package is not included by default.

npmpnpmyarnbundeno

    npm i @solidjs/router

    pnpm i @solidjs/router

    yarn add @solidjs/router

    bun i @solidjs/router

    deno add npm:@solidjs/router

**2\. Setup the `<Router>` component**

Start your application by rendering the [Router](/solid-router/reference/components/router) component. This component will match the URL to display the desired page.

    import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    render(() => <Router />, document.getElementById("root"));

**3\. Provide a root level layout**

This layout will not update on page change and is the ideal place for top-level navigation and [Context Providers](/concepts/context).

    import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    const App = (props) => (  <>    <h1>Site Title</h1>    {props.children}  </>);
    render(() => <Router root={App} />, document.getElementById("root"));

**4\. Add routes**

Each route is added to the `Router` using the [`Route`](/solid-router/reference/components/route) component. Here, you specify a path and a component to render once the user navigates to that path.

    import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    import Home from "./pages/Home";import Users from "./pages/Users";
    const App = (props) => (  <>    <h1>Site Title</h1>    {props.children}  </>);
    render(  () => (    <Router root={App}>      <Route path="/" component={Home} />      <Route path="/users" component={Users} />    </Router>  ),  document.getElementById("root"));

**5\. Create a CatchAll route (404 page)**

A catchall route can be used for pages not found at any nested level of the router. Using `*` will retrieve the rest of the path. Optionally, you can also add a parameter name.

    import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    import Home from "./pages/Home";import Users from "./pages/Users";import NotFound from "./pages/NotFound";
    const App = (props) => (  <>    <h1>Site Title</h1>    {props.children}  </>);
    render(  () => (    <Router root={App}>      <Route path="/" component={Home} />      <Route path="/users" component={Users} />      <Route path="*paramName" component={NotFound} />    </Router>  ),  document.getElementById("root"));

**6\. Create links to your routes**

The [`<A>`](/solid-router/reference/components/a) component provides navigation to an application's routes. Alternatively, you can use the [native anchor tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). However, the `<A>` component provides additional functionality including properties for CSS, `inactiveClass` and `activeClass`.

    import { render } from "solid-js/web";import { Router, Route, A } from "@solidjs/router";
    import Home from "./pages/Home";import Users from "./pages/Users";import NotFound from "./pages/NotFound";
    const App = (props) => (  <>    <nav>      <A href="/">Home</A>      <A href="/users">Users</A>    </nav>    <h1>Site Title</h1>    {props.children}  </>);
    render(  () => (    <Router root={App}>      <Route path="/" component={Home} />      <Route path="/users" component={Users} />      <Route path="*paramName" component={NotFound} />    </Router>  ),  document.getElementById("root"));

* * *

[Lazy-loading route components](/guides/routing-and-navigation#lazy-loading-route-components)
---------------------------------------------------------------------------------------------

The [`lazy`](/reference/component-apis/lazy) function postpones the loading of a component until it is navigated to.

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    const Users = lazy(() => import("./pages/Users"));const Home = lazy(() => import("./pages/Home"));
    const App = (props) => (  <>    <h1>Site Title</h1>    {props.children}  </>);
    render(  () => (    <Router root={App}>      <Route path="/users" component={Users} />      <Route path="/" component={Home} />    </Router>  ),  document.getElementById("root"));

* * *

[Dynamic routes](/guides/routing-and-navigation#dynamic-routes)
---------------------------------------------------------------

If a path is unknown ahead of time, you can treat part of the path as a flexible parameter.

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    const Users = lazy(() => import("./pages/Users"));const User = lazy(() => import("./pages/User"));const Home = lazy(() => import("./pages/Home"));
    render(  () => (    <Router>      <Route path="/users" component={Users} />      <Route path="/users/:id" component={User} />      <Route path="/" component={Home} />    </Router>  ),  document.getElementById("root"));

The colon indicates that `id` can be any string, and as long as the URL fits that pattern, the `<User>` component will show.

You can then access that `id` from within a route component with [`useParams`](/solid-router/reference/primitives/use-params).

**Note on animation/transitions**: Routes that share the same path will be treated as the same route. If you want to force re-render, you can wrap your component in a keyed [`<Show>`](/reference/components/show):

    <Show when={params.something} keyed>    <MyComponent></Show>

### [Accessing parameters](/guides/routing-and-navigation#accessing-parameters)

In cases where you may need to access a dynamic route's parameters within your components, the [`useParams`](/solid-router/reference/primitives/use-params) primitive is available. Once the parameters have been accessed using `useParams`, they can be used within your component:

    import { useParams } from "@solidjs/router";
    const User = () => {  const params = useParams(); // Retrieve the dynamic route parameters  // Now you can access the id parameter as params.id
      return (    <p>      This is the user with the id of <code>{params.id}</code>    </p>  );};

`useParams` can be especially useful with other Solid primitives, such as [`createResource`](/reference/basic-reactivity/create-resource) and [`createSignal`](/reference/basic-reactivity/create-signal), which can create dynamic behaviors based on the route parameters.

    import { createResource } from "solid-js";import { useParams } from "@solidjs/router";
    async function fetchUser(id) {  const response = await fetch(    `https://jsonplaceholder.typicode.com/users/${id}`  );  return response.json();}
    const User = () => {  const params = useParams();  const [data] = createResource(() => params.id, fetchUser); // Pass the id parameter to createResource
      return (    <div>      <Show when={!data.loading} fallback={<p>Loading...</p>}>        <div>          <p>Name: {data().name}</p>          <p>Email: {data().email}</p>          <p>Phone: {data().phone}</p>        </div>      </Show>    </div>  );};

Every time the `id` parameter changes in this example, the `fetchUser` function is called to fetch the new user data.

### [Validating routes](/guides/routing-and-navigation#validating-routes)

Each path parameter can be validated using a `MatchFilter`. Instead of checking for the presence of a parameter, this allows for more complex routing descriptions:

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";import type { SegmentValidators } from "./types";
    const User = lazy(() => import("./pages/User"));
    const filters: MatchFilters = {  parent: ["mom", "dad"], // allow enum values  id: /^\d+$/, // only allow numbers  withHtmlExtension: (v: string) => v.length > 5 && v.endsWith(".html"), // only `*.html` extensions wanted};
    render(() => (  <Router>    <Route      path="/users/:parent/:id/:withHtmlExtension"      component={User}      matchFilters={filters}    />  </Router>), document.getElementById("root"));

In this example, the `matchFilters` prop provides a way to validate the `parent`, `id` and `withHtmlExtension` parameters against the filters defined in `filters`. If the validation fails, the route will not match.

In this example:

*   `/users/mom/123/contact.html` will match,
*   `/users/dad/123/about.html` will match,
*   `/users/aunt/123/contact.html` will **not** match as `:parent` is not 'mom' or 'dad',
*   `/users/mom/me/contact.html` will **not** match as `:id` is not a number,
*   `/users/dad/123/contact` will **not** match as `:withHtmlExtension` is missing `.html`.

### [Optional parameters](/guides/routing-and-navigation#optional-parameters)

Parameters can be specified as optional by adding a question mark to the end of the parameter name:

    // Matches stories and stories/123 but not stories/123/comments<Route path="/stories/:id?" component={Stories} />

### [Wildcard routes](/guides/routing-and-navigation#wildcard-routes)

To match any descendent routes within a given path, you can use the wildcard token (`*`). This can be used to represent any value in that segment of the path.

    // Will match any path beginning with foo (eg. foo/, foo/a/, foo/a/b/c)<Route path="foo/*" component={Foo} />

To expose the wildcard portion to the component as a parameter, you can name it:

    <Route path="foo/*any" component={Foo} />

Wildcard tokens **must** be the last part of the path; `foo/*any/bar` will not create any routes.

### [Multiple paths](/guides/routing-and-navigation#multiple-paths)

The `Routes` component also supports defining multiple paths using an array. This avoids a route rerendering when switching between two or more locations that it matches:

    // Navigating from "/login" to "/register" will not cause the component to re-render<Route path={["login", "register"]} component={Login} />

* * *

[Nested routes](/guides/routing-and-navigation#nested-routes)
-------------------------------------------------------------

Only leaf `<Route>` nodes (the innermost `<Route>` components) are given a route.

    <Route path="/users" component={Users}>  <Route path="/:id" component={User} /></Route>

The following two route definitions both match the same URL `/users/:id` and render the same component:

    <Route path="/users/:id" component={User} />
    <Route path="/users">  <Route path="/:id" component={User} /></Route>

If you want to make the parent its own route, you have to specify it separately:

    <Route path="/users" component={Users} /><Route path="/users/:id" component={User} />
    // or
    <Route path="/users">  <Route path="/" component={Users} />  <Route path="/:id" component={User} /></Route>

You can also take advantage of nesting by using `props.children` passed to the route component.

    function PageWrapper(props) {  return (    <div>      <h1> We love our users! </h1>      {props.children}      <A href="/">Back Home</A>    </div>  );}
    <Route path="/users" component={PageWrapper}>  <Route path="/" component={Users} />  <Route path="/:id" component={User} /></Route>;

The routes are still configured the same, however now their components will appear inside the parent component where the `props.children` is declared.

Routes can also be nested indefinitely. This example will only render the route `/layer1/layer2`, which will be nested in 3 divs.

    <Route  path="/"  component={(props) => <div>Outermost layer starts here {props.children}</div>}>  <Route    path="layer1"    component={(props) => <div>Second layer {props.children}</div>}  >    <Route path="layer2" component={() => <div>Innermost layer</div>} />  </Route></Route>

* * *

[Preload functions](/guides/routing-and-navigation#preload-functions)
---------------------------------------------------------------------

With preload functions, data fetching is started parallel to loading the route, so it can be used as soon as possible. The preload function prevents this by being called once the Route is loaded, or eagerly if links are hovered.

As the only argument, the preload function is passed an object that is used to access route information:

    import { lazy } from "solid-js";import { Route } from "@solidjs/router";
    const User = lazy(() => import("./pages/users/[id].js"));
    // preload functionfunction preloadUser({ params, location }) {  // do preload}

The preload function is then passed in the `<Route>` definition:

    <Route path="/users/:id" component={User} preload={preloadUser} />

* * *

You can export preload functions and data wrappers that correspond to routes from a dedicated `[route].data.js` or `[route].data.ts` file. This pattern provides a way to import the data function without loading anything else.

    // src/pages/users/[id].data.jsimport { query } from "@solidjs/router";
    export const getUser = query(async (id) => {  return (await fetch(`https://swapi.tech/api/people/${id}/`)).json();}, "getUser");
    export function preloadUser({ params, location, intent }) {  return getUser(params.id);}

`preloadUser` is passed an object which contains `params`, `location` and `intent`.

Please note that while it is best practice to name these files as `[id].data.js`, you can still name them as `route.data.js`.

The value of a preload function is passed to the page component when called at any time other than "preload". This means you can initialize the page, or use [Data APIs](/solid-router/reference/data-apis/create-async).

info

To prevent a fetch from happening more than once, or to trigger a refetch, you can use the [`query` function](/solid-router/reference/data-apis/query).

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";import { preloadUser } from "./pages/users/[id].data.js";
    const Home = lazy(() => import("./pages/Home"));const User = lazy(() => import("./pages/users/[id]"));
    render(  () => (    <Router>      <Route path="/" component={Home} />      <Route path="/users/:id" component={User} preload={preloadUser} />    </Router>  ),  document.getElementById("root"));

`[id].jsx` contains the component that gets rendered. When you wrap the function within [`createAsync`](/solid-router/reference/data-apis/create-async) with the imported function, it will yield [a signal](/routes/concepts/signals) once the anticipated promise resolves.

    // [id].jsximport { createAsync } from "@solidjs/router";import { getUser } from "./[id].data";
    export default function Users(props) {  console.log("Users.props", props);  const user = createAsync(() => getUser(props.params.id));  return (    <>      <h1>User</h1>      <div>        <pre>{JSON.stringify(user(), null, 2)}</pre>      </div>    </>  );}

To learn more about routing your Solid applications, visit the [Solid Router documentation](/solid-router).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/routing-and-navigation.mdx&page=https://docs.solidjs.com/guides/routing-and-navigation)

Previous[← State management](/guides/state-management)

Next[Complex state management →](/guides/complex-state-management)

Guides

Complex state management
========================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/complex-state-management.mdx)

As applications grow and start to involve many components, more intricate user interactions, and possibly communication with backend services, you may find that staying organized with more [basic state management methods](/guides/state-management) can become difficult to maintain.

Consider this example:

    import { For, createSignal, Show, createMemo } from "solid-js"
    const App = () => {  const [tasks, setTasks] = createSignal([])  const [numberOfTasks, setNumberOfTasks] = createSignal(tasks.length)  const completedTasks = createMemo(() => tasks().filter((task) => task.completed))  let input
      const addTask = (text) => {    setTasks([...tasks(), { id: tasks().length, text, completed: false }])    setNumberOfTasks(numberOfTasks() + 1)  }  const toggleTask = (id) => {    setTasks(      tasks().map((task) =>        task.id !== id ? task : { ...task, completed: !task.completed }      )    )  }
      return (    <>      <h1>My list</h1>      <span>You have {numberOfTasks()} task(s) today!</span>      <div>        <input ref={input} />        <button          onClick={(e) => {            if (!input.value.trim()) return            addTask(input.value)            input.value = ""          }}        >          Add Task        </button>      </div>      <For each={tasks()}>        {(task) => {          const { id, text } = task          console.log(`Creating ${text}`)          return (            <div>              <input                type="checkbox"                checked={task.completed}                onChange={[toggleTask, id]}              />              <span                style={{                  "text-decoration": task.completed ? "line-through" : "none",                }}              >                {text}              </span>            </div>          )        }}      </For>    </>  )}
    export default App

There are several challenges to managing state in this way:

*   Increased verbosity with the multiple `createSignal` calls for `tasks`, `numberOfTasks`, as well as a `createMemo` function for `completedTasks`. Additionally, with each state update, there requires manual updates to other related states which risks the application becoming out of sync.
    
*   While Solid is optimized, this components design leads to frequent recalculations, such as updating `completedTasks` with every toggle action, which can negatively impact performance. In addition, the dependence on the component's logic on the current state for `numberOfTasks` and `completedTasks` can complicate code understanding.
    

As an application like this scales, managing state in this manner becomes even more complex. Introducing other dependent state variables would require updates across the _entire_ component which would likely introduce more errors. This would likely make it more difficult to separate specific functionalities into distinct, reusable components without transferring a substantial portion of state management logic, as well.

* * *

[Introducing stores](/guides/complex-state-management#introducing-stores)
-------------------------------------------------------------------------

Through recreating this list using Stores, you will see how stores can improve the readability and management of your code.

If you're new to the concept of stores, see the [stores section](/concepts/stores).

* * *

[Creating a store](/guides/complex-state-management#creating-a-store)
---------------------------------------------------------------------

To reduce the amount of signals that were used in the original example, you can do the following using a store:

    import { createStore } from "solid-js/store"
    const App = () => {  const [state, setState] = createStore({    tasks: [],    numberOfTasks: 0,  })}
    export default App

Through using a store, you no longer need to keep track of separate signals for `tasks`, `numberOfTasks`, and `completedTasks`.

* * *

[Accessing state values](/guides/complex-state-management#accessing-state-values)
---------------------------------------------------------------------------------

Once you have created your store, the values can be accessed directly through the first value returned by the `createStore` function:

    import { createStore } from "solid-js/store"
    const App = () => {  const [state, setState] = createStore({    tasks: [],    numberOfTasks: 0,  })  return (    <>      <h1>My Task List for Today</h1>      <span>You have {state.numberOfTasks} task(s) for today!</span>    </>  )}
    export default App

Through `state.numberOfTasks`, the display will now show the store's value held in the `numberOfTasks` property.

* * *

[Making changes to the store](/guides/complex-state-management#making-changes-to-the-store)
-------------------------------------------------------------------------------------------

When you want to modify your store, you use the second element returned by the `createStore` function. This element allows you to make modifications to the store, letting you both add new properties and update existing ones. However, because properties within a store are created lazily, setting a property in the component function body without creating a tracking scope will **not** update the value. To create the signal so it reactively updates, you have to access the property within a tracking scope, such as using a [`createEffect`](/reference/basic-reactivity/create-effect):

    // not reactivesetState("numberOfTasks", state.tasks.length)
    // reactivecreateEffect(() => {  setState("numberOfTasks", state.tasks.length)})

### [Adding to an array](/guides/complex-state-management#adding-to-an-array)

To add an element to an array, in this case the new task, you can append to the next index of the array through `state.tasks.length`. By pinpointing the `tasks` key in combination with the upcoming position, the new task is added to the end of the array.

    const addTask = (text) => {  setState("tasks", state.tasks.length, {    id: state.tasks.length,    text,    completed: false,  })}

The setter in stores follow [path syntax](/concepts/stores#path-syntax-flexibility): `setStore("key", value)`. In the `addTask` function the `tasks` array is appended through `setState("tasks", state.tasks.length, { id: state.tasks.length, text, completed: false })`, an example of this in action.

#### [Mutating state with `produce`](/guides/complex-state-management#mutating-state-with-produce)

In situations where you need to make multiple `setState` calls and target multiple properties, you can simplify your code and improve readability by using Solid's [`produce`](/concepts/stores#store-updates-with-produce) utility function.

Something such as toggle function:

    const toggleTask = (id) => {  const currentCompletedStatus = state.tasks[id].completed  setState(    "tasks",    (task) => task.id === id,    "completed",    !currentCompletedStatus  )}

Can be simplified using `produce`:

    import { produce } from "solid-js/store"
    const toggleTask = (id) => {  setState(    "tasks",    (tasks) => tasks.id === id,    produce((task) => {      task.completed = !task.completed    })  )}
    // You can also rewrite the `addTask` function through produceconst addTask = (text) => {  setState(    "tasks",    produce((task) => {      task.push({ id: state.tasks.length, text, completed: false })    })  )}

Read about some of the other [advantages to using `produce`](/concepts/stores#store-updates-with-produce).

info

Another benefit to working with `produce` is that it offers a way to modify a store without having to make multiple `setStore` calls.

    // without producebatch(() => {setState(0, "text", "I'm updated text")setState(0, "completed", true)})
    // with producesetState(0,produce((task) => {  task.text = "I'm updated text";  task.completed = true;}))

The updated example:

    import { For, createEffect, Show } from "solid-js"import { createStore, produce } from "solid-js/store"
    const App = () => {  let input // lets you target the input value  const [state, setState] = createStore({    tasks: [],    numberOfTasks: 0,  })
      const addTask = (text) => {    setState("tasks", state.tasks.length, {      id: state.tasks.length,      text,      completed: false,    })  }
      const toggleTask = (id) => {    setState(      "tasks",      (tasks) => tasks.id === id,      produce((task) => {        task.completed = !task.completed      })    )  }
      createEffect(() => {    setState("numberOfTasks", state.tasks.length)  })
      return (    <>      <div>        <h1>My Task List for Today</h1>        <span>You have {state.numberOfTasks} task(s) for today!</span>      </div>      <input ref={input} />      <button        onClick={(e) => {          if (!input.value.trim()) return          addTask(input.value)          input.value = ""        }}      >        Add Task      </button>      <For each={state.tasks}>        {(task) => {          const { id, text } = task          return (            <div>              <input                type="checkbox"                checked={task.completed}                onChange={() => toggleTask(task.id)}              />              <span>{text}</span>            </div>          )        }}      </For>    </>  )}
    export default App

* * *

[State sharing](/guides/complex-state-management#state-sharing)
---------------------------------------------------------------

As applications grow and become more complex, sharing state between components can become a challenge. Passing state and functions from parent to child components, especially across multiple levels, is commonly referred to as "prop drilling". Prop drilling can lead to verbose, hard-to-maintain code, and can make the data flow in an application more difficult to follow. To solve this problem and allow for a more scalable and maintainable codebase, Solid provides [context](/concepts/context).

To use this, you need to create a context. This context will have a default value and can be consumed by any _descendant_ component.

    import { createContext } from "solid-js"
    const TaskContext = createContext()

Your components will be wrapped with the `Provider` from the context, and passed with the values that you wish to share.

    import { createStore } from "solid-js/store"
    const TaskApp = () => {  const [state, setState] = createStore({    tasks: [],    numberOfTasks: 0,  })
      return (    <TaskContext.Provider value={{ state, setState }}>      {/* Your components */}    </TaskContext.Provider>  )}

In any descendent component, you can consume the context values using `useContext`:

    import { useContext } from "solid-js"
    const TaskList = () => {  const { state, setState } = useContext(TaskContext)
      // Now you can use the shared state and functions}

For a deeper dive, please refer to our dedicated [page on context](/concepts/context).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/complex-state-management.mdx&page=https://docs.solidjs.com/guides/complex-state-management)

Previous[← Routing & navigation](/guides/routing-and-navigation)

Next[Fetching data →](/guides/fetching-data)

Guides

Fetching data
=============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/fetching-data.mdx)

For most modern web applications, data fetching is a common task. Solid has a built-in utility, `createResource` , that was created to simplify data fetching.

* * *

[What is `createResource` ?](/guides/fetching-data#what-is-createresource-)
---------------------------------------------------------------------------

`createResource` is a specialized [signal](/concepts/signals) designed specifically for managing asynchronous data fetching. It wraps around the async operations, providing a way to handle various states: loading, success, and error.

This function is non-blocking, meaning that `createResource` guarantees that the application remains responsive, even during the retrieval of information. Because of this, common pitfalls of traditional async handling, such as unresponsive UIs during data fetching can be avoided.

* * *

[Using `createResource`](/guides/fetching-data#using-createresource)
--------------------------------------------------------------------

`createResource` requires a function that returns a promise as its argument. Upon the call, `createResource` returns a signal which has reactive properties like loading, error, latest, etc. These properties can be used to conditionally render JSX based on the current reactive state.

The fetcher function that is created makes a call to get a user, which is then passed in as an argument to `createResource`.

The signal returned from the `createResource` provides the properties that can assist with conditional rendering based on the current reactive state:

*   `state`: The current status of the operation (`unresolved`, `pending`, `ready`, `refreshing`, or `errored`).
*   `loading`: Indicates that the operation is currently in progress via a `boolean`.
*   `error`: If the operation fails for any reason, this property will contain information about this error. It may be a string with an error message, or an object with more detailed information.
*   `latest`: The most recent data or result returned from the operation.

When there is a change in the source signal, an internal fetch process is triggered to retrieve new data based on this change.

    import { createSignal, createResource, Switch, Match, Show } from "solid-js";
    const fetchUser = async (id) => {  const response = await fetch(`https://swapi.dev/api/people/${id}/`);  return response.json();}
    function App() {  const [userId, setUserId] = createSignal();  const [user] = createResource(userId, fetchUser);
      return (    <div>      <input        type="number"        min="1"        placeholder="Enter Numeric Id"        onInput={(e) => setUserId(e.currentTarget.value)}      />      <Show when={user.loading}>        <p>Loading...</p>      </Show>      <Switch>        <Match when={user.error}>          <span>Error: {user.error}</span>        </Match>        <Match when={user()}>          <div>{JSON.stringify(user())}</div>        </Match>      </Switch>    </div>  );}

Whenever the signal value, `userId`, changes, the internal fetch method `fetchUser` gets triggered. The properties of the `user` resource allow for conditional rendering based on the different states of the fetch process.

The `Switch/Match` construct provides one way to manage these conditions. When the fetch succeeds and user data is retrieved, the `user()` condition becomes active, and its related block executes. However, if there's an error while fetching, the `user.error` block becomes `true`, leading to its corresponding `Match` block being shown.

tip

If you anticipate errors, you may want to wrap `createResource` in an [ErrorBoundary](/reference/components/error-boundary).

In addition to the `error` property, the `loading` property offers a way to display a loading state to the user during the fetch operation.

* * *

[Calling multiple async events](/guides/fetching-data#calling-multiple-async-events)
------------------------------------------------------------------------------------

Although you can use `createResource` independently, Solid provides an alternative method for synchronizing the display of multiple asynchronous events. `Suspense` is a component in Solid designed to act as a boundary. It allows you to display a fallback placeholder while waiting for all asynchronous events to resolve, preventing the display of partially loaded content:

    import { createSignal, createResource, Switch, Match, Suspense } from "solid-js";
    const fetchUser = async (id) => {  const response = await fetch(`https://swapi.dev/api/people/${id}/`);  return response.json();}
    function App() {  const [userId, setUserId] = createSignal();  const [user] = createResource(userId, fetchUser);
      return (    <div>    <input      type="number"      min="1"      placeholder="Enter Numeric Id"      onInput={(e) => setUserId(e.currentTarget.value)}    />      <Suspense fallback={<div>Loading...</div>}>        <Switch>          <Match when={user.error}>            <span>Error: {user.error.message}</span>          </Match>          <Match when={user()}>            <div>{JSON.stringify(user())}</div>          </Match>        </Switch>      </Suspense>    </div>  );}

`Suspense` has the ability to identify asynchronous reads within its descendants and act accordingly. This feature helps to remove any intermediate components that may otherwise be displayed during partial loading states. Additionally, you can nest as many components as needed within `Suspense` but only the closest ancestor will switch to the `fallback` state when a loading state is detected.

[View on Eraser](https://app.eraser.io/workspace/maDvFw5OryuPJOwSLyK9?elements=kMt6qc0qF9MlG2K9P28pOQ)

* * *

[Dynamic data handling](/guides/fetching-data#dynamic-data-handling)
--------------------------------------------------------------------

With the second output of `createResource`, there are 2 powerful methods designed to enhance and simplify some complex aspects of data management:

### [`mutate`](/guides/fetching-data#mutate)

In situations where immediate feedback or responsiveness is important, the `mutate` method offers "optimistic mutations." These mutations provide instant feedback, even while background processes, such as server confirmations, are still in progress.

This functionality is particularly valuable in applications like task lists. For example, when users input a new task and click the `Add` button, the list will refresh immediately, regardless of the ongoing data communication with the server.

    import { For, createResource } from "solid-js"
    function TodoList() {  const [tasks, { mutate }] = createResource(fetchTasksFromServer);
      return (    <>      <ul>        <For each={tasks()}>          {(task) => (            <li>{task.name}</li>          )}        </For>      </ul>      <button        onClick={() => {          mutate((todos) => [...todos, "do new task"]); // add todo for user          // make a call to send to database        }}      >        Add Task      </button>    </>  );}

### [`refetch`](/guides/fetching-data#refetch)

When real-time feedback is necessary, the `refetch` method can be used to reload the current query regardless of any changes. This method can be particularly useful when data is constantly evolving, such as with real-time financial applications.

    import { createResource, onCleanup } from "solid-js"
    function StockPriceTicker() {  const [prices, { refetch }] = createResource(fetchStockPrices);
      const timer = setInterval(() => {    refetch()  }, 1000);  onCleanup(() => clearInterval(timer))}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/fetching-data.mdx&page=https://docs.solidjs.com/guides/fetching-data)

Previous[← Complex state management](/guides/complex-state-management)

Next[Testing →](/guides/testing)

Guides

Testing
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/testing.mdx)

Testing your Solid applications is important to inspiring confidence in your codebase through preventing regressions.

* * *

[Getting started](/guides/testing#getting-started)
--------------------------------------------------

### [Testing packages explanations](/guides/testing#testing-packages-explanations)

*   [`vitest`](https://vitest.dev) - testing framework that includes runner, assertion engine, and mocking facilities
*   [`jsdom`](https://github.com/jsdom/jsdom) - a virtual DOM used to simulate a headless browser environment running in node
*   [`@solidjs/testing-library`](https://github.com/solidjs/solid-testing-library/blob/main/README.md) - a library to simplify testing components, directives, and primitives, with automatic cleanup
*   [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro) - used to simulate user events that are closer to reality
*   [`@testing-library/jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom) - augments expect with helpful matchers

### [Adding testing packages](/guides/testing#adding-testing-packages)

The recommended testing framework for Solid applications is [vitest](https://vitest.dev).

To get started with vitest, install the following development dependencies:

npmpnpmyarnbundeno

    npm i vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D

    pnpm i vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D

    yarn add vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D

    bun i vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -d

    deno add npm:vitest jsdom @solidjs/testing-library @testing-library/user-event @testing-library/jest-dom -D

### [Testing configuration](/guides/testing#testing-configuration)

In your `package.json` add a `test` script calling `vitest`:

      "scripts": {    "test": "vitest"  }

It is not necessary to add `@testing-library/jest-dom` to the testing options in `vite.config`, since `vite-plugin-solid` automatically detects and loads it if present.

#### [TypeScript configuration](/guides/testing#typescript-configuration)

If using TypeScript, add `@testing-library/jest-dom` to `tsconfig.json#compilerOptions.types`:

      "compilerOptions": {    // ...    "jsx": "preserve",    "jsxImportSource": "solid-js",    "types": ["vite/client", "@testing-library/jest-dom"]  }

#### [SolidStart configuration](/guides/testing#solidstart-configuration)

When using [SolidStart](/solid-start), create a `vitest.config.ts` file:

    import solid from "vite-plugin-solid"import { defineConfig } from "vitest/config"
    export default defineConfig({  plugins: [solid()],  resolve: {    conditions: ["development", "browser"],  },})

* * *

[Writing tests](/guides/testing#writing-tests)
----------------------------------------------

### [Components testing](/guides/testing#components-testing)

Testing components involves three main things:

*   Rendering the component
*   Interacting with the component
*   Validating assertions

To write tests for your components, create a `[name].test.tsx` file. The purpose of this file is to describe the intended behavior from a user's perspective in the form of unit tests:

Counter.test.jsxCounter.jsx

    import { test, expect } from "vitest"import { render } from "@solidjs/testing-library"import userEvent from "@testing-library/user-event"import { Counter } from "./Counter"
    const user = userEvent.setup()
    test("increments value", async () => {  const { getByRole } = render(() => <Counter />)  const counter = getByRole('button')  expect(counter).toHaveTextContent("1")  await user.click(counter)  expect(counter).toHaveTextContent("2")})

    export const Counter = () => {  const [count, setCount] = createSignal(1);  return (    <button onClick={() => setCount(count() + 1)}>      {count()}    </button>  );}

In the `test.jsx` file, [the `render` call from `@solidjs/testing-library`](https://testing-library.com/docs/solid-testing-library/api#render) is used to render the component and supply the props and context. To mimic a user interaction, `@testing-library/user-event` is used. The [`expect` function provided by `vitest`](https://vitest.dev/api/expect.html) is extended with a [`.ToHaveTextContent("content")` matcher from `@testing-library/jest-dom`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavetextcontent) to supply what the expected behavior is for this component.

To run this test, use the following command:

npmpnpmyarnbundeno

    npm run test

    pnpm test

    yarn test

    bun run test

    deno run test

If running the command is successful, you will get the following result showing whether the tests have passed or failed:

    [RUN] v1.4.0 solid-app/src/components/Counter.test.tsx
     ✓ src/components/Counter.test.tsx (1)   ✓ <Counter /> (1)     ✓ increments value
     Test Files  1 passed (1)      Tests  1 passed (1)   Start at  16:51:19   Duration  4.34s (transform 1.01s, setup 205ms, collect 1.54s, tests 155ms,environment 880ms, prepare 212ms)

#### [Rendering the component](/guides/testing#rendering-the-component)

The `render` function from `@solidjs/testing-library` creates the testing environment within the `test.tsx` file. It sets up the container, rendering the component within it, and automatically registers it for clean-up after a successful test. Additionally, it manages wrapping the component in contexts as well as setting up a router.

    const renderResult = render(  () => <MyComponent />, // @solidjs/testing-library requires a function  { // all options are optional    container, // manually set up your own container, will not be handled    baseElement, // parent of container in case it is not supplied    queries, // manually set up custom queries    hydrate, // set to `true` to use hydration    wrapper, // reusable wrapper component to supply context    location, // sets up a router pointed to the location if provided  })const {  asFragment, // function returning the contents of the container  baseElement, // the parent of the container  container, // the container in which the component is rendered  debug, // a function giving some helpful debugging output  unmount, // manually removing the component from the container  ...queries, // functions to select elements from the container} = renderResult

##### [Using the right queries](/guides/testing#using-the-right-queries)

Queries are helpers used to find elements within a page.

                                              ⎧ Role                              get ⎫  By   ⎪ DisplayValue                            query ⎬       ⎨ LabelText                             find ⎭ AllBy ⎪ Text                                          ⎩ ...

The prefixes (`get`, `query`, and `find`) and the middle portion (`By` and `AllBy`) depend on if the query should wait for an element to appear (or not), whether it should throw an error if the element cannot be found, and how it should handle multiple matches:

*   **getBy**: synchronous, throws if not found or more than 1 matches
*   **getAllBy**: synchronous, throws if not found, returns array of matches
*   **queryBy**: synchronous, null if not found, error if more than 1 matches
*   **queryAllBy**: synchronous, returns array of zero or more matches
*   **findBy**: asynchronous, rejected if not found within 1000ms or more than 1 matches, resolves wth element if found
*   **findAllBy**: asynchronous, rejected if not found within 1000ms, resolves with array of one or more element(s)

By default, queries should start with `get...`. If there are multiple elements matching the same query, `getAllBy...` should be used, otherwise use `getBy...`.

There are two exceptions when you should **not** start with `get...`:

1.  If the `location` option is used or the component is based on resources, the router will be lazy-loaded; in this case, the first query after rendering needs to be `find...`
2.  When testing something that is _not_ rendered, you will need to find something that will be rendered at the same time; after that, use `queryAllBy...` to test if the result is an empty array (`[]`).

The query's suffix (Role, LabelText, ...) depends on the characteristics of the element you want to select. If possible, try to select for accessible attributes (roughly in the following order):

*   **Role**: [WAI ARIA](https://www.w3.org/WAI/standards-guidelines/aria) landmark roles which are automatically set by semantic elements like `<button>` or otherwise use `role` attribute
*   **LabelText**: elements that are described by a label wrapping the element, or by an `aria-label` attribute, or is linked with `for`\- or `aria-labelledby` attribute
*   **PlaceholderText**: input elements with a `placeholder` attribute
*   **Text**: searches text within all text nodes in the element, even if split over multiple nodes
*   **DisplayValue**: form elements showing the given value (e.g. select elements)
*   **AltText**: images with alt text
*   **Title**: HTML elements with the `title` attribute or SVGs with the `<title>` tag containing the given text
*   **TestId**: queries by the `data-testid` attribute; a different data attribute can be setup via `configure({testIdAttribute: 'data-my-test-attribute'})`; TestId-queries are _not accessible_, so use them only as a last resort.

For more information, check the [testing-library documentation](https://testing-library.com/docs/queries/about).

#### [Testing through Portal](/guides/testing#testing-through-portal)

Solid allows components to break through the DOM tree structure using [`<Portal>`](/reference/components/portal). This mechanism will still work in testing, so the content of the portals will break out of the testing container. In order to test this content, make sure to use the `screen` export to query the contents:

Toast.test.jsxToast.jsx

    import { test, expect } from "vitest"import { render, screen } from "@solidjs/testing-library"import { Toast } from "./Toast"
    test("increments value", async () => {  render(() => <Toast><p>This is a toast</p></Toast>)  const toast = screen.getByRole("log")  expect(toast).toHaveTextContent("This is a toast")})

    import { Portal } from "solid-js/web";
    export const Toast = (props) => {  return (    <Portal>      <div class="toast" role={props.role ?? "log"}>        {props.children}      </div>    </Portal>  );}

#### [Testing in context](/guides/testing#testing-in-context)

If a component relies on some context, to wrap it use the `wrapper` option:

    import { test, expect } from "vitest"import { render } from "@solidjs/testing-library"import { DataContext, DataConsumer } from "./Data"
    const wrapper = (props) => <DataContext value="test" {...props} />
    test("receives data from context", () => {  const { getByText } = render(() => <DataConsumer />, { wrapper })  expect(getByText("test")).toBeInTheDocument()});

Wrappers can be re-used if they are created externally. For wrappers with different values, a higher-order component creating the required wrappers can make the tests more concise:

    const createWrapper = (value) => (props) =>  <DataContext value={value} {...props}/>

info

If using multiple providers, [solid-primitives has `<MultiProvider>`](https://primitives.solidjs.community/package/context#multiprovider) to avoid nesting multiple levels of providers

##### [Testing routes](/guides/testing#testing-routes)

For convenience, the `render` function supports the `location` option that wraps the rendered component in a router pointing at the given location. Since the `<Router>` component is lazily loaded, the first query after rendering needs to be asynchronous, i.e. `findBy...`:

    const { findByText } = render(  () => <Route path="/article/:id" component={Article} />,  { location: "/article/12345" });expect(await findByText("Article 12345")).toBeInTheDocument()

#### [Interacting with components](/guides/testing#interacting-with-components)

Many components are not static, rather they change based on user interactions. To test these changes, these interactions need to be simulated. To simulate user interactions, `@testing-library/user-event` library can be used. It takes care of the usual order of events as they would occur in actual user interactions. For example, this means that a `click` event from the user would be accompanied by `mousemove`, `hover`, `keydown`, `focus`, `keyup`, and `keypress`.

The most convenient events to test are typically `click`, `keyboard` and `pointer` (to simulate touch events). To dive deeper into these events, you can learn about them in the [`user-event` documentation](https://testing-library.com/docs/user-event/intro).

##### [Using timers](/guides/testing#using-timers)

If you require a fake timer and want to use `vi.useFakeTimers()` in your tests, it must set it up with an `advanceTimers` option:

    import { vi } from "vitest"
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    vi.useFakeTimers()
    describe("pre-login: sign-in", () => {  const { getByRole, getByLabelText } = render(() => <User />)  const signUp = getByRole('button', { text: 'Sign-in' })  // use convenience API click:  user.click(signUp)  const name = getByLabelText('Name')  // use complex keyboard input:  user.keyboard(name, "{Shift}test{Space}{Shift}user")  const password = getByLabelText('Password')  user.keyboard(name, "secret")  const login = getByRole('button', { text: 'Login' })  // use touch event  user.pointer([    { keys: "[TouchA]" target: login },    { keys: "[/TouchA]", target: login }  ])});

#### [Validating assertions](/guides/testing#validating-assertions)

`vitest` comes with the `expect` function to facilitate assertions that works like:

    expect(subject)[assertion](value)

The command supports assertions like `toBe` (reference comparison) and `toEqual` (value comparison) out of the box. For testing inside the DOM, the package `@testing-library/jest-dom` augments it with some helpful additional assertions:

*   [`.toBeInTheDocument()`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeinthedocument) - checks if the element actually exists in the DOM
*   [`.toBeVisible()`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobevisible) - checks if there is no reason the element should be hidden
*   [`.toHaveTextContent(content)`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavetextcontent) - checks if the text content matches
*   [`.toHaveFocus()`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavefocus) - checks if this is the currently focused element
*   [`.toHaveAccessibleDescription(description)`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveaccessibledescription) - checks accessible description
*   and a [lot more](https://github.com/testing-library/jest-dom?tab=readme-ov-file#custom-matchers).

### [Directive testing](/guides/testing#directive-testing)

[Directives](/reference/jsx-attributes/use) are reusable behaviors for elements. They receive the HTML element they are bound to as their first and an accessor of the directive prop as their second argument. To make testing them more concise, [`@solidjs/testing-library` has a `renderDirective`](https://testing-library.com/docs/solid-testing-library/api#renderdirective) function:

    const renderResult = renderDirective(directive, {  initialValue, // value initially added to the argument signal  targetElement, // opt. node name or element used as target for the directive  ...renderOptions, // see render options})const {  arg, // getter for the directive's argument  setArg, // setter for the directive's argument  ...renderResults, // see render results} = renderResult

In `...renderResults`, the container will contain the `targetElement`, which defaults to a `<div>`. This, along with the ability to modify the `arg` signal, are helpful when testing directives.

If, for example, you have a directive that handles the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API), you can test it like this:

fullscreen.test.tsfullscreen.ts

    import { test, expect, vi } from "vitest"import { renderDirective } from "@solidjs/testing-library"import { createFullScreen } from "./fullscreen"
    test("toggles fullscreen", () => {  const targetElement = document.createElement("div")  const fs = vi.spyOn(targetElement, "fullscreen")  const [setArg, container] = renderDirective(createFullScreen, false)  setArg(true)  expect(fs).toHaveBeenCalled()})

    import { Accessor } from "solid-js"
    export const fullscreen = (ref: HTMLElement, active: Accessor<boolean>) =>  createEffect(() => {    const isActive = document.fullscreenElement === ref    if (active() && !isActive) {      ref.requestFullScreen().catch(() => {})    } else if (!active() && isActive) {      document.exitFullScreen()    }  })

### [Primitive testing](/guides/testing#primitive-testing)

When the reference to an element is not needed, parts of state and logic can be put into reusable hooks or primitives. Since these do not require elements, there is no need for `render` to test them since it would require a component that has no other use. To avoid this, there is a [`renderHook` utility](https://testing-library.com/docs/solid-testing-library/api#renderhook) that simulates a component without actually rendering anything.

    const renderResult = renderHook(hook, {  initialProps, // an array with arguments being supplied to the hook  wrapper, // same as the wrapper optionss for `render`})const {  result, // return value of the hook (mutable, destructuring fixes it)  cleanup, // manually remove the traces of the test from the DOM  owner, // the owner running the hook to use with `runWithOwner()`} = renderResult

A primitive that manages the state of a counter could be tested like this:

    import { test, expect } from "vitest"import { renderHook } from "@solidjs/testing-library"import { createCounter } from "./counter"
    test("increments count", () => {  const { result } = renderHook(createCounter)  expect(result.count).toBe(0)  result.increment()  expect(result.count).toBe(1)})

### [Testing effects](/guides/testing#testing-effects)

Since effects may happen asynchronously, it can be difficult to test them. [`@solidjs/testing-library` comes with a `testEffect` function](https://testing-library.com/docs/solid-testing-library/api#async-methods) that takes another function that receives a `done` function to be called once tests are over and returns a promise. Once `done` is called, the returned promise is resolved. Any errors that would hit the next boundary are used to reject the returned promise.

An example test using `testEffect` may look like this:

    const [value, setValue] = createSignal(0)return testEffect(done =>  createEffect((run: number = 0) => {    if (run === 0) {      expect(value()).toBe(0)      setValue(1)    } else if (run === 1) {      expect(value()).toBe(1)      done()    }    return run + 1  }))

### [Benchmarks](/guides/testing#benchmarks)

While Solid offers performance simplified, it is good to validate if that promise can be kept. Vitest offers an experimental `bench` function to run benchmarks and compare the results inside the same `describe` block; for example if you had a `<List>` flow component similar to `<For>`, you could benchmark it like this:

    describe('list rendering', () => {  const ITEMS = 1000  const renderedFor = new Set()  const listFor = Array.from({ length: ITEMS }, (_, i) => i)  bench('For', () => new Promise((resolve) => {    const ItemFor = (props) => {      onMount(() => {        renderedFor.add(props.number)        if (renderedFor.size === ITEMS) { resolve() }      })      return <span>{props.number}</span>    }    render(() => <For each={listFor}>      {(item) => <ItemFor number={item} />}    </For>)  }))
      const renderedList = new Set()  const listList = Array.from({ length: ITEMS }, (_, i) => i)  bench('List', () => new Promise((resolve) => {    const ItemList = (props) => {      onMount(() => {        renderedList.add(props.number)        if (renderedList.size === ITEMS) { resolve() }      })      return <span>{props.number}</span>    }    render(() => <List each={listList}>      {(item) => <ItemList number={item} />}    </List>)  }))})

Running `[npm|pnpm|yarn] test bench` will then execute the benchmark function:

    [RUN] v1.4.0 solid-app/src/components/
     ✓ src/components/list.bench.jsx (2) 1364ms   ✓ benchmark (2) 1360ms     name       hz      min      max     mean      p75      p99     p995     p999      rme  samples   · For   60.5492  11.2355  47.9164  16.5155  15.4180  47.9164  47.9164  47.9164  ±13.60%       31   fastest   · List  49.7725  16.5441  69.3559  20.0914  18.0349  69.3559  69.3559  69.3559  ±21.37%       25
    [BENCH] Summary
    For - src/components/list.bench.tsx > benchmark    1.22x faster than List

Please keep in mind that it is very difficult to create meaningful benchmarks. The numbers should always be taken with a grain of salt, but can still indicate performance degradations if compared between versions.

### [Test coverage](/guides/testing#test-coverage)

While coverage numbers can be misleading, they are used by many projects as a rough measurement of code quality. Vitest supports coverage collection. To use it, it needs an extra package:

npmpnpmyarnbundeno

    npm i @vitest/coverage-v8 -D

    pnpm i @vitest/coverage-v8 -D

    yarn add @vitest/coverage-v8 -D

    bun i @vitest/coverage-v8 -d

    deno add npm:@vitest/coverage-v8 -D

Also, you need to [set up vitest's coverage feature](https://vitest.dev/guide/coverage.html).

### [Integration/E2E testing](/guides/testing#integratione2e-testing)

Some issues can only be found once the code is running in the environment it is supposed to run in. Since integration and end-to-end tests are agnostic to frameworks, all proven approaches will work equally for Solid.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/testing.mdx&page=https://docs.solidjs.com/guides/testing)

Previous[← Fetching data](/guides/fetching-data)

Next[Deploy your app →](/guides/deploying-your-app)

Guides

Deploy your app
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/deploying-your-app.mdx)

Are you ready to deploy your Solid application? Follow our guides for different deployment services.

[Cloudflare](/guides/deployment-options/cloudflare)

[Firebase](/guides/deployment-options/firebase)

[AWS with Flightcontrol](/guides/deployment-options/aws-via-flightcontrol)

[AWS with SST](/guides/deployment-options/aws-via-sst)

[Netlify](/guides/deployment-options/netlify)

[Railway](/guides/deployment-options/railway)

[Vercel](/guides/deployment-options/vercel)

[Stormkit](/guides/deployment-options/stormkit)

[Zerops](/guides/deployment-options/zerops)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/guides/deploying-your-app.mdx&page=https://docs.solidjs.com/guides/deploying-your-app)

Previous[← Testing](/guides/testing)

Next[AWS via Flightcontrol →](/guides/deployment-options/aws-via-flightcontrol)

Configuration

Environment variables
=====================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/configuration/environment-variables.mdx)

Solid is built on top of [Vite](https://vitejs.dev/), which offers a convenient way to handle environment variables.

* * *

[Public Environment Variables](/configuration/environment-variables#public-environment-variables)
-------------------------------------------------------------------------------------------------

Public variables are considered safe to expose to the client-side code. These variables are prefixed with `VITE_` and are injected into the client-side code during compilation time.

In the root directory of the project, create a file called `.env`. This file will store environment variables in the `key = value` format.

If working with TypeScript it is possible to make such variables type-safe and enable your TypeScript Language Service Provider (LSP) to autocomplete them by creating a file called `env.d.ts` in the root directory of the project.

    interface ImportMetaEnv {  readonly VITE_USER_ID: string;  readonly VITE_PUBLIC_ENDPOINT: string;}
    interface ImportMeta {  readonly env: ImportMetaEnv;}

info

To prevent accidental exposure of environment variables to the client, only variables prefixed with `VITE_` will be exposed.

For example:

    VITE_SECRET_KEY = 123helloDB_PASSWORD = foobar

Only the `VITE_SECRET_KEY` will be exposed to client source code, while `DB_PASSWORD` will not, as shown below.

    console.log(import.meta.env.VITE_SECRET_KEY); // 123helloconsole.log(import.meta.env.DB_PASSWORD); // undefined

    function MyComponent() {  return (    <div>      <h2>        Component with environment variable used{" "}        {import.meta.env.VITE_VARIABLE_NAME}        the value will be replaced during compilation time.      </h2>    </div>  );}

* * *

[Private Environment Variables](/configuration/environment-variables#private-environment-variables)
---------------------------------------------------------------------------------------------------

These variables should only be accessed in your backend code, so it's best not to use the `VITE_` prefix for them. Instead, use `process.env` to access them. Depending on the [Nitro preset](https://nitro.build/deploy) chosen, they'll be made available automatically or they will require an external dependency such as [dotenv](https://www.npmjs.com/package/dotenv).

    DB_HOST="somedb://192.110.0"DB_PASSWORD = super_secret_password_hash

To access them, within your backend code, use `process.env`. For an example, check the pseudo-code below.

      "use server"
      const client = new DB({    host: process.env.DB_URL,    password: process.env.DB_PASSWORD  });}

It is also possible to make `process.env` type-safe via the same `env.d.ts` file.

    declare namespace NodeJS {  interface ProcessEnv {    readonly DB_URL: string    readonly DB_PASSWORD: string  }}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/configuration/environment-variables.mdx&page=https://docs.solidjs.com/configuration/environment-variables)

Previous[← Zerops](/guides/deployment-options/zerops)

Next[TypeScript →](/configuration/typescript)

Configuration

TypeScript
==========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/configuration/typescript.mdx)

[TypeScript](https://www.typescriptlang.org/) is a superset of JavaScript that enhances code reliability and predictability through the introduction of [static types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). While JavaScript code can be directly used in TypeScript, the added type annotations in TypeScript provide clearer code structure and documentation, making it more accessible for developers.

By leveraging standard JSX, a syntax extension to JavaScript, Solid facilitates seamless TypeScript interpretation. Moreover, Solid has built-in types for the API that heighten accuracy.

For developers eager to get started, we offer [TypeScript templates](https://github.com/solidjs/templates/) on GitHub.

* * *

[Configuring TypeScript](/configuration/typescript#configuring-typescript)
--------------------------------------------------------------------------

When integrating TypeScript with the Solid JSX compiler, there are some settings to make for a seamless interaction:

1.  `"jsx": "preserve"` in the `tsconfig.json` retains the original JSX form. This is because Solid's JSX transformation is incompatible with TypeScript's JSX transformation.
2.  `"jsxImportSource": "solid-js"` designates Solid as the source of JSX types.

For a basic setup, your `tsconfig.json` should resemble:

    {  "compilerOptions": {    "jsx": "preserve",    "jsxImportSource": "solid-js"  }}

For projects with diverse JSX sources, such as a blend of React and Solid, some flexibility exists. While it's possible to set a default `jsxImportSource` in the `tsconfig.json`, which will correspond with the majority of your files, TypeScript also allows file-level overrides. Using specific pragmas within `.tsx` files facilitates this:

    /** @jsxImportSource solid-js */

or, if using React:

    /** @jsxImportSource react */

Opting for the React JSX pragma means having React and its associated dependencies fully integrated into the project. Additionally, it makes sure the project's architecture is primed for React JSX file handling, which is vital.

* * *

[Migrating from JavaScript to TypeScript](/configuration/typescript#migrating-from-javascript-to-typescript)
------------------------------------------------------------------------------------------------------------

Transitioning from JavaScript to TypeScript in a Solid project offers the benefits of static typing. To migrate to Typescript:

1.  Install TypeScript into your project.

npmpnpmyarnbundeno

    npm i typescript -D

    pnpm i typescript -D

    yarn add typescript -D

    bun i typescript -d

    deno add npm:typescript -D

2.  Run the following command to generate a `tsconfig.json` file.

npmpnpmyarnbundeno

    npx tsc --init

    pnpx tsc --init

    yarn dlx tsc --init

    bunx tsc --init

    dpx tsc --init

3.  Update the contents of the `tsconfig.json` to match Solid's configuration:

    {  "compilerOptions": {    "strict": true,    "target": "ESNext",    "module": "ESNext",    "moduleResolution": "node",    "allowSyntheticDefaultImports": true,    "esModuleInterop": true,    "jsx": "preserve",    "jsxImportSource": "solid-js",    "types": ["vite/client"],    "noEmit": true,    "isolatedModules": true  }}

4.  Create a TypeScript or `.tsx` file to test the setup.

    import { type Component } from "solid-js";
    const MyTsComponent: Component = () => {  return (    <div>      <h1>This is a TypeScript component</h1>    </div>  );}
    export default MyTsComponent;

If using an existing JavaScript component, import the TypeScript component:

    import MyTsComponent from "./MyTsComponent";
    function MyJsComponent() {  return (    <>      {/* ... */}      <MyTsComponent />    </>  );}

info

If you wish to change the entry point file from `index.jsx` to `index.tsx`, you need to modify the `src` attribute in `<script>` to look like the following:

    <!doctype html><html lang="en">  <head>    <!-- ... -->  </head>  <body>    <noscript>You need to enable JavaScript to run this app.</noscript>    <div id="root"></div>    <script src="/src/index.tsx" type="module"></script>  </body></html>

* * *

[API types](/configuration/typescript#api-types)
------------------------------------------------

Solid is written in TypeScript, meaning everything is typed out of the box.

The Reference Tab in the sidebar provides the API Documentation that details the types of API calls. In addition, there are several helpful definitions to make it easier for specifying explicit types.

### [Signals](/configuration/typescript#signals)

Using `createSignal<T>`, a signal's type can be defined as `T`.

    const [count, setCount] = createSignal<number>();

Here, `createSignal` has the return type `Signal<number | undefined>`, which corresponds to the type passed into it, and `undefined` as it was uninitialized. This resolves to a getter-setter [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types), both of which are generically typed:

    import type { Signal, Accessor, Setter } from "solid-js";type Signal<T> = [get: Accessor<T>, set: Setter<T>];

In Solid, a signal's getter, like `count`, is essentially a function that returns a specific type. In this case, the type is `Accessor<number | undefined>`, which translates to a function `() => number | undefined`. Since the signal was not initialized, its initial state is `undefined`, therefore `undefined` is included in its type.

The corresponding setter, `setCount`, has a more complex type:

    Setter<number | undefined>.

Essentially, this type means that the function can accept either a direct number or another function as its input. If provided with a function, that function can take the signal's previous value as its parameter and return a new value. Both the initial and resulting values can be a number or `undefined`. Importantly, calling `setCount` without any arguments will reset the signal's value to `undefined`.

When using the function form of the setter, the signal's current value will always be passed to the callback as the sole argument. Additionally, the return type of the setter will align with the type of value passed into it, echoing the behavior expected from a typical assignment operation.

If a signal is intended to store functions, the setter won't directly accept new functions as values. This is because it can not distinguish whether the function should be executed to yield the actual value or to store it as-is. In these situations, using the callback form of the setter is recommended:

    setSignal(() => value);

#### [Default values](/configuration/typescript#default-values)

By providing default values when `createSignal` is called, the need for explicit type specification is avoided and the possibility of the `| undefined` type is eliminated. This leverages type inference to determine the type automatically:

    const [count, setCount] = createSignal(0);const [name, setName] = createSignal("");

In this example, TypeScript understands the types as `number` and `string`. This means that `count` and `name` directly receive the types `Accessor<number>` and `Accessor<string>`, respectively, without the `| undefined` tag.

### [Context](/configuration/typescript#context)

Just as signals use `createSignal<T>`, context uses `createContext<T>`, which is parameterized by the type `T` of the context's value:

    type Data = { count: number; name: string };

When invoking `useContext(dataContext)`, the type contained within the context is returned. For example, if the context is `Context<Data | undefined>`, then with using `useContext` a result of type `Data | undefined` will return. The `| undefined` signifies that the context may not be defined in the component's ancestor hierarchy.

`dataContext` will be understood as `Context<Data | undefined>` by Solid. Calling `useContext(dataContext)` mirrors this type, returning `Data | undefined`. The `| undefined` arises when the context's value will be used but cannot be determined.

Much like [default values](/configuration/typescript#default-values) in signals, `| undefined` can be avoided in the type by giving a default value that will be returned if no value is assigned by a context provider:

    const dataContext = createContext({ count: 0, name: "" });

By providing a default value, TypeScript determines that `dataContext` is `Context<{ count: number, name: string }>`. This is equivalent to `Context<Data>` but without `| undefined`.

A common approach to this is forming a factory function to generate a context's value. By using TypeScript's [`ReturnType`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations), you can use the return type of this function to type this context:

    export const makeCountNameContext = (initialCount = 0, initialName = "") => {  const [count, setCount] = createSignal(initialCount);  const [name, setName] = createSignal(initialName);  return [    { count, name },    { setCount, setName },  ] as const;};
    type CountNameContextType = ReturnType<typeof makeCountNameContext>;export const CountNameContext = createContext<CountNameContextType>();

`CountNameContextType` will correspond to the result of `makeCountNameContext`:

    [  { count: Accessor<number>, name: Accessor<string> },  { setCount: Setter<number>, setName: Setter<string> },];

To retrieve the context, use `useCountNameContext`, which has a type signature of `() => CountNameContextType | undefined`.

In scenarios where `undefined` needs to be avoided as a possible type, assert that the context will always be present. Additionally, throwing a readable error may be preferable to non-null asserting:

    export const useCountNameContext = () => {  const countName = useContext(CountNameContext);  if (!countName) {    throw new Error(      "useCountNameContext should be called inside its ContextProvider"    );  }  return countName;};

**Note:** While supplying a default value to `createContext` can make the context perpetually defined, this approach may not always be advisable. Depending on the use case, it could lead to silent failures, which may be less preferable.

### [Components](/configuration/typescript#components)

#### [The basics](/configuration/typescript#the-basics)

By default, components in Solid use the generic `Component<P>` type, where `P` represents the props' type that is an object.

    import type { Component } from "solid-js";
    const MyComponent: Component<MyProps> = (props) => {    ...}

A `JSX.Element` denotes anything renderable by Solid, which could be a DOM node, array of JSX elements, or functions yielding `JSX.Element`.

Trying to pass unnecessary props or children will result in type errors:

    // in counter.tsxconst Counter: Component = () => {  const [count, setCount] = createSignal(0);  return (    <button onClick={() => setCount((prev) => prev + 1)}>{count()}</button>  );};
    // in app.tsx<Counter />; // ✔️<Counter initial={5} />; // ❌: No 'initial' prop defined<Counter>hi</Counter>; // ❌: Children aren't expected

#### [Components with props](/configuration/typescript#components-with-props)

For components that require the use of props, they can be typed using [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content):

    const InitCounter: Component<{ initial: number }> = (props) => {  const [count, setCount] = createSignal(props.initial);  return (    <button onClick={() => setCount((prev) => prev + 1)}>{count()}</button>  );};
    <InitCounter initial={5} />;

#### [Components with children](/configuration/typescript#components-with-children)

Often, components may need to accept child elements. For this, Solid provides `ParentComponent`, which includes `children?` as an optional prop. If defining a component with the `function` keyword, `ParentProps` can be used as a helper for the props:

    import { ParentComponent } from "solid-js";
    const CustomCounter: ParentComponent = (props) => {  const [count, setCount] = createSignal(0);  return (    <button onClick={() => setCount((prev) => prev + 1)}>      {count()}      {props.children}    </button>  );};

In this example, `props` is inferred to be of the type `{children?: JSX.Element }`, streamlining the process of defining components that can accept children.

#### [Special component types](/configuration/typescript#special-component-types)

Solid offers subtypes for components dealing uniquely with children:

*   **VoidComponent:** When a component should not accept children.
*   **FlowComponent:** Designed for components like [`<Show>`](/reference/components/show) or [`<For>`](/reference/components/for), typically requiring children and, occasionally, specific children types.

These types make sure that the children fit the required type, maintaining consistent component behaviour.

##### [Components without the `Component` types](/configuration/typescript#components-without-the-component-types)

Using the `Component` types is a matter of preference over a strict requirement. Any function that takes props and returns a JSX.Element qualifies as a valid component:

    // arrow functionconst MyComponent = (props: MyProps): JSX.Element => { ... }
    // function declarationfunction MyComponent(props: MyProps): JSX.Element { ... }
    // component which takes no propsfunction MyComponent(): JSX.Element { ... }

It is worth noting that the `Component` types **cannot be used to create generic components**. Instead, the generics will have to be typed explicitly:

    // For arrow functions, the syntax <T> by itself is invalid in TSX because it could be confused with JSX.const MyGenericComponent = <T extends unknown>(  props: MyProps<T>): JSX.Element => {  /* ... */};
    // Using a function declaration for a generic componentfunction MyGenericComponent<T>(props: MyProps<T>): JSX.Element {  /* ... */}

info

Each `Component` type has a corresponding `Props` type that defines the shape of its properties. These `Props` types also accept the same generic types as their associated `Component` types.

### [Event handling](/configuration/typescript#event-handling)

#### [Basics](/configuration/typescript#basics)

In Solid, the type for event handlers is specified as `JSX.EventHandler<TElement, TEvent>`. Here, `TElement` refers to the type of the element the event is linked to. `TEvent` will indicate the type of the event itself which can serve as an alternative to `(event: TEvent) => void` in the code. This approach guarantees accurate typing for `currentTarget` and `target` within the event object while also eliminating the need for inline event handlers.

    import type { JSX } from "solid-js"
    // Defining an event handler using the `EventHandler` type:const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {  console.log("Input changed to", event.currentTarget.value)}
    // Then attach handler to an input element:<input onInput={onInput} />

#### [Inline handlers](/configuration/typescript#inline-handlers)

Defining an event handler inline within a JSX attribute automatically provides type inference and checking, eliminating the need for additional typing efforts:

    <input  onInput={(event) => {    console.log("Input changed to", event.currentTarget.value);  }}/>

#### [`currentTarget` and `target`](/configuration/typescript#currenttarget-and-target)

In the context of event delegation, the difference between `currentTarget` and `target` is important:

*   `currentTarget`: Represents the DOM element to which the event handler is attached.
*   `target`: Any DOM element within the hierarchy of `currentTarget` that has initiated the event.

In the type signature `JSX.EventHandler<T, E>`, `currentTarget` will consistently have the type `T`. However, the type of target could be more generic, potentially any DOM element. For specific events like `Input` and `Focus` that are directly associated with input elements, the target will have the type `HTMLInputElement`.

### [`ref` attribute](/configuration/typescript#ref-attribute)

#### [Basics](/configuration/typescript#basics-1)

In an environment without TypeScript, using the `ref` attribute in Solid ensures that the corresponding DOM element is assigned to the variable after it is rendered:

    let divRef;console.log(divRef); // Outputs: undefinedonMount(() => {  console.log(divRef); // Outputs: <div> element});return <div ref={divRef} />;

In a TypeScript environment, particularly with strict `null` checks enabled, typing these variables can be a challenge.

A safe approach in TypeScript is to acknowledge that `divRef` may initially be `undefined` and to implement checks when accessing it:

    let divRef: HTMLDivElement | undefined// This would be flagged as an error during compilationdivRef.focus()onMount(() => {  if (!divRef) return  divRef.focus()})return <div ref={divRef}>...</div>

Within the scope of the `onMount` function, which runs after rendering, you can use a non-`null` assertion (indicated by the exclamation mark `!`):

    onMount(() => {  divRef!.focus();});

Another approach is to bypass `null` during the assignment phase and then apply a definite assignment assertion within the `ref` attribute:

    let divRef: HTMLDivElement// Compilation error as expecteddivRef.focus()onMount(() => {  divRef.focus()})return <div ref={divRef!}>...</div>

In this case, using `divRef!` within the `ref` attribute signals to TypeScript that `divRef` will receive an assignment after this stage, which is more in line with how Solid works.

info

While TypeScript does catch incorrect usage of refs that occur before their JSX block definition, it currently does not identify undefined variables within certain nested functions in Solid. Therefore, additional care is needed when using `ref`s in functions such as [`createMemo`](/reference/basic-reactivity/create-memo), [`createRenderEffect`](/reference/secondary-primitives/create-render-effect), and [`createComputed`](/reference/secondary-primitives/create-computed).

Finally, a riskier approach involves using the definite assignment assertion right at the point of variable initialization. While this method bypasses TypeScript's assignment checks for that particular variable, it offers a quick but less secure workaround that could lead to runtime errors.

    let divRef!: HTMLDivElement;
    // Permitted by TypeScript but will throw an error at runtime:// divRef.focus();
    onMount(() => {  divRef.focus();});

* * *

[Control flow-based narrowing](/configuration/typescript#control-flow-based-narrowing)
--------------------------------------------------------------------------------------

Control flow-based narrowing involves refining the type of a value by using control flow statements.

Consider the following:

    const user: User | undefined = maybeUser();return <div>{user && user.name}</div>;

In Solid, however, accessors cannot be narrowed in a similar way:

    const [user, setUser] = createSignal<User>();return <div>{user() && user().name}</div>;//                    ^ Object may be 'undefined'.
    // Using `<Show>`:
    return (  <div>    <Show when={user()}>      {user().name /* Object is possibly 'undefined' */}    </Show>  </div>);

In this case, using optional chaining serves as an good alternative:

    return <div>{user()?.name}</div>;
    // Using `<Show>`:
    return (  <div>    <Show when={user()}>      {(nonNullishUser) => <>{nonNullishUser().name}</>}    </Show>  </div>);

This approach is similar to using the keyed option, but offers an accessor to prevent the recreation of children each time the `when` value changes.

    return (  <div>    <Show keyed when={user()}>      {(nonNullishUser) => nonNullishUser.name}    </Show>  </div>);

Note that optional chaining may not always be possible. For instance, when a `UserPanel` component exclusively requires a `User` object:

    return <UserPanel user={user()} />;//                        ^ Type 'undefined' is not assignable to type 'User'.

If possible, consider refactoring `UserPanel` to accept `undefined`. This minimizes the changes required when `user` goes from `undefined` to `User`.

Otherwise, using Show's callback form works:

    return (  <Show when={user()}>    {(nonNullishUser) => <UserPanel user={nonNullishUser()} />}  </Show>);

Casting can also be a solution so long as the assumption is valid:

    return <div>{user() && (user() as User).name}</div>;

It's worth noting that runtime type errors may arise from doing this. This may happen when passing a type-cast value to a component, which discards information that may be nullish followed by accessing it asynchronously, such as in an event handler or timeout, or in `onCleanup`.

`<Show>` only excludes `null`, `undefined`, and `false` from `when` when using the callback form. If the types in a union need to be differentiated, a memo or computed signal can work as an alternative solution:

    type User = Admin | OtherUser;const admin = createMemo(() => {  const u = user();  return u && u.type === "admin" ? u : undefined;});return <Show when={admin()}>{(a) => <AdminPanel user={a()} />}</Show>;

The following alternative also works when using `Show`:

    <Show  when={(() => {    const u = user();    return u && u.type === "admin" ? u : undefined;  })()}>  {(admin) => <AdminPanel user={admin()} />}</Show>

* * *

[Advanced JSX attributes and directives](/configuration/typescript#advanced-jsx-attributes-and-directives)
----------------------------------------------------------------------------------------------------------

### [Custom event handlers](/configuration/typescript#custom-event-handlers)

To handle custom events in Solid, you can use the attribute `on:___`. Typing these events requires an extension of Solid's JSX namespace.

    class NameEvent extends CustomEvent {  type: "Name";  detail: { name: string };
      constructor(name: string) {    super("Name", { detail: { name } });  }}
    declare module "solid-js" {  namespace JSX {    interface CustomEvents {      Name: NameEvent; // Matches `on:Name`    }  }}
    // Usage<div on:Name={(event) => console.log("name is", event.detail.name)} />;

info

New in v1.9.0

It is now possible to use the intersection `EventListenerObject & AddEventListenerOptions` to provide listener options as follows:

    import type { JSX } from "solid-js"
    const handler: JSX.EventHandlerWithOptions<HTMLDivElement, Event> =  {  once: true,  handleEvent: (event) => {    console.log("will fire only once");  },}
    // Usage<div on:click={handler} />;

info

**Note**: By default, using native events like `mousemove` with the `on` prefix — for example, `<div on:mousemove={e => {}} />` — will trigger a TypeScript error. This occurs because these native events are not part of Solid's custom event type definitions. To solve this, the `CustomEvents` interface can be extended to include events from the `HTMLElementEventMap`:

To include all native events:

    declare module "solid-js" {  namespace JSX {    interface CustomEvents extends HTMLElementEventMap {}  }}

To include specific native events, you can choose certain events (e.g. `mousemove` and `pointermove`):

    declare module "solid-js" {  namespace JSX {    interface CustomEvents      extends Pick<HTMLElementEventMap, "mousemove" | "pointermove"> {}  }}

#### [Forcing properties and custom attributes](/configuration/typescript#forcing-properties-and-custom-attributes)

In Solid, the `prop:___` directive allows explicit property setting, which is useful for retaining the original data types like objects or arrays. `attr:___` directive allows custom attributes, on the other hand, and it is effective for handling string-based HTML attributes.

    declare module "solid-js" {  namespace JSX {    interface ExplicitProperties {      count: number;      name: string;    }    interface ExplicitAttributes {      count: number;      name: string;    }    interface ExplicitBoolAttributes {      disabled: boolean;    }  }}
    // Usage<Input prop:name={name()} prop:count={count()}/><my-web-component attr:name={name()} attr:count={count()} bool:disabled={true}/>

#### [Custom directives](/configuration/typescript#custom-directives)

In Solid, custom directives can be applied using the `use:___` attribute, which usually accepts a target element and a JSX attribute value. The traditional `Directives` interface types these values directly (i.e. the type of `value` in `<div use:foo={value} />`). However, the newer `DirectiveFunctions` interface takes a function type and derives the valid types for elements and values from it.

There are additional considerations:

*   The directive function always receives a single accessor. For multiple arguments, the syntax `<div use:foo={[a, b]} />` is an option, and an accessor to a tuple should be accepted.
*   The same principle holds for boolean directives, as seen in `<div use:foo />`, and for directives with static values, like `<div use:foo={false} />`.
*   `DirectiveFunctions` can accept functions that do not strictly meet the type requirements; such cases will be ignored.

    function model(  element: Element, // directives can be used on any HTML and SVG element  value: Accessor<Signal<string>> // second param will always be an accessor in case value being reactive) {  const [field, setField] = value();  createRenderEffect(() => (element.value = field()));  element.addEventListener("input", (e) => {    const value = (e.target as HTMLInputElement).value;    setField(value);  });}
    declare module "solid-js" {  namespace JSX {    interface Directives {      model: Signal<string>; // Corresponds to `use:model`    }  }}
    // Usagelet [name, setName] = createSignal("");<input type="text" use:model={[name, setName]} />;

In using `DirectiveFunctions`, there's the ability to check both arguments (if present) by detailing the entire function type:

    function model(element: HTMLInputElement, value: Accessor<Signal<string>>) {  const [field, setField] = value();  createRenderEffect(() => (element.value = field()));  element.addEventListener("input", (e) => setField(e.target.value));}
    function log(element: Element) {  console.log(element);}
    let num = 0;function count() {  num++;}
    function foo(comp: Element, args: Accessor<string[]>) {  // function body}
    declare module "solid-js" {  namespace JSX {    interface DirectiveFunctions {      model: typeof model;      log: typeof log;      count: typeof count;      foo: typeof foo;    }  }}

While the `Directives` interface can limit the value type passed via JSX attribute to the directive, the `DirectiveFunctions` interface ensures that both element and value align with the expected types, as shown below:

    {/* This is correct */}<input use:model={createSignal('')} />
    {/* These will result in a type error */}<input use:model /><input use:model={7} /><div use:model={createSignal('')} />

##### [Addressing import issues with directives](/configuration/typescript#addressing-import-issues-with-directives)

If directives are imported from a separate file or module, TypeScript might mistakenly remove the import thinking it is a type.

To prevent this:

*   Configure `onlyRemoveTypeImports: true` in `babel-preset-typescript`.
*   When using `vite-plugin-solid`, set `solidPlugin({ typescript: { onlyRemoveTypeImports: true } })` in `vite.config.ts`.

Careful management of export type and import type is required. Including a statement in the importing module ensures TypeScript keeps the directive's import. [Tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) tools usually omit this code from the final bundle.

    import { directive } from "./directives.js"
    directive // prevents TypeScript's tree-shaking
    <div use:directive />

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/configuration/typescript.mdx&page=https://docs.solidjs.com/configuration/typescript)

Previous[← Environment variables](/configuration/environment-variables)