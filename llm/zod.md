zod version: 3.25.32, last updated: 2025-05-28T10:46:05.749Z

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Introducing Zod 4
=================

After a year of active development: Zod 4 is now stable! It's faster, slimmer, more `tsc`\-efficient, and implements some long-requested features.

❤️

Huge thanks to [Clerk](https://go.clerk.com/zod-clerk), who supported my work on Zod 4 through their extremely generous [OSS Fellowship](https://clerk.com/blog/zod-fellowship). They were an amazing partner throughout the (much longer than anticipated!) development process.

[Versioning](?id=versioning)
----------------------------

To simplify the migration process both for users and Zod's ecosystem of associated libraries, Zod 4 will initially published alongside Zod 3 as part of the `zod@3.25` release. Despite the version number, it is considered stable and ready for production use.

To upgrade:

    npm upgrade zod@^3.25.0

Then import Zod 4 from the `"/v4"` subpath:

    import { z } from "zod/v4";

Down the road, when there's broad support for Zod 4, we'll publish `zod@4.0.0` on npm. At this point, Zod 4 will be exported from the package root (`"zod"`). The `"zod/v4"` subpath will remain available. For a detailed writeup on the reasons for this versioning scheme, refer to [this issue](https://github.com/colinhacks/zod/issues/4371).

For a complete list of breaking changes, refer to the [Migration guide](/v4/changelog). This post focuses on new features & enhancements.

[Why a new major version?](?id=why-a-new-major-version)
-------------------------------------------------------

Zod v3.0 was released in May 2021 (!). Back then Zod had 2700 stars on GitHub and 600k weekly downloads. Today it has 37.8k stars and 31M weekly downloads (up from 23M when the beta came out 6 weeks ago!). After 24 minor versions, the Zod 3 codebase had hit a ceiling; the most commonly requested features and improvements require breaking changes.

Zod 4 fixes a number of long-standing design limitations of Zod 3 in one fell swoop, paving the way for several long-requested features and a huge leap in performance. It closes 9 of Zod's [10 most upvoted open issues](https://github.com/colinhacks/zod/issues?q=is%3Aissue%20state%3Aopen%20sort%3Areactions-%2B1-desc). With luck, it will serve as the new foundation for many more years to come.

For a scannable breakdown of what's new, see the table of contents. Click on any item to jump to that section.

[Benchmarks](?id=benchmarks)
----------------------------

You can run these benchmarks yourself in the Zod repo:

    $ git clone git@github.com:colinhacks/zod.git
    $ cd zod
    $ git switch v4
    $ pnpm install

Then to run a particular benchmark:

    $ pnpm bench <name>

### [14x faster string parsing](?id=14x-faster-string-parsing)

    $ pnpm bench string
    runtime: node v22.13.0 (arm64-darwin)
     
    benchmark      time (avg)             (min … max)       p75       p99      p999
    ------------------------------------------------- -----------------------------
    • z.string().parse
    ------------------------------------------------- -----------------------------
    zod3          363 µs/iter       (338 µs … 683 µs)    351 µs    467 µs    572 µs
    zod4       24'674 ns/iter    (21'083 ns … 235 µs) 24'209 ns 76'125 ns    120 µs
     
    summary for z.string().parse
      zod4
       14.71x faster than zod3

### [7x faster array parsing](?id=7x-faster-array-parsing)

    $ pnpm bench array
    runtime: node v22.13.0 (arm64-darwin)
     
    benchmark      time (avg)             (min … max)       p75       p99      p999
    ------------------------------------------------- -----------------------------
    • z.array() parsing
    ------------------------------------------------- -----------------------------
    zod3          147 µs/iter       (137 µs … 767 µs)    140 µs    246 µs    520 µs
    zod4       19'817 ns/iter    (18'125 ns … 436 µs) 19'125 ns 44'500 ns    137 µs
     
    summary for z.array() parsing
      zod4
       7.43x faster than zod3

### [6.5x faster object parsing](?id=65x-faster-object-parsing)

This runs the [Moltar validation library benchmark](https://moltar.github.io/typescript-runtime-type-benchmarks/).

    $ pnpm bench object-moltar
    benchmark      time (avg)             (min … max)       p75       p99      p999
    ------------------------------------------------- -----------------------------
    • z.object() safeParse
    ------------------------------------------------- -----------------------------
    zod3          805 µs/iter     (771 µs … 2'802 µs)    804 µs    928 µs  2'802 µs
    zod4          124 µs/iter     (118 µs … 1'236 µs)    119 µs    231 µs    329 µs
     
    summary for z.object() safeParse
      zod4
       6.5x faster than zod3

[100x reduction in `tsc` instantiations](?id=100x-reduction-in-tsc-instantiations)
----------------------------------------------------------------------------------

Consider the following simple file:

    import { z } from "zod/v4";
     
    export const A = z.object({
      a: z.string(),
      b: z.string(),
      c: z.string(),
      d: z.string(),
      e: z.string(),
    });
     
    export const B = A.extend({
      f: z.string(),
      g: z.string(),
      h: z.string(),
    });

Compiling this file with `tsc --extendedDiagnostics` using `"zod/v3"` results in >25000 type instantiations. With `"zod/v4"` it only results in ~175.

The Zod repo contains a `tsc` benchmarking playground. Try this for yourself using the compiler benchmarks in `packages/tsc`. The exact numbers may change as the implementation evolves.

    $ cd packages/tsc
    $ pnpm bench object-with-extend

More importantly, Zod 4 has redesigned and simplified the generics of `ZodObject` and other schema classes to avoid some pernicious "instantiation explosions". For instance, chaining `.extend()` and `.omit()` repeatedly—something that previously caused compiler issues:

    import { z } from "zod/v4";
     
    export const a = z.object({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const b = a.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const c = b.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const d = c.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const e = d.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const f = e.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const g = f.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const h = g.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const i = h.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const j = i.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const k = j.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const l = k.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const m = l.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const n = m.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const o = n.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const p = o.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const q = p.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });

In Zod 3, this took `4000ms` to compile; and adding additional calls to `.extend()` would trigger a "Possibly infinite" error. In Zod 4, this compiles in `400ms`, `10x` faster.

Coupled with the upcoming [`tsgo`](https://github.com/microsoft/typescript-go) compiler, Zod 4's editor performance will scale to vastly larger schemas and codebases.

[2x reduction in core bundle size](?id=2x-reduction-in-core-bundle-size)
------------------------------------------------------------------------

Consider the following simple script.

    import { z } from "zod/v4";
     
    const schema = z.boolean();
     
    schema.parse(true);

It's about as simple as it gets when it comes to validation. That's intentional; it's a good way to measure the _core bundle size_—the code that will end up in the bundle even in simple cases. We'll bundle this with `rollup` using both Zod 3 and Zod 4 and compare the final bundles.

| Package | Bundle (gzip) |
| --- | --- |
| `zod/v3` | `12.47kb` |
| `zod/v4` | `5.36kb` |

The core bundle is ~57% smaller in Zod 4 (2.3x). That's good! But we can do a lot better.

[Introducing Zod Mini](?id=introducing-zod-mini)
------------------------------------------------

Zod's method-heavy API is fundamentally difficult to tree-shake. Even our simple `z.boolean()` script pulls in the implementations of a bunch of methods we didn't use, like `.optional()`, `.array()`, etc. Writing slimmer implementations can only get you so far. That's where `zod/v4-mini` comes in.

    npm install zod@^3.25.0

It's a Zod variant with a functional, tree-shakable API that corresponds one-to-one with `zod`. Where Zod uses methods, `zod/v4-mini` generally uses wrapper functions:

Zod MiniZod

    import { z } from "zod/v4-mini";
     
    z.optional(z.string());
     
    z.union([z.string(), z.number()]);
     
    z.extend(z.object({ /* ... */ }), { age: z.number() });

Not all methods are gone! The parsing methods are identical in `zod/v4` and `zod/v4-mini`.

    import { z } from "zod/v4-mini";
     
    z.string().parse("asdf");
    z.string().safeParse("asdf");
    await z.string().parseAsync("asdf");
    await z.string().safeParseAsync("asdf");

There's also a general-purpose `.check()` method used to add refinements.

Zod MiniZod

    import { z } from "zod/v4-mini";
     
    z.array(z.number()).check(
      z.minLength(5), 
      z.maxLength(10),
      z.refine(arr => arr.includes(5))
    );

The following top-level refinements are available in `zod/v4-mini`. It should be fairly self-explanatory which methods they correspond to.

    import { z } from "zod/v4-mini";
     
    // custom checks
    z.refine();
     
    // first-class checks
    z.lt(value);
    z.lte(value); // alias: z.maximum()
    z.gt(value);
    z.gte(value); // alias: z.minimum()
    z.positive();
    z.negative();
    z.nonpositive();
    z.nonnegative();
    z.multipleOf(value);
    z.maxSize(value);
    z.minSize(value);
    z.size(value);
    z.maxLength(value);
    z.minLength(value);
    z.length(value);
    z.regex(regex);
    z.lowercase();
    z.uppercase();
    z.includes(value);
    z.startsWith(value);
    z.endsWith(value);
    z.property(key, schema); // for object schemas; check `input[key]` against `schema`
    z.mime(value); // for file schemas (see below)
     
    // overwrites (these *do not* change the inferred type!)
    z.overwrite(value => newValue);
    z.normalize();
    z.trim();
    z.toLowerCase();
    z.toUpperCase();

This more functional API makes it easier for bundlers to tree-shake the APIs you don't use. While `zod/v4` is still recommended for the majority of use cases, any projects with uncommonly strict bundle size constraints should consider `zod/v4-mini`.

### [6.6x reduction in core bundle size](?id=66x-reduction-in-core-bundle-size)

Here's the script from above, updated to use `"zod/v4-mini"` instead of `"zod"`.

    import { z } from "zod/v4-mini";
     
    const schema = z.boolean();
    schema.parse(false);

When we build this with `rollup`, the gzipped bundle size is `1.88kb`. That's an 85% (6.6x) reduction in core bundle size compared to `zod@3`.

| Package | Bundle (gzip) |
| --- | --- |
| `zod/v3` | `12.47kb` |
| `zod/v4` | `5.36kb` |
| `zod/v4-mini` | `1.88kb` |

Learn more on the dedicated [`zod/v4-mini`](/packages/mini) docs page. Complete API details are mixed into existing documentation pages; code blocks contain separate tabs for `"Zod"` and `"Zod Mini"` wherever their APIs diverge.

[Metadata](?id=metadata)
------------------------

Zod 4 introduces a new system for adding strongly-typed metadata to your schemas. Metadata isn't stored inside the schema itself; instead it's stored in a "schema registry" that associates a schema with some typed metadata. To create a registry with `z.registry()`:

    import { z } from "zod/v4";
     
    const myRegistry = z.registry<{ title: string; description: string }>();

To add schemas to your registry:

    const emailSchema = z.string().email();
     
    myRegistry.add(emailSchema, { title: "Email address", description: "..." });
    myRegistry.get(emailSchema);
    // => { title: "Email address", ... }

Alternatively, you can use the `.register()` method on a schema for convenience:

    emailSchema.register(myRegistry, { title: "Email address", description: "..." })
    // => returns emailSchema

### [The global registry](?id=the-global-registry)

Zod also exports a global registry `z.globalRegistry` that accepts some common JSON Schema-compatible metadata:

    z.globalRegistry.add(z.string(), { 
      id: "email_address",
      title: "Email address",
      description: "Provide your email",
      examples: ["naomie@example.com"],
      extraKey: "Additional properties are also allowed"
    });

### [`.meta()`](?id=meta)

To conveniently add a schema to `z.globalRegistry`, use the `.meta()` method.

    z.string().meta({ 
      id: "email_address",
      title: "Email address",
      description: "Provide your email",
      examples: ["naomie@example.com"],
      // ...
    });

For compatibility with Zod 3, `.describe()` is still available, but `.meta()` is preferred.

    z.string().describe("An email address");
     
    // equivalent to
    z.string().meta({ description: "An email address" });

[JSON Schema conversion](?id=json-schema-conversion)
----------------------------------------------------

Zod 4 introduces first-party JSON Schema conversion via `z.toJSONSchema()`.

    import { z } from "zod/v4";
     
    const mySchema = z.object({name: z.string(), points: z.number()});
     
    z.toJSONSchema(mySchema);
    // => {
    //   type: "object",
    //   properties: {
    //     name: {type: "string"},
    //     points: {type: "number"},
    //   },
    //   required: ["name", "points"],
    // }

Any metadata in `z.globalRegistry` is automatically included in the JSON Schema output.

    const mySchema = z.object({
      firstName: z.string().describe("Your first name"),
      lastName: z.string().meta({ title: "last_name" }),
      age: z.number().meta({ examples: [12, 99] }),
    });
     
    z.toJSONSchema(mySchema);
    // => {
    //   type: 'object',
    //   properties: {
    //     firstName: { type: 'string', description: 'Your first name' },
    //     lastName: { type: 'string', title: 'last_name' },
    //     age: { type: 'number', examples: [ 12, 99 ] }
    //   },
    //   required: [ 'firstName', 'lastName', 'age' ]
    // }

Refer to the [JSON Schema docs](/json-schema) for information on customizing the generated JSON Schema.

[Recursive objects](?id=recursive-objects)
------------------------------------------

This was an unexpected one. After years of trying to crack this problem, I finally [found a way](https://x.com/colinhacks/status/1919286275133378670) to properly infer recursive object types in Zod. To define a recursive type:

    const Category = z.object({
      name: z.string(),
      get subcategories(){
        return z.array(Category)
      }
    });
     
    type Category = z.infer<typeof Category>;
    // { name: string; subcategories: Category[] }

You can also represent _mutually recursive types_:

    const User = z.object({
      email: z.email(),
      get posts(){
        return z.array(Post)
      }
    });
     
    const Post = z.object({
      title: z.string(),
      get author(){
        return User
      }
    });

Unlike the Zod 3 pattern for recursive types, there's no type casting required. The resulting schemas are plain `ZodObject` instances and have the full set of methods available.

    Post.pick({ title: true })
    Post.partial();
    Post.extend({ publishDate: z.date() });

[File schemas](?id=file-schemas)
--------------------------------

To validate `File` instances:

    const fileSchema = z.file();
     
    fileSchema.min(10_000); // minimum .size (bytes)
    fileSchema.max(1_000_000); // maximum .size (bytes)
    fileSchema.type("image/png"); // MIME type

[Internationalization](?id=internationalization)
------------------------------------------------

Zod 4 introduces a new `locales` API for globally translating error messages into different languages.

    import { z } from "zod/v4";
     
    // configure English locale (default)
    z.config(z.locales.en());

At the time of this writing only the English locale is available; There will be a call for pull request from the community shortly; this section will be updated with a list of supported languages as they become available.

[Error pretty-printing](?id=error-pretty-printing)
--------------------------------------------------

The popularity of the [`zod-validation-error`](https://www.npmjs.com/package/zod-validation-error) package demonstrates that there's significant demand for an official API for pretty-printing errors. If you are using that package currently, by all means continue using it.

Zod now implements a top-level `z.prettifyError` function for converting a `ZodError` to a user-friendly formatted string.

    const myError = new z.ZodError([
      {
        code: 'unrecognized_keys',
        keys: [ 'extraField' ],
        path: [],
        message: 'Unrecognized key: "extraField"'
      },
      {
        expected: 'string',
        code: 'invalid_type',
        path: [ 'username' ],
        message: 'Invalid input: expected string, received number'
      },
      {
        origin: 'number',
        code: 'too_small',
        minimum: 0,
        inclusive: true,
        path: [ 'favoriteNumbers', 1 ],
        message: 'Too small: expected number to be >=0'
      }
    ]);
     
    z.prettifyError(myError);

This returns the following pretty-printable multi-line string:

    ✖ Unrecognized key: "extraField"
    ✖ Invalid input: expected string, received number
      → at username
    ✖ Invalid input: expected number, received string
      → at favoriteNumbers[1]

Currently the formatting isn't configurable; this may change in the future.

[Top-level string formats](?id=top-level-string-formats)
--------------------------------------------------------

All "string formats" (email, etc.) have been promoted to top-level functions on the `z` module. This is both more concise and more tree-shakable. The method equivalents (`z.string().email()`, etc.) are still available but have been deprecated. They'll be removed in the next major version.

    z.email();
    z.uuidv4();
    z.uuidv7();
    z.uuidv8();
    z.ipv4();
    z.ipv6();
    z.cidrv4();
    z.cidrv6();
    z.url();
    z.e164();
    z.base64();
    z.base64url();
    z.jwt();
    z.ascii();
    z.utf8();
    z.lowercase();
    z.iso.date();
    z.iso.datetime();
    z.iso.duration();
    z.iso.time();

### [Custom email regex](?id=custom-email-regex)

The `z.email()` API now supports a custom regular expression. There is no one canonical email regex; different applications may choose to be more or less strict. For convenience Zod exports some common ones.

    // Zod's default email regex (Gmail rules)
    // see colinhacks.com/essays/reasonable-email-regex
    z.email(); // z.regexes.email
     
    // the regex used by browsers to validate input[type=email] fields
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
    z.email({ pattern: z.regexes.html5Email });
     
    // the classic emailregex.com regex (RFC 5322)
    z.email({ pattern: z.regexes.rfc5322Email });
     
    // a loose regex that allows Unicode (good for intl emails)
    z.email({ pattern: z.regexes.unicodeEmail });

[Template literal types](?id=template-literal-types)
----------------------------------------------------

Zod 4 implements `z.templateLiteral()`. Template literal types are perhaps the biggest feature of TypeScript's type system that wasn't previously representable.

    const hello = z.templateLiteral(["hello, ", z.string()]);
    // `hello, ${string}`
     
    const cssUnits = z.enum(["px", "em", "rem", "%"]);
    const css = z.templateLiteral([z.number(), cssUnits]);
    // `${number}px` | `${number}em` | `${number}rem` | `${number}%`
     
    const email = z.templateLiteral([
      z.string().min(1),
      "@",
      z.string().max(64),
    ]);
    // `${string}@${string}` (the min/max refinements are enforced!)

Every Zod schema type that can be stringified stores an internal regex: strings, string formats like `z.email()`, numbers, boolean, bigint, enums, literals, undefined/optional, null/nullable, and other template literals. The `z.templateLiteral` constructor concatenates these into a super-regex, so things like string formats (`z.email()`) are properly enforced (but custom refinements are not!).

Read the [template literal docs](/api#template-literals) for more info.

[Number formats](?id=number-formats)
------------------------------------

New numeric "formats" have been added for representing fixed-width integer and float types. These return a `ZodNumber` instance with proper minimum/maximum constraints already added.

    z.int();      // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    z.float32();  // [-3.4028234663852886e38, 3.4028234663852886e38]
    z.float64();  // [-1.7976931348623157e308, 1.7976931348623157e308]
    z.int32();    // [-2147483648, 2147483647]
    z.uint32();   // [0, 4294967295]

Similarly the following `bigint` numeric formats have also been added. These integer types exceed what can be safely represented by a `number` in JavaScript, so these return a `ZodBigInt` instance with the proper minimum/maximum constraints already added.

    z.int64();    // [-9223372036854775808n, 9223372036854775807n]
    z.uint64();   // [0n, 18446744073709551615n]

[Stringbool](?id=stringbool)
----------------------------

The existing `z.coerce.boolean()` API is very simple: falsy values (`false`, `undefined`, `null`, `0`, `""`, `NaN` etc) become `false`, truthy values become `true`.

This is still a good API, and its behavior aligns with the other `z.coerce` APIs. But some users requested a more sophisticated "env-style" boolean coercion. To support this, Zod 4 introduces `z.stringbool()`:

    const strbool = z.stringbool();
     
    strbool.parse("true")         // => true
    strbool.parse("1")            // => true
    strbool.parse("yes")          // => true
    strbool.parse("on")           // => true
    strbool.parse("y")            // => true
    strbool.parse("enable")       // => true
     
    strbool.parse("false");       // => false
    strbool.parse("0");           // => false
    strbool.parse("no");          // => false
    strbool.parse("off");         // => false
    strbool.parse("n");           // => false
    strbool.parse("disabled");    // => false
     
    strbool.parse(/* anything else */); // ZodError<[{ code: "invalid_value" }]>

To customize the truthy and falsy values:

    z.stringbool({
      truthy: ["yes", "true"],
      falsy: ["no", "false"]
    })

Refer to the [`z.stringbool()` docs](/api#stringbools) for more information.

[Simplified error customization](?id=simplified-error-customization)
--------------------------------------------------------------------

The majority of breaking changes in Zod 4 involve the _error customization_ APIs. They were a bit of a mess in Zod 3; Zod 4 makes things significantly more elegant, to the point where I think it's worth highlighting here.

Long story short, there is now a single, unified `error` parameter for customizing errors, replacing the following APIs:

Replace `message` with `error`. (The `message` parameter is still supported but deprecated.)

    - z.string().min(5, { message: "Too short." });
    + z.string().min(5, { error: "Too short." });

Replace `invalid_type_error` and `required_error` with `error` (function syntax):

    // Zod 3
    - z.string({ 
    -   required_error: "This field is required" 
    -   invalid_type_error: "Not a string", 
    - });
     
    // Zod 4 
    + z.string({ error: (issue) => issue.input === undefined ? 
    +  "This field is required" :
    +  "Not a string" 
    + });

Replace `errorMap` with `error` (function syntax):

    // Zod 3 
    - z.string({
    -   errorMap: (issue, ctx) => {
    -     if (issue.code === "too_small") {
    -       return { message: `Value must be >${issue.minimum}` };
    -     }
    -     return { message: ctx.defaultError };
    -   },
    - });
     
    // Zod 4
    + z.string({
    +   error: (issue) => {
    +     if (issue.code === "too_small") {
    +       return `Value must be >${issue.minimum}`
    +     }
    +   },
    + });

[Upgraded `z.discriminatedUnion()`](?id=upgraded-zdiscriminatedunion)
---------------------------------------------------------------------

Discriminated unions now support a number of schema types not previously supported, including unions, pipes, and nested objects:

    const MyResult = z.discriminatedUnion("status", [
      // simple literal
      z.object({ status: z.literal("aaa"), data: z.string() }),
      // union discriminator
      z.object({ status: z.union([z.literal("bbb"), z.literal("ccc")]) }),
      // pipe discriminator
      z.object({ status: z.object({ value: z.literal("fail") }) }),
    ]);

Perhaps most importantly, discriminated unions now _compose_—you can use one discriminated union as a member of another.

    const BaseError = z.object({ status: z.literal("failed"), message: z.string() });
    const MyErrors = z.discriminatedUnion("code", [
      BaseError.extend({ code: z.literal(400) }),
      BaseError.extend({ code: z.literal(401) }),
      BaseError.extend({ code: z.literal(500) })
    ]);
     
    const MyResult = z.discriminatedUnion("status", [
      z.object({ status: z.literal("success"), data: z.string() }),
      MyErrors
    ]);

[Multiple values in `z.literal()`](?id=multiple-values-in-zliteral)
-------------------------------------------------------------------

The `z.literal()` API now optionally supports multiple values.

    const httpCodes = z.literal([ 200, 201, 202, 204, 206, 207, 208, 226 ]);
     
    // previously in Zod 3:
    const httpCodes = z.union([
      z.literal(200),
      z.literal(201),
      z.literal(202),
      z.literal(204),
      z.literal(206),
      z.literal(207),
      z.literal(208),
      z.literal(226)
    ]);

[Refinements live inside schemas](?id=refinements-live-inside-schemas)
----------------------------------------------------------------------

In Zod 3, they were stored in a `ZodEffects` class that wrapped the original schema. This was inconvenient, as it meant you couldn't interleave `.refine()` with other schema methods like `.min()`.

    z.string()
      .refine(val => val.includes("@"))
      .min(5);
    // ^ ❌ Property 'min' does not exist on type ZodEffects<ZodString, string, string>

In Zod 4, refinements are stored inside the schemas themselves, so the code above works as expected.

    z.string()
      .refine(val => val.includes("@"))
      .min(5); // ✅

### [`.overwrite()`](?id=overwrite)

The `.transform()` method is extremely useful, but it has one major downside: the output type is no longer _introspectable_ at runtime. The transform function is a black box that can return anything. This means (among other things) there's no sound way to convert the schema to JSON Schema.

    const Squared = z.number().transform(val => val ** 2);
    // => ZodPipe<ZodNumber, ZodTransform>

Zod 4 introduces a new `.overwrite()` method for representing transforms that _don't change the inferred type_. Unlike `.transform()`, this method returns an instance of the original class. The overwrite function is stored as a refinement, so it doesn't (and can't) modify the inferred type.

    z.number().overwrite(val => val ** 2).max(100);
    // => ZodNumber

The existing `.trim()`, `.toLowerCase()` and `.toUpperCase()` methods have been reimplemented using `.overwrite()`.

[An extensible foundation: `zod/v4/core`](?id=an-extensible-foundation-zodv4core)
---------------------------------------------------------------------------------

While this will not be relevant to the majority of Zod users, it's worth highlighting. The addition of `zod/v4-mini` necessitated the creation of a shared sub-package `zod/v4/core` which contains the core functionality shared between `zod/v4` and `zod/v4-mini`.

I was resistant to this at first, but now I see it as one of Zod 4's most important features. It lets Zod level up from a simple library to a fast validation "substrate" that can be sprinkled into other libraries.

If you're building a schema library, refer to the implementations of `zod/v4` and `zod/v4-mini` to see how to build on top of the foundation `zod/v4/core` provides. Don't hesitate to get in touch in GitHub discussions or via [X](https://x.com/colinhacks)/[Bluesky](https://bsky.app/profile/colinhacks.com) for help or feedback.

[Wrapping up](?id=wrapping-up)
------------------------------

I'm planning to write up a series of additional posts explaining the design process behind some major features like `zod/v4-mini`. I'll update this section as those get posted.

For library authors, there is now a dedicated [For library authors](/library-authors) guide that describes the best practices for building on top of Zod. It answers common questions about how to support Zod 3 & Zod 4 (including Mini) simultaneously.

    pnpm upgrade zod@^3.25.0

Happy parsing!  
— Colin McDonnell [@colinhacks](https://x.com/colinhacks)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/v4/index.mdx)

[

Next

Migration guide

](/v4/changelog)

On this page

Migration guide
===============

This migration guide aims to list the breaking changes in Zod 4 in order of highest to lowest impact. To learn more about the performance enhancements and new features of Zod 4, read the [introductory post](/v4).

To give the ecosystem time to migrate, Zod 4 will initially be published alongside Zod v3.25. To use Zod 4, upgrade to `zod@3.25.0` or later:

    npm upgrade zod@^3.25.0

Zod 4 is available at the `"/v4"` subpath:

    import { z } from "zod/v4";

**Note** — Zod 3 exported a number of undocumented quasi-internal utility types and functions that are not considered part of the public API. Changes to those are not documented here.

[Error customization](?id=error-customization)
----------------------------------------------

Zod 4 standardizes the APIs for error customization under a single, unified `error` param. Previously Zod's error customization APIs were fragmented and inconsistent. This is cleaned up in Zod 4.

### [deprecates `message`](?id=deprecates-message)

Replaces `message` with `error`. The `message` parameter is still supported but deprecated.

Zod 4Zod 3

    z.string().min(5, { error: "Too short." });

### [drops `invalid_type_error` and `required_error`](?id=drops-invalid_type_error-and-required_error)

The `invalid_type_error` / `required_error` params have been dropped. These were hastily added years ago as a way to customize errors that was less verbose than `errorMap`. They came with all sorts of footguns (they can't be used in conjunction with `errorMap`) and do not align with Zod's actual issue codes (there is no `required` issue code).

These can now be cleanly represented with the new `error` parameter.

Zod 4Zod 3

    z.string({ 
      error: (issue) => issue.input === undefined 
        ? "This field is required" 
        : "Not a string" 
    });

### [drops `errorMap`](?id=drops-errormap)

This is renamed to `error`.

Error maps can also now return a plain `string` (instead of `{message: string}`). They can also return `undefined`, which tells Zod to yield control to the next error map in the chain.

Zod 4Zod 3

    z.string().min(5, {
      error: (issue) => {
        if (issue.code === "too_small") {
          return `Value must be >${issue.minimum}`
        }
      },
    });

[`ZodError`](?id=zoderror)
--------------------------

### [updates issue formats](?id=updates-issue-formats)

The issue formats have been dramatically streamlined.

    import { z } from "zod/v4"; // v4
     
    type IssueFormats = 
      | z.core.$ZodIssueInvalidType
      | z.core.$ZodIssueTooBig
      | z.core.$ZodIssueTooSmall
      | z.core.$ZodIssueInvalidStringFormat
      | z.core.$ZodIssueNotMultipleOf
      | z.core.$ZodIssueUnrecognizedKeys
      | z.core.$ZodIssueInvalidValue
      | z.core.$ZodIssueInvalidUnion
      | z.core.$ZodIssueInvalidKey // new: used for z.record/z.map 
      | z.core.$ZodIssueInvalidElement // new: used for z.map/z.set
      | z.core.$ZodIssueCustom;

Below is the list of Zod 3 issues types and their Zod 4 equivalent:

    import { z } from "zod/v4"; // v3
     
    export type IssueFormats =
      | z.ZodInvalidTypeIssue // ♻️ renamed to z.core.$ZodIssueInvalidType
      | z.ZodTooBigIssue  // ♻️ renamed to z.core.$ZodIssueTooBig
      | z.ZodTooSmallIssue // ♻️ renamed to z.core.$ZodIssueTooSmall
      | z.ZodInvalidStringIssue // ♻️ z.core.$ZodIssueInvalidStringFormat
      | z.ZodNotMultipleOfIssue // ♻️ renamed to z.core.$ZodIssueNotMultipleOf
      | z.ZodUnrecognizedKeysIssue // ♻️ renamed to z.core.$ZodIssueUnrecognizedKeys
      | z.ZodInvalidUnionIssue // ♻️ renamed to z.core.$ZodIssueInvalidUnion
      | z.ZodCustomIssue // ♻️ renamed to z.core.$ZodIssueCustom
      | z.ZodInvalidEnumValueIssue // ❌ merged in z.core.$ZodIssueInvalidValue
      | z.ZodInvalidLiteralIssue // ❌ merged into z.core.$ZodIssueInvalidValue
      | z.ZodInvalidUnionDiscriminatorIssue // ❌ throws an Error at schema creation time
      | z.ZodInvalidArgumentsIssue // ❌ z.function throws ZodError directly
      | z.ZodInvalidReturnTypeIssue // ❌ z.function throws ZodError directly
      | z.ZodInvalidDateIssue // ❌ merged into invalid_type
      | z.ZodInvalidIntersectionTypesIssue // ❌ removed (throws regular Error)
      | z.ZodNotFiniteIssue // ❌ infinite values no longer accepted (invalid_type)

While certain Zod 4 issue types have been merged, dropped, and modified, each issue remains structurally similar to Zod 3 counterpart (identical, in most cases). All issues still conform to the same base interface as Zod 3, so most common error handling logic will work without modification.

    export interface $ZodIssueBase {
      readonly code?: string;
      readonly input?: unknown;
      readonly path: PropertyKey[];
      readonly message: string;
    }

### [changes error map precedence](?id=changes-error-map-precedence)

The error map precedence has been changed to be more consistent. Specifically, an error map passed into `.parse()` _no longer_ takes precedence over a schema-level error map.

    const mySchema = z.string({ error: () => "Schema-level error" });
     
    // in Zod 3
    mySchema.parse(12, { error: () => "Contextual error" }); // => "Contextual error"
     
    // in Zod 4
    mySchema.parse(12, { error: () => "Contextual error" }); // => "Schema-level error"

### [deprecates `.format()`](?id=deprecates-format)

The `.format()` method on `ZodError` has been deprecated. Instead use the top-level `z.treeifyError()` function. Read the [Formatting errors docs](/error-formatting) for more information.

### [deprecates `.flatten()`](?id=deprecates-flatten)

The `.flatten()` method on `ZodError` has also been deprecated. Instead use the top-level `z.treeifyError()` function. Read the [Formatting errors docs](/error-formatting) for more information.

### [drops `.formErrors`](?id=drops-formerrors)

This API was identical to `.flatten()`. It exists for historical reasons and isn't documented.

### [deprecates `.addIssue()` and `.addIssues()`](?id=deprecates-addissue-and-addissues)

Directly push to `err.issues` array instead, if necessary.

    myError.issues.push({ 
      // new issue
    });

[`z.number()`](?id=znumber)
---------------------------

### [no infinite values](?id=no-infinite-values)

`POSITIVE_INFINITY` and `NEGATIVE_INFINITY` are no longer considered valid values for `z.number()`.

### [`.safe()` no longer accepts floats](?id=safe-no-longer-accepts-floats)

In Zod 3, `z.number().safe()` is deprecated. It now behaves identically to `.int()` (see below). Importantly, that means it no longer accepts floats.

### [`.int()` accepts safe integers only](?id=int-accepts-safe-integers-only)

The `z.number().int()` API no longer accepts unsafe integers (outside the range of `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`). Using integers out of this range causes spontaneous rounding errors. (Also: You should switch to `z.int()`.)

[`z.string()` updates](?id=zstring-updates)
-------------------------------------------

### [deprecates `.email()` etc](?id=deprecates-email-etc)

String formats are now represented as _subclasses_ of `ZodString`, instead of simple internal refinements. As such, these APIs have been moved to the top-level `z` namespace. Top-level APIs are also less verbose and more tree-shakable.

    z.email();
    z.uuid();
    z.url();
    z.emoji();         // validates a single emoji character
    z.base64();
    z.base64url();
    z.nanoid();
    z.cuid();
    z.cuid2();
    z.ulid();
    z.ipv4();
    z.ipv6();
    z.cidrv4();          // ip range
    z.cidrv6();          // ip range
    z.iso.date();
    z.iso.time();
    z.iso.datetime();
    z.iso.duration();

The method forms (`z.string().email()`) still exist and work as before, but are now deprecated.

    z.string().email(); // ❌ deprecated
    z.email(); // ✅ 

### [no padding in `.base64url()`](?id=no-padding-in-base64url)

Padding is no longer allowed in `z.base64url()` (formerly `z.string().base64url()`). Generally it's desirable for base64url strings to be unpadded and URL-safe.

### [drops `z.string().ip()`](?id=drops-zstringip)

This has been replaced with separate `.ipv4()` and `.ipv6()` methods. Use `z.union()` to combine them if you need to accept both.

    z.string().ip() // ❌
    z.ipv4() // ✅
    z.ipv6() // ✅

### [updates `z.string().ipv6()`](?id=updates-zstringipv6)

Validation now happens using the `new URL()` constructor, which is far more robust than the old regular expression approach. Some invalid values that passed validation previously may now fail.

### [drops `z.string().cidr()`](?id=drops-zstringcidr)

Similarly, this has been replaced with separate `.cidrv4()` and `.cidrv6()` methods. Use `z.union()` to combine them if you need to accept both.

    z.string().cidr() // ❌
    z.cidrv4() // ✅
    z.cidrv6() // ✅

[`z.coerce` updates](?id=zcoerce-updates)
-----------------------------------------

The input type of all coerced booleans is now `unknown`.

    const schema = z.coerce.string();
    type schemaInput = z.input<typeof schema>;
     
    // Zod 3: string;
    // Zod 4: unknown;

[`.default()` updates](?id=default-updates)
-------------------------------------------

The application of `.default()` has changed in a subtle way. If the input is `undefined`, `ZodDefault` short-circuits the parsing process and returns the default value. The default value must be assignable to the _output type_.

    const schema = z.string()
      .transform(val => val.length)
      .default(0); // should be a number
    schema.parse(undefined); // => 0

In Zod 3, `.default()` expected a value that matched the _input type_. `ZodDefault` would parse the default value, instead of short-circuiting. As such, the default value must be assignable to the _input type_ of the schema.

    // Zod 3
    const schema = z.string()
      .transform(val => val.length)
      .default("tuna");
    schema.parse(undefined); // => 4

To replicate the old behavior, Zod implements a new `.prefault()` API. This is short for "pre-parse default".

    // Zod 3
    const schema = z.string()
      .transform(val => val.length)
      .prefault("tuna");
    schema.parse(undefined); // => 4

[`z.object()`](?id=zobject)
---------------------------

These modifier methods on the `ZodObject` class determine how the schema handles unknown keys. In Zod 4, this functionality now exists in top-level functions. This aligns better with Zod's declarative-first philosophy, and puts all object variants on equal footing.

### [deprecates `.strict()` and `.passthrough()`](?id=deprecates-strict-and-passthrough)

These methods are generally no longer necessary. Instead use the top-level `z.strictObject()` and `z.looseObject()` functions.

    // Zod 3
    z.object({ name: z.string() }).strict();
    z.object({ name: z.string() }).passthrough();
     
    // Zod 4
    z.strictObject({ name: z.string() });
    z.looseObject({ name: z.string() });

These methods are still available for backwards compatibility, and they will not be removed. They are considered legacy.

### [deprecates `.strip()`](?id=deprecates-strip)

This was never particularly useful, as it was the default behavior of `z.object()`. To convert a strict object to a "regular" one, use `z.object(A.shape)`.

### [drops `.nonstrict()`](?id=drops-nonstrict)

This long-deprecated alias for `.strip()` has been removed.

### [drops `.deepPartial()`](?id=drops-deeppartial)

This has been long deprecated in Zod 3 and it now removed in Zod 4. There is no direct alternative to this API. There were lots of footguns in its implementation, and its use is generally an anti-pattern.

### [changes `z.unknown()` optionality](?id=changes-zunknown-optionality)

The `z.unknown()` and `z.any()` types are no longer marked as "key optional" in the inferred types.

    const mySchema = z.object({
      a: z.any(),
      b: z.unknown()
    });
    // Zod 3: { a?: any; b?: unknown };
    // Zod 4: { a: any; b: unknown };

[`z.nativeEnum()` deprecated](?id=znativeenum-deprecated)
---------------------------------------------------------

The `z.nativeEnum()` function is now deprecated in favor of just `z.enum()`. The `z.enum()` API has been overloaded to support an enum-like input.

    enum Color {
      Red = "red",
      Green = "green",
      Blue = "blue",
    }
     
    const ColorSchema = z.enum(Color); // ✅

As part of this refactor of `ZodEnum`, a number of long-deprecated and redundant features have been removed. These were all identical and only existed for historical reasons.

    ColorSchema.enum.Red; // ✅ => "Red" (canonical API)
    ColorSchema.Enum.Red; // ❌ removed
    ColorSchema.Values.Red; // ❌ removed

[`z.array()`](?id=zarray)
-------------------------

### [changes `.nonempty()` type](?id=changes-nonempty-type)

This now behaves identically to `z.array().min(1)`. The inferred type does not change.

    const NonEmpty = z.array(z.string()).nonempty();
     
    type NonEmpty = z.infer<typeof NonEmpty>; 
    // Zod 3: [string, ...string[]]
    // Zod 4: string[]

The old behavior is now better represented with `z.tuple()` and a "rest" argument. This aligns more closely to TypeScript's type system.

    z.tuple([z.string()], z.string());
    // => [string, ...string[]]

[`z.promise()` deprecated](?id=zpromise-deprecated)
---------------------------------------------------

There's rarely a reason to use `z.promise()`. If you have an input that may be a `Promise`, just `await` it before parsing it with Zod.

If you are using `z.promise` to define an async function with `z.function()`, that's no longer necessary either; see the [`ZodFunction`](#function) section below.

[`z.function()`](?id=zfunction)
-------------------------------

The result of `z.function()` is no longer a Zod schema. Instead, it acts as a standalone "function factory" for defining Zod-validated functions. The API has also changed; you define an `input` and `output` schema upfront, instead of using `args()` and `.returns()` methods.

Zod 4Zod 3

    const myFunction = z.function({
      input: [z.object({
        name: z.string(),
        age: z.number().int(),
      })],
      output: z.string(),
    });
     
    myFunction.implement((input) => {
      return `Hello ${input.name}, you are ${input.age} years old.`;
    });

If you have a desperate need for a Zod schema with a function type, consider [this workaround](https://github.com/colinhacks/zod/issues/4143#issuecomment-2845134912).

### [adds `.implementAsync()`](?id=adds-implementasync)

To define an async function, use `implementAsync()` instead of `implement()`.

    myFunction.implementAsync(async (input) => {
      return `Hello ${input.name}, you are ${input.age} years old.`;
    });

[`.refine()`](?id=refine)
-------------------------

### [ignores type predicates](?id=ignores-type-predicates)

In Zod 3, passing a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) as a refinement functions could still narrow the type of a schema. This wasn't documented but was discussed in some issues. This is no longer the case.

    const mySchema = z.unknown().refine((val): val is string => {
      return typeof val === "string"
    });
     
    type MySchema = z.infer<typeof mySchema>; 
    // Zod 3: `string`
    // Zod 4: still `unknown`

### [drops `ctx.path`](?id=drops-ctxpath)

Zod's new parsing architecture does not eagerly evaluate the `path` array. This was a necessary change that unlocks Zod 4's dramatic performance improvements.

    z.string().superRefine((val, ctx) => {
      ctx.path; // ❌ no longer available
    });

### [drops function as second argument](?id=drops-function-as-second-argument)

The following horrifying overload has been removed.

    const longString = z.string().refine(
      (val) => val.length > 10,
      (val) => ({ message: `${val} is not more than 10 characters` })
    );

[`z.ostring()`, etc dropped](?id=zostring-etc-dropped)
------------------------------------------------------

The undocumented convenience methods `z.ostring()`, `z.onumber()`, etc. have been removed. These were shorthand methods for defining optional string schemas.

[`z.literal()`](?id=zliteral)
-----------------------------

### [drops `symbol` support](?id=drops-symbol-support)

Symbols aren't considered literal values, nor can they be simply compared with `===`. This was an oversight in Zod 3.

[static `.create()` factories dropped](?id=static-create-factories-dropped)
---------------------------------------------------------------------------

Previously all Zod classes defined a static `.create()` method. These are now implemented as standalone factory functions.

    z.ZodString.create(); // ❌ 

[`z.record()`](?id=zrecord)
---------------------------

### [drops single argument usage](?id=drops-single-argument-usage)

Before, `z.record()` could be used with a single argument. This is no longer supported.

    // Zod 3
    z.record(z.string()); // ✅
     
    // Zod 4
    z.record(z.string()); // ❌
    z.record(z.string(), z.string()); // ✅

### [improves enum support](?id=improves-enum-support)

Records have gotten a lot smarter. In Zod 3, passing an enum into `z.record()` as a key schema would result in a partial type

    const myRecord = z.record(z.enum(["a", "b", "c"]), z.number()); 
    // { a?: number; b?: number; c?: number; }

In Zod 4, this is no longer the case. The inferred type is what you'd expect, and Zod ensures exhaustiveness; that is, it makes sure all enum keys exist in the input during parsing.

    const myRecord = z.record(z.enum(["a", "b", "c"]), z.number());
    // { a: number; b: number; c: number; }

[`z.intersection()`](?id=zintersection)
---------------------------------------

### [throws `Error` on merge conflict](?id=throws-error-on-merge-conflict)

Zod intersection parses the input against two schemas, then attempts to merge the results. In Zod 3, when the results were unmergable, Zod threw a `ZodError` with a special `"invalid_intersection_types"` issue.

In Zod 4, this will throw a regular `Error` instead. The existence of unmergable results indicates a structural problem with the schema: an intersection of two incompatible types. Thus, a regular error is more appropriate than a validation error.

[Internal changes](?id=internal-changes)
----------------------------------------

The typical user of Zod can likely ignore everything below this line. These changes do not impact the user-facing `z` APIs.

There are too many internal changes to list here, but some may be relevant to regular users who are (intentionally or not) relying on certain implementation details. These changes will be of particular interest to library authors building tools on top of Zod.

### [updates generics](?id=updates-generics)

The generic structure of several classes has changed. Perhaps most significant is the change to the `ZodType` base class:

    // Zod 3
    class ZodType<Output, Def extends z.ZodTypeDef, Input = Output> {
      // ...
    }
     
    // Zod 4
    class ZodType<Output = unknown, Input = unknown> {
      // ...
    }

The second generic `Def` has been entirely removed. Instead the base class now only tracks `Output` and `Input`. While previously the `Input` value defaulted to `Output`, it now defaults to `unknown`. This allows generic functions involving `z.ZodType` to behave more intuitively in many cases.

    function inferSchema<T extends z.ZodType>(schema: T): T {
      return schema;
    };
     
    inferSchema(z.string()); // z.ZodString

The need for `z.ZodTypeAny` has been eliminated; just use `z.ZodType` instead.

### [adds `z.core`](?id=adds-zcore)

Many utility functions and types have been moved to the new `zod/v4/core` sub-package, to facilitate code sharing between `zod/v4` and `zod/v4-mini`.

    import { z } from "zod/v4/core";
     
    function handleError(iss: z.$ZodError) {
      // do stuff
    }

For convenience, the contents of `zod/v4/core` are also re-exported from `zod/v4` and `zod/v4-mini` under the `z.core` namespace.

    import { z } from "zod/v4";
     
    function handleError(iss: z.core.$ZodError) {
      // do stuff
    }

Refer to the [Zod Core](/packages/core) docs for more information on the contents of the core sub-library.

### [moves `._def`](?id=moves-_def)

The `._def` property is now moved to `._zod.def`. The structure of all internal defs is subject to change; this is relevant to library authors but won't be comprehensively documented here.

### [drops `ZodEffects`](?id=drops-zodeffects)

This doesn't affect the user-facing APIs, but it's an internal change worth highlighting. It's part of a larger restructure of how Zod handles _refinements_.

Previously both refinements and transformations lived inside a wrapper class called `ZodEffects`. That means adding either one to a schema would wrap the original schema in a `ZodEffects` instance. In Zod 4, refinements now live inside the schemas themselves. More accurately, each schema contains an array of "checks"; the concept of a "check" is new in Zod 4 and generalizes the concept of a refinement to include potentially side-effectful transforms like `z.toLowerCase()`.

This is particularly apparent in the `zod/v4-mini` API, which heavily relies on the `.check()` method to compose various validations together.

    import { z } from "zod/v4-mini";
     
    z.string().check(
      z.minLength(10),
      z.maxLength(100),
      z.toLowerCase(),
      z.trim(),
    );

### [adds `ZodTransform`](?id=adds-zodtransform)

Meanwhile, transforms have been moved into a dedicated `ZodTransform` class. This schema class represents an input transform; in fact, you can actually define standalone transformations now:

    import { z } from "zod/v4";
     
    const schema = z.transform(input => String(input));
     
    schema.parse(12); // => "12"

This is primarily used in conjunction with `ZodPipe`. The `.transform()` method now returns an instance of `ZodPipe`.

    z.string().transform(val => val); // ZodPipe<ZodString, ZodTransform>

### [drops `ZodPreprocess`](?id=drops-zodpreprocess)

As with `.transform()`, the `z.preprocess()` function now returns a `ZodPipe` instance instead of a dedicated `ZodPreprocess` instance.

    z.preprocess(val => val, z.string()); // ZodPipe<ZodTransform, ZodString>

### [drops `ZodBranded`](?id=drops-zodbranded)

Branding is now handled with a direct modification to the inferred type, instead of a dedicated `ZodBranded` class. The user-facing APIs remain the same.

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/v4/changelog.mdx)

[

Next

Introducing Zod 4

](/v4)[

Next

Intro

](/)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Basic usage
===========

This page will walk you through the basics of creating schemas, parsing data, and using inferred types. For complete documentation on Zod's schema API, refer to [Defining schemas](/api).

[Defining a schema](?id=defining-a-schema)
------------------------------------------

Before you can do anything else, you need to define a schema. For the purposes of this guide, we'll use a simple object schema.

ZodZod Mini

    import { z } from "zod/v4"; 
     
    const Player = z.object({ 
      username: z.string(),
      xp: z.number()
    });

### Why the "/v4" suffix?

[Parsing data](?id=parsing-data)
--------------------------------

Given any Zod schema, use `.parse` to validate an input. If it's valid, Zod returns a strongly-typed _deep clone_ of the input.

    Player.parse({ username: "billie", xp: 100 }); 
    // => returns { username: "billie", xp: 100 }

**Note** — If your schema uses certain asynchronous APIs like `async` [refinements](#refine) or [transforms](#transform), you'll need to use the `.parseAsync()` method instead.

    const schema = z.string().refine(async (val) => val.length <= 8);
     
    await schema.parseAsync("hello");
    // => "hello"

[Handling errors](?id=handling-errors)
--------------------------------------

When validation fails, the `.parse()` method will throw a `ZodError` instance with granular information about the validation issues.

ZodZod Mini

    try {
      Player.parse({ username: 42, xp: "100" });
    } catch(err){
      if(error instanceof z.ZodError){
        err.issues; 
        /* [
          {
            expected: 'string',
            code: 'invalid_type',
            path: [ 'username' ],
            message: 'Invalid input: expected string'
          },
          {
            expected: 'number',
            code: 'invalid_type',
            path: [ 'xp' ],
            message: 'Invalid input: expected number'
          }
        ] */
      }
    }

To avoid a `try/catch` block, you can use the `.safeParse()` method to get back a plain result object containing either the successfully parsed data or a `ZodError`. The result type is a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions), so you can handle both cases conveniently.

    const result = Player.safeParse({ username: 42, xp: "100" });
    if (!result.success) {
      result.error;   // ZodError instance
    } else {
      result.data;    // { username: string; xp: number }
    }

**Note** — If your schema uses certain asynchronous APIs like `async` [refinements](#refine) or [transforms](#transform), you'll need to use the `.safeParseAsync()` method instead.

    const schema = z.string().refine(async (val) => val.length <= 8);
     
    await schema.safeParseAsync("hello");
    // => { success: true; data: "hello" }

[Inferring types](?id=inferring-types)
--------------------------------------

Zod infers a static type from your schema definitions. You can extract this type with the `z.infer<>` utility and use it however you like.

    const Player = z.object({ 
      username: z.string(),
      xp: z.number()
    });
     
    // extract the inferred type
    type Player = z.infer<typeof Player>;
     
    // use it in your code
    const player: Player = { username: "billie", xp: 100 };

In some cases, the input & output types of a schema can diverge. For instance, the `.transform()` API can convert the input from one type to another. In these cases, you can extract the input and output types independently:

    const mySchema = z.string().transform((val) => val.length);
     
    type MySchemaIn = z.input<typeof mySchema>;
    // => string
     
    type MySchemaOut = z.output<typeof mySchema>; // equivalent to z.infer<typeof mySchema>
    // number

* * *

Now that we have the basics covered, let's jump into the Schema API.

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/basics.mdx)

[

Next

Intro

](/)[

Next

Defining schemas

](/api)

On this page

Defining schemas
================

To validate data, you must first define a _schema_. Schemas represent _types_, from simple primitive values to complex nested objects and arrays.

[Primitives](?id=primitives)
----------------------------

    import { z } from "zod/v4";
     
    // primitive types
    z.string();
    z.number();
    z.bigint();
    z.boolean();
    z.symbol();
    z.undefined();
    z.null();

### [Coercion](?id=coercion)

To coerce input data to the appropriate type, use `z.coerce` instead:

    z.coerce.string();    // String(input)
    z.coerce.number();    // Number(input)
    z.coerce.boolean();   // Boolean(input)
    z.coerce.bigint();    // BigInt(input)

The coerced variant of these schemas attempts to convert the input value to the appropriate type.

    const schema = z.coerce.string();
     
    schema.parse("tuna");    // => "tuna"
    schema.parse(42);        // => "42"
    schema.parse(true);      // => "true"
    schema.parse(null);      // => "null"

### How coercion works in Zod

[Literals](?id=literals)
------------------------

Literal schemas represent a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types), like `"hello world"` or `5`.

    const tuna = z.literal("tuna");
    const twelve = z.literal(12);
    const twobig = z.literal(2n);
    const tru = z.literal(true);
    const terrific = z.literal(Symbol("terrific"));

To represent the JavaScript literals `null` and `undefined`:

    z.null();
    z.undefined();
    z.void(); // equivalent to z.undefined()

To allow multiple literal values:

    const colors = z.literal(["red", "green", "blue"]);
     
    colors.parse("green"); // ✅
    colors.parse("yellow"); // ❌

To extract the set of allowed values from a literal schema:

ZodZod Mini

    colors.values; // => Set<"red" | "green" | "blue">

[Strings](?id=strings)
----------------------

Zod provides a handful of built-in string validation and transform APIs. To perform some common string validations:

ZodZod Mini

    z.string().max(5);
    z.string().min(5);
    z.string().length(5);
    z.string().regex(/^[a-z]+$/);
    z.string().startsWith("aaa");
    z.string().endsWith("zzz");
    z.string().includes("---");
    z.string().uppercase();
    z.string().lowercase();

To perform some simple string transforms:

ZodZod Mini

    z.string().trim(); // trim whitespace
    z.string().toLowerCase(); // toLowerCase
    z.string().toUpperCase(); // toUpperCase

[String formats](?id=string-formats)
------------------------------------

To validate against some common string formats:

    z.email();
    z.uuid();
    z.url();
    z.emoji();         // validates a single emoji character
    z.base64();
    z.base64url();
    z.nanoid();
    z.cuid();
    z.cuid2();
    z.ulid();
    z.ipv4();
    z.ipv6();
    z.cidrv4();        // ipv4 CIDR block
    z.cidrv6();        // ipv6 CIDR block
    z.iso.date();
    z.iso.time();
    z.iso.datetime();
    z.iso.duration();

### [Emails](?id=emails)

To validate email addresses:

    z.email();

By default, Zod uses a comparatively strict email regex designed to validate normal email addresses containing common characters. It's roughly equivalent to the rules enforced by Gmail. To learn more about this regex, refer to [this post](https://colinhacks.com/essays/reasonable-email-regex).

    /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i

To customize the email validation behavior, you can pass a custom regular expression to the `pattern` param.

    z.email({ pattern: /your regex here/ });

Zod exports several useful regexes you could use.

    // Zod's default email regex
    z.email();
    z.email({ pattern: z.regexes.email }); // equivalent
     
    // the regex used by browsers to validate input[type=email] fields
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
    z.email({ pattern: z.regexes.html5Email });
     
    // the classic emailregex.com regex (RFC 5322)
    z.email({ pattern: z.regexes.rfc5322Email });
     
    // a loose regex that allows Unicode (good for intl emails)
    z.email({ pattern: z.regexes.unicodeEmail });

### [UUIDs](?id=uuids)

To validate UUIDs:

    z.uuid();

To specify a particular UUID version:

    // supports "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"
    z.uuid({ version: "v4" });
     
    // for convenience
    z.uuidv4();
    z.uuidv6();
    z.uuidv7();

The RFC 4122 UUID spec requires the first two bits of byte 8 to be `10`. Other UUID-like identifiers do not enforce this constraint. To validate any UUID-like identifier:

    z.guid();

### [URLs](?id=urls)

To validate any WHATWG-compatible URL:

    const schema = z.url();
     
    schema.parse("https://example.com"); // ✅
    schema.parse("http://localhost"); // ✅
    schema.parse("mailto:noreply@zod.dev"); // ✅
    schema.parse("sup"); // ✅

As you can see this is quite permissive. Internally this uses the `new URL()` constructor to valid inputs; this behavior may differ across platforms and runtimes but it's the mostly rigorous way to validate URIs/URLs on any given JS runtime/engine.

To validate the hostname against a specific regex:

    const schema = z.url({ hostname: /^example\.com$/ });
     
    schema.parse("https://example.com"); // ✅
    schema.parse("https://zombo.com"); // ❌

To validate the protocol against a specific regex, use the `protocol` param.

    const schema = z.url({ protocol: /^https$/ });
     
    schema.parse("https://example.com"); // ✅
    schema.parse("http://example.com"); // ❌

**Web URLs** — In many cases, you'll want to validate Web URLs specifically. Here's the recommended schema for doing so:

    const httpUrl = z.url({
      protocol: /^https?$/,
      hostname: z.regexes.domain
    });

This restricts the protocol to `http`/`https` and ensures the hostname is a valid domain name with the `z.regexes.domain` regular expression:

    /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/

### [ISO datetimes](?id=iso-datetimes)

As you may have noticed, Zod string includes a few date/time related validations. These validations are regular expression based, so they are not as strict as a full date/time library. However, they are very convenient for validating user input.

The `z.iso.datetime()` method enforces ISO 8601; by default, no timezone offsets are allowed:

    const datetime = z.iso.datetime();
     
    datetime.parse("2020-01-01T00:00:00Z"); // ✅
    datetime.parse("2020-01-01T00:00:00.123Z"); // ✅
    datetime.parse("2020-01-01T00:00:00.123456Z"); // ✅ (arbitrary precision)
    datetime.parse("2020-01-01T00:00:00+02:00"); // ❌ (no offsets allowed)

To allow timezone offsets:

    const datetime = z.iso.datetime({ offset: true });
     
    datetime.parse("2020-01-01T00:00:00+02:00"); // ✅
    datetime.parse("2020-01-01T00:00:00.123+02:00"); // ✅ (millis optional)
    datetime.parse("2020-01-01T00:00:00.123+0200"); // ✅ (millis optional)
    datetime.parse("2020-01-01T00:00:00.123+02"); // ✅ (only offset hours)
    datetime.parse("2020-01-01T00:00:00Z"); // ✅ (Z still supported)

To allow unqualified (timezone-less) datetimes:

    const schema = z.iso.datetime({ local: true });
    schema.parse("2020-01-01T00:00:00"); // ✅

To constrain the allowable `precision` (by default, arbitrary sub-second precision is supported).

    const datetime = z.iso.datetime({ precision: 3 });
     
    datetime.parse("2020-01-01T00:00:00.123Z"); // ✅
    datetime.parse("2020-01-01T00:00:00Z"); // ❌
    datetime.parse("2020-01-01T00:00:00.123456Z"); // ❌

### [ISO dates](?id=iso-dates)

The `z.iso.date()` method validates strings in the format `YYYY-MM-DD`.

    const date = z.iso.date();
     
    date.parse("2020-01-01"); // ✅
    date.parse("2020-1-1"); // ❌
    date.parse("2020-01-32"); // ❌

### [ISO times](?id=iso-times)

Added in Zod 3.23

The `z.iso.time()` method validates strings in the format `HH:MM:SS[.s+]`. The second can include arbitrary decimal precision. It does not allow timezone offsets of any kind.

    const time = z.iso.time();
     
    time.parse("00:00:00"); // ✅
    time.parse("09:52:31"); // ✅
    time.parse("23:59:59.9999999"); // ✅ (arbitrary precision)
     
    time.parse("00:00:00.123Z"); // ❌ (no `Z` allowed)
    time.parse("00:00:00.123+02:00"); // ❌ (no offsets allowed)

You can set the `precision` option to constrain the allowable decimal precision.

    const time = z.iso.time({ precision: 3 });
     
    time.parse("00:00:00.123"); // ✅
    time.parse("00:00:00.123456"); // ❌
    time.parse("00:00:00"); // ❌

### [IP addresses](?id=ip-addresses)

    const ipv4 = z.ipv4();
    v4.parse("192.168.0.0"); // ✅
     
    const ipv6 = z.ipv6();
    v6.parse("2001:db8:85a3::8a2e:370:7334"); // ✅

### [IP blocks (CIDR)](?id=ip-blocks-cidr)

Validate IP address ranges specified with [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).

    const cidrv4 = z.string().cidrv4();
    cidrv4.parse("192.168.0.0/24"); // ✅
     
    const cidrv6 = z.string().cidrv6();
    cidrv6.parse("2001:db8::/32"); // ✅

[Numbers](?id=numbers)
----------------------

Use `z.number()` to validate numbers. It allows any finite number.

    const schema = z.number();
     
    schema.parse(3.14);      // ✅
    schema.parse(NaN);       // ❌
    schema.parse(Infinity);  // ❌

Zod implements a handful of number-specific validations:

ZodZod Mini

    z.number().gt(5);
    z.number().gte(5);                     // alias .min(5)
    z.number().lt(5);
    z.number().lte(5);                     // alias .max(5)
    z.number().positive();       
    z.number().nonnegative();    
    z.number().negative(); 
    z.number().nonpositive(); 
    z.number().multipleOf(5);              // alias .step(5)

If (for some reason) you want to validate `NaN`, use `z.nan()`.

    z.nan().parse(NaN);              // ✅
    z.nan().parse("anything else");  // ❌

[Integers](?id=integers)
------------------------

To validate integers:

    z.int();     // restricts to safe integer range
    z.int32();   // restrict to int32 range

[BigInts](?id=bigints)
----------------------

To validate BigInts:

    z.bigint();

Zod includes a handful of bigint-specific validations.

ZodZod Mini

    z.bigint().gt(5n);
    z.bigint().gte(5n);                    // alias `.min(5n)`
    z.bigint().lt(5n);
    z.bigint().lte(5n);                    // alias `.max(5n)`
    z.bigint().positive(); 
    z.bigint().nonnegative(); 
    z.bigint().negative(); 
    z.bigint().nonpositive(); 
    z.bigint().multipleOf(5n);             // alias `.step(5n)`

[Booleans](?id=booleans)
------------------------

To validate boolean values:

    z.boolean().parse(true); // => true
    z.boolean().parse(false); // => false

[Dates](?id=dates)
------------------

Use `z.date()` to validate `Date` instances.

    z.date().safeParse(new Date()); // success: true
    z.date().safeParse("2022-01-12T00:00:00.000Z"); // success: false

To customize the error message:

    z.date({
      error: issue => issue.input === undefined ? "Required" : "Invalid date"
    });

Zod provides a handful of date-specific validations.

ZodZod Mini

    z.date().min(new Date("1900-01-01"), { error: "Too old!" });
    z.date().max(new Date(), { error: "Too young!" });

[Enums](?id=enums)
------------------

Use `z.enum` to validate inputs against a fixed set of allowable _string_ values.

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
     
    FishEnum.parse("Salmon"); // => "Salmon"
    FishEnum.parse("Swordfish"); // => ❌

Careful — If you declare your string array as a variable, Zod won't be able to properly infer the exact values of each element.

    const fish = ["Salmon", "Tuna", "Trout"];
     
    const FishEnum = z.enum(fish);
    type FishEnum = z.infer<typeof FishEnum>; // string

To fix this, always pass the array directly into the `z.enum()` function, or use [`as const`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions).

    const fish = ["Salmon", "Tuna", "Trout"] as const;
     
    const FishEnum = z.enum(fish);
    type FishEnum = z.infer<typeof FishEnum>; // "Salmon" | "Tuna" | "Trout"

You can also pass in an externally-declared TypeScript enum.

**Zod 4** — This replaces the `z.nativeEnum()` API in Zod 3.

Note that using TypeScript's `enum` keyword is [not recommended](https://www.totaltypescript.com/why-i-dont-like-typescript-enums).

    enum Fish {
      Salmon = "Salmon",
      Tuna = "Tuna",
      Trout = "Trout",
    }
     
    const FishEnum = z.enum(Fish);

### [`.enum`](?id=enum)

To extract the schema's values as an enum-like object:

ZodZod Mini

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
     
    FishEnum.enum;
    // => { Salmon: "Salmon", Tuna: "Tuna", Trout: "Trout" }

### [`.exclude()`](?id=exclude)

To create a new enum schema, excluding certain values:

ZodZod Mini

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
    const TunaOnly = FishEnum.exclude(["Salmon", "Trout"]);

### [`.extract()`](?id=extract)

To create a new enum schema, extracting certain values:

ZodZod Mini

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
    const SalmonAndTroutOnly = FishEnum.extract(["Salmon", "Trout"]);

[Stringbool](?id=stringbool)
----------------------------

**💎 New in Zod 4**

In some cases (e.g. parsing environment variables) it's valuable to parse certain string "boolish" values to a plain `boolean` value. To support this, Zod 4 introduces `z.stringbool()`:

    const strbool = z.stringbool();
     
    strbool.parse("true")         // => true
    strbool.parse("1")            // => true
    strbool.parse("yes")          // => true
    strbool.parse("on")           // => true
    strbool.parse("y")            // => true
    strbool.parse("enable")       // => true
     
    strbool.parse("false");       // => false
    strbool.parse("0");           // => false
    strbool.parse("no");          // => false
    strbool.parse("off");         // => false
    strbool.parse("n");           // => false
    strbool.parse("disabled");    // => false
     
    strbool.parse(/* anything else */); // ZodError<[{ code: "invalid_value" }]>

To customize the truthy and falsy values:

    z.stringbool({
      truthy: ["yes", "true"],
      falsy: ["no", "false"]
    })

Be default the schema is _case-insensitive_; all inputs are converted to lowercase before comparison to the `truthy`/`falsy` values. To make it case-sensitive:

    z.stringbool({
      case: "sensitive"
    });

[Optionals](?id=optionals)
--------------------------

To make a schema _optional_ (that is, to allow `undefined` inputs).

ZodZod Mini

    z.optional(z.literal("yoda")); // or z.literal("yoda").optional()

This returns a `ZodOptional` instance that wraps the original schema. To extract the inner schema:

ZodZod Mini

    optionalYoda.unwrap(); // ZodLiteral<"yoda">

[Nullables](?id=nullables)
--------------------------

To make a schema _nullable_ (that is, to allow `null` inputs).

ZodZod Mini

    z.nullable(z.literal("yoda")); // or z.literal("yoda").nullable()

This returns a `ZodNullable` instance that wraps the original schema. To extract the inner schema:

ZodZod Mini

    nullableYoda.unwrap(); // ZodLiteral<"yoda">

[Nullish](?id=nullish)
----------------------

To make a schema _nullish_ (both optional and nullable):

ZodZod Mini

    const nullishYoda = z.nullish(z.literal("yoda"));

Refer to the TypeScript manual for more about the concept of [nullish](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing).

[Unknown](?id=unknown)
----------------------

Zod aims to mirror TypeScript's type system one-to-one. As such, Zod provides APIs to represent the following special types:

    // allows any values
    z.any(); // inferred type: `any`
    z.unknown(); // inferred type: `unknown`

[Never](?id=never)
------------------

No value will pass validation.

    z.never(); // inferred type: `never`

[Template literals](?id=template-literals)
------------------------------------------

**💎 New in Zod 4**

Zod 4 finally implements one of the last remaining unrepresented features of TypeScript's type system: template literals. Virtually all primitive schemas can be used in `z.templateLiteral`: strings, string formats like `z.email()`, numbers, booleans, enums, literals (of the non-template variety), optional/nullable, and other template literals.

    const hello = z.templateLiteral(["hello, ", z.string()]);
    // `hello, ${string}`
     
    const cssUnits = z.enum(["px", "em", "rem", "%"]);
    const css = z.templateLiteral([z.number(), cssUnits ]);
    // `${number}px` | `${number}em` | `${number}rem` | `${number}%`
     
    const email = z.templateLiteral([
      z.string().min(1),
      "@",
      z.string().max(64),
    ]);
    // `${string}@${string}` (the min/max refinements are enforced!)

[Objects](?id=objects)
----------------------

To define an object type:

      // all properties are required by default
      const Person = z.object({
        name: z.string(),
        age: z.number(),
      });
     
      type Person = z.infer<typeof Person>;
      // => { name: string; age: number; }

By default, all properties are required. To make certain properties optional:

ZodZod Mini

    const Dog = z.object({
      name: z.string(),
      age: z.number().optional(),
    });
     
    Dog.parse({ name: "Yeller" }); // ✅

By default, unrecognized keys are _stripped_ from the parsed result:

    Dog.parse({ name: "Yeller", extraKey: true });
    // => { name: "Yeller" }

### [`z.strictObject`](?id=zstrictobject)

To define a _strict_ schema that throws an error when unknown keys are found:

    const StrictDog = z.strictObject({
      name: z.string(),
    });
     
    StrictDog.parse({ name: "Yeller", extraKey: true });
    // ❌ throws

### [`z.looseObject`](?id=zlooseobject)

To define a _loose_ schema that allows unknown keys to pass through:

    const LooseDog = z.looseObject({
      name: z.string(),
    });
     
    Dog.parse({ name: "Yeller", extraKey: true });
    // => { name: "Yeller", extraKey: true }

### [`.catchall()`](?id=catchall)

To define a _catchall schema_ that will be used to validate any unrecognized keys:

    const DogWithStrings = z.object({
      name: z.string(),
      age: z.number().optional(),
    }).catchall(z.string());
    
    DogWithStrings.parse({ name: "Yeller", extraKey: "extraValue" }); // ✅
    DogWithStrings.parse({ name: "Yeller", extraKey: 42 }); // ❌

### [`.shape`](?id=shape)

To access the internal schemas:

ZodZod Mini

    Dog.shape.name; // => string schema
    Dog.shape.age; // => number schema

### [`.keyof()`](?id=keyof)

To create a `ZodEnum` schema from the keys of an object schema:

ZodZod Mini

    const keySchema = Dog.keyof();
    // => ZodEnum<["name", "age"]>

### [`.extend()`](?id=extend)

To add additional fields to an object schema:

ZodZod Mini

    const DogWithBreed = Dog.extend({
      breed: z.string(),
    });

This API can be used to overwrite existing fields! Be careful with this power!

If the two schemas share keys, B will override A.

### [`.pick()`](?id=pick)

Inspired by TypeScript's built-in `Pick` and `Omit` utility types, Zod provides dedicated APIs for picking and omitting certain keys from an object schema.

Starting from this initial schema:

    const Recipe = z.object({
      title: z.string(),
      description: z.string().optional(),
      ingredients: z.array(z.string()),
    });
    // { title: string; description?: string | undefined; ingredients: string[] }

To pick certain keys:

ZodZod Mini

    const JustTheTitle = Recipe.pick({ title: true });

### [`.omit()`](?id=omit)

To omit certain keys:

ZodZod Mini

    const RecipeNoId = Recipe.omit({ id: true });

### [`.partial()`](?id=partial)

For convenience, Zod provides a dedicated API for making some or all properties optional, inspired by the built-in TypeScript utility type [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype).

To make all fields optional:

ZodZod Mini

    const PartialRecipe = Recipe.partial();
    // { title?: string | undefined; description?: string | undefined; ingredients?: string[] | undefined }

To make certain properties optional:

ZodZod Mini

    const RecipeOptionalIngredients = Recipe.partial({
      ingredients: true,
    });
    // { title: string; description?: string | undefined; ingredients?: string[] | undefined }

### [`.required()`](?id=required)

Zod provides an API for making some or all properties _required_, inspired by TypeScript's [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) utility type.

To make all properties required:

ZodZod Mini

    const RequiredRecipe = Recipe.required();
    // { title: string; description: string; ingredients: string[] }

To make certain properties required:

ZodZod Mini

    const RecipeRequiredDescription = Recipe.required({description: true});
    // { title: string; description: string; ingredients: string[] }

[Recursive objects](?id=recursive-objects)
------------------------------------------

To define a self-referential type, use a [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) on the key. This lets JavaScript resolve the cyclical schema at runtime.

    const Category = z.object({
      name: z.string(),
      get subcategories(){
        return z.array(Category)
      }
    });
     
    type Category = z.infer<typeof Category>;
    // { name: string; subcategories: Category[] }

Though recursive schemas are supported, passing cyclical data into Zod will cause an infinite loop.

You can also represent _mutually recursive types_:

    const User = z.object({
      email: z.email(),
      get posts(){
        return z.array(Post)
      }
    });
     
    const Post = z.object({
      title: z.string(),
      get author(){
        return User
      }
    });

All object APIs (`.pick()`, `.omit()`, `.required()`, `.partial()`, etc.) work as you'd expect.

Due to TypeScript limitations, recursive type inference can be finicky, and it only works in certain scenarios. Some more complicated types may trigger recursive type errors like this:

    const Activity = z.object({
      name: z.string(),
      get subactivities() {
        // ^ ❌ 'subactivities' implicitly has return type 'any' because it does not 
        // // have a return type annotation and is referenced directly or indirectly 
        // in one of its return expressions.ts(7023)
     
        return z.union([z.null(), Activity]);
      },
    });

In these cases, you can resolve the error with a type annotation on the offending getter:

    const Activity = z.object({
      name: z.string(),
      get subactivities(): z.ZodUnion<[z.ZodNull, typeof Activity]> { // ✅
        return z.union([z.null(), Activity]); 
      },
    });

[Arrays](?id=arrays)
--------------------

To define an array schema:

ZodZod Mini

    const stringArray = z.array(z.string()); // or z.string().array()

To access the inner schema for an element of the array.

ZodZod Mini

    stringArray.unwrap(); // => string schema

Zod implements a number of array-specific validations:

ZodZod Mini

    z.array(z.string()).min(5); // must contain 5 or more items
    z.array(z.string()).max(5); // must contain 5 or fewer items
    z.array(z.string()).length(5); // must contain 5 items exactly

[Tuples](?id=tuples)
--------------------

Unlike arrays, tuples are typically fixed-length arrays that specify different schemas for each index.

    const MyTuple = z.tuple([
      z.string(),
      z.number(),
      z.boolean()
    ]);
     
    type MyTuple = z.infer<typeof MyTuple>;
    // [string, number, boolean]

To add a variadic ("rest") argument:

    const variadicTuple = z.tuple([z.string()], z.number());
    // => [string, ...number[]];

[Unions](?id=unions)
--------------------

Union types (`A | B`) represent a logical "OR". Zod union schemas will check the input against each option in order. The first value that validates successfully is returned.

    const stringOrNumber = z.union([z.string(), z.number()]);
    // string | number
     
    stringOrNumber.parse("foo"); // passes
    stringOrNumber.parse(14); // passes

To extract the internal option schemas:

ZodZod Mini

    stringOrNumber.options; // [ZodString, ZodNumber]

[Discriminated unions](?id=discriminated-unions)
------------------------------------------------

A [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) is a special kind of union in which a) all the options are object schemas that b) share a particular key (the "discriminator"). Based on the value of the discriminator key, TypeScript is able to "narrow" the type signature as you'd expect.

    type MyResult =
      | { status: "success"; data: string }
      | { status: "failed"; error: string };
     
    function handleResult(result: MyResult){
      if(result.status === "success"){
        result.data; // string
      } else {
        result.error; // string
      }
    }

You could represent it with a regular `z.union()`. But regular unions are _naive_—they check the input against each option in order and return the first one that passes. This can be slow for large unions.

So Zod provides a `z.discriminatedUnion()` API that uses a _discriminator key_ to make parsing more efficient.

    const MyResult = z.discriminatedUnion("status", [
      z.object({ status: z.literal("success"), data: z.string() }),
      z.object({ status: z.literal("failed"), error: z.string() }),
    ]);

### Nesting discriminated unions

[Intersections](?id=intersections)
----------------------------------

Intersection types (`A & B`) represent a logical "AND".

    const a = z.union([z.number(), z.string()]);
    const b = z.union([z.number(), z.boolean()]);
    const c = z.intersection(a, b);
     
    type c = z.infer<typeof c>; // => number

This can be useful for intersecting two object types.

    const Person = z.intersection({ name: z.string() });
    type Person = z.infer<typeof Person>;
     
    const Employee = z.intersection({ role: z.string() });
    type Employee = z.infer<typeof Employee>;
     
    const EmployedPerson = z.intersection(Person, Employee);
    type EmployedPerson = z.infer<typeof EmployedPerson>;
    // Person & Employee

In most cases, it is better to use [`A.extend(B)`](#extend) to merge two object schemas. This approach returns a new object schema, whereas `z.intersection(A, B)` returns a `ZodIntersection` instance which lacks common object methods like `pick` and `omit`.

[Records](?id=records)
----------------------

Record schemas are used to validate types such as `Record<string, number>`.

    const IdCache = z.record(z.string(), z.string());
    type IdCache = z.infer<typeof IdCache>; // Record<string, string>
     
    IdCache.parse({
      carlotta: "77d2586b-9e8e-4ecf-8b21-ea7e0530eadd",
      jimmie: "77d2586b-9e8e-4ecf-8b21-ea7e0530eadd",
    });

The key schema can be any Zod schema that is assignable to `string | number | symbol`.

    const Keys = z.union([z.string(), z.number(), z.symbol()]);
    const AnyObject = z.record(Keys, z.unknown());
    // Record<string | number | symbol, unknown>

To create an object schemas containing keys defined by an enum:

    const Keys = z.enum(["id", "name", "email"]);
    const Person = z.record(Keys, z.string());
    // { id: string; name: string; email: string }

**Zod 4** — In Zod 4, if you pass a `z.enum` as the first argument to `z.record()`, Zod will exhaustively check that all enum values exist in the input as keys. This behavior agrees with TypeScript:

    type MyRecord = Record<"a" | "b", string>;
    const myRecord: MyRecord = { a: "foo", b: "bar" }; // ✅
    const myRecord: MyRecord = { a: "foo" }; // ❌ missing required key `b`

In Zod 3, exhaustiveness was not checked. To replicate the Zod 3 behavior, use `z.partialRecord()`.

If you want a _partial_ record type, use `z.partialRecord()`. This skips the special exhaustiveness checks Zod normally runs with `z.enum()` and `z.literal()` key schemas.

    const Keys = z.enum(["id", "name", "email"]).or(z.never()); 
    const Person = z.partialRecord(Keys, z.string());
    // { id?: string; name?: string; email?: string }

### A note on numeric keys

[Maps](?id=maps)
----------------

    const StringNumberMap = z.map(z.string(), z.number());
    type StringNumberMap = z.infer<typeof StringNumberMap>; // Map<string, number>
     
    const myMap: StringNumberMap = new Map();
    myMap.set("one", 1);
    myMap.set("two", 2);
     
    StringNumberMap.parse(myMap);

[Sets](?id=sets)
----------------

    const NumberSet = z.set(z.number());
    type NumberSet = z.infer<typeof NumberSet>; // Set<number>
     
    const mySet: NumberSet = new Set();
    mySet.add(1);
    mySet.add(2);
    NumberSet.parse(mySet);

Set schemas can be further constrained with the following utility methods.

ZodZod Mini

    z.set(z.string()).min(5); // must contain 5 or more items
    z.set(z.string()).max(5); // must contain 5 or fewer items
    z.set(z.string()).size(5); // must contain 5 items exactly

[Promises](?id=promises)
------------------------

**Deprecated** — `z.promise()` is deprecated in Zod 4. There are vanishingly few valid uses cases for a `Promise` schema. If you suspect a value might be a `Promise`, simply `await` it before parsing it with Zod.

### See z.promise() documentation

[Instanceof](?id=instanceof)
----------------------------

You can use `z.instanceof` to check that the input is an instance of a class. This is useful to validate inputs against classes that are exported from third-party libraries.

    class Test {
      name: string;
    }
     
    const TestSchema = z.instanceof(Test);
     
    TestSchema.parse(new Test()); // ✅
    TestSchema.parse("whatever"); // ❌

[Refinements](?id=refinements)
------------------------------

Every Zod schema stores an array of _refinements_. Refinements are a way to perform custom validation that Zod doesn't provide a native API for.

### [`.refine()`](?id=refine)

ZodZod Mini

    const myString = z.string().refine((val) => val.length <= 255);

Refinement functions should never throw. Instead they should return a falsy value to signal failure. Thrown errors are not caught by Zod.

To customize the error message:

ZodZod Mini

    const myString = z.string().refine((val) => val.length > 8, { 
      error: "Too short!" 
    });

By default, validation issues from checks are considered _continuable_; that is, Zod will execute _all_ checks in sequence, even if one of them causes a validation error. This is usually desirable, as it means Zod can surface as many errors as possible in one go.

ZodZod Mini

    const myString = z.string()
      .refine((val) => val.length > 8)
      .refine((val) => val === val.toLowerCase());
      
     
    const result = myString.safeParse("OH NO");
    result.error.issues;
    /* [
      { "code": "custom", "message": "Too short!" },
      { "code": "custom", "message": "Must be lowercase" }
    ] */

To mark a particular refinement as _non-continuable_, use the `abort` parameter. Validation will terminate if the check fails.

ZodZod Mini

    const myString = z.string()
      .refine((val) => val.length > 8, { abort: true })
      .refine((val) => val === val.toLowerCase());
     
     
    const result = myString.safeParse("OH NO");
    result.error!.issues;
    // => [{ "code": "custom", "message": "Too short!" }]

To customize the error path, use the `path` parameter. This is typically only useful in the context of object schemas.

ZodZod Mini

    const passwordForm = z
      .object({
        password: z.string(),
        confirm: z.string(),
      })
      .refine((data) => data.password === data.confirm, {
        message: "Passwords don't match",
        path: ["confirm"], // path of error
      });

This will set the `path` parameter in the associated issue:

ZodZod Mini

    const result = passwordForm.safeParse({ password: "asdf", confirm: "qwer" });
    result.error.issues;
    /* [{
      "code": "custom",
      "path": [ "confirm" ],
      "message": "Passwords don't match"
    }] */

Refinements can be `async`:

    const userId = z.string().refine(async (id) => {
      // verify that ID exists in database
      return true;
    });

If you use async refinements, you must use the `.parseAsync` method to parse data! Otherwise Zod will throw an error.

ZodZod Mini

    const result = await userId.parseAsync("abc123");

### [`.superRefine()`](?id=superrefine)

In Zod 4, `.superRefine()` has been deprecated in favor of `.check()`

### View .superRefine() example

### [`.check()`](?id=check)

The `.refine()` API is syntactic sugar atop a more versatile (and verbose) API called `.check()`. You can use this API to create multiple issues in a single refinement or have full control of the generated issue objects.

ZodZod Mini

    const UniqueStringArray = z.array(z.string()).check((ctx) => {
      if (ctx.value.length > 3) {
        ctx.issues.push({
          code: "too_big",
          maximum: 3,
          origin: "array",
          inclusive: true,
          message: "Too many items 😡",
          input: ctx.value
        });
      }
     
      if (ctx.value.length !== new Set(ctx.value).size) {
        ctx.issues.push({
          code: "custom",
          message: `No duplicates allowed.`,
          input: ctx.value,
          continue: true // make this issue continuable (default: false)
        });
      }
    });

The regular `.refine` API only generates issues with a `"custom"` error code, but `.check()` makes it possible to throw other issue types. For more information on Zod's internal issue types, read the [Error customization](./error-customization) docs.

[Pipes](?id=pipes)
------------------

Schemas can be chained together into "pipes". Pipes are primarily useful when used in conjunction with [Transforms](#transforms).

ZodZod Mini

    const stringToLength = z.string().pipe(z.transform(val => val.length));
     
    stringToLength.parse("hello"); // => 5

[Transforms](?id=transforms)
----------------------------

Transforms are a special kind of schema. Instead of validating input, they accept anything and perform some transformation on the data. To define a transform:

ZodZod Mini

    const castToString = z.transform((val) => String(val));
     
    castToString.parse("asdf"); // => "asdf"
    castToString.parse(123); // => "123"
    castToString.parse(true); // => "true"

To perform validation logic inside a transform, use `ctx`. To report a validation issue, push a new issue onto `ctx.issues` (similar to the [`.check()`](#check) API).

    const coercedInt = z.transform((val, ctx) => {
      try {
        const parsed = Number.parseInt(String(val));
        return parsed;
      } catch (e) {
        ctx.issues.push({
          code: "custom",
          message: "Not a number",
          input: val,
        });
     
        // this is a special constant with type `never`
        // returning it lets you exit the transform without impacting the inferred return type
        return z.NEVER; 
      }
    });

Most commonly, transforms are used in conjunction with [Pipes](#pipes). This combination is useful for performing some initial validation, then transforming the parsed data into another form.

ZodZod Mini

    const stringToLength = z.string().pipe(z.transform(val => val.length));
     
    stringToLength.parse("hello"); // => 5

### [`.transform()`](?id=transform)

Piping some schema into a transform is a common pattern, so Zod provides a convenience `.transform()` method.

ZodZod Mini

    const stringToLength = z.string().transform(val => val.length); 

Transforms can also be async:

ZodZod Mini

    const idToUser = z
      .string()
      .transform(async (id) => {
        // fetch user from database
        return db.getUserById(id); 
      });
     
    const user = await idToUser.parseAsync("abc123");

If you use async transforms, you must use a `.parseAsync` or `.safeParseAsync` when parsing data! Otherwise Zod will throw an error.

### [`.preprocess()`](?id=preprocess)

Piping a transform into another schema is another common pattern, so Zod provides a convenience `z.preprocess()` function.

    const coercedInt = z.preprocess((val) => {
      if (typeof val === "string") {
        return Number.parseInt(val);
      }
      return val;
    }, z.int());

[Defaults](?id=defaults)
------------------------

To set a default value for a schema:

ZodZod Mini

    const defaultTuna = z.string().default("tuna");
     
    defaultTuna.parse(undefined); // => "tuna"

Alternatively, you can pass a function which will be re-executed whenever a default value needs to be generated:

ZodZod Mini

    const randomDefault = z.number().default(Math.random);
     
    randomDefault.parse(undefined);    // => 0.4413456736055323
    randomDefault.parse(undefined);    // => 0.1871840107401901
    randomDefault.parse(undefined);    // => 0.7223408162401552

[Prefaults](?id=prefaults)
--------------------------

In Zod, setting a _default_ value will short-circuit the parsing process. If the input is `undefined`, the default value is eagerly returned. As such, the default value must be assignable to the _output type_ of the schema.

    const schema = z.string().transform(val => val.length).default(0);
    schema.parse(undefined); // => 0

Sometimes, it's useful to define a _prefault_ ("pre-parse default") value. If the input is `undefined`, the prefault value will be parsed instead. The parsing process is _not_ short circuited. As such, the prefault value must be assignable to the _input type_ of the schema.

    z.string().transform(val => val.length).prefault("tuna");
    schema.parse(undefined); // => 4

This is also useful if you want to pass some input value through some mutating refinements.

    const a = z.string().trim().toUpperCase().prefault("  tuna  ");
    a.parse(undefined); // => "TUNA"
     
    const b = z.string().trim().toUpperCase().default("  tuna  ");
    b.parse(undefined); // => "  tuna  "

[Catch](?id=catch)
------------------

Use `.catch()` to define a fallback value to be returned in the event of a validation error:

ZodZod Mini

    const numberWithCatch = z.number().catch(42);
     
    numberWithCatch.parse(5); // => 5
    numberWithCatch.parse("tuna"); // => 42

Alternatively, you can pass a function which will be re-executed whenever a catch value needs to be generated.

ZodZod Mini

    const numberWithRandomCatch = z.number().catch((ctx) => {
      ctx.error; // the caught ZodError
      return Math.random();
    });
     
    numberWithRandomCatch.parse("sup"); // => 0.4413456736055323
    numberWithRandomCatch.parse("sup"); // => 0.1871840107401901
    numberWithRandomCatch.parse("sup"); // => 0.7223408162401552

[Branded types](?id=branded-types)
----------------------------------

TypeScript's type system is [structural](https://www.typescriptlang.org/docs/handbook/type-compatibility.html), meaning that two types that are structurally equivalent are considered the same.

    type Cat = { name: string };
    type Dog = { name: string };
     
    const pluto: Dog = { name: "pluto" };
    const simba: Cat = fido; // works fine

In some cases, it can be desirable to simulate [nominal typing](https://en.wikipedia.org/wiki/Nominal_type_system) inside TypeScript. This can be achieved with _branded types_ (also known as "opaque types").

    const Cat = z.object({ name: z.string() }).brand<"Cat">();
    const Dog = z.object({ name: z.string() }).brand<"Dog">();
     
    type Cat = z.infer<typeof Cat>; // { name: string } & z.$brand<"Cat">
    type Dog = z.infer<typeof Dog>; // { name: string } & z.$brand<"Dog">
     
    const pluto = Dog.parse({ name: "pluto" });
    const simba: Cat = pluto; // ❌ not allowed

Under the hood, this works by attaching a "brand" to the schema's inferred type.

    const Cat = z.object({ name: z.string() }).brand<"Cat">();
    type Cat = z.infer<typeof Cat>; // { name: string } & z.$brand<"Cat">

With this brand, any plain (unbranded) data structures are no longer assignable to the inferred type. You have to parse some data with the schema to get branded data.

Note that branded types do not affect the runtime result of `.parse`. It is a static-only construct.

[Readonly](?id=readonly)
------------------------

To mark a schema as readonly:

ZodZod Mini

    const ReadonlyUser = z.object({ name: z.string() }).readonly();
    type ReadonlyUser = z.infer<typeof ReadonlyUser>;
    // Readonly<{ name: string }>

This returns a new schema that wraps the original. The new schema's inferred type will be marked as `readonly`. Note that this only affects objects, arrays, tuples, `Set`, and `Map` in TypeScript:

ZodZod Mini

    z.object({ name: z.string() }).readonly(); // { readonly name: string }
    z.array(z.string()).readonly(); // readonly string[]
    z.tuple([z.string(), z.number()]).readonly(); // readonly [string, number]
    z.map(z.string(), z.date()).readonly(); // ReadonlyMap<string, Date>
    z.set(z.string()).readonly(); // ReadonlySet<string>

Inputs will be parsed using the original schema, then the result will be frozen with [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to prevent modifications.

ZodZod Mini

    const result = ReadonlyUser.parse({ name: "fido" });
    result.name = "simba"; // throws TypeError

[Template literals](?id=template-literals-1)
--------------------------------------------

**New in Zod 4**

To define a template literal schema:

    const schema = z.templateLiteral("hello, ", z.string(), "!");
    // `hello, ${string}!`

The `z.templateLiteral` API can handle any number of string literals (e.g. `"hello"`) and schemas. Any schema with an inferred type that's assignable to `string | number | bigint | boolean | null | undefined` can be passed.

    z.templateLiteral([ "hi there" ]); 
    // `hi there`
     
    z.templateLiteral([ "email: ", z.string()]); 
    // `email: ${string}`
     
    z.templateLiteral([ "high", z.literal(5) ]); 
    // `high5`
     
    z.templateLiteral([ z.nullable(z.literal("grassy")) ]); 
    // `grassy` | `null`
     
    z.templateLiteral([ z.number(), z.enum(["px", "em", "rem"]) ]); 
    // `${number}px` | `${number}em` | `${number}rem`

[JSON](?id=json)
----------------

To validate any JSON-encodable value:

    const jsonSchema = z.json();

This is a convenience API that returns the following union schema:

    const jsonSchema = z.lazy(() => {
      return z.union([
        z.string(params), 
        z.number(), 
        z.boolean(), 
        z.null(), 
        z.array(jsonSchema), 
        z.record(z.string(), jsonSchema)
      ]);
    });

[Custom](?id=custom)
--------------------

You can create a Zod schema for any TypeScript type by using `z.custom()`. This is useful for creating schemas for types that are not supported by Zod out of the box, such as template string literals.

    const px = z.custom<`${number}px`>((val) => {
      return typeof val === "string" ? /^\d+px$/.test(val) : false;
    });
     
    type px = z.infer<typeof px>; // `${number}px`
     
    px.parse("42px"); // "42px"
    px.parse("42vw"); // throws;

If you don't provide a validation function, Zod will allow any value. This can be dangerous!

    z.custom<{ arg: string }>(); // performs no validation

You can customize the error message and other options by passing a second argument. This parameter works the same way as the params parameter of [`.refine`](#refine).

    z.custom<...>((val) => ..., "custom error message");

[Functions](?id=functions)
--------------------------

In Zod 4, `z.function()` no longer returns a Zod schema.

Zod provides a `z.function()` utility for defining Zod-validated functions. This way, you can avoid intermixing validation code with your business logic.

    const MyFunction = z.function({
      input: [z.string()], // parameters (must be an array or a ZodTuple)
      output: z.number()  // return type
    });

Function schemas have an `.implement()` method which accepts a function and returns a new function that automatically validates its inputs and outputs.

    const computeTrimmedLength = MyFunction.implement((input) => {
      // TypeScript knows x is a string!
      return input.trim().length;
    });
     
    computeTrimmedLength("sandwich"); // => 8
    computeTrimmedLength(" asdf "); // => 4

This function will throw a `ZodError` if the input is invalid:

    computeTrimmedLength(42); // throws ZodError

If you only care about validating inputs, omit the `output` field is optional.

    const MyFunction = z.function({
      input: [z.string()], // parameters (must be an array or a ZodTuple)
    });
     
    const computeTrimmedLength = MyFunction.implement((input) => input.trim.length);

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/api.mdx)

[

Next

Basic usage

](/basics)[

Next

Customizing errors

](/error-customization)

On this page

Customizing errors
==================

In Zod, validation errors are surfaced as instances of the `z.core.$ZodError` class.

The `zod/v4` package uses a subclass of this called `z.ZodError` that implements some additional convenience methods.

Instances of `$ZodError` contain an `.issues` array. Each issue contains a human-readable `message` and additional structured metadata about the issue.

ZodZod Mini

    import { z } from "zod/v4";
     
    const result = z.string().safeParse(12); // { success: false, error: ZodError }
    result.error.issues;
    // [
    //   {
    //     expected: 'string',
    //     code: 'invalid_type',
    //     path: [],
    //     message: 'Invalid input: expected string, received number'
    //   }
    // ]

Every issue contains a `message` property with a human-readable error message. Error messages can be customized in a number of ways.

[The `error` param](?id=the-error-param)
----------------------------------------

Virtually every Zod API accepts an optional error message.

    z.string("Not a string!");

This custom error will show up as the `message` property of any validation issues that originate from this schema.

    z.string("Not a string!").parse(12);
    // ❌ throws ZodError {
    //   issues: [
    //     {
    //       expected: 'string',
    //       code: 'invalid_type',
    //       path: [],
    //       message: 'Not a string!'   <-- 👀 custom error message
    //     }
    //   ]
    // }

All `z` functions and schema methods accept custom errors.

ZodZod Mini

    z.string("Bad!");
    z.string().min(5, "Too short!");
    z.uuid("Bad UUID!");
    z.iso.date("Bad date!");
    z.array(z.string(), "Not an array!");
    z.array(z.string()).min(5, "Too few items!");
    z.set(z.string(), "Bad set!");

If you prefer, you can pass a params object with an `error` parameter instead.

ZodZod Mini

    z.string({ error: "Bad!" });
    z.string().min(5, { error: "Too short!" });
    z.uuid({ error: "Bad UUID!" });
    z.iso.date({ error: "Bad date!" });
    z.array(z.string(), { error: "Bad array!" });
    z.array(z.string()).min(5, { error: "Too few items!" });
    z.set(z.string(), { error: "Bad set!" });

The `error` param optionally accepts a function. An error customization function is known as an **error map** in Zod terminology. The error map will run at parse time if a valiation error occurs.

    z.string({ error: ()=>`[${Date.now()}]: Validation failure.` });

**Note** — In Zod v3, there were separate params for `message` (a string) and `errorMap` (a function). These have been unified in Zod 4 as `error`.

The error map receives a context object you can use to customize the error message based on the validation issue.

    z.string({
      error: (iss) => iss.input === undefined ? "Field is required." : "Invalid input."
    });

For advanced cases, the `iss` object provides additional information you can use to customize the error.

    z.string({
      error: (iss) => {
        iss.code; // the issue code
        iss.input; // the input data
        iss.inst; // the schema/check that originated this issue
        iss.path; // the path of the error
      },
    });

Depending on the API you are using, there may be additional properties available. Use TypeScript's autocomplete to explore the available properties.

    z.string().min(5, {
      error: (iss) => {
        // ...the same as above
        iss.minimum; // the minimum value
        iss.inclusive; // whether the minimum is inclusive
        return `Password must have ${iss.minimum} characters or more`;
      },
    });

Return `undefined` to avoid setting an error message. This is useful for customizing certain error messages but not others. Zod will yield control to the next error map in the [precedence chain](#error-precedence).

    z.int64({
      error: (issue) => {
        // override too_big error message
        if (issue.code === "too_big") {
          return { message: `Value must be <${issue.maximum}` };
        }
     
        //  defer to default
        return undefined;
      },
    });

[Per-parse error customization](?id=per-parse-error-customization)
------------------------------------------------------------------

To customize errors on a _per-parse_ basis, pass an error map into the parse method:

    const schema = z.string()
     
    schema.parse(12, {
      error: iss => "per-parse custom error"
    };

This has _lower precedence_ than any schema-level custom messages.

    const schema = z.string({ error: "highest priority" });
    const result = schema.safeParse(12, {
      error: (iss) => "lower priority",
    })
     
    result.error.issues;
    // [{ message: "highest priority", ... }]

The `iss` object is a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) of all possible issue types. Use the `code` property to discriminate between them.

For a breakdown of all Zod issue codes, see the [`zod/v4/core`](/packages/core#issue-types) documentation.

    const result = schema.safeParse(12, {
      error: (iss) => {
        if (iss.code === "invalid_type") {
          return `invalid type, expected ${iss.expected}`;
        }
        if (iss.code === "too_small") {
          return `minimum is ${iss.minimum}`;
        }
        // ...
      }
    })

[Global error customization](?id=global-error-customization)
------------------------------------------------------------

To specify a global error map, use `z.config()` to set Zod's `customError` configuration setting:

    z.config({
      customError: (iss) => {
        return "globally modified error";
      },
    });

Global error messages have _lower precedence_ than schema-level or per-parse error messages.

The `iss` object is a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) of all possible issue types. Use the `code` property to discriminate between them.

For a breakdown of all Zod issue codes, see the [`zod/v4/core`](/packages/core#issue-types) documentation.

    const result = schema.safeParse(12, {
      error: (iss) => {
        if (iss.code === "invalid_type") {
          return `invalid type, expected ${iss.expected}`;
        }
        if (iss.code === "too_small") {
          return `minimum is ${iss.minimum}`;
        }
        // ...
      }
    })

[Internationalization](?id=internationalization)
------------------------------------------------

To support internationalization of error message, Zod provides several built-in **locales**. These are exported from the `zod/v4/core` package.

**Note** — The `zod/v4` library automatically loads the `en` locale automatically. The `zod/v4-mini` sub-package does not load any locale; instead all error messages default to `Invalid input`.

ZodZod Mini

    import { z } from "zod/v4";
    import en from "zod/v4/locales/en.js"
     
    z.config(en());

To lazily load a locale, consider dynamic imports:

    import { z } from "zod/v4";
     
    async function loadLocale(locale: string) {
      const { default: locale } = await import(`zod/v4/locales/${locale}.js`);
      z.config(locale());
    };
     
    await loadLocale("fr");

For convenience, all locales are exported as `z.locales` from `zod/v4/locales`.

ZodZod Mini

    import { z } from "zod/v4";
     
    z.config(z.locales.en());

### [Locales](?id=locales)

The following locales are available:

*   `ar` — Arabic
*   `az` — Azerbaijani
*   `be` — Belarusian
*   `ca` — Catalan
*   `cs` — Czech
*   `de` — German
*   `en` — English
*   `es` — Spanish
*   `fa` — Farsi
*   `fi` — Finnish
*   `fr` — French
*   `frCA` — Canadian French
*   `he` — Hebrew
*   `hu` — Hungarian
*   `id` — Indonesian
*   `it` — Italian
*   `ja` — Japanese
*   `kh` — Khmer
*   `ko` — Korean
*   `mk` — Macedonian
*   `ms` — Malay
*   `nl` — Dutch
*   `no` — Norwegian
*   `ota` — Türkî
*   `pl` — Polish
*   `pt` — Portuguese
*   `ru` — Russian
*   `sl` — Slovenian
*   `sv` — Swedish
*   `ta` — Tamil
*   `th` — Thai
*   `tr` — Türkçe
*   `ua` — Ukrainian
*   `ur` — Urdu
*   `vi` — Tiếng Việt
*   `zhCN` — Simplified Chinese
*   `zhTW` — Traditional Chinese

[Error precedence](?id=error-precedence)
----------------------------------------

Below is a quick reference for determining error precedence: if multiple error customizations have been defined, which one takes priority? From _highest to lowest_ priority:

1.  **Schema-level error** — Any error message "hard coded" into a schema definition.

    z.string("Not a string!");

2.  **Per-parse error** — A custom error map passed into the `.parse()` method.

    z.string().parse(12, {
      error: (iss) => "My custom error"
    });

3.  **Global error map** — A custom error map passed into `z.config()`.

    z.config({
      customError: (iss) => "My custom error"
    });

4.  **Locale error map** — A custom error map passed into `z.config()`.

    z.config(z.locales.en());

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/error-customization.mdx)

[

Next

Defining schemas

](/api)[

Next

Formatting errors

](/error-formatting)

On this page

Formatting errors
=================

Zod emphasizes _completeness_ and _correctness_ in its error reporting. In many cases, it's helpful to convert the `$ZodError` to a more useful format. Zod provides some utilities for this.

Consider this simple object schema.

    import { z } from "zod/v4";
     
    const schema = z.strictObject({
      username: z.string(),
      favoriteNumbers: z.array(z.number()),
    });

Attempting to parse this invalid data results in an error containing two issues.

    const result = schema.safeParse({
      username: 1234,
      favoriteNumbers: [1234, "4567"],
      extraKey: 1234,
    });
     
    result.error!.issues;
    [
      {
        expected: 'string',
        code: 'invalid_type',
        path: [ 'username' ],
        message: 'Invalid input: expected string, received number'
      },
      {
        expected: 'number',
        code: 'invalid_type',
        path: [ 'favoriteNumbers', 1 ],
        message: 'Invalid input: expected number, received string'
      },
      {
        code: 'unrecognized_keys',
        keys: [ 'extraKey' ],
        path: [],
        message: 'Unrecognized key: "extraKey"'
      }
    ];

[`z.treeifyError()`](?id=ztreeifyerror)
---------------------------------------

To convert ("treeify") this error into a nested object, use `z.treeifyError()`.

    const tree = z.treeifyError(result.error);
     
    // =>
    {
      errors: [ 'Unrecognized key: "extraKey"' ],
      properties: {
        username: { errors: [ 'Invalid input: expected string, received number' ] },
        favoriteNumbers: {
          errors: [],
          items: [
            undefined,
            {
              errors: [ 'Invalid input: expected number, received string' ]
            }
          ]
        }
      }
    }

The result is a nested structure that mirrors the schema itself. You can easily access the errors that occured at a particular path. The `errors` field contains the error messages at a given path, and the special properties `properties` and `items` let you traverse deeper into the tree.

    tree.properties?.username?.errors;
    // => ["Invalid input: expected string, received number"]
     
    tree.properties?.favoriteNumbers?.items?.[1]?.errors;
    // => ["Invalid input: expected number, received string"];

Be sure to use optional chaining (`?.`) to avoid errors when accessing nested properties.

[`z.prettifyError()`](?id=zprettifyerror)
-----------------------------------------

The `z.prettifyError()` provides a human-readable string representation of the error.

    const pretty = z.prettifyError(result.error);

This returns the following string:

    ✖ Unrecognized key: "extraKey"
    ✖ Invalid input: expected string, received number
      → at username
    ✖ Invalid input: expected number, received string
      → at favoriteNumbers[1]

[`z.formatError()`](?id=zformaterror)
-------------------------------------

This has been deprecated in favor of `z.treeifyError()`.

### Show docs

[`z.flattenError()`](?id=zflattenerror)
---------------------------------------

This has been deprecated in favor of `z.treeifyError()`.

### Show docs

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/error-formatting.mdx)

[

Next

Customizing errors

](/error-customization)[

Next

Metadata and registries

](/metadata)

On this page

Metadata and registries
=======================

It's often useful to associate a schema with some additional _metadata_ for documentation, code generation, AI structured outputs, form validation, and other purposes.

[Registries](?id=registries)
----------------------------

Metadata in Zod is handled via _registries_. Registries are collections of schemas, each associated with some _strongly-typed_ metadata. To create a simple registry:

    import { z } from "zod/v4";
     
    const myRegistry = z.registry<{ description: string }>();

To register, lookup, and remove schemas from this registry:

    const mySchema = z.string();
     
    myRegistry.add(mySchema, { description: "A cool schema!"});
    myRegistry.has(mySchema); // => true
    myRegistry.get(mySchema); // => { description: "A cool schema!" }
    myRegistry.remove(mySchema);

TypeScript enforces that the metadata for each schema matches the registry's **metadata type**.

    myRegistry.add(mySchema, { description: "A cool schema!" }); // ✅
    myRegistry.add(mySchema, { description: 123 }); // ❌

### [`.register()`](?id=register)

**Note** — This method is special in that it does not return a new schema; instead, it returns the original schema. No other Zod method does this! That includes `.meta()` and `.describe()` (documented below) which return a new instance.

Schemas provide a `.register()` method to more conveniently add it to a registry.

    const mySchema = z.string();
     
    mySchema.register(myRegistry, { description: "A cool schema!" });
    // => mySchema

This lets you define metadata "inline" in your schemas.

    const mySchema = z.object({
      name: z.string().register(myRegistry, { description: "The user's name" }),
      age: z.number().register(myRegistry, { description: "The user's age" }),
    })

If a registry is defined without a metadata type, you can use it as a generic "collection", no metadata required.

    const myRegistry = z.registry();
     
    myRegistry.add(z.string());
    myRegistry.add(z.number());

[Metadata](?id=metadata)
------------------------

### [`z.globalRegistry`](?id=zglobalregistry)

For convenience, Zod provides a global registry (`z.globalRegistry`) that can be used to store metadata for JSON Schema generation or other purposes. It accepts the following metadata:

    export interface GlobalMeta {
      id?: string;
      title?: string;
      description?: string;
      examples?: T[]; // T is the output type of the schema you are registering
      [k: string]: unknown; // accepts other properties too
    }

To register some metadata in `z.globalRegistry` for a schema:

    import { z } from "zod/v4";
     
    const emailSchema = z.email().register(z.globalRegistry, { 
      id: "email_address",
      title: "Email address",
      description: "Your email address",
      examples: ["first.last@example.com"]
    });

### [`.meta()`](?id=meta)

For a more convenient approach, use the `.meta()` method to register a schema in `z.globalRegistry`.

ZodZod Mini

    const emailSchema = z.email().meta({ 
      id: "email_address",
      title: "Email address",
      description: "Please enter a valid email address",
    });

Calling `.meta()` without an argument will _retrieve_ the metadata for a schema.

    emailSchema.meta();
    // => { id: "email_address", title: "Email address", ... }

Metadata is associated with a _specific schema instance._ This is important to keep in mind, especially since Zod methods are immutable—they always return a new instance.

    const A = z.string().meta({ description: "A cool string" });
    A.meta(); // => { hello: "true" }
     
    const B = A.refine(_ => true);
    B.meta(); // => undefined

### [`.describe()`](?id=describe)

The `.describe()` method still exists for compatibility with Zod 3, but `.meta()` is now the recommended approach.

The `.describe()` method is a shorthand for registering a schema in `z.globalRegistry` with just a `description` field.

ZodZod Mini

    const emailSchema = z.email();
    emailSchema.describe("An email address");
     
    // equivalent to
    emailSchema.meta({ description: "An email address" });

[Custom registries](?id=custom-registries)
------------------------------------------

You've already seen a simple example of a custom registry:

    import { z } from "zod/v4";
     
    const myRegistry = z.registry<{ description: string };>();

Let's look at some more advanced patterns.

### [Referencing inferred types](?id=referencing-inferred-types)

It's often valuable for the metadata type to reference the _inferred type_ of a schema. For instance, you may want an `examples` field to contain examples of the schema's output.

    import { z } from "zod/v4";
     
    type MyMeta = { examples: z.$output[] };
    const myRegistry = z.registry<MyMeta>();
     
    myRegistry.add(z.string(), { examples: ["hello", "world"] });
    myRegistry.add(z.number(), { examples: [1, 2, 3] });

The special symbol `z.$output` is a reference to the schemas inferred output type (`z.infer<typeof schema>`). Similarly you can use `z.$input` to reference the input type.

### [Constraining schema types](?id=constraining-schema-types)

Pass a second generic to `z.registry()` to constrain the schema types that can be added to a registry. This registry only accepts string schemas.

    import { z } from "zod/v4";
     
    const myRegistry = z.registry<{ description: string }, z.ZodString>();
     
    myRegistry.add(z.string(), { description: "A number" }); // ✅
    myRegistry.add(z.number(), { description: "A number" }); // ❌ 
    //             ^ 'ZodNumber' is not assignable to parameter of type 'ZodString' 

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/metadata.mdx)

[

Next

Formatting errors

](/error-formatting)[

Next

JSON Schema

](/json-schema)

On this page

JSON Schema
===========

💎

**New** — Zod 4 introduces a new feature: native [JSON Schema](https://json-schema.org/) conversion. JSON Schema is a standard for describing the structure of JSON (with JSON). It's widely used in [OpenAPI](https://www.openapis.org/) definitions and defining [structured outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat) for AI.

To convert a Zod schema to JSON Schema, use the `z.toJSONSchema()` function.

    import { z } from "zod/v4";
     
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    });
     
    z.toJSONSchema(schema)
    // => {
    //   type: 'object',
    //   properties: { name: { type: 'string' }, age: { type: 'number' } },
    //   required: [ 'name', 'age' ]
    // }

All schema & checks are converted to their closest JSON Schema equivalent. Some types have no analog and cannot be reasonably represented. See the [`unrepresentable`](#unrepresentable) section below for more information on handling these cases.

    z.bigint(); // ❌
    z.int64(); // ❌
    z.symbol(); // ❌
    z.void(); // ❌
    z.date(); // ❌
    z.map(); // ❌
    z.set(); // ❌
    z.file(); // ❌
    z.transform(); // ❌
    z.nan(); // ❌
    z.custom(); // ❌

[String formats](?id=string-formats)
------------------------------------

Zod converts the following schema types to the equivalent JSON Schema `format`:

    // Supported via `format`
    z.email(); // => { type: "string", format: "email" }
    z.iso.datetime(); // => { type: "string", format: "date-time" }
    z.iso.date(); // => { type: "string", format: "date" }
    z.iso.time(); // => { type: "string", format: "time" }
    z.iso.duration(); // => { type: "string", format: "duration" }
    z.ipv4(); // => { type: "string", format: "ipv4" }
    z.ipv6(); // => { type: "string", format: "ipv6" }
    z.uuid(); // => { type: "string", format: "uuid" }
    z.guid(); // => { type: "string", format: "uuid" }
    z.url(); // => { type: "string", format: "uri" }

These schemas are supported via `contentEncoding`:

    z.base64(); // => { type: "string", contentEncoding: "base64" }

All other string formats are supported via `pattern`:

    z.base64url();
    z.cuid();
    z.regex();
    z.emoji();
    z.nanoid();
    z.cuid2();
    z.ulid();
    z.cidrv4();
    z.cidrv6();

[Numeric types](?id=numeric-types)
----------------------------------

Zod converts the following numeric types to JSON Schema:

    // number
    z.number(); // => { type: "number" }
    z.float32(); // => { type: "number", exclusiveMinimum: ..., exclusiveMaximum: ... }
    z.float64(); // => { type: "number", exclusiveMinimum: ..., exclusiveMaximum: ... }
     
    // integer
    z.int(); // => { type: "integer" }
    z.int32(); // => { type: "integer", exclusiveMinimum: ..., exclusiveMaximum: ... }

[Nullability](?id=nullability)
------------------------------

Zod converts both `undefined`/`null` to `{ type: "null" }` in JSON Schema.

    z.null(); 
    // => { type: "null" }
     
    z.undefined(); 
    // => { type: "null" }

Similarly, `optional` and `nullable` are made nullable via `oneOf`:

    z.optional(z.string());
    // => { oneOf: [{ type: "string" }, { type: "null" }] }
     
    z.nullable(z.string());
    // => { oneOf: [{ type: "string" }, { type: "null" }] }

[Configuration](?id=configuration)
----------------------------------

A second argument can be used to customize the conversion logic.

    z.toJSONSchema(schema, {
      // ...params
    })

Below is a quick reference for each supported parameter. Each one is explained in more detail below.

    interface ToJSONSchemaParams {
      /** The JSON Schema version to target.
       * - `"draft-2020-12"` — Default. JSON Schema Draft 2020-12
       * - `"draft-7"` — JSON Schema Draft 7 */
      target?: "draft-7" | "draft-2020-12";
     
      /** A registry used to look up metadata for each schema. 
       * Any schema with an `id` property will be extracted as a $def. */
      metadata?: $ZodRegistry<Record<string, any>>;
     
      /** How to handle unrepresentable types.
       * - `"throw"` — Default. Unrepresentable types throw an error
       * - `"any"` — Unrepresentable types become `{}` */
      unrepresentable?: "throw" | "any";
     
      /** How to handle cycles.
       * - `"ref"` — Default. Cycles will be broken using $defs
       * - `"throw"` — Cycles will throw an error if encountered */
      cycles?: "ref" | "throw";
     
      /* How to handle reused schemas.
       * - `"inline"` — Default. Reused schemas will be inlined
       * - `"ref"` — Reused schemas will be extracted as $defs */
      reused?: "ref" | "inline";
     
      /** A function used to convert `id` values to URIs to be used in *external* $refs.
       *
       * Default is `(id) => id`.
       */
      uri?: (id: string) => string;
    }

### [`target`](?id=target)

To set the target JSON Schema version, use the `target` parameter. By default, Zod will target Draft 2020-12.

    z.toJSONSchema(schema, { target: "draft-7" });
    z.toJSONSchema(schema, { target: "draft-2020-12" });

### [`metadata`](?id=metadata)

If you haven't already, read through the [Metadata and registries](/metadata) page for context on storing metadata in Zod.

In Zod, metadata is stored in registries. Zod exports a global registry `z.globalRegistry` that can be used to store common metadata fields like `id`, `title`, `description`, and `examples`.

ZodZod Mini

    import { z } from "zod/v4";
     
    // `.meta()` is a convenience method for registering a schema in `z.globalRegistry`
    const emailSchema = z.string().meta({ 
      title: "Email address",
      description: "Your email address",
    });
     
    z.toJSONSchema(emailSchema);
    // => { type: "string", title: "Email address", description: "Your email address", ... } 

### [`unrepresentable`](?id=unrepresentable)

The following APIs are not representable in JSON Schema. By default, Zod will throw an error if they are encountered. It is unsound to attempt a conversion to JSON Schema; you should modify your schemas as they have no equivalent in JSON. An error will be thrown if any of these are encountered.

    z.bigint(); // ❌
    z.int64(); // ❌
    z.symbol(); // ❌
    z.void(); // ❌
    z.date(); // ❌
    z.map(); // ❌
    z.set(); // ❌
    z.file(); // ❌
    z.transform(); // ❌
    z.nan(); // ❌
    z.custom(); // ❌

By default, Zod will throw an error if any of these are encountered.

    z.toJSONSchema(z.bigint());
    // => throws Error

You can change this behavior by setting the `unrepresentable` option to `"any"`. This will convert any unrepresentable types to `{}` (the equivalent of `unknown` in JSON Schema).

    z.toJSONSchema(z.bigint(), { unrepresentable: "any" });
    // => {}

### [`cycles`](?id=cycles)

How to handle cycles. If a cycle is encountered as `z.toJSONSchema()` traverses the schema, it will be represented using `$ref`.

    const User = z.object({
      name: z.string(),
      get friend() {
        return User;
      },
    });
     
    toJSONSchema(User);
    // => {
    //   type: 'object',
    //   properties: { name: { type: 'string' }, friend: { '$ref': '#' } },
    //   required: [ 'name', 'friend' ]
    // }

If instead you want to throw an error, set the `cycles` option to `"throw"`.

    z.toJSONSchema(User, { cycles: "throw" });
    // => throws Error

### [`reused`](?id=reused)

How to handle schemas that occur multiple times in the same schema. By default, Zod will inline these schemas.

    const name = z.string();
    const User = z.object({
      firstName: name,
      lastName: name,
    });
     
    z.toJSONSchema(User);
    // => {
    //   type: 'object',
    //   properties: { 
    //     firstName: { type: 'string' }, 
    //     lastName: { type: 'string' } 
    //   },
    //   required: [ 'firstName', 'lastName' ]
    // }

Instead you can set the `reused` option to `"ref"` to extract these schemas into `$defs`.

    z.toJSONSchema(User, { reused: "ref" });
    // => {
    //   type: 'object',
    //   properties: {
    //     firstName: { '$ref': '#/$defs/__schema0' },
    //     lastName: { '$ref': '#/$defs/__schema0' }
    //   },
    //   required: [ 'firstName', 'lastName' ],
    //   '$defs': { __schema0: { type: 'string' } }
    // }

### [`override`](?id=override)

To define some custom override logic, use `override`. The provided callback has access to the original Zod schema and the default JSON Schema. _This function should directly modify `ctx.jsonSchema`._

    const mySchema = /* ... */
    z.toJSONSchema(mySchema, {
      override: (ctx)=>{
        ctx.zodSchema; // the original Zod schema
        ctx.jsonSchema; // the default JSON Schema
     
        // directly modify
        ctx.jsonSchema.whatever = "sup";
      }
    });

Note that unrepresentable types will throw an `Error` before this functions is called. If you are trying to define custom behavior for an unrepresentable type, you'll need to use set the `unrepresentable: "any"` alongside `override`.

    // support z.date() as ISO datetime strings
    const result = z.toJSONSchema(z.date(), {
      unrepresentable: "any",
      override: (ctx) => {
        const def = ctx.zodSchema._zod.def;
        if(def.type ==="date"){
          ctx.jsonSchema.type = "string";
          ctx.jsonSchema.format = "date-time";
        }
      },
    });

### [`io`](?id=io)

Some schema types have different input and output types, e.g. `ZodPipe`, `ZodDefault`, and coerced primitives. By default, the result of `z.toJSONSchema` represents the _output type_; use `"io": "input"` to extract the input type instead.

    const mySchema = z.string().transform(val => val.length).pipe(z.number());
    // ZodPipe
     
    const jsonSchema = z.toJSONSchema(mySchema); 
    // => { type: "number" }
     
    const jsonSchema = z.toJSONSchema(mySchema, { io: "input" }); 
    // => { type: "string" }

[Registries](?id=registries)
----------------------------

Passing a schema into `z.toJSONSchema()` will return a _self-contained_ JSON Schema.

In other cases, you may have a set of Zod schemas you'd like to represent using multiple interlinked JSON Schemas, perhaps to write to `.json` files and serve from a web server. To achieve this, you can pass a [registry](/metadata#registries) into `z.toJSONSchema()`.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
      get posts(){
        return z.array(Post);
      }
    });
     
    const Post = z.object({
      title: z.string(),
      content: z.string(),
      get author(){
        return User;
      }
    });
     
    z.globalRegistry.add(User, {id: "User"});
    z.globalRegistry.add(Post, {id: "Post"});

The schemas above both have an `id` property registered in `z.globalRegistry`. To convert these to JSON Schema, pass the entire registry into `z.toJSONSchema()`.

    z.toJSONSchema(z.globalRegistry);
    // => {
    //   schemas: {
    //     User: {
    //       id: 'User',
    //       type: 'object',
    //       properties: {
    //         name: { type: 'string' },
    //         posts: { type: 'array', items: { '$ref': 'Post' } }
    //       },
    //       required: [ 'name', 'posts' ]
    //     },
    //     Post: {
    //       id: 'Post',
    //       type: 'object',
    //       properties: {
    //         title: { type: 'string' },
    //         content: { type: 'string' },
    //         author: { '$ref': 'User' }
    //       },
    //       required: [ 'title', 'content', 'author' ]
    //     }
    //   }
    // }

Any schema with an `id` property in the registry will be extracted into `schemas`.

By default, the `$ref` URIs are relative paths like `"User"`. To make these absolute URIs, use the `uri` option. This expects a function that converts an `id` to a fully-qualified URI.

    z.toJSONSchema(z.globalRegistry, {
      uri: (id) => `https://example.com/${id}.json`
    });
    // => {
    //   schemas: {
    //     User: {
    //       id: 'User',
    //       type: 'object',
    //       properties: {
    //         name: { type: 'string' },
    //         posts: {
    //           type: 'array',
    //           items: { '$ref': 'https://example.com/Post.json' }
    //         }
    //       },
    //       required: [ 'name', 'posts' ]
    //     },
    //     Post: {
    //       id: 'Post',
    //       type: 'object',
    //       properties: {
    //         title: { type: 'string' },
    //         content: { type: 'string' },
    //         author: { '$ref': 'https://example.com/User.json' }
    //       },
    //       required: [ 'title', 'content', 'author' ]
    //     }
    //   }
    // }

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/json-schema.mdx)

[

Next

Metadata and registries

](/metadata)[

Next

Ecosystem

](/ecosystem)

On this page

Ecosystem
=========

**Note** — To avoid bloat and confusion, the Ecosystem section has been wiped clean with the release of Zod 4. If you've updated your library to work with Zod 4, please submit a PR to add it back in.

There are a growing number of tools that are built atop or support Zod natively! If you've built a tool or library on top of Zod, let me know [on Twitter](https://twitter.com/colinhacks) or [start a Discussion](https://github.com/colinhacks/zod/discussions). I'll add it below and tweet it out.

[Resources](?id=resources)
--------------------------

*   [Total TypeScript Zod Tutorial](https://www.totaltypescript.com/tutorials/zod) by [@mattpocockuk](https://twitter.com/mattpocockuk)
*   [Fixing TypeScript's Blindspot: Runtime Typechecking](https://www.youtube.com/watch?v=rY_XqfSHock) by [@jherr](https://twitter.com/jherr)

[API Libraries](?id=api-libraries)
----------------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |
| [`tRPC`](https://github.com/trpc/trpc) | ⭐️ 37376 | ⭐️ | Build end-to-end typesafe APIs without GraphQL. |
| [`oRPC`](https://orpc.unnoq.com/) | ⭐️ 2000 | ⭐️ | Typesafe APIs Made Simple |
| [`GQLoom`](https://gqloom.dev/) | ⭐️ 51 | ⭐️ | Weave GraphQL schema and resolvers using Zod. |

[Form Integrations](?id=form-integrations)
------------------------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |
| [`conform`](https://conform.guide/api/zod/parseWithZod) | ⭐️ 2298 | ⭐️ | A type-safe form validation library utilizing web fundamentals to progressively enhance HTML Forms with full support for server frameworks like Remix and Next.js. |
| [`@regle/schemas`](https://github.com/victorgarciaesgi/regle/tree/main/packages/schemas) | ⭐️ 195 | ⭐️ | Headless form validation library for Vue.js. |

[Zod to X](?id=zod-to-x)
------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |

[X to Zod](?id=x-to-zod)
------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |
| [`orval`](https://github.com/orval-labs/orval) | ⭐️ 4030 | ⭐️ | Generate Zod schemas from OpenAPI schemas |
| [`kubb`](https://github.com/kubb-labs/kubb) | ⭐️ 1154 | ⭐️ | The ultimate toolkit for working with APIs. |

[Mocking Libraries](?id=mocking-libraries)
------------------------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |
| [`zod-schema-faker`](https://github.com/soc221b/zod-schema-faker) | ⭐️ 57 | ⭐️ | Generate mock data from zod schemas. Powered by @faker-js/faker and randexp.js. |
| [`zocker`](https://zocker.sigrist.dev) | ⭐️ 36 | ⭐️ ✅ | Generates valid, semantically meaningful data for your Zod schemas. |

[Powered by Zod](?id=powered-by-zod)
------------------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |
| [`Composable Functions`](https://github.com/seasonedcc/composable-functions) | ⭐️ 708 | ⭐️ | Types and functions to make composition easy and safe. |
| [`zod-config`](https://github.com/alexmarqs/zod-config) | ⭐️ 92 | ⭐️ | Load configurations across multiple sources with flexible adapters, ensuring type safety with Zod. |

[Zod Utilities](?id=zod-utilities)
----------------------------------

| Name | Stars | Zod 4 support | Description |
| --- | --- | --- | --- |

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/ecosystem.mdx)

[

Next

JSON Schema

](/json-schema)[

Next

For library authors

](/library-authors)

On this page

For library authors
===================

This page is primarily intended for consumption by _library authors_ who are building tooling on top of Zod.

If you are a library author and think this page should include some additional guidance, please open an issue!

[Do I need to depend on Zod?](?id=do-i-need-to-depend-on-zod)
-------------------------------------------------------------

First things first, make sure you need to depend on Zod at all.

If you're building a library that accepts user-defined schemas to perform black-box validation, you may not need to integrate with Zod specifically. Instead look into [Standard Schema](https://standardschema.dev/). It's a shared interface implemented by most popular validation libraries in the TypeScript ecosystem (see the [full list](https://standardschema.dev/#what-schema-libraries-implement-the-spec)), including Zod.

This spec works great if you accept user-defined schemas and treat them like "black box" validators. Given any compliant library, you can extract inferred input/output types, validate inputs, and get back a standardized error.

If you need Zod specific functionality, read on.

[How to configure peer dependencies?](?id=how-to-configure-peer-dependencies)
-----------------------------------------------------------------------------

Any library built on top of Zod should include `"zod"` in `"peerDependencies"`. This lets your users "bring their own Zod".

    // package.json
    {
      // ...
      "peerDependencies": {
        "zod": "^3.25.0"
      }
    }

During development, you need to meet your own peer dependency requirement, to do so, add `"zod"` to your `"devDependencies"` as well.

    // package.json
    {
      "peerDependencies": {
        "zod": "^3.25.0"
      },
      "devDependencies": {
        "zod": "^3.25.0"
      }
    }

[How to support Zod 4?](?id=how-to-support-zod-4)
-------------------------------------------------

To support Zod 4, update the minimum version for your `"zod"` peer dependency to `^3.25.0`.

    // package.json
    {
      // ...
      "peerDependencies": {
        "zod": "^3.25.0"
      }
    }

Starting with `v3.25.0`, Zod 4 is available at a `/v4` subpath.

    import * as z4 from "zod/v4/core";

Library code should _not_ import from the package root (`"zod"`)! Instead, import from the version-specific subpaths: `"zod/v3"` and `"zod/v4/core"`. This way, your code is future-proofed against major version bumps down the line.

[How to support Zod 3 and Zod 4 simultaneously?](?id=how-to-support-zod-3-and-zod-4-simultaneously)
---------------------------------------------------------------------------------------------------

Starting in `v3.25.0`, the package contains copies of both Zod 3 and Zod 4 at their respective subpaths. This makes it easy to support both versions simultaneously.

    import * as z3 from "zod/v3";
    import * as z4 from "zod/v4/core";
     
    type Schema = z3.ZodTypeAny | z4.$ZodType;
     
    function acceptUserSchema(schema: z3.ZodTypeAny | z4.$ZodType) {
      // ...
    }

To differentiate between Zod 3 and Zod 4 schemas at runtime, check for the `"_zod"` property. This property is only defined on Zod 4 schemas.

    import type * as z3 from "zod/v3";
    import type * as v4 from "zod/v4/core";
     
    declare const schema: z3.ZodTypeAny | v4.$ZodType;
     
    if ("_zod" in schema) {
      schema._zod.def; // Zod 4 schema
    } else {
      schema._def; // Zod 3 schema
    }

[How to support Zod and Zod Mini simultaneously?](?id=how-to-support-zod-and-zod-mini-simultaneously)
-----------------------------------------------------------------------------------------------------

Your library code should only import from `zod/v4/core`. This sub-package defines the interfaces, classes, and utilities that are shared between `zod/v4` and `zod/v4-mini`.

    // library code
    import * as z from "zod/v4/core";
     
    export function acceptObjectSchema<T extends z.$ZodObject>(schema: T){
      // parse data
      z.parse(schema, { /* somedata */});
      // inspect internals
      schema._zod.def.shape;
    }

By building against the shared base interfaces, you can reliably support both sub-packages simultaneously. This function can accept both `zod/v4` and `zod/v4-mini` schemas.

    // user code
    import { acceptObjectSchema } from "your-library";
     
    // Zod 4
    import * as z from "zod/v4";
    acceptObjectSchema(z.object({ name: z.string() }));
     
    // Zod 4 Mini
    import * as zm from "zod/v4-mini";
    acceptObjectSchema(zm.object({ name: zm.string() }))

Refer to the [Zod Core](/packages/core) page for more information on the contents of the core sub-library.

[How to accept user-defined schemas?](?id=how-to-accept-user-defined-schemas)
-----------------------------------------------------------------------------

Accepting user-defined schemas is the a fundamental operation for any library built on Zod. This section outlines the best practices for doing so.

When starting out, it may be tempting to write a function that accepts a Zod schema like this:

    import * as z from "zod/v4";
     
    function inferSchema<T>(schema: z.core.$ZodType<T>) {
      return schema;
    }

This approach is incorrect, and limits TypeScript's ability to properly infer the argument. No matter what you pass in, the type of `schema` will be an instance of `ZodType`.

    inferSchema(z.string());
    // => z.core.$ZodType<string>

This approach loses type information, namely _which subclass_ the input actually is (in this case, `ZodString`). That means you can't call any string-specific methods like `.min()` on the result of `inferSchema`. Instead, your generic parameter should extend the core Zod schema interface:

    function inferSchema<T extends z.core.$ZodType>(schema: T) {
      return schema;
    }
     
    inferSchema(z.string());
    // => ZodString

The result is now fully and properly typed, you can extract & use the inferred type of the schema:

    function parseData<T extends z.ZodTypeAny>(data: unknown, schema: T): z.output<T> {
      return schema.parse(data);
    }
     
    parseData("sup", z.string());
    // => string

To constrain the input schema to a specific subclass:

     
    import * as z from "zod/v4";
     
    // only accepts object schemas
    function inferSchema<T>(schema: z.core.$ZodObject) {
      return schema;
    }

To constrain the inferred output type of the input schema:

     
    import * as z from "zod/v4";
     
    // only accepts string schemas
    function inferSchema<T extends z.core.$ZodType<string>>(schema: T) {
      return schema;
    }
     
    inferSchema(z.string()); // ✅ 
     
    inferSchema(z.number()); 
    // ❌ The types of '_zod.output' are incompatible between these types. 
    // // Type 'number' is not assignable to type 'string'

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/library-authors.mdx)

[

Next

Ecosystem

](/ecosystem)[

Next

Zod

](/packages/zod)

Zod
===

The `zod/v4` package is the "flagship" library of the Zod ecosystem. It strikes a balance between developer experience and bundle size that's ideal for the vast majority of applications.

If you have uncommonly strict constraints around bundle size, consider [Zod Mini](/packages/mini).

Zod aims to provide a schema API that maps one-to-one to TypeScript's type system.

    import { z } from "zod/v4";
     
    const schema = z.object({
      name: z.string(),
      age: z.number().int().positive(),
      email: z.string().email(),
    });

The API relies on methods to provide a concise, chainable, autocomplete-friendly way to define complex types.

    z.string()
      .min(5)
      .max(10)
      .toLowerCase();

All schemas extend the `z.ZodType` base class, which in turn extends `z.$ZodType` from [`zod/v4/core`](/packages/core). All instance of `ZodType` implement the following methods:

    import { z } from "zod/v4";
     
    const mySchema = z.string();
     
    // parsing
    mySchema.parse(data);
    mySchema.safeParse(data);
    mySchema.parseAsync(data);
    mySchema.safeParseAsync(data);
     
     
    // refinements
    mySchema.refine(refinementFunc);
    mySchema.superRefine(refinementFunc); // deprecated, use `.check()`
    mySchema.overwrite(overwriteFunc);
     
    // wrappers
    mySchema.optional();
    mySchema.nonoptional();
    mySchema.nullable();
    mySchema.nullish();
    mySchema.default(defaultValue);
    mySchema.array();
    mySchema.or(otherSchema);
    mySchema.transform(transformFunc);
    mySchema.catch(catchValue);
    mySchema.pipe(otherSchema);
    mySchema.readonly();
     
    // metadata and registries
    mySchema.register(registry, metadata);
    mySchema.describe(description);
    mySchema.meta(metadata);
     
    // utilities
    mySchema.check(checkOrFunction);
    mySchema.clone(def);
    mySchema.brand<T>();
    mySchema.isOptional(); // boolean
    mySchema.isNullable(); // boolean

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/packages/zod.mdx)

[

Next

For library authors

](/library-authors)[

Next

Zod Mini

](/packages/mini)

On this page

Zod Mini
========

The `zod/v4-mini` variant was introduced with the release of Zod 4. To try it:

    npm install zod@^3.25.0

It implements the exact same functionality as `zod`, but using a _functional_, _tree-shakable_ API. If you're coming from `zod`, this means you generally will use _functions_ in place of methods.

Zod MiniZod

    import { z } from "zod/v4-mini"
     
    const mySchema = z.nullable(z.optional(z.string()));

**Tree-shaking** — In `zod`, schemas provide a range of convenience methods to perform some common operations (e.g. `.min()` on string schemas). Bundlers have a hard time removing ("tree shaking") method implementations from your bundle, even if they aren't used. It's much easier to remove an unused top-level function, which is why the API of `zod/v4-mini` uses more functions than methods.

[`ZodMiniType`](?id=zodminitype)
--------------------------------

All `zod/v4-mini` schemas extend the `z.ZodMiniType` base class, which in turn extends `z.core.$ZodType` from [`zod/v4/core`](/packages/core). While this class implements far fewer methods than `ZodType` in `zod`, some particularly useful methods remain.

### [`.parse`](?id=parse)

This is an obvious one. All `zod/v4-mini` schemas implement the same parsing methods as `zod`.

    import { z } from "zod/v4-mini"
     
    const mySchema = z.string();
     
    mySchema.parse('asdf')
    await mySchema.parseAsync('asdf')
    mySchema.safeParse('asdf')
    await mySchema.safeParseAsync('asdf')

### [`.check()`](?id=check)

In `zod/v4` there are dedicated methods on schema subclasses for performing common checks:

    import { z } from "zod/v4";
     
    z.string()
      .min(5)
      .max(10)
      .refine(val => val.includes("@"))
      .trim()

In `zod/v4-mini` such methods aren't implemented. Instead you pass these checks into schemas using the `.check()` method:

    import { z } from "zod/v4-mini"
     
    z.string().check(
      z.minLength(5), 
      z.maxLength(10),
      z.refine(val => val.includes("@")),
      z.trim()
    );

The following checks are implemented. Some of these checks only apply to schemas of certain types (e.g. strings or numbers). The APIs are all type-safe; TypeScript won't let you add an unsupported check to your schema.

    z.lt(value);
    z.lte(value); // alias: z.maximum()
    z.gt(value);
    z.gte(value); // alias: z.minimum()
    z.positive();
    z.negative();
    z.nonpositive();
    z.nonnegative();
    z.multipleOf(value);
    z.maxSize(value);
    z.minSize(value);
    z.size(value);
    z.maxLength(value);
    z.minLength(value);
    z.length(value);
    z.regex(regex);
    z.lowercase();
    z.uppercase();
    z.includes(value);
    z.startsWith(value);
    z.endsWith(value);
    z.property(key, schema);
    z.mime(value);
     
    // custom checks
    z.refine()
    z.check()   // replaces .superRefine()
     
    // mutations (these do not change the inferred types)
    z.overwrite(value => newValue);
    z.normalize();
    z.trim();
    z.toLowerCase();
    z.toUpperCase();

### [`.register()`](?id=register)

For registering a schema in a [registry](/metadata#registries).

    const myReg = z.registry<{title: string}>();
     
    z.string().register(myReg, { title: "My cool string schema" });

### [`.brand()`](?id=brand)

For _branding_ a schema. Refer to the [Branded types](/api#branded-types) docs for more information.

    import { z } from "zod/v4-mini"
     
    const USD = z.string().brand("USD");

### [`.clone(def)`](?id=clonedef)

Returns an identical clone of the current schema using the provided `def`.

    const mySchema = z.string()
     
    mySchema.clone(mySchema._zod.def);

[No default locale](?id=no-default-locale)
------------------------------------------

While `zod/v4` automatically loads the English (`en`) locale, `zod/v4-mini` does not. This reduces the bundle size in scenarios where error messages are unnecessary, localized to a non-English language, or otherwise customized.

This means, by default the `message` property of all issues will simply read `"Invalid input"`. To load the English locale:

    import { z } from "zod/v4-mini"
     
    z.config(z.locales.en());

Refer to the [Locales](/error-customization#internationalization) docs for more on localization.

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/packages/mini.mdx)

[

Next

Zod

](/packages/zod)[

Next

Zod Core

](/packages/core)

On this page

Zod Core
========

This sub-package exports the core classes and utilities that are consumed by `zod/v4` and `zod/v4-mini`. It is not intended to be used directly; instead it's designed to be extended by other packages. It implements:

    import { z } from "zod/v4/core";
     
    // the base class for all Zod schemas
    z.$ZodType;
     
    // subclasses of $ZodType that implement common parsers
    z.$ZodString
    z.$ZodObject
    z.$ZodArray
    // ...
     
    // the base class for all Zod checks
    z.$ZodCheck;
     
    // subclasses of $ZodCheck that implement common checks
    z.$ZodCheckMinLength
    z.$ZodCheckMaxLength
     
    // the base class for all Zod errors
    z.$ZodError;
     
    // issue formats (types only)
    {} as z.$ZodIssue;
     
    // utils
    z.util.isValidJWT(...);

[Schemas](?id=schemas)
----------------------

The base class for all Zod schemas is `$ZodType`. It accepts two generic parameters: `Output` and `Input`.

    export class $ZodType<Output = unknown, Input = unknown> {
      _zod: { /* internals */}
    }

`zod/v4/core` exports a number of subclasses that implement some common parsers. A union of all first-party subclasses is exported as `z.$ZodTypes`.

    export type $ZodTypes =
      | $ZodString
      | $ZodNumber
      | $ZodBigInt
      | $ZodBoolean
      | $ZodDate
      | $ZodSymbol
      | $ZodUndefined
      | $ZodNullable
      | $ZodNull
      | $ZodAny
      | $ZodUnknown
      | $ZodNever
      | $ZodVoid
      | $ZodArray
      | $ZodObject
      | $ZodUnion
      | $ZodIntersection
      | $ZodTuple
      | $ZodRecord
      | $ZodMap
      | $ZodSet
      | $ZodLiteral
      | $ZodEnum
      | $ZodPromise
      | $ZodLazy
      | $ZodOptional
      | $ZodDefault
      | $ZodTemplateLiteral
      | $ZodCustom
      | $ZodTransform
      | $ZodNonOptional
      | $ZodReadonly
      | $ZodNaN
      | $ZodPipe
      | $ZodSuccess
      | $ZodCatch
      | $ZodFile;

### Inheritance diagram

[Internals](?id=internals)
--------------------------

All `zod/v4/core` subclasses only contain a single property: `_zod`. This property is an object containing the schemas _internals_. The goal is to make `zod/v4/core` as extensible and unopinionated as possible. Other libraries can "build their own Zod" on top of these classes without `zod/v4/core` cluttering up the interface. Refer to the implementations of `zod/v4` and `zod/v4-mini` for examples of how to extend these classes.

The `_zod` internals property contains some notable properties:

*   `.def` — The schema's _definition_: this is the object you pass into the class's constructor to create an instance. It completely describes the schema, and it's JSON-serializable.
    *   `.def.type` — A string representing the schema's type, e.g. `"string"`, `"object"`, `"array"`, etc.
    *   `.def.checks` — An array of _checks_ that are executed by the schema after parsing.
*   `.input` — A virtual property that "stores" the schema's _inferred input type_.
*   `.output` — A virtual property that "stores" the schema's _inferred output type_.
*   `.run()` — The schema's internal parser implementation.

If you are implementing a tool (say, a code generator) that must traverse Zod schemas, you can cast any schema to `$ZodTypes` and use the `def` property to discriminate between these classes.

    export function walk(_schema: z.$ZodType) {
      const schema = _schema as z.$ZodTypes;
      const def = schema._zod.def;
      switch (def.type) {
        case "string": {
          // ...
          break;
        }
        case "object": {
          // ...
          break;
        }
      }
    }

There are a number of subclasses of `$ZodString` that implement various _string formats_. These are exported as `z.$ZodStringFormatTypes`.

    export type $ZodStringFormatTypes =
      | $ZodGUID
      | $ZodUUID
      | $ZodEmail
      | $ZodURL
      | $ZodEmoji
      | $ZodNanoID
      | $ZodCUID
      | $ZodCUID2
      | $ZodULID
      | $ZodXID
      | $ZodKSUID
      | $ZodISODateTime
      | $ZodISODate
      | $ZodISOTime
      | $ZodISODuration
      | $ZodIPv4
      | $ZodIPv6
      | $ZodCIDRv4
      | $ZodCIDRv6
      | $ZodBase64
      | $ZodBase64URL
      | $ZodE164
      | $ZodJWT

[Parsing](?id=parsing)
----------------------

As the Zod Core schema classes have no methods, there are top-level functions for parsing data.

    import * as z from "zod/v4/core";
     
    const schema = new z.$ZodString({ type: "string" });
    z.parse(schema, "hello");
    z.safeParse(schema, "hello");
    await z.parseAsync(schema, "hello");
    await z.safeParseAsync(schema, "hello");

[Checks](?id=checks)
--------------------

Every Zod schema contains an array of _checks_. These perform post-parsing refinements (and occasionally mutations) that _do not affect_ the inferred type.

    const schema = z.string().check(z.email()).check(z.min(5));
    // => $ZodString
     
    schema._zod.def.checks;
    // => [$ZodCheckEmail, $ZodCheckMinLength]

The base class for all Zod checks is `$ZodCheck`. It accepts a single generic parameter `T`.

    export class $ZodCheck<in T = unknown> {
      _zod: { /* internals */}
    }

The `_zod` internals property contains some notable properties:

*   `.def` — The check's _definition_: this is the object you pass into the class's constructor to create the check. It completely describes the check, and it's JSON-serializable.
    *   `.def.check` — A string representing the check's type, e.g. `"min_lenth"`, `"less_than"`, `"string_format"`, etc.
*   `.check()` — Contains the check's validation logic.

`zod/v4/core` exports a number of subclasses that perform some common refinements. All first-party subclasses are exported as a union called `z.$ZodChecks`.

    export type $ZodChecks =
      | $ZodCheckLessThan
      | $ZodCheckGreaterThan
      | $ZodCheckMultipleOf
      | $ZodCheckNumberFormat
      | $ZodCheckBigIntFormat
      | $ZodCheckMaxSize
      | $ZodCheckMinSize
      | $ZodCheckSizeEquals
      | $ZodCheckMaxLength
      | $ZodCheckMinLength
      | $ZodCheckLengthEquals
      | $ZodCheckProperty
      | $ZodCheckMimeType
      | $ZodCheckOverwrite
      | $ZodCheckStringFormat

You can use the `._zod.def.check` property to discriminate between these classes.

    const check = {} as z.$ZodChecks;
    const def = check._zod.def;
     
    switch (def.check) {
      case "less_than":
      case "greater_than":
        // ...
        break;
    }

As with schema types, there are a number of subclasses of `$ZodCheckStringFormat` that implement various _string formats_.

    export type $ZodStringFormatChecks =
      | $ZodCheckRegex
      | $ZodCheckLowerCase
      | $ZodCheckUpperCase
      | $ZodCheckIncludes
      | $ZodCheckStartsWith
      | $ZodCheckEndsWith
      | $ZodGUID
      | $ZodUUID
      | $ZodEmail
      | $ZodURL
      | $ZodEmoji
      | $ZodNanoID
      | $ZodCUID
      | $ZodCUID2
      | $ZodULID
      | $ZodXID
      | $ZodKSUID
      | $ZodISODateTime
      | $ZodISODate
      | $ZodISOTime
      | $ZodISODuration
      | $ZodIPv4
      | $ZodIPv6
      | $ZodCIDRv4
      | $ZodCIDRv6
      | $ZodBase64
      | $ZodBase64URL
      | $ZodE164
      | $ZodJWT;

Use a nested `switch` to discriminate between the different string format checks.

    const check = {} as z.$ZodChecks;
    const def = check._zod.def;
     
    switch (def.check) {
      case "less_than":
      case "greater_than":
      // ...
      case "string_format":
        {
          const formatCheck = check as z.$ZodStringFormatChecks;
          const formatCheckDef = formatCheck._zod.def;
     
          switch (formatCheckDef.format) {
            case "email":
            case "url":
              // do stuff
          }
        }
        break;
    }

You'll notice some of these string format _checks_ overlap with the string format _types_ above. That's because these classes implement both the `$ZodCheck` and `$ZodType` interfaces. That is, they can be used as either a check or a type. In these cases, both `._zod.parse` (the schema parser) and `._zod.check` (the check validation) are executed during parsing. In effect, the instance is prepended to its own `checks` array (though it won't actually exist in `._zod.def.checks`).

    // as a type
    z.email().parse("user@example.com");
     
    // as a check
    z.string().check(z.email()).parse("user@example.com")

[Errors](?id=errors)
--------------------

The base class for all errors in Zod is `$ZodError`.

For performance reasons, `$ZodError` _does not_ extend the built-in `Error` class! So using `instanceof Error` will return `false`.

*   The `zod/v4` package implements a subclass of `$ZodError` called `ZodError` with some additional convenience methods.
*   The `zod/v4-mini` sub-package directly uses `$ZodError`

    export class $ZodError<T = unknown> implements Error {
     public issues: $ZodIssue[];
    }

[Issues](?id=issues)
--------------------

The `issues` property corresponds to an array of `$ZodIssue` objects. All issues extend the `z.$ZodIssueBase` interface.

    export interface $ZodIssueBase {
      readonly code?: string;
      readonly input?: unknown;
      readonly path: PropertyKey[];
      readonly message: string;
    }

Zod defines the following issue subtypes:

    export type $ZodIssue =
      | $ZodIssueInvalidType
      | $ZodIssueTooBig
      | $ZodIssueTooSmall
      | $ZodIssueInvalidStringFormat
      | $ZodIssueNotMultipleOf
      | $ZodIssueUnrecognizedKeys
      | $ZodIssueInvalidUnion
      | $ZodIssueInvalidKey
      | $ZodIssueInvalidElement
      | $ZodIssueInvalidValue
      | $ZodIssueCustom;

For details on each type, refer to [the implementation](https://github.com/colinhacks/zod/blob/v4/packages/core/src/errors.ts).

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/packages/core.mdx)

[

Next

Zod Mini

](/packages/mini)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Introducing Zod 4
=================

After a year of active development: Zod 4 is now stable! It's faster, slimmer, more `tsc`\-efficient, and implements some long-requested features.

❤️

Huge thanks to [Clerk](https://go.clerk.com/zod-clerk), who supported my work on Zod 4 through their extremely generous [OSS Fellowship](https://clerk.com/blog/zod-fellowship). They were an amazing partner throughout the (much longer than anticipated!) development process.

[Versioning](?id=versioning)
----------------------------

To simplify the migration process both for users and Zod's ecosystem of associated libraries, Zod 4 will initially published alongside Zod 3 as part of the `zod@3.25` release. Despite the version number, it is considered stable and ready for production use.

To upgrade:

    npm upgrade zod@^3.25.0

Then import Zod 4 from the `"/v4"` subpath:

    import { z } from "zod/v4";

Down the road, when there's broad support for Zod 4, we'll publish `zod@4.0.0` on npm. At this point, Zod 4 will be exported from the package root (`"zod"`). The `"zod/v4"` subpath will remain available. For a detailed writeup on the reasons for this versioning scheme, refer to [this issue](https://github.com/colinhacks/zod/issues/4371).

For a complete list of breaking changes, refer to the [Migration guide](/v4/changelog). This post focuses on new features & enhancements.

[Why a new major version?](?id=why-a-new-major-version)
-------------------------------------------------------

Zod v3.0 was released in May 2021 (!). Back then Zod had 2700 stars on GitHub and 600k weekly downloads. Today it has 37.8k stars and 31M weekly downloads (up from 23M when the beta came out 6 weeks ago!). After 24 minor versions, the Zod 3 codebase had hit a ceiling; the most commonly requested features and improvements require breaking changes.

Zod 4 fixes a number of long-standing design limitations of Zod 3 in one fell swoop, paving the way for several long-requested features and a huge leap in performance. It closes 9 of Zod's [10 most upvoted open issues](https://github.com/colinhacks/zod/issues?q=is%3Aissue%20state%3Aopen%20sort%3Areactions-%2B1-desc). With luck, it will serve as the new foundation for many more years to come.

For a scannable breakdown of what's new, see the table of contents. Click on any item to jump to that section.

[Benchmarks](?id=benchmarks)
----------------------------

You can run these benchmarks yourself in the Zod repo:

    $ git clone git@github.com:colinhacks/zod.git
    $ cd zod
    $ git switch v4
    $ pnpm install

Then to run a particular benchmark:

    $ pnpm bench <name>

### [14x faster string parsing](?id=14x-faster-string-parsing)

    $ pnpm bench string
    runtime: node v22.13.0 (arm64-darwin)
     
    benchmark      time (avg)             (min … max)       p75       p99      p999
    ------------------------------------------------- -----------------------------
    • z.string().parse
    ------------------------------------------------- -----------------------------
    zod3          363 µs/iter       (338 µs … 683 µs)    351 µs    467 µs    572 µs
    zod4       24'674 ns/iter    (21'083 ns … 235 µs) 24'209 ns 76'125 ns    120 µs
     
    summary for z.string().parse
      zod4
       14.71x faster than zod3

### [7x faster array parsing](?id=7x-faster-array-parsing)

    $ pnpm bench array
    runtime: node v22.13.0 (arm64-darwin)
     
    benchmark      time (avg)             (min … max)       p75       p99      p999
    ------------------------------------------------- -----------------------------
    • z.array() parsing
    ------------------------------------------------- -----------------------------
    zod3          147 µs/iter       (137 µs … 767 µs)    140 µs    246 µs    520 µs
    zod4       19'817 ns/iter    (18'125 ns … 436 µs) 19'125 ns 44'500 ns    137 µs
     
    summary for z.array() parsing
      zod4
       7.43x faster than zod3

### [6.5x faster object parsing](?id=65x-faster-object-parsing)

This runs the [Moltar validation library benchmark](https://moltar.github.io/typescript-runtime-type-benchmarks/).

    $ pnpm bench object-moltar
    benchmark      time (avg)             (min … max)       p75       p99      p999
    ------------------------------------------------- -----------------------------
    • z.object() safeParse
    ------------------------------------------------- -----------------------------
    zod3          805 µs/iter     (771 µs … 2'802 µs)    804 µs    928 µs  2'802 µs
    zod4          124 µs/iter     (118 µs … 1'236 µs)    119 µs    231 µs    329 µs
     
    summary for z.object() safeParse
      zod4
       6.5x faster than zod3

[100x reduction in `tsc` instantiations](?id=100x-reduction-in-tsc-instantiations)
----------------------------------------------------------------------------------

Consider the following simple file:

    import { z } from "zod/v4";
     
    export const A = z.object({
      a: z.string(),
      b: z.string(),
      c: z.string(),
      d: z.string(),
      e: z.string(),
    });
     
    export const B = A.extend({
      f: z.string(),
      g: z.string(),
      h: z.string(),
    });

Compiling this file with `tsc --extendedDiagnostics` using `"zod/v3"` results in >25000 type instantiations. With `"zod/v4"` it only results in ~175.

The Zod repo contains a `tsc` benchmarking playground. Try this for yourself using the compiler benchmarks in `packages/tsc`. The exact numbers may change as the implementation evolves.

    $ cd packages/tsc
    $ pnpm bench object-with-extend

More importantly, Zod 4 has redesigned and simplified the generics of `ZodObject` and other schema classes to avoid some pernicious "instantiation explosions". For instance, chaining `.extend()` and `.omit()` repeatedly—something that previously caused compiler issues:

    import { z } from "zod/v4";
     
    export const a = z.object({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const b = a.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const c = b.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const d = c.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const e = d.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const f = e.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const g = f.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const h = g.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const i = h.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const j = i.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const k = j.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const l = k.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const m = l.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const n = m.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const o = n.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });
     
    export const p = o.omit({
      a: true,
      b: true,
      c: true,
    });
     
    export const q = p.extend({
      a: z.string(),
      b: z.string(),
      c: z.string(),
    });

In Zod 3, this took `4000ms` to compile; and adding additional calls to `.extend()` would trigger a "Possibly infinite" error. In Zod 4, this compiles in `400ms`, `10x` faster.

Coupled with the upcoming [`tsgo`](https://github.com/microsoft/typescript-go) compiler, Zod 4's editor performance will scale to vastly larger schemas and codebases.

[2x reduction in core bundle size](?id=2x-reduction-in-core-bundle-size)
------------------------------------------------------------------------

Consider the following simple script.

    import { z } from "zod/v4";
     
    const schema = z.boolean();
     
    schema.parse(true);

It's about as simple as it gets when it comes to validation. That's intentional; it's a good way to measure the _core bundle size_—the code that will end up in the bundle even in simple cases. We'll bundle this with `rollup` using both Zod 3 and Zod 4 and compare the final bundles.

| Package | Bundle (gzip) |
| --- | --- |
| `zod/v3` | `12.47kb` |
| `zod/v4` | `5.36kb` |

The core bundle is ~57% smaller in Zod 4 (2.3x). That's good! But we can do a lot better.

[Introducing Zod Mini](?id=introducing-zod-mini)
------------------------------------------------

Zod's method-heavy API is fundamentally difficult to tree-shake. Even our simple `z.boolean()` script pulls in the implementations of a bunch of methods we didn't use, like `.optional()`, `.array()`, etc. Writing slimmer implementations can only get you so far. That's where `zod/v4-mini` comes in.

    npm install zod@^3.25.0

It's a Zod variant with a functional, tree-shakable API that corresponds one-to-one with `zod`. Where Zod uses methods, `zod/v4-mini` generally uses wrapper functions:

Zod MiniZod

    import { z } from "zod/v4-mini";
     
    z.optional(z.string());
     
    z.union([z.string(), z.number()]);
     
    z.extend(z.object({ /* ... */ }), { age: z.number() });

Not all methods are gone! The parsing methods are identical in `zod/v4` and `zod/v4-mini`.

    import { z } from "zod/v4-mini";
     
    z.string().parse("asdf");
    z.string().safeParse("asdf");
    await z.string().parseAsync("asdf");
    await z.string().safeParseAsync("asdf");

There's also a general-purpose `.check()` method used to add refinements.

Zod MiniZod

    import { z } from "zod/v4-mini";
     
    z.array(z.number()).check(
      z.minLength(5), 
      z.maxLength(10),
      z.refine(arr => arr.includes(5))
    );

The following top-level refinements are available in `zod/v4-mini`. It should be fairly self-explanatory which methods they correspond to.

    import { z } from "zod/v4-mini";
     
    // custom checks
    z.refine();
     
    // first-class checks
    z.lt(value);
    z.lte(value); // alias: z.maximum()
    z.gt(value);
    z.gte(value); // alias: z.minimum()
    z.positive();
    z.negative();
    z.nonpositive();
    z.nonnegative();
    z.multipleOf(value);
    z.maxSize(value);
    z.minSize(value);
    z.size(value);
    z.maxLength(value);
    z.minLength(value);
    z.length(value);
    z.regex(regex);
    z.lowercase();
    z.uppercase();
    z.includes(value);
    z.startsWith(value);
    z.endsWith(value);
    z.property(key, schema); // for object schemas; check `input[key]` against `schema`
    z.mime(value); // for file schemas (see below)
     
    // overwrites (these *do not* change the inferred type!)
    z.overwrite(value => newValue);
    z.normalize();
    z.trim();
    z.toLowerCase();
    z.toUpperCase();

This more functional API makes it easier for bundlers to tree-shake the APIs you don't use. While `zod/v4` is still recommended for the majority of use cases, any projects with uncommonly strict bundle size constraints should consider `zod/v4-mini`.

### [6.6x reduction in core bundle size](?id=66x-reduction-in-core-bundle-size)

Here's the script from above, updated to use `"zod/v4-mini"` instead of `"zod"`.

    import { z } from "zod/v4-mini";
     
    const schema = z.boolean();
    schema.parse(false);

When we build this with `rollup`, the gzipped bundle size is `1.88kb`. That's an 85% (6.6x) reduction in core bundle size compared to `zod@3`.

| Package | Bundle (gzip) |
| --- | --- |
| `zod/v3` | `12.47kb` |
| `zod/v4` | `5.36kb` |
| `zod/v4-mini` | `1.88kb` |

Learn more on the dedicated [`zod/v4-mini`](/packages/mini) docs page. Complete API details are mixed into existing documentation pages; code blocks contain separate tabs for `"Zod"` and `"Zod Mini"` wherever their APIs diverge.

[Metadata](?id=metadata)
------------------------

Zod 4 introduces a new system for adding strongly-typed metadata to your schemas. Metadata isn't stored inside the schema itself; instead it's stored in a "schema registry" that associates a schema with some typed metadata. To create a registry with `z.registry()`:

    import { z } from "zod/v4";
     
    const myRegistry = z.registry<{ title: string; description: string }>();

To add schemas to your registry:

    const emailSchema = z.string().email();
     
    myRegistry.add(emailSchema, { title: "Email address", description: "..." });
    myRegistry.get(emailSchema);
    // => { title: "Email address", ... }

Alternatively, you can use the `.register()` method on a schema for convenience:

    emailSchema.register(myRegistry, { title: "Email address", description: "..." })
    // => returns emailSchema

### [The global registry](?id=the-global-registry)

Zod also exports a global registry `z.globalRegistry` that accepts some common JSON Schema-compatible metadata:

    z.globalRegistry.add(z.string(), { 
      id: "email_address",
      title: "Email address",
      description: "Provide your email",
      examples: ["naomie@example.com"],
      extraKey: "Additional properties are also allowed"
    });

### [`.meta()`](?id=meta)

To conveniently add a schema to `z.globalRegistry`, use the `.meta()` method.

    z.string().meta({ 
      id: "email_address",
      title: "Email address",
      description: "Provide your email",
      examples: ["naomie@example.com"],
      // ...
    });

For compatibility with Zod 3, `.describe()` is still available, but `.meta()` is preferred.

    z.string().describe("An email address");
     
    // equivalent to
    z.string().meta({ description: "An email address" });

[JSON Schema conversion](?id=json-schema-conversion)
----------------------------------------------------

Zod 4 introduces first-party JSON Schema conversion via `z.toJSONSchema()`.

    import { z } from "zod/v4";
     
    const mySchema = z.object({name: z.string(), points: z.number()});
     
    z.toJSONSchema(mySchema);
    // => {
    //   type: "object",
    //   properties: {
    //     name: {type: "string"},
    //     points: {type: "number"},
    //   },
    //   required: ["name", "points"],
    // }

Any metadata in `z.globalRegistry` is automatically included in the JSON Schema output.

    const mySchema = z.object({
      firstName: z.string().describe("Your first name"),
      lastName: z.string().meta({ title: "last_name" }),
      age: z.number().meta({ examples: [12, 99] }),
    });
     
    z.toJSONSchema(mySchema);
    // => {
    //   type: 'object',
    //   properties: {
    //     firstName: { type: 'string', description: 'Your first name' },
    //     lastName: { type: 'string', title: 'last_name' },
    //     age: { type: 'number', examples: [ 12, 99 ] }
    //   },
    //   required: [ 'firstName', 'lastName', 'age' ]
    // }

Refer to the [JSON Schema docs](/json-schema) for information on customizing the generated JSON Schema.

[Recursive objects](?id=recursive-objects)
------------------------------------------

This was an unexpected one. After years of trying to crack this problem, I finally [found a way](https://x.com/colinhacks/status/1919286275133378670) to properly infer recursive object types in Zod. To define a recursive type:

    const Category = z.object({
      name: z.string(),
      get subcategories(){
        return z.array(Category)
      }
    });
     
    type Category = z.infer<typeof Category>;
    // { name: string; subcategories: Category[] }

You can also represent _mutually recursive types_:

    const User = z.object({
      email: z.email(),
      get posts(){
        return z.array(Post)
      }
    });
     
    const Post = z.object({
      title: z.string(),
      get author(){
        return User
      }
    });

Unlike the Zod 3 pattern for recursive types, there's no type casting required. The resulting schemas are plain `ZodObject` instances and have the full set of methods available.

    Post.pick({ title: true })
    Post.partial();
    Post.extend({ publishDate: z.date() });

[File schemas](?id=file-schemas)
--------------------------------

To validate `File` instances:

    const fileSchema = z.file();
     
    fileSchema.min(10_000); // minimum .size (bytes)
    fileSchema.max(1_000_000); // maximum .size (bytes)
    fileSchema.type("image/png"); // MIME type

[Internationalization](?id=internationalization)
------------------------------------------------

Zod 4 introduces a new `locales` API for globally translating error messages into different languages.

    import { z } from "zod/v4";
     
    // configure English locale (default)
    z.config(z.locales.en());

At the time of this writing only the English locale is available; There will be a call for pull request from the community shortly; this section will be updated with a list of supported languages as they become available.

[Error pretty-printing](?id=error-pretty-printing)
--------------------------------------------------

The popularity of the [`zod-validation-error`](https://www.npmjs.com/package/zod-validation-error) package demonstrates that there's significant demand for an official API for pretty-printing errors. If you are using that package currently, by all means continue using it.

Zod now implements a top-level `z.prettifyError` function for converting a `ZodError` to a user-friendly formatted string.

    const myError = new z.ZodError([
      {
        code: 'unrecognized_keys',
        keys: [ 'extraField' ],
        path: [],
        message: 'Unrecognized key: "extraField"'
      },
      {
        expected: 'string',
        code: 'invalid_type',
        path: [ 'username' ],
        message: 'Invalid input: expected string, received number'
      },
      {
        origin: 'number',
        code: 'too_small',
        minimum: 0,
        inclusive: true,
        path: [ 'favoriteNumbers', 1 ],
        message: 'Too small: expected number to be >=0'
      }
    ]);
     
    z.prettifyError(myError);

This returns the following pretty-printable multi-line string:

    ✖ Unrecognized key: "extraField"
    ✖ Invalid input: expected string, received number
      → at username
    ✖ Invalid input: expected number, received string
      → at favoriteNumbers[1]

Currently the formatting isn't configurable; this may change in the future.

[Top-level string formats](?id=top-level-string-formats)
--------------------------------------------------------

All "string formats" (email, etc.) have been promoted to top-level functions on the `z` module. This is both more concise and more tree-shakable. The method equivalents (`z.string().email()`, etc.) are still available but have been deprecated. They'll be removed in the next major version.

    z.email();
    z.uuidv4();
    z.uuidv7();
    z.uuidv8();
    z.ipv4();
    z.ipv6();
    z.cidrv4();
    z.cidrv6();
    z.url();
    z.e164();
    z.base64();
    z.base64url();
    z.jwt();
    z.ascii();
    z.utf8();
    z.lowercase();
    z.iso.date();
    z.iso.datetime();
    z.iso.duration();
    z.iso.time();

### [Custom email regex](?id=custom-email-regex)

The `z.email()` API now supports a custom regular expression. There is no one canonical email regex; different applications may choose to be more or less strict. For convenience Zod exports some common ones.

    // Zod's default email regex (Gmail rules)
    // see colinhacks.com/essays/reasonable-email-regex
    z.email(); // z.regexes.email
     
    // the regex used by browsers to validate input[type=email] fields
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
    z.email({ pattern: z.regexes.html5Email });
     
    // the classic emailregex.com regex (RFC 5322)
    z.email({ pattern: z.regexes.rfc5322Email });
     
    // a loose regex that allows Unicode (good for intl emails)
    z.email({ pattern: z.regexes.unicodeEmail });

[Template literal types](?id=template-literal-types)
----------------------------------------------------

Zod 4 implements `z.templateLiteral()`. Template literal types are perhaps the biggest feature of TypeScript's type system that wasn't previously representable.

    const hello = z.templateLiteral(["hello, ", z.string()]);
    // `hello, ${string}`
     
    const cssUnits = z.enum(["px", "em", "rem", "%"]);
    const css = z.templateLiteral([z.number(), cssUnits]);
    // `${number}px` | `${number}em` | `${number}rem` | `${number}%`
     
    const email = z.templateLiteral([
      z.string().min(1),
      "@",
      z.string().max(64),
    ]);
    // `${string}@${string}` (the min/max refinements are enforced!)

Every Zod schema type that can be stringified stores an internal regex: strings, string formats like `z.email()`, numbers, boolean, bigint, enums, literals, undefined/optional, null/nullable, and other template literals. The `z.templateLiteral` constructor concatenates these into a super-regex, so things like string formats (`z.email()`) are properly enforced (but custom refinements are not!).

Read the [template literal docs](/api#template-literals) for more info.

[Number formats](?id=number-formats)
------------------------------------

New numeric "formats" have been added for representing fixed-width integer and float types. These return a `ZodNumber` instance with proper minimum/maximum constraints already added.

    z.int();      // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    z.float32();  // [-3.4028234663852886e38, 3.4028234663852886e38]
    z.float64();  // [-1.7976931348623157e308, 1.7976931348623157e308]
    z.int32();    // [-2147483648, 2147483647]
    z.uint32();   // [0, 4294967295]

Similarly the following `bigint` numeric formats have also been added. These integer types exceed what can be safely represented by a `number` in JavaScript, so these return a `ZodBigInt` instance with the proper minimum/maximum constraints already added.

    z.int64();    // [-9223372036854775808n, 9223372036854775807n]
    z.uint64();   // [0n, 18446744073709551615n]

[Stringbool](?id=stringbool)
----------------------------

The existing `z.coerce.boolean()` API is very simple: falsy values (`false`, `undefined`, `null`, `0`, `""`, `NaN` etc) become `false`, truthy values become `true`.

This is still a good API, and its behavior aligns with the other `z.coerce` APIs. But some users requested a more sophisticated "env-style" boolean coercion. To support this, Zod 4 introduces `z.stringbool()`:

    const strbool = z.stringbool();
     
    strbool.parse("true")         // => true
    strbool.parse("1")            // => true
    strbool.parse("yes")          // => true
    strbool.parse("on")           // => true
    strbool.parse("y")            // => true
    strbool.parse("enable")       // => true
     
    strbool.parse("false");       // => false
    strbool.parse("0");           // => false
    strbool.parse("no");          // => false
    strbool.parse("off");         // => false
    strbool.parse("n");           // => false
    strbool.parse("disabled");    // => false
     
    strbool.parse(/* anything else */); // ZodError<[{ code: "invalid_value" }]>

To customize the truthy and falsy values:

    z.stringbool({
      truthy: ["yes", "true"],
      falsy: ["no", "false"]
    })

Refer to the [`z.stringbool()` docs](/api#stringbools) for more information.

[Simplified error customization](?id=simplified-error-customization)
--------------------------------------------------------------------

The majority of breaking changes in Zod 4 involve the _error customization_ APIs. They were a bit of a mess in Zod 3; Zod 4 makes things significantly more elegant, to the point where I think it's worth highlighting here.

Long story short, there is now a single, unified `error` parameter for customizing errors, replacing the following APIs:

Replace `message` with `error`. (The `message` parameter is still supported but deprecated.)

    - z.string().min(5, { message: "Too short." });
    + z.string().min(5, { error: "Too short." });

Replace `invalid_type_error` and `required_error` with `error` (function syntax):

    // Zod 3
    - z.string({ 
    -   required_error: "This field is required" 
    -   invalid_type_error: "Not a string", 
    - });
     
    // Zod 4 
    + z.string({ error: (issue) => issue.input === undefined ? 
    +  "This field is required" :
    +  "Not a string" 
    + });

Replace `errorMap` with `error` (function syntax):

    // Zod 3 
    - z.string({
    -   errorMap: (issue, ctx) => {
    -     if (issue.code === "too_small") {
    -       return { message: `Value must be >${issue.minimum}` };
    -     }
    -     return { message: ctx.defaultError };
    -   },
    - });
     
    // Zod 4
    + z.string({
    +   error: (issue) => {
    +     if (issue.code === "too_small") {
    +       return `Value must be >${issue.minimum}`
    +     }
    +   },
    + });

[Upgraded `z.discriminatedUnion()`](?id=upgraded-zdiscriminatedunion)
---------------------------------------------------------------------

Discriminated unions now support a number of schema types not previously supported, including unions, pipes, and nested objects:

    const MyResult = z.discriminatedUnion("status", [
      // simple literal
      z.object({ status: z.literal("aaa"), data: z.string() }),
      // union discriminator
      z.object({ status: z.union([z.literal("bbb"), z.literal("ccc")]) }),
      // pipe discriminator
      z.object({ status: z.object({ value: z.literal("fail") }) }),
    ]);

Perhaps most importantly, discriminated unions now _compose_—you can use one discriminated union as a member of another.

    const BaseError = z.object({ status: z.literal("failed"), message: z.string() });
    const MyErrors = z.discriminatedUnion("code", [
      BaseError.extend({ code: z.literal(400) }),
      BaseError.extend({ code: z.literal(401) }),
      BaseError.extend({ code: z.literal(500) })
    ]);
     
    const MyResult = z.discriminatedUnion("status", [
      z.object({ status: z.literal("success"), data: z.string() }),
      MyErrors
    ]);

[Multiple values in `z.literal()`](?id=multiple-values-in-zliteral)
-------------------------------------------------------------------

The `z.literal()` API now optionally supports multiple values.

    const httpCodes = z.literal([ 200, 201, 202, 204, 206, 207, 208, 226 ]);
     
    // previously in Zod 3:
    const httpCodes = z.union([
      z.literal(200),
      z.literal(201),
      z.literal(202),
      z.literal(204),
      z.literal(206),
      z.literal(207),
      z.literal(208),
      z.literal(226)
    ]);

[Refinements live inside schemas](?id=refinements-live-inside-schemas)
----------------------------------------------------------------------

In Zod 3, they were stored in a `ZodEffects` class that wrapped the original schema. This was inconvenient, as it meant you couldn't interleave `.refine()` with other schema methods like `.min()`.

    z.string()
      .refine(val => val.includes("@"))
      .min(5);
    // ^ ❌ Property 'min' does not exist on type ZodEffects<ZodString, string, string>

In Zod 4, refinements are stored inside the schemas themselves, so the code above works as expected.

    z.string()
      .refine(val => val.includes("@"))
      .min(5); // ✅

### [`.overwrite()`](?id=overwrite)

The `.transform()` method is extremely useful, but it has one major downside: the output type is no longer _introspectable_ at runtime. The transform function is a black box that can return anything. This means (among other things) there's no sound way to convert the schema to JSON Schema.

    const Squared = z.number().transform(val => val ** 2);
    // => ZodPipe<ZodNumber, ZodTransform>

Zod 4 introduces a new `.overwrite()` method for representing transforms that _don't change the inferred type_. Unlike `.transform()`, this method returns an instance of the original class. The overwrite function is stored as a refinement, so it doesn't (and can't) modify the inferred type.

    z.number().overwrite(val => val ** 2).max(100);
    // => ZodNumber

The existing `.trim()`, `.toLowerCase()` and `.toUpperCase()` methods have been reimplemented using `.overwrite()`.

[An extensible foundation: `zod/v4/core`](?id=an-extensible-foundation-zodv4core)
---------------------------------------------------------------------------------

While this will not be relevant to the majority of Zod users, it's worth highlighting. The addition of `zod/v4-mini` necessitated the creation of a shared sub-package `zod/v4/core` which contains the core functionality shared between `zod/v4` and `zod/v4-mini`.

I was resistant to this at first, but now I see it as one of Zod 4's most important features. It lets Zod level up from a simple library to a fast validation "substrate" that can be sprinkled into other libraries.

If you're building a schema library, refer to the implementations of `zod/v4` and `zod/v4-mini` to see how to build on top of the foundation `zod/v4/core` provides. Don't hesitate to get in touch in GitHub discussions or via [X](https://x.com/colinhacks)/[Bluesky](https://bsky.app/profile/colinhacks.com) for help or feedback.

[Wrapping up](?id=wrapping-up)
------------------------------

I'm planning to write up a series of additional posts explaining the design process behind some major features like `zod/v4-mini`. I'll update this section as those get posted.

For library authors, there is now a dedicated [For library authors](/library-authors) guide that describes the best practices for building on top of Zod. It answers common questions about how to support Zod 3 & Zod 4 (including Mini) simultaneously.

    pnpm upgrade zod@^3.25.0

Happy parsing!  
— Colin McDonnell [@colinhacks](https://x.com/colinhacks)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/v4/index.mdx)

[

Next

Migration guide

](/v4/changelog)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Defining schemas
================

To validate data, you must first define a _schema_. Schemas represent _types_, from simple primitive values to complex nested objects and arrays.

[Primitives](?id=primitives)
----------------------------

    import { z } from "zod/v4";
     
    // primitive types
    z.string();
    z.number();
    z.bigint();
    z.boolean();
    z.symbol();
    z.undefined();
    z.null();

### [Coercion](?id=coercion)

To coerce input data to the appropriate type, use `z.coerce` instead:

    z.coerce.string();    // String(input)
    z.coerce.number();    // Number(input)
    z.coerce.boolean();   // Boolean(input)
    z.coerce.bigint();    // BigInt(input)

The coerced variant of these schemas attempts to convert the input value to the appropriate type.

    const schema = z.coerce.string();
     
    schema.parse("tuna");    // => "tuna"
    schema.parse(42);        // => "42"
    schema.parse(true);      // => "true"
    schema.parse(null);      // => "null"

### How coercion works in Zod

[Literals](?id=literals)
------------------------

Literal schemas represent a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types), like `"hello world"` or `5`.

    const tuna = z.literal("tuna");
    const twelve = z.literal(12);
    const twobig = z.literal(2n);
    const tru = z.literal(true);
    const terrific = z.literal(Symbol("terrific"));

To represent the JavaScript literals `null` and `undefined`:

    z.null();
    z.undefined();
    z.void(); // equivalent to z.undefined()

To allow multiple literal values:

    const colors = z.literal(["red", "green", "blue"]);
     
    colors.parse("green"); // ✅
    colors.parse("yellow"); // ❌

To extract the set of allowed values from a literal schema:

ZodZod Mini

    colors.values; // => Set<"red" | "green" | "blue">

[Strings](?id=strings)
----------------------

Zod provides a handful of built-in string validation and transform APIs. To perform some common string validations:

ZodZod Mini

    z.string().max(5);
    z.string().min(5);
    z.string().length(5);
    z.string().regex(/^[a-z]+$/);
    z.string().startsWith("aaa");
    z.string().endsWith("zzz");
    z.string().includes("---");
    z.string().uppercase();
    z.string().lowercase();

To perform some simple string transforms:

ZodZod Mini

    z.string().trim(); // trim whitespace
    z.string().toLowerCase(); // toLowerCase
    z.string().toUpperCase(); // toUpperCase

[String formats](?id=string-formats)
------------------------------------

To validate against some common string formats:

    z.email();
    z.uuid();
    z.url();
    z.emoji();         // validates a single emoji character
    z.base64();
    z.base64url();
    z.nanoid();
    z.cuid();
    z.cuid2();
    z.ulid();
    z.ipv4();
    z.ipv6();
    z.cidrv4();        // ipv4 CIDR block
    z.cidrv6();        // ipv6 CIDR block
    z.iso.date();
    z.iso.time();
    z.iso.datetime();
    z.iso.duration();

### [Emails](?id=emails)

To validate email addresses:

    z.email();

By default, Zod uses a comparatively strict email regex designed to validate normal email addresses containing common characters. It's roughly equivalent to the rules enforced by Gmail. To learn more about this regex, refer to [this post](https://colinhacks.com/essays/reasonable-email-regex).

    /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i

To customize the email validation behavior, you can pass a custom regular expression to the `pattern` param.

    z.email({ pattern: /your regex here/ });

Zod exports several useful regexes you could use.

    // Zod's default email regex
    z.email();
    z.email({ pattern: z.regexes.email }); // equivalent
     
    // the regex used by browsers to validate input[type=email] fields
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
    z.email({ pattern: z.regexes.html5Email });
     
    // the classic emailregex.com regex (RFC 5322)
    z.email({ pattern: z.regexes.rfc5322Email });
     
    // a loose regex that allows Unicode (good for intl emails)
    z.email({ pattern: z.regexes.unicodeEmail });

### [UUIDs](?id=uuids)

To validate UUIDs:

    z.uuid();

To specify a particular UUID version:

    // supports "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"
    z.uuid({ version: "v4" });
     
    // for convenience
    z.uuidv4();
    z.uuidv6();
    z.uuidv7();

The RFC 4122 UUID spec requires the first two bits of byte 8 to be `10`. Other UUID-like identifiers do not enforce this constraint. To validate any UUID-like identifier:

    z.guid();

### [URLs](?id=urls)

To validate any WHATWG-compatible URL:

    const schema = z.url();
     
    schema.parse("https://example.com"); // ✅
    schema.parse("http://localhost"); // ✅
    schema.parse("mailto:noreply@zod.dev"); // ✅
    schema.parse("sup"); // ✅

As you can see this is quite permissive. Internally this uses the `new URL()` constructor to valid inputs; this behavior may differ across platforms and runtimes but it's the mostly rigorous way to validate URIs/URLs on any given JS runtime/engine.

To validate the hostname against a specific regex:

    const schema = z.url({ hostname: /^example\.com$/ });
     
    schema.parse("https://example.com"); // ✅
    schema.parse("https://zombo.com"); // ❌

To validate the protocol against a specific regex, use the `protocol` param.

    const schema = z.url({ protocol: /^https$/ });
     
    schema.parse("https://example.com"); // ✅
    schema.parse("http://example.com"); // ❌

**Web URLs** — In many cases, you'll want to validate Web URLs specifically. Here's the recommended schema for doing so:

    const httpUrl = z.url({
      protocol: /^https?$/,
      hostname: z.regexes.domain
    });

This restricts the protocol to `http`/`https` and ensures the hostname is a valid domain name with the `z.regexes.domain` regular expression:

    /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/

### [ISO datetimes](?id=iso-datetimes)

As you may have noticed, Zod string includes a few date/time related validations. These validations are regular expression based, so they are not as strict as a full date/time library. However, they are very convenient for validating user input.

The `z.iso.datetime()` method enforces ISO 8601; by default, no timezone offsets are allowed:

    const datetime = z.iso.datetime();
     
    datetime.parse("2020-01-01T00:00:00Z"); // ✅
    datetime.parse("2020-01-01T00:00:00.123Z"); // ✅
    datetime.parse("2020-01-01T00:00:00.123456Z"); // ✅ (arbitrary precision)
    datetime.parse("2020-01-01T00:00:00+02:00"); // ❌ (no offsets allowed)

To allow timezone offsets:

    const datetime = z.iso.datetime({ offset: true });
     
    datetime.parse("2020-01-01T00:00:00+02:00"); // ✅
    datetime.parse("2020-01-01T00:00:00.123+02:00"); // ✅ (millis optional)
    datetime.parse("2020-01-01T00:00:00.123+0200"); // ✅ (millis optional)
    datetime.parse("2020-01-01T00:00:00.123+02"); // ✅ (only offset hours)
    datetime.parse("2020-01-01T00:00:00Z"); // ✅ (Z still supported)

To allow unqualified (timezone-less) datetimes:

    const schema = z.iso.datetime({ local: true });
    schema.parse("2020-01-01T00:00:00"); // ✅

To constrain the allowable `precision` (by default, arbitrary sub-second precision is supported).

    const datetime = z.iso.datetime({ precision: 3 });
     
    datetime.parse("2020-01-01T00:00:00.123Z"); // ✅
    datetime.parse("2020-01-01T00:00:00Z"); // ❌
    datetime.parse("2020-01-01T00:00:00.123456Z"); // ❌

### [ISO dates](?id=iso-dates)

The `z.iso.date()` method validates strings in the format `YYYY-MM-DD`.

    const date = z.iso.date();
     
    date.parse("2020-01-01"); // ✅
    date.parse("2020-1-1"); // ❌
    date.parse("2020-01-32"); // ❌

### [ISO times](?id=iso-times)

Added in Zod 3.23

The `z.iso.time()` method validates strings in the format `HH:MM:SS[.s+]`. The second can include arbitrary decimal precision. It does not allow timezone offsets of any kind.

    const time = z.iso.time();
     
    time.parse("00:00:00"); // ✅
    time.parse("09:52:31"); // ✅
    time.parse("23:59:59.9999999"); // ✅ (arbitrary precision)
     
    time.parse("00:00:00.123Z"); // ❌ (no `Z` allowed)
    time.parse("00:00:00.123+02:00"); // ❌ (no offsets allowed)

You can set the `precision` option to constrain the allowable decimal precision.

    const time = z.iso.time({ precision: 3 });
     
    time.parse("00:00:00.123"); // ✅
    time.parse("00:00:00.123456"); // ❌
    time.parse("00:00:00"); // ❌

### [IP addresses](?id=ip-addresses)

    const ipv4 = z.ipv4();
    v4.parse("192.168.0.0"); // ✅
     
    const ipv6 = z.ipv6();
    v6.parse("2001:db8:85a3::8a2e:370:7334"); // ✅

### [IP blocks (CIDR)](?id=ip-blocks-cidr)

Validate IP address ranges specified with [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).

    const cidrv4 = z.string().cidrv4();
    cidrv4.parse("192.168.0.0/24"); // ✅
     
    const cidrv6 = z.string().cidrv6();
    cidrv6.parse("2001:db8::/32"); // ✅

[Numbers](?id=numbers)
----------------------

Use `z.number()` to validate numbers. It allows any finite number.

    const schema = z.number();
     
    schema.parse(3.14);      // ✅
    schema.parse(NaN);       // ❌
    schema.parse(Infinity);  // ❌

Zod implements a handful of number-specific validations:

ZodZod Mini

    z.number().gt(5);
    z.number().gte(5);                     // alias .min(5)
    z.number().lt(5);
    z.number().lte(5);                     // alias .max(5)
    z.number().positive();       
    z.number().nonnegative();    
    z.number().negative(); 
    z.number().nonpositive(); 
    z.number().multipleOf(5);              // alias .step(5)

If (for some reason) you want to validate `NaN`, use `z.nan()`.

    z.nan().parse(NaN);              // ✅
    z.nan().parse("anything else");  // ❌

[Integers](?id=integers)
------------------------

To validate integers:

    z.int();     // restricts to safe integer range
    z.int32();   // restrict to int32 range

[BigInts](?id=bigints)
----------------------

To validate BigInts:

    z.bigint();

Zod includes a handful of bigint-specific validations.

ZodZod Mini

    z.bigint().gt(5n);
    z.bigint().gte(5n);                    // alias `.min(5n)`
    z.bigint().lt(5n);
    z.bigint().lte(5n);                    // alias `.max(5n)`
    z.bigint().positive(); 
    z.bigint().nonnegative(); 
    z.bigint().negative(); 
    z.bigint().nonpositive(); 
    z.bigint().multipleOf(5n);             // alias `.step(5n)`

[Booleans](?id=booleans)
------------------------

To validate boolean values:

    z.boolean().parse(true); // => true
    z.boolean().parse(false); // => false

[Dates](?id=dates)
------------------

Use `z.date()` to validate `Date` instances.

    z.date().safeParse(new Date()); // success: true
    z.date().safeParse("2022-01-12T00:00:00.000Z"); // success: false

To customize the error message:

    z.date({
      error: issue => issue.input === undefined ? "Required" : "Invalid date"
    });

Zod provides a handful of date-specific validations.

ZodZod Mini

    z.date().min(new Date("1900-01-01"), { error: "Too old!" });
    z.date().max(new Date(), { error: "Too young!" });

[Enums](?id=enums)
------------------

Use `z.enum` to validate inputs against a fixed set of allowable _string_ values.

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
     
    FishEnum.parse("Salmon"); // => "Salmon"
    FishEnum.parse("Swordfish"); // => ❌

Careful — If you declare your string array as a variable, Zod won't be able to properly infer the exact values of each element.

    const fish = ["Salmon", "Tuna", "Trout"];
     
    const FishEnum = z.enum(fish);
    type FishEnum = z.infer<typeof FishEnum>; // string

To fix this, always pass the array directly into the `z.enum()` function, or use [`as const`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions).

    const fish = ["Salmon", "Tuna", "Trout"] as const;
     
    const FishEnum = z.enum(fish);
    type FishEnum = z.infer<typeof FishEnum>; // "Salmon" | "Tuna" | "Trout"

You can also pass in an externally-declared TypeScript enum.

**Zod 4** — This replaces the `z.nativeEnum()` API in Zod 3.

Note that using TypeScript's `enum` keyword is [not recommended](https://www.totaltypescript.com/why-i-dont-like-typescript-enums).

    enum Fish {
      Salmon = "Salmon",
      Tuna = "Tuna",
      Trout = "Trout",
    }
     
    const FishEnum = z.enum(Fish);

### [`.enum`](?id=enum)

To extract the schema's values as an enum-like object:

ZodZod Mini

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
     
    FishEnum.enum;
    // => { Salmon: "Salmon", Tuna: "Tuna", Trout: "Trout" }

### [`.exclude()`](?id=exclude)

To create a new enum schema, excluding certain values:

ZodZod Mini

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
    const TunaOnly = FishEnum.exclude(["Salmon", "Trout"]);

### [`.extract()`](?id=extract)

To create a new enum schema, extracting certain values:

ZodZod Mini

    const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
    const SalmonAndTroutOnly = FishEnum.extract(["Salmon", "Trout"]);

[Stringbool](?id=stringbool)
----------------------------

**💎 New in Zod 4**

In some cases (e.g. parsing environment variables) it's valuable to parse certain string "boolish" values to a plain `boolean` value. To support this, Zod 4 introduces `z.stringbool()`:

    const strbool = z.stringbool();
     
    strbool.parse("true")         // => true
    strbool.parse("1")            // => true
    strbool.parse("yes")          // => true
    strbool.parse("on")           // => true
    strbool.parse("y")            // => true
    strbool.parse("enable")       // => true
     
    strbool.parse("false");       // => false
    strbool.parse("0");           // => false
    strbool.parse("no");          // => false
    strbool.parse("off");         // => false
    strbool.parse("n");           // => false
    strbool.parse("disabled");    // => false
     
    strbool.parse(/* anything else */); // ZodError<[{ code: "invalid_value" }]>

To customize the truthy and falsy values:

    z.stringbool({
      truthy: ["yes", "true"],
      falsy: ["no", "false"]
    })

Be default the schema is _case-insensitive_; all inputs are converted to lowercase before comparison to the `truthy`/`falsy` values. To make it case-sensitive:

    z.stringbool({
      case: "sensitive"
    });

[Optionals](?id=optionals)
--------------------------

To make a schema _optional_ (that is, to allow `undefined` inputs).

ZodZod Mini

    z.optional(z.literal("yoda")); // or z.literal("yoda").optional()

This returns a `ZodOptional` instance that wraps the original schema. To extract the inner schema:

ZodZod Mini

    optionalYoda.unwrap(); // ZodLiteral<"yoda">

[Nullables](?id=nullables)
--------------------------

To make a schema _nullable_ (that is, to allow `null` inputs).

ZodZod Mini

    z.nullable(z.literal("yoda")); // or z.literal("yoda").nullable()

This returns a `ZodNullable` instance that wraps the original schema. To extract the inner schema:

ZodZod Mini

    nullableYoda.unwrap(); // ZodLiteral<"yoda">

[Nullish](?id=nullish)
----------------------

To make a schema _nullish_ (both optional and nullable):

ZodZod Mini

    const nullishYoda = z.nullish(z.literal("yoda"));

Refer to the TypeScript manual for more about the concept of [nullish](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing).

[Unknown](?id=unknown)
----------------------

Zod aims to mirror TypeScript's type system one-to-one. As such, Zod provides APIs to represent the following special types:

    // allows any values
    z.any(); // inferred type: `any`
    z.unknown(); // inferred type: `unknown`

[Never](?id=never)
------------------

No value will pass validation.

    z.never(); // inferred type: `never`

[Template literals](?id=template-literals)
------------------------------------------

**💎 New in Zod 4**

Zod 4 finally implements one of the last remaining unrepresented features of TypeScript's type system: template literals. Virtually all primitive schemas can be used in `z.templateLiteral`: strings, string formats like `z.email()`, numbers, booleans, enums, literals (of the non-template variety), optional/nullable, and other template literals.

    const hello = z.templateLiteral(["hello, ", z.string()]);
    // `hello, ${string}`
     
    const cssUnits = z.enum(["px", "em", "rem", "%"]);
    const css = z.templateLiteral([z.number(), cssUnits ]);
    // `${number}px` | `${number}em` | `${number}rem` | `${number}%`
     
    const email = z.templateLiteral([
      z.string().min(1),
      "@",
      z.string().max(64),
    ]);
    // `${string}@${string}` (the min/max refinements are enforced!)

[Objects](?id=objects)
----------------------

To define an object type:

      // all properties are required by default
      const Person = z.object({
        name: z.string(),
        age: z.number(),
      });
     
      type Person = z.infer<typeof Person>;
      // => { name: string; age: number; }

By default, all properties are required. To make certain properties optional:

ZodZod Mini

    const Dog = z.object({
      name: z.string(),
      age: z.number().optional(),
    });
     
    Dog.parse({ name: "Yeller" }); // ✅

By default, unrecognized keys are _stripped_ from the parsed result:

    Dog.parse({ name: "Yeller", extraKey: true });
    // => { name: "Yeller" }

### [`z.strictObject`](?id=zstrictobject)

To define a _strict_ schema that throws an error when unknown keys are found:

    const StrictDog = z.strictObject({
      name: z.string(),
    });
     
    StrictDog.parse({ name: "Yeller", extraKey: true });
    // ❌ throws

### [`z.looseObject`](?id=zlooseobject)

To define a _loose_ schema that allows unknown keys to pass through:

    const LooseDog = z.looseObject({
      name: z.string(),
    });
     
    Dog.parse({ name: "Yeller", extraKey: true });
    // => { name: "Yeller", extraKey: true }

### [`.catchall()`](?id=catchall)

To define a _catchall schema_ that will be used to validate any unrecognized keys:

    const DogWithStrings = z.object({
      name: z.string(),
      age: z.number().optional(),
    }).catchall(z.string());
    
    DogWithStrings.parse({ name: "Yeller", extraKey: "extraValue" }); // ✅
    DogWithStrings.parse({ name: "Yeller", extraKey: 42 }); // ❌

### [`.shape`](?id=shape)

To access the internal schemas:

ZodZod Mini

    Dog.shape.name; // => string schema
    Dog.shape.age; // => number schema

### [`.keyof()`](?id=keyof)

To create a `ZodEnum` schema from the keys of an object schema:

ZodZod Mini

    const keySchema = Dog.keyof();
    // => ZodEnum<["name", "age"]>

### [`.extend()`](?id=extend)

To add additional fields to an object schema:

ZodZod Mini

    const DogWithBreed = Dog.extend({
      breed: z.string(),
    });

This API can be used to overwrite existing fields! Be careful with this power!

If the two schemas share keys, B will override A.

### [`.pick()`](?id=pick)

Inspired by TypeScript's built-in `Pick` and `Omit` utility types, Zod provides dedicated APIs for picking and omitting certain keys from an object schema.

Starting from this initial schema:

    const Recipe = z.object({
      title: z.string(),
      description: z.string().optional(),
      ingredients: z.array(z.string()),
    });
    // { title: string; description?: string | undefined; ingredients: string[] }

To pick certain keys:

ZodZod Mini

    const JustTheTitle = Recipe.pick({ title: true });

### [`.omit()`](?id=omit)

To omit certain keys:

ZodZod Mini

    const RecipeNoId = Recipe.omit({ id: true });

### [`.partial()`](?id=partial)

For convenience, Zod provides a dedicated API for making some or all properties optional, inspired by the built-in TypeScript utility type [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype).

To make all fields optional:

ZodZod Mini

    const PartialRecipe = Recipe.partial();
    // { title?: string | undefined; description?: string | undefined; ingredients?: string[] | undefined }

To make certain properties optional:

ZodZod Mini

    const RecipeOptionalIngredients = Recipe.partial({
      ingredients: true,
    });
    // { title: string; description?: string | undefined; ingredients?: string[] | undefined }

### [`.required()`](?id=required)

Zod provides an API for making some or all properties _required_, inspired by TypeScript's [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) utility type.

To make all properties required:

ZodZod Mini

    const RequiredRecipe = Recipe.required();
    // { title: string; description: string; ingredients: string[] }

To make certain properties required:

ZodZod Mini

    const RecipeRequiredDescription = Recipe.required({description: true});
    // { title: string; description: string; ingredients: string[] }

[Recursive objects](?id=recursive-objects)
------------------------------------------

To define a self-referential type, use a [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) on the key. This lets JavaScript resolve the cyclical schema at runtime.

    const Category = z.object({
      name: z.string(),
      get subcategories(){
        return z.array(Category)
      }
    });
     
    type Category = z.infer<typeof Category>;
    // { name: string; subcategories: Category[] }

Though recursive schemas are supported, passing cyclical data into Zod will cause an infinite loop.

You can also represent _mutually recursive types_:

    const User = z.object({
      email: z.email(),
      get posts(){
        return z.array(Post)
      }
    });
     
    const Post = z.object({
      title: z.string(),
      get author(){
        return User
      }
    });

All object APIs (`.pick()`, `.omit()`, `.required()`, `.partial()`, etc.) work as you'd expect.

Due to TypeScript limitations, recursive type inference can be finicky, and it only works in certain scenarios. Some more complicated types may trigger recursive type errors like this:

    const Activity = z.object({
      name: z.string(),
      get subactivities() {
        // ^ ❌ 'subactivities' implicitly has return type 'any' because it does not 
        // // have a return type annotation and is referenced directly or indirectly 
        // in one of its return expressions.ts(7023)
     
        return z.union([z.null(), Activity]);
      },
    });

In these cases, you can resolve the error with a type annotation on the offending getter:

    const Activity = z.object({
      name: z.string(),
      get subactivities(): z.ZodUnion<[z.ZodNull, typeof Activity]> { // ✅
        return z.union([z.null(), Activity]); 
      },
    });

[Arrays](?id=arrays)
--------------------

To define an array schema:

ZodZod Mini

    const stringArray = z.array(z.string()); // or z.string().array()

To access the inner schema for an element of the array.

ZodZod Mini

    stringArray.unwrap(); // => string schema

Zod implements a number of array-specific validations:

ZodZod Mini

    z.array(z.string()).min(5); // must contain 5 or more items
    z.array(z.string()).max(5); // must contain 5 or fewer items
    z.array(z.string()).length(5); // must contain 5 items exactly

[Tuples](?id=tuples)
--------------------

Unlike arrays, tuples are typically fixed-length arrays that specify different schemas for each index.

    const MyTuple = z.tuple([
      z.string(),
      z.number(),
      z.boolean()
    ]);
     
    type MyTuple = z.infer<typeof MyTuple>;
    // [string, number, boolean]

To add a variadic ("rest") argument:

    const variadicTuple = z.tuple([z.string()], z.number());
    // => [string, ...number[]];

[Unions](?id=unions)
--------------------

Union types (`A | B`) represent a logical "OR". Zod union schemas will check the input against each option in order. The first value that validates successfully is returned.

    const stringOrNumber = z.union([z.string(), z.number()]);
    // string | number
     
    stringOrNumber.parse("foo"); // passes
    stringOrNumber.parse(14); // passes

To extract the internal option schemas:

ZodZod Mini

    stringOrNumber.options; // [ZodString, ZodNumber]

[Discriminated unions](?id=discriminated-unions)
------------------------------------------------

A [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) is a special kind of union in which a) all the options are object schemas that b) share a particular key (the "discriminator"). Based on the value of the discriminator key, TypeScript is able to "narrow" the type signature as you'd expect.

    type MyResult =
      | { status: "success"; data: string }
      | { status: "failed"; error: string };
     
    function handleResult(result: MyResult){
      if(result.status === "success"){
        result.data; // string
      } else {
        result.error; // string
      }
    }

You could represent it with a regular `z.union()`. But regular unions are _naive_—they check the input against each option in order and return the first one that passes. This can be slow for large unions.

So Zod provides a `z.discriminatedUnion()` API that uses a _discriminator key_ to make parsing more efficient.

    const MyResult = z.discriminatedUnion("status", [
      z.object({ status: z.literal("success"), data: z.string() }),
      z.object({ status: z.literal("failed"), error: z.string() }),
    ]);

### Nesting discriminated unions

[Intersections](?id=intersections)
----------------------------------

Intersection types (`A & B`) represent a logical "AND".

    const a = z.union([z.number(), z.string()]);
    const b = z.union([z.number(), z.boolean()]);
    const c = z.intersection(a, b);
     
    type c = z.infer<typeof c>; // => number

This can be useful for intersecting two object types.

    const Person = z.intersection({ name: z.string() });
    type Person = z.infer<typeof Person>;
     
    const Employee = z.intersection({ role: z.string() });
    type Employee = z.infer<typeof Employee>;
     
    const EmployedPerson = z.intersection(Person, Employee);
    type EmployedPerson = z.infer<typeof EmployedPerson>;
    // Person & Employee

In most cases, it is better to use [`A.extend(B)`](#extend) to merge two object schemas. This approach returns a new object schema, whereas `z.intersection(A, B)` returns a `ZodIntersection` instance which lacks common object methods like `pick` and `omit`.

[Records](?id=records)
----------------------

Record schemas are used to validate types such as `Record<string, number>`.

    const IdCache = z.record(z.string(), z.string());
    type IdCache = z.infer<typeof IdCache>; // Record<string, string>
     
    IdCache.parse({
      carlotta: "77d2586b-9e8e-4ecf-8b21-ea7e0530eadd",
      jimmie: "77d2586b-9e8e-4ecf-8b21-ea7e0530eadd",
    });

The key schema can be any Zod schema that is assignable to `string | number | symbol`.

    const Keys = z.union([z.string(), z.number(), z.symbol()]);
    const AnyObject = z.record(Keys, z.unknown());
    // Record<string | number | symbol, unknown>

To create an object schemas containing keys defined by an enum:

    const Keys = z.enum(["id", "name", "email"]);
    const Person = z.record(Keys, z.string());
    // { id: string; name: string; email: string }

**Zod 4** — In Zod 4, if you pass a `z.enum` as the first argument to `z.record()`, Zod will exhaustively check that all enum values exist in the input as keys. This behavior agrees with TypeScript:

    type MyRecord = Record<"a" | "b", string>;
    const myRecord: MyRecord = { a: "foo", b: "bar" }; // ✅
    const myRecord: MyRecord = { a: "foo" }; // ❌ missing required key `b`

In Zod 3, exhaustiveness was not checked. To replicate the Zod 3 behavior, use `z.partialRecord()`.

If you want a _partial_ record type, use `z.partialRecord()`. This skips the special exhaustiveness checks Zod normally runs with `z.enum()` and `z.literal()` key schemas.

    const Keys = z.enum(["id", "name", "email"]).or(z.never()); 
    const Person = z.partialRecord(Keys, z.string());
    // { id?: string; name?: string; email?: string }

### A note on numeric keys

[Maps](?id=maps)
----------------

    const StringNumberMap = z.map(z.string(), z.number());
    type StringNumberMap = z.infer<typeof StringNumberMap>; // Map<string, number>
     
    const myMap: StringNumberMap = new Map();
    myMap.set("one", 1);
    myMap.set("two", 2);
     
    StringNumberMap.parse(myMap);

[Sets](?id=sets)
----------------

    const NumberSet = z.set(z.number());
    type NumberSet = z.infer<typeof NumberSet>; // Set<number>
     
    const mySet: NumberSet = new Set();
    mySet.add(1);
    mySet.add(2);
    NumberSet.parse(mySet);

Set schemas can be further constrained with the following utility methods.

ZodZod Mini

    z.set(z.string()).min(5); // must contain 5 or more items
    z.set(z.string()).max(5); // must contain 5 or fewer items
    z.set(z.string()).size(5); // must contain 5 items exactly

[Promises](?id=promises)
------------------------

**Deprecated** — `z.promise()` is deprecated in Zod 4. There are vanishingly few valid uses cases for a `Promise` schema. If you suspect a value might be a `Promise`, simply `await` it before parsing it with Zod.

### See z.promise() documentation

[Instanceof](?id=instanceof)
----------------------------

You can use `z.instanceof` to check that the input is an instance of a class. This is useful to validate inputs against classes that are exported from third-party libraries.

    class Test {
      name: string;
    }
     
    const TestSchema = z.instanceof(Test);
     
    TestSchema.parse(new Test()); // ✅
    TestSchema.parse("whatever"); // ❌

[Refinements](?id=refinements)
------------------------------

Every Zod schema stores an array of _refinements_. Refinements are a way to perform custom validation that Zod doesn't provide a native API for.

### [`.refine()`](?id=refine)

ZodZod Mini

    const myString = z.string().refine((val) => val.length <= 255);

Refinement functions should never throw. Instead they should return a falsy value to signal failure. Thrown errors are not caught by Zod.

To customize the error message:

ZodZod Mini

    const myString = z.string().refine((val) => val.length > 8, { 
      error: "Too short!" 
    });

By default, validation issues from checks are considered _continuable_; that is, Zod will execute _all_ checks in sequence, even if one of them causes a validation error. This is usually desirable, as it means Zod can surface as many errors as possible in one go.

ZodZod Mini

    const myString = z.string()
      .refine((val) => val.length > 8)
      .refine((val) => val === val.toLowerCase());
      
     
    const result = myString.safeParse("OH NO");
    result.error.issues;
    /* [
      { "code": "custom", "message": "Too short!" },
      { "code": "custom", "message": "Must be lowercase" }
    ] */

To mark a particular refinement as _non-continuable_, use the `abort` parameter. Validation will terminate if the check fails.

ZodZod Mini

    const myString = z.string()
      .refine((val) => val.length > 8, { abort: true })
      .refine((val) => val === val.toLowerCase());
     
     
    const result = myString.safeParse("OH NO");
    result.error!.issues;
    // => [{ "code": "custom", "message": "Too short!" }]

To customize the error path, use the `path` parameter. This is typically only useful in the context of object schemas.

ZodZod Mini

    const passwordForm = z
      .object({
        password: z.string(),
        confirm: z.string(),
      })
      .refine((data) => data.password === data.confirm, {
        message: "Passwords don't match",
        path: ["confirm"], // path of error
      });

This will set the `path` parameter in the associated issue:

ZodZod Mini

    const result = passwordForm.safeParse({ password: "asdf", confirm: "qwer" });
    result.error.issues;
    /* [{
      "code": "custom",
      "path": [ "confirm" ],
      "message": "Passwords don't match"
    }] */

Refinements can be `async`:

    const userId = z.string().refine(async (id) => {
      // verify that ID exists in database
      return true;
    });

If you use async refinements, you must use the `.parseAsync` method to parse data! Otherwise Zod will throw an error.

ZodZod Mini

    const result = await userId.parseAsync("abc123");

### [`.superRefine()`](?id=superrefine)

In Zod 4, `.superRefine()` has been deprecated in favor of `.check()`

### View .superRefine() example

### [`.check()`](?id=check)

The `.refine()` API is syntactic sugar atop a more versatile (and verbose) API called `.check()`. You can use this API to create multiple issues in a single refinement or have full control of the generated issue objects.

ZodZod Mini

    const UniqueStringArray = z.array(z.string()).check((ctx) => {
      if (ctx.value.length > 3) {
        ctx.issues.push({
          code: "too_big",
          maximum: 3,
          origin: "array",
          inclusive: true,
          message: "Too many items 😡",
          input: ctx.value
        });
      }
     
      if (ctx.value.length !== new Set(ctx.value).size) {
        ctx.issues.push({
          code: "custom",
          message: `No duplicates allowed.`,
          input: ctx.value,
          continue: true // make this issue continuable (default: false)
        });
      }
    });

The regular `.refine` API only generates issues with a `"custom"` error code, but `.check()` makes it possible to throw other issue types. For more information on Zod's internal issue types, read the [Error customization](./error-customization) docs.

[Pipes](?id=pipes)
------------------

Schemas can be chained together into "pipes". Pipes are primarily useful when used in conjunction with [Transforms](#transforms).

ZodZod Mini

    const stringToLength = z.string().pipe(z.transform(val => val.length));
     
    stringToLength.parse("hello"); // => 5

[Transforms](?id=transforms)
----------------------------

Transforms are a special kind of schema. Instead of validating input, they accept anything and perform some transformation on the data. To define a transform:

ZodZod Mini

    const castToString = z.transform((val) => String(val));
     
    castToString.parse("asdf"); // => "asdf"
    castToString.parse(123); // => "123"
    castToString.parse(true); // => "true"

To perform validation logic inside a transform, use `ctx`. To report a validation issue, push a new issue onto `ctx.issues` (similar to the [`.check()`](#check) API).

    const coercedInt = z.transform((val, ctx) => {
      try {
        const parsed = Number.parseInt(String(val));
        return parsed;
      } catch (e) {
        ctx.issues.push({
          code: "custom",
          message: "Not a number",
          input: val,
        });
     
        // this is a special constant with type `never`
        // returning it lets you exit the transform without impacting the inferred return type
        return z.NEVER; 
      }
    });

Most commonly, transforms are used in conjunction with [Pipes](#pipes). This combination is useful for performing some initial validation, then transforming the parsed data into another form.

ZodZod Mini

    const stringToLength = z.string().pipe(z.transform(val => val.length));
     
    stringToLength.parse("hello"); // => 5

### [`.transform()`](?id=transform)

Piping some schema into a transform is a common pattern, so Zod provides a convenience `.transform()` method.

ZodZod Mini

    const stringToLength = z.string().transform(val => val.length); 

Transforms can also be async:

ZodZod Mini

    const idToUser = z
      .string()
      .transform(async (id) => {
        // fetch user from database
        return db.getUserById(id); 
      });
     
    const user = await idToUser.parseAsync("abc123");

If you use async transforms, you must use a `.parseAsync` or `.safeParseAsync` when parsing data! Otherwise Zod will throw an error.

### [`.preprocess()`](?id=preprocess)

Piping a transform into another schema is another common pattern, so Zod provides a convenience `z.preprocess()` function.

    const coercedInt = z.preprocess((val) => {
      if (typeof val === "string") {
        return Number.parseInt(val);
      }
      return val;
    }, z.int());

[Defaults](?id=defaults)
------------------------

To set a default value for a schema:

ZodZod Mini

    const defaultTuna = z.string().default("tuna");
     
    defaultTuna.parse(undefined); // => "tuna"

Alternatively, you can pass a function which will be re-executed whenever a default value needs to be generated:

ZodZod Mini

    const randomDefault = z.number().default(Math.random);
     
    randomDefault.parse(undefined);    // => 0.4413456736055323
    randomDefault.parse(undefined);    // => 0.1871840107401901
    randomDefault.parse(undefined);    // => 0.7223408162401552

[Prefaults](?id=prefaults)
--------------------------

In Zod, setting a _default_ value will short-circuit the parsing process. If the input is `undefined`, the default value is eagerly returned. As such, the default value must be assignable to the _output type_ of the schema.

    const schema = z.string().transform(val => val.length).default(0);
    schema.parse(undefined); // => 0

Sometimes, it's useful to define a _prefault_ ("pre-parse default") value. If the input is `undefined`, the prefault value will be parsed instead. The parsing process is _not_ short circuited. As such, the prefault value must be assignable to the _input type_ of the schema.

    z.string().transform(val => val.length).prefault("tuna");
    schema.parse(undefined); // => 4

This is also useful if you want to pass some input value through some mutating refinements.

    const a = z.string().trim().toUpperCase().prefault("  tuna  ");
    a.parse(undefined); // => "TUNA"
     
    const b = z.string().trim().toUpperCase().default("  tuna  ");
    b.parse(undefined); // => "  tuna  "

[Catch](?id=catch)
------------------

Use `.catch()` to define a fallback value to be returned in the event of a validation error:

ZodZod Mini

    const numberWithCatch = z.number().catch(42);
     
    numberWithCatch.parse(5); // => 5
    numberWithCatch.parse("tuna"); // => 42

Alternatively, you can pass a function which will be re-executed whenever a catch value needs to be generated.

ZodZod Mini

    const numberWithRandomCatch = z.number().catch((ctx) => {
      ctx.error; // the caught ZodError
      return Math.random();
    });
     
    numberWithRandomCatch.parse("sup"); // => 0.4413456736055323
    numberWithRandomCatch.parse("sup"); // => 0.1871840107401901
    numberWithRandomCatch.parse("sup"); // => 0.7223408162401552

[Branded types](?id=branded-types)
----------------------------------

TypeScript's type system is [structural](https://www.typescriptlang.org/docs/handbook/type-compatibility.html), meaning that two types that are structurally equivalent are considered the same.

    type Cat = { name: string };
    type Dog = { name: string };
     
    const pluto: Dog = { name: "pluto" };
    const simba: Cat = fido; // works fine

In some cases, it can be desirable to simulate [nominal typing](https://en.wikipedia.org/wiki/Nominal_type_system) inside TypeScript. This can be achieved with _branded types_ (also known as "opaque types").

    const Cat = z.object({ name: z.string() }).brand<"Cat">();
    const Dog = z.object({ name: z.string() }).brand<"Dog">();
     
    type Cat = z.infer<typeof Cat>; // { name: string } & z.$brand<"Cat">
    type Dog = z.infer<typeof Dog>; // { name: string } & z.$brand<"Dog">
     
    const pluto = Dog.parse({ name: "pluto" });
    const simba: Cat = pluto; // ❌ not allowed

Under the hood, this works by attaching a "brand" to the schema's inferred type.

    const Cat = z.object({ name: z.string() }).brand<"Cat">();
    type Cat = z.infer<typeof Cat>; // { name: string } & z.$brand<"Cat">

With this brand, any plain (unbranded) data structures are no longer assignable to the inferred type. You have to parse some data with the schema to get branded data.

Note that branded types do not affect the runtime result of `.parse`. It is a static-only construct.

[Readonly](?id=readonly)
------------------------

To mark a schema as readonly:

ZodZod Mini

    const ReadonlyUser = z.object({ name: z.string() }).readonly();
    type ReadonlyUser = z.infer<typeof ReadonlyUser>;
    // Readonly<{ name: string }>

This returns a new schema that wraps the original. The new schema's inferred type will be marked as `readonly`. Note that this only affects objects, arrays, tuples, `Set`, and `Map` in TypeScript:

ZodZod Mini

    z.object({ name: z.string() }).readonly(); // { readonly name: string }
    z.array(z.string()).readonly(); // readonly string[]
    z.tuple([z.string(), z.number()]).readonly(); // readonly [string, number]
    z.map(z.string(), z.date()).readonly(); // ReadonlyMap<string, Date>
    z.set(z.string()).readonly(); // ReadonlySet<string>

Inputs will be parsed using the original schema, then the result will be frozen with [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to prevent modifications.

ZodZod Mini

    const result = ReadonlyUser.parse({ name: "fido" });
    result.name = "simba"; // throws TypeError

[Template literals](?id=template-literals-1)
--------------------------------------------

**New in Zod 4**

To define a template literal schema:

    const schema = z.templateLiteral("hello, ", z.string(), "!");
    // `hello, ${string}!`

The `z.templateLiteral` API can handle any number of string literals (e.g. `"hello"`) and schemas. Any schema with an inferred type that's assignable to `string | number | bigint | boolean | null | undefined` can be passed.

    z.templateLiteral([ "hi there" ]); 
    // `hi there`
     
    z.templateLiteral([ "email: ", z.string()]); 
    // `email: ${string}`
     
    z.templateLiteral([ "high", z.literal(5) ]); 
    // `high5`
     
    z.templateLiteral([ z.nullable(z.literal("grassy")) ]); 
    // `grassy` | `null`
     
    z.templateLiteral([ z.number(), z.enum(["px", "em", "rem"]) ]); 
    // `${number}px` | `${number}em` | `${number}rem`

[JSON](?id=json)
----------------

To validate any JSON-encodable value:

    const jsonSchema = z.json();

This is a convenience API that returns the following union schema:

    const jsonSchema = z.lazy(() => {
      return z.union([
        z.string(params), 
        z.number(), 
        z.boolean(), 
        z.null(), 
        z.array(jsonSchema), 
        z.record(z.string(), jsonSchema)
      ]);
    });

[Custom](?id=custom)
--------------------

You can create a Zod schema for any TypeScript type by using `z.custom()`. This is useful for creating schemas for types that are not supported by Zod out of the box, such as template string literals.

    const px = z.custom<`${number}px`>((val) => {
      return typeof val === "string" ? /^\d+px$/.test(val) : false;
    });
     
    type px = z.infer<typeof px>; // `${number}px`
     
    px.parse("42px"); // "42px"
    px.parse("42vw"); // throws;

If you don't provide a validation function, Zod will allow any value. This can be dangerous!

    z.custom<{ arg: string }>(); // performs no validation

You can customize the error message and other options by passing a second argument. This parameter works the same way as the params parameter of [`.refine`](#refine).

    z.custom<...>((val) => ..., "custom error message");

[Functions](?id=functions)
--------------------------

In Zod 4, `z.function()` no longer returns a Zod schema.

Zod provides a `z.function()` utility for defining Zod-validated functions. This way, you can avoid intermixing validation code with your business logic.

    const MyFunction = z.function({
      input: [z.string()], // parameters (must be an array or a ZodTuple)
      output: z.number()  // return type
    });

Function schemas have an `.implement()` method which accepts a function and returns a new function that automatically validates its inputs and outputs.

    const computeTrimmedLength = MyFunction.implement((input) => {
      // TypeScript knows x is a string!
      return input.trim().length;
    });
     
    computeTrimmedLength("sandwich"); // => 8
    computeTrimmedLength(" asdf "); // => 4

This function will throw a `ZodError` if the input is invalid:

    computeTrimmedLength(42); // throws ZodError

If you only care about validating inputs, omit the `output` field is optional.

    const MyFunction = z.function({
      input: [z.string()], // parameters (must be an array or a ZodTuple)
    });
     
    const computeTrimmedLength = MyFunction.implement((input) => input.trim.length);

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/api.mdx)

[

Next

Basic usage

](/basics)[

Next

Customizing errors

](/error-customization)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Migration guide
===============

This migration guide aims to list the breaking changes in Zod 4 in order of highest to lowest impact. To learn more about the performance enhancements and new features of Zod 4, read the [introductory post](/v4).

To give the ecosystem time to migrate, Zod 4 will initially be published alongside Zod v3.25. To use Zod 4, upgrade to `zod@3.25.0` or later:

    npm upgrade zod@^3.25.0

Zod 4 is available at the `"/v4"` subpath:

    import { z } from "zod/v4";

**Note** — Zod 3 exported a number of undocumented quasi-internal utility types and functions that are not considered part of the public API. Changes to those are not documented here.

[Error customization](?id=error-customization)
----------------------------------------------

Zod 4 standardizes the APIs for error customization under a single, unified `error` param. Previously Zod's error customization APIs were fragmented and inconsistent. This is cleaned up in Zod 4.

### [deprecates `message`](?id=deprecates-message)

Replaces `message` with `error`. The `message` parameter is still supported but deprecated.

Zod 4Zod 3

    z.string().min(5, { error: "Too short." });

### [drops `invalid_type_error` and `required_error`](?id=drops-invalid_type_error-and-required_error)

The `invalid_type_error` / `required_error` params have been dropped. These were hastily added years ago as a way to customize errors that was less verbose than `errorMap`. They came with all sorts of footguns (they can't be used in conjunction with `errorMap`) and do not align with Zod's actual issue codes (there is no `required` issue code).

These can now be cleanly represented with the new `error` parameter.

Zod 4Zod 3

    z.string({ 
      error: (issue) => issue.input === undefined 
        ? "This field is required" 
        : "Not a string" 
    });

### [drops `errorMap`](?id=drops-errormap)

This is renamed to `error`.

Error maps can also now return a plain `string` (instead of `{message: string}`). They can also return `undefined`, which tells Zod to yield control to the next error map in the chain.

Zod 4Zod 3

    z.string().min(5, {
      error: (issue) => {
        if (issue.code === "too_small") {
          return `Value must be >${issue.minimum}`
        }
      },
    });

[`ZodError`](?id=zoderror)
--------------------------

### [updates issue formats](?id=updates-issue-formats)

The issue formats have been dramatically streamlined.

    import { z } from "zod/v4"; // v4
     
    type IssueFormats = 
      | z.core.$ZodIssueInvalidType
      | z.core.$ZodIssueTooBig
      | z.core.$ZodIssueTooSmall
      | z.core.$ZodIssueInvalidStringFormat
      | z.core.$ZodIssueNotMultipleOf
      | z.core.$ZodIssueUnrecognizedKeys
      | z.core.$ZodIssueInvalidValue
      | z.core.$ZodIssueInvalidUnion
      | z.core.$ZodIssueInvalidKey // new: used for z.record/z.map 
      | z.core.$ZodIssueInvalidElement // new: used for z.map/z.set
      | z.core.$ZodIssueCustom;

Below is the list of Zod 3 issues types and their Zod 4 equivalent:

    import { z } from "zod/v4"; // v3
     
    export type IssueFormats =
      | z.ZodInvalidTypeIssue // ♻️ renamed to z.core.$ZodIssueInvalidType
      | z.ZodTooBigIssue  // ♻️ renamed to z.core.$ZodIssueTooBig
      | z.ZodTooSmallIssue // ♻️ renamed to z.core.$ZodIssueTooSmall
      | z.ZodInvalidStringIssue // ♻️ z.core.$ZodIssueInvalidStringFormat
      | z.ZodNotMultipleOfIssue // ♻️ renamed to z.core.$ZodIssueNotMultipleOf
      | z.ZodUnrecognizedKeysIssue // ♻️ renamed to z.core.$ZodIssueUnrecognizedKeys
      | z.ZodInvalidUnionIssue // ♻️ renamed to z.core.$ZodIssueInvalidUnion
      | z.ZodCustomIssue // ♻️ renamed to z.core.$ZodIssueCustom
      | z.ZodInvalidEnumValueIssue // ❌ merged in z.core.$ZodIssueInvalidValue
      | z.ZodInvalidLiteralIssue // ❌ merged into z.core.$ZodIssueInvalidValue
      | z.ZodInvalidUnionDiscriminatorIssue // ❌ throws an Error at schema creation time
      | z.ZodInvalidArgumentsIssue // ❌ z.function throws ZodError directly
      | z.ZodInvalidReturnTypeIssue // ❌ z.function throws ZodError directly
      | z.ZodInvalidDateIssue // ❌ merged into invalid_type
      | z.ZodInvalidIntersectionTypesIssue // ❌ removed (throws regular Error)
      | z.ZodNotFiniteIssue // ❌ infinite values no longer accepted (invalid_type)

While certain Zod 4 issue types have been merged, dropped, and modified, each issue remains structurally similar to Zod 3 counterpart (identical, in most cases). All issues still conform to the same base interface as Zod 3, so most common error handling logic will work without modification.

    export interface $ZodIssueBase {
      readonly code?: string;
      readonly input?: unknown;
      readonly path: PropertyKey[];
      readonly message: string;
    }

### [changes error map precedence](?id=changes-error-map-precedence)

The error map precedence has been changed to be more consistent. Specifically, an error map passed into `.parse()` _no longer_ takes precedence over a schema-level error map.

    const mySchema = z.string({ error: () => "Schema-level error" });
     
    // in Zod 3
    mySchema.parse(12, { error: () => "Contextual error" }); // => "Contextual error"
     
    // in Zod 4
    mySchema.parse(12, { error: () => "Contextual error" }); // => "Schema-level error"

### [deprecates `.format()`](?id=deprecates-format)

The `.format()` method on `ZodError` has been deprecated. Instead use the top-level `z.treeifyError()` function. Read the [Formatting errors docs](/error-formatting) for more information.

### [deprecates `.flatten()`](?id=deprecates-flatten)

The `.flatten()` method on `ZodError` has also been deprecated. Instead use the top-level `z.treeifyError()` function. Read the [Formatting errors docs](/error-formatting) for more information.

### [drops `.formErrors`](?id=drops-formerrors)

This API was identical to `.flatten()`. It exists for historical reasons and isn't documented.

### [deprecates `.addIssue()` and `.addIssues()`](?id=deprecates-addissue-and-addissues)

Directly push to `err.issues` array instead, if necessary.

    myError.issues.push({ 
      // new issue
    });

[`z.number()`](?id=znumber)
---------------------------

### [no infinite values](?id=no-infinite-values)

`POSITIVE_INFINITY` and `NEGATIVE_INFINITY` are no longer considered valid values for `z.number()`.

### [`.safe()` no longer accepts floats](?id=safe-no-longer-accepts-floats)

In Zod 3, `z.number().safe()` is deprecated. It now behaves identically to `.int()` (see below). Importantly, that means it no longer accepts floats.

### [`.int()` accepts safe integers only](?id=int-accepts-safe-integers-only)

The `z.number().int()` API no longer accepts unsafe integers (outside the range of `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`). Using integers out of this range causes spontaneous rounding errors. (Also: You should switch to `z.int()`.)

[`z.string()` updates](?id=zstring-updates)
-------------------------------------------

### [deprecates `.email()` etc](?id=deprecates-email-etc)

String formats are now represented as _subclasses_ of `ZodString`, instead of simple internal refinements. As such, these APIs have been moved to the top-level `z` namespace. Top-level APIs are also less verbose and more tree-shakable.

    z.email();
    z.uuid();
    z.url();
    z.emoji();         // validates a single emoji character
    z.base64();
    z.base64url();
    z.nanoid();
    z.cuid();
    z.cuid2();
    z.ulid();
    z.ipv4();
    z.ipv6();
    z.cidrv4();          // ip range
    z.cidrv6();          // ip range
    z.iso.date();
    z.iso.time();
    z.iso.datetime();
    z.iso.duration();

The method forms (`z.string().email()`) still exist and work as before, but are now deprecated.

    z.string().email(); // ❌ deprecated
    z.email(); // ✅ 

### [no padding in `.base64url()`](?id=no-padding-in-base64url)

Padding is no longer allowed in `z.base64url()` (formerly `z.string().base64url()`). Generally it's desirable for base64url strings to be unpadded and URL-safe.

### [drops `z.string().ip()`](?id=drops-zstringip)

This has been replaced with separate `.ipv4()` and `.ipv6()` methods. Use `z.union()` to combine them if you need to accept both.

    z.string().ip() // ❌
    z.ipv4() // ✅
    z.ipv6() // ✅

### [updates `z.string().ipv6()`](?id=updates-zstringipv6)

Validation now happens using the `new URL()` constructor, which is far more robust than the old regular expression approach. Some invalid values that passed validation previously may now fail.

### [drops `z.string().cidr()`](?id=drops-zstringcidr)

Similarly, this has been replaced with separate `.cidrv4()` and `.cidrv6()` methods. Use `z.union()` to combine them if you need to accept both.

    z.string().cidr() // ❌
    z.cidrv4() // ✅
    z.cidrv6() // ✅

[`z.coerce` updates](?id=zcoerce-updates)
-----------------------------------------

The input type of all coerced booleans is now `unknown`.

    const schema = z.coerce.string();
    type schemaInput = z.input<typeof schema>;
     
    // Zod 3: string;
    // Zod 4: unknown;

[`.default()` updates](?id=default-updates)
-------------------------------------------

The application of `.default()` has changed in a subtle way. If the input is `undefined`, `ZodDefault` short-circuits the parsing process and returns the default value. The default value must be assignable to the _output type_.

    const schema = z.string()
      .transform(val => val.length)
      .default(0); // should be a number
    schema.parse(undefined); // => 0

In Zod 3, `.default()` expected a value that matched the _input type_. `ZodDefault` would parse the default value, instead of short-circuiting. As such, the default value must be assignable to the _input type_ of the schema.

    // Zod 3
    const schema = z.string()
      .transform(val => val.length)
      .default("tuna");
    schema.parse(undefined); // => 4

To replicate the old behavior, Zod implements a new `.prefault()` API. This is short for "pre-parse default".

    // Zod 3
    const schema = z.string()
      .transform(val => val.length)
      .prefault("tuna");
    schema.parse(undefined); // => 4

[`z.object()`](?id=zobject)
---------------------------

These modifier methods on the `ZodObject` class determine how the schema handles unknown keys. In Zod 4, this functionality now exists in top-level functions. This aligns better with Zod's declarative-first philosophy, and puts all object variants on equal footing.

### [deprecates `.strict()` and `.passthrough()`](?id=deprecates-strict-and-passthrough)

These methods are generally no longer necessary. Instead use the top-level `z.strictObject()` and `z.looseObject()` functions.

    // Zod 3
    z.object({ name: z.string() }).strict();
    z.object({ name: z.string() }).passthrough();
     
    // Zod 4
    z.strictObject({ name: z.string() });
    z.looseObject({ name: z.string() });

These methods are still available for backwards compatibility, and they will not be removed. They are considered legacy.

### [deprecates `.strip()`](?id=deprecates-strip)

This was never particularly useful, as it was the default behavior of `z.object()`. To convert a strict object to a "regular" one, use `z.object(A.shape)`.

### [drops `.nonstrict()`](?id=drops-nonstrict)

This long-deprecated alias for `.strip()` has been removed.

### [drops `.deepPartial()`](?id=drops-deeppartial)

This has been long deprecated in Zod 3 and it now removed in Zod 4. There is no direct alternative to this API. There were lots of footguns in its implementation, and its use is generally an anti-pattern.

### [changes `z.unknown()` optionality](?id=changes-zunknown-optionality)

The `z.unknown()` and `z.any()` types are no longer marked as "key optional" in the inferred types.

    const mySchema = z.object({
      a: z.any(),
      b: z.unknown()
    });
    // Zod 3: { a?: any; b?: unknown };
    // Zod 4: { a: any; b: unknown };

[`z.nativeEnum()` deprecated](?id=znativeenum-deprecated)
---------------------------------------------------------

The `z.nativeEnum()` function is now deprecated in favor of just `z.enum()`. The `z.enum()` API has been overloaded to support an enum-like input.

    enum Color {
      Red = "red",
      Green = "green",
      Blue = "blue",
    }
     
    const ColorSchema = z.enum(Color); // ✅

As part of this refactor of `ZodEnum`, a number of long-deprecated and redundant features have been removed. These were all identical and only existed for historical reasons.

    ColorSchema.enum.Red; // ✅ => "Red" (canonical API)
    ColorSchema.Enum.Red; // ❌ removed
    ColorSchema.Values.Red; // ❌ removed

[`z.array()`](?id=zarray)
-------------------------

### [changes `.nonempty()` type](?id=changes-nonempty-type)

This now behaves identically to `z.array().min(1)`. The inferred type does not change.

    const NonEmpty = z.array(z.string()).nonempty();
     
    type NonEmpty = z.infer<typeof NonEmpty>; 
    // Zod 3: [string, ...string[]]
    // Zod 4: string[]

The old behavior is now better represented with `z.tuple()` and a "rest" argument. This aligns more closely to TypeScript's type system.

    z.tuple([z.string()], z.string());
    // => [string, ...string[]]

[`z.promise()` deprecated](?id=zpromise-deprecated)
---------------------------------------------------

There's rarely a reason to use `z.promise()`. If you have an input that may be a `Promise`, just `await` it before parsing it with Zod.

If you are using `z.promise` to define an async function with `z.function()`, that's no longer necessary either; see the [`ZodFunction`](#function) section below.

[`z.function()`](?id=zfunction)
-------------------------------

The result of `z.function()` is no longer a Zod schema. Instead, it acts as a standalone "function factory" for defining Zod-validated functions. The API has also changed; you define an `input` and `output` schema upfront, instead of using `args()` and `.returns()` methods.

Zod 4Zod 3

    const myFunction = z.function({
      input: [z.object({
        name: z.string(),
        age: z.number().int(),
      })],
      output: z.string(),
    });
     
    myFunction.implement((input) => {
      return `Hello ${input.name}, you are ${input.age} years old.`;
    });

If you have a desperate need for a Zod schema with a function type, consider [this workaround](https://github.com/colinhacks/zod/issues/4143#issuecomment-2845134912).

### [adds `.implementAsync()`](?id=adds-implementasync)

To define an async function, use `implementAsync()` instead of `implement()`.

    myFunction.implementAsync(async (input) => {
      return `Hello ${input.name}, you are ${input.age} years old.`;
    });

[`.refine()`](?id=refine)
-------------------------

### [ignores type predicates](?id=ignores-type-predicates)

In Zod 3, passing a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) as a refinement functions could still narrow the type of a schema. This wasn't documented but was discussed in some issues. This is no longer the case.

    const mySchema = z.unknown().refine((val): val is string => {
      return typeof val === "string"
    });
     
    type MySchema = z.infer<typeof mySchema>; 
    // Zod 3: `string`
    // Zod 4: still `unknown`

### [drops `ctx.path`](?id=drops-ctxpath)

Zod's new parsing architecture does not eagerly evaluate the `path` array. This was a necessary change that unlocks Zod 4's dramatic performance improvements.

    z.string().superRefine((val, ctx) => {
      ctx.path; // ❌ no longer available
    });

### [drops function as second argument](?id=drops-function-as-second-argument)

The following horrifying overload has been removed.

    const longString = z.string().refine(
      (val) => val.length > 10,
      (val) => ({ message: `${val} is not more than 10 characters` })
    );

[`z.ostring()`, etc dropped](?id=zostring-etc-dropped)
------------------------------------------------------

The undocumented convenience methods `z.ostring()`, `z.onumber()`, etc. have been removed. These were shorthand methods for defining optional string schemas.

[`z.literal()`](?id=zliteral)
-----------------------------

### [drops `symbol` support](?id=drops-symbol-support)

Symbols aren't considered literal values, nor can they be simply compared with `===`. This was an oversight in Zod 3.

[static `.create()` factories dropped](?id=static-create-factories-dropped)
---------------------------------------------------------------------------

Previously all Zod classes defined a static `.create()` method. These are now implemented as standalone factory functions.

    z.ZodString.create(); // ❌ 

[`z.record()`](?id=zrecord)
---------------------------

### [drops single argument usage](?id=drops-single-argument-usage)

Before, `z.record()` could be used with a single argument. This is no longer supported.

    // Zod 3
    z.record(z.string()); // ✅
     
    // Zod 4
    z.record(z.string()); // ❌
    z.record(z.string(), z.string()); // ✅

### [improves enum support](?id=improves-enum-support)

Records have gotten a lot smarter. In Zod 3, passing an enum into `z.record()` as a key schema would result in a partial type

    const myRecord = z.record(z.enum(["a", "b", "c"]), z.number()); 
    // { a?: number; b?: number; c?: number; }

In Zod 4, this is no longer the case. The inferred type is what you'd expect, and Zod ensures exhaustiveness; that is, it makes sure all enum keys exist in the input during parsing.

    const myRecord = z.record(z.enum(["a", "b", "c"]), z.number());
    // { a: number; b: number; c: number; }

[`z.intersection()`](?id=zintersection)
---------------------------------------

### [throws `Error` on merge conflict](?id=throws-error-on-merge-conflict)

Zod intersection parses the input against two schemas, then attempts to merge the results. In Zod 3, when the results were unmergable, Zod threw a `ZodError` with a special `"invalid_intersection_types"` issue.

In Zod 4, this will throw a regular `Error` instead. The existence of unmergable results indicates a structural problem with the schema: an intersection of two incompatible types. Thus, a regular error is more appropriate than a validation error.

[Internal changes](?id=internal-changes)
----------------------------------------

The typical user of Zod can likely ignore everything below this line. These changes do not impact the user-facing `z` APIs.

There are too many internal changes to list here, but some may be relevant to regular users who are (intentionally or not) relying on certain implementation details. These changes will be of particular interest to library authors building tools on top of Zod.

### [updates generics](?id=updates-generics)

The generic structure of several classes has changed. Perhaps most significant is the change to the `ZodType` base class:

    // Zod 3
    class ZodType<Output, Def extends z.ZodTypeDef, Input = Output> {
      // ...
    }
     
    // Zod 4
    class ZodType<Output = unknown, Input = unknown> {
      // ...
    }

The second generic `Def` has been entirely removed. Instead the base class now only tracks `Output` and `Input`. While previously the `Input` value defaulted to `Output`, it now defaults to `unknown`. This allows generic functions involving `z.ZodType` to behave more intuitively in many cases.

    function inferSchema<T extends z.ZodType>(schema: T): T {
      return schema;
    };
     
    inferSchema(z.string()); // z.ZodString

The need for `z.ZodTypeAny` has been eliminated; just use `z.ZodType` instead.

### [adds `z.core`](?id=adds-zcore)

Many utility functions and types have been moved to the new `zod/v4/core` sub-package, to facilitate code sharing between `zod/v4` and `zod/v4-mini`.

    import { z } from "zod/v4/core";
     
    function handleError(iss: z.$ZodError) {
      // do stuff
    }

For convenience, the contents of `zod/v4/core` are also re-exported from `zod/v4` and `zod/v4-mini` under the `z.core` namespace.

    import { z } from "zod/v4";
     
    function handleError(iss: z.core.$ZodError) {
      // do stuff
    }

Refer to the [Zod Core](/packages/core) docs for more information on the contents of the core sub-library.

### [moves `._def`](?id=moves-_def)

The `._def` property is now moved to `._zod.def`. The structure of all internal defs is subject to change; this is relevant to library authors but won't be comprehensively documented here.

### [drops `ZodEffects`](?id=drops-zodeffects)

This doesn't affect the user-facing APIs, but it's an internal change worth highlighting. It's part of a larger restructure of how Zod handles _refinements_.

Previously both refinements and transformations lived inside a wrapper class called `ZodEffects`. That means adding either one to a schema would wrap the original schema in a `ZodEffects` instance. In Zod 4, refinements now live inside the schemas themselves. More accurately, each schema contains an array of "checks"; the concept of a "check" is new in Zod 4 and generalizes the concept of a refinement to include potentially side-effectful transforms like `z.toLowerCase()`.

This is particularly apparent in the `zod/v4-mini` API, which heavily relies on the `.check()` method to compose various validations together.

    import { z } from "zod/v4-mini";
     
    z.string().check(
      z.minLength(10),
      z.maxLength(100),
      z.toLowerCase(),
      z.trim(),
    );

### [adds `ZodTransform`](?id=adds-zodtransform)

Meanwhile, transforms have been moved into a dedicated `ZodTransform` class. This schema class represents an input transform; in fact, you can actually define standalone transformations now:

    import { z } from "zod/v4";
     
    const schema = z.transform(input => String(input));
     
    schema.parse(12); // => "12"

This is primarily used in conjunction with `ZodPipe`. The `.transform()` method now returns an instance of `ZodPipe`.

    z.string().transform(val => val); // ZodPipe<ZodString, ZodTransform>

### [drops `ZodPreprocess`](?id=drops-zodpreprocess)

As with `.transform()`, the `z.preprocess()` function now returns a `ZodPipe` instance instead of a dedicated `ZodPreprocess` instance.

    z.preprocess(val => val, z.string()); // ZodPipe<ZodTransform, ZodString>

### [drops `ZodBranded`](?id=drops-zodbranded)

Branding is now handled with a direct modification to the inferred type, instead of a dedicated `ZodBranded` class. The user-facing APIs remain the same.

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/v4/changelog.mdx)

[

Next

Introducing Zod 4

](/v4)[

Next

Intro

](/)

On this page

Basic usage
===========

This page will walk you through the basics of creating schemas, parsing data, and using inferred types. For complete documentation on Zod's schema API, refer to [Defining schemas](/api).

[Defining a schema](?id=defining-a-schema)
------------------------------------------

Before you can do anything else, you need to define a schema. For the purposes of this guide, we'll use a simple object schema.

ZodZod Mini

    import { z } from "zod/v4"; 
     
    const Player = z.object({ 
      username: z.string(),
      xp: z.number()
    });

### Why the "/v4" suffix?

[Parsing data](?id=parsing-data)
--------------------------------

Given any Zod schema, use `.parse` to validate an input. If it's valid, Zod returns a strongly-typed _deep clone_ of the input.

    Player.parse({ username: "billie", xp: 100 }); 
    // => returns { username: "billie", xp: 100 }

**Note** — If your schema uses certain asynchronous APIs like `async` [refinements](#refine) or [transforms](#transform), you'll need to use the `.parseAsync()` method instead.

    const schema = z.string().refine(async (val) => val.length <= 8);
     
    await schema.parseAsync("hello");
    // => "hello"

[Handling errors](?id=handling-errors)
--------------------------------------

When validation fails, the `.parse()` method will throw a `ZodError` instance with granular information about the validation issues.

ZodZod Mini

    try {
      Player.parse({ username: 42, xp: "100" });
    } catch(err){
      if(error instanceof z.ZodError){
        err.issues; 
        /* [
          {
            expected: 'string',
            code: 'invalid_type',
            path: [ 'username' ],
            message: 'Invalid input: expected string'
          },
          {
            expected: 'number',
            code: 'invalid_type',
            path: [ 'xp' ],
            message: 'Invalid input: expected number'
          }
        ] */
      }
    }

To avoid a `try/catch` block, you can use the `.safeParse()` method to get back a plain result object containing either the successfully parsed data or a `ZodError`. The result type is a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions), so you can handle both cases conveniently.

    const result = Player.safeParse({ username: 42, xp: "100" });
    if (!result.success) {
      result.error;   // ZodError instance
    } else {
      result.data;    // { username: string; xp: number }
    }

**Note** — If your schema uses certain asynchronous APIs like `async` [refinements](#refine) or [transforms](#transform), you'll need to use the `.safeParseAsync()` method instead.

    const schema = z.string().refine(async (val) => val.length <= 8);
     
    await schema.safeParseAsync("hello");
    // => { success: true; data: "hello" }

[Inferring types](?id=inferring-types)
--------------------------------------

Zod infers a static type from your schema definitions. You can extract this type with the `z.infer<>` utility and use it however you like.

    const Player = z.object({ 
      username: z.string(),
      xp: z.number()
    });
     
    // extract the inferred type
    type Player = z.infer<typeof Player>;
     
    // use it in your code
    const player: Player = { username: "billie", xp: 100 };

In some cases, the input & output types of a schema can diverge. For instance, the `.transform()` API can convert the input from one type to another. In these cases, you can extract the input and output types independently:

    const mySchema = z.string().transform((val) => val.length);
     
    type MySchemaIn = z.input<typeof mySchema>;
    // => string
     
    type MySchemaOut = z.output<typeof mySchema>; // equivalent to z.infer<typeof mySchema>
    // number

* * *

Now that we have the basics covered, let's jump into the Schema API.

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/basics.mdx)

[

Next

Intro

](/)[

Next

Defining schemas

](/api)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)

On this page

Zod
===

TypeScript-first schema validation with static type inference

[](https://github.com/colinhacks/zod/actions?query=branch%3Amain)[](https://twitter.com/colinhacks)[](https://opensource.org/licenses/MIT)[](https://www.npmjs.com/package/zod)[](https://github.com/colinhacks/zod)

[Website](https://zod.dev)  •  [Discord](https://discord.gg/RcG33DQJdf)  •  [𝕏](https://twitter.com/colinhacks)  •  [Bluesky](https://bsky.app/profile/zod.dev)  

  

Zod 4 is now stable! Read the [release notes here](/v4).

  
  
  

Featured sponsor: Jazz
----------------------

[

](https://jazz.tools/?utm_source=zod)

Interested in featuring? [Get in touch.](mailto:sponsorship@colinhacks.com)

[Introduction](?id=introduction)
--------------------------------

Zod is a TypeScript-first validation library. Using Zod, you can define _schemas_ you can use to validate data, from a simple `string` to a complex nested object.

    import { z } from "zod/v4";
     
    const User = z.object({
      name: z.string(),
    });
     
    // some untrusted data...
    const input = { /* stuff */ };
     
    // the parsed result is validated and type safe!
    const data = User.parse(input);
     
    // so you can use it with confidence :)
    console.log(data.name);

[Features](?id=features)
------------------------

*   Zero external dependencies
*   Works in Node.js and all modern browsers
*   Tiny: 2kb core bundle (gzipped)
*   Immutable API: methods return a new instance
*   Concise interface
*   Works with TypeScript and plain JS
*   Built-in JSON Schema conversion
*   Extensive ecosystem

[Installation](?id=installation)
--------------------------------

    npm install zod       # npm
    deno add npm:zod      # deno
    yarn add zod          # yarn
    bun add zod           # bun
    pnpm add zod          # pnpm

Zod also publishes a canary version on every commit. To install the canary:

    npm install zod@canary       # npm
    deno add npm:zod@canary      # deno
    yarn add zod@canary          # yarn
    bun add zod@canary           # bun
    pnpm add zod@canary          # pnpm

[Requirements](?id=requirements)
--------------------------------

Zod is tested against _TypeScript v5.5_ and later. Older versions may work but are not officially supported.

### [`"strict"`](?id=strict)

You must enable `strict` mode in your `tsconfig.json`. This is a best practice for all TypeScript projects.

    // tsconfig.json
    {
      // ...
      "compilerOptions": {
        // ...
        "strict": true
      }
    }

### [`"moduleResolution"`](?id=moduleresolution)

Your `"moduleResolution"` should be set to one of the following. The legacy `"node"` and `"classic"` modes are not supported, as they do not support subpath imports.

*   `"node16"` (default if `"module"` is set to `"node16"`/`"node18"`)
*   `"nodenext"` (default if `"module"` is set to `"nodenext"`)
*   `"bundler"`

  

[Sponsors](?id=sponsors)
------------------------

Sponsorship at any level is appreciated and encouraged. If you built a paid product using Zod, consider one of the [corporate tiers](https://github.com/sponsors/colinhacks).

### [Platinum](?id=platinum)

[

](https://www.coderabbit.ai/)

Cut code review time & bugs in half

[coderabbit.ai](https://www.coderabbit.ai/)

  

### [Gold](?id=gold)

[](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

The API platform for sending notifications

[courier.com](https://www.courier.com/?utm_source=zod&utm_campaign=osssponsors)

[](https://liblab.com/?utm_source=zod)

Generate better SDKs for your APIs

[liblab.com](https://liblab.com/?utm_source=zod)

[](https://neon.tech)

Serverless Postgres — Ship faster

[neon.tech](https://neon.tech)

[](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

Build AI apps and workflows with Retool AI

[retool.com](https://retool.com/?utm_source=github&utm_medium=referral&utm_campaign=zod)

[](https://stainlessapi.com)

Generate best-in-class SDKs

[stainlessapi.com](https://stainlessapi.com)

[](https://speakeasy.com/?utm_source=zod+docs)

SDKs & Terraform providers for your API

[speakeasy.com](https://speakeasy.com/?utm_source=zod+docs)

  

### [Silver](?id=silver)

[nitric.io](https://nitric.io/)

[propelauth.com](https://www.propelauth.com/)

[cerbos.dev](https://cerbos.dev/)

[scalar.com](https://scalar.com/)

[trigger.dev](https://trigger.dev)

[transloadit.com](https://transloadit.com/?utm_source=zod&utm_medium=referral&utm_campaign=sponsorship&utm_content=github)

[infisical.com](https://infisical.com)

[whop.com](https://whop.com/)

[cryptojobslist.com](https://cryptojobslist.com/)

[plain.com](https://plain.com/)

[inngest.com](https://inngest.com/)

[storyblok.com](https://storyblok.com/)

[mux.link/zod](https://mux.link/zod)

[juno.build](https://juno.build/?utm_source=zod)

  

### [Bronze](?id=bronze)

[](https://www.val.town/)[val.town](https://www.val.town/)

[](https://www.route4me.com/)[route4me.com](https://www.route4me.com/)

[](https://encore.dev)[encore.dev](https://encore.dev)

[](https://www.replay.io/)[replay.io](https://www.replay.io/)

[](https://www.numeric.io)[numeric.io](https://www.numeric.io)

[](https://marcatopartners.com)[marcatopartners.com](https://marcatopartners.com)

[](https://interval.com)[interval.com](https://interval.com)

[](https://seasoned.cc)[seasoned.cc](https://seasoned.cc)

[](https://www.bamboocreative.nz/)[bamboocreative.nz](https://www.bamboocreative.nz/)

[](https://github.com/jasonLaster)[github.com/jasonLaster](https://github.com/jasonLaster)

[](https://www.clipboardhealth.com/engineering)[clipboardhealth.com/engineering](https://www.clipboardhealth.com/engineering)

[Edit on GitHub](https://github.com/colinhacks/zod/blob/v4/packages/docs/content/index.mdx)

[

Next

Migration guide

](/v4/changelog)[

Next

Basic usage

](/basics)