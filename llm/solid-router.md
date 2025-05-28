solid-router version: 0.3.3, last updated: 2025-05-25T14:47:54.749Z

[Overview](/solid-router#overview)
==================================

info

The docs are based on latest Solid Router. To use this version, you need to have Solid v1.8.4 or later installed.

Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

Getting started

Installation and setup
======================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/installation-and-setup.mdx)

Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

* * *

[Setup](/solid-router/getting-started/installation-and-setup#setup)
-------------------------------------------------------------------

To get started with Solid Router, install it using your preferred package manager.

npmpnpmyarnbundeno

    npm i @solidjs/router

    pnpm i @solidjs/router

    yarn add @solidjs/router

    bun i @solidjs/router

    deno add npm:@solidjs/router

* * *

[Configure the routes](/solid-router/getting-started/installation-and-setup#configure-the-routes)
-------------------------------------------------------------------------------------------------

The [`Router`](/solid-router/reference/components/router) component is the root component of the router. It is responsible for managing the URL and rendering the appropriate [`Route`](/solid-router/reference/components/route) based on the URL.

To configure your routes, import the `Router` component and then start the application by rendering the router component.

    import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    const wrapper = document.getElementById("app");
    if (!wrapper) {  throw new Error("Wrapper div not found");}
    render(() => <Router />, wrapper)

This sets up the router that will match on the url and render the appropriate route.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/getting-started/installation-and-setup.mdx&page=https://docs.solidjs.com/solid-router/getting-started/installation-and-setup)

Previous[← Overview](/solid-router/)

Next[Component routing →](/solid-router/getting-started/component)

Getting started

Component routing
=================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/component.mdx)

In Solid Router, routes can be defined directly in an application's template using JSX. This is the most common way to define routes in Solid Router.

To define routes using JSX, the [`Route`](/solid-router/reference/components/route) is added to the [`<Router>`](/solid-router/reference/components/router) component for each path you want to define:

    import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    import Home from "./routes/Home";
    render(    () => (        <Router>            <Route path="/" component={Home} />        </Router>    ),    document.getElementById("app"));

The Route component takes a `path` prop, which is the path to match, and a `component` prop, where you pass the component (or element) to render when the path matches. In the example above, the `Home` page is rendered when the user navigates to the root path `/`.

To apply multiple routes to the router, add additional `Route` components to the `Router`:

    import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    import Home from "./routes/index.jsx";import About from "./routes/about.jsx";
    render(    () => (        <Router>            <Route path="/" component={Home} />            <Route path="/hello-world" component={() => <h1>Hello World!</h1>} />            <Route path="/about" component={About} />        </Router>    ),    document.getElementById("app"));

This example defines three routes: the root path (`/`) which renders the `Home` page, the path `/hello-world` which renders an `h1` element, and the path `/about` which renders the `About` component.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/getting-started/component.mdx&page=https://docs.solidjs.com/solid-router/getting-started/component)

Previous[← Installation and setup](/solid-router/getting-started/installation-and-setup)

Next[Config-based routing →](/solid-router/getting-started/config)

Getting started

Config-based routing
====================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/getting-started/config.mdx)

Solid Router supports config-based routing, which offers the same capabilities as [component routing](/solid-router/getting-started/component). The decision to use config-based routing over component routing depends largely on personal preference.

To define a single route, a route definition object can be passed to the [`<Router>`](/solid-router/reference/components/router) component:

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    const routes = {    path: "/",    component: lazy(() => import("/routes/index.js")),}
    
    render(() => <Router>{routes}</Router>, document.getElementById("app"));

In the route definition object, a `path` property must be provided to define the path to match and a `component` property that specifies the component (or element) to render when the path matches.

To define multiple routes, an array of route definition objects can be passed to the `<Router>` component:

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    const routes = [    {        path: "/",        component: lazy(() => import("/routes/index.js")),    },    {        path: "/hello-world",        component: () => <h1>Hello, World!</h1>    },    {        path: "/about",        component: lazy(() => import("/routes/about.js")),    }]
    
    render(() => <Router>{routes}</Router>, document.getElementById("app"));

Each path in the array of route definition objects will be matched against the current URL, and the corresponding component will be rendered when a match is found. In the example above, the root path (`/`) renders the `Home` page, the path `/hello-world` renders an `h1` element, and the path `/about` renders the `About` component.

info

When using configuration-based routing, it is best practice to use the [`lazy`](/reference/component-apis/lazy) component to load components asynchronously. This will help improve the performance of your application by only loading the components when they are needed.

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    const routes = [    {        path: "/",        component: lazy(() => import("/routes/index.js")),    },    {        path: "/hello-world",        component: () => <h1>Hello, World!</h1>    },    {        path: "/about",        component: lazy(() => import("/routes/about.js")),    }]
    
    render(() => <Router>{routes}</Router>, document.getElementById("app"));

To learn more about lazy loading, see the page on [lazy loading components](/solid-router/advanced-concepts/lazy-loading).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/getting-started/config.mdx&page=https://docs.solidjs.com/solid-router/getting-started/config)

Previous[← Component routing](/solid-router/getting-started/component)

Next[Navigation →](/solid-router/concepts/navigation)

Concepts

Navigation
==========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/navigation.mdx)

When using Solid Router, you can use the standard standard HTML [`<a>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), which triggers [soft navigation](/solid-router/reference/components/a#soft-navigation). In addition to using this, Solid Router offers other options for navigating between routes:

*   The [`<A>` component](/solid-router/reference/components/a).
*   The [`useNavigate` primitive](/solid-router/reference/primitives/use-navigate).
*   The [`redirect` function](/solid-router/reference/response-helpers/redirect).

* * *

[`<A>` component](/solid-router/concepts/navigation#a-component)
----------------------------------------------------------------

The `<A>` component extends the native `<a>` element by automatically applying the base URL path and, additionally, supports relative paths.

    import { A } from "@solidjs/router";
    function DashboardPage() {  return (    <main>      <nav>        <A href="/">Home</a>      </nav>      {/* This is a relative path that, from /dashboard, links to /dashboard/users */}      <A href="users">Users</A>    </main>  );}

See the [`<A>` API reference](/solid-router/reference/components/a) for more information.

### [Styling](/solid-router/concepts/navigation#styling)

The `<A>` component allows you to style links based on their active state using the `activeClass` and `inactiveClass` props. When provided, these props apply the corresponding CSS classes to the link. If omitted, the default classes `active` and `inactive` are used.

By default, a link is considered active when the current route matches the link's `href` or any of its descendant routes. For example, a link with `href="/dashboard"` is active when the current route is `/dashboard`, `/dashboard/users`, or `/dashboard/users/1/profile`.

To match an exact route, the prop `end` can be used. When `true`, it ensures that the link is only considered active if the `href` exactly matches the current route. This is useful for root route links (href="/"), which might otherwise match all routes.

    import { A } from "@solidjs/router";
    function Navbar() {  return (    <nav>      <A href="/" end={true}>        Home      </A>      <A        href="/login"        activeClass="text-blue-900"        inactiveClass="text-blue-500"      >        Login      </A>    </nav>  );}

* * *

[`useNavigate` primitive](/solid-router/concepts/navigation#usenavigate-primitive)
----------------------------------------------------------------------------------

The `useNavigate` primitive allows for programmatically navigating to a specified route.

    import { useNavigate } from "@solidjs/router";
    function LoginPage() {  const navigate = useNavigate();
      return (    <button      onClick={() => {        // Login logic        navigate("/dashboard", { replace: true });      }}    >      Login    </button>  );}

This example redirects the user to `/dashboard` after login. By using `replace: true`, the login page is removed from the browser's history stack and replaced with the `/dashboard` route. This prevents the user from navigating back to the login page using the back button.

See the [`useNavigate` API reference](/solid-router/reference/primitives/use-navigate) for more information.

* * *

[`redirect` function](/solid-router/concepts/navigation#redirect-function)
--------------------------------------------------------------------------

The `redirect` function returns a [`Response` object](https://developer.mozilla.org/en-US/docs/Web/API/Response), which enables navigation to a specified route within [query](/solid-router/reference/data-apis/query) or [action](/solid-router/reference/data-apis/action).

    import { action, redirect } from "@solidjs/router";
    const logout = action(async () => {  localStorage.remove("token");  throw redirect("/");});

See the [`redirect` API reference](/solid-router/reference/response-helpers/redirect) for more information.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/navigation.mdx&page=https://docs.solidjs.com/solid-router/concepts/navigation)

Previous[← Config-based routing](/solid-router/getting-started/config)

Next[Path parameters →](/solid-router/concepts/path-parameters)

Concepts

Path parameters
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/path-parameters.mdx)

Parameters within a route are used to capture dynamic values from the URL. This is useful for creating routes that are more flexible and can handle different values.

    <Route path="/users/:id" component={User} />

In this example, the `:id` parameter will capture any value that comes after `/users/` in the URL. The colon `:` is used to denote a parameter, and `id` is the name of the parameter. When a URL matches this route, the `User` component will be rendered.

info

Routes that share the same path match will be treated as the same route. If a force re-render is needed, you can wrap your component in a keyed [`Show`](/reference/components/show) component:

    <Show when={params.something} keyed>  <MyComponent /></Show>

* * *

[Accessing parameters](/solid-router/concepts/path-parameters#accessing-parameters)
-----------------------------------------------------------------------------------

You can retrieve the values captured by parameters using [`useParams`](/solid-router/reference/primitives/use-params).

    import { useParams } from "@solidjs/router";
    function User() {    const params = useParams();    return <div>User ID: {params.id}</div>; {/* Output: User ID: 123 */}}

* * *

[Validating parameters](/solid-router/concepts/path-parameters#validating-parameters)
-------------------------------------------------------------------------------------

Each path parameter can be validated using the `MatchFilter` on the `Route` component. Rather than checking for the presence of a parameter manually, you can use a `MatchFilter` to ensure that the parameter is in the correct format.

    import { lazy } from "solid-js";import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    const User = import("./pages/User");
    const filters = {  parent: ["mom", "dad"], // allow enum values  id: /^\d+$/, // only allow numbers  withHtmlExtension: (v: string) => v.length > 5 && v.endsWith(".html"), // we want an `*.html` extension};
    render(() => (  <Router>    <Route      path="/users/:parent/:id/:withHtmlExtension"      component={User}      matchFilters={filters}    />  </Router>), document.getElementById("app"));

Here, the `matchFilter` prop validates the `parent`, `id`, and `withHtmlExtension` parameters against the specified filters defined in the `filters` object. If the validation fails, the route will not match and the component will not be rendered.

In this example, that means:

*   `/users/mom/123/contact.html` would match,
*   `/users/dad/456/about.html` would match,
*   `/users/aunt/123/contact.html` would not match as `:parent` is not 'mom' or 'dad',
*   `/users/mom/me/contact.html` would not match as `:id` is not a number,
*   `/users/dad/123/contact` would not match as `:withHtmlExtension` is missing .html.

* * *

[Optional parameters](/solid-router/concepts/path-parameters#optional-parameters)
---------------------------------------------------------------------------------

Parameters can be made optional by adding a `?` after the parameter name.

    <Route path="/users/:id?" component={User} />

With this setup, the route would match both `/users` and `/users/123`. However, it is important to note that the `?` only makes the parameter optional for the last segment of the path. As a result, paths beyond the optional parameter will _not_ be matched. For instance, `/users/123/contact` would not match.

* * *

[Wildcard routes](/solid-router/concepts/path-parameters#wildcard-routes)
-------------------------------------------------------------------------

Wildcard routes can be used to match any number of segments in a path. To create a wildcard route, use `*` followed by the parameter name.

    <Route path="/users/*" component={User} />

Using an asterisk `*` as a parameter will match any number of segments after `/users`. This includes `/users`, `/users/123`, `/users/123/contact`, and so on.

If you need to expose the wildcard segments of the path, you can name them:

    <Route path="/users/*rest" component={User} />

In this case, `rest` will contain the rest of the path after `/users/`.

It is important to note that wildcard routes must be located at the **end of the path**. If you place a wildcard route before the end, such as `/users/*rest/:id`, no routes will be matched.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/path-parameters.mdx&page=https://docs.solidjs.com/solid-router/concepts/path-parameters)

Previous[← Navigation](/solid-router/concepts/navigation)

Next[Search parameters →](/solid-router/concepts/search-parameters)

Concepts

Search parameters
=================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/search-parameters.mdx)

Search parameters are used to pass data to a route using the query string. The query string is the part of the URL that comes after the `?` character and is used to pass key-value pairs to the route.

In Solid Router, these query parameters can be accessed using [`useSearchParams`](/solid-router/reference/primitives/use-search-params). This primitive retrieves a tuple that contains a reactive object that reads the current search parameters and a function to update them.

    import { useSearchParams } from "@solidjs/router";
    export const App = () => {  const [searchParams, setSearchParams] = useSearchParams();
      return (    <div>      <span>Username: {searchParams.username}</span>      <input        type="text"        onChange={(e) => {          e.preventDefault();          setSearchParams({ username: e.target.value });        }}      />    </div>  );};

The getter, in this case `searchParams`, is used to read the current search parameters. `setSearchParams` works as the setter which accepts an _object_ whose entries will be merged into the current query.

* * *

[Multiple queries](/solid-router/concepts/search-parameters#multiple-queries)
-----------------------------------------------------------------------------

Since `setSearchParams` accepts an object, you can pass multiple key-value pairs to update multiple search parameters at once.

    setSearchParams({  username: "john",  page: 1,});

info

If the value of a search parameter's key is `undefined`, `null`, or an empty string (`""`), it will be removed from the query string.

* * *

[Accessing query strings](/solid-router/concepts/search-parameters#accessing-query-strings)
-------------------------------------------------------------------------------------------

If you require accessing the query string directly, you can use the [`useLocation`](/solid-router/reference/primitives/use-location) primitive:

    import { useLocation } from "@solidjs/router";
    export const App = () => {  const location = useLocation();
      return (    <div>      <span>Query String: {location.search}</span>    </div>  );};

If the URL was `http://localhost:3000/users?username=john&page=1`, the output would be `Query String: ?username=john&page=1`.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/search-parameters.mdx&page=https://docs.solidjs.com/solid-router/concepts/search-parameters)

Previous[← Path parameters](/solid-router/concepts/path-parameters)

Next[Catch-all routes →](/solid-router/concepts/catch-all)

Concepts

Catch-all routes
================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/catch-all.mdx)

Catch-all routes are used to match any URL that does not match any other route in the application. This is useful for displaying a 404 page or redirecting to a specific route when a user enters an invalid URL.

To create a catch-all route, place a route with an asterisk (`*`) as the path at the end of the route list. Optionally, you can name the parameter to access the unmatched part of the URL.

    import { Router, Route } from "@solidjs/router";
    import Home from "./Home";import About from "./About";import NotFound from "./NotFound";
    const App = () => (  <Router>    <Route path="/home" component={Home} />    <Route path="/about" component={About} />    <Route path="*404" component={NotFound} />  </Router>);

Now, if a user navigates to a URL that does not match `/home` or `/about`, the `NotFound` component will be rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/catch-all.mdx&page=https://docs.solidjs.com/solid-router/concepts/catch-all)

Previous[← Search parameters](/solid-router/concepts/search-parameters)

Next[Nesting routes →](/solid-router/concepts/nesting)

Concepts

Nesting routes
==============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/nesting.mdx)

Nested routes are a way to create a hierarchy of routes in your application. This is useful for creating a [layout](/solid-router/concepts/layouts) that is consistent across multiple pages, or for creating a relationship between pages that are related to each other.

In Solid Router, the following two route definitions have the same result:

    <Route path="/users/:id" component={User} />
    // is equivalent to
    <Route path="/users">  <Route path="/:id" component={User} /></Route>

In both cases, the `User` component will render when the URL is `/users/:id`. The difference, however, is that in the first case, `/users/:id` is the only route, and in the second case, `/users` is also a route.

**Note:** visit the [config-based nesting](/solid-router/concepts/nesting#config-based-nesting) section for more information on how to nest routes using the configuration-based approach.

* * *

[Limitations](/solid-router/concepts/nesting#limitations)
---------------------------------------------------------

When nesting routes, only the innermost `Route` component will become its own route. For example, if you were to nest a route, only the innermost route will become its own route, even if the parent routes are also specified and provided with a component:

    <Route path="/users" component={Users}>  <Route path="/:id" component={User} /></Route>

For a parent route to become its own route, it must be specified separately. This can be done by explicitly defining the parent route as well as the nested route:

    <Route path="/users" component={Users} /><Route path="/users/:id" component={User} />

Another way to achieve the same result is to nest the routes and explicitly define the parent route through the use of an empty path, and then specify the nested route:

    <Route path="/users">  <Route path="/" component={Users} />  <Route path="/:id" component={User} /></Route>

In both cases, the `Users` component will render when the URL is `/users`, and the `User` component will render when the URL is `/users/:id`.

* * *

[Config-based nesting](/solid-router/concepts/nesting#config-based-nesting)
---------------------------------------------------------------------------

When using configuration-based routing, nesting can be achieved through passing your route definitions into the `children` property of a parent route definition object:

    import { render } from "solid-js/web";import { Router } from "@solidjs/router";
    const routes = {  path: "/",  component: lazy(() => import("/routes/index.js")),  children: [    {      path: "/users",      component: lazy(() => import("/routes/users.js")),      children: [        {          path: "/:id",          component: lazy(() => import("/routes/user.js")),        },      ],    },  ],};
    render(() => <Router>{routes}</Router>, document.getElementById("app"));

In this example, when you navigate to `/users/:id`, the `User` component will render. Similarly, when you navigate to `/users`, the `Users` component will render.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/nesting.mdx&page=https://docs.solidjs.com/solid-router/concepts/nesting)

Previous[← Catch-all routes](/solid-router/concepts/catch-all)

Next[Layouts →](/solid-router/concepts/layouts)

Concepts

Layouts
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/layouts.mdx)

To maintain consistency across an application's page you can use layouts. Layouts are components that wrap the content of a route and can be used to define a common structure for all pages or specific sections of an application.

* * *

[Root-level layouts](/solid-router/concepts/layouts#root-level-layouts)
-----------------------------------------------------------------------

A root-level layout acts as a container surrounding all routes within your application. To define a root-level layout, pass the layout component to the `root` prop of the `Router` component:

    import { render } from "solid-js/web";import { Router, Route } from "@solidjs/router";
    import Home from "./pages/Home";
    const Layout = (props) => {    return (        <>            <header>Header</header>            {props.children}            <footer>Footer</footer>        </>    );};
    render(    () => (        <Router root={Layout}>            <Route path="/" component={Home} />            <Route path="/hello-world" component={() => <div>Hello world!</div>} />        </Router>    ),    document.getElementById("app"));

With the root-level layout, `props.children` will be replaced with the content of the current route. This means that while the words "Header" and "Footer" will be displayed on every page, the content between them will change depending on the current route. For example, when the route is `/hello-world`, you will see the text "Hello world!" between the header and footer.

* * *

[Nested layouts](/solid-router/concepts/layouts#nested-layouts)
---------------------------------------------------------------

When you want to create a layout that is specific to a group of routes, you can nest routes within a layout component. This can be done by passing `props.children` to the component where the nested routes are defined:

    function PageWrapper(props) {  return (    <div>      <h1> We love our users! </h1>      {props.children}      <A href="/">Back Home</A>    </div>  );}

While the routes are still configured the same, the route's elements will appear inside the parent element where the `props.children` was declared. For `PageWrapper` to be used as a layout, in this case, you can pass it as a component to the parent route:

    <Router>    <Route path="/users" component={PageWrapper}>        <Route path="/" component={Users} />        <Route path="/:id" component={User} />    </Route></Router>

Now, when the route is `/users`, the content of the `Users` component will be displayed inside the `PageWrapper` component. Similarly, when navigating to `/users/1`, the content of the `User` component will be displayed inside the `PageWrapper` component as well.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/layouts.mdx&page=https://docs.solidjs.com/solid-router/concepts/layouts)

Previous[← Nesting routes](/solid-router/concepts/nesting)

Next[Alternative routers →](/solid-router/concepts/alternative-routers)

Concepts

Alternative routers
===================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/alternative-routers.mdx)

While the default router uses the browser's `location.pathname` to determine the current route, you can use alternative routers to change this behavior. This includes:

*   [**Hash mode**](/solid-router/concepts/alternative-routers#hash-mode): Uses the hash portion of the URL to determine the current route.
*   [**Memory mode**](/solid-router/concepts/alternative-routers#memory-mode): Keeps the history of the router in memory, useful for testing.

* * *

[Hash mode](/solid-router/concepts/alternative-routers#hash-mode)
-----------------------------------------------------------------

Hash mode routing uses the hash portion of the URL to manage an application's state and navigation. Unlike the [default router](/solid-router/reference/components/router), the hash portion of the URL will not be handled by the server meaning this is a client-side only routing. To use hash mode, replace the `<Router />` component in the application with [`<HashRouter />`](/solid-router/reference/components/hash-router).

    import { render } from "solid-js/web";import {    Router    HashRouter,    Route    } from "@solidjs/router";
    const App = (props) => (    <>        <h1>Root header</h1>        {props.children}    </>);
    render(    () => <Router root={App}>{/*... routes */}</Router>,    () => <HashRouter root={App}>{/*... routes */}</HashRouter>,    document.getElementById("app"));

* * *

[Memory mode](/solid-router/concepts/alternative-routers#memory-mode)
---------------------------------------------------------------------

Unlike the default router and hash, the memory router does not interact with the browser's URL. This means that while the URL in the browser's address bar will change, the router will not navigate to the new route. This gives you the ability to control the router's state and history in memory which can be useful for testing purposes.

To use memory mode, replace the `<Router />` component in the application with [`<MemoryRouter />`](/solid-router/reference/components/memory-router):

    import { render } from "solid-js/web";import {    Router    MemoryRouter,    Route    } from "@solidjs/router";
    const App = (props) => (    <>        <h1>Root header</h1>        {props.children}    </>);
    render(    () => <Router root={App}>{/*... routes */}</Router>,    () => <MemoryRouter root={App}>{/*... routes */}</MemoryRouter>,    document.getElementById("app"));

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/alternative-routers.mdx&page=https://docs.solidjs.com/solid-router/concepts/alternative-routers)

Previous[← Layouts](/solid-router/concepts/layouts)

Next[Actions →](/solid-router/concepts/actions)

Concepts

Actions
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/actions.mdx)

When developing applications, it is common to need to communicate new information to the server based on user interactions. Actions are Solid Router’s solution to this problem.

* * *

[What are actions?](/solid-router/concepts/actions#what-are-actions)
--------------------------------------------------------------------

Actions are asynchronous processing functions that allow you to submit data to your server and receive a response. They are isomorphic, meaning they can run either on the server or the client, depending on what is needed. This flexibility makes actions a powerful tool for managing and tracking data submissions.

### [How actions work](/solid-router/concepts/actions#how-actions-work)

Actions represent the server-side part of an [HTML form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form). They handle submissions through POST requests, allowing you to easily use HTML forms to send data.

When a user performs an action, such as submitting a form, the data is sent to the server for processing via an action.

### [Benefits of using actions](/solid-router/concepts/actions#benefits-of-using-actions)

1.  **Isomorphic**: Since actions can run on both the server and client, you can optimize performance by choosing the best execution environment for your needs.
2.  **Asynchronous processing**: Actions handle data submissions asynchronously, ensuring that your application remains responsive.
3.  **Simplified data handling**: By using actions, the process of managing and tracking data submissions can be streamlined, reducing the complexity of your application.

* * *

[Creating actions](/solid-router/concepts/actions#creating-actions)
-------------------------------------------------------------------

To create an action, use the `action` function from the `@solidjs/router` package. This function takes an asynchronous function as an argument and returns a new function that can be used to submit data.

    import { action } from "@solidjs/router";
    const echo = action(async (message: string) => {  // Simulates an asynchronous operation, such as an API call  await new Promise((resolve, reject) => setTimeout(resolve, 1000));  console.log(message);});

In this example, the `echo` action simulates a fetch call with a 1 second delay before logging the message to the console. The `echo` action will act as a backend, however, it can be substituted for any API provided it can be run on the client. Typically, route actions are used with some sort of solution like fetch or GraphQL.

tip

In [SolidStart](/solid-start) apps, it's recommended to use the [`"use server"`](/solid-start/reference/server/use-server) directive to leverage server-side caching.

### [Using actions](/solid-router/concepts/actions#using-actions)

To use the action, you can call it from within a component using [`useAction`](/solid-router/reference/data-apis/use-action). This returns a function that can be called with the necessary arguments to trigger the action.

    import { action } from "@solidjs/router";import { action, useAction } from "@solidjs/router";
    const echo = action(async (message: string) => {  await new Promise((resolve, reject) => setTimeout(resolve, 1000));  console.log(message);});
    export function MyComponent() {  const myEcho = useAction(echo);
      myEcho("Hello from Solid!");}

In this component, `useAction` is used to get a reference to the `echo` action. The action is then called with the message `"Hello from Solid!"`, which will be logged to the console after a 1 second delay.

### [Returning data from actions](/solid-router/concepts/actions#returning-data-from-actions)

In many cases, after submitting data, the server sends some data back as well. This may be in the form of an error message if something has failed or the results of a successful operation. Anything returned from an action can be accessed using the reactive `action.result` property, where the value can change each time you submit your action.

To access the action's result, you must pass the action to `useSubmission`:

    import { action, useAction } from "@solidjs/router";import { action, useAction, useSubmission } from "@solidjs/router";
    const echo = action(async (message: string) => {  await new Promise((resolve, reject) => setTimeout(resolve, 1000));  return message;});
    export function MyComponent() {  const myEcho = useAction(echo);  const echoing = useSubmission(echo);
      myEcho("Hello from solid!");
      setTimeout(() => myEcho("This is a second submission!"), 1500);
      return <p>{echoing.result}</p>;}

Using `useSubmission` leaves the implementation details of how you trigger `echo` up to you. When handling user inputs, for example, it is better to use a `form` for a multitude of reasons.

* * *

[Using forms to submit data](/solid-router/concepts/actions#using-forms-to-submit-data)
---------------------------------------------------------------------------------------

When submitting data with actions, it is recommended to use HTML forms. These forms can be used prior to JavaScript loading, which creates instantly interactive applications. This also inherently provides accessibility benefits, saving the time of designing a custom UI library that may not have these benefits.

When using forms to submit actions, the first argument passed to your action function is an instance of [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData). To use actions with forms, pass the action to the `action` property of your form. This creates progressively enhanced forms that work even when JavaScript is disabled.

If you do not return a `Response` from your action, the user will stay on the same page and responses will be re-triggered. Using a `redirect` can tell the browser to navigate to a new page.

    import { action, redirect } from "@solidjs/router";
    const isAdmin = action(async (formData: FormData) => {  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      const username = formData.get("username");
      if (username === "admin") throw redirect("/admin");  return new Error("Invalid username");});
    export function MyComponent() {
      return (    <form action={isAdmin} method="post">      <label for="username">Username:</label>      <input type="text" name="username" />      <input type="submit" value="submit" />    </form>  );}

**Note:** If you are uploading files make sure you include `enctype="multipart/form-data"` to your `<form>` element.

* * *

[Error handling](/solid-router/concepts/actions#error-handling)
---------------------------------------------------------------

Rather than throwing errors, it is recommended to return them from actions. This helps with the typing of submissions that would be used with `useSubmission`. This is important when handling progressive enhancement where no JavaScript is present in the client, so that errors can be used declaratively to render the updated page on the server.

Additionally, when using server actions, it is good practice to handle errors on the server to sanitize error messages.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/concepts/actions.mdx&page=https://docs.solidjs.com/solid-router/concepts/actions)

Previous[← Alternative routers](/solid-router/concepts/alternative-routers)

Next[Single page applications →](/solid-router/rendering-modes/spa)

Rendering modes

Single page applications
========================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/spa.mdx)

When deploying applications that use a client-side router without relying on Server-Side Rendering, it is important that redirects to the index page are handled properly. This prevents the CDN or hosting service from returning a "not found" error when accessing URLs that do not correspond to files.

Each provider has a different way of doing this. For example, Netlify provides a `_redirects` file that contains:

    /*   /index.html   200

Vercel, on the other hand, requires a rewrites section in your `vercel.json`:

    {  "rewrites": [    {      "source": "/(.*)",      "destination": "/index.html"    }  ]}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/rendering-modes/spa.mdx&page=https://docs.solidjs.com/solid-router/rendering-modes/spa)

Previous[← Actions](/solid-router/concepts/actions)

Next[Server side rendering →](/solid-router/rendering-modes/ssr)

Rendering modes

Server side rendering
=====================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/ssr.mdx)

Solid Router supports all of Solid's SSR capabilities. In addition, it has Solid's transitions included, so it can be used freely with [suspense](/reference/components/suspense), [resources](/reference/basic-reactivity/create-resource), and [lazy components](/reference/component-apis/lazy).

When using SSR, there is the option to use the static router directly or let the browser router default to it on the server by passing in the URL.

    import { isServer } from "solid-js/web";import { Router } from "@solidjs/router";
    <Router url={isServer ? req.url : ""} />;

Solid Router also provides a way to define a `preload` function that loads parallel to the routes [render-as-you-fetch](https://epicreact.dev/render-as-you-fetch/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/rendering-modes/ssr.mdx&page=https://docs.solidjs.com/solid-router/rendering-modes/ssr)

Previous[← Single page applications](/solid-router/rendering-modes/spa)

Next[Lazy loading →](/solid-router/advanced-concepts/lazy-loading)

Advanced concepts

Lazy loading
============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/advanced-concepts/lazy-loading.mdx)

Lazy loading allows you to load only the necessary resources when they are needed. This can be useful when you have a large application with a lot of routes and components, and you want to reduce the initial load time.

In Solid Router, you can lazy load components using the `lazy` function from Solid:

    import { lazy } from "solid-js";import { Router, Route } from "@solidjs/router";
    const Home = lazy(() => import("./Home"));
    const Users = lazy(() => import("./Users"));
    const App = () => (  <Router>    <Route path="/" component={Home} />    <Route path="/users" component={Users} />  </Router>);

In the example above, the `Users` component is lazy loaded using the `lazy` function. The `lazy` function takes a function that returns a promise, which resolves to the component you want to load. When the route is matched, the component will be loaded and rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/advanced-concepts/lazy-loading.mdx&page=https://docs.solidjs.com/solid-router/advanced-concepts/lazy-loading)

Previous[← Server side rendering](/solid-router/rendering-modes/ssr)

Next[Migration from v0.9.x →](/solid-router/guides/migration)

Guides

Migration from v0.9.x
=====================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/guides/migration.mdx)

v0.10.0 brings some big changes to support the future of routing including Islands/Partial Hydration hybrid solutions. Most notably there is no Context API available in non-hydrating parts of the application.

The biggest changes are around _removed APIs_ that need to be replaced.

* * *

[`<Outlet>`, `<Routes>`, `useRoutes`](/solid-router/guides/migration#outlet-routes-useroutes)
---------------------------------------------------------------------------------------------

These components are no longer present in the new router version. Instead, `props.children` is passed into the page components in the place of outlets. This keeps the outlet directly passed from its page and avoids trying to use context across Islands boundaries. Similarly, nested `<Routes>` components cause waterfalls and are `<Outlets>` themselves thus sharing the same concerns.

With no `<Routes>` means the `<Router>` API has changed. The `<Router>` component acts as the `<Routes>` component now and its children must now be `<Route>` components. The top-level layout should go in the root prop of the router [as shown here](/solid-router/concepts/layouts#root-level-layouts).

* * *

[`element` prop removed from `Route`](/solid-router/guides/migration#element-prop-removed-from-route)
-----------------------------------------------------------------------------------------------------

Related without Outlet component it has to be passed in manually. At which point the `element` prop has less value. Removing the second way to define route components to reduce confusion and edge cases.

* * *

[`data` functions & `useRouteData`](/solid-router/guides/migration#data-functions--useroutedata)
------------------------------------------------------------------------------------------------

`data` functions & `useRouteData` have been replaced by a load mechanism. This allows link hover preloads, since the preload function can be run as much as wanted without worrying about reactivity.

This supports deduping/cache APIs which give more control over how things are cached. It also addresses TypeScript issues with getting the right types in the Component without `typeof` checks.

That being said the old pattern can be reproduced by turning off preloads at the router level and then injecting your own Context:

    import { lazy } from "solid-js";import { Router, Route } from "@solidjs/router";
    const User = lazy(() => import("./pages/users/[id].js"));
    // preload functionfunction preloadUser({ params, location }) {  const [user] = createResource(() => params.id, fetchUser);  return user;}
    // Pass it in the route definition<Router preload={false}>  <Route path="/users/:id" component={User} preload={preloadUser} /></Router>;

And then in your component taking the page props and putting them in a Context.

    import { createContext, useContext } from "solid-js";
    const UserContext = createContext();
    function User(props) {  <UserContext.Provider value={props.data()}>    {/* my component content that includes <UserDetails /> in any depth  */}  </UserContext.Provider>;}
    function UserDetails() {  const user = useContext(UserContext);  // render stuff}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-router/guides/migration.mdx&page=https://docs.solidjs.com/solid-router/guides/migration)

Previous[← Lazy loading](/solid-router/advanced-concepts/lazy-loading)