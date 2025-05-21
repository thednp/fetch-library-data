valibot version: 1.1.0, last updated: 2025-05-21T10:58:23.459Z

[](#installation)Installation
=============================

Valibot is currently available for Node, Bun and Deno. Below you will learn how to add the library to your project.

[](#general)General
-------------------

Except for this guide, the rest of this documentation assumes that you are using npm for the import statements in the code examples.

It should make no difference whether you use individual imports or a wildcard import. Tree shaking and code splitting should work in both cases.

If you are using TypeScript, we recommend that you enable strict mode in your `tsconfig.json` so that all types are calculated correctly.

> The minimum required TypeScript version is v5.0.2.

`{   "compilerOptions": {     "strict": true,     // ...   } }`

[](#from-npm)From npm
---------------------

For Node and Bun, you can add the library to your project with a single command using your favorite package manager.

`npm install valibot     # npm yarn add valibot        # yarn pnpm add valibot        # pnpm bun add valibot         # bun`

Then you can import it into any JavaScript or TypeScript file.

`// With individual imports import { … } from 'valibot';  // With a wildcard import import * as v from 'valibot';`

[](#from-jsr)From JSR
---------------------

For Node, Deno and Bun, you can add the library to your project with a single command using your favorite package manager.

`deno add jsr:@valibot/valibot      # deno npx jsr add @valibot/valibot       # npm yarn dlx jsr add @valibot/valibot  # yarn pnpm dlx jsr add @valibot/valibot  # pnpm bunx jsr add @valibot/valibot      # bun`

Then you can import it into any JavaScript or TypeScript file.

`// With individual imports import { … } from '@valibot/valibot';  // With a wildcard import import * as v from '@valibot/valibot';`

In Deno, you can also directly reference me using `jsr:` specifiers.

`// With individual imports import { … } from 'jsr:@valibot/valibot';  // With a wildcard import import * as v from 'jsr:@valibot/valibot';`

[](#from-deno)From Deno
-----------------------

With Deno, you can reference the library directly through our deno.land/x URL.

`// With individual imports import { … } from 'https://deno.land/x/valibot/mod.ts';  // With a wildcard import import * as v from 'https://deno.land/x/valibot/mod.ts';`

[](#introduction)Introduction
=============================

Hello, I am Valibot and I would like to help you validate data easily using a schema. No matter if it is incoming data on a server, a form or even configuration files. I have no dependencies and can run in any JavaScript environment.

> I highly recommend you read the [announcement post](https://www.builder.io/blog/introducing-valibot), and if you are a nerd like me, the [bachelor's thesis](/thesis.pdf) I am based on.

[](#highlights)Highlights
-------------------------

*   Fully type safe with static type inference
*   Small bundle size starting at less than 700 bytes
*   Validate everything from strings to complex objects
*   Open source and fully tested with 100 % coverage
*   Many transformation and validation actions included
*   Well structured source code without dependencies
*   Minimal, readable and well thought out API

[](#example)Example
-------------------

First you create a schema that describes a structured data set. A schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to guarantee type safety of unknown data.

`import * as v from 'valibot'; // 1.31 kB  // Create login schema with email and password const LoginSchema = v.object({   email: v.pipe(v.string(), v.email()),   password: v.pipe(v.string(), v.minLength(8)), });  // Infer output TypeScript type of login schema as // { email: string; password: string } type LoginData = v.InferOutput<typeof LoginSchema>;  // Throws error for email and password const output1 = v.parse(LoginSchema, { email: '', password: '' });  // Returns data as { email: string; password: string } const output2 = v.parse(LoginSchema, {   email: 'jane@example.com',   password: '12345678', });`

Apart from [`parse`](/api/parse/) I also offer a non-exception-based API with [`safeParse`](/api/safeParse/) and a type guard function with [`is`](/api/is/). You can read more about it [here](/guides/parse-data/).

[](#comparison)Comparison
-------------------------

Instead of relying on a few large functions with many methods, my API design and source code is based on many small and independent functions, each with just a single task. This modular design has several advantages.

For example, this allows a bundler to use the import statements to remove code that is not needed. This way, only the code that is actually used gets into your production build. This can reduce the bundle size by up to 95 % compared to [Zod](https://zod.dev/).

In addition, it allows you to easily extend my functionality with external code and makes my source code more robust and secure because the functionality of the individual functions can be tested much more easily through unit tests.

[](#credits)Credits
-------------------

My friend [Fabian](https://github.com/fabian-hiller) created me as part of his bachelor thesis at [Stuttgart Media University](https://www.hdm-stuttgart.de/en/), supervised by Walter Kriha, [Miško Hevery](https://github.com/mhevery) and [Ryan Carniato](https://github.com/ryansolid). My role models also include [Colin McDonnell](https://github.com/colinhacks), who had a big influence on my API design with [Zod](https://zod.dev/).

[](#feedback)Feedback
---------------------

Find a bug or have an idea how to improve my code? Please fill out an [issue](https://github.com/fabian-hiller/valibot/issues/new). Together we can make the library even better!

[](#license)License
-------------------

I am completely free and licensed under the [MIT license](https://github.com/fabian-hiller/valibot/blob/main/LICENSE.md). But if you like, you can feed me with a star on [GitHub](https://github.com/fabian-hiller/valibot).

[](#installation)Installation
=============================

Valibot is currently available for Node, Bun and Deno. Below you will learn how to add the library to your project.

[](#general)General
-------------------

Except for this guide, the rest of this documentation assumes that you are using npm for the import statements in the code examples.

It should make no difference whether you use individual imports or a wildcard import. Tree shaking and code splitting should work in both cases.

If you are using TypeScript, we recommend that you enable strict mode in your `tsconfig.json` so that all types are calculated correctly.

> The minimum required TypeScript version is v5.0.2.

`{   "compilerOptions": {     "strict": true,     // ...   } }`

[](#from-npm)From npm
---------------------

For Node and Bun, you can add the library to your project with a single command using your favorite package manager.

`npm install valibot     # npm yarn add valibot        # yarn pnpm add valibot        # pnpm bun add valibot         # bun`

Then you can import it into any JavaScript or TypeScript file.

`// With individual imports import { … } from 'valibot';  // With a wildcard import import * as v from 'valibot';`

[](#from-jsr)From JSR
---------------------

For Node, Deno and Bun, you can add the library to your project with a single command using your favorite package manager.

`deno add jsr:@valibot/valibot      # deno npx jsr add @valibot/valibot       # npm yarn dlx jsr add @valibot/valibot  # yarn pnpm dlx jsr add @valibot/valibot  # pnpm bunx jsr add @valibot/valibot      # bun`

Then you can import it into any JavaScript or TypeScript file.

`// With individual imports import { … } from '@valibot/valibot';  // With a wildcard import import * as v from '@valibot/valibot';`

In Deno, you can also directly reference me using `jsr:` specifiers.

`// With individual imports import { … } from 'jsr:@valibot/valibot';  // With a wildcard import import * as v from 'jsr:@valibot/valibot';`

[](#from-deno)From Deno
-----------------------

With Deno, you can reference the library directly through our deno.land/x URL.

`// With individual imports import { … } from 'https://deno.land/x/valibot/mod.ts';  // With a wildcard import import * as v from 'https://deno.land/x/valibot/mod.ts';`

[](#quick-start)Quick start
===========================

A Valibot schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to truly guarantee type safety of unknown data.

[](#basic-concept)Basic concept
-------------------------------

Similar to how types can be defined in TypeScript, Valibot allows you to define a schema with various small functions. This applies to primitive values like strings as well as more complex data sets like objects.

`import * as v from 'valibot';  // TypeScript type LoginData = {   email: string;   password: string; };  // Valibot const LoginSchema = v.object({   email: v.string(),   password: v.string(), });`

[](#pipelines)Pipelines
-----------------------

In addition, pipelines enable you to perform more detailed validations and transformations with the [`pipe`](/api/pipe/) method. Thus, for example, it can be ensured that a string is an email that ends with a certain domain.

`import * as v from 'valibot';  const EmailSchema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));`

A pipeline must always start with a schema, followed by up to 19 validation or transformation actions. They are executed in sequence, and the result of the previous action is passed to the next. More details about pipelines can be found in [this guide](/guides/pipelines/).

[](#error-messages)Error messages
---------------------------------

If an issue is detected during validation, the library emits a specific issue object that includes various details and an error message. This error message can be overridden via the first optional argument of a schema or validation action.

`import * as v from 'valibot';  const LoginSchema = v.object({   email: v.pipe(     v.string('Your email must be a string.'),     v.nonEmpty('Please enter your email.'),     v.email('The email address is badly formatted.')   ),   password: v.pipe(     v.string('Your password must be a string.'),     v.nonEmpty('Please enter your password.'),     v.minLength(8, 'Your password must have 8 characters or more.')   ), });`

Custom error messages allow you to improve the usability of your software by providing specific troubleshooting information and returning error messages in a language other than English. See the [i18n guide](/guides/internationalization/) for more information.

[](#usage)Usage
---------------

Finally, you can use your schema to infer its input and output types and to parse unknown data. This way, your schema is the single source of truth. This concept simplifies your development process and makes your code more robust in the long run.

`import * as v from 'valibot';  const LoginSchema = v.object({…});  type LoginData = v.InferOutput<typeof LoginSchema>;  function getLoginData(data: unknown): LoginData {   return v.parse(LoginSchema, data); }`

[](#use-cases)Use cases
=======================

Next, we would like to point out some use cases for which Valibot is particularly well suited. We welcome [ideas](https://github.com/fabian-hiller/valibot/issues/new) for other use cases that we may not have thought of yet.

[](#server-requests)Server requests
-----------------------------------

Since most API endpoints can be reached via the Internet, basically anyone can send a request and transmit data. It is therefore important to apply zero trust security and to check request data thoroughly before processing it further.

This works particularly well with a schema, compared to if/else conditions, as even complex structures can be easily mapped. In addition, the library automatically type the parsed data according to the schema, which improves type safety and thus makes your code more secure.

[](#form-validation)Form validation
-----------------------------------

A schema can also be used for form validation. Due to Valibot's small bundle size and the possibility to individualize the error messages, the library is particularly well suited for this. Also, fullstack frameworks like Next.js, Remix, and Nuxt allow the same schema to be used for validation in the browser as well as on the server, which reduces your code to the minimum.

[Modular Forms](https://modularforms.dev/react/guides/validate-your-fields#schema-validation), for example, offers validation based on a schema at form and field level. In addition, the form can be made type-safe using the schema, which also enables autocompletion during development. In combination with the right framework, a fully type-safe and progressively enhanced form can be created with few lines of code and a great experience for developers and end-users.

[](#browser-state)Browser state
-------------------------------

The browser state, which is stored using cookies, search parameters or the local storage, can be accidentally or intentionally manipulated by the user. To ensure the functionality of an application, it can help to validate this data before processing. Valibot can be used for this, which also improves type safety.

[](#config-files)Config files
-----------------------------

Library authors can also make use of Valibot, for example, to match configuration files with a schema and, in the event of an error, provide clear indications of the cause and how to fix the problem. The same applies to environment variables to quickly detect configuration errors.

[](#schema-builder)Schema builder
---------------------------------

Our schemas are plain JavaScript objects with a well-defined and fully type-safe structure. This makes Valibot a great choice for defining data structures that can be further processed by third-party code. For example, it is possible to build an ORM with custom metadata actions on top of Valibot to generate database schemas. Another example is our official `toJsonSchema` function, which uses Valibot's object API to output a JSON Schema that can be used for documentation purposes or to generate structured output with LLMs.

[](#data-migration)Data migration
---------------------------------

Valibot can also be used to migrate data from one form to another in a type-safe way. The advantage of a schema library like Valibot is that transformations can be defined for individual properties instead of for the entire dataset. This can make data migrations more readable and maintainable. In addition, the schema can be used to validate the data before the migration, which increases the reliability of the migration process.

[](#comparison)Comparison
=========================

Even though Valibot's API resembles other solutions at first glance, the implementation and structure of the source code is very different. In the following, we would like to highlight the differences that can be beneficial for both you and your users.

[](#modular-design)Modular design
---------------------------------

Instead of relying on a few large functions with many methods, Valibot's API design and source code is based on many small and independent functions, each with just a single task. This modular design has several advantages.

On one hand, the functionality of Valibot can be easily extended with external code. On the other, it makes the source code more robust and secure because the functionality of the individual functions as well as special edge cases can be tested much easier through unit tests.

However, perhaps the biggest advantage is that a bundler can use the static import statements to remove any code that is not needed. Thus, only the code that is actually used ends up in the production build. This allows us to extend the functionality of the library with additional functions without increasing the bundle size for all users.

This can make a big difference, especially for client-side validation, as it reduces the bundle size and, depending on the framework, speeds up the startup time.

`import * as v from 'valibot'; // 1.37 kB  const LoginSchema = v.object({   email: v.pipe(     v.string(),     v.nonEmpty('Please enter your email.'),     v.email('The email address is badly formatted.')   ),   password: v.pipe(     v.string(),     v.nonEmpty('Please enter your password.'),     v.minLength(8, 'Your password must have 8 characters or more.')   ), });`

### [](#comparison-with-zod)Comparison with Zod

For example, to validate a simple login form, [Zod](https://zod.dev/) requires [13.5 kB](https://bundlejs.com/?q=zod&treeshake=%5B%7B+object%2Cstring+%7D%5D) whereas Valibot require only [1.37 kB](https://bundlejs.com/?q=valibot&treeshake=%5B%7B+email%2CminLength%2CnonEmpty%2Cobject%2Cstring%2Cpipe+%7D%5D). That's a 90 % reduction in bundle size. This is due to the fact that Zod's functions have several methods with additional functionalities, that cannot be easily removed by current bundlers when they are not executed in your source code.

`import { object, string } from 'zod'; // 13.5 kB  const LoginSchema = object({   email: string()     .min(1, 'Please enter your email.')     .email('The email address is badly formatted.'),   password: string()     .min(1, 'Please enter your password.')     .min(8, 'Your password must have 8 characters or more.'), });`

[](#performance)Performance
---------------------------

With a schema library, a distinction must be made between startup performance and runtime performance. Startup performance describes the time required to load and initialize the library. This benchmark is mainly influenced by the bundle size and the amount of work required to create a schema. Runtime performance describes the time required to validate unknown data using a schema.

Since Valibot's implementation is optimized to minimize the bundle size and the effort of initialization, there is hardly any library that performs better in a [TTI](https://web.dev/articles/tti) benchmark. In terms of runtime performance, Valibot is in the midfield. Roughly speaking, the library is about twice as fast as [Zod](https://zod.dev/), but much slower than [Typia](https://typia.io/) and [TypeBox](https://github.com/sinclairzx81/typebox), because we don't yet use a compiler that can generate highly optimized runtime code, and our implementation doesn't allow the use of the [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) constructor.

> Further details on performance can be found in the [bachelor's thesis](/thesis.pdf) Valibot is based on.

[](#ecosystem)Ecosystem
=======================

This page is for you if you are looking for frameworks or libraries that support Valibot.

> Use the button at the bottom left of this page to add your project to this ecosystem page. Please make sure to add your project to an appropriate existing category in alphabetical order or create a new category if necessary.

[](#frameworks)Frameworks
-------------------------

*   [NestJS](https://docs.nestjs.com): A progressive Node.js framework for building efficient, reliable and scalable server-side applications
*   [Qwik](https://qwik.dev): A web framework which helps you build instantly-interactive web apps at any scale without effort.

[](#api-libraries)API libraries
-------------------------------

*   [Drizzle ORM](https://orm.drizzle.team/): TypeScript ORM that feels like writing SQL
*   [GQLoom](https://gqloom.dev/): Weave GraphQL schema and resolvers using Valibot
*   [Hono](https://hono.dev/): Ultrafast web framework for the Edges
*   [next-safe-action](https://next-safe-action.dev) Type safe and validated Server Actions for Next.js
*   [oRPC](https://orpc.unnoq.com/): Typesafe APIs Made Simple
*   [tRPC](https://trpc.io/): Move Fast and Break Nothing. End-to-end typesafe APIs made easy

[](#ai-libraries)AI libraries
-----------------------------

*   [AI SDK](https://sdk.vercel.ai/): Build AI-powered applications with React, Svelte, Vue, and Solid

[](#form-libraries)Form libraries
---------------------------------

*   [@rvf/valibot](https://github.com/airjp73/rvf/tree/main/packages/valibot): Valibot schema parser for [RVF](https://rvf-js.io/)
*   [conform](https://conform.guide/): A type-safe form validation library utilizing web fundamentals to progressively enhance HTML Forms with full support for server frameworks like Remix and Next.js.
*   [mantine-form-valibot-resolver](https://github.com/Songkeys/mantine-form-valibot-resolver): Valibot schema resolver for [@mantine/form](https://mantine.dev/form/use-form/)
*   [maz-ui](https://maz-ui.com/composables/use-form-validator): Vue3 flexible and typed composable to manage forms simply with multiple modes and advanced features
*   [Modular Forms](https://modularforms.dev/): Modular and type-safe form library for SolidJS, Qwik, Preact and React
*   [React Hook Form](https://react-hook-form.com/): React Hooks for form state management and validation
*   [Superforms](https://superforms.rocks): A comprehensive SvelteKit form library for server and client validation
*   [TanStack Form](https://tanstack.com/form): Powerful and type-safe form state management for the web
*   [VeeValidate](https://vee-validate.logaretm.com/v4/): Painless Vue.js forms
*   [vue-valibot-form](https://github.com/IlyaSemenov/vue-valibot-form): Minimalistic Vue3 composable for handling form submit

[](#component-libraries)Component libraries
-------------------------------------------

*   [Nuxt UI](https://ui.nuxt.com/): Fully styled and customizable components for Nuxt

[](#valibot-to-x)Valibot to X
-----------------------------

*   [@valibot/to-json-schema](https://github.com/fabian-hiller/valibot/tree/main/packages/to-json-schema): The official JSON schema converter for Valibot
*   [@gcornut/cli-valibot-to-json-schema](https://github.com/gcornut/cli-valibot-to-json-schema): CLI wrapper for @valibot/to-json-schema
*   [Hono OpenAPI](https://github.com/rhinobase/hono-openapi): A plugin for Hono to generate OpenAPI Swagger documentation
*   [TypeMap](https://github.com/sinclairzx81/typemap/): Uniform Syntax, Mapping and Compiler Library for TypeBox, Valibot and Zod
*   [TypeSchema](https://typeschema.com/): Universal adapter for schema validation

[](#x-to-valibot)X to Valibot
-----------------------------

*   [graphql-codegen-typescript-validation-schema](https://github.com/Code-Hex/graphql-codegen-typescript-validation-schema): GraphQL Code Generator plugin to generate form validation schema from your GraphQL schema.
*   [TypeBox-Codegen](https://sinclairzx81.github.io/typebox-workbench/): Code generation for schema libraries
*   [TypeMap](https://github.com/sinclairzx81/typemap/): Uniform Syntax, Mapping and Compiler Library for TypeBox, Valibot and Zod

[](#utilities)Utilities
-----------------------

*   [@camflan/valibot-openapi-generator](https://github.com/camflan/valibot-openapi-generator): Functions to help build OpenAPI documentation using Valibot schemas
*   [@nest-lab/typeschema](https://github.com/jmcdo29/nest-lab/tree/main/packages/typeschema): A ValidationPipe that handles many schema validators in a class-based fashion for NestJS's input validation
*   [@valibot/i18n](https://github.com/fabian-hiller/valibot/tree/main/packages/i18n): The official i18n translations for Valibot
*   [fastify-type-provider-valibot](https://github.com/qlaffont/fastify-type-provider-valibot): Fastify Type Provider with Valibot
*   [valibot-env](https://y-hiraoka.github.io/valibot-env): Environment variables validator with Valibot
*   [valibotx](https://github.com/IlyaSemenov/valibotx): A collection of extensions and shortcuts to core Valibot functions
*   [valiload](https://github.com/JuerGenie/valiload): A simple and lightweight library for overloading functions in TypeScript
*   [valimock](https://github.com/saeris/valimock): Generate mock data using your Valibot schemas using [Faker](https://github.com/faker-js/faker)

[](#mental-model)Mental model
=============================

Valibot's mental model is mainly divided between **schemas**, **methods**, and **actions**. Since each functionality is imported as its own function, it is crucial to understand this concept as it makes working with the modular API design much easier.

> The [API reference](/api/) gives you a great overview of all schemas, methods, and actions. For each one, the corresponding reference page also lists down other related schemas, methods, and actions for better discoverability.

[](#schemas)Schemas
-------------------

Schemas are the starting point for using Valibot. They allow you to validate **a specific data type**, like a string, object, or date. Each schema is independent. They can be reused or even nested to reflect more complex data structures.

`import * as v from 'valibot';  const BookSchema = v.object({   title: v.string(),   numberOfPages: v.number(),   publication: v.date(),   tags: v.array(v.string()), });`

Every schema function returns an accesible object that contains all its properties. However, in most cases you don't need to access them directly. Instead, you use methods that help you modify or use a schema.

[](#methods)Methods
-------------------

Methods help you either **modify or use a schema**. For example, the [`parse`](/api/parse/) method helps you parse unknown data based on a schema. When you use a method, you always pass the schema as the first argument.

`import * as v from 'valibot';  const BookSchema = v.object({…});  function createBook(data: unknown) {   return v.parse(BookSchema, data); }`

> Most methods are used with schemas. However, there are a few exceptions, such as [`forward`](/api/forward/) and [`flatten`](/api/flatten/), which are used with actions or issues.

[](#actions)Actions
-------------------

Actions help you to **further validate or transform** a specific data type. They are used exclusively in conjunction with the [`pipe`](/api/pipe/) method, which extends the functionality of a schema by adding additional validation and transformation rules. For example, the following schema can be used to trim a string and check if it is a valid email address.

`import * as v from 'valibot';  const EmailSchema = v.pipe(v.string(), v.trim(), v.email());`

Actions are very powerful. There are basically no limits to what you can do with them. Besides basic validations and transformations as shown in the example above, they also allow you to modify the output type with actions like [`readonly`](/api/readonly/) and [`brand`](/api/brand/).

[](#schemas)Schemas
===================

Schemas allow you to validate a specific data type. They are similar to type definitions in TypeScript. Besides primitive values like strings and complex values like objects, Valibot also supports special cases like literals, unions and custom types.

[](#primitive-values)Primitive values
-------------------------------------

Valibot supports the creation of schemas for any primitive data type. These are immutable values that are stored directly in the stack, unlike objects where only a reference to the heap is stored.

Primitive schemas:*   [`bigint`](/api/bigint/),
*   [`boolean`](/api/boolean/),
*   [`null`](/api/null/),
*   [`number`](/api/number/),
*   [`string`](/api/string/),
*   [`symbol`](/api/symbol/),
*   [`undefined`](/api/undefined/)

`import * as v from 'valibot';  const BigintSchema = v.bigint(); // bigint const BooleanSchema = v.boolean(); // boolean const NullSchema = v.null(); // null const NumberSchema = v.number(); // number const StringSchema = v.string(); // string const SymbolSchema = v.symbol(); // symbol const UndefinedSchema = v.undefined(); // undefined`

[](#complex-values)Complex values
---------------------------------

Among complex values, Valibot supports objects, records, arrays, tuples, and several other classes.

> There are various methods for objects such as [`pick`](/api/pick/), [`omit`](/api/omit/), [`partial`](/api/partial/) and [`required`](/api/required/). Learn more about them [here](/guides/methods/#object-methods).

Complex schemas:*   [`array`](/api/array/),
*   [`blob`](/api/blob/),
*   [`date`](/api/date/),
*   [`file`](/api/file/),
*   [`function`](/api/function/),
*   [`looseObject`](/api/looseObject/),
*   [`looseTuple`](/api/looseTuple/),
*   [`map`](/api/map/),
*   [`object`](/api/object/),
*   [`objectWithRest`](/api/objectWithRest/),
*   [`promise`](/api/promise/),
*   [`record`](/api/record/),
*   [`set`](/api/set/),
*   [`strictObject`](/api/strictObject/),
*   [`strictTuple`](/api/strictTuple/),
*   [`tuple`](/api/tuple/),
*   [`tupleWithRest`](/api/tupleWithRest/)

`import * as v from 'valibot';  const ArraySchema = v.array(v.string()); // string[] const BlobSchema = v.blob(); // Blob const DateSchema = v.date(); // Date const FileSchema = v.file(); // File const FunctionSchema = v.function(); // (...args: unknown[]) => unknown const LooseObjectSchema = v.looseObject({ key: v.string() }); // { key: string } const LooseTupleSchema = v.looseTuple([v.string(), v.number()]); // [string, number] const MapSchema = v.map(v.string(), v.number()); // Map<string, number> const ObjectSchema = v.object({ key: v.string() }); // { key: string } const ObjectWithRestSchema = v.objectWithRest({ key: v.string() }, v.null()); // { key: string } & { [key: string]: null } const PromiseSchema = v.promise(); // Promise<unknown> const RecordSchema = v.record(v.string(), v.number()); // Record<string, number> const SetSchema = v.set(v.number()); // Set<number> const StrictObjectSchema = v.strictObject({ key: v.string() }); // { key: string } const StrictTupleSchema = v.strictTuple([v.string(), v.number()]); // [string, number] const TupleSchema = v.tuple([v.string(), v.number()]); // [string, number] const TupleWithRestSchema = v.tupleWithRest([v.string(), v.number()], v.null()); // [string, number, ...null[]]`

[](#special-cases)Special cases
-------------------------------

Beyond primitive and complex values, there are also schema functions for more special cases.

Special schemas:*   [`any`](/api/any/),
*   [`custom`](/api/custom/),
*   [`enum`](/api/enum/),
*   [`exactOptional`](/api/exactOptional/),
*   [`instance`](/api/instance/),
*   [`intersect`](/api/intersect/),
*   [`lazy`](/api/lazy/),
*   [`literal`](/api/literal/),
*   [`nan`](/api/nan/),
*   [`never`](/api/never/),
*   [`nonNullable`](/api/nonNullable/),
*   [`nonNullish`](/api/nonNullish/),
*   [`nonOptional`](/api/nonOptional/),
*   [`nullable`](/api/nullable/),
*   [`nullish`](/api/nullish/),
*   [`optional`](/api/optional/),
*   [`picklist`](/api/picklist/),
*   [`undefinedable`](/api/undefinedable/),
*   [`union`](/api/union/),
*   [`unknown`](/api/unknown/),
*   [`variant`](/api/variant/),
*   [`void`](/api/void/)

``import * as v from 'valibot';  const AnySchema = v.any(); // any const CustomSchema = v.custom<`${number}px`>(isPixelString); // `${number}px` const EnumSchema = v.enum(Direction); // Direction const ExactOptionalSchema = v.exactOptional(v.string()); // string const InstanceSchema = v.instance(Error); // Error const LazySchema = v.lazy(() => v.string()); // string const IntersectSchema = v.intersect([v.string(), v.literal('a')]); // string & 'a' const LiteralSchema = v.literal('foo'); // 'foo' const NanSchema = v.nan(); // NaN const NeverSchema = v.never(); // never const NonNullableSchema = v.nonNullable(v.nullable(v.string())); // string const NonNullishSchema = v.nonNullish(v.nullish(v.string())); // string const NonOptionalSchema = v.nonOptional(v.optional(v.string())); // string const NullableSchema = v.nullable(v.string()); // string | null const NullishSchema = v.nullish(v.string()); // string | null | undefined const OptionalSchema = v.optional(v.string()); // string | undefined const PicklistSchema = v.picklist(['a', 'b']); // 'a' | 'b' const UndefinedableSchema = v.undefinedable(v.string()); // string | undefined const UnionSchema = v.union([v.string(), v.number()]); // string | number const UnknownSchema = v.unknown(); // unknown const VariantSchema = v.variant('type', [   v.object({ type: v.literal('a'), foo: v.string() }),   v.object({ type: v.literal('b'), bar: v.number() }), ]); // { type: 'a'; foo: string } | { type: 'b'; bar: number } const VoidSchema = v.void(); // void``

[](#pipelines)Pipelines
=======================

For detailed validations and transformations, a schema can be wrapped in a pipeline. Especially for schema functions like [`string`](/api/string/), [`number`](/api/number/), [`date`](/api/date/), [`object`](/api/object/), and [`array`](/api/array/), this feature is useful for validating properties beyond the raw data type.

[](#how-it-works)How it works
-----------------------------

In simple words, a pipeline is a list of schemas and actions that synchronously passes through the input data. It must always start with a schema, followed by up to 19 schemas or actions. Each schema and action can examine and modify the input. The pipeline is therefore perfect for detailed validations and transformations.

### [](#example)Example

For example, the pipeline feature can be used to trim a string and make sure that it is an email that ends with a specific domain.

`import * as v from 'valibot';  const EmailSchema = v.pipe(   v.string(),   v.trim(),   v.email(),   v.endsWith('@example.com') );`

[](#validations)Validations
---------------------------

Pipeline validation actions examine the input and, if the input does not meet a certain condition, return an issue. If the input is valid, it is returned as the output and, if present, picked up by the next action in the pipeline.

> Whenever possible, pipelines are run completely, even if an issue has occurred, to collect all possible issues. If you want to abort the pipeline early after the first issue, you need to set the `abortPipeEarly` option to `true`. Learn more about this [here](/guides/parse-data/#configuration).

Validation actions:*   [`base64`](/api/base64/),
*   [`bic`](/api/bic/),
*   [`bytes`](/api/bytes/),
*   [`check`](/api/check/),
*   [`checkItems`](/api/checkItems/),
*   [`creditCard`](/api/creditCard/),
*   [`cuid2`](/api/cuid2/),
*   [`decimal`](/api/decimal/),
*   [`digits`](/api/digits/),
*   [`email`](/api/email/),
*   [`emoji`](/api/emoji/),
*   [`empty`](/api/empty/),
*   [`endsWith`](/api/endsWith/),
*   [`entries`](/api/entries/),
*   [`everyItem`](/api/everyItem/),
*   [`excludes`](/api/excludes/),
*   [`finite`](/api/finite/),
*   [`graphemes`](/api/graphemes/),
*   [`gtValue`](/api/gtValue/),
*   [`hash`](/api/hash/),
*   [`hexadecimal`](/api/hexadecimal/),
*   [`hexColor`](/api/hexColor/),
*   [`includes`](/api/includes/),
*   [`integer`](/api/integer/),
*   [`ip`](/api/ip/),
*   [`ipv4`](/api/ipv4/),
*   [`ipv6`](/api/ipv6/),
*   [`isoDate`](/api/isoDate/),
*   [`isoDateTime`](/api/isoDateTime/),
*   [`isoTime`](/api/isoTime/),
*   [`isoTimeSecond`](/api/isoTimeSecond/),
*   [`isoTimestamp`](/api/isoTimestamp/),
*   [`isoWeek`](/api/isoWeek/),
*   [`length`](/api/length/),
*   [`ltValue`](/api/ltValue/),
*   [`mac`](/api/mac/),
*   [`mac48`](/api/mac48/),
*   [`mac64`](/api/mac64/),
*   [`maxBytes`](/api/maxBytes/),
*   [`maxEntries`](/api/maxEntries/),
*   [`maxGraphemes`](/api/maxGraphemes/),
*   [`maxLength`](/api/maxLength/),
*   [`maxSize`](/api/maxSize/),
*   [`maxValue`](/api/maxValue/),
*   [`maxWords`](/api/maxWords/),
*   [`mimeType`](/api/mimeType/),
*   [`minBytes`](/api/minBytes/),
*   [`minEntries`](/api/minEntries/),
*   [`minGraphemes`](/api/minGraphemes/),
*   [`minLength`](/api/minLength/),
*   [`minSize`](/api/minSize/),
*   [`minValue`](/api/minValue/),
*   [`minWords`](/api/minWords/),
*   [`multipleOf`](/api/multipleOf/),
*   [`nanoid`](/api/nanoid/),
*   [`nonEmpty`](/api/nonEmpty/),
*   [`notBytes`](/api/notBytes/),
*   [`notEntries`](/api/notEntries/),
*   [`notGraphemes`](/api/notGraphemes/),
*   [`notLength`](/api/notLength/),
*   [`notSize`](/api/notSize/),
*   [`notValue`](/api/notValue/),
*   [`notValues`](/api/notValues/),
*   [`notWords`](/api/notWords/),
*   [`octal`](/api/octal/),
*   [`parseJson`](/api/parseJson/),
*   [`partialCheck`](/api/partialCheck/),
*   [`rawCheck`](/api/rawCheck/),
*   [`regex`](/api/regex/),
*   [`rfcEmail`](/api/rfcEmail/),
*   [`safeInteger`](/api/safeInteger/),
*   [`size`](/api/size/),
*   [`slug`](/api/slug/),
*   [`someItem`](/api/someItem/),
*   [`startsWith`](/api/startsWith/),
*   [`ulid`](/api/ulid/),
*   [`url`](/api/url/),
*   [`uuid`](/api/uuid/),
*   [`value`](/api/value/),
*   [`values`](/api/values/),
*   [`words`](/api/words/)

Some of these actions can be combined with different schemas. For example, [`minValue`](/api/minValue/) can be used to validate the minimum value of [`string`](/api/string/), [`number`](/api/number/), [`bigint`](/api/bigint/), and [`date`](/api/date/).

`import * as v from 'valibot';  const StringSchema = v.pipe(v.string(), v.minValue('foo')); const NumberSchema = v.pipe(v.number(), v.minValue(1234)); const BigintSchema = v.pipe(v.bigint(), v.minValue(1234n)); const DateSchema = v.pipe(v.date(), v.minValue(new Date()));`

### [](#custom-validation)Custom validation

For custom validations, [`check`](/api/check/) can be used. If the function passed as the first argument returns `false`, an issue is returned. Otherwise, the input is considered valid.

`import * as v from 'valibot'; import { isValidUsername } from '~/utils';  const UsernameSchema = v.pipe(   v.string(),   v.check(isValidUsername, 'This username is invalid.') );`

> You can forward the issues of a pipeline validation to a child. See the [methods](/guides/methods/#forward) guide for more information.

[](#transformations)Transformations
-----------------------------------

Pipeline transformation actions allow to change the value and data type of the input data. This can be useful for example to remove spaces at the beginning or end of a string or to force a minimum or maximum value.

Transformation actions:*   [`brand`](/api/brand/),
*   [`filterItems`](/api/filterItems/),
*   [`findItem`](/api/findItem/),
*   [`flavor`](/api/flavor/),
*   [`mapItems`](/api/mapItems/),
*   [`rawTransform`](/api/rawTransform/),
*   [`readonly`](/api/readonly/),
*   [`reduceItems`](/api/reduceItems/),
*   [`sortItems`](/api/sortItems/),
*   [`toLowerCase`](/api/toLowerCase/),
*   [`toMaxValue`](/api/toMaxValue/),
*   [`toMinValue`](/api/toMinValue/),
*   [`toUpperCase`](/api/toUpperCase/),
*   [`transform`](/api/transform/),
*   [`trim`](/api/trim/),
*   [`trimEnd`](/api/trimEnd/),
*   [`trimStart`](/api/trimStart/)

For example, the pipeline of the following schema enforces a minimum value of 10. If the input is less than 10, it is replaced with the specified minimum value.

`import * as v from 'valibot';  const NumberSchema = v.pipe(v.number(), v.toMinValue(10));`

### [](#custom-transformation)Custom transformation

For custom transformations, [`transform`](/api/transform/) can be used. The function passed as the first argument is called with the input data and the return value defines the output. The following transformation changes the output of the schema to `null` for any number less than 10.

`import * as v from 'valibot';  const NumberSchema = v.pipe(   v.number(),   v.transform((input) => (input < 10 ? null : input)) );`

[](#metadata)Metadata
---------------------

In addition to the validation and transformation actions, a pipeline can also be used to add metadata to a schema. This can be useful when working with AI tools or for documentation purposes.

Metadata actions:*   [`description`](/api/description/),
*   [`metadata`](/api/metadata/),
*   [`title`](/api/title/)

`const UsernameSchema = v.pipe(   v.string(),   v.regex(/^[a-z0-9_-]{4,16}$/iu),   v.title('Username'),   v.description(     'A username must be between 4 and 16 characters long and can only contain letters, numbers, underscores and hyphens.'   ) );`

[](#parse-data)Parse data
=========================

Now that you've learned how to create a schema, let's look at how you can use it to validate unknown data and make it type-safe. There are three different ways to do this.

> Each schema has a `~run` method. However, this is an internal API and should only be used if you know what you are doing.

[](#parse-and-throw)Parse and throw
-----------------------------------

The [`parse`](/api/parse/) method will throw a [`ValiError`](/api/ValiError/) if the input does not match the schema. Therefore, you should use a try/catch block to catch errors. If the input matches the schema, it is valid and the output of the schema will be returned with the correct TypeScript type.

`import * as v from 'valibot';  try {   const EmailSchema = v.pipe(v.string(), v.email());   const email = v.parse(EmailSchema, 'jane@example.com');    // Handle errors if one occurs } catch (error) {   console.log(error); }`

[](#parse-and-return)Parse and return
-------------------------------------

If you want issues to be returned instead of thrown, you can use [`safeParse`](/api/safeParse/). The returned value then contains the `.success` property, which is `true` if the input is valid or `false` otherwise.

If the input is valid, you can use `.output` to get the output of the schema validation. Otherwise, if the input was invalid, the issues found can be accessed via `.issues`.

`import * as v from 'valibot';  const EmailSchema = v.pipe(v.string(), v.email()); const result = v.safeParse(EmailSchema, 'jane@example.com');  if (result.success) {   const email = result.output; } else {   console.log(result.issues); }`

[](#type-guards)Type guards
---------------------------

Another way to validate data that can be useful in individual cases is to use a type guard. You can use either a type predicate with the [`is`](/api/is/) method or an assertion function with the [`assert`](/api/assert/) method.

If a type guard is used, the issues of the validation cannot be accessed. Also, transformations have no effect and unknown keys of an object are not removed. Therefore, this approach is not as safe and powerful as the two previous ways. Also, due to a TypeScript limitation, it can currently only be used with synchronous schemas.

`import * as v from 'valibot';  const EmailSchema = v.pipe(v.string(), v.email()); const data: unknown = 'jane@example.com';  if (v.is(EmailSchema, data)) {   const email = data; // string }`

[](#configuration)Configuration
-------------------------------

By default, Valibot exhaustively collects every issue during validation to give you detailed feedback on why the input does not match the schema. If this is not required for your use case, you can control this behavior with `abortEarly` and `abortPipeEarly` to improve the performance of validation.

### [](#abort-validation)Abort validation

If you set `abortEarly` to `true`, data validation immediately aborts upon finding the first issue. If you just want to know if some data matches a schema, but you don't care about the details, this can improve performance.

`import * as v from 'valibot';  try {   const ProfileSchema = v.object({     name: v.string(),     bio: v.string(),   });   const profile = v.parse(     ProfileSchema,     { name: 'Jane', bio: '' },     { abortEarly: true }   );    // Handle errors if one occurs } catch (error) {   console.log(error); }`

### [](#abort-pipeline)Abort pipeline

If you only set `abortPipeEarly` to `true`, the validation within a pipeline will only abort after finding the first issue. For example, if you only want to show the first error of a field when validating a form, you can use this option to improve performance.

`import * as v from 'valibot';  try {   const EmailSchema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));   const email = v.parse(EmailSchema, 'jane@example.com', {     abortPipeEarly: true,   });    // Handle errors if one occurs } catch (error) {   console.log(error); }`

[](#infer-types)Infer types
===========================

Another cool feature of schemas is the ability to infer input and output types. This makes your work even easier because you don't have to write the type definition yourself.

[](#infer-input-types)Infer input types
---------------------------------------

The input type of a schema corresponds to the TypeScript type that the incoming data of a schema must match to be valid. To extract this type you use the utility type [`InferInput`](/api/InferInput/).

> You are probably interested in the input type only in special cases. In most cases, the output type should be sufficient.

`import * as v from 'valibot';  const LoginSchema = v.object({   email: v.string(),   password: v.string(), });  type LoginInput = v.InferInput<typeof LoginSchema>; // { email: string; password: string }`

[](#infer-output-types)Infer output types
-----------------------------------------

The output type differs from the input type only if you use [`optional`](/api/optional/), [`nullable`](/api/nullable/), [`nullish`](/api/nullish/) or [`undefinedable`](/api/undefinedable/) with a default value or [`brand`](/api/brand/), [`readonly`](/api/readonly/) or [`transform`](/api/transform/) to transform the input or data type of a schema after validation. The output type corresponds to the output of [`parse`](/api/parse/) and [`safeParse`](/api/safeParse/). To infer it, you use the utility type [`InferOutput`](/api/InferOutput/).

`import * as v from 'valibot'; import { hashPassword } from '~/utils';  const LoginSchema = v.pipe(   v.object({     email: v.string(),     password: v.pipe(v.string(), v.transform(hashPassword)),   }),   v.transform((input) => {     return {       ...input,       timestamp: new Date().toISOString(),     };   }) );  type LoginOutput = v.InferOutput<typeof LoginSchema>; // { email: string; password: string; timestamp: string }`

[](#infer-issue-types)Infer issue types
---------------------------------------

You can also infer the possible issues of a schema. This can be useful if you want to handle the issues in a particular way. To extract this information from a schema you use the utility type [`InferIssue`](/api/InferIssue/).

`import * as v from 'valibot';  const LoginSchema = v.object({   email: v.pipe(v.string(), v.email()),   password: v.pipe(v.string(), v.minLength(8)), });  type Issue = v.InferIssue<typeof LoginSchema>; // v.ObjectIssue | v.StringIssue | v.EmailIssue<string> | v.MinLengthIssue<string, 8>`

[](#methods)Methods
===================

Apart from [`parse`](/api/parse/) and [`safeParse`](/api/safeParse/), Valibot offers some more methods to make working with your schemas easier. In the following we distinguish between schema, object and pipeline methods.

[](#schema-methods)Schema methods
---------------------------------

Schema methods add functionality, simplify ergonomics, and help you use schemas for validation and data extraction.

Schema methods:*   [`assert`](/api/assert/),
*   [`config`](/api/config/),
*   [`fallback`](/api/fallback/),
*   [`flatten`](/api/flatten/),
*   [`getDefault`](/api/getDefault/),
*   [`getDefaults`](/api/getDefaults/),
*   [`getDescription`](/api/getDescription/),
*   [`getFallback`](/api/getFallback/),
*   [`getFallbacks`](/api/getFallbacks/),
*   [`getMetadata`](/api/getMetadata/),
*   [`getTitle`](/api/getTitle/),
*   [`is`](/api/is/),
*   [`message`](/api/message/),
*   [`parse`](/api/parse/),
*   [`safeParse`](/api/safeParse/),
*   [`summarize`](/api/summarize/),
*   [`pipe`](/api/pipe/),
*   [`unwrap`](/api/unwrap/)

> For more information on [`pipe`](/api/pipe/), see the [pipelines](/guides/pipelines/) guide. For more information on validation methods, see the [parse data](/guides/parse-data/) guide. For more information on [`flatten`](/api/flatten/), see the [issues](/guides/issues/#formatting) guide.

### [](#fallback)Fallback

If an issue occurs while validating your schema, you can catch it with [`fallback`](/api/fallback/) to return a predefined value instead.

`import * as v from 'valibot';  const StringSchema = v.fallback(v.string(), 'hello'); const stringOutput = v.parse(StringSchema, 123); // 'hello'`

[](#object-methods)Object methods
---------------------------------

Object methods make it easier for you to work with object schemas. They are strongly oriented towards TypeScript's utility types.

Object methods:*   [`keyof`](/api/keyof/),
*   [`omit`](/api/omit/),
*   [`partial`](/api/partial/),
*   [`pick`](/api/pick/),
*   [`required`](/api/required/)

### [](#typescript-similarities)TypeScript similarities

Like in TypeScript, you can make the values of an object optional with [`partial`](/api/partial/), make them required with [`required`](/api/required/), and even include/exclude certain values from an existing schema with [`pick`](/api/pick/) and [`omit`](/api/omit/).

`import * as v from 'valibot';  // TypeScript type Object1 = Partial<{ key1: string; key2: number }>;  // Valibot const object1 = v.partial(v.object({ key1: v.string(), key2: v.number() }));  // TypeScript type Object2 = Pick<Object1, 'key1'>;  // Valibot const object2 = v.pick(object1, ['key1']);`

[](#pipeline-methods)Pipeline methods
-------------------------------------

Pipeline methods modify the results of validations and transformations within a pipeline.

Pipeline methods:*   [`forward`](/api/forward/)

> For more info about our pipeline feature, see the [pipelines](/guides/pipelines/) guide.

### [](#forward)Forward

‎[`forward`](/api/forward/) allows you to associate an issue with a nested schema. For example, if you want to check that both password entries in a registration form match, you can use it to forward the issue to the second password field in case of an error. This allows you to display the error message in the correct place.

`import * as v from 'valibot';  const RegisterSchema = v.pipe(   v.object({     email: v.pipe(       v.string(),       v.nonEmpty('Please enter your email.'),       v.email('The email address is badly formatted.')     ),     password1: v.pipe(       v.string(),       v.nonEmpty('Please enter your password.'),       v.minLength(8, 'Your password must have 8 characters or more.')     ),     password2: v.string(),   }),   v.forward(     v.partialCheck(       [['password1'], ['password2']],       (input) => input.password1 === input.password2,       'The two passwords do not match.'     ),     ['password2']   ) );`

[](#issues)Issues
=================

When validating unknown data against a schema, Valibot collects information about each issue. If there is at least one issue, these are returned in an array. Each issue provides detailed information for you or your users to fix the problem.

[](#issue-info)Issue info
-------------------------

A single issue conforms to the TypeScript type definition below.

`type BaseIssue = {   // Required info   kind: 'schema' | 'validation' | 'transformation';   type: string;   input: unknown;   expected: string | null;   received: string;   message: string;    // Optional info   requirement?: unknown;   path?: IssuePath;   issues?: Issues;   lang?: string;   abortEarly?: boolean;   abortPipeEarly?: boolean;   skipPipe?: boolean; };`

### [](#required-info)Required info

Each issue contains the following required information.

#### [](#kind)Kind

`kind` describes the kind of the problem. If an input does not match the data type, for example a number was passed instead of a string, `kind` has the value `'schema'`. In all other cases, the reason is not the data type but the actual content of the data. For example, if a string is invalid because it does not match a regex, `kind` has the value `'validation'`.

#### [](#type)Type

`type` describes which function did the validation. If the schema function [`array`](/api/array/) detects that the input is not an array, `type` has the value `'array'`. If the [`minLength`](/api/minLength/) validation function detects that an array is too short, `type` has the value `'min_length'`.

#### [](#input)Input

`input` contains the input data where the issue was found. For complex data, for example objects, `input` contains the value of the respective key that does not match the schema.

#### [](#expected)Expected

`expected` is a language-neutral string that describes the data property that was expected. It can be used to create useful error messages. If your users aren't developers, you can replace the language-neutral symbols with language-specific words.

#### [](#received)Received

`received` is a language-neutral string that describes the data property that was received. It can be used to create useful error messages. If your users aren't developers, you can replace the language-neutral symbols with language-specific words.

#### [](#message)Message

`message` contains a human-understandable error message that can be fully customized as described in our [quick start](/guides/quick-start/#error-messages) and [internationalization](/guides/internationalization/) guide.

### [](#optional-info)Optional info

Some issues contain further optional information.

#### [](#requirement)Requirement

`requirement` can contain further validation information. For example, if the [`minLength`](/api/minLength/) validation function detects that a string is too short, `requirement` contains the minimum length that the string should have.

#### [](#path)Path

`path` is an array of objects that describes where an issue is located within complex data. Each path item contains the following information.

> The `input` of a path item may differ from the `input` of its issue. This is because path items are subsequently added by parent schemas and are related to their input. Transformations of child schemas are not taken into account.

`type PathItem = {   type: string;   origin: 'key' | 'value';   input: unknown;   key?: unknown;   value: unknown; };`

For example, you can use the following code to create a dot path.

`import * as v from 'valibot';  const dotPath = v.getDotPath(issue);`

#### [](#issues-1)Issues

`issues` currently only occur when using [`union`](/api/union/) and contains all issues of the schemas of an union type.

#### [](#config)Config

`lang` can be used as part of our [i18n feature](/guides/internationalization/) to define the required language. `abortEarly` and `abortPipeEarly` gives you an info that the validation was aborted prematurely. You can find more info about this in the [parse data](/guides/parse-data/#configuration) guide. These are all configurations that you can control yourself.

[](#formatting)Formatting
-------------------------

For common use cases such as form validation, Valibot includes small built-in functions for formatting issues. However, once you understand how they work, you can easily format them yourself and put them in the right form for your use case.

### [](#flatten-errors)Flatten errors

If you are only interested in the error messages of each issue to show them to your users, you can convert an array of issues to a flat object with [`flatten`](/api/flatten/). Below is an example.

`import * as v from 'valibot';  const ObjectSchema = v.object({   foo: v.string('Value of "foo" is missing.'),   bar: v.object({     baz: v.string('Value of "bar.baz" is missing.'),   }), });  const result = v.safeParse(ObjectSchema, { bar: {} });  if (result.issues) {   console.log(v.flatten<typeof ObjectSchema>(result.issues)); }`

The `result` returned in the code sample above this text contains the following issues.

`[   {     kind: 'schema',     type: 'string',     input: undefined,     expected: 'string',     received: 'undefined',     message: 'Value of "foo" is missing.',     path: [       {         type: 'object',         origin: 'value',         input: {           bar: {},         },         key: 'foo',         value: undefined,       },     ],   },   {     kind: 'schema',     type: 'string',     input: undefined,     expected: 'string',     received: 'undefined',     message: 'Value of "bar.baz" is missing.',     path: [       {         type: 'object',         origin: 'value',         input: {           bar: {},         },         key: 'bar',         value: {},       },       {         type: 'object',         origin: 'value',         input: {},         key: 'baz',         value: undefined,       },     ],   }, ];`

However, with the help of [`flatten`](/api/flatten/) the issues were converted to the following object.

`{   nested: {     foo: ['Value of "foo" is missing.'],     'bar.baz': ['Value of "bar.baz" is missing.'],   }, };`

[](#objects)Objects
===================

To validate objects with a schema, you can use [`object`](/api/object/) or [`record`](/api/record/). You use [`object`](/api/object/) for an object with a specific shape and [`record`](/api/record/) for objects with any number of uniform entries.

[](#object-schema)Object schema
-------------------------------

The first argument is used to define the specific structure of the object. Each entry consists of a key and a schema as the value. The entries of the input are then validated against these schemas.

`import * as v from 'valibot';  const ObjectSchema = v.object({   key1: v.string(),   key2: v.number(), });`

### [](#loose-and-strict-objects)Loose and strict objects

The [`object`](/api/object/) schema removes unknown entries. This means that entries that you have not defined in the first argument are not validated and added to the output. You can change this behavior by using the [`looseObject`](/api/looseObject/) or [`strictObject`](/api/strictObject/) schema instead.

The [`looseObject`](/api/looseObject/) schema allows unknown entries and adds them to the output. The [`strictObject`](/api/strictObject/) schema forbids unknown entries and returns an issue for the first unknown entry found.

### [](#object-with-specific-rest)Object with specific rest

Alternatively, you can also use the [`objectWithRest`](/api/objectWithRest/) schema to define a specific schema for unknown entries. Any entries not defined in the first argument are then validated against the schema of the second argument.

`import * as v from 'valibot';  const ObjectSchema = v.objectWithRest(   {     key1: v.string(),     key2: v.number(),   },   v.null() );`

### [](#pipeline-validation)Pipeline validation

To validate the value of an entry based on another entry, you can wrap you schema with the [`check`](/api/check/) validation action in a pipeline. You can also use [`forward`](/api/forward/) to assign the issue to a specific object key in the event of an error.

> If you only want to validate specific entries, we recommend using [`partialCheck`](/api/partialCheck/) instead as [`check`](/api/check/) can only be executed if the input is fully typed.

`import * as v from 'valibot';  const CalculationSchema = v.pipe(   v.object({     a: v.number(),     b: v.number(),     sum: v.number(),   }),   v.forward(     v.check(({ a, b, sum }) => a + b === sum, 'The calculation is incorrect.'),     ['sum']   ) );`

[](#record-schema)Record schema
-------------------------------

For an object with any number of uniform entries, [`record`](/api/record/) is the right choice. The schema passed as the first argument validates the keys of your record, and the schema passed as the second argument validates the values.

`import * as v from 'valibot';  const RecordSchema = v.record(v.string(), v.number()); // Record<string, number>`

### [](#specific-record-keys)Specific record keys

Instead of [`string`](/api/string/), you can also use [`custom`](/api/custom/), [`enum`](/api/enum/), [`literal`](/api/literal/), [`picklist`](/api/picklist/) or [`union`](/api/union/) to validate the keys.

`import * as v from 'valibot';  const RecordSchema = v.record(v.picklist(['key1', 'key2']), v.number()); // { key1?: number; key2?: number }`

Note that [`record`](/api/record/) marks all literal keys as optional in this case. If you want to make them required, you can use the [`object`](/api/object/) schema with the [`entriesFromList`](/api/entriesFromList/) util instead.

`import * as v from 'valibot';  const RecordSchema = v.object(v.entriesFromList(['key1', 'key2'], v.number())); // { key1: number; key2: number }`

### [](#pipeline-validation-1)Pipeline validation

To validate the value of an entry based on another entry, you can wrap you schema with the [`check`](/api/check/) validation action in a pipeline. You can also use [`forward`](/api/forward/) to assign the issue to a specific record key in the event of an error.

`import * as v from 'valibot';  const CalculationSchema = v.pipe(   v.record(v.picklist(['a', 'b', 'sum']), v.number()),   v.forward(     v.check(       ({ a, b, sum }) => (a || 0) + (b || 0) === (sum || 0),       'The calculation is incorrect.'     ),     ['sum']   ) );`

[](#arrays)Arrays
=================

To validate arrays with a schema you can use [`array`](/api/array/) or [`tuple`](/api/tuple/). You use [`tuple`](/api/tuple/) if your array has a specific shape and [`array`](/api/array/) if it has any number of uniform items.

[](#array-schema)Array schema
-----------------------------

The first argument you pass to [`array`](/api/array/) is a schema, which is used to validate the items of the array.

`import * as v from 'valibot';  const ArraySchema = v.array(v.number()); // number[]`

### [](#pipeline-validation)Pipeline validation

To validate the length or contents of the array, you can use a pipeline.

`import * as v from 'valibot';  const ArraySchema = v.pipe(   v.array(v.string()),   v.minLength(1),   v.maxLength(5),   v.includes('foo'),   v.excludes('bar') );`

[](#tuple-schema)Tuple schema
-----------------------------

A [`tuple`](/api/tuple/) is an array with a specific shape. The first argument that you pass to the function is a tuple of schemas that defines its shape.

`import * as v from 'valibot';  const TupleSchema = v.tuple([v.string(), v.number()]); // [string, number]`

### [](#loose-and-strict-tuples)Loose and strict tuples

The [`tuple`](/api/tuple/) schema removes unknown items. This means that items that you have not defined in the first argument are not validated and added to the output. You can change this behavior by using the [`looseTuple`](/api/looseTuple/) or [`strictTuple`](/api/strictTuple/) schema instead.

The [`looseTuple`](/api/looseTuple/) schema allows unknown items and adds them to the output. The [`strictTuple`](/api/strictTuple/) schema forbids unknown items and returns an issue for the first unknown item found.

### [](#tuple-with-specific-rest)Tuple with specific rest

Alternatively, you can also use the [`tupleWithRest`](/api/tupleWithRest/) schema to define a specific schema for unknown items. Any items not defined in the first argument are then validated against the schema of the second argument.

`import * as v from 'valibot';  const TupleSchema = v.tupleWithRest([v.string(), v.number()], v.null());`

### [](#pipeline-validation-1)Pipeline validation

Similar to arrays, you can use a pipeline to validate the length and contents of a tuple.

`import * as v from 'valibot';  const TupleSchema = v.pipe(   v.tupleWithRest([v.string()], v.string()),   v.maxLength(5),   v.includes('foo'),   v.excludes('bar') );`

[](#optionals)Optionals
=======================

It often happens that `undefined` or `null` should also be accepted instead of the value. To make the API more readable for this and to reduce boilerplate, Valibot offers a shortcut for this functionality with [`optional`](/api/optional/), [`exactOptional`](/api/exactOptional/), [`undefinedable`](/api/undefinedable/), [`nullable`](/api/nullable/) and [`nullish`](/api/nullish/).

[](#how-it-works)How it works
-----------------------------

To accept `undefined` and/or `null` besides your actual value, you just have to wrap the schema in [`optional`](/api/optional/), [`exactOptional`](/api/exactOptional/), [`undefinedable`](/api/undefinedable/), [`nullable`](/api/nullable/) or [`nullish`](/api/nullish/).

> Note: [`exactOptional`](/api/exactOptional/) allows missing entries in objects, but does not allow `undefined` as a specified value.

`import * as v from 'valibot';  const OptionalStringSchema = v.optional(v.string()); // string | undefined const ExactOptionalStringSchema = v.exactOptional(v.string()); // string const UndefinedableStringSchema = v.undefinedable(v.string()); // string | undefined const NullableStringSchema = v.nullable(v.string()); // string | null const NullishStringSchema = v.nullish(v.string()); // string | null | undefined`

### [](#use-in-objects)Use in objects

When used inside of objects, [`optional`](/api/optional/), [`exactOptional`](/api/exactOptional/) and [`nullish`](/api/nullish/) is a special case, as it also marks the value as optional in TypeScript with a question mark.

`import * as v from 'valibot';  const OptionalKeySchema = v.object({ key: v.optional(v.string()) }); // { key?: string | undefined }`

[](#default-values)Default values
---------------------------------

What makes [`optional`](/api/optional/), [`exactOptional`](/api/exactOptional/), [`undefinedable`](/api/undefinedable/), [`nullable`](/api/nullable/) and [`nullish`](/api/nullish/) unique is that the schema functions accept a default value as the second argument. Depending on the schema function, this default value is always used if the input is missing, `undefined` or `null`.

`import * as v from 'valibot';  const OptionalStringSchema = v.optional(v.string(), "I'm the default!");  type OptionalStringInput = v.InferInput<typeof OptionalStringSchema>; // string | undefined type OptionalStringOutput = v.InferOutput<typeof OptionalStringSchema>; // string`

By providing a default value, the input type of the schema now differs from the output type. The schema in the example now accepts `string` and `undefined` as input, but returns a string as output in both cases.

### [](#dynamic-default-values)Dynamic default values

In some cases it is necessary to generate the default value dynamically. For this purpose, a function that generates and returns the default value can also be passed as the second argument.

`import * as v from 'valibot';  const NullableDateSchema = v.nullable(v.date(), () => new Date());`

The previous example thus creates a new instance of the [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) class for each validation with `null` as input, which is then used as the default value.

### [](#dependent-default-values)Dependent default values

In rare cases, a default value for an optional entry may depend on the values of another entries in the same object. This can be achieved by using [`transform`](/api/transform/) in the [`pipe`](/api/pipe/) of the object.

`import * as v from 'valibot';  const CalculationSchema = v.pipe(   v.object({     a: v.number(),     b: v.number(),     sum: v.optional(v.number()),   }),   v.transform((input) => ({     ...input,     sum: input.sum === undefined ? input.a + input.b : input.sum,   })) );`

[](#enums)Enums
===============

An enumerated type is a data type that consists of a set of values. They can be represented by either an object, a TypeScript enum or, to keep things simple, an array. You use [`enum`](/api/enum/) for objects and TypeScript enums and [`picklist`](/api/picklist/) for arrays.

[](#enum-schema)Enum schema
---------------------------

Since TypeScript enums are transpiled to JavaScript objects by the TypeScript compiler, you can use the [`enum`](/api/enum/) schema function for both. Just pass your enumerated data type as the first argument to the schema function. On validation, the schema checks whether the input matches one of the values in the enum.

`import * as v from 'valibot';  // As JavaScript object const Direction = {   Left: 'LEFT',   Right: 'RIGHT', } as const;  // As TypeScript enum enum Direction {   Left = 'LEFT',   Right = 'RIGHT', }  const DirectionSchema = v.enum(Direction);`

[](#picklist-schema)Picklist schema
-----------------------------------

For a set of values represented by an array, you can use the [`picklist`](/api/picklist/) schema function. Just pass your array as the first argument to the schema function. On validation, the schema checks whether the input matches one of the items in the array.

`import * as v from 'valibot';  const Direction = ['LEFT', 'RIGHT'] as const;  const DirectionSchema = v.picklist(Direction);`

### [](#format-array)Format array

In some cases, the array may not be in the correct format. In this case, simply use the [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to bring it into the required format.

`import * as v from 'valibot';  const countries = [   { name: 'Germany', code: 'DE' },   { name: 'France', code: 'FR' },   { name: 'United States', code: 'US' }, ] as const;  const CountrySchema = v.picklist(countries.map((country) => country.code));`

[](#unions)Unions
=================

An union represents a logical OR relationship. You can apply this concept to your schemas with [`union`](/api/union/) and [`variant`](/api/variant/). For [discriminated unions](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) you use [`variant`](/api/variant/) and in all other cases you use [`union`](/api/union/).

[](#union-schema)Union schema
-----------------------------

The schema function [`union`](/api/union/) creates an OR relationship between any number of schemas that you pass as the first argument in the form of an array. On validation, the schema returns the result of the first schema that was successfully validated.

`import * as v from 'valibot';  // TypeScript type Union = string | number;  // Valibot const UnionSchema = v.union([v.string(), v.number()]);`

If a bad input can be uniquely assigned to one of the schemas based on the data type, the result of that schema is returned. Otherwise, a general issue is returned that contains the issues of each schema as subissues. This is a special case within the library, as the issues of [`union`](/api/union/) can contradict each other.

The following issues are returned if the input is `null` instead of a string or number. Since the input cannot be associated with a schema in this case, the issues of both schemas are returned as subissues.

`[   {     kind: 'schema',     type: 'union',     input: null,     expected: 'string | number',     received: 'null',     message: 'Invalid type: Expected string | number but received null',     issues: [       {         kind: 'schema',         type: 'string',         input: null,         expected: 'string',         received: 'null',         message: 'Invalid type: Expected string but received null',       },       {         kind: 'schema',         type: 'number',         input: null,         expected: 'number',         received: 'null',         message: 'Invalid type: Expected number but received null',       },     ],   }, ];`

[](#variant-schema)Variant schema
---------------------------------

For better performance, more type safety, and a more targeted output of issues, you can use [`variant`](/api/variant/) for discriminated unions. Therefore, we recommend using [`variant`](/api/variant/) over [`union`](/api/union/) whenever possible. A discriminated union is an OR relationship between objects that can be distinguished by a specific key.

When you call the schema function, you first specify the discriminator key. This is used to determine the schema to use for validation based on the input. The object schemas, in the form of an array, follow as the second argument.

`import * as v from 'valibot';  const VariantScheme = v.variant('type', [   v.object({     type: v.literal('foo'),     foo: v.string(),   }),   v.object({     type: v.literal('bar'),     bar: v.number(),   }), ]);`

For very complex datasets, multiple [`variant`](/api/variant/) schemas can also be deeply nested within one another.

[](#intersections)Intersections
===============================

An intersection represents a logical AND relationship. You can apply this concept to your schemas with [`intersect`](/api/intersect/) and partially by merging multiple object schemas into a new one. We recommend this approach for simple object schemas, and [`intersect`](/api/intersect/) for all other cases.

[](#intersect-schema)Intersect schema
-------------------------------------

The schema function [`intersect`](/api/intersect/) creates an AND relationship between any number of schemas that you pass as the first argument in the form of an array. To pass the validation, the validation of each schema passed must be successful. If this is the case, the schema merges the output of the individual schemas and returns the result. If the validation fails, the schema returns any issues that occurred.

`import * as v from 'valibot';  // TypeScript type Intersect = { foo: string } & { bar: number };  // Valibot const IntersectSchema = v.intersect([   v.object({ foo: v.string() }),   v.object({ bar: v.number() }), ]);`

[](#merge-objects)Merge objects
-------------------------------

Technically, there is a big difference between [`intersect`](/api/intersect/) and object merging. [`intersect`](/api/intersect/) is a schema function that executes the passed schemas during validation. In contrast, object merging is done during initialization to create a new object schema.

As a result, object merging usually has much better performance than [`intersect`](/api/intersect/) when validating unknown data. Also, subsequent object properties overwrite the previous ones. This is not the case with [`intersect`](/api/intersect/), since the validation would fail if two properties with the same name are fundamentally different.

`import * as v from 'valibot';  const ObjectSchema1 = v.object({ foo: v.string(), baz: v.number() }); const ObjectSchema2 = v.object({ bar: v.string(), baz: v.boolean() });  const MergedSchema = v.object({   ...ObjectSchema1.entries,   ...ObjectSchema2.entries, }); // { foo: string; bar: string; baz: boolean }`

In the previous code example, the `baz` property of the first object schema is overwritten by the `baz` property of the second object schema.

[](#other)Other
===============

This guide explains other special schema functions such as [`literal`](/api/literal/), [`instance`](/api/instance/), [`custom`](/api/custom/) and [`lazy`](/api/lazy/) that are not covered in the other guides.

[](#literal-schema)Literal schema
---------------------------------

You can use [`literal`](/api/literal/) to define a schema that matches a specific string, number or boolean value. Therefore, this schema is perfect for representing [literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types). Usage is simple, just pass the value you want to match as the first argument.

`import * as v from 'valibot';  const StringLiteralSchema = v.literal('foo'); // 'foo' const NumberLiteralSchema = v.literal(12345); // 12345 const BooleanLiteralSchema = v.literal(true); // true`

[](#instance-schema)Instance schema
-----------------------------------

With schema functions like [`blob`](/api/blob/), [`date`](/api/date/), [`map`](/api/map/) and [`set`](/api/set/) Valibot already covers the most common JavaScript classes. However, there are many more classes that you may want to validate. For this purpose, you can use the [`instance`](/api/instance/) schema function. It takes a class as its first argument and returns a schema that matches only instances of that class.

`import * as v from 'valibot';  const ErrorSchema = v.instance(Error); // Error const UrlSchema = v.instance(URL); // URL`

[](#custom-schema)Custom schema
-------------------------------

The [`custom`](/api/custom/) schema function is a bit more advanced. It allows you to define a schema that matches a value based on a custom function. Use it whenever you need to define a schema that cannot be expressed using any of the other schema functions.

The function receives the value to validate as its first argument and must return a boolean value. If the function returns `true`, the value is considered valid. Otherwise, it is considered invalid.

``import * as v from 'valibot';  const PixelStringSchema = v.custom<`${number}px`>((input) =>   typeof input === 'string' ? /^\d+px$/.test(input) : false );``

[](#lazy-schema)Lazy schema
---------------------------

The [`lazy`](/api/lazy/) schema function allows you to define recursive schemas. A recursive schema is a schema that references itself. For example, you can use it to define a schema for a tree-like data structure.

> Due to a TypeScript limitation, the input and output types cannot be inferred automatically in this case. Therefore, you must explicitly specify these types using the [`GenericSchema`](/api/GenericSchema/) type.

`import * as v from 'valibot';  type BinaryTree = {   element: string;   left: BinaryTree | null;   right: BinaryTree | null; };  const BinaryTreeSchema: v.GenericSchema<BinaryTree> = v.object({   element: v.string(),   left: v.nullable(v.lazy(() => BinaryTreeSchema)),   right: v.nullable(v.lazy(() => BinaryTreeSchema)), });`

### [](#json-schema)JSON schema

Another practical use case for `lazy` is a schema for all possible `JSON` values. These are all values that can be serialized and deserialized using `JSON.stringify()` and `JSON.parse()`.

`import * as v from 'valibot';  type JsonData =   | string   | number   | boolean   | null   | { [key: string]: JsonData }   | JsonData[];  const JsonSchema: v.GenericSchema<JsonData> = v.lazy(() =>   v.union([     v.string(),     v.number(),     v.boolean(),     v.null(),     v.record(v.string(), JsonSchema),     v.array(JsonSchema),   ]) );`

[](#naming-convention)Naming convention
=======================================

In many cases a schema is created and exported together with the inferred type. There are two naming conventions for this procedure that we recommend you to use when working with Valibot. In this guide we will explain both of them and share why we think they might make sense.

> You don't have to follow any of these conventions. They are only recommendations.

[](#convention-1)Convention 1
-----------------------------

The first naming convention exports the schema and type with the same name. The advantage of this is that the names are short and the boilerplate is low, since the schema and type can be imported together.

We also recommend to follow the [PascalCase](https://en.wikipedia.org/wiki/Naming_convention_\(programming\)) naming convention. This means that each word starts with an uppercase letter. This is a common convention for TypeScript types, and since schemas basically provide runtime validation of types, it makes sense to use this convention for schemas as well.

### [](#example)Example

In the following example, a schema is created for a user object. In order to follow the naming convention, the schema and the type are exported with the same name.

`import * as v from 'valibot';  export const PublicUser = v.object({   name: v.pipe(v.string(), v.maxLength(30)),   email: v.pipe(v.string(), v.email()),   avatar: v.nullable(v.file()),   bio: v.pipe(v.string(), v.maxLength(1000)), });  export type PublicUser = v.InferOutput<typeof PublicUser>;`

The schema and type can then be imported and used together.

``import * as v from 'valibot'; import { PublicUser } from './types';  // Use `PublicUser` as a type const publicUsers: PublicUser[] = [];  publicUsers.push(   // Use `PublicUser` as a schema   v.parse(PublicUser, {     name: 'Jane Doe',     email: 'jane@example.com',     avatar: null,     bio: 'Lorem ipsum ...',   }) );``

[](#convention-2)Convention 2
-----------------------------

The first naming convention can cause naming conflicts with other classes and types. It also causes a problem when you need to export both the input and output types of a schema.

The second naming convention provides a solution. It also follows the [PascalCase](https://en.wikipedia.org/wiki/Naming_convention_\(programming\)) naming convention, but adds an appropriate suffix to each export. Schemas get the suffix `Schema`, input types get the suffix `Input` and output types get the suffix `Output`.

> If there is no difference between the input and output type, the suffix `Data` can optionally be used to indicate this.

This requires the schema and types to be imported separately, which increases the overhead. However, the naming convention is more precise, flexible, and works in any use case.

### [](#example-1)Example

In the following example, a schema is created for an image object. In order to follow the naming convention, the schema and the types are exported with different names.

`import * as v from 'valibot';  export const ImageSchema = v.object({   status: v.optional(v.picklist(['public', 'private']), 'private'),   created: v.optional(v.date(), () => new Date()),   title: v.pipe(v.string(), v.maxLength(100)),   source: v.pipe(v.string(), v.url()),   size: v.pipe(v.number(), v.minValue(0)), });  export type ImageInput = v.InferInput<typeof ImageSchema>; export type ImageOutput = v.InferOutput<typeof ImageSchema>;`

The schema and the input and output types can then be imported and used separately.

`import * as v from 'valibot'; import { ImageInput, ImageOutput, ImageSchema } from './types';  export function createImage(input: ImageInput): ImageOutput {   return v.parse(ImageSchema, input); }`

> Do you have ideas for improving these conventions? We welcome your feedback and suggestions. Feel free to create an [issue](https://github.com/fabian-hiller/valibot/issues/new) on GitHub.

[](#async-validation)Async validation
=====================================

By default, Valibot validates each schema synchronously. This is usually the fastest way to validate unknown data, but sometimes you need to validate something asynchronously. For example, you might want to check if a username already exists in your database.

[](#how-it-works)How it works
-----------------------------

To be able to do this, Valibot provides an asynchronous implementation when necessary. The only difference is that the asynchronous implementation is promise-based. Otherwise, the API and functionality is exactly the same.

### [](#naming)Naming

The asynchronous implementation starts with the same name as the synchronous one, but adds the suffix `Async` to the end. For example, the asynchronous implementation of [`pipe`](/api/pipe/) is called [`pipeAsync`](/api/pipeAsync/) and the asynchronous implementation of [`object`](/api/object/) is called [`objectAsync`](/api/objectAsync/).

### [](#nesting)Nesting

Asynchronous functions can only be nested inside other asynchronous functions. This means that if you need to validate a string within an object asynchronously, you must also switch the object validation to the asynchronous implementation.

This is not necessary in the other direction. You can nest synchronous functions within asynchronous functions, and we recommend that you do so in most cases to keep complexity and bundle size to a minimum.

#### [](#rule-of-thumb)Rule of thumb

We recommend that you always start with the synchronous implementation, and only move the necessary parts to the asynchronous implementation as needed. If you are using TypeScript, it is not possible to make a mistake here, as our API is completely type-safe and will notify you when you embed an asynchronous function into a synchronous function.

### [](#example)Example

Let's say you want to validate a profile object and the username should be checked asynchronously against your database. Only the object and username validation needs to be asynchronous, the rest can stay synchronous.

`import * as v from 'valibot'; import { isUsernameAvailable } from '~/api';  const ProfileSchema = v.objectAsync({   username: v.pipeAsync(v.string(), v.checkAsync(isUsernameAvailable)),   avatar: v.pipe(v.string(), v.url()),   description: v.pipe(v.string(), v.maxLength(1000)), });`

[](#json-schema)JSON Schema
===========================

In favor of a larger feature set and smaller bundle size, Valibot is not implemented with JSON Schema in mind. However, in some use cases, you may still need a JSON Schema. This guide will show you how to convert Valibot schemas to JSON Schema format.

[](#valibot-to-json-schema)Valibot to JSON Schema
-------------------------------------------------

A large part of Valibot's schemas are JSON Schema compatible and can be easily converted to the JSON Schema format using the official `toJsonSchema` function. This function is provided via a separate package called [`@valibot/to-json-schema`](https://github.com/fabian-hiller/valibot/tree/main/packages/to-json-schema).

> See the [README](https://github.com/fabian-hiller/valibot/blob/main/packages/to-json-schema/README.md) of the `@valibot/to-json-schema` package for more details.

`import { toJsonSchema } from '@valibot/to-json-schema'; import * as v from 'valibot';  const ValibotEmailSchema = v.pipe(v.string(), v.email()); const JsonEmailSchema = toJsonSchema(ValibotEmailSchema); // -> { type: 'string', format: 'email' }`

[](#cons-of-json-schema)Cons of JSON Schema
-------------------------------------------

Valibot schemas intentionally do not output JSON Schema natively. This is because JSON Schema is limited to JSON-compliant data structures. In addition, more advanced features like transformations are not supported. Since we want to leverage the full power of TypeScript, we output a custom format instead.

Another drawback of JSON Schema is that JSON Schema itself does not contain any validation logic. Therefore, an additional function is required that can validate the entire JSON Schema specification. This approach is usually not tree-shakable and results in a large bundle size.

In contrast, Valibot's API design and implementation is completely modular. Every schema is independent and contains its own validation logic. This allows the schemas to be plugged together like LEGO bricks, resulting in a much smaller bundle size due to tree shaking.

[](#pros-of-json-schema)Pros of JSON Schema
-------------------------------------------

Despite these drawbacks, JSON Schema is still widely used in the industry because it also has many advantages. For example, JSON Schemas can be used across programming languages and tools. In addition, JSON Schemas are serializable and can be easily stored in a database or transmitted over a network.

[](#internationalization)Internationalization
=============================================

Providing error messages in the native language of your users can improve the user experience and adoption rate of your software. That is why we offer several flexible ways to easily implement i18n.

[](#official-translations)Official translations
-----------------------------------------------

The fastest way to get started with i18n is to use Valibot's official translations. They are provided in a separate package called [`@valibot/i18n`](https://github.com/fabian-hiller/valibot/tree/main/packages/i18n).

> If you are missing a translation, feel free to open an [issue](https://github.com/fabian-hiller/valibot/issues/new) or pull request on GitHub.

### [](#import-translations)Import translations

Each translation in this package is implemented modularly and exported as a submodule. This allows you to import only the translations you actually need to keep your bundle size small.

`// Import every translation (not recommended) import '@valibot/i18n';  // Import every translation for a specific language import '@valibot/i18n/de';  // Import only the translation for schema functions import '@valibot/i18n/de/schema';  // Import only the translation for a specific pipeline function import '@valibot/i18n/de/minLength';`

The submodules use sideeffects to load the translations into a global storage that the schema and validation functions access when adding the error message to an issue.

### [](#select-language)Select language

The language used is then selected by the `lang` configuration. You can set it globally with [`setGlobalConfig`](/api/setGlobalConfig/) or locally when parsing unknown data via [`parse`](/api/parse/) or [`safeParse`](/api/safeParse/).

`import * as v from 'valibot';  // Set the language configuration globally v.setGlobalConfig({ lang: 'de' });  // Set the language configuration locally v.parse(Schema, input, { lang: 'de' });`

[](#custom-translations)Custom translations
-------------------------------------------

You can use the same APIs as [`@valibot/i18n`](https://github.com/fabian-hiller/valibot/tree/main/packages/i18n) to add your own translations to the global storage. Alternatively, you can also pass them directly to a specific schema or validation function as the first optional argument.

> You can either enter the translations manually or use an i18n library like [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).

### [](#set-translations-globally)Set translations globally

You can add translations with [`setGlobalMessage`](/api/setGlobalMessage/), [`setSchemaMessage`](/api/setSchemaMessage/) and [`setSpecificMessage`](/api/setSpecificMessage/) in three different hierarchy levels. When creating an issue, I first check if a specific translation is available, then the translation for schema functions, and finally the global translation.

``import * as v from 'valibot';  // Set the translation globally (can be used as a fallback) v.setGlobalMessage((issue) => `Invalid input: ...`, 'en');  // Set the translation globally for every schema functions v.setSchemaMessage((issue) => `Invalid type: ...`, 'en');  // Set the translation globally for a specific function v.setSpecificMessage(v.minLength, (issue) => `Invalid length: ...`, 'en');``

### [](#set-translations-locally)Set translations locally

If you prefer to define the translations individually, you can pass them as the first optional argument to schema and validation functions. We recommend using an i18n library like [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) in this case.

`import * as v from 'valibot'; import * as m from './paraglide/messages.js';  const LoginSchema = v.object({   email: v.pipe(     v.string(),     v.nonEmpty(m.emailRequired),     v.email(m.emailInvalid)   ),   password: v.pipe(     v.string(),     v.nonEmpty(m.passwordRequired),     v.minLength(8, m.passwordInvalid)   ), });`

[](#migrate-to-v0310)Migrate to v0.31.0
=======================================

Migrating Valibot from an older version to v0.31.0 isn't complicated. Except for the new [`pipe`](/api/pipe/) method, most things remain the same. The following guide will help you to migrate automatically or manually step by step and also point out important differences.

[](#automatic-upgrade)Automatic upgrade
---------------------------------------

We worked together with [Codemod](https://codemod.com/registry/valibot-migrate-to-v0-31-0) and [Grit](https://docs.grit.io/registry/github.com/fabian-hiller/valibot/migrate_to_v0_31_0) to automatically upgrade your schemas to the new version with a single CLI command. Both codemods are similar. You can use one or the other. Simply run the command in the directory of your project.

> We recommend using a version control system like [Git](https://git-scm.com/) so that you can revert changes if the codemod screws something up.

`# Codemod npx codemod valibot/migrate-to-v0.31.0  # Grit npx @getgrit/cli apply github.com/fabian-hiller/valibot#migrate_to_v0_31_0`

Please create an [issue](https://github.com/fabian-hiller/valibot/issues/new) if you encounter any problems or unexpected behavior with the provided codemods.

[](#restructure-code)Restructure code
-------------------------------------

As mentioned above, one of the biggest differences is the new [`pipe`](/api/pipe/) method. Previously, you passed the pipeline as an array to a schema function. Now you pass the schema with various actions to the new [`pipe`](/api/pipe/) method to extend a schema.

`// Change this const Schema = v.string([v.email()]);  // To this const Schema = v.pipe(v.string(), v.email());`

We will be publishing a [blog post](/blog/valibot-v0.31.0-is-finally-available/) soon explaining all the benefits of this change. In the meantime, you can read the description of discussion [#463](https://github.com/fabian-hiller/valibot/discussions/463) and PR [#502](https://github.com/fabian-hiller/valibot/pull/502), which introduced this change.

[](#change-names)Change names
-----------------------------

Most of the names are the same as before. However, there are some exceptions. The following table shows all names that have changed.

v0.30.0

v0.31.0

`anyAsync`

[`any`](/api/any/)

`BaseSchema`

[`GenericSchema`](/api/GenericSchema/)

`bigintAsync`

[`bigint`](/api/bigint/)

`blobAsync`

[`blob`](/api/blob/)

`booleanAsync`

[`boolean`](/api/boolean/)

`custom`

[`check`](/api/check/)

`customAsync`

[`checkAsync`](/api/checkAsync/)

`coerce`

[`pipe`](/api/pipe/), [`unknown`](/api/unknown/) and [`transform`](/api/transform/)

`dateAsync`

[`date`](/api/date/)

`enumAsync`

[`enum_`](/api/enum/)

`Input`

[`InferInput`](/api/InferInput/)

`instanceAsync`

[`instance`](/api/instance/)

`literalAsync`

[`literal`](/api/literal/)

`nanAsync`

[`nan`](/api/nan/)

`neverAsync`

[`never`](/api/never/)

`nullAsync`

[`null_`](/api/null/)

`numberAsync`

[`number`](/api/number/)

`Output`

[`InferOutput`](/api/InferOutput/)

`picklistAsync`

[`picklist`](/api/picklist/)

`SchemaConfig`

[`Config`](/api/Config/)

`special`

[`custom`](/api/custom/)

`specialAsync`

[`customAsync`](/api/customAsync/)

`SchemaConfig`

[`Config`](/api/string/)

`stringAsync`

[`string`](/api/string/)

`symbolAsync`

[`symbol`](/api/symbol/)

`undefinedAsync`

[`undefined_`](/api/undefined/)

`unknownAsync`

[`unknown`](/api/unknown/)

`toCustom`

[`transform`](/api/transform/)

`toTrimmed`

[`trim`](/api/trim/)

`toTrimmedEnd`

[`trimEnd`](/api/trimEnd/)

`toTrimmedStart`

[`trimStart`](/api/trimStart/)

`voidAsync`

[`void_`](/api/void/)

[](#special-cases)Special cases
-------------------------------

More complex schemas may require a bit more restructuring. This section provides more details on how to migrate specific functions.

### [](#objects-and-tuples)Objects and tuples

Previously, you could pass a `rest` argument to the [`object`](/api/object/) and [`tuple`](/api/tuple/) schemas to define the behavior for unknown entries and items. We have removed the `rest` argument to simplify the implementation and reduce the bundle size if this functionality is not needed. If you do need this functionality, there is now a new [`objectWithRest`](/api/objectWithRest/) and [`tupleWithRest`](/api/tupleWithRest/) schema.

`// Change this const ObjectSchema = v.object({ key: v.string() }, v.null_()); const TupleSchema = v.tuple([v.string()], v.null_());  // To this const ObjectSchema = v.objectWithRest({ key: v.string() }, v.null_()); const TupleSchema = v.tupleWithRest([v.string()], v.null_());`

To further improve the developer experience, we have also added a [`looseObject`](/api/looseObject/), [`looseTuple`](/api/looseTuple/), [`strictObject`](/api/strictObject/) and [`strictTuple`](/api/strictTuple/) schema. These schemas allow or disallow unknown entries or items.

`// Change this const LooseObjectSchema = v.object({ key: v.string() }, v.unknown()); const LooseTupleSchema = v.tuple([v.string()], v.unknown()); const StrictObjectSchema = v.object({ key: v.string() }, v.never()); const StrictTupleSchema = v.tuple([v.string()], v.never());  // To this const LooseObjectSchema = v.looseObject({ key: v.string() }); const LooseTupleSchema = v.looseTuple([v.string()]); const StrictObjectSchema = v.strictObject({ key: v.string() }); const StrictTupleSchema = v.strictTuple([v.string()]);`

### [](#object-merging)Object merging

Since there are now 4 different object schemas, we could no longer provide a simple `merge` function that works in all cases, as we never know which schema you want to merge the other objects into. But there is a simple workaround with a similar developer experience.

`const ObjectSchema1 = v.object({ foo: v.string() }); const ObjectSchema2 = v.object({ bar: v.number() });  // Change this const MergedObject = v.merge([ObjectSchema1, ObjectSchema2]);  // To this const MergedObject = v.object({   ...ObjectSchema1.entries,   ...ObjectSchema2.entries, });`

### [](#brand-and-transform)Brand and transform

Previously, [`brand`](/api/brand/) and [`transform`](/api/transform/) were methods that could be wrapped around a schema to modify it. With our new [`pipe`](/api/pipe/) method, this is no longer necessary. Instead, [`brand`](/api/brand/) and [`transform`](/api/transform/) are now transformation actions that can be placed directly in a pipeline, resulting in better readability, especially for complex schemas.

`// Change this const BrandedSchema = v.brand(v.string(), 'foo'); const TransformedSchema = v.transform(v.string(), (input) => input.length);  // To this const BrandedSchema = v.pipe(v.string(), v.brand('foo')); const TransformedSchema = v.pipe(   v.string(),   v.transform((input) => input.length) );`

### [](#coerce-method)Coerce method

The `coerce` method has been removed because we felt it was an insecure API. In most cases, you don't want to coerce an unknown input into a specific data type. Instead, you want to transform a specific data type into another specific data type. For example, a string or a number into a date. To explicitly define the input type, we recommend using the new [`pipe`](/api/pipe/) method together with the [`transform`](/api/transform/) action to achieve the same functionality.

`// Change this const DateSchema = v.coerce(v.date(), (input) => new Date(input));  // To this const DateSchema = v.pipe(   v.union([v.string(), v.number()]),   v.transform((input) => new Date(input)) );`

### [](#flatten-issues)Flatten issues

Previously, the [`flatten`](/api/flatten/) function accepted a [`ValiError`](/api/ValiError/) or an array of issues. We have simplified the implementation by only allowing an array of issues to be passed.

`// Change this const flatErrors = v.flatten(error);  // To this const flatErrors = v.flatten(error.issues);`

[](#migrate-from-zod)Migrate from Zod
=====================================

Migrating from [Zod](https://zod.dev/) to Valibot is very easy in most cases since both APIs have a lot of similarities. The following guide will help you migrate step by step and also point out important differences.

> If anything is unclear or missing, please create an [issue](https://github.com/fabian-hiller/valibot/issues/new) on GitHub. We are very interested in making this guide as good as possible.

[](#replace-imports)Replace imports
-----------------------------------

The first thing to do after [installing](/guides/installation/) Valibot is to update your imports. Just change your Zod imports to Valibot's and replace all occurrences of `z.` with `v.`.

`// Change this import { z } from 'zod'; const Schema = z.object({ key: z.string() });  // To this import * as v from 'valibot'; const Schema = v.object({ key: v.string() });`

[](#restructure-code)Restructure code
-------------------------------------

One of the biggest differences between Zod and Valibot is the way you further validate a given type. In Zod, you chain methods like `.email` and `.endsWith`. In Valibot you use [pipelines](/guides/pipelines/) to do the same thing. This is a function that starts with a schema and is followed by up to 19 validation or transformation actions.

`// Change this const Schema = z.string().email().endsWith('@example.com');  // To this const Schema = v.pipe(v.string(), v.email(), v.endsWith('@example.com'));`

Due to the modular design of Valibot, also all other methods like `.parse` or `.safeParse` have to be used a little bit differently. Instead of chaining them, you usually pass the schema as the first argument and move any existing arguments one position to the right.

`// Change this const value = z.string().parse('foo');  // To this const value = v.parse(v.string(), 'foo');`

We recommend that you read our [mental model](/guides/mental-model/) guide to understand how the individual functions of Valibot's modular API work together.

[](#change-names)Change names
-----------------------------

Most of the names are the same as in Zod. However, there are some exceptions. The following table shows all names that have changed.

Zod

Valibot

`and`

[`intersect`](/api/intersect/)

`catch`

[`fallback`](/api/fallback/)

`catchall`

[`objectWithRest`](/api/objectWithRest/)

`coerce`

[`pipe`](/api/pipe/), [`unknown`](/api/unknown/) and [`transform`](/api/transform/)

`datetime`

[`isoDate`](/api/isoDate/), [`isoDateTime`](/api/isoDateTime/)

`default`

[`optional`](/api/optional/)

`discriminatedUnion`

[`variant`](/api/variant/)

`element`

`item`

`enum`

[`picklist`](/api/picklist/)

`extend`

[Object merging](/guides/intersections/#merge-objects)

`gt`

[`gtValue`](/api/gtValue/)

`gte`

[`minValue`](/api/minValue/)

`infer`

[`InferOutput`](/api/InferOutput/)

`int`

[`integer`](/api/integer/)

`input`

[`InferInput`](/api/InferInput/)

`instanceof`

[`instance`](/api/instance/)

`intersection`

[`intersect`](/api/intersect/)

`lt`

[`ltValue`](/api/ltValue/)

`lte`

[`maxValue`](/api/maxValue/)

`max`

[`maxLength`](/api/maxLength/), [`maxSize`](/api/maxSize/), [`maxValue`](/api/maxValue/)

`min`

[`minLength`](/api/minLength/), [`minSize`](/api/minSize/), [`minValue`](/api/minValue/)

`nativeEnum`

[`enum`](/api/enum/)

`negative`

[`maxValue`](/api/maxValue/)

`nonnegative`

[`minValue`](/api/minValue/)

`nonpositive`

[`maxValue`](/api/maxValue/)

`or`

[`union`](/api/union/)

`output`

[`InferOutput`](/api/InferOutput/)

`passthrough`

[`looseObject`](/api/looseObject/)

`positive`

[`minValue`](/api/minValue/)

`refine`

[`check`](/api/check/), [`forward`](/api/forward/)

`rest`

[`tuple`](/api/tuple/)

`safe`

[`safeInteger`](/api/safeInteger/)

`shape`

`entries`

`strict`

[`strictObject`](/api/strictObject/)

`strip`

[`object`](/api/object/)

`superRefine`

[`rawCheck`](/api/rawCheck/), [`rawTransform`](/api/rawTransform/)

[](#other-details)Other details
-------------------------------

Below are some more details that may be helpful when migrating from Zod to Valibot.

### [](#object-and-tuple)Object and tuple

To specify whether objects or tuples should allow or prevent unknown values, Valibot uses different schema functions. Zod uses the methods `.passthrough`, `.strict`, `.strip`, `.catchall` and `.rest` instead. See the [objects](/guides/objects/) and [arrays](/guides/arrays/) guide for more details.

`// Change this const ObjectSchema = z.object({ key: z.string() }).strict();  // To this const ObjectSchema = v.strictObject({ key: v.string() });`

### [](#error-messages)Error messages

For individual error messages, you can pass a string or an object to Zod. It also allows you to differentiate between an error message for "required" and "invalid\_type". With Valibot you just pass a single string instead.

`// Change this const SchemaSchema = z   .string({ invalid_type_error: 'Not a string' })   .min(5, { message: 'Too short' });  // To this const StringSchema = v.pipe(   v.string('Not a string'),   v.minLength(5, 'Too short') );`

### [](#coerce-type)Coerce type

To enforce primitive values, you can use a method of the `coerce` object in Zod. There is no such object or function in Valibot. Instead, you use a pipeline with a [`transform`](/api/transform/) action as the second argument. This forces you to explicitly define the input, resulting in safer code.

`// Change this const NumberSchema = z.coerce.number();  // To this const NumberSchema = v.pipe(v.unknown(), v.transform(Number));`

Instead of [`unknown`](/api/unknown/) as in the previous example, we usually recommend using a specific schema such as [`string`](/api/string/) to improve type safety. This allows you, for example, to validate the formatting of the string with [`decimal`](/api/decimal/) before transforming it to a number.

`const NumberSchema = v.pipe(v.string(), v.decimal(), v.transform(Number));`

### [](#async-validation)Async validation

Similar to Zod, Valibot supports synchronous and asynchronous validation. However, the API is a little bit different. See the [async guide](/guides/async-validation/) for more details.

[](#migrate-from-ajv)Migrate from Ajv
=====================================

> The content of this page is not yet ready. Check back in a few weeks.

[](#migrate-from-joi)Migrate from Joi
=====================================

> The content of this page is not yet ready. Check back in a few weeks.

[](#migrate-from-yup)Migrate from Yup
=====================================

> The content of this page is not yet ready. Check back in a few weeks.