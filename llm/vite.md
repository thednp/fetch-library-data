vite version: 6.3.5, last updated: 2025-05-21T10:57:53.003Z

Getting Started [​](#getting-started)
=====================================

Overview [​](#overview)
-----------------------

Vite (French word for "quick", pronounced `/vit/`, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

*   A dev server that provides [rich feature enhancements](/guide/features) over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast [Hot Module Replacement (HMR)](/guide/features#hot-module-replacement).
    
*   A build command that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.
    

Vite is opinionated and comes with sensible defaults out of the box. Read about what's possible in the [Features Guide](/guide/features). Support for frameworks or integration with other tools is possible through [Plugins](/guide/using-plugins). The [Config Section](./../config/) explains how to adapt Vite to your project if needed.

Vite is also highly extensible via its [Plugin API](/guide/api-plugin) and [JavaScript API](/guide/api-javascript) with full typing support.

You can learn more about the rationale behind the project in the [Why Vite](/guide/why) section.

Browser Support [​](#browser-support)
-------------------------------------

During development, Vite sets [`esnext` as the transform target](https://esbuild.github.io/api/#target), because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code.

For the production build, by default Vite targets browsers that support modern JavaScript, such as [native ES Modules](https://caniuse.com/es6-module), [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta), [nullish coalescing](https://caniuse.com/mdn-javascript_operators_nullish_coalescing), and [BigInt](https://caniuse.com/bigint). Legacy browsers can be supported via the official [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy). See the [Building for Production](/guide/build) section for more details.

Trying Vite Online [​](#trying-vite-online)
-------------------------------------------

You can try Vite online on [StackBlitz](https://vite.new/). It runs the Vite-based build setup directly in the browser, so it is almost identical to the local setup but doesn't require installing anything on your machine. You can navigate to `vite.new/{template}` to select which framework to use.

The supported template presets are:

JavaScript

TypeScript

[vanilla](https://vite.new/vanilla)

[vanilla-ts](https://vite.new/vanilla-ts)

[vue](https://vite.new/vue)

[vue-ts](https://vite.new/vue-ts)

[react](https://vite.new/react)

[react-ts](https://vite.new/react-ts)

[preact](https://vite.new/preact)

[preact-ts](https://vite.new/preact-ts)

[lit](https://vite.new/lit)

[lit-ts](https://vite.new/lit-ts)

[svelte](https://vite.new/svelte)

[svelte-ts](https://vite.new/svelte-ts)

[solid](https://vite.new/solid)

[solid-ts](https://vite.new/solid-ts)

[qwik](https://vite.new/qwik)

[qwik-ts](https://vite.new/qwik-ts)

Scaffolding Your First Vite Project [​](#scaffolding-your-first-vite-project)
-----------------------------------------------------------------------------

Compatibility Note

Vite requires [Node.js](https://nodejs.org/en/) version 18+ or 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

npmYarnpnpmBunDeno

bash

    $ npm create vite@latest

bash

    $ yarn create vite

bash

    $ pnpm create vite

bash

    $ bun create vite

bash

    $ deno init --npm vite

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

npmYarnpnpmBunDeno

bash

    # npm 7+, extra double-dash is needed:
    $ npm create vite@latest my-vue-app -- --template vue

bash

    $ yarn create vite my-vue-app --template vue

bash

    $ pnpm create vite my-vue-app --template vue

bash

    $ bun create vite my-vue-app --template vue

bash

    $ deno init --npm vite my-vue-app --template vue

See [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) for more details on each supported template: `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `react-swc`, `react-swc-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`, `solid`, `solid-ts`, `qwik`, `qwik-ts`.

You can use `.` for the project name to scaffold in the current directory.

Community Templates [​](#community-templates)
---------------------------------------------

create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for [community maintained templates](https://github.com/vitejs/awesome-vite#templates) that include other tools or target different frameworks.

For a template at `https://github.com/user/project`, you can try it out online using `https://github.stackblitz.com/user/project` (adding `.stackblitz` after `github` to the URL of the project).

You can also use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates. Assuming the project is on GitHub and uses `main` as the default branch, you can create a local copy using:

bash

    npx degit user/project#main my-project
    cd my-project
    
    npm install
    npm run dev

Manual Installation [​](#manual-installation)
---------------------------------------------

In your project, you can install the `vite` CLI using:

npmYarnpnpmBunDeno

bash

    $ npm install -D vite

bash

    $ yarn add -D vite

bash

    $ pnpm add -D vite

bash

    $ bun add -D vite

bash

    $ deno add -D npm:vite

And create an `index.html` file like this:

html

    <p>Hello Vite!</p>

Then run the appropriate CLI command in your terminal:

npmYarnpnpmBunDeno

bash

    $ npx vite

bash

    $ yarn vite

bash

    $ pnpm vite

bash

    $ bunx vite

bash

    $ deno run -A npm:vite

The `index.html` will be served on `http://localhost:5173`.

`index.html` and Project Root [​](#index-html-and-project-root)
---------------------------------------------------------------

One thing you may have noticed is that in a Vite project, `index.html` is front-and-central instead of being tucked away inside `public`. This is intentional: during development Vite is a server, and `index.html` is the entry point to your application.

Vite treats `index.html` as source code and part of the module graph. It resolves `<script type="module" src="...">` that references your JavaScript source code. Even inline `<script type="module">` and CSS referenced via `<link href>` also enjoy Vite-specific features. In addition, URLs inside `index.html` are automatically rebased so there's no need for special `%PUBLIC_URL%` placeholders.

Similar to static http servers, Vite has the concept of a "root directory" which your files are served from. You will see it referenced as `<root>` throughout the rest of the docs. Absolute URLs in your source code will be resolved using the project root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.

Vite also supports [multi-page apps](/guide/build#multi-page-app) with multiple `.html` entry points.

#### Specifying Alternative Root [​](#specifying-alternative-root)

Running `vite` starts the dev server using the current working directory as root. You can specify an alternative root with `vite serve some/sub/dir`. Note that Vite will also resolve [its config file (i.e. `vite.config.js`)](/config/#configuring-vite) inside the project root, so you'll need to move it if the root is changed.

Command Line Interface [​](#command-line-interface)
---------------------------------------------------

In a project where Vite is installed, you can use the `vite` binary in your npm scripts, or run it directly with `npx vite`. Here are the default npm scripts in a scaffolded Vite project:

package.json

json

    {
      "scripts": {
        "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
        "build": "vite build", // build for production
        "preview": "vite preview" // locally preview production build
      }
    }

You can specify additional CLI options like `--port` or `--open`. For a full list of CLI options, run `npx vite --help` in your project.

Learn more about the [Command Line Interface](/guide/cli)

Using Unreleased Commits [​](#using-unreleased-commits)
-------------------------------------------------------

If you can't wait for a new release to test the latest features, you can install a specific commit of Vite with [https://pkg.pr.new](https://pkg.pr.new):

npmYarnpnpmBun

bash

    $ npm install -D https://pkg.pr.new/vite@SHA

bash

    $ yarn add -D https://pkg.pr.new/vite@SHA

bash

    $ pnpm add -D https://pkg.pr.new/vite@SHA

bash

    $ bun add -D https://pkg.pr.new/vite@SHA

Replace `SHA` with any of [Vite's commit SHAs](https://github.com/vitejs/vite/commits/main/). Note that only commits within the last month will work, as older commit releases are purged.

Alternatively, you can also clone the [vite repo](https://github.com/vitejs/vite) to your local machine and then build and link it yourself ([pnpm](https://pnpm.io/) is required):

bash

    git clone https://github.com/vitejs/vite.git
    cd vite
    pnpm install
    cd packages/vite
    pnpm run build
    pnpm link --global # use your preferred package manager for this step

Then go to your Vite based project and run `pnpm link --global vite` (or the package manager that you used to link `vite` globally). Now restart the development server to ride on the bleeding edge!

Dependencies using Vite

To replace the Vite version used by dependencies transitively, you should use [npm overrides](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#overrides) or [pnpm overrides](https://pnpm.io/package_json#pnpmoverrides).

Community [​](#community)
-------------------------

If you have questions or need help, reach out to the community at [Discord](https://chat.vite.dev) and [GitHub Discussions](https://github.com/vitejs/vite/discussions).

Project Philosophy [​](#project-philosophy)
===========================================

Lean Extendable Core [​](#lean-extendable-core)
-----------------------------------------------

Vite doesn't intend to cover every use case for every user. Vite aims to support the most common patterns to build Web apps out-of-the-box, but [Vite core](https://github.com/vitejs/vite) must remain lean with a small API surface to keep the project maintainable long-term. This goal is possible thanks to [Vite's rollup-based plugin system](/guide/api-plugin). Features that can be implemented as external plugins will generally not be added to Vite core. [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) is a great example of what can be achieved out of Vite core, and there are a lot of [well maintained plugins](https://github.com/vitejs/awesome-vite#plugins) to cover your needs. Vite works closely with the Rollup project to ensure that plugins can be used in both plain-rollup and Vite projects as much as possible, trying to push needed extensions to the Plugin API upstream when possible.

Pushing the Modern Web [​](#pushing-the-modern-web)
---------------------------------------------------

Vite provides opinionated features that push writing modern code. For example:

*   The source code can only be written in ESM, where non-ESM dependencies need to be [pre-bundled as ESM](/guide/dep-pre-bundling) in order to work.
*   Web workers are encouraged to be written with the [`new Worker` syntax](/guide/features#web-workers) to follow modern standards.
*   Node.js modules cannot be used in the browser.

When adding new features, these patterns are followed to create a future-proof API, which may not always be compatible with other build tools.

A Pragmatic Approach to Performance [​](#a-pragmatic-approach-to-performance)
-----------------------------------------------------------------------------

Vite has been focused on performance since its [origins](/guide/why). Its dev server architecture allows HMR that stays fast as projects scale. Vite uses native tools like [esbuild](https://esbuild.github.io/) and [SWC](https://github.com/vitejs/vite-plugin-react-swc) to implement intensive tasks but keeps the rest of the code in JS to balance speed with flexibility. When needed, framework plugins will tap into [Babel](https://babeljs.io/) to compile user code. And during build time Vite currently uses [Rollup](https://rollupjs.org/) where bundling size and having access to a wide ecosystem of plugins are more important than raw speed. Vite will continue to evolve internally, using new libraries as they appear to improve DX while keeping its API stable.

Building Frameworks on Top of Vite [​](#building-frameworks-on-top-of-vite)
---------------------------------------------------------------------------

Although Vite can be used by users directly, it shines as a tool to create frameworks. Vite core is framework agnostic, but there are polished plugins for each UI framework. Its [JS API](/guide/api-javascript) allows App Framework authors to use Vite features to create tailored experiences for their users. Vite includes support for [SSR primitives](/guide/ssr), usually present in higher-level tools but fundamental to building modern web frameworks. And Vite plugins complete the picture by offering a way to share between frameworks. Vite is also a great fit when paired with [Backend frameworks](/guide/backend-integration) like [Ruby](https://vite-ruby.netlify.app/) and [Laravel](https://laravel.com/docs/10.x/vite).

An Active Ecosystem [​](#an-active-ecosystem)
---------------------------------------------

Vite evolution is a cooperation between framework and plugin maintainers, users, and the Vite team. We encourage active participation in Vite's Core development once a project adopts Vite. We work closely with the main projects in the ecosystem to minimize regressions on each release, aided by tools like [vite-ecosystem-ci](https://github.com/vitejs/vite-ecosystem-ci). It allows us to run the CI of major projects using Vite on selected PRs and gives us a clear status of how the Ecosystem would react to a release. We strive to fix regressions before they hit users and allow projects to update to the next versions as soon as they are released. If you are working with Vite, we invite you to join [Vite's Discord](https://chat.vite.dev) and get involved in the project too.

Why Vite [​](#why-vite)
=======================

The Problems [​](#the-problems)
-------------------------------

Before ES modules were available in browsers, developers had no native mechanism for authoring JavaScript in a modularized fashion. This is why we are all familiar with the concept of "bundling": using tools that crawl, process and concatenate our source modules into files that can run in the browser.

Over time we have seen tools like [webpack](https://webpack.js.org/), [Rollup](https://rollupjs.org) and [Parcel](https://parceljs.org/), which greatly improved the development experience for frontend developers.

However, as we build more and more ambitious applications, the amount of JavaScript we are dealing with is also increasing dramatically. It is not uncommon for large scale projects to contain thousands of modules. We are starting to hit a performance bottleneck for JavaScript based tooling: it can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with Hot Module Replacement (HMR), file edits can take a couple of seconds to be reflected in the browser. The slow feedback loop can greatly affect developers' productivity and happiness.

Vite aims to address these issues by leveraging new advancements in the ecosystem: the availability of native ES modules in the browser, and the rise of JavaScript tools written in compile-to-native languages.

### Slow Server Start [​](#slow-server-start)

When cold-starting the dev server, a bundler-based build setup has to eagerly crawl and build your entire application before it can be served.

Vite improves the dev server start time by first dividing the modules in an application into two categories: **dependencies** and **source code**.

*   **Dependencies** are mostly plain JavaScript that do not change often during development. Some large dependencies (e.g. component libraries with hundreds of modules) are also quite expensive to process. Dependencies may also be shipped in various module formats (e.g. ESM or CommonJS).
    
    Vite [pre-bundles dependencies](/guide/dep-pre-bundling) using [esbuild](https://esbuild.github.io/). esbuild is written in Go and pre-bundles dependencies 10-100x faster than JavaScript-based bundlers.
    
*   **Source code** often contains non-plain JavaScript that needs transforming (e.g. JSX, CSS or Vue/Svelte components), and will be edited very often. Also, not all source code needs to be loaded at the same time (e.g. with route-based code-splitting).
    
    Vite serves source code over [native ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). This is essentially letting the browser take over part of the job of a bundler: Vite only needs to transform and serve source code on demand, as the browser requests it. Code behind conditional dynamic imports is only processed if actually used on the current screen.
    

### Slow Updates [​](#slow-updates)

When a file is edited in a bundler-based build setup, it is inefficient to rebuild the whole bundle for an obvious reason: the update speed will degrade linearly with the size of the app.

In some bundlers, the dev server runs the bundling in memory so that it only needs to invalidate part of its module graph when a file changes, but it still needs to re-construct the entire bundle and reload the web page. Reconstructing the bundle can be expensive, and reloading the page blows away the current state of the application. This is why some bundlers support Hot Module Replacement (HMR): allowing a module to "hot replace" itself without affecting the rest of the page. This greatly improves DX - however, in practice we've found that even HMR update speed deteriorates significantly as the size of the application grows.

In Vite, HMR is performed over native ESM. When a file is edited, Vite only needs to precisely invalidate the chain between the edited module and its closest HMR boundary (most of the time only the module itself), making HMR updates consistently fast regardless of the size of your application.

Vite also leverages HTTP headers to speed up full page reloads (again, let the browser do more work for us): source code module requests are made conditional via `304 Not Modified`, and dependency module requests are strongly cached via `Cache-Control: max-age=31536000,immutable` so they don't hit the server again once cached.

Once you experience how fast Vite is, we highly doubt you'd be willing to put up with bundled development again.

Why Bundle for Production [​](#why-bundle-for-production)
---------------------------------------------------------

Even though native ESM is now widely supported, shipping unbundled ESM in production is still inefficient (even with HTTP/2) due to the additional network round trips caused by nested imports. To get the optimal loading performance in production, it is still better to bundle your code with tree-shaking, lazy-loading and common chunk splitting (for better caching).

Ensuring optimal output and behavioral consistency between the dev server and the production build isn't easy. This is why Vite ships with a pre-configured [build command](/guide/build) that bakes in many [performance optimizations](/guide/features#build-optimizations) out of the box.

Why Not Bundle with esbuild? [​](#why-not-bundle-with-esbuild)
--------------------------------------------------------------

While Vite leverages esbuild to [pre-bundle some dependencies in dev](/guide/dep-pre-bundling), Vite does not use esbuild as a bundler for production builds.

Vite's current plugin API isn't compatible with using `esbuild` as a bundler. In spite of `esbuild` being faster, Vite's adoption of Rollup's flexible plugin API and infrastructure heavily contributed to its success in the ecosystem. For the time being, we believe that Rollup offers a better performance-vs-flexibility tradeoff.

Rollup has also been working on performance improvements, [switching its parser to SWC in v4](https://github.com/rollup/rollup/pull/5073). And there is an ongoing effort to build a Rust-port of Rollup called Rolldown. Once Rolldown is ready, it could replace both Rollup and esbuild in Vite, improving build performance significantly and removing inconsistencies between development and build. You can watch [Evan You's ViteConf 2023 keynote for more details](https://youtu.be/hrdwQHoAp0M).

How Vite Relates to Other Unbundled Build Tools? [​](#how-vite-relates-to-other-unbundled-build-tools)
------------------------------------------------------------------------------------------------------

[WMR](https://github.com/preactjs/wmr) by the Preact team looked to provide a similar feature set. Vite's universal Rollup plugin API for dev and build was inspired by it. WMR is no longer maintained. The Preact team now recommends Vite with [@preactjs/preset-vite](https://github.com/preactjs/preset-vite).

[Snowpack](https://www.snowpack.dev/) was also a no-bundle native ESM dev server, very similar in scope to Vite. Vite's dependency pre-bundling is also inspired by Snowpack v1 (now [`esinstall`](https://github.com/snowpackjs/snowpack/tree/main/esinstall)). Snowpack is no longer being maintained. The Snowpack team is now working on [Astro](https://astro.build/), a static site builder powered by Vite.

[@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) (previously `es-dev-server`) is a great project and Vite 1.0's Koa-based server setup was inspired by it. The `@web` umbrella project is actively maintained and contains many other excellent tools that may benefit Vite users as well.

Features [​](#features)
=======================

At the very basic level, developing using Vite is not that different from using a static file server. However, Vite provides many enhancements over native ESM imports to support various features that are typically seen in bundler-based setups.

npm Dependency Resolving and Pre-Bundling [​](#npm-dependency-resolving-and-pre-bundling)
-----------------------------------------------------------------------------------------

Native ES imports do not support bare module imports like the following:

js

    import { someMethod } from 'my-dep'

The above will throw an error in the browser. Vite will detect such bare module imports in all served source files and perform the following:

1.  [Pre-bundle](/guide/dep-pre-bundling) them to improve page loading speed and convert CommonJS / UMD modules to ESM. The pre-bundling step is performed with [esbuild](http://esbuild.github.io/) and makes Vite's cold start time significantly faster than any JavaScript-based bundler.
    
2.  Rewrite the imports to valid URLs like `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd` so that the browser can import them properly.
    

**Dependencies are Strongly Cached**

Vite caches dependency requests via HTTP headers, so if you wish to locally edit/debug a dependency, follow the steps [here](/guide/dep-pre-bundling#browser-cache).

Hot Module Replacement [​](#hot-module-replacement)
---------------------------------------------------

Vite provides an [HMR API](/guide/api-hmr) over native ESM. Frameworks with HMR capabilities can leverage the API to provide instant, precise updates without reloading the page or blowing away application state. Vite provides first-party HMR integrations for [Vue Single File Components](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue) and [React Fast Refresh](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react). There are also official integrations for Preact via [@prefresh/vite](https://github.com/JoviDeCroock/prefresh/tree/main/packages/vite).

Note you don't need to manually set these up - when you [create an app via `create-vite`](./), the selected templates would have these pre-configured for you already.

TypeScript [​](#typescript)
---------------------------

Vite supports importing `.ts` files out of the box.

### Transpile Only [​](#transpile-only)

Note that Vite only performs transpilation on `.ts` files and does **NOT** perform type checking. It assumes type checking is taken care of by your IDE and build process.

The reason Vite does not perform type checking as part of the transform process is because the two jobs work fundamentally differently. Transpilation can work on a per-file basis and aligns perfectly with Vite's on-demand compile model. In comparison, type checking requires knowledge of the entire module graph. Shoe-horning type checking into Vite's transform pipeline will inevitably compromise Vite's speed benefits.

Vite's job is to get your source modules into a form that can run in the browser as fast as possible. To that end, we recommend separating static analysis checks from Vite's transform pipeline. This principle applies to other static analysis checks such as ESLint.

*   For production builds, you can run `tsc --noEmit` in addition to Vite's build command.
    
*   During development, if you need more than IDE hints, we recommend running `tsc --noEmit --watch` in a separate process, or use [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker) if you prefer having type errors directly reported in the browser.
    

Vite uses [esbuild](https://github.com/evanw/esbuild) to transpile TypeScript into JavaScript which is about 20~30x faster than vanilla `tsc`, and HMR updates can reflect in the browser in under 50ms.

Use the [Type-Only Imports and Export](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export) syntax to avoid potential problems like type-only imports being incorrectly bundled, for example:

ts

    import type { T } from 'only/types'
    export type { T }

### TypeScript Compiler Options [​](#typescript-compiler-options)

Some configuration fields under `compilerOptions` in `tsconfig.json` require special attention.

#### `isolatedModules` [​](#isolatedmodules)

*   [TypeScript documentation](https://www.typescriptlang.org/tsconfig#isolatedModules)

Should be set to `true`.

It is because `esbuild` only performs transpilation without type information, it doesn't support certain features like const enum and implicit type-only imports.

You must set `"isolatedModules": true` in your `tsconfig.json` under `compilerOptions`, so that TS will warn you against the features that do not work with isolated transpilation.

If a dependency doesn't work well with `"isolatedModules": true`. You can use `"skipLibCheck": true` to temporarily suppress the errors until it is fixed upstream.

#### `useDefineForClassFields` [​](#usedefineforclassfields)

*   [TypeScript documentation](https://www.typescriptlang.org/tsconfig#useDefineForClassFields)

The default value will be `true` if the TypeScript target is `ES2022` or newer including `ESNext`. It is consistent with the [behavior of TypeScript 4.3.2+](https://github.com/microsoft/TypeScript/pull/42663). Other TypeScript targets will default to `false`.

`true` is the standard ECMAScript runtime behavior.

If you are using a library that heavily relies on class fields, please be careful about the library's intended usage of it. While most libraries expect `"useDefineForClassFields": true`, you can explicitly set `useDefineForClassFields` to `false` if your library doesn't support it.

#### `target` [​](#target)

*   [TypeScript documentation](https://www.typescriptlang.org/tsconfig#target)

Vite ignores the `target` value in the `tsconfig.json`, following the same behavior as `esbuild`.

To specify the target in dev, the [`esbuild.target`](/config/shared-options#esbuild) option can be used, which defaults to `esnext` for minimal transpilation. In builds, the [`build.target`](/config/build-options#build-target) option takes higher priority over `esbuild.target` and can also be set if needed.

`useDefineForClassFields`

If `target` in `tsconfig.json` is not `ESNext` or `ES2022` or newer, or if there's no `tsconfig.json` file, `useDefineForClassFields` will default to `false` which can be problematic with the default `esbuild.target` value of `esnext`. It may transpile to [static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks#browser_compatibility) which may not be supported in your browser.

As such, it is recommended to set `target` to `ESNext` or `ES2022` or newer, or set `useDefineForClassFields` to `true` explicitly when configuring `tsconfig.json`.

#### Other Compiler Options Affecting the Build Result [​](#other-compiler-options-affecting-the-build-result)

*   [`extends`](https://www.typescriptlang.org/tsconfig#extends)
*   [`importsNotUsedAsValues`](https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues)
*   [`preserveValueImports`](https://www.typescriptlang.org/tsconfig#preserveValueImports)
*   [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax)
*   [`jsx`](https://www.typescriptlang.org/tsconfig#jsx)
*   [`jsxFactory`](https://www.typescriptlang.org/tsconfig#jsxFactory)
*   [`jsxFragmentFactory`](https://www.typescriptlang.org/tsconfig#jsxFragmentFactory)
*   [`jsxImportSource`](https://www.typescriptlang.org/tsconfig#jsxImportSource)
*   [`experimentalDecorators`](https://www.typescriptlang.org/tsconfig#experimentalDecorators)
*   [`alwaysStrict`](https://www.typescriptlang.org/tsconfig#alwaysStrict)

`skipLibCheck`

Vite starter templates have `"skipLibCheck": "true"` by default to avoid typechecking dependencies, as they may choose to only support specific versions and configurations of TypeScript. You can learn more at [vuejs/vue-cli#5688](https://github.com/vuejs/vue-cli/pull/5688).

### Client Types [​](#client-types)

Vite's default types are for its Node.js API. To shim the environment of client side code in a Vite application, add a `d.ts` declaration file:

typescript

    /// <reference types="vite/client" />

Using `compilerOptions.types`

Alternatively, you can add `vite/client` to `compilerOptions.types` inside `tsconfig.json`:

tsconfig.json

json

    {
      "compilerOptions": {
        "types": ["vite/client", "some-other-global-lib"]
      }
    }

Note that if [`compilerOptions.types`](https://www.typescriptlang.org/tsconfig#types) is specified, only these packages will be included in the global scope (instead of all visible ”@types” packages).

`vite/client` provides the following type shims:

*   Asset imports (e.g. importing an `.svg` file)
*   Types for the Vite-injected [constants](/guide/env-and-mode#env-variables) on `import.meta.env`
*   Types for the [HMR API](/guide/api-hmr) on `import.meta.hot`

TIP

To override the default typing, add a type definition file that contains your typings. Then, add the type reference before `vite/client`.

For example, to make the default import of `*.svg` a React component:

*   `vite-env-override.d.ts` (the file that contains your typings):
    
    ts
    
        declare module '*.svg' {
          const content: React.FC<React.SVGProps<SVGElement>>
          export default content
        }
    
*   The file containing the reference to `vite/client`:
    
    ts
    
        /// <reference types="./vite-env-override.d.ts" />
        /// <reference types="vite/client" />
    

HTML [​](#html)
---------------

HTML files stand [front-and-center](/guide/#index-html-and-project-root) of a Vite project, serving as the entry points for your application, making it simple to build single-page and [multi-page applications](/guide/build#multi-page-app).

Any HTML files in your project root can be directly accessed by its respective directory path:

*   `<root>/index.html` -> `http://localhost:5173/`
*   `<root>/about.html` -> `http://localhost:5173/about.html`
*   `<root>/blog/index.html` -> `http://localhost:5173/blog/index.html`

Assets referenced by HTML elements such as `<script type="module" src>` and `<link href>` are processed and bundled as part of the app. The full list of supported elements are as below:

*   `<audio src>`
*   `<embed src>`
*   `<img src>` and `<img srcset>`
*   `<image src>`
*   `<input src>`
*   `<link href>` and `<link imagesrcset>`
*   `<object data>`
*   `<script type="module" src>`
*   `<source src>` and `<source srcset>`
*   `<track src>`
*   `<use href>` and `<use xlink:href>`
*   `<video src>` and `<video poster>`
*   `<meta content>`
    *   Only if `name` attribute matches `msapplication-tileimage`, `msapplication-square70x70logo`, `msapplication-square150x150logo`, `msapplication-wide310x150logo`, `msapplication-square310x310logo`, `msapplication-config`, or `twitter:image`
    *   Or only if `property` attribute matches `og:image`, `og:image:url`, `og:image:secure_url`, `og:audio`, `og:audio:secure_url`, `og:video`, or `og:video:secure_url`

html

    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/src/styles.css" />
      </head>
      <body>
        <img src="/src/images/logo.svg" alt="logo" />
        <script type="module" src="/src/main.js"></script>
      </body>
    </html>

To opt-out of HTML processing on certain elements, you can add the `vite-ignore` attribute on the element, which can be useful when referencing external assets or CDN.

Frameworks [​](#frameworks)
---------------------------

All modern frameworks maintain integrations with Vite. Most framework plugins are maintained by each framework team, with the exception of the official Vue and React Vite plugins that are maintained in the vite org:

*   Vue support via [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)
*   Vue JSX support via [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)
*   React support via [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
*   React using SWC support via [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)

Check out the [Plugins Guide](https://vite.dev/plugins) for more information.

JSX [​](#jsx)
-------------

`.jsx` and `.tsx` files are also supported out of the box. JSX transpilation is also handled via [esbuild](https://esbuild.github.io).

Your framework of choice will already configure JSX out of the box (for example, Vue users should use the official [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx) plugin, which provides Vue 3 specific features including HMR, global component resolving, directives and slots).

If using JSX with your own framework, custom `jsxFactory` and `jsxFragment` can be configured using the [`esbuild` option](/config/shared-options#esbuild). For example, the Preact plugin would use:

vite.config.js

js

    import { defineConfig } from 'vite'
    
    export default defineConfig({
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
    })

More details in [esbuild docs](https://esbuild.github.io/content-types/#jsx).

You can inject the JSX helpers using `jsxInject` (which is a Vite-only option) to avoid manual imports:

vite.config.js

js

    import { defineConfig } from 'vite'
    
    export default defineConfig({
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
    })

CSS [​](#css)
-------------

Importing `.css` files will inject its content to the page via a `<style>` tag with HMR support.

### `@import` Inlining and Rebasing [​](#import-inlining-and-rebasing)

Vite is pre-configured to support CSS `@import` inlining via `postcss-import`. Vite aliases are also respected for CSS `@import`. In addition, all CSS `url()` references, even if the imported files are in different directories, are always automatically rebased to ensure correctness.

`@import` aliases and URL rebasing are also supported for Sass and Less files (see [CSS Pre-processors](#css-pre-processors)).

### PostCSS [​](#postcss)

If the project contains valid PostCSS config (any format supported by [postcss-load-config](https://github.com/postcss/postcss-load-config), e.g. `postcss.config.js`), it will be automatically applied to all imported CSS.

Note that CSS minification will run after PostCSS and will use [`build.cssTarget`](/config/build-options#build-csstarget) option.

### CSS Modules [​](#css-modules)

Any CSS file ending with `.module.css` is considered a [CSS modules file](https://github.com/css-modules/css-modules). Importing such a file will return the corresponding module object:

example.module.css

css

    .red {
      color: red;
    }

js

    import classes from './example.module.css'
    document.getElementById('foo').className = classes.red

CSS modules behavior can be configured via the [`css.modules` option](/config/shared-options#css-modules).

If `css.modules.localsConvention` is set to enable camelCase locals (e.g. `localsConvention: 'camelCaseOnly'`), you can also use named imports:

js

    // .apply-color -> applyColor
    import { applyColor } from './example.module.css'
    document.getElementById('foo').className = applyColor

### CSS Pre-processors [​](#css-pre-processors)

Because Vite targets modern browsers only, it is recommended to use native CSS variables with PostCSS plugins that implement CSSWG drafts (e.g. [postcss-nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting)) and author plain, future-standards-compliant CSS.

That said, Vite does provide built-in support for `.scss`, `.sass`, `.less`, `.styl` and `.stylus` files. There is no need to install Vite-specific plugins for them, but the corresponding pre-processor itself must be installed:

bash

    # .scss and .sass
    npm add -D sass-embedded # or sass
    
    # .less
    npm add -D less
    
    # .styl and .stylus
    npm add -D stylus

If using Vue single file components, this also automatically enables `<style lang="sass">` et al.

Vite improves `@import` resolving for Sass and Less so that Vite aliases are also respected. In addition, relative `url()` references inside imported Sass/Less files that are in different directories from the root file are also automatically rebased to ensure correctness.

`@import` alias and url rebasing are not supported for Stylus due to its API constraints.

You can also use CSS modules combined with pre-processors by prepending `.module` to the file extension, for example `style.module.scss`.

### Disabling CSS injection into the page [​](#disabling-css-injection-into-the-page)

The automatic injection of CSS contents can be turned off via the `?inline` query parameter. In this case, the processed CSS string is returned as the module's default export as usual, but the styles aren't injected to the page.

js

    import './foo.css' // will be injected into the page
    import otherStyles from './bar.css?inline' // will not be injected

NOTE

Default and named imports from CSS files (e.g `import style from './foo.css'`) are removed since Vite 5. Use the `?inline` query instead.

### Lightning CSS [​](#lightning-css)

Starting from Vite 4.4, there is experimental support for [Lightning CSS](https://lightningcss.dev/). You can opt into it by adding [`css.transformer: 'lightningcss'`](/config/shared-options#css-transformer) to your config file and install the optional [`lightningcss`](https://www.npmjs.com/package/lightningcss) dependency:

bash

    npm add -D lightningcss

If enabled, CSS files will be processed by Lightning CSS instead of PostCSS. To configure it, you can pass Lightning CSS options to the [`css.lightningcss`](/config/shared-options#css-lightningcss) config option.

To configure CSS Modules, you'll use [`css.lightningcss.cssModules`](https://lightningcss.dev/css-modules.html) instead of [`css.modules`](/config/shared-options#css-modules) (which configures the way PostCSS handles CSS modules).

By default, Vite uses esbuild to minify CSS. Lightning CSS can also be used as the CSS minifier with [`build.cssMinify: 'lightningcss'`](/config/build-options#build-cssminify).

Static Assets [​](#static-assets)
---------------------------------

Importing a static asset will return the resolved public URL when it is served:

js

    import imgUrl from './img.png'
    document.getElementById('hero-img').src = imgUrl

Special queries can modify how assets are loaded:

js

    // Explicitly load assets as URL
    import assetAsURL from './asset.js?url'

js

    // Load assets as strings
    import assetAsString from './shader.glsl?raw'

js

    // Load Web Workers
    import Worker from './worker.js?worker'

js

    // Web Workers inlined as base64 strings at build time
    import InlineWorker from './worker.js?worker&inline'

More details in [Static Asset Handling](/guide/assets).

JSON [​](#json)
---------------

JSON files can be directly imported - named imports are also supported:

js

    // import the entire object
    import json from './example.json'
    // import a root field as named exports - helps with tree-shaking!
    import { field } from './example.json'

Glob Import [​](#glob-import)
-----------------------------

Vite supports importing multiple modules from the file system via the special `import.meta.glob` function:

js

    const modules = import.meta.glob('./dir/*.js')

The above will be transformed into the following:

js

    // code produced by vite
    const modules = {
      './dir/bar.js': () => import('./dir/bar.js'),
      './dir/foo.js': () => import('./dir/foo.js'),
    }

You can then iterate over the keys of the `modules` object to access the corresponding modules:

js

    for (const path in modules) {
      modules[path]().then((mod) => {
        console.log(path, mod)
      })
    }

Matched files are by default lazy-loaded via dynamic import and will be split into separate chunks during build. If you'd rather import all the modules directly (e.g. relying on side-effects in these modules to be applied first), you can pass `{ eager: true }` as the second argument:

js

    const modules = import.meta.glob('./dir/*.js', { eager: true })

The above will be transformed into the following:

js

    // code produced by vite
    import * as __vite_glob_0_0 from './dir/bar.js'
    import * as __vite_glob_0_1 from './dir/foo.js'
    const modules = {
      './dir/bar.js': __vite_glob_0_0,
      './dir/foo.js': __vite_glob_0_1,
    }

### Multiple Patterns [​](#multiple-patterns)

The first argument can be an array of globs, for example

js

    const modules = import.meta.glob(['./dir/*.js', './another/*.js'])

### Negative Patterns [​](#negative-patterns)

Negative glob patterns are also supported (prefixed with `!`). To ignore some files from the result, you can add exclude glob patterns to the first argument:

js

    const modules = import.meta.glob(['./dir/*.js', '!**/bar.js'])

js

    // code produced by vite
    const modules = {
      './dir/foo.js': () => import('./dir/foo.js'),
    }

#### Named Imports [​](#named-imports)

It's possible to only import parts of the modules with the `import` options.

ts

    const modules = import.meta.glob('./dir/*.js', { import: 'setup' })

ts

    // code produced by vite
    const modules = {
      './dir/bar.js': () => import('./dir/bar.js').then((m) => m.setup),
      './dir/foo.js': () => import('./dir/foo.js').then((m) => m.setup),
    }

When combined with `eager` it's even possible to have tree-shaking enabled for those modules.

ts

    const modules = import.meta.glob('./dir/*.js', {
      import: 'setup',
      eager: true,
    })

ts

    // code produced by vite:
    import { setup as __vite_glob_0_0 } from './dir/bar.js'
    import { setup as __vite_glob_0_1 } from './dir/foo.js'
    const modules = {
      './dir/bar.js': __vite_glob_0_0,
      './dir/foo.js': __vite_glob_0_1,
    }

Set `import` to `default` to import the default export.

ts

    const modules = import.meta.glob('./dir/*.js', {
      import: 'default',
      eager: true,
    })

ts

    // code produced by vite:
    import { default as __vite_glob_0_0 } from './dir/bar.js'
    import { default as __vite_glob_0_1 } from './dir/foo.js'
    const modules = {
      './dir/bar.js': __vite_glob_0_0,
      './dir/foo.js': __vite_glob_0_1,
    }

#### Custom Queries [​](#custom-queries)

You can also use the `query` option to provide queries to imports, for example, to import assets [as a string](https://vite.dev/guide/assets#importing-asset-as-string) or [as a url](https://vite.dev/guide/assets#importing-asset-as-url):

ts

    const moduleStrings = import.meta.glob('./dir/*.svg', {
      query: '?raw',
      import: 'default',
    })
    const moduleUrls = import.meta.glob('./dir/*.svg', {
      query: '?url',
      import: 'default',
    })

ts

    // code produced by vite:
    const moduleStrings = {
      './dir/bar.svg': () => import('./dir/bar.svg?raw').then((m) => m['default']),
      './dir/foo.svg': () => import('./dir/foo.svg?raw').then((m) => m['default']),
    }
    const moduleUrls = {
      './dir/bar.svg': () => import('./dir/bar.svg?url').then((m) => m['default']),
      './dir/foo.svg': () => import('./dir/foo.svg?url').then((m) => m['default']),
    }

You can also provide custom queries for other plugins to consume:

ts

    const modules = import.meta.glob('./dir/*.js', {
      query: { foo: 'bar', bar: true },
    })

### Glob Import Caveats [​](#glob-import-caveats)

Note that:

*   This is a Vite-only feature and is not a web or ES standard.
*   The glob patterns are treated like import specifiers: they must be either relative (start with `./`) or absolute (start with `/`, resolved relative to project root) or an alias path (see [`resolve.alias` option](/config/shared-options#resolve-alias)).
*   The glob matching is done via [`tinyglobby`](https://github.com/SuperchupuDev/tinyglobby).
*   You should also be aware that all the arguments in the `import.meta.glob` must be **passed as literals**. You can NOT use variables or expressions in them.

Dynamic Import [​](#dynamic-import)
-----------------------------------

Similar to [glob import](#glob-import), Vite also supports dynamic import with variables.

ts

    const module = await import(`./dir/${file}.js`)

Note that variables only represent file names one level deep. If `file` is `'foo/bar'`, the import would fail. For more advanced usage, you can use the [glob import](#glob-import) feature.

WebAssembly [​](#webassembly)
-----------------------------

Pre-compiled `.wasm` files can be imported with `?init`. The default export will be an initialization function that returns a Promise of the [`WebAssembly.Instance`](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Instance):

js

    import init from './example.wasm?init'
    
    init().then((instance) => {
      instance.exports.test()
    })

The init function can also take an importObject which is passed along to [`WebAssembly.instantiate`](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/instantiate) as its second argument:

js

    init({
      imports: {
        someFunc: () => {
          /* ... */
        },
      },
    }).then(() => {
      /* ... */
    })

In the production build, `.wasm` files smaller than `assetInlineLimit` will be inlined as base64 strings. Otherwise, they will be treated as a [static asset](/guide/assets) and fetched on-demand.

NOTE

[ES Module Integration Proposal for WebAssembly](https://github.com/WebAssembly/esm-integration) is not currently supported. Use [`vite-plugin-wasm`](https://github.com/Menci/vite-plugin-wasm) or other community plugins to handle this.

### Accessing the WebAssembly Module [​](#accessing-the-webassembly-module)

If you need access to the `Module` object, e.g. to instantiate it multiple times, use an [explicit URL import](/guide/assets#explicit-url-imports) to resolve the asset, and then perform the instantiation:

js

    import wasmUrl from 'foo.wasm?url'
    
    const main = async () => {
      const responsePromise = fetch(wasmUrl)
      const { module, instance } =
        await WebAssembly.instantiateStreaming(responsePromise)
      /* ... */
    }
    
    main()

### Fetching the module in Node.js [​](#fetching-the-module-in-node-js)

In SSR, the `fetch()` happening as part of the `?init` import, may fail with `TypeError: Invalid URL`. See the issue [Support wasm in SSR](https://github.com/vitejs/vite/issues/8882).

Here is an alternative, assuming the project base is the current directory:

js

    import wasmUrl from 'foo.wasm?url'
    import { readFile } from 'node:fs/promises'
    
    const main = async () => {
      const resolvedUrl = (await import('./test/boot.test.wasm?url')).default
      const buffer = await readFile('.' + resolvedUrl)
      const { instance } = await WebAssembly.instantiate(buffer, {
        /* ... */
      })
      /* ... */
    }
    
    main()

Web Workers [​](#web-workers)
-----------------------------

### Import with Constructors [​](#import-with-constructors)

A web worker script can be imported using [`new Worker()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker) and [`new SharedWorker()`](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/SharedWorker). Compared to the worker suffixes, this syntax leans closer to the standards and is the **recommended** way to create workers.

ts

    const worker = new Worker(new URL('./worker.js', import.meta.url))

The worker constructor also accepts options, which can be used to create "module" workers:

ts

    const worker = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module',
    })

The worker detection will only work if the `new URL()` constructor is used directly inside the `new Worker()` declaration. Additionally, all options parameters must be static values (i.e. string literals).

### Import with Query Suffixes [​](#import-with-query-suffixes)

A web worker script can be directly imported by appending `?worker` or `?sharedworker` to the import request. The default export will be a custom worker constructor:

js

    import MyWorker from './worker?worker'
    
    const worker = new MyWorker()

The worker script can also use ESM `import` statements instead of `importScripts()`. **Note**: During development this relies on [browser native support](https://caniuse.com/?search=module%20worker), but for the production build it is compiled away.

By default, the worker script will be emitted as a separate chunk in the production build. If you wish to inline the worker as base64 strings, add the `inline` query:

js

    import MyWorker from './worker?worker&inline'

If you wish to retrieve the worker as a URL, add the `url` query:

js

    import MyWorker from './worker?worker&url'

See [Worker Options](/config/worker-options) for details on configuring the bundling of all workers.

Content Security Policy (CSP) [​](#content-security-policy-csp)
---------------------------------------------------------------

To deploy CSP, certain directives or configs must be set due to Vite's internals.

### [`'nonce-{RANDOM}'`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#nonce-base64-value) [​](#nonce-random)

When [`html.cspNonce`](/config/shared-options#html-cspnonce) is set, Vite adds a nonce attribute with the specified value to any `<script>` and `<style>` tags, as well as `<link>` tags for stylesheets and module preloading. Additionally, when this option is set, Vite will inject a meta tag (`<meta property="csp-nonce" nonce="PLACEHOLDER" />`).

The nonce value of a meta tag with `property="csp-nonce"` will be used by Vite whenever necessary during both dev and after build.

WARNING

Ensure that you replace the placeholder with a unique value for each request. This is important to prevent bypassing a resource's policy, which can otherwise be easily done.

### [`data:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#scheme-source:~:text=schemes%20\(not%20recommended\).-,data%3A,-Allows%20data%3A) [​](#data)

By default, during build, Vite inlines small assets as data URIs. Allowing `data:` for related directives (e.g. [`img-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src), [`font-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src)), or, disabling it by setting [`build.assetsInlineLimit: 0`](/config/build-options#build-assetsinlinelimit) is necessary.

WARNING

Do not allow `data:` for [`script-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). It will allow injection of arbitrary scripts.

Build Optimizations [​](#build-optimizations)
---------------------------------------------

> Features listed below are automatically applied as part of the build process and there is no need for explicit configuration unless you want to disable them.

### CSS Code Splitting [​](#css-code-splitting)

Vite automatically extracts the CSS used by modules in an async chunk and generates a separate file for it. The CSS file is automatically loaded via a `<link>` tag when the associated async chunk is loaded, and the async chunk is guaranteed to only be evaluated after the CSS is loaded to avoid [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.).

If you'd rather have all the CSS extracted into a single file, you can disable CSS code splitting by setting [`build.cssCodeSplit`](/config/build-options#build-csscodesplit) to `false`.

### Preload Directives Generation [​](#preload-directives-generation)

Vite automatically generates `<link rel="modulepreload">` directives for entry chunks and their direct imports in the built HTML.

### Async Chunk Loading Optimization [​](#async-chunk-loading-optimization)

In real world applications, Rollup often generates "common" chunks - code that is shared between two or more other chunks. Combined with dynamic imports, it is quite common to have the following scenario:

In the non-optimized scenarios, when async chunk `A` is imported, the browser will have to request and parse `A` before it can figure out that it also needs the common chunk `C`. This results in an extra network roundtrip:

    Entry ---> A ---> C

Vite automatically rewrites code-split dynamic import calls with a preload step so that when `A` is requested, `C` is fetched **in parallel**:

    Entry ---> (A + C)

It is possible for `C` to have further imports, which will result in even more roundtrips in the un-optimized scenario. Vite's optimization will trace all the direct imports to completely eliminate the roundtrips regardless of import depth.

Command Line Interface [​](#command-line-interface)
===================================================

Dev server [​](#dev-server)
---------------------------

### `vite` [​](#vite)

Start Vite dev server in the current directory. `vite dev` and `vite serve` are aliases for `vite`.

#### Usage [​](#usage)

bash

    vite [root]

#### Options [​](#options)

Options

`--host [host]`

Specify hostname (`string`)

`--port <port>`

Specify port (`number`)

`--open [path]`

Open browser on startup (`boolean | string`)

`--cors`

Enable CORS (`boolean`)

`--strictPort`

Exit if specified port is already in use (`boolean`)

`--force`

Force the optimizer to ignore the cache and re-bundle (`boolean`)

`-c, --config <file>`

Use specified config file (`string`)

`--base <path>`

Public base path (default: `/`) (`string`)

`-l, --logLevel <level>`

info | warn | error | silent (`string`)

`--clearScreen`

Allow/disable clear screen when logging (`boolean`)

`--configLoader <loader>`

Use `bundle` to bundle the config with esbuild, or `runner` (experimental) to process it on the fly, or `native` (experimental) to load using the native runtime (default: `bundle`)

`--profile`

Start built-in Node.js inspector (check [Performance bottlenecks](/guide/troubleshooting#performance-bottlenecks))

`-d, --debug [feat]`

Show debug logs (`string | boolean`)

`-f, --filter <filter>`

Filter debug logs (`string`)

`-m, --mode <mode>`

Set env mode (`string`)

`-h, --help`

Display available CLI options

`-v, --version`

Display version number

Build [​](#build)
-----------------

### `vite build` [​](#vite-build)

Build for production.

#### Usage [​](#usage-1)

bash

    vite build [root]

#### Options [​](#options-1)

Options

`--target <target>`

Transpile target (default: `"modules"`) (`string`)

`--outDir <dir>`

Output directory (default: `dist`) (`string`)

`--assetsDir <dir>`

Directory under outDir to place assets in (default: `"assets"`) (`string`)

`--assetsInlineLimit <number>`

Static asset base64 inline threshold in bytes (default: `4096`) (`number`)

`--ssr [entry]`

Build specified entry for server-side rendering (`string`)

`--sourcemap [output]`

Output source maps for build (default: `false`) (`boolean | "inline" | "hidden"`)

`--minify [minifier]`

Enable/disable minification, or specify minifier to use (default: `"esbuild"`) (`boolean | "terser" | "esbuild"`)

`--manifest [name]`

Emit build manifest json (`boolean | string`)

`--ssrManifest [name]`

Emit ssr manifest json (`boolean | string`)

`--emptyOutDir`

Force empty outDir when it's outside of root (`boolean`)

`-w, --watch`

Rebuilds when modules have changed on disk (`boolean`)

`-c, --config <file>`

Use specified config file (`string`)

`--base <path>`

Public base path (default: `/`) (`string`)

`-l, --logLevel <level>`

Info | warn | error | silent (`string`)

`--clearScreen`

Allow/disable clear screen when logging (`boolean`)

`--configLoader <loader>`

Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly (default: `bundle`)

`--profile`

Start built-in Node.js inspector (check [Performance bottlenecks](/guide/troubleshooting#performance-bottlenecks))

`-d, --debug [feat]`

Show debug logs (`string | boolean`)

`-f, --filter <filter>`

Filter debug logs (`string`)

`-m, --mode <mode>`

Set env mode (`string`)

`-h, --help`

Display available CLI options

`--app`

Build all environments, same as `builder: {}` (`boolean`, experimental)

Others [​](#others)
-------------------

### `vite optimize` [​](#vite-optimize)

Pre-bundle dependencies.

**Deprecated**: the pre-bundle process runs automatically and does not need to be called.

#### Usage [​](#usage-2)

bash

    vite optimize [root]

#### Options [​](#options-2)

Options

`--force`

Force the optimizer to ignore the cache and re-bundle (`boolean`)

`-c, --config <file>`

Use specified config file (`string`)

`--base <path>`

Public base path (default: `/`) (`string`)

`-l, --logLevel <level>`

Info | warn | error | silent (`string`)

`--clearScreen`

Allow/disable clear screen when logging (`boolean`)

`--configLoader <loader>`

Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly (default: `bundle`)

`-d, --debug [feat]`

Show debug logs (`string | boolean`)

`-f, --filter <filter>`

Filter debug logs (`string`)

`-m, --mode <mode>`

Set env mode (`string`)

`-h, --help`

Display available CLI options

### `vite preview` [​](#vite-preview)

Locally preview the production build. Do not use this as a production server as it's not designed for it.

#### Usage [​](#usage-3)

bash

    vite preview [root]

#### Options [​](#options-3)

Options

`--host [host]`

Specify hostname (`string`)

`--port <port>`

Specify port (`number`)

`--strictPort`

Exit if specified port is already in use (`boolean`)

`--open [path]`

Open browser on startup (`boolean | string`)

`--outDir <dir>`

Output directory (default: `dist`)(`string`)

`-c, --config <file>`

Use specified config file (`string`)

`--base <path>`

Public base path (default: `/`) (`string`)

`-l, --logLevel <level>`

Info | warn | error | silent (`string`)

`--clearScreen`

Allow/disable clear screen when logging (`boolean`)

`--configLoader <loader>`

Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly (default: `bundle`)

`-d, --debug [feat]`

Show debug logs (`string | boolean`)

`-f, --filter <filter>`

Filter debug logs (`string`)

`-m, --mode <mode>`

Set env mode (`string`)

`-h, --help`

Display available CLI options

Using Plugins [​](#using-plugins)
=================================

Vite can be extended using plugins, which are based on Rollup's well-designed plugin interface with a few extra Vite-specific options. This means that Vite users can rely on the mature ecosystem of Rollup plugins, while also being able to extend the dev server and SSR functionality as needed.

Adding a Plugin [​](#adding-a-plugin)
-------------------------------------

To use a plugin, it needs to be added to the `devDependencies` of the project and included in the `plugins` array in the `vite.config.js` config file. For example, to provide support for legacy browsers, the official [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) can be used:

    $ npm add -D @vitejs/plugin-legacy

vite.config.js

js

    import legacy from '@vitejs/plugin-legacy'
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      plugins: [
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      ],
    })

`plugins` also accepts presets including several plugins as a single element. This is useful for complex features (like framework integration) that are implemented using several plugins. The array will be flattened internally.

Falsy plugins will be ignored, which can be used to easily activate or deactivate plugins.

Finding Plugins [​](#finding-plugins)
-------------------------------------

NOTE

Vite aims to provide out-of-the-box support for common web development patterns. Before searching for a Vite or compatible Rollup plugin, check out the [Features Guide](/guide/features). A lot of the cases where a plugin would be needed in a Rollup project are already covered in Vite.

Check out the [Plugins section](./../plugins/) for information about official plugins. Community plugins are listed in [awesome-vite](https://github.com/vitejs/awesome-vite#plugins).

You can also find plugins that follow the [recommended conventions](/guide/api-plugin#conventions) using a [npm search for vite-plugin](https://www.npmjs.com/search?q=vite-plugin&ranking=popularity) for Vite plugins or a [npm search for rollup-plugin](https://www.npmjs.com/search?q=rollup-plugin&ranking=popularity) for Rollup plugins.

Enforcing Plugin Ordering [​](#enforcing-plugin-ordering)
---------------------------------------------------------

For compatibility with some Rollup plugins, it may be needed to enforce the order of the plugin or only apply at build time. This should be an implementation detail for Vite plugins. You can enforce the position of a plugin with the `enforce` modifier:

*   `pre`: invoke plugin before Vite core plugins
*   default: invoke plugin after Vite core plugins
*   `post`: invoke plugin after Vite build plugins

vite.config.js

js

    import image from '@rollup/plugin-image'
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      plugins: [
        {
          ...image(),
          enforce: 'pre',
        },
      ],
    })

Check out [Plugins API Guide](/guide/api-plugin#plugin-ordering) for detailed information.

Conditional Application [​](#conditional-application)
-----------------------------------------------------

By default, plugins are invoked for both serve and build. In cases where a plugin needs to be conditionally applied only during serve or build, use the `apply` property to only invoke them during `'build'` or `'serve'`:

vite.config.js

js

    import typescript2 from 'rollup-plugin-typescript2'
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      plugins: [
        {
          ...typescript2(),
          apply: 'build',
        },
      ],
    })

Building Plugins [​](#building-plugins)
---------------------------------------

Check out the [Plugins API Guide](/guide/api-plugin) for documentation about creating plugins.

Dependency Pre-Bundling [​](#dependency-pre-bundling)
=====================================================

When you run `vite` for the first time, Vite prebundles your project dependencies before loading your site locally. It is done automatically and transparently by default.

The Why [​](#the-why)
---------------------

This is Vite performing what we call "dependency pre-bundling". This process serves two purposes:

1.  **CommonJS and UMD compatibility:** During development, Vite's dev serves all code as native ESM. Therefore, Vite must convert dependencies that are shipped as CommonJS or UMD into ESM first.
    
    When converting CommonJS dependencies, Vite performs smart import analysis so that named imports to CommonJS modules will work as expected even if the exports are dynamically assigned (e.g. React):
    
    js
    
        // works as expected
        import React, { useState } from 'react'
    
2.  **Performance:** Vite converts ESM dependencies with many internal modules into a single module to improve subsequent page load performance.
    
    Some packages ship their ES modules builds as many separate files importing one another. For example, [`lodash-es` has over 600 internal modules](https://unpkg.com/browse/lodash-es/)! When we do `import { debounce } from 'lodash-es'`, the browser fires off 600+ HTTP requests at the same time! Even though the server has no problem handling them, the large amount of requests create a network congestion on the browser side, causing the page to load noticeably slower.
    
    By pre-bundling `lodash-es` into a single module, we now only need one HTTP request instead!
    

NOTE

Dependency pre-bundling only applies in development mode, and uses `esbuild` to convert dependencies to ESM. In production builds, `@rollup/plugin-commonjs` is used instead.

Automatic Dependency Discovery [​](#automatic-dependency-discovery)
-------------------------------------------------------------------

If an existing cache is not found, Vite will crawl your source code and automatically discover dependency imports (i.e. "bare imports" that expect to be resolved from `node_modules`) and use these found imports as entry points for the pre-bundle. The pre-bundling is performed with `esbuild` so it's typically very fast.

After the server has already started, if a new dependency import is encountered that isn't already in the cache, Vite will re-run the dep bundling process and reload the page if needed.

Monorepos and Linked Dependencies [​](#monorepos-and-linked-dependencies)
-------------------------------------------------------------------------

In a monorepo setup, a dependency may be a linked package from the same repo. Vite automatically detects dependencies that are not resolved from `node_modules` and treats the linked dep as source code. It will not attempt to bundle the linked dep, and will analyze the linked dep's dependency list instead.

However, this requires the linked dep to be exported as ESM. If not, you can add the dependency to [`optimizeDeps.include`](/config/dep-optimization-options#optimizedeps-include) and [`build.commonjsOptions.include`](/config/build-options#build-commonjsoptions) in your config.

vite.config.js

js

    export default defineConfig({
      optimizeDeps: {
        include: ['linked-dep'],
      },
      build: {
        commonjsOptions: {
          include: [/linked-dep/, /node_modules/],
        },
      },
    })

When making changes to the linked dep, restart the dev server with the `--force` command line option for the changes to take effect.

Customizing the Behavior [​](#customizing-the-behavior)
-------------------------------------------------------

The default dependency discovery heuristics may not always be desirable. In cases where you want to explicitly include/exclude dependencies from the list, use the [`optimizeDeps` config options](/config/dep-optimization-options).

A typical use case for `optimizeDeps.include` or `optimizeDeps.exclude` is when you have an import that is not directly discoverable in the source code. For example, maybe the import is created as a result of a plugin transform. This means Vite won't be able to discover the import on the initial scan - it can only discover it after the file is requested by the browser and transformed. This will cause the server to immediately re-bundle after server start.

Both `include` and `exclude` can be used to deal with this. If the dependency is large (with many internal modules) or is CommonJS, then you should include it; If the dependency is small and is already valid ESM, you can exclude it and let the browser load it directly.

You can further customize esbuild too with the [`optimizeDeps.esbuildOptions` option](/config/dep-optimization-options#optimizedeps-esbuildoptions). For example, adding an esbuild plugin to handle special files in dependencies or changing the [build `target`](https://esbuild.github.io/api/#target).

Caching [​](#caching)
---------------------

### File System Cache [​](#file-system-cache)

Vite caches the pre-bundled dependencies in `node_modules/.vite`. It determines whether it needs to re-run the pre-bundling step based on a few sources:

*   Package manager lockfile content, e.g. `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml` or `bun.lockb`.
*   Patches folder modification time.
*   Relevant fields in your `vite.config.js`, if present.
*   `NODE_ENV` value.

The pre-bundling step will only need to be re-run when one of the above has changed.

If for some reason you want to force Vite to re-bundle deps, you can either start the dev server with the `--force` command line option, or manually delete the `node_modules/.vite` cache directory.

### Browser Cache [​](#browser-cache)

Resolved dependency requests are strongly cached with HTTP headers `max-age=31536000,immutable` to improve page reload performance during dev. Once cached, these requests will never hit the dev server again. They are auto invalidated by the appended version query if a different version is installed (as reflected in your package manager lockfile). If you want to debug your dependencies by making local edits, you can:

1.  Temporarily disable cache via the Network tab of your browser devtools;
2.  Restart Vite dev server with the `--force` flag to re-bundle the deps;
3.  Reload the page.

Static Asset Handling [​](#static-asset-handling)
=================================================

*   Related: [Public Base Path](/guide/build#public-base-path)
*   Related: [`assetsInclude` config option](/config/shared-options#assetsinclude)

Importing Asset as URL [​](#importing-asset-as-url)
---------------------------------------------------

Importing a static asset will return the resolved public URL when it is served:

js

    import imgUrl from './img.png'
    document.getElementById('hero-img').src = imgUrl

For example, `imgUrl` will be `/src/img.png` during development, and become `/assets/img.2d8efhg.png` in the production build.

The behavior is similar to webpack's `file-loader`. The difference is that the import can be either using absolute public paths (based on project root during dev) or relative paths.

*   `url()` references in CSS are handled the same way.
    
*   If using the Vue plugin, asset references in Vue SFC templates are automatically converted into imports.
    
*   Common image, media, and font filetypes are detected as assets automatically. You can extend the internal list using the [`assetsInclude` option](/config/shared-options#assetsinclude).
    
*   Referenced assets are included as part of the build assets graph, will get hashed file names, and can be processed by plugins for optimization.
    
*   Assets smaller in bytes than the [`assetsInlineLimit` option](/config/build-options#build-assetsinlinelimit) will be inlined as base64 data URLs.
    
*   Git LFS placeholders are automatically excluded from inlining because they do not contain the content of the file they represent. To get inlining, make sure to download the file contents via Git LFS before building.
    
*   TypeScript, by default, does not recognize static asset imports as valid modules. To fix this, include [`vite/client`](/guide/features#client-types).
    

Inlining SVGs through `url()`

When passing a URL of SVG to a manually constructed `url()` by JS, the variable should be wrapped within double quotes.

js

    import imgUrl from './img.svg'
    document.getElementById('hero-img').style.background = `url("${imgUrl}")`

### Explicit URL Imports [​](#explicit-url-imports)

Assets that are not included in the internal list or in `assetsInclude`, can be explicitly imported as a URL using the `?url` suffix. This is useful, for example, to import [Houdini Paint Worklets](https://developer.mozilla.org/en-US/docs/Web/API/CSS/paintWorklet_static).

js

    import workletURL from 'extra-scalloped-border/worklet.js?url'
    CSS.paintWorklet.addModule(workletURL)

### Explicit Inline Handling [​](#explicit-inline-handling)

Assets can be explicitly imported with inlining or no inlining using the `?inline` or `?no-inline` suffix respectively.

js

    import imgUrl1 from './img.svg?no-inline'
    import imgUrl2 from './img.png?inline'

### Importing Asset as String [​](#importing-asset-as-string)

Assets can be imported as strings using the `?raw` suffix.

js

    import shaderString from './shader.glsl?raw'

### Importing Script as a Worker [​](#importing-script-as-a-worker)

Scripts can be imported as web workers with the `?worker` or `?sharedworker` suffix.

js

    // Separate chunk in the production build
    import Worker from './shader.js?worker'
    const worker = new Worker()

js

    // sharedworker
    import SharedWorker from './shader.js?sharedworker'
    const sharedWorker = new SharedWorker()

js

    // Inlined as base64 strings
    import InlineWorker from './shader.js?worker&inline'

Check out the [Web Worker section](/guide/features#web-workers) for more details.

The `public` Directory [​](#the-public-directory)
-------------------------------------------------

If you have assets that are:

*   Never referenced in source code (e.g. `robots.txt`)
*   Must retain the exact same file name (without hashing)
*   ...or you simply don't want to have to import an asset first just to get its URL

Then you can place the asset in a special `public` directory under your project root. Assets in this directory will be served at root path `/` during dev, and copied to the root of the dist directory as-is.

The directory defaults to `<root>/public`, but can be configured via the [`publicDir` option](/config/shared-options#publicdir).

Note that you should always reference `public` assets using root absolute path - for example, `public/icon.png` should be referenced in source code as `/icon.png`.

new URL(url, import.meta.url) [​](#new-url-url-import-meta-url)
---------------------------------------------------------------

[import.meta.url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta) is a native ESM feature that exposes the current module's URL. Combining it with the native [URL constructor](https://developer.mozilla.org/en-US/docs/Web/API/URL), we can obtain the full, resolved URL of a static asset using relative path from a JavaScript module:

js

    const imgUrl = new URL('./img.png', import.meta.url).href
    
    document.getElementById('hero-img').src = imgUrl

This works natively in modern browsers - in fact, Vite doesn't need to process this code at all during development!

This pattern also supports dynamic URLs via template literals:

js

    function getImageUrl(name) {
      // note that this does not include files in subdirectories
      return new URL(`./dir/${name}.png`, import.meta.url).href
    }

During the production build, Vite will perform necessary transforms so that the URLs still point to the correct location even after bundling and asset hashing. However, the URL string must be static so it can be analyzed, otherwise the code will be left as is, which can cause runtime errors if `build.target` does not support `import.meta.url`

js

    // Vite will not transform this
    const imgUrl = new URL(imagePath, import.meta.url).href

How it works

Vite will transform the `getImageUrl` function to:

js

    import __img0png from './dir/img0.png'
    import __img1png from './dir/img1.png'
    
    function getImageUrl(name) {
      const modules = {
        './dir/img0.png': __img0png,
        './dir/img1.png': __img1png,
      }
      return new URL(modules[`./dir/${name}.png`], import.meta.url).href
    }

Does not work with SSR

This pattern does not work if you are using Vite for Server-Side Rendering, because `import.meta.url` have different semantics in browsers vs. Node.js. The server bundle also cannot determine the client host URL ahead of time.

Building for Production [​](#building-for-production)
=====================================================

When it is time to deploy your app for production, simply run the `vite build` command. By default, it uses `<root>/index.html` as the build entry point, and produces an application bundle that is suitable to be served over a static hosting service. Check out the [Deploying a Static Site](/guide/static-deploy) for guides about popular services.

Browser Compatibility [​](#browser-compatibility)
-------------------------------------------------

By default, the production bundle assumes support for modern JavaScript, such as [native ES Modules](https://caniuse.com/es6-module), [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta), [nullish coalescing](https://caniuse.com/mdn-javascript_operators_nullish_coalescing), and [BigInt](https://caniuse.com/bigint). The default browser support range is:

*   Chrome >=87
*   Firefox >=78
*   Safari >=14
*   Edge >=88

You can specify custom targets via the [`build.target` config option](/config/build-options#build-target), where the lowest target is `es2015`. If a lower target is set, Vite will still require these minimum browser support ranges as it relies on [native ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta):

*   Chrome >=64
*   Firefox >=67
*   Safari >=11.1
*   Edge >=79

Note that by default, Vite only handles syntax transforms and **does not cover polyfills**. You can check out [https://cdnjs.cloudflare.com/polyfill/](https://cdnjs.cloudflare.com/polyfill/) which automatically generates polyfill bundles based on the user's browser UserAgent string.

Legacy browsers can be supported via [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy), which will automatically generate legacy chunks and corresponding ES language feature polyfills. The legacy chunks are conditionally loaded only in browsers that do not have native ESM support.

Public Base Path [​](#public-base-path)
---------------------------------------

*   Related: [Asset Handling](/guide/assets)

If you are deploying your project under a nested public path, simply specify the [`base` config option](/config/shared-options#base) and all asset paths will be rewritten accordingly. This option can also be specified as a command line flag, e.g. `vite build --base=/my/public/path/`.

JS-imported asset URLs, CSS `url()` references, and asset references in your `.html` files are all automatically adjusted to respect this option during build.

The exception is when you need to dynamically concatenate URLs on the fly. In this case, you can use the globally injected `import.meta.env.BASE_URL` variable which will be the public base path. Note this variable is statically replaced during build so it must appear exactly as-is (i.e. `import.meta.env['BASE_URL']` won't work).

For advanced base path control, check out [Advanced Base Options](#advanced-base-options).

### Relative base [​](#relative-base)

If you don't know the base path in advance, you may set a relative base path with `"base": "./"` or `"base": ""`. This will make all generated URLs to be relative to each file.

Support for older browsers when using relative bases

`import.meta` support is required for relative bases. If you need to support [browsers that do not support `import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta), you can use [the `legacy` plugin](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy).

Customizing the Build [​](#customizing-the-build)
-------------------------------------------------

The build can be customized via various [build config options](/config/build-options). Specifically, you can directly adjust the underlying [Rollup options](https://rollupjs.org/configuration-options/) via `build.rollupOptions`:

vite.config.js

js

    export default defineConfig({
      build: {
        rollupOptions: {
          // https://rollupjs.org/configuration-options/
        },
      },
    })

For example, you can specify multiple Rollup outputs with plugins that are only applied during build.

Chunking Strategy [​](#chunking-strategy)
-----------------------------------------

You can configure how chunks are split using `build.rollupOptions.output.manualChunks` (see [Rollup docs](https://rollupjs.org/configuration-options/#output-manualchunks)). If you use a framework, refer to their documentation for configuring how chunks are split.

Load Error Handling [​](#load-error-handling)
---------------------------------------------

Vite emits `vite:preloadError` event when it fails to load dynamic imports. `event.payload` contains the original import error. If you call `event.preventDefault()`, the error will not be thrown.

js

    window.addEventListener('vite:preloadError', (event) => {
      window.location.reload() // for example, refresh the page
    })

When a new deployment occurs, the hosting service may delete the assets from previous deployments. As a result, a user who visited your site before the new deployment might encounter an import error. This error happens because the assets running on that user's device are outdated and it tries to import the corresponding old chunk, which is deleted. This event is useful for addressing this situation.

Rebuild on Files Changes [​](#rebuild-on-files-changes)
-------------------------------------------------------

You can enable rollup watcher with `vite build --watch`. Or, you can directly adjust the underlying [`WatcherOptions`](https://rollupjs.org/configuration-options/#watch) via `build.watch`:

vite.config.js

js

    export default defineConfig({
      build: {
        watch: {
          // https://rollupjs.org/configuration-options/#watch
        },
      },
    })

With the `--watch` flag enabled, changes to the `vite.config.js`, as well as any files to be bundled, will trigger a rebuild.

Multi-Page App [​](#multi-page-app)
-----------------------------------

Suppose you have the following source code structure:

    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── main.js
    └── nested
        ├── index.html
        └── nested.js

During dev, simply navigate or link to `/nested/` - it works as expected, just like for a normal static file server.

During build, all you need to do is to specify multiple `.html` files as entry points:

vite.config.js

js

    import { dirname, resolve } from 'node:path'
    import { fileURLToPath } from 'node:url'
    import { defineConfig } from 'vite'
    
    const __dirname = dirname(fileURLToPath(import.meta.url))
    
    export default defineConfig({
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'nested/index.html'),
          },
        },
      },
    })

If you specify a different root, remember that `__dirname` will still be the folder of your vite.config.js file when resolving the input paths. Therefore, you will need to add your `root` entry to the arguments for `resolve`.

Note that for HTML files, Vite ignores the name given to the entry in the `rollupOptions.input` object and instead respects the resolved id of the file when generating the HTML asset in the dist folder. This ensures a consistent structure with the way the dev server works.

Library Mode [​](#library-mode)
-------------------------------

When you are developing a browser-oriented library, you are likely spending most of the time on a test/demo page that imports your actual library. With Vite, you can use your `index.html` for that purpose to get the smooth development experience.

When it is time to bundle your library for distribution, use the [`build.lib` config option](/config/build-options#build-lib). Make sure to also externalize any dependencies that you do not want to bundle into your library, e.g. `vue` or `react`:

vite.config.js (single entry)vite.config.js (multiple entries)

js

    import { dirname, resolve } from 'node:path'
    import { fileURLToPath } from 'node:url'
    import { defineConfig } from 'vite'
    
    const __dirname = dirname(fileURLToPath(import.meta.url))
    
    export default defineConfig({
      build: {
        lib: {
          entry: resolve(__dirname, 'lib/main.js'),
          name: 'MyLib',
          // the proper extensions will be added
          fileName: 'my-lib',
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['vue'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    })

js

    import { dirname, resolve } from 'node:path'
    import { fileURLToPath } from 'node:url'
    import { defineConfig } from 'vite'
    
    const __dirname = dirname(fileURLToPath(import.meta.url))
    
    export default defineConfig({
      build: {
        lib: {
          entry: {
            'my-lib': resolve(__dirname, 'lib/main.js'),
            secondary: resolve(__dirname, 'lib/secondary.js'),
          },
          name: 'MyLib',
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['vue'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    })

The entry file would contain exports that can be imported by users of your package:

lib/main.js

js

    import Foo from './Foo.vue'
    import Bar from './Bar.vue'
    export { Foo, Bar }

Running `vite build` with this config uses a Rollup preset that is oriented towards shipping libraries and produces two bundle formats:

*   `es` and `umd` (for single entry)
*   `es` and `cjs` (for multiple entries)

The formats can be configured with the [`build.lib.formats`](/config/build-options#build-lib) option.

    $ vite build
    building for production...
    dist/my-lib.js      0.08 kB / gzip: 0.07 kB
    dist/my-lib.umd.cjs 0.30 kB / gzip: 0.16 kB

Recommended `package.json` for your lib:

package.json (single entry)package.json (multiple entries)

json

    {
      "name": "my-lib",
      "type": "module",
      "files": ["dist"],
      "main": "./dist/my-lib.umd.cjs",
      "module": "./dist/my-lib.js",
      "exports": {
        ".": {
          "import": "./dist/my-lib.js",
          "require": "./dist/my-lib.umd.cjs"
        }
      }
    }

json

    {
      "name": "my-lib",
      "type": "module",
      "files": ["dist"],
      "main": "./dist/my-lib.cjs",
      "module": "./dist/my-lib.js",
      "exports": {
        ".": {
          "import": "./dist/my-lib.js",
          "require": "./dist/my-lib.cjs"
        },
        "./secondary": {
          "import": "./dist/secondary.js",
          "require": "./dist/secondary.cjs"
        }
      }
    }

### CSS support [​](#css-support)

If your library imports any CSS, it will be bundled as a single CSS file besides the built JS files, e.g. `dist/my-lib.css`. The name defaults to `build.lib.fileName`, but can also be changed with [`build.lib.cssFileName`](/config/build-options#build-lib).

You can export the CSS file in your `package.json` to be imported by users:

json

    {
      "name": "my-lib",
      "type": "module",
      "files": ["dist"],
      "main": "./dist/my-lib.umd.cjs",
      "module": "./dist/my-lib.js",
      "exports": {
        ".": {
          "import": "./dist/my-lib.js",
          "require": "./dist/my-lib.umd.cjs"
        },
        "./style.css": "./dist/my-lib.css"
      }
    }

File Extensions

If the `package.json` does not contain `"type": "module"`, Vite will generate different file extensions for Node.js compatibility. `.js` will become `.mjs` and `.cjs` will become `.js`.

Environment Variables

In library mode, all [`import.meta.env.*`](/guide/env-and-mode) usage are statically replaced when building for production. However, `process.env.*` usage are not, so that consumers of your library can dynamically change it. If this is undesirable, you can use `define: { 'process.env.NODE_ENV': '"production"' }` for example to statically replace them, or use [`esm-env`](https://github.com/benmccann/esm-env) for better compatibility with bundlers and runtimes.

Advanced Usage

Library mode includes a simple and opinionated configuration for browser-oriented and JS framework libraries. If you are building non-browser libraries, or require advanced build flows, you can use [Rollup](https://rollupjs.org) or [esbuild](https://esbuild.github.io) directly.

Advanced Base Options [​](#advanced-base-options)
-------------------------------------------------

WARNING

This feature is experimental. [Give Feedback](https://github.com/vitejs/vite/discussions/13834).

For advanced use cases, the deployed assets and public files may be in different paths, for example to use different cache strategies. A user may choose to deploy in three different paths:

*   The generated entry HTML files (which may be processed during SSR)
*   The generated hashed assets (JS, CSS, and other file types like images)
*   The copied [public files](/guide/assets#the-public-directory)

A single static [base](#public-base-path) isn't enough in these scenarios. Vite provides experimental support for advanced base options during build, using `experimental.renderBuiltUrl`.

ts

    experimental: {
      renderBuiltUrl(filename, { hostType }) {
        if (hostType === 'js') {
          return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` }
        } else {
          return { relative: true }
        }
      },
    },
    

If the hashed assets and public files aren't deployed together, options for each group can be defined independently using asset `type` included in the second `context` param given to the function.

ts

    experimental: {
      renderBuiltUrl(filename, { hostId, hostType, type }) {
        if (type === 'public') {
          return 'https://www.domain.com/' + filename
        } else if (path.extname(hostId) === '.js') {
          return {
            runtime: `window.__assetsPath(${JSON.stringify(filename)})`
          }
        } else {
          return 'https://cdn.domain.com/assets/' + filename
        }
      },
    },
    

Note that the `filename` passed is a decoded URL, and if the function returns a URL string, it should also be decoded. Vite will handle the encoding automatically when rendering the URLs. If an object with `runtime` is returned, encoding should be handled yourself where needed as the runtime code will be rendered as is.

Deploying a Static Site [​](#deploying-a-static-site)
=====================================================

The following guides are based on some shared assumptions:

*   You are using the default build output location (`dist`). This location [can be changed using `build.outDir`](/config/build-options#build-outdir), and you can extrapolate instructions from these guides in that case.
*   You are using npm. You can use equivalent commands to run the scripts if you are using Yarn or other package managers.
*   Vite is installed as a local dev dependency in your project, and you have setup the following npm scripts:

package.json

json

    {
      "scripts": {
        "build": "vite build",
        "preview": "vite preview"
      }
    }

It is important to note that `vite preview` is intended for previewing the build locally and not meant as a production server.

NOTE

These guides provide instructions for performing a static deployment of your Vite site. Vite also supports Server Side Rendering. SSR refers to front-end frameworks that support running the same application in Node.js, pre-rendering it to HTML, and finally hydrating it on the client. Check out the [SSR Guide](/guide/ssr) to learn about this feature. On the other hand, if you are looking for integration with traditional server-side frameworks, check out the [Backend Integration guide](/guide/backend-integration) instead.

Building the App [​](#building-the-app)
---------------------------------------

You may run `npm run build` command to build the app.

bash

    $ npm run build

By default, the build output will be placed at `dist`. You may deploy this `dist` folder to any of your preferred platforms.

### Testing the App Locally [​](#testing-the-app-locally)

Once you've built the app, you may test it locally by running `npm run preview` command.

bash

    $ npm run preview

The `vite preview` command will boot up a local static web server that serves the files from `dist` at `http://localhost:4173`. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing the `--port` flag as an argument.

package.json

json

    {
      "scripts": {
        "preview": "vite preview --port 8080"
      }
    }

Now the `preview` command will launch the server at `http://localhost:8080`.

GitHub Pages [​](#github-pages)
-------------------------------

1.  Set the correct `base` in `vite.config.js`.
    
    If you are deploying to `https://<USERNAME>.github.io/`, or to a custom domain through GitHub Pages (eg. `www.example.com`), set `base` to `'/'`. Alternatively, you can remove `base` from the configuration, as it defaults to `'/'`.
    
    If you are deploying to `https://<USERNAME>.github.io/<REPO>/` (eg. your repository is at `https://github.com/<USERNAME>/<REPO>`), then set `base` to `'/<REPO>/'`.
    
2.  Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as "GitHub Actions", this will lead you to create a workflow that builds and deploys your project, a sample workflow that installs dependencies and builds using npm is provided:
    
    yaml
    
        # Simple workflow for deploying static content to GitHub Pages
        name: Deploy static content to Pages
        
        on:
          # Runs on pushes targeting the default branch
          push:
            branches: ['main']
        
          # Allows you to run this workflow manually from the Actions tab
          workflow_dispatch:
        
        # Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
        permissions:
          contents: read
          pages: write
          id-token: write
        
        # Allow one concurrent deployment
        concurrency:
          group: 'pages'
          cancel-in-progress: true
        
        jobs:
          # Single deploy job since we're just deploying
          deploy:
            environment:
              name: github-pages
              url: ${{ steps.deployment.outputs.page_url }}
            runs-on: ubuntu-latest
            steps:
              - name: Checkout
                uses: actions/checkout@v4
              - name: Set up Node
                uses: actions/setup-node@v4
                with:
                  node-version: lts/*
                  cache: 'npm'
              - name: Install dependencies
                run: npm ci
              - name: Build
                run: npm run build
              - name: Setup Pages
                uses: actions/configure-pages@v5
              - name: Upload artifact
                uses: actions/upload-pages-artifact@v3
                with:
                  # Upload dist folder
                  path: './dist'
              - name: Deploy to GitHub Pages
                id: deployment
                uses: actions/deploy-pages@v4
    

GitLab Pages and GitLab CI [​](#gitlab-pages-and-gitlab-ci)
-----------------------------------------------------------

1.  Set the correct `base` in `vite.config.js`.
    
    If you are deploying to `https://<USERNAME or GROUP>.gitlab.io/`, you can omit `base` as it defaults to `'/'`.
    
    If you are deploying to `https://<USERNAME or GROUP>.gitlab.io/<REPO>/`, for example your repository is at `https://gitlab.com/<USERNAME>/<REPO>`, then set `base` to `'/<REPO>/'`.
    
2.  Create a file called `.gitlab-ci.yml` in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:
    
    .gitlab-ci.yml
    
    yaml
    
        image: node:lts
        pages:
          stage: deploy
          cache:
            key:
              files:
                - package-lock.json
              prefix: npm
            paths:
              - node_modules/
          script:
            - npm install
            - npm run build
            - cp -a dist/. public/
          artifacts:
            paths:
              - public
          rules:
            - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
    

Netlify [​](#netlify)
---------------------

### Netlify CLI [​](#netlify-cli)

1.  Install the [Netlify CLI](https://cli.netlify.com/).
2.  Create a new site using `ntl init`.
3.  Deploy using `ntl deploy`.

bash

    # Install the Netlify CLI
    $ npm install -g netlify-cli
    
    # Create a new site in Netlify
    $ ntl init
    
    # Deploy to a unique preview URL
    $ ntl deploy

The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the `prod` flag:

bash

    # Deploy the site into production
    $ ntl deploy --prod

### Netlify with Git [​](#netlify-with-git)

1.  Push your code to a git repository (GitHub, GitLab, BitBucket, Azure DevOps).
2.  [Import the project](https://app.netlify.com/start) to Netlify.
3.  Choose the branch, output directory, and set up environment variables if applicable.
4.  Click on **Deploy**.
5.  Your Vite app is deployed!

After your project has been imported and deployed, all subsequent pushes to branches other than the production branch along with pull requests will generate [Preview Deployments](https://docs.netlify.com/site-deploys/deploy-previews/), and all changes made to the Production Branch (commonly “main”) will result in a [Production Deployment](https://docs.netlify.com/site-deploys/overview/#definitions).

Vercel [​](#vercel)
-------------------

### Vercel CLI [​](#vercel-cli)

1.  Install the [Vercel CLI](https://vercel.com/cli) and run `vercel` to deploy.
2.  Vercel will detect that you are using Vite and will enable the correct settings for your deployment.
3.  Your application is deployed! (e.g. [vite-vue-template.vercel.app](https://vite-vue-template.vercel.app/))

bash

    $ npm i -g vercel
    $ vercel init vite
    Vercel CLI
    > Success! Initialized "vite" example in ~/your-folder.
    - To deploy, `cd vite` and run `vercel`.

### Vercel for Git [​](#vercel-for-git)

1.  Push your code to your git repository (GitHub, GitLab, Bitbucket).
2.  [Import your Vite project](https://vercel.com/new) into Vercel.
3.  Vercel will detect that you are using Vite and will enable the correct settings for your deployment.
4.  Your application is deployed! (e.g. [vite-vue-template.vercel.app](https://vite-vue-template.vercel.app/))

After your project has been imported and deployed, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/concepts/deployments/environments#preview), and all changes made to the Production Branch (commonly “main”) will result in a [Production Deployment](https://vercel.com/docs/concepts/deployments/environments#production).

Learn more about Vercel’s [Git Integration](https://vercel.com/docs/concepts/git).

Cloudflare Pages [​](#cloudflare-pages)
---------------------------------------

### Cloudflare Pages via Wrangler [​](#cloudflare-pages-via-wrangler)

1.  Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/).
2.  Authenticate Wrangler with your Cloudflare account using `wrangler login`.
3.  Run your build command.
4.  Deploy using `npx wrangler pages deploy dist`.

bash

    # Install Wrangler CLI
    $ npm install -g wrangler
    
    # Login to Cloudflare account from CLI
    $ wrangler login
    
    # Run your build command
    $ npm run build
    
    # Create new deployment
    $ npx wrangler pages deploy dist

After your assets are uploaded, Wrangler will give you a preview URL to inspect your site. When you log into the Cloudflare Pages dashboard, you will see your new project.

### Cloudflare Pages with Git [​](#cloudflare-pages-with-git)

1.  Push your code to your git repository (GitHub, GitLab).
2.  Log in to the Cloudflare dashboard and select your account in **Account Home** > **Pages**.
3.  Select **Create a new Project** and the **Connect Git** option.
4.  Select the git project you want to deploy and click **Begin setup**
5.  Select the corresponding framework preset in the build setting depending on the Vite framework you have selected.
6.  Then save and deploy!
7.  Your application is deployed! (e.g `https://<PROJECTNAME>.pages.dev/`)

After your project has been imported and deployed, all subsequent pushes to branches will generate [Preview Deployments](https://developers.cloudflare.com/pages/platform/preview-deployments/) unless specified not to in your [branch build controls](https://developers.cloudflare.com/pages/platform/branch-build-controls/). All changes to the Production Branch (commonly “main”) will result in a Production Deployment.

You can also add custom domains and handle custom build settings on Pages. Learn more about [Cloudflare Pages Git Integration](https://developers.cloudflare.com/pages/get-started/#manage-your-site).

Google Firebase [​](#google-firebase)
-------------------------------------

1.  Make sure you have [firebase-tools](https://www.npmjs.com/package/firebase-tools) installed.
    
2.  Create `firebase.json` and `.firebaserc` at the root of your project with the following content:
    
    firebase.json
    
    json
    
        {
          "hosting": {
            "public": "dist",
            "ignore": [],
            "rewrites": [
              {
                "source": "**",
                "destination": "/index.html"
              }
            ]
          }
        }
    
    .firebaserc
    
    js
    
        {
          "projects": {
            "default": "<YOUR_FIREBASE_ID>"
          }
        }
    
3.  After running `npm run build`, deploy using the command `firebase deploy`.
    

Surge [​](#surge)
-----------------

1.  First install [surge](https://www.npmjs.com/package/surge), if you haven’t already.
    
2.  Run `npm run build`.
    
3.  Deploy to surge by typing `surge dist`.
    

You can also deploy to a [custom domain](http://surge.sh/help/adding-a-custom-domain) by adding `surge dist yourdomain.com`.

Azure Static Web Apps [​](#azure-static-web-apps)
-------------------------------------------------

You can quickly deploy your Vite app with Microsoft Azure [Static Web Apps](https://aka.ms/staticwebapps) service. You need:

*   An Azure account and a subscription key. You can create a [free Azure account here](https://azure.microsoft.com/free).
*   Your app code pushed to [GitHub](https://github.com).
*   The [SWA Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) in [Visual Studio Code](https://code.visualstudio.com).

Install the extension in VS Code and navigate to your app root. Open the Static Web Apps extension, sign in to Azure, and click the '+' sign to create a new Static Web App. You will be prompted to designate which subscription key to use.

Follow the wizard started by the extension to give your app a name, choose a framework preset, and designate the app root (usually `/`) and built file location `/dist`. The wizard will run and will create a GitHub action in your repo in a `.github` folder.

The action will work to deploy your app (watch its progress in your repo's Actions tab) and, when successfully completed, you can view your app in the address provided in the extension's progress window by clicking the 'Browse Website' button that appears when the GitHub action has run.

Render [​](#render)
-------------------

You can deploy your Vite app as a Static Site on [Render](https://render.com/).

1.  Create a [Render account](https://dashboard.render.com/register).
    
2.  In the [Dashboard](https://dashboard.render.com/), click the **New** button and select **Static Site**.
    
3.  Connect your GitHub/GitLab account or use a public repository.
    
4.  Specify a project name and branch.
    
    *   **Build Command**: `npm install && npm run build`
    *   **Publish Directory**: `dist`
5.  Click **Create Static Site**.
    
    Your app should be deployed at `https://<PROJECTNAME>.onrender.com/`.
    

By default, any new commit pushed to the specified branch will automatically trigger a new deployment. [Auto-Deploy](https://render.com/docs/deploys#toggling-auto-deploy-for-a-service) can be configured in the project settings.

You can also add a [custom domain](https://render.com/docs/custom-domains) to your project.

Flightcontrol [​](#flightcontrol)
---------------------------------

Deploy your static site using [Flightcontrol](https://www.flightcontrol.dev/?ref=docs-vite) by following these [instructions](https://www.flightcontrol.dev/docs/reference/examples/vite?ref=docs-vite).

Kinsta Static Site Hosting [​](#kinsta-static-site-hosting)
-----------------------------------------------------------

Deploy your static site using [Kinsta](https://kinsta.com/static-site-hosting/) by following these [instructions](https://kinsta.com/docs/react-vite-example/).

xmit Static Site Hosting [​](#xmit-static-site-hosting)
-------------------------------------------------------

Deploy your static site using [xmit](https://xmit.co) by following this [guide](https://xmit.dev/posts/vite-quickstart/).

Env Variables and Modes [​](#env-variables-and-modes)
=====================================================

Vite exposes certain constants under the special `import.meta.env` object. These constants are defined as global variables during dev and statically replaced at build time to make tree-shaking effective.

Built-in Constants [​](#built-in-constants)
-------------------------------------------

Some built-in constants are available in all cases:

*   **`import.meta.env.MODE`**: {string} the [mode](#modes) the app is running in.
    
*   **`import.meta.env.BASE_URL`**: {string} the base url the app is being served from. This is determined by the [`base` config option](/config/shared-options#base).
    
*   **`import.meta.env.PROD`**: {boolean} whether the app is running in production (running the dev server with `NODE_ENV='production'` or running an app built with `NODE_ENV='production'`).
    
*   **`import.meta.env.DEV`**: {boolean} whether the app is running in development (always the opposite of `import.meta.env.PROD`)
    
*   **`import.meta.env.SSR`**: {boolean} whether the app is running in the [server](/guide/ssr#conditional-logic).
    

Env Variables [​](#env-variables)
---------------------------------

Vite exposes env variables under `import.meta.env` object as strings automatically.

To prevent accidentally leaking env variables to the client, only variables prefixed with `VITE_` are exposed to your Vite-processed code. e.g. for the following env variables:

.env

    VITE_SOME_KEY=123
    DB_PASSWORD=foobar

Only `VITE_SOME_KEY` will be exposed as `import.meta.env.VITE_SOME_KEY` to your client source code, but `DB_PASSWORD` will not.

js

    console.log(import.meta.env.VITE_SOME_KEY) // "123"
    console.log(import.meta.env.DB_PASSWORD) // undefined

If you want to customize the env variables prefix, see the [envPrefix](/config/shared-options#envprefix) option.

Env parsing

As shown above, `VITE_SOME_KEY` is a number but returns a string when parsed. The same would also happen for boolean env variables. Make sure to convert to the desired type when using it in your code.

### `.env` Files [​](#env-files)

Vite uses [dotenv](https://github.com/motdotla/dotenv) to load additional environment variables from the following files in your [environment directory](/config/shared-options#envdir):

    .env                # loaded in all cases
    .env.local          # loaded in all cases, ignored by git
    .env.[mode]         # only loaded in specified mode
    .env.[mode].local   # only loaded in specified mode, ignored by git

Env Loading Priorities

An env file for a specific mode (e.g. `.env.production`) will take higher priority than a generic one (e.g. `.env`).

Vite will always load `.env` and `.env.local` in addition to the mode-specific `.env.[mode]` file. Variables declared in mode-specific files will take precedence over those in generic files, but variables defined only in `.env` or `.env.local` will still be available in the environment.

In addition, environment variables that already exist when Vite is executed have the highest priority and will not be overwritten by `.env` files. For example, when running `VITE_SOME_KEY=123 vite build`.

`.env` files are loaded at the start of Vite. Restart the server after making changes.

Also, Vite uses [dotenv-expand](https://github.com/motdotla/dotenv-expand) to expand variables written in env files out of the box. To learn more about the syntax, check out [their docs](https://github.com/motdotla/dotenv-expand#what-rules-does-the-expansion-engine-follow).

Note that if you want to use `$` inside your environment value, you have to escape it with `\`.

.env

    KEY=123
    NEW_KEY1=test$foo   # test
    NEW_KEY2=test\$foo  # test$foo
    NEW_KEY3=test$KEY   # test123

SECURITY NOTES

*   `.env.*.local` files are local-only and can contain sensitive variables. You should add `*.local` to your `.gitignore` to avoid them being checked into git.
    
*   Since any variables exposed to your Vite source code will end up in your client bundle, `VITE_*` variables should _not_ contain any sensitive information.
    

Expanding variables in reverse order

Vite supports expanding variables in reverse order. For example, the `.env` below will be evaluated as `VITE_FOO=foobar`, `VITE_BAR=bar`.

.env

    VITE_FOO=foo${VITE_BAR}
    VITE_BAR=bar

This does not work in shell scripts and other tools like `docker-compose`. That said, Vite supports this behavior as this has been supported by `dotenv-expand` for a long time and other tools in JavaScript ecosystem uses older versions that supports this behavior.

To avoid interop issues, it is recommended to avoid relying on this behavior. Vite may start emitting warnings for this behavior in the future.

IntelliSense for TypeScript [​](#intellisense-for-typescript)
-------------------------------------------------------------

By default, Vite provides type definitions for `import.meta.env` in [`vite/client.d.ts`](https://github.com/vitejs/vite/blob/main/packages/vite/client.d.ts). While you can define more custom env variables in `.env.[mode]` files, you may want to get TypeScript IntelliSense for user-defined env variables that are prefixed with `VITE_`.

To achieve this, you can create an `vite-env.d.ts` in `src` directory, then augment `ImportMetaEnv` like this:

vite-env.d.ts

typescript

    /// <reference types="vite/client" />
    
    interface ViteTypeOptions {
      // By adding this line, you can make the type of ImportMetaEnv strict
      // to disallow unknown keys.
      // strictImportMetaEnv: unknown
    }
    
    interface ImportMetaEnv {
      readonly VITE_APP_TITLE: string
      // more env variables...
    }
    
    interface ImportMeta {
      readonly env: ImportMetaEnv
    }

If your code relies on types from browser environments such as [DOM](https://github.com/microsoft/TypeScript/blob/main/src/lib/dom.generated.d.ts) and [WebWorker](https://github.com/microsoft/TypeScript/blob/main/src/lib/webworker.generated.d.ts), you can update the [lib](https://www.typescriptlang.org/tsconfig#lib) field in `tsconfig.json`.

tsconfig.json

json

    {
      "lib": ["WebWorker"]
    }

Imports will break type augmentation

If the `ImportMetaEnv` augmentation does not work, make sure you do not have any `import` statements in `vite-env.d.ts`. See the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/modules.html#how-javascript-modules-are-defined) for more information.

HTML Constant Replacement [​](#html-constant-replacement)
---------------------------------------------------------

Vite also supports replacing constants in HTML files. Any properties in `import.meta.env` can be used in HTML files with a special `%CONST_NAME%` syntax:

html

    <h1>Vite is running in %MODE%</h1>
    <p>Using data from %VITE_API_URL%</p>

If the env doesn't exist in `import.meta.env`, e.g. `%NON_EXISTENT%`, it will be ignored and not replaced, unlike `import.meta.env.NON_EXISTENT` in JS where it's replaced as `undefined`.

Given that Vite is used by many frameworks, it is intentionally unopinionated about complex replacements like conditionals. Vite can be extended using [an existing userland plugin](https://github.com/vitejs/awesome-vite#transformers) or a custom plugin that implements the [`transformIndexHtml` hook](/guide/api-plugin#transformindexhtml).

Modes [​](#modes)
-----------------

By default, the dev server (`dev` command) runs in `development` mode and the `build` command runs in `production` mode.

This means when running `vite build`, it will load the env variables from `.env.production` if there is one:

.env.production

    VITE_APP_TITLE=My App

In your app, you can render the title using `import.meta.env.VITE_APP_TITLE`.

In some cases, you may want to run `vite build` with a different mode to render a different title. You can overwrite the default mode used for a command by passing the `--mode` option flag. For example, if you want to build your app for a staging mode:

bash

    vite build --mode staging

And create a `.env.staging` file:

.env.staging

    VITE_APP_TITLE=My App (staging)

As `vite build` runs a production build by default, you can also change this and run a development build by using a different mode and `.env` file configuration:

.env.testing

    NODE_ENV=development

### NODE\_ENV and Modes [​](#node-env-and-modes)

It's important to note that `NODE_ENV` (`process.env.NODE_ENV`) and modes are two different concepts. Here's how different commands affect the `NODE_ENV` and mode:

Command

NODE\_ENV

Mode

`vite build`

`"production"`

`"production"`

`vite build --mode development`

`"production"`

`"development"`

`NODE_ENV=development vite build`

`"development"`

`"production"`

`NODE_ENV=development vite build --mode development`

`"development"`

`"development"`

The different values of `NODE_ENV` and mode also reflect on its corresponding `import.meta.env` properties:

Command

`import.meta.env.PROD`

`import.meta.env.DEV`

`NODE_ENV=production`

`true`

`false`

`NODE_ENV=development`

`false`

`true`

`NODE_ENV=other`

`false`

`true`

Command

`import.meta.env.MODE`

`--mode production`

`"production"`

`--mode development`

`"development"`

`--mode staging`

`"staging"`

`NODE_ENV` in `.env` files

`NODE_ENV=...` can be set in the command, and also in your `.env` file. If `NODE_ENV` is specified in a `.env.[mode]` file, the mode can be used to control its value. However, both `NODE_ENV` and modes remain as two different concepts.

The main benefit with `NODE_ENV=...` in the command is that it allows Vite to detect the value early. It also allows you to read `process.env.NODE_ENV` in your Vite config as Vite can only load the env files once the config is evaluated.

Server-Side Rendering (SSR) [​](#server-side-rendering-ssr)
===========================================================

Note

SSR specifically refers to front-end frameworks (for example React, Preact, Vue, and Svelte) that support running the same application in Node.js, pre-rendering it to HTML, and finally hydrating it on the client. If you are looking for integration with traditional server-side frameworks, check out the [Backend Integration guide](/guide/backend-integration) instead.

The following guide also assumes prior experience working with SSR in your framework of choice, and will only focus on Vite-specific integration details.

Low-level API

This is a low-level API meant for library and framework authors. If your goal is to create an application, make sure to check out the higher-level SSR plugins and tools at [Awesome Vite SSR section](https://github.com/vitejs/awesome-vite#ssr) first. That said, many applications are successfully built directly on top of Vite's native low-level API.

Currently, Vite is working on an improved SSR API with the [Environment API](https://github.com/vitejs/vite/discussions/16358). Check out the link for more details.

Example Projects [​](#example-projects)
---------------------------------------

Vite provides built-in support for server-side rendering (SSR). [`create-vite-extra`](https://github.com/bluwy/create-vite-extra) contains example SSR setups you can use as references for this guide:

*   [Vanilla](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-vanilla)
*   [Vue](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-vue)
*   [React](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react)
*   [Preact](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-preact)
*   [Svelte](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-svelte)
*   [Solid](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-solid)

You can also scaffold these projects locally by [running `create-vite`](./#scaffolding-your-first-vite-project) and choose `Others > create-vite-extra` under the framework option.

Source Structure [​](#source-structure)
---------------------------------------

A typical SSR application will have the following source file structure:

    - index.html
    - server.js # main application server
    - src/
      - main.js          # exports env-agnostic (universal) app code
      - entry-client.js  # mounts the app to a DOM element
      - entry-server.js  # renders the app using the framework's SSR API

The `index.html` will need to reference `entry-client.js` and include a placeholder where the server-rendered markup should be injected:

index.html

html

    <div id="app"><!--ssr-outlet--></div>
    <script type="module" src="/src/entry-client.js"></script>

You can use any placeholder you prefer instead of `<!--ssr-outlet-->`, as long as it can be precisely replaced.

Conditional Logic [​](#conditional-logic)
-----------------------------------------

If you need to perform conditional logic based on SSR vs. client, you can use

js

    if (import.meta.env.SSR) {
      // ... server only logic
    }

This is statically replaced during build so it will allow tree-shaking of unused branches.

Setting Up the Dev Server [​](#setting-up-the-dev-server)
---------------------------------------------------------

When building an SSR app, you likely want to have full control over your main server and decouple Vite from the production environment. It is therefore recommended to use Vite in middleware mode. Here is an example with [express](https://expressjs.com/):

server.js

js

    import fs from 'node:fs'
    import path from 'node:path'
    import { fileURLToPath } from 'node:url'
    import express from 'express'
    import { createServer as createViteServer } from 'vite'
    
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    
    async function createServer() {
      const app = express()
    
      // Create Vite server in middleware mode and configure the app type as
      // 'custom', disabling Vite's own HTML serving logic so parent server
      // can take control
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
      })
    
      // Use vite's connect instance as middleware. If you use your own
      // express router (express.Router()), you should use router.use
      // When the server restarts (for example after the user modifies
      // vite.config.js), `vite.middlewares` is still going to be the same
      // reference (with a new internal stack of Vite and plugin-injected
      // middlewares). The following is valid even after restarts.
      app.use(vite.middlewares)
    
      app.use('*all', async (req, res) => {
        // serve index.html - we will tackle this next
      })
    
      app.listen(5173)
    }
    
    createServer()

Here `vite` is an instance of [ViteDevServer](/guide/api-javascript#vitedevserver). `vite.middlewares` is a [Connect](https://github.com/senchalabs/connect) instance which can be used as a middleware in any connect-compatible Node.js framework.

The next step is implementing the `*` handler to serve server-rendered HTML:

server.js

js

    app.use('*all', async (req, res, next) => {
      const url = req.originalUrl
    
      try {
        // 1. Read index.html
        let template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8',
        )
    
        // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
        //    and also applies HTML transforms from Vite plugins, e.g. global
        //    preambles from @vitejs/plugin-react
        template = await vite.transformIndexHtml(url, template)
    
        // 3. Load the server entry. ssrLoadModule automatically transforms
        //    ESM source code to be usable in Node.js! There is no bundling
        //    required, and provides efficient invalidation similar to HMR.
        const { render } = await vite.ssrLoadModule('/src/entry-server.js')
    
        // 4. render the app HTML. This assumes entry-server.js's exported
        //     `render` function calls appropriate framework SSR APIs,
        //    e.g. ReactDOMServer.renderToString()
        const appHtml = await render(url)
    
        // 5. Inject the app-rendered HTML into the template.
        const html = template.replace(`<!--ssr-outlet-->`, () => appHtml)
    
        // 6. Send the rendered HTML back.
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
      } catch (e) {
        // If an error is caught, let Vite fix the stack trace so it maps back
        // to your actual source code.
        vite.ssrFixStacktrace(e)
        next(e)
      }
    })

The `dev` script in `package.json` should also be changed to use the server script instead:

package.json

diff

      "scripts": {
    -   "dev": "vite"
    +   "dev": "node server"
      }

Building for Production [​](#building-for-production)
-----------------------------------------------------

To ship an SSR project for production, we need to:

1.  Produce a client build as normal;
2.  Produce an SSR build, which can be directly loaded via `import()` so that we don't have to go through Vite's `ssrLoadModule`;

Our scripts in `package.json` will look like this:

package.json

json

    {
      "scripts": {
        "dev": "node server",
        "build:client": "vite build --outDir dist/client",
        "build:server": "vite build --outDir dist/server --ssr src/entry-server.js"
      }
    }

Note the `--ssr` flag which indicates this is an SSR build. It should also specify the SSR entry.

Then, in `server.js` we need to add some production specific logic by checking `process.env.NODE_ENV`:

*   Instead of reading the root `index.html`, use the `dist/client/index.html` as the template, since it contains the correct asset links to the client build.
    
*   Instead of `await vite.ssrLoadModule('/src/entry-server.js')`, use `import('./dist/server/entry-server.js')` (this file is the result of the SSR build).
    
*   Move the creation and all usage of the `vite` dev server behind dev-only conditional branches, then add static file serving middlewares to serve files from `dist/client`.
    

Refer to the [example projects](#example-projects) for a working setup.

Generating Preload Directives [​](#generating-preload-directives)
-----------------------------------------------------------------

`vite build` supports the `--ssrManifest` flag which will generate `.vite/ssr-manifest.json` in build output directory:

diff

    - "build:client": "vite build --outDir dist/client",
    + "build:client": "vite build --outDir dist/client --ssrManifest",

The above script will now generate `dist/client/.vite/ssr-manifest.json` for the client build (Yes, the SSR manifest is generated from the client build because we want to map module IDs to client files). The manifest contains mappings of module IDs to their associated chunks and asset files.

To leverage the manifest, frameworks need to provide a way to collect the module IDs of the components that were used during a server render call.

`@vitejs/plugin-vue` supports this out of the box and automatically registers used component module IDs on to the associated Vue SSR context:

src/entry-server.js

js

    const ctx = {}
    const html = await vueServerRenderer.renderToString(app, ctx)
    // ctx.modules is now a Set of module IDs that were used during the render

In the production branch of `server.js` we need to read and pass the manifest to the `render` function exported by `src/entry-server.js`. This would provide us with enough information to render preload directives for files used by async routes! See [demo source](https://github.com/vitejs/vite-plugin-vue/blob/main/playground/ssr-vue/src/entry-server.js) for a full example. You can also use this information for [103 Early Hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103).

Pre-Rendering / SSG [​](#pre-rendering-ssg)
-------------------------------------------

If the routes and the data needed for certain routes are known ahead of time, we can pre-render these routes into static HTML using the same logic as production SSR. This can also be considered a form of Static-Site Generation (SSG). See [demo pre-render script](https://github.com/vitejs/vite-plugin-vue/blob/main/playground/ssr-vue/prerender.js) for working example.

SSR Externals [​](#ssr-externals)
---------------------------------

Dependencies are "externalized" from Vite's SSR transform module system by default when running SSR. This speeds up both dev and build.

If a dependency needs to be transformed by Vite's pipeline, for example, because Vite features are used untranspiled in them, they can be added to [`ssr.noExternal`](/config/ssr-options#ssr-noexternal).

For linked dependencies, they are not externalized by default to take advantage of Vite's HMR. If this isn't desired, for example, to test dependencies as if they aren't linked, you can add it to [`ssr.external`](/config/ssr-options#ssr-external).

Working with Aliases

If you have configured aliases that redirect one package to another, you may want to alias the actual `node_modules` packages instead to make it work for SSR externalized dependencies. Both [Yarn](https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias) and [pnpm](https://pnpm.io/aliases/) support aliasing via the `npm:` prefix.

SSR-specific Plugin Logic [​](#ssr-specific-plugin-logic)
---------------------------------------------------------

Some frameworks such as Vue or Svelte compile components into different formats based on client vs. SSR. To support conditional transforms, Vite passes an additional `ssr` property in the `options` object of the following plugin hooks:

*   `resolveId`
*   `load`
*   `transform`

**Example:**

js

    export function mySSRPlugin() {
      return {
        name: 'my-ssr',
        transform(code, id, options) {
          if (options?.ssr) {
            // perform ssr-specific transform...
          }
        },
      }
    }

The options object in `load` and `transform` is optional, rollup is not currently using this object but may extend these hooks with additional metadata in the future.

Note

Before Vite 2.7, this was informed to plugin hooks with a positional `ssr` param instead of using the `options` object. All major frameworks and plugins are updated but you may find outdated posts using the previous API.

SSR Target [​](#ssr-target)
---------------------------

The default target for the SSR build is a node environment, but you can also run the server in a Web Worker. Packages entry resolution is different for each platform. You can configure the target to be Web Worker using the `ssr.target` set to `'webworker'`.

SSR Bundle [​](#ssr-bundle)
---------------------------

In some cases like `webworker` runtimes, you might want to bundle your SSR build into a single JavaScript file. You can enable this behavior by setting `ssr.noExternal` to `true`. This will do two things:

*   Treat all dependencies as `noExternal`
*   Throw an error if any Node.js built-ins are imported

SSR Resolve Conditions [​](#ssr-resolve-conditions)
---------------------------------------------------

By default package entry resolution will use the conditions set in [`resolve.conditions`](/config/shared-options#resolve-conditions) for the SSR build. You can use [`ssr.resolve.conditions`](/config/ssr-options#ssr-resolve-conditions) and [`ssr.resolve.externalConditions`](/config/ssr-options#ssr-resolve-externalconditions) to customize this behavior.

Vite CLI [​](#vite-cli)
-----------------------

The CLI commands `$ vite dev` and `$ vite preview` can also be used for SSR apps. You can add your SSR middlewares to the development server with [`configureServer`](/guide/api-plugin#configureserver) and to the preview server with [`configurePreviewServer`](/guide/api-plugin#configurepreviewserver).

Note

Use a post hook so that your SSR middleware runs _after_ Vite's middlewares.

Backend Integration [​](#backend-integration)
=============================================

Note

If you want to serve the HTML using a traditional backend (e.g. Rails, Laravel) but use Vite for serving assets, check for existing integrations listed in [Awesome Vite](https://github.com/vitejs/awesome-vite#integrations-with-backends).

If you need a custom integration, you can follow the steps in this guide to configure it manually

1.  In your Vite config, configure the entry and enable build manifest:
    
    vite.config.js
    
    js
    
        export default defineConfig({
          server: {
            cors: {
              // the origin you will be accessing via browser
              origin: 'http://my-backend.example.com',
            },
          },
          build: {
            // generate .vite/manifest.json in outDir
            manifest: true,
            rollupOptions: {
              // overwrite default .html entry
              input: '/path/to/main.js',
            },
          },
        })
    
    If you haven't disabled the [module preload polyfill](/config/build-options#build-polyfillmodulepreload), you also need to import the polyfill in your entry
    
    js
    
        // add the beginning of your app entry
        import 'vite/modulepreload-polyfill'
    
2.  For development, inject the following in your server's HTML template (substitute `http://localhost:5173` with the local URL Vite is running at):
    
    html
    
        <!-- if development -->
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/main.js"></script>
    
    In order to properly serve assets, you have two options:
    
    *   Make sure the server is configured to proxy static assets requests to the Vite server
    *   Set [`server.origin`](/config/server-options#server-origin) so that generated asset URLs will be resolved using the back-end server URL instead of a relative path
    
    This is needed for assets such as images to load properly.
    
    Note if you are using React with `@vitejs/plugin-react`, you'll also need to add this before the above scripts, since the plugin is not able to modify the HTML you are serving (substitute `http://localhost:5173` with the local URL Vite is running at):
    
    html
    
        <script type="module">
          import RefreshRuntime from 'http://localhost:5173/@react-refresh'
          RefreshRuntime.injectIntoGlobalHook(window)
          window.$RefreshReg$ = () => {}
          window.$RefreshSig$ = () => (type) => type
          window.__vite_plugin_react_preamble_installed__ = true
        </script>
    
3.  For production: after running `vite build`, a `.vite/manifest.json` file will be generated alongside other asset files. An example manifest file looks like this:
    
    .vite/manifest.json
    
    json
    
        {
          "_shared-B7PI925R.js": {
            "file": "assets/shared-B7PI925R.js",
            "name": "shared",
            "css": ["assets/shared-ChJ_j-JJ.css"]
          },
          "_shared-ChJ_j-JJ.css": {
            "file": "assets/shared-ChJ_j-JJ.css",
            "src": "_shared-ChJ_j-JJ.css"
          },
          "baz.js": {
            "file": "assets/baz-B2H3sXNv.js",
            "name": "baz",
            "src": "baz.js",
            "isDynamicEntry": true
          },
          "views/bar.js": {
            "file": "assets/bar-gkvgaI9m.js",
            "name": "bar",
            "src": "views/bar.js",
            "isEntry": true,
            "imports": ["_shared-B7PI925R.js"],
            "dynamicImports": ["baz.js"]
          },
          "views/foo.js": {
            "file": "assets/foo-BRBmoGS9.js",
            "name": "foo",
            "src": "views/foo.js",
            "isEntry": true,
            "imports": ["_shared-B7PI925R.js"],
            "css": ["assets/foo-5UjPuW-k.css"]
          }
        }
    
    *   The manifest has a `Record<name, chunk>` structure
    *   For entry or dynamic entry chunks, the key is the relative src path from project root.
    *   For non entry chunks, the key is the base name of the generated file prefixed with `_`.
    *   For the CSS file generated when [`build.cssCodeSplit`](/config/build-options#build-csscodesplit) is `false`, the key is `style.css`.
    *   Chunks will contain information on its static and dynamic imports (both are keys that map to the corresponding chunk in the manifest), and also its corresponding CSS and asset files (if any).
4.  You can use this file to render links or preload directives with hashed filenames.
    
    Here is an example HTML template to render the proper links. The syntax here is for explanation only, substitute with your server templating language. The `importedChunks` function is for illustration and isn't provided by Vite.
    
    html
    
        <!-- if production -->
        
        <!-- for cssFile of manifest[name].css -->
        <link rel="stylesheet" href="/{{ cssFile }}" />
        
        <!-- for chunk of importedChunks(manifest, name) -->
        <!-- for cssFile of chunk.css -->
        <link rel="stylesheet" href="/{{ cssFile }}" />
        
        <script type="module" src="/{{ manifest[name].file }}"></script>
        
        <!-- for chunk of importedChunks(manifest, name) -->
        <link rel="modulepreload" href="/{{ chunk.file }}" />
    
    Specifically, a backend generating HTML should include the following tags given a manifest file and an entry point:
    
    *   A `<link rel="stylesheet">` tag for each file in the entry point chunk's `css` list
    *   Recursively follow all chunks in the entry point's `imports` list and include a `<link rel="stylesheet">` tag for each CSS file of each imported chunk.
    *   A tag for the `file` key of the entry point chunk (`<script type="module">` for JavaScript, or `<link rel="stylesheet">` for CSS)
    *   Optionally, `<link rel="modulepreload">` tag for the `file` of each imported JavaScript chunk, again recursively following the imports starting from the entry point chunk.
    
    Following the above example manifest, for the entry point `views/foo.js` the following tags should be included in production:
    
    html
    
        <link rel="stylesheet" href="assets/foo-5UjPuW-k.css" />
        <link rel="stylesheet" href="assets/shared-ChJ_j-JJ.css" />
        <script type="module" src="assets/foo-BRBmoGS9.js"></script>
        <!-- optional -->
        <link rel="modulepreload" href="assets/shared-B7PI925R.js" />
    
    While the following should be included for the entry point `views/bar.js`:
    
    html
    
        <link rel="stylesheet" href="assets/shared-ChJ_j-JJ.css" />
        <script type="module" src="assets/bar-gkvgaI9m.js"></script>
        <!-- optional -->
        <link rel="modulepreload" href="assets/shared-B7PI925R.js" />
    
    Pseudo implementation of `importedChunks`
    
    An example pseudo implementation of `importedChunks` in TypeScript (This will need to be adapted for your programming language and templating language):
    
    ts
    
        import type { Manifest, ManifestChunk } from 'vite'
        
        export default function importedChunks(
          manifest: Manifest,
          name: string,
        ): ManifestChunk[] {
          const seen = new Set<string>()
        
          function getImportedChunks(chunk: ManifestChunk): ManifestChunk[] {
            const chunks: ManifestChunk[] = []
            for (const file of chunk.imports ?? []) {
              const importee = manifest[file]
              if (seen.has(file)) {
                continue
              }
              seen.add(file)
        
              chunks.push(...getImportedChunks(importee))
              chunks.push(importee)
            }
        
            return chunks
          }
        
          return getImportedChunks(manifest[name])
        }
    

Troubleshooting [​](#troubleshooting)
=====================================

See [Rollup's troubleshooting guide](https://rollupjs.org/troubleshooting/) for more information too.

If the suggestions here don't work, please try posting questions on [GitHub Discussions](https://github.com/vitejs/vite/discussions) or in the `#help` channel of [Vite Land Discord](https://chat.vite.dev).

CJS [​](#cjs)
-------------

### Vite CJS Node API deprecated [​](#vite-cjs-node-api-deprecated)

The CJS build of Vite's Node API is deprecated and will be removed in Vite 6. See the [GitHub discussion](https://github.com/vitejs/vite/discussions/13928) for more context. You should update your files or frameworks to import the ESM build of Vite instead.

In a basic Vite project, make sure:

1.  The `vite.config.js` file content is using the ESM syntax.
2.  The closest `package.json` file has `"type": "module"`, or use the `.mjs`/`.mts` extension, e.g. `vite.config.mjs` or `vite.config.mts`.

For other projects, there are a few general approaches:

*   **Configure ESM as default, opt-in to CJS if needed:** Add `"type": "module"` in the project `package.json`. All `*.js` files are now interpreted as ESM and need to use the ESM syntax. You can rename a file with the `.cjs` extension to keep using CJS instead.
*   **Keep CJS as default, opt-in to ESM if needed:** If the project `package.json` does not have `"type": "module"`, all `*.js` files are interpreted as CJS. You can rename a file with the `.mjs` extension to use ESM instead.
*   **Dynamically import Vite:** If you need to keep using CJS, you can dynamically import Vite using `import('vite')` instead. This requires your code to be written in an `async` context, but should still be manageable as Vite's API is mostly asynchronous.

If you're unsure where the warning is coming from, you can run your script with the `VITE_CJS_TRACE=true` flag to log the stack trace:

bash

    VITE_CJS_TRACE=true vite dev

If you'd like to temporarily ignore the warning, you can run your script with the `VITE_CJS_IGNORE_WARNING=true` flag:

bash

    VITE_CJS_IGNORE_WARNING=true vite dev

Note that postcss config files do not support ESM + TypeScript (`.mts` or `.ts` in `"type": "module"`) yet. If you have postcss configs with `.ts` and added `"type": "module"` to package.json, you'll also need to rename the postcss config to use `.cts`.

CLI [​](#cli)
-------------

### `Error: Cannot find module 'C:\foo\bar&baz\vite\bin\vite.js'` [​](#error-cannot-find-module-c-foo-bar-baz-vite-bin-vite-js)

The path to your project folder may include `&`, which doesn't work with `npm` on Windows ([npm/cmd-shim#45](https://github.com/npm/cmd-shim/issues/45)).

You will need to either:

*   Switch to another package manager (e.g. `pnpm`, `yarn`)
*   Remove `&` from the path to your project

Config [​](#config)
-------------------

### This package is ESM only [​](#this-package-is-esm-only)

When importing a ESM only package by `require`, the following error happens.

> Failed to resolve "foo". This package is ESM only but it was tried to load by `require`.

> Error \[ERR\_REQUIRE\_ESM\]: require() of ES Module /path/to/dependency.js from /path/to/vite.config.js not supported. Instead change the require of index.js in /path/to/vite.config.js to a dynamic import() which is available in all CommonJS modules.

In Node.js <=22, ESM files cannot be loaded by [`require`](https://nodejs.org/docs/latest-v22.x/api/esm.html#require) by default.

While it may work using [`--experimental-require-module`](https://nodejs.org/docs/latest-v22.x/api/modules.html#loading-ecmascript-modules-using-require), or Node.js >22, or in other runtimes, we still recommend converting your config to ESM by either:

*   adding `"type": "module"` to the nearest `package.json`
*   renaming `vite.config.js`/`vite.config.ts` to `vite.config.mjs`/`vite.config.mts`

Dev Server [​](#dev-server)
---------------------------

### Requests are stalled forever [​](#requests-are-stalled-forever)

If you are using Linux, file descriptor limits and inotify limits may be causing the issue. As Vite does not bundle most of the files, browsers may request many files which require many file descriptors, going over the limit.

To solve this:

*   Increase file descriptor limit by `ulimit`
    
    shell
    
        # Check current limit
        $ ulimit -Sn
        # Change limit (temporary)
        $ ulimit -Sn 10000 # You might need to change the hard limit too
        # Restart your browser
    
*   Increase the following inotify related limits by `sysctl`
    
    shell
    
        # Check current limits
        $ sysctl fs.inotify
        # Change limits (temporary)
        $ sudo sysctl fs.inotify.max_queued_events=16384
        $ sudo sysctl fs.inotify.max_user_instances=8192
        $ sudo sysctl fs.inotify.max_user_watches=524288
    

If the above steps don't work, you can try adding `DefaultLimitNOFILE=65536` as an un-commented config to the following files:

*   /etc/systemd/system.conf
*   /etc/systemd/user.conf

For Ubuntu Linux, you may need to add the line `* - nofile 65536` to the file `/etc/security/limits.conf` instead of updating systemd config files.

Note that these settings persist but a **restart is required**.

Alternatively, if the server is running inside a VS Code devcontainer, the request may appear to be stalled. To fix this issue, see [Dev Containers / VS Code Port Forwarding](#dev-containers-vs-code-port-forwarding).

### Network requests stop loading [​](#network-requests-stop-loading)

When using a self-signed SSL certificate, Chrome ignores all caching directives and reloads the content. Vite relies on these caching directives.

To resolve the problem use a trusted SSL cert.

See: [Cache problems](https://helpx.adobe.com/mt/experience-manager/kb/cache-problems-on-chrome-with-SSL-certificate-errors.html), [Chrome issue](https://bugs.chromium.org/p/chromium/issues/detail?id=110649#c8)

#### macOS [​](#macos)

You can install a trusted cert via the CLI with this command:

    security add-trusted-cert -d -r trustRoot -k ~/Library/Keychains/login.keychain-db your-cert.cer

Or, by importing it into the Keychain Access app and updating the trust of your cert to "Always Trust."

### 431 Request Header Fields Too Large [​](#_431-request-header-fields-too-large)

When the server / WebSocket server receives a large HTTP header, the request will be dropped and the following warning will be shown.

> Server responded with status code 431. See [https://vite.dev/guide/troubleshooting.html#\_431-request-header-fields-too-large](https://vite.dev/guide/troubleshooting#_431-request-header-fields-too-large).

This is because Node.js limits request header size to mitigate [CVE-2018-12121](https://www.cve.org/CVERecord?id=CVE-2018-12121).

To avoid this, try to reduce your request header size. For example, if the cookie is long, delete it. Or you can use [`--max-http-header-size`](https://nodejs.org/api/cli.html#--max-http-header-sizesize) to change max header size.

### Dev Containers / VS Code Port Forwarding [​](#dev-containers-vs-code-port-forwarding)

If you are using a Dev Container or port forwarding feature in VS Code, you may need to set the [`server.host`](/config/server-options#server-host) option to `127.0.0.1` in the config to make it work.

This is because [the port forwarding feature in VS Code does not support IPv6](https://github.com/microsoft/vscode-remote-release/issues/7029).

See [#16522](https://github.com/vitejs/vite/issues/16522) for more details.

HMR [​](#hmr)
-------------

### Vite detects a file change but the HMR is not working [​](#vite-detects-a-file-change-but-the-hmr-is-not-working)

You may be importing a file with a different case. For example, `src/foo.js` exists and `src/bar.js` contains:

js

    import './Foo.js' // should be './foo.js'

Related issue: [#964](https://github.com/vitejs/vite/issues/964)

### Vite does not detect a file change [​](#vite-does-not-detect-a-file-change)

If you are running Vite with WSL2, Vite cannot watch file changes in some conditions. See [`server.watch` option](/config/server-options#server-watch).

### A full reload happens instead of HMR [​](#a-full-reload-happens-instead-of-hmr)

If HMR is not handled by Vite or a plugin, a full reload will happen as it's the only way to refresh the state.

If HMR is handled but it is within a circular dependency, a full reload will also happen to recover the execution order. To solve this, try breaking the loop. You can run `vite --debug hmr` to log the circular dependency path if a file change triggered it.

Build [​](#build)
-----------------

### Built file does not work because of CORS error [​](#built-file-does-not-work-because-of-cors-error)

If the HTML file output was opened with `file` protocol, the scripts won't run with the following error.

> Access to script at 'file:///foo/bar.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

> Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///foo/bar.js. (Reason: CORS request not http).

See [Reason: CORS request not HTTP - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp) for more information about why this happens.

You will need to access the file with `http` protocol. The easiest way to achieve this is to run `npx vite preview`.

Optimized Dependencies [​](#optimized-dependencies)
---------------------------------------------------

### Outdated pre-bundled deps when linking to a local package [​](#outdated-pre-bundled-deps-when-linking-to-a-local-package)

The hash key used to invalidate optimized dependencies depends on the package lock contents, the patches applied to dependencies, and the options in the Vite config file that affects the bundling of node modules. This means that Vite will detect when a dependency is overridden using a feature as [npm overrides](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides), and re-bundle your dependencies on the next server start. Vite won't invalidate the dependencies when you use a feature like [npm link](https://docs.npmjs.com/cli/v9/commands/npm-link). In case you link or unlink a dependency, you'll need to force re-optimization on the next server start by using `vite --force`. We recommend using overrides instead, which are supported now by every package manager (see also [pnpm overrides](https://pnpm.io/package_json#pnpmoverrides) and [yarn resolutions](https://yarnpkg.com/configuration/manifest/#resolutions)).

Performance Bottlenecks [​](#performance-bottlenecks)
-----------------------------------------------------

If you suffer any application performance bottlenecks resulting in slow load times, you can start the built-in Node.js inspector with your Vite dev server or when building your application to create the CPU profile:

dev serverbuild

bash

    vite --profile --open

bash

    vite build --profile

Vite Dev Server

Once your application is opened in the browser, just await finish loading it and then go back to the terminal and press `p` key (will stop the Node.js inspector) then press `q` key to stop the dev server.

Node.js inspector will generate `vite-profile-0.cpuprofile` in the root folder, go to [https://www.speedscope.app/](https://www.speedscope.app/), and upload the CPU profile using the `BROWSE` button to inspect the result.

You can install [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect), which lets you inspect the intermediate state of Vite plugins and can also help you to identify which plugins or middlewares are the bottleneck in your applications. The plugin can be used in both dev and build modes. Check the readme file for more details.

Others [​](#others)
-------------------

### Module externalized for browser compatibility [​](#module-externalized-for-browser-compatibility)

When you use a Node.js module in the browser, Vite will output the following warning.

> Module "fs" has been externalized for browser compatibility. Cannot access "fs.readFile" in client code.

This is because Vite does not automatically polyfill Node.js modules.

We recommend avoiding Node.js modules for browser code to reduce the bundle size, although you can add polyfills manually. If the module is imported from a third-party library (that's meant to be used in the browser), it's advised to report the issue to the respective library.

### Syntax Error / Type Error happens [​](#syntax-error-type-error-happens)

Vite cannot handle and does not support code that only runs on non-strict mode (sloppy mode). This is because Vite uses ESM and it is always [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) inside ESM.

For example, you might see these errors.

> \[ERROR\] With statements cannot be used with the "esm" output format due to strict mode

> TypeError: Cannot create property 'foo' on boolean 'false'

If these codes are used inside dependencies, you could use [`patch-package`](https://github.com/ds300/patch-package) (or [`yarn patch`](https://yarnpkg.com/cli/patch) or [`pnpm patch`](https://pnpm.io/cli/patch)) for an escape hatch.

### Browser extensions [​](#browser-extensions)

Some browser extensions (like ad-blockers) may prevent the Vite client from sending requests to the Vite dev server. You may see a white screen without logged errors in this case. Try disabling extensions if you have this issue.

### Cross drive links on Windows [​](#cross-drive-links-on-windows)

If there's a cross drive links in your project on Windows, Vite may not work.

An example of cross drive links are:

*   a virtual drive linked to a folder by `subst` command
*   a symlink/junction to a different drive by `mklink` command (e.g. Yarn global cache)

Related issue: [#10802](https://github.com/vitejs/vite/issues/10802)

Performance [​](#performance)
=============================

While Vite is fast by default, performance issues can creep in as the project's requirements grow. This guide aims to help you identify and fix common performance issues, such as:

*   Slow server starts
*   Slow page loads
*   Slow builds

Review your Browser Setup [​](#review-your-browser-setup)
---------------------------------------------------------

Some browser extensions may interfere with requests and slow down startup and reload times for large apps, especially when using browser dev tools. We recommend creating a dev-only profile without extensions, or switch to incognito mode, while using Vite's dev server in these cases. Incognito mode should also be faster than a regular profile without extensions.

The Vite dev server does hard caching of pre-bundled dependencies and implements fast 304 responses for source code. Disabling the cache while the Browser Dev Tools are open can have a big impact on startup and full-page reload times. Please check that "Disable Cache" isn't enabled while you work with the Vite server.

Audit Configured Vite Plugins [​](#audit-configured-vite-plugins)
-----------------------------------------------------------------

Vite's internal and official plugins are optimized to do the least amount of work possible while providing compatibility with the broader ecosystem. For example, code transformations use regex in dev, but do a complete parse in build to ensure correctness.

However, the performance of community plugins is out of Vite's control, which may affect the developer experience. Here are a few things you can look out for when using additional Vite plugins:

1.  Large dependencies that are only used in certain cases should be dynamically imported to reduce the Node.js startup time. Example refactors: [vite-plugin-react#212](https://github.com/vitejs/vite-plugin-react/pull/212) and [vite-plugin-pwa#224](https://github.com/vite-pwa/vite-plugin-pwa/pull/244).
    
2.  The `buildStart`, `config`, and `configResolved` hooks should not run long and extensive operations. These hooks are awaited during dev server startup, which delays when you can access the site in the browser.
    
3.  The `resolveId`, `load`, and `transform` hooks may cause some files to load slower than others. While sometimes unavoidable, it's still worth checking for possible areas to optimize. For example, checking if the `code` contains a specific keyword, or the `id` matches a specific extension, before doing the full transformation.
    
    The longer it takes to transform a file, the more significant the request waterfall will be when loading the site in the browser.
    
    You can inspect the duration it takes to transform a file using `vite --debug plugin-transform` or [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect). Note that as asynchronous operations tend to provide inaccurate timings, you should treat the numbers as a rough estimate, but it should still reveal the more expensive operations.
    

Profiling

You can run `vite --profile`, visit the site, and press `p + enter` in your terminal to record a `.cpuprofile`. A tool like [speedscope](https://www.speedscope.app) can then be used to inspect the profile and identify the bottlenecks. You can also [share the profiles](https://chat.vite.dev) with the Vite team to help us identify performance issues.

Reduce Resolve Operations [​](#reduce-resolve-operations)
---------------------------------------------------------

Resolving import paths can be an expensive operation when hitting its worst case often. For example, Vite supports "guessing" import paths with the [`resolve.extensions`](/config/shared-options#resolve-extensions) option, which defaults to `['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']`.

When you try to import `./Component.jsx` with `import './Component'`, Vite will run these steps to resolve it:

1.  Check if `./Component` exists, no.
2.  Check if `./Component.mjs` exists, no.
3.  Check if `./Component.js` exists, no.
4.  Check if `./Component.mts` exists, no.
5.  Check if `./Component.ts` exists, no.
6.  Check if `./Component.jsx` exists, yes!

As shown, a total of 6 filesystem checks is required to resolve an import path. The more implicit imports you have, the more time it adds up to resolve the paths.

Hence, it's usually better to be explicit with your import paths, e.g. `import './Component.jsx'`. You can also narrow down the list for `resolve.extensions` to reduce the general filesystem checks, but you have to make sure it works for files in `node_modules` too.

If you're a plugin author, make sure to only call [`this.resolve`](https://rollupjs.org/plugin-development/#this-resolve) when needed to reduce the number of checks above.

TypeScript

If you are using TypeScript, enable `"moduleResolution": "bundler"` and `"allowImportingTsExtensions": true` in your `tsconfig.json`'s `compilerOptions` to use `.ts` and `.tsx` extensions directly in your code.

Avoid Barrel Files [​](#avoid-barrel-files)
-------------------------------------------

Barrel files are files that re-export the APIs of other files in the same directory. For example:

src/utils/index.js

js

    export * from './color.js'
    export * from './dom.js'
    export * from './slash.js'

When you only import an individual API, e.g. `import { slash } from './utils'`, all the files in that barrel file need to be fetched and transformed as they may contain the `slash` API and may also contain side-effects that run on initialization. This means you're loading more files than required on the initial page load, resulting in a slower page load.

If possible, you should avoid barrel files and import the individual APIs directly, e.g. `import { slash } from './utils/slash.js'`. You can read [issue #8237](https://github.com/vitejs/vite/issues/8237) for more information.

Warm Up Frequently Used Files [​](#warm-up-frequently-used-files)
-----------------------------------------------------------------

The Vite dev server only transforms files as requested by the browser, which allows it to start up quickly and only apply transformations for used files. It can also pre-transform files if it anticipates certain files will be requested shortly. However, request waterfalls may still happen if some files take longer to transform than others. For example:

Given an import graph where the left file imports the right file:

    main.js -> BigComponent.vue -> big-utils.js -> large-data.json

The import relationship can only be known after the file is transformed. If `BigComponent.vue` takes some time to transform, `big-utils.js` has to wait for its turn, and so on. This causes an internal waterfall even with pre-transformation built-in.

Vite allows you to warm up files that you know are frequently used, e.g. `big-utils.js`, using the [`server.warmup`](/config/server-options#server-warmup) option. This way `big-utils.js` will be ready and cached to be served immediately when requested.

You can find files that are frequently used by running `vite --debug transform` and inspect the logs:

bash

    vite:transform 28.72ms /@vite/client +1ms
    vite:transform 62.95ms /src/components/BigComponent.vue +1ms
    vite:transform 102.54ms /src/utils/big-utils.js +1ms

vite.config.js

js

    export default defineConfig({
      server: {
        warmup: {
          clientFiles: [
            './src/components/BigComponent.vue',
            './src/utils/big-utils.js',
          ],
        },
      },
    })

Note that you should only warm up files that are frequently used to not overload the Vite dev server on startup. Check the [`server.warmup`](/config/server-options#server-warmup) option for more information.

Using [`--open` or `server.open`](/config/server-options#server-open) also provides a performance boost, as Vite will automatically warm up the entry point of your app or the provided URL to open.

Use Lesser or Native Tooling [​](#use-lesser-or-native-tooling)
---------------------------------------------------------------

Keeping Vite fast with a growing codebase is about reducing the amount of work for the source files (JS/TS/CSS).

Examples of doing less work:

*   Use CSS instead of Sass/Less/Stylus when possible (nesting can be handled by PostCSS)
*   Don't transform SVGs into UI framework components (React, Vue, etc). Import them as strings or URLs instead.
*   When using `@vitejs/plugin-react`, avoid configuring the Babel options, so it skips the transformation during build (only esbuild will be used).

Examples of using native tooling:

Using native tooling often brings larger installation size and as so is not the default when starting a new Vite project. But it may be worth the cost for larger applications.

*   Use [Rolldown instead of Rollup and esbuild](/guide/rolldown) for faster builds and a more aligned experience between dev and build.
*   Try out the experimental support for [LightningCSS](https://github.com/vitejs/vite/discussions/13835)
*   Use [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) in place of `@vitejs/plugin-react`.

Rolldown Integration [​](#rolldown-integration)
===============================================

Vite is planning to integrate [Rolldown](https://rolldown.rs), a Rust-powered JavaScript bundler, to improve build performance and capabilities.

What is Rolldown? [​](#what-is-rolldown)
----------------------------------------

Rolldown is a modern, high-performance JavaScript bundler written in Rust. It's designed as a drop-in replacement for Rollup, aiming to provide significant performance improvements while maintaining compatibility with the existing ecosystem.

Rolldown focuses on three key principles:

*   **Speed**: Built with Rust for maximum performance
*   **Compatibility**: Works with existing Rollup plugins
*   **Optimization**: Comes with features that go beyond what esbuild and Rollup implement

Why Vite is Migrating to Rolldown [​](#why-vite-is-migrating-to-rolldown)
-------------------------------------------------------------------------

1.  **Unification**: Vite currently uses esbuild for dependency pre-bundling and Rollup for production builds. Rolldown aims to unify these into a single, high-performance bundler that can be used for both purposes, reducing complexity.
    
2.  **Performance**: Rolldown's Rust-based implementation offers significant performance improvements over JavaScript-based bundlers. While specific benchmarks may vary by project size and complexity, early tests show promising speed increases compared to Rollup.
    
3.  **Additional Features**: Rolldown introduces features that are not available in Rollup or esbuild, such as advanced chunk splitting control, built-in HMR, and Module Federation.
    

For additional insights on the motivations behind Rolldown, see the [reasons why Rolldown is being built](https://rolldown.rs/guide/#why-rolldown).

Benefits of Trying `rolldown-vite` [​](#benefits-of-trying-rolldown-vite)
-------------------------------------------------------------------------

*   Experience significantly faster build times, especially for larger projects
*   Provide valuable feedback to help shape the future of Vite's bundling experience
*   Prepare your projects for the eventual official Rolldown integration

How to Try Rolldown [​](#how-to-try-rolldown)
---------------------------------------------

The rolldown-powered version of Vite is currently available as a separate package called `rolldown-vite`. If you have `vite` as a direct dependency, you can alias the `vite` package to `rolldown-vite` in your project's `package.json`, which should result in a drop-in replacement.

json

    {
      "dependencies": {
        "vite": "^6.0.0"
        "vite": "npm:rolldown-vite@latest"
      }
    }

If you use a Vitepress or a meta framework that has Vite as peer dependency, you have to override the `vite` dependency in your `package.json`, which works slightly different depending on your package manager:

npmYarnpnpmBun

json

    {
      "overrides": {
        "vite": "npm:rolldown-vite@latest"
      }
    }

json

    {
      "resolutions": {
        "vite": "npm:rolldown-vite@latest"
      }
    }

json

    {
      "pnpm": {
        "overrides": {
          "vite": "npm:rolldown-vite@latest"
        }
      }
    }

json

    {
      "overrides": {
        "vite": "npm:rolldown-vite@latest"
      }
    }

After adding these overrides, reinstall your dependencies and start your development server or build your project as usual. No further configuration changes are required.

Known Limitations [​](#known-limitations)
-----------------------------------------

While Rolldown aims to be a drop-in replacement for Rollup, there are features that are still being implemented and minor intentional behavior differences. For a comprehensive list, please refer to [this GitHub PR](https://github.com/vitejs/rolldown-vite/pull/84#issue-2903144667) which is regularly updated.

### Option Validation Errors [​](#option-validation-errors)

Rolldown throws an error when unknown or invalid options are passed. Because some options available in Rollup are not supported by Rolldown, you may encounter errors based on the options you or the meta framework you use set. Below, you can find an an example of such an error message:

> Error: Failed validate input options.
> 
> *   For the "preserveEntrySignatures". Invalid key: Expected never but received "preserveEntrySignatures".

If you don't pass the option in yourself, this must be fixed by the utilized framework. You can suppress this error in the meantime by setting the `ROLLDOWN_OPTIONS_VALIDATION=loose` environment variable.

Performance [​](#performance)
-----------------------------

`rolldown-vite` is focused on ensuring compatibility with the existing ecosystem, so defaults are geared towards a smooth transition. You can get further performance gains by switching over to faster Rust-based internal plugins and other customizations.

### Enabling Native Plugins [​](#enabling-native-plugins)

Thanks to Rolldown and Oxc, various internal Vite plugins, such as the alias or resolve plugin, have been converted to Rust. At the time of writing, using these plugins is not enabled by default, as their behavior may differ from the JavaScript versions.

To test them, you can set the `experimental.enableNativePlugin` option to `true` in your Vite config.

### `withFilter` Wrapper [​](#withfilter-wrapper)

Plugin authors have the option to use the [hook filter feature](#hook-filter-feature) to reduce the communication overhead between the Rust and JavaScript runtimes. But in case some of the used plugins are not using this feature (yet) but you still want to benefit from it, you can use the `withFilter` wrapper to wrap the plugin with a filter yourself.

js

    // In your vite.config.ts
    import { withFilter, defineConfig } from 'vite'
    import svgr from 'vite-plugin-svgr'
    
    export default defineConfig({
      plugins: [
        // Load the `svgr` plugin only for files which end in `.svg?react`
        withFilter(
          svgr({
            /*...*/
          }),
          { load: { id: /\.svg?react$/ } },
        ),
      ],
    })

Reporting Issues [​](#reporting-issues)
---------------------------------------

Since this is an experimental integration, you may encounter issues. If you do, please report them in the [`vitejs/rolldown-vite`](https://github.com/vitejs/rolldown-vite) repository, **not the main Vite repository**.

When [reporting issues](https://github.com/vitejs/rolldown-vite/issues/new), please follow the appropriate issue template and provide what is requested there, commonly including:

*   A minimal reproduction of the issue
*   Your environment details (OS, Node version, package manager)
*   Any relevant error messages or logs

For real-time discussions and troubleshooting, make sure to join the [Rolldown Discord](https://chat.rolldown.rs/).

Versioning Policy [​](#versioning-policy)
-----------------------------------------

The versioning policy for `rolldown-vite` aligns its major and minor versions with those of the normal Vite package. This synchronization ensures that features present in a specific normal Vite minor release are also included in the corresponding `rolldown-vite` minor release. However, it's important to note that patch versions are not synchronized between the two projects. If you're wondering whether a specific change from normal Vite has been included in `rolldown-vite`, you can always check [`rolldown-vite`'s separate changelog](https://github.com/vitejs/rolldown-vite/blob/rolldown-vite/packages/vite/CHANGELOG.md) for confirmation.

Furthermore, please be aware that `rolldown-vite` itself is considered experimental. Due to its experimental nature, breaking changes might be introduced even within its patch versions. Additionally, please note that `rolldown-vite` only receives updates for its most recent minor version. Even for important security or bug fixes, patches are not created for older major or minor versions.

Future Plans [​](#future-plans)
-------------------------------

The `rolldown-vite` package is a temporary solution to gather feedback and stabilize the Rolldown integration. In the future, this functionality will be merged back into the main Vite repository.

We encourage you to try out `rolldown-vite` and contribute to its development through feedback and issue reports.

In the future, we will also introduce a "Full Bundle Mode" for Vite, which will serve bundled files in production _and development mode_.

### Why introducing a Full Bundle Mode? [​](#why-introducing-a-full-bundle-mode)

Vite is known for its unbundled dev server approach, which is a main reason for Vite's speed and popularity when it was first introduced. This approach was initially an experiment to see just how far we could push the boundaries of development server performance without traditional bundling.

However, as projects scale in size and complexity, two main challenges have emerged:

1.  **Development/Production inconsistency**: The unbundled JavaScript served in development versus the bundled production build creates different runtime behaviors. This can lead to issues that only manifest in production, making debugging more difficult.
    
2.  **Performance degradation during development**: The unbundled approach results in each module being fetched separately, which creates a large number of network requests. While this has _no impact in production_, it causes significant overhead during dev server startup and when refreshing the page in development. The impact is especially noticeable in large applications where hundreds or even thousands of separate requests must be processed. These bottlenecks become even more severe when developers use network proxy, resulting in slower refresh times and degraded developer experience.
    

With the Rolldown integration, we have an opportunity to unify the development and production experiences while maintaining Vite's signature performance. A Full Bundle Mode would allow serving bundled files not only in production but also during development, combining the best of both worlds:

*   Fast startup times even for large applications
*   Consistent behavior between development and production
*   Reduced network overhead on page refreshes
*   Maintained efficient HMR on top of ESM output

When the Full Bundle Mode is introduced, it will be an opt-in feature at first. Similar to the Rolldown integration, we are aiming to make it the default after gathering feedback and ensuring stability.

Plugin / Framework authors guide [​](#plugin-framework-authors-guide)
---------------------------------------------------------------------

TIP

This section is mostly relevant for plugin and framework authors. If you are a user, you can skip this section.

### Overview of Major Changes [​](#overview-of-major-changes)

*   Rolldown is used for build (Rollup was used before)
*   Rolldown is used for the optimizer (esbuild was used before)
*   CommonJS support is handled by Rolldown (@rollup/plugin-commonjs was used before)
*   Oxc is used for syntax lowering (esbuild was used before)
*   Lightning CSS is used for CSS minification by default (esbuild was used before)
*   Oxc minifier is used for JS minification by default (esbuild was used before)
*   Rolldown is used for bundling the config (esbuild was used before)

### Detecting `rolldown-vite` [​](#detecting-rolldown-vite)

WARNING

In most cases, you don't need to detect whether your plugin runs with `rolldown-vite` or `vite` and you should aim for consistent behavior across both, without conditional branching.

In case you need different behavior with `rolldown-vite`, you have two ways to detect if `rolldown-vite` is used:

Checking the existence of `this.meta.rolldownVersion`:

js

    const plugin = {
      resolveId() {
        if (this.meta.rolldownVersion) {
          // logic for rolldown-vite
        } else {
          // logic for rollup-vite
        }
      },
    }

  

Checking the existence of the `rolldownVersion` export:

js

    import * as vite from 'vite'
    
    if (vite.rolldownVersion) {
      // logic for rolldown-vite
    } else {
      // logic for rollup-vite
    }

If you have `vite` as a dependency (not a peer dependency), the `rolldownVersion` export is useful as it can be used from anywhere in your code.

### Ignoring option validation in Rolldown [​](#ignoring-option-validation-in-rolldown)

As [mentioned above](#option-validation-errors), Rolldown throws an error when unknown or invalid options are passed.

This can be fixed by conditionally passing the option by checking whether it's running with `rolldown-vite` as [shown above](#detecting-rolldown-vite).

Suppressing the error by setting the `ROLLDOWN_OPTIONS_VALIDATION=loose` environment variable also works in this case. However, keep in mind that you will **eventually need to stop passing the options not supported by Rolldown**.

### `transformWithEsbuild` requires `esbuild` to be installed separately [​](#transformwithesbuild-requires-esbuild-to-be-installed-separately)

A similar function called `transformWithOxc`, which uses Oxc instead of `esbuild`, is exported from `rolldown-vite`.

### Compatibility layer for `esbuild` options [​](#compatibility-layer-for-esbuild-options)

Rolldown-Vite has a compatibility layer to convert options for `esbuild` to the respective Oxc or `rolldown` ones. As tested in [the ecosystem-ci](https://github.com/vitejs/vite-ecosystem-ci/blob/rolldown-vite/README-temp.md), this works in many cases, including simple `esbuild` plugins. That said, **we'll be removing the `esbuild` options support in the future** and encourage you to try the corresponding Oxc or `rolldown` options. You can get the options set by the compatibility layer from the `configResolved` hook.

js

    const plugin = {
      name: 'log-config',
      configResolved(config) {
        console.log('options', config.optimizeDeps, config.oxc)
      },
    },

### Hook filter feature [​](#hook-filter-feature)

Rolldown introduced a [hook filter feature](https://rolldown.rs/guide/plugin-development#plugin-hook-filters) to reduce the communication overhead the between Rust and JavaScript runtimes. By using this feature you can make your plugin more performant. This is also supported by Rollup 4.38.0+ and Vite 6.3.0+. To make your plugin backward compatible with the older versions, make sure to also run the filter inside the hook handlers.

### Converting content to JavaScript in `load` or `transform` hooks [​](#converting-content-to-javascript-in-load-or-transform-hooks)

If you are converting the content to JavaScript from other types in `load` or `transform` hooks, you may need to add `moduleType: 'js'` to the returned value.

js

    const plugin = {
      name: 'txt-loader',
      load(id) {
        if (id.endsWith('.txt')) {
          const content = fs.readFile(id, 'utf-8')
          return {
            code: `export default ${JSON.stringify(content)}`,
            moduleType: 'js', 
          }
        }
      },
    }

This is because [Rolldown supports non-JavaScript modules](https://rolldown.rs/guide/in-depth/module-types) and infers the module type from extensions unless specified. Note that `rolldown-vite` does not support ModuleTypes in dev.

Migration from v5 [​](#migration-from-v5)
=========================================

Environment API [​](#environment-api)
-------------------------------------

As part of the new experimental [Environment API](/guide/api-environment), a big internal refactoring was needed. Vite 6 strives to avoid breaking changes to ensure most projects can quickly upgrade to the new major. We'll wait until a big portion of the ecosystem has moved to stabilize and start recommending the use of the new APIs. There may be some edge cases but these should only affect low level usage by frameworks and tools. We have worked with maintainers in the ecosystem to mitigate these differences before the release. Please [open an issue](https://github.com/vitejs/vite/issues/new?assignees=&labels=pending+triage&projects=&template=bug_report.yml) if you spot a regression.

Some internal APIs have been removed due to changes in Vite's implementation. If you were relying on one of them, please create a [feature request](https://github.com/vitejs/vite/issues/new?assignees=&labels=enhancement%3A+pending+triage&projects=&template=feature_request.yml).

Vite Runtime API [​](#vite-runtime-api)
---------------------------------------

The experimental Vite Runtime API evolved into the Module Runner API, released in Vite 6 as part of the new experimental [Environment API](/guide/api-environment). Given that the feature was experimental the removal of the previous API introduced in Vite 5.1 isn't a breaking change, but users will need to update their use to the Module Runner equivalent as part of migrating to Vite 6.

General Changes [​](#general-changes)
-------------------------------------

### Default value for `resolve.conditions` [​](#default-value-for-resolve-conditions)

This change does not affect users that did not configure [`resolve.conditions`](/config/shared-options#resolve-conditions) / [`ssr.resolve.conditions`](/config/ssr-options#ssr-resolve-conditions) / [`ssr.resolve.externalConditions`](/config/ssr-options#ssr-resolve-externalconditions).

In Vite 5, the default value for `resolve.conditions` was `[]` and some conditions were added internally. The default value for `ssr.resolve.conditions` was the value of `resolve.conditions`.

From Vite 6, some of the conditions are no longer added internally and need to be included in the config values. The conditions that are no longer added internally for

*   `resolve.conditions` are `['module', 'browser', 'development|production']`
*   `ssr.resolve.conditions` are `['module', 'node', 'development|production']`

The default values for those options are updated to the corresponding values and `ssr.resolve.conditions` no longer uses `resolve.conditions` as the default value. Note that `development|production` is a special variable that is replaced with `production` or `development` depending on the value of `process.env.NODE_ENV`. These default values are exported from `vite` as `defaultClientConditions` and `defaultServerConditions`.

If you specified a custom value for `resolve.conditions` or `ssr.resolve.conditions`, you need to update it to include the new conditions. For example, if you previously specified `['custom']` for `resolve.conditions`, you need to specify `['custom', ...defaultClientConditions]` instead.

### JSON stringify [​](#json-stringify)

In Vite 5, when [`json.stringify: true`](/config/shared-options#json-stringify) is set, [`json.namedExports`](/config/shared-options#json-namedexports) was disabled.

From Vite 6, even when `json.stringify: true` is set, `json.namedExports` is not disabled and the value is respected. If you wish to achieve the previous behavior, you can set `json.namedExports: false`.

Vite 6 also introduces a new default value for `json.stringify` which is `'auto'`, which will only stringify large JSON files. To disable this behavior, set `json.stringify: false`.

### Extended support of asset references in HTML elements [​](#extended-support-of-asset-references-in-html-elements)

In Vite 5, only a few supported HTML elements were able to reference assets that will be processed and bundled by Vite, such as `<link href>`, `<img src>`, etc.

Vite 6 extends the support to even more HTML elements. The full list can be found at the [HTML features](/guide/features#html) docs.

To opt-out of HTML processing on certain elements, you can add the `vite-ignore` attribute on the element.

### postcss-load-config [​](#postcss-load-config)

[`postcss-load-config`](https://npmjs.com/package/postcss-load-config) has been updated to v6 from v4. [`tsx`](https://www.npmjs.com/package/tsx) or [`jiti`](https://www.npmjs.com/package/jiti) is now required to load TypeScript postcss config files instead of [`ts-node`](https://www.npmjs.com/package/ts-node). Also [`yaml`](https://www.npmjs.com/package/yaml) is now required to load YAML postcss config files.

### Sass now uses modern API by default [​](#sass-now-uses-modern-api-by-default)

In Vite 5, the legacy API was used by default for Sass. Vite 5.4 added support for the modern API.

From Vite 6, the modern API is used by default for Sass. If you wish to still use the legacy API, you can set [`css.preprocessorOptions.sass.api: 'legacy'` / `css.preprocessorOptions.scss.api: 'legacy'`](/config/shared-options#css-preprocessoroptions). But note that the legacy API support will be removed in Vite 7.

To migrate to the modern API, see [the Sass documentation](https://sass-lang.com/documentation/breaking-changes/legacy-js-api/).

### Customize CSS output file name in library mode [​](#customize-css-output-file-name-in-library-mode)

In Vite 5, the CSS output file name in library mode was always `style.css` and cannot be easily changed through the Vite config.

From Vite 6, the default file name now uses `"name"` in `package.json` similar to the JS output files. If [`build.lib.fileName`](/config/build-options#build-lib) is set with a string, the value will also be used for the CSS output file name. To explicitly set a different CSS file name, you can use the new [`build.lib.cssFileName`](/config/build-options#build-lib) to configure it.

To migrate, if you had relied on the `style.css` file name, you should update references to it to the new name based on your package name. For example:

package.json

json

    {
      "name": "my-lib",
      "exports": {
        "./style.css": "./dist/style.css"
        "./style.css": "./dist/my-lib.css"
      }
    }

If you prefer to stick with `style.css` like in Vite 5, you can set `build.lib.cssFileName: 'style'` instead.

Advanced [​](#advanced)
-----------------------

There are other breaking changes which only affect few users.

*   [\[#17922\] fix(css)!: remove default import in ssr dev](https://github.com/vitejs/vite/pull/17922)
    
    *   Support for default import of CSS files was [deprecated in Vite 4](https://v4.vite.dev/guide/migration#importing-css-as-a-string) and removed in Vite 5, but it was still unintentionally supported in SSR dev mode. This support is now removed.
*   [\[#15637\] fix!: default `build.cssMinify` to `'esbuild'` for SSR](https://github.com/vitejs/vite/pull/15637)
    
    *   [`build.cssMinify`](/config/build-options#build-cssminify) is now enabled by default even for SSR builds.
*   [\[#18070\] feat!: proxy bypass with WebSocket](https://github.com/vitejs/vite/pull/18070)
    
    *   `server.proxy[path].bypass` is now called for WebSocket upgrade requests and in that case, the `res` parameter will be `undefined`.
*   [\[#18209\] refactor!: bump minimal terser version to 5.16.0](https://github.com/vitejs/vite/pull/18209)
    
    *   Minimal supported terser version for [`build.minify: 'terser'`](/config/build-options#build-minify) was bumped to 5.16.0 from 5.4.0.
*   [\[#18231\] chore(deps): update dependency @rollup/plugin-commonjs to v28](https://github.com/vitejs/vite/pull/18231)
    
    *   [`commonjsOptions.strictRequires`](https://github.com/rollup/plugins/blob/master/packages/commonjs/README.md#strictrequires) is now `true` by default (was `'auto'` before).
        *   This may lead to larger bundle sizes but will result in more deterministic builds.
        *   If you are specifying a CommonJS file as an entry point, you may need additional steps. Read [the commonjs plugin documentation](https://github.com/rollup/plugins/blob/master/packages/commonjs/README.md#using-commonjs-files-as-entry-points) for more details.
*   [\[#18243\] chore(deps)!: migrate `fast-glob` to `tinyglobby`](https://github.com/vitejs/vite/pull/18243)
    
    *   Range braces (`{01..03}` ⇒ `['01', '02', '03']`) and incremental braces (`{2..8..2}` ⇒ `['2', '4', '6', '8']`) are no longer supported in globs.
*   [\[#18395\] feat(resolve)!: allow removing conditions](https://github.com/vitejs/vite/pull/18395)
    
    *   This PR not only introduces a breaking change mentioned above as "Default value for `resolve.conditions`", but also makes `resolve.mainFields` to not be used for no-externalized dependencies in SSR. If you were using `resolve.mainFields` and want to apply that to no-externalized dependencies in SSR, you can use [`ssr.resolve.mainFields`](/config/ssr-options#ssr-resolve-mainfields).
*   [\[#18493\] refactor!: remove fs.cachedChecks option](https://github.com/vitejs/vite/pull/18493)
    
    *   This opt-in optimization was removed due to edge cases when writing a file in a cached folder and immediately importing it.
*   [\[#18697\] fix(deps)!: update dependency dotenv-expand to v12](https://github.com/vitejs/vite/pull/18697)
    
    *   Variables used in interpolation should be declared before the interpolation now. For more details, see [the `dotenv-expand` changelog](https://github.com/motdotla/dotenv-expand/blob/v12.0.1/CHANGELOG.md#1200-2024-11-16). This breaking change was reverted in v6.1.0.
*   [\[#16471\] feat: v6 - Environment API](https://github.com/vitejs/vite/pull/16471)
    
    *   Updates to an SSR-only module no longer triggers a full page reload in the client. To return to the previous behaviour, a custom Vite plugin can be used:
        
        Click to expand example
        
        ts
        
            import type { Plugin, EnvironmentModuleNode } from 'vite'
            
            function hmrReload(): Plugin {
              return {
                name: 'hmr-reload',
                enforce: 'post',
                hotUpdate: {
                  order: 'post',
                  handler({ modules, server, timestamp }) {
                    if (this.environment.name !== 'ssr') return
            
                    let hasSsrOnlyModules = false
            
                    const invalidatedModules = new Set<EnvironmentModuleNode>()
                    for (const mod of modules) {
                      if (mod.id == null) continue
                      const clientModule =
                        server.environments.client.moduleGraph.getModuleById(mod.id)
                      if (clientModule != null) continue
            
                      this.environment.moduleGraph.invalidateModule(
                        mod,
                        invalidatedModules,
                        timestamp,
                        true,
                      )
                      hasSsrOnlyModules = true
                    }
            
                    if (hasSsrOnlyModules) {
                      server.ws.send({ type: 'full-reload' })
                      return []
                    }
                  },
                },
              }
            }
        

Migration from v4 [​](#migration-from-v4)
-----------------------------------------

Check the [Migration from v4 Guide](https://v5.vite.dev/guide/migration) in the Vite v5 docs first to see the needed changes to port your app to Vite 5, and then proceed with the changes on this page.

Breaking Changes [​](#breaking-changes)
=======================================

List of breaking changes in Vite including API deprecations, removals, and changes. Most of the changes below can be opt-in using the [`future` option](/config/shared-options#future) in your Vite config.

Planned [​](#planned)
---------------------

These changes are planned for the next major version of Vite. The deprecation or usage warnings will guide you where possible, and we're reaching out to framework, plugin authors, and users to apply these changes.

*   _No planned changes yet_

Considering [​](#considering)
-----------------------------

These changes are being considered and are often experimental APIs that intend to improve upon current usage patterns. As not all changes are listed here, please check out the [Experimental Label in Vite GitHub Discussions](https://github.com/vitejs/vite/discussions/categories/feedback?discussions_q=label%3Aexperimental+category%3AFeedback) for the full list.

We don't recommend switching to these APIs yet. They are included in Vite to help us gather feedback. Please check these proposals and let us know how they work in your use case in each's linked GitHub Discussions.

*   [`this.environment` in Hooks](/changes/this-environment-in-hooks)
*   [HMR `hotUpdate` Plugin Hook](/changes/hotupdate-hook)
*   [Move to per-environment APIs](/changes/per-environment-apis)
*   [SSR using `ModuleRunner` API](/changes/ssr-using-modulerunner)
*   [Shared plugins during build](/changes/shared-plugins-during-build)

Past [​](#past)
---------------

The changes below has been done or reverted. They are no longer relevant in the current major version.

*   _No past changes yet_

Plugin API [​](#plugin-api)
===========================

Vite plugins extends Rollup's well-designed plugin interface with a few extra Vite-specific options. As a result, you can write a Vite plugin once and have it work for both dev and build.

**It is recommended to go through [Rollup's plugin documentation](https://rollupjs.org/plugin-development/) first before reading the sections below.**

Authoring a Plugin [​](#authoring-a-plugin)
-------------------------------------------

Vite strives to offer established patterns out of the box, so before creating a new plugin make sure that you check the [Features guide](https://vite.dev/guide/features) to see if your need is covered. Also review available community plugins, both in the form of a [compatible Rollup plugin](https://github.com/rollup/awesome) and [Vite Specific plugins](https://github.com/vitejs/awesome-vite#plugins)

When creating a plugin, you can inline it in your `vite.config.js`. There is no need to create a new package for it. Once you see that a plugin was useful in your projects, consider sharing it to help others [in the ecosystem](https://chat.vite.dev).

TIP

When learning, debugging, or authoring plugins, we suggest including [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect) in your project. It allows you to inspect the intermediate state of Vite plugins. After installing, you can visit `localhost:5173/__inspect/` to inspect the modules and transformation stack of your project. Check out install instructions in the [vite-plugin-inspect docs](https://github.com/antfu/vite-plugin-inspect).

Conventions [​](#conventions)
-----------------------------

If the plugin doesn't use Vite specific hooks and can be implemented as a [Compatible Rollup Plugin](#rollup-plugin-compatibility), then it is recommended to use the [Rollup Plugin naming conventions](https://rollupjs.org/plugin-development/#conventions).

*   Rollup Plugins should have a clear name with `rollup-plugin-` prefix.
*   Include `rollup-plugin` and `vite-plugin` keywords in package.json.

This exposes the plugin to be also used in pure Rollup or WMR based projects

For Vite only plugins

*   Vite Plugins should have a clear name with `vite-plugin-` prefix.
*   Include `vite-plugin` keyword in package.json.
*   Include a section in the plugin docs detailing why it is a Vite only plugin (for example, it uses Vite specific plugin hooks).

If your plugin is only going to work for a particular framework, its name should be included as part of the prefix

*   `vite-plugin-vue-` prefix for Vue Plugins
*   `vite-plugin-react-` prefix for React Plugins
*   `vite-plugin-svelte-` prefix for Svelte Plugins

See also [Virtual Modules Convention](#virtual-modules-convention).

Plugins config [​](#plugins-config)
-----------------------------------

Users will add plugins to the project `devDependencies` and configure them using the `plugins` array option.

vite.config.js

js

    import vitePlugin from 'vite-plugin-feature'
    import rollupPlugin from 'rollup-plugin-feature'
    
    export default defineConfig({
      plugins: [vitePlugin(), rollupPlugin()],
    })

Falsy plugins will be ignored, which can be used to easily activate or deactivate plugins.

`plugins` also accepts presets including several plugins as a single element. This is useful for complex features (like framework integration) that are implemented using several plugins. The array will be flattened internally.

js

    // framework-plugin
    import frameworkRefresh from 'vite-plugin-framework-refresh'
    import frameworkDevtools from 'vite-plugin-framework-devtools'
    
    export default function framework(config) {
      return [frameworkRefresh(config), frameworkDevTools(config)]
    }

vite.config.js

js

    import { defineConfig } from 'vite'
    import framework from 'vite-plugin-framework'
    
    export default defineConfig({
      plugins: [framework()],
    })

Simple Examples [​](#simple-examples)
-------------------------------------

TIP

It is common convention to author a Vite/Rollup plugin as a factory function that returns the actual plugin object. The function can accept options which allows users to customize the behavior of the plugin.

### Transforming Custom File Types [​](#transforming-custom-file-types)

js

    const fileRegex = /\.(my-file-ext)$/
    
    export default function myPlugin() {
      return {
        name: 'transform-file',
    
        transform(src, id) {
          if (fileRegex.test(id)) {
            return {
              code: compileFileToJS(src),
              map: null, // provide source map if available
            }
          }
        },
      }
    }

### Importing a Virtual File [​](#importing-a-virtual-file)

See the example in the [next section](#virtual-modules-convention).

Virtual Modules Convention [​](#virtual-modules-convention)
-----------------------------------------------------------

Virtual modules are a useful scheme that allows you to pass build time information to the source files using normal ESM import syntax.

js

    export default function myPlugin() {
      const virtualModuleId = 'virtual:my-module'
      const resolvedVirtualModuleId = '\0' + virtualModuleId
    
      return {
        name: 'my-plugin', // required, will show up in warnings and errors
        resolveId(id) {
          if (id === virtualModuleId) {
            return resolvedVirtualModuleId
          }
        },
        load(id) {
          if (id === resolvedVirtualModuleId) {
            return `export const msg = "from virtual module"`
          }
        },
      }
    }

Which allows importing the module in JavaScript:

js

    import { msg } from 'virtual:my-module'
    
    console.log(msg)

Virtual modules in Vite (and Rollup) are prefixed with `virtual:` for the user-facing path by convention. If possible the plugin name should be used as a namespace to avoid collisions with other plugins in the ecosystem. For example, a `vite-plugin-posts` could ask users to import a `virtual:posts` or `virtual:posts/helpers` virtual modules to get build time information. Internally, plugins that use virtual modules should prefix the module ID with `\0` while resolving the id, a convention from the rollup ecosystem. This prevents other plugins from trying to process the id (like node resolution), and core features like sourcemaps can use this info to differentiate between virtual modules and regular files. `\0` is not a permitted char in import URLs so we have to replace them during import analysis. A `\0{id}` virtual id ends up encoded as `/@id/__x00__{id}` during dev in the browser. The id will be decoded back before entering the plugins pipeline, so this is not seen by plugins hooks code.

Note that modules directly derived from a real file, as in the case of a script module in a Single File Component (like a .vue or .svelte SFC) don't need to follow this convention. SFCs generally generate a set of submodules when processed but the code in these can be mapped back to the filesystem. Using `\0` for these submodules would prevent sourcemaps from working correctly.

Universal Hooks [​](#universal-hooks)
-------------------------------------

During dev, the Vite dev server creates a plugin container that invokes [Rollup Build Hooks](https://rollupjs.org/plugin-development/#build-hooks) the same way Rollup does it.

The following hooks are called once on server start:

*   [`options`](https://rollupjs.org/plugin-development/#options)
*   [`buildStart`](https://rollupjs.org/plugin-development/#buildstart)

The following hooks are called on each incoming module request:

*   [`resolveId`](https://rollupjs.org/plugin-development/#resolveid)
*   [`load`](https://rollupjs.org/plugin-development/#load)
*   [`transform`](https://rollupjs.org/plugin-development/#transform)

These hooks also have an extended `options` parameter with additional Vite-specific properties. You can read more in the [SSR documentation](/guide/ssr#ssr-specific-plugin-logic).

Some `resolveId` calls' `importer` value may be an absolute path for a generic `index.html` at root as it's not always possible to derive the actual importer due to Vite's unbundled dev server pattern. For imports handled within Vite's resolve pipeline, the importer can be tracked during the import analysis phase, providing the correct `importer` value.

The following hooks are called when the server is closed:

*   [`buildEnd`](https://rollupjs.org/plugin-development/#buildend)
*   [`closeBundle`](https://rollupjs.org/plugin-development/#closebundle)

Note that the [`moduleParsed`](https://rollupjs.org/plugin-development/#moduleparsed) hook is **not** called during dev, because Vite avoids full AST parses for better performance.

[Output Generation Hooks](https://rollupjs.org/plugin-development/#output-generation-hooks) (except `closeBundle`) are **not** called during dev. You can think of Vite's dev server as only calling `rollup.rollup()` without calling `bundle.generate()`.

Vite Specific Hooks [​](#vite-specific-hooks)
---------------------------------------------

Vite plugins can also provide hooks that serve Vite-specific purposes. These hooks are ignored by Rollup.

### `config` [​](#config)

*   **Type:** `(config: UserConfig, env: { mode: string, command: string }) => UserConfig | null | void`
    
*   **Kind:** `async`, `sequential`
    
    Modify Vite config before it's resolved. The hook receives the raw user config (CLI options merged with config file) and the current config env which exposes the `mode` and `command` being used. It can return a partial config object that will be deeply merged into existing config, or directly mutate the config (if the default merging cannot achieve the desired result).
    
    **Example:**
    
    js
    
        // return partial config (recommended)
        const partialConfigPlugin = () => ({
          name: 'return-partial',
          config: () => ({
            resolve: {
              alias: {
                foo: 'bar',
              },
            },
          }),
        })
        
        // mutate the config directly (use only when merging doesn't work)
        const mutateConfigPlugin = () => ({
          name: 'mutate-config',
          config(config, { command }) {
            if (command === 'build') {
              config.root = 'foo'
            }
          },
        })
    
    Note
    
    User plugins are resolved before running this hook so injecting other plugins inside the `config` hook will have no effect.
    

### `configResolved` [​](#configresolved)

*   **Type:** `(config: ResolvedConfig) => void | Promise<void>`
    
*   **Kind:** `async`, `parallel`
    
    Called after the Vite config is resolved. Use this hook to read and store the final resolved config. It is also useful when the plugin needs to do something different based on the command being run.
    
    **Example:**
    
    js
    
        const examplePlugin = () => {
          let config
        
          return {
            name: 'read-config',
        
            configResolved(resolvedConfig) {
              // store the resolved config
              config = resolvedConfig
            },
        
            // use stored config in other hooks
            transform(code, id) {
              if (config.command === 'serve') {
                // dev: plugin invoked by dev server
              } else {
                // build: plugin invoked by Rollup
              }
            },
          }
        }
    
    Note that the `command` value is `serve` in dev (in the cli `vite`, `vite dev`, and `vite serve` are aliases).
    

### `configureServer` [​](#configureserver)

*   **Type:** `(server: ViteDevServer) => (() => void) | void | Promise<(() => void) | void>`
    
*   **Kind:** `async`, `sequential`
    
*   **See also:** [ViteDevServer](/guide/api-javascript#vitedevserver)
    
    Hook for configuring the dev server. The most common use case is adding custom middlewares to the internal [connect](https://github.com/senchalabs/connect) app:
    
    js
    
        const myPlugin = () => ({
          name: 'configure-server',
          configureServer(server) {
            server.middlewares.use((req, res, next) => {
              // custom handle request...
            })
          },
        })
    
    **Injecting Post Middleware**
    
    The `configureServer` hook is called before internal middlewares are installed, so the custom middlewares will run before internal middlewares by default. If you want to inject a middleware **after** internal middlewares, you can return a function from `configureServer`, which will be called after internal middlewares are installed:
    
    js
    
        const myPlugin = () => ({
          name: 'configure-server',
          configureServer(server) {
            // return a post hook that is called after internal middlewares are
            // installed
            return () => {
              server.middlewares.use((req, res, next) => {
                // custom handle request...
              })
            }
          },
        })
    
    **Storing Server Access**
    
    In some cases, other plugin hooks may need access to the dev server instance (e.g. accessing the web socket server, the file system watcher, or the module graph). This hook can also be used to store the server instance for access in other hooks:
    
    js
    
        const myPlugin = () => {
          let server
          return {
            name: 'configure-server',
            configureServer(_server) {
              server = _server
            },
            transform(code, id) {
              if (server) {
                // use server...
              }
            },
          }
        }
    
    Note `configureServer` is not called when running the production build so your other hooks need to guard against its absence.
    

### `configurePreviewServer` [​](#configurepreviewserver)

*   **Type:** `(server: PreviewServer) => (() => void) | void | Promise<(() => void) | void>`
    
*   **Kind:** `async`, `sequential`
    
*   **See also:** [PreviewServer](/guide/api-javascript#previewserver)
    
    Same as [`configureServer`](/guide/api-plugin#configureserver) but for the preview server. Similarly to `configureServer`, the `configurePreviewServer` hook is called before other middlewares are installed. If you want to inject a middleware **after** other middlewares, you can return a function from `configurePreviewServer`, which will be called after internal middlewares are installed:
    
    js
    
        const myPlugin = () => ({
          name: 'configure-preview-server',
          configurePreviewServer(server) {
            // return a post hook that is called after other middlewares are
            // installed
            return () => {
              server.middlewares.use((req, res, next) => {
                // custom handle request...
              })
            }
          },
        })
    

### `transformIndexHtml` [​](#transformindexhtml)

*   **Type:** `IndexHtmlTransformHook | { order?: 'pre' | 'post', handler: IndexHtmlTransformHook }`
    
*   **Kind:** `async`, `sequential`
    
    Dedicated hook for transforming HTML entry point files such as `index.html`. The hook receives the current HTML string and a transform context. The context exposes the [`ViteDevServer`](/guide/api-javascript#vitedevserver) instance during dev, and exposes the Rollup output bundle during build.
    
    The hook can be async and can return one of the following:
    
    *   Transformed HTML string
    *   An array of tag descriptor objects (`{ tag, attrs, children }`) to inject to the existing HTML. Each tag can also specify where it should be injected to (default is prepending to `<head>`)
    *   An object containing both as `{ html, tags }`
    
    By default `order` is `undefined`, with this hook applied after the HTML has been transformed. In order to inject a script that should go through the Vite plugins pipeline, `order: 'pre'` will apply the hook before processing the HTML. `order: 'post'` applies the hook after all hooks with `order` undefined are applied.
    
    **Basic Example:**
    
    js
    
        const htmlPlugin = () => {
          return {
            name: 'html-transform',
            transformIndexHtml(html) {
              return html.replace(
                /<title>(.*?)<\/title>/,
                `<title>Title replaced!</title>`,
              )
            },
          }
        }
    
    **Full Hook Signature:**
    
    ts
    
        type IndexHtmlTransformHook = (
          html: string,
          ctx: {
            path: string
            filename: string
            server?: ViteDevServer
            bundle?: import('rollup').OutputBundle
            chunk?: import('rollup').OutputChunk
          },
        ) =>
          | IndexHtmlTransformResult
          | void
          | Promise<IndexHtmlTransformResult | void>
        
        type IndexHtmlTransformResult =
          | string
          | HtmlTagDescriptor[]
          | {
              html: string
              tags: HtmlTagDescriptor[]
            }
        
        interface HtmlTagDescriptor {
          tag: string
          attrs?: Record<string, string | boolean>
          children?: string | HtmlTagDescriptor[]
          /**
           * default: 'head-prepend'
           */
          injectTo?: 'head' | 'body' | 'head-prepend' | 'body-prepend'
        }
    
    Note
    
    This hook won't be called if you are using a framework that has custom handling of entry files (for example [SvelteKit](https://github.com/sveltejs/kit/discussions/8269#discussioncomment-4509145)).
    

### `handleHotUpdate` [​](#handlehotupdate)

*   **Type:** `(ctx: HmrContext) => Array<ModuleNode> | void | Promise<Array<ModuleNode> | void>`
    
*   **See also:** [HMR API](/guide/api-hmr)
    
    Perform custom HMR update handling. The hook receives a context object with the following signature:
    
    ts
    
        interface HmrContext {
          file: string
          timestamp: number
          modules: Array<ModuleNode>
          read: () => string | Promise<string>
          server: ViteDevServer
        }
    
    *   `modules` is an array of modules that are affected by the changed file. It's an array because a single file may map to multiple served modules (e.g. Vue SFCs).
        
    *   `read` is an async read function that returns the content of the file. This is provided because on some systems, the file change callback may fire too fast before the editor finishes updating the file and direct `fs.readFile` will return empty content. The read function passed in normalizes this behavior.
        
    
    The hook can choose to:
    
    *   Filter and narrow down the affected module list so that the HMR is more accurate.
        
    *   Return an empty array and perform a full reload:
        
        js
        
            handleHotUpdate({ server, modules, timestamp }) {
              // Invalidate modules manually
              const invalidatedModules = new Set()
              for (const mod of modules) {
                server.moduleGraph.invalidateModule(
                  mod,
                  invalidatedModules,
                  timestamp,
                  true
                )
              }
              server.ws.send({ type: 'full-reload' })
              return []
            }
        
    *   Return an empty array and perform complete custom HMR handling by sending custom events to the client:
        
        js
        
            handleHotUpdate({ server }) {
              server.ws.send({
                type: 'custom',
                event: 'special-update',
                data: {}
              })
              return []
            }
        
        Client code should register corresponding handler using the [HMR API](/guide/api-hmr) (this could be injected by the same plugin's `transform` hook):
        
        js
        
            if (import.meta.hot) {
              import.meta.hot.on('special-update', (data) => {
                // perform custom update
              })
            }
        

Plugin Ordering [​](#plugin-ordering)
-------------------------------------

A Vite plugin can additionally specify an `enforce` property (similar to webpack loaders) to adjust its application order. The value of `enforce` can be either `"pre"` or `"post"`. The resolved plugins will be in the following order:

*   Alias
*   User plugins with `enforce: 'pre'`
*   Vite core plugins
*   User plugins without enforce value
*   Vite build plugins
*   User plugins with `enforce: 'post'`
*   Vite post build plugins (minify, manifest, reporting)

Note that this is separate from hooks ordering, those are still separately subject to their `order` attribute [as usual for Rollup hooks](https://rollupjs.org/plugin-development/#build-hooks).

Conditional Application [​](#conditional-application)
-----------------------------------------------------

By default plugins are invoked for both serve and build. In cases where a plugin needs to be conditionally applied only during serve or build, use the `apply` property to only invoke them during `'build'` or `'serve'`:

js

    function myPlugin() {
      return {
        name: 'build-only',
        apply: 'build', // or 'serve'
      }
    }

A function can also be used for more precise control:

js

    apply(config, { command }) {
      // apply only on build but not for SSR
      return command === 'build' && !config.build.ssr
    }

Rollup Plugin Compatibility [​](#rollup-plugin-compatibility)
-------------------------------------------------------------

A fair number of Rollup plugins will work directly as a Vite plugin (e.g. `@rollup/plugin-alias` or `@rollup/plugin-json`), but not all of them, since some plugin hooks do not make sense in an unbundled dev server context.

In general, as long as a Rollup plugin fits the following criteria then it should just work as a Vite plugin:

*   It doesn't use the [`moduleParsed`](https://rollupjs.org/plugin-development/#moduleparsed) hook.
*   It doesn't have strong coupling between bundle-phase hooks and output-phase hooks.

If a Rollup plugin only makes sense for the build phase, then it can be specified under `build.rollupOptions.plugins` instead. It will work the same as a Vite plugin with `enforce: 'post'` and `apply: 'build'`.

You can also augment an existing Rollup plugin with Vite-only properties:

vite.config.js

js

    import example from 'rollup-plugin-example'
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      plugins: [
        {
          ...example(),
          enforce: 'post',
          apply: 'build',
        },
      ],
    })

Path Normalization [​](#path-normalization)
-------------------------------------------

Vite normalizes paths while resolving ids to use POSIX separators ( / ) while preserving the volume in Windows. On the other hand, Rollup keeps resolved paths untouched by default, so resolved ids have win32 separators ( \\ ) in Windows. However, Rollup plugins use a [`normalizePath` utility function](https://github.com/rollup/plugins/tree/master/packages/pluginutils#normalizepath) from `@rollup/pluginutils` internally, which converts separators to POSIX before performing comparisons. This means that when these plugins are used in Vite, the `include` and `exclude` config pattern and other similar paths against resolved ids comparisons work correctly.

So, for Vite plugins, when comparing paths against resolved ids it is important to first normalize the paths to use POSIX separators. An equivalent `normalizePath` utility function is exported from the `vite` module.

js

    import { normalizePath } from 'vite'
    
    normalizePath('foo\\bar') // 'foo/bar'
    normalizePath('foo/bar') // 'foo/bar'

Filtering, include/exclude pattern [​](#filtering-include-exclude-pattern)
--------------------------------------------------------------------------

Vite exposes [`@rollup/pluginutils`'s `createFilter`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter) function to encourage Vite specific plugins and integrations to use the standard include/exclude filtering pattern, which is also used in Vite core itself.

Client-server Communication [​](#client-server-communication)
-------------------------------------------------------------

Since Vite 2.9, we provide some utilities for plugins to help handle the communication with clients.

### Server to Client [​](#server-to-client)

On the plugin side, we could use `server.ws.send` to broadcast events to the client:

vite.config.js

js

    export default defineConfig({
      plugins: [
        {
          // ...
          configureServer(server) {
            server.ws.on('connection', () => {
              server.ws.send('my:greetings', { msg: 'hello' })
            })
          },
        },
      ],
    })

NOTE

We recommend **always prefixing** your event names to avoid collisions with other plugins.

On the client side, use [`hot.on`](/guide/api-hmr#hot-on-event-cb) to listen to the events:

ts

    // client side
    if (import.meta.hot) {
      import.meta.hot.on('my:greetings', (data) => {
        console.log(data.msg) // hello
      })
    }

### Client to Server [​](#client-to-server)

To send events from the client to the server, we can use [`hot.send`](/guide/api-hmr#hot-send-event-payload):

ts

    // client side
    if (import.meta.hot) {
      import.meta.hot.send('my:from-client', { msg: 'Hey!' })
    }

Then use `server.ws.on` and listen to the events on the server side:

vite.config.js

js

    export default defineConfig({
      plugins: [
        {
          // ...
          configureServer(server) {
            server.ws.on('my:from-client', (data, client) => {
              console.log('Message from client:', data.msg) // Hey!
              // reply only to the client (if needed)
              client.send('my:ack', { msg: 'Hi! I got your message!' })
            })
          },
        },
      ],
    })

### TypeScript for Custom Events [​](#typescript-for-custom-events)

Internally, vite infers the type of a payload from the `CustomEventMap` interface, it is possible to type custom events by extending the interface:

Note

Make sure to include the `.d.ts` extension when specifying TypeScript declaration files. Otherwise, Typescript may not know which file the module is trying to extend.

events.d.ts

ts

    import 'vite/types/customEvent.d.ts'
    
    declare module 'vite/types/customEvent.d.ts' {
      interface CustomEventMap {
        'custom:foo': { msg: string }
        // 'event-key': payload
      }
    }

This interface extension is utilized by `InferCustomEventPayload<T>` to infer the payload type for event `T`. For more information on how this interface is utilized, refer to the [HMR API Documentation](/guide/api-hmr#hmr-api).

ts

    type CustomFooPayload = InferCustomEventPayload<'custom:foo'>
    import.meta.hot?.on('custom:foo', (payload) => {
      // The type of payload will be { msg: string }
    })
    import.meta.hot?.on('unknown:event', (payload) => {
      // The type of payload will be any
    })

HMR API [​](#hmr-api)
=====================

Note

This is the client HMR API. For handling HMR update in plugins, see [handleHotUpdate](/guide/api-plugin#handlehotupdate).

The manual HMR API is primarily intended for framework and tooling authors. As an end user, HMR is likely already handled for you in the framework specific starter templates.

Vite exposes its manual HMR API via the special `import.meta.hot` object:

ts

    interface ImportMeta {
      readonly hot?: ViteHotContext
    }
    
    interface ViteHotContext {
      readonly data: any
    
      accept(): void
      accept(cb: (mod: ModuleNamespace | undefined) => void): void
      accept(dep: string, cb: (mod: ModuleNamespace | undefined) => void): void
      accept(
        deps: readonly string[],
        cb: (mods: Array<ModuleNamespace | undefined>) => void,
      ): void
    
      dispose(cb: (data: any) => void): void
      prune(cb: (data: any) => void): void
      invalidate(message?: string): void
    
      on<T extends CustomEventName>(
        event: T,
        cb: (payload: InferCustomEventPayload<T>) => void,
      ): void
      off<T extends CustomEventName>(
        event: T,
        cb: (payload: InferCustomEventPayload<T>) => void,
      ): void
      send<T extends CustomEventName>(
        event: T,
        data?: InferCustomEventPayload<T>,
      ): void
    }

Required Conditional Guard [​](#required-conditional-guard)
-----------------------------------------------------------

First of all, make sure to guard all HMR API usage with a conditional block so that the code can be tree-shaken in production:

js

    if (import.meta.hot) {
      // HMR code
    }

IntelliSense for TypeScript [​](#intellisense-for-typescript)
-------------------------------------------------------------

Vite provides type definitions for `import.meta.hot` in [`vite/client.d.ts`](https://github.com/vitejs/vite/blob/main/packages/vite/client.d.ts). You can create an `env.d.ts` in the `src` directory so TypeScript picks up the type definitions:

ts

    /// <reference types="vite/client" />

`hot.accept(cb)` [​](#hot-accept-cb)
------------------------------------

For a module to self-accept, use `import.meta.hot.accept` with a callback which receives the updated module:

js

    export const count = 1
    
    if (import.meta.hot) {
      import.meta.hot.accept((newModule) => {
        if (newModule) {
          // newModule is undefined when SyntaxError happened
          console.log('updated: count is now ', newModule.count)
        }
      })
    }

A module that "accepts" hot updates is considered an **HMR boundary**.

Vite's HMR does not actually swap the originally imported module: if an HMR boundary module re-exports imports from a dep, then it is responsible for updating those re-exports (and these exports must be using `let`). In addition, importers up the chain from the boundary module will not be notified of the change. This simplified HMR implementation is sufficient for most dev use cases, while allowing us to skip the expensive work of generating proxy modules.

Vite requires that the call to this function appears as `import.meta.hot.accept(` (whitespace-sensitive) in the source code in order for the module to accept update. This is a requirement of the static analysis that Vite does to enable HMR support for a module.

`hot.accept(deps, cb)` [​](#hot-accept-deps-cb)
-----------------------------------------------

A module can also accept updates from direct dependencies without reloading itself:

js

    import { foo } from './foo.js'
    
    foo()
    
    if (import.meta.hot) {
      import.meta.hot.accept('./foo.js', (newFoo) => {
        // the callback receives the updated './foo.js' module
        newFoo?.foo()
      })
    
      // Can also accept an array of dep modules:
      import.meta.hot.accept(
        ['./foo.js', './bar.js'],
        ([newFooModule, newBarModule]) => {
          // The callback receives an array where only the updated module is
          // non null. If the update was not successful (syntax error for ex.),
          // the array is empty
        },
      )
    }

`hot.dispose(cb)` [​](#hot-dispose-cb)
--------------------------------------

A self-accepting module or a module that expects to be accepted by others can use `hot.dispose` to clean-up any persistent side effects created by its updated copy:

js

    function setupSideEffect() {}
    
    setupSideEffect()
    
    if (import.meta.hot) {
      import.meta.hot.dispose((data) => {
        // cleanup side effect
      })
    }

`hot.prune(cb)` [​](#hot-prune-cb)
----------------------------------

Register a callback that will call when the module is no longer imported on the page. Compared to `hot.dispose`, this can be used if the source code cleans up side-effects by itself on updates and you only need to clean-up when it's removed from the page. Vite currently uses this for `.css` imports.

js

    function setupOrReuseSideEffect() {}
    
    setupOrReuseSideEffect()
    
    if (import.meta.hot) {
      import.meta.hot.prune((data) => {
        // cleanup side effect
      })
    }

`hot.data` [​](#hot-data)
-------------------------

The `import.meta.hot.data` object is persisted across different instances of the same updated module. It can be used to pass on information from a previous version of the module to the next one.

Note that re-assignment of `data` itself is not supported. Instead, you should mutate properties of the `data` object so information added from other handlers are preserved.

js

    // ok
    import.meta.hot.data.someValue = 'hello'
    
    // not supported
    import.meta.hot.data = { someValue: 'hello' }

`hot.decline()` [​](#hot-decline)
---------------------------------

This is currently a noop and is there for backward compatibility. This could change in the future if there is a new usage for it. To indicate that the module is not hot-updatable, use `hot.invalidate()`.

`hot.invalidate(message?: string)` [​](#hot-invalidate-message-string)
----------------------------------------------------------------------

A self-accepting module may realize during runtime that it can't handle a HMR update, and so the update needs to be forcefully propagated to importers. By calling `import.meta.hot.invalidate()`, the HMR server will invalidate the importers of the caller, as if the caller wasn't self-accepting. This will log a message both in the browser console and in the terminal. You can pass a message to give some context on why the invalidation happened.

Note that you should always call `import.meta.hot.accept` even if you plan to call `invalidate` immediately afterwards, or else the HMR client won't listen for future changes to the self-accepting module. To communicate your intent clearly, we recommend calling `invalidate` within the `accept` callback like so:

js

    import.meta.hot.accept((module) => {
      // You may use the new module instance to decide whether to invalidate.
      if (cannotHandleUpdate(module)) {
        import.meta.hot.invalidate()
      }
    })

`hot.on(event, cb)` [​](#hot-on-event-cb)
-----------------------------------------

Listen to an HMR event.

The following HMR events are dispatched by Vite automatically:

*   `'vite:beforeUpdate'` when an update is about to be applied (e.g. a module will be replaced)
*   `'vite:afterUpdate'` when an update has just been applied (e.g. a module has been replaced)
*   `'vite:beforeFullReload'` when a full reload is about to occur
*   `'vite:beforePrune'` when modules that are no longer needed are about to be pruned
*   `'vite:invalidate'` when a module is invalidated with `import.meta.hot.invalidate()`
*   `'vite:error'` when an error occurs (e.g. syntax error)
*   `'vite:ws:disconnect'` when the WebSocket connection is lost
*   `'vite:ws:connect'` when the WebSocket connection is (re-)established

Custom HMR events can also be sent from plugins. See [handleHotUpdate](/guide/api-plugin#handlehotupdate) for more details.

`hot.off(event, cb)` [​](#hot-off-event-cb)
-------------------------------------------

Remove callback from the event listeners.

`hot.send(event, data)` [​](#hot-send-event-data)
-------------------------------------------------

Send custom events back to Vite's dev server.

If called before connected, the data will be buffered and sent once the connection is established.

See [Client-server Communication](/guide/api-plugin#client-server-communication) for more details, including a section on [Typing Custom Events](/guide/api-plugin#typescript-for-custom-events).

Further Reading [​](#further-reading)
-------------------------------------

If you'd like to learn more about how to use the HMR API and how it works under-the-hood. Check out these resources:

*   [Hot Module Replacement is Easy](https://bjornlu.com/blog/hot-module-replacement-is-easy)

JavaScript API [​](#javascript-api)
===================================

Vite's JavaScript APIs are fully typed, and it's recommended to use TypeScript or enable JS type checking in VS Code to leverage the intellisense and validation.

`createServer` [​](#createserver)
---------------------------------

**Type Signature:**

ts

    async function createServer(inlineConfig?: InlineConfig): Promise<ViteDevServer>

**Example Usage:**

ts

    import { fileURLToPath } from 'node:url'
    import { createServer } from 'vite'
    
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    
    const server = await createServer({
      // any valid user config options, plus `mode` and `configFile`
      configFile: false,
      root: __dirname,
      server: {
        port: 1337,
      },
    })
    await server.listen()
    
    server.printUrls()
    server.bindCLIShortcuts({ print: true })

NOTE

When using `createServer` and `build` in the same Node.js process, both functions rely on `process.env.NODE_ENV` to work properly, which also depends on the `mode` config option. To prevent conflicting behavior, set `process.env.NODE_ENV` or the `mode` of the two APIs to `development`. Otherwise, you can spawn a child process to run the APIs separately.

NOTE

When using [middleware mode](/config/server-options#server-middlewaremode) combined with [proxy config for WebSocket](/config/server-options#server-proxy), the parent http server should be provided in `middlewareMode` to bind the proxy correctly.

Example

ts

    import http from 'http'
    import { createServer } from 'vite'
    
    const parentServer = http.createServer() // or express, koa, etc.
    
    const vite = await createServer({
      server: {
        // Enable middleware mode
        middlewareMode: {
          // Provide the parent http server for proxy WebSocket
          server: parentServer,
        },
        proxy: {
          '/ws': {
            target: 'ws://localhost:3000',
            // Proxying WebSocket
            ws: true,
          },
        },
      },
    })
    
    parentServer.use(vite.middlewares)

`InlineConfig` [​](#inlineconfig)
---------------------------------

The `InlineConfig` interface extends `UserConfig` with additional properties:

*   `configFile`: specify config file to use. If not set, Vite will try to automatically resolve one from project root. Set to `false` to disable auto resolving.

`ResolvedConfig` [​](#resolvedconfig)
-------------------------------------

The `ResolvedConfig` interface has all the same properties of a `UserConfig`, except most properties are resolved and non-undefined. It also contains utilities like:

*   `config.assetsInclude`: A function to check if an `id` is considered an asset.
*   `config.logger`: Vite's internal logger object.

`ViteDevServer` [​](#vitedevserver)
-----------------------------------

ts

    interface ViteDevServer {
      /**
       * The resolved Vite config object.
       */
      config: ResolvedConfig
      /**
       * A connect app instance
       * - Can be used to attach custom middlewares to the dev server.
       * - Can also be used as the handler function of a custom http server
       *   or as a middleware in any connect-style Node.js frameworks.
       *
       * https://github.com/senchalabs/connect#use-middleware
       */
      middlewares: Connect.Server
      /**
       * Native Node http server instance.
       * Will be null in middleware mode.
       */
      httpServer: http.Server | null
      /**
       * Chokidar watcher instance. If `config.server.watch` is set to `null`,
       * it will not watch any files and calling `add` or `unwatch` will have no effect.
       * https://github.com/paulmillr/chokidar/tree/3.6.0#api
       */
      watcher: FSWatcher
      /**
       * Web socket server with `send(payload)` method.
       */
      ws: WebSocketServer
      /**
       * Rollup plugin container that can run plugin hooks on a given file.
       */
      pluginContainer: PluginContainer
      /**
       * Module graph that tracks the import relationships, url to file mapping
       * and hmr state.
       */
      moduleGraph: ModuleGraph
      /**
       * The resolved urls Vite prints on the CLI (URL-encoded). Returns `null`
       * in middleware mode or if the server is not listening on any port.
       */
      resolvedUrls: ResolvedServerUrls | null
      /**
       * Programmatically resolve, load and transform a URL and get the result
       * without going through the http request pipeline.
       */
      transformRequest(
        url: string,
        options?: TransformOptions,
      ): Promise<TransformResult | null>
      /**
       * Apply Vite built-in HTML transforms and any plugin HTML transforms.
       */
      transformIndexHtml(
        url: string,
        html: string,
        originalUrl?: string,
      ): Promise<string>
      /**
       * Load a given URL as an instantiated module for SSR.
       */
      ssrLoadModule(
        url: string,
        options?: { fixStacktrace?: boolean },
      ): Promise<Record<string, any>>
      /**
       * Fix ssr error stacktrace.
       */
      ssrFixStacktrace(e: Error): void
      /**
       * Triggers HMR for a module in the module graph. You can use the `server.moduleGraph`
       * API to retrieve the module to be reloaded. If `hmr` is false, this is a no-op.
       */
      reloadModule(module: ModuleNode): Promise<void>
      /**
       * Start the server.
       */
      listen(port?: number, isRestart?: boolean): Promise<ViteDevServer>
      /**
       * Restart the server.
       *
       * @param forceOptimize - force the optimizer to re-bundle, same as --force cli flag
       */
      restart(forceOptimize?: boolean): Promise<void>
      /**
       * Stop the server.
       */
      close(): Promise<void>
      /**
       * Bind CLI shortcuts
       */
      bindCLIShortcuts(options?: BindCLIShortcutsOptions<ViteDevServer>): void
      /**
       * Calling `await server.waitForRequestsIdle(id)` will wait until all static imports
       * are processed. If called from a load or transform plugin hook, the id needs to be
       * passed as a parameter to avoid deadlocks. Calling this function after the first
       * static imports section of the module graph has been processed will resolve immediately.
       * @experimental
       */
      waitForRequestsIdle: (ignoredId?: string) => Promise<void>
    }

INFO

`waitForRequestsIdle` is meant to be used as a escape hatch to improve DX for features that can't be implemented following the on-demand nature of the Vite dev server. It can be used during startup by tools like Tailwind to delay generating the app CSS classes until the app code has been seen, avoiding flashes of style changes. When this function is used in a load or transform hook, and the default HTTP1 server is used, one of the six http channels will be blocked until the server processes all static imports. Vite's dependency optimizer currently uses this function to avoid full-page reloads on missing dependencies by delaying loading of pre-bundled dependencies until all imported dependencies have been collected from static imported sources. Vite may switch to a different strategy in a future major release, setting `optimizeDeps.crawlUntilStaticImports: false` by default to avoid the performance hit in large applications during cold start.

`build` [​](#build)
-------------------

**Type Signature:**

ts

    async function build(
      inlineConfig?: InlineConfig,
    ): Promise<RollupOutput | RollupOutput[]>

**Example Usage:**

vite.config.js

ts

    import path from 'node:path'
    import { fileURLToPath } from 'node:url'
    import { build } from 'vite'
    
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    
    await build({
      root: path.resolve(__dirname, './project'),
      base: '/foo/',
      build: {
        rollupOptions: {
          // ...
        },
      },
    })

`preview` [​](#preview)
-----------------------

**Type Signature:**

ts

    async function preview(inlineConfig?: InlineConfig): Promise<PreviewServer>

**Example Usage:**

ts

    import { preview } from 'vite'
    
    const previewServer = await preview({
      // any valid user config options, plus `mode` and `configFile`
      preview: {
        port: 8080,
        open: true,
      },
    })
    
    previewServer.printUrls()
    previewServer.bindCLIShortcuts({ print: true })

`PreviewServer` [​](#previewserver)
-----------------------------------

ts

    interface PreviewServer {
      /**
       * The resolved vite config object
       */
      config: ResolvedConfig
      /**
       * A connect app instance.
       * - Can be used to attach custom middlewares to the preview server.
       * - Can also be used as the handler function of a custom http server
       *   or as a middleware in any connect-style Node.js frameworks
       *
       * https://github.com/senchalabs/connect#use-middleware
       */
      middlewares: Connect.Server
      /**
       * native Node http server instance
       */
      httpServer: http.Server
      /**
       * The resolved urls Vite prints on the CLI (URL-encoded). Returns `null`
       * if the server is not listening on any port.
       */
      resolvedUrls: ResolvedServerUrls | null
      /**
       * Print server urls
       */
      printUrls(): void
      /**
       * Bind CLI shortcuts
       */
      bindCLIShortcuts(options?: BindCLIShortcutsOptions<PreviewServer>): void
    }

`resolveConfig` [​](#resolveconfig)
-----------------------------------

**Type Signature:**

ts

    async function resolveConfig(
      inlineConfig: InlineConfig,
      command: 'build' | 'serve',
      defaultMode = 'development',
      defaultNodeEnv = 'development',
      isPreview = false,
    ): Promise<ResolvedConfig>

The `command` value is `serve` in dev and preview, and `build` in build.

`mergeConfig` [​](#mergeconfig)
-------------------------------

**Type Signature:**

ts

    function mergeConfig(
      defaults: Record<string, any>,
      overrides: Record<string, any>,
      isRoot = true,
    ): Record<string, any>

Deeply merge two Vite configs. `isRoot` represents the level within the Vite config which is being merged. For example, set `false` if you're merging two `build` options.

NOTE

`mergeConfig` accepts only config in object form. If you have a config in callback form, you should call it before passing into `mergeConfig`.

You can use the `defineConfig` helper to merge a config in callback form with another config:

ts

    export default defineConfig((configEnv) =>
      mergeConfig(configAsCallback(configEnv), configAsObject),
    )

`searchForWorkspaceRoot` [​](#searchforworkspaceroot)
-----------------------------------------------------

**Type Signature:**

ts

    function searchForWorkspaceRoot(
      current: string,
      root = searchForPackageRoot(current),
    ): string

**Related:** [server.fs.allow](/config/server-options#server-fs-allow)

Search for the root of the potential workspace if it meets the following conditions, otherwise it would fallback to `root`:

*   contains `workspaces` field in `package.json`
*   contains one of the following file
    *   `lerna.json`
    *   `pnpm-workspace.yaml`

`loadEnv` [​](#loadenv)
-----------------------

**Type Signature:**

ts

    function loadEnv(
      mode: string,
      envDir: string,
      prefixes: string | string[] = 'VITE_',
    ): Record<string, string>

**Related:** [`.env` Files](/guide/env-and-mode#env-files)

Load `.env` files within the `envDir`. By default, only env variables prefixed with `VITE_` are loaded, unless `prefixes` is changed.

`normalizePath` [​](#normalizepath)
-----------------------------------

**Type Signature:**

ts

    function normalizePath(id: string): string

**Related:** [Path Normalization](/guide/api-plugin#path-normalization)

Normalizes a path to interoperate between Vite plugins.

`transformWithEsbuild` [​](#transformwithesbuild)
-------------------------------------------------

**Type Signature:**

ts

    async function transformWithEsbuild(
      code: string,
      filename: string,
      options?: EsbuildTransformOptions,
      inMap?: object,
    ): Promise<ESBuildTransformResult>

Transform JavaScript or TypeScript with esbuild. Useful for plugins that prefer matching Vite's internal esbuild transform.

`loadConfigFromFile` [​](#loadconfigfromfile)
---------------------------------------------

**Type Signature:**

ts

    async function loadConfigFromFile(
      configEnv: ConfigEnv,
      configFile?: string,
      configRoot: string = process.cwd(),
      logLevel?: LogLevel,
      customLogger?: Logger,
    ): Promise<{
      path: string
      config: UserConfig
      dependencies: string[]
    } | null>

Load a Vite config file manually with esbuild.

`preprocessCSS` [​](#preprocesscss)
-----------------------------------

*   **Experimental:** [Give Feedback](https://github.com/vitejs/vite/discussions/13815)

**Type Signature:**

ts

    async function preprocessCSS(
      code: string,
      filename: string,
      config: ResolvedConfig,
    ): Promise<PreprocessCSSResult>
    
    interface PreprocessCSSResult {
      code: string
      map?: SourceMapInput
      modules?: Record<string, string>
      deps?: Set<string>
    }

Pre-processes `.css`, `.scss`, `.sass`, `.less`, `.styl` and `.stylus` files to plain CSS so it can be used in browsers or parsed by other tools. Similar to the [built-in CSS pre-processing support](/guide/features#css-pre-processors), the corresponding pre-processor must be installed if used.

The pre-processor used is inferred from the `filename` extension. If the `filename` ends with `.module.{ext}`, it is inferred as a [CSS module](https://github.com/css-modules/css-modules) and the returned result will include a `modules` object mapping the original class names to the transformed ones.

Note that pre-processing will not resolve URLs in `url()` or `image-set()`.

Configuring Vite [​](#configuring-vite)
=======================================

When running `vite` from the command line, Vite will automatically try to resolve a config file named `vite.config.js` inside [project root](/guide/#index-html-and-project-root) (other JS and TS extensions are also supported).

The most basic config file looks like this:

vite.config.js

js

    export default {
      // config options
    }

Note Vite supports using ES modules syntax in the config file even if the project is not using native Node ESM, e.g. `type: "module"` in `package.json`. In this case, the config file is auto pre-processed before load.

You can also explicitly specify a config file to use with the `--config` CLI option (resolved relative to `cwd`):

bash

    vite --config my-config.js

CONFIG LOADING

By default, Vite uses `esbuild` to bundle the config into a temporary file and load it. This may cause issues when importing TypeScript files in a monorepo. If you encounter any issues with this approach, you can specify `--configLoader runner` to use the [module runner](/guide/api-environment-runtimes#modulerunner) instead, which will not create a temporary config and will transform any files on the fly. Note that module runner doesn't support CJS in config files, but external CJS packages should work as usual.

Alternatively, if you're using an environment that supports TypeScript (e.g. `node --experimental-strip-types`), or if you're only writing plain JavaScript, you can specify `--configLoader native` to use the environment's native runtime to load the config file. Note that updates to modules imported by the config file are not detected and hence would not auto-restart the Vite server.

Config Intellisense [​](#config-intellisense)
---------------------------------------------

Since Vite ships with TypeScript typings, you can leverage your IDE's intellisense with jsdoc type hints:

js

    /** @type {import('vite').UserConfig} */
    export default {
      // ...
    }

Alternatively, you can use the `defineConfig` helper which should provide intellisense without the need for jsdoc annotations:

js

    import { defineConfig } from 'vite'
    
    export default defineConfig({
      // ...
    })

Vite also supports TypeScript config files. You can use `vite.config.ts` with the `defineConfig` helper function above, or with the `satisfies` operator:

ts

    import type { UserConfig } from 'vite'
    
    export default {
      // ...
    } satisfies UserConfig

Conditional Config [​](#conditional-config)
-------------------------------------------

If the config needs to conditionally determine options based on the command (`serve` or `build`), the [mode](/guide/env-and-mode#modes) being used, if it's an SSR build (`isSsrBuild`), or is previewing the build (`isPreview`), it can export a function instead:

js

    export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
      if (command === 'serve') {
        return {
          // dev specific config
        }
      } else {
        // command === 'build'
        return {
          // build specific config
        }
      }
    })

It is important to note that in Vite's API the `command` value is `serve` during dev (in the cli [`vite`](/guide/cli#vite), `vite dev`, and `vite serve` are aliases), and `build` when building for production ([`vite build`](/guide/cli#vite-build)).

`isSsrBuild` and `isPreview` are additional optional flags to differentiate the kind of `build` and `serve` commands respectively. Some tools that load the Vite config may not support these flags and will pass `undefined` instead. Hence, it's recommended to use explicit comparison against `true` and `false`.

Async Config [​](#async-config)
-------------------------------

If the config needs to call async functions, it can export an async function instead. And this async function can also be passed through `defineConfig` for improved intellisense support:

js

    export default defineConfig(async ({ command, mode }) => {
      const data = await asyncFunction()
      return {
        // vite config
      }
    })

Using Environment Variables in Config [​](#using-environment-variables-in-config)
---------------------------------------------------------------------------------

Environmental Variables can be obtained from `process.env` as usual.

Note that Vite doesn't load `.env` files by default as the files to load can only be determined after evaluating the Vite config, for example, the `root` and `envDir` options affect the loading behaviour. However, you can use the exported `loadEnv` helper to load the specific `.env` file if needed.

js

    import { defineConfig, loadEnv } from 'vite'
    
    export default defineConfig(({ mode }) => {
      // Load env file based on `mode` in the current working directory.
      // Set the third parameter to '' to load all env regardless of the
      // `VITE_` prefix.
      const env = loadEnv(mode, process.cwd(), '')
      return {
        // vite config
        define: {
          __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
      }
    })

Debugging the Config File on VS Code [​](#debugging-the-config-file-on-vs-code)
-------------------------------------------------------------------------------

With the default `--configLoader bundle` behavior, Vite writes the generated temporary configuration file to the `node_modules/.vite-temp` folder and a file not found error will occur when setting breakpoint debugging in the Vite config file. To fix the issue, add the following configuration to `.vscode/settings.json`:

json

    {
      "debug.javascript.terminalOptions": {
        "resolveSourceMapLocations": [
          "${workspaceFolder}/**",
          "!**/node_modules/**",
          "**/node_modules/.vite-temp/**"
        ]
      }
    }

Environment API [​](#environment-api)
=====================================

Experimental

Environment API is experimental. We'll keep the APIs stable during Vite 6 to let the ecosystem experiment and build on top of it. We're planning to stabilize these new APIs with potential breaking changes in Vite 7.

Resources:

*   [Feedback discussion](https://github.com/vitejs/vite/discussions/16358) where we are gathering feedback about the new APIs.
*   [Environment API PR](https://github.com/vitejs/vite/pull/16471) where the new API were implemented and reviewed.

Please share your feedback with us.

Formalizing Environments [​](#formalizing-environments)
-------------------------------------------------------

Vite 6 formalizes the concept of Environments. Until Vite 5, there were two implicit Environments (`client`, and optionally `ssr`). The new Environment API allows users and framework authors to create as many environments as needed to map the way their apps work in production. This new capability required a big internal refactoring, but a lot of effort has been placed on backward compatibility. The initial goal of Vite 6 is to move the ecosystem to the new major as smoothly as possible, delaying the adoption of these new experimental APIs until enough users have migrated and frameworks and plugin authors have validated the new design.

Closing the Gap Between Build and Dev [​](#closing-the-gap-between-build-and-dev)
---------------------------------------------------------------------------------

For a simple SPA/MPA, no new APIs around environments are exposed to the config. Internally, Vite will apply the options to a `client` environment, but it's not necessary to know of this concept when configuring Vite. The config and behavior from Vite 5 should work seamlessly here.

When we move to a typical server-side rendered (SSR) app, we'll have two environments:

*   `client`: runs the app in the browser.
*   `server`: runs the app in node (or other server runtimes) which renders pages before sending them to the browser.

In dev, Vite executes the server code in the same Node process as the Vite dev server, giving a close approximation to the production environment. However, it is also possible for servers to run in other JS runtimes, like [Cloudflare's workerd](https://github.com/cloudflare/workerd) which have different constraints. Modern apps may also run in more than two environments, e.g. a browser, a node server, and an edge server. Vite 5 didn't allow to properly represent these environments.

Vite 6 allows users to configure their app during build and dev to map all of its environments. During dev, a single Vite dev server can now be used to run code in multiple different environments concurrently. The app source code is still transformed by Vite dev server. On top of the shared HTTP server, middlewares, resolved config, and plugins pipeline, the Vite dev server now has a set of independent dev environments. Each of them is configured to match the production environment as closely as possible, and is connected to a dev runtime where the code is executed (for workerd, the server code can now run in miniflare locally). In the client, the browser imports and executes the code. In other environments, a module runner fetches and evaluates the transformed code.

Environments Configuration [​](#environments-configuration)
-----------------------------------------------------------

For an SPA/MPA, the configuration will look similar to Vite 5. Internally these options are used to configure the `client` environment.

js

    export default defineConfig({
      build: {
        sourcemap: false,
      },
      optimizeDeps: {
        include: ['lib'],
      },
    })

This is important because we'd like to keep Vite approachable and avoid exposing new concepts until they are needed.

If the app is composed of several environments, then these environments can be configured explicitly with the `environments` config option.

js

    export default {
      build: {
        sourcemap: false,
      },
      optimizeDeps: {
        include: ['lib'],
      },
      environments: {
        server: {},
        edge: {
          resolve: {
            noExternal: true,
          },
        },
      },
    }

When not explicitly documented, environment inherits the configured top-level config options (for example, the new `server` and `edge` environments will inherit the `build.sourcemap: false` option). A small number of top-level options, like `optimizeDeps`, only apply to the `client` environment, as they don't work well when applied as a default to server environments. The `client` environment can also be configured explicitly through `environments.client`, but we recommend to do it with the top-level options so the client config remains unchanged when adding new environments.

The `EnvironmentOptions` interface exposes all the per-environment options. There are environment options that apply to both `build` and `dev`, like `resolve`. And there are `DevEnvironmentOptions` and `BuildEnvironmentOptions` for dev and build specific options (like `dev.warmup` or `build.outDir`). Some options like `optimizeDeps` only applies to dev, but is kept as top level instead of nested in `dev` for backward compatibility.

ts

    interface EnvironmentOptions {
      define?: Record<string, any>
      resolve?: EnvironmentResolveOptions
      optimizeDeps: DepOptimizationOptions
      consumer?: 'client' | 'server'
      dev: DevOptions
      build: BuildOptions
    }

The `UserConfig` interface extends from the `EnvironmentOptions` interface, allowing to configure the client and defaults for other environments, configured through the `environments` option. The `client` and a server environment named `ssr` are always present during dev. This allows backward compatibility with `server.ssrLoadModule(url)` and `server.moduleGraph`. During build, the `client` environment is always present, and the `ssr` environment is only present if it is explicitly configured (using `environments.ssr` or for backward compatibility `build.ssr`). An app doesn't need to use the `ssr` name for its SSR environment, it could name it `server` for example.

ts

    interface UserConfig extends EnvironmentOptions {
      environments: Record<string, EnvironmentOptions>
      // other options
    }

Note that the `ssr` top-level property is going to be deprecated once the Environment API is stable. This option has the same role as `environments`, but for the default `ssr` environment and only allowed configuring of a small set of options.

Custom Environment Instances [​](#custom-environment-instances)
---------------------------------------------------------------

Low level configuration APIs are available so runtime providers can provide environments with proper defaults for their runtimes. These environments can also spawn other processes or threads to run the modules during dev in a closer runtime to the production environment.

js

    import { customEnvironment } from 'vite-environment-provider'
    
    export default {
      build: {
        outDir: '/dist/client',
      },
      environments: {
        ssr: customEnvironment({
          build: {
            outDir: '/dist/ssr',
          },
        }),
      },
    }

Backward Compatibility [​](#backward-compatibility)
---------------------------------------------------

The current Vite server API are not yet deprecated and are backward compatible with Vite 5. The new Environment API is experimental.

The `server.moduleGraph` returns a mixed view of the client and ssr module graphs. Backward compatible mixed module nodes will be returned from all its methods. The same scheme is used for the module nodes passed to `handleHotUpdate`.

We don't recommend switching to Environment API yet. We are aiming for a good portion of the user base to adopt Vite 6 before so plugins don't need to maintain two versions. Checkout the future breaking changes section for information on future deprecations and upgrade path:

*   [`this.environment` in Hooks](/changes/this-environment-in-hooks)
*   [HMR `hotUpdate` Plugin Hook](/changes/hotupdate-hook)
*   [Move to per-environment APIs](/changes/per-environment-apis)
*   [SSR using `ModuleRunner` API](/changes/ssr-using-modulerunner)
*   [Shared plugins during build](/changes/shared-plugins-during-build)

Target Users [​](#target-users)
-------------------------------

This guide provides the basic concepts about environments for end users.

Plugin authors have a more consistent API available to interact with the current environment configuration. If you're building on top of Vite, the [Environment API Plugins Guide](/guide/api-environment-plugins) guide describes the way extended plugin APIs available to support multiple custom environments.

Frameworks could decide to expose environments at different levels. If you're a framework author, continue reading the [Environment API Frameworks Guide](/guide/api-environment-frameworks) to learn about the Environment API programmatic side.

For Runtime providers, the [Environment API Runtimes Guide](/guide/api-environment-runtimes) explains how to offer custom environment to be consumed by frameworks and users.

Using `Environment` Instances [​](#using-environment-instances)
===============================================================

Experimental

Environment API is experimental. We'll keep the APIs stable during Vite 6 to let the ecosystem experiment and build on top of it. We're planning to stabilize these new APIs with potential breaking changes in Vite 7.

Resources:

*   [Feedback discussion](https://github.com/vitejs/vite/discussions/16358) where we are gathering feedback about the new APIs.
*   [Environment API PR](https://github.com/vitejs/vite/pull/16471) where the new API were implemented and reviewed.

Please share your feedback with us.

Accessing the Environments [​](#accessing-the-environments)
-----------------------------------------------------------

During dev, the available environments in a dev server can be accessed using `server.environments`:

js

    // create the server, or get it from the configureServer hook
    const server = await createServer(/* options */)
    
    const environment = server.environments.client
    environment.transformRequest(url)
    console.log(server.environments.ssr.moduleGraph)

You can also access the current environment from plugins. See the [Environment API for Plugins](/guide/api-environment-plugins#accessing-the-current-environment-in-hooks) for more details.

`DevEnvironment` class [​](#devenvironment-class)
-------------------------------------------------

During dev, each environment is an instance of the `DevEnvironment` class:

ts

    class DevEnvironment {
      /**
       * Unique identifier for the environment in a Vite server.
       * By default Vite exposes 'client' and 'ssr' environments.
       */
      name: string
      /**
       * Communication channel to send and receive messages from the
       * associated module runner in the target runtime.
       */
      hot: NormalizedHotChannel
      /**
       * Graph of module nodes, with the imported relationship between
       * processed modules and the cached result of the processed code.
       */
      moduleGraph: EnvironmentModuleGraph
      /**
       * Resolved plugins for this environment, including the ones
       * created using the per-environment `create` hook
       */
      plugins: Plugin[]
      /**
       * Allows to resolve, load, and transform code through the
       * environment plugins pipeline
       */
      pluginContainer: EnvironmentPluginContainer
      /**
       * Resolved config options for this environment. Options at the server
       * global scope are taken as defaults for all environments, and can
       * be overridden (resolve conditions, external, optimizedDeps)
       */
      config: ResolvedConfig & ResolvedDevEnvironmentOptions
    
      constructor(
        name: string,
        config: ResolvedConfig,
        context: DevEnvironmentContext,
      )
    
      /**
       * Resolve the URL to an id, load it, and process the code using the
       * plugins pipeline. The module graph is also updated.
       */
      async transformRequest(url: string): Promise<TransformResult | null>
    
      /**
       * Register a request to be processed with low priority. This is useful
       * to avoid waterfalls. The Vite server has information about the
       * imported modules by other requests, so it can warmup the module graph
       * so the modules are already processed when they are requested.
       */
      async warmupRequest(url: string): Promise<void>
    }

With `DevEnvironmentContext` being:

ts

    interface DevEnvironmentContext {
      hot: boolean
      transport?: HotChannel | WebSocketServer
      options?: EnvironmentOptions
      remoteRunner?: {
        inlineSourceMap?: boolean
      }
      depsOptimizer?: DepsOptimizer
    }

and with `TransformResult` being:

ts

    interface TransformResult {
      code: string
      map: SourceMap | { mappings: '' } | null
      etag?: string
      deps?: string[]
      dynamicDeps?: string[]
    }

An environment instance in the Vite server lets you process a URL using the `environment.transformRequest(url)` method. This function will use the plugin pipeline to resolve the `url` to a module `id`, load it (reading the file from the file system or through a plugin that implements a virtual module), and then transform the code. While transforming the module, imports and other metadata will be recorded in the environment module graph by creating or updating the corresponding module node. When processing is done, the transform result is also stored in the module.

transformRequest naming

We are using `transformRequest(url)` and `warmupRequest(url)` in the current version of this proposal so it is easier to discuss and understand for users used to Vite's current API. Before releasing, we can take the opportunity to review these names too. For example, it could be named `environment.processModule(url)` or `environment.loadModule(url)` taking a page from Rollup's `context.load(id)` in plugin hooks. For the moment, we think keeping the current names and delaying this discussion is better.

Separate Module Graphs [​](#separate-module-graphs)
---------------------------------------------------

Each environment has an isolated module graph. All module graphs have the same signature, so generic algorithms can be implemented to crawl or query the graph without depending on the environment. `hotUpdate` is a good example. When a file is modified, the module graph of each environment will be used to discover the affected modules and perform HMR for each environment independently.

INFO

Vite v5 had a mixed Client and SSR module graph. Given an unprocessed or invalidated node, it isn't possible to know if it corresponds to the Client, SSR, or both environments. Module nodes have some properties prefixed, like `clientImportedModules` and `ssrImportedModules` (and `importedModules` that returns the union of both). `importers` contains all importers from both the Client and SSR environment for each module node. A module node also has `transformResult` and `ssrTransformResult`. A backward compatibility layer allows the ecosystem to migrate from the deprecated `server.moduleGraph`.

Each module is represented by a `EnvironmentModuleNode` instance. Modules may be registered in the graph without yet being processed (`transformResult` would be `null` in that case). `importers` and `importedModules` are also updated after the module is processed.

ts

    class EnvironmentModuleNode {
      environment: string
    
      url: string
      id: string | null = null
      file: string | null = null
    
      type: 'js' | 'css'
    
      importers = new Set<EnvironmentModuleNode>()
      importedModules = new Set<EnvironmentModuleNode>()
      importedBindings: Map<string, Set<string>> | null = null
    
      info?: ModuleInfo
      meta?: Record<string, any>
      transformResult: TransformResult | null = null
    
      acceptedHmrDeps = new Set<EnvironmentModuleNode>()
      acceptedHmrExports: Set<string> | null = null
      isSelfAccepting?: boolean
      lastHMRTimestamp = 0
      lastInvalidationTimestamp = 0
    }

`environment.moduleGraph` is an instance of `EnvironmentModuleGraph`:

ts

    export class EnvironmentModuleGraph {
      environment: string
    
      urlToModuleMap = new Map<string, EnvironmentModuleNode>()
      idToModuleMap = new Map<string, EnvironmentModuleNode>()
      etagToModuleMap = new Map<string, EnvironmentModuleNode>()
      fileToModulesMap = new Map<string, Set<EnvironmentModuleNode>>()
    
      constructor(
        environment: string,
        resolveId: (url: string) => Promise<PartialResolvedId | null>,
      )
    
      async getModuleByUrl(
        rawUrl: string,
      ): Promise<EnvironmentModuleNode | undefined>
    
      getModuleById(id: string): EnvironmentModuleNode | undefined
    
      getModulesByFile(file: string): Set<EnvironmentModuleNode> | undefined
    
      onFileChange(file: string): void
    
      onFileDelete(file: string): void
    
      invalidateModule(
        mod: EnvironmentModuleNode,
        seen: Set<EnvironmentModuleNode> = new Set(),
        timestamp: number = Date.now(),
        isHmr: boolean = false,
      ): void
    
      invalidateAll(): void
    
      async ensureEntryFromUrl(
        rawUrl: string,
        setIsSelfAccepting = true,
      ): Promise<EnvironmentModuleNode>
    
      createFileOnlyEntry(file: string): EnvironmentModuleNode
    
      async resolveUrl(url: string): Promise<ResolvedUrl>
    
      updateModuleTransformResult(
        mod: EnvironmentModuleNode,
        result: TransformResult | null,
      ): void
    
      getModuleByEtag(etag: string): EnvironmentModuleNode | undefined
    }

Environment API for Plugins [​](#environment-api-for-plugins)
=============================================================

Experimental

Environment API is experimental. We'll keep the APIs stable during Vite 6 to let the ecosystem experiment and build on top of it. We're planning to stabilize these new APIs with potential breaking changes in Vite 7.

Resources:

*   [Feedback discussion](https://github.com/vitejs/vite/discussions/16358) where we are gathering feedback about the new APIs.
*   [Environment API PR](https://github.com/vitejs/vite/pull/16471) where the new API were implemented and reviewed.

Please share your feedback with us.

Accessing the Current Environment in Hooks [​](#accessing-the-current-environment-in-hooks)
-------------------------------------------------------------------------------------------

Given that there were only two Environments until Vite 6 (`client` and `ssr`), a `ssr` boolean was enough to identify the current environment in Vite APIs. Plugin Hooks received a `ssr` boolean in the last options parameter, and several APIs expected an optional last `ssr` parameter to properly associate modules to the correct environment (for example `server.moduleGraph.getModuleByUrl(url, { ssr })`).

With the advent of configurable environments, we now have a uniform way to access their options and instance in plugins. Plugin hooks now expose `this.environment` in their context, and APIs that previously expected a `ssr` boolean are now scoped to the proper environment (for example `environment.moduleGraph.getModuleByUrl(url)`).

The Vite server has a shared plugin pipeline, but when a module is processed it is always done in the context of a given environment. The `environment` instance is available in the plugin context.

A plugin could use the `environment` instance to change how a module is processed depending on the configuration for the environment (which can be accessed using `environment.config`).

ts

      transform(code, id) {
        console.log(this.environment.config.resolve.conditions)
      }

Registering New Environments Using Hooks [​](#registering-new-environments-using-hooks)
---------------------------------------------------------------------------------------

Plugins can add new environments in the `config` hook (for example to have a separate module graph for [RSC](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)):

ts

      config(config: UserConfig) {
        config.environments.rsc ??= {}
      }

An empty object is enough to register the environment, default values from the root level environment config.

Configuring Environment Using Hooks [​](#configuring-environment-using-hooks)
-----------------------------------------------------------------------------

While the `config` hook is running, the complete list of environments isn't yet known and the environments can be affected by both the default values from the root level environment config or explicitly through the `config.environments` record. Plugins should set default values using the `config` hook. To configure each environment, they can use the new `configEnvironment` hook. This hook is called for each environment with its partially resolved config including resolution of final defaults.

ts

      configEnvironment(name: string, options: EnvironmentOptions) {
        if (name === 'rsc') {
          options.resolve.conditions = // ...

The `hotUpdate` Hook [​](#the-hotupdate-hook)
---------------------------------------------

*   **Type:** `(this: { environment: DevEnvironment }, options: HotUpdateOptions) => Array<EnvironmentModuleNode> | void | Promise<Array<EnvironmentModuleNode> | void>`
*   **See also:** [HMR API](/guide/api-hmr)

The `hotUpdate` hook allows plugins to perform custom HMR update handling for a given environment. When a file changes, the HMR algorithm is run for each environment in series according to the order in `server.environments`, so the `hotUpdate` hook will be called multiple times. The hook receives a context object with the following signature:

ts

    interface HotUpdateOptions {
      type: 'create' | 'update' | 'delete'
      file: string
      timestamp: number
      modules: Array<EnvironmentModuleNode>
      read: () => string | Promise<string>
      server: ViteDevServer
    }

*   `this.environment` is the module execution environment where a file update is currently being processed.
    
*   `modules` is an array of modules in this environment that are affected by the changed file. It's an array because a single file may map to multiple served modules (e.g. Vue SFCs).
    
*   `read` is an async read function that returns the content of the file. This is provided because, on some systems, the file change callback may fire too fast before the editor finishes updating the file, and direct `fs.readFile` will return empty content. The read function passed in normalizes this behavior.
    

The hook can choose to:

*   Filter and narrow down the affected module list so that the HMR is more accurate.
    
*   Return an empty array and perform a full reload:
    
    js
    
        hotUpdate({ modules, timestamp }) {
          if (this.environment.name !== 'client')
            return
        
          // Invalidate modules manually
          const invalidatedModules = new Set()
          for (const mod of modules) {
            this.environment.moduleGraph.invalidateModule(
              mod,
              invalidatedModules,
              timestamp,
              true
            )
          }
          this.environment.hot.send({ type: 'full-reload' })
          return []
        }
    
*   Return an empty array and perform complete custom HMR handling by sending custom events to the client:
    
    js
    
        hotUpdate() {
          if (this.environment.name !== 'client')
            return
        
          this.environment.hot.send({
            type: 'custom',
            event: 'special-update',
            data: {}
          })
          return []
        }
    
    Client code should register the corresponding handler using the [HMR API](/guide/api-hmr) (this could be injected by the same plugin's `transform` hook):
    
    js
    
        if (import.meta.hot) {
          import.meta.hot.on('special-update', (data) => {
            // perform custom update
          })
        }
    

Per-environment Plugins [​](#per-environment-plugins)
-----------------------------------------------------

A plugin can define what are the environments it should apply to with the `applyToEnvironment` function.

js

    const UnoCssPlugin = () => {
      // shared global state
      return {
        buildStart() {
          // init per-environment state with WeakMap<Environment,Data>
          // using this.environment
        },
        configureServer() {
          // use global hooks normally
        },
        applyToEnvironment(environment) {
          // return true if this plugin should be active in this environment,
          // or return a new plugin to replace it.
          // if the hook is not used, the plugin is active in all environments
        },
        resolveId(id, importer) {
          // only called for environments this plugin apply to
        },
      }
    }

If a plugin isn't environment aware and has state that isn't keyed on the current environment, the `applyToEnvironment` hook allows to easily make it per-environment.

js

    import { nonShareablePlugin } from 'non-shareable-plugin'
    
    export default defineConfig({
      plugins: [
        {
          name: 'per-environment-plugin',
          applyToEnvironment(environment) {
            return nonShareablePlugin({ outputName: environment.name })
          },
        },
      ],
    })

Vite exports a `perEnvironmentPlugin` helper to simplify these cases where no other hooks are required:

js

    import { nonShareablePlugin } from 'non-shareable-plugin'
    
    export default defineConfig({
      plugins: [
        perEnvironmentPlugin('per-environment-plugin', (environment) =>
          nonShareablePlugin({ outputName: environment.name }),
        ),
      ],
    })

Environment in Build Hooks [​](#environment-in-build-hooks)
-----------------------------------------------------------

In the same way as during dev, plugin hooks also receive the environment instance during build, replacing the `ssr` boolean. This also works for `renderChunk`, `generateBundle`, and other build only hooks.

Shared Plugins During Build [​](#shared-plugins-during-build)
-------------------------------------------------------------

Before Vite 6, the plugins pipelines worked in a different way during dev and build:

*   **During dev:** plugins are shared
*   **During Build:** plugins are isolated for each environment (in different processes: `vite build` then `vite build --ssr`).

This forced frameworks to share state between the `client` build and the `ssr` build through manifest files written to the file system. In Vite 6, we are now building all environments in a single process so the way the plugins pipeline and inter-environment communication can be aligned with dev.

In a future major (Vite 7 or 8), we aim to have complete alignment:

*   **During both dev and build:** plugins are shared, with [per-environment filtering](#per-environment-plugins)

There will also be a single `ResolvedConfig` instance shared during build, allowing for caching at entire app build process level in the same way as we have been doing with `WeakMap<ResolvedConfig, CachedData>` during dev.

For Vite 6, we need to do a smaller step to keep backward compatibility. Ecosystem plugins are currently using `config.build` instead of `environment.config.build` to access configuration, so we need to create a new `ResolvedConfig` per-environment by default. A project can opt-in into sharing the full config and plugins pipeline setting `builder.sharedConfigBuild` to `true`.

This option would only work of a small subset of projects at first, so plugin authors can opt-in for a particular plugin to be shared by setting the `sharedDuringBuild` flag to `true`. This allows for easily sharing state both for regular plugins:

js

    function myPlugin() {
      // Share state among all environments in dev and build
      const sharedState = ...
      return {
        name: 'shared-plugin',
        transform(code, id) { ... },
    
        // Opt-in into a single instance for all environments
        sharedDuringBuild: true,
      }
    }

Environment API for Frameworks [​](#environment-api-for-frameworks)
===================================================================

Experimental

Environment API is experimental. We'll keep the APIs stable during Vite 6 to let the ecosystem experiment and build on top of it. We're planning to stabilize these new APIs with potential breaking changes in Vite 7.

Resources:

*   [Feedback discussion](https://github.com/vitejs/vite/discussions/16358) where we are gathering feedback about the new APIs.
*   [Environment API PR](https://github.com/vitejs/vite/pull/16471) where the new API were implemented and reviewed.

Please share your feedback with us.

Environments and frameworks [​](#environments-and-frameworks)
-------------------------------------------------------------

The implicit `ssr` environment and other non-client environments use a `RunnableDevEnvironment` by default during dev. While this requires the runtime to be the same with the one the Vite server is running in, this works similarly with `ssrLoadModule` and allows frameworks to migrate and enable HMR for their SSR dev story. You can guard any runnable environment with an `isRunnableDevEnvironment` function.

ts

    export class RunnableDevEnvironment extends DevEnvironment {
      public readonly runner: ModuleRunner
    }
    
    class ModuleRunner {
      /**
       * URL to execute.
       * Accepts file path, server path, or id relative to the root.
       * Returns an instantiated module (same as in ssrLoadModule)
       */
      public async import(url: string): Promise<Record<string, any>>
      /**
       * Other ModuleRunner methods...
       */
    }
    
    if (isRunnableDevEnvironment(server.environments.ssr)) {
      await server.environments.ssr.runner.import('/entry-point.js')
    }

WARNING

The `runner` is evaluated lazily only when it's accessed for the first time. Beware that Vite enables source map support when the `runner` is created by calling `process.setSourceMapsEnabled` or by overriding `Error.prepareStackTrace` if it's not available.

Frameworks that communicate with their runtime via the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) can utilize the `FetchableDevEnvironment` that provides a standardized way of handling requests via the `handleRequest` method:

ts

    import {
      createServer,
      createFetchableDevEnvironment,
      isFetchableDevEnvironment,
    } from 'vite'
    
    const server = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      environments: {
        custom: {
          dev: {
            createEnvironment(name, config) {
              return createFetchableDevEnvironment(name, config, {
                handleRequest(request: Request): Promise<Response> | Response {
                  // handle Request and return a Response
                },
              })
            },
          },
        },
      },
    })
    
    // Any consumer of the environment API can now call `dispatchFetch`
    if (isFetchableDevEnvironment(server.environments.custom)) {
      const response: Response = await server.environments.custom.dispatchFetch(
        new Request('/request-to-handle'),
      )
    }

WARNING

Vite validates the input and output of the `dispatchFetch` method: the request must be an instance of the global `Request` class and the response must be the instance of the global `Response` class. Vite will throw a `TypeError` if this is not the case.

Note that although the `FetchableDevEnvironment` is implemented as a class, it is considered an implementation detail by the Vite team and might change at any moment.

Default `RunnableDevEnvironment` [​](#default-runnabledevenvironment)
---------------------------------------------------------------------

Given a Vite server configured in middleware mode as described by the [SSR setup guide](/guide/ssr#setting-up-the-dev-server), let's implement the SSR middleware using the environment API. Error handling is omitted.

js

    import fs from 'node:fs'
    import path from 'node:path'
    import { fileURLToPath } from 'node:url'
    import { createServer } from 'vite'
    
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    
    const server = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      environments: {
        server: {
          // by default, modules are run in the same process as the vite server
        },
      },
    })
    
    // You might need to cast this to RunnableDevEnvironment in TypeScript or
    // use isRunnableDevEnvironment to guard the access to the runner
    const environment = server.environments.node
    
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl
    
      // 1. Read index.html
      const indexHtmlPath = path.resolve(__dirname, 'index.html')
      let template = fs.readFileSync(indexHtmlPath, 'utf-8')
    
      // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
      //    and also applies HTML transforms from Vite plugins, e.g. global
      //    preambles from @vitejs/plugin-react
      template = await server.transformIndexHtml(url, template)
    
      // 3. Load the server entry. import(url) automatically transforms
      //    ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides full HMR support.
      const { render } = await environment.runner.import('/src/entry-server.js')
    
      // 4. render the app HTML. This assumes entry-server.js's exported
      //     `render` function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const appHtml = await render(url)
    
      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)
    
      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    })

Runtime Agnostic SSR [​](#runtime-agnostic-ssr)
-----------------------------------------------

Since the `RunnableDevEnvironment` can only be used to run the code in the same runtime as the Vite server, it requires a runtime that can run the Vite Server (a runtime that is compatible with Node.js). This means that you will need to use the raw `DevEnvironment` to make it runtime agnostic.

`FetchableDevEnvironment` proposal

The initial proposal had a `run` method on the `DevEnvironment` class that would allow consumers to invoke an import on the runner side by using the `transport` option. During our testing we found out that the API was not universal enough to start recommending it. At the moment, we are looking for feedback on [the `FetchableDevEnvironment` proposal](https://github.com/vitejs/vite/discussions/18191).

`RunnableDevEnvironment` has a `runner.import` function that returns the value of the module. But this function is not available in the raw `DevEnvironment` and requires the code using the Vite's APIs and the user modules to be decoupled.

For example, the following example uses the value of the user module from the code using the Vite's APIs:

ts

    // code using the Vite's APIs
    import { createServer } from 'vite'
    
    const server = createServer()
    const ssrEnvironment = server.environment.ssr
    const input = {}
    
    const { createHandler } = await ssrEnvironment.runner.import('./entrypoint.js')
    const handler = createHandler(input)
    const response = handler(new Request('/'))
    
    // -------------------------------------
    // ./entrypoint.js
    export function createHandler(input) {
      return function handler(req) {
        return new Response('hello')
      }
    }

If your code can run in the same runtime as the user modules (i.e., it does not rely on Node.js-specific APIs), you can use a virtual module. This approach eliminates the need to access the value from the code using Vite's APIs.

ts

    // code using the Vite's APIs
    import { createServer } from 'vite'
    
    const server = createServer({
      plugins: [
        // a plugin that handles `virtual:entrypoint`
        {
          name: 'virtual-module',
          /* plugin implementation */
        },
      ],
    })
    const ssrEnvironment = server.environment.ssr
    const input = {}
    
    // use exposed functions by each environment factories that runs the code
    // check for each environment factories what they provide
    if (ssrEnvironment instanceof RunnableDevEnvironment) {
      ssrEnvironment.runner.import('virtual:entrypoint')
    } else if (ssrEnvironment instanceof CustomDevEnvironment) {
      ssrEnvironment.runEntrypoint('virtual:entrypoint')
    } else {
      throw new Error(`Unsupported runtime for ${ssrEnvironment.name}`)
    }
    
    // -------------------------------------
    // virtual:entrypoint
    const { createHandler } = await import('./entrypoint.js')
    const handler = createHandler(input)
    const response = handler(new Request('/'))
    
    // -------------------------------------
    // ./entrypoint.js
    export function createHandler(input) {
      return function handler(req) {
        return new Response('hello')
      }
    }

For example, to call `transformIndexHtml` on the user module, the following plugin can be used:

ts

    function vitePluginVirtualIndexHtml(): Plugin {
      let server: ViteDevServer | undefined
      return {
        name: vitePluginVirtualIndexHtml.name,
        configureServer(server_) {
          server = server_
        },
        resolveId(source) {
          return source === 'virtual:index-html' ? '\0' + source : undefined
        },
        async load(id) {
          if (id === '\0' + 'virtual:index-html') {
            let html: string
            if (server) {
              this.addWatchFile('index.html')
              html = fs.readFileSync('index.html', 'utf-8')
              html = await server.transformIndexHtml('/', html)
            } else {
              html = fs.readFileSync('dist/client/index.html', 'utf-8')
            }
            return `export default ${JSON.stringify(html)}`
          }
          return
        },
      }
    }

If your code requires Node.js APIs, you can use `hot.send` to communicate with the code that uses Vite's APIs from the user modules. However, be aware that this approach may not work the same way after the build process.

ts

    // code using the Vite's APIs
    import { createServer } from 'vite'
    
    const server = createServer({
      plugins: [
        // a plugin that handles `virtual:entrypoint`
        {
          name: 'virtual-module',
          /* plugin implementation */
        },
      ],
    })
    const ssrEnvironment = server.environment.ssr
    const input = {}
    
    // use exposed functions by each environment factories that runs the code
    // check for each environment factories what they provide
    if (ssrEnvironment instanceof RunnableDevEnvironment) {
      ssrEnvironment.runner.import('virtual:entrypoint')
    } else if (ssrEnvironment instanceof CustomDevEnvironment) {
      ssrEnvironment.runEntrypoint('virtual:entrypoint')
    } else {
      throw new Error(`Unsupported runtime for ${ssrEnvironment.name}`)
    }
    
    const req = new Request('/')
    
    const uniqueId = 'a-unique-id'
    ssrEnvironment.send('request', serialize({ req, uniqueId }))
    const response = await new Promise((resolve) => {
      ssrEnvironment.on('response', (data) => {
        data = deserialize(data)
        if (data.uniqueId === uniqueId) {
          resolve(data.res)
        }
      })
    })
    
    // -------------------------------------
    // virtual:entrypoint
    const { createHandler } = await import('./entrypoint.js')
    const handler = createHandler(input)
    
    import.meta.hot.on('request', (data) => {
      const { req, uniqueId } = deserialize(data)
      const res = handler(req)
      import.meta.hot.send('response', serialize({ res: res, uniqueId }))
    })
    
    const response = handler(new Request('/'))
    
    // -------------------------------------
    // ./entrypoint.js
    export function createHandler(input) {
      return function handler(req) {
        return new Response('hello')
      }
    }

Environments During Build [​](#environments-during-build)
---------------------------------------------------------

In the CLI, calling `vite build` and `vite build --ssr` will still build the client only and ssr only environments for backward compatibility.

When `builder` is not `undefined` (or when calling `vite build --app`), `vite build` will opt-in into building the entire app instead. This would later on become the default in a future major. A `ViteBuilder` instance will be created (build-time equivalent to a `ViteDevServer`) to build all configured environments for production. By default the build of environments is run in series respecting the order of the `environments` record. A framework or user can further configure how the environments are built using:

js

    export default {
      builder: {
        buildApp: async (builder) => {
          const environments = Object.values(builder.environments)
          return Promise.all(
            environments.map((environment) => builder.build(environment)),
          )
        },
      },
    }

Environment Agnostic Code [​](#environment-agnostic-code)
---------------------------------------------------------

Most of the time, the current `environment` instance will be available as part of the context of the code being run so the need to access them through `server.environments` should be rare. For example, inside plugin hooks the environment is exposed as part of the `PluginContext`, so it can be accessed using `this.environment`. See [Environment API for Plugins](/guide/api-environment-plugins) to learn about how to build environment aware plugins.

Environment API for Runtimes [​](#environment-api-for-runtimes)
===============================================================

Experimental

Environment API is experimental. We'll keep the APIs stable during Vite 6 to let the ecosystem experiment and build on top of it. We're planning to stabilize these new APIs with potential breaking changes in Vite 7.

Resources:

*   [Feedback discussion](https://github.com/vitejs/vite/discussions/16358) where we are gathering feedback about the new APIs.
*   [Environment API PR](https://github.com/vitejs/vite/pull/16471) where the new API were implemented and reviewed.

Please share your feedback with us.

Environment Factories [​](#environment-factories)
-------------------------------------------------

Environments factories are intended to be implemented by Environment providers like Cloudflare, and not by end users. Environment factories return a `EnvironmentOptions` for the most common case of using the target runtime for both dev and build environments. The default environment options can also be set so the user doesn't need to do it.

ts

    function createWorkerdEnvironment(
      userConfig: EnvironmentOptions,
    ): EnvironmentOptions {
      return mergeConfig(
        {
          resolve: {
            conditions: [
              /*...*/
            ],
          },
          dev: {
            createEnvironment(name, config) {
              return createWorkerdDevEnvironment(name, config, {
                hot: true,
                transport: customHotChannel(),
              })
            },
          },
          build: {
            createEnvironment(name, config) {
              return createWorkerdBuildEnvironment(name, config)
            },
          },
        },
        userConfig,
      )
    }

Then the config file can be written as:

js

    import { createWorkerdEnvironment } from 'vite-environment-workerd'
    
    export default {
      environments: {
        ssr: createWorkerdEnvironment({
          build: {
            outDir: '/dist/ssr',
          },
        }),
        rsc: createWorkerdEnvironment({
          build: {
            outDir: '/dist/rsc',
          },
        }),
      },
    }

and frameworks can use an environment with the workerd runtime to do SSR using:

js

    const ssrEnvironment = server.environments.ssr

Creating a New Environment Factory [​](#creating-a-new-environment-factory)
---------------------------------------------------------------------------

A Vite dev server exposes two environments by default: a `client` environment and an `ssr` environment. The client environment is a browser environment by default, and the module runner is implemented by importing the virtual module `/@vite/client` to client apps. The SSR environment runs in the same Node runtime as the Vite server by default and allows application servers to be used to render requests during dev with full HMR support.

The transformed source code is called a module, and the relationships between the modules processed in each environment are kept in a module graph. The transformed code for these modules is sent to the runtimes associated with each environment to be executed. When a module is evaluated in the runtime, its imported modules will be requested triggering the processing of a section of the module graph.

A Vite Module Runner allows running any code by processing it with Vite plugins first. It is different from `server.ssrLoadModule` because the runner implementation is decoupled from the server. This allows library and framework authors to implement their layer of communication between the Vite server and the runner. The browser communicates with its corresponding environment using the server Web Socket and through HTTP requests. The Node Module runner can directly do function calls to process modules as it is running in the same process. Other environments could run modules connecting to a JS runtime like workerd, or a Worker Thread as Vitest does.

One of the goals of this feature is to provide a customizable API to process and run code. Users can create new environment factories using the exposed primitives.

ts

    import { DevEnvironment, HotChannel } from 'vite'
    
    function createWorkerdDevEnvironment(
      name: string,
      config: ResolvedConfig,
      context: DevEnvironmentContext
    ) {
      const connection = /* ... */
      const transport: HotChannel = {
        on: (listener) => { connection.on('message', listener) },
        send: (data) => connection.send(data),
      }
    
      const workerdDevEnvironment = new DevEnvironment(name, config, {
        options: {
          resolve: { conditions: ['custom'] },
          ...context.options,
        },
        hot: true,
        transport,
      })
      return workerdDevEnvironment
    }

`ModuleRunner` [​](#modulerunner)
---------------------------------

A module runner is instantiated in the target runtime. All APIs in the next section are imported from `vite/module-runner` unless stated otherwise. This export entry point is kept as lightweight as possible, only exporting the minimal needed to create module runners.

**Type Signature:**

ts

    export class ModuleRunner {
      constructor(
        public options: ModuleRunnerOptions,
        public evaluator: ModuleEvaluator = new ESModulesEvaluator(),
        private debug?: ModuleRunnerDebugger,
      ) {}
      /**
       * URL to execute.
       * Accepts file path, server path, or id relative to the root.
       */
      public async import<T = any>(url: string): Promise<T>
      /**
       * Clear all caches including HMR listeners.
       */
      public clearCache(): void
      /**
       * Clear all caches, remove all HMR listeners, reset sourcemap support.
       * This method doesn't stop the HMR connection.
       */
      public async close(): Promise<void>
      /**
       * Returns `true` if the runner has been closed by calling `close()`.
       */
      public isClosed(): boolean
    }

The module evaluator in `ModuleRunner` is responsible for executing the code. Vite exports `ESModulesEvaluator` out of the box, it uses `new AsyncFunction` to evaluate the code. You can provide your own implementation if your JavaScript runtime doesn't support unsafe evaluation.

Module runner exposes `import` method. When Vite server triggers `full-reload` HMR event, all affected modules will be re-executed. Be aware that Module Runner doesn't update `exports` object when this happens (it overrides it), you would need to run `import` or get the module from `evaluatedModules` again if you rely on having the latest `exports` object.

**Example Usage:**

js

    import { ModuleRunner, ESModulesEvaluator } from 'vite/module-runner'
    import { transport } from './rpc-implementation.js'
    
    const moduleRunner = new ModuleRunner(
      {
        transport,
      },
      new ESModulesEvaluator(),
    )
    
    await moduleRunner.import('/src/entry-point.js')

`ModuleRunnerOptions` [​](#modulerunneroptions)
-----------------------------------------------

ts

    interface ModuleRunnerOptions {
      /**
       * A set of methods to communicate with the server.
       */
      transport: ModuleRunnerTransport
      /**
       * Configure how source maps are resolved.
       * Prefers `node` if `process.setSourceMapsEnabled` is available.
       * Otherwise it will use `prepareStackTrace` by default which overrides
       * `Error.prepareStackTrace` method.
       * You can provide an object to configure how file contents and
       * source maps are resolved for files that were not processed by Vite.
       */
      sourcemapInterceptor?:
        | false
        | 'node'
        | 'prepareStackTrace'
        | InterceptorOptions
      /**
       * Disable HMR or configure HMR options.
       *
       * @default true
       */
      hmr?: boolean | ModuleRunnerHmr
      /**
       * Custom module cache. If not provided, it creates a separate module
       * cache for each module runner instance.
       */
      evaluatedModules?: EvaluatedModules
    }

`ModuleEvaluator` [​](#moduleevaluator)
---------------------------------------

**Type Signature:**

ts

    export interface ModuleEvaluator {
      /**
       * Number of prefixed lines in the transformed code.
       */
      startOffset?: number
      /**
       * Evaluate code that was transformed by Vite.
       * @param context Function context
       * @param code Transformed code
       * @param id ID that was used to fetch the module
       */
      runInlinedModule(
        context: ModuleRunnerContext,
        code: string,
        id: string,
      ): Promise<any>
      /**
       * evaluate externalized module.
       * @param file File URL to the external module
       */
      runExternalModule(file: string): Promise<any>
    }

Vite exports `ESModulesEvaluator` that implements this interface by default. It uses `new AsyncFunction` to evaluate code, so if the code has inlined source map it should contain an [offset of 2 lines](https://tc39.es/ecma262/#sec-createdynamicfunction) to accommodate for new lines added. This is done automatically by the `ESModulesEvaluator`. Custom evaluators will not add additional lines.

`ModuleRunnerTransport` [​](#modulerunnertransport)
---------------------------------------------------

**Type Signature:**

ts

    interface ModuleRunnerTransport {
      connect?(handlers: ModuleRunnerTransportHandlers): Promise<void> | void
      disconnect?(): Promise<void> | void
      send?(data: HotPayload): Promise<void> | void
      invoke?(data: HotPayload): Promise<{ result: any } | { error: any }>
      timeout?: number
    }

Transport object that communicates with the environment via an RPC or by directly calling the function. When `invoke` method is not implemented, the `send` method and `connect` method is required to be implemented. Vite will construct the `invoke` internally.

You need to couple it with the `HotChannel` instance on the server like in this example where module runner is created in the worker thread:

worker.jsserver.js

js

    import { parentPort } from 'node:worker_threads'
    import { fileURLToPath } from 'node:url'
    import { ESModulesEvaluator, ModuleRunner } from 'vite/module-runner'
    
    /** @type {import('vite/module-runner').ModuleRunnerTransport} */
    const transport = {
      connect({ onMessage, onDisconnection }) {
        parentPort.on('message', onMessage)
        parentPort.on('close', onDisconnection)
      },
      send(data) {
        parentPort.postMessage(data)
      },
    }
    
    const runner = new ModuleRunner(
      {
        transport,
      },
      new ESModulesEvaluator(),
    )

js

    import { BroadcastChannel } from 'node:worker_threads'
    import { createServer, RemoteEnvironmentTransport, DevEnvironment } from 'vite'
    
    function createWorkerEnvironment(name, config, context) {
      const worker = new Worker('./worker.js')
      const handlerToWorkerListener = new WeakMap()
    
      const workerHotChannel = {
        send: (data) => worker.postMessage(data),
        on: (event, handler) => {
          if (event === 'connection') return
    
          const listener = (value) => {
            if (value.type === 'custom' && value.event === event) {
              const client = {
                send(payload) {
                  worker.postMessage(payload)
                },
              }
              handler(value.data, client)
            }
          }
          handlerToWorkerListener.set(handler, listener)
          worker.on('message', listener)
        },
        off: (event, handler) => {
          if (event === 'connection') return
          const listener = handlerToWorkerListener.get(handler)
          if (listener) {
            worker.off('message', listener)
            handlerToWorkerListener.delete(handler)
          }
        },
      }
    
      return new DevEnvironment(name, config, {
        transport: workerHotChannel,
      })
    }
    
    await createServer({
      environments: {
        worker: {
          dev: {
            createEnvironment: createWorkerEnvironment,
          },
        },
      },
    })

A different example using an HTTP request to communicate between the runner and the server:

ts

    import { ESModulesEvaluator, ModuleRunner } from 'vite/module-runner'
    
    export const runner = new ModuleRunner(
      {
        transport: {
          async invoke(data) {
            const response = await fetch(`http://my-vite-server/invoke`, {
              method: 'POST',
              body: JSON.stringify(data),
            })
            return response.json()
          },
        },
        hmr: false, // disable HMR as HMR requires transport.connect
      },
      new ESModulesEvaluator(),
    )
    
    await runner.import('/entry.js')

In this case, the `handleInvoke` method in the `NormalizedHotChannel` can be used:

ts

    const customEnvironment = new DevEnvironment(name, config, context)
    
    server.onRequest((request: Request) => {
      const url = new URL(request.url)
      if (url.pathname === '/invoke') {
        const payload = (await request.json()) as HotPayload
        const result = customEnvironment.hot.handleInvoke(payload)
        return new Response(JSON.stringify(result))
      }
      return Response.error()
    })

But note that for HMR support, `send` and `connect` methods are required. The `send` method is usually called when the custom event is triggered (like, `import.meta.hot.send("my-event")`).

Vite exports `createServerHotChannel` from the main entry point to support HMR during Vite SSR.