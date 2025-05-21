vitest version: 3.1.4, last updated: 2025-05-21T10:58:23.891Z

Why Vitest [​](#why-vitest)
===========================

NOTE

This guide assumes that you are familiar with Vite. A good way to start learning more is to read the [Why Vite Guide](https://vitejs.dev/guide/why), and [Next generation frontend tooling with ViteJS](https://www.youtube.com/watch?v=UJypSr8IhKY), a stream where [Evan You](https://bsky.app/profile/evanyou.me) did a demo explaining the main concepts.

The Need for a Vite Native Test Runner [​](#the-need-for-a-vite-native-test-runner)
-----------------------------------------------------------------------------------

Vite's out-of-the-box support for common web patterns, features like glob imports and SSR primitives, and its many plugins and integrations are fostering a vibrant ecosystem. Its dev and build story are key to its success. For docs, there are several SSG-based alternatives powered by Vite. Vite's Unit Testing story hasn't been clear though. Existing options like [Jest](https://jestjs.io/) were created in a different context. There is a lot of duplication between Jest and Vite, forcing users to configure two different pipelines.

Using Vite dev server to transform your files during testing, enables the creation of a simple runner that doesn't need to deal with the complexity of transforming source files and can solely focus on providing the best DX during testing. A test runner that uses the same configuration of your App (through `vite.config.js`), sharing a common transformation pipeline during dev, build, and test time. That is extensible with the same plugin API that lets you and the maintainers of your tools provide first-class integration with Vite. A tool that is built with Vite in mind from the start, taking advantage of its improvements in DX, like its instant Hot Module Reload (HMR). This is Vitest, a next generation testing framework powered by Vite.

Given Jest's massive adoption, Vitest provides a compatible API that allows you to use it as a drop-in replacement in most projects. It also includes the most common features required when setting up your unit tests (mocking, snapshots, coverage). Vitest cares a lot about performance and uses Worker threads to run as much as possible in parallel. Some ports have seen test running an order of magnitude faster. Watch mode is enabled by default, aligning itself with the way Vite pushes for a dev first experience. Even with all these improvements in DX, Vitest stays lightweight by carefully choosing its dependencies (or directly inlining needed pieces).

**Vitest aims to position itself as the Test Runner of choice for Vite projects, and as a solid alternative even for projects not using Vite.**

Continue reading in the [Getting Started Guide](/guide/)

How is Vitest Different from X? [​](#how-is-vitest-different-from-x)
--------------------------------------------------------------------

You can check out the [Comparisons](/guide/comparisons) section for more details on how Vitest differs from other similar tools.

Getting Started [​](#getting-started)
=====================================

Overview [​](#overview)
-----------------------

Vitest (pronounced as _"veetest"_) is a next generation testing framework powered by Vite.

You can learn more about the rationale behind the project in the [Why Vitest](/guide/why) section.

Trying Vitest Online [​](#trying-vitest-online)
-----------------------------------------------

You can try Vitest online on [StackBlitz](https://vitest.new). It runs Vitest directly in the browser, and it is almost identical to the local setup but doesn't require installing anything on your machine.

Adding Vitest to Your Project [​](#adding-vitest-to-your-project)
-----------------------------------------------------------------

[

Learn how to install by Video](https://vueschool.io/lessons/how-to-install-vitest?friend=vueuse)

npmyarnpnpmbun

bash

    npm install -D vitest

bash

    yarn add -D vitest

bash

    pnpm add -D vitest

bash

    bun add -D vitest

TIP

Vitest requires Vite >=v5.0.0 and Node >=v18.0.0

It is recommended that you install a copy of `vitest` in your `package.json`, using one of the methods listed above. However, if you would prefer to run `vitest` directly, you can use `npx vitest` (the `npx` tool comes with npm and Node.js).

The `npx` tool will execute the specified command. By default, `npx` will first check if the command exists in the local project's binaries. If it is not found there, `npx` will look in the system's `$PATH` and execute it if found. If the command is not found in either location, `npx` will install it in a temporary location prior to execution.

Writing Tests [​](#writing-tests)
---------------------------------

As an example, we will write a simple test that verifies the output of a function that adds two numbers.

sum.js

js

    export function sum(a, b) {
      return a + b
    }

sum.test.js

js

    import { expect, test } from 'vitest'
    import { sum } from './sum.js'
    
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })

TIP

By default, tests must contain `.test.` or `.spec.` in their file name.

Next, in order to execute the test, add the following section to your `package.json`:

package.json

json

    {
      "scripts": {
        "test": "vitest"
      }
    }

Finally, run `npm run test`, `yarn test` or `pnpm test`, depending on your package manager, and Vitest will print this message:

txt

    ✓ sum.test.js (1)
      ✓ adds 1 + 2 to equal 3
    
    Test Files  1 passed (1)
         Tests  1 passed (1)
      Start at  02:15:44
      Duration  311ms

WARNING

If you are using Bun as your package manager, make sure to use `bun run test` command instead of `bun test`, otherwise Bun will run its own test runner.

Learn more about the usage of Vitest, see the [API](https://vitest.dev/api/) section.

Configuring Vitest [​](#configuring-vitest)
-------------------------------------------

One of the main advantages of Vitest is its unified configuration with Vite. If present, `vitest` will read your root `vite.config.ts` to match with the plugins and setup as your Vite app. For example, your Vite [resolve.alias](https://vitejs.dev/config/shared-options.html#resolve-alias) and [plugins](https://vitejs.dev/guide/using-plugins) configuration will work out-of-the-box. If you want a different configuration during testing, you can:

*   Create `vitest.config.ts`, which will have the higher priority
*   Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`
*   Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test` if not overridden) to conditionally apply different configuration in `vite.config.ts`

Vitest supports the same extensions for your configuration file as Vite does: `.js`, `.mjs`, `.cjs`, `.ts`, `.cts`, `.mts`. Vitest does not support `.json` extension.

If you are not using Vite as your build tool, you can configure Vitest using the `test` property in your config file:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        // ...
      },
    })

TIP

Even if you do not use Vite yourself, Vitest relies heavily on it for its transformation pipeline. For that reason, you can also configure any property described in [Vite documentation](https://vitejs.dev/config/).

If you are already using Vite, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file.

vite.config.ts

ts

    /// <reference types="vitest" />
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        // ...
      },
    })

The `<reference types="vitest" />` will stop working in the next major update, but you can start migrating to `vitest/config` in Vitest 2.1:

vite.config.ts

ts

    /// <reference types="vitest/config" />
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        // ... Specify options here.
      },
    })

See the list of config options in the [Config Reference](./../config/)

WARNING

If you decide to have two separate config files for Vite and Vitest, make sure to define the same Vite options in your Vitest config file since it will override your Vite file, not extend it. You can also use `mergeConfig` method from `vite` or `vitest/config` entries to merge Vite config with Vitest config:

vitest.config.mjsvite.config.mjs

ts

    import { defineConfig, mergeConfig } from 'vitest/config'
    import viteConfig from './vite.config.mjs'
    
    export default mergeConfig(viteConfig, defineConfig({
      test: {
        // ...
      },
    }))

ts

    import { defineConfig } from 'vite'
    import Vue from '@vitejs/plugin-vue'
    
    export default defineConfig({
      plugins: [Vue()],
    })

However, we recommend using the same file for both Vite and Vitest, instead of creating two separate files.

Projects Support [​](#projects-support)
---------------------------------------

Run different project configurations inside the same project with [Test Projects](/guide/projects). You can define a list of files and folders that define your projects in `vitest.config` file.

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: [
          // you can use a list of glob patterns to define your projects
          // Vitest expects a list of config files
          // or directories where there is a config file
          'packages/*',
          'tests/*/vitest.config.{e2e,unit}.ts',
          // you can even run the same tests,
          // but with different configs in the same "vitest" process
          {
            test: {
              name: 'happy-dom',
              root: './shared_tests',
              environment: 'happy-dom',
              setupFiles: ['./setup.happy-dom.ts'],
            },
          },
          {
            test: {
              name: 'node',
              root: './shared_tests',
              environment: 'node',
              setupFiles: ['./setup.node.ts'],
            },
          },
        ],
      },
    })

Command Line Interface [​](#command-line-interface)
---------------------------------------------------

In a project where Vitest is installed, you can use the `vitest` binary in your npm scripts, or run it directly with `npx vitest`. Here are the default npm scripts in a scaffolded Vitest project:

package.json

json

    {
      "scripts": {
        "test": "vitest",
        "coverage": "vitest run --coverage"
      }
    }

To run tests once without watching for file changes, use `vitest run`. You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options, run `npx vitest --help` in your project.

Learn more about the [Command Line Interface](/guide/cli)

Automatic Dependency Installation [​](#automatic-dependency-installation)
-------------------------------------------------------------------------

Vitest will prompt you to install certain dependencies if they are not already installed. You can disable this behavior by setting the `VITEST_SKIP_INSTALL_CHECKS=1` environment variable.

IDE Integrations [​](#ide-integrations)
---------------------------------------

We also provided an official extension for Visual Studio Code to enhance your testing experience with Vitest.

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

Learn more about [IDE Integrations](/guide/ide)

Examples [​](#examples)
-----------------------

Example

Source

Playground

`basic`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/basic)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/basic?initialPath=__vitest__/)

`fastify`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/fastify)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/fastify?initialPath=__vitest__/)

`in-source-test`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/in-source-test?initialPath=__vitest__/)

`lit`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/lit)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/lit?initialPath=__vitest__/)

`vue`

[GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/vue)

[Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/vue?initialPath=__vitest__/)

`marko`

[GitHub](https://github.com/marko-js/examples/tree/master/examples/library-ts)

[Play Online](https://stackblitz.com/fork/github/marko-js/examples/tree/master/examples/library-ts/)

`preact`

[GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/preact)

[Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/preact?initialPath=__vitest__/)

`react`

[GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/react)

[Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/react?initialPath=__vitest__/)

`solid`

[GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/solid)

[Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/solid?initialPath=__vitest__/)

`svelte`

[GitHub](https://github.com/vitest-tests/browser-examples/tree/main/examples/svelte)

[Play Online](https://stackblitz.com/fork/github/vitest-tests/browser-examples/tree/main/examples/svelte?initialPath=__vitest__/)

`sveltekit`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/sveltekit)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/sveltekit?initialPath=__vitest__/)

`profiling`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/profiling)

Not Available

`typecheck`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/typecheck)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/typecheck?initialPath=__vitest__/)

`projects`

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/projects)

[Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/projects?initialPath=__vitest__/)

Projects using Vitest [​](#projects-using-vitest)
-------------------------------------------------

*   [unocss](https://github.com/unocss/unocss)
*   [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
*   [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
*   [vue](https://github.com/vuejs/core)
*   [vite](https://github.com/vitejs/vite)
*   [vitesse](https://github.com/antfu/vitesse)
*   [vitesse-lite](https://github.com/antfu/vitesse-lite)
*   [fluent-vue](https://github.com/demivan/fluent-vue)
*   [vueuse](https://github.com/vueuse/vueuse)
*   [milkdown](https://github.com/Saul-Mirone/milkdown)
*   [gridjs-svelte](https://github.com/iamyuu/gridjs-svelte)
*   [spring-easing](https://github.com/okikio/spring-easing)
*   [bytemd](https://github.com/bytedance/bytemd)
*   [faker](https://github.com/faker-js/faker)
*   [million](https://github.com/aidenybai/million)
*   [Vitamin](https://github.com/wtchnm/Vitamin)
*   [neodrag](https://github.com/PuruVJ/neodrag)
*   [svelte-multiselect](https://github.com/janosh/svelte-multiselect)
*   [iconify](https://github.com/iconify/iconify)
*   [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next)
*   [cz-git](https://github.com/Zhengqbbb/cz-git)

Using Unreleased Commits [​](#using-unreleased-commits)
-------------------------------------------------------

Each commit on main branch and a PR with a `cr-tracked` label are published to [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new). You can install it by `npm i https://pkg.pr.new/vitest@{commit}`.

If you want to test your own modification locally, you can build and link it yourself ([pnpm](https://pnpm.io/) is required):

bash

    git clone https://github.com/vitest-dev/vitest.git
    cd vitest
    pnpm install
    cd packages/vitest
    pnpm run build
    pnpm link --global # you can use your preferred package manager for this step

Then go to the project where you are using Vitest and run `pnpm link --global vitest` (or the package manager that you used to link `vitest` globally).

Community [​](#community)
-------------------------

If you have questions or need help, reach out to the community at [Discord](https://chat.vitest.dev) and [GitHub Discussions](https://github.com/vitest-dev/vitest/discussions).

Features [​](#features)
=======================

*   [Vite](https://vitejs.dev)'s config, transformers, resolvers, and plugins
    
*   Use the same setup from your app to run the tests!
    
*   Smart & instant watch mode, like HMR for tests!
    
*   Component testing for Vue, React, Svelte, Lit, Marko and more
    
*   Out-of-the-box TypeScript / JSX support
    
*   ESM first, top level await
    
*   Workers multi-threading via [Tinypool](https://github.com/tinylibs/tinypool)
    
*   Benchmarking support with [Tinybench](https://github.com/tinylibs/tinybench)
    
*   Filtering, timeouts, concurrent for suite and tests
    
*   [Projects](/guide/projects) support
    
*   [Jest-compatible Snapshot](/guide/snapshot)
    
*   [Chai](https://www.chaijs.com/) built-in for assertions + [Jest expect](https://jestjs.io/docs/expect) compatible APIs
    
*   [Tinyspy](https://github.com/tinylibs/tinyspy) built-in for mocking
    
*   [happy-dom](https://github.com/capricorn86/happy-dom) or [jsdom](https://github.com/jsdom/jsdom) for DOM mocking
    
*   [Browser Mode](https://vitest.dev/guide/browser/) for running component tests in the browser
    
*   Code coverage via [v8](https://v8.dev/blog/javascript-code-coverage) or [istanbul](https://istanbul.js.org/)
    
*   Rust-like [in-source testing](/guide/in-source)
    
*   Type Testing via [expect-type](https://github.com/mmkal/expect-type)
    
*   Sharding Support
    
*   Reporting Uncaught Errors
    

[

Learn how to write your first test by Video](https://vueschool.io/lessons/your-first-test?friend=vueuse)

Shared Config between Test, Dev and Build [​](#shared-config-between-test-dev-and-build)
----------------------------------------------------------------------------------------

Vite's config, transformers, resolvers, and plugins. Use the same setup from your app to run the tests.

Learn more at [Configuring Vitest](/guide/#configuring-vitest).

Watch Mode [​](#watch-mode)
---------------------------

bash

    $ vitest

When you modify your source code or the test files, Vitest smartly searches the module graph and only reruns the related tests, just like how HMR works in Vite!

`vitest` starts in `watch mode` **by default in development environment** and `run mode` in CI environment (when `process.env.CI` presents) smartly. You can use `vitest watch` or `vitest run` to explicitly specify the desired mode.

Start Vitest with the `--standalone` flag to keep it running in the background. It won't run any tests until they change. Vitest will not run tests if the source code is changed until the test that imports the source has been run

Common Web Idioms Out-Of-The-Box [​](#common-web-idioms-out-of-the-box)
-----------------------------------------------------------------------

Out-of-the-box ES Module / TypeScript / JSX support / PostCSS

Threads [​](#threads)
---------------------

By default Vitest runs test files in [multiple processes](/guide/parallelism) using [`node:child_process`](https://nodejs.org/api/child_process.html) via [Tinypool](https://github.com/tinylibs/tinypool) (a lightweight fork of [Piscina](https://github.com/piscinajs/piscina)), allowing tests to run simultaneously. If you want to speed up your test suite even further, consider enabling `--pool=threads` to run tests using [`node:worker_threads`](https://nodejs.org/api/worker_threads.html) (beware that some packages might not work with this setup).

To run tests in a single thread or process, see [`poolOptions`](/config/#pooloptions).

Vitest also isolates each file's environment so env mutations in one file don't affect others. Isolation can be disabled by passing `--no-isolate` to the CLI (trading correctness for run performance).

Test Filtering [​](#test-filtering)
-----------------------------------

Vitest provides many ways to narrow down the tests to run in order to speed up testing so you can focus on development.

Learn more about [Test Filtering](/guide/filtering).

Running Tests Concurrently [​](#running-tests-concurrently)
-----------------------------------------------------------

Use `.concurrent` in consecutive tests to start them in parallel.

ts

    import { describe, it } from 'vitest'
    
    // The two tests marked with concurrent will be started in parallel
    describe('suite', () => {
      it('serial test', async () => { /* ... */ })
      it.concurrent('concurrent test 1', async ({ expect }) => { /* ... */ })
      it.concurrent('concurrent test 2', async ({ expect }) => { /* ... */ })
    })

If you use `.concurrent` on a suite, every test in it will be started in parallel.

ts

    import { describe, it } from 'vitest'
    
    // All tests within this suite will be started in parallel
    describe.concurrent('suite', () => {
      it('concurrent test 1', async ({ expect }) => { /* ... */ })
      it('concurrent test 2', async ({ expect }) => { /* ... */ })
      it.concurrent('concurrent test 3', async ({ expect }) => { /* ... */ })
    })

You can also use `.skip`, `.only`, and `.todo` with concurrent suites and tests. Read more in the [API Reference](/api/#test-concurrent).

WARNING

When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.

Snapshot [​](#snapshot)
-----------------------

[Jest-compatible](https://jestjs.io/docs/snapshot-testing) snapshot support.

ts

    import { expect, it } from 'vitest'
    
    it('renders correctly', () => {
      const result = render()
      expect(result).toMatchSnapshot()
    })

Learn more at [Snapshot](/guide/snapshot).

Chai and Jest `expect` Compatibility [​](#chai-and-jest-expect-compatibility)
-----------------------------------------------------------------------------

[Chai](https://www.chaijs.com/) is built-in for assertions with [Jest `expect`](https://jestjs.io/docs/expect)\-compatible APIs.

Notice that if you are using third-party libraries that add matchers, setting [`test.globals`](/config/#globals) to `true` will provide better compatibility.

Mocking [​](#mocking)
---------------------

[Tinyspy](https://github.com/tinylibs/tinyspy) is built-in for mocking with `jest`\-compatible APIs on `vi` object.

ts

    import { expect, vi } from 'vitest'
    
    const fn = vi.fn()
    
    fn('hello', 1)
    
    expect(vi.isMockFunction(fn)).toBe(true)
    expect(fn.mock.calls[0]).toEqual(['hello', 1])
    
    fn.mockImplementation((arg: string) => arg)
    
    fn('world', 2)
    
    expect(fn.mock.results[1].value).toBe('world')

Vitest supports both [happy-dom](https://github.com/capricorn86/happy-dom) or [jsdom](https://github.com/jsdom/jsdom) for mocking DOM and browser APIs. They don't come with Vitest, you will need to install them separately:

happy-domjsdom

bash

    $ npm i -D happy-dom

bash

    $ npm i -D jsdom

After that, change the `environment` option in your config file:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        environment: 'happy-dom', // or 'jsdom', 'node'
      },
    })

Learn more at [Mocking](/guide/mocking).

Coverage [​](#coverage)
-----------------------

Vitest supports Native code coverage via [`v8`](https://v8.dev/blog/javascript-code-coverage) and instrumented code coverage via [`istanbul`](https://istanbul.js.org/).

package.json

json

    {
      "scripts": {
        "test": "vitest",
        "coverage": "vitest run --coverage"
      }
    }

Learn more at [Coverage](/guide/coverage).

In-Source Testing [​](#in-source-testing)
-----------------------------------------

Vitest also provides a way to run tests within your source code along with the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings the feedback loop closer for development.

src/index.ts

ts

    // the implementation
    export function add(...args: number[]): number {
      return args.reduce((a, b) => a + b, 0)
    }
    
    // in-source test suites
    if (import.meta.vitest) {
      const { it, expect } = import.meta.vitest
      it('add', () => {
        expect(add()).toBe(0)
        expect(add(1)).toBe(1)
        expect(add(1, 2, 3)).toBe(6)
      })
    }

Learn more at [In-source testing](/guide/in-source).

Benchmarking Experimental [​](#benchmarking)
--------------------------------------------

You can run benchmark tests with [`bench`](/api/#bench) function via [Tinybench](https://github.com/tinylibs/tinybench) to compare performance results.

sort.bench.ts

ts

    import { bench, describe } from 'vitest'
    
    describe('sort', () => {
      bench('normal', () => {
        const x = [1, 5, 4, 2, 3]
        x.sort((a, b) => {
          return a - b
        })
      })
    
      bench('reverse', () => {
        const x = [1, 5, 4, 2, 3]
        x.reverse().sort((a, b) => {
          return a - b
        })
      })
    })

Type Testing Experimental [​](#type-testing)
--------------------------------------------

You can [write tests](/guide/testing-types) to catch type regressions. Vitest comes with [`expect-type`](https://github.com/mmkal/expect-type) package to provide you with a similar and easy to understand API.

types.test-d.ts

ts

    import { assertType, expectTypeOf, test } from 'vitest'
    import { mount } from './mount.js'
    
    test('my types work properly', () => {
      expectTypeOf(mount).toBeFunction()
      expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()
    
      // @ts-expect-error name is a string
      assertType(mount({ name: 42 }))
    })

Sharding [​](#sharding)
-----------------------

Run tests on different machines using [`--shard`](/guide/cli#shard) and [`--reporter=blob`](/guide/reporters#blob-reporter) flags. All test and coverage results can be merged at the end of your CI pipeline using `--merge-reports` command:

bash

    vitest --shard=1/2 --reporter=blob --coverage
    vitest --shard=2/2 --reporter=blob --coverage
    vitest --merge-reports --reporter=junit --coverage

See [`Improving Performance | Sharding`](/guide/improving-performance#sharding) for more information.

Environment Variables [​](#environment-variables)
-------------------------------------------------

Vitest exclusively autoloads environment variables prefixed with `VITE_` from `.env` files to maintain compatibility with frontend-related tests, adhering to [Vite's established convention](https://vitejs.dev/guide/env-and-mode.html#env-files). To load every environmental variable from `.env` files anyway, you can use `loadEnv` method imported from `vite`:

vitest.config.ts

ts

    import { loadEnv } from 'vite'
    import { defineConfig } from 'vitest/config'
    
    export default defineConfig(({ mode }) => ({
      test: {
        // mode defines what ".env.{mode}" file to choose if exists
        env: loadEnv(mode, process.cwd(), ''),
      },
    }))

Unhandled Errors [​](#unhandled-errors)
---------------------------------------

By default, Vitest catches and reports all [unhandled rejections](https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event), [uncaught exceptions](https://nodejs.org/api/process.html#event-uncaughtexception) (in Node.js) and [error](https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event) events (in the [browser](/guide/browser/)).

You can disable this behaviour by catching them manually. Vitest assumes the callback is handled by you and won't report the error.

setup.node.jssetup.browser.js

ts

    // in Node.js
    process.on('unhandledRejection', () => {
      // your own handler
    })
    
    process.on('uncaughtException', () => {
      // your own handler
    })

ts

    // in the browser
    window.addEventListener('error', () => {
      // your own handler
    })
    
    window.addEventListener('unhandledrejection', () => {
      // your own handler
    })

Alternatively, you can also ignore reported errors with a [`dangerouslyIgnoreUnhandledErrors`](/config/#dangerouslyignoreunhandlederrors) option. Vitest will still report them, but they won't affect the test result (exit code won't be changed).

If you need to test that error was not caught, you can create a test that looks like this:

ts

    test('my function throws uncaught error', async ({ onTestFinished }) => {
      onTestFinished(() => {
        // if the event was never called during the test,
        // make sure it's removed before the next test starts
        process.removeAllListeners('unhandledrejection')
      })
    
      return new Promise((resolve, reject) => {
        process.once('unhandledrejection', (error) => {
          try {
            expect(error.message).toBe('my error')
            resolve()
          }
          catch (error) {
            reject(error)
          }
        })
    
        callMyFunctionThatRejectsError()
      })
    })

Configuring Vitest [​](#configuring-vitest)
===========================================

If you are using Vite and have a `vite.config` file, Vitest will read it to match with the plugins and setup as your Vite app. If you want to have a different configuration for testing or your main app doesn't rely on Vite specifically, you could either:

*   Create `vitest.config.ts`, which will have the higher priority and will **override** the configuration from `vite.config.ts` (Vitest supports all conventional JS and TS extensions, but doesn't support `json`) - it means all options in your `vite.config` will be **ignored**
*   Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`
*   Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test`/`benchmark` if not overridden with `--mode`) to conditionally apply different configuration in `vite.config.ts`

To configure `vitest` itself, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file, if you are importing `defineConfig` from `vite` itself.

Open Config Examples

Using `defineConfig` from `vite` you should follow this:

vite.config.js

ts

    /// <reference types="vitest" />
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        // ... Specify options here.
      },
    })

The `<reference types="vitest" />` will stop working in Vitest 4, but you can already start migrating to `vitest/config`:

vite.config.js

ts

    /// <reference types="vitest/config" />
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        // ... Specify options here.
      },
    })

Using `defineConfig` from `vitest/config` you should follow this:

vitest.config.js

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        // ... Specify options here.
      },
    })

You can retrieve Vitest's default options to expand them if needed:

vitest.config.js

ts

    import { configDefaults, defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        exclude: [...configDefaults.exclude, 'packages/template/*'],
      },
    })

When using a separate `vitest.config.js`, you can also extend Vite's options from another config file if needed:

vitest.config.js

ts

    import { defineConfig, mergeConfig } from 'vitest/config'
    import viteConfig from './vite.config'
    
    export default mergeConfig(viteConfig, defineConfig({
      test: {
        exclude: ['packages/template/*'],
      },
    }))

If your Vite config is defined as a function, you can define the config like this:

vitest.config.js

ts

    import { defineConfig, mergeConfig } from 'vitest/config'
    import viteConfig from './vite.config'
    
    export default defineConfig(configEnv => mergeConfig(
      viteConfig(configEnv),
      defineConfig({
        test: {
          exclude: ['packages/template/*'],
        },
      })
    ))

WARNING

_All listed options_ on this page are located within a `test` property inside the configuration:

vitest.config.js

ts

    export default defineConfig({
      test: {
        exclude: [],
      },
    })

Since Vitest uses Vite config, you can also use any configuration option from [Vite](https://vitejs.dev/config/). For example, `define` to define global variables, or `resolve.alias` to define aliases - these options should be defined on the top level, _not_ within a `test` property.

Configuration options that are not supported inside a [project](/guide/projects) config have \* sign next to them. This means they can only be set in the root Vitest config.

### include [​](#include)

*   **Type:** `string[]`
*   **Default:** `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
*   **CLI:** `vitest [...include]`, `vitest **/*.test.js`

A list of glob patterns that match your test files.

NOTE

When using coverage, Vitest automatically adds test files `include` patterns to coverage's default `exclude` patterns. See [`coverage.exclude`](#coverage-exclude).

### exclude [​](#exclude)

*   **Type:** `string[]`
*   **Default:** `['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*']`
*   **CLI:** `vitest --exclude "**/excluded-file"`

A list of glob patterns that should be excluded from your test files.

WARNING

This option does not affect coverage. If you need to remove certain files from the coverage report, use [`coverage.exclude`](#coverage-exclude).

This is the only option that doesn't override your configuration if you provide it with a CLI flag. All glob patterns added via `--exclude` flag will be added to the config's `exclude`.

### includeSource [​](#includesource)

*   **Type:** `string[]`
*   **Default:** `[]`

Include globs for in-source test files.

When defined, Vitest will run all matched files with `import.meta.vitest` inside.

### name [​](#name)

*   **Type:** `string | { label: string, color?: LabelColor }`

Assign a custom name to the test project or Vitest process. The name will be visible in the CLI and UI, and available in the Node.js API via [`project.name`](/advanced/api/test-project#name).

Color used by CLI and UI can be changed by providing an object with `color` property.

### server [​](#server)

*   **Type:** `{ sourcemap?, deps?, ... }`

Vite-Node server options.

#### server.sourcemap [​](#server-sourcemap)

*   **Type:** `'inline' | boolean`
*   **Default:** `'inline'`

Inject inline source map to modules.

#### server.debug [​](#server-debug)

*   **Type:** `{ dumpModules?, loadDumppedModules? }`

Vite-Node debugger options.

#### server.debug.dumpModules [​](#server-debug-dumpmodules)

*   **Type:** `boolean | string`

Dump the transformed module to filesystem. Passing a string will dump to the specified path.

#### server.debug.loadDumppedModules [​](#server-debug-loaddumppedmodules)

*   **Type:** `boolean`

Read dumped module from filesystem whenever exists. Useful for debugging by modifying the dump result from the filesystem.

#### server.deps [​](#server-deps)

*   **Type:** `{ external?, inline?, ... }`

Handling for dependencies resolution.

#### server.deps.external [​](#server-deps-external)

*   **Type:** `(string | RegExp)[]`
*   **Default:** `[/\/node_modules\//]`

Externalize means that Vite will bypass the package to the native Node. Externalized dependencies will not be applied to Vite's transformers and resolvers, so they do not support HMR on reload. By default, all packages inside `node_modules` are externalized.

These options support package names as they are written in `node_modules` or specified inside [`deps.moduleDirectories`](#deps-moduledirectories). For example, package `@company/some-name` located inside `packages/some-name` should be specified as `some-name`, and `packages` should be included in `deps.moduleDirectories`. Basically, Vitest always checks the file path, not the actual package name.

If regexp is used, Vitest calls it on the _file path_, not the package name.

#### server.deps.inline [​](#server-deps-inline)

*   **Type:** `(string | RegExp)[] | true`
*   **Default:** `[]`

Vite will process inlined modules. This could be helpful to handle packages that ship `.js` in ESM format (that Node can't handle).

If `true`, every dependency will be inlined. All dependencies, specified in [`ssr.noExternal`](https://vitejs.dev/guide/ssr.html#ssr-externals) will be inlined by default.

#### server.deps.fallbackCJS [​](#server-deps-fallbackcjs)

*   **Type** `boolean`
*   **Default:** `false`

When a dependency is a valid ESM package, try to guess the cjs version based on the path. This might be helpful, if a dependency has the wrong ESM file.

This might potentially cause some misalignment if a package has different logic in ESM and CJS mode.

#### server.deps.cacheDir [​](#server-deps-cachedir)

*   **Type** `string`
*   **Default**: `'node_modules/.vite'`

Directory to save cache files.

### deps [​](#deps)

*   **Type:** `{ optimizer?, ... }`

Handling for dependencies resolution.

#### deps.optimizer [​](#deps-optimizer)

*   **Type:** `{ ssr?, web? }`
*   **See also:** [Dep Optimization Options](https://vitejs.dev/config/dep-optimization-options.html)

Enable dependency optimization. If you have a lot of tests, this might improve their performance.

When Vitest encounters the external library listed in `include`, it will be bundled into a single file using esbuild and imported as a whole module. This is good for several reasons:

*   Importing packages with a lot of imports is expensive. By bundling them into one file we can save a lot of time
*   Importing UI libraries is expensive because they are not meant to run inside Node.js
*   Your `alias` configuration is now respected inside bundled packages
*   Code in your tests is running closer to how it's running in the browser

Be aware that only packages in `deps.optimizer?.[mode].include` option are bundled (some plugins populate this automatically, like Svelte). You can read more about available options in [Vite](https://vitejs.dev/config/dep-optimization-options.html) docs (Vitest doesn't support `disable` and `noDiscovery` options). By default, Vitest uses `optimizer.web` for `jsdom` and `happy-dom` environments, and `optimizer.ssr` for `node` and `edge` environments, but it is configurable by [`transformMode`](#testtransformmode).

This options also inherits your `optimizeDeps` configuration (for web Vitest will extend `optimizeDeps`, for ssr - `ssr.optimizeDeps`). If you redefine `include`/`exclude` option in `deps.optimizer` it will extend your `optimizeDeps` when running tests. Vitest automatically removes the same options from `include`, if they are listed in `exclude`.

TIP

You will not be able to edit your `node_modules` code for debugging, since the code is actually located in your `cacheDir` or `test.cache.dir` directory. If you want to debug with `console.log` statements, edit it directly or force rebundling with `deps.optimizer?.[mode].force` option.

#### deps.optimizer.{mode}.enabled [​](#deps-optimizer-mode-enabled)

*   **Type:** `boolean`
*   **Default:** `false`

Enable dependency optimization.

#### deps.web [​](#deps-web)

*   **Type:** `{ transformAssets?, ... }`

Options that are applied to external files when transform mode is set to `web`. By default, `jsdom` and `happy-dom` use `web` mode, while `node` and `edge` environments use `ssr` transform mode, so these options will have no affect on files inside those environments.

Usually, files inside `node_modules` are externalized, but these options also affect files in [`server.deps.external`](#server-deps-external).

#### deps.web.transformAssets [​](#deps-web-transformassets)

*   **Type:** `boolean`
*   **Default:** `true`

Should Vitest process assets (.png, .svg, .jpg, etc) files and resolve them like Vite does in the browser.

This module will have a default export equal to the path to the asset, if no query is specified.

WARNING

At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.

#### deps.web.transformCss [​](#deps-web-transformcss)

*   **Type:** `boolean`
*   **Default:** `true`

Should Vitest process CSS (.css, .scss, .sass, etc) files and resolve them like Vite does in the browser.

If CSS files are disabled with [`css`](#css) options, this option will just silence `ERR_UNKNOWN_FILE_EXTENSION` errors.

WARNING

At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.

#### deps.web.transformGlobPattern [​](#deps-web-transformglobpattern)

*   **Type:** `RegExp | RegExp[]`
*   **Default:** `[]`

Regexp pattern to match external files that should be transformed.

By default, files inside `node_modules` are externalized and not transformed, unless it's CSS or an asset, and corresponding option is not disabled.

WARNING

At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.

#### deps.interopDefault [​](#deps-interopdefault)

*   **Type:** `boolean`
*   **Default:** `true`

Interpret CJS module's default as named exports. Some dependencies only bundle CJS modules and don't use named exports that Node.js can statically analyze when a package is imported using `import` syntax instead of `require`. When importing such dependencies in Node environment using named exports, you will see this error:

    import { read } from 'fs-jetpack';
             ^^^^
    SyntaxError: Named export 'read' not found. The requested module 'fs-jetpack' is a CommonJS module, which may not support all module.exports as named exports.
    CommonJS modules can always be imported via the default export.

Vitest doesn't do static analysis, and cannot fail before your running code, so you will most likely see this error when running tests, if this feature is disabled:

    TypeError: createAsyncThunk is not a function
    TypeError: default is not a function

By default, Vitest assumes you are using a bundler to bypass this and will not fail, but you can disable this behaviour manually, if you code is not processed.

#### deps.moduleDirectories [​](#deps-moduledirectories)

*   **Type:** `string[]`
*   **Default**: `['node_modules']`

A list of directories that should be treated as module directories. This config option affects the behavior of [`vi.mock`](/api/vi#vi-mock): when no factory is provided and the path of what you are mocking matches one of the `moduleDirectories` values, Vitest will try to resolve the mock by looking for a `__mocks__` folder in the [root](#root) of the project.

This option will also affect if a file should be treated as a module when externalizing dependencies. By default, Vitest imports external modules with native Node.js bypassing Vite transformation step.

Setting this option will _override_ the default, if you wish to still search `node_modules` for packages include it along with any other options:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        deps: {
          moduleDirectories: ['node_modules', path.resolve('../../packages')],
        }
      },
    })

### runner [​](#runner)

*   **Type**: `VitestRunnerConstructor`
*   **Default**: `node`, when running tests, or `benchmark`, when running benchmarks

Path to a custom test runner. This is an advanced feature and should be used with custom library runners. You can read more about it in [the documentation](/advanced/runner).

### benchmark [​](#benchmark)

*   **Type:** `{ include?, exclude?, ... }`

Options used when running `vitest bench`.

#### benchmark.include [​](#benchmark-include)

*   **Type:** `string[]`
*   **Default:** `['**/*.{bench,benchmark}.?(c|m)[jt]s?(x)']`

Include globs for benchmark test files

#### benchmark.exclude [​](#benchmark-exclude)

*   **Type:** `string[]`
*   **Default:** `['node_modules', 'dist', '.idea', '.git', '.cache']`

Exclude globs for benchmark test files

#### benchmark.includeSource [​](#benchmark-includesource)

*   **Type:** `string[]`
*   **Default:** `[]`

Include globs for in-source benchmark test files. This option is similar to [`includeSource`](#includesource).

When defined, Vitest will run all matched files with `import.meta.vitest` inside.

#### benchmark.reporters [​](#benchmark-reporters)

*   **Type:** `Arrayable<BenchmarkBuiltinReporters | Reporter>`
*   **Default:** `'default'`

Custom reporter for output. Can contain one or more built-in report names, reporter instances, and/or paths to custom reporters.

#### benchmark.outputFile [​](#benchmark-outputfile)

Deprecated in favor of `benchmark.outputJson`.

#### benchmark.outputJson [​](#benchmark-outputJson)

*   **Type:** `string | undefined`
*   **Default:** `undefined`

A file path to store the benchmark result, which can be used for `--compare` option later.

For example:

sh

    # save main branch's result
    git checkout main
    vitest bench --outputJson main.json
    
    # change a branch and compare against main
    git checkout feature
    vitest bench --compare main.json

#### benchmark.compare [​](#benchmark-compare)

*   **Type:** `string | undefined`
*   **Default:** `undefined`

A file path to a previous benchmark result to compare against current runs.

### alias [​](#alias)

*   **Type:** `Record<string, string> | Array<{ find: string | RegExp, replacement: string, customResolver?: ResolverFunction | ResolverObject }>`

Define custom aliases when running inside tests. They will be merged with aliases from `resolve.alias`.

WARNING

Vitest uses Vite SSR primitives to run tests which has [certain pitfalls](https://vitejs.dev/guide/ssr.html#ssr-externals).

1.  Aliases affect only modules imported directly with an `import` keyword by an [inlined](#server-deps-inline) module (all source code is inlined by default).
2.  Vitest does not support aliasing `require` calls.
3.  If you are aliasing an external dependency (e.g., `react` -> `preact`), you may want to alias the actual `node_modules` packages instead to make it work for externalized dependencies. Both [Yarn](https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias) and [pnpm](https://pnpm.io/aliases/) support aliasing via the `npm:` prefix.

### globals [​](#globals)

*   **Type:** `boolean`
*   **Default:** `false`
*   **CLI:** `--globals`, `--globals=false`

By default, `vitest` does not provide global APIs for explicitness. If you prefer to use the APIs globally like Jest, you can pass the `--globals` option to CLI or add `globals: true` in the config.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        globals: true,
      },
    })

To get TypeScript working with the global APIs, add `vitest/globals` to the `types` field in your `tsconfig.json`

tsconfig.json

json

    {
      "compilerOptions": {
        "types": ["vitest/globals"]
      }
    }

If you have redefined your [`typeRoots`](https://www.typescriptlang.org/tsconfig/#typeRoots) to include more types in your compilation, you will have to add back the `node_modules` to make `vitest/globals` discoverable.

tsconfig.json

json

    {
      "compilerOptions": {
        "typeRoots": ["./types", "./node_modules/@types", "./node_modules"],
        "types": ["vitest/globals"]
      }
    }

If you are already using [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) in your project, you can also use it directly for auto importing those APIs.

vitest.config.js

ts

    import { defineConfig } from 'vitest/config'
    import AutoImport from 'unplugin-auto-import/vite'
    
    export default defineConfig({
      plugins: [
        AutoImport({
          imports: ['vitest'],
          dts: true, // generate TypeScript declaration
        }),
      ],
    })

### environment [​](#environment)

*   **Type:** `'node' | 'jsdom' | 'happy-dom' | 'edge-runtime' | string`
*   **Default:** `'node'`
*   **CLI:** `--environment=<env>`

The environment that will be used for testing. The default environment in Vitest is a Node.js environment. If you are building a web application, you can use browser-like environment through either [`jsdom`](https://github.com/jsdom/jsdom) or [`happy-dom`](https://github.com/capricorn86/happy-dom) instead. If you are building edge functions, you can use [`edge-runtime`](https://edge-runtime.vercel.app/packages/vm) environment

TIP

You can also use [Browser Mode](/guide/browser/) to run integration or unit tests in the browser without mocking the environment.

By adding a `@vitest-environment` docblock or comment at the top of the file, you can specify another environment to be used for all tests in that file:

Docblock style:

js

    /**
     * @vitest-environment jsdom
     */
    
    test('use jsdom in this test file', () => {
      const element = document.createElement('div')
      expect(element).not.toBeNull()
    })

Comment style:

js

    // @vitest-environment happy-dom
    
    test('use happy-dom in this test file', () => {
      const element = document.createElement('div')
      expect(element).not.toBeNull()
    })

For compatibility with Jest, there is also a `@jest-environment`:

js

    /**
     * @jest-environment jsdom
     */
    
    test('use jsdom in this test file', () => {
      const element = document.createElement('div')
      expect(element).not.toBeNull()
    })

If you are running Vitest with [`--isolate=false`](#isolate) flag, your tests will be run in this order: `node`, `jsdom`, `happy-dom`, `edge-runtime`, `custom environments`. Meaning, that every test with the same environment is grouped, but is still running sequentially.

Starting from 0.23.0, you can also define custom environment. When non-builtin environment is used, Vitest will try to load package `vitest-environment-${name}`. That package should export an object with the shape of `Environment`:

environment.js

ts

    import type { Environment } from 'vitest'
    
    export default <Environment>{
      name: 'custom',
      transformMode: 'ssr',
      setup() {
        // custom setup
        return {
          teardown() {
            // called after all tests with this env have been run
          }
        }
      }
    }

Vitest also exposes `builtinEnvironments` through `vitest/environments` entry, in case you just want to extend it. You can read more about extending environments in [our guide](/guide/environment).

TIP

jsdom environment exposes `jsdom` global variable equal to the current [JSDOM](https://github.com/jsdom/jsdom) instance. If you want TypeScript to recognize it, you can add `vitest/jsdom` to your `tsconfig.json` when you use this environment:

tsconfig.json

json

    {
      "compilerOptions": {
        "types": ["vitest/jsdom"]
      }
    }

### environmentOptions [​](#environmentoptions)

*   **Type:** `Record<'jsdom' | string, unknown>`
*   **Default:** `{}`

These options are passed down to `setup` method of current [`environment`](#environment). By default, you can configure only JSDOM options, if you are using it as your test environment.

### environmentMatchGlobs [​](#environmentmatchglobs)

*   **Type:** `[string, EnvironmentName][]`
*   **Default:** `[]`

DEPRECATED

This API was deprecated in Vitest 3. Use [projects](/guide/projects) to define different configurations instead.

ts

    export default defineConfig({
      test: {
        environmentMatchGlobs: [ 
          ['./*.jsdom.test.ts', 'jsdom'], 
        ], 
        projects: [ 
          { 
            extends: true, 
            test: { 
              environment: 'jsdom', 
            }, 
          }, 
        ], 
      },
    })

Automatically assign environment based on globs. The first match will be used.

For example:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        environmentMatchGlobs: [
          // all tests in tests/dom will run in jsdom
          ['tests/dom/**', 'jsdom'],
          // all tests in tests/ with .edge.test.ts will run in edge-runtime
          ['**\/*.edge.test.ts', 'edge-runtime'],
          // ...
        ]
      }
    })

### poolMatchGlobs [​](#poolmatchglobs)

*   **Type:** `[string, 'threads' | 'forks' | 'vmThreads' | 'vmForks' | 'typescript'][]`
*   **Default:** `[]`

DEPRECATED

This API was deprecated in Vitest 3. Use [projects](/guide/projects) to define different configurations instead:

ts

    export default defineConfig({
      test: {
        poolMatchGlobs: [ 
          ['./*.threads.test.ts', 'threads'], 
        ], 
        projects: [ 
          { 
            test: { 
              extends: true, 
              pool: 'threads', 
            }, 
          }, 
        ], 
      },
    })

Automatically assign pool in which tests will run based on globs. The first match will be used.

For example:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        poolMatchGlobs: [
          // all tests in "worker-specific" directory will run inside a worker as if you enabled `--pool=threads` for them,
          ['**/tests/worker-specific/**', 'threads'],
          // run all tests in "browser" directory in an actual browser
          ['**/tests/browser/**', 'browser'],
          // all other tests will run based on "browser.enabled" and "threads" options, if you didn't specify other globs
          // ...
        ]
      }
    })

### update \* [​](#update)

*   **Type:** `boolean`
*   **Default:** `false`
*   **CLI:** `-u`, `--update`, `--update=false`

Update snapshot files. This will update all changed snapshots and delete obsolete ones.

### watch \* [​](#watch)

*   **Type:** `boolean`
*   **Default:** `!process.env.CI && process.stdin.isTTY`
*   **CLI:** `-w`, `--watch`, `--watch=false`

Enable watch mode

In interactive environments, this is the default, unless `--run` is specified explicitly.

In CI, or when run from a non-interactive shell, "watch" mode is not the default, but can be enabled explicitly with this flag.

### watchTriggerPatterns 3.2.0\+ \* [​](#watchtriggerpatterns)

*   **Type:** `WatcherTriggerPattern[]`

Vitest reruns tests based on the module graph which is populated by static and dynamic `import` statements. However, if you are reading from the file system or fetching from a proxy, then Vitest cannot detect those dependencies.

To correctly rerun those tests, you can define a regex pattern and a function that retuns a list of test files to run.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        watchTriggerPatterns: [
          {
            pattern: /^src\/(mailers|templates)\/(.*)\.(ts|html|txt)$/,
            testToRun: (id, match) => {
              // relative to the root value
              return `./api/tests/mailers/${match[2]}.test.ts`
            },
          },
        ],
      },
    })

WARNING

Returned files should be either absolute or relative to the root. Note that this is a global option, and it cannot be used inside of [project](/guide/projects) configs.

### root [​](#root)

*   **Type:** `string`
*   **CLI:** `-r <path>`, `--root=<path>`

Project root

### dir [​](#dir)

*   **Type:** `string`
*   **CLI:** `--dir=<path>`
*   **Default:** same as `root`

Base directory to scan for the test files. You can specify this option to speed up test discovery if your root covers the whole project

### reporters \* [​](#reporters)

*   **Type:** `Reporter | Reporter[]`
*   **Default:** `'default'`
*   **CLI:** `--reporter=<name>`, `--reporter=<name1> --reporter=<name2>`

Custom [reporters](/guide/reporters) for output. Reporters can be [a Reporter instance](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/types/reporter.ts), a string to select built-in reporters, or a path to a custom implementation (e.g. `'./path/to/reporter.ts'`, `'@scope/reporter'`).

### outputFile \* [​](#outputfile)

*   **Type:** `string | Record<string, string>`
*   **CLI:** `--outputFile=<path>`, `--outputFile.json=./path`

Write test results to a file when the `--reporter=json`, `--reporter=html` or `--reporter=junit` option is also specified. By providing an object instead of a string you can define individual outputs when using multiple reporters.

### pool \* [​](#pool)

*   **Type:** `'threads' | 'forks' | 'vmThreads' | 'vmForks'`
*   **Default:** `'forks'`
*   **CLI:** `--pool=threads`

Pool used to run tests in.

#### threads \* [​](#threads)

Enable multi-threading using [tinypool](https://github.com/tinylibs/tinypool) (a lightweight fork of [Piscina](https://github.com/piscinajs/piscina)). When using threads you are unable to use process related APIs such as `process.chdir()`. Some libraries written in native languages, such as Prisma, `bcrypt` and `canvas`, have problems when running in multiple threads and run into segfaults. In these cases it is advised to use `forks` pool instead.

#### forks \* [​](#forks)

Similar as `threads` pool but uses `child_process` instead of `worker_threads` via [tinypool](https://github.com/tinylibs/tinypool). Communication between tests and main process is not as fast as with `threads` pool. Process related APIs such as `process.chdir()` are available in `forks` pool.

#### vmThreads \* [​](#vmthreads)

Run tests using [VM context](https://nodejs.org/api/vm.html) (inside a sandboxed environment) in a `threads` pool.

This makes tests run faster, but the VM module is unstable when running [ESM code](https://github.com/nodejs/node/issues/37648). Your tests will [leak memory](https://github.com/nodejs/node/issues/33439) - to battle that, consider manually editing [`poolOptions.vmThreads.memoryLimit`](#pooloptions-vmthreads-memorylimit) value.

WARNING

Running code in a sandbox has some advantages (faster tests), but also comes with a number of disadvantages.

*   The globals within native modules, such as (`fs`, `path`, etc), differ from the globals present in your test environment. As a result, any error thrown by these native modules will reference a different Error constructor compared to the one used in your code:

ts

    try {
      fs.writeFileSync('/doesnt exist')
    }
    catch (err) {
      console.log(err instanceof Error) // false
    }

*   Importing ES modules caches them indefinitely which introduces memory leaks if you have a lot of contexts (test files). There is no API in Node.js that clears that cache.
*   Accessing globals [takes longer](https://github.com/nodejs/node/issues/31658) in a sandbox environment.

Please, be aware of these issues when using this option. Vitest team cannot fix any of the issues on our side.

#### vmForks \* [​](#vmforks)

Similar as `vmThreads` pool but uses `child_process` instead of `worker_threads` via [tinypool](https://github.com/tinylibs/tinypool). Communication between tests and the main process is not as fast as with `vmThreads` pool. Process related APIs such as `process.chdir()` are available in `vmForks` pool. Please be aware that this pool has the same pitfalls listed in `vmThreads`.

### poolOptions \* [​](#pooloptions)

*   **Type:** `Record<'threads' | 'forks' | 'vmThreads' | 'vmForks', {}>`
*   **Default:** `{}`

#### poolOptions.threads [​](#pooloptions-threads)

Options for `threads` pool.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        poolOptions: {
          threads: {
            // Threads related options here
          }
        }
      }
    })

##### poolOptions.threads.maxThreads \* [​](#pooloptions-threads-maxthreads)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Maximum number or percentage of threads. You can also use `VITEST_MAX_THREADS` environment variable.

##### poolOptions.threads.minThreads \* [​](#pooloptions-threads-minthreads)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Minimum number or percentage of threads. You can also use `VITEST_MIN_THREADS` environment variable.

##### poolOptions.threads.singleThread [​](#pooloptions-threads-singlethread)

*   **Type:** `boolean`
*   **Default:** `false`

Run all tests with the same environment inside a single worker thread. This will disable built-in module isolation (your source code or [inlined](#server-deps-inline) code will still be reevaluated for each test), but can improve test performance.

WARNING

Even though this option will force tests to run one after another, this option is different from Jest's `--runInBand`. Vitest uses workers not only for running tests in parallel, but also to provide isolation. By disabling this option, your tests will run sequentially, but in the same global context, so you must provide isolation yourself.

This might cause all sorts of issues, if you are relying on global state (frontend frameworks usually do) or your code relies on environment to be defined separately for each test. But can be a speed boost for your tests (up to 3 times faster), that don't necessarily rely on global state or can easily bypass that.

##### poolOptions.threads.useAtomics \* [​](#pooloptions-threads-useatomics)

*   **Type:** `boolean`
*   **Default:** `false`

Use Atomics to synchronize threads.

This can improve performance in some cases, but might cause segfault in older Node versions.

##### poolOptions.threads.isolate [​](#pooloptions-threads-isolate)

*   **Type:** `boolean`
*   **Default:** `true`

Isolate environment for each test file.

##### poolOptions.threads.execArgv \* [​](#pooloptions-threads-execargv)

*   **Type:** `string[]`
*   **Default:** `[]`

Pass additional arguments to `node` in the threads. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

WARNING

Be careful when using, it as some options may crash worker, e.g. --prof, --title. See [https://github.com/nodejs/node/issues/41103](https://github.com/nodejs/node/issues/41103).

#### poolOptions.forks [​](#pooloptions-forks)

Options for `forks` pool.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        poolOptions: {
          forks: {
            // Forks related options here
          }
        }
      }
    })

##### poolOptions.forks.maxForks \* [​](#pooloptions-forks-maxforks)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Maximum number or percentage of forks. You can also use `VITEST_MAX_FORKS` environment variable.

##### poolOptions.forks.minForks \* [​](#pooloptions-forks-minforks)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Minimum number or percentage of forks. You can also use `VITEST_MIN_FORKS` environment variable.

##### poolOptions.forks.isolate [​](#pooloptions-forks-isolate)

*   **Type:** `boolean`
*   **Default:** `true`

Isolate environment for each test file.

##### poolOptions.forks.singleFork [​](#pooloptions-forks-singlefork)

*   **Type:** `boolean`
*   **Default:** `false`

Run all tests with the same environment inside a single child process. This will disable built-in module isolation (your source code or [inlined](#server-deps-inline) code will still be reevaluated for each test), but can improve test performance.

WARNING

Even though this option will force tests to run one after another, this option is different from Jest's `--runInBand`. Vitest uses child processes not only for running tests in parallel, but also to provide isolation. By disabling this option, your tests will run sequentially, but in the same global context, so you must provide isolation yourself.

This might cause all sorts of issues, if you are relying on global state (frontend frameworks usually do) or your code relies on environment to be defined separately for each test. But can be a speed boost for your tests (up to 3 times faster), that don't necessarily rely on global state or can easily bypass that.

##### poolOptions.forks.execArgv \* [​](#pooloptions-forks-execargv)

*   **Type:** `string[]`
*   **Default:** `[]`

Pass additional arguments to `node` process in the child processes. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

WARNING

Be careful when using, it as some options may crash worker, e.g. --prof, --title. See [https://github.com/nodejs/node/issues/41103](https://github.com/nodejs/node/issues/41103).

#### poolOptions.vmThreads [​](#pooloptions-vmthreads)

Options for `vmThreads` pool.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        poolOptions: {
          vmThreads: {
            // VM threads related options here
          }
        }
      }
    })

##### poolOptions.vmThreads.maxThreads \* [​](#pooloptions-vmthreads-maxthreads)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Maximum number or percentage of threads. You can also use `VITEST_MAX_THREADS` environment variable.

##### poolOptions.vmThreads.minThreads \* [​](#pooloptions-vmthreads-minthreads)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Minimum number or percentage of threads. You can also use `VITEST_MIN_THREADS` environment variable.

##### poolOptions.vmThreads.memoryLimit \* [​](#pooloptions-vmthreads-memorylimit)

*   **Type:** `string | number`
*   **Default:** `1 / CPU Cores`

Specifies the memory limit for workers before they are recycled. This value heavily depends on your environment, so it's better to specify it manually instead of relying on the default.

TIP

The implementation is based on Jest's [`workerIdleMemoryLimit`](https://jestjs.io/docs/configuration#workeridlememorylimit-numberstring).

The limit can be specified in a number of different ways and whatever the result is `Math.floor` is used to turn it into an integer value:

*   `<= 1` - The value is assumed to be a percentage of system memory. So 0.5 sets the memory limit of the worker to half of the total system memory
*   `\> 1` - Assumed to be a fixed byte value. Because of the previous rule if you wanted a value of 1 byte (I don't know why) you could use 1.1.
*   With units
    *   `50%` - As above, a percentage of total system memory
    *   `100KB`, `65MB`, etc - With units to denote a fixed memory limit.
        *   `K` / `KB` - Kilobytes (x1000)
        *   `KiB` - Kibibytes (x1024)
        *   `M` / `MB` - Megabytes
        *   `MiB` - Mebibytes
        *   `G` / `GB` - Gigabytes
        *   `GiB` - Gibibytes

WARNING

Percentage based memory limit [does not work on Linux CircleCI](https://github.com/jestjs/jest/issues/11956#issuecomment-1212925677) workers due to incorrect system memory being reported.

##### poolOptions.vmThreads.useAtomics \* [​](#pooloptions-vmthreads-useatomics)

*   **Type:** `boolean`
*   **Default:** `false`

Use Atomics to synchronize threads.

This can improve performance in some cases, but might cause segfault in older Node versions.

##### poolOptions.vmThreads.execArgv \* [​](#pooloptions-vmthreads-execargv)

*   **Type:** `string[]`
*   **Default:** `[]`

Pass additional arguments to `node` process in the VM context. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

WARNING

Be careful when using, it as some options may crash worker, e.g. --prof, --title. See [https://github.com/nodejs/node/issues/41103](https://github.com/nodejs/node/issues/41103).

#### poolOptions.vmForks \* [​](#pooloptions-vmforks)

Options for `vmForks` pool.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        poolOptions: {
          vmForks: {
            // VM forks related options here
          }
        }
      }
    })

##### poolOptions.vmForks.maxForks \* [​](#pooloptions-vmforks-maxforks)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Maximum number or percentage of forks. You can also use `VITEST_MAX_FORKS` environment variable.

##### poolOptions.vmForks.minForks \* [​](#pooloptions-vmforks-minforks)

*   **Type:** `number | string`
*   **Default:** _available CPUs_

Minimum number or percentage of forks. You can also use `VITEST_MIN_FORKS` environment variable.

##### poolOptions.vmForks.memoryLimit \* [​](#pooloptions-vmforks-memorylimit)

*   **Type:** `string | number`
*   **Default:** `1 / CPU Cores`

Specifies the memory limit for workers before they are recycled. This value heavily depends on your environment, so it's better to specify it manually instead of relying on the default. How the value is calculated is described in [`poolOptions.vmThreads.memoryLimit`](#pooloptions-vmthreads-memorylimit)

##### poolOptions.vmForks.execArgv \* [​](#pooloptions-vmforks-execargv)

*   **Type:** `string[]`
*   **Default:** `[]`

Pass additional arguments to `node` process in the VM context. See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.

WARNING

Be careful when using, it as some options may crash worker, e.g. --prof, --title. See [https://github.com/nodejs/node/issues/41103](https://github.com/nodejs/node/issues/41103).

### fileParallelism \* [​](#fileparallelism)

*   **Type:** `boolean`
*   **Default:** `true`
*   **CLI:** `--no-file-parallelism`, `--fileParallelism=false`

Should all test files run in parallel. Setting this to `false` will override `maxWorkers` and `minWorkers` options to `1`.

TIP

This option doesn't affect tests running in the same file. If you want to run those in parallel, use `concurrent` option on [describe](/api/#describe-concurrent) or via [a config](#sequence-concurrent).

### maxWorkers \* [​](#maxworkers)

*   **Type:** `number | string`

Maximum number or percentage of workers to run tests in. `poolOptions.{threads,vmThreads}.maxThreads`/`poolOptions.forks.maxForks` has higher priority.

### minWorkers \* [​](#minworkers)

*   **Type:** `number | string`

Minimum number or percentage of workers to run tests in. `poolOptions.{threads,vmThreads}.minThreads`/`poolOptions.forks.minForks` has higher priority.

### testTimeout [​](#testtimeout)

*   **Type:** `number`
*   **Default:** `5_000` in Node.js, `15_000` if `browser.enabled` is `true`
*   **CLI:** `--test-timeout=5000`, `--testTimeout=5000`

Default timeout of a test in milliseconds. Use `0` to disable timeout completely.

### hookTimeout [​](#hooktimeout)

*   **Type:** `number`
*   **Default:** `10_000` in Node.js, `30_000` if `browser.enabled` is `true`
*   **CLI:** `--hook-timeout=10000`, `--hookTimeout=10000`

Default timeout of a hook in milliseconds. Use `0` to disable timeout completely.

### teardownTimeout \* [​](#teardowntimeout)

*   **Type:** `number`
*   **Default:** `10000`
*   **CLI:** `--teardown-timeout=5000`, `--teardownTimeout=5000`

Default timeout to wait for close when Vitest shuts down, in milliseconds

### silent \* [​](#silent)

*   **Type:** `boolean | 'passed-only'`
*   **Default:** `false`
*   **CLI:** `--silent`, `--silent=false`

Silent console output from tests.

Use `'passed-only'` to see logs from failing tests only. Logs from failing tests are printed after a test has finished.

### setupFiles [​](#setupfiles)

*   **Type:** `string | string[]`

Path to setup files. They will be run before each test file.

INFO

Editing a setup file will automatically trigger a rerun of all tests.

You can use `process.env.VITEST_POOL_ID` (integer-like string) inside to distinguish between threads.

TIP

Note, that if you are running [`--isolate=false`](#isolate), this setup file will be run in the same global scope multiple times. Meaning, that you are accessing the same global object before each test, so make sure you are not doing the same thing more than you need.

For example, you may rely on a global variable:

ts

    import { config } from '@some-testing-lib'
    
    if (!globalThis.defined) {
      config.plugins = [myCoolPlugin]
      computeHeavyThing()
      globalThis.defined = true
    }
    
    // hooks are reset before each suite
    afterEach(() => {
      cleanup()
    })
    
    globalThis.resetBeforeEachTest = true

### provide 2.1.0\+ [​](#provide)

*   **Type:** `Partial<ProvidedContext>`

Define values that can be accessed inside your tests using `inject` method.

vitest.config.jsapi.test.js

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        provide: {
          API_KEY: '123',
        },
      },
    })

ts

    import { expect, inject, test } from 'vitest'
    
    test('api key is defined', () => {
      expect(inject('API_KEY')).toBe('123')
    })

WARNING

Properties have to be strings and values need to be [serializable](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) because this object will be transferred between different processes.

TIP

If you are using TypeScript, you will need to augment `ProvidedContext` type for type safe access:

vitest.shims.d.ts

ts

    declare module 'vitest' {
      export interface ProvidedContext {
        API_KEY: string
      }
    }
    
    // mark this file as a module so augmentation works correctly
    export {}

### globalSetup [​](#globalsetup)

*   **Type:** `string | string[]`

Path to global setup files, relative to project root.

A global setup file can either export named functions `setup` and `teardown` or a `default` function that returns a teardown function ([example](https://github.com/vitest-dev/vitest/blob/main/test/global-setup/vitest.config.ts)).

INFO

Multiple globalSetup files are possible. setup and teardown are executed sequentially with teardown in reverse order.

WARNING

Global setup runs only if there is at least one running test. This means that global setup might start running during watch mode after test file is changed (the test file will wait for global setup to finish before running).

Beware that the global setup is running in a different global scope, so your tests don't have access to variables defined here. However, you can pass down serializable data to tests via [`provide`](#provide) method:

example.test.jsglobalSetup.ts 3.0.0\+ globalSetup.ts 2.0.0+

ts

    import { inject } from 'vitest'
    
    inject('wsPort') === 3000

ts

    import type { TestProject } from 'vitest/node'
    
    export default function setup(project: TestProject) {
      project.provide('wsPort', 3000)
    }
    
    declare module 'vitest' {
      export interface ProvidedContext {
        wsPort: number
      }
    }

ts

    import type { GlobalSetupContext } from 'vitest/node'
    
    export default function setup({ provide }: GlobalSetupContext) {
      provide('wsPort', 3000)
    }
    
    declare module 'vitest' {
      export interface ProvidedContext {
        wsPort: number
      }
    }

Since Vitest 3, you can define a custom callback function to be called when Vitest reruns tests. If the function is asynchronous, the runner will wait for it to complete before executing tests. Note that you cannot destruct the `project` like `{ onTestsRerun }` because it relies on the context.

globalSetup.ts

ts

    import type { TestProject } from 'vitest/node'
    
    export default function setup(project: TestProject) {
      project.onTestsRerun(async () => {
        await restartDb()
      })
    }

### forceRerunTriggers \* [​](#forcereruntriggers)

*   **Type**: `string[]`
*   **Default:** `['**/package.json/**', '**/vitest.config.*/**', '**/vite.config.*/**']`

Glob pattern of file paths that will trigger the whole suite rerun. When paired with the `--changed` argument will run the whole test suite if the trigger is found in the git diff.

Useful if you are testing calling CLI commands, because Vite cannot construct a module graph:

ts

    test('execute a script', async () => {
      // Vitest cannot rerun this test, if content of `dist/index.js` changes
      await execa('node', ['dist/index.js'])
    })

TIP

Make sure that your files are not excluded by [`server.watch.ignored`](https://vitejs.dev/config/server-options.html#server-watch).

### coverage \* [​](#coverage)

You can use [`v8`](https://v8.dev/blog/javascript-code-coverage), [`istanbul`](https://istanbul.js.org/) or [a custom coverage solution](/guide/coverage#custom-coverage-provider) for coverage collection.

You can provide coverage options to CLI with dot notation:

sh

    npx vitest --coverage.enabled --coverage.provider=istanbul --coverage.all

WARNING

If you are using coverage options with dot notation, don't forget to specify `--coverage.enabled`. Do not provide a single `--coverage` option in that case.

#### coverage.provider [​](#coverage-provider)

*   **Type:** `'v8' | 'istanbul' | 'custom'`
*   **Default:** `'v8'`
*   **CLI:** `--coverage.provider=<provider>`

Use `provider` to select the tool for coverage collection.

#### coverage.enabled [​](#coverage-enabled)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.enabled`, `--coverage.enabled=false`

Enables coverage collection. Can be overridden using `--coverage` CLI option.

#### coverage.include [​](#coverage-include)

*   **Type:** `string[]`
*   **Default:** `['**']`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.include=<path>`, `--coverage.include=<path1> --coverage.include=<path2>`

List of files included in coverage as glob patterns

#### coverage.extension [​](#coverage-extension)

*   **Type:** `string | string[]`
*   **Default:** `['.js', '.cjs', '.mjs', '.ts', '.mts', '.tsx', '.jsx', '.vue', '.svelte', '.marko', '.astro']`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.extension=<extension>`, `--coverage.extension=<extension1> --coverage.extension=<extension2>`

#### coverage.exclude [​](#coverage-exclude)

*   **Type:** `string[]`
*   **Default:**

js

    [
      'coverage/**',
      'dist/**',
      '**/node_modules/**',
      '**/[.]**',
      'packages/*/test?(s)/**',
      '**/*.d.ts',
      '**/virtual:*',
      '**/__x00__*',
      '**/\x00*',
      'cypress/**',
      'test?(s)/**',
      'test?(-*).?(c|m)[jt]s?(x)',
      '**/*{.,-}{test,spec,bench,benchmark}?(-d).?(c|m)[jt]s?(x)',
      '**/__tests__/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
      '**/vitest.{workspace,projects}.[jt]s?(on)',
      '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
    ]

*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.exclude=<path>`, `--coverage.exclude=<path1> --coverage.exclude=<path2>`

List of files excluded from coverage as glob patterns.

This option overrides all default options. Extend the default options when adding new patterns to ignore:

ts

    import { coverageConfigDefaults, defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        coverage: {
          exclude: ['**/custom-pattern/**', ...coverageConfigDefaults.exclude]
        },
      },
    })

NOTE

Vitest automatically adds test files `include` patterns to the `coverage.exclude`. It's not possible to show coverage of test files.

#### coverage.all [​](#coverage-all)

*   **Type:** `boolean`
*   **Default:** `true`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.all`, `--coverage.all=false`

Whether to include all files, including the untested ones into report.

#### coverage.clean [​](#coverage-clean)

*   **Type:** `boolean`
*   **Default:** `true`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.clean`, `--coverage.clean=false`

Clean coverage results before running tests

#### coverage.cleanOnRerun [​](#coverage-cleanonrerun)

*   **Type:** `boolean`
*   **Default:** `true`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.cleanOnRerun`, `--coverage.cleanOnRerun=false`

Clean coverage report on watch rerun. Set to `false` to preserve coverage results from previous run in watch mode.

#### coverage.reportsDirectory [​](#coverage-reportsdirectory)

*   **Type:** `string`
*   **Default:** `'./coverage'`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.reportsDirectory=<path>`

WARNING

Vitest will delete this directory before running tests if `coverage.clean` is enabled (default value).

Directory to write coverage report to.

To preview the coverage report in the output of [HTML reporter](/guide/reporters#html-reporter), this option must be set as a sub-directory of the html report directory (for example `./html/coverage`).

#### coverage.reporter [​](#coverage-reporter)

*   **Type:** `string | string[] | [string, {}][]`
*   **Default:** `['text', 'html', 'clover', 'json']`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.reporter=<reporter>`, `--coverage.reporter=<reporter1> --coverage.reporter=<reporter2>`

Coverage reporters to use. See [istanbul documentation](https://istanbul.js.org/docs/advanced/alternative-reporters/) for detailed list of all reporters. See [`@types/istanbul-reporter`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/276d95e4304b3670eaf6e8e5a7ea9e265a14e338/types/istanbul-reports/index.d.ts) for details about reporter specific options.

The reporter has three different types:

*   A single reporter: `{ reporter: 'html' }`
*   Multiple reporters without options: `{ reporter: ['html', 'json'] }`
*   A single or multiple reporters with reporter options:
    
    ts
    
        {
          reporter: [
            ['lcov', { 'projectRoot': './src' }],
            ['json', { 'file': 'coverage.json' }],
            ['text']
          ]
        }
    

You can also pass custom coverage reporters. See [Guide - Custom Coverage Reporter](/guide/coverage#custom-coverage-reporter) for more information.

ts

      {
        reporter: [
          // Specify reporter using name of the NPM package
          '@vitest/custom-coverage-reporter',
          ['@vitest/custom-coverage-reporter', { someOption: true }],
    
          // Specify reporter using local path
          '/absolute/path/to/custom-reporter.cjs',
          ['/absolute/path/to/custom-reporter.cjs', { someOption: true }],
        ]
      }

You can check your coverage report in Vitest UI: check [Vitest UI Coverage](/guide/coverage#vitest-ui) for more details.

#### coverage.reportOnFailure [​](#coverage-reportonfailure)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.reportOnFailure`, `--coverage.reportOnFailure=false`

Generate coverage report even when tests fail.

#### coverage.allowExternal [​](#coverage-allowexternal)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.allowExternal`, `--coverage.allowExternal=false`

Collect coverage of files outside the [project `root`](#root).

#### coverage.excludeAfterRemap 2.1.0\+ [​](#coverage-exclude-after-remap)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.excludeAfterRemap`, `--coverage.excludeAfterRemap=false`

Apply exclusions again after coverage has been remapped to original sources. This is useful when your source files are transpiled and may contain source maps of non-source files.

Use this option when you are seeing files that show up in report even if they match your `coverage.exclude` patterns.

#### coverage.skipFull [​](#coverage-skipfull)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.skipFull`, `--coverage.skipFull=false`

Do not show files with 100% statement, branch, and function coverage.

#### coverage.thresholds [​](#coverage-thresholds)

Options for coverage thresholds.

If a threshold is set to a positive number, it will be interpreted as the minimum percentage of coverage required. For example, setting the lines threshold to `90` means that 90% of lines must be covered.

If a threshold is set to a negative number, it will be treated as the maximum number of uncovered items allowed. For example, setting the lines threshold to `-10` means that no more than 10 lines may be uncovered.

ts

    {
      coverage: {
        thresholds: {
          // Requires 90% function coverage
          functions: 90,
    
          // Require that no more than 10 lines are uncovered
          lines: -10,
        }
      }
    }

##### coverage.thresholds.lines [​](#coverage-thresholds-lines)

*   **Type:** `number`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.lines=<number>`

Global threshold for lines.

##### coverage.thresholds.functions [​](#coverage-thresholds-functions)

*   **Type:** `number`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.functions=<number>`

Global threshold for functions.

##### coverage.thresholds.branches [​](#coverage-thresholds-branches)

*   **Type:** `number`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.branches=<number>`

Global threshold for branches.

##### coverage.thresholds.statements [​](#coverage-thresholds-statements)

*   **Type:** `number`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.statements=<number>`

Global threshold for statements.

##### coverage.thresholds.perFile [​](#coverage-thresholds-perfile)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.perFile`, `--coverage.thresholds.perFile=false`

Check thresholds per file.

##### coverage.thresholds.autoUpdate [​](#coverage-thresholds-autoupdate)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.autoUpdate=<boolean>`

Update all threshold values `lines`, `functions`, `branches` and `statements` to configuration file when current coverage is better than the configured thresholds. This option helps to maintain thresholds when coverage is improved.

##### coverage.thresholds.100 [​](#coverage-thresholds-100)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.thresholds.100`, `--coverage.thresholds.100=false`

Sets global thresholds to 100. Shortcut for `--coverage.thresholds.lines 100 --coverage.thresholds.functions 100 --coverage.thresholds.branches 100 --coverage.thresholds.statements 100`.

##### coverage.thresholds\[glob-pattern\] [​](#coverage-thresholds-glob-pattern)

*   **Type:** `{ statements?: number functions?: number branches?: number lines?: number }`
*   **Default:** `undefined`
*   **Available for providers:** `'v8' | 'istanbul'`

Sets thresholds for files matching the glob pattern.

NOTE

Vitest counts all files, including those covered by glob-patterns, into the global coverage thresholds. This is different from Jest behavior.

ts

    {
      coverage: {
        thresholds: {
          // Thresholds for all files
          functions: 95,
          branches: 70,
    
          // Thresholds for matching glob pattern
          'src/utils/**.ts': {
            statements: 95,
            functions: 90,
            branches: 85,
            lines: 80,
          },
    
          // Files matching this pattern will only have lines thresholds set.
          // Global thresholds are not inherited.
          '**/math.ts': {
            lines: 100,
          }
        }
      }
    }

##### coverage.thresholds\[glob-pattern\].100 2.1.0\+ [​](#coverage-thresholds-glob-pattern-100)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8' | 'istanbul'`

Sets thresholds to 100 for files matching the glob pattern.

ts

    {
      coverage: {
        thresholds: {
          // Thresholds for all files
          functions: 95,
          branches: 70,
    
          // Thresholds for matching glob pattern
          'src/utils/**.ts': { 100: true },
          '**/math.ts': { 100: true }
        }
      }
    }

#### coverage.ignoreEmptyLines [​](#coverage-ignoreemptylines)

*   **Type:** `boolean`
*   **Default:** `true` (`false` in v1)
*   **Available for providers:** `'v8'`
*   **CLI:** `--coverage.ignoreEmptyLines=<boolean>`

Ignore empty lines, comments and other non-runtime code, e.g. Typescript types. Requires `experimentalAstAwareRemapping: false`.

This option works only if the used compiler removes comments and other non-runtime code from the transpiled code. By default Vite uses ESBuild which removes comments and Typescript types from `.ts`, `.tsx` and `.jsx` files.

If you want to apply ESBuild to other files as well, define them in [`esbuild` options](https://vitejs.dev/config/shared-options.html#esbuild):

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      esbuild: {
        // Transpile all files with ESBuild to remove comments from code coverage.
        // Required for `test.coverage.ignoreEmptyLines` to work:
        include: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.ts', '**/*.tsx'],
      },
      test: {
        coverage: {
          provider: 'v8',
          ignoreEmptyLines: true,
        },
      },
    })

#### coverage.experimentalAstAwareRemapping [​](#coverage-experimentalastawareremapping)

*   **Type:** `boolean`
*   **Default:** `false`
*   **Available for providers:** `'v8'`
*   **CLI:** `--coverage.experimentalAstAwareRemapping=<boolean>`

Remap coverage with experimental AST based analysis. Provides more accurate results compared to default mode.

#### coverage.ignoreClassMethods [​](#coverage-ignoreclassmethods)

*   **Type:** `string[]`
*   **Default:** `[]`
*   **Available for providers:** `'istanbul'`
*   **CLI:** `--coverage.ignoreClassMethods=<method>`

Set to array of class method names to ignore for coverage. See [istanbul documentation](https://github.com/istanbuljs/nyc#ignoring-methods) for more information.

#### coverage.watermarks [​](#coverage-watermarks)

*   **Type:**

ts

    {
      statements?: [number, number],
      functions?: [number, number],
      branches?: [number, number],
      lines?: [number, number]
    }

*   **Default:**

ts

    {
      statements: [50, 80],
      functions: [50, 80],
      branches: [50, 80],
      lines: [50, 80]
    }

*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.watermarks.statements=50,80`, `--coverage.watermarks.branches=50,80`

Watermarks for statements, lines, branches and functions. See [istanbul documentation](https://github.com/istanbuljs/nyc#high-and-low-watermarks) for more information.

#### coverage.processingConcurrency [​](#coverage-processingconcurrency)

*   **Type:** `boolean`
*   **Default:** `Math.min(20, os.availableParallelism?.() ?? os.cpus().length)`
*   **Available for providers:** `'v8' | 'istanbul'`
*   **CLI:** `--coverage.processingConcurrency=<number>`

Concurrency limit used when processing the coverage results.

#### coverage.customProviderModule [​](#coverage-customprovidermodule)

*   **Type:** `string`
*   **Available for providers:** `'custom'`
*   **CLI:** `--coverage.customProviderModule=<path or module name>`

Specifies the module name or path for the custom coverage provider module. See [Guide - Custom Coverage Provider](/guide/coverage#custom-coverage-provider) for more information.

### testNamePattern \* [​](#testnamepattern)

*   **Type** `string | RegExp`
*   **CLI:** `-t <pattern>`, `--testNamePattern=<pattern>`, `--test-name-pattern=<pattern>`

Run tests with full names matching the pattern. If you add `OnlyRunThis` to this property, tests not containing the word `OnlyRunThis` in the test name will be skipped.

js

    import { expect, test } from 'vitest'
    
    // run
    test('OnlyRunThis', () => {
      expect(true).toBe(true)
    })
    
    // skipped
    test('doNotRun', () => {
      expect(true).toBe(true)
    })

### open \* [​](#open)

*   **Type:** `boolean`
*   **Default:** `!process.env.CI`
*   **CLI:** `--open`, `--open=false`

Open Vitest UI (WIP)

### api [​](#api)

*   **Type:** `boolean | number`
*   **Default:** `false`
*   **CLI:** `--api`, `--api.port`, `--api.host`, `--api.strictPort`

Listen to port and serve API. When set to true, the default port is 51204

### browser experimental [​](#browser)

*   **Default:** `{ enabled: false }`
*   **CLI:** `--browser=<name>`, `--browser.name=chrome --browser.headless`

Configuration for running browser tests. Please, refer to the ["Browser Config Reference"](/guide/browser/config) article.

WARNING

This is an experimental feature. Breaking changes might not follow SemVer, please pin Vitest's version when using it.

### clearMocks [​](#clearmocks)

*   **Type:** `boolean`
*   **Default:** `false`

Will call [`.mockClear()`](/api/mock#mockclear) on all spies before each test. This will clear mock history without affecting mock implementations.

### mockReset [​](#mockreset)

*   **Type:** `boolean`
*   **Default:** `false`

Will call [`.mockReset()`](/api/mock#mockreset) on all spies before each test. This will clear mock history and reset each implementation to its original.

### restoreMocks [​](#restoremocks)

*   **Type:** `boolean`
*   **Default:** `false`

Will call [`.mockRestore()`](/api/mock#mockrestore) on all spies before each test. This will clear mock history, restore each implementation to its original, and restore original descriptors of spied-on objects..

### unstubEnvs [​](#unstubenvs)

*   **Type:** `boolean`
*   **Default:** `false`

Will call [`vi.unstubAllEnvs`](/api/vi#vi-unstuballenvs) before each test.

### unstubGlobals [​](#unstubglobals)

*   **Type:** `boolean`
*   **Default:** `false`

Will call [`vi.unstubAllGlobals`](/api/vi#vi-unstuballglobals) before each test.

### testTransformMode [​](#testtransformmode)

*   **Type:** `{ web?, ssr? }`

Determine the transform method for all modules imported inside a test that matches the glob pattern. By default, relies on the environment. For example, tests with JSDOM environment will process all files with `ssr: false` flag and tests with Node environment process all modules with `ssr: true`.

#### testTransformMode.ssr [​](#testtransformmode-ssr)

*   **Type:** `string[]`
*   **Default:** `[]`

Use SSR transform pipeline for all modules inside specified tests.  
Vite plugins will receive `ssr: true` flag when processing those files.

#### testTransformMode.web [​](#testtransformmode-46-web)

*   **Type:** `string[]`
*   **Default:** `[]`

First do a normal transform pipeline (targeting browser), then do a SSR rewrite to run the code in Node.  
Vite plugins will receive `ssr: false` flag when processing those files.

### snapshotFormat \* [​](#snapshotformat)

*   **Type:** `PrettyFormatOptions`

Format options for snapshot testing. These options are passed down to [`pretty-format`](https://www.npmjs.com/package/pretty-format).

TIP

Beware that `plugins` field on this object will be ignored.

If you need to extend snapshot serializer via pretty-format plugins, please, use [`expect.addSnapshotSerializer`](/api/expect#expect-addsnapshotserializer) API or [snapshotSerializers](#snapshotserializers) option.

### snapshotSerializers \* [​](#snapshotserializers)

*   **Type:** `string[]`
*   **Default:** `[]`

A list of paths to snapshot serializer modules for snapshot testing, useful if you want add custom snapshot serializers. See [Custom Serializer](/guide/snapshot#custom-serializer) for more information.

### resolveSnapshotPath \* [​](#resolvesnapshotpath)

*   **Type**: `(testPath: string, snapExtension: string, context: { config: SerializedConfig }) => string`
*   **Default**: stores snapshot files in `__snapshots__` directory

Overrides default snapshot path. For example, to store snapshots next to test files:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
      },
    })

### allowOnly [​](#allowonly)

*   **Type**: `boolean`
*   **Default**: `!process.env.CI`
*   **CLI:** `--allowOnly`, `--allowOnly=false`

Allow tests and suites that are marked as only.

### dangerouslyIgnoreUnhandledErrors \* [​](#dangerouslyignoreunhandlederrors)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI:** `--dangerouslyIgnoreUnhandledErrors` `--dangerouslyIgnoreUnhandledErrors=false`

Ignore any unhandled errors that occur.

### passWithNoTests \* [​](#passwithnotests)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI:** `--passWithNoTests`, `--passWithNoTests=false`

Vitest will not fail, if no tests will be found.

### logHeapUsage [​](#logheapusage)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI:** `--logHeapUsage`, `--logHeapUsage=false`

Show heap usage after each test. Useful for debugging memory leaks.

### css [​](#css)

*   **Type**: `boolean | { include?, exclude?, modules? }`

Configure if CSS should be processed. When excluded, CSS files will be replaced with empty strings to bypass the subsequent processing. CSS Modules will return a proxy to not affect runtime.

#### css.include [​](#css-include)

*   **Type**: `RegExp | RegExp[]`
*   **Default**: `[]`

RegExp pattern for files that should return actual CSS and will be processed by Vite pipeline.

TIP

To process all CSS files, use `/.+/`.

#### css.exclude [​](#css-exclude)

*   **Type**: `RegExp | RegExp[]`
*   **Default**: `[]`

RegExp pattern for files that will return an empty CSS file.

#### css.modules [​](#css-modules)

*   **Type**: `{ classNameStrategy? }`
*   **Default**: `{}`

#### css.modules.classNameStrategy [​](#css-modules-classnamestrategy)

*   **Type**: `'stable' | 'scoped' | 'non-scoped'`
*   **Default**: `'stable'`

If you decide to process CSS files, you can configure if class names inside CSS modules should be scoped. You can choose one of the options:

*   `stable`: class names will be generated as `_${name}_${hashedFilename}`, which means that generated class will stay the same, if CSS content is changed, but will change, if the name of the file is modified, or file is moved to another folder. This setting is useful, if you use snapshot feature.
*   `scoped`: class names will be generated as usual, respecting `css.modules.generateScopedName` method, if you have one and CSS processing is enabled. By default, filename will be generated as `_${name}_${hash}`, where hash includes filename and content of the file.
*   `non-scoped`: class names will not be hashed.

WARNING

By default, Vitest exports a proxy, bypassing CSS Modules processing. If you rely on CSS properties on your classes, you have to enable CSS processing using `include` option.

### maxConcurrency [​](#maxconcurrency)

*   **Type**: `number`
*   **Default**: `5`
*   **CLI**: `--max-concurrency=10`, `--maxConcurrency=10`

A number of tests that are allowed to run at the same time marked with `test.concurrent`.

Test above this limit will be queued to run when available slot appears.

### cache \* [​](#cache)

*   **Type**: `false`
*   **CLI**: `--no-cache`, `--cache=false`

Use this option if you want to disable the cache feature. At the moment Vitest stores cache for test results to run the longer and failed tests first.

The cache directory is controlled by the Vite's [`cacheDir`](https://vitejs.dev/config/shared-options.html#cachedir) option:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      cacheDir: 'custom-folder/.vitest'
    })

You can limit the directory only for Vitest by using `process.env.VITEST`:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      cacheDir: process.env.VITEST ? 'custom-folder/.vitest' : undefined
    })

### sequence [​](#sequence)

*   **Type**: `{ sequencer?, shuffle?, seed?, hooks?, setupFiles?, groupOrder }`

Options for how tests should be sorted.

You can provide sequence options to CLI with dot notation:

sh

    npx vitest --sequence.shuffle --sequence.seed=1000

#### sequence.sequencer \* [​](#sequence-sequencer)

*   **Type**: `TestSequencerConstructor`
*   **Default**: `BaseSequencer`

A custom class that defines methods for sharding and sorting. You can extend `BaseSequencer` from `vitest/node`, if you only need to redefine one of the `sort` and `shard` methods, but both should exist.

Sharding is happening before sorting, and only if `--shard` option is provided.

If [`sequencer.groupOrder`](#grouporder) is specified, the sequencer will be called once for each group and pool.

#### groupOrder 3.2.0\+ [​](#groupOrder)

*   **Type:** `number`
*   **Default:** `0`

Controls the order in which this project runs its tests when using multiple [projects](/guide/projects).

*   Projects with the same group order number will run together, and groups are run from lowest to highest.
*   If you don’t set this option, all projects run in parallel.
*   If several projects use the same group order, they will run at the same time.

This setting only affects the order in which projects run, not the order of tests within a project. To control test isolation or the order of tests inside a project, use the [`isolate`](#isolate) and [`sequence.sequencer`](#sequence-sequencer) options.

Example

Consider this example:

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: [
          {
            test: {
              name: 'slow',
              sequence: {
                groupOrder: 0,
              },
            },
          },
          {
            test: {
              name: 'fast',
              sequence: {
                groupOrder: 0,
              },
            },
          },
          {
            test: {
              name: 'flaky',
              sequence: {
                groupOrder: 1,
              },
            },
          },
        ],
      },
    })

Tests in these projects will run in this order:

     0. slow  |
              |> running together
     0. fast  |
    
     1. flaky |> runs after slow and fast alone

#### sequence.shuffle [​](#sequence-shuffle)

*   **Type**: `boolean | { files?, tests? }`
*   **Default**: `false`
*   **CLI**: `--sequence.shuffle`, `--sequence.shuffle=false`

If you want files and tests to run randomly, you can enable it with this option, or CLI argument [`--sequence.shuffle`](/guide/cli).

Vitest usually uses cache to sort tests, so long running tests start earlier - this makes tests run faster. If your files and tests will run in random order you will lose this performance improvement, but it may be useful to track tests that accidentally depend on another run previously.

#### sequence.shuffle.files [​](#sequence-shuffle-files)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI**: `--sequence.shuffle.files`, `--sequence.shuffle.files=false`

Whether to randomize files, be aware that long running tests will not start earlier if you enable this option.

#### sequence.shuffle.tests [​](#sequence-shuffle-tests)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI**: `--sequence.shuffle.tests`, `--sequence.shuffle.tests=false`

Whether to randomize tests.

#### sequence.concurrent [​](#sequence-concurrent)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI**: `--sequence.concurrent`, `--sequence.concurrent=false`

If you want tests to run in parallel, you can enable it with this option, or CLI argument [`--sequence.concurrent`](/guide/cli).

#### sequence.seed \* [​](#sequence-seed)

*   **Type**: `number`
*   **Default**: `Date.now()`
*   **CLI**: `--sequence.seed=1000`

Sets the randomization seed, if tests are running in random order.

#### sequence.hooks [​](#sequence-hooks)

*   **Type**: `'stack' | 'list' | 'parallel'`
*   **Default**: `'stack'`
*   **CLI**: `--sequence.hooks=<value>`

Changes the order in which hooks are executed.

*   `stack` will order "after" hooks in reverse order, "before" hooks will run in the order they were defined
*   `list` will order all hooks in the order they are defined
*   `parallel` will run hooks in a single group in parallel (hooks in parent suites will still run before the current suite's hooks)

TIP

This option doesn't affect [`onTestFinished`](/api/#ontestfinished). It is always called in reverse order.

#### sequence.setupFiles [​](#sequence-setupfiles)

*   **Type**: `'list' | 'parallel'`
*   **Default**: `'parallel'`
*   **CLI**: `--sequence.setupFiles=<value>`

Changes the order in which setup files are executed.

*   `list` will run setup files in the order they are defined
*   `parallel` will run setup files in parallel

### typecheck [​](#typecheck)

Options for configuring [typechecking](/guide/testing-types) test environment.

#### typecheck.enabled [​](#typecheck-enabled)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI**: `--typecheck`, `--typecheck.enabled`

Enable typechecking alongside your regular tests.

#### typecheck.only [​](#typecheck-only)

*   **Type**: `boolean`
*   **Default**: `false`
*   **CLI**: `--typecheck.only`

Run only typecheck tests, when typechecking is enabled. When using CLI, this option will automatically enable typechecking.

#### typecheck.checker [​](#typecheck-checker)

*   **Type**: `'tsc' | 'vue-tsc' | string`
*   **Default**: `tsc`

What tools to use for type checking. Vitest will spawn a process with certain parameters for easier parsing, depending on the type. Checker should implement the same output format as `tsc`.

You need to have a package installed to use typechecker:

*   `tsc` requires `typescript` package
*   `vue-tsc` requires `vue-tsc` package

You can also pass down a path to custom binary or command name that produces the same output as `tsc --noEmit --pretty false`.

#### typecheck.include [​](#typecheck-include)

*   **Type**: `string[]`
*   **Default**: `['**/*.{test,spec}-d.?(c|m)[jt]s?(x)']`

Glob pattern for files that should be treated as test files

#### typecheck.exclude [​](#typecheck-exclude)

*   **Type**: `string[]`
*   **Default**: `['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**']`

Glob pattern for files that should not be treated as test files

#### typecheck.allowJs [​](#typecheck-allowjs)

*   **Type**: `boolean`
*   **Default**: `false`

Check JS files that have `@ts-check` comment. If you have it enabled in tsconfig, this will not overwrite it.

#### typecheck.ignoreSourceErrors [​](#typecheck-ignoresourceerrors)

*   **Type**: `boolean`
*   **Default**: `false`

Do not fail, if Vitest found errors outside the test files. This will not show you non-test errors at all.

By default, if Vitest finds source error, it will fail test suite.

#### typecheck.tsconfig [​](#typecheck-tsconfig)

*   **Type**: `string`
*   **Default**: _tries to find closest tsconfig.json_

Path to custom tsconfig, relative to the project root.

### slowTestThreshold \* [​](#slowtestthreshold)

*   **Type**: `number`
*   **Default**: `300`
*   **CLI**: `--slow-test-threshold=<number>`, `--slowTestThreshold=<number>`

The number of milliseconds after which a test or suite is considered slow and reported as such in the results.

### chaiConfig [​](#chaiconfig)

*   **Type:** `{ includeStack?, showDiff?, truncateThreshold? }`
*   **Default:** `{ includeStack: false, showDiff: true, truncateThreshold: 40 }`

Equivalent to [Chai config](https://github.com/chaijs/chai/blob/4.x.x/lib/chai/config.js).

#### chaiConfig.includeStack [​](#chaiconfig-includestack)

*   **Type:** `boolean`
*   **Default:** `false`

Influences whether stack trace is included in Assertion error message. Default of false suppresses stack trace in the error message.

#### chaiConfig.showDiff [​](#chaiconfig-showdiff)

*   **Type:** `boolean`
*   **Default:** `true`

Influences whether or not the `showDiff` flag should be included in the thrown AssertionErrors. `false` will always be `false`; `true` will be true when the assertion has requested a diff to be shown.

#### chaiConfig.truncateThreshold [​](#chaiconfig-truncatethreshold)

*   **Type:** `number`
*   **Default:** `40`

Sets length threshold for actual and expected values in assertion errors. If this threshold is exceeded, for example for large data structures, the value is replaced with something like `[ Array(3) ]` or `{ Object (prop1, prop2) }`. Set it to `0` if you want to disable truncating altogether.

This config option affects truncating values in `test.each` titles and inside the assertion error message.

### bail [​](#bail)

*   **Type:** `number`
*   **Default:** `0`
*   **CLI**: `--bail=<value>`

Stop test execution when given number of tests have failed.

By default Vitest will run all of your test cases even if some of them fail. This may not be desired for CI builds where you are only interested in 100% successful builds and would like to stop test execution as early as possible when test failures occur. The `bail` option can be used to speed up CI runs by preventing it from running more tests when failures have occurred.

### retry [​](#retry)

*   **Type:** `number`
*   **Default:** `0`
*   **CLI:** `--retry=<value>`

Retry the test specific number of times if it fails.

### onConsoleLog \* [​](#onconsolelog)

*   **Type**: `(log: string, type: 'stdout' | 'stderr') => boolean | void`

Custom handler for `console.log` in tests. If you return `false`, Vitest will not print the log to the console.

Can be useful for filtering out logs from third-party libraries.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
          return !(log === 'message from third party library' && type === 'stdout')
        },
      },
    })

### onStackTrace \* [​](#onstacktrace)

*   **Type**: `(error: Error, frame: ParsedStack) => boolean | void`

Apply a filtering function to each frame of each stack trace when handling errors. The first argument, `error`, is an object with the same properties as a standard `Error`, but it is not an actual instance.

Can be useful for filtering out stack trace frames from third-party libraries.

ts

    import type { ParsedStack } from 'vitest'
    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        onStackTrace(error: Error, { file }: ParsedStack): boolean | void {
          // If we've encountered a ReferenceError, show the whole stack.
          if (error.name === 'ReferenceError') {
            return
          }
    
          // Reject all frames from third party libraries.
          if (file.includes('node_modules')) {
            return false
          }
        },
      },
    })

### diff [​](#diff)

*   **Type:** `string`
*   **CLI:** `--diff=<path>`

`DiffOptions` object or a path to a module which exports `DiffOptions`. Useful if you want to customize diff display.

For example, as a config object:

ts

    import { defineConfig } from 'vitest/config'
    import c from 'picocolors'
    
    export default defineConfig({
      test: {
        diff: {
          aIndicator: c.bold('--'),
          bIndicator: c.bold('++'),
          omitAnnotationLines: true,
        },
      },
    })

Or as a module:

vitest.config.jsvitest.diff.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        diff: './vitest.diff.ts',
      },
    })

ts

    import type { DiffOptions } from 'vitest'
    import c from 'picocolors'
    
    export default {
      aIndicator: c.bold('--'),
      bIndicator: c.bold('++'),
      omitAnnotationLines: true,
    } satisfies DiffOptions

#### diff.expand [​](#diff-expand)

*   **Type**: `boolean`
*   **Default**: `true`
*   **CLI:** `--diff.expand=false`

Expand all common lines.

#### diff.truncateThreshold [​](#diff-truncatethreshold)

*   **Type**: `number`
*   **Default**: `0`
*   **CLI:** `--diff.truncateThreshold=<path>`

The maximum length of diff result to be displayed. Diffs above this threshold will be truncated. Truncation won't take effect with default value 0.

#### diff.truncateAnnotation [​](#diff-truncateannotation)

*   **Type**: `string`
*   **Default**: `'... Diff result is truncated'`
*   **CLI:** `--diff.truncateAnnotation=<annotation>`

Annotation that is output at the end of diff result if it's truncated.

#### diff.truncateAnnotationColor [​](#diff-truncateannotationcolor)

*   **Type**: `DiffOptionsColor = (arg: string) => string`
*   **Default**: `noColor = (string: string): string => string`

Color of truncate annotation, default is output with no color.

#### diff.printBasicPrototype [​](#diff-printbasicprototype)

*   **Type**: `boolean`
*   **Default**: `false`

Print basic prototype `Object` and `Array` in diff output

#### diff.maxDepth [​](#diff-maxdepth)

*   **Type**: `number`
*   **Default**: `20` (or `8` when comparing different types)

Limit the depth to recurse when printing nested objects

### fakeTimers [​](#faketimers)

*   **Type:** `FakeTimerInstallOpts`

Options that Vitest will pass down to [`@sinon/fake-timers`](https://www.npmjs.com/package/@sinonjs/fake-timers) when using [`vi.useFakeTimers()`](/api/vi#vi-usefaketimers).

#### fakeTimers.now [​](#faketimers-now)

*   **Type:** `number | Date`
*   **Default:** `Date.now()`

Installs fake timers with the specified Unix epoch.

#### fakeTimers.toFake [​](#faketimers-tofake)

*   **Type:** `('setTimeout' | 'clearTimeout' | 'setImmediate' | 'clearImmediate' | 'setInterval' | 'clearInterval' | 'Date' | 'nextTick' | 'hrtime' | 'requestAnimationFrame' | 'cancelAnimationFrame' | 'requestIdleCallback' | 'cancelIdleCallback' | 'performance' | 'queueMicrotask')[]`
*   **Default:** everything available globally except `nextTick` and `queueMicrotask`

An array with names of global methods and APIs to fake.

To only mock `setTimeout()` and `nextTick()`, specify this property as `['setTimeout', 'nextTick']`.

Mocking `nextTick` is not supported when running Vitest inside `node:child_process` by using `--pool=forks`. NodeJS uses `process.nextTick` internally in `node:child_process` and hangs when it is mocked. Mocking `nextTick` is supported when running Vitest with `--pool=threads`.

#### fakeTimers.loopLimit [​](#faketimers-looplimit)

*   **Type:** `number`
*   **Default:** `10_000`

The maximum number of timers that will be run when calling [`vi.runAllTimers()`](/api/vi#vi-runalltimers).

#### fakeTimers.shouldAdvanceTime [​](#faketimers-shouldadvancetime)

*   **Type:** `boolean`
*   **Default:** `false`

Tells @sinonjs/fake-timers to increment mocked time automatically based on the real system time shift (e.g. the mocked time will be incremented by 20ms for every 20ms change in the real system time).

#### fakeTimers.advanceTimeDelta [​](#faketimers-advancetimedelta)

*   **Type:** `number`
*   **Default:** `20`

Relevant only when using with `shouldAdvanceTime: true`. increment mocked time by advanceTimeDelta ms every advanceTimeDelta ms change in the real system time.

#### fakeTimers.shouldClearNativeTimers [​](#faketimers-shouldclearnativetimers)

*   **Type:** `boolean`
*   **Default:** `true`

Tells fake timers to clear "native" (i.e. not fake) timers by delegating to their respective handlers. When disabled, it can lead to potentially unexpected behavior if timers existed prior to starting fake timers session.

### workspace \* [​](#workspace)

DEPRECATED

This options is deprecated and will be removed in the next major. Please, use [`projects`](#projects) instead.

*   **Type:** `string | TestProjectConfiguration[]`
*   **CLI:** `--workspace=./file.js`
*   **Default:** `vitest.{workspace,projects}.{js,ts,json}` close to the config file or root

Path to a [workspace](/guide/projects) config file relative to [root](#root).

Since Vitest 3, you can also define the workspace array in the root config. If the `workspace` is defined in the config manually, Vitest will ignore the `vitest.workspace` file in the root.

### projects \* [​](#projects)

*   **Type:** `TestProjectConfiguration[]`
*   **Default:** `[]`

An array of [projects](/guide/projects).

### isolate [​](#isolate)

*   **Type:** `boolean`
*   **Default:** `true`
*   **CLI:** `--no-isolate`, `--isolate=false`

Run tests in an isolated environment. This option has no effect on `vmThreads` and `vmForks` pools.

Disabling this option might [improve performance](/guide/improving-performance) if your code doesn't rely on side effects (which is usually true for projects with `node` environment).

TIP

You can disable isolation for specific pools by using [`poolOptions`](#pooloptions) property.

### includeTaskLocation [​](#includeTaskLocation)

*   **Type:** `boolean`
*   **Default:** `false`

Should `location` property be included when Vitest API receives tasks in [reporters](#reporters). If you have a lot of tests, this might cause a small performance regression.

The `location` property has `column` and `line` values that correspond to the `test` or `describe` position in the original file.

This option will be auto-enabled if you don't disable it explicitly, and you are running Vitest with:

*   [Vitest UI](/guide/ui)
*   or using the [Browser Mode](/guide/browser/) without [headless](/guide/browser/#headless) mode
*   or using [HTML Reporter](/guide/reporters#html-reporter)

TIP

This option has no effect if you do not use custom code that relies on this.

### snapshotEnvironment [​](#snapshotEnvironment)

*   **Type:** `string`

Path to a custom snapshot environment implementation. This is useful if you are running your tests in an environment that doesn't support Node.js APIs. This option doesn't have any effect on a browser runner.

This object should have the shape of `SnapshotEnvironment` and is used to resolve and read/write snapshot files:

ts

    export interface SnapshotEnvironment {
      getVersion: () => string
      getHeader: () => string
      resolvePath: (filepath: string) => Promise<string>
      resolveRawPath: (testPath: string, rawPath: string) => Promise<string>
      saveSnapshotFile: (filepath: string, snapshot: string) => Promise<void>
      readSnapshotFile: (filepath: string) => Promise<string | null>
      removeSnapshotFile: (filepath: string) => Promise<void>
    }

You can extend default `VitestSnapshotEnvironment` from `vitest/snapshot` entry point if you need to overwrite only a part of the API.

WARNING

This is a low-level option and should be used only for advanced cases where you don't have access to default Node.js APIs.

If you just need to configure snapshots feature, use [`snapshotFormat`](#snapshotformat) or [`resolveSnapshotPath`](#resolvesnapshotpath) options.

### env [​](#env)

*   **Type:** `Partial<NodeJS.ProcessEnv>`

Environment variables available on `process.env` and `import.meta.env` during tests. These variables will not be available in the main process (in `globalSetup`, for example).

### expect [​](#expect)

*   **Type:** `ExpectOptions`

#### expect.requireAssertions [​](#expect-requireassertions)

*   **Type:** `boolean`
*   **Default:** `false`

The same as calling [`expect.hasAssertions()`](/api/expect#expect-hasassertions) at the start of every test. This makes sure that no test will pass accidentally.

TIP

This only works with Vitest's `expect`. If you use `assert` or `.should` assertions, they will not count, and your test will fail due to the lack of expect assertions.

You can change the value of this by calling `vi.setConfig({ expect: { requireAssertions: false } })`. The config will be applied to every subsequent `expect` call until the `vi.resetConfig` is called manually.

#### expect.poll [​](#expect-poll)

Global configuration options for [`expect.poll`](/api/expect#poll). These are the same options you can pass down to `expect.poll(condition, options)`.

##### expect.poll.interval [​](#expect-poll-interval)

*   **Type:** `number`
*   **Default:** `50`

Polling interval in milliseconds

##### expect.poll.timeout [​](#expect-poll-timeout)

*   **Type:** `number`
*   **Default:** `1000`

Polling timeout in milliseconds

### printConsoleTrace [​](#printconsoletrace)

*   **Type:** `boolean`
*   **Default:** `false`

Always print console traces when calling any `console` method. This is useful for debugging.

Test API Reference [​](#test-api-reference)
===========================================

The following types are used in the type signatures below

ts

    type Awaitable<T> = T | PromiseLike<T>
    type TestFunction = () => Awaitable<void>
    
    interface TestOptions {
      /**
       * Will fail the test if it takes too long to execute
       */
      timeout?: number
      /**
       * Will retry the test specific number of times if it fails
       *
       * @default 0
       */
      retry?: number
      /**
       * Will repeat the same test several times even if it fails each time
       * If you have "retry" option and it fails, it will use every retry in each cycle
       * Useful for debugging random failings
       *
       * @default 0
       */
      repeats?: number
    }

When a test function returns a promise, the runner will wait until it is resolved to collect async expectations. If the promise is rejected, the test will fail.

TIP

In Jest, `TestFunction` can also be of type `(done: DoneCallback) => void`. If this form is used, the test will not be concluded until `done` is called. You can achieve the same using an `async` function, see the [Migration guide Done Callback section](/guide/migration#done-callback).

You can define options by chaining properties on a function:

ts

    import { test } from 'vitest'
    
    test.skip('skipped test', () => {
      // some logic that fails right now
    })
    
    test.concurrent.skip('skipped concurrent test', () => {
      // some logic that fails right now
    })

But you can also provide an object as a second argument instead:

ts

    import { test } from 'vitest'
    
    test('skipped test', { skip: true }, () => {
      // some logic that fails right now
    })
    
    test('skipped concurrent test', { skip: true, concurrent: true }, () => {
      // some logic that fails right now
    })

They both work in exactly the same way. To use either one is purely a stylistic choice.

Note that if you are providing timeout as the last argument, you cannot use options anymore:

ts

    import { test } from 'vitest'
    
    // ✅ this works
    test.skip('heavy test', () => {
      // ...
    }, 10_000)
    
    // ❌ this doesn't work
    test('heavy test', { skip: true }, () => {
      // ...
    }, 10_000)

However, you can provide a timeout inside the object:

ts

    import { test } from 'vitest'
    
    // ✅ this works
    test('heavy test', { skip: true, timeout: 10_000 }, () => {
      // ...
    })

test [​](#test)
---------------

*   **Alias:** `it`

`test` defines a set of related expectations. It receives the test name and a function that holds the expectations to test.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds, and can be configured globally with [testTimeout](/config/#testtimeout)

ts

    import { expect, test } from 'vitest'
    
    test('should work as expected', () => {
      expect(Math.sqrt(4)).toBe(2)
    })

### test.extend [​](#test-extended)

*   **Alias:** `it.extend`

Use `test.extend` to extend the test context with custom fixtures. This will return a new `test` and it's also extendable, so you can compose more fixtures or override existing ones by extending it as you need. See [Extend Test Context](/guide/test-context#test-extend) for more information.

ts

    import { expect, test } from 'vitest'
    
    const todos = []
    const archive = []
    
    const myTest = test.extend({
      todos: async ({ task }, use) => {
        todos.push(1, 2, 3)
        await use(todos)
        todos.length = 0
      },
      archive
    })
    
    myTest('add item', ({ todos }) => {
      expect(todos.length).toBe(3)
    
      todos.push(4)
      expect(todos.length).toBe(4)
    })

### test.skip [​](#test-skip)

*   **Alias:** `it.skip`

If you want to skip running certain tests, but you don't want to delete the code due to any reason, you can use `test.skip` to avoid running them.

ts

    import { assert, test } from 'vitest'
    
    test.skip('skipped test', () => {
      // Test skipped, no error
      assert.equal(Math.sqrt(4), 3)
    })

You can also skip test by calling `skip` on its [context](/guide/test-context) dynamically:

ts

    import { assert, test } from 'vitest'
    
    test('skipped test', (context) => {
      context.skip()
      // Test skipped, no error
      assert.equal(Math.sqrt(4), 3)
    })

Since Vitest 3.1, if the condition is unknown, you can provide it to the `skip` method as the first arguments:

ts

    import { assert, test } from 'vitest'
    
    test('skipped test', (context) => {
      context.skip(Math.random() < 0.5, 'optional message')
      // Test skipped, no error
      assert.equal(Math.sqrt(4), 3)
    })

### test.skipIf [​](#test-skipif)

*   **Alias:** `it.skipIf`

In some cases you might run tests multiple times with different environments, and some of the tests might be environment-specific. Instead of wrapping the test code with `if`, you can use `test.skipIf` to skip the test whenever the condition is truthy.

ts

    import { assert, test } from 'vitest'
    
    const isDev = process.env.NODE_ENV === 'development'
    
    test.skipIf(isDev)('prod only test', () => {
      // this test only runs in production
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### test.runIf [​](#test-runif)

*   **Alias:** `it.runIf`

Opposite of [test.skipIf](#test-skipif).

ts

    import { assert, test } from 'vitest'
    
    const isDev = process.env.NODE_ENV === 'development'
    
    test.runIf(isDev)('dev only test', () => {
      // this test only runs in development
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### test.only [​](#test-only)

*   **Alias:** `it.only`

Use `test.only` to only run certain tests in a given suite. This is useful when debugging.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds, and can be configured globally with [testTimeout](/config/#testtimeout).

ts

    import { assert, test } from 'vitest'
    
    test.only('test', () => {
      // Only this test (and others marked with only) are run
      assert.equal(Math.sqrt(4), 2)
    })

Sometimes it is very useful to run `only` tests in a certain file, ignoring all other tests from the whole test suite, which pollute the output.

In order to do that run `vitest` with specific file containing the tests in question.

    # vitest interesting.test.ts

### test.concurrent [​](#test-concurrent)

*   **Alias:** `it.concurrent`

`test.concurrent` marks consecutive tests to be run in parallel. It receives the test name, an async function with the tests to collect, and an optional timeout (in milliseconds).

ts

    import { describe, test } from 'vitest'
    
    // The two tests marked with concurrent will be run in parallel
    describe('suite', () => {
      test('serial test', async () => { /* ... */ })
      test.concurrent('concurrent test 1', async () => { /* ... */ })
      test.concurrent('concurrent test 2', async () => { /* ... */ })
    })

`test.skip`, `test.only`, and `test.todo` works with concurrent tests. All the following combinations are valid:

ts

    test.concurrent(/* ... */)
    test.skip.concurrent(/* ... */) // or test.concurrent.skip(/* ... */)
    test.only.concurrent(/* ... */) // or test.concurrent.only(/* ... */)
    test.todo.concurrent(/* ... */) // or test.concurrent.todo(/* ... */)

When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.

ts

    test.concurrent('test 1', async ({ expect }) => {
      expect(foo).toMatchSnapshot()
    })
    test.concurrent('test 2', async ({ expect }) => {
      expect(foo).toMatchSnapshot()
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### test.sequential [​](#test-sequential)

*   **Alias:** `it.sequential`

`test.sequential` marks a test as sequential. This is useful if you want to run tests in sequence within `describe.concurrent` or with the `--sequence.concurrent` command option.

ts

    import { describe, test } from 'vitest'
    
    // with config option { sequence: { concurrent: true } }
    test('concurrent test 1', async () => { /* ... */ })
    test('concurrent test 2', async () => { /* ... */ })
    
    test.sequential('sequential test 1', async () => { /* ... */ })
    test.sequential('sequential test 2', async () => { /* ... */ })
    
    // within concurrent suite
    describe.concurrent('suite', () => {
      test('concurrent test 1', async () => { /* ... */ })
      test('concurrent test 2', async () => { /* ... */ })
    
      test.sequential('sequential test 1', async () => { /* ... */ })
      test.sequential('sequential test 2', async () => { /* ... */ })
    })

### test.todo [​](#test-todo)

*   **Alias:** `it.todo`

Use `test.todo` to stub tests to be implemented later. An entry will be shown in the report for the tests so you know how many tests you still need to implement.

ts

    // An entry will be shown in the report for this test
    test.todo('unimplemented test')

### test.fails [​](#test-fails)

*   **Alias:** `it.fails`

Use `test.fails` to indicate that an assertion will fail explicitly.

ts

    import { expect, test } from 'vitest'
    
    function myAsyncFunc() {
      return new Promise(resolve => resolve(1))
    }
    test.fails('fail test', async () => {
      await expect(myAsyncFunc()).rejects.toBe(1)
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### test.each [​](#test-each)

*   **Alias:** `it.each`

TIP

While `test.each` is provided for Jest compatibility, Vitest also has [`test.for`](#test-for) with an additional feature to integrate [`TestContext`](/guide/test-context).

Use `test.each` when you need to run the same test with different variables. You can inject parameters with [printf formatting](https://nodejs.org/api/util.html#util_util_format_format_args) in the test name in the order of the test function parameters.

*   `%s`: string
*   `%d`: number
*   `%i`: integer
*   `%f`: floating point value
*   `%j`: json
*   `%o`: object
*   `%#`: 0-based index of the test case
*   `%$`: 1-based index of the test case
*   `%%`: single percent sign ('%')

ts

    import { expect, test } from 'vitest'
    
    test.each([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
    ])('add(%i, %i) -> %i', (a, b, expected) => {
      expect(a + b).toBe(expected)
    })
    
    // this will return
    // ✓ add(1, 1) -> 2
    // ✓ add(1, 2) -> 3
    // ✓ add(2, 1) -> 3

You can also access object properties and array elements with `$` prefix:

ts

    test.each([
      { a: 1, b: 1, expected: 2 },
      { a: 1, b: 2, expected: 3 },
      { a: 2, b: 1, expected: 3 },
    ])('add($a, $b) -> $expected', ({ a, b, expected }) => {
      expect(a + b).toBe(expected)
    })
    
    // this will return
    // ✓ add(1, 1) -> 2
    // ✓ add(1, 2) -> 3
    // ✓ add(2, 1) -> 3
    
    test.each([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
    ])('add($0, $1) -> $2', (a, b, expected) => {
      expect(a + b).toBe(expected)
    })
    
    // this will return
    // ✓ add(1, 1) -> 2
    // ✓ add(1, 2) -> 3
    // ✓ add(2, 1) -> 3

You can also access Object attributes with `.`, if you are using objects as arguments:

ts

    test.each`
    a               | b      | expected
    ${{ val: 1 }}   | ${'b'} | ${'1b'}
    ${{ val: 2 }}   | ${'b'} | ${'2b'}
    ${{ val: 3 }}   | ${'b'} | ${'3b'}
    `('add($a.val, $b) -> $expected', ({ a, b, expected }) => {
      expect(a.val + b).toBe(expected)
    })
    
    // this will return
    // ✓ add(1, b) -> 1b
    // ✓ add(2, b) -> 2b
    // ✓ add(3, b) -> 3b

Starting from Vitest 0.25.3, you can also use template string table.

*   First row should be column names, separated by `|`;
*   One or more subsequent rows of data supplied as template literal expressions using `${value}` syntax.

ts

    import { expect, test } from 'vitest'
    
    test.each`
      a               | b      | expected
      ${1}            | ${1}   | ${2}
      ${'a'}          | ${'b'} | ${'ab'}
      ${[]}           | ${'b'} | ${'b'}
      ${{}}           | ${'b'} | ${'[object Object]b'}
      ${{ asd: 1 }}   | ${'b'} | ${'[object Object]b'}
    `('returns $expected when $a is added $b', ({ a, b, expected }) => {
      expect(a + b).toBe(expected)
    })

TIP

Vitest processes `$values` with Chai `format` method. If the value is too truncated, you can increase [chaiConfig.truncateThreshold](/config/#chaiconfig-truncatethreshold) in your config file.

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### test.for [​](#test-for)

*   **Alias:** `it.for`

Alternative to `test.each` to provide [`TestContext`](/guide/test-context).

The difference from `test.each` lies in how arrays are provided in the arguments. Non-array arguments to `test.for` (including template string usage) work exactly the same as for `test.each`.

ts

    // `each` spreads arrays
    test.each([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
    ])('add(%i, %i) -> %i', (a, b, expected) => { 
      expect(a + b).toBe(expected)
    })
    
    // `for` doesn't spread arrays (notice the square brackets around the arguments)
    test.for([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
    ])('add(%i, %i) -> %i', ([a, b, expected]) => { 
      expect(a + b).toBe(expected)
    })

The 2nd argument is [`TestContext`](/guide/test-context) and can be used for concurrent snapshots, for example:

ts

    test.concurrent.for([
      [1, 1],
      [1, 2],
      [2, 1],
    ])('add(%i, %i)', ([a, b], { expect }) => {
      expect(a + b).matchSnapshot()
    })

bench [​](#bench)
-----------------

*   **Type:** `(name: string | Function, fn: BenchFunction, options?: BenchOptions) => void`

`bench` defines a benchmark. In Vitest terms, benchmark is a function that defines a series of operations. Vitest runs this function multiple times to display different performance results.

Vitest uses the [`tinybench`](https://github.com/tinylibs/tinybench) library under the hood, inheriting all its options that can be used as a third argument.

ts

    import { bench } from 'vitest'
    
    bench('normal sorting', () => {
      const x = [1, 5, 4, 2, 3]
      x.sort((a, b) => {
        return a - b
      })
    }, { time: 1000 })

ts

    export interface Options {
      /**
       * time needed for running a benchmark task (milliseconds)
       * @default 500
       */
      time?: number
    
      /**
       * number of times that a task should run if even the time option is finished
       * @default 10
       */
      iterations?: number
    
      /**
       * function to get the current timestamp in milliseconds
       */
      now?: () => number
    
      /**
       * An AbortSignal for aborting the benchmark
       */
      signal?: AbortSignal
    
      /**
       * Throw if a task fails (events will not work if true)
       */
      throws?: boolean
    
      /**
       * warmup time (milliseconds)
       * @default 100ms
       */
      warmupTime?: number
    
      /**
       * warmup iterations
       * @default 5
       */
      warmupIterations?: number
    
      /**
       * setup function to run before each benchmark task (cycle)
       */
      setup?: Hook
    
      /**
       * teardown function to run after each benchmark task (cycle)
       */
      teardown?: Hook
    }

After the test case is run, the output structure information is as follows:

      name                      hz     min     max    mean     p75     p99    p995    p999     rme  samples
    · normal sorting  6,526,368.12  0.0001  0.3638  0.0002  0.0002  0.0002  0.0002  0.0004  ±1.41%   652638

ts

    export interface TaskResult {
      /*
       * the last error that was thrown while running the task
       */
      error?: unknown
    
      /**
       * The amount of time in milliseconds to run the benchmark task (cycle).
       */
      totalTime: number
    
      /**
       * the minimum value in the samples
       */
      min: number
      /**
       * the maximum value in the samples
       */
      max: number
    
      /**
       * the number of operations per second
       */
      hz: number
    
      /**
       * how long each operation takes (ms)
       */
      period: number
    
      /**
       * task samples of each task iteration time (ms)
       */
      samples: number[]
    
      /**
       * samples mean/average (estimate of the population mean)
       */
      mean: number
    
      /**
       * samples variance (estimate of the population variance)
       */
      variance: number
    
      /**
       * samples standard deviation (estimate of the population standard deviation)
       */
      sd: number
    
      /**
       * standard error of the mean (a.k.a. the standard deviation of the sampling distribution of the sample mean)
       */
      sem: number
    
      /**
       * degrees of freedom
       */
      df: number
    
      /**
       * critical value of the samples
       */
      critical: number
    
      /**
       * margin of error
       */
      moe: number
    
      /**
       * relative margin of error
       */
      rme: number
    
      /**
       * median absolute deviation
       */
      mad: number
    
      /**
       * p50/median percentile
       */
      p50: number
    
      /**
       * p75 percentile
       */
      p75: number
    
      /**
       * p99 percentile
       */
      p99: number
    
      /**
       * p995 percentile
       */
      p995: number
    
      /**
       * p999 percentile
       */
      p999: number
    }

### bench.skip [​](#bench-skip)

*   **Type:** `(name: string | Function, fn: BenchFunction, options?: BenchOptions) => void`

You can use `bench.skip` syntax to skip running certain benchmarks.

ts

    import { bench } from 'vitest'
    
    bench.skip('normal sorting', () => {
      const x = [1, 5, 4, 2, 3]
      x.sort((a, b) => {
        return a - b
      })
    })

### bench.only [​](#bench-only)

*   **Type:** `(name: string | Function, fn: BenchFunction, options?: BenchOptions) => void`

Use `bench.only` to only run certain benchmarks in a given suite. This is useful when debugging.

ts

    import { bench } from 'vitest'
    
    bench.only('normal sorting', () => {
      const x = [1, 5, 4, 2, 3]
      x.sort((a, b) => {
        return a - b
      })
    })

### bench.todo [​](#bench-todo)

*   **Type:** `(name: string | Function) => void`

Use `bench.todo` to stub benchmarks to be implemented later.

ts

    import { bench } from 'vitest'
    
    bench.todo('unimplemented test')

describe [​](#describe)
-----------------------

When you use `test` or `bench` in the top level of file, they are collected as part of the implicit suite for it. Using `describe` you can define a new suite in the current context, as a set of related tests or benchmarks and other nested suites. A suite lets you organize your tests and benchmarks so reports are more clear.

ts

    // basic.spec.ts
    // organizing tests
    
    import { describe, expect, test } from 'vitest'
    
    const person = {
      isActive: true,
      age: 32,
    }
    
    describe('person', () => {
      test('person is defined', () => {
        expect(person).toBeDefined()
      })
    
      test('is active', () => {
        expect(person.isActive).toBeTruthy()
      })
    
      test('age limit', () => {
        expect(person.age).toBeLessThanOrEqual(32)
      })
    })

ts

    // basic.bench.ts
    // organizing benchmarks
    
    import { bench, describe } from 'vitest'
    
    describe('sort', () => {
      bench('normal', () => {
        const x = [1, 5, 4, 2, 3]
        x.sort((a, b) => {
          return a - b
        })
      })
    
      bench('reverse', () => {
        const x = [1, 5, 4, 2, 3]
        x.reverse().sort((a, b) => {
          return a - b
        })
      })
    })

You can also nest describe blocks if you have a hierarchy of tests or benchmarks:

ts

    import { describe, expect, test } from 'vitest'
    
    function numberToCurrency(value: number | string) {
      if (typeof value !== 'number') {
        throw new TypeError('Value must be a number')
      }
    
      return value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    
    describe('numberToCurrency', () => {
      describe('given an invalid number', () => {
        test('composed of non-numbers to throw error', () => {
          expect(() => numberToCurrency('abc')).toThrowError()
        })
      })
    
      describe('given a valid number', () => {
        test('returns the correct currency format', () => {
          expect(numberToCurrency(10000)).toBe('10,000.00')
        })
      })
    })

### describe.skip [​](#describe-skip)

*   **Alias:** `suite.skip`

Use `describe.skip` in a suite to avoid running a particular describe block.

ts

    import { assert, describe, test } from 'vitest'
    
    describe.skip('skipped suite', () => {
      test('sqrt', () => {
        // Suite skipped, no error
        assert.equal(Math.sqrt(4), 3)
      })
    })

### describe.skipIf [​](#describe-skipif)

*   **Alias:** `suite.skipIf`

In some cases, you might run suites multiple times with different environments, and some of the suites might be environment-specific. Instead of wrapping the suite with `if`, you can use `describe.skipIf` to skip the suite whenever the condition is truthy.

ts

    import { describe, test } from 'vitest'
    
    const isDev = process.env.NODE_ENV === 'development'
    
    describe.skipIf(isDev)('prod only test suite', () => {
      // this test suite only runs in production
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### describe.runIf [​](#describe-runif)

*   **Alias:** `suite.runIf`

Opposite of [describe.skipIf](#describe-skipif).

ts

    import { assert, describe, test } from 'vitest'
    
    const isDev = process.env.NODE_ENV === 'development'
    
    describe.runIf(isDev)('dev only test suite', () => {
      // this test suite only runs in development
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### describe.only [​](#describe-only)

*   **Type:** `(name: string | Function, fn: TestFunction, options?: number | TestOptions) => void`

Use `describe.only` to only run certain suites

ts

    import { assert, describe, test } from 'vitest'
    
    // Only this suite (and others marked with only) are run
    describe.only('suite', () => {
      test('sqrt', () => {
        assert.equal(Math.sqrt(4), 3)
      })
    })
    
    describe('other suite', () => {
      // ... will be skipped
    })

Sometimes it is very useful to run `only` tests in a certain file, ignoring all other tests from the whole test suite, which pollute the output.

In order to do that run `vitest` with specific file containing the tests in question.

    # vitest interesting.test.ts

### describe.concurrent [​](#describe-concurrent)

*   **Alias:** `suite.concurrent`

`describe.concurrent` runs all inner suites and tests in parallel

ts

    import { describe, test } from 'vitest'
    
    // All suites and tests within this suite will be run in parallel
    describe.concurrent('suite', () => {
      test('concurrent test 1', async () => { /* ... */ })
      describe('concurrent suite 2', async () => {
        test('concurrent test inner 1', async () => { /* ... */ })
        test('concurrent test inner 2', async () => { /* ... */ })
      })
      test.concurrent('concurrent test 3', async () => { /* ... */ })
    })

`.skip`, `.only`, and `.todo` works with concurrent suites. All the following combinations are valid:

ts

    describe.concurrent(/* ... */)
    describe.skip.concurrent(/* ... */) // or describe.concurrent.skip(/* ... */)
    describe.only.concurrent(/* ... */) // or describe.concurrent.only(/* ... */)
    describe.todo.concurrent(/* ... */) // or describe.concurrent.todo(/* ... */)

When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.

ts

    describe.concurrent('suite', () => {
      test('concurrent test 1', async ({ expect }) => {
        expect(foo).toMatchSnapshot()
      })
      test('concurrent test 2', async ({ expect }) => {
        expect(foo).toMatchSnapshot()
      })
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### describe.sequential [​](#describe-sequential)

*   **Alias:** `suite.sequential`

`describe.sequential` in a suite marks every test as sequential. This is useful if you want to run tests in sequence within `describe.concurrent` or with the `--sequence.concurrent` command option.

ts

    import { describe, test } from 'vitest'
    
    describe.concurrent('suite', () => {
      test('concurrent test 1', async () => { /* ... */ })
      test('concurrent test 2', async () => { /* ... */ })
    
      describe.sequential('', () => {
        test('sequential test 1', async () => { /* ... */ })
        test('sequential test 2', async () => { /* ... */ })
      })
    })

### describe.shuffle [​](#describe-shuffle)

*   **Alias:** `suite.shuffle`

Vitest provides a way to run all tests in random order via CLI flag [`--sequence.shuffle`](/guide/cli) or config option [`sequence.shuffle`](/config/#sequence-shuffle), but if you want to have only part of your test suite to run tests in random order, you can mark it with this flag.

ts

    import { describe, test } from 'vitest'
    
    // or describe('suite', { shuffle: true }, ...)
    describe.shuffle('suite', () => {
      test('random test 1', async () => { /* ... */ })
      test('random test 2', async () => { /* ... */ })
      test('random test 3', async () => { /* ... */ })
    
      // `shuffle` is inherited
      describe('still random', () => {
        test('random 4.1', async () => { /* ... */ })
        test('random 4.2', async () => { /* ... */ })
      })
    
      // disable shuffle inside
      describe('not random', { shuffle: false }, () => {
        test('in order 5.1', async () => { /* ... */ })
        test('in order 5.2', async () => { /* ... */ })
      })
    })
    // order depends on sequence.seed option in config (Date.now() by default)

`.skip`, `.only`, and `.todo` works with random suites.

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### describe.todo [​](#describe-todo)

*   **Alias:** `suite.todo`

Use `describe.todo` to stub suites to be implemented later. An entry will be shown in the report for the tests so you know how many tests you still need to implement.

ts

    // An entry will be shown in the report for this suite
    describe.todo('unimplemented suite')

### describe.each [​](#describe-each)

*   **Alias:** `suite.each`

TIP

While `describe.each` is provided for Jest compatibility, Vitest also has [`describe.for`](#describe-for) which simplifies argument types and aligns with [`test.for`](#test-for).

Use `describe.each` if you have more than one test that depends on the same data.

ts

    import { describe, expect, test } from 'vitest'
    
    describe.each([
      { a: 1, b: 1, expected: 2 },
      { a: 1, b: 2, expected: 3 },
      { a: 2, b: 1, expected: 3 },
    ])('describe object add($a, $b)', ({ a, b, expected }) => {
      test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected)
      })
    
      test(`returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected)
      })
    
      test(`returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected)
      })
    })

Starting from Vitest 0.25.3, you can also use template string table.

*   First row should be column names, separated by `|`;
*   One or more subsequent rows of data supplied as template literal expressions using `${value}` syntax.

ts

    import { describe, expect, test } from 'vitest'
    
    describe.each`
      a               | b      | expected
      ${1}            | ${1}   | ${2}
      ${'a'}          | ${'b'} | ${'ab'}
      ${[]}           | ${'b'} | ${'b'}
      ${{}}           | ${'b'} | ${'[object Object]b'}
      ${{ asd: 1 }}   | ${'b'} | ${'[object Object]b'}
    `('describe template string add($a, $b)', ({ a, b, expected }) => {
      test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected)
      })
    })

WARNING

You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).

### describe.for [​](#describe-for)

*   **Alias:** `suite.for`

The difference from `describe.each` is how array case is provided in the arguments. Other non array case (including template string usage) works exactly same.

ts

    // `each` spreads array case
    describe.each([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
    ])('add(%i, %i) -> %i', (a, b, expected) => { 
      test('test', () => {
        expect(a + b).toBe(expected)
      })
    })
    
    // `for` doesn't spread array case
    describe.for([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
    ])('add(%i, %i) -> %i', ([a, b, expected]) => { 
      test('test', () => {
        expect(a + b).toBe(expected)
      })
    })

Setup and Teardown [​](#setup-and-teardown)
-------------------------------------------

These functions allow you to hook into the life cycle of tests to avoid repeating setup and teardown code. They apply to the current context: the file if they are used at the top-level or the current suite if they are inside a `describe` block. These hooks are not called, when you are running Vitest as a type checker.

### beforeEach [​](#beforeeach)

*   **Type:** `beforeEach(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called before each of the tests in the current context runs. If the function returns a promise, Vitest waits until the promise resolve before running the test.

Optionally, you can pass a timeout (in milliseconds) defining how long to wait before terminating. The default is 5 seconds.

ts

    import { beforeEach } from 'vitest'
    
    beforeEach(async () => {
      // Clear mocks and add some testing data after before each test run
      await stopMocking()
      await addUser({ name: 'John' })
    })

Here, the `beforeEach` ensures that user is added for each test.

`beforeEach` also accepts an optional cleanup function (equivalent to `afterEach`).

ts

    import { beforeEach } from 'vitest'
    
    beforeEach(async () => {
      // called once before each test run
      await prepareSomething()
    
      // clean up function, called once after each test run
      return async () => {
        await resetSomething()
      }
    })

### afterEach [​](#aftereach)

*   **Type:** `afterEach(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called after each one of the tests in the current context completes. If the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

ts

    import { afterEach } from 'vitest'
    
    afterEach(async () => {
      await clearTestingData() // clear testing data after each test run
    })

Here, the `afterEach` ensures that testing data is cleared after each test runs.

TIP

Vitest 1.3.0 added [`onTestFinished`](#ontestfinished) hook. You can call it during the test execution to cleanup any state after the test has finished running.

### beforeAll [​](#beforeall)

*   **Type:** `beforeAll(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called once before starting to run all tests in the current context. If the function returns a promise, Vitest waits until the promise resolve before running tests.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

ts

    import { beforeAll } from 'vitest'
    
    beforeAll(async () => {
      await startMocking() // called once before all tests run
    })

Here the `beforeAll` ensures that the mock data is set up before tests run.

`beforeAll` also accepts an optional cleanup function (equivalent to `afterAll`).

ts

    import { beforeAll } from 'vitest'
    
    beforeAll(async () => {
      // called once before all tests run
      await startMocking()
    
      // clean up function, called once after all tests run
      return async () => {
        await stopMocking()
      }
    })

### afterAll [​](#afterall)

*   **Type:** `afterAll(fn: () => Awaitable<void>, timeout?: number)`

Register a callback to be called once after all tests have run in the current context. If the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

ts

    import { afterAll } from 'vitest'
    
    afterAll(async () => {
      await stopMocking() // this method is called after all tests run
    })

Here the `afterAll` ensures that `stopMocking` method is called after all tests run.

Test Hooks [​](#test-hooks)
---------------------------

Vitest provides a few hooks that you can call _during_ the test execution to cleanup the state when the test has finished running.

WARNING

These hooks will throw an error if they are called outside of the test body.

### onTestFinished [​](#ontestfinished)

This hook is always called after the test has finished running. It is called after `afterEach` hooks since they can influence the test result. It receives an `ExtendedContext` object like `beforeEach` and `afterEach`.

ts

    import { onTestFinished, test } from 'vitest'
    
    test('performs a query', () => {
      const db = connectDb()
      onTestFinished(() => db.close())
      db.query('SELECT * FROM users')
    })

WARNING

If you are running tests concurrently, you should always use `onTestFinished` hook from the test context since Vitest doesn't track concurrent tests in global hooks:

ts

    import { test } from 'vitest'
    
    test.concurrent('performs a query', ({ onTestFinished }) => {
      const db = connectDb()
      onTestFinished(() => db.close())
      db.query('SELECT * FROM users')
    })

This hook is particularly useful when creating reusable logic:

ts

    // this can be in a separate file
    function getTestDb() {
      const db = connectMockedDb()
      onTestFinished(() => db.close())
      return db
    }
    
    test('performs a user query', async () => {
      const db = getTestDb()
      expect(
        await db.query('SELECT * from users').perform()
      ).toEqual([])
    })
    
    test('performs an organization query', async () => {
      const db = getTestDb()
      expect(
        await db.query('SELECT * from organizations').perform()
      ).toEqual([])
    })

TIP

This hook is always called in reverse order and is not affected by [`sequence.hooks`](/config/#sequence-hooks) option.

### onTestFailed [​](#ontestfailed)

This hook is called only after the test has failed. It is called after `afterEach` hooks since they can influence the test result. It receives an `ExtendedContext` object like `beforeEach` and `afterEach`. This hook is useful for debugging.

ts

    import { onTestFailed, test } from 'vitest'
    
    test('performs a query', () => {
      const db = connectDb()
      onTestFailed(({ task }) => {
        console.log(task.result.errors)
      })
      db.query('SELECT * FROM users')
    })

WARNING

If you are running tests concurrently, you should always use `onTestFailed` hook from the test context since Vitest doesn't track concurrent tests in global hooks:

ts

    import { test } from 'vitest'
    
    test.concurrent('performs a query', ({ onTestFailed }) => {
      const db = connectDb()
      onTestFailed(({ task }) => {
        console.log(task.result.errors)
      })
      db.query('SELECT * FROM users')
    })

Mock Functions [​](#mock-functions)
===================================

You can create a mock function to track its execution with `vi.fn` method. If you want to track a method on an already created object, you can use `vi.spyOn` method:

js

    import { vi } from 'vitest'
    
    const fn = vi.fn()
    fn('hello world')
    fn.mock.calls[0] === ['hello world']
    
    const market = {
      getApples: () => 100
    }
    
    const getApplesSpy = vi.spyOn(market, 'getApples')
    market.getApples()
    getApplesSpy.mock.calls.length === 1

You should use mock assertions (e.g., [`toHaveBeenCalled`](/api/expect#tohavebeencalled)) on [`expect`](/api/expect) to assert mock result. This API reference describes available properties and methods to manipulate mock behavior.

TIP

The custom function implementation in the types below is marked with a generic `<T>`.

getMockImplementation [​](#getmockimplementation)
-------------------------------------------------

ts

    function getMockImplementation(): T | undefined

Returns current mock implementation if there is one.

If the mock was created with [`vi.fn`](/api/vi#vi-fn), it will use the provided method as the mock implementation.

If the mock was created with [`vi.spyOn`](/api/vi#vi-spyon), it will return `undefined` unless a custom implementation is provided.

getMockName [​](#getmockname)
-----------------------------

ts

    function getMockName(): string

Use it to return the name assigned to the mock with the `.mockName(name)` method. By default, it will return `vi.fn()`.

mockClear [​](#mockclear)
-------------------------

ts

    function mockClear(): MockInstance<T>

Clears all information about every call. After calling it, all properties on `.mock` will return to their initial state. This method does not reset implementations. It is useful for cleaning up mocks between different assertions.

ts

    const person = {
      greet: (name: string) => `Hello ${name}`,
    }
    const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
    expect(person.greet('Alice')).toBe('mocked')
    expect(spy.mock.calls).toEqual([['Alice']])
    
    // clear call history but keep mock implementation
    spy.mockClear()
    expect(spy.mock.calls).toEqual([])
    expect(person.greet('Bob')).toBe('mocked')
    expect(spy.mock.calls).toEqual([['Bob']])

To automatically call this method before each test, enable the [`clearMocks`](/config/#clearmocks) setting in the configuration.

mockName [​](#mockname)
-----------------------

ts

    function mockName(name: string): MockInstance<T>

Sets the internal mock name. This is useful for identifying the mock when an assertion fails.

mockImplementation [​](#mockimplementation)
-------------------------------------------

ts

    function mockImplementation(fn: T): MockInstance<T>

Accepts a function to be used as the mock implementation. TypeScript expects the arguments and return type to match those of the original function.

ts

    const mockFn = vi.fn().mockImplementation((apples: number) => apples + 1)
    // or: vi.fn(apples => apples + 1);
    
    const NelliesBucket = mockFn(0)
    const BobsBucket = mockFn(1)
    
    NelliesBucket === 1 // true
    BobsBucket === 2 // true
    
    mockFn.mock.calls[0][0] === 0 // true
    mockFn.mock.calls[1][0] === 1 // true

mockImplementationOnce [​](#mockimplementationonce)
---------------------------------------------------

ts

    function mockImplementationOnce(fn: T): MockInstance<T>

Accepts a function to be used as the mock implementation. TypeScript expects the arguments and return type to match those of the original function. This method can be chained to produce different results for multiple function calls.

ts

    const myMockFn = vi
      .fn()
      .mockImplementationOnce(() => true) // 1st call
      .mockImplementationOnce(() => false) // 2nd call
    
    myMockFn() // 1st call: true
    myMockFn() // 2nd call: false

When the mocked function runs out of implementations, it will invoke the default implementation set with `vi.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

ts

    const myMockFn = vi
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
      .mockImplementationOnce(() => 'second call')
    
    // 'first call', 'second call', 'default', 'default'
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())

withImplementation [​](#withimplementation)
-------------------------------------------

ts

    function withImplementation(
      fn: T,
      cb: () => void
    ): MockInstance<T>
    function withImplementation(
      fn: T,
      cb: () => Promise<void>
    ): Promise<MockInstance<T>>

Overrides the original mock implementation temporarily while the callback is being executed.

js

    const myMockFn = vi.fn(() => 'original')
    
    myMockFn.withImplementation(() => 'temp', () => {
      myMockFn() // 'temp'
    })
    
    myMockFn() // 'original'

Can be used with an asynchronous callback. The method has to be awaited to use the original implementation afterward.

ts

    test('async callback', () => {
      const myMockFn = vi.fn(() => 'original')
    
      // We await this call since the callback is async
      await myMockFn.withImplementation(
        () => 'temp',
        async () => {
          myMockFn() // 'temp'
        },
      )
    
      myMockFn() // 'original'
    })

Note that this method takes precedence over the [`mockImplementationOnce`](#mockimplementationonce).

mockRejectedValue [​](#mockrejectedvalue)
-----------------------------------------

ts

    function mockRejectedValue(value: unknown): MockInstance<T>

Accepts an error that will be rejected when async function is called.

ts

    const asyncMock = vi.fn().mockRejectedValue(new Error('Async error'))
    
    await asyncMock() // throws Error<'Async error'>

mockRejectedValueOnce [​](#mockrejectedvalueonce)
-------------------------------------------------

ts

    function mockRejectedValueOnce(value: unknown): MockInstance<T>

Accepts a value that will be rejected during the next function call. If chained, each consecutive call will reject the specified value.

ts

    const asyncMock = vi
      .fn()
      .mockResolvedValueOnce('first call')
      .mockRejectedValueOnce(new Error('Async error'))
    
    await asyncMock() // 'first call'
    await asyncMock() // throws Error<'Async error'>

mockReset [​](#mockreset)
-------------------------

ts

    function mockReset(): MockInstance<T>

Does what [`mockClear`](#mockclear) does and resets inner implementation to the original function. This also resets all "once" implementations.

Note that resetting a mock from `vi.fn()` will set implementation to an empty function that returns `undefined`. resetting a mock from `vi.fn(impl)` will restore implementation to `impl`.

This is useful when you want to reset a mock to its original state.

ts

    const person = {
      greet: (name: string) => `Hello ${name}`,
    }
    const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
    expect(person.greet('Alice')).toBe('mocked')
    expect(spy.mock.calls).toEqual([['Alice']])
    
    // clear call history and reset implementation, but method is still spied
    spy.mockReset()
    expect(spy.mock.calls).toEqual([])
    expect(person.greet).toBe(spy)
    expect(person.greet('Bob')).toBe('Hello Bob')
    expect(spy.mock.calls).toEqual([['Bob']])

To automatically call this method before each test, enable the [`mockReset`](/config/#mockreset) setting in the configuration.

mockRestore [​](#mockrestore)
-----------------------------

ts

    function mockRestore(): MockInstance<T>

Does what [`mockReset`](#mockreset) does and restores original descriptors of spied-on objects.

Note that restoring a mock from `vi.fn()` will set implementation to an empty function that returns `undefined`. Restoring a mock from `vi.fn(impl)` will restore implementation to `impl`.

ts

    const person = {
      greet: (name: string) => `Hello ${name}`,
    }
    const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
    expect(person.greet('Alice')).toBe('mocked')
    expect(spy.mock.calls).toEqual([['Alice']])
    
    // clear call history and restore spied object method
    spy.mockRestore()
    expect(spy.mock.calls).toEqual([])
    expect(person.greet).not.toBe(spy)
    expect(person.greet('Bob')).toBe('Hello Bob')
    expect(spy.mock.calls).toEqual([])

To automatically call this method before each test, enable the [`restoreMocks`](/config/#restoremocks) setting in the configuration.

mockResolvedValue [​](#mockresolvedvalue)
-----------------------------------------

ts

    function mockResolvedValue(value: Awaited<ReturnType<T>>): MockInstance<T>

Accepts a value that will be resolved when the async function is called. TypeScript will only accept values that match the return type of the original function.

ts

    const asyncMock = vi.fn().mockResolvedValue(42)
    
    await asyncMock() // 42

mockResolvedValueOnce [​](#mockresolvedvalueonce)
-------------------------------------------------

ts

    function mockResolvedValueOnce(value: Awaited<ReturnType<T>>): MockInstance<T>

Accepts a value that will be resolved during the next function call. TypeScript will only accept values that match the return type of the original function. If chained, each consecutive call will resolve the specified value.

ts

    const asyncMock = vi
      .fn()
      .mockResolvedValue('default')
      .mockResolvedValueOnce('first call')
      .mockResolvedValueOnce('second call')
    
    await asyncMock() // first call
    await asyncMock() // second call
    await asyncMock() // default
    await asyncMock() // default

mockReturnThis [​](#mockreturnthis)
-----------------------------------

ts

    function mockReturnThis(): MockInstance<T>

Use this if you need to return the `this` context from the method without invoking the actual implementation. This is a shorthand for:

ts

    spy.mockImplementation(function () {
      return this
    })

mockReturnValue [​](#mockreturnvalue)
-------------------------------------

ts

    function mockReturnValue(value: ReturnType<T>): MockInstance<T>

Accepts a value that will be returned whenever the mock function is called. TypeScript will only accept values that match the return type of the original function.

ts

    const mock = vi.fn()
    mock.mockReturnValue(42)
    mock() // 42
    mock.mockReturnValue(43)
    mock() // 43

mockReturnValueOnce [​](#mockreturnvalueonce)
---------------------------------------------

ts

    function mockReturnValueOnce(value: ReturnType<T>): MockInstance<T>

Accepts a value that will be returned whenever the mock function is called. TypeScript will only accept values that match the return type of the original function.

When the mocked function runs out of implementations, it will invoke the default implementation set with `vi.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

ts

    const myMockFn = vi
      .fn()
      .mockReturnValue('default')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call')
    
    // 'first call', 'second call', 'default', 'default'
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())

mock.calls [​](#mock-calls)
---------------------------

ts

    const calls: Parameters<T>[]

This is an array containing all arguments for each call. One item of the array is the arguments of that call.

js

    const fn = vi.fn()
    
    fn('arg1', 'arg2')
    fn('arg3')
    
    fn.mock.calls === [
      ['arg1', 'arg2'], // first call
      ['arg3'], // second call
    ]

mock.lastCall [​](#mock-lastcall)
---------------------------------

ts

    const lastCall: Parameters<T> | undefined

This contains the arguments of the last call. If mock wasn't called, it will return `undefined`.

mock.results [​](#mock-results)
-------------------------------

ts

    interface MockResultReturn<T> {
      type: 'return'
      /**
       * The value that was returned from the function.
       * If function returned a Promise, then this will be a resolved value.
       */
      value: T
    }
    
    interface MockResultIncomplete {
      type: 'incomplete'
      value: undefined
    }
    
    interface MockResultThrow {
      type: 'throw'
      /**
       * An error that was thrown during function execution.
       */
      value: any
    }
    
    type MockResult<T> =
      | MockResultReturn<T>
      | MockResultThrow
      | MockResultIncomplete
    
    const results: MockResult<ReturnType<T>>[]

This is an array containing all values that were `returned` from the function. One item of the array is an object with properties `type` and `value`. Available types are:

*   `'return'` - function returned without throwing.
*   `'throw'` - function threw a value.

The `value` property contains the returned value or thrown error. If the function returned a `Promise`, then `result` will always be `'return'` even if the promise was rejected.

js

    const fn = vi.fn()
      .mockReturnValueOnce('result')
      .mockImplementationOnce(() => { throw new Error('thrown error') })
    
    const result = fn() // returned 'result'
    
    try {
      fn() // threw Error
    }
    catch {}
    
    fn.mock.results === [
      // first result
      {
        type: 'return',
        value: 'result',
      },
      // last result
      {
        type: 'throw',
        value: Error,
      },
    ]

mock.settledResults [​](#mock-settledresults)
---------------------------------------------

ts

    interface MockSettledResultFulfilled<T> {
      type: 'fulfilled'
      value: T
    }
    
    interface MockSettledResultRejected {
      type: 'rejected'
      value: any
    }
    
    export type MockSettledResult<T> =
      | MockSettledResultFulfilled<T>
      | MockSettledResultRejected
    
    const settledResults: MockSettledResult<Awaited<ReturnType<T>>>[]

An array containing all values that were `resolved` or `rejected` from the function.

This array will be empty if the function was never resolved or rejected.

js

    const fn = vi.fn().mockResolvedValueOnce('result')
    
    const result = fn()
    
    fn.mock.settledResults === []
    
    await result
    
    fn.mock.settledResults === [
      {
        type: 'fulfilled',
        value: 'result',
      },
    ]

mock.invocationCallOrder [​](#mock-invocationcallorder)
-------------------------------------------------------

ts

    const invocationCallOrder: number[]

This property returns the order of the mock function's execution. It is an array of numbers that are shared between all defined mocks.

js

    const fn1 = vi.fn()
    const fn2 = vi.fn()
    
    fn1()
    fn2()
    fn1()
    
    fn1.mock.invocationCallOrder === [1, 3]
    fn2.mock.invocationCallOrder === [2]

mock.contexts [​](#mock-contexts)
---------------------------------

ts

    const contexts: ThisParameterType<T>[]

This property is an array of `this` values used during each call to the mock function.

js

    const fn = vi.fn()
    const context = {}
    
    fn.apply(context)
    fn.call(context)
    
    fn.mock.contexts[0] === context
    fn.mock.contexts[1] === context

mock.instances [​](#mock-instances)
-----------------------------------

ts

    const instances: ReturnType<T>[]

This property is an array containing all instances that were created when the mock was called with the `new` keyword. Note that this is an actual context (`this`) of the function, not a return value.

WARNING

If mock was instantiated with `new MyClass()`, then `mock.instances` will be an array with one value:

js

    const MyClass = vi.fn()
    const a = new MyClass()
    
    MyClass.mock.instances[0] === a

If you return a value from constructor, it will not be in `instances` array, but instead inside `results`:

js

    const Spy = vi.fn(() => ({ method: vi.fn() }))
    const a = new Spy()
    
    Spy.mock.instances[0] !== a
    Spy.mock.results[0] === a

Vi [​](#vi)
===========

Vitest provides utility functions to help you out through its `vi` helper. You can access it globally (when [globals configuration](/config/#globals) is enabled), or import it from `vitest` directly:

js

    import { vi } from 'vitest'

Mock Modules [​](#mock-modules)
-------------------------------

This section describes the API that you can use when [mocking a module](/guide/mocking#modules). Beware that Vitest doesn't support mocking modules imported using `require()`.

### vi.mock [​](#vi-mock)

*   **Type**: `(path: string, factory?: MockOptions | ((importOriginal: () => unknown) => unknown)) => void`
*   **Type**: `<T>(path: Promise<T>, factory?: MockOptions | ((importOriginal: () => T) => T | Promise<T>)) => void`

Substitutes all imported modules from provided `path` with another module. You can use configured Vite aliases inside a path. The call to `vi.mock` is hoisted, so it doesn't matter where you call it. It will always be executed before all imports. If you need to reference some variables outside of its scope, you can define them inside [`vi.hoisted`](#vi-hoisted) and reference them inside `vi.mock`.

WARNING

`vi.mock` works only for modules that were imported with the `import` keyword. It doesn't work with `require`.

In order to hoist `vi.mock`, Vitest statically analyzes your files. It indicates that `vi` that was not directly imported from the `vitest` package (for example, from some utility file) cannot be used. Use `vi.mock` with `vi` imported from `vitest`, or enable [`globals`](/config/#globals) config option.

Vitest will not mock modules that were imported inside a [setup file](/config/#setupfiles) because they are cached by the time a test file is running. You can call [`vi.resetModules()`](#vi-resetmodules) inside [`vi.hoisted`](#vi-hoisted) to clear all module caches before running a test file.

If the `factory` function is defined, all imports will return its result. Vitest calls factory only once and caches results for all subsequent imports until [`vi.unmock`](#vi-unmock) or [`vi.doUnmock`](#vi-dounmock) is called.

Unlike in `jest`, the factory can be asynchronous. You can use [`vi.importActual`](#vi-importactual) or a helper with the factory passed in as the first argument, and get the original module inside.

You can also provide an object with a `spy` property instead of a factory function. If `spy` is `true`, then Vitest will automock the module as usual, but it won't override the implementation of exports. This is useful if you just want to assert that the exported method was called correctly by another method.

ts

    import { calculator } from './src/calculator.ts'
    
    vi.mock('./src/calculator.ts', { spy: true })
    
    // calls the original implementation,
    // but allows asserting the behaviour later
    const result = calculator(1, 2)
    
    expect(result).toBe(3)
    expect(calculator).toHaveBeenCalledWith(1, 2)
    expect(calculator).toHaveReturned(3)

Vitest also supports a module promise instead of a string in the `vi.mock` and `vi.doMock` methods for better IDE support. When the file is moved, the path will be updated, and `importOriginal` inherits the type automatically. Using this signature will also enforce factory return type to be compatible with the original module (keeping exports optional).

ts

    .(import('./path/to/module.js'), async () => {
      const  = await () // type is inferred
      return {
        ...,
        // replace some exports
        : .(),
      }
    })

Under the hood, Vitest still operates on a string and not a module object.

If you are using TypeScript with `paths` aliases configured in `tsconfig.json` however, the compiler won't be able to correctly resolve import types. In order to make it work, make sure to replace all aliased imports, with their corresponding relative paths. Eg. use `import('./path/to/module.js')` instead of `import('@/module')`.

WARNING

`vi.mock` is hoisted (in other words, _moved_) to **top of the file**. It means that whenever you write it (be it inside `beforeEach` or `test`), it will actually be called before that.

This also means that you cannot use any variables inside the factory that are defined outside the factory.

If you need to use variables inside the factory, try [`vi.doMock`](#vi-domock). It works the same way but isn't hoisted. Beware that it only mocks subsequent imports.

You can also reference variables defined by `vi.hoisted` method if it was declared before `vi.mock`:

ts

    import { namedExport } from './path/to/module.js'
    
    const mocks = vi.hoisted(() => {
      return {
        namedExport: vi.fn(),
      }
    })
    
    vi.mock('./path/to/module.js', () => {
      return {
        namedExport: mocks.namedExport,
      }
    })
    
    vi.mocked(namedExport).mockReturnValue(100)
    
    expect(namedExport()).toBe(100)
    expect(namedExport).toBe(mocks.namedExport)

WARNING

If you are mocking a module with default export, you will need to provide a `default` key within the returned factory function object. This is an ES module-specific caveat; therefore, `jest` documentation may differ as `jest` uses CommonJS modules. For example,

ts

    vi.mock('./path/to/module.js', () => {
      return {
        default: { myDefaultKey: vi.fn() },
        namedExport: vi.fn(),
        // etc...
      }
    })

If there is a `__mocks__` folder alongside a file that you are mocking, and the factory is not provided, Vitest will try to find a file with the same name in the `__mocks__` subfolder and use it as an actual module. If you are mocking a dependency, Vitest will try to find a `__mocks__` folder in the [root](/config/#root) of the project (default is `process.cwd()`). You can tell Vitest where the dependencies are located through the [`deps.moduleDirectories`](/config/#deps-moduledirectories) config option.

For example, you have this file structure:

    - __mocks__
      - axios.js
    - src
      __mocks__
        - increment.js
      - increment.js
    - tests
      - increment.test.js

If you call `vi.mock` in a test file without a factory or options provided, it will find a file in the `__mocks__` folder to use as a module:

increment.test.js

ts

    import { vi } from 'vitest'
    
    // axios is a default export from `__mocks__/axios.js`
    import axios from 'axios'
    
    // increment is a named export from `src/__mocks__/increment.js`
    import { increment } from '../increment.js'
    
    vi.mock('axios')
    vi.mock('../increment.js')
    
    axios.get(`/apples/${increment(1)}`)

WARNING

Beware that if you don't call `vi.mock`, modules **are not** mocked automatically. To replicate Jest's automocking behaviour, you can call `vi.mock` for each required module inside [`setupFiles`](/config/#setupfiles).

If there is no `__mocks__` folder or a factory provided, Vitest will import the original module and auto-mock all its exports. For the rules applied, see [algorithm](/guide/mocking#automocking-algorithm).

### vi.doMock [​](#vi-domock)

*   **Type**: `(path: string, factory?: MockOptions | ((importOriginal: () => unknown) => unknown)) => void`
*   **Type**: `<T>(path: Promise<T>, factory?: MockOptions | ((importOriginal: () => T) => T | Promise<T>)) => void`

The same as [`vi.mock`](#vi-mock), but it's not hoisted to the top of the file, so you can reference variables in the global file scope. The next [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) of the module will be mocked.

WARNING

This will not mock modules that were imported before this was called. Don't forget that all static imports in ESM are always [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#hoisting), so putting this before static import will not force it to be called before the import:

ts

    vi.doMock('./increment.js') // this will be called _after_ the import statement
    
    import { increment } from './increment.js'

increment.js

ts

    export function increment(number) {
      return number + 1
    }

increment.test.js

ts

    import { beforeEach, test } from 'vitest'
    import { increment } from './increment.js'
    
    // the module is not mocked, because vi.doMock is not called yet
    increment(1) === 2
    
    let mockedIncrement = 100
    
    beforeEach(() => {
      // you can access variables inside a factory
      vi.doMock('./increment.js', () => ({ increment: () => ++mockedIncrement }))
    })
    
    test('importing the next module imports mocked one', async () => {
      // original import WAS NOT MOCKED, because vi.doMock is evaluated AFTER imports
      expect(increment(1)).toBe(2)
      const { increment: mockedIncrement } = await import('./increment.js')
      // new dynamic import returns mocked module
      expect(mockedIncrement(1)).toBe(101)
      expect(mockedIncrement(1)).toBe(102)
      expect(mockedIncrement(1)).toBe(103)
    })

### vi.mocked [​](#vi-mocked)

*   **Type**: `<T>(obj: T, deep?: boolean) => MaybeMockedDeep<T>`
*   **Type**: `<T>(obj: T, options?: { partial?: boolean; deep?: boolean }) => MaybePartiallyMockedDeep<T>`

Type helper for TypeScript. Just returns the object that was passed.

When `partial` is `true` it will expect a `Partial<T>` as a return value. By default, this will only make TypeScript believe that the first level values are mocked. You can pass down `{ deep: true }` as a second argument to tell TypeScript that the whole object is mocked, if it actually is.

example.ts

ts

    export function add(x: number, y: number): number {
      return x + y
    }
    
    export function fetchSomething(): Promise<Response> {
      return fetch('https://vitest.dev/')
    }

example.test.ts

ts

    import * as example from './example'
    
    vi.mock('./example')
    
    test('1 + 1 equals 10', async () => {
      vi.mocked(example.add).mockReturnValue(10)
      expect(example.add(1, 1)).toBe(10)
    })
    
    test('mock return value with only partially correct typing', async () => {
      vi.mocked(example.fetchSomething).mockResolvedValue(new Response('hello'))
      vi.mocked(example.fetchSomething, { partial: true }).mockResolvedValue({ ok: false })
      // vi.mocked(example.someFn).mockResolvedValue({ ok: false }) // this is a type error
    })

### vi.importActual [​](#vi-importactual)

*   **Type**: `<T>(path: string) => Promise<T>`

Imports module, bypassing all checks if it should be mocked. Can be useful if you want to mock module partially.

ts

    vi.mock('./example.js', async () => {
      const originalModule = await vi.importActual('./example.js')
    
      return { ...originalModule, get: vi.fn() }
    })

### vi.importMock [​](#vi-importmock)

*   **Type**: `<T>(path: string) => Promise<MaybeMockedDeep<T>>`

Imports a module with all of its properties (including nested properties) mocked. Follows the same rules that [`vi.mock`](#vi-mock) does. For the rules applied, see [algorithm](/guide/mocking#automocking-algorithm).

### vi.unmock [​](#vi-unmock)

*   **Type**: `(path: string | Promise<Module>) => void`

Removes module from the mocked registry. All calls to import will return the original module even if it was mocked before. This call is hoisted to the top of the file, so it will only unmock modules that were defined in `setupFiles`, for example.

### vi.doUnmock [​](#vi-dounmock)

*   **Type**: `(path: string | Promise<Module>) => void`

The same as [`vi.unmock`](#vi-unmock), but is not hoisted to the top of the file. The next import of the module will import the original module instead of the mock. This will not unmock previously imported modules.

increment.js

ts

    export function increment(number) {
      return number + 1
    }

increment.test.js

ts

    import { increment } from './increment.js'
    
    // increment is already mocked, because vi.mock is hoisted
    increment(1) === 100
    
    // this is hoisted, and factory is called before the import on line 1
    vi.mock('./increment.js', () => ({ increment: () => 100 }))
    
    // all calls are mocked, and `increment` always returns 100
    increment(1) === 100
    increment(30) === 100
    
    // this is not hoisted, so other import will return unmocked module
    vi.doUnmock('./increment.js')
    
    // this STILL returns 100, because `vi.doUnmock` doesn't reevaluate a module
    increment(1) === 100
    increment(30) === 100
    
    // the next import is unmocked, now `increment` is the original function that returns count + 1
    const { increment: unmockedIncrement } = await import('./increment.js')
    
    unmockedIncrement(1) === 2
    unmockedIncrement(30) === 31

### vi.resetModules [​](#vi-resetmodules)

*   **Type**: `() => Vitest`

Resets modules registry by clearing the cache of all modules. This allows modules to be reevaluated when reimported. Top-level imports cannot be re-evaluated. Might be useful to isolate modules where local state conflicts between tests.

ts

    import { vi } from 'vitest'
    
    import { data } from './data.js' // Will not get reevaluated beforeEach test
    
    beforeEach(() => {
      vi.resetModules()
    })
    
    test('change state', async () => {
      const mod = await import('./some/path.js') // Will get reevaluated
      mod.changeLocalState('new value')
      expect(mod.getLocalState()).toBe('new value')
    })
    
    test('module has old state', async () => {
      const mod = await import('./some/path.js') // Will get reevaluated
      expect(mod.getLocalState()).toBe('old value')
    })

WARNING

Does not reset mocks registry. To clear mocks registry, use [`vi.unmock`](#vi-unmock) or [`vi.doUnmock`](#vi-dounmock).

### vi.dynamicImportSettled [​](#vi-dynamicimportsettled)

Wait for all imports to load. Useful, if you have a synchronous call that starts importing a module that you cannot wait otherwise.

ts

    import { expect, test } from 'vitest'
    
    // cannot track import because Promise is not returned
    function renderComponent() {
      import('./component.js').then(({ render }) => {
        render()
      })
    }
    
    test('operations are resolved', async () => {
      renderComponent()
      await vi.dynamicImportSettled()
      expect(document.querySelector('.component')).not.toBeNull()
    })

TIP

If during a dynamic import another dynamic import is initiated, this method will wait until all of them are resolved.

This method will also wait for the next `setTimeout` tick after the import is resolved so all synchronous operations should be completed by the time it's resolved.

Mocking Functions and Objects [​](#mocking-functions-and-objects)
-----------------------------------------------------------------

This section describes how to work with [method mocks](/api/mock) and replace environmental and global variables.

### vi.fn [​](#vi-fn)

*   **Type:** `(fn?: Function) => Mock`

Creates a spy on a function, though can be initiated without one. Every time a function is invoked, it stores its call arguments, returns, and instances. Also, you can manipulate its behavior with [methods](/api/mock). If no function is given, mock will return `undefined`, when invoked.

ts

    const getApples = vi.fn(() => 0)
    
    getApples()
    
    expect(getApples).toHaveBeenCalled()
    expect(getApples).toHaveReturnedWith(0)
    
    getApples.mockReturnValueOnce(5)
    
    const res = getApples()
    expect(res).toBe(5)
    expect(getApples).toHaveNthReturnedWith(2, 5)

### vi.mockObject 3.2.0\+ [​](#vi-mockobject-3-2-0)

*   **Type:** `<T>(value: T) => MaybeMockedDeep<T>`

Deeply mocks properties and methods of a given object in the same way as `vi.mock()` mocks module exports. See [automocking](/guide/mocking#automocking-algorithm) for the detail.

ts

    const original = {
      simple: () => 'value',
      nested: {
        method: () => 'real'
      },
      prop: 'foo',
    }
    
    const mocked = vi.mockObject(original)
    expect(mocked.simple()).toBe(undefined)
    expect(mocked.nested.method()).toBe(undefined)
    expect(mocked.prop).toBe('foo')
    
    mocked.simple.mockReturnValue('mocked')
    mocked.nested.method.mockReturnValue('mocked nested')
    
    expect(mocked.simple()).toBe('mocked')
    expect(mocked.nested.method()).toBe('mocked nested')

### vi.isMockFunction [​](#vi-ismockfunction)

*   **Type:** `(fn: Function) => boolean`

Checks that a given parameter is a mock function. If you are using TypeScript, it will also narrow down its type.

### vi.clearAllMocks [​](#vi-clearallmocks)

Calls [`.mockClear()`](/api/mock#mockclear) on all spies. This will clear mock history without affecting mock implementations.

### vi.resetAllMocks [​](#vi-resetallmocks)

Calls [`.mockReset()`](/api/mock#mockreset) on all spies. This will clear mock history and reset each mock's implementation to its original.

### vi.restoreAllMocks [​](#vi-restoreallmocks)

Calls [`.mockRestore()`](/api/mock#mockrestore) on all spies. This will clear mock history, restore all original mock implementations, and restore original descriptors of spied-on objects.

### vi.spyOn [​](#vi-spyon)

*   **Type:** `<T, K extends keyof T>(object: T, method: K, accessType?: 'get' | 'set') => MockInstance`

Creates a spy on a method or getter/setter of an object similar to [`vi.fn()`](#vi-fn). It returns a [mock function](/api/mock).

ts

    let apples = 0
    const cart = {
      getApples: () => 42,
    }
    
    const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => apples)
    apples = 1
    
    expect(cart.getApples()).toBe(1)
    
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveReturnedWith(1)

TIP

In environments that support [Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management), you can use `using` instead of `const` to automatically call `mockRestore` on any mocked function when the containing block is exited. This is especially useful for spied methods:

ts

    it('calls console.log', () => {
      using spy = vi.spyOn(console, 'log').mockImplementation(() => {})
      debug('message')
      expect(spy).toHaveBeenCalled()
    })
    // console.log is restored here

TIP

You can call [`vi.restoreAllMocks`](#vi-restoreallmocks) inside [`afterEach`](/api/#aftereach) (or enable [`test.restoreMocks`](/config/#restoremocks)) to restore all methods to their original implementations. This will restore the original [object descriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), so you won't be able to change method's implementation:

ts

    const cart = {
      getApples: () => 42,
    }
    
    const spy = vi.spyOn(cart, 'getApples').mockReturnValue(10)
    
    console.log(cart.getApples()) // 10
    vi.restoreAllMocks()
    console.log(cart.getApples()) // 42
    spy.mockReturnValue(10)
    console.log(cart.getApples()) // still 42!

TIP

It is not possible to spy on exported methods in [Browser Mode](/guide/browser/). Instead, you can spy on every exported method by calling `vi.mock("./file-path.js", { spy: true })`. This will mock every export but keep its implementation intact, allowing you to assert if the method was called correctly.

ts

    import { calculator } from './src/calculator.ts'
    
    vi.mock('./src/calculator.ts', { spy: true })
    
    calculator(1, 2)
    
    expect(calculator).toHaveBeenCalledWith(1, 2)
    expect(calculator).toHaveReturned(3)

And while it is possible to spy on exports in `jsdom` or other Node.js environments, this might change in the future.

### vi.stubEnv [​](#vi-stubenv)

*   **Type:** `<T extends string>(name: T, value: T extends "PROD" | "DEV" | "SSR" ? boolean : string | undefined) => Vitest`

Changes the value of environmental variable on `process.env` and `import.meta.env`. You can restore its value by calling `vi.unstubAllEnvs`.

ts

    import { vi } from 'vitest'
    
    // `process.env.NODE_ENV` and `import.meta.env.NODE_ENV`
    // are "development" before calling "vi.stubEnv"
    
    vi.stubEnv('NODE_ENV', 'production')
    
    process.env.NODE_ENV === 'production'
    import.meta.env.NODE_ENV === 'production'
    
    vi.stubEnv('NODE_ENV', undefined)
    
    process.env.NODE_ENV === undefined
    import.meta.env.NODE_ENV === undefined
    
    // doesn't change other envs
    import.meta.env.MODE === 'development'

TIP

You can also change the value by simply assigning it, but you won't be able to use `vi.unstubAllEnvs` to restore previous value:

ts

    import.meta.env.MODE = 'test'

### vi.unstubAllEnvs [​](#vi-unstuballenvs)

*   **Type:** `() => Vitest`

Restores all `import.meta.env` and `process.env` values that were changed with `vi.stubEnv`. When it's called for the first time, Vitest remembers the original value and will store it, until `unstubAllEnvs` is called again.

ts

    import { vi } from 'vitest'
    
    // `process.env.NODE_ENV` and `import.meta.env.NODE_ENV`
    // are "development" before calling stubEnv
    
    vi.stubEnv('NODE_ENV', 'production')
    
    process.env.NODE_ENV === 'production'
    import.meta.env.NODE_ENV === 'production'
    
    vi.stubEnv('NODE_ENV', 'staging')
    
    process.env.NODE_ENV === 'staging'
    import.meta.env.NODE_ENV === 'staging'
    
    vi.unstubAllEnvs()
    
    // restores to the value that were stored before the first "stubEnv" call
    process.env.NODE_ENV === 'development'
    import.meta.env.NODE_ENV === 'development'

### vi.stubGlobal [​](#vi-stubglobal)

*   **Type:** `(name: string | number | symbol, value: unknown) => Vitest`

Changes the value of global variable. You can restore its original value by calling `vi.unstubAllGlobals`.

ts

    import { vi } from 'vitest'
    
    // `innerWidth` is "0" before calling stubGlobal
    
    vi.stubGlobal('innerWidth', 100)
    
    innerWidth === 100
    globalThis.innerWidth === 100
    // if you are using jsdom or happy-dom
    window.innerWidth === 100

TIP

You can also change the value by simply assigning it to `globalThis` or `window` (if you are using `jsdom` or `happy-dom` environment), but you won't be able to use `vi.unstubAllGlobals` to restore original value:

ts

    globalThis.innerWidth = 100
    // if you are using jsdom or happy-dom
    window.innerWidth = 100

### vi.unstubAllGlobals [​](#vi-unstuballglobals)

*   **Type:** `() => Vitest`

Restores all global values on `globalThis`/`global` (and `window`/`top`/`self`/`parent`, if you are using `jsdom` or `happy-dom` environment) that were changed with `vi.stubGlobal`. When it's called for the first time, Vitest remembers the original value and will store it, until `unstubAllGlobals` is called again.

ts

    import { vi } from 'vitest'
    
    const Mock = vi.fn()
    
    // IntersectionObserver is "undefined" before calling "stubGlobal"
    
    vi.stubGlobal('IntersectionObserver', Mock)
    
    IntersectionObserver === Mock
    global.IntersectionObserver === Mock
    globalThis.IntersectionObserver === Mock
    // if you are using jsdom or happy-dom
    window.IntersectionObserver === Mock
    
    vi.unstubAllGlobals()
    
    globalThis.IntersectionObserver === undefined
    'IntersectionObserver' in globalThis === false
    // throws ReferenceError, because it's not defined
    IntersectionObserver === undefined

Fake Timers [​](#fake-timers)
-----------------------------

This sections describes how to work with [fake timers](/guide/mocking#timers).

### vi.advanceTimersByTime [​](#vi-advancetimersbytime)

*   **Type:** `(ms: number) => Vitest`

This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first.

ts

    let i = 0
    setInterval(() => console.log(++i), 50)
    
    vi.advanceTimersByTime(150)
    
    // log: 1
    // log: 2
    // log: 3

### vi.advanceTimersByTimeAsync [​](#vi-advancetimersbytimeasync)

*   **Type:** `(ms: number) => Promise<Vitest>`

This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first. This will include asynchronously set timers.

ts

    let i = 0
    setInterval(() => Promise.resolve().then(() => console.log(++i)), 50)
    
    await vi.advanceTimersByTimeAsync(150)
    
    // log: 1
    // log: 2
    // log: 3

### vi.advanceTimersToNextTimer [​](#vi-advancetimerstonexttimer)

*   **Type:** `() => Vitest`

Will call next available timer. Useful to make assertions between each timer call. You can chain call it to manage timers by yourself.

ts

    let i = 0
    setInterval(() => console.log(++i), 50)
    
    vi.advanceTimersToNextTimer() // log: 1
      .advanceTimersToNextTimer() // log: 2
      .advanceTimersToNextTimer() // log: 3

### vi.advanceTimersToNextTimerAsync [​](#vi-advancetimerstonexttimerasync)

*   **Type:** `() => Promise<Vitest>`

Will call next available timer and wait until it's resolved if it was set asynchronously. Useful to make assertions between each timer call.

ts

    let i = 0
    setInterval(() => Promise.resolve().then(() => console.log(++i)), 50)
    
    await vi.advanceTimersToNextTimerAsync() // log: 1
    expect(console.log).toHaveBeenCalledWith(1)
    
    await vi.advanceTimersToNextTimerAsync() // log: 2
    await vi.advanceTimersToNextTimerAsync() // log: 3

### vi.advanceTimersToNextFrame 2.1.0\+ [​](#vi-advancetimerstonextframe)

*   **Type:** `() => Vitest`

Similar to [`vi.advanceTimersByTime`](https://vitest.dev/api/vi#vi-advancetimersbytime), but will advance timers by the milliseconds needed to execute callbacks currently scheduled with `requestAnimationFrame`.

ts

    let frameRendered = false
    
    requestAnimationFrame(() => {
      frameRendered = true
    })
    
    vi.advanceTimersToNextFrame()
    
    expect(frameRendered).toBe(true)

### vi.getTimerCount [​](#vi-gettimercount)

*   **Type:** `() => number`

Get the number of waiting timers.

### vi.clearAllTimers [​](#vi-clearalltimers)

Removes all timers that are scheduled to run. These timers will never run in the future.

### vi.getMockedSystemTime [​](#vi-getmockedsystemtime)

*   **Type**: `() => Date | null`

Returns mocked current date. If date is not mocked the method will return `null`.

### vi.getRealSystemTime [​](#vi-getrealsystemtime)

*   **Type**: `() => number`

When using `vi.useFakeTimers`, `Date.now` calls are mocked. If you need to get real time in milliseconds, you can call this function.

### vi.runAllTicks [​](#vi-runallticks)

*   **Type:** `() => Vitest`

Calls every microtask that was queued by `process.nextTick`. This will also run all microtasks scheduled by themselves.

### vi.runAllTimers [​](#vi-runalltimers)

*   **Type:** `() => Vitest`

This method will invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimers` will be fired. If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](/config/#faketimers-looplimit)).

ts

    let i = 0
    setTimeout(() => console.log(++i))
    const interval = setInterval(() => {
      console.log(++i)
      if (i === 3) {
        clearInterval(interval)
      }
    }, 50)
    
    vi.runAllTimers()
    
    // log: 1
    // log: 2
    // log: 3

### vi.runAllTimersAsync [​](#vi-runalltimersasync)

*   **Type:** `() => Promise<Vitest>`

This method will asynchronously invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimersAsync` will be fired even asynchronous timers. If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](/config/#faketimers-looplimit)).

ts

    setTimeout(async () => {
      console.log(await Promise.resolve('result'))
    }, 100)
    
    await vi.runAllTimersAsync()
    
    // log: result

### vi.runOnlyPendingTimers [​](#vi-runonlypendingtimers)

*   **Type:** `() => Vitest`

This method will call every timer that was initiated after [`vi.useFakeTimers`](#vi-usefaketimers) call. It will not fire any timer that was initiated during its call.

ts

    let i = 0
    setInterval(() => console.log(++i), 50)
    
    vi.runOnlyPendingTimers()
    
    // log: 1

### vi.runOnlyPendingTimersAsync [​](#vi-runonlypendingtimersasync)

*   **Type:** `() => Promise<Vitest>`

This method will asynchronously call every timer that was initiated after [`vi.useFakeTimers`](#vi-usefaketimers) call, even asynchronous ones. It will not fire any timer that was initiated during its call.

ts

    setTimeout(() => {
      console.log(1)
    }, 100)
    setTimeout(() => {
      Promise.resolve().then(() => {
        console.log(2)
        setInterval(() => {
          console.log(3)
        }, 40)
      })
    }, 10)
    
    await vi.runOnlyPendingTimersAsync()
    
    // log: 2
    // log: 3
    // log: 3
    // log: 1

### vi.setSystemTime [​](#vi-setsystemtime)

*   **Type**: `(date: string | number | Date) => void`

If fake timers are enabled, this method simulates a user changing the system clock (will affect date related API like `hrtime`, `performance.now` or `new Date()`) - however, it will not fire any timers. If fake timers are not enabled, this method will only mock `Date.*` calls.

Useful if you need to test anything that depends on the current date - for example [Luxon](https://github.com/moment/luxon/) calls inside your code.

Accepts the same string and number arguments as the `Date`.

ts

    const date = new Date(1998, 11, 19)
    
    vi.useFakeTimers()
    vi.setSystemTime(date)
    
    expect(Date.now()).toBe(date.valueOf())
    
    vi.useRealTimers()

### vi.useFakeTimers [​](#vi-usefaketimers)

*   **Type:** `(config?: FakeTimerInstallOpts) => Vitest`

To enable mocking timers, you need to call this method. It will wrap all further calls to timers (such as `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `setImmediate`, `clearImmediate`, and `Date`) until [`vi.useRealTimers()`](#vi-userealtimers) is called.

Mocking `nextTick` is not supported when running Vitest inside `node:child_process` by using `--pool=forks`. NodeJS uses `process.nextTick` internally in `node:child_process` and hangs when it is mocked. Mocking `nextTick` is supported when running Vitest with `--pool=threads`.

The implementation is based internally on [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers).

TIP

`vi.useFakeTimers()` does not automatically mock `process.nextTick` and `queueMicrotask`. But you can enable it by specifying the option in `toFake` argument: `vi.useFakeTimers({ toFake: ['nextTick', 'queueMicrotask'] })`.

### vi.isFakeTimers [​](#vi-isfaketimers)

*   **Type:** `() => boolean`

Returns `true` if fake timers are enabled.

### vi.useRealTimers [​](#vi-userealtimers)

*   **Type:** `() => Vitest`

When timers have run out, you may call this method to return mocked timers to its original implementations. All timers that were scheduled before will be discarded.

Miscellaneous [​](#miscellaneous)
---------------------------------

A set of useful helper functions that Vitest provides.

### vi.waitFor [​](#vi-waitfor)

*   **Type:** `<T>(callback: WaitForCallback<T>, options?: number | WaitForOptions) => Promise<T>`

Wait for the callback to execute successfully. If the callback throws an error or returns a rejected promise it will continue to wait until it succeeds or times out.

If options is set to a number, the effect is equivalent to setting `{ timeout: options }`.

This is very useful when you need to wait for some asynchronous action to complete, for example, when you start a server and need to wait for it to start.

ts

    import { expect, test, vi } from 'vitest'
    import { createServer } from './server.js'
    
    test('Server started successfully', async () => {
      const server = createServer()
    
      await vi.waitFor(
        () => {
          if (!server.isReady) {
            throw new Error('Server not started')
          }
    
          console.log('Server started')
        },
        {
          timeout: 500, // default is 1000
          interval: 20, // default is 50
        }
      )
      expect(server.isReady).toBe(true)
    })

It also works for asynchronous callbacks

ts

    // @vitest-environment jsdom
    
    import { expect, test, vi } from 'vitest'
    import { getDOMElementAsync, populateDOMAsync } from './dom.js'
    
    test('Element exists in a DOM', async () => {
      // start populating DOM
      populateDOMAsync()
    
      const element = await vi.waitFor(async () => {
        // try to get the element until it exists
        const element = await getDOMElementAsync() as HTMLElement | null
        expect(element).toBeTruthy()
        expect(element.dataset.initialized).toBeTruthy()
        return element
      }, {
        timeout: 500, // default is 1000
        interval: 20, // default is 50
      })
      expect(element).toBeInstanceOf(HTMLElement)
    })

If `vi.useFakeTimers` is used, `vi.waitFor` automatically calls `vi.advanceTimersByTime(interval)` in every check callback.

### vi.waitUntil [​](#vi-waituntil)

*   **Type:** `<T>(callback: WaitUntilCallback<T>, options?: number | WaitUntilOptions) => Promise<T>`

This is similar to `vi.waitFor`, but if the callback throws any errors, execution is immediately interrupted and an error message is received. If the callback returns falsy value, the next check will continue until truthy value is returned. This is useful when you need to wait for something to exist before taking the next step.

Look at the example below. We can use `vi.waitUntil` to wait for the element to appear on the page, and then we can do something with the element.

ts

    import { expect, test, vi } from 'vitest'
    
    test('Element render correctly', async () => {
      const element = await vi.waitUntil(
        () => document.querySelector('.element'),
        {
          timeout: 500, // default is 1000
          interval: 20, // default is 50
        }
      )
    
      // do something with the element
      expect(element.querySelector('.element-child')).toBeTruthy()
    })

### vi.hoisted [​](#vi-hoisted)

*   **Type**: `<T>(factory: () => T) => T`

All static `import` statements in ES modules are hoisted to the top of the file, so any code that is defined before the imports will actually be executed after imports are evaluated.

However, it can be useful to invoke some side effects like mocking dates before importing a module.

To bypass this limitation, you can rewrite static imports into dynamic ones like this:

diff

    callFunctionWithSideEffect()
    - import { value } from './some/module.js'
    + const { value } = await import('./some/module.js')

When running `vitest`, you can do this automatically by using `vi.hoisted` method. Under the hood, Vitest will convert static imports into dynamic ones with preserved live-bindings.

diff

    - callFunctionWithSideEffect()
    import { value } from './some/module.js'
    + vi.hoisted(() => callFunctionWithSideEffect())

IMPORTS ARE NOT AVAILABLE

Running code before the imports means that you cannot access imported variables because they are not defined yet:

ts

    import { value } from './some/module.js'
    
    vi.hoisted(() => { value }) // throws an error

This code will produce an error:

    Cannot access '__vi_import_0__' before initialization

If you need to access a variable from another module inside of `vi.hoisted`, use dynamic import:

ts

    await vi.hoisted(async () => {
      const { value } = await import('./some/module.js')
    })

However, it is discourage to import anything inside of `vi.hoisted` because imports are already hoisted - if you need to execute something before the tests are running, just execute it in the imported module itself.

This method returns the value that was returned from the factory. You can use that value in your `vi.mock` factories if you need easy access to locally defined variables:

ts

    import { expect, vi } from 'vitest'
    import { originalMethod } from './path/to/module.js'
    
    const { mockedMethod } = vi.hoisted(() => {
      return { mockedMethod: vi.fn() }
    })
    
    vi.mock('./path/to/module.js', () => {
      return { originalMethod: mockedMethod }
    })
    
    mockedMethod.mockReturnValue(100)
    expect(originalMethod()).toBe(100)

Note that this method can also be called asynchronously even if your environment doesn't support top-level await:

ts

    const json = await vi.hoisted(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      return response.json()
    })

### vi.setConfig [​](#vi-setconfig)

*   **Type**: `RuntimeConfig`

Updates config for the current test file. This method supports only config options that will affect the current test file:

ts

    vi.setConfig({
      allowOnly: true,
      testTimeout: 10_000,
      hookTimeout: 10_000,
      clearMocks: true,
      restoreMocks: true,
      fakeTimers: {
        now: new Date(2021, 11, 19),
        // supports the whole object
      },
      maxConcurrency: 10,
      sequence: {
        hooks: 'stack'
        // supports only "sequence.hooks"
      }
    })

### vi.resetConfig [​](#vi-resetconfig)

*   **Type**: `RuntimeConfig`

If [`vi.setConfig`](#vi-setconfig) was called before, this will reset config to the original state.

expect [​](#expect)
===================

The following types are used in the type signatures below

ts

    type Awaitable<T> = T | PromiseLike<T>

`expect` is used to create assertions. In this context `assertions` are functions that can be called to assert a statement. Vitest provides `chai` assertions by default and also `Jest` compatible assertions built on top of `chai`. Unlike `Jest`, Vitest supports a message as the second argument - if the assertion fails, the error message will be equal to it.

ts

    export interface ExpectStatic extends Chai.ExpectStatic, AsymmetricMatchersContaining {
      <T>(actual: T, message?: string): Assertion<T>
      extend: (expects: MatchersObject) => void
      anything: () => any
      any: (constructor: unknown) => any
      getState: () => MatcherState
      setState: (state: Partial<MatcherState>) => void
      not: AsymmetricMatchersContaining
    }

For example, this code asserts that an `input` value is equal to `2`. If it's not, the assertion will throw an error, and the test will fail.

ts

    import {  } from 'vitest'
    
    const  = .(4)
    
    ()..(2) // chai API
    ().(2) // jest API

Technically this example doesn't use [`test`](/api/#test) function, so in the console you will see Node.js error instead of Vitest output. To learn more about `test`, please read [Test API Reference](/api/).

Also, `expect` can be used statically to access matcher functions, described later, and more.

WARNING

`expect` has no effect on testing types, if the expression doesn't have a type error. If you want to use Vitest as [type checker](/guide/testing-types), use [`expectTypeOf`](/api/expect-typeof) or [`assertType`](/api/assert-type).

soft [​](#soft)
---------------

*   **Type:** `ExpectStatic & (actual: any) => Assertions`

`expect.soft` functions similarly to `expect`, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.

ts

    import { expect, test } from 'vitest'
    
    test('expect.soft test', () => {
      expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
      expect.soft(1 + 2).toBe(4) // mark the test as fail and continue
    })
    // reporter will report both errors at the end of the run

It can also be used with `expect`. if `expect` assertion fails, the test will be terminated and all errors will be displayed.

ts

    import { expect, test } from 'vitest'
    
    test('expect.soft test', () => {
      expect.soft(1 + 1).toBe(3) // mark the test as fail and continue
      expect(1 + 2).toBe(4) // failed and terminate the test, all previous errors will be output
      expect.soft(1 + 3).toBe(5) // do not run
    })

WARNING

`expect.soft` can only be used inside the [`test`](/api/#test) function.

poll [​](#poll)
---------------

ts

    interface ExpectPoll extends ExpectStatic {
      (actual: () => T, options: { interval; timeout; message }): Promise<Assertions<T>>
    }

`expect.poll` reruns the _assertion_ until it is succeeded. You can configure how many times Vitest should rerun the `expect.poll` callback by setting `interval` and `timeout` options.

If an error is thrown inside the `expect.poll` callback, Vitest will retry again until the timeout runs out.

ts

    import { expect, test } from 'vitest'
    
    test('element exists', async () => {
      asyncInjectElement()
    
      await expect.poll(() => document.querySelector('.element')).toBeTruthy()
    })

WARNING

`expect.poll` makes every assertion asynchronous, so you need to await it. Since Vitest 3, if you forget to await it, the test will fail with a warning to do so.

`expect.poll` doesn't work with several matchers:

*   Snapshot matchers are not supported because they will always succeed. If your condition is flaky, consider using [`vi.waitFor`](/api/vi#vi-waitfor) instead to resolve it first:

ts

    import { expect, vi } from 'vitest'
    
    const flakyValue = await vi.waitFor(() => getFlakyValue())
    expect(flakyValue).toMatchSnapshot()

*   `.resolves` and `.rejects` are not supported. `expect.poll` already awaits the condition if it's asynchronous.
*   `toThrow` and its aliases are not supported because the `expect.poll` condition is always resolved before the matcher gets the value

not [​](#not)
-------------

Using `not` will negate the assertion. For example, this code asserts that an `input` value is not equal to `2`. If it's equal, the assertion will throw an error, and the test will fail.

ts

    import { expect, test } from 'vitest'
    
    const input = Math.sqrt(16)
    
    expect(input).not.to.equal(2) // chai API
    expect(input).not.toBe(2) // jest API

toBe [​](#tobe)
---------------

*   **Type:** `(value: any) => Awaitable<void>`

`toBe` can be used to assert if primitives are equal or that objects share the same reference. It is equivalent of calling `expect(Object.is(3, 3)).toBe(true)`. If the objects are not the same, but you want to check if their structures are identical, you can use [`toEqual`](#toequal).

For example, the code below checks if the trader has 13 apples.

ts

    import { expect, test } from 'vitest'
    
    const stock = {
      type: 'apples',
      count: 13,
    }
    
    test('stock has 13 apples', () => {
      expect(stock.type).toBe('apples')
      expect(stock.count).toBe(13)
    })
    
    test('stocks are the same', () => {
      const refStock = stock // same reference
    
      expect(stock).toBe(refStock)
    })

Try not to use `toBe` with floating-point numbers. Since JavaScript rounds them, `0.1 + 0.2` is not strictly `0.3`. To reliably assert floating-point numbers, use [`toBeCloseTo`](#tobecloseto) assertion.

toBeCloseTo [​](#tobecloseto)
-----------------------------

*   **Type:** `(value: number, numDigits?: number) => Awaitable<void>`

Use `toBeCloseTo` to compare floating-point numbers. The optional `numDigits` argument limits the number of digits to check _after_ the decimal point. For example:

ts

    import { expect, test } from 'vitest'
    
    test.fails('decimals are not equal in javascript', () => {
      expect(0.2 + 0.1).toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
    })
    
    test('decimals are rounded to 5 after the point', () => {
      // 0.2 + 0.1 is 0.30000 | "000000000004" removed
      expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
      // nothing from 0.30000000000000004 is removed
      expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50)
    })

toBeDefined [​](#tobedefined)
-----------------------------

*   **Type:** `() => Awaitable<void>`

`toBeDefined` asserts that the value is not equal to `undefined`. Useful use case would be to check if function _returned_ anything.

ts

    import { expect, test } from 'vitest'
    
    function getApples() {
      return 3
    }
    
    test('function returned something', () => {
      expect(getApples()).toBeDefined()
    })

toBeUndefined [​](#tobeundefined)
---------------------------------

*   **Type:** `() => Awaitable<void>`

Opposite of `toBeDefined`, `toBeUndefined` asserts that the value _is_ equal to `undefined`. Useful use case would be to check if function hasn't _returned_ anything.

ts

    import { expect, test } from 'vitest'
    
    function getApplesFromStock(stock: string) {
      if (stock === 'Bill') {
        return 13
      }
    }
    
    test('mary doesn\'t have a stock', () => {
      expect(getApplesFromStock('Mary')).toBeUndefined()
    })

toBeTruthy [​](#tobetruthy)
---------------------------

*   **Type:** `() => Awaitable<void>`

`toBeTruthy` asserts that the value is true when converted to boolean. Useful if you don't care for the value, but just want to know it can be converted to `true`.

For example, having this code you don't care for the return value of `stocks.getInfo` - it maybe a complex object, a string, or anything else. The code will still work.

ts

    import { Stocks } from './stocks.js'
    
    const stocks = new Stocks()
    stocks.sync('Bill')
    if (stocks.getInfo('Bill')) {
      stocks.sell('apples', 'Bill')
    }

So if you want to test that `stocks.getInfo` will be truthy, you could write:

ts

    import { expect, test } from 'vitest'
    import { Stocks } from './stocks.js'
    
    const stocks = new Stocks()
    
    test('if we know Bill stock, sell apples to him', () => {
      stocks.sync('Bill')
      expect(stocks.getInfo('Bill')).toBeTruthy()
    })

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

toBeFalsy [​](#tobefalsy)
-------------------------

*   **Type:** `() => Awaitable<void>`

`toBeFalsy` asserts that the value is false when converted to boolean. Useful if you don't care for the value, but just want to know if it can be converted to `false`.

For example, having this code you don't care for the return value of `stocks.stockFailed` - it may return any falsy value, but the code will still work.

ts

    import { Stocks } from './stocks.js'
    
    const stocks = new Stocks()
    stocks.sync('Bill')
    if (!stocks.stockFailed('Bill')) {
      stocks.sell('apples', 'Bill')
    }

So if you want to test that `stocks.stockFailed` will be falsy, you could write:

ts

    import { expect, test } from 'vitest'
    import { Stocks } from './stocks.js'
    
    const stocks = new Stocks()
    
    test('if Bill stock hasn\'t failed, sell apples to him', () => {
      stocks.syncStocks('Bill')
      expect(stocks.stockFailed('Bill')).toBeFalsy()
    })

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

toBeNull [​](#tobenull)
-----------------------

*   **Type:** `() => Awaitable<void>`

`toBeNull` simply asserts if something is `null`. Alias for `.toBe(null)`.

ts

    import { expect, test } from 'vitest'
    
    function apples() {
      return null
    }
    
    test('we don\'t have apples', () => {
      expect(apples()).toBeNull()
    })

toBeNaN [​](#tobenan)
---------------------

*   **Type:** `() => Awaitable<void>`

`toBeNaN` simply asserts if something is `NaN`. Alias for `.toBe(NaN)`.

ts

    import { expect, test } from 'vitest'
    
    let i = 0
    
    function getApplesCount() {
      i++
      return i > 1 ? Number.NaN : i
    }
    
    test('getApplesCount has some unusual side effects...', () => {
      expect(getApplesCount()).not.toBeNaN()
      expect(getApplesCount()).toBeNaN()
    })

toBeOneOf [​](#tobeoneof)
-------------------------

*   **Type:** `(sample: Array<any>) => any`

`toBeOneOf` asserts if a value matches any of the values in the provided array.

ts

    import { expect, test } from 'vitest'
    
    test('fruit is one of the allowed values', () => {
      expect(fruit).toBeOneOf(['apple', 'banana', 'orange'])
    })

The asymmetric matcher is particularly useful when testing optional properties that could be either `null` or `undefined`:

ts

    test('optional properties can be null or undefined', () => {
      const user = {
        firstName: 'John',
        middleName: undefined,
        lastName: 'Doe'
      }
    
      expect(user).toEqual({
        firstName: expect.any(String),
        middleName: expect.toBeOneOf([expect.any(String), undefined]),
        lastName: expect.any(String),
      })
    })

TIP

You can use `expect.not` with this matcher to ensure a value does NOT match any of the provided options.

toBeTypeOf [​](#tobetypeof)
---------------------------

*   **Type:** `(c: 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined') => Awaitable<void>`

`toBeTypeOf` asserts if an actual value is of type of received type.

ts

    import { expect, test } from 'vitest'
    
    const actual = 'stock'
    
    test('stock is type of string', () => {
      expect(actual).toBeTypeOf('string')
    })

toBeInstanceOf [​](#tobeinstanceof)
-----------------------------------

*   **Type:** `(c: any) => Awaitable<void>`

`toBeInstanceOf` asserts if an actual value is instance of received class.

ts

    import { expect, test } from 'vitest'
    import { Stocks } from './stocks.js'
    
    const stocks = new Stocks()
    
    test('stocks are instance of Stocks', () => {
      expect(stocks).toBeInstanceOf(Stocks)
    })

toBeGreaterThan [​](#tobegreaterthan)
-------------------------------------

*   **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThan` asserts if actual value is greater than received one. Equal values will fail the test.

ts

    import { expect, test } from 'vitest'
    import { getApples } from './stocks.js'
    
    test('have more then 10 apples', () => {
      expect(getApples()).toBeGreaterThan(10)
    })

toBeGreaterThanOrEqual [​](#tobegreaterthanorequal)
---------------------------------------------------

*   **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThanOrEqual` asserts if actual value is greater than received one or equal to it.

ts

    import { expect, test } from 'vitest'
    import { getApples } from './stocks.js'
    
    test('have 11 apples or more', () => {
      expect(getApples()).toBeGreaterThanOrEqual(11)
    })

toBeLessThan [​](#tobelessthan)
-------------------------------

*   **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThan` asserts if actual value is less than received one. Equal values will fail the test.

ts

    import { expect, test } from 'vitest'
    import { getApples } from './stocks.js'
    
    test('have less then 20 apples', () => {
      expect(getApples()).toBeLessThan(20)
    })

toBeLessThanOrEqual [​](#tobelessthanorequal)
---------------------------------------------

*   **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThanOrEqual` asserts if actual value is less than received one or equal to it.

ts

    import { expect, test } from 'vitest'
    import { getApples } from './stocks.js'
    
    test('have 11 apples or less', () => {
      expect(getApples()).toBeLessThanOrEqual(11)
    })

toEqual [​](#toequal)
---------------------

*   **Type:** `(received: any) => Awaitable<void>`

`toEqual` asserts if actual value is equal to received one or has the same structure, if it is an object (compares them recursively). You can see the difference between `toEqual` and [`toBe`](#tobe) in this example:

ts

    import { expect, test } from 'vitest'
    
    const stockBill = {
      type: 'apples',
      count: 13,
    }
    
    const stockMary = {
      type: 'apples',
      count: 13,
    }
    
    test('stocks have the same properties', () => {
      expect(stockBill).toEqual(stockMary)
    })
    
    test('stocks are not the same', () => {
      expect(stockBill).not.toBe(stockMary)
    })

WARNING

For `Error` objects, non-enumerable properties such as `name`, `message`, `cause` and `AggregateError.errors` are also compared. For `Error.cause`, the comparison is done asymmetrically:

ts

    // success
    expect(new Error('hi', { cause: 'x' })).toEqual(new Error('hi'))
    
    // fail
    expect(new Error('hi')).toEqual(new Error('hi', { cause: 'x' }))

To test if something was thrown, use [`toThrowError`](#tothrowerror) assertion.

toStrictEqual [​](#tostrictequal)
---------------------------------

*   **Type:** `(received: any) => Awaitable<void>`

`toStrictEqual` asserts if the actual value is equal to the received one or has the same structure if it is an object (compares them recursively), and of the same type.

Differences from [`.toEqual`](#toequal):

*   Keys with `undefined` properties are checked. e.g. `{a: undefined, b: 2}` does not match `{b: 2}` when using `.toStrictEqual`.
*   Array sparseness is checked. e.g. `[, 1]` does not match `[undefined, 1]` when using `.toStrictEqual`.
*   Object types are checked to be equal. e.g. A class instance with fields `a` and `b` will not equal a literal object with fields `a` and `b`.

ts

    import { expect, test } from 'vitest'
    
    class Stock {
      constructor(type) {
        this.type = type
      }
    }
    
    test('structurally the same, but semantically different', () => {
      expect(new Stock('apples')).toEqual({ type: 'apples' })
      expect(new Stock('apples')).not.toStrictEqual({ type: 'apples' })
    })

toContain [​](#tocontain)
-------------------------

*   **Type:** `(received: string) => Awaitable<void>`

`toContain` asserts if the actual value is in an array. `toContain` can also check whether a string is a substring of another string. If you are running tests in a browser-like environment, this assertion can also check if class is contained in a `classList`, or an element is inside another one.

ts

    import { expect, test } from 'vitest'
    import { getAllFruits } from './stocks.js'
    
    test('the fruit list contains orange', () => {
      expect(getAllFruits()).toContain('orange')
    
      const element = document.querySelector('#el')
      // element has a class
      expect(element.classList).toContain('flex')
      // element is inside another one
      expect(document.querySelector('#wrapper')).toContain(element)
    })

toContainEqual [​](#tocontainequal)
-----------------------------------

*   **Type:** `(received: any) => Awaitable<void>`

`toContainEqual` asserts if an item with a specific structure and values is contained in an array. It works like [`toEqual`](#toequal) inside for each element.

ts

    import { expect, test } from 'vitest'
    import { getFruitStock } from './stocks.js'
    
    test('apple available', () => {
      expect(getFruitStock()).toContainEqual({ fruit: 'apple', count: 5 })
    })

toHaveLength [​](#tohavelength)
-------------------------------

*   **Type:** `(received: number) => Awaitable<void>`

`toHaveLength` asserts if an object has a `.length` property and it is set to a certain numeric value.

ts

    import { expect, test } from 'vitest'
    
    test('toHaveLength', () => {
      expect('abc').toHaveLength(3)
      expect([1, 2, 3]).toHaveLength(3)
    
      expect('').not.toHaveLength(3) // doesn't have .length of 3
      expect({ length: 3 }).toHaveLength(3)
    })

toHaveProperty [​](#tohaveproperty)
-----------------------------------

*   **Type:** `(key: any, received?: any) => Awaitable<void>`

`toHaveProperty` asserts if a property at provided reference `key` exists for an object.

You can provide an optional value argument also known as deep equality, like the `toEqual` matcher to compare the received property value.

ts

    import { expect, test } from 'vitest'
    
    const invoice = {
      'isActive': true,
      'P.O': '12345',
      'customer': {
        first_name: 'John',
        last_name: 'Doe',
        location: 'China',
      },
      'total_amount': 5000,
      'items': [
        {
          type: 'apples',
          quantity: 10,
        },
        {
          type: 'oranges',
          quantity: 5,
        },
      ],
    }
    
    test('John Doe Invoice', () => {
      expect(invoice).toHaveProperty('isActive') // assert that the key exists
      expect(invoice).toHaveProperty('total_amount', 5000) // assert that the key exists and the value is equal
    
      expect(invoice).not.toHaveProperty('account') // assert that this key does not exist
    
      // Deep referencing using dot notation
      expect(invoice).toHaveProperty('customer.first_name')
      expect(invoice).toHaveProperty('customer.last_name', 'Doe')
      expect(invoice).not.toHaveProperty('customer.location', 'India')
    
      // Deep referencing using an array containing the key
      expect(invoice).toHaveProperty('items[0].type', 'apples')
      expect(invoice).toHaveProperty('items.0.type', 'apples') // dot notation also works
    
      // Deep referencing using an array containing the keyPath
      expect(invoice).toHaveProperty(['items', 0, 'type'], 'apples')
      expect(invoice).toHaveProperty(['items', '0', 'type'], 'apples') // string notation also works
    
      // Wrap your key in an array to avoid the key from being parsed as a deep reference
      expect(invoice).toHaveProperty(['P.O'], '12345')
    })

toMatch [​](#tomatch)
---------------------

*   **Type:** `(received: string | regexp) => Awaitable<void>`

`toMatch` asserts if a string matches a regular expression or a string.

ts

    import { expect, test } from 'vitest'
    
    test('top fruits', () => {
      expect('top fruits include apple, orange and grape').toMatch(/apple/)
      expect('applefruits').toMatch('fruit') // toMatch also accepts a string
    })

toMatchObject [​](#tomatchobject)
---------------------------------

*   **Type:** `(received: object | array) => Awaitable<void>`

`toMatchObject` asserts if an object matches a subset of the properties of an object.

You can also pass an array of objects. This is useful if you want to check that two arrays match in their number of elements, as opposed to `arrayContaining`, which allows for extra elements in the received array.

ts

    import { expect, test } from 'vitest'
    
    const johnInvoice = {
      isActive: true,
      customer: {
        first_name: 'John',
        last_name: 'Doe',
        location: 'China',
      },
      total_amount: 5000,
      items: [
        {
          type: 'apples',
          quantity: 10,
        },
        {
          type: 'oranges',
          quantity: 5,
        },
      ],
    }
    
    const johnDetails = {
      customer: {
        first_name: 'John',
        last_name: 'Doe',
        location: 'China',
      },
    }
    
    test('invoice has john personal details', () => {
      expect(johnInvoice).toMatchObject(johnDetails)
    })
    
    test('the number of elements must match exactly', () => {
      // Assert that an array of object matches
      expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([
        { foo: 'bar' },
        { baz: 1 },
      ])
    })

toThrowError [​](#tothrowerror)
-------------------------------

*   **Type:** `(received: any) => Awaitable<void>`
    
*   **Alias:** `toThrow`
    

`toThrowError` asserts if a function throws an error when it is called.

You can provide an optional argument to test that a specific error is thrown:

*   `RegExp`: error message matches the pattern
*   `string`: error message includes the substring
*   `Error`, `AsymmetricMatcher`: compare with a received object similar to `toEqual(received)`

TIP

You must wrap the code in a function, otherwise the error will not be caught, and test will fail.

This does not apply for async calls as [rejects](#rejects) correctly unwraps the promise:

ts

    test('expect rejects toThrow', async ({ expect }) => {
      const promise = Promise.reject(new Error('Test'))
      await expect(promise).rejects.toThrowError()
    })

For example, if we want to test that `getFruitStock('pineapples')` throws, we could write:

ts

    import { expect, test } from 'vitest'
    
    function getFruitStock(type: string) {
      if (type === 'pineapples') {
        throw new Error('Pineapples are not in stock')
      }
    
      // Do some other stuff
    }
    
    test('throws on pineapples', () => {
      // Test that the error message says "stock" somewhere: these are equivalent
      expect(() => getFruitStock('pineapples')).toThrowError(/stock/)
      expect(() => getFruitStock('pineapples')).toThrowError('stock')
    
      // Test the exact error message
      expect(() => getFruitStock('pineapples')).toThrowError(
        /^Pineapples are not in stock$/,
      )
    
      expect(() => getFruitStock('pineapples')).toThrowError(
        new Error('Pineapples are not in stock'),
      )
      expect(() => getFruitStock('pineapples')).toThrowError(expect.objectContaining({
        message: 'Pineapples are not in stock',
      }))
    })

TIP

To test async functions, use in combination with [rejects](#rejects).

js

    function getAsyncFruitStock() {
      return Promise.reject(new Error('empty'))
    }
    
    test('throws on pineapples', async () => {
      await expect(() => getAsyncFruitStock()).rejects.toThrowError('empty')
    })

toMatchSnapshot [​](#tomatchsnapshot)
-------------------------------------

*   **Type:** `<T>(shape?: Partial<T> | string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

You can provide an optional `hint` string argument that is appended to the test name. Although Vitest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate multiple snapshots in a single it or test block. Vitest sorts snapshots by name in the corresponding `.snap` file.

TIP

When a snapshot mismatches and causes the test to fail, if the mismatch is expected, you can press `u` key to update the snapshot once. Or you can pass `-u` or `--update` CLI options to make Vitest always update the tests.

ts

    import { expect, test } from 'vitest'
    
    test('matches snapshot', () => {
      const data = { foo: new Set(['bar', 'snapshot']) }
      expect(data).toMatchSnapshot()
    })

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

ts

    import { expect, test } from 'vitest'
    
    test('matches snapshot', () => {
      const data = { foo: new Set(['bar', 'snapshot']) }
      expect(data).toMatchSnapshot({ foo: expect.any(Set) })
    })

toMatchInlineSnapshot [​](#tomatchinlinesnapshot)
-------------------------------------------------

*   **Type:** `<T>(shape?: Partial<T> | string, snapshot?: string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

Vitest adds and updates the inlineSnapshot string argument to the matcher in the test file (instead of an external `.snap` file).

ts

    import { expect, test } from 'vitest'
    
    test('matches inline snapshot', () => {
      const data = { foo: new Set(['bar', 'snapshot']) }
      // Vitest will update following content when updating the snapshot
      expect(data).toMatchInlineSnapshot(`
        {
          "foo": Set {
            "bar",
            "snapshot",
          },
        }
      `)
    })

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

ts

    import { expect, test } from 'vitest'
    
    test('matches snapshot', () => {
      const data = { foo: new Set(['bar', 'snapshot']) }
      expect(data).toMatchInlineSnapshot(
        { foo: expect.any(Set) },
        `
        {
          "foo": Any<Set>,
        }
      `
      )
    })

toMatchFileSnapshot [​](#tomatchfilesnapshot)
---------------------------------------------

*   **Type:** `<T>(filepath: string, hint?: string) => Promise<void>`

Compare or update the snapshot with the content of a file explicitly specified (instead of the `.snap` file).

ts

    import { expect, it } from 'vitest'
    
    it('render basic', async () => {
      const result = renderHTML(h('div', { class: 'foo' }))
      await expect(result).toMatchFileSnapshot('./test/basic.output.html')
    })

Note that since file system operation is async, you need to use `await` with `toMatchFileSnapshot()`. If `await` is not used, Vitest treats it like `expect.soft`, meaning the code after the statement will continue to run even if the snapshot mismatches. After the test finishes, Vitest will check the snapshot and fail if there is a mismatch.

toThrowErrorMatchingSnapshot [​](#tothrowerrormatchingsnapshot)
---------------------------------------------------------------

*   **Type:** `(hint?: string) => void`

The same as [`toMatchSnapshot`](#tomatchsnapshot), but expects the same value as [`toThrowError`](#tothrowerror).

toThrowErrorMatchingInlineSnapshot [​](#tothrowerrormatchinginlinesnapshot)
---------------------------------------------------------------------------

*   **Type:** `(snapshot?: string, hint?: string) => void`

The same as [`toMatchInlineSnapshot`](#tomatchinlinesnapshot), but expects the same value as [`toThrowError`](#tothrowerror).

toHaveBeenCalled [​](#tohavebeencalled)
---------------------------------------

*   **Type:** `() => Awaitable<void>`

This assertion is useful for testing that a function has been called. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    const market = {
      buy(subject: string, amount: number) {
        // ...
      },
    }
    
    test('spy function', () => {
      const buySpy = vi.spyOn(market, 'buy')
    
      expect(buySpy).not.toHaveBeenCalled()
    
      market.buy('apples', 10)
    
      expect(buySpy).toHaveBeenCalled()
    })

toHaveBeenCalledTimes [​](#tohavebeencalledtimes)
-------------------------------------------------

*   **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function was called a certain amount of times. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    const market = {
      buy(subject: string, amount: number) {
        // ...
      },
    }
    
    test('spy function called two times', () => {
      const buySpy = vi.spyOn(market, 'buy')
    
      market.buy('apples', 10)
      market.buy('apples', 20)
    
      expect(buySpy).toHaveBeenCalledTimes(2)
    })

toHaveBeenCalledWith [​](#tohavebeencalledwith)
-----------------------------------------------

*   **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called at least once with certain parameters. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    const market = {
      buy(subject: string, amount: number) {
        // ...
      },
    }
    
    test('spy function', () => {
      const buySpy = vi.spyOn(market, 'buy')
    
      market.buy('apples', 10)
      market.buy('apples', 20)
    
      expect(buySpy).toHaveBeenCalledWith('apples', 10)
      expect(buySpy).toHaveBeenCalledWith('apples', 20)
    })

toHaveBeenCalledBefore 3.0.0\+ [​](#tohavebeencalledbefore)
-----------------------------------------------------------

*   **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called before another `Mock`.

ts

    test('calls mock1 before mock2', () => {
      const mock1 = vi.fn()
      const mock2 = vi.fn()
    
      mock1()
      mock2()
      mock1()
    
      expect(mock1).toHaveBeenCalledBefore(mock2)
    })

toHaveBeenCalledAfter 3.0.0\+ [​](#tohavebeencalledafter)
---------------------------------------------------------

*   **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called after another `Mock`.

ts

    test('calls mock1 after mock2', () => {
      const mock1 = vi.fn()
      const mock2 = vi.fn()
    
      mock2()
      mock1()
      mock2()
    
      expect(mock1).toHaveBeenCalledAfter(mock2)
    })

toHaveBeenCalledExactlyOnceWith 3.0.0\+ [​](#tohavebeencalledexactlyoncewith)
-----------------------------------------------------------------------------

*   **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called exactly once and with certain parameters. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    const market = {
      buy(subject: string, amount: number) {
        // ...
      },
    }
    
    test('spy function', () => {
      const buySpy = vi.spyOn(market, 'buy')
    
      market.buy('apples', 10)
    
      expect(buySpy).toHaveBeenCalledExactlyOnceWith('apples', 10)
    })

toHaveBeenLastCalledWith [​](#tohavebeenlastcalledwith)
-------------------------------------------------------

*   **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at its last invocation. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    const market = {
      buy(subject: string, amount: number) {
        // ...
      },
    }
    
    test('spy function', () => {
      const buySpy = vi.spyOn(market, 'buy')
    
      market.buy('apples', 10)
      market.buy('apples', 20)
    
      expect(buySpy).not.toHaveBeenLastCalledWith('apples', 10)
      expect(buySpy).toHaveBeenLastCalledWith('apples', 20)
    })

toHaveBeenNthCalledWith [​](#tohavebeennthcalledwith)
-----------------------------------------------------

*   **Type**: `(time: number, ...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at the certain time. The count starts at 1. So, to check the second entry, you would write `.toHaveBeenNthCalledWith(2, ...)`.

Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    const market = {
      buy(subject: string, amount: number) {
        // ...
      },
    }
    
    test('first call of spy function called with right params', () => {
      const buySpy = vi.spyOn(market, 'buy')
    
      market.buy('apples', 10)
      market.buy('apples', 20)
    
      expect(buySpy).toHaveBeenNthCalledWith(1, 'apples', 10)
    })

toHaveReturned [​](#tohavereturned)
-----------------------------------

*   **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully returned a value at least once (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    function getApplesPrice(amount: number) {
      const PRICE = 10
      return amount * PRICE
    }
    
    test('spy function returned a value', () => {
      const getPriceSpy = vi.fn(getApplesPrice)
    
      const price = getPriceSpy(10)
    
      expect(price).toBe(100)
      expect(getPriceSpy).toHaveReturned()
    })

toHaveReturnedTimes [​](#tohavereturnedtimes)
---------------------------------------------

*   **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully returned a value an exact amount of times (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function returns a value two times', () => {
      const sell = vi.fn((product: string) => ({ product }))
    
      sell('apples')
      sell('bananas')
    
      expect(sell).toHaveReturnedTimes(2)
    })

toHaveReturnedWith [​](#tohavereturnedwith)
-------------------------------------------

*   **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters at least once. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function returns a product', () => {
      const sell = vi.fn((product: string) => ({ product }))
    
      sell('apples')
    
      expect(sell).toHaveReturnedWith({ product: 'apples' })
    })

toHaveLastReturnedWith [​](#tohavelastreturnedwith)
---------------------------------------------------

*   **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function returns bananas on a last call', () => {
      const sell = vi.fn((product: string) => ({ product }))
    
      sell('apples')
      sell('bananas')
    
      expect(sell).toHaveLastReturnedWith({ product: 'bananas' })
    })

toHaveNthReturnedWith [​](#tohaventhreturnedwith)
-------------------------------------------------

*   **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters on a certain call. Requires a spy function to be passed to `expect`.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function returns bananas on second call', () => {
      const sell = vi.fn((product: string) => ({ product }))
    
      sell('apples')
      sell('bananas')
    
      expect(sell).toHaveNthReturnedWith(2, { product: 'bananas' })
    })

toHaveResolved [​](#tohaveresolved)
-----------------------------------

*   **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully resolved a value at least once (i.e., did not reject). Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

ts

    import { expect, test, vi } from 'vitest'
    import db from './db/apples.js'
    
    async function getApplesPrice(amount: number) {
      return amount * await db.get('price')
    }
    
    test('spy function resolved a value', async () => {
      const getPriceSpy = vi.fn(getApplesPrice)
    
      const price = await getPriceSpy(10)
    
      expect(price).toBe(100)
      expect(getPriceSpy).toHaveResolved()
    })

toHaveResolvedTimes [​](#tohaveresolvedtimes)
---------------------------------------------

*   **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully resolved a value an exact amount of times (i.e., did not reject). Requires a spy function to be passed to `expect`.

This will only count resolved promises. If the function returned a promise, but it was not resolved yet, it will not be counted.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function resolved a value two times', async () => {
      const sell = vi.fn((product: string) => Promise.resolve({ product }))
    
      await sell('apples')
      await sell('bananas')
    
      expect(sell).toHaveResolvedTimes(2)
    })

toHaveResolvedWith [​](#tohaveresolvedwith)
-------------------------------------------

*   **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value at least once. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function resolved a product', async () => {
      const sell = vi.fn((product: string) => Promise.resolve({ product }))
    
      await sell('apples')
    
      expect(sell).toHaveResolvedWith({ product: 'apples' })
    })

toHaveLastResolvedWith [​](#tohavelastresolvedwith)
---------------------------------------------------

*   **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function resolves bananas on a last call', async () => {
      const sell = vi.fn((product: string) => Promise.resolve({ product }))
    
      await sell('apples')
      await sell('bananas')
    
      expect(sell).toHaveLastResolvedWith({ product: 'bananas' })
    })

toHaveNthResolvedWith [​](#tohaventhresolvedwith)
-------------------------------------------------

*   **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value on a specific invocation. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

ts

    import { expect, test, vi } from 'vitest'
    
    test('spy function returns bananas on second call', async () => {
      const sell = vi.fn((product: string) => Promise.resolve({ product }))
    
      await sell('apples')
      await sell('bananas')
    
      expect(sell).toHaveNthResolvedWith(2, { product: 'bananas' })
    })

toSatisfy [​](#tosatisfy)
-------------------------

*   **Type:** `(predicate: (value: any) => boolean) => Awaitable<void>`

This assertion checks if a value satisfies a certain predicate.

ts

    import { describe, expect, it } from 'vitest'
    
    const isOdd = (value: number) => value % 2 !== 0
    
    describe('toSatisfy()', () => {
      it('pass with 0', () => {
        expect(1).toSatisfy(isOdd)
      })
    
      it('pass with negation', () => {
        expect(2).not.toSatisfy(isOdd)
      })
    })

resolves [​](#resolves)
-----------------------

*   **Type:** `Promisify<Assertions>`

`resolves` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap value from the pending promise and assert its value with usual assertions. If the promise rejects, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function, that makes an API call and returns some data, you may use this code to assert its return value:

ts

    import { expect, test } from 'vitest'
    
    async function buyApples() {
      return fetch('/buy/apples').then(r => r.json())
    }
    
    test('buyApples returns new stock id', async () => {
      // toEqual returns a promise now, so you HAVE to await it
      await expect(buyApples()).resolves.toEqual({ id: 1 }) // jest API
      await expect(buyApples()).resolves.to.equal({ id: 1 }) // chai API
    })

WARNING

If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions are actually called, you may use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.

rejects [​](#rejects)
---------------------

*   **Type:** `Promisify<Assertions>`

`rejects` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap reason why the promise was rejected, and assert its value with usual assertions. If the promise successfully resolves, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function that fails when you call it, you may use this code to assert the reason:

ts

    import { expect, test } from 'vitest'
    
    async function buyApples(id) {
      if (!id) {
        throw new Error('no id')
      }
    }
    
    test('buyApples throws an error when no id provided', async () => {
      // toThrow returns a promise now, so you HAVE to await it
      await expect(buyApples()).rejects.toThrow('no id')
    })

WARNING

If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions were actually called, you can use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.

expect.assertions [​](#expect-assertions)
-----------------------------------------

*   **Type:** `(count: number) => void`

After the test has passed or failed verify that a certain number of assertions was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if we have a function that asynchronously calls two matchers, we can assert that they were actually called.

ts

    import { expect, test } from 'vitest'
    
    async function doAsync(...cbs) {
      await Promise.all(
        cbs.map((cb, index) => cb({ index })),
      )
    }
    
    test('all assertions are called', async () => {
      expect.assertions(2)
      function callback1(data) {
        expect(data).toBeTruthy()
      }
      function callback2(data) {
        expect(data).toBeTruthy()
      }
    
      await doAsync(callback1, callback2)
    })

WARNING

When using `assertions` with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.

expect.hasAssertions [​](#expect-hasassertions)
-----------------------------------------------

*   **Type:** `() => void`

After the test has passed or failed verify that at least one assertion was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if you have a code that calls a callback, we can make an assertion inside a callback, but the test will always pass if we don't check if an assertion was called.

ts

    import { expect, test } from 'vitest'
    import { db } from './db.js'
    
    const cbs = []
    
    function onSelect(cb) {
      cbs.push(cb)
    }
    
    // after selecting from db, we call all callbacks
    function select(id) {
      return db.select({ id }).then((data) => {
        return Promise.all(
          cbs.map(cb => cb(data)),
        )
      })
    }
    
    test('callback was called', async () => {
      expect.hasAssertions()
      onSelect((data) => {
        // should be called on select
        expect(data).toBeTruthy()
      })
      // if not awaited, test will fail
      // if you don't have expect.hasAssertions(), test will pass
      await select(3)
    })

expect.unreachable [​](#expect-unreachable)
-------------------------------------------

*   **Type:** `(message?: string) => never`

This method is used to assert that a line should never be reached.

For example, if we want to test that `build()` throws due to receiving directories having no `src` folder, and also handle each error separately, we could do this:

ts

    import { expect, test } from 'vitest'
    
    async function build(dir) {
      if (dir.includes('no-src')) {
        throw new Error(`${dir}/src does not exist`)
      }
    }
    
    const errorDirs = [
      'no-src-folder',
      // ...
    ]
    
    test.each(errorDirs)('build fails with "%s"', async (dir) => {
      try {
        await build(dir)
        expect.unreachable('Should not pass build')
      }
      catch (err: any) {
        expect(err).toBeInstanceOf(Error)
        expect(err.stack).toContain('build')
    
        switch (dir) {
          case 'no-src-folder':
            expect(err.message).toBe(`${dir}/src does not exist`)
            break
          default:
            // to exhaust all error tests
            expect.unreachable('All error test must be handled')
            break
        }
      }
    })

expect.anything [​](#expect-anything)
-------------------------------------

*   **Type:** `() => any`

This asymmetric matcher, when used with equality check, will always return `true`. Useful, if you just want to be sure that the property exist.

ts

    import { expect, test } from 'vitest'
    
    test('object has "apples" key', () => {
      expect({ apples: 22 }).toEqual({ apples: expect.anything() })
    })

expect.any [​](#expect-any)
---------------------------

*   **Type:** `(constructor: unknown) => any`

This asymmetric matcher, when used with an equality check, will return `true` only if the value is an instance of a specified constructor. Useful, if you have a value that is generated each time, and you only want to know that it exists with a proper type.

ts

    import { expect, test } from 'vitest'
    import { generateId } from './generators.js'
    
    test('"id" is a number', () => {
      expect({ id: generateId() }).toEqual({ id: expect.any(Number) })
    })

expect.closeTo [​](#expect-closeto)
-----------------------------------

*   **Type:** `(expected: any, precision?: number) => any`

`expect.closeTo` is useful when comparing floating point numbers in object properties or array item. If you need to compare a number, please use `.toBeCloseTo` instead.

The optional `precision` argument limits the number of digits to check **after** the decimal point. For the default value `2`, the test criterion is `Math.abs(expected - received) < 0.005 (that is, 10 ** -2 / 2)`.

For example, this test passes with a precision of 5 digits:

js

    test('compare float in object properties', () => {
      expect({
        title: '0.1 + 0.2',
        sum: 0.1 + 0.2,
      }).toEqual({
        title: '0.1 + 0.2',
        sum: expect.closeTo(0.3, 5),
      })
    })

expect.arrayContaining [​](#expect-arraycontaining)
---------------------------------------------------

*   **Type:** `<T>(expected: T[]) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is an array and contains specified items.

ts

    import { expect, test } from 'vitest'
    
    test('basket includes fuji', () => {
      const basket = {
        varieties: [
          'Empire',
          'Fuji',
          'Gala',
        ],
        count: 3
      }
      expect(basket).toEqual({
        count: 3,
        varieties: expect.arrayContaining(['Fuji'])
      })
    })

TIP

You can use `expect.not` with this matcher to negate the expected value.

expect.objectContaining [​](#expect-objectcontaining)
-----------------------------------------------------

*   **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value has a similar shape.

ts

    import { expect, test } from 'vitest'
    
    test('basket has empire apples', () => {
      const basket = {
        varieties: [
          {
            name: 'Empire',
            count: 1,
          }
        ],
      }
      expect(basket).toEqual({
        varieties: [
          expect.objectContaining({ name: 'Empire' }),
        ]
      })
    })

TIP

You can use `expect.not` with this matcher to negate the expected value.

expect.stringContaining [​](#expect-stringcontaining)
-----------------------------------------------------

*   **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring.

ts

    import { expect, test } from 'vitest'
    
    test('variety has "Emp" in its name', () => {
      const variety = {
        name: 'Empire',
        count: 1,
      }
      expect(variety).toEqual({
        name: expect.stringContaining('Emp'),
        count: 1,
      })
    })

TIP

You can use `expect.not` with this matcher to negate the expected value.

expect.stringMatching [​](#expect-stringmatching)
-------------------------------------------------

*   **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring or if the string matches a regular expression.

ts

    import { expect, test } from 'vitest'
    
    test('variety ends with "re"', () => {
      const variety = {
        name: 'Empire',
        count: 1,
      }
      expect(variety).toEqual({
        name: expect.stringMatching(/re$/),
        count: 1,
      })
    })

TIP

You can use `expect.not` with this matcher to negate the expected value.

expect.addSnapshotSerializer [​](#expect-addsnapshotserializer)
---------------------------------------------------------------

*   **Type:** `(plugin: PrettyFormatPlugin) => void`

This method adds custom serializers that are called when creating a snapshot. This is an advanced feature - if you want to know more, please read a [guide on custom serializers](/guide/snapshot#custom-serializer).

If you are adding custom serializers, you should call this method inside [`setupFiles`](/config/#setupfiles). This will affect every snapshot.

TIP

If you previously used Vue CLI with Jest, you might want to install [jest-serializer-vue](https://www.npmjs.com/package/jest-serializer-vue). Otherwise, your snapshots will be wrapped in a string, which cases `"` to be escaped.

expect.extend [​](#expect-extend)
---------------------------------

*   **Type:** `(matchers: MatchersObject) => void`

You can extend default matchers with your own. This function is used to extend the matchers object with custom matchers.

When you define matchers that way, you also create asymmetric matchers that can be used like `expect.stringContaining`.

ts

    import { expect, test } from 'vitest'
    
    test('custom matchers', () => {
      expect.extend({
        toBeFoo: (received, expected) => {
          if (received !== 'foo') {
            return {
              message: () => `expected ${received} to be foo`,
              pass: false,
            }
          }
        },
      })
    
      expect('foo').toBeFoo()
      expect({ foo: 'foo' }).toEqual({ foo: expect.toBeFoo() })
    })

TIP

If you want your matchers to appear in every test, you should call this method inside [`setupFiles`](/config/#setupfiles).

This function is compatible with Jest's `expect.extend`, so any library that uses it to create custom matchers will work with Vitest.

If you are using TypeScript, since Vitest 0.31.0 you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

ts

    interface CustomMatchers<R = unknown> {
      toBeFoo: () => R
    }
    
    declare module 'vitest' {
      interface Assertion<T = any> extends CustomMatchers<T> {}
      interface AsymmetricMatchersContaining extends CustomMatchers {}
    }

WARNING

Don't forget to include the ambient declaration file in your `tsconfig.json`.

TIP

If you want to know more, checkout [guide on extending matchers](/guide/extending-matchers).

expect.addEqualityTesters [​](#expect-addequalitytesters)
---------------------------------------------------------

*   **Type:** `(tester: Array<Tester>) => void`

You can use this method to define custom testers, which are methods used by matchers, to test if two objects are equal. It is compatible with Jest's `expect.addEqualityTesters`.

ts

    import { expect, test } from 'vitest'
    
    class AnagramComparator {
      public word: string
    
      constructor(word: string) {
        this.word = word
      }
    
      equals(other: AnagramComparator): boolean {
        const cleanStr1 = this.word.replace(/ /g, '').toLowerCase()
        const cleanStr2 = other.word.replace(/ /g, '').toLowerCase()
    
        const sortedStr1 = cleanStr1.split('').sort().join('')
        const sortedStr2 = cleanStr2.split('').sort().join('')
    
        return sortedStr1 === sortedStr2
      }
    }
    
    function isAnagramComparator(a: unknown): a is AnagramComparator {
      return a instanceof AnagramComparator
    }
    
    function areAnagramsEqual(a: unknown, b: unknown): boolean | undefined {
      const isAAnagramComparator = isAnagramComparator(a)
      const isBAnagramComparator = isAnagramComparator(b)
    
      if (isAAnagramComparator && isBAnagramComparator) {
        return a.equals(b)
      }
      else if (isAAnagramComparator === isBAnagramComparator) {
        return undefined
      }
      else {
        return false
      }
    }
    
    expect.addEqualityTesters([areAnagramsEqual])
    
    test('custom equality tester', () => {
      expect(new AnagramComparator('listen')).toEqual(new AnagramComparator('silent'))
    })

expectTypeOf [​](#expecttypeof)
===============================

WARNING

During runtime this function doesn't do anything. To [enable typechecking](/guide/testing-types#run-typechecking), don't forget to pass down `--typecheck` flag.

*   **Type:** `<T>(a: unknown) => ExpectTypeOf`

not [​](#not)
-------------

*   **Type:** `ExpectTypeOf`

You can negate all assertions, using `.not` property.

toEqualTypeOf [​](#toequaltypeof)
---------------------------------

*   **Type:** `<T>(expected: T) => void`

This matcher will check if the types are fully equal to each other. This matcher will not fail if two objects have different values, but the same type. It will fail however if an object is missing a property.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
    expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()

toMatchTypeOf [​](#tomatchtypeof)
---------------------------------

*   **Type:** `<T>(expected: T) => void`

This matcher checks if expect type extends provided type. It is different from `toEqual` and is more similar to [expect's](/api/expect) `toMatchObject()`. With this matcher, you can check if an object “matches” a type.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 1 })
    expectTypeOf<number>().toMatchTypeOf<string | number>()
    expectTypeOf<string | number>().not.toMatchTypeOf<number>()

extract [​](#extract)
---------------------

*   **Type:** `ExpectTypeOf<ExtractedUnion>`

You can use `.extract` to narrow down types for further testing.

ts

    import { expectTypeOf } from 'vitest'
    
    type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }
    
    interface CSSProperties { margin?: string; padding?: string }
    
    function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
      return {}
    }
    
    const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }
    
    expectTypeOf(getResponsiveProp(cssProperties))
      .extract<{ xs?: any }>() // extracts the last type from a union
      .toEqualTypeOf<{ xs?: CSSProperties; sm?: CSSProperties; md?: CSSProperties }>()
    
    expectTypeOf(getResponsiveProp(cssProperties))
      .extract<unknown[]>() // extracts an array from a union
      .toEqualTypeOf<CSSProperties[]>()

WARNING

If no type is found in the union, `.extract` will return `never`.

exclude [​](#exclude)
---------------------

*   **Type:** `ExpectTypeOf<NonExcludedUnion>`

You can use `.exclude` to remove types from a union for further testing.

ts

    import { expectTypeOf } from 'vitest'
    
    type ResponsiveProp<T> = T | T[] | { xs?: T; sm?: T; md?: T }
    
    interface CSSProperties { margin?: string; padding?: string }
    
    function getResponsiveProp<T>(_props: T): ResponsiveProp<T> {
      return {}
    }
    
    const cssProperties: CSSProperties = { margin: '1px', padding: '2px' }
    
    expectTypeOf(getResponsiveProp(cssProperties))
      .exclude<unknown[]>()
      .exclude<{ xs?: unknown }>() // or just .exclude<unknown[] | { xs?: unknown }>()
      .toEqualTypeOf<CSSProperties>()

WARNING

If no type is found in the union, `.exclude` will return `never`.

returns [​](#returns)
---------------------

*   **Type:** `ExpectTypeOf<ReturnValue>`

You can use `.returns` to extract return value of a function type.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(() => {}).returns.toBeVoid()
    expectTypeOf((a: number) => [a, a]).returns.toEqualTypeOf([1, 2])

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

parameters [​](#parameters)
---------------------------

*   **Type:** `ExpectTypeOf<Parameters>`

You can extract function arguments with `.parameters` to perform assertions on its value. Parameters are returned as an array.

ts

    import { expectTypeOf } from 'vitest'
    
    type NoParam = () => void
    type HasParam = (s: string) => void
    
    expectTypeOf<NoParam>().parameters.toEqualTypeOf<[]>()
    expectTypeOf<HasParam>().parameters.toEqualTypeOf<[string]>()

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

TIP

You can also use [`.toBeCallableWith`](#tobecallablewith) matcher as a more expressive assertion.

parameter [​](#parameter)
-------------------------

*   **Type:** `(nth: number) => ExpectTypeOf`

You can extract a certain function argument with `.parameter(number)` call to perform other assertions on it.

ts

    import { expectTypeOf } from 'vitest'
    
    function foo(a: number, b: string) {
      return [a, b]
    }
    
    expectTypeOf(foo).parameter(0).toBeNumber()
    expectTypeOf(foo).parameter(1).toBeString()

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

constructorParameters [​](#constructorparameters)
-------------------------------------------------

*   **Type:** `ExpectTypeOf<ConstructorParameters>`

You can extract constructor parameters as an array of values and perform assertions on them with this method.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(Date).constructorParameters.toEqualTypeOf<[] | [string | number | Date]>()

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

TIP

You can also use [`.toBeConstructibleWith`](#tobeconstructiblewith) matcher as a more expressive assertion.

instance [​](#instance)
-----------------------

*   **Type:** `ExpectTypeOf<ConstructableInstance>`

This property gives access to matchers that can be performed on an instance of the provided class.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(Date).instance.toHaveProperty('toISOString')

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

items [​](#items)
-----------------

*   **Type:** `ExpectTypeOf<T>`

You can get array item type with `.items` to perform further assertions.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf([1, 2, 3]).items.toEqualTypeOf<number>()
    expectTypeOf([1, 2, 3]).items.not.toEqualTypeOf<string>()

resolves [​](#resolves)
-----------------------

*   **Type:** `ExpectTypeOf<ResolvedPromise>`

This matcher extracts resolved value of a `Promise`, so you can perform other assertions on it.

ts

    import { expectTypeOf } from 'vitest'
    
    async function asyncFunc() {
      return 123
    }
    
    expectTypeOf(asyncFunc).returns.resolves.toBeNumber()
    expectTypeOf(Promise.resolve('string')).resolves.toBeString()

WARNING

If used on a non-promise type, it will return `never`, so you won't be able to chain it with other matchers.

guards [​](#guards)
-------------------

*   **Type:** `ExpectTypeOf<Guard>`

This matcher extracts guard value (e.g., `v is number`), so you can perform assertions on it.

ts

    import { expectTypeOf } from 'vitest'
    
    function isString(v: any): v is string {
      return typeof v === 'string'
    }
    expectTypeOf(isString).guards.toBeString()

WARNING

Returns `never`, if the value is not a guard function, so you won't be able to chain it with other matchers.

asserts [​](#asserts)
---------------------

*   **Type:** `ExpectTypeOf<Assert>`

This matcher extracts assert value (e.g., `assert v is number`), so you can perform assertions on it.

ts

    import { expectTypeOf } from 'vitest'
    
    function assertNumber(v: any): asserts v is number {
      if (typeof v !== 'number') {
        throw new TypeError('Nope !')
      }
    }
    
    expectTypeOf(assertNumber).asserts.toBeNumber()

WARNING

Returns `never`, if the value is not an assert function, so you won't be able to chain it with other matchers.

toBeAny [​](#tobeany)
---------------------

*   **Type:** `() => void`

With this matcher you can check, if provided type is `any` type. If the type is too specific, the test will fail.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf<any>().toBeAny()
    expectTypeOf({} as any).toBeAny()
    expectTypeOf('string').not.toBeAny()

toBeUnknown [​](#tobeunknown)
-----------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is `unknown` type.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf().toBeUnknown()
    expectTypeOf({} as unknown).toBeUnknown()
    expectTypeOf('string').not.toBeUnknown()

toBeNever [​](#tobenever)
-------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is a `never` type.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf<never>().toBeNever()
    expectTypeOf((): never => {}).returns.toBeNever()

toBeFunction [​](#tobefunction)
-------------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is a `function`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(42).not.toBeFunction()
    expectTypeOf((): never => {}).toBeFunction()

toBeObject [​](#tobeobject)
---------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is an `object`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(42).not.toBeObject()
    expectTypeOf({}).toBeObject()

toBeArray [​](#tobearray)
-------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is `Array<T>`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(42).not.toBeArray()
    expectTypeOf([]).toBeArray()
    expectTypeOf([1, 2]).toBeArray()
    expectTypeOf([{}, 42]).toBeArray()

toBeString [​](#tobestring)
---------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is a `string`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(42).not.toBeString()
    expectTypeOf('').toBeString()
    expectTypeOf('a').toBeString()

toBeBoolean [​](#tobeboolean)
-----------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is `boolean`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(42).not.toBeBoolean()
    expectTypeOf(true).toBeBoolean()
    expectTypeOf<boolean>().toBeBoolean()

toBeVoid [​](#tobevoid)
-----------------------

*   **Type:** `() => void`

This matcher checks, if provided type is `void`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(() => {}).returns.toBeVoid()
    expectTypeOf<void>().toBeVoid()

toBeSymbol [​](#tobesymbol)
---------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is a `symbol`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(Symbol(1)).toBeSymbol()
    expectTypeOf<symbol>().toBeSymbol()

toBeNull [​](#tobenull)
-----------------------

*   **Type:** `() => void`

This matcher checks, if provided type is `null`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(null).toBeNull()
    expectTypeOf<null>().toBeNull()
    expectTypeOf(undefined).not.toBeNull()

toBeUndefined [​](#tobeundefined)
---------------------------------

*   **Type:** `() => void`

This matcher checks, if provided type is `undefined`.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(undefined).toBeUndefined()
    expectTypeOf<undefined>().toBeUndefined()
    expectTypeOf(null).not.toBeUndefined()

toBeNullable [​](#tobenullable)
-------------------------------

*   **Type:** `() => void`

This matcher checks, if you can use `null` or `undefined` with provided type.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf<undefined | 1>().toBeNullable()
    expectTypeOf<null | 1>().toBeNullable()
    expectTypeOf<undefined | null | 1>().toBeNullable()

toBeCallableWith [​](#tobecallablewith)
---------------------------------------

*   **Type:** `() => void`

This matcher ensures you can call provided function with a set of parameters.

ts

    import { expectTypeOf } from 'vitest'
    
    type NoParam = () => void
    type HasParam = (s: string) => void
    
    expectTypeOf<NoParam>().toBeCallableWith()
    expectTypeOf<HasParam>().toBeCallableWith('some string')

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

toBeConstructibleWith [​](#tobeconstructiblewith)
-------------------------------------------------

*   **Type:** `() => void`

This matcher ensures you can create a new instance with a set of constructor parameters.

ts

    import { expectTypeOf } from 'vitest'
    
    expectTypeOf(Date).toBeConstructibleWith(new Date())
    expectTypeOf(Date).toBeConstructibleWith('01-01-2000')

WARNING

If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.

toHaveProperty [​](#tohaveproperty)
-----------------------------------

*   **Type:** `<K extends keyof T>(property: K) => ExpectTypeOf<T[K>`

This matcher checks if a property exists on the provided object. If it exists, it also returns the same set of matchers for the type of this property, so you can chain assertions one after another.

ts

    import { expectTypeOf } from 'vitest'
    
    const obj = { a: 1, b: '' }
    
    expectTypeOf(obj).toHaveProperty('a')
    expectTypeOf(obj).not.toHaveProperty('c')
    
    expectTypeOf(obj).toHaveProperty('a').toBeNumber()
    expectTypeOf(obj).toHaveProperty('b').toBeString()
    expectTypeOf(obj).toHaveProperty('a').not.toBeString()

assert [​](#assert)
===================

Vitest reexports the `assert` method from [`chai`](https://www.chaijs.com/api/assert/) for verifying invariants.

assert [​](#assert-1)
---------------------

*   **Type:** `(expression: any, message?: string) => asserts expression`

Assert that the given `expression` is truthy, otherwise the assertion fails.

ts

    import { assert, test } from 'vitest'
    
    test('assert', () => {
      assert('foo' !== 'bar', 'foo should not be equal to bar')
    })

fail [​](#fail)
---------------

*   **Type:**
    *   `(message?: string) => never`
    *   `<T>(actual: T, expected: T, message?: string, operator?: string) => never`

Force an assertion failure.

ts

    import { assert, test } from 'vitest'
    
    test('assert.fail', () => {
      assert.fail('error message on failure')
      assert.fail('foo', 'bar', 'foo is not bar', '===')
    })

isOk [​](#isok)
---------------

*   **Type:** `<T>(value: T, message?: string) => void`
*   **Alias** `ok`

Assert that the given `value` is truthy.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isOk', () => {
      assert.isOk('foo', 'every truthy is ok')
      assert.isOk(false, 'this will fail since false is not truthy')
    })

isNotOk [​](#isnotok)
---------------------

*   **Type:** `<T>(value: T, message?: string) => void`
*   **Alias** `notOk`

Assert that the given `value` is falsy.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isNotOk', () => {
      assert.isNotOk('foo', 'this will fail, every truthy is not ok')
      assert.isNotOk(false, 'this will pass since false is falsy')
    })

equal [​](#equal)
-----------------

*   **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts non-strict equality (==) of `actual` and `expected`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.equal', () => {
      assert.equal(Math.sqrt(4), '2')
    })

notEqual [​](#notequal)
-----------------------

*   **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts non-strict inequality (!=) of `actual` and `expected`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.equal', () => {
      assert.notEqual(Math.sqrt(4), 3)
    })

strictEqual [​](#strictequal)
-----------------------------

*   **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts strict equality (===) of `actual` and `expected`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.strictEqual', () => {
      assert.strictEqual(Math.sqrt(4), 2)
    })

deepEqual [​](#deepequal)
-------------------------

*   **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts that `actual` is deeply equal to `expected`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepEqual', () => {
      assert.deepEqual({ color: 'green' }, { color: 'green' })
    })

notDeepEqual [​](#notdeepequal)
-------------------------------

*   **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Assert that `actual` is not deeply equal to `expected`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notDeepEqual', () => {
      assert.notDeepEqual({ color: 'green' }, { color: 'red' })
    })

isAbove [​](#isabove)
---------------------

*   **Type:** `(valueToCheck: number, valueToBeAbove: number, message?: string) => void`

Assert that `valueToCheck` is strictly greater than (>) `valueToBeAbove`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isAbove', () => {
      assert.isAbove(5, 2, '5 is strictly greater than 2')
    })

isAtLeast [​](#isatleast)
-------------------------

*   **Type:** `(valueToCheck: number, valueToBeAtLeast: number, message?: string) => void`

Assert that `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isAtLeast', () => {
      assert.isAtLeast(5, 2, '5 is greater or equal to 2')
      assert.isAtLeast(3, 3, '3 is greater or equal to 3')
    })

isBelow [​](#isbelow)
---------------------

*   **Type:** `(valueToCheck: number, valueToBeBelow: number, message?: string) => void`

Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isBelow', () => {
      assert.isBelow(3, 6, '3 is strictly less than 6')
    })

isAtMost [​](#isatmost)
-----------------------

*   **Type:** `(valueToCheck: number, valueToBeAtMost: number, message?: string) => void`

Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isAtMost', () => {
      assert.isAtMost(3, 6, '3 is less than or equal to 6')
      assert.isAtMost(4, 4, '4 is less than or equal to 4')
    })

isTrue [​](#istrue)
-------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is true.

ts

    import { assert, test } from 'vitest'
    
    const testPassed = true
    
    test('assert.isTrue', () => {
      assert.isTrue(testPassed)
    })

isNotTrue [​](#isnottrue)
-------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not true.

ts

    import { assert, test } from 'vitest'
    
    const testPassed = 'ok'
    
    test('assert.isNotTrue', () => {
      assert.isNotTrue(testPassed)
    })

isFalse [​](#isfalse)
---------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is false.

ts

    import { assert, test } from 'vitest'
    
    const testPassed = false
    
    test('assert.isFalse', () => {
      assert.isFalse(testPassed)
    })

isNotFalse [​](#isnotfalse)
---------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not false.

ts

    import { assert, test } from 'vitest'
    
    const testPassed = 'no'
    
    test('assert.isNotFalse', () => {
      assert.isNotFalse(testPassed)
    })

isNull [​](#isnull)
-------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is null.

ts

    import { assert, test } from 'vitest'
    
    const error = null
    
    test('assert.isNull', () => {
      assert.isNull(error, 'error is null')
    })

isNotNull [​](#isnotnull)
-------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not null.

ts

    import { assert, test } from 'vitest'
    
    const error = { message: 'error was occurred' }
    
    test('assert.isNotNull', () => {
      assert.isNotNull(error, 'error is not null but object')
    })

isNaN [​](#isnan)
-----------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is NaN.

ts

    import { assert, test } from 'vitest'
    
    const calculation = 1 * 'vitest'
    
    test('assert.isNaN', () => {
      assert.isNaN(calculation, '1 * "vitest" is NaN')
    })

isNotNaN [​](#isnotnan)
-----------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not NaN.

ts

    import { assert, test } from 'vitest'
    
    const calculation = 1 * 2
    
    test('assert.isNotNaN', () => {
      assert.isNotNaN(calculation, '1 * 2 is Not NaN but 2')
    })

exists [​](#exists)
-------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is neither null nor undefined.

ts

    import { assert, test } from 'vitest'
    
    const name = 'foo'
    
    test('assert.exists', () => {
      assert.exists(name, 'foo is neither null nor undefined')
    })

notExists [​](#notexists)
-------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is either null nor undefined.

ts

    import { assert, test } from 'vitest'
    
    const foo = null
    const bar = undefined
    
    test('assert.notExists', () => {
      assert.notExists(foo, 'foo is null so not exist')
      assert.notExists(bar, 'bar is undefined so not exist')
    })

isUndefined [​](#isundefined)
-----------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is undefined.

ts

    import { assert, test } from 'vitest'
    
    const name = undefined
    
    test('assert.isUndefined', () => {
      assert.isUndefined(name, 'name is undefined')
    })

isDefined [​](#isdefined)
-------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not undefined.

ts

    import { assert, test } from 'vitest'
    
    const name = 'foo'
    
    test('assert.isDefined', () => {
      assert.isDefined(name, 'name is not undefined')
    })

isFunction [​](#isfunction)
---------------------------

*   **Type:** `<T>(value: T, message?: string) => void`
*   **Alias:** `isCallable` Asserts that `value` is a function.

ts

    import { assert, test } from 'vitest'
    
    function name() { return 'foo' };
    
    test('assert.isFunction', () => {
      assert.isFunction(name, 'name is function')
    })

isNotFunction [​](#isnotfunction)
---------------------------------

*   **Type:** `<T>(value: T, message?: string) => void`
*   **Alias:** `isNotCallable`

Asserts that `value` is not a function.

ts

    import { assert, test } from 'vitest'
    
    const name = 'foo'
    
    test('assert.isNotFunction', () => {
      assert.isNotFunction(name, 'name is not function but string')
    })

isObject [​](#isobject)
-----------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is an object of type Object (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.

ts

    import { assert, test } from 'vitest'
    
    const someThing = { color: 'red', shape: 'circle' }
    
    test('assert.isObject', () => {
      assert.isObject(someThing, 'someThing is object')
    })

isNotObject [​](#isnotobject)
-----------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not an object of type Object (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.

ts

    import { assert, test } from 'vitest'
    
    const someThing = 'redCircle'
    
    test('assert.isNotObject', () => {
      assert.isNotObject(someThing, 'someThing is not object but string')
    })

isArray [​](#isarray)
---------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is an array.

ts

    import { assert, test } from 'vitest'
    
    const color = ['red', 'green', 'yellow']
    
    test('assert.isArray', () => {
      assert.isArray(color, 'color is array')
    })

isNotArray [​](#isnotarray)
---------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not an array.

ts

    import { assert, test } from 'vitest'
    
    const color = 'red'
    
    test('assert.isNotArray', () => {
      assert.isNotArray(color, 'color is not array but string')
    })

isString [​](#isstring)
-----------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a string.

ts

    import { assert, test } from 'vitest'
    
    const color = 'red'
    
    test('assert.isString', () => {
      assert.isString(color, 'color is string')
    })

isNotString [​](#isnotstring)
-----------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a string.

ts

    import { assert, test } from 'vitest'
    
    const color = ['red', 'green', 'yellow']
    
    test('assert.isNotString', () => {
      assert.isNotString(color, 'color is not string but array')
    })

isNumber [​](#isnumber)
-----------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a number.

ts

    import { assert, test } from 'vitest'
    
    const colors = 3
    
    test('assert.isNumber', () => {
      assert.isNumber(colors, 'colors is number')
    })

isNotNumber [​](#isnotnumber)
-----------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a number.

ts

    import { assert, test } from 'vitest'
    
    const colors = '3 colors'
    
    test('assert.isNotNumber', () => {
      assert.isNotNumber(colors, 'colors is not number but strings')
    })

isFinite [​](#isfinite)
-----------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a finite number (not NaN, Infinity).

ts

    import { assert, test } from 'vitest'
    
    const colors = 3
    
    test('assert.isFinite', () => {
      assert.isFinite(colors, 'colors is number not NaN or Infinity')
    })

isBoolean [​](#isboolean)
-------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a boolean.

ts

    import { assert, test } from 'vitest'
    
    const isReady = true
    
    test('assert.isBoolean', () => {
      assert.isBoolean(isReady, 'isReady is a boolean')
    })

isNotBoolean [​](#isnotboolean)
-------------------------------

*   **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a boolean.

ts

    import { assert, test } from 'vitest'
    
    const isReady = 'sure'
    
    test('assert.isBoolean', () => {
      assert.isBoolean(isReady, 'isReady is not a boolean but string')
    })

typeOf [​](#typeof)
-------------------

*   **Type:** `<T>(value: T, name: string, message?: string) => void`

Asserts that `value`’s type is `name`, as determined by Object.prototype.toString.

ts

    import { assert, test } from 'vitest'
    
    test('assert.typeOf', () => {
      assert.typeOf({ color: 'red' }, 'object', 'we have an object')
      assert.typeOf(['red', 'green'], 'array', 'we have an array')
      assert.typeOf('red', 'string', 'we have a string')
      assert.typeOf(/red/, 'regexp', 'we have a regular expression')
      assert.typeOf(null, 'null', 'we have a null')
      assert.typeOf(undefined, 'undefined', 'we have an undefined')
    })

notTypeOf [​](#nottypeof)
-------------------------

*   **Type:** `<T>(value: T, name: string, message?: string) => void`

Asserts that `value`’s type is not `name`, as determined by Object.prototype.toString.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notTypeOf', () => {
      assert.notTypeOf('red', 'number', '"red" is not a number')
    })

instanceOf [​](#instanceof)
---------------------------

*   **Type:** `<T>(value: T, constructor: Function, message?: string) => void`

Asserts that `value` is an instance of `constructor`.

ts

    import { assert, test } from 'vitest'
    
    function Person(name) { this.name = name }
    const foo = new Person('foo')
    
    class Tea {
      constructor(name) {
        this.name = name
      }
    }
    const coffee = new Tea('coffee')
    
    test('assert.instanceOf', () => {
      assert.instanceOf(foo, Person, 'foo is an instance of Person')
      assert.instanceOf(coffee, Tea, 'coffee is an instance of Tea')
    })

notInstanceOf [​](#notinstanceof)
---------------------------------

*   **Type:** `<T>(value: T, constructor: Function, message?: string) => void`

Asserts that `value` is not an instance of `constructor`.

ts

    import { assert, test } from 'vitest'
    
    function Person(name) { this.name = name }
    const foo = new Person('foo')
    
    class Tea {
      constructor(name) {
        this.name = name
      }
    }
    const coffee = new Tea('coffee')
    
    test('assert.instanceOf', () => {
      assert.instanceOf(foo, Tea, 'foo is not an instance of Tea')
    })

include [​](#include)
---------------------

*   **Type:**
    *   `(haystack: string, needle: string, message?: string) => void`
    *   `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
    *   `<T extends object>(haystack: WeakSet<T>, needle: T, message?: string) => void`
    *   `<T>(haystack: T, needle: Partial<T>, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.

ts

    import { assert, test } from 'vitest'
    
    test('assert.include', () => {
      assert.include([1, 2, 3], 2, 'array contains value')
      assert.include('foobar', 'foo', 'string contains substring')
      assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property')
    })

notInclude [​](#notinclude)
---------------------------

*   **Type:**
    *   `(haystack: string, needle: string, message?: string) => void`
    *   `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
    *   `<T extends object>(haystack: WeakSet<T>, needle: T, message?: string) => void`
    *   `<T>(haystack: T, needle: Partial<T>, message?: string) => void`

Asserts that `haystack` does not include `needle`. It can be used to assert the absence of a value in an array, a substring in a string, or a subset of properties in an object.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notInclude', () => {
      assert.notInclude([1, 2, 3], 4, 'array doesn\'t contain 4')
      assert.notInclude('foobar', 'baz', 'foobar doesn\'t contain baz')
      assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn\'t contain property')
    })

deepInclude [​](#deepinclude)
-----------------------------

*   **Type:**
*   `(haystack: string, needle: string, message?: string) => void`
*   `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
*   `<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array or a subset of properties in an object. Deep equality is used.

ts

    import { assert, test } from 'vitest'
    
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    
    test('assert.deepInclude', () => {
      assert.deepInclude([obj1, obj2], { a: 1 })
      assert.deepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 1 } })
    })

notDeepInclude [​](#notdeepinclude)
-----------------------------------

*   **Type:**
    *   `(haystack: string, needle: string, message?: string) => void`
    *   `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
    *   `<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string) => void`

Asserts that `haystack` does not include `needle`. It can be used to assert the absence of a value in an array or a subset of properties in an object. Deep equality is used.

ts

    import { assert, test } from 'vitest'
    
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    
    test('assert.notDeepInclude', () => {
      assert.notDeepInclude([obj1, obj2], { a: 10 })
      assert.notDeepInclude({ foo: obj1, bar: obj2 }, { foo: { a: 10 } })
    })

nestedInclude [​](#nestedinclude)
---------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

ts

    import { assert, test } from 'vitest'
    
    test('assert.nestedInclude', () => {
      assert.nestedInclude({ '.a': { b: 'x' } }, { '\\.a.[b]': 'x' })
      assert.nestedInclude({ a: { '[b]': 'x' } }, { 'a.\\[b\\]': 'x' })
    })

notNestedInclude [​](#notnestedinclude)
---------------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` does not include `needle`. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

ts

    import { assert, test } from 'vitest'
    
    test('assert.nestedInclude', () => {
      assert.notNestedInclude({ '.a': { b: 'x' } }, { '\\.a.b': 'y' })
      assert.notNestedInclude({ a: { '[b]': 'x' } }, { 'a.\\[b\\]': 'y' })
    })

deepNestedInclude [​](#deepnestedinclude)
-----------------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepNestedInclude', () => {
      assert.deepNestedInclude({ a: { b: [{ x: 1 }] } }, { 'a.b[0]': { x: 1 } })
      assert.deepNestedInclude({ '.a': { '[b]': { x: 1 } } }, { '\\.a.\\[b\\]': { x: 1 } })
    })

notDeepNestedInclude [​](#notdeepnestedinclude)
-----------------------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` not includes `needle`. Can be used to assert the absence of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[\]’ and ‘.’ in property names can be escaped using double backslashes.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notDeepNestedInclude', () => {
      assert.notDeepNestedInclude({ a: { b: [{ x: 1 }] } }, { 'a.b[0]': { y: 1 } })
      assert.notDeepNestedInclude({ '.a': { '[b]': { x: 1 } } }, { '\\.a.\\[b\\]': { y: 2 } })
    })

ownInclude [​](#owninclude)
---------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties.

ts

    import { assert, test } from 'vitest'
    
    test('assert.ownInclude', () => {
      assert.ownInclude({ a: 1 }, { a: 1 })
    })

notOwnInclude [​](#notowninclude)
---------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties.

ts

    import { assert, test } from 'vitest'
    
    const obj1 = {
      b: 2
    }
    
    const obj2 = object.create(obj1)
    obj2.a = 1
    
    test('assert.notOwnInclude', () => {
      assert.notOwnInclude(obj2, { b: 2 })
    })

deepOwnInclude [​](#deepowninclude)
-----------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepOwnInclude', () => {
      assert.deepOwnInclude({ a: { b: 2 } }, { a: { b: 2 } })
    })

notDeepOwnInclude [​](#notdeepowninclude)
-----------------------------------------

*   **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` not includes `needle`. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notDeepOwnInclude', () => {
      assert.notDeepOwnInclude({ a: { b: 2 } }, { a: { c: 3 } })
    })

match [​](#match)
-----------------

*   **Type:** `(value: string, regexp: RegExp, message?: string) => void`

Asserts that `value` matches the regular expression `regexp`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.match', () => {
      assert.match('foobar', /^foo/, 'regexp matches')
    })

notMatch [​](#notmatch)
-----------------------

*   **Type:** `(value: string, regexp: RegExp, message?: string) => void`

Asserts that `value` does not matches the regular expression `regexp`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notMatch', () => {
      assert.notMatch('foobar', /^foo/, 'regexp does not match')
    })

property [​](#property)
-----------------------

*   **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property`

ts

    import { assert, test } from 'vitest'
    
    test('assert.property', () => {
      assert.property({ tea: { green: 'matcha' } }, 'tea')
      assert.property({ tea: { green: 'matcha' } }, 'toString')
    })

notProperty [​](#notproperty)
-----------------------------

*   **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property`

ts

    import { assert, test } from 'vitest'
    
    test('assert.notProperty', () => {
      assert.notProperty({ tea: { green: 'matcha' } }, 'coffee')
    })

propertyVal [​](#propertyval)
-----------------------------

*   **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.notPropertyVal', () => {
      assert.propertyVal({ tea: 'is good' }, 'tea', 'is good')
    })

notPropertyVal [​](#notpropertyval)
-----------------------------------

*   **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.notPropertyVal', () => {
      assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad')
      assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good')
    })

deepPropertyVal [​](#deeppropertyval)
-------------------------------------

*   **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepPropertyVal', () => {
      assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' })
    })

notDeepPropertyVal [​](#notdeeppropertyval)
-------------------------------------------

*   **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepPropertyVal', () => {
      assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' })
      assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' })
      assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' })
    })

nestedProperty [​](#nestedproperty)
-----------------------------------

*   **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepPropertyVal', () => {
      assert.nestedProperty({ tea: { green: 'matcha' } }, 'tea.green')
    })

notNestedProperty [​](#notnestedproperty)
-----------------------------------------

*   **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

ts

    import { assert, test } from 'vitest'
    
    test('assert.deepPropertyVal', () => {
      assert.notNestedProperty({ tea: { green: 'matcha' } }, 'tea.oolong')
    })

nestedPropertyVal [​](#nestedpropertyval)
-----------------------------------------

*   **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` has a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.nestedPropertyVal', () => {
      assert.nestedPropertyVal({ tea: { green: 'matcha' } }, 'tea.green', 'matcha')
    })

notNestedPropertyVal [​](#notnestedpropertyval)
-----------------------------------------------

*   **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` does not have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.notNestedPropertyVal', () => {
      assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'tea.green', 'konacha')
      assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'coffee.green', 'matcha')
    })

deepNestedPropertyVal [​](#deepnestedpropertyval)
-------------------------------------------------

*   **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` has a property named by `property` with a value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.notNestedPropertyVal', () => {
      assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'tea.green', 'konacha')
      assert.notNestedPropertyVal({ tea: { green: 'matcha' } }, 'coffee.green', 'matcha')
    })

notDeepNestedPropertyVal [​](#notdeepnestedpropertyval)
-------------------------------------------------------

*   **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` does not have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notDeepNestedPropertyVal', () => {
      assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' })
      assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' })
      assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' })
    })

lengthOf [​](#lengthof)
-----------------------

*   **Type:** `<T extends { readonly length?: number | undefined } | { readonly size?: number | undefined }>(object: T, length: number, message?: string) => void`

Asserts that `object` has a `length` or `size` with the expected value.

ts

    import { assert, test } from 'vitest'
    
    test('assert.lengthOf', () => {
      assert.lengthOf([1, 2, 3], 3, 'array has length of 3')
      assert.lengthOf('foobar', 6, 'string has length of 6')
      assert.lengthOf(new Set([1, 2, 3]), 3, 'set has size of 3')
      assert.lengthOf(new Map([['a', 1], ['b', 2], ['c', 3]]), 3, 'map has size of 3')
    })

hasAnyKeys [​](#hasanykeys)
---------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has at least one of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.hasAnyKeys', () => {
      assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'iDontExist', 'baz'])
      assert.hasAnyKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, iDontExist: 99, baz: 1337 })
      assert.hasAnyKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }, 'key'])
      assert.hasAnyKeys(new Set([{ foo: 'bar' }, 'anotherKey']), [{ foo: 'bar' }, 'anotherKey'])
    })

hasAllKeys [​](#hasallkeys)
---------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all and only all of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.hasAllKeys', () => {
      assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar', 'baz'])
      assert.hasAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 })
      assert.hasAllKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }, 'key'])
      assert.hasAllKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ foo: 'bar' }, 'anotherKey']))
    })

containsAllKeys [​](#containsallkeys)
-------------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all of the `keys` provided but may have more keys not listed. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.containsAllKeys', () => {
      assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz'])
      assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar', 'baz'])
      assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, baz: 1337 })
      assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, { foo: 30, bar: 99, baz: 1337 })
      assert.containsAllKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }])
      assert.containsAllKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ foo: 1 }, 'key'])
      assert.containsAllKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ foo: 'bar' }]))
      assert.containsAllKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ foo: 'bar' }, 'anotherKey']))
    })

doesNotHaveAnyKeys [​](#doesnothaveanykeys)
-------------------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has none of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotHaveAnyKeys', () => {
      assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['one', 'two', 'example'])
      assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, { one: 1, two: 2, example: 'foo' })
      assert.doesNotHaveAnyKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ one: 'two' }, 'example'])
      assert.doesNotHaveAnyKeys(new Set([{ foo: 'bar' }, 'anotherKey'], [{ one: 'two' }, 'example']))
    })

doesNotHaveAllKeys [​](#doesnothaveallkeys)
-------------------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` does not have at least one of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.hasAnyKeys', () => {
      assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, ['one', 'two', 'example'])
      assert.doesNotHaveAnyKeys({ foo: 1, bar: 2, baz: 3 }, { one: 1, two: 2, example: 'foo' })
      assert.doesNotHaveAnyKeys(new Map([[{ foo: 1 }, 'bar'], ['key', 'value']]), [{ one: 'two' }, 'example'])
      assert.doesNotHaveAnyKeys(new Set([{ foo: 'bar' }, 'anotherKey']), [{ one: 'two' }, 'example'])
    })

hasAnyDeepKeys [​](#hasanydeepkeys)
-----------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.hasAnyDeepKeys', () => {
      assert.hasAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { one: 'one' })
      assert.hasAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), [{ one: 'one' }, { two: 'two' }])
      assert.hasAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ one: 'one' }, { two: 'two' }])
      assert.hasAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { one: 'one' })
      assert.hasAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { three: 'three' }])
      assert.hasAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { two: 'two' }])
    })

hasAllDeepKeys [​](#hasalldeepkeys)
-----------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all and only all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.hasAnyDeepKeys', () => {
      assert.hasAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne']]), { one: 'one' })
      assert.hasAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ one: 'one' }, { two: 'two' }])
      assert.hasAllDeepKeys(new Set([{ one: 'one' }]), { one: 'one' })
      assert.hasAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { two: 'two' }])
    })

containsAllDeepKeys [​](#containsalldeepkeys)
---------------------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` contains all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.containsAllDeepKeys', () => {
      assert.containsAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { one: 'one' })
      assert.containsAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ one: 'one' }, { two: 'two' }])
      assert.containsAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { one: 'one' })
      assert.containsAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { two: 'two' }])
    })

doesNotHaveAnyDeepKeys [​](#doesnothaveanydeepkeys)
---------------------------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has none of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotHaveAnyDeepKeys', () => {
      assert.doesNotHaveAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { thisDoesNot: 'exist' })
      assert.doesNotHaveAnyDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ twenty: 'twenty' }, { fifty: 'fifty' }])
      assert.doesNotHaveAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { twenty: 'twenty' })
      assert.doesNotHaveAnyDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ twenty: 'twenty' }, { fifty: 'fifty' }])
    })

doesNotHaveAllDeepKeys [​](#doesnothavealldeepkeys)
---------------------------------------------------

*   **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` does not have at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotHaveAllDeepKeys', () => {
      assert.doesNotHaveAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [1, 2]]), { thisDoesNot: 'exist' })
      assert.doesNotHaveAllDeepKeys(new Map([[{ one: 'one' }, 'valueOne'], [{ two: 'two' }, 'valueTwo']]), [{ twenty: 'twenty' }, { one: 'one' }])
      assert.doesNotHaveAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), { twenty: 'twenty' })
      assert.doesNotHaveAllDeepKeys(new Set([{ one: 'one' }, { two: 'two' }]), [{ one: 'one' }, { fifty: 'fifty' }])
    })

throws [​](#throws)
-------------------

*   **Type:**
    *   `(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string) => void`
    *   `(fn: () => void, errorLike?: ErrorConstructor | Error | null, errMsgMatcher?: RegExp | string | null, message?: string) => void`
*   **Alias:**
    *   `throw`
    *   `Throw`

If `errorLike` is an Error constructor, asserts that `fn` will throw an error that is an instance of `errorLike`. If errorLike is an Error instance, asserts that the error thrown is the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will have a message matching `errMsgMatcher`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.throws', () => {
      assert.throws(fn, 'Error thrown must have this msg')
      assert.throws(fn, /Error thrown must have a msg that matches this/)
      assert.throws(fn, ReferenceError)
      assert.throws(fn, errorInstance)
      assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg')
      assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg')
      assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/)
      assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/)
    })

doesNotThrow [​](#doesnotthrow)
-------------------------------

*   **Type:** `(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string) => void`
*   **Type:** `(fn: () => void, errorLike?: ErrorConstructor | Error | null, errMsgMatcher?: RegExp | string | null, message?: string) => void`

If `errorLike` is an Error constructor, asserts that `fn` will not throw an error that is an instance of `errorLike`. If errorLike is an Error instance, asserts that the error thrown is not the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will not have a message matching `errMsgMatcher`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotThrow', () => {
      assert.doesNotThrow(fn, 'Any Error thrown must not have this message')
      assert.doesNotThrow(fn, /Any Error thrown must not match this/)
      assert.doesNotThrow(fn, Error)
      assert.doesNotThrow(fn, errorInstance)
      assert.doesNotThrow(fn, Error, 'Error must not have this message')
      assert.doesNotThrow(fn, errorInstance, 'Error must not have this message')
      assert.doesNotThrow(fn, Error, /Error must not match this/)
      assert.doesNotThrow(fn, errorInstance, /Error must not match this/)
    })

operator [​](#operator)
-----------------------

*   **Type:** `(val1: OperatorComparable, operator: Operator, val2: OperatorComparable, message?: string) => void`

Compare `val1` and `val2` using `operator`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.operator', () => {
      assert.operator(1, '<', 2, 'everything is ok')
    })

closeTo [​](#closeto)
---------------------

*   **Type:** `(actual: number, expected: number, delta: number, message?: string) => void`
*   **Alias:** `approximately`

Asserts that the `actual` is equal `expected`, to within a +/- `delta` range.

ts

    import { assert, test } from 'vitest'
    
    test('assert.closeTo', () => {
      assert.closeTo(1.5, 1, 0.5, 'numbers are close')
    })

sameMembers [​](#samemembers)
-----------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in any order. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.sameMembers', () => {
      assert.sameMembers([1, 2, 3], [2, 1, 3], 'same members')
    })

notSameMembers [​](#notsamemembers)
-----------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don't have the same members in any order. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.sameMembers', () => {
      assert.notSameMembers([1, 2, 3], [5, 1, 3], 'not same members')
    })

sameDeepMembers [​](#samedeepmembers)
-------------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in any order. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.sameDeepMembers', () => {
      assert.sameDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members')
    })

notSameDeepMembers [​](#notsamedeepmembers)
-------------------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don’t have the same members in any order. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.sameDeepMembers', () => {
      assert.sameDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members')
    })

sameOrderedMembers [​](#sameorderedmembers)
-------------------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.sameOrderedMembers', () => {
      assert.sameOrderedMembers([1, 2, 3], [1, 2, 3], 'same ordered members')
    })

notSameOrderedMembers [​](#notsameorderedmembers)
-------------------------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.notSameOrderedMembers', () => {
      assert.notSameOrderedMembers([1, 2, 3], [2, 1, 3], 'not same ordered members')
    })

sameDeepOrderedMembers [​](#samedeeporderedmembers)
---------------------------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.sameDeepOrderedMembers', () => {
      assert.sameDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { c: 3 }], 'same deep ordered members')
    })

notSameDeepOrderedMembers [​](#notsamedeeporderedmembers)
---------------------------------------------------------

*   **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don’t have the same members in the same order. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notSameDeepOrderedMembers', () => {
      assert.notSameDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { z: 5 }], 'not same deep ordered members')
      assert.notSameDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { c: 3 }], 'not same deep ordered members')
    })

includeMembers [​](#includemembers)
-----------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

ts

    import { assert, test } from 'vitest'
    
    test('assert.includeMembers', () => {
      assert.includeMembers([1, 2, 3], [2, 1, 2], 'include members')
    })

notIncludeMembers [​](#notincludemembers)
-----------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn't included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notIncludeMembers', () => {
      assert.notIncludeMembers([1, 2, 3], [5, 1], 'not include members')
    })

includeDeepMembers [​](#includedeepmembers)
-------------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

ts

    import { assert, test } from 'vitest'
    
    test('assert.includeDeepMembers', () => {
      assert.includeDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }, { b: 2 }], 'include deep members')
    })

notIncludeDeepMembers [​](#notincludedeepmembers)
-------------------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn’t included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

ts

    import { assert, test } from 'vitest'
    
    test('assert.notIncludeDeepMembers', () => {
      assert.notIncludeDeepMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { f: 5 }], 'not include deep members')
    })

includeOrderedMembers [​](#includeorderedmembers)
-------------------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.includeOrderedMembers', () => {
      assert.includeOrderedMembers([1, 2, 3], [1, 2], 'include ordered members')
    })

notIncludeOrderedMembers [​](#notincludeorderedmembers)
-------------------------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn't included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

ts

    import { assert, test } from 'vitest'
    
    test('assert.notIncludeOrderedMembers', () => {
      assert.notIncludeOrderedMembers([1, 2, 3], [2, 1], 'not include ordered members')
      assert.notIncludeOrderedMembers([1, 2, 3], [2, 3], 'not include ordered members')
    })

includeDeepOrderedMembers [​](#includedeeporderedmembers)
---------------------------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.includeDeepOrderedMembers', () => {
      assert.includeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }], 'include deep ordered members')
    })

notIncludeDeepOrderedMembers [​](#notincludedeeporderedmembers)
---------------------------------------------------------------

*   **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn’t included in `superset` in the same order beginning with the first element in superset. Uses a deep equality check.

ts

    import { assert, test } from 'vitest'
    
    test('assert.includeDeepOrderedMembers', () => {
      assert.notIncludeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { f: 5 }], 'not include deep ordered members')
      assert.notIncludeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { a: 1 }], 'not include deep ordered members')
      assert.notIncludeDeepOrderedMembers([{ a: 1 }, { b: 2 }, { c: 3 }], [{ b: 2 }, { c: 3 }], 'not include deep ordered members')
    })

oneOf [​](#oneof)
-----------------

*   **Type:** `<T>(inList: T, list: T[], message?: string) => void`

Asserts that non-object, non-array value `inList` appears in the flat array `list`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.oneOf', () => {
      assert.oneOf(1, [2, 1], 'Not found in list')
    })

changes [​](#changes)
---------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` changes the `object` of a `property`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.changes', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 22 };
      assert.changes(fn, obj, 'val')
    })

changesBy [​](#changesby)
-------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` changes the `object` of a `property` by a `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.changesBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val += 2 };
      assert.changesBy(fn, obj, 'val', 2)
    })

doesNotChange [​](#doesnotchange)
---------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` does not changes the `object` of a `property`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotChange', () => {
      const obj = { val: 10 }
      function fn() { obj.val += 2 };
      assert.doesNotChange(fn, obj, 'val', 2)
    })

changesButNotBy [​](#changesbutnotby)
-------------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change:number, message?: string) => void`

Asserts that a `modifier` does not change the `object` of a `property` or of a `modifier` return value by a `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.changesButNotBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val += 10 };
      assert.changesButNotBy(fn, obj, 'val', 5)
    })

increases [​](#increases)
-------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` increases a numeric `object`'s `property`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.increases', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 13 };
      assert.increases(fn, obj, 'val')
    })

increasesBy [​](#increasesby)
-----------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` increases a numeric `object`'s `property` or a `modifier` return value by an `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.increasesBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val += 10 };
      assert.increasesBy(fn, obj, 'val', 10)
    })

doesNotIncrease [​](#doesnotincrease)
-------------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` does not increases a numeric `object`'s `property`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotIncrease', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 8 }
      assert.doesNotIncrease(fn, obj, 'val')
    })

increasesButNotBy [​](#increasesbutnotby)
-----------------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not increases a numeric `object`'s `property` or a `modifier` return value by an `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.increasesButNotBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val += 15 };
      assert.increasesButNotBy(fn, obj, 'val', 10)
    })

decreases [​](#decreases)
-------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` decreases a numeric `object`'s `property`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.decreases', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 5 };
      assert.decreases(fn, obj, 'val')
    })

decreasesBy [​](#decreasesby)
-----------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` decreases a numeric `object`'s `property` or a `modifier` return value by a `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.decreasesBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val -= 5 };
      assert.decreasesBy(fn, obj, 'val', 5)
    })

doesNotDecrease [​](#doesnotdecrease)
-------------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` dose not decrease a numeric `object`'s `property`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotDecrease', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 15 }
      assert.doesNotDecrease(fn, obj, 'val')
    })

doesNotDecreaseBy [​](#doesnotdecreaseby)
-----------------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not decrease a numeric `object`'s `property` or a `modifier` return value by a `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.doesNotDecreaseBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 5 };
      assert.doesNotDecreaseBy(fn, obj, 'val', 1)
    })

decreasesButNotBy [​](#decreasesbutnotby)
-----------------------------------------

*   **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not decrease a numeric `object`'s `property` or a `modifier` return value by a `change`.

ts

    import { assert, test } from 'vitest'
    
    test('assert.decreasesButNotBy', () => {
      const obj = { val: 10 }
      function fn() { obj.val = 5 };
      assert.decreasesButNotBy(fn, obj, 'val', 1)
    })

ifError [​](#iferror)
---------------------

*   **Type:** `<T>(object: T, message?: string) => void`

Asserts if `object` is not a false value, and throws if it is a true value. This is added to allow for chai to be a drop-in replacement for Node’s assert class.

ts

    import { assert, test } from 'vitest'
    
    test('assert.ifError', () => {
      const err = new Error('I am a custom error')
      assert.ifError(err) // Rethrows err!
    })

isExtensible [​](#isextensible)
-------------------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `extensible`

Asserts that `object` is extensible (can have new properties added to it).

ts

    import { assert, test } from 'vitest'
    
    test('assert.isExtensible', () => {
      assert.isExtensible({})
    })

isNotExtensible [​](#isnotextensible)
-------------------------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `notExtensible`

Asserts that `object` is not extensible (can not have new properties added to it).

ts

    import { assert, test } from 'vitest'
    
    test('assert.isNotExtensible', () => {
      const nonExtensibleObject = Object.preventExtensions({})
      const sealedObject = Object.seal({})
      const frozenObject = Object.freeze({})
    
      assert.isNotExtensible(nonExtensibleObject)
      assert.isNotExtensible(sealedObject)
      assert.isNotExtensible(frozenObject)
    })

isSealed [​](#issealed)
-----------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `sealed`

Asserts that `object` is sealed (cannot have new properties added to it and its existing properties cannot be removed).

ts

    import { assert, test } from 'vitest'
    
    test('assert.isSealed', () => {
      const sealedObject = Object.seal({})
      const frozenObject = Object.seal({})
    
      assert.isSealed(sealedObject)
      assert.isSealed(frozenObject)
    })

isNotSealed [​](#isnotsealed)
-----------------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `notSealed`

Asserts that `object` is not sealed (can have new properties added to it and its existing properties can be removed).

ts

    import { assert, test } from 'vitest'
    
    test('assert.isNotSealed', () => {
      assert.isNotSealed({})
    })

isFrozen [​](#isfrozen)
-----------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `frozen`

Asserts that object is frozen (cannot have new properties added to it and its existing properties cannot be modified).

ts

    import { assert, test } from 'vitest'
    
    test('assert.isFrozen', () => {
      const frozenObject = Object.freeze({})
      assert.frozen(frozenObject)
    })

isNotFrozen [​](#isnotfrozen)
-----------------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `notFrozen`

Asserts that `object` is not frozen (can have new properties added to it and its existing properties can be modified).

ts

    import { assert, test } from 'vitest'
    
    test('assert.isNotFrozen', () => {
      assert.isNotFrozen({})
    })

isEmpty [​](#isempty)
---------------------

*   **Type:** `<T>(target: T, message?: string) => void`
*   **Alias:** `empty`

Asserts that the `target` does not contain any values. For arrays and strings, it checks the length property. For Map and Set instances, it checks the size property. For non-function objects, it gets the count of its own enumerable string keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isEmpty', () => {
      assert.isEmpty([])
      assert.isEmpty('')
      assert.isEmpty(new Map())
      assert.isEmpty({})
    })

isNotEmpty [​](#isnotempty)
---------------------------

*   **Type:** `<T>(object: T, message?: string) => void`
*   **Alias:** `notEmpty`

Asserts that the `target` contains values. For arrays and strings, it checks the length property. For Map and Set instances, it checks the size property. For non-function objects, it gets the count of its own enumerable string keys.

ts

    import { assert, test } from 'vitest'
    
    test('assert.isNotEmpty', () => {
      assert.isNotEmpty([1, 2])
      assert.isNotEmpty('34')
      assert.isNotEmpty(new Set([5, 6]))
      assert.isNotEmpty({ key: 7 })
    })

assertType [​](#asserttype)
===========================

WARNING

During runtime this function doesn't do anything. To [enable typechecking](/guide/testing-types#run-typechecking), don't forget to pass down `--typecheck` flag.

*   **Type:** `<T>(value: T): void`

You can use this function as an alternative for [`expectTypeOf`](/api/expect-typeof) to easily assert that the argument type is equal to the generic provided.

ts

    import { assertType } from 'vitest'
    
    function concat(a: string, b: string): string
    function concat(a: number, b: number): number
    function concat(a: string | number, b: string | number): string | number
    
    assertType<string>(concat('a', 'b'))
    assertType<number>(concat(1, 2))
    // @ts-expect-error wrong types
    assertType(concat('a', 2))

Command Line Interface [​](#command-line-interface)
===================================================

Commands [​](#commands)
-----------------------

### `vitest` [​](#vitest)

Start Vitest in the current directory. Will enter the watch mode in development environment and run mode in CI (or non-interactive terminal) automatically.

You can pass an additional argument as the filter of the test files to run. For example:

bash

    vitest foobar

Will run only the test file that contains `foobar` in their paths. This filter only checks inclusion and doesn't support regexp or glob patterns (unless your terminal processes it before Vitest receives the filter).

Since Vitest 3, you can also specify the test by filename and line number:

bash

    $ vitest basic/foo.test.ts:10

WARNING

Note that Vitest requires the full filename for this feature to work. It can be relative to the current working directory or an absolute file path.

bash

    $ vitest basic/foo.js:10 # ✅
    $ vitest ./basic/foo.js:10 # ✅
    $ vitest /users/project/basic/foo.js:10 # ✅
    $ vitest foo:10 # ❌
    $ vitest ./basic/foo:10 # ❌

At the moment Vitest also doesn't support ranges:

bash

    $ vitest basic/foo.test.ts:10, basic/foo.test.ts:25 # ✅
    $ vitest basic/foo.test.ts:10-25 # ❌

### `vitest run` [​](#vitest-run)

Perform a single run without watch mode.

### `vitest watch` [​](#vitest-watch)

Run all test suites but watch for changes and rerun tests when they change. Same as calling `vitest` without an argument. Will fallback to `vitest run` in CI or when stdin is not a TTY (non-interactive environment).

### `vitest dev` [​](#vitest-dev)

Alias to `vitest watch`.

### `vitest related` [​](#vitest-related)

Run only tests that cover a list of source files. Works with static imports (e.g., `import('./index.js')` or `import index from './index.js`), but not the dynamic ones (e.g., `import(filepath)`). All files should be relative to root folder.

Useful to run with [`lint-staged`](https://github.com/okonet/lint-staged) or with your CI setup.

bash

    vitest related /src/index.ts /src/hello-world.js

TIP

Don't forget that Vitest runs with enabled watch mode by default. If you are using tools like `lint-staged`, you should also pass `--run` option, so that command can exit normally.

.lintstagedrc.js

js

    export default {
      '*.{js,ts}': 'vitest related --run',
    }

### `vitest bench` [​](#vitest-bench)

Run only [benchmark](/guide/features#benchmarking) tests, which compare performance results.

### `vitest init` [​](#vitest-init)

`vitest init <name>` can be used to setup project configuration. At the moment, it only supports [`browser`](/guide/browser/) value:

bash

    vitest init browser

### `vitest list` [​](#vitest-list)

`vitest list` command inherits all `vitest` options to print the list of all matching tests. This command ignores `reporters` option. By default, it will print the names of all tests that matched the file filter and name pattern:

shell

    vitest list filename.spec.ts -t="some-test"

txt

    describe > some-test
    describe > some-test > test 1
    describe > some-test > test 2

You can pass down `--json` flag to print tests in JSON format or save it in a separate file:

bash

    vitest list filename.spec.ts -t="some-test" --json=./file.json

If `--json` flag doesn't receive a value, it will output the JSON into stdout.

You also can pass down `--filesOnly` flag to print the test files only:

bash

    vitest list --filesOnly

txt

    tests/test1.test.ts
    tests/test2.test.ts

Options [​](#options)
---------------------

TIP

Vitest supports both camel case and kebab case for CLI arguments. For example, `--passWithNoTests` and `--pass-with-no-tests` will both work (`--no-color` and `--inspect-brk` are the exceptions).

Vitest also supports different ways of specifying the value: `--reporter dot` and `--reporter=dot` are both valid.

If option supports an array of values, you need to pass the option multiple times:

    vitest --reporter=dot --reporter=default

Boolean options can be negated with `no-` prefix. Specifying the value as `false` also works:

    vitest --no-api
    vitest --api=false

### root [​](#root)

*   **CLI:** `-r, --root <path>`
*   **Config:** [root](/config/#root)

Root path

### config [​](#config)

*   **CLI:** `-c, --config <path>`

Path to config file

### update [​](#update)

*   **CLI:** `-u, --update`
*   **Config:** [update](/config/#update)

Update snapshot

### watch [​](#watch)

*   **CLI:** `-w, --watch`
*   **Config:** [watch](/config/#watch)

Enable watch mode

### testNamePattern [​](#testnamepattern)

*   **CLI:** `-t, --testNamePattern <pattern>`
*   **Config:** [testNamePattern](/config/#testnamepattern)

Run tests with full names matching the specified regexp pattern

### dir [​](#dir)

*   **CLI:** `--dir <path>`
*   **Config:** [dir](/config/#dir)

Base directory to scan for the test files

### ui [​](#ui)

*   **CLI:** `--ui`
*   **Config:** [ui](/config/#ui)

Enable UI

### open [​](#open)

*   **CLI:** `--open`
*   **Config:** [open](/config/#open)

Open UI automatically (default: `!process.env.CI`)

### api.port [​](#api-port)

*   **CLI:** `--api.port [port]`

Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. If true will be set to `51204`

### api.host [​](#api-host)

*   **CLI:** `--api.host [host]`

Specify which IP addresses the server should listen on. Set this to `0.0.0.0` or `true` to listen on all addresses, including LAN and public addresses

### api.strictPort [​](#api-strictport)

*   **CLI:** `--api.strictPort`

Set to true to exit if port is already in use, instead of automatically trying the next available port

### silent [​](#silent)

*   **CLI:** `--silent [value]`
*   **Config:** [silent](/config/#silent)

Silent console output from tests. Use `'passed-only'` to see logs from failing tests only.

### hideSkippedTests [​](#hideskippedtests)

*   **CLI:** `--hideSkippedTests`

Hide logs for skipped tests

### reporters [​](#reporters)

*   **CLI:** `--reporter <name>`
*   **Config:** [reporters](/config/#reporters)

Specify reporters (default, basic, blob, verbose, dot, json, tap, tap-flat, junit, hanging-process, github-actions)

### outputFile [​](#outputfile)

*   **CLI:** `--outputFile <filename/-s>`
*   **Config:** [outputFile](/config/#outputfile)

Write test results to a file when supporter reporter is also specified, use cac's dot notation for individual outputs of multiple reporters (example: `--outputFile.tap=./tap.txt`)

### coverage.all [​](#coverage-all)

*   **CLI:** `--coverage.all`
*   **Config:** [coverage.all](/config/#coverage-all)

Whether to include all files, including the untested ones into report

### coverage.provider [​](#coverage-provider)

*   **CLI:** `--coverage.provider <name>`
*   **Config:** [coverage.provider](/config/#coverage-provider)

Select the tool for coverage collection, available values are: "v8", "istanbul" and "custom"

### coverage.enabled [​](#coverage-enabled)

*   **CLI:** `--coverage.enabled`
*   **Config:** [coverage.enabled](/config/#coverage-enabled)

Enables coverage collection. Can be overridden using the `--coverage` CLI option (default: `false`)

### coverage.include [​](#coverage-include)

*   **CLI:** `--coverage.include <pattern>`
*   **Config:** [coverage.include](/config/#coverage-include)

Files included in coverage as glob patterns. May be specified more than once when using multiple patterns (default: `**`)

### coverage.exclude [​](#coverage-exclude)

*   **CLI:** `--coverage.exclude <pattern>`
*   **Config:** [coverage.exclude](/config/#coverage-exclude)

Files to be excluded in coverage. May be specified more than once when using multiple extensions (default: Visit [`coverage.exclude`](https://vitest.dev/config/#coverage-exclude))

### coverage.extension [​](#coverage-extension)

*   **CLI:** `--coverage.extension <extension>`
*   **Config:** [coverage.extension](/config/#coverage-extension)

Extension to be included in coverage. May be specified more than once when using multiple extensions (default: `[".js", ".cjs", ".mjs", ".ts", ".mts", ".tsx", ".jsx", ".vue", ".svelte"]`)

### coverage.clean [​](#coverage-clean)

*   **CLI:** `--coverage.clean`
*   **Config:** [coverage.clean](/config/#coverage-clean)

Clean coverage results before running tests (default: true)

### coverage.cleanOnRerun [​](#coverage-cleanonrerun)

*   **CLI:** `--coverage.cleanOnRerun`
*   **Config:** [coverage.cleanOnRerun](/config/#coverage-cleanonrerun)

Clean coverage report on watch rerun (default: true)

### coverage.reportsDirectory [​](#coverage-reportsdirectory)

*   **CLI:** `--coverage.reportsDirectory <path>`
*   **Config:** [coverage.reportsDirectory](/config/#coverage-reportsdirectory)

Directory to write coverage report to (default: ./coverage)

### coverage.reporter [​](#coverage-reporter)

*   **CLI:** `--coverage.reporter <name>`
*   **Config:** [coverage.reporter](/config/#coverage-reporter)

Coverage reporters to use. Visit [`coverage.reporter`](https://vitest.dev/config/#coverage-reporter) for more information (default: `["text", "html", "clover", "json"]`)

### coverage.reportOnFailure [​](#coverage-reportonfailure)

*   **CLI:** `--coverage.reportOnFailure`
*   **Config:** [coverage.reportOnFailure](/config/#coverage-reportonfailure)

Generate coverage report even when tests fail (default: `false`)

### coverage.allowExternal [​](#coverage-allowexternal)

*   **CLI:** `--coverage.allowExternal`
*   **Config:** [coverage.allowExternal](/config/#coverage-allowexternal)

Collect coverage of files outside the project root (default: `false`)

### coverage.skipFull [​](#coverage-skipfull)

*   **CLI:** `--coverage.skipFull`
*   **Config:** [coverage.skipFull](/config/#coverage-skipfull)

Do not show files with 100% statement, branch, and function coverage (default: `false`)

### coverage.thresholds.100 [​](#coverage-thresholds-100)

*   **CLI:** `--coverage.thresholds.100`
*   **Config:** [coverage.thresholds.100](/config/#coverage-thresholds-100)

Shortcut to set all coverage thresholds to 100 (default: `false`)

### coverage.thresholds.perFile [​](#coverage-thresholds-perfile)

*   **CLI:** `--coverage.thresholds.perFile`
*   **Config:** [coverage.thresholds.perFile](/config/#coverage-thresholds-perfile)

Check thresholds per file. See `--coverage.thresholds.lines`, `--coverage.thresholds.functions`, `--coverage.thresholds.branches` and `--coverage.thresholds.statements` for the actual thresholds (default: `false`)

### coverage.thresholds.autoUpdate [​](#coverage-thresholds-autoupdate)

*   **CLI:** `--coverage.thresholds.autoUpdate`
*   **Config:** [coverage.thresholds.autoUpdate](/config/#coverage-thresholds-autoupdate)

Update threshold values: "lines", "functions", "branches" and "statements" to configuration file when current coverage is above the configured thresholds (default: `false`)

### coverage.thresholds.lines [​](#coverage-thresholds-lines)

*   **CLI:** `--coverage.thresholds.lines <number>`

Threshold for lines. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.thresholds.functions [​](#coverage-thresholds-functions)

*   **CLI:** `--coverage.thresholds.functions <number>`

Threshold for functions. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.thresholds.branches [​](#coverage-thresholds-branches)

*   **CLI:** `--coverage.thresholds.branches <number>`

Threshold for branches. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.thresholds.statements [​](#coverage-thresholds-statements)

*   **CLI:** `--coverage.thresholds.statements <number>`

Threshold for statements. Visit [istanbuljs](https://github.com/istanbuljs/nyc#coverage-thresholds) for more information. This option is not available for custom providers

### coverage.ignoreClassMethods [​](#coverage-ignoreclassmethods)

*   **CLI:** `--coverage.ignoreClassMethods <name>`
*   **Config:** [coverage.ignoreClassMethods](/config/#coverage-ignoreclassmethods)

Array of class method names to ignore for coverage. Visit [istanbuljs](https://github.com/istanbuljs/nyc#ignoring-methods) for more information. This option is only available for the istanbul providers (default: `[]`)

### coverage.processingConcurrency [​](#coverage-processingconcurrency)

*   **CLI:** `--coverage.processingConcurrency <number>`
*   **Config:** [coverage.processingConcurrency](/config/#coverage-processingconcurrency)

Concurrency limit used when processing the coverage results. (default min between 20 and the number of CPUs)

### coverage.customProviderModule [​](#coverage-customprovidermodule)

*   **CLI:** `--coverage.customProviderModule <path>`
*   **Config:** [coverage.customProviderModule](/config/#coverage-customprovidermodule)

Specifies the module name or path for the custom coverage provider module. Visit [Custom Coverage Provider](https://vitest.dev/guide/coverage#custom-coverage-provider) for more information. This option is only available for custom providers

### coverage.watermarks.statements [​](#coverage-watermarks-statements)

*   **CLI:** `--coverage.watermarks.statements <watermarks>`

High and low watermarks for statements in the format of `<high>,<low>`

### coverage.watermarks.lines [​](#coverage-watermarks-lines)

*   **CLI:** `--coverage.watermarks.lines <watermarks>`

High and low watermarks for lines in the format of `<high>,<low>`

### coverage.watermarks.branches [​](#coverage-watermarks-branches)

*   **CLI:** `--coverage.watermarks.branches <watermarks>`

High and low watermarks for branches in the format of `<high>,<low>`

### coverage.watermarks.functions [​](#coverage-watermarks-functions)

*   **CLI:** `--coverage.watermarks.functions <watermarks>`

High and low watermarks for functions in the format of `<high>,<low>`

### mode [​](#mode)

*   **CLI:** `--mode <name>`
*   **Config:** [mode](/config/#mode)

Override Vite mode (default: `test` or `benchmark`)

### workspace [​](#workspace)

*   **CLI:** `--workspace <path>`
*   **Config:** [workspace](/config/#workspace)

\[deprecated\] Path to a workspace configuration file

### isolate [​](#isolate)

*   **CLI:** `--isolate`
*   **Config:** [isolate](/config/#isolate)

Run every test file in isolation. To disable isolation, use `--no-isolate` (default: `true`)

### globals [​](#globals)

*   **CLI:** `--globals`
*   **Config:** [globals](/config/#globals)

Inject apis globally

### dom [​](#dom)

*   **CLI:** `--dom`

Mock browser API with happy-dom

### browser.enabled [​](#browser-enabled)

*   **CLI:** `--browser.enabled`
*   **Config:** [browser.enabled](/guide/browser/config#browser-enabled)

Run tests in the browser. Equivalent to `--browser.enabled` (default: `false`)

### browser.name [​](#browser-name)

*   **CLI:** `--browser.name <name>`
*   **Config:** [browser.name](/guide/browser/config#browser-name)

Run all tests in a specific browser. Some browsers are only available for specific providers (see `--browser.provider`). Visit [`browser.name`](https://vitest.dev/guide/browser/config/#browser-name) for more information

### browser.headless [​](#browser-headless)

*   **CLI:** `--browser.headless`
*   **Config:** [browser.headless](/guide/browser/config#browser-headless)

Run the browser in headless mode (i.e. without opening the GUI (Graphical User Interface)). If you are running Vitest in CI, it will be enabled by default (default: `process.env.CI`)

### browser.api.port [​](#browser-api-port)

*   **CLI:** `--browser.api.port [port]`
*   **Config:** [browser.api.port](/guide/browser/config#browser-api-port)

Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on. If true will be set to `63315`

### browser.api.host [​](#browser-api-host)

*   **CLI:** `--browser.api.host [host]`
*   **Config:** [browser.api.host](/guide/browser/config#browser-api-host)

Specify which IP addresses the server should listen on. Set this to `0.0.0.0` or `true` to listen on all addresses, including LAN and public addresses

### browser.api.strictPort [​](#browser-api-strictport)

*   **CLI:** `--browser.api.strictPort`
*   **Config:** [browser.api.strictPort](/guide/browser/config#browser-api-strictport)

Set to true to exit if port is already in use, instead of automatically trying the next available port

### browser.provider [​](#browser-provider)

*   **CLI:** `--browser.provider <name>`
*   **Config:** [browser.provider](/guide/browser/config#browser-provider)

Provider used to run browser tests. Some browsers are only available for specific providers. Can be "webdriverio", "playwright", "preview", or the path to a custom provider. Visit [`browser.provider`](https://vitest.dev/guide/browser/config#browser-provider) for more information (default: `"preview"`)

### browser.providerOptions [​](#browser-provideroptions)

*   **CLI:** `--browser.providerOptions <options>`
*   **Config:** [browser.providerOptions](/guide/browser/config#browser-provideroptions)

Options that are passed down to a browser provider. Visit [`browser.providerOptions`](https://vitest.dev/config/#browser-provideroptions) for more information

### browser.isolate [​](#browser-isolate)

*   **CLI:** `--browser.isolate`
*   **Config:** [browser.isolate](/guide/browser/config#browser-isolate)

Run every browser test file in isolation. To disable isolation, use `--browser.isolate=false` (default: `true`)

### browser.ui [​](#browser-ui)

*   **CLI:** `--browser.ui`
*   **Config:** [browser.ui](/guide/browser/config#browser-ui)

Show Vitest UI when running tests (default: `!process.env.CI`)

### browser.fileParallelism [​](#browser-fileparallelism)

*   **CLI:** `--browser.fileParallelism`
*   **Config:** [browser.fileParallelism](/guide/browser/config#browser-fileparallelism)

Should browser test files run in parallel. Use `--browser.fileParallelism=false` to disable (default: `true`)

### browser.connectTimeout [​](#browser-connecttimeout)

*   **CLI:** `--browser.connectTimeout <timeout>`
*   **Config:** [browser.connectTimeout](/guide/browser/config#browser-connecttimeout)

If connection to the browser takes longer, the test suite will fail (default: `60_000`)

### pool [​](#pool)

*   **CLI:** `--pool <pool>`
*   **Config:** [pool](/config/#pool)

Specify pool, if not running in the browser (default: `forks`)

### poolOptions.threads.isolate [​](#pooloptions-threads-isolate)

*   **CLI:** `--poolOptions.threads.isolate`
*   **Config:** [poolOptions.threads.isolate](/config/#pooloptions-threads-isolate)

Isolate tests in threads pool (default: `true`)

### poolOptions.threads.singleThread [​](#pooloptions-threads-singlethread)

*   **CLI:** `--poolOptions.threads.singleThread`
*   **Config:** [poolOptions.threads.singleThread](/config/#pooloptions-threads-singlethread)

Run tests inside a single thread (default: `false`)

### poolOptions.threads.maxThreads [​](#pooloptions-threads-maxthreads)

*   **CLI:** `--poolOptions.threads.maxThreads <workers>`
*   **Config:** [poolOptions.threads.maxThreads](/config/#pooloptions-threads-maxthreads)

Maximum number or percentage of threads to run tests in

### poolOptions.threads.minThreads [​](#pooloptions-threads-minthreads)

*   **CLI:** `--poolOptions.threads.minThreads <workers>`
*   **Config:** [poolOptions.threads.minThreads](/config/#pooloptions-threads-minthreads)

Minimum number or percentage of threads to run tests in

### poolOptions.threads.useAtomics [​](#pooloptions-threads-useatomics)

*   **CLI:** `--poolOptions.threads.useAtomics`
*   **Config:** [poolOptions.threads.useAtomics](/config/#pooloptions-threads-useatomics)

Use Atomics to synchronize threads. This can improve performance in some cases, but might cause segfault in older Node versions (default: `false`)

### poolOptions.vmThreads.isolate [​](#pooloptions-vmthreads-isolate)

*   **CLI:** `--poolOptions.vmThreads.isolate`
*   **Config:** [poolOptions.vmThreads.isolate](/config/#pooloptions-vmthreads-isolate)

Isolate tests in threads pool (default: `true`)

### poolOptions.vmThreads.singleThread [​](#pooloptions-vmthreads-singlethread)

*   **CLI:** `--poolOptions.vmThreads.singleThread`
*   **Config:** [poolOptions.vmThreads.singleThread](/config/#pooloptions-vmthreads-singlethread)

Run tests inside a single thread (default: `false`)

### poolOptions.vmThreads.maxThreads [​](#pooloptions-vmthreads-maxthreads)

*   **CLI:** `--poolOptions.vmThreads.maxThreads <workers>`
*   **Config:** [poolOptions.vmThreads.maxThreads](/config/#pooloptions-vmthreads-maxthreads)

Maximum number or percentage of threads to run tests in

### poolOptions.vmThreads.minThreads [​](#pooloptions-vmthreads-minthreads)

*   **CLI:** `--poolOptions.vmThreads.minThreads <workers>`
*   **Config:** [poolOptions.vmThreads.minThreads](/config/#pooloptions-vmthreads-minthreads)

Minimum number or percentage of threads to run tests in

### poolOptions.vmThreads.useAtomics [​](#pooloptions-vmthreads-useatomics)

*   **CLI:** `--poolOptions.vmThreads.useAtomics`
*   **Config:** [poolOptions.vmThreads.useAtomics](/config/#pooloptions-vmthreads-useatomics)

Use Atomics to synchronize threads. This can improve performance in some cases, but might cause segfault in older Node versions (default: `false`)

### poolOptions.vmThreads.memoryLimit [​](#pooloptions-vmthreads-memorylimit)

*   **CLI:** `--poolOptions.vmThreads.memoryLimit <limit>`
*   **Config:** [poolOptions.vmThreads.memoryLimit](/config/#pooloptions-vmthreads-memorylimit)

Memory limit for VM threads pool. If you see memory leaks, try to tinker this value.

### poolOptions.forks.isolate [​](#pooloptions-forks-isolate)

*   **CLI:** `--poolOptions.forks.isolate`
*   **Config:** [poolOptions.forks.isolate](/config/#pooloptions-forks-isolate)

Isolate tests in forks pool (default: `true`)

### poolOptions.forks.singleFork [​](#pooloptions-forks-singlefork)

*   **CLI:** `--poolOptions.forks.singleFork`
*   **Config:** [poolOptions.forks.singleFork](/config/#pooloptions-forks-singlefork)

Run tests inside a single child\_process (default: `false`)

### poolOptions.forks.maxForks [​](#pooloptions-forks-maxforks)

*   **CLI:** `--poolOptions.forks.maxForks <workers>`
*   **Config:** [poolOptions.forks.maxForks](/config/#pooloptions-forks-maxforks)

Maximum number or percentage of processes to run tests in

### poolOptions.forks.minForks [​](#pooloptions-forks-minforks)

*   **CLI:** `--poolOptions.forks.minForks <workers>`
*   **Config:** [poolOptions.forks.minForks](/config/#pooloptions-forks-minforks)

Minimum number or percentage of processes to run tests in

### poolOptions.vmForks.isolate [​](#pooloptions-vmforks-isolate)

*   **CLI:** `--poolOptions.vmForks.isolate`
*   **Config:** [poolOptions.vmForks.isolate](/config/#pooloptions-vmforks-isolate)

Isolate tests in forks pool (default: `true`)

### poolOptions.vmForks.singleFork [​](#pooloptions-vmforks-singlefork)

*   **CLI:** `--poolOptions.vmForks.singleFork`
*   **Config:** [poolOptions.vmForks.singleFork](/config/#pooloptions-vmforks-singlefork)

Run tests inside a single child\_process (default: `false`)

### poolOptions.vmForks.maxForks [​](#pooloptions-vmforks-maxforks)

*   **CLI:** `--poolOptions.vmForks.maxForks <workers>`
*   **Config:** [poolOptions.vmForks.maxForks](/config/#pooloptions-vmforks-maxforks)

Maximum number or percentage of processes to run tests in

### poolOptions.vmForks.minForks [​](#pooloptions-vmforks-minforks)

*   **CLI:** `--poolOptions.vmForks.minForks <workers>`
*   **Config:** [poolOptions.vmForks.minForks](/config/#pooloptions-vmforks-minforks)

Minimum number or percentage of processes to run tests in

### poolOptions.vmForks.memoryLimit [​](#pooloptions-vmforks-memorylimit)

*   **CLI:** `--poolOptions.vmForks.memoryLimit <limit>`
*   **Config:** [poolOptions.vmForks.memoryLimit](/config/#pooloptions-vmforks-memorylimit)

Memory limit for VM forks pool. If you see memory leaks, try to tinker this value.

### fileParallelism [​](#fileparallelism)

*   **CLI:** `--fileParallelism`
*   **Config:** [fileParallelism](/config/#fileparallelism)

Should all test files run in parallel. Use `--no-file-parallelism` to disable (default: `true`)

### maxWorkers [​](#maxworkers)

*   **CLI:** `--maxWorkers <workers>`
*   **Config:** [maxWorkers](/config/#maxworkers)

Maximum number or percentage of workers to run tests in

### minWorkers [​](#minworkers)

*   **CLI:** `--minWorkers <workers>`
*   **Config:** [minWorkers](/config/#minworkers)

Minimum number or percentage of workers to run tests in

### environment [​](#environment)

*   **CLI:** `--environment <name>`
*   **Config:** [environment](/config/#environment)

Specify runner environment, if not running in the browser (default: `node`)

### passWithNoTests [​](#passwithnotests)

*   **CLI:** `--passWithNoTests`
*   **Config:** [passWithNoTests](/config/#passwithnotests)

Pass when no tests are found

### logHeapUsage [​](#logheapusage)

*   **CLI:** `--logHeapUsage`
*   **Config:** [logHeapUsage](/config/#logheapusage)

Show the size of heap for each test when running in node

### allowOnly [​](#allowonly)

*   **CLI:** `--allowOnly`
*   **Config:** [allowOnly](/config/#allowonly)

Allow tests and suites that are marked as only (default: `!process.env.CI`)

### dangerouslyIgnoreUnhandledErrors [​](#dangerouslyignoreunhandlederrors)

*   **CLI:** `--dangerouslyIgnoreUnhandledErrors`
*   **Config:** [dangerouslyIgnoreUnhandledErrors](/config/#dangerouslyignoreunhandlederrors)

Ignore any unhandled errors that occur

### sequence.shuffle.files [​](#sequence-shuffle-files)

*   **CLI:** `--sequence.shuffle.files`
*   **Config:** [sequence.shuffle.files](/config/#sequence-shuffle-files)

Run files in a random order. Long running tests will not start earlier if you enable this option. (default: `false`)

### sequence.shuffle.tests [​](#sequence-shuffle-tests)

*   **CLI:** `--sequence.shuffle.tests`
*   **Config:** [sequence.shuffle.tests](/config/#sequence-shuffle-tests)

Run tests in a random order (default: `false`)

### sequence.concurrent [​](#sequence-concurrent)

*   **CLI:** `--sequence.concurrent`
*   **Config:** [sequence.concurrent](/config/#sequence-concurrent)

Make tests run in parallel (default: `false`)

### sequence.seed [​](#sequence-seed)

*   **CLI:** `--sequence.seed <seed>`
*   **Config:** [sequence.seed](/config/#sequence-seed)

Set the randomization seed. This option will have no effect if `--sequence.shuffle` is falsy. Visit ["Random Seed" page](https://en.wikipedia.org/wiki/Random_seed) for more information

### sequence.hooks [​](#sequence-hooks)

*   **CLI:** `--sequence.hooks <order>`
*   **Config:** [sequence.hooks](/config/#sequence-hooks)

Changes the order in which hooks are executed. Accepted values are: "stack", "list" and "parallel". Visit [`sequence.hooks`](https://vitest.dev/config/#sequence-hooks) for more information (default: `"parallel"`)

### sequence.setupFiles [​](#sequence-setupfiles)

*   **CLI:** `--sequence.setupFiles <order>`
*   **Config:** [sequence.setupFiles](/config/#sequence-setupfiles)

Changes the order in which setup files are executed. Accepted values are: "list" and "parallel". If set to "list", will run setup files in the order they are defined. If set to "parallel", will run setup files in parallel (default: `"parallel"`)

### inspect [​](#inspect)

*   **CLI:** `--inspect [[host:]port]`
*   **Config:** [inspect](/config/#inspect)

Enable Node.js inspector (default: `127.0.0.1:9229`)

### inspectBrk [​](#inspectbrk)

*   **CLI:** `--inspectBrk [[host:]port]`
*   **Config:** [inspectBrk](/config/#inspectbrk)

Enable Node.js inspector and break before the test starts

### testTimeout [​](#testtimeout)

*   **CLI:** `--testTimeout <timeout>`
*   **Config:** [testTimeout](/config/#testtimeout)

Default timeout of a test in milliseconds (default: `5000`). Use `0` to disable timeout completely.

### hookTimeout [​](#hooktimeout)

*   **CLI:** `--hookTimeout <timeout>`
*   **Config:** [hookTimeout](/config/#hooktimeout)

Default hook timeout in milliseconds (default: `10000`). Use `0` to disable timeout completely.

### bail [​](#bail)

*   **CLI:** `--bail <number>`
*   **Config:** [bail](/config/#bail)

Stop test execution when given number of tests have failed (default: `0`)

### retry [​](#retry)

*   **CLI:** `--retry <times>`
*   **Config:** [retry](/config/#retry)

Retry the test specific number of times if it fails (default: `0`)

### diff.aAnnotation [​](#diff-aannotation)

*   **CLI:** `--diff.aAnnotation <annotation>`
*   **Config:** [diff.aAnnotation](/config/#diff-aannotation)

Annotation for expected lines (default: `Expected`)

### diff.aIndicator [​](#diff-aindicator)

*   **CLI:** `--diff.aIndicator <indicator>`
*   **Config:** [diff.aIndicator](/config/#diff-aindicator)

Indicator for expected lines (default: `-`)

### diff.bAnnotation [​](#diff-bannotation)

*   **CLI:** `--diff.bAnnotation <annotation>`
*   **Config:** [diff.bAnnotation](/config/#diff-bannotation)

Annotation for received lines (default: `Received`)

### diff.bIndicator [​](#diff-bindicator)

*   **CLI:** `--diff.bIndicator <indicator>`
*   **Config:** [diff.bIndicator](/config/#diff-bindicator)

Indicator for received lines (default: `+`)

### diff.commonIndicator [​](#diff-commonindicator)

*   **CLI:** `--diff.commonIndicator <indicator>`
*   **Config:** [diff.commonIndicator](/config/#diff-commonindicator)

Indicator for common lines (default: )

### diff.contextLines [​](#diff-contextlines)

*   **CLI:** `--diff.contextLines <lines>`
*   **Config:** [diff.contextLines](/config/#diff-contextlines)

Number of lines of context to show around each change (default: `5`)

### diff.emptyFirstOrLastLinePlaceholder [​](#diff-emptyfirstorlastlineplaceholder)

*   **CLI:** `--diff.emptyFirstOrLastLinePlaceholder <placeholder>`
*   **Config:** [diff.emptyFirstOrLastLinePlaceholder](/config/#diff-emptyfirstorlastlineplaceholder)

Placeholder for an empty first or last line (default: `""`)

### diff.expand [​](#diff-expand)

*   **CLI:** `--diff.expand`
*   **Config:** [diff.expand](/config/#diff-expand)

Expand all common lines (default: `true`)

### diff.includeChangeCounts [​](#diff-includechangecounts)

*   **CLI:** `--diff.includeChangeCounts`
*   **Config:** [diff.includeChangeCounts](/config/#diff-includechangecounts)

Include comparison counts in diff output (default: `false`)

### diff.omitAnnotationLines [​](#diff-omitannotationlines)

*   **CLI:** `--diff.omitAnnotationLines`
*   **Config:** [diff.omitAnnotationLines](/config/#diff-omitannotationlines)

Omit annotation lines from the output (default: `false`)

### diff.printBasicPrototype [​](#diff-printbasicprototype)

*   **CLI:** `--diff.printBasicPrototype`
*   **Config:** [diff.printBasicPrototype](/config/#diff-printbasicprototype)

Print basic prototype Object and Array (default: `true`)

### diff.maxDepth [​](#diff-maxdepth)

*   **CLI:** `--diff.maxDepth <maxDepth>`
*   **Config:** [diff.maxDepth](/config/#diff-maxdepth)

Limit the depth to recurse when printing nested objects (default: `20`)

### diff.truncateThreshold [​](#diff-truncatethreshold)

*   **CLI:** `--diff.truncateThreshold <threshold>`
*   **Config:** [diff.truncateThreshold](/config/#diff-truncatethreshold)

Number of lines to show before and after each change (default: `0`)

### diff.truncateAnnotation [​](#diff-truncateannotation)

*   **CLI:** `--diff.truncateAnnotation <annotation>`
*   **Config:** [diff.truncateAnnotation](/config/#diff-truncateannotation)

Annotation for truncated lines (default: `... Diff result is truncated`)

### exclude [​](#exclude)

*   **CLI:** `--exclude <glob>`
*   **Config:** [exclude](/config/#exclude)

Additional file globs to be excluded from test

### expandSnapshotDiff [​](#expandsnapshotdiff)

*   **CLI:** `--expandSnapshotDiff`
*   **Config:** [expandSnapshotDiff](/config/#expandsnapshotdiff)

Show full diff when snapshot fails

### disableConsoleIntercept [​](#disableconsoleintercept)

*   **CLI:** `--disableConsoleIntercept`
*   **Config:** [disableConsoleIntercept](/config/#disableconsoleintercept)

Disable automatic interception of console logging (default: `false`)

### typecheck.enabled [​](#typecheck-enabled)

*   **CLI:** `--typecheck.enabled`
*   **Config:** [typecheck.enabled](/config/#typecheck-enabled)

Enable typechecking alongside tests (default: `false`)

### typecheck.only [​](#typecheck-only)

*   **CLI:** `--typecheck.only`
*   **Config:** [typecheck.only](/config/#typecheck-only)

Run only typecheck tests. This automatically enables typecheck (default: `false`)

### typecheck.checker [​](#typecheck-checker)

*   **CLI:** `--typecheck.checker <name>`
*   **Config:** [typecheck.checker](/config/#typecheck-checker)

Specify the typechecker to use. Available values are: "tsc" and "vue-tsc" and a path to an executable (default: `"tsc"`)

### typecheck.allowJs [​](#typecheck-allowjs)

*   **CLI:** `--typecheck.allowJs`
*   **Config:** [typecheck.allowJs](/config/#typecheck-allowjs)

Allow JavaScript files to be typechecked. By default takes the value from tsconfig.json

### typecheck.ignoreSourceErrors [​](#typecheck-ignoresourceerrors)

*   **CLI:** `--typecheck.ignoreSourceErrors`
*   **Config:** [typecheck.ignoreSourceErrors](/config/#typecheck-ignoresourceerrors)

Ignore type errors from source files

### typecheck.tsconfig [​](#typecheck-tsconfig)

*   **CLI:** `--typecheck.tsconfig <path>`
*   **Config:** [typecheck.tsconfig](/config/#typecheck-tsconfig)

Path to a custom tsconfig file

### project [​](#project)

*   **CLI:** `--project <name>`
*   **Config:** [project](/config/#project)

The name of the project to run if you are using Vitest workspace feature. This can be repeated for multiple projects: `--project=1 --project=2`. You can also filter projects using wildcards like `--project=packages*`, and exclude projects with `--project=!pattern`.

### slowTestThreshold [​](#slowtestthreshold)

*   **CLI:** `--slowTestThreshold <threshold>`
*   **Config:** [slowTestThreshold](/config/#slowtestthreshold)

Threshold in milliseconds for a test or suite to be considered slow (default: `300`)

### teardownTimeout [​](#teardowntimeout)

*   **CLI:** `--teardownTimeout <timeout>`
*   **Config:** [teardownTimeout](/config/#teardowntimeout)

Default timeout of a teardown function in milliseconds (default: `10000`)

### maxConcurrency [​](#maxconcurrency)

*   **CLI:** `--maxConcurrency <number>`
*   **Config:** [maxConcurrency](/config/#maxconcurrency)

Maximum number of concurrent tests in a suite (default: `5`)

### expect.requireAssertions [​](#expect-requireassertions)

*   **CLI:** `--expect.requireAssertions`
*   **Config:** [expect.requireAssertions](/config/#expect-requireassertions)

Require that all tests have at least one assertion

### expect.poll.interval [​](#expect-poll-interval)

*   **CLI:** `--expect.poll.interval <interval>`
*   **Config:** [expect.poll.interval](/config/#expect-poll-interval)

Poll interval in milliseconds for `expect.poll()` assertions (default: `50`)

### expect.poll.timeout [​](#expect-poll-timeout)

*   **CLI:** `--expect.poll.timeout <timeout>`
*   **Config:** [expect.poll.timeout](/config/#expect-poll-timeout)

Poll timeout in milliseconds for `expect.poll()` assertions (default: `1000`)

### printConsoleTrace [​](#printconsoletrace)

*   **CLI:** `--printConsoleTrace`
*   **Config:** [printConsoleTrace](/config/#printconsoletrace)

Always print console stack traces

### includeTaskLocation [​](#includetasklocation)

*   **CLI:** `--includeTaskLocation`
*   **Config:** [includeTaskLocation](/config/#includetasklocation)

Collect test and suite locations in the `location` property

### run [​](#run)

*   **CLI:** `--run`

Disable watch mode

### color [​](#color)

*   **CLI:** `--no-color`

Removes colors from the console output

### clearScreen [​](#clearscreen)

*   **CLI:** `--clearScreen`

Clear terminal screen when re-running tests during watch mode (default: `true`)

### configLoader [​](#configloader)

*   **CLI:** `--configLoader <loader>`

Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly. This is only available in vite version 6.1.0 and above. (default: `bundle`)

### standalone [​](#standalone)

*   **CLI:** `--standalone`

Start Vitest without running tests. File filters will be ignored, tests will be running only on change (default: `false`)

### changed [​](#changed)

*   **Type**: `boolean | string`
*   **Default**: false

Run tests only against changed files. If no value is provided, it will run tests against uncommitted changes (including staged and unstaged).

To run tests against changes made in the last commit, you can use `--changed HEAD~1`. You can also pass commit hash (e.g. `--changed 09a9920`) or branch name (e.g. `--changed origin/develop`).

When used with code coverage the report will contain only the files that were related to the changes.

If paired with the [`forceRerunTriggers`](/config/#forcereruntriggers) config option it will run the whole test suite if at least one of the files listed in the `forceRerunTriggers` list changes. By default, changes to the Vitest config file and `package.json` will always rerun the whole suite.

### shard [​](#shard)

*   **Type**: `string`
*   **Default**: disabled

Test suite shard to execute in a format of `<index>`/`<count>`, where

*   `count` is a positive integer, count of divided parts
*   `index` is a positive integer, index of divided part

This command will divide all tests into `count` equal parts, and will run only those that happen to be in an `index` part. For example, to split your tests suite into three parts, use this:

sh

    vitest run --shard=1/3
    vitest run --shard=2/3
    vitest run --shard=3/3

WARNING

You cannot use this option with `--watch` enabled (enabled in dev by default).

TIP

If `--reporter=blob` is used without an output file, the default path will include the current shard config to avoid collisions with other Vitest processes.

### merge-reports [​](#merge-reports)

*   **Type:** `boolean | string`

Merges every blob report located in the specified folder (`.vitest-reports` by default). You can use any reporters with this command (except [`blob`](/guide/reporters#blob-reporter)):

sh

    vitest --merge-reports --reporter=junit

Test Filtering [​](#test-filtering)
===================================

Filtering, timeouts, concurrent for suite and tests

CLI [​](#cli)
-------------

You can use CLI to filter test files by name:

bash

    $ vitest basic

Will only execute test files that contain `basic`, e.g.

    basic.test.ts
    basic-foo.test.ts
    basic/foo.test.ts

You can also use the `-t, --testNamePattern <pattern>` option to filter tests by full name. This can be helpful when you want to filter by the name defined within a file rather than the filename itself.

Since Vitest 3, you can also specify the test by filename and line number:

bash

    $ vitest basic/foo.test.ts:10

WARNING

Note that Vitest requires the full filename for this feature to work. It can be relative to the current working directory or an absolute file path.

bash

    $ vitest basic/foo.js:10 # ✅
    $ vitest ./basic/foo.js:10 # ✅
    $ vitest /users/project/basic/foo.js:10 # ✅
    $ vitest foo:10 # ❌
    $ vitest ./basic/foo:10 # ❌

At the moment Vitest also doesn't support ranges:

bash

    $ vitest basic/foo.test.ts:10, basic/foo.test.ts:25 # ✅
    $ vitest basic/foo.test.ts:10-25 # ❌

Specifying a Timeout [​](#specifying-a-timeout)
-----------------------------------------------

You can optionally pass a timeout in milliseconds as a third argument to tests. The default is [5 seconds](/config/#testtimeout).

ts

    import { test } from 'vitest'
    
    test('name', async () => { /* ... */ }, 1000)

Hooks also can receive a timeout, with the same 5 seconds default.

ts

    import { beforeAll } from 'vitest'
    
    beforeAll(async () => { /* ... */ }, 1000)

Skipping Suites and Tests [​](#skipping-suites-and-tests)
---------------------------------------------------------

Use `.skip` to avoid running certain suites or tests

ts

    import { assert, describe, it } from 'vitest'
    
    describe.skip('skipped suite', () => {
      it('test', () => {
        // Suite skipped, no error
        assert.equal(Math.sqrt(4), 3)
      })
    })
    
    describe('suite', () => {
      it.skip('skipped test', () => {
        // Test skipped, no error
        assert.equal(Math.sqrt(4), 3)
      })
    })

Selecting Suites and Tests to Run [​](#selecting-suites-and-tests-to-run)
-------------------------------------------------------------------------

Use `.only` to only run certain suites or tests

ts

    import { assert, describe, it } from 'vitest'
    
    // Only this suite (and others marked with only) are run
    describe.only('suite', () => {
      it('test', () => {
        assert.equal(Math.sqrt(4), 3)
      })
    })
    
    describe('another suite', () => {
      it('skipped test', () => {
        // Test skipped, as tests are running in Only mode
        assert.equal(Math.sqrt(4), 3)
      })
    
      it.only('test', () => {
        // Only this test (and others marked with only) are run
        assert.equal(Math.sqrt(4), 2)
      })
    })

Unimplemented Suites and Tests [​](#unimplemented-suites-and-tests)
-------------------------------------------------------------------

Use `.todo` to stub suites and tests that should be implemented

ts

    import { describe, it } from 'vitest'
    
    // An entry will be shown in the report for this suite
    describe.todo('unimplemented suite')
    
    // An entry will be shown in the report for this test
    describe('suite', () => {
      it.todo('unimplemented test')
    })

Test Projects [​](#test-projects)
=================================

Sample Project

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/projects) - [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/projects?initialPath=__vitest__/)

WARNING

This feature is also known as a `workspace`. The `workspace` is deprecated since 3.2 and replaced with the `projects` configuration. They are functionally the same.

Vitest provides a way to define multiple project configurations within a single Vitest process. This feature is particularly useful for monorepo setups but can also be used to run tests with different configurations, such as `resolve.alias`, `plugins`, or `test.browser` and more.

Defining Projects [​](#defining-projects)
-----------------------------------------

You can define projects in your root [config](/config/):

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: ['packages/*'],
      },
    })

Project configurations are inlined configs, files, or glob patterns referencing your projects. For example, if you have a folder named `packages` that contains your projects, you can define an array in your root Vitest config:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: ['packages/*'],
      },
    })

Vitest will treat every folder in `packages` as a separate project even if it doesn't have a config file inside. If this glob pattern matches _any file_, it will be considered a Vitest config even if it doesn't have a `vitest` in its name or has an obscure file extension.

WARNING

Vitest does not treat the root `vitest.config` file as a project unless it is explicitly specified in the configuration. Consequently, the root configuration will only influence global options such as `reporters` and `coverage`. Note that Vitest will always run certain plugin hooks, like `apply`, `config`, `configResolved` or `configureServer`, specified in the root config file. Vitest also uses the same plugins to execute global setups and custom coverage provider.

You can also reference projects with their config files:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: ['packages/*/vitest.config.{e2e,unit}.ts'],
      },
    })

This pattern will only include projects with a `vitest.config` file that contains `e2e` or `unit` before the extension.

You can also define projects using inline configuration. The configuration supports both syntaxes simultaneously.

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: [
          // matches every folder and file inside the `packages` folder
          'packages/*',
          {
            // add "extends: true" to inherit the options from the root config
            extends: true,
            test: {
              include: ['tests/**/*.{browser}.test.{ts,js}'],
              // it is recommended to define a name when using inline configs
              name: 'happy-dom',
              environment: 'happy-dom',
            }
          },
          {
            test: {
              include: ['tests/**/*.{node}.test.{ts,js}'],
              // color of the name label can be changed
              name: { label: 'node', color: 'green' },
              environment: 'node',
            }
          }
        ]
      }
    })

WARNING

All projects must have unique names; otherwise, Vitest will throw an error. If a name is not provided in the inline configuration, Vitest will assign a number. For project configurations defined with glob syntax, Vitest will default to using the "name" property in the nearest `package.json` file or, if none exists, the folder name.

Projects do not support all configuration properties. For better type safety, use the `defineProject` method instead of `defineConfig` within project configuration files:

packages/a/vitest.config.ts

ts

    import {  } from 'vitest/config'
    
    export default ({
      : {
        : 'jsdom',
        // "reporters" is not supported in a project config,
        // so it will show an error
        reporters: ['json']No overload matches this call.
      The last overload gave the following error.
        Object literal may only specify known properties, and 'reporters' does not exist in type 'ProjectConfig'.  }
    })

Running tests [​](#running-tests)
---------------------------------

To run tests, define a script in your root `package.json`:

package.json

json

    {
      "scripts": {
        "test": "vitest"
      }
    }

Now tests can be run using your package manager:

npmyarnpnpmbun

bash

    npm run test

bash

    yarn test

bash

    pnpm run test

bash

    bun run test

If you need to run tests only inside a single project, use the `--project` CLI option:

npmyarnpnpmbun

bash

    npm run test --project e2e

bash

    yarn test --project e2e

bash

    pnpm run test --project e2e

bash

    bun run test --project e2e

TIP

CLI option `--project` can be used multiple times to filter out several projects:

npmyarnpnpmbun

bash

    npm run test --project e2e --project unit

bash

    yarn test --project e2e --project unit

bash

    pnpm run test --project e2e --project unit

bash

    bun run test --project e2e --project unit

Configuration [​](#configuration)
---------------------------------

None of the configuration options are inherited from the root-level config file. You can create a shared config file and merge it with the project config yourself:

packages/a/vitest.config.ts

ts

    import { defineProject, mergeConfig } from 'vitest/config'
    import configShared from '../vitest.shared.js'
    
    export default mergeConfig(
      configShared,
      defineProject({
        test: {
          environment: 'jsdom',
        }
      })
    )

Additionally, you can use the `extends` option to inherit from your root-level configuration. All options will be merged.

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    import react from '@vitejs/plugin-react'
    
    export default defineConfig({
      plugins: [react()],
      test: {
        pool: 'threads',
        projects: [
          {
            // will inherit options from this config like plugins and pool
            extends: true,
            test: {
              name: 'unit',
              include: ['**/*.unit.test.ts'],
            },
          },
          {
            // won't inherit any options from this config
            // this is the default behaviour
            extends: false,
            test: {
              name: 'integration',
              include: ['**/*.integration.test.ts'],
            },
          },
        ],
      },
    })

Unsupported Options

Some of the configuration options are not allowed in a project config. Most notably:

*   `coverage`: coverage is done for the whole process
*   `reporters`: only root-level reporters can be supported
*   `resolveSnapshotPath`: only root-level resolver is respected
*   all other options that don't affect test runners

All configuration options that are not supported inside a project configuration are marked with a \* sign in the ["Config"](/config/) guide. They have to be defined once in the root config file.

Reporters [​](#reporters)
=========================

Vitest provides several built-in reporters to display test output in different formats, as well as the ability to use custom reporters. You can select different reporters either by using the `--reporter` command line option, or by including a `reporters` property in your [configuration file](/config/#reporters). If no reporter is specified, Vitest will use the `default` reporter as described below.

Using reporters via command line:

bash

    npx vitest --reporter=verbose

Using reporters via [`vitest.config.ts`](/config/):

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        reporters: ['verbose']
      },
    })

Some reporters can be customized by passing additional options to them. Reporter specific options are described in sections below.

ts

    export default defineConfig({
      test: {
        reporters: [
          'default',
          ['junit', { suiteName: 'UI tests' }]
        ],
      },
    })

Reporter Output [​](#reporter-output)
-------------------------------------

By default, Vitest's reporters will print their output to the terminal. When using the `json`, `html` or `junit` reporters, you can instead write your tests' output to a file by including an `outputFile` [configuration option](/config/#outputfile) either in your Vite configuration file or via CLI.

CLIvitest.config.ts

bash

    npx vitest --reporter=json --outputFile=./test-output.json

ts

    export default defineConfig({
      test: {
        reporters: ['json'],
        outputFile: './test-output.json'
      },
    })

Combining Reporters [​](#combining-reporters)
---------------------------------------------

You can use multiple reporters simultaneously to print your test results in different formats. For example:

bash

    npx vitest --reporter=json --reporter=default

ts

    export default defineConfig({
      test: {
        reporters: ['json', 'default'],
        outputFile: './test-output.json'
      },
    })

The above example will both print the test results to the terminal in the default style and write them as JSON to the designated output file.

When using multiple reporters, it's also possible to designate multiple output files, as follows:

ts

    export default defineConfig({
      test: {
        reporters: ['junit', 'json', 'verbose'],
        outputFile: {
          junit: './junit-report.xml',
          json: './json-report.json',
        },
      },
    })

This example will write separate JSON and XML reports as well as printing a verbose report to the terminal.

Built-in Reporters [​](#built-in-reporters)
-------------------------------------------

### Default Reporter [​](#default-reporter)

By default (i.e. if no reporter is specified), Vitest will display summary of running tests and their status at the bottom. Once a suite passes, its status will be reported on top of the summary.

You can disable the summary by configuring the reporter:

vitest.config.ts

ts

    export default defineConfig({
      test: {
        reporters: [
          ['default', { summary: false }]
        ]
      },
    })

Example output for tests in progress:

bash

     ✓ test/example-1.test.ts (5 tests | 1 skipped) 306ms
     ✓ test/example-2.test.ts (5 tests | 1 skipped) 307ms
    
     ❯ test/example-3.test.ts 3/5
     ❯ test/example-4.test.ts 1/5
    
     Test Files 2 passed (4)
          Tests 10 passed | 3 skipped (65)
       Start at 11:01:36
       Duration 2.00s

Final output after tests have finished:

bash

     ✓ test/example-1.test.ts (5 tests | 1 skipped) 306ms
     ✓ test/example-2.test.ts (5 tests | 1 skipped) 307ms
     ✓ test/example-3.test.ts (5 tests | 1 skipped) 307ms
     ✓ test/example-4.test.ts (5 tests | 1 skipped) 307ms
    
     Test Files  4 passed (4)
          Tests  16 passed | 4 skipped (20)
       Start at  12:34:32
       Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)

### Basic Reporter [​](#basic-reporter)

The `basic` reporter is equivalent to `default` reporter without `summary`.

CLIvitest.config.ts

bash

    npx vitest --reporter=basic

ts

    export default defineConfig({
      test: {
        reporters: ['basic']
      },
    })

Example output using basic reporter:

bash

    ✓ __tests__/file1.test.ts (2) 725ms
    ✓ __tests__/file2.test.ts (2) 746ms
    
     Test Files  2 passed (2)
          Tests  4 passed (4)
       Start at  12:34:32
       Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)

### Verbose Reporter [​](#verbose-reporter)

Verbose reporter is same as `default` reporter, but it also displays each individual test after the suite has finished. It also displays currently running tests that are taking longer than [`slowTestThreshold`](/config/#slowtestthreshold). Similar to `default` reporter, you can disable the summary by configuring the reporter.

CLIvitest.config.ts

bash

    npx vitest --reporter=verbose

ts

    export default defineConfig({
      test: {
        reporters: [
          ['verbose', { summary: false }]
        ]
      },
    })

Example output for tests in progress with default `slowTestThreshold: 300`:

bash

     ✓ __tests__/example-1.test.ts (2) 725ms
       ✓ first test file (2) 725ms
         ✓ 2 + 2 should equal 4
         ✓ 4 - 2 should equal 2
    
     ❯ test/example-2.test.ts 3/5
       ↳ should run longer than three seconds 1.57s
     ❯ test/example-3.test.ts 1/5
    
     Test Files 2 passed (4)
          Tests 10 passed | 3 skipped (65)
       Start at 11:01:36
       Duration 2.00s

Example of final terminal output for a passing test suite:

bash

    ✓ __tests__/file1.test.ts (2) 725ms
       ✓ first test file (2) 725ms
         ✓ 2 + 2 should equal 4
         ✓ 4 - 2 should equal 2
    ✓ __tests__/file2.test.ts (2) 746ms
      ✓ second test file (2) 746ms
        ✓ 1 + 1 should equal 2
        ✓ 2 - 1 should equal 1
    
     Test Files  2 passed (2)
          Tests  4 passed (4)
       Start at  12:34:32
       Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)

### Dot Reporter [​](#dot-reporter)

Prints a single dot for each completed test to provide minimal output while still showing all tests that have run. Details are only provided for failed tests, along with the `basic` reporter summary for the suite.

CLIvitest.config.ts

bash

    npx vitest --reporter=dot

ts

    export default defineConfig({
      test: {
        reporters: ['dot']
      },
    })

Example terminal output for a passing test suite:

bash

    ....
    
     Test Files  2 passed (2)
          Tests  4 passed (4)
       Start at  12:34:32
       Duration  1.26s (transform 35ms, setup 1ms, collect 90ms, tests 1.47s, environment 0ms, prepare 267ms)

### JUnit Reporter [​](#junit-reporter)

Outputs a report of the test results in JUnit XML format. Can either be printed to the terminal or written to an XML file using the [`outputFile`](/config/#outputfile) configuration option.

CLIvitest.config.ts

bash

    npx vitest --reporter=junit

ts

    export default defineConfig({
      test: {
        reporters: ['junit']
      },
    })

Example of a JUnit XML report:

xml

    <?xml version="1.0" encoding="UTF-8" ?>
    <testsuites name="vitest tests" tests="2" failures="1" errors="0" time="0.503">
        <testsuite name="__tests__/test-file-1.test.ts" timestamp="2023-10-19T17:41:58.580Z" hostname="My-Computer.local" tests="2" failures="1" errors="0" skipped="0" time="0.013">
            <testcase classname="__tests__/test-file-1.test.ts" name="first test file &gt; 2 + 2 should equal 4" time="0.01">
                <failure message="expected 5 to be 4 // Object.is equality" type="AssertionError">
    AssertionError: expected 5 to be 4 // Object.is equality
     ❯ __tests__/test-file-1.test.ts:20:28
                </failure>
            </testcase>
            <testcase classname="__tests__/test-file-1.test.ts" name="first test file &gt; 4 - 2 should equal 2" time="0">
            </testcase>
        </testsuite>
    </testsuites>

The outputted XML contains nested `testsuites` and `testcase` tags. These can also be customized via reporter options `suiteName` and `classnameTemplate`. `classnameTemplate` can either be a template string or a function.

The supported placeholders for the `classnameTemplate` option are:

*   filename
*   filepath

ts

    export default defineConfig({
      test: {
        reporters: [
          ['junit', { suiteName: 'custom suite name', classnameTemplate: 'filename:{filename} - filepath:{filepath}' }]
        ]
      },
    })

### JSON Reporter [​](#json-reporter)

Generates a report of the test results in a JSON format compatible with Jest's `--json` option. Can either be printed to the terminal or written to a file using the [`outputFile`](/config/#outputfile) configuration option.

CLIvitest.config.ts

bash

    npx vitest --reporter=json

ts

    export default defineConfig({
      test: {
        reporters: ['json']
      },
    })

Example of a JSON report:

json

    {
      "numTotalTestSuites": 4,
      "numPassedTestSuites": 2,
      "numFailedTestSuites": 1,
      "numPendingTestSuites": 1,
      "numTotalTests": 4,
      "numPassedTests": 1,
      "numFailedTests": 1,
      "numPendingTests": 1,
      "numTodoTests": 1,
      "startTime": 1697737019307,
      "success": false,
      "testResults": [
        {
          "assertionResults": [
            {
              "ancestorTitles": [
                "",
                "first test file"
              ],
              "fullName": " first test file 2 + 2 should equal 4",
              "status": "failed",
              "title": "2 + 2 should equal 4",
              "duration": 9,
              "failureMessages": [
                "expected 5 to be 4 // Object.is equality"
              ],
              "location": {
                "line": 20,
                "column": 28
              },
              "meta": {}
            }
          ],
          "startTime": 1697737019787,
          "endTime": 1697737019797,
          "status": "failed",
          "message": "",
          "name": "/root-directory/__tests__/test-file-1.test.ts"
        }
      ],
      "coverageMap": {}
    }

INFO

Since Vitest 3, the JSON reporter includes coverage information in `coverageMap` if coverage is enabled.

### HTML Reporter [​](#html-reporter)

Generates an HTML file to view test results through an interactive [GUI](/guide/ui). After the file has been generated, Vitest will keep a local development server running and provide a link to view the report in a browser.

Output file can be specified using the [`outputFile`](/config/#outputfile) configuration option. If no `outputFile` option is provided, a new HTML file will be created.

CLIvitest.config.ts

bash

    npx vitest --reporter=html

ts

    export default defineConfig({
      test: {
        reporters: ['html']
      },
    })

TIP

This reporter requires installed [`@vitest/ui`](/guide/ui) package.

### TAP Reporter [​](#tap-reporter)

Outputs a report following [Test Anything Protocol](https://testanything.org/) (TAP).

CLIvitest.config.ts

bash

    npx vitest --reporter=tap

ts

    export default defineConfig({
      test: {
        reporters: ['tap']
      },
    })

Example of a TAP report:

bash

    TAP version 13
    1..1
    not ok 1 - __tests__/test-file-1.test.ts # time=14.00ms {
        1..1
        not ok 1 - first test file # time=13.00ms {
            1..2
            not ok 1 - 2 + 2 should equal 4 # time=11.00ms
                ---
                error:
                    name: "AssertionError"
                    message: "expected 5 to be 4 // Object.is equality"
                at: "/root-directory/__tests__/test-file-1.test.ts:20:28"
                actual: "5"
                expected: "4"
                ...
            ok 2 - 4 - 2 should equal 2 # time=1.00ms
        }
    }

### TAP Flat Reporter [​](#tap-flat-reporter)

Outputs a TAP flat report. Like the `tap` reporter, test results are formatted to follow TAP standards, but test suites are formatted as a flat list rather than a nested hierarchy.

CLIvitest.config.ts

bash

    npx vitest --reporter=tap-flat

ts

    export default defineConfig({
      test: {
        reporters: ['tap-flat']
      },
    })

Example of a TAP flat report:

bash

    TAP version 13
    1..2
    not ok 1 - __tests__/test-file-1.test.ts > first test file > 2 + 2 should equal 4 # time=11.00ms
        ---
        error:
            name: "AssertionError"
            message: "expected 5 to be 4 // Object.is equality"
        at: "/root-directory/__tests__/test-file-1.test.ts:20:28"
        actual: "5"
        expected: "4"
        ...
    ok 2 - __tests__/test-file-1.test.ts > first test file > 4 - 2 should equal 2 # time=0.00ms

### Hanging Process Reporter [​](#hanging-process-reporter)

Displays a list of hanging processes, if any are preventing Vitest from exiting safely. The `hanging-process` reporter does not itself display test results, but can be used in conjunction with another reporter to monitor processes while tests run. Using this reporter can be resource-intensive, so should generally be reserved for debugging purposes in situations where Vitest consistently cannot exit the process.

CLIvitest.config.ts

bash

    npx vitest --reporter=hanging-process

ts

    export default defineConfig({
      test: {
        reporters: ['hanging-process']
      },
    })

### Github Actions Reporter [​](#github-actions-reporter)

Output [workflow commands](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message) to provide annotations for test failures. This reporter is automatically enabled with a [`default`](#default-reporter) reporter when `process.env.GITHUB_ACTIONS === 'true'`.

If you configure non-default reporters, you need to explicitly add `github-actions`.

ts

    export default defineConfig({
      test: {
        reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['dot'],
      },
    })

### Blob Reporter [​](#blob-reporter)

Stores test results on the machine so they can be later merged using [`--merge-reports`](/guide/cli#merge-reports) command. By default, stores all results in `.vitest-reports` folder, but can be overridden with `--outputFile` or `--outputFile.blob` flags.

bash

    npx vitest --reporter=blob --outputFile=reports/blob-1.json

We recommend using this reporter if you are running Vitest on different machines with the [`--shard`](/guide/cli#shard) flag. All blob reports can be merged into any report by using `--merge-reports` command at the end of your CI pipeline:

bash

    npx vitest --merge-reports=reports --reporter=json --reporter=default

TIP

Both `--reporter=blob` and `--merge-reports` do not work in watch mode.

Custom Reporters [​](#custom-reporters)
---------------------------------------

You can use third-party custom reporters installed from NPM by specifying their package name in the reporters' option:

CLIvitest.config.ts

bash

    npx vitest --reporter=some-published-vitest-reporter

ts

    export default defineConfig({
      test: {
        reporters: ['some-published-vitest-reporter']
      },
    })

Additionally, you can define your own [custom reporters](/advanced/reporters) and use them by specifying their file path:

bash

    npx vitest --reporter=./path/to/reporter.ts

Custom reporters should implement the [Reporter interface](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/types/reporter.ts).

Coverage [​](#coverage)
=======================

Vitest supports Native code coverage via [`v8`](https://v8.dev/blog/javascript-code-coverage) and instrumented code coverage via [`istanbul`](https://istanbul.js.org/).

Coverage Providers [​](#coverage-providers)
-------------------------------------------

Both `v8` and `istanbul` support are optional. By default, `v8` will be used.

You can select the coverage tool by setting `test.coverage.provider` to `v8` or `istanbul`:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        coverage: {
          provider: 'istanbul' // or 'v8'
        },
      },
    })

When you start the Vitest process, it will prompt you to install the corresponding support package automatically.

Or if you prefer to install them manually:

v8istanbul

bash

    npm i -D @vitest/coverage-v8

bash

    npm i -D @vitest/coverage-istanbul

Coverage Setup [​](#coverage-setup)
-----------------------------------

TIP

It's recommended to always define [`coverage.include`](https://vitest.dev/config/#coverage-include) in your configuration file. This helps Vitest to reduce the amount of files picked by [`coverage.all`](https://vitest.dev/config/#coverage-all).

To test with coverage enabled, you can pass the `--coverage` flag in CLI. By default, reporter `['text', 'html', 'clover', 'json']` will be used.

package.json

json

    {
      "scripts": {
        "test": "vitest",
        "coverage": "vitest run --coverage"
      }
    }

To configure it, set `test.coverage` options in your config file:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        coverage: {
          reporter: ['text', 'json', 'html'],
        },
      },
    })

Custom Coverage Reporter [​](#custom-coverage-reporter)
-------------------------------------------------------

You can use custom coverage reporters by passing either the name of the package or absolute path in `test.coverage.reporter`:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        coverage: {
          reporter: [
            // Specify reporter using name of the NPM package
            ['@vitest/custom-coverage-reporter', { someOption: true }],
    
            // Specify reporter using local path
            '/absolute/path/to/custom-reporter.cjs',
          ],
        },
      },
    })

Custom reporters are loaded by Istanbul and must match its reporter interface. See [built-in reporters' implementation](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib) for reference.

custom-reporter.cjs

js

    const { ReportBase } = require('istanbul-lib-report')
    
    module.exports = class CustomReporter extends ReportBase {
      constructor(opts) {
        super()
    
        // Options passed from configuration are available here
        this.file = opts.file
      }
    
      onStart(root, context) {
        this.contentWriter = context.writer.writeFile(this.file)
        this.contentWriter.println('Start of custom coverage report')
      }
    
      onEnd() {
        this.contentWriter.println('End of custom coverage report')
        this.contentWriter.close()
      }
    }

Custom Coverage Provider [​](#custom-coverage-provider)
-------------------------------------------------------

It's also possible to provide your custom coverage provider by passing `'custom'` in `test.coverage.provider`:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        coverage: {
          provider: 'custom',
          customProviderModule: 'my-custom-coverage-provider'
        },
      },
    })

The custom providers require a `customProviderModule` option which is a module name or path where to load the `CoverageProviderModule` from. It must export an object that implements `CoverageProviderModule` as default export:

my-custom-coverage-provider.ts

ts

    import type {
      CoverageProvider,
      CoverageProviderModule,
      ResolvedCoverageOptions,
      Vitest
    } from 'vitest'
    
    const CustomCoverageProviderModule: CoverageProviderModule = {
      getProvider(): CoverageProvider {
        return new CustomCoverageProvider()
      },
    
      // Implements rest of the CoverageProviderModule ...
    }
    
    class CustomCoverageProvider implements CoverageProvider {
      name = 'custom-coverage-provider'
      options!: ResolvedCoverageOptions
    
      initialize(ctx: Vitest) {
        this.options = ctx.config.coverage
      }
    
      // Implements rest of the CoverageProvider ...
    }
    
    export default CustomCoverageProviderModule

Please refer to the type definition for more details.

Changing the Default Coverage Folder Location [​](#changing-the-default-coverage-folder-location)
-------------------------------------------------------------------------------------------------

When running a coverage report, a `coverage` folder is created in the root directory of your project. If you want to move it to a different directory, use the `test.coverage.reportsDirectory` property in the `vitest.config.js` file.

vitest.config.js

js

    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        coverage: {
          reportsDirectory: './tests/unit/coverage'
        }
      }
    })

Ignoring Code [​](#ignoring-code)
---------------------------------

Both coverage providers have their own ways how to ignore code from coverage reports:

*   [`v8`](https://github.com/istanbuljs/v8-to-istanbul#ignoring-uncovered-lines)
*   [`ìstanbul`](https://github.com/istanbuljs/nyc#parsing-hints-ignoring-lines)
*   `v8` with [`experimentalAstAwareRemapping: true`](https://vitest.dev/config/#coverage-experimentalAstAwareRemapping) see [ast-v8-to-istanbul | Ignoring code](https://github.com/AriPerkkio/ast-v8-to-istanbul?tab=readme-ov-file#ignoring-code)

When using TypeScript the source codes are transpiled using `esbuild`, which strips all comments from the source codes ([esbuild#516](https://github.com/evanw/esbuild/issues/516)). Comments which are considered as [legal comments](https://esbuild.github.io/api/#legal-comments) are preserved.

You can include a `@preserve` keyword in the ignore hint. Beware that these ignore hints may now be included in final production build as well.

diff

    -/* istanbul ignore if */
    +/* istanbul ignore if -- @preserve */
    if (condition) {
    
    -/* v8 ignore if */
    +/* v8 ignore if -- @preserve */
    if (condition) {

Other Options [​](#other-options)
---------------------------------

To see all configurable options for coverage, see the [coverage Config Reference](https://vitest.dev/config/#coverage).

Coverage performance [​](#coverage-performance)
-----------------------------------------------

If code coverage generation is slow on your project, see [Profiling Test Performance | Code coverage](/guide/profiling-test-performance#code-coverage).

Vitest UI [​](#vitest-ui)
-------------------------

You can check your coverage report in [Vitest UI](/guide/ui).

Vitest UI will enable coverage report when it is enabled explicitly and the html coverage reporter is present, otherwise it will not be available:

*   enable `coverage.enabled=true` in your configuration file or run Vitest with `--coverage.enabled=true` flag
*   add `html` to the `coverage.reporter` list: you can also enable `subdir` option to put coverage report in a subdirectory

Snapshot [​](#snapshot)
=======================

[

Learn Snapshot by video from Vue School](https://vueschool.io/lessons/snapshots-in-vitest?friend=vueuse)

Snapshot tests are a very useful tool whenever you want to make sure the output of your functions does not change unexpectedly.

When using snapshot, Vitest will take a snapshot of the given value, then compare it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the result.

Use Snapshots [​](#use-snapshots)
---------------------------------

To snapshot a value, you can use the [`toMatchSnapshot()`](/api/expect#tomatchsnapshot) from `expect()` API:

ts

    import { expect, it } from 'vitest'
    
    it('toUpperCase', () => {
      const result = toUpperCase('foobar')
      expect(result).toMatchSnapshot()
    })

The first time this test is run, Vitest creates a snapshot file that looks like this:

js

    // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html
    
    exports['toUpperCase 1'] = '"FOOBAR"'

The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. On subsequent test runs, Vitest will compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code that should be fixed, or the implementation has changed and the snapshot needs to be updated.

WARNING

When using Snapshots with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.

Inline Snapshots [​](#inline-snapshots)
---------------------------------------

Similarly, you can use the [`toMatchInlineSnapshot()`](/api/expect#tomatchinlinesnapshot) to store the snapshot inline within the test file.

ts

    import { expect, it } from 'vitest'
    
    it('toUpperCase', () => {
      const result = toUpperCase('foobar')
      expect(result).toMatchInlineSnapshot()
    })

Instead of creating a snapshot file, Vitest will modify the test file directly to update the snapshot as a string:

ts

    import { expect, it } from 'vitest'
    
    it('toUpperCase', () => {
      const result = toUpperCase('foobar')
      expect(result).toMatchInlineSnapshot('"FOOBAR"')
    })

This allows you to see the expected output directly without jumping across different files.

WARNING

When using Snapshots with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.

Updating Snapshots [​](#updating-snapshots)
-------------------------------------------

When the received value doesn't match the snapshot, the test fails and shows you the difference between them. When the snapshot change is expected, you may want to update the snapshot from the current state.

In watch mode, you can press the `u` key in the terminal to update the failed snapshot directly.

Or you can use the `--update` or `-u` flag in the CLI to make Vitest update snapshots.

bash

    vitest -u

File Snapshots [​](#file-snapshots)
-----------------------------------

When calling `toMatchSnapshot()`, we store all snapshots in a formatted snap file. That means we need to escape some characters (namely the double-quote `"` and backtick `` ` ``) in the snapshot string. Meanwhile, you might lose the syntax highlighting for the snapshot content (if they are in some language).

In light of this, we introduced [`toMatchFileSnapshot()`](/api/expect#tomatchfilesnapshot) to explicitly match against a file. This allows you to assign any file extension to the snapshot file, and makes them more readable.

ts

    import { expect, it } from 'vitest'
    
    it('render basic', async () => {
      const result = renderHTML(h('div', { class: 'foo' }))
      await expect(result).toMatchFileSnapshot('./test/basic.output.html')
    })

It will compare with the content of `./test/basic.output.html`. And can be written back with the `--update` flag.

Image Snapshots [​](#image-snapshots)
-------------------------------------

It's also possible to snapshot images using [`jest-image-snapshot`](https://github.com/americanexpress/jest-image-snapshot).

bash

    npm i -D jest-image-snapshot

ts

    test('image snapshot', () => {
      expect(readFileSync('./test/stubs/input-image.png'))
        .toMatchImageSnapshot()
    })

Custom Serializer [​](#custom-serializer)
-----------------------------------------

You can add your own logic to alter how your snapshots are serialized. Like Jest, Vitest has default serializers for built-in JavaScript types, HTML elements, ImmutableJS and for React elements.

You can explicitly add custom serializer by using [`expect.addSnapshotSerializer`](/api/expect#expect-addsnapshotserializer) API.

ts

    expect.addSnapshotSerializer({
      serialize(val, config, indentation, depth, refs, printer) {
        // `printer` is a function that serializes a value using existing plugins.
        return `Pretty foo: ${printer(
          val.foo,
          config,
          indentation,
          depth,
          refs,
        )}`
      },
      test(val) {
        return val && Object.prototype.hasOwnProperty.call(val, 'foo')
      },
    })

We also support [snapshotSerializers](/config/#snapshotserializers) option to implicitly add custom serializers.

path/to/custom-serializer.ts

ts

    import { SnapshotSerializer } from 'vitest'
    
    export default {
      serialize(val, config, indentation, depth, refs, printer) {
        // `printer` is a function that serializes a value using existing plugins.
        return `Pretty foo: ${printer(
          val.foo,
          config,
          indentation,
          depth,
          refs,
        )}`
      },
      test(val) {
        return val && Object.prototype.hasOwnProperty.call(val, 'foo')
      },
    } satisfies SnapshotSerializer

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        snapshotSerializers: ['path/to/custom-serializer.ts'],
      },
    })

After adding a test like this:

ts

    test('foo snapshot test', () => {
      const bar = {
        foo: {
          x: 1,
          y: 2,
        },
      }
    
      expect(bar).toMatchSnapshot()
    })

You will get the following snapshot:

    Pretty foo: Object {
      "x": 1,
      "y": 2,
    }

We are using Jest's `pretty-format` for serializing snapshots. You can read more about it here: [pretty-format](https://github.com/facebook/jest/blob/main/packages/pretty-format/README.md#serialize).

Difference from Jest [​](#difference-from-jest)
-----------------------------------------------

Vitest provides an almost compatible Snapshot feature with [Jest's](https://jestjs.io/docs/snapshot-testing) with a few exceptions:

#### 1\. Comment header in the snapshot file is different [​](#_1-comment-header-in-the-snapshot-file-is-different)

diff

    - // Jest Snapshot v1, https://goo.gl/fbAQLP
    + // Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

This does not really affect the functionality but might affect your commit diff when migrating from Jest.

#### 2\. `printBasicPrototype` is default to `false` [​](#_2-printbasicprototype-is-default-to-false)

Both Jest and Vitest's snapshots are powered by [`pretty-format`](https://github.com/facebook/jest/blob/main/packages/pretty-format). In Vitest we set `printBasicPrototype` default to `false` to provide a cleaner snapshot output, while in Jest <29.0.0 it's `true` by default.

ts

    import { expect, test } from 'vitest'
    
    test('snapshot', () => {
      const bar = [
        {
          foo: 'bar',
        },
      ]
    
      // in Jest
      expect(bar).toMatchInlineSnapshot(`
        Array [
          Object {
            "foo": "bar",
          },
        ]
      `)
    
      // in Vitest
      expect(bar).toMatchInlineSnapshot(`
        [
          {
            "foo": "bar",
          },
        ]
      `)
    })

We believe this is a more reasonable default for readability and overall DX. If you still prefer Jest's behavior, you can change your config:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        snapshotFormat: {
          printBasicPrototype: true,
        },
      },
    })

#### 3\. Chevron `>` is used as a separator instead of colon `:` for custom messages [​](#_3-chevron-is-used-as-a-separator-instead-of-colon-for-custom-messages)

Vitest uses chevron `>` as a separator instead of colon `:` for readability, when a custom message is passed during creation of a snapshot file.

For the following example test code:

js

    test('toThrowErrorMatchingSnapshot', () => {
      expect(() => {
        throw new Error('error')
      }).toThrowErrorMatchingSnapshot('hint')
    })

In Jest, the snapshot will be:

console

    exports[`toThrowErrorMatchingSnapshot: hint 1`] = `"error"`;

In Vitest, the equivalent snapshot will be:

console

    exports[`toThrowErrorMatchingSnapshot > hint 1`] = `[Error: error]`;

#### 4\. default `Error` snapshot is different for `toThrowErrorMatchingSnapshot` and `toThrowErrorMatchingInlineSnapshot` [​](#_4-default-error-snapshot-is-different-for-tothrowerrormatchingsnapshot-and-tothrowerrormatchinginlinesnapshot)

js

    import { expect, test } from 'vitest'
    
    test('snapshot', () => {
      // in Jest and Vitest
      expect(new Error('error')).toMatchInlineSnapshot(`[Error: error]`)
    
      // Jest snapshots `Error.message` for `Error` instance
      // Vitest prints the same value as toMatchInlineSnapshot
      expect(() => {
        throw new Error('error')
      }).toThrowErrorMatchingInlineSnapshot(`"error"`) 
      }).toThrowErrorMatchingInlineSnapshot(`[Error: error]`) 
    })

Mocking [​](#mocking)
=====================

When writing tests it's only a matter of time before you need to create a "fake" version of an internal — or external — service. This is commonly referred to as **mocking**. Vitest provides utility functions to help you out through its `vi` helper. You can import it from `vitest` or access it globally if [`global` configuration](/config/#globals) is enabled.

WARNING

Always remember to clear or restore mocks before or after each test run to undo mock state changes between runs! See [`mockReset`](/api/mock#mockreset) docs for more info.

If you are not familiar with `vi.fn`, `vi.mock` or `vi.spyOn` methods, check the [API section](/api/vi) first.

Dates [​](#dates)
-----------------

Sometimes you need to be in control of the date to ensure consistency when testing. Vitest uses [`@sinonjs/fake-timers`](https://github.com/sinonjs/fake-timers) package for manipulating timers, as well as system date. You can find more about the specific API in detail [here](/api/vi#vi-setsystemtime).

### Example [​](#example)

js

    import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
    
    const businessHours = [9, 17]
    
    function purchase() {
      const currentHour = new Date().getHours()
      const [open, close] = businessHours
    
      if (currentHour > open && currentHour < close) {
        return { message: 'Success' }
      }
    
      return { message: 'Error' }
    }
    
    describe('purchasing flow', () => {
      beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers()
      })
    
      afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers()
      })
    
      it('allows purchases within business hours', () => {
        // set hour within business hours
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)
    
        // access Date.now() will result in the date set above
        expect(purchase()).toEqual({ message: 'Success' })
      })
    
      it('disallows purchases outside of business hours', () => {
        // set hour outside business hours
        const date = new Date(2000, 1, 1, 19)
        vi.setSystemTime(date)
    
        // access Date.now() will result in the date set above
        expect(purchase()).toEqual({ message: 'Error' })
      })
    })

Functions [​](#functions)
-------------------------

Mocking functions can be split up into two different categories; _spying & mocking_.

Sometimes all you need is to validate whether or not a specific function has been called (and possibly which arguments were passed). In these cases a spy would be all we need which you can use directly with `vi.spyOn()` ([read more here](/api/vi#vi-spyon)).

However spies can only help you **spy** on functions, they are not able to alter the implementation of those functions. In the case where we do need to create a fake (or mocked) version of a function we can use `vi.fn()` ([read more here](/api/vi#vi-fn)).

We use [Tinyspy](https://github.com/tinylibs/tinyspy) as a base for mocking functions, but we have our own wrapper to make it `jest` compatible. Both `vi.fn()` and `vi.spyOn()` share the same methods, however only the return result of `vi.fn()` is callable.

### Example [​](#example-1)

js

    import { afterEach, describe, expect, it, vi } from 'vitest'
    
    const messages = {
      items: [
        { message: 'Simple test message', from: 'Testman' },
        // ...
      ],
      getLatest, // can also be a `getter or setter if supported`
    }
    
    function getLatest(index = messages.items.length - 1) {
      return messages.items[index]
    }
    
    describe('reading messages', () => {
      afterEach(() => {
        vi.restoreAllMocks()
      })
    
      it('should get the latest message with a spy', () => {
        const spy = vi.spyOn(messages, 'getLatest')
        expect(spy.getMockName()).toEqual('getLatest')
    
        expect(messages.getLatest()).toEqual(
          messages.items[messages.items.length - 1],
        )
    
        expect(spy).toHaveBeenCalledTimes(1)
    
        spy.mockImplementationOnce(() => 'access-restricted')
        expect(messages.getLatest()).toEqual('access-restricted')
    
        expect(spy).toHaveBeenCalledTimes(2)
      })
    
      it('should get with a mock', () => {
        const mock = vi.fn().mockImplementation(getLatest)
    
        expect(mock()).toEqual(messages.items[messages.items.length - 1])
        expect(mock).toHaveBeenCalledTimes(1)
    
        mock.mockImplementationOnce(() => 'access-restricted')
        expect(mock()).toEqual('access-restricted')
    
        expect(mock).toHaveBeenCalledTimes(2)
    
        expect(mock()).toEqual(messages.items[messages.items.length - 1])
        expect(mock).toHaveBeenCalledTimes(3)
      })
    })

### More [​](#more)

*   [Jest's Mock Functions](https://jestjs.io/docs/mock-function-api)

Globals [​](#globals)
---------------------

You can mock global variables that are not present with `jsdom` or `node` by using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. It will put the value of the global variable into a `globalThis` object.

ts

    import { vi } from 'vitest'
    
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }))
    
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
    
    // now you can access it as `IntersectionObserver` or `window.IntersectionObserver`

Modules [​](#modules)
---------------------

Mock modules observe third-party-libraries, that are invoked in some other code, allowing you to test arguments, output or even redeclare its implementation.

See the [`vi.mock()` API section](/api/vi#vi-mock) for a more in-depth detailed API description.

### Automocking Algorithm [​](#automocking-algorithm)

If your code is importing a mocked module, without any associated `__mocks__` file or `factory` for this module, Vitest will mock the module itself by invoking it and mocking every export.

The following principles apply

*   All arrays will be emptied
*   All primitives and collections will stay the same
*   All objects will be deeply cloned
*   All instances of classes and their prototypes will be deeply cloned

### Virtual Modules [​](#virtual-modules)

Vitest supports mocking Vite [virtual modules](https://vitejs.dev/guide/api-plugin.html#virtual-modules-convention). It works differently from how virtual modules are treated in Jest. Instead of passing down `virtual: true` to a `vi.mock` function, you need to tell Vite that module exists otherwise it will fail during parsing. You can do that in several ways:

1.  Provide an alias

vitest.config.js

ts

    import { defineConfig } from 'vitest/config'
    import { resolve } from 'node:path'
    export default defineConfig({
      test: {
        alias: {
          '$app/forms': resolve('./mocks/forms.js'),
        },
      },
    })

2.  Provide a plugin that resolves a virtual module

vitest.config.js

ts

    import { defineConfig } from 'vitest/config'
    export default defineConfig({
      plugins: [
        {
          name: 'virtual-modules',
          resolveId(id) {
            if (id === '$app/forms') {
              return 'virtual:$app/forms'
            }
          },
        },
      ],
    })

The benefit of the second approach is that you can dynamically create different virtual entrypoints. If you redirect several virtual modules into a single file, then all of them will be affected by `vi.mock`, so make sure to use unique identifiers.

### Mocking Pitfalls [​](#mocking-pitfalls)

Beware that it is not possible to mock calls to methods that are called inside other methods of the same file. For example, in this code:

foobar.js

ts

    export function foo() {
      return 'foo'
    }
    
    export function foobar() {
      return `${foo()}bar`
    }

It is not possible to mock the `foo` method from the outside because it is referenced directly. So this code will have no effect on the `foo` call inside `foobar` (but it will affect the `foo` call in other modules):

foobar.test.ts

ts

    import { vi } from 'vitest'
    import * as mod from './foobar.js'
    
    // this will only affect "foo" outside of the original module
    vi.spyOn(mod, 'foo')
    vi.mock('./foobar.js', async (importOriginal) => {
      return {
        ...await importOriginal<typeof import('./foobar.js')>(),
        // this will only affect "foo" outside of the original module
        foo: () => 'mocked'
      }
    })

You can confirm this behaviour by providing the implementation to the `foobar` method directly:

foobar.test.js

ts

    import * as mod from './foobar.js'
    
    vi.spyOn(mod, 'foo')
    
    // exported foo references mocked method
    mod.foobar(mod.foo)

foobar.js

ts

    export function foo() {
      return 'foo'
    }
    
    export function foobar(injectedFoo) {
      return injectedFoo === foo // false
    }

This is the intended behaviour. It is usually a sign of bad code when mocking is involved in such a manner. Consider refactoring your code into multiple files or improving your application architecture by using techniques such as [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection).

### Example [​](#example-2)

js

    import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
    import { Client } from 'pg'
    import { failure, success } from './handlers.js'
    
    // get todos
    export async function getTodos(event, context) {
      const client = new Client({
        // ...clientOptions
      })
    
      await client.connect()
    
      try {
        const result = await client.query('SELECT * FROM todos;')
    
        client.end()
    
        return success({
          message: `${result.rowCount} item(s) returned`,
          data: result.rows,
          status: true,
        })
      }
      catch (e) {
        console.error(e.stack)
    
        client.end()
    
        return failure({ message: e, status: false })
      }
    }
    
    vi.mock('pg', () => {
      const Client = vi.fn()
      Client.prototype.connect = vi.fn()
      Client.prototype.query = vi.fn()
      Client.prototype.end = vi.fn()
    
      return { Client }
    })
    
    vi.mock('./handlers.js', () => {
      return {
        success: vi.fn(),
        failure: vi.fn(),
      }
    })
    
    describe('get a list of todo items', () => {
      let client
    
      beforeEach(() => {
        client = new Client()
      })
    
      afterEach(() => {
        vi.clearAllMocks()
      })
    
      it('should return items successfully', async () => {
        client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 })
    
        await getTodos()
    
        expect(client.connect).toBeCalledTimes(1)
        expect(client.query).toBeCalledWith('SELECT * FROM todos;')
        expect(client.end).toBeCalledTimes(1)
    
        expect(success).toBeCalledWith({
          message: '0 item(s) returned',
          data: [],
          status: true,
        })
      })
    
      it('should throw an error', async () => {
        const mError = new Error('Unable to retrieve rows')
        client.query.mockRejectedValueOnce(mError)
    
        await getTodos()
    
        expect(client.connect).toBeCalledTimes(1)
        expect(client.query).toBeCalledWith('SELECT * FROM todos;')
        expect(client.end).toBeCalledTimes(1)
        expect(failure).toBeCalledWith({ message: mError, status: false })
      })
    })

File System [​](#file-system)
-----------------------------

Mocking the file system ensures that the tests do not depend on the actual file system, making the tests more reliable and predictable. This isolation helps in avoiding side effects from previous tests. It allows for testing error conditions and edge cases that might be difficult or impossible to replicate with an actual file system, such as permission issues, disk full scenarios, or read/write errors.

Vitest doesn't provide any file system mocking API out of the box. You can use `vi.mock` to mock the `fs` module manually, but it's hard to maintain. Instead, we recommend using [`memfs`](https://www.npmjs.com/package/memfs) to do that for you. `memfs` creates an in-memory file system, which simulates file system operations without touching the actual disk. This approach is fast and safe, avoiding any potential side effects on the real file system.

### Example [​](#example-3)

To automatically redirect every `fs` call to `memfs`, you can create `__mocks__/fs.cjs` and `__mocks__/fs/promises.cjs` files at the root of your project:

\_\_mocks\_\_/fs.cjs\_\_mocks\_\_/fs/promises.cjs

ts

    // we can also use `import`, but then
    // every export should be explicitly defined
    
    const { fs } = require('memfs')
    module.exports = fs

ts

    // we can also use `import`, but then
    // every export should be explicitly defined
    
    const { fs } = require('memfs')
    module.exports = fs.promises

read-hello-world.js

ts

    import { readFileSync } from 'node:fs'
    
    export function readHelloWorld(path) {
      return readFileSync(path, 'utf-8')
    }

hello-world.test.js

ts

    import { beforeEach, expect, it, vi } from 'vitest'
    import { fs, vol } from 'memfs'
    import { readHelloWorld } from './read-hello-world.js'
    
    // tell vitest to use fs mock from __mocks__ folder
    // this can be done in a setup file if fs should always be mocked
    vi.mock('node:fs')
    vi.mock('node:fs/promises')
    
    beforeEach(() => {
      // reset the state of in-memory fs
      vol.reset()
    })
    
    it('should return correct text', () => {
      const path = '/hello-world.txt'
      fs.writeFileSync(path, 'hello world')
    
      const text = readHelloWorld(path)
      expect(text).toBe('hello world')
    })
    
    it('can return a value multiple times', () => {
      // you can use vol.fromJSON to define several files
      vol.fromJSON(
        {
          './dir1/hw.txt': 'hello dir1',
          './dir2/hw.txt': 'hello dir2',
        },
        // default cwd
        '/tmp',
      )
    
      expect(readHelloWorld('/tmp/dir1/hw.txt')).toBe('hello dir1')
      expect(readHelloWorld('/tmp/dir2/hw.txt')).toBe('hello dir2')
    })

Requests [​](#requests)
-----------------------

Because Vitest runs in Node, mocking network requests is tricky; web APIs are not available, so we need something that will mimic network behavior for us. We recommend [Mock Service Worker](https://mswjs.io/) to accomplish this. It allows you to mock `http`, `WebSocket` and `GraphQL` network requests, and is framework agnostic.

Mock Service Worker (MSW) works by intercepting the requests your tests make, allowing you to use it without changing any of your application code. In-browser, this uses the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). In Node.js, and for Vitest, it uses the [`@mswjs/interceptors`](https://github.com/mswjs/interceptors) library. To learn more about MSW, read their [introduction](https://mswjs.io/docs/)

### Configuration [​](#configuration)

You can use it like below in your [setup file](/config/#setupfiles)

HTTP SetupGraphQL SetupWebSocket Setup

js

    import { afterAll, afterEach, beforeAll } from 'vitest'
    import { setupServer } from 'msw/node'
    import { http, HttpResponse } from 'msw'
    
    const posts = [
      {
        userId: 1,
        id: 1,
        title: 'first post title',
        body: 'first post body',
      },
      // ...
    ]
    
    export const restHandlers = [
      http.get('https://rest-endpoint.example/path/to/posts', () => {
        return HttpResponse.json(posts)
      }),
    ]
    
    const server = setupServer(...restHandlers)
    
    // Start server before all tests
    beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
    
    // Close server after all tests
    afterAll(() => server.close())
    
    // Reset handlers after each test for test isolation
    afterEach(() => server.resetHandlers())

js

    import { afterAll, afterEach, beforeAll } from 'vitest'
    import { setupServer } from 'msw/node'
    import { graphql, HttpResponse } from 'msw'
    
    const posts = [
      {
        userId: 1,
        id: 1,
        title: 'first post title',
        body: 'first post body',
      },
      // ...
    ]
    
    const graphqlHandlers = [
      graphql.query('ListPosts', () => {
        return HttpResponse.json({
          data: { posts },
        })
      }),
    ]
    
    const server = setupServer(...graphqlHandlers)
    
    // Start server before all tests
    beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
    
    // Close server after all tests
    afterAll(() => server.close())
    
    // Reset handlers after each test for test isolation
    afterEach(() => server.resetHandlers())

js

    import { afterAll, afterEach, beforeAll } from 'vitest'
    import { setupServer } from 'msw/node'
    import { ws } from 'msw'
    
    const chat = ws.link('wss://chat.example.com')
    
    const wsHandlers = [
      chat.addEventListener('connection', ({ client }) => {
        client.addEventListener('message', (event) => {
          console.log('Received message from client:', event.data)
          // Echo the received message back to the client
          client.send(`Server received: ${event.data}`)
        })
      }),
    ]
    
    const server = setupServer(...wsHandlers)
    
    // Start server before all tests
    beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
    
    // Close server after all tests
    afterAll(() => server.close())
    
    // Reset handlers after each test for test isolation
    afterEach(() => server.resetHandlers())

> Configuring the server with `onUnhandledRequest: 'error'` ensures that an error is thrown whenever there is a request that does not have a corresponding request handler.

### More [​](#more-1)

There is much more to MSW. You can access cookies and query parameters, define mock error responses, and much more! To see all you can do with MSW, read [their documentation](https://mswjs.io/docs).

Timers [​](#timers)
-------------------

When we test code that involves timeouts or intervals, instead of having our tests wait it out or timeout, we can speed up our tests by using "fake" timers that mock calls to `setTimeout` and `setInterval`.

See the [`vi.useFakeTimers` API section](/api/vi#vi-usefaketimers) for a more in depth detailed API description.

### Example [​](#example-4)

js

    import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
    
    function executeAfterTwoHours(func) {
      setTimeout(func, 1000 * 60 * 60 * 2) // 2 hours
    }
    
    function executeEveryMinute(func) {
      setInterval(func, 1000 * 60) // 1 minute
    }
    
    const mock = vi.fn(() => console.log('executed'))
    
    describe('delayed execution', () => {
      beforeEach(() => {
        vi.useFakeTimers()
      })
      afterEach(() => {
        vi.restoreAllMocks()
      })
      it('should execute the function', () => {
        executeAfterTwoHours(mock)
        vi.runAllTimers()
        expect(mock).toHaveBeenCalledTimes(1)
      })
      it('should not execute the function', () => {
        executeAfterTwoHours(mock)
        // advancing by 2ms won't trigger the func
        vi.advanceTimersByTime(2)
        expect(mock).not.toHaveBeenCalled()
      })
      it('should execute every minute', () => {
        executeEveryMinute(mock)
        vi.advanceTimersToNextTimer()
        expect(mock).toHaveBeenCalledTimes(1)
        vi.advanceTimersToNextTimer()
        expect(mock).toHaveBeenCalledTimes(2)
      })
    })

Classes [​](#classes)
---------------------

You can mock an entire class with a single `vi.fn` call - since all classes are also functions, this works out of the box. Beware that currently Vitest doesn't respect the `new` keyword so the `new.target` is always `undefined` in the body of a function.

ts

    class Dog {
      name: string
    
      constructor(name: string) {
        this.name = name
      }
    
      static getType(): string {
        return 'animal'
      }
    
      greet = (): string => {
        return `Hi! My name is ${this.name}!`
      }
    
      speak(): string {
        return 'bark!'
      }
    
      isHungry() {}
      feed() {}
    }

We can re-create this class with ES5 functions:

ts

    const Dog = vi.fn(function (name) {
      this.name = name
      // mock instance methods in the constructor, each instance will have its own spy
      this.greet = vi.fn(() => `Hi! My name is ${this.name}!`)
    })
    
    // notice that static methods are mocked directly on the function,
    // not on the instance of the class
    Dog.getType = vi.fn(() => 'mocked animal')
    
    // mock the "speak" and "feed" methods on every instance of a class
    // all `new Dog()` instances will inherit and share these spies
    Dog.prototype.speak = vi.fn(() => 'loud bark!')
    Dog.prototype.feed = vi.fn()

WARNING

If a non-primitive is returned from the constructor function, that value will become the result of the new expression. In this case the `[[Prototype]]` may not be correctly bound:

ts

    const CorrectDogClass = vi.fn(function (name) {
      this.name = name
    })
    
    const IncorrectDogClass = vi.fn(name => ({
      name
    }))
    
    const Marti = new CorrectDogClass('Marti')
    const Newt = new IncorrectDogClass('Newt')
    
    Marti instanceof CorrectDogClass // ✅ true
    Newt instanceof IncorrectDogClass // ❌ false!

WHEN TO USE?

Generally speaking, you would re-create a class like this inside the module factory if the class is re-exported from another module:

ts

    import { Dog } from './dog.js'
    
    vi.mock(import('./dog.js'), () => {
      const Dog = vi.fn()
      Dog.prototype.feed = vi.fn()
      // ... other mocks
      return { Dog }
    })

This method can also be used to pass an instance of a class to a function that accepts the same interface:

src/feed.ts

ts

    function feed(dog: Dog) {
      // ...
    }

tests/dog.test.ts

ts

    import { expect, test, vi } from 'vitest'
    import { feed } from '../src/feed.js'
    
    const Dog = vi.fn()
    Dog.prototype.feed = vi.fn()
    
    test('can feed dogs', () => {
      const dogMax = new Dog('Max')
    
      feed(dogMax)
    
      expect(dogMax.feed).toHaveBeenCalled()
      expect(dogMax.isHungry()).toBe(false)
    })

Now, when we create a new instance of the `Dog` class its `speak` method (alongside `feed` and `greet`) is already mocked:

ts

    const Cooper = new Dog('Cooper')
    Cooper.speak() // loud bark!
    Cooper.greet() // Hi! My name is Cooper!
    
    // you can use built-in assertions to check the validity of the call
    expect(Cooper.speak).toHaveBeenCalled()
    expect(Cooper.greet).toHaveBeenCalled()
    
    const Max = new Dog('Max')
    
    // methods assigned to the prototype are shared between instances
    expect(Max.speak).toHaveBeenCalled()
    expect(Max.greet).not.toHaveBeenCalled()

We can reassign the return value for a specific instance:

ts

    const dog = new Dog('Cooper')
    
    // "vi.mocked" is a type helper, since
    // TypeScript doesn't know that Dog is a mocked class,
    // it wraps any function in a MockInstance<T> type
    // without validating if the function is a mock
    vi.mocked(dog.speak).mockReturnValue('woof woof')
    
    dog.speak() // woof woof

To mock the property, we can use the `vi.spyOn(dog, 'name', 'get')` method. This makes it possible to use spy assertions on the mocked property:

ts

    const dog = new Dog('Cooper')
    
    const nameSpy = vi.spyOn(dog, 'name', 'get').mockReturnValue('Max')
    
    expect(dog.name).toBe('Max')
    expect(nameSpy).toHaveBeenCalledTimes(1)

TIP

You can also spy on getters and setters using the same method.

Cheat Sheet [​](#cheat-sheet)
-----------------------------

INFO

`vi` in the examples below is imported directly from `vitest`. You can also use it globally, if you set `globals` to `true` in your [config](/config/).

I want to…

### Mock exported variables [​](#mock-exported-variables)

example.js

js

    export const getter = 'variable'

example.test.ts

ts

    import * as exports from './example.js'
    
    vi.spyOn(exports, 'getter', 'get').mockReturnValue('mocked')

### Mock an exported function [​](#mock-an-exported-function)

1.  Example with `vi.mock`:

WARNING

Don't forget that a `vi.mock` call is hoisted to top of the file. It will always be executed before all imports.

example.js

ts

    export function method() {}

ts

    import { method } from './example.js'
    
    vi.mock('./example.js', () => ({
      method: vi.fn()
    }))

2.  Example with `vi.spyOn`:

ts

    import * as exports from './example.js'
    
    vi.spyOn(exports, 'method').mockImplementation(() => {})

### Mock an exported class implementation [​](#mock-an-exported-class-implementation)

1.  Example with `vi.mock` and `.prototype`:

example.js

ts

    export class SomeClass {}

ts

    import { SomeClass } from './example.js'
    
    vi.mock(import('./example.js'), () => {
      const SomeClass = vi.fn()
      SomeClass.prototype.someMethod = vi.fn()
      return { SomeClass }
    })
    // SomeClass.mock.instances will have SomeClass

2.  Example with `vi.spyOn`:

ts

    import * as mod from './example.js'
    
    const SomeClass = vi.fn()
    SomeClass.prototype.someMethod = vi.fn()
    
    vi.spyOn(mod, 'SomeClass').mockImplementation(SomeClass)

### Spy on an object returned from a function [​](#spy-on-an-object-returned-from-a-function)

1.  Example using cache:

example.js

ts

    export function useObject() {
      return { method: () => true }
    }

useObject.js

ts

    import { useObject } from './example.js'
    
    const obj = useObject()
    obj.method()

useObject.test.js

ts

    import { useObject } from './example.js'
    
    vi.mock(import('./example.js'), () => {
      let _cache
      const useObject = () => {
        if (!_cache) {
          _cache = {
            method: vi.fn(),
          }
        }
        // now every time that useObject() is called it will
        // return the same object reference
        return _cache
      }
      return { useObject }
    })
    
    const obj = useObject()
    // obj.method was called inside some-path
    expect(obj.method).toHaveBeenCalled()

### Mock part of a module [​](#mock-part-of-a-module)

ts

    import { mocked, original } from './some-path.js'
    
    vi.mock(import('./some-path.js'), async (importOriginal) => {
      const mod = await importOriginal()
      return {
        ...mod,
        mocked: vi.fn()
      }
    })
    original() // has original behaviour
    mocked() // is a spy function

WARNING

Don't forget that this only [mocks _external_ access](#mocking-pitfalls). In this example, if `original` calls `mocked` internally, it will always call the function defined in the module, not in the mock factory.

### Mock the current date [​](#mock-the-current-date)

To mock `Date`'s time, you can use `vi.setSystemTime` helper function. This value will **not** automatically reset between different tests.

Beware that using `vi.useFakeTimers` also changes the `Date`'s time.

ts

    const mockDate = new Date(2022, 0, 1)
    vi.setSystemTime(mockDate)
    const now = new Date()
    expect(now.valueOf()).toBe(mockDate.valueOf())
    // reset mocked time
    vi.useRealTimers()

### Mock a global variable [​](#mock-a-global-variable)

You can set global variable by assigning a value to `globalThis` or using [`vi.stubGlobal`](/api/vi#vi-stubglobal) helper. When using `vi.stubGlobal`, it will **not** automatically reset between different tests, unless you enable [`unstubGlobals`](/config/#unstubglobals) config option or call [`vi.unstubAllGlobals`](/api/vi#vi-unstuballglobals).

ts

    vi.stubGlobal('__VERSION__', '1.0.0')
    expect(__VERSION__).toBe('1.0.0')

### Mock `import.meta.env` [​](#mock-import-meta-env)

1.  To change environmental variable, you can just assign a new value to it.

WARNING

The environmental variable value will **_not_** automatically reset between different tests.

ts

    import { beforeEach, expect, it } from 'vitest'
    
    // you can reset it in beforeEach hook manually
    const originalViteEnv = import.meta.env.VITE_ENV
    
    beforeEach(() => {
      import.meta.env.VITE_ENV = originalViteEnv
    })
    
    it('changes value', () => {
      import.meta.env.VITE_ENV = 'staging'
      expect(import.meta.env.VITE_ENV).toBe('staging')
    })

2.  If you want to automatically reset the value(s), you can use the `vi.stubEnv` helper with the [`unstubEnvs`](/config/#unstubenvs) config option enabled (or call [`vi.unstubAllEnvs`](/api/vi#vi-unstuballenvs) manually in a `beforeEach` hook):

ts

    import { expect, it, vi } from 'vitest'
    
    // before running tests "VITE_ENV" is "test"
    import.meta.env.VITE_ENV === 'test'
    
    it('changes value', () => {
      vi.stubEnv('VITE_ENV', 'staging')
      expect(import.meta.env.VITE_ENV).toBe('staging')
    })
    
    it('the value is restored before running an other test', () => {
      expect(import.meta.env.VITE_ENV).toBe('test')
    })

vitest.config.ts

ts

    export default defineConfig({
      test: {
        unstubEnvs: true,
      },
    })

Parallelism [​](#parallelism)
=============================

File Parallelism [​](#file-parallelism)
---------------------------------------

By default, Vitest runs _test files_ in parallel. Depending on the specified `pool`, Vitest uses a different mechanism to parallelize test files:

*   `forks` (the default) and `vmForks` run tests in different [child processes](https://nodejs.org/api/child_process.html)
*   `threads` and `vmThreads` run tests in different [worker threads](https://nodejs.org/api/worker_threads.html)

Both "child processes" and "worker threads" are refered to as "workers". You can configure the number of running workers with [`minWorkers`](/config/#minworkers) and [`maxWorkers`](/config/#maxworkers) options. Or more granually with [`poolOptions`](/config/#pooloptions) configuration.

If you have a lot of tests, it is usually faster to run them in parallel, but it also depends on the project, the environment and [isolation](/config/#isolate) state. To disable file parallelisation, you can set [`fileParallelism`](/config/#fileparallelism) to `false`. To learn more about possible performance improvements, read the [Performance Guide](/guide/improving-performance).

Test Parallelism [​](#test-parallelism)
---------------------------------------

Unlike _test files_, Vitest runs _tests_ in sequence. This means that tests inside a single test file will run in the order they are defined.

Vitest supports the [`concurrent`](/api/#test-concurrent) option to run tests together. If this option is set, Vitest will group concurrent tests in the same _file_ (the number of simultaneously running tests depends on the [`maxConcurrency`](/config/#maxconcurrency) option) and run them with [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

Vitest doesn't perform any smart analysis and doesn't create additional workers to run these tests. This means that the performance of your tests will improve only if you rely heavily on asynchronous operations. For example, these tests will still run one after another even though the `concurrent` option is specified. This is because they are synchronous:

ts

    test.concurrent('the first test', () => {
      expect(1).toBe(1)
    })
    
    test.concurrent('the second test', () => {
      expect(2).toBe(2)
    })

If you wish to run all tests concurrently, you can set the [`sequence.concurrent`](/config/#sequence-concurrent) option to `true`.

Testing Types [​](#testing-types)
=================================

Sample Project

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/typecheck) - [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/typecheck?initialPath=__vitest__/)

Vitest allows you to write tests for your types, using `expectTypeOf` or `assertType` syntaxes. By default all tests inside `*.test-d.ts` files are considered type tests, but you can change it with [`typecheck.include`](/config/#typecheck-include) config option.

Under the hood Vitest calls `tsc` or `vue-tsc`, depending on your config, and parses results. Vitest will also print out type errors in your source code, if it finds any. You can disable it with [`typecheck.ignoreSourceErrors`](/config/#typecheck-ignoresourceerrors) config option.

Keep in mind that Vitest doesn't run these files, they are only statically analyzed by the compiler. Meaning, that if you use a dynamic name or `test.each` or `test.for`, the test name will not be evaluated - it will be displayed as is.

WARNING

Before Vitest 2.1, your `typecheck.include` overrode the `include` pattern, so your runtime tests did not actually run; they were only type-checked.

Since Vitest 2.1, if your `include` and `typecheck.include` overlap, Vitest will report type tests and runtime tests as separate entries.

Using CLI flags, like `--allowOnly` and `-t` are also supported for type checking.

mount.test-d.ts

ts

    import { assertType, expectTypeOf } from 'vitest'
    import { mount } from './mount.js'
    
    test('my types work properly', () => {
      expectTypeOf(mount).toBeFunction()
      expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()
    
      // @ts-expect-error name is a string
      assertType(mount({ name: 42 }))
    })

Any type error triggered inside a test file will be treated as a test error, so you can use any type trick you want to test types of your project.

You can see a list of possible matchers in [API section](/api/expect-typeof).

Reading Errors [​](#reading-errors)
-----------------------------------

If you are using `expectTypeOf` API, refer to the [expect-type documentation on its error messages](https://github.com/mmkal/expect-type#error-messages).

When types don't match, `.toEqualTypeOf` and `.toMatchTypeOf` use a special helper type to produce error messages that are as actionable as possible. But there's a bit of an nuance to understanding them. Since the assertions are written "fluently", the failure should be on the "expected" type, not the "actual" type (`expect<Actual>().toEqualTypeOf<Expected>()`). This means that type errors can be a little confusing - so this library produces a `MismatchInfo` type to try to make explicit what the expectation is. For example:

ts

    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>()

Is an assertion that will fail, since `{a: 1}` has type `{a: number}` and not `{a: string}`. The error message in this case will read something like this:

    test/test.ts:999:999 - error TS2344: Type '{ a: string; }' does not satisfy the constraint '{ a: \\"Expected: string, Actual: number\\"; }'.
      Types of property 'a' are incompatible.
        Type 'string' is not assignable to type '\\"Expected: string, Actual: number\\"'.
    
    999 expectTypeOf({a: 1}).toEqualTypeOf<{a: string}>()

Note that the type constraint reported is a human-readable messaging specifying both the "expected" and "actual" types. Rather than taking the sentence `Types of property 'a' are incompatible // Type 'string' is not assignable to type "Expected: string, Actual: number"` literally - just look at the property name (`'a'`) and the message: `Expected: string, Actual: number`. This will tell you what's wrong, in most cases. Extremely complex types will of course be more effort to debug, and may require some experimentation. Please [raise an issue](https://github.com/mmkal/expect-type) if the error messages are actually misleading.

The `toBe...` methods (like `toBeString`, `toBeNumber`, `toBeVoid` etc.) fail by resolving to a non-callable type when the `Actual` type under test doesn't match up. For example, the failure for an assertion like `expectTypeOf(1).toBeString()` will look something like this:

    test/test.ts:999:999 - error TS2349: This expression is not callable.
      Type 'ExpectString<number>' has no call signatures.
    
    999 expectTypeOf(1).toBeString()
                        ~~~~~~~~~~

The `This expression is not callable` part isn't all that helpful - the meaningful error is the next line, `Type 'ExpectString<number> has no call signatures`. This essentially means you passed a number but asserted it should be a string.

If TypeScript added support for ["throw" types](https://github.com/microsoft/TypeScript/pull/40468) these error messages could be improved significantly. Until then they will take a certain amount of squinting.

#### Concrete "expected" objects vs typeargs [​](#concrete-expected-objects-vs-typeargs)

Error messages for an assertion like this:

ts

    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: '' })

Will be less helpful than for an assertion like this:

ts

    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>()

This is because the TypeScript compiler needs to infer the typearg for the `.toEqualTypeOf({a: ''})` style, and this library can only mark it as a failure by comparing it against a generic `Mismatch` type. So, where possible, use a typearg rather than a concrete type for `.toEqualTypeOf` and `toMatchTypeOf`. If it's much more convenient to compare two concrete types, you can use `typeof`:

ts

    const one = valueFromFunctionOne({ some: { complex: inputs } })
    const two = valueFromFunctionTwo({ some: { other: inputs } })
    
    expectTypeOf(one).toEqualTypeOf<typeof two>()

If you find it hard working with `expectTypeOf` API and figuring out errors, you can always use more simple `assertType` API:

ts

    const answer = 42
    
    assertType<number>(answer)
    // @ts-expect-error answer is not a string
    assertType<string>(answer)

TIP

When using `@ts-expect-error` syntax, you might want to make sure that you didn't make a typo. You can do that by including your type files in [`test.include`](/config/#include) config option, so Vitest will also actually _run_ these tests and fail with `ReferenceError`.

This will pass, because it expects an error, but the word “answer” has a typo, so it's a false positive error:

ts

    // @ts-expect-error answer is not a string
    assertType<string>(answr)

Run Typechecking [​](#run-typechecking)
---------------------------------------

To enable typechecking, just add [`--typecheck`](/config/#typecheck) flag to your Vitest command in `package.json`:

package.json

json

    {
      "scripts": {
        "test": "vitest --typecheck"
      }
    }

Now you can run typecheck:

npmyarnpnpmbun

bash

    npm run test

bash

    yarn test

bash

    pnpm run test

bash

    bun test

Vitest uses `tsc --noEmit` or `vue-tsc --noEmit`, depending on your configuration, so you can remove these scripts from your pipeline.

Vitest UI [​](#vitest-ui)
=========================

Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests. The Vitest UI is optional, so you'll need to install it with:

bash

    npm i -D @vitest/ui

Then you can start the tests with UI by passing the `--ui` flag:

bash

    vitest --ui

Then you can visit the Vitest UI at [`http://localhost:51204/__vitest__/`](http://localhost:51204/__vitest__/)

WARNING

The UI is interactive and requires a running Vite server, so make sure to run Vitest in `watch` mode (the default). Alternatively, you can generate a static HTML report that looks identical to the Vitest UI by specifying `html` in config's `reporters` option.

UI can also be used as a reporter. Use `'html'` reporter in your Vitest configuration to generate HTML output and preview the results of your tests:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        reporters: ['html'],
      },
    })

You can check your coverage report in Vitest UI: see [Vitest UI Coverage](/guide/coverage#vitest-ui) for more details.

WARNING

If you still want to see how your tests are running in real time in the terminal, don't forget to add `default` reporter to `reporters` option: `['default', 'html']`.

TIP

To preview your HTML report, you can use the [vite preview](https://vitejs.dev/guide/cli#vite-preview) command:

sh

    npx vite preview --outDir ./html

You can configure output with [`outputFile`](/config/#outputfile) config option. You need to specify `.html` path there. For example, `./html/index.html` is the default value.

In-Source Testing [​](#in-source-testing)
=========================================

Vitest provides a way to run tests within your source code along side the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings a closer feedback loop for development.

WARNING

This guide explains how to write tests inside your source code. If you need to write tests in separate test files, follow the ["Writing Tests" guide](/guide/#writing-tests).

Setup [​](#setup)
-----------------

To get started, put a `if (import.meta.vitest)` block at the end of your source file and write some tests inside it. For example:

src/index.ts

ts

    // the implementation
    export function add(...args: number[]) {
      return args.reduce((a, b) => a + b, 0)
    }
    
    // in-source test suites
    if (import.meta.vitest) {
      const { it, expect } = import.meta.vitest
      it('add', () => {
        expect(add()).toBe(0)
        expect(add(1)).toBe(1)
        expect(add(1, 2, 3)).toBe(6)
      })
    }

Update the `includeSource` config for Vitest to grab the files under `src/`:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        includeSource: ['src/**/*.{js,ts}'], 
      },
    })

Then you can start to test!

bash

    $ npx vitest

Production Build [​](#production-build)
---------------------------------------

For the production build, you will need to set the `define` options in your config file, letting the bundler do the dead code elimination. For example, in Vite

vite.config.ts

ts

    /// <reference types="vitest/config" />
    
    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        includeSource: ['src/**/*.{js,ts}'],
      },
      define: { 
        'import.meta.vitest': 'undefined', 
      }, 
    })

### Other Bundlers [​](#other-bundlers)

unbuild

build.config.ts

ts

    import { defineBuildConfig } from 'unbuild'
    
    export default defineBuildConfig({
      replace: { 
        'import.meta.vitest': 'undefined', 
      }, 
      // other options
    })

Learn more: [unbuild](https://github.com/unjs/unbuild)

Rollup

rollup.config.js

ts

    import replace from '@rollup/plugin-replace'
    
    export default {
      plugins: [
        replace({ 
          'import.meta.vitest': 'undefined', 
        }) 
      ],
      // other options
    }

Learn more: [Rollup](https://rollupjs.org/)

TypeScript [​](#typescript)
---------------------------

To get TypeScript support for `import.meta.vitest`, add `vitest/importMeta` to your `tsconfig.json`:

tsconfig.json

json

    {
      "compilerOptions": {
        "types": [
          "vitest/importMeta"
        ]
      }
    }

Reference to [`examples/in-source-test`](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test) for the full example.

Notes [​](#notes)
-----------------

This feature could be useful for:

*   Unit testing for small-scoped functions or utilities
*   Prototyping
*   Inline Assertion

It's recommended to **use separate test files instead** for more complex tests like components or E2E testing.

Test Context [​](#test-context)
===============================

Inspired by [Playwright Fixtures](https://playwright.dev/docs/test-fixtures), Vitest's test context allows you to define utils, states, and fixtures that can be used in your tests.

Usage [​](#usage)
-----------------

The first argument for each test callback is a test context.

ts

    import { it } from 'vitest'
    
    it('should work', ({ task }) => {
      // prints name of the test
      console.log(task.name)
    })

Built-in Test Context [​](#built-in-test-context)
-------------------------------------------------

#### `task` [​](#task)

A readonly object containing metadata about the test.

#### `expect` [​](#expect)

The `expect` API bound to the current test:

ts

    import { it } from 'vitest'
    
    it('math is easy', ({ expect }) => {
      expect(2 + 2).toBe(4)
    })

This API is useful for running snapshot tests concurrently because global expect cannot track them:

ts

    import { it } from 'vitest'
    
    it.concurrent('math is easy', ({ expect }) => {
      expect(2 + 2).toMatchInlineSnapshot()
    })
    
    it.concurrent('math is hard', ({ expect }) => {
      expect(2 * 2).toMatchInlineSnapshot()
    })

#### `skip` [​](#skip)

ts

    function skip(note?: string): never
    function skip(condition: boolean, note?: string): void

Skips subsequent test execution and marks test as skipped:

ts

    import { expect, it } from 'vitest'
    
    it('math is hard', ({ skip }) => {
      skip()
      expect(2 + 2).toBe(5)
    })

Since Vitest 3.1, it accepts a boolean parameter to skip the test conditionally:

ts

    it('math is hard', ({ skip, mind }) => {
      skip(mind === 'foggy')
      expect(2 + 2).toBe(5)
    })

#### `context.signal` 3.2.0\+ [​](#context-signal)

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be aborted by Vitest. The signal is aborted in these situations:

*   Test times out
*   User manually cancelled the test run with Ctrl+C
*   [`vitest.cancelCurrentRun`](/advanced/api/vitest#cancelcurrentrun) was called programmatically
*   Another test failed in parallel and the [`bail`](/config/#bail) flag is set

ts

    it('stop request when test times out', async ({ signal }) => {
      await fetch('/resource', { signal })
    }, 2000)

#### `onTestFailed` [​](#ontestfailed)

The [`onTestFailed`](/api/#ontestfailed) hook bound to the current test. This API is useful if you are running tests concurrently and need to have a special handling only for this specific test.

#### `onTestFinished` [​](#ontestfinished)

The [`onTestFinished`](/api/#ontestfailed) hook bound to the current test. This API is useful if you are running tests concurrently and need to have a special handling only for this specific test.

Extend Test Context [​](#extend-test-context)
---------------------------------------------

Vitest provides two different ways to help you extend the test context.

### `test.extend` [​](#test-extend)

Like [Playwright](https://playwright.dev/docs/api/class-test#test-extend), you can use this method to define your own `test` API with custom fixtures and reuse it anywhere.

For example, we first create the `test` collector with two fixtures: `todos` and `archive`.

my-test.ts

ts

    import { test as baseTest } from 'vitest'
    
    const todos = []
    const archive = []
    
    export const test = baseTest.extend({
      todos: async ({}, use) => {
        // setup the fixture before each test function
        todos.push(1, 2, 3)
    
        // use the fixture value
        await use(todos)
    
        // cleanup the fixture after each test function
        todos.length = 0
      },
      archive
    })

Then we can import and use it.

my-test.test.ts

ts

    import { expect } from 'vitest'
    import { test } from './my-test.js'
    
    test('add items to todos', ({ todos }) => {
      expect(todos.length).toBe(3)
    
      todos.push(4)
      expect(todos.length).toBe(4)
    })
    
    test('move items from todos to archive', ({ todos, archive }) => {
      expect(todos.length).toBe(3)
      expect(archive.length).toBe(0)
    
      archive.push(todos.pop())
      expect(todos.length).toBe(2)
      expect(archive.length).toBe(1)
    })

We can also add more fixtures or override existing fixtures by extending our `test`.

ts

    import { test as todosTest } from './my-test.js'
    
    export const test = todosTest.extend({
      settings: {
        // ...
      }
    })

#### Fixture initialization [​](#fixture-initialization)

Vitest runner will smartly initialize your fixtures and inject them into the test context based on usage.

ts

    import { test as baseTest } from 'vitest'
    
    const test = baseTest.extend<{
      todos: number[]
      archive: number[]
    }>({
      todos: async ({ task }, use) => {
        await use([1, 2, 3])
      },
      archive: []
    })
    
    // todos will not run
    test('skip', () => {})
    test('skip', ({ archive }) => {})
    
    // todos will run
    test('run', ({ todos }) => {})

WARNING

When using `test.extend()` with fixtures, you should always use the object destructuring pattern `{ todos }` to access context both in fixture function and test function.

ts

    test('context must be destructured', (context) => { 
      expect(context.todos.length).toBe(2)
    })
    
    test('context must be destructured', ({ todos }) => { 
      expect(todos.length).toBe(2)
    })

#### Automatic fixture [​](#automatic-fixture)

Vitest also supports the tuple syntax for fixtures, allowing you to pass options for each fixture. For example, you can use it to explicitly initialize a fixture, even if it's not being used in tests.

ts

    import { test as base } from 'vitest'
    
    const test = base.extend({
      fixture: [
        async ({}, use) => {
          // this function will run
          setup()
          await use()
          teardown()
        },
        { auto: true } // Mark as an automatic fixture
      ],
    })
    
    test('works correctly')

#### Default fixture [​](#default-fixture)

Since Vitest 3, you can provide different values in different [projects](/guide/projects). To enable this feature, pass down `{ injected: true }` to the options. If the key is not specified in the [project configuration](/config/#provide), then the default value will be used.

fixtures.test.tsvitest.config.ts

ts

    import { test as base } from 'vitest'
    
    const test = base.extend({
      url: [
        // default value if "url" is not defined in the config
        '/default',
        // mark the fixture as "injected" to allow the override
        { injected: true },
      ],
    })
    
    test('works correctly', ({ url }) => {
      // url is "/default" in "project-new"
      // url is "/full" in "project-full"
      // url is "/empty" in "project-empty"
    })

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: [
          {
            test: {
              name: 'project-new',
            },
          },
          {
            test: {
              name: 'project-full',
              provide: {
                url: '/full',
              },
            },
          },
          {
            test: {
              name: 'project-empty',
              provide: {
                url: '/empty',
              },
            },
          },
        ],
      },
    })

#### Scoping Values to Suite 3.1.0\+ [​](#scoping-values-to-suite)

Since Vitest 3.1, you can override context values per suite and its children by using the `test.scoped` API:

ts

    import { test as baseTest, describe, expect } from 'vitest'
    
    const test = baseTest.extend({
      dependency: 'default',
      dependant: ({ dependency }, use) => use({ dependency })
    })
    
    describe('use scoped values', () => {
      test.scoped({ dependency: 'new' })
    
      test('uses scoped value', ({ dependant }) => {
        // `dependant` uses the new overriden value that is scoped
        // to all tests in this suite
        expect(dependant).toEqual({ dependency: 'new' })
      })
    
      describe('keeps using scoped value', () => {
        test('uses scoped value', ({ dependant }) => {
          // nested suite inherited the value
          expect(dependant).toEqual({ dependency: 'new' })
        })
      })
    })
    
    test('keep using the default values', ({ dependant }) => {
      // the `dependency` is using the default
      // value outside of the suite with .scoped
      expect(dependant).toEqual({ dependency: 'default' })
    })

This API is particularly useful if you have a context value that relies on a dynamic variable like a database connection:

ts

    const test = baseTest.extend<{
      db: Database
      schema: string
    }>({
      db: async ({ schema }, use) => {
        const db = await createDb({ schema })
        await use(db)
        await cleanup(db)
      },
      schema: '',
    })
    
    describe('one type of schema', () => {
      test.scoped({ schema: 'schema-1' })
    
      // ... tests
    })
    
    describe('another type of schema', () => {
      test.scoped({ schema: 'schema-2' })
    
      // ... tests
    })

#### TypeScript [​](#typescript)

To provide fixture types for all your custom contexts, you can pass the fixtures type as a generic.

ts

    interface MyFixtures {
      todos: number[]
      archive: number[]
    }
    
    const test = baseTest.extend<MyFixtures>({
      todos: [],
      archive: []
    })
    
    test('types are defined correctly', ({ todos, archive }) => {
      expectTypeOf(todos).toEqualTypeOf<number[]>()
      expectTypeOf(archive).toEqualTypeOf<number[]>()
    })

Type Infering

Note that Vitest doesn't support infering the types when the `use` function is called. It is always preferable to pass down the whole context type as the generic type when `test.extend` is called:

ts

    import { test as baseTest } from 'vitest'
    
    const test = baseTest.extend<{
      todos: number[]
      schema: string
    }>({
      todos: ({ schema }, use) => use([]),
      schema: 'test'
    })
    
    test('types are correct', ({
      todos, // number[]
      schema, // string
    }) => {
      // ...
    })

### `beforeEach` and `afterEach` [​](#beforeeach-and-aftereach)

Deprecated

This is an outdated way of extending context and it will not work when the `test` is extended with `test.extend`.

The contexts are different for each test. You can access and extend them within the `beforeEach` and `afterEach` hooks.

ts

    import { beforeEach, it } from 'vitest'
    
    beforeEach(async (context) => {
      // extend context
      context.foo = 'bar'
    })
    
    it('should work', ({ foo }) => {
      console.log(foo) // 'bar'
    })

#### TypeScript [​](#typescript-1)

To provide property types for all your custom contexts, you can augment the `TestContext` type by adding

ts

    declare module 'vitest' {
      export interface TestContext {
        foo?: string
      }
    }

If you want to provide property types only for specific `beforeEach`, `afterEach`, `it` and `test` hooks, you can pass the type as a generic.

ts

    interface LocalTestContext {
      foo: string
    }
    
    beforeEach<LocalTestContext>(async (context) => {
      // typeof context is 'TestContext & LocalTestContext'
      context.foo = 'bar'
    })
    
    it<LocalTestContext>('should work', ({ foo }) => {
      // typeof foo is 'string'
      console.log(foo) // 'bar'
    })

Test Environment [​](#test-environment)
=======================================

Vitest provides [`environment`](/config/#environment) option to run code inside a specific environment. You can modify how environment behaves with [`environmentOptions`](/config/#environmentoptions) option.

By default, you can use these environments:

*   `node` is default environment
*   `jsdom` emulates browser environment by providing Browser API, uses [`jsdom`](https://github.com/jsdom/jsdom) package
*   `happy-dom` emulates browser environment by providing Browser API, and considered to be faster than jsdom, but lacks some API, uses [`happy-dom`](https://github.com/capricorn86/happy-dom) package
*   `edge-runtime` emulates Vercel's [edge-runtime](https://edge-runtime.vercel.app/), uses [`@edge-runtime/vm`](https://www.npmjs.com/package/@edge-runtime/vm) package

INFO

When using `jsdom` or `happy-dom` environments, Vitest follows the same rules that Vite does when importing [CSS](https://vitejs.dev/guide/features#css) and [assets](https://vitejs.dev/guide/features#static-assets). If importing external dependency fails with `unknown extension .css` error, you need to inline the whole import chain manually by adding all packages to [`server.deps.external`](/config/#server-deps-external). For example, if the error happens in `package-3` in this import chain: `source code -> package-1 -> package-2 -> package-3`, you need to add all three packages to `server.deps.external`.

The `require` of CSS and assets inside the external dependencies are resolved automatically.

WARNING

"Environments" exist only when running tests in Node.js.

`browser` is not considered an environment in Vitest. If you wish to run part of your tests using [Browser Mode](/guide/browser/), you can create a [test project](/guide/browser/#projects-config).

Environments for Specific Files [​](#environments-for-specific-files)
---------------------------------------------------------------------

When setting `environment` option in your config, it will apply to all the test files in your project. To have more fine-grained control, you can use control comments to specify environment for specific files. Control comments are comments that start with `@vitest-environment` and are followed by the environment name:

ts

    // @vitest-environment jsdom
    
    import { expect, test } from 'vitest'
    
    test('test', () => {
      expect(typeof window).not.toBe('undefined')
    })

Or you can also set [`environmentMatchGlobs`](https://vitest.dev/config/#environmentmatchglobs) option specifying the environment based on the glob patterns.

Custom Environment [​](#custom-environment)
-------------------------------------------

You can create your own package to extend Vitest environment. To do so, create package with the name `vitest-environment-${name}` or specify a path to a valid JS/TS file. That package should export an object with the shape of `Environment`:

ts

    import type { Environment } from 'vitest/environments'
    
    export default <Environment>{
      name: 'custom',
      transformMode: 'ssr',
      // optional - only if you support "experimental-vm" pool
      async setupVM() {
        const vm = await import('node:vm')
        const context = vm.createContext()
        return {
          getVmContext() {
            return context
          },
          teardown() {
            // called after all tests with this env have been run
          }
        }
      },
      setup() {
        // custom setup
        return {
          teardown() {
            // called after all tests with this env have been run
          }
        }
      }
    }

WARNING

Vitest requires `transformMode` option on environment object. It should be equal to `ssr` or `web`. This value determines how plugins will transform source code. If it's set to `ssr`, plugin hooks will receive `ssr: true` when transforming or resolving files. Otherwise, `ssr` is set to `false`.

You also have access to default Vitest environments through `vitest/environments` entry:

ts

    import { builtinEnvironments, populateGlobal } from 'vitest/environments'
    
    console.log(builtinEnvironments) // { jsdom, happy-dom, node, edge-runtime }

Vitest also provides `populateGlobal` utility function, which can be used to move properties from object into the global namespace:

ts

    interface PopulateOptions {
      // should non-class functions be bind to the global namespace
      bindFunctions?: boolean
    }
    
    interface PopulateResult {
      // a list of all keys that were copied, even if value doesn't exist on original object
      keys: Set<string>
      // a map of original object that might have been overridden with keys
      // you can return these values inside `teardown` function
      originals: Map<string | symbol, any>
    }
    
    export function populateGlobal(global: any, original: any, options: PopulateOptions): PopulateResult

Extending Matchers [​](#extending-matchers)
===========================================

Since Vitest is compatible with both Chai and Jest, you can use either the `chai.use` API or `expect.extend`, whichever you prefer.

This guide will explore extending matchers with `expect.extend`. If you are interested in Chai's API, check [their guide](https://www.chaijs.com/guide/plugins/).

To extend default matchers, call `expect.extend` with an object containing your matchers.

ts

    expect.extend({
      toBeFoo(received, expected) {
        const { isNot } = this
        return {
          // do not alter your "pass" based on isNot. Vitest does it for you
          pass: received === 'foo',
          message: () => `${received} is${isNot ? ' not' : ''} foo`
        }
      }
    })

If you are using TypeScript, you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

ts

    import 'vitest'
    
    interface CustomMatchers<R = unknown> {
      toBeFoo: () => R
    }
    
    declare module 'vitest' {
      interface Assertion<T = any> extends CustomMatchers<T> {}
      interface AsymmetricMatchersContaining extends CustomMatchers {}
    }

WARNING

Don't forget to include the ambient declaration file in your `tsconfig.json`.

The return value of a matcher should be compatible with the following interface:

ts

    interface ExpectationResult {
      pass: boolean
      message: () => string
      // If you pass these, they will automatically appear inside a diff when
      // the matcher does not pass, so you don't need to print the diff yourself
      actual?: unknown
      expected?: unknown
    }

WARNING

If you create an asynchronous matcher, don't forget to `await` the result (`await expect('foo').toBeFoo()`) in the test itself.

The first argument inside a matcher's function is the received value (the one inside `expect(received)`). The rest are arguments passed directly to the matcher.

Matcher function have access to `this` context with the following properties:

*   `isNot`
    
    Returns true, if matcher was called on `not` (`expect(received).not.toBeFoo()`).
    
*   `promise`
    
    If matcher was called on `resolved/rejected`, this value will contain the name of modifier. Otherwise, it will be an empty string.
    
*   `equals`
    
    This is a utility function that allows you to compare two values. It will return `true` if values are equal, `false` otherwise. This function is used internally for almost every matcher. It supports objects with asymmetric matchers by default.
    
*   `utils`
    
    This contains a set of utility functions that you can use to display messages.
    

`this` context also contains information about the current test. You can also get it by calling `expect.getState()`. The most useful properties are:

*   `currentTestName`
    
    Full name of the current test (including describe block).
    
*   `testPath`
    
    Path to the current test.
    

IDE Integrations [​](#ide-integrations)
=======================================

VS Code Official [​](#vs-code)
------------------------------

[GitHub](https://github.com/vitest-dev/vscode) | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

JetBrains IDE [​](#jetbrains-ide)
---------------------------------

WebStorm, PhpStorm, IntelliJ IDEA Ultimate, and other JetBrains IDEs come with built-in support for Vitest.

[WebStorm Help](https://www.jetbrains.com/help/webstorm/vitest.html) | [IntelliJ IDEA Ultimate Help](https://www.jetbrains.com/help/idea/vitest.html) | [PhpStorm Help](https://www.jetbrains.com/help/phpstorm/vitest.html)

Wallaby.js Paid (free for OSS) [​](#wallaby-js-paid-free-for-oss)
-----------------------------------------------------------------

Created by [The Wallaby Team](https://wallabyjs.com)

[Wallaby.js](https://wallabyjs.com) runs your Vitest tests immediately as you type, highlighting results in your IDE right next to your code.

[VS Code](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode) | [JetBrains](https://plugins.jetbrains.com/plugin/15742-wallaby) | [Visual Studio](https://marketplace.visualstudio.com/items?itemName=vs-publisher-999439.WallabyjsforVisualStudio2022) | [Sublime Text](https://packagecontrol.io/packages/Wallaby)

Debugging [​](#debugging)
=========================

TIP

When debugging tests you might want to use following options:

*   [`--test-timeout=0`](/guide/cli#testtimeout) to prevent tests from timing out when stopping at breakpoints
*   [`--no-file-parallelism`](/guide/cli#fileparallelism) to prevent test files from running parallel

VS Code [​](#vs-code)
---------------------

Quick way to debug tests in VS Code is via `JavaScript Debug Terminal`. Open a new `JavaScript Debug Terminal` and run `npm run test` or `vitest` directly. _this works with any code run in Node, so will work with most JS testing frameworks_

You can also add a dedicated launch configuration to debug a test file in VS Code:

json

    {
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Debug Current Test File",
          "autoAttachChildProcesses": true,
          "skipFiles": ["<node_internals>/**", "**/node_modules/**"],
          "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
          "args": ["run", "${relativeFile}"],
          "smartStep": true,
          "console": "integratedTerminal"
        }
      ]
    }

Then in the debug tab, ensure 'Debug Current Test File' is selected. You can then open the test file you want to debug and press F5 to start debugging.

### Browser mode [​](#browser-mode)

To debug [Vitest Browser Mode](/guide/browser/), pass `--inspect` or `--inspect-brk` in CLI or define it in your Vitest configuration:

CLIvitest.config.js

bash

    vitest --inspect-brk --browser --no-file-parallelism

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        inspectBrk: true,
        fileParallelism: false,
        browser: {
          provider: 'playwright',
          instances: [{ browser: 'chromium' }]
        },
      },
    })

By default Vitest will use port `9229` as debugging port. You can overwrite it with by passing value in `--inspect-brk`:

bash

    vitest --inspect-brk=127.0.0.1:3000 --browser --no-file-parallelism

Use following [VSCode Compound configuration](https://code.visualstudio.com/docs/editor/debugging#_compound-launch-configurations) for launching Vitest and attaching debugger in the browser:

json

    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Run Vitest Browser",
          "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
          "console": "integratedTerminal",
          "args": ["--inspect-brk", "--browser", "--no-file-parallelism"]
        },
        {
          "type": "chrome",
          "request": "attach",
          "name": "Attach to Vitest Browser",
          "port": 9229
        }
      ],
      "compounds": [
        {
          "name": "Debug Vitest Browser",
          "configurations": ["Attach to Vitest Browser", "Run Vitest Browser"],
          "stopAll": true
        }
      ]
    }

IntelliJ IDEA [​](#intellij-idea)
---------------------------------

Create a [vitest](https://www.jetbrains.com/help/idea/vitest.html#createRunConfigVitest) run configuration. Use the following settings to run all tests in debug mode:

Setting

Value

Working directory

`/path/to/your-project-root`

Then run this configuration in debug mode. The IDE will stop at JS/TS breakpoints set in the editor.

Node Inspector, e.g. Chrome DevTools [​](#node-inspector-e-g-chrome-devtools)
-----------------------------------------------------------------------------

Vitest also supports debugging tests without IDEs. However this requires that tests are not run parallel. Use one of the following commands to launch Vitest.

sh

    # To run in a single worker
    vitest --inspect-brk --pool threads --poolOptions.threads.singleThread
    
    # To run in a single child process
    vitest --inspect-brk --pool forks --poolOptions.forks.singleFork
    
    # To run in browser mode
    vitest --inspect-brk --browser --no-file-parallelism

If you are using Vitest 1.1 or higher, you can also just provide `--no-file-parallelism` flag:

sh

    # If pool is unknown
    vitest --inspect-brk --no-file-parallelism

Once Vitest starts it will stop execution and wait for you to open developer tools that can connect to [Node.js inspector](https://nodejs.org/en/docs/guides/debugging-getting-started/). You can use Chrome DevTools for this by opening `chrome://inspect` on browser.

In watch mode you can keep the debugger open during test re-runs by using the `--poolOptions.threads.isolate false` options.

Common Errors [​](#common-errors)
=================================

Cannot find module './relative-path' [​](#cannot-find-module-relative-path)
---------------------------------------------------------------------------

If you receive an error that module cannot be found, it might mean several different things:

*   1.  You misspelled the path. Make sure the path is correct.
*   2.  It's possible that you rely on `baseUrl` in your `tsconfig.json`. Vite doesn't take into account `tsconfig.json` by default, so you might need to install [`vite-tsconfig-paths`](https://www.npmjs.com/package/vite-tsconfig-paths) yourself, if you rely on this behaviour.

ts

    import { defineConfig } from 'vitest/config'
    import tsconfigPaths from 'vite-tsconfig-paths'
    
    export default defineConfig({
      plugins: [tsconfigPaths()]
    })

Or rewrite your path to not be relative to root:

diff

    - import helpers from 'src/helpers'
    + import helpers from '../src/helpers'

*   3.  Make sure you don't have relative [aliases](/config/#alias). Vite treats them as relative to the file where the import is instead of the root.

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        alias: {
          '@/': './src/', 
          '@/': new URL('./src/', import.meta.url).pathname, 
        }
      }
    })

Cannot mock "./mocked-file.js" because it is already loaded [​](#cannot-mock-mocked-file-js-because-it-is-already-loaded)
-------------------------------------------------------------------------------------------------------------------------

This error happens when `vi.mock` method is called on a module that was already loaded. Vitest throws this error because this call has no effect since cached modules are preferred.

Remember that `vi.mock` is always hoisted - it means that the module was loaded before the test file started executing - most likely in a setup file. To fix the error, remove the import or clear the cache at the end of a setup file - beware that setup file and your test file will reference different modules in that case.

setupFile.js

ts

    import { vi } from 'vitest'
    import { sideEffect } from './mocked-file.js'
    
    sideEffect()
    
    vi.resetModules()

Failed to terminate worker [​](#failed-to-terminate-worker)
-----------------------------------------------------------

This error can happen when NodeJS's `fetch` is used with default [`pool: 'threads'`](/config/#threads). This issue is tracked on issue [Timeout abort can leave process(es) running in the background #3077](https://github.com/vitest-dev/vitest/issues/3077).

As work-around you can switch to [`pool: 'forks'`](/config/#forks) or [`pool: 'vmForks'`](/config/#vmforks).

vitest.config.jsCLI

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        pool: 'forks',
      },
    })

bash

    vitest --pool=forks

Segfaults and native code errors [​](#segfaults-and-native-code-errors)
-----------------------------------------------------------------------

Running [native NodeJS modules](https://nodejs.org/api/addons.html) in `pool: 'threads'` can run into cryptic errors coming from the native code.

*   `Segmentation fault (core dumped)`
*   `thread '<unnamed>' panicked at 'assertion failed`
*   `Abort trap: 6`
*   `internal error: entered unreachable code`

In these cases the native module is likely not built to be multi-thread safe. As work-around, you can switch to `pool: 'forks'` which runs the test cases in multiple `node:child_process` instead of multiple `node:worker_threads`.

vitest.config.jsCLI

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        pool: 'forks',
      },
    })

bash

    vitest --pool=forks

Migration Guide [​](#migration-guide)
=====================================

Migrating to Vitest 3.0 [​](#vitest-3)
--------------------------------------

### Test Options as a Third Argument [​](#test-options-as-a-third-argument)

Vitest 3.0 prints a warning if you pass down an object as a third argument to `test` or `describe` functions:

ts

    test('validation works', () => {
      // ...
    }, { retry: 3 }) 
    
    test('validation works', { retry: 3 }, () => { 
      // ...
    })

The next major version will throw an error if the third argument is an object. Note that the timeout number is not deprecated:

ts

    test('validation works', () => {
      // ...
    }, 1000) // Ok ✅

### `browser.name` and `browser.providerOptions` are Deprecated [​](#browser-name-and-browser-provideroptions-are-deprecated)

Both [`browser.name`](/guide/browser/config#browser-name) and [`browser.providerOptions`](/guide/browser/config#browser-provideroptions) will be removed in Vitest 4. Instead of them, use the new [`browser.instances`](/guide/browser/config#browser-instances) option:

ts

    export default defineConfig({
      test: {
        browser: {
          name: 'chromium', 
          providerOptions: { 
            launch: { devtools: true }, 
          }, 
          instances: [ 
            { 
              browser: 'chromium', 
              launch: { devtools: true }, 
            }, 
          ], 
        },
      },
    })

With the new `browser.instances` field you can also specify multiple browser configurations.

### `spy.mockReset` Now Restores the Original Implementation [​](#spy-mockreset-now-restores-the-original-implementation)

There was no good way to reset the spy to the original implementation without reaplying the spy. Now, `spy.mockReset` will reset the implementation function to the original one instead of a fake noop.

ts

    const foo = {
      bar: () => 'Hello, world!'
    }
    
    vi.spyOn(foo, 'bar').mockImplementation(() => 'Hello, mock!')
    
    foo.bar() // 'Hello, mock!'
    
    foo.bar.mockReset()
    
    foo.bar() // undefined
    foo.bar() // 'Hello, world!'

### `vi.spyOn` Reuses Mock if Method is Already Mocked [​](#vi-spyon-reuses-mock-if-method-is-already-mocked)

Previously, Vitest would always assign a new spy when spying on an object. This caused errors with `mockRestore` because it would restore the spy to the previous spy instead of the original function:

ts

    vi.spyOn(fooService, 'foo').mockImplementation(() => 'bar')
    vi.spyOn(fooService, 'foo').mockImplementation(() => 'bar')
    vi.restoreAllMocks()
    vi.isMockFunction(fooService.foo) // true
    vi.isMockFunction(fooService.foo) // false

### Fake Timers Defaults [​](#fake-timers-defaults)

Vitest no longer provides default `fakeTimers.toFake` options. Now, Vitest will mock any timer-related API if it is available (except `nextTick`). Namely, `performance.now()` is now mocked when `vi.useFakeTimers` is called.

ts

    vi.useFakeTimers()
    
    performance.now() // original
    performance.now() // fake

You can revert to the previous behaviour by specifying timers when calling `vi.useFakeTimers` or globally in the config:

ts

    export default defineConfig({
      test: {
        fakeTimers: {
          toFake: [ 
            'setTimeout', 
            'clearTimeout', 
            'setInterval', 
            'clearInterval', 
            'setImmediate', 
            'clearImmediate', 
            'Date', 
          ] 
        },
      },
    })

### More Strict Error Equality [​](#more-strict-error-equality)

Vitest now checks more properties when comparing errors via `toEqual` or `toThrowError`. Vitest now compares `name`, `message`, `cause` and `AggregateError.errors`. For `Error.cause`, the comparison is done asymmetrically:

ts

    expect(new Error('hi', { cause: 'x' })).toEqual(new Error('hi')) // ✅
    expect(new Error('hi')).toEqual(new Error('hi', { cause: 'x' })) // ❌

In addition to more properties check, Vitest now compares error prototypes. For example, if `TypeError` was thrown, the equality check should reference `TypeError`, not `Error`:

ts

    expect(() => {
      throw new TypeError('type error')
    })
      .toThrowError(new Error('type error')) 
      .toThrowError(new TypeError('type error')) 

See PR for more details: [#5876](https://github.com/vitest-dev/vitest/pull/5876).

### `module` condition export is not resolved by default on Vite 6 [​](#module-condition-export-is-not-resolved-by-default-on-vite-6)

Vite 6 allows more flexible [`resolve.conditions`](https://vite.dev/config/shared-options#resolve-conditions) options and Vitest configures it to exclude `module` conditional export by default. See also [Vite 6 migration guide](https://v6.vite.dev/guide/migration#default-value-for-resolve-conditions) for the detail of Vite side changes.

### `Custom` Type is Deprecated API [​](#custom-type-is-deprecated)

The `Custom` type is now an alias for the `Test` type. Note that Vitest updated the public types in 2.1 and changed exported names to `RunnerCustomCase` and `RunnerTestCase`:

ts

    import {
      RunnerCustomCase, 
      RunnerTestCase, 
    } from 'vitest'

If you are using `getCurrentSuite().custom()`, the `type` of the returned task is now is equal to `'test'`. The `Custom` type will be removed in Vitest 4.

### The `WorkspaceSpec` Type is No Longer Used API [​](#the-workspacespec-type-is-no-longer-used)

In the public API this type was used in custom [sequencers](/config/#sequence-sequencer) before. Please, migrate to [`TestSpecification`](/advanced/api/test-specification) instead.

### `onTestFinished` and `onTestFailed` Now Receive a Context [​](#ontestfinished-and-ontestfailed-now-receive-a-context)

The [`onTestFinished`](/api/#ontestfinished) and [`onTestFailed`](/api/#ontestfailed) hooks previously received a test result as the first argument. Now, they receive a test context, like `beforeEach` and `afterEach`.

### Changes to the Snapshot API API [​](#changes-to-the-snapshot-api)

The public Snapshot API in `@vitest/snapshot` was changed to support multiple states within a single run. See PR for more details: [#6817](https://github.com/vitest-dev/vitest/pull/6817)

Note that this changes only affect developers using the Snapshot API directly. There were no changes to `.toMatchSnapshot` API.

### Changes to `resolveConfig` Type Signature API [​](#changes-to-resolveconfig-type-signature)

The [`resolveConfig`](/advanced/api/#resolveconfig) is now more useful. Instead of accepting already resolved Vite config, it now accepts a user config and returns resolved config.

This function is not used internally and exposed exclusively as a public API.

### Cleaned up `vitest/reporters` types API [​](#cleaned-up-vitest-reporters-types)

The `vitest/reporters` entrypoint now only exports reporters implementations and options types. If you need access to `TestCase`/`TestSuite` and other task related types, import them additionally from `vitest/node`.

### Coverage ignores test files even when `coverage.excludes` is overwritten. [​](#coverage-ignores-test-files-even-when-coverage-excludes-is-overwritten)

It is no longer possible to include test files in coverage report by overwriting `coverage.excludes`. Test files are now always excluded.

Migrating to Vitest 2.0 [​](#vitest-2)
--------------------------------------

### Default Pool is `forks` [​](#default-pool-is-forks)

Vitest 2.0 changes the default configuration for `pool` to `'forks'` for better stability. You can read the full motivation in [PR](https://github.com/vitest-dev/vitest/pull/5047).

If you've used `poolOptions` without specifying a `pool`, you might need to update the configuration:

ts

    export default defineConfig({
      test: {
        poolOptions: {
          threads: { 
            singleThread: true, 
          }, 
          forks: { 
            singleFork: true, 
          }, 
        }
      }
    })

### Hooks are Running in a Stack [​](#hooks-are-running-in-a-stack)

Before Vitest 2.0, all hooks ran in parallel. In 2.0, all hooks run serially. Additionally, `afterAll`/`afterEach` hooks run in reverse order.

To revert to the parallel execution of hooks, change [`sequence.hooks`](/config/#sequence-hooks) to `'parallel'`:

ts

    export default defineConfig({
      test: {
        sequence: { 
          hooks: 'parallel', 
        }, 
      },
    })

### `suite.concurrent` Runs All Tests Concurrently [​](#suite-concurrent-runs-all-tests-concurrently)

Previously, specifying `concurrent` on a suite would group concurrent tests by suites, running them sequentially. Now, following Jest's behavior, all tests run concurrently (subject to [`maxConcurrency`](/config/#maxconcurrency) limits).

### V8 Coverage's `coverage.ignoreEmptyLines` is Enabled by Default [​](#v8-coverage-s-coverage-ignoreemptylines-is-enabled-by-default)

The default value of `coverage.ignoreEmptyLines` is now true. This significant change may affect code coverage reports, requiring adjustments to coverage thresholds for some projects. This adjustment only affects the default setting when `coverage.provider` is `'v8'`.

### Removal of the `watchExclude` Option [​](#removal-of-the-watchexclude-option)

Vitest uses Vite's watcher. Exclude files or directories by adding them to `server.watch.ignored`:

ts

    export default defineConfig({
      server: { 
        watch: { 
          ignored: ['!node_modules/examplejs'] 
        } 
      } 
    })

### `--segfault-retry` Removed [​](#segfault-retry-removed)

With the changes to default pool, this option is no longer needed. If you experience segfault errors, try switching to `'forks'` pool. If the problem persists, please open a new issue with a reproduction.

### Empty Task In Suite Tasks Removed [​](#empty-task-in-suite-tasks-removed)

This is the change to the advanced [task API](/advanced/runner#your-task-function). Previously, traversing `.suite` would eventually lead to the empty internal suite that was used instead of a file task.

This makes `.suite` optional; if the task is defined at the top level, it will not have a suite. You can fallback to the `.file` property that is now present on all tasks (including the file task itself, so be careful not to fall into the endless recursion).

This change also removes the file from `expect.getState().currentTestName` and makes `expect.getState().testPath` required.

### `task.meta` is Added to the JSON Reporter [​](#task-meta-is-added-to-the-json-reporter)

JSON reporter now prints `task.meta` for every assertion result.

### Simplified Generic Types of Mock Functions (e.g. `vi.fn<T>`, `Mock<T>`) [​](#simplified-generic-types-of-mock-functions-e-g-vi-fn-t-mock-t)

Previously `vi.fn<TArgs, TReturn>` accepted two generic types separately for arguments and return value. This is changed to directly accept a function type `vi.fn<T>` to simplify the usage.

ts

    import { vi } from 'vitest'
    import type { Mock } from 'vitest'
    
    const add = (x: number, y: number): number => x + y
    
    // using vi.fn<T>
    const mockAdd = vi.fn<Parameters<typeof add>, ReturnType<typeof add>>() 
    const mockAdd = vi.fn<typeof add>() 
    
    // using Mock<T>
    const mockAdd: Mock<Parameters<typeof add>, ReturnType<typeof add>> = vi.fn() 
    const mockAdd: Mock<typeof add> = vi.fn() 

### Accessing Resolved `mock.results` [​](#accessing-resolved-mock-results)

Previously Vitest resolved `mock.results` values if the function returned a Promise. Now there is a separate [`mock.settledResults`](/api/mock#mock-settledresults) property that populates only when the returned Promise is resolved or rejected.

ts

    const fn = vi.fn().mockResolvedValueOnce('result')
    await fn()
    
    const result = fn.mock.results[0] // 'result'
    const result = fn.mock.results[0] // 'Promise<result>'
    
    const settledResult = fn.mock.settledResults[0] // 'result'

With this change, we also introduce new [`toHaveResolved*`](/api/expect#tohaveresolved) matchers similar to `toHaveReturned` to make migration easier if you used `toHaveReturned` before:

ts

    const fn = vi.fn().mockResolvedValueOnce('result')
    await fn()
    
    expect(fn).toHaveReturned('result') 
    expect(fn).toHaveResolved('result') 

### Browser Mode [​](#browser-mode)

Vitest Browser Mode had a lot of changes during the beta cycle. You can read about our philosophy on the Browser Mode in the [GitHub discussion page](https://github.com/vitest-dev/vitest/discussions/5828).

Most of the changes were additive, but there were some small breaking changes:

*   `none` provider was renamed to `preview` [#5842](https://github.com/vitest-dev/vitest/pull/5826)
*   `preview` provider is now a default [#5842](https://github.com/vitest-dev/vitest/pull/5826)
*   `indexScripts` is renamed to `orchestratorScripts` [#5842](https://github.com/vitest-dev/vitest/pull/5842)

### Deprecated Options Removed [​](#deprecated-options-removed)

Some deprecated options were removed:

*   `vitest typecheck` command - use `vitest --typecheck` instead
*   `VITEST_JUNIT_CLASSNAME` and `VITEST_JUNIT_SUITE_NAME` env variables (use reporter options instead)
*   check for `c8` coverage (use coverage-v8 instead)
*   export of `SnapshotEnvironment` from `vitest` - import it from `vitest/snapshot` instead
*   `SpyInstance` is removed in favor of `MockInstance`

Migrating to Vitest 1.0 [​](#migrating-to-vitest-1-0)
-----------------------------------------------------

### Minimum Requirements [​](#minimum-requirements)

Vitest 1.0 requires Vite 5.0 and Node.js 18 or higher.

All `@vitest/*` sub packages require Vitest version 1.0.

### Snapshots Update [#3961](https://github.com/vitest-dev/vitest/pull/3961) [​](#snapshots-update-3961)

Quotes in snapshots are no longer escaped, and all snapshots use backtick quotes (\`) even if the string is just a single line.

1.  Quotes are no longer escaped:

diff

    expect({ foo: 'bar' }).toMatchInlineSnapshot(`
      Object {
    -    \\"foo\\": \\"bar\\",
    +    "foo": "bar",
      }
    `)

2.  One-line snapshots now use "\`" quotes instead of ':

diff

    - expect('some string').toMatchInlineSnapshot('"some string"')
    + expect('some string').toMatchInlineSnapshot(`"some string"`)

There were also [changes](https://github.com/vitest-dev/vitest/pull/4076) to `@vitest/snapshot` package. If you are not using it directly, you don't need to change anything.

*   You no longer need to extend `SnapshotClient` just to override `equalityCheck` method: just pass it down as `isEqual` when initiating an instance
*   `client.setTest` was renamed to `client.startCurrentRun`
*   `client.resetCurrent` was renamed to `client.finishCurrentRun`

### Pools are Standardized [#4172](https://github.com/vitest-dev/vitest/pull/4172) [​](#pools-are-standardized-4172)

We removed a lot of configuration options to make it easier to configure the runner to your needs. Please, have a look at migration examples if you rely on `--threads` or other related flags.

*   `--threads` is now `--pool=threads`
*   `--no-threads` is now `--pool=forks`
*   `--single-thread` is now `--poolOptions.threads.singleThread`
*   `--experimental-vm-threads` is now `--pool=vmThreads`
*   `--experimental-vm-worker-memory-limit` is now `--poolOptions.vmThreads.memoryLimit`
*   `--isolate` is now `--poolOptions.<pool-name>.isolate` and `browser.isolate`
*   `test.maxThreads` is now `test.poolOptions.<pool-name>.maxThreads`
*   `test.minThreads` is now `test.poolOptions.<pool-name>.minThreads`
*   `test.useAtomics` is now `test.poolOptions.<pool-name>.useAtomics`
*   `test.poolMatchGlobs.child_process` is now `test.poolMatchGlobs.forks`
*   `test.poolMatchGlobs.experimentalVmThreads` is now `test.poolMatchGlobs.vmThreads`

diff

    {
      scripts: {
    -    "test": "vitest --no-threads"
         // For identical behaviour:
    +    "test": "vitest --pool forks --poolOptions.forks.singleFork"
         // Or multi parallel forks:
    +    "test": "vitest --pool forks"
    
      }
    }

diff

    {
      scripts: {
    -    "test": "vitest --experimental-vm-threads"
    +    "test": "vitest --pool vmThreads"
      }
    }

diff

    {
      scripts: {
    -    "test": "vitest --isolate false"
    +    "test": "vitest --poolOptions.threads.isolate false"
      }
    }

diff

    {
      scripts: {
    -    "test": "vitest --no-threads --isolate false"
    +    "test": "vitest --pool forks --poolOptions.forks.isolate false"
      }
    }

### Changes to Coverage [#4265](https://github.com/vitest-dev/vitest/pull/4265), [#4442](https://github.com/vitest-dev/vitest/pull/4442) [​](#changes-to-coverage-4265-4442)

Option `coverage.all` is now enabled by default. This means that all project files matching `coverage.include` pattern will be processed even if they are not executed.

Coverage thresholds API's shape was changed, and it now supports specifying thresholds for specific files using glob patterns:

diff

    export default defineConfig({
      test: {
        coverage: {
    -      perFile: true,
    -      thresholdAutoUpdate: true,
    -      100: true,
    -      lines: 100,
    -      functions: 100,
    -      branches: 100,
    -      statements: 100,
    +      thresholds: {
    +        perFile: true,
    +        autoUpdate: true,
    +        100: true,
    +        lines: 100,
    +        functions: 100,
    +        branches: 100,
    +        statements: 100,
    +      }
        }
      }
    })

### Mock Types [#4400](https://github.com/vitest-dev/vitest/pull/4400) [​](#mock-types-4400)

A few types were removed in favor of Jest-style "Mock" naming.

diff

    - import { EnhancedSpy, SpyInstance } from 'vitest'
    + import { MockInstance } from 'vitest'

WARNING

`SpyInstance` is deprecated in favor of `MockInstance` and will be removed in the next major release.

### Timer mocks [#3925](https://github.com/vitest-dev/vitest/pull/3925) [​](#timer-mocks-3925)

`vi.useFakeTimers()` no longer automatically mocks [`process.nextTick`](https://nodejs.org/api/process.html#processnexttickcallback-args). It is still possible to mock `process.nextTick` by explicitly specifying it by using `vi.useFakeTimers({ toFake: ['nextTick'] })`.

However, mocking `process.nextTick` is not possible when using `--pool=forks`. Use a different `--pool` option if you need `process.nextTick` mocking.

Migrating from Jest [​](#jest)
------------------------------

Vitest has been designed with a Jest compatible API, in order to make the migration from Jest as simple as possible. Despite those efforts, you may still run into the following differences:

### Globals as a Default [​](#globals-as-a-default)

Jest has their [globals API](https://jestjs.io/docs/api) enabled by default. Vitest does not. You can either enable globals via [the `globals` configuration setting](/config/#globals) or update your code to use imports from the `vitest` module instead.

If you decide to keep globals disabled, be aware that common libraries like [`testing-library`](https://testing-library.com/) will not run auto DOM [cleanup](https://testing-library.com/docs/svelte-testing-library/api/#cleanup).

### `spy.mockReset` [​](#spy-mockreset)

Jest's [`mockReset`](https://jestjs.io/docs/mock-function-api#mockfnmockreset) replaces the mock implementation with an empty function that returns `undefined`.

Vitest's [`mockReset`](/api/mock#mockreset) resets the mock implementation to its original. That is, resetting a mock created by `vi.fn(impl)` will reset the mock implementation to `impl`.

### Module Mocks [​](#module-mocks)

When mocking a module in Jest, the factory argument's return value is the default export. In Vitest, the factory argument has to return an object with each export explicitly defined. For example, the following `jest.mock` would have to be updated as follows:

ts

    jest.mock('./some-path', () => 'hello') 
    vi.mock('./some-path', () => ({ 
      default: 'hello', 
    })) 

For more details please refer to the [`vi.mock` api section](/api/vi#vi-mock).

### Auto-Mocking Behaviour [​](#auto-mocking-behaviour)

Unlike Jest, mocked modules in `<root>/__mocks__` are not loaded unless `vi.mock()` is called. If you need them to be mocked in every test, like in Jest, you can mock them inside [`setupFiles`](/config/#setupfiles).

### Importing the Original of a Mocked Package [​](#importing-the-original-of-a-mocked-package)

If you are only partially mocking a package, you might have previously used Jest's function `requireActual`. In Vitest, you should replace these calls with `vi.importActual`.

ts

    const { cloneDeep } = jest.requireActual('lodash/cloneDeep') 
    const { cloneDeep } = await vi.importActual('lodash/cloneDeep') 

### Extends mocking to external libraries [​](#extends-mocking-to-external-libraries)

Where Jest does it by default, when mocking a module and wanting this mocking to be extended to other external libraries that use the same module, you should explicitly tell which 3rd-party library you want to be mocked, so the external library would be part of your source code, by using [server.deps.inline](https://vitest.dev/config/#server-deps-inline).

    server.deps.inline: ["lib-name"]

### expect.getState().currentTestName [​](#expect-getstate-currenttestname)

Vitest's `test` names are joined with a `>` symbol to make it easier to distinguish tests from suites, while Jest uses an empty space ().

diff

    - `${describeTitle} ${testTitle}`
    + `${describeTitle} > ${testTitle}`

### Envs [​](#envs)

Just like Jest, Vitest sets `NODE_ENV` to `test`, if it wasn't set before. Vitest also has a counterpart for `JEST_WORKER_ID` called `VITEST_POOL_ID` (always less than or equal to `maxThreads`), so if you rely on it, don't forget to rename it. Vitest also exposes `VITEST_WORKER_ID` which is a unique ID of a running worker - this number is not affected by `maxThreads`, and will increase with each created worker.

### Replace property [​](#replace-property)

If you want to modify the object, you will use [replaceProperty API](https://jestjs.io/docs/jest-object#jestreplacepropertyobject-propertykey-value) in Jest, you can use [`vi.stubEnv`](/api/#vi-stubenv) or [`vi.spyOn`](/api/vi#vi-spyon) to do the same also in Vitest.

### Done Callback [​](#done-callback)

From Vitest v0.10.0, the callback style of declaring tests is deprecated. You can rewrite them to use `async`/`await` functions, or use Promise to mimic the callback style.

js

    it('should work', (done) => {  
    it('should work', () => new Promise(done => { 
      // ...
      done()
    }) 
    })) 

### Hooks [​](#hooks)

`beforeAll`/`beforeEach` hooks may return [teardown function](/api/#setup-and-teardown) in Vitest. Because of that you may need to rewrite your hooks declarations, if they return something other than `undefined` or `null`:

ts

    beforeEach(() => setActivePinia(createTestingPinia())) 
    beforeEach(() => { setActivePinia(createTestingPinia()) }) 

In Jest hooks are called sequentially (one after another). By default, Vitest runs hooks in parallel. To use Jest's behavior, update [`sequence.hooks`](/config/#sequence-hooks) option:

ts

    export default defineConfig({
      test: {
        sequence: { 
          hooks: 'list', 
        } 
      }
    })

### Types [​](#types)

Vitest doesn't have an equivalent to `jest` namespace, so you will need to import types directly from `vitest`:

ts

    let fn: jest.Mock<(name: string) => number> 
    import type { Mock } from 'vitest'
    let fn: Mock<(name: string) => number> 

### Timers [​](#timers)

Vitest doesn't support Jest's legacy timers.

### Timeout [​](#timeout)

If you used `jest.setTimeout`, you would need to migrate to `vi.setConfig`:

ts

    jest.setTimeout(5_000) 
    vi.setConfig({ testTimeout: 5_000 }) 

### Vue Snapshots [​](#vue-snapshots)

This is not a Jest-specific feature, but if you previously were using Jest with vue-cli preset, you will need to install [`jest-serializer-vue`](https://github.com/eddyerburgh/jest-serializer-vue) package, and use it inside [setupFiles](/config/#setupfiles):

vite.config.jstests/unit/setup.js

js

    import { defineConfig } from 'vite'
    
    export default defineConfig({
      test: {
        setupFiles: ['./tests/unit/setup.js']
      }
    })

js

    import vueSnapshotSerializer from 'jest-serializer-vue'
    
    expect.addSnapshotSerializer(vueSnapshotSerializer)

Otherwise your snapshots will have a lot of escaped `"` characters.

Profiling Test Performance [​](#profiling-test-performance)
===========================================================

When you run Vitest it reports multiple time metrics of your tests:

> bash
> 
>     RUN  v2.1.1 /x/vitest/examples/profiling
>     
>     ✓ test/prime-number.test.ts (1) 4517ms
>       ✓ generate prime number 4517ms
>     
>     Test Files  1 passed (1)
>          Tests  1 passed (1)
>       Start at  09:32:53
>       Duration  4.80s (transform 44ms, setup 0ms, collect 35ms, tests 4.52s, environment 0ms, prepare 81ms)
>       # Time metrics ^^

*   Transform: How much time was spent transforming the files. See [File Transform](#file-transform).
*   Setup: Time spent for running the [`setupFiles`](/config/#setupfiles) files.
*   Collect: Time spent for collecting all tests in the test files. This includes the time it took to import all file dependencies.
*   Tests: Time spent for actually running the test cases.
*   Environment: Time spent for setting up the test [`environment`](/config/#environment), for example JSDOM.
*   Prepare: Time Vitest uses to prepare the test runner.

Test runner [​](#test-runner)
-----------------------------

In cases where your test execution time is high, you can generate a profile of the test runner. See NodeJS documentation for following options:

*   [`--cpu-prof`](https://nodejs.org/api/cli.html#--cpu-prof)
*   [`--heap-prof`](https://nodejs.org/api/cli.html#--heap-prof)
*   [`--prof`](https://nodejs.org/api/cli.html#--prof)

WARNING

The `--prof` option does not work with `pool: 'threads'` due to `node:worker_threads` limitations.

To pass these options to Vitest's test runner, define `poolOptions.<pool>.execArgv` in your Vitest configuration:

ForksThreads

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        pool: 'forks',
        poolOptions: {
          forks: {
            execArgv: [
              '--cpu-prof',
              '--cpu-prof-dir=test-runner-profile',
              '--heap-prof',
              '--heap-prof-dir=test-runner-profile'
            ],
    
            // To generate a single profile
            singleFork: true,
          },
        },
      },
    })

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        pool: 'threads',
        poolOptions: {
          threads: {
            execArgv: [
              '--cpu-prof',
              '--cpu-prof-dir=test-runner-profile',
              '--heap-prof',
              '--heap-prof-dir=test-runner-profile'
            ],
    
            // To generate a single profile
            singleThread: true,
          },
        },
      },
    })

After the tests have run there should be a `test-runner-profile/*.cpuprofile` and `test-runner-profile/*.heapprofile` files generated. See [Inspecting profiling records](#inspecting-profiling-records) for instructions how to analyze these files.

See [Profiling | Examples](https://github.com/vitest-dev/vitest/tree/main/examples/profiling) for example.

Main thread [​](#main-thread)
-----------------------------

Profiling main thread is useful for debugging Vitest's Vite usage and [`globalSetup`](/config/#globalsetup) files. This is also where your Vite plugins are running.

TIP

See [Performance | Vite](https://vitejs.dev/guide/performance.html) for more tips about Vite specific profiling.

We recommend [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect) for profiling your Vite plugin performance.

To do this you'll need to pass arguments to the Node process that runs Vitest.

bash

    $ node --cpu-prof --cpu-prof-dir=main-profile ./node_modules/vitest/vitest.mjs --run
    #      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                  ^^^^^
    #               NodeJS arguments                                           Vitest arguments

After the tests have run there should be a `main-profile/*.cpuprofile` file generated. See [Inspecting profiling records](#inspecting-profiling-records) for instructions how to analyze these files.

File transform [​](#file-transform)
-----------------------------------

In cases where your test transform and collection time is high, you can use `DEBUG=vite-node:*` environment variable to see which files are being transformed and executed by `vite-node`.

bash

    $ DEBUG=vite-node:* vitest --run
    
     RUN  v2.1.1 /x/vitest/examples/profiling
    
      vite-node:server:request /x/vitest/examples/profiling/global-setup.ts +0ms
      vite-node:client:execute /x/vitest/examples/profiling/global-setup.ts +0ms
      vite-node:server:request /x/vitest/examples/profiling/test/prime-number.test.ts +45ms
      vite-node:client:execute /x/vitest/examples/profiling/test/prime-number.test.ts +26ms
      vite-node:server:request /src/prime-number.ts +9ms
      vite-node:client:execute /x/vitest/examples/profiling/src/prime-number.ts +9ms
      vite-node:server:request /src/unnecessary-file.ts +6ms
      vite-node:client:execute /x/vitest/examples/profiling/src/unnecessary-file.ts +4ms
    ...

This profiling strategy is a good way to identify unnecessary transforms caused by [barrel files](https://vitejs.dev/guide/performance.html#avoid-barrel-files). If these logs contain files that should not be loaded when your test is run, you might have barrel files that are importing files unnecessarily.

You can also use [Vitest UI](/guide/ui) to debug slowness caused by barrel file. The example below shows how importing files without barrel file reduces amount of transformed files by ~85%.

File treeexample.test.ts

    ├── src
    │   └── utils
    │       ├── currency.ts
    │       ├── formatters.ts  <-- File to test
    │       ├── index.ts
    │       ├── location.ts
    │       ├── math.ts
    │       ├── time.ts
    │       └── users.ts
    ├── test
    │   └── formatters.test.ts
    └── vitest.config.ts

ts

    import { expect, test } from 'vitest'
    import { formatter } from '../src/utils'
    import { formatter } from '../src/utils/formatters'
    
    test('formatter works', () => {
      expect(formatter).not.toThrow()
    })

To see how files are transformed, you can use `VITE_NODE_DEBUG_DUMP` environment variable to write transformed files in the file system:

bash

    $ VITE_NODE_DEBUG_DUMP=true vitest --run
    
    [vite-node] [debug] dump modules to /x/examples/profiling/.vite-node/dump
    
     RUN  v2.1.1 /x/vitest/examples/profiling
    ...
    
    $ ls .vite-node/dump/
    _x_examples_profiling_global-setup_ts-1292904907.js
    _x_examples_profiling_test_prime-number_test_ts-1413378098.js
    _src_prime-number_ts-525172412.js

Code coverage [​](#code-coverage)
---------------------------------

If code coverage generation is slow on your project you can use `DEBUG=vitest:coverage` environment variable to enable performance logging.

bash

    $ DEBUG=vitest:coverage vitest --run --coverage
    
     RUN  v3.1.1 /x/vitest-example
    
      vitest:coverage Reading coverage results 2/2
      vitest:coverage Converting 1/2
      vitest:coverage 4 ms /x/src/multiply.ts
      vitest:coverage Converting 2/2
      vitest:coverage 552 ms /x/src/add.ts
      vitest:coverage Uncovered files 1/2
      vitest:coverage File "/x/src/large-file.ts" is taking longer than 3s
      vitest:coverage 3027 ms /x/src/large-file.ts
      vitest:coverage Uncovered files 2/2
      vitest:coverage 4 ms /x/src/untested-file.ts
      vitest:coverage Generate coverage total time 3521 ms

This profiling approach is great for detecting large files that are accidentally picked by coverage providers. For example if your configuration is accidentally including large built minified Javascript files in code coverage, they should appear in logs. In these cases you might want to adjust your [`coverage.include`](/config/#coverage-include) and [`coverage.exclude`](/config/#coverage-exclude) options.

Inspecting profiling records [​](#inspecting-profiling-records)
---------------------------------------------------------------

You can inspect the contents of `*.cpuprofile` and `*.heapprofile` with various tools. See list below for examples.

*   [Speedscope](https://www.speedscope.app/)
*   [Performance Profiling JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/profiling#_analyzing-a-profile)
*   [Profile Node.js performance with the Performance panel | developer.chrome.com](https://developer.chrome.com/docs/devtools/performance/nodejs#analyze)
*   [Memory panel overview | developer.chrome.com](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#view_snapshots)

Improving Performance [​](#improving-performance)
=================================================

Test isolation [​](#test-isolation)
-----------------------------------

By default Vitest runs every test file in an isolated environment based on the [pool](/config/#pool):

*   `threads` pool runs every test file in a separate [`Worker`](https://nodejs.org/api/worker_threads.html#class-worker)
*   `forks` pool runs every test file in a separate [forked child process](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
*   `vmThreads` pool runs every test file in a separate [VM context](https://nodejs.org/api/vm.html#vmcreatecontextcontextobject-options), but it uses workers for parallelism

This greatly increases test times, which might not be desirable for projects that don't rely on side effects and properly cleanup their state (which is usually true for projects with `node` environment). In this case disabling isolation will improve the speed of your tests. To do that, you can provide `--no-isolate` flag to the CLI or set [`test.isolate`](/config/#isolate) property in the config to `false`.

CLIvitest.config.js

bash

    vitest --no-isolate

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        isolate: false,
        // you can also disable isolation only for specific pools
        poolOptions: {
          forks: {
            isolate: false,
          },
        },
      },
    })

TIP

If you are using `vmThreads` pool, you cannot disable isolation. Use `threads` pool instead to improve your tests performance.

For some projects, it might also be desirable to disable parallelism to improve startup time. To do that, provide `--no-file-parallelism` flag to the CLI or set [`test.fileParallelism`](/config/#fileparallelism) property in the config to `false`.

CLIvitest.config.js

bash

    vitest --no-file-parallelism

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        fileParallelism: false,
      },
    })

Pool [​](#pool)
---------------

By default Vitest runs tests in `pool: 'forks'`. While `'forks'` pool is better for compatibility issues ([hanging process](/guide/common-errors#failed-to-terminate-worker) and [segfaults](/guide/common-errors#segfaults-and-native-code-errors)), it may be slightly slower than `pool: 'threads'` in larger projects.

You can try to improve test run time by switching `pool` option in configuration:

CLIvitest.config.js

bash

    vitest --pool=threads

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        pool: 'threads',
      },
    })

Sharding [​](#sharding)
-----------------------

Test sharding means running a small subset of test cases at a time. It can be useful when you have multiple machines that could be used to run tests simultaneously.

To split Vitest tests on multiple different runs, use [`--shard`](/guide/cli#shard) option with [`--reporter=blob`](/guide/reporters#blob-reporter) option:

sh

    vitest run --reporter=blob --shard=1/3 # 1st machine
    vitest run --reporter=blob --shard=2/3 # 2nd machine
    vitest run --reporter=blob --shard=3/3 # 3rd machine

Collect the results stored in `.vitest-reports` directory from each machine and merge them with [`--merge-reports`](/guide/cli#merge-reports) option:

sh

    vitest run --merge-reports

Github action example

This setup is also used at [https://github.com/vitest-tests/test-sharding](https://github.com/vitest-tests/test-sharding).

yaml

    # Inspired from https://playwright.dev/docs/test-sharding
    name: Tests
    on:
      push:
        branches:
          - main
    jobs:
      tests:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            shardIndex: [1, 2, 3, 4]
            shardTotal: [4]
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
            with:
              node-version: 20
    
          - name: Install pnpm
            uses: pnpm/action-setup@a7487c7e89a18df4991f7f222e4898a00d66ddda # v4.1.0
    
          - name: Install dependencies
            run: pnpm i
    
          - name: Run tests
            run: pnpm run test --reporter=blob --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}
    
          - name: Upload blob report to GitHub Actions Artifacts
            if: ${{ !cancelled() }}
            uses: actions/upload-artifact@v4
            with:
              name: blob-report-${{ matrix.shardIndex }}
              path: .vitest-reports/*
              include-hidden-files: true
              retention-days: 1
    
      merge-reports:
        if: ${{ !cancelled() }}
        needs: [tests]
    
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - uses: actions/setup-node@v4
            with:
              node-version: 20
    
          - name: Install pnpm
            uses: pnpm/action-setup@a7487c7e89a18df4991f7f222e4898a00d66ddda # v4.1.0
    
          - name: Install dependencies
            run: pnpm i
    
          - name: Download blob reports from GitHub Actions Artifacts
            uses: actions/download-artifact@v4
            with:
              path: .vitest-reports
              pattern: blob-report-*
              merge-multiple: true
    
          - name: Merge reports
            run: npx vitest --merge-reports

TIP

Test sharding can also become useful on high CPU-count machines.

Vitest will run only a single Vite server in its main thread. Rest of the threads are used to run test files. In a high CPU-count machine the main thread can become a bottleneck as it cannot handle all the requests coming from the threads. For example in 32 CPU machine the main thread is responsible to handle load coming from 31 test threads.

To reduce the load from main thread's Vite server you can use test sharding. The load can be balanced on multiple Vite server.

sh

    # Example for splitting tests on 32 CPU to 4 shards.
    # As each process needs 1 main thread, there's 7 threads for test runners (1+7)*4 = 32
    # Use VITEST_MAX_THREADS or VITEST_MAX_FORKS depending on the pool:
    VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=1/4 & \
    VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=2/4 & \
    VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=3/4 & \
    VITEST_MAX_THREADS=7 vitest run --reporter=blob --shard=4/4 & \
    wait # https://man7.org/linux/man-pages/man2/waitpid.2.html
    
    vitest run --merge-reports

Browser Mode Experimental [​](#browser-mode)
============================================

This page provides information about the experimental browser mode feature in the Vitest API, which allows you to run your tests in the browser natively, providing access to browser globals like window and document. This feature is currently under development, and APIs may change in the future.

TIP

If you are looking for documentation for `expect`, `vi` or any general API like test projects or type testing, refer to the ["Getting Started" guide](/guide/).

Installation [​](#installation)
-------------------------------

For easier setup, you can use `vitest init browser` command to install required dependencies and create browser configuration.

npmyarnpnpmbun

bash

    npx vitest init browser

bash

    yarn exec vitest init browser

bash

    pnpx vitest init browser

bash

    bunx vitest init browser

### Manual Installation [​](#manual-installation)

You can also install packages manually. By default, Browser Mode doesn't require any additional E2E provider to run tests locally because it reuses your existing browser.

npmyarnpnpmbun

bash

    npm install -D vitest @vitest/browser

bash

    yarn add -D vitest @vitest/browser

bash

    pnpm add -D vitest @vitest/browser

bash

    bun add -D vitest @vitest/browser

WARNING

However, to run tests in CI you need to install either [`playwright`](https://npmjs.com/package/playwright) or [`webdriverio`](https://www.npmjs.com/package/webdriverio). We also recommend switching to either one of them for testing locally instead of using the default `preview` provider since it relies on simulating events instead of using Chrome DevTools Protocol.

If you don't already use one of these tools, we recommend starting with Playwright because it supports parallel execution, which makes your tests run faster. Additionally, Playwright uses [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) which is generally faster than WebDriver.

PlaywrightWebdriverIO

[Playwright](https://npmjs.com/package/playwright) is a framework for Web Testing and Automation.

npmyarnpnpmbun

bash

    npm install -D vitest @vitest/browser playwright

bash

    yarn add -D vitest @vitest/browser playwright

bash

    pnpm add -D vitest @vitest/browser playwright

bash

    bun add -D vitest @vitest/browser playwright

Configuration [​](#configuration)
---------------------------------

To activate browser mode in your Vitest configuration, you can use the `--browser=name` flag or set the `browser.enabled` field to `true` in your Vitest configuration file. Here is an example configuration using the browser field:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    export default defineConfig({
      test: {
        browser: {
          provider: 'playwright', // or 'webdriverio'
          enabled: true,
          // at least one instance is required
          instances: [
            { browser: 'chromium' },
          ],
        },
      }
    })

INFO

Vitest assigns port `63315` to avoid conflicts with the development server, allowing you to run both in parallel. You can change that with the [`browser.api`](/config/#browser-api) option.

Since Vitest 2.1.5, the CLI no longer prints the Vite URL automatically. You can press "b" to print the URL when running in watch mode.

If you have not used Vite before, make sure you have your framework's plugin installed and specified in the config. Some frameworks might require extra configuration to work - check their Vite related documentation to be sure.

reactvuesveltesolidmarko

ts

    import { defineConfig } from 'vitest/config'
    import react from '@vitejs/plugin-react'
    
    export default defineConfig({
      plugins: [react()],
      test: {
        browser: {
          enabled: true,
          provider: 'playwright',
          instances: [
            { browser: 'chromium' },
          ],
        }
      }
    })

ts

    import { defineConfig } from 'vitest/config'
    import vue from '@vitejs/plugin-vue'
    
    export default defineConfig({
      plugins: [vue()],
      test: {
        browser: {
          enabled: true,
          provider: 'playwright',
          instances: [
            { browser: 'chromium' },
          ],
        }
      }
    })

ts

    import { defineConfig } from 'vitest/config'
    import { svelte } from '@sveltejs/vite-plugin-svelte'
    
    export default defineConfig({
      plugins: [svelte()],
      test: {
        browser: {
          enabled: true,
          provider: 'playwright',
          instances: [
            { browser: 'chromium' },
          ],
        }
      }
    })

ts

    import { defineConfig } from 'vitest/config'
    import solidPlugin from 'vite-plugin-solid'
    
    export default defineConfig({
      plugins: [solidPlugin()],
      test: {
        browser: {
          enabled: true,
          provider: 'playwright',
          instances: [
            { browser: 'chromium' },
          ],
        }
      }
    })

ts

    import { defineConfig } from 'vitest/config'
    import marko from '@marko/vite'
    
    export default defineConfig({
      plugins: [marko()],
      test: {
        browser: {
          enabled: true,
          provider: 'playwright',
          instances: [
            { browser: 'chromium' },
          ],
        }
      }
    })

If you need to run some tests using Node-based runner, you can define a [`projects`](/guide/projects) option with separate configurations for different testing strategies:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    
    export default defineConfig({
      test: {
        projects: [
          {
            test: {
              // an example of file based convention,
              // you don't have to follow it
              include: [
                'tests/unit/**/*.{test,spec}.ts',
                'tests/**/*.unit.{test,spec}.ts',
              ],
              name: 'unit',
              environment: 'node',
            },
          },
          {
            test: {
              // an example of file based convention,
              // you don't have to follow it
              include: [
                'tests/browser/**/*.{test,spec}.ts',
                'tests/**/*.browser.{test,spec}.ts',
              ],
              name: 'browser',
              browser: {
                enabled: true,
                instances: [
                  { browser: 'chromium' },
                ],
              },
            },
          },
        ],
      },
    })

Browser Option Types [​](#browser-option-types)
-----------------------------------------------

The browser option in Vitest depends on the provider. Vitest will fail, if you pass `--browser` and don't specify its name in the config file. Available options:

*   `webdriverio` supports these browsers:
    *   `firefox`
    *   `chrome`
    *   `edge`
    *   `safari`
*   `playwright` supports these browsers:
    *   `firefox`
    *   `webkit`
    *   `chromium`

TypeScript [​](#typescript)
---------------------------

By default, TypeScript doesn't recognize providers options and extra `expect` properties. If you don't use any providers, make sure the `@vitest/browser/matchers` is referenced somewhere in your tests, [setup file](/config/#setupfiles) or a [config file](/config/) to pick up the extra `expect` definitions. If you are using custom providers, make sure to add `@vitest/browser/providers/playwright` or `@vitest/browser/providers/webdriverio` to the same file so TypeScript can pick up definitions for custom options:

defaultplaywrightwebdriverio

ts

    /// <reference types="@vitest/browser/matchers" />

ts

    /// <reference types="@vitest/browser/providers/playwright" />

ts

    /// <reference types="@vitest/browser/providers/webdriverio" />

Alternatively, you can also add them to `compilerOptions.types` field in your `tsconfig.json` file. Note that specifying anything in this field will disable [auto loading](https://www.typescriptlang.org/tsconfig/#types) of `@types/*` packages.

defaultplaywrightwebdriverio

json

    {
      "compilerOptions": {
        "types": ["@vitest/browser/matchers"]
      }
    }

json

    {
      "compilerOptions": {
        "types": ["@vitest/browser/providers/playwright"]
      }
    }

json

    {
      "compilerOptions": {
        "types": ["@vitest/browser/providers/webdriverio"]
      }
    }

Browser Compatibility [​](#browser-compatibility)
-------------------------------------------------

Vitest uses [Vite dev server](https://vitejs.dev/guide/#browser-support) to run your tests, so we only support features specified in the [`esbuild.target`](https://vitejs.dev/config/shared-options.html#esbuild) option (`esnext` by default).

By default, Vite targets browsers which support the native [ES Modules](https://caniuse.com/es6-module), native [ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). On top of that, we utilize [`BroadcastChannel`](https://caniuse.com/?search=BroadcastChannel) to communicate between iframes:

*   Chrome >=87
*   Firefox >=78
*   Safari >=15.4
*   Edge >=88

Running Tests [​](#running-tests)
---------------------------------

When you specify a browser name in the browser option, Vitest will try to run the specified browser using `preview` by default, and then run the tests there. If you don't want to use `preview`, you can configure the custom browser provider by using `browser.provider` option.

To specify a browser using the CLI, use the `--browser` flag followed by the browser name, like this:

sh

    npx vitest --browser=chrome

Or you can provide browser options to CLI with dot notation:

sh

    npx vitest --browser.headless

By default, Vitest will automatically open the browser UI for development. Your tests will run inside an iframe in the center. You can configure the viewport by selecting the preferred dimensions, calling `page.viewport` inside the test, or setting default values in [the config](/config/#browser-viewport).

Headless [​](#headless)
-----------------------

Headless mode is another option available in the browser mode. In headless mode, the browser runs in the background without a user interface, which makes it useful for running automated tests. The headless option in Vitest can be set to a boolean value to enable or disable headless mode.

When using headless mode, Vitest won't open the UI automatically. If you want to continue using the UI but have tests run headlessly, you can install the [`@vitest/ui`](/guide/ui) package and pass the `--ui` flag when running Vitest.

Here's an example configuration enabling headless mode:

vitest.config.ts

ts

    import { defineConfig } from 'vitest/config'
    export default defineConfig({
      test: {
        browser: {
          provider: 'playwright',
          enabled: true,
          headless: true,
        },
      }
    })

You can also set headless mode using the `--browser.headless` flag in the CLI, like this:

sh

    npx vitest --browser.headless

In this case, Vitest will run in headless mode using the Chrome browser.

WARNING

Headless mode is not available by default. You need to use either [`playwright`](https://npmjs.com/package/playwright) or [`webdriverio`](https://www.npmjs.com/package/webdriverio) providers to enable this feature.

Examples [​](#examples)
-----------------------

By default, you don't need any external packages to work with the Browser Mode:

example.test.js

js

    import { expect, test } from 'vitest'
    import { page } from '@vitest/browser/context'
    import { render } from './my-render-function.js'
    
    test('properly handles form inputs', async () => {
      render() // mount DOM elements
    
      // Asserts initial state.
      await expect.element(page.getByText('Hi, my name is Alice')).toBeInTheDocument()
    
      // Get the input DOM node by querying the associated label.
      const usernameInput = page.getByLabelText(/username/i)
    
      // Type the name into the input. This already validates that the input
      // is filled correctly, no need to check the value manually.
      await usernameInput.fill('Bob')
    
      await expect.element(page.getByText('Hi, my name is Bob')).toBeInTheDocument()
    })

However, Vitest also provides packages to render components for several popular frameworks out of the box:

*   [`vitest-browser-vue`](https://github.com/vitest-dev/vitest-browser-vue) to render [vue](https://vuejs.org) components
*   [`vitest-browser-svelte`](https://github.com/vitest-dev/vitest-browser-svelte) to render [svelte](https://svelte.dev) components
*   [`vitest-browser-react`](https://github.com/vitest-dev/vitest-browser-react) to render [react](https://react.dev) components

Community packages are available for other frameworks:

*   [`vitest-browser-lit`](https://github.com/EskiMojo14/vitest-browser-lit) to render [lit](https://lit.dev) components

If your framework is not represented, feel free to create your own package - it is a simple wrapper around the framework renderer and `page.elementLocator` API. We will add a link to it on this page. Make sure it has a name starting with `vitest-browser-`.

Besides rendering components and locating elements, you will also need to make assertions. Vitest forks the [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) library to provide a wide range of DOM assertions out of the box. Read more at the [Assertions API](/guide/browser/assertion-api).

ts

    import { expect } from 'vitest'
    import { page } from '@vitest/browser/context'
    // element is rendered correctly
    await expect.element(page.getByText('Hello World')).toBeInTheDocument()

Vitest exposes a [Context API](/guide/browser/context) with a small set of utilities that might be useful to you in tests. For example, if you need to make an interaction, like clicking an element or typing text into an input, you can use `userEvent` from `@vitest/browser/context`. Read more at the [Interactivity API](/guide/browser/interactivity-api).

ts

    import { page, userEvent } from '@vitest/browser/context'
    await userEvent.fill(page.getByLabelText(/username/i), 'Alice')
    // or just locator.fill
    await page.getByLabelText(/username/i).fill('Alice')

vuesveltereactlit

ts

    import { render } from 'vitest-browser-vue'
    import Component from './Component.vue'
    
    test('properly handles v-model', async () => {
      const screen = render(Component)
    
      // Asserts initial state.
      await expect.element(screen.getByText('Hi, my name is Alice')).toBeInTheDocument()
    
      // Get the input DOM node by querying the associated label.
      const usernameInput = screen.getByLabelText(/username/i)
    
      // Type the name into the input. This already validates that the input
      // is filled correctly, no need to check the value manually.
      await usernameInput.fill('Bob')
    
      await expect.element(screen.getByText('Hi, my name is Bob')).toBeInTheDocument()
    })

ts

    import { render } from 'vitest-browser-svelte'
    import { expect, test } from 'vitest'
    
    import Greeter from './greeter.svelte'
    
    test('greeting appears on click', async () => {
      const screen = render(Greeter, { name: 'World' })
    
      const button = screen.getByRole('button')
      await button.click()
      const greeting = screen.getByText(/hello world/iu)
    
      await expect.element(greeting).toBeInTheDocument()
    })

tsx

    import { render } from 'vitest-browser-react'
    import Fetch from './fetch'
    
    test('loads and displays greeting', async () => {
      // Render a React element into the DOM
      const screen = render(<Fetch url="/greeting" />)
    
      await screen.getByText('Load Greeting').click()
      // wait before throwing an error if it cannot find an element
      const heading = screen.getByRole('heading')
    
      // assert that the alert message is correct
      await expect.element(heading).toHaveTextContent('hello there')
      await expect.element(screen.getByRole('button')).toBeDisabled()
    })

ts

    import { render } from 'vitest-browser-lit'
    import { html } from 'lit'
    import './greeter-button'
    
    test('greeting appears on click', async () => {
      const screen = render(html`<greeter-button name="World"></greeter-button>`)
    
      const button = screen.getByRole('button')
      await button.click()
      const greeting = screen.getByText(/hello world/iu)
    
      await expect.element(greeting).toBeInTheDocument()
    })

Vitest doesn't support all frameworks out of the box, but you can use external tools to run tests with these frameworks. We also encourage the community to create their own `vitest-browser` wrappers - if you have one, feel free to add it to the examples above.

For unsupported frameworks, we recommend using `testing-library` packages:

*   [`@testing-library/preact`](https://testing-library.com/docs/preact-testing-library/intro) to render [preact](https://preactjs.com) components
*   [`@solidjs/testing-library`](https://testing-library.com/docs/solid-testing-library/intro) to render [solid](https://www.solidjs.com) components
*   [`@marko/testing-library`](https://testing-library.com/docs/marko-testing-library/intro) to render [marko](https://markojs.com) components

You can also see more examples in [`browser-examples`](https://github.com/vitest-tests/browser-examples) repository.

WARNING

`testing-library` provides a package `@testing-library/user-event`. We do not recommend using it directly because it simulates events instead of actually triggering them - instead, use [`userEvent`](/guide/browser/interactivity-api) imported from `@vitest/browser/context` that uses Chrome DevTools Protocol or Webdriver (depending on the provider) under the hood.

preactsolidmarko

tsx

    // based on @testing-library/preact example
    // https://testing-library.com/docs/preact-testing-library/example
    
    import { h } from 'preact'
    import { page } from '@vitest/browser/context'
    import { render } from '@testing-library/preact'
    
    import HiddenMessage from '../hidden-message'
    
    test('shows the children when the checkbox is checked', async () => {
      const testMessage = 'Test Message'
    
      const { baseElement } = render(
        <HiddenMessage>{testMessage}</HiddenMessage>,
      )
    
      const screen = page.elementLocator(baseElement)
    
      // .query() will return the element or null if it cannot be found.
      // .element() will return the element or throw an error if it cannot be found.
      expect(screen.getByText(testMessage).query()).not.toBeInTheDocument()
    
      // The queries can accept a regex to make your selectors more
      // resilient to content tweaks and changes.
      await screen.getByLabelText(/show/i).click()
    
      await expect.element(screen.getByText(testMessage)).toBeInTheDocument()
    })

tsx

    // based on @testing-library/solid API
    // https://testing-library.com/docs/solid-testing-library/api
    
    import { render } from '@testing-library/solid'
    
    it('uses params', async () => {
      const App = () => (
        <>
          <Route
            path="/ids/:id"
            component={() => (
              <p>
                Id:
                {useParams()?.id}
              </p>
            )}
          />
          <Route path="/" component={() => <p>Start</p>} />
        </>
      )
      const { baseElement } = render(() => <App />, { location: 'ids/1234' })
      const screen = page.elementLocator(baseElement)
    
      await expect.screen(screen.getByText('Id: 1234')).toBeInTheDocument()
    })

ts

    // based on @testing-library/marko API
    // https://testing-library.com/docs/marko-testing-library/api
    
    import { render, screen } from '@marko/testing-library'
    import Greeting from './greeting.marko'
    
    test('renders a message', async () => {
      const { baseElement } = await render(Greeting, { name: 'Marko' })
      const screen = page.elementLocator(baseElement)
      await expect.element(screen.getByText(/Marko/)).toBeInTheDocument()
      expect(container.firstChild).toMatchInlineSnapshot(`
        <h1>Hello, Marko!</h1>
      `)
    })

Limitations [​](#limitations)
-----------------------------

### Thread Blocking Dialogs [​](#thread-blocking-dialogs)

When using Vitest Browser, it's important to note that thread blocking dialogs like `alert` or `confirm` cannot be used natively. This is because they block the web page, which means Vitest cannot continue communicating with the page, causing the execution to hang.

In such situations, Vitest provides default mocks with default returned values for these APIs. This ensures that if the user accidentally uses synchronous popup web APIs, the execution would not hang. However, it's still recommended for the user to mock these web APIs for better experience. Read more in [Mocking](/guide/mocking).

Getting Started [​](#getting-started)
=====================================

WARNING

This guide lists advanced APIs to run tests via a Node.js script. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.

You can import any method from the `vitest/node` entry-point.

startVitest [​](#startvitest)
-----------------------------

ts

    function startVitest(
      mode: VitestRunMode,
      cliFilters: string[] = [],
      options: CliOptions = {},
      viteOverrides?: ViteUserConfig,
      vitestOptions?: VitestOptions,
    ): Promise<Vitest>

You can start running Vitest tests using its Node API:

js

    import { startVitest } from 'vitest/node'
    
    const vitest = await startVitest('test')
    
    await vitest.close()

`startVitest` function returns [`Vitest`](/advanced/api/vitest) instance if tests can be started.

If watch mode is not enabled, Vitest will call `close` method automatically.

If watch mode is enabled and the terminal supports TTY, Vitest will register console shortcuts.

You can pass down a list of filters as a second argument. Vitest will run only tests that contain at least one of the passed-down strings in their file path.

Additionally, you can use the third argument to pass in CLI arguments, which will override any test config options. Alternatively, you can pass in the complete Vite config as the fourth argument, which will take precedence over any other user-defined options.

After running the tests, you can get the results from the [`state.getTestModules`](/advanced/api/test-module) API:

ts

    import type { TestModule } from 'vitest/node'
    
    const vitest = await startVitest('test')
    
    console.log(vitest.state.getTestModules()) // [TestModule]

TIP

The ["Running Tests"](/advanced/guide/tests#startvitest) guide has a usage example.

createVitest [​](#createvitest)
-------------------------------

ts

    function createVitest(
      mode: VitestRunMode,
      options: CliOptions,
      viteOverrides: ViteUserConfig = {},
      vitestOptions: VitestOptions = {},
    ): Promise<Vitest>

You can create Vitest instance by using `createVitest` function. It returns the same [`Vitest`](/advanced/api/vitest) instance as `startVitest`, but it doesn't start tests and doesn't validate installed packages.

js

    import { createVitest } from 'vitest/node'
    
    const vitest = await createVitest('test', {
      watch: false,
    })

TIP

The ["Running Tests"](/advanced/guide/tests#createvitest) guide has a usage example.

resolveConfig [​](#resolveconfig)
---------------------------------

ts

    function resolveConfig(
      options: UserConfig = {},
      viteOverrides: ViteUserConfig = {},
    ): Promise<{
      vitestConfig: ResolvedConfig
      viteConfig: ResolvedViteConfig
    }>

This method resolves the config with custom parameters. If no parameters are given, the `root` will be `process.cwd()`.

ts

    import { resolveConfig } from 'vitest/node'
    
    // vitestConfig only has resolved "test" properties
    const { vitestConfig, viteConfig } = await resolveConfig({
      mode: 'custom',
      configFile: false,
      resolve: {
        conditions: ['custom']
      },
      test: {
        setupFiles: ['/my-setup-file.js'],
        pool: 'threads',
      },
    })

INFO

Due to how Vite's `createServer` works, Vitest has to resolve the config during the plugin's `configResolve` hook. Therefore, this method is not actually used internally and is exposed exclusively as a public API.

If you pass down the config to the `startVitest` or `createVitest` APIs, Vitest will still resolve the config again.

WARNING

The `resolveConfig` doesn't resolve `projects`. To resolve projects configs, Vitest needs an established Vite server.

Also note that `viteConfig.test` will not be fully resolved. If you need Vitest config, use `vitestConfig` instead.

parseCLI [​](#parsecli)
-----------------------

ts

    function parseCLI(argv: string | string[], config: CliParseOptions = {}): {
      filter: string[]
      options: CliOptions
    }

You can use this method to parse CLI arguments. It accepts a string (where arguments are split by a single space) or a strings array of CLI arguments in the same format that Vitest CLI uses. It returns a filter and `options` that you can later pass down to `createVitest` or `startVitest` methods.

ts

    import { parseCLI } from 'vitest/node'
    
    const result = parseCLI('vitest ./files.ts --coverage --browser=chrome')
    
    result.options
    // {
    //   coverage: { enabled: true },
    //   browser: { name: 'chrome', enabled: true }
    // }
    
    result.filter
    // ['./files.ts']

Comparisons with Other Test Runners [​](#comparisons-with-other-test-runners)
=============================================================================

Jest [​](#jest)
---------------

[Jest](https://jestjs.io/) took over the Testing Framework space by providing out-of-the-box support for most JavaScript projects, a comfortable API (`it` and `expect`), and the full pack of testing features that most setups would require (snapshots, mocks, coverage). We are thankful to the Jest team and community for creating a delightful testing API and pushing forward a lot of the testing patterns that are now a standard in the web ecosystem.

It is possible to use Jest in Vite setups. [@sodatea](https://bsky.app/profile/haoqun.dev) built [vite-jest](https://github.com/sodatea/vite-jest#readme), which aims to provide first-class Vite integration for [Jest](https://jestjs.io/). The last [blockers in Jest](https://github.com/sodatea/vite-jest/blob/main/packages/vite-jest/README.md#vite-jest) have been solved, so this is a valid option for your unit tests.

However, in a world where we have [Vite](https://vitejs.dev) providing support for the most common web tooling (TypeScript, JSX, most popular UI Frameworks), Jest represents a duplication of complexity. If your app is powered by Vite, having two different pipelines to configure and maintain is not justifiable. With Vitest you get to define the configuration for your dev, build and test environments as a single pipeline, sharing the same plugins and the same vite.config.js.

Even if your library is not using Vite (for example, if it is built with esbuild or Rollup), Vitest is an interesting option as it gives you a faster run for your unit tests and a jump in DX thanks to the default watch mode using Vite instant Hot Module Reload (HMR). Vitest offers compatibility with most of the Jest API and ecosystem libraries, so in most projects, it should be a drop-in replacement for Jest.

Cypress [​](#cypress)
---------------------

[Cypress](https://www.cypress.io/) is a browser-based test runner and a complementary tool to Vitest. If you'd like to use Cypress, we suggest using Vitest for all headless logic in your application and Cypress for all browser-based logic.

Cypress is known as an end-to-end testing tool, but their [new component test runner](https://on.cypress.io/component) has great support for testing Vite components and is an ideal choice to test anything that renders in a browser.

Browser-based runners, like Cypress, WebdriverIO and Web Test Runner, will catch issues that Vitest cannot because they use the real browser and real browser APIs.

Cypress's test driver is focused on determining if elements are visible, accessible, and interactive. Cypress is purpose-built for UI development and testing and its DX is centered around test driving your visual components. You see your component rendered alongside the test reporter. Once the test is complete, the component remains interactive and you can debug any failures that occur using your browser devtools.

In contrast, Vitest is focused on delivering the best DX possible for lightning fast, _headless_ testing. Node-based runners like Vitest support various partially-implemented browser environments, like `jsdom`, which implement enough for you to quickly unit test any code that references browser APIs. The tradeoff is that these browser environments have limitations in what they can implement. For example, [jsdom is missing a number of features](https://github.com/jsdom/jsdom/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc) like `window.navigation` or a layout engine (`offsetTop`, etc).

Lastly, in contrast to the Web Test Runner, the Cypress test runner is more like an IDE than a test runner because you also see the real rendered component in the browser, along with its test results and logs.

Cypress has also been [integrating Vite in their products](https://www.youtube.com/watch?v=7S5cbY8iYLk): re-building their App's UI using [Vitesse](https://github.com/antfu/vitesse) and using Vite to test drive their project's development.

We believe that Cypress isn't a good option for unit testing headless code, but that using Cypress (for E2E and Component Testing) and Vitest (for unit tests) would cover your app's testing needs.

WebdriverIO [​](#webdriverio)
-----------------------------

[WebdriverIO](https://webdriver.io/) is, similar to Cypress, a browser-based alternative test runner and a complementary tool to Vitest. It can be used as an end-to-end testing tool as well as for testing [web components](https://webdriver.io/docs/component-testing). It even uses components of Vitest under the hood, e.g. for [mocking and stubbing](https://webdriver.io/docs/mocksandspies/) within component tests.

WebdriverIO comes with the same advantages as Cypress allowing you to test your logic in real browser. However, it uses actual [web standards](https://w3c.github.io/webdriver/) for automation, which overcomes some of the tradeoffs and limitation when running tests in Cypress. Furthermore, it allows you to run tests on mobile as well, giving you access to test your application in even more environments.

Web Test Runner [​](#web-test-runner)
-------------------------------------

[@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) runs tests inside a headless browser, providing the same execution environment as your web application without the need for mocking out browser APIs or the DOM. This also makes it possible to debug inside a real browser using the devtools, although there is no UI shown for stepping through the test, as there is in Cypress tests.

To use @web/test-runner with a Vite project, use [@remcovaes/web-test-runner-vite-plugin](https://github.com/remcovaes/web-test-runner-vite-plugin). @web/test-runner does not include assertion or mocking libraries, so it is up to you to add them.

uvu [​](#uvu)
-------------

[uvu](https://github.com/lukeed/uvu) is a test runner for Node.js and the browser. It runs tests in a single thread, so tests are not isolated and can leak across files. Vitest, however, uses worker threads to isolate tests and run them in parallel.

For transforming your code, uvu relies on require and loader hooks. Vitest uses [Vite](https://vitejs.dev), so files are transformed with the full power of Vite's plugin system. In a world where we have Vite providing support for the most common web tooling (TypeScript, JSX, most popular UI Frameworks), uvu represents a duplication of complexity. If your app is powered by Vite, having two different pipelines to configure and maintain is not justifiable. With Vitest you get to define the configuration for your dev, build and test environments as a single pipeline, sharing the same plugins and the same configuration.

uvu does not provide an intelligent watch mode to rerun the changed tests, while Vitest gives you amazing DX thanks to the default watch mode using Vite instant Hot Module Reload (HMR).

uvu is a fast option for running simple tests, but Vitest can be faster and more reliable for more complex tests and projects.