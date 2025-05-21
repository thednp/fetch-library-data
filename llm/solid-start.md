[Overview](/solid-start#overview)
=================================

SolidStart is an open source meta-framework designed to unify components that make up a web application. It is built on top of [Solid](/) and uses [Vinxi](https://vinxi.vercel.app/), an agnostic Framework Bundler that combines the power of [Vite](https://vitejs.dev) and [Nitro](https://nitro.build/).

Start avoids being opinionated by only providing the fewest pieces to get you started. While templates are available that include many of the expected tools, SolidStart itself does not ship with a Router or Metadata library. Rather, it leaves that open for you to use any library you want.

SolidStart provides you the ability to render your applications in different ways depending on what is best for your use case. These include:

*   Client-side rendering (CSR)
*   Server-side rendering (SSR)
*   Static site generation (SSG)

A driving principle of SolidStart is that code should be _isomorphic_ — this ensures that code can be written once and executed correctly whether on the client or server.

* * *

[Features](/solid-start#features)
---------------------------------

SolidStart features the following capabilities:

*   **Fine-grained reactivity** — Powered by Solid and its fine-grained reactivity.
*   **Isomorphic, nested routing** — The same routes are rendered regardless of whether the page is on the client or server. Route nesting provides parent-child relationships that simplify application logic.
*   **Multiple rendering modes** — Can be used to create CSR, SSR (Sync, Async and Streaming), and SSG applications.
*   **Command Line Interface (CLI) and templates** — Provides a CLI and templates to help you get started quickly.
*   **Deployment presets** — Provides presets to support deployment to multiple platforms including Netlify, Vercel, AWS, and Cloudflare.

* * *

[Prerequisites](/solid-start#prerequisites)
-------------------------------------------

Before you start using SolidStart, you should have a basic understanding of web development. This includes knowledge of HTML, CSS, and JavaScript. With SolidStart being a Solid meta-framework, we recommend learning Solid prior to reading these docs (or at least [taking the Solid tutorial](https://www.solidjs.com/tutorial)).

* * *

[SolidStart 1.0 is here!](/solid-start#solidstart-10-is-here)
-------------------------------------------------------------

We are actively working on improving the documentation and adding more examples to help you get started. Documentation is still in beta so content is still being added to the documentation to improve the overall experience of using SolidStart.

If you experience any issues while using SolidStart, please let us know by [opening an issue in the SolidStart Repo](https://github.com/solidjs/solid-start/issues). Additionally, if you notice any issues or feel that something is missing in the documentation, please let us know in the [Solid Docs Repo](https://github.com/solidjs/solid-docs-next/issues).

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/index.mdx) [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/index.mdx&page=https://docs.solidjs.com/solid-start)

Getting started
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/getting-started.mdx)

The easiest way to get started with Solid is to use the SolidStart starter. This starter contains a collection of templates that can be used to quickly bootstrap a new Solid application.

**1\. Install SolidStart**

Once you have created a directory for your new application, you can initialize SolidStart with the following command:

npmpnpmyarnbundeno

    npm init solid@latest

    pnpm create solid@latest

    yarn create solid@latest

    bun create solid@latest

    deno run -A npm:create-solid@latest

**2\. Choose a template**

When you run the command above, SolidStart will prompt you to choose a template for your new application. You can see a [list of these options in the SolidStart repository](https://github.com/solidjs/solid-start/tree/main/examples).

    ? Which template do you want to use? › - Use arrow-keys. Return to submit.❯   bare    hackernews    with-auth    with-mdx    with-tailwindcss    with-vitest

Following the prompts, you might be asked questions like whether you want to use Server Side Rendering or TypeScript. Choose your desired options to continue.

**3\. Install dependencies**

Once you have chosen your template and configuration options, you can navigate to the directory you created and run the following command to install dependencies:

npmpnpmyarnbundeno

    npm i

    pnpm i

    yarn i

    bun i

    deno i

After this command has finished, your new SolidStart application is ready to go!

**4\. Run your application**

To run your application locally, you can use the following command:

npmpnpmyarnbundeno

    npm run dev

    pnpm dev

    yarn dev

    bun run dev

    deno run dev

Your application should now be running locally on port 3000. You can view it by navigating to [http://localhost:3000](http://localhost:3000).

info

SolidStart uses [Vinxi](https://vinxi.vercel.app/) both for starting a development server with [Vite](https://vitejs.dev/) and for building and starting a production server with [Nitro](https://nitro.build/).

When you run your application, you are actually running `vinxi dev` under the hood.

You can read more about the [Vinxi CLI and how it is configured in the Vinxi documentation](https://vinxi.vercel.app/api/cli.html).

* * *

[Project files](/solid-start/getting-started#project-files)
-----------------------------------------------------------

SolidStart will create a new directory for your project, and populate it with the necessary files and directories to get you started. These files and directories are the basic structure of a SolidStart application, and you can modify them to suit your needs. The default structure of a SolidStart application looks like this:

    public/src/├── routes/│   ├── index.tsx├── entry-client.tsx├── entry-server.tsx├── app.tsx

**Note:** Depending on the configuration options you chose when creating your project, your file structure may look slightly different. For example, if you chose to use JavaScript rather than TypeScript, your file extensions will be `.jsx` instead of `.tsx`.

Each directory and file in this structure serves a specific purpose in your SolidStart application:

*   `public/` - contains the publicly-accessible assets for your application. This is where images, fonts, and other files that you want to be accessible to the public should be placed.
*   `src/` - where your Start application code will live. It is aliased to `~/` for importing in your code.
*   `src/routes/` - any files or pages will be located in this directory. You can learn more about the [`routes` folder in the routing section](/solid-start/building-your-application/routing).
*   [`src/entry-client.tsx`](/solid-start/reference/entrypoints/entry-client) - this file is what loads and _hydrates_ the JavaScript for our application on the client side (in browser). In most cases, you will **not** need to modify this file.
*   [`src/entry-server.tsx`](/solid-start/reference/entrypoints/entry-server) - this file will handle requests on the server. Like `entry-client.tsx`, in most cases you will **not** need to modify this file.
*   [`app.tsx`](/solid-start/reference/entrypoints/app) - this is the HTML root of your application both for client and server rendering. You can think of this as the shell inside which your application will be rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/getting-started.mdx&page=https://docs.solidjs.com/solid-start/getting-started)

Previous[← Overview](/solid-start/)

Next[Routing →](/solid-start/building-your-application/routing)

Building your application

Routing
=======

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/routing.mdx)

Routing serves as a key component of web applications. Within SolidStart, there are two types:

*   **UI routes** — define the user interface in your app
*   **[API routes](/solid-start/building-your-application/api-routes)** — define the serverless functions in your app

To read more about API routes, [see the API Routes section.](/solid-start/building-your-application/api-routes)

* * *

[Creating new routes](/solid-start/building-your-application/routing#creating-new-routes)
-----------------------------------------------------------------------------------------

SolidStart uses file based routing which is a way of defining your routes by creating files and folders in your project. This includes your pages and API routes.

SolidStart traverses your `routes` directory, collects all of the routes, and then makes them accessible using the [`<FileRoutes />`](/solid-start/reference/routing/file-routes). This component will only include your UI routes, not your API routes. Rather than manually defining each `Route` inside a `Router` component, `<FileRoutes />` will generate the routes for you based on the file system.

Because `<FileRoutes />` returns a routing config object, you can use it with the router of your choice. In this example, we use [`solid-router`](/solid-router):

    import { Suspense } from "solid-js";import { Router } from "@solidjs/router";import { FileRoutes } from "@solidjs/start/router";
    export default function App() {  return (    <Router root={(props) => <Suspense>{props.children}</Suspense>}>      <FileRoutes />    </Router>  );}

The `<Router />` component expects a `root` prop which functions as the root layout of your entire app. You will want to make sure `props.children` is wrapped in `<Suspense />` since each component will be lazy-loaded automatically. Without this, you could see some unexpected hydration errors.

`<FileRoutes />` will generate a route for each file in the `routes` directory and its subdirectories. For a route to be rendered as a page, it must default export a component. This component represents the content that will be rendered when users visit the page:

    export default function Index() {  return <div>Welcome to my site!</div>;}

This means that all you have to do is create a file in your `routes` folder and SolidStart takes care of everything else needed to make that route available to visit in your application!

* * *

[File based routing](/solid-start/building-your-application/routing#file-based-routing)
---------------------------------------------------------------------------------------

Each file in the `routes` directory is treated as a route. To create a new route or page in your application, simply create a new file in the `routes` directory. The file name will be the URL path for the route:

*   `example.com/blog` ➜ `/routes/blog.tsx`
*   `example.com/contact` ➜ `/routes/contact.tsx`
*   `example.com/directions` ➜ `/routes/directions.tsx`

### [Nested routes](/solid-start/building-your-application/routing#nested-routes)

If you need nested routes, you can create a directory with the name of the preceding route segment, and create new files in that directory:

*   `example.com/blog/article-1` ➜ `/routes/blog/article-1.tsx`
*   `example.com/work/job-1` ➜ `/routes/work/job-1.tsx`

When a file is named `index`, it will be rendered when there are no additional URL route segments being requested for a matching directory:

*   `example.com` ➜ `/routes/index.tsx`
*   `example.com/socials` ➜ `/routes/socials/index.tsx`

### [Nested layouts](/solid-start/building-your-application/routing#nested-layouts)

If you want to create nested layouts you can create a file with the same name as a route folder.

    |-- routes/    |-- blog.tsx                   // layout file    |-- blog/        |-- article-1.tsx         // example.com/blog/article-1        |-- article-2.tsx        // example.com/blog/article-2

In this case, the `blog.tsx` file will act as a layout for the articles in the `blog` folder. You can reference the child's content by using `props.children` in the layout.

TypeScriptJavaScript

    // routes/blog.tsximport { RouteSectionProps } from "@solidjs/router";
    export default function BlogLayout(props: RouteSectionProps) {  return <div>{props.children}</div>;}

    // routes/blog.jsxexport default function BlogLayout(props) {  return <div>{props.children}</div>;}

**Note**: Creating a `blog/index.tsx` or `blog/(blogIndex).tsx` is not the same as it would only be used for the index route.

* * *

[Renaming Index](/solid-start/building-your-application/routing#renaming-index)
-------------------------------------------------------------------------------

By default, the component that is rendered for a route comes from the default export of the `index.tsx` file in each folder. However, this can make it difficult to find the correct `index.tsx` file when searching, since there will be multiple files with that name.

To avoid this, you can rename the `index.tsx` file to the name of the folder it is in, enclosed in parentheses.

This way, it will be treated as the default export for that route:

    |-- routes/                       // example.com    |-- blog/        |-- article-1.tsx         // example.com/blog/article-1        |-- article-2.tsx    |-- work/        |-- job-1.tsx             // example.com/work/job-1        |-- job-2.tsx    |-- socials/        |-- (socials).tsx           // example.com/socials

#### [Escaping nested routes](/solid-start/building-your-application/routing#escaping-nested-routes)

When you have a path that is nested but wish for it to have a separate Layout, you can escape the nested route by applying a name between `( )`. This will allow you to create a new route that is not nested under the previous route:

    |-- routes/                       // example.com    |-- users/        |-- index.tsx            // example.com/users        |-- projects.tsx         // example.com/users/projects    |-- users(details)/        |-- [id].tsx            // example.com/users/1

Additionally, you can incorporate nested layouts of their own:

    |-- routes/    |-- users.tsx    |-- users(details).tsx    |-- users/        |-- index.tsx        |-- projects.tsx    |-- users(details)/        |-- [id].tsx

### [Dynamic routes](/solid-start/building-your-application/routing#dynamic-routes)

Dynamic routes are routes that can match any value for one segment of the route. When your URL path contains a dynamic segment, square brackets (`[]`) are used to define the dynamic segment:

*   `example.com/users/:id` ➜ `/routes/users/[id].tsx`
*   `example.com/users/:id/:name` ➜ `/routes/users/[id]/[name].tsx`
*   `example.com/*missing` ➜ `/routes/[...missing].tsx`

This allows you to create a single route that can match any value for that segment of the URL path. For example, `/users/1` and `/users/2` are both valid routes and rather than defining separate routes for each user, you can use a dynamic route to match any value for the `id` segment.

    |-- routes/    |-- users/        |-- [id].tsx

For example, using `solid-router`, you could use the [`useParams`](/solid-router/reference/primitives/use-params) primitive to match the dynamic segment:

    import { useParams } from "@solidjs/router";
    export default function UserPage() {  const params = useParams();  return <div>User {params.id}</div>;}

#### [Optional parameter](/solid-start/building-your-application/routing#optional-parameter)

If you have optional parameters in your route, you can use the double square brackets (`[[id]]`) to define the dynamic segment. This will match a route with or without a parameter.

    |-- routes/    |-- users/        |-- [[id]].tsx

In this case, some pages that could be matched include:

*   `/users`
*   `/users/1`
*   `/users/abc`

#### [Catch-all routes](/solid-start/building-your-application/routing#catch-all-routes)

Catch-all routes are a special type of dynamic route that can match any number of segments. They are defined using square brackets with `...` before the label for the route (e.g. `[...post]`).

    |-- routes/    |-- blog/        |-- index.tsx        |-- [...post].tsx

A catch-all route will have one parameter which is a forward-slash delimited string of all the URL segments after the last valid segment. For example, with the route `[...post]` and a URL path of `/post/foo` the `params` object returned from the `useParams` primitive will have a `post` property with the value of `post/foo`. For a URL path of `/post/foo/baz` it will be `post/foo/baz`.

    import { useParams } from "@solidjs/router";
    export default function BlogPage() {  const params = useParams();  return <div>Blog {params.post}</div>;}

* * *

[Route groups](/solid-start/building-your-application/routing#route-groups)
---------------------------------------------------------------------------

Using route groups, you can organize your routes in a way that makes sense for your application, without affecting the URL structure. Since file-based routing is based on the file system, it can be difficult to organize your routes in a way that makes sense for your application.

In SolidStart, route groups are defined by using parenthesis (`()`) surrounding the folder name:

    |-- routes/    |-- (static)        |-- about-us                // example.com/about-us            |-- index.tsx        |-- contact-us              // example.com/contact-us            |-- index.tsx

* * *

[Additional route config](/solid-start/building-your-application/routing#additional-route-config)
-------------------------------------------------------------------------------------------------

SolidStart offers a way to add additional route configuration outside of the file system. Since SolidStart supports the use of other routers, you can use the `route` export provided by `<FileRoutes />` to define the route configuration for the router of your choice.

TypeScriptJavaScript

    import type { RouteSectionProps, RouteDefinition } from "@solidjs/router";
    export const route = {  preload() {    // define preload function  }} satisfies RouteDefinition
    export default function UsersLayout(props: RouteSectionProps) {  return (    <div>      <h1>Users</h1>      {props.children}    </div>  );}

    export const route = {  preload() {    // define preload function  }};
    export default function UsersLayout(props) {  return (    <div>      <h1>Users</h1>      {props.children}    </div>  );}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/routing.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/routing)

Previous[← Getting started](/solid-start/getting-started)

Next[API routes →](/solid-start/building-your-application/api-routes)

Building your application

API routes
==========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/api-routes.mdx)

While Server Functions can be a good way to write server-side code for data needed by your UI, sometimes you need to expose API routes. Some reasons for wanting API Routes include:

*   There are additional clients that want to share this logic.
*   Exposing a GraphQL or tRPC endpoint.
*   Exposing a public-facing REST API.
*   Writing webhooks or auth callback handlers for OAuth.
*   Having URLs not serving HTML, but other kinds of documents like PDFs or images.

For these use cases, SolidStart provides a way to write these routes in a way that is easy to understand and maintain. API routes are just similar to other routes and follow the same filename conventions as [UI Routes](/solid-start/building-your-application/routing).

The difference between API routes and UI routes is in what you should export from the file. UI routes export a default Solid component, while API Routes do not. Rather, they export functions that are named after the HTTP method that they handle.

info

API routes are prioritized over page route alternatives. If you want to have them overlap at the same path remember to use `Accept` headers. Returning without a response in a `GET` route will fallback to page route handling.

* * *

[Writing an API route](/solid-start/building-your-application/api-routes#writing-an-api-route)
----------------------------------------------------------------------------------------------

To write an API route, you can create a file in a directory. While you can name this directory anything, it is common to name it `api` to indicate that the routes in this directory are for handling API requests:

    export function GET() {  // ...}
    export function POST() {  // ...}
    export function PATCH() {  // ...}
    export function DELETE() {  // ...}

API routes get passed an `APIEvent` object as their first argument. This object contains:

*   `request`: [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object representing the request sent by the client.
*   `params`: Object that contains the dynamic route parameters. For example, if the route is `/api/users/:id`, and the request is made to `/api/users/123`, then `params` will be `{ id: 123 }`.
*   `fetch`: An internal `fetch` function that can be used to make requests to other API routes without worrying about the `origin` of the URL.

An API route is expected to return JSON or a `Response` object. In order to handle all methods, you can define a handler function that binds multiple methods to it:

    async function handler() {  // ...}
    export const GET = handler;export const POST = handler;// ...

An example of an API route that returns products from a certain category and brand is shown below:

    import type { APIEvent } from "@solidjs/start/server";import store from "./store";
    export async function GET({ params }: APIEvent) {  console.log(`Category: ${params.category}, Brand: ${params.brand}`);  const products = await store.getProducts(params.category, params.brand);  return products;}

* * *

[Session management](/solid-start/building-your-application/api-routes#session-management)
------------------------------------------------------------------------------------------

Since HTTP is a stateless protocol, you need to manage the state of the session on the server. For example, if you want to know who the user is, the most secure way of doing this is through the use of HTTP-only cookies. Cookies are a way to store data in the user's browser that persist in the browser between requests.

The user's request is exposed through the `Request` object. Through parsing the [`Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie) header, the cookies can be accessed and any helpers from `vinxi/http` can be used to make that a bit easier.

    import type { APIEvent } from "@solidjs/start/server";import { getCookie } from "vinxi/http";import store from "./store";
    export async function GET(event: APIEvent) {  const userId = getCookie("userId");  if (!userId) {    return new Response("Not logged in", { status: 401 });  }  const user = await store.getUser(event.params.userId);  if (user.id !== userId) {    return new Response("Not authorized", { status: 403 });  }  return user;}

In this example, you can see that the `userId` is read from the cookie and then used to look up the user in the store. For more information on how to use cookies for secure session management, read the [session documentation](/solid-start/advanced/session).

* * *

[Exposing a GraphQL API](/solid-start/building-your-application/api-routes#exposing-a-graphql-api)
--------------------------------------------------------------------------------------------------

SolidStart makes it easy to [implement a GraphQL API](https://graphql.org/). GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.

To implement a GraphQL API, you need to define a schema and resolvers. The `graphql` function takes a GraphQL schema and returns a function that can be used as an API route handler.

First, to implement a GraphQL API, install the `graphql` library. Following that, you can implement your schema and resolvers in a file and then export a handler function that will be used as the API route:

    import { buildSchema, graphql } from "graphql";import type { APIEvent } from "@solidjs/start/server";
    // Define GraphQL Schemaconst schema = buildSchema(`  type Message {      message: String  }
      type Query {    hello(input: String): Message    goodbye: String  }`);
    // Define GraphQL Resolversconst rootValue = {  hello: () => {    return {      message: "Hello World"    };  },  goodbye: () => {    return "Goodbye";  }};
    // request handlerconst handler = async (event: APIEvent) => {  // get request body  const body = await new Response(event.request.body).json();
      // pass query and save results  const result = await graphql({ rootValue, schema, source: body.query });
      // send query result  return result;};
    export const GET = handler;
    export const POST = handler;

* * *

[Exposing a tRPC server route](/solid-start/building-your-application/api-routes#exposing-a-trpc-server-route)
--------------------------------------------------------------------------------------------------------------

[tRPC](https://trpc.io/) is a modern TypeScript-first API framework that is designed to be easy to use and understand.

To expose a tRPC server route, you need to write your router. Once you have written your router, you can put it in a separate file so that you can export the type for your client.

    import { initTRPC } from "@trpc/server";import { wrap } from "@decs/typeschema";import { string } from "valibot";
    const t = initTRPC.create();
    export const appRouter = t.router({  hello: t.procedure.input(wrap(string())).query(({ input }) => {    return `hello ${input ?? "world"}`;  })});
    export type AppRouter = typeof appRouter;

An example of a simple client that you can use to fetch data from your tRPC server is shown below:

    import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";import type { AppRouter } from "./router";
    export const client = createTRPCProxyClient<AppRouter>({  links: [loggerLink(), httpBatchLink({ url: "http://localhost:3000/api/trpc" })]});

Finally, you can use the `fetch` adapter to write an API route that acts as the tRPC server.

    import { type APIEvent } from "@solidjs/start/server";import { fetchRequestHandler } from "@trpc/server/adapters/fetch";import { appRouter } from "~/lib/router";
    const handler = (event: APIEvent) =>  fetchRequestHandler({    endpoint: "/api/trpc",    req: event.request,    router: appRouter,    createContext: () => ({})  });
    export const GET = handler;
    export const POST = handler;

To learn more about tRPC, you can read the [tRPC documentation](https://trpc.io/docs).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/api-routes.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/api-routes)

Previous[← Routing](/solid-start/building-your-application/routing)

Next[CSS and styling →](/solid-start/building-your-application/css-and-styling)

Building your application

CSS and styling
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/css-and-styling.mdx)

SolidStart is a standards-based framework that, instead of modifying the behavior of the [`<style>` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style), strives to build on top of it.

* * *

[Styling components](/solid-start/building-your-application/css-and-styling#styling-components)
-----------------------------------------------------------------------------------------------

Vite provides a simple way to [manage CSS for complex web applications](https://vitejs.dev/guide/features.html#css). It does this by allowing users to import CSS using ESM syntax anywhere within the component tree. For example, you can write CSS in a file accompanying your component file:

    src/├── components/│   ├── Card.tsx│   ├── Card.css

To use the CSS in the component, you can define the CSS in the `Card.css` file and import it in the `Card.tsx` file:

    .card {  background-color: #446b9e;}
    h1 {  font-size: 1.5em;  font-weight: bold;}
    p {  font-size: 1em;  font-weight: normal;}

    import "./Card.css";
    const Card = (props) => {  return (    <div class="card">      <h1>{props.title}</h1>      <p>{props.text}</p>    </div>  );};

### [CSS modules for scoped styles](/solid-start/building-your-application/css-and-styling#css-modules-for-scoped-styles)

SolidStart also supports [vite's CSS modules](https://vitejs.dev/guide/features.html#css-modules). Through [CSS modules](https://github.com/css-modules/css-modules), you can scope certain CSS to a component and use the CSS class in multiple components to style them differently.

For this feature to work, the `.css` file must be named with the `.module.css` extension. This convention also works for `.scss` and `.sass` files, which can be named with the `.module.scss` and `.module.sass` extensions, respectively.

    .card {  background-color: #446b9e;}
    div.card > h1 {  font-size: 1.5em;  font-weight: bold;}
    div.card > p {  font-size: 1em;  font-weight: normal;}

When first using CSS modules, you will encounter an error when trying to use the class attribute in your components. This is because, behind the scenes, classes defined in CSS modules are renamed to a series of random letters. When classes are hard coded using the class attribute (`class="card"`), Solid is not aware that it should rename `card` to something different.

To fix this, you can import classes used in your CSS module. The import object can be thought of as `humanClass: generatedClass` and within the component, the key (ie. the class on the element) is used to get the unique, generated class name.

    import styles from "./Card.module.css";
    const Card = (props) => {  return (    <div class={styles.card}>      <h1>{props.title}</h1>      <p>{props.text}</p>    </div>  );};

* * *

[Other ways to style components](/solid-start/building-your-application/css-and-styling#other-ways-to-style-components)
-----------------------------------------------------------------------------------------------------------------------

SolidStart is built on top of Solid, meaning styling is not limited to CSS. To see other ways to style components, see the [styling section in the Solid documentation](/guides/styling-your-components).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/css-and-styling.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/css-and-styling)

Previous[← API routes](/solid-start/building-your-application/api-routes)

Next[Data loading →](/solid-start/building-your-application/data-loading)

Building your application

Data loading
============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/data-loading.mdx)

SolidStart aims to make it easy to load data from your data sources to keep your UI updated with your data. For most of your data requirements, routes will likely be used to decide what data to load. SolidStart includes nested routing to help structure your application's UI in a hierarchical way, so that you can share layouts.

* * *

[Data loading on the client](/solid-start/building-your-application/data-loading#data-loading-on-the-client)
------------------------------------------------------------------------------------------------------------

Solid provides a way to load data from your data sources using the [`createResource` primitive](/reference/basic-reactivity/create-resource). It takes an async function and returns a [signal](/reference/basic-reactivity/create-signal) from it. `createResource` integrates with [`Suspense`](/reference/components/suspense) and [`ErrorBoundary`](/reference/components/error-boundary) to help manage lifecycle and error states.

TypeScriptJavaScript

    // src/routes/users.tsximport { For, createResource } from "solid-js";
    type User = { name: string; house: string };
    export default function Page() {  const [users] = createResource(async () => {    const response = await fetch("https://example.com/users");    return (await response.json()) as User[];  });
      return <For each={users()}>{(user) => <li>{user.name}</li>}</For>;}

    // src/routes/users.jsximport { For, createResource } from "solid-js";
    export default function Page() {  const [users] = createResource(async () => {    const response = await fetch("https://example.com/users");    return (await response.json());  });
      return <For each={users()}>{(user) => <li>{user.name}</li>}</For>;}

When fetching inside components, you can encounter unnecessary waterfalls, especially when nested under lazy loaded sections. To solve this, it is recommended to hoist the data fetching to the top of the component tree or, when in [SolidStart](/solid-start), use the server to fetch data in a non-blocking way. For the example below we will be using the data in APIs in [`solid-router`](/solid-router)

Using some of the features of `solid-router`, we can create a cache for our data:

TypeScriptJavaScript

    // /routes/users.tsximport { For } from "solid-js";import { createAsync, query } from "@solidjs/router";
    type User = { name: string; email: string };
    const getUsers = query(async () => {  const response = await fetch("https://example.com/users");  return (await response.json()) as User[];}, "users");
    export const route = {  preload: () => getUsers(),};
    export default function Page() {  const users = createAsync(() => getUsers());
      return <For each={users()}>{(user) => <li>{user.name}</li>}</For>;}

    // /routes/users.jsximport { For } from "solid-js";import { createAsync, query } from "@solidjs/router";
    const getUsers = query(async () => {  const response = await fetch("https://example.com/users");  return (await response.json());}, "users");
    export const route = {  preload: () => getUsers(),};
    export default function Page() {  const users = createAsync(() => getUsers());
      return <For each={users()}>{(user) => <li>{user.name}</li>}</For>;}

With this method, however, there are some caveats to be aware of:

1.  The [`preload`](/solid-router/reference/preload-functions/preload) function is called **once** per route, which is the first time the user comes to that route. Following that, the fine-grained resources that remain alive synchronize with state/url changes to refetch data when needed. If the data needs a refresh, the [`refetch`](/guides/fetching-data#refetch) function returned in the `createResource` can be used.
2.  Before the route is rendered, the `preload` function is called. It does not share the same `context` as the route. The context tree that is exposed to the `preload` function is anything above the `Page` component.
3.  On both the server and the client, the `preload` function is called. The resources can avoid refetching if they serialized their data in the server render. The server-side render will only wait for the resources to fetch and serialize if the resource signals are accessed under a `Suspense` boundary.

### [Data loading always on the server](/solid-start/building-your-application/data-loading#data-loading-always-on-the-server)

An advantage of being a full-stack JavaScript framework is that it is easy to write data loading code that can run both on the server and client. SolidStart offers a way to do that and more. Through the `"use server"` comment you can tell the bundler to create an RPC and not include the code in the clients bundle. This lets you write code that only runs on the server without needing to create an API route for it. For example, it could be database access or internal APIs, or when you sit within your function and need to use your server.

TypeScriptJavaScript

    // /routes/users.tsximport { For } from "solid-js";import { createAsync, query } from "@solidjs/router";
    type User = { name: string; email: string };
    const getUsers = query(async () => {  "use server";  return store.users.list();}, "users");
    export const route = {  preload: () => getUsers(),};
    export default function Page() {  const users = createAsync(() => getUsers());
      return <For each={users()}>{(user) => <li>{user.name}</li>}</For>;}

    // /routes/users.jsximport { For } from "solid-js";import { createAsync, query } from "@solidjs/router";
    const getUsers = query(async () => {  "use server";  return store.users.list();}, "users");
    export const route = {  preload: () => getUsers(),};
    export default function Page() {  const users = createAsync(() => getUsers());
      return <For each={users()}>{(user) => <li>{user.name}</li>}</For>;}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/data-loading.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/data-loading)

Previous[← CSS and styling](/solid-start/building-your-application/css-and-styling)

Next[Head and metadata →](/solid-start/building-your-application/head-and-metadata)

Building your application

Head and metadata
=================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/head-and-metadata.mdx)

SolidStart does not come with a metadata library. In cases where you want to customize the content in the `head` of your `document`, you can use the `@solidjs/meta` library.

    npm i @solidjs/meta

The common elements used in the [`head`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) are:

*   [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title): Specifies the title of the page, used by the browser tab and headings of search results.
*   [`meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta): Specifies a variety of metadata about the page specified by `name`, ranging from favicon, character set to OG tags for SEO.
*   [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link): Adds assets like stylesheets or scripts for the browser to load for the page.
*   [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style): Adds inline styles to the page.

* * *

[Inside a Route component](/solid-start/building-your-application/head-and-metadata#inside-a-route-component)
-------------------------------------------------------------------------------------------------------------

When applying metadata to a specific route, you can use the `Title`:

    import { Title } from "@solidjs/meta";
    export default function About() {  return (    <>      <Title>About</Title>      <h1>About</h1>    </>  );}

These tags will be applied for that specific route only and will be removed from `document.head` once a user navigates away from the page. `routeData` can also be used here to create titles and SEO metadata that is specific to the dynamic parts of the route.

* * *

[Adding a site suffix in Title](/solid-start/building-your-application/head-and-metadata#adding-a-site-suffix-in-title)
-----------------------------------------------------------------------------------------------------------------------

Custom components can be created to wrap the `Title` component to add a site-specific prefix to all the titles:

    export default function MySiteTitle(props) {  return <Title>{props.children} | My Site</Title>;}

    import MySiteTitle from "~/components/MySiteTitle";
    export default function About() {  return (    <>      <MySiteTitle>About</MySiteTitle>      <h1>About</h1>    </>  );}

* * *

[Using async data in `Title`](/solid-start/building-your-application/head-and-metadata#using-async-data-in-title)
-----------------------------------------------------------------------------------------------------------------

Resources can be used to create titles specific to the dynamic parts of the route:

    import { Title } from "@solidjs/meta";import { RouteSectionProps } from "@solidjs/router";import { createResource, Show } from "solid-js";
    export default function User(props: RouteSectionProps) {  const [user] = createResource(() => fetchUser(props.params.id));
      return (    <Show when={user()}>      <Title>{user()?.name}</Title>      <h1>{user()?.name}</h1>    </Show>  );}

For this example, `routeData` can be used to retrieve the user's name from the `id` in `/users/:id` and use it in the `Title` component. Similarly, other information can be used to build up other tags for SEO.

* * *

[Adding SEO tags](/solid-start/building-your-application/head-and-metadata#adding-seo-tags)
-------------------------------------------------------------------------------------------

SEO tags like `og:title`, `og:description`, `og:image`, use the `Meta` component. Since these tags may want to be used across multiple routes, they can be added inside the `Head` of the `root.tsx` file.

    export default function Root() {  return (    <Html lang="en">      <Head>        <Meta          property="og:image"          content="https://example.com/image.jpg"        />        <Meta          property="og:image:alt"          content="Welcome to my site"        />        <Meta property="og:image:width" content="1200" />        <Meta property="og:image:height" content="600" />        <Meta property="og:site_name" content="GitHub" />      </Head>    </Html>  );}

If you need to add route-specific information inside your route, much like the `Title` component, you can use the `Meta` component within the desired route. This overrides the `Meta` tags used within the `Head` component.

    import MySiteTitle from "~/components/MySiteTitle";
    export default function About() {  return (    <>      <MySiteTitle>About</MySiteTitle>      <Meta name="description" content="This is my content tag." />      <Meta        property="og:title"        content="Welcome to my site!"      />      <Meta        property="og:description"        content="A website"      />      <h1>About</h1>    </>  );}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/head-and-metadata.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/head-and-metadata)

Previous[← Data loading](/solid-start/building-your-application/data-loading)

Next[Route pre-rendering →](/solid-start/building-your-application/route-prerendering)

Building your application

Route pre-rendering
===================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/route-prerendering.mdx)

SolidStart offers a way to pre-render pages at build time. The easiest way to accomplish this is by passing a list of routes to be pre-rendered to the `routes` option.

    import { defineConfig } from "@solidjs/start/config";
    export default defineConfig({  server: {    prerender: {      routes: ["/", "/about"]    }  }});

When you wish for all your routes to be pre-rendered, you can pass `true` to the `crawlLinks` option:

    import { defineConfig } from "@solidjs/start/config";
    export default defineConfig({  server: {    prerender: {      crawlLinks: true    }  }});

For more information on prerender options, check out [Nitro's documentation](https://nitro.build/config#prerender)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/route-prerendering.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/route-prerendering)

Previous[← Head and metadata](/solid-start/building-your-application/head-and-metadata)

Next[Static assets →](/solid-start/building-your-application/static-assets)

Building your application

Static assets
=============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/building-your-application/static-assets.mdx)

Within SolidStart there are two ways to import static assets into your project: using the public directory and using imports.

* * *

[Public directory](/solid-start/building-your-application/static-assets#public-directory)
-----------------------------------------------------------------------------------------

Rich web applications use assets to create visuals. In SolidStart, the `/public` directory can be used to store static assets. These assets are served at the exact path they are in, relative to the public directory:

    |-- public|   favicon.ico                   ->  /favicon.ico|   |-- images|   |   |-- logo.png              ->  /images/logo.png|   |   |-- background.png        ->  /images/background.png|   |-- models|   |   |-- player.gltf           ->  /models/player.gltf|   |-- documents|   |   |-- report.pdf            ->  /documents/report.pdf

If you would like to reference an asset in the public directory, you can use the absolute path to the asset:

    export default function About() {  return (    <>      <h1>About</h1>      <img src="/images/logo.png" alt="Solid logo" />    </>  );}

This is ideal when you want to have human-readable, stable references to static assets. This can be useful for assets such as:

*   documents
*   service workers
*   images, audio, and video
*   manifest files
*   metadata files (e.g., `robots.txt`, sitemaps)
*   favicon

* * *

[Importing assets](/solid-start/building-your-application/static-assets#importing-assets)
-----------------------------------------------------------------------------------------

Vite provides a way to import assets directly into your Solid components:

    import logo from "./solid.png";
    export default function About() {  return (    <>      <h1>About</h1>      <img src={logo} alt="Solid logo" />      // Renders      <img src="/assets/solid.2d8efhg.png" alt="Solid logo" />    </>  );}

When you use imports, Vite will create a hashed filename. For example, `solid.png` will become `solid.2d8efhg.png`.

* * *

[Public directory versus imports](/solid-start/building-your-application/static-assets#public-directory-versus-imports)
-----------------------------------------------------------------------------------------------------------------------

The public directory and imports are both valid ways to include static assets in your project. The driver to use one over the other is based on your use case.

For dynamic updates to your assets, using the public directory is the best choice. It allows you to maintain full control over the asset URL paths, ensuring that the links remain consistent even when the assets are updated.

When using imports, the filename is hashed and therefore will not be predictable over time. This can be beneficial for cache busting but detrimental if you want to send someone a link to the asset.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/building-your-application/static-assets.mdx&page=https://docs.solidjs.com/solid-start/building-your-application/static-assets)

Previous[← Route pre-rendering](/solid-start/building-your-application/route-prerendering)

Next[Middleware →](/solid-start/advanced/middleware)

Advanced

Middleware
==========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/middleware.mdx)

Middleware intercepts HTTP requests and responses to perform tasks like authentication, redirection, logging, and more. It also enables sharing request-scoped data across the application using the `event.locals` object.

* * *

[Common use cases](/solid-start/advanced/middleware#common-use-cases)
---------------------------------------------------------------------

Here are some common use cases for middleware:

*   **Request and response header management:** Middleware allows modifying headers to control caching (e.g., `Cache-Control`), improve security (e.g., `Content-Security-Policy`), or implement custom behaviour based on request characteristics.
*   **Global data sharing:** The `event.locals` object allows storing and sharing request-scoped data between middleware and any server-side context (e.g., API routes, server-only queries/actions). This is useful for passing information like user authentication status, feature flags, or other request-related data.
*   **Server-side redirects:** Middleware can redirect users based on various request properties, such as locale, authentication state, or custom query parameters.
*   **Request preprocessing:** Middleware can perform lightweight preprocessing tasks, such as validating tokens or normalizing paths.

* * *

[Limitations](/solid-start/advanced/middleware#limitations)
-----------------------------------------------------------

While middleware is powerful, certain tasks are better handled in other parts of your application for performance, maintainability, or security reasons:

*   **Authorization:** Middleware does _not_ run on every request, especially during client-side navigations. Relying on it for authorization would create a significant security vulnerability. As a result, authorization checks should be performed as close to the data source as possible. This means it within API routes, server-only queries/actions, or other server-side utilities.
*   **Heavy computation or long-running processes:** Middleware should be lightweight and execute quickly to avoid impacting performance. CPU-intensive tasks, long-running processes, or blocking operations (e.g., complex calculations, external API calls) are best handled by dedicated route handlers, server-side utilities, or background jobs.
*   **Database operations:** Performing direct database queries within middleware can lead to performance bottlenecks and make your application harder to maintain. Database interactions should be handled by server-side utilities or route handlers, which will create better management of database connections and handling of potential errors.

* * *

[Basic usage](/solid-start/advanced/middleware#basic-usage)
-----------------------------------------------------------

Middleware is configured by exporting a configuration object from a dedicated file (e.g., `src/middleware/index.ts`). This object, created using the [`createMiddleware`](/solid-start/reference/server/create-middleware) function, defines when middleware functions execute throughout the request lifecycle.

    import { createMiddleware } from "@solidjs/start/middleware";
    export default createMiddleware({  onRequest: (event) => {    console.log("Request received:", event.request.url);
        event.locals.startTime = Date.now();  },  onBeforeResponse: (event) => {    const endTime = Date.now();    const duration = endTime - event.locals.startTime;    console.log(`Request took ${duration}ms`);  },});

For SolidStart to recognize the configuration object, the file path is declared in `app.config.ts`:

    import { defineConfig } from "@solidjs/start/config";
    export default defineConfig({  middleware: "src/middleware/index.ts",});

* * *

[Lifecycle events](/solid-start/advanced/middleware#lifecycle-events)
---------------------------------------------------------------------

A middleware function executes at specific points in the request lifecycle, using two key events: `onRequest` and `onBeforeResponse`.

### [`onRequest`](/solid-start/advanced/middleware#onrequest)

The `onRequest` event is triggered at the beginning of the request lifecycle, before the request is handled by the route handler. This is the ideal place to:

*   Store request-scoped data in `event.locals` for use in later middleware functions or route handlers.
*   Set or modify request headers.
*   Perform early redirects.

### [`onBeforeResponse`](/solid-start/advanced/middleware#onbeforeresponse)

The `onBeforeResponse` event is triggered after a request has been processed by the route handler but before the response is sent to the client. This is the ideal place to:

*   Set or modify response headers.
*   Log response metrics or perform other post-processing tasks.
*   Modify the response body.

* * *

[Locals](/solid-start/advanced/middleware#locals)
-------------------------------------------------

In web applications, there's often a need to share request-specific data across different parts of the server-side code. This data might include user authentication status, trace IDs for debugging, or client metadata (e.g., user agent, geolocation).

The `event.locals` is a plain JavaScript object that can hold any JavaScript value. This object provides a temporary, request-scoped storage layer to address this need. Any data stored within it is only available during the processing of a single HTTP request and is automatically cleared afterward.

    import { createMiddleware } from "@solidjs/start/middleware";
    export default createMiddleware({  onRequest: (event) => {    event.locals.user = {      name: "John Wick",    };    event.locals.sayHello = () => {      return "Hello, " + event.locals.user.name;    };  },});

Within middleware, `event.locals` can be accessed and modified directly. Other server-side contexts must use the [`getRequestEvent`](/reference/server-utilities/get-request-event) function to access the `event.locals` object.

    import { getRequestEvent } from "solid-js/web";import { query, createAsync } from "@solidjs/router";
    const getUser = query(async () => {  "use server";  const event = getRequestEvent();  return {    name: event?.locals?.user?.name,    greeting: event?.locals?.sayHello(),  };}, "user");
    export default function Page() {  const user = createAsync(() => getUser());
      return (    <div>      <p>Name: {user()?.name}</p>      <button onClick={() => alert(user()?.greeting)}>Say Hello</button>    </div>  );}

* * *

[Headers](/solid-start/advanced/middleware#headers)
---------------------------------------------------

Request and response headers can be accessed and modified using the `event.request.headers` and `event.response.headers` objects. These follow the [standard Web API `Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) interface, exposing built-in methods for reading/updating headers.

    import { createMiddleware } from "@solidjs/start/middleware";
    export default createMiddleware({  onRequest: (event) => {    // Reading client metadata for later use    const userAgent = event.request.headers.get("user-agent");    // Adding custom headers to request/response    event.request.headers.set("x-custom-request-header", "hello");    event.response.headers.set("x-custom-response-header1", "hello");  },  onBeforeResponse: (event) => {    // Finalizing response headers before sending to client    event.response.headers.set("x-custom-response-header2", "hello");  },});

Headers set in `onRequest` are applied **before** the route handler processes the request, allowing downstream middleware or route handlers to override them. Headers set in `onBeforeResponse` are applied **after** the route handler and are finalized for the client.

* * *

[Cookies](/solid-start/advanced/middleware#cookies)
---------------------------------------------------

HTTP cookies are accessible through the `Cookie` request header and `Set-Cookie` response header. While these headers can be manipulated directly, [Vinxi](https://vinxi.vercel.app), the underlying server toolkit powering SolidStart, provides helpers to simplify cookie management. See the [Vinxi Cookies documentation](https://vinxi.vercel.app/api/server/cookies.html) for more information.

    import { createMiddleware } from "@solidjs/start/middleware";import { getCookie, setCookie } from "vinxi/http";
    export default createMiddleware({  onRequest: (event) => {    // Reading a cookie    const theme = getCookie(event.nativeEvent, "theme");
        // Setting a secure session cookie with expiration    setCookie(event.nativeEvent, "session", "abc123", {      httpOnly: true,      secure: true,      maxAge: 60 * 60 * 24, // 1 day    });  },});

* * *

[Custom responses](/solid-start/advanced/middleware#custom-responses)
---------------------------------------------------------------------

Returning a value from a middleware function immediately terminates the request processing pipeline and sends the returned value as the response to the client. This means no further middleware functions or route handlers will be executed.

    import { createMiddleware } from "@solidjs/start/middleware";
    export default createMiddleware({  onRequest: () => {    return new Response("Unauthorized", { status: 401 });  },});

Only [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects can be returned from middleware functions. Returning any other value will result in an error.

### [Redirects](/solid-start/advanced/middleware#redirects)

[Solid Router](/solid-router) provides the [`redirect` helper function](/solid-router/reference/response-helpers/redirect) which simplifies creating redirect responses.

    import { createMiddleware } from "@solidjs/start/middleware";import { redirect } from "@solidjs/router";
    const REDIRECT_MAP: Record<string, string> = {  "/signup": "/auth/signup",  "/login": "/auth/login",};
    export default createMiddleware({  onRequest: (event) => {    const { pathname } = new URL(event.request.url);
        // Redirecting legacy routes permanently to new paths    if (pathname in REDIRECT_MAP) {      return redirect(REDIRECT_MAP[pathname], 301);    }  },});

This example checks the requested path and returns a redirect response if it matches a predefined path. The 301 status code indicates a permanent redirect. Other redirect status codes (e.g., 302, 307) are available as needed.

### [JSON responses](/solid-start/advanced/middleware#json-responses)

Solid Router provides the [`json` helper function](/solid-router/reference/response-helpers/json) which simplifies sending custom JSON responses.

    import { createMiddleware } from "@solidjs/start/middleware";import { json } from "@solidjs/router";
    export default createMiddleware({  onRequest: (event) => {    // Rejecting unauthorized API requests with a JSON error    const authHeader = event.request.headers.get("Authorization");    if (!authHeader) {      return json({ error: "Unauthorized" }, { status: 401 });    }  },});

* * *

[Chaining middleware functions](/solid-start/advanced/middleware#chaining-middleware-functions)
-----------------------------------------------------------------------------------------------

`onRequest` and `onBeforeResponse` options in `createMiddleware` can accept either a single function or an array of middleware functions. When an array is provided, these functions execute sequentially within the same lifecycle event. This enables composing smaller, more-focused middleware functions, rather than handling all logic in a single, large middleware function.

    import { createMiddleware } from "@solidjs/start/middleware";import { type FetchEvent } from "@solidjs/start/server";
    function middleware1(event: FetchEvent) {  event.request.headers.set("x-custom-header1", "hello-from-middleware1");}
    function middleware2(event: FetchEvent) {  event.request.headers.set("x-custom-header2", "hello-from-middleware2");}
    export default createMiddleware({  onRequest: [middleware1, middleware2],});

The order of middleware functions in the array determines their execution order. Dependent middleware functions should be placed after the middleware functions they rely on. For example, authentication middleware should typically run before logging middleware.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/advanced/middleware.mdx&page=https://docs.solidjs.com/solid-start/advanced/middleware)

Previous[← Static assets](/solid-start/building-your-application/static-assets)

Next[Sessions →](/solid-start/advanced/session)

Advanced

Sessions
========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/session.mdx)

Sessions allow web applications to maintain state between user requests. Since HTTP is stateless, each request is treated independently. Sessions address this by allowing the server to recognize multiple requests from the same user, which is helpful for tracking authentication and preferences.

* * *

[How sessions work](/solid-start/advanced/session#how-sessions-work)
--------------------------------------------------------------------

A session typically involves:

1.  **Session creation**: When tracking is needed (e.g., upon login or first visit), the server creates a session. This involves generating a unique **session ID** and storing the session data, _encrypted and signed_, within a cookie.
2.  **Session cookie transmission**: The server sends a `Set-Cookie` HTTP header. This instructs the browser to store the session cookie.
3.  **Subsequent requests**: The browser automatically includes the session cookie in the `Cookie` HTTP header for requests to the server.
4.  **Session retrieval and data access**: For each request, the server checks for the session cookie, retrieves the session data if a cookie is present, then decrypts and verifies the signature of the session data for the application to access and use this data.
5.  **Session expiration and destruction**: Sessions typically expire after a period of time or upon user sign-out and the data is removed. This is done by setting a `Max-Age` attribute on the cookie or by sending a `Set-Cookie` HTTP header with an expired date.

Most of these steps are automatically managed by the [session helpers](/solid-start/advanced/session#session-helpers).

### [Database sessions](/solid-start/advanced/session#database-sessions)

For larger applications or when more advanced session management is needed, session data can be stored in a database. This approach is similar to the cookie-based approach, but with some key differences:

*   The session data is stored in the database, associated with the session ID.
*   Only the session ID is stored in the cookie, not the session data.
*   The session data is retrieved from the database using the session ID, instead of being retrieved directly from the cookie.
*   Upon expiration, in addition to the session cookie, the database record containing the session data is also removed.

SolidStart does not automatically handle interactions with a database; you need to implement this yourself.

* * *

[Session helpers](/solid-start/advanced/session#session-helpers)
----------------------------------------------------------------

[Vinxi](https://vinxi.vercel.app), the underlying server toolkit powering SolidStart, provides helpers to simplify working with sessions. It provides a few key session helpers:

*   [`useSession`](https://vinxi.vercel.app/api/server/session.html#usesession): Initializes a session or retrieves the existing session and returns a session object.
*   [`getSession`](https://vinxi.vercel.app/api/server/session.html#getsession): Retrieves the current session or initializes a new session.
*   [`updateSession`](https://vinxi.vercel.app/api/server/session.html#updatesession): Updates data within the current session.
*   [`clearSession`](https://vinxi.vercel.app/api/server/session.html#clearsession): Clears the current session.

These helpers work _only_ in server-side contexts, such as within server functions and API routes. This is because session management requires access to server-side resources as well as the ability to get and set HTTP headers.

For more information, see the [Cookies documentation in the Vinxi docs](https://vinxi.vercel.app/api/server/session.html).

* * *

[Creating a session](/solid-start/advanced/session#creating-a-session)
----------------------------------------------------------------------

The `useSession` helper is the primary way to create and manage sessions. It provides a comprehensive interface for all session operations.

    import { useSession } from "vinxi/http";
    type SessionData = {  theme: "light" | "dark";};
    export async function useThemeSession() {  "use server";  const session = await useSession<SessionData>({    password: process.env.SESSION_SECRET as string,    name: "theme",  });
      if (!session.data.theme) {    await session.update({      theme: "light",    });  }
      return session;}

In this example, the `useThemeSession` server function creates a session that stores a user's theme preference.

`useSession` requires a strong password for encrypting and signing the session cookie. This password must be at least 32 characters long and should be kept highly secure. It is strongly recommended to store this password in a [private environment variable](/configuration/environment-variables#private-environment-variables), as shown in the example above, rather than hardcoding it in your source code.

A password can be generated using the following command:

    openssl rand -base64 32

`useSession` adds a `Set-Cookie` HTTP header to the current server response. By default, the cookie is named `h3`, but can be customized with the `name` option, as shown in the example above.

* * *

[Getting the session data](/solid-start/advanced/session#getting-the-session-data)
----------------------------------------------------------------------------------

The `useSession` helper provides access to the session data from the current request with the `data` property.

    export async function getThemeSession() {  "use server";  const session = await useThemeSession();
      return session.data.theme;}

* * *

[Updating the session data](/solid-start/advanced/session#updating-the-session-data)
------------------------------------------------------------------------------------

The `useSession` helper provides the `update` method to update the session data from the current request.

    export async function updateThemeSession(data: SessionData) {  "use server";  const session = await useThemeSession();  await session.update(data);}

* * *

[Clearing the session data](/solid-start/advanced/session#clearing-the-session-data)
------------------------------------------------------------------------------------

The `useSession` helper provides the `clear` method to clear the session data from the current request.

    export async function clearThemeSession() {  "use server";  const session = await useThemeSession();  await session.clear();}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/advanced/session.mdx&page=https://docs.solidjs.com/solid-start/advanced/session)

Previous[← Middleware](/solid-start/advanced/middleware)

Next[Request events →](/solid-start/advanced/request-events)

Advanced

Request events
==============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/request-events.mdx)

Request events in SolidStart are retrieved using the [`getRequestEvent`](/reference/server-utilities/get-request-event) from `@solidjs/web`. These requests happen anywhere on the server.

* * *

[Locals](/solid-start/advanced/request-events#locals)
-----------------------------------------------------

SolidStart uses `event.locals` to pass around a local context where needed.

When adding fields to `event.locals`, the fields can be typed:

    /// <reference types="@solidjs/start/env" />declare module App {  interface RequestEventLocals {    /**     * Declare your getRequestEvent().locals here     */  }}

* * *

[nativeEvent](/solid-start/advanced/request-events#nativeevent)
---------------------------------------------------------------

Sometimes access is still needed to the underlying event from [Vinxi](https://vinxi.vercel.app/). This can be accessed that using the `.nativeEvent` property, which is the underlying H3Event used, and can be passed to the helpers available in the ecosystem. Note that Vinxi HTTP helpers _do not_ treeshake so you can only import them in files that do not contain client or isomorphic code.

Many of these events support Async Local Storage so this may not be needed.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/advanced/request-events.mdx&page=https://docs.solidjs.com/solid-start/advanced/request-events)

Previous[← Sessions](/solid-start/advanced/session)

Next[Returning responses →](/solid-start/advanced/return-responses)

Advanced

Returning responses
===================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/return-responses.mdx)

In SolidStart, it is possible to return a Response object from a server function. [`solid-router`](/solid-router) knows how to handle certain responses with its [`query`](/solid-router/reference/data-apis/query) and [`action`](/solid-router/reference/data-apis/action) APIs. For Typescript, when returning a response using `solid-router`'s `redirect`, `reload`, or `json` helpers, they will not impact the return value of the server function.

While we suggest depending on the type of the function to handle errors differently, you can always return or throw a response.

* * *

[Examples](/solid-start/advanced/return-responses#examples)
-----------------------------------------------------------

In the following example, the `hello` function will return a value of type `Promise<{ hello: string }>`:

    import { json } from "@solidjs/router";import { GET } from "@solidjs/start";
    const hello = GET(async (name: string) => {  "use server";  return json(    { hello: new Promise<string>((r) => setTimeout(() => r(name), 1000)) },    { headers: { "cache-control": "max-age=60" } }  );});

However, in this example, since `redirect` and `reload` return `never` as their type, `getUser` can only return a value of type `Promise<User>`:

    export async function getUser() {  "use server";
      const session = await getSession();  const userId = session.data.userId;  if (userId === undefined) return redirect("/login");
      try {    const user: User = await db.user.findUnique({ where: { id: userId } });    // throwing can be awkward.    if (!user) return redirect("/login");    return user;  } catch {    // do stuff    throw redirect("/login");  }}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/advanced/return-responses.mdx&page=https://docs.solidjs.com/solid-start/advanced/return-responses)

Previous[← Request events](/solid-start/advanced/request-events)

Next[Auth →](/solid-start/advanced/auth)

Advanced

Auth
====

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/auth.mdx)

Server functions can be used to protect sensitive resources like user data.

    "use server"
    async function getPrivatePosts() {  const user = await getUser()  if(!user) {    return null  // or throw an error  }
      return db.getPosts({ userId: user.id, private: true })}

The `getUser` function can be [implemented using sessions](/solid-start/advanced/session).

* * *

[Protected Routes](/solid-start/advanced/auth#protected-routes)
---------------------------------------------------------------

Routes can be protected by checking the user or session object during data fetching. This example uses [Solid Router](/solid-router).

    const getPrivatePosts = query(async function() {  "use server"  const user = await getUser()  if(!user) {    throw redirect("/login");  }
      return db.getPosts({ userId: user.id, private: true })})
    export default function Page() {  const posts = createAsync(() => getPrivatePosts());}

Once the user hits this route, the router will attempt to fetch `getPrivatePosts` data. If the user is not signed in, `getPrivatePosts` will throw and the router will redirect to the login page.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/advanced/auth.mdx&page=https://docs.solidjs.com/solid-start/advanced/auth)

Previous[← Returning responses](/solid-start/advanced/return-responses)

Next[WebSocket endpoint →](/solid-start/advanced/websocket)

Advanced

WebSocket endpoint
==================

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/websocket.mdx)

WebSocket endpoint may be included by passing the ws handler file you specify in your start config. Note that this feature is [experimental on the Nitro server](https://nitro.build/guide/websocket#opt-in-to-the-experimental-feature) and its config may change in future releases of SolidStart. Use it with caution.

    import { defineConfig } from "@solidjs/start/config";
    export default defineConfig({  server: {    experimental: {      websocket: true,    },  },}).addRouter({  name: "ws",  type: "http",  handler: "./src/ws.ts",  target: "server",  base: "/ws",});

Inside the ws file, you can export an eventHandler function to manage WebSocket connections and events:

    import { eventHandler } from "vinxi/http";
    export default eventHandler({  handler() {},  websocket: {    async open(peer) {      console.log("open", peer.id, peer.url);    },    async message(peer, msg) {      const message = msg.text();      console.log("msg", peer.id, peer.url, message);    },    async close(peer, details) {      console.log("close", peer.id, peer.url);    },    async error(peer, error) {      console.log("error", peer.id, peer.url, error);    },  },});

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/advanced/websocket.mdx&page=https://docs.solidjs.com/solid-start/advanced/websocket)

Previous[← Auth](/solid-start/advanced/auth)

Next[Security →](/solid-start/guides/security)

Guides

Security
========

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/security.mdx)

* * *

[XSS (Cross Site Scripting)](/solid-start/guides/security#xss-cross-site-scripting)
-----------------------------------------------------------------------------------

Solid automatically escape values passed to JSX expressions to reduce the risk of XSS attacks. However, this protection does not apply when using [`innerHTML`](/reference/jsx-attributes/innerhtml).

To protect your application from XSS attacks:

*   Avoid using `innerHTML` when possible. If necessary, make sure to sanitize user-supplied data with libraries such as [DOMPurify](https://github.com/cure53/DOMPurify).
*   Validate and sanitize user inputs, especially form inputs on the server and client.
*   Set a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).
*   Sanitize attributes containing user-supplied data within `<noscript>` elements. This includes both the attributes of the `<noscript>` element itself and its children.

It is highly recommended to read the [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) for further guidance.

* * *

[Content Security Policy (CSP)](/solid-start/guides/security#content-security-policy-csp)
-----------------------------------------------------------------------------------------

To configure the `Content-Security-Policy` HTTP header, a [middleware](/solid-start/advanced/middleware) can be used.

### [With nonce (recommended)](/solid-start/guides/security#with-nonce-recommended)

If you want to use a [strict CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#strict_csp) with nonces:

1.  Create a middleware that configures the CSP header. It must then be registered using the [`onRequest`](/solid-start/advanced/middleware#onrequest) event.
2.  Create a nonce using a cryptographic random value generator, such as the [`randomBytes`](https://nodejs.org/api/crypto.html#cryptorandombytessize-callback) function from the `crypto` module.
3.  Store the nonce in the [`locals`](/solid-start/advanced/middleware#locals) object.
4.  Configure SolidStart to use the nonce in your [`entry-server.tsx`](/solid-start/reference/entrypoints/entry-server) file.

Middlewareentry-server.tsx

    import { createMiddleware } from "@solidjs/start/middleware";import { randomBytes } from "crypto";
    export default createMiddleware({  onRequest: (event) => {    const nonce = randomBytes(16).toString("base64");
        event.locals.nonce = nonce;
        const csp = `      default-src 'self';      script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';      object-src 'none';      base-uri 'none';      frame-ancestors 'none';      form-action 'self';    `.replace(/\s+/g, " ");
        event.response.headers.set("Content-Security-Policy", csp);  },});

    // src/entry-server.tsx// @refresh reloadimport { createHandler, StartServer } from "@solidjs/start/server";
    export default createHandler(  () => <StartServer /* ... */ />,  (event) => ({ nonce: event.locals.nonce }));

### [Without nonce](/solid-start/guides/security#without-nonce)

To configure CSP without a nonce, a middleware that sets the CSP header is required, and it should be registered to run during the [`onBeforeResponse`](/solid-start/advanced/middleware#onbeforeresponse) event:

    import { createMiddleware } from "@solidjs/start/middleware";
    export default createMiddleware({  onBeforeResponse: (event) => {    const csp = `      default-src 'self';      font-src 'self'  ;      object-src 'none';      base-uri 'none';      frame-ancestors 'none';      form-action 'self';    `.replace(/\s+/g, " ");
        event.response.headers.set("Content-Security-Policy", csp);  },});

* * *

[CORS (Cross-Origin Resource Sharing)](/solid-start/guides/security#cors-cross-origin-resource-sharing)
-------------------------------------------------------------------------------------------------------

When other applications need access to API endpoints, a middleware that configures the CORS headers is needed:

    import { createMiddleware } from "@solidjs/start/middleware";import { json } from "@solidjs/router";
    const TRUSTED_ORIGINS = ["https://my-app.com", "https://another-app.com"];
    export default createMiddleware({  onBeforeResponse: (event) => {    const { request, response } = event;
        response.headers.append("Vary", "Origin, Access-Control-Request-Method");
        const origin = request.headers.get("Origin");    const requestUrl = new URL(request.url);    const isApiRequest = requestUrl && requestUrl.pathname.startsWith("/api");
        if (isApiRequest && origin && TRUSTED_ORIGINS.includes(origin)) {      // Handle preflight requests.      if (        request.method === "OPTIONS" &&        request.headers.get("Access-Control-Request-Method")      ) {        // Preflight requests are standalone, so we immediately send a response.        return json(null, {          headers: {            "Access-Control-Allow-Origin": origin,            "Access-Control-Allow-Methods": "OPTIONS, POST, PUT, PATCH, DELETE",            "Access-Control-Allow-Headers": "Authorization, Content-Type",          },        });      }
          // Handle normal requests.      response.headers.set("Access-Control-Allow-Origin", origin);    }  },});

* * *

[CSRF (Cross-Site Request Forgery)](/solid-start/guides/security#csrf-cross-site-request-forgery)
-------------------------------------------------------------------------------------------------

To prevent CSRF attacks, a middleware can be used to block untrusted requests:

    import { createMiddleware } from "@solidjs/start/middleware";import { json } from "@solidjs/router";
    const SAFE_METHODS = ["GET", "HEAD", "OPTIONS", "TRACE"];const TRUSTED_ORIGINS = ["https://another-app.com"];
    export default createMiddleware({  onRequest: (event) => {    const { request } = event;
        if (!SAFE_METHODS.includes(request.method)) {      const requestUrl = new URL(request.url);      const origin = request.headers.get("Origin");
          // If we have an Origin header, check it against our allowlist.      if (origin) {        const parsedOrigin = new URL(origin);
            if (          parsedOrigin.origin !== requestUrl.origin &&          !TRUSTED_ORIGINS.includes(parsedOrigin.host)        ) {          return json({ error: "origin invalid" }, { status: 403 });        }      }
          // If we are serving via TLS and have no Origin header, prevent against      // CSRF via HTTP man-in-the-middle attacks by enforcing strict Referer      // origin checks.      if (!origin && requestUrl.protocol === "https:") {        const referer = request.headers.get("Referer");
            if (!referer) {          return json({ error: "referer not supplied" }, { status: 403 });        }
            const parsedReferer = new URL(referer);
            if (parsedReferer.protocol !== "https:") {          return json({ error: "referer invalid" }, { status: 403 });        }
            if (          parsedReferer.host !== requestUrl.host &&          !TRUSTED_ORIGINS.includes(parsedReferer.host)        ) {          return json({ error: "referer invalid" }, { status: 403 });        }      }    }  },});

This example demonstrates a basic CSRF protection that verifies the `Origin` and `Referer` headers, blocking requests from untrusted origins. Additionally, consider implementing a more robust CSRF protection mechanism, such as the [Double-Submit Cookie Pattern](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#alternative-using-a-double-submit-cookie-pattern).

For further guidance, you can look at the [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/guides/security.mdx&page=https://docs.solidjs.com/solid-start/guides/security)

Previous[← WebSocket endpoint](/solid-start/advanced/websocket)

Next[Data fetching →](/solid-start/guides/data-fetching)

Guides

Data fetching
=============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-fetching.mdx)

SolidStart is built on top of [Solid](/) and uses [Solid Router](/solid-router) by default. This means you can leverage their respective data-fetching primitives within SolidStart. Since SolidStart itself provides minimal data-fetching APIs, most functionality comes from Solid and Solid Router.

This guide provides practical examples of common data-fetching tasks using these primitives.

info

For detailed API information, refer to the [Solid](/) and [Solid Router](/solid-router) documentation.

Here's a simple example:

TypeScriptJavaScript

    // src/routes/index.tsximport { For } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>    </ul>  );}

    // src/routes/index.jsximport { For } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <For each={posts()}>{(post) => <li>{post.title}</li>}</For>    </ul>  );}

In this example, a [`query`](/solid-router/reference/data-apis/query) is created. In order to access it's data within the component, the [`createAsync`](/solid-router/reference/data-apis/create-async) primitive was used.

* * *

[Showing loading UI](/solid-start/guides/data-fetching#showing-loading-ui)
--------------------------------------------------------------------------

To show a loading UI during data-fetching:

1.  Import [`Suspense`](/reference/components/suspense) from `solid-js`.
2.  Wrap your data rendering in `<Suspense>`, and use the `fallback` prop to show a component during data fetching.

TypeScriptJavaScript

    // src/routes/index.tsximport { Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <Suspense fallback={<div>Loading...</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </Suspense>    </ul>  );}

    // src/routes/index.jsximport { Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <Suspense fallback={<div>Loading...</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </Suspense>    </ul>  );}

* * *

[Handling errors](/solid-start/guides/data-fetching#handling-errors)
--------------------------------------------------------------------

To show a fallback UI if the data-fetching fails:

1.  Import [`ErrorBoundary`](/reference/components/error-boundary) from `solid-js`.
2.  Wrap the data rendering in `<ErrorBoundary>`, and use the `fallback` prop to show a component if an error occurs.

TypeScriptJavaScript

    // src/routes/index.tsximport { ErrorBoundary, Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}

    // src/routes/index.jsximport { ErrorBoundary, Suspense, For } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}

* * *

[Preloading data](/solid-start/guides/data-fetching#preloading-data)
--------------------------------------------------------------------

Data fetching can be optimized during user navigation by preloading the data:

1.  Export a `route` object with a [`preload`](/solid-router/reference/preload-functions/preload) function.
2.  Run your query inside the `preload` function.
3.  Use the query as usual in your component.

TypeScriptJavaScript

    // src/routes/index.tsximport { ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export const route = {  preload: () => getPosts(),} satisfies RouteDefinition;
    export default function Page() {  const post = createAsync(() => getPosts());  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}

    // src/routes/index.jsximport { ErrorBoundary } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/posts");  return await posts.json();}, "posts");
    export const route = {  preload: () => getPosts(),};
    export default function Page() {  const post = createAsync(() => getPosts());  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}

* * *

[Passing parameters to queries](/solid-start/guides/data-fetching#passing-parameters-to-queries)
------------------------------------------------------------------------------------------------

When creating a query that accepts parameters, define your query function to take any number of arguments:

TypeScriptJavaScript

    // src/routes/posts/[id]/index.tsximport { ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";
    const getPost = query(async (id: string) => {  const post = await fetch(`https://my-api.com/posts/${id}`);  return await post.json();}, "post");
    export const route = {  preload: ({ params }) => getPost(params.id),} satisfies RouteDefinition;
    export default function Page() {  const postId = 1;  const post = createAsync(() => getPost(postId));  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}

    // src/routes/posts/[id]/index.jsximport { ErrorBoundary } from "solid-js";import { query, createAsync } from "@solidjs/router";
    const getPost = query(async (id) => {  const post = await fetch(`https://my-api.com/posts/${id}`);  return await post.json();}, "post");
    export const route = {  preload: ({ params }) => getPost(params.id),};
    export default function Page() {  const postId = 1;  const post = createAsync(() => getPost(postId));  return (    <div>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <h1>{post().title}</h1>      </ErrorBoundary>    </div>  );}

* * *

[Using a database or an ORM](/solid-start/guides/data-fetching#using-a-database-or-an-orm)
------------------------------------------------------------------------------------------

To safely interact with your database or ORM in a query, ensure it's server-only by adding [`"use server"`](/solid-start/reference/server/use-server) as the first line of your query:

TypeScriptJavaScript

    // src/routes/index.tsximport { For, ErrorBoundary } from "solid-js";import { query, createAsync, type RouteDefinition } from "@solidjs/router";import { db } from "~/lib/db";
    const getPosts = query(async () => {  "use server";  return await db.from("posts").select();}, "posts");
    export const route = {  preload: () => getPosts(),} satisfies RouteDefinition;
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </ErrorBoundary>    </ul>  );}

    // src/routes/index.jsximport { For, ErrorBoundary } from "solid-js";import { query, createAsync } from "@solidjs/router";import { db } from "~/lib/db";
    const getPosts = query(async () => {  "use server";  return await db.from("posts").select();}, "posts");
    export const route = {  preload: () => getPosts(),};
    export default function Page() {  const posts = createAsync(() => getPosts());  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>      </ErrorBoundary>    </ul>  );}

* * *

[Fetching data on the client](/solid-start/guides/data-fetching#fetching-data-on-the-client)
--------------------------------------------------------------------------------------------

To fetch data only on the client, use the [`createResource`](/reference/basic-reactivity/create-resource) primitive:

TypeScriptJavaScript

    // src/routes/index.tsximport { createResource, ErrorBoundary, Suspense, For } from "solid-js";
    export default function Page() {  const [posts] = createResource(async () => {    const posts = await fetch("https://my-api.com/posts");    return await posts.json();  });  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}

    // src/routes/index.jsximport { createResource, ErrorBoundary, Suspense, For } from "solid-js";
    export default function Page() {  const [posts] = createResource(async () => {    const posts = await fetch("https://my-api.com/posts");    return await posts.json();  });  return (    <ul>      <ErrorBoundary fallback={<div>Something went wrong!</div>}>        <Suspense fallback={<div>Loading...</div>}>          <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        </Suspense>      </ErrorBoundary>    </ul>  );}

See the [`createResource`](/reference/basic-reactivity/create-resource) API reference for more information.

info

For advanced features like automatic background re-fetching or infinite queries, you can use [Tanstack Query](https://tanstack.com/query/latest/docs/framework/solid/overview).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/guides/data-fetching.mdx&page=https://docs.solidjs.com/solid-start/guides/data-fetching)

Previous[← Security](/solid-start/guides/security)

Next[Data mutation →](/solid-start/guides/data-mutation)

Guides

Data mutation
=============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/data-mutation.mdx)

This guide provides practical examples of using actions to mutate data in SolidStart.

* * *

[Handling form submission](/solid-start/guides/data-mutation#handling-form-submission)
--------------------------------------------------------------------------------------

To handle [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) submissions with an action:

1.  Ensure the action has a unique name. See the [Action API reference](/solid-router/reference/data-apis/action#notes-of-form-implementation-and-ssr) for more information.
2.  Pass the action to the `<form>` element using the `action` prop.
3.  Ensure the `<form>` element uses the `post` method for submission.
4.  Use the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) object in the action to extract field data using the navite `FormData` methods.

TypeScriptJavaScript

    // src/routes/index.tsximport { action } from "@solidjs/router";
    const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

    // src/routes/index.jsximport { action } from "@solidjs/router";
    const addPost = action(async (formData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

* * *

[Passing additional arguments](/solid-start/guides/data-mutation#passing-additional-arguments)
----------------------------------------------------------------------------------------------

To pass additional arguments to your action, use the `with` method:

TypeScriptJavaScript

    // src/routes/index.tsximport { action } from "@solidjs/router";
    const addPost = action(async (userId: number, formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ userId, title }),  });}, "addPost");
    export default function Page() {  const userId = 1;  return (    <form action={addPost.with(userId)} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

    // src/routes/index.jsximport { action } from "@solidjs/router";
    const addPost = action(async (userId, formData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ userId, title }),  });}, "addPost");
    export default function Page() {  const userId = 1;  return (    <form action={addPost.with(userId)} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

* * *

[Showing pending UI](/solid-start/guides/data-mutation#showing-pending-ui)
--------------------------------------------------------------------------

To display a pending UI during action execution:

1.  Import [`useSubmission`](/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
2.  Call `useSubmission` with your action, and use the returned `pending` property to display pending UI.

TypeScriptJavaScript

    // src/routes/index.tsximport { action, useSubmission } from "@solidjs/router";
    const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <input name="title" />      <button disabled={submission.pending}>        {submission.pending ? "Adding..." : "Add Post"}      </button>    </form>  );}

    // src/routes/index.jsximport { action, useSubmission } from "@solidjs/router";
    const addPost = action(async (formData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <input name="title" />      <button disabled={submission.pending}>        {submission.pending ? "Adding..." : "Add Post"}      </button>    </form>  );}

* * *

[Handling errors](/solid-start/guides/data-mutation#handling-errors)
--------------------------------------------------------------------

To handle errors that occur within an action:

1.  Import [`useSubmission`](/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
2.  Call `useSubmission` with your action, and use the returned `error` property to handle the error.

TypeScriptJavaScript

    // src/routes/index.tsximport { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
    const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <Show when={submission.error}>        <p>{submission.error.message}</p>      </Show>      <input name="title" />      <button>Add Post</button>    </form>  );}

    // src/routes/index.jsximport { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
    const addPost = action(async (formData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <Show when={submission.error}>        <p>{submission.error.message}</p>      </Show>      <input name="title" />      <button>Add Post</button>    </form>  );}

* * *

[Validating form fields](/solid-start/guides/data-mutation#validating-form-fields)
----------------------------------------------------------------------------------

To validate form fields in an action:

1.  Add validation logic in your action and return validation errors if the data is invalid.
2.  Import [`useSubmission`](/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
3.  Call `useSubmission` with your action, and use the returned `result` property to handle the errors.

TypeScriptJavaScript

    // src/routes/index.tsximport { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
    const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  if (!title || title.length < 2) {    return {      error: "Title must be at least 2 characters",    };  }  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <input name="title" />      <Show when={submission.result?.error}>        <p>{submission.result?.error}</p>      </Show>      <button>Add Post</button>    </form>  );}

    // src/routes/index.jsximport { Show } from "solid-js";import { action, useSubmission } from "@solidjs/router";
    const addPost = action(async (formData) => {  const title = formData.get("title");  if (!title || title.length < 2) {    return {      error: "Title must be at least 2 characters",    };  }  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const submission = useSubmission(addPost);  return (    <form action={addPost} method="post">      <input name="title" />      <Show when={submission.result?.error}>        <p>{submission.result?.error}</p>      </Show>      <button>Add Post</button>    </form>  );}

* * *

[Showing optimistic UI](/solid-start/guides/data-mutation#showing-optimistic-ui)
--------------------------------------------------------------------------------

To update the UI before the server responds:

1.  Import [`useSubmission`](/solid-router/reference/data-apis/use-submission) from `@solidjs/router`.
2.  Call `useSubmission` with your action, and use the returned `pending` and `input` properties to display optimistic UI.

TypeScriptJavaScript

    // src/routes/index.tsximport { For, Show } from "solid-js";import { action, useSubmission, query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/blog");  return await posts.json();}, "posts");
    const addPost = action(async (formData: FormData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const posts = createAsync(() => getPosts());  const submission = useSubmission(addPost);  return (    <main>      <form action={addPost} method="post">        <input name="title" />        <button>Add Post</button>      </form>      <ul>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        <Show when={submission.pending}>          {submission.input?.[0]?.get("title")?.toString()}        </Show>      </ul>    </main>  );}

    // src/routes/index.jsximport { For, Show } from "solid-js";import { action, useSubmission, query, createAsync } from "@solidjs/router";
    const getPosts = query(async () => {  const posts = await fetch("https://my-api.com/blog");  return await posts.json();}, "posts");
    const addPost = action(async (formData) => {  const title = formData.get("title");  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const posts = createAsync(() => getPosts());  const submission = useSubmission(addPost);  return (    <main>      <form action={addPost} method="post">        <input name="title" />        <button>Add Post</button>      </form>      <ul>        <For each={posts()}>{(post) => <li>{post.title}</li>}</For>        <Show when={submission.pending}>          {submission.input?.[0]?.get("title")?.toString()}        </Show>      </ul>    </main>  );}

info

If you want to display optimistic UI for multiple concurrent submissions, you can use the [`useSubmissions`](/solid-router/reference/data-apis/use-submissions) primitive.

* * *

[Redirecting](/solid-start/guides/data-mutation#redirecting)
------------------------------------------------------------

To redirect users to a different route within an action:

1.  Import [`redirect`](/solid-router/reference/response-helpers/redirect) from `@solidjs/router`.
2.  Call `redirect` with the route you want to navigate to, and throw its response.

TypeScriptJavaScript

    // src/routes/index.tsximport { action, redirect } from "@solidjs/router";
    const addPost = action(async (formData: FormData) => {  const title = formData.get("title") as string;  const response = await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });  const post = await response.json();  throw redirect(`/posts/${post.id}`);}, "addPost");
    export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

    // src/routes/index.jsximport { action, redirect } from "@solidjs/router";
    const addPost = action(async (formData) => {  const title = formData.get("title");  const response = await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });  const post = await response.json();  throw redirect(`/posts/${post.id}`);}, "addPost");
    export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

* * *

[Using a database or an ORM](/solid-start/guides/data-mutation#using-a-database-or-an-orm)
------------------------------------------------------------------------------------------

To safely interact with your database or ORM in an action, ensure it's server-only by adding [`"use server"`](/solid-start/reference/server/use-server) as the first line of your action:

TypeScriptJavaScript

    // src/routes/index.tsximport { action } from "@solidjs/router";import { db } from "~/lib/db";
    const addPost = action(async (formData: FormData) => {  "use server";  const title = formData.get("title") as string;  await db.insert("posts").values({ title });}, "addPost");
    export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

    // src/routes/index.jsximport { action } from "@solidjs/router";import { db } from "~/lib/db";
    const addPost = action(async (formData) => {  "use server";  const title = formData.get("title");  await db.insert("posts").values({ title });}, "addPost");
    export default function Page() {  return (    <form action={addPost} method="post">      <input name="title" />      <button>Add Post</button>    </form>  );}

* * *

[Invoking an action programmatically](/solid-start/guides/data-mutation#invoking-an-action-programmatically)
------------------------------------------------------------------------------------------------------------

To programmatically invoke an action:

1.  Import [`useAction`](/solid-router/reference/data-apis/use-action) from `@solidjs/router`.
2.  Call `useAction` with your action, and use the returned function to invoke the action.

TypeScriptJavaScript

    // src/routes/index.tsximport { createSignal } from "solid-js";import { action, useAction } from "@solidjs/router";
    const addPost = action(async (title: string) => {  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const [title, setTitle] = createSignal("");  const addPostAction = useAction(addPost);  return (    <div>      <input value={title()} onInput={(e) => setTitle(e.target.value)} />      <button onClick={() => addPostAction(title())}>Add Post</button>    </div>  );}

    // src/routes/index.jsximport { createSignal } from "solid-js";import { action, useAction } from "@solidjs/router";
    const addPost = action(async (title) => {  await fetch("https://my-api.com/posts", {    method: "POST",    body: JSON.stringify({ title }),  });}, "addPost");
    export default function Page() {  const [title, setTitle] = createSignal("");  const addPostAction = useAction(addPost);  return (    <div>      <input value={title()} onInput={(e) => setTitle(e.target.value)} />      <button onClick={() => addPostAction(title())}>Add Post</button>    </div>  );}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/guides/data-mutation.mdx&page=https://docs.solidjs.com/solid-start/guides/data-mutation)

Previous[← Data fetching](/solid-start/guides/data-fetching)

Next[Service workers →](/solid-start/guides/service-workers)

Guides

Service workers
===============

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/service-workers.mdx)

To register a service worker:

1.  Place your service-worker file in the `public` directory (e.g., `public/sw.js`), making it available at the root URL (`/sw.js`).
2.  Add registration logic to the `entry-client.tsx` file.

    // @refresh reloadimport { mount, StartClient } from "@solidjs/start/client";
    mount(() => <StartClient />, document.getElementById("app")!);
    if ("serviceWorker" in navigator && import.meta.env.PROD) {  window.addEventListener("load", () => {    navigator.serviceWorker.register("/sw.js");  });}

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/solid-start/guides/service-workers.mdx&page=https://docs.solidjs.com/solid-start/guides/service-workers)

Previous[← Data mutation](/solid-start/guides/data-mutation)