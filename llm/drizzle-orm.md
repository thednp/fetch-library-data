drizzle-orm version: 0.43.1, last updated: 2025-05-21T10:58:23.686Z

Get started with Drizzle
========================

New database Existing database

PostgreSQL

[

PostgreSQL](/docs/get-started/postgresql-new)[

Neon](/docs/get-started/neon-new)[

Vercel Postgres](/docs/get-started/vercel-new)[

Supabase](/docs/get-started/supabase-new)[

Xata](/docs/get-started/xata-new)[

PGLite](/docs/get-started/pglite-new)[

Nile](/docs/get-started/nile-new)[

Bun SQL](/docs/get-started/bun-sql-new)

Gel

[

Gel](/docs/get-started/gel-new)

MySQL

[

MySQL](/docs/get-started/mysql-new)[

PlanetScale](/docs/get-started/planetscale-new)[

TiDB](/docs/get-started/tidb-new)[

SingleStore](/docs/get-started/singlestore-new)

SQLite

[

SQLite](/docs/get-started/sqlite-new)[

Turso](/docs/get-started/turso-new)[

Cloudflare D1](/docs/get-started/d1-new)[

Bun SQLite](/docs/get-started/bun-sqlite-new)[

Cloudflare Durable Objects](/docs/get-started/do-new)

Native SQLite

[

Expo SQLite](/docs/get-started/expo-new)[

OP SQLite](/docs/get-started/op-sqlite-new)

Drizzle ORM
===========

Drizzle ORM is a headless TypeScript ORM with a head. 🐲

> Drizzle is a good friend who’s there for you when necessary and doesn’t bother when you need some space.

It looks and feels simple, performs on day _1000_ of your project,  
lets you do things your way, and is there when you need it.

**It’s the only ORM with both [relational](/docs/rqb) and [SQL-like](/docs/select) query APIs**, providing you the best of both worlds when it comes to accessing your relational data. Drizzle is lightweight, performant, typesafe, non-lactose, gluten-free, sober, flexible and **serverless-ready by design**. Drizzle is not just a library, it’s an experience. 🤩

[](https://bestofjs.org/projects/drizzle-orm)

Headless ORM?[](#headless-orm)
------------------------------

First and foremost, Drizzle is a library and a collection of complementary opt-in tools.

**ORM** stands for _object relational mapping_, and developers tend to call Django-like or Spring-like tools an ORM. We truly believe it’s a misconception based on legacy nomenclature, and we call them **data frameworks**.

WARNING

With data frameworks you have to build projects **around them** and not **with them**.

**Drizzle** lets you build your project the way you want, without interfering with your project or structure.

Using Drizzle you can define and manage database schemas in TypeScript, access your data in a SQL-like or relational way, and take advantage of opt-in tools to push your developer experience _through the roof_. 🤯

Why SQL-like?[](#why-sql-like)
------------------------------

**If you know SQL, you know Drizzle.**

Other ORMs and data frameworks tend to deviate/abstract you away from SQL, which leads to a double learning curve: needing to know both SQL and the framework’s API.

Drizzle is the opposite. We embrace SQL and built Drizzle to be SQL-like at its core, so you can have zero to no learning curve and access to the full power of SQL.

We bring all the familiar **[SQL schema](/docs/sql-schema-declaration)**, **[queries](/docs/select)**, **[automatic migrations](/docs/migrations)** and **[one more thing](/docs/rqb)**. ✨

index.ts

schema.ts

migration.sql

    // Access your data
    await db
    	.select()
    	.from(countries)
    	.leftJoin(cities, eq(cities.countryId, countries.id))
    	.where(eq(countries.id, 10))

    // manage your schema
    export const countries = pgTable('countries', {
      id: serial('id').primaryKey(),
      name: varchar('name', { length: 256 }),
    });
    
    export const cities = pgTable('cities', {
      id: serial('id').primaryKey(),
      name: varchar('name', { length: 256 }),
      countryId: integer('country_id').references(() => countries.id),
    });

    -- generate migrations
    CREATE TABLE IF NOT EXISTS "countries" (
    	"id" serial PRIMARY KEY NOT NULL,
    	"name" varchar(256)
    );
    
    CREATE TABLE IF NOT EXISTS "cities" (
    	"id" serial PRIMARY KEY NOT NULL,
    	"name" varchar(256),
    	"country_id" integer
    );
    
    ALTER TABLE "cities" ADD CONSTRAINT "cities_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE no action ON UPDATE no action;

Why not SQL-like?[](#why-not-sql-like)
--------------------------------------

We’re always striving for a perfectly balanced solution, and while SQL-like does cover 100% of the needs, there are certain common scenarios where you can query data in a better way.

We’ve built the **[Queries API](/docs/rqb)** for you, so you can fetch relational nested data from the database in the most convenient and performant way, and never think about joins and data mapping.

**Drizzle always outputs exactly 1 SQL query.** Feel free to use it with serverless databases and never worry about performance or roundtrip costs!

    const result = await db.query.users.findMany({
    	with: {
    		posts: true
    	},
    });

Serverless?[](#serverless)
--------------------------

The best part is no part. **Drizzle has exactly 0 dependencies!**

Drizzle ORM is dialect-specific, slim, performant and serverless-ready **by design**.

We’ve spent a lot of time to make sure you have best-in-class SQL dialect support, including Postgres, MySQL, and others.

Drizzle operates natively through industry-standard database drivers. We support all major **[PostgreSQL](/docs/get-started-postgresql)**, **[MySQL](/docs/get-started-mysql)**, **[SQLite](/docs/get-started-sqlite)** or \*\*[SingleStore](/docs/get-started-singlestore)\*\*drivers out there, and we’re adding new ones **[really fast](https://twitter.com/DrizzleORM/status/1653082492742647811?s=20)**.

Welcome on board![](#welcome-on-board)
--------------------------------------

More and more companies are adopting Drizzle in production, experiencing immense benefits in both DX and performance.

**We’re always there to help, so don’t hesitate to reach out. We’ll gladly assist you in your Drizzle journey!**

We have an outstanding **[Discord community](https://driz.link/discord)** and welcome all builders to our **[Twitter](https://twitter.com/drizzleorm)**.

Now go build something awesome with Drizzle and your **[PostgreSQL](/docs/get-started-postgresql)**, **[MySQL](/docs/get-started-mysql)** or **[SQLite](/docs/get-started-sqlite)** database. 🚀

### Video Showcase[](#video-showcase)

[

1:37:39

Full Drizzle Course for Beginners

Code Genix



](https://driz.link/yt/vyU5mJGCJMw)

[

56:09

Learn Drizzle In 60 Minutes

Web Dev Simplified



](https://driz.link/yt/7-NZ0MlPpJA)

[

2:55

Drizzle ORM in 100 Seconds

Fireship



](https://driz.link/yt/i_mAHOhpBSA)

[

14:00

Learn Drizzle ORM in 13 mins (crash course)

Neon



](https://driz.link/yt/hIYNOiZXQ7Y)

[

38:08

Easiest Database Setup in Next.js 14 with Turso & Drizzle

Sam Meech-Ward



](https://driz.link/yt/4ZhtoOFKFP8)

[

5:46:28

Next.js Project with Vercel, Neon, Drizzle, TailwindCSS, FlowBite and more!

CodingEntrepreneurs



](https://driz.link/yt/NfVELsEZFsA)

[

5:46

I Have A New Favorite Database Tool

Theo - t3.gg



](https://driz.link/yt/_SLxGYzv6jo)

[

33:52

Drizzle ORM First impressions - migrations, relations, queries!

Marius Espejo



](https://driz.link/yt/Qo-RXkSwOtc)

[

9:00

I want to learn Drizzle ORM, so I'm starting another next14 project

Web Dev Cody



](https://driz.link/yt/yXNEqyvA0OY)

[

5:18

Picking an ORM is Getting Harder...

Ben Davis



](https://driz.link/yt/h7vVhR-dFYo)

[

8:49

This New Database Tool is a Game-Changer

Josh tried coding



](https://driz.link/yt/8met6WTk0mQ)

[

4:23

My Favorite Database Tool Just Got EVEN Better

Josh tried coding



](https://driz.link/yt/woWW1T9DXEY)

[

11:41:46

SaaS Notion Clone with Realtime cursors, Nextjs 13, Stripe, Drizzle ORM, Tailwind, Supabase, Sockets

Web Prodigies



](https://driz.link/yt/A3l6YYkXzzg)

[

12:18

SvelteKit + Drizzle Code Breakdown

Ben Davis



](https://driz.link/yt/EQfaw5bDE1s)

[

2:01:29

Build a Multi-Tenanted, Role-Based Access Control System

TomDoesTech



](https://driz.link/yt/b6VhN_HHDiQ)

[

5:42

The Prisma killer is finally here

SST



](https://driz.link/yt/3tl9XCiQErA)

[

1:07:41

Learning Drizzle ORM and working on a next14 project

Web Dev Cody



](https://driz.link/yt/VQFjyEa8vGE)

[

6:01

This Trick Makes My Favorite Database Tool Even Better

Josh tried coding



](https://driz.link/yt/5G0upg4sxgE)

[

26:29

Effortless Auth in Next.js 14: Use Auth.js & Drizzle ORM for Secure Login

Sam Meech-Ward



](https://driz.link/yt/-JnEuvPmt-Q)

Guides

Comprehensive collection of code samples and step-by-step walkthroughs for common tasks

[Conditional filters in query](/docs/guides/conditional-filters-in-query)

[SQL Increment value](/docs/guides/incrementing-a-value)

[SQL Decrement value](/docs/guides/decrementing-a-value)

[Include or Exclude Columns in Query](/docs/guides/include-or-exclude-columns)

[SQL Toggle value](/docs/guides/toggling-a-boolean-field)

[Count rows](/docs/guides/count-rows)

[Upsert Query](/docs/guides/upsert)

[SQL Limit/Offset pagination](/docs/guides/limit-offset-pagination)

[SQL Cursor-based pagination](/docs/guides/cursor-based-pagination)

[SQL Timestamp as a default value](/docs/guides/timestamp-default-value)

[Gel auth extension](/docs/guides/gel-ext-auth)

[Select parent rows with at least one related child row](/docs/guides/select-parent-rows-with-at-least-one-related-child-row)

[Empty array as a default value](/docs/guides/empty-array-default-value)

[Update many with different values for each row](/docs/guides/update-many-with-different-value)

[Unique and Case-Insensitive Email Handling](/docs/guides/unique-case-insensitive-email)

[Vector similarity search with pgvector extension](/docs/guides/vector-similarity-search)

[PostgreSQL full-text search](/docs/guides/postgresql-full-text-search)

[Cloudflare D1 HTTP API with Drizzle Kit](/docs/guides/d1-http-with-drizzle-kit)

[Point datatype in PostgreSQL](/docs/guides/point-datatype-psql)

[PostGIS geometry point](/docs/guides/postgis-geometry-point)

[How to setup PostgreSQL locally](/docs/guides/postgresql-local-setup)

[How to setup MySQL locally](/docs/guides/mysql-local-setup)

[Seeding Partially Exposed Tables with Foreign Key](/docs/guides/seeding-with-partially-exposed-tables)

[Seeding using 'with' option](/docs/guides/seeding-using-with-option)

[Full-text search with Generated Columns](/docs/guides/full-text-search-with-generated-columns)

Tutorials

[Drizzle with Netlify Edge Functions and Neon Postgres](/docs/tutorials/drizzle-with-netlify-edge-functions-neon)

[Drizzle with Netlify Edge Functions and Supabase Database](/docs/tutorials/drizzle-with-netlify-edge-functions-supabase)

[Drizzle with Supabase Edge Functions](/docs/tutorials/drizzle-with-supabase-edge-functions)

[Drizzle with Vercel Edge Functions](/docs/tutorials/drizzle-with-vercel-edge-functions)

[Drizzle with Neon Postgres](/docs/tutorials/drizzle-with-neon)

[Drizzle with Nile Database](/docs/tutorials/drizzle-with-nile)

[Drizzle with Supabase Database](/docs/tutorials/drizzle-with-supabase)

[Drizzle with Turso](/docs/tutorials/drizzle-with-turso)

[Drizzle with Vercel Postgres](/docs/tutorials/drizzle-with-vercel)

[Todo App with Neon Postgres](/docs/tutorials/drizzle-nextjs-neon)

Latest Releases

[

Drizzle Kit v0.23.2 release

Aug 5, 2024

Bug fixes

Read more

](/docs/latest-releases/drizzle-kit-v0232)[

DrizzleORM v0.32.2 release

Aug 5, 2024

Bug fixes

Read more

](/docs/latest-releases/drizzle-orm-v0322)[

DrizzleORM v0.32.1 release

Jul 23, 2024

Bug fixes

Read more

](/docs/latest-releases/drizzle-orm-v0321)[

DrizzleORM v0.32.0 release

Jul 10, 2024

Generated columns, identity columns, sequences and more

Read more

](/docs/latest-releases/drizzle-orm-v0320)[

DrizzleORM v0.31.3 release

Jul 8, 2024

Prisma-Drizzle extension

Read more

](/docs/latest-releases/drizzle-orm-v0313)[

DrizzleORM v0.31.4 release

Jul 8, 2024

Mark prisma clients package as optional

Read more

](/docs/latest-releases/drizzle-orm-v0314)[

DrizzleORM v0.31.2 release

Jun 7, 2024

Added support for TiDB Cloud Serverless driver

Read more

](/docs/latest-releases/drizzle-orm-v0312)[

DrizzleORM v0.31.1 release

Jun 4, 2024

React Live Queries 🎉

Read more

](/docs/latest-releases/drizzle-orm-v0311)[

DrizzleORM v0.31.0 release

May 31, 2024

PostgreSQL indexes API changes

Read more

](/docs/latest-releases/drizzle-orm-v0310)[

DrizzleORM v0.30.10 release

May 1, 2024

Added '.if()' function to all WHERE expressions and fixed internal mappings for sessions '.all', '.values', '.execute' functions in AWS DataAPI.

Read more

](/docs/latest-releases/drizzle-orm-v03010)[

DrizzleORM v0.30.9 release

Apr 22, 2024

Added 'setWhere' and 'targetWhere' fields to '.onConflictDoUpdate()' config in SQLite, added schema information to Drizzle instances via 'db.\_.fullSchema' and fixed migrator in AWS Data API.

Read more

](/docs/latest-releases/drizzle-orm-v0309)[

DrizzleORM v0.30.8 release

Apr 11, 2024

Added custom schema support to enums in Postgres, changed D1 'migrate()' function to use batch API, updated '.onConflictDoUpdate' method, fixed query generation for 'where' clause in Postgres '.onConflictDoNothing' method and fixed various bugs related to AWS Data API.

Read more

](/docs/latest-releases/drizzle-orm-v0308)[

DrizzleORM v0.30.7 release

Apr 3, 2024

Added mappings for '@vercel/postgres' package and fixed interval mapping for neon drivers.

Read more

](/docs/latest-releases/drizzle-orm-v0307)[

DrizzleORM v0.30.6 release

Mar 28, 2024

Added support for PGlite driver.

Read more

](/docs/latest-releases/drizzle-orm-v0306)[

DrizzleORM v0.30.5 release

Mar 27, 2024

Added '$onUpdate' functionality for PostgreSQL, MySQL and SQLite and fixed insertions on columns with the smallserial datatype.

Read more

](/docs/latest-releases/drizzle-orm-v0305)[

DrizzleORM v0.30.4 release

Mar 19, 2024

Added support for Xata driver.

Read more

](/docs/latest-releases/drizzle-orm-v0304)[

DrizzleORM v0.30.3 release

Mar 19, 2024

Added raw query support to batch API in Neon HTTP driver, fixed '@neondatabase/serverless' HTTP driver types issue, and fixed sqlite-proxy driver '.run()' result.

Read more

](/docs/latest-releases/drizzle-orm-v0303)[

DrizzleORM v0.30.2 release

Mar 14, 2024

Updated LibSQL migrations to utilize batch execution instead of transactions and fixed findFirst query for bun:sqlite.

Read more

](/docs/latest-releases/drizzle-orm-v0302)[

DrizzleORM v0.30.1 release

Mar 8, 2024

Added support for op-sqlite driver and fixed migration hook for Expo driver.

Read more

](/docs/latest-releases/drizzle-orm-v0301)[

DrizzleORM v0.30.0 release

Mar 7, 2024

Modified the 'postgres.js' driver instance to always return strings for dates, and then Drizzle will provide you with either strings of mapped dates, depending on the selected 'mode'. Fixed many bugs related to timestamps and dates.

Read more

](/docs/latest-releases/drizzle-orm-v0300)[

DrizzleORM v0.29.5 release

Mar 6, 2024

Added with update, with delete, with insert, possibility to specify custom schema and custom name for migrations table, sqlite proxy batch and relational queries support.

Read more

](/docs/latest-releases/drizzle-orm-v0295)[

DrizzleORM v0.29.4 release

Feb 22, 2024

Added Neon HTTP Batch support and updated the default behavior and instances of database-js.

Read more

](/docs/latest-releases/drizzle-orm-v0294)[

DrizzleORM v0.29.3 release

Jan 2, 2024

Fixed expo peer dependencies.

Read more

](/docs/latest-releases/drizzle-orm-v0293)[

DrizzleORM v0.29.2 release

Dec 25, 2023

Implemented enhancements in the planescale relational tests. Corrected string escaping for empty PgArrays. Rectified syntax error for the exists function in SQLite. Ensured proper handling of dates in AWS Data API. Resolved the Hermes mixins constructor issue.

Read more

](/docs/latest-releases/drizzle-orm-v0292)[

DrizzleORM v0.29.1 release

Nov 29, 2023

Fixed issues include forwarding arguments correctly when using the withReplica feature, resolving the selectDistinctOn not working with multiple columns problem, and providing detailed JSDoc for all query builders in all dialects. Additionally, introduced new helpers for aggregate functions in SQL and a new ESLint Drizzle Plugin package.

Read more

](/docs/latest-releases/drizzle-orm-v0291)[

DrizzleORM v0.29.0 release

Nov 9, 2023

Added new features like unsigned option for bigint in MySQL, improved query builder types, added possibility to specify name for primary keys and foreign keys, read replicas support, set operators support, new MySQL and PostgreSQL proxy drivers, D1 Batch API support.

Read more

](/docs/latest-releases/drizzle-orm-v0290)[

DrizzleORM v0.28.6 release

Sep 6, 2023

Changed datetime mapping for MySQL, added LibSQL batch API support, added JSON mode for text in SQLite, added '.toSQL()' to Relational Query API calls, added new PostgreSQL operators for Arrays, added more SQL operators for the 'where' function in Relational Queries, and fixed bugs.

Read more

](/docs/latest-releases/drizzle-orm-v0286)[

DrizzleORM v0.28.5 release

Aug 24, 2023

Fixed incorrect OpenTelemetry type import that caused a runtime error.

Read more

](/docs/latest-releases/drizzle-orm-v0285)[

DrizzleORM v0.28.4 release

Aug 24, 2023

Fixed imports in ESM-based projects and type error on Postgres table definitions.

Read more

](/docs/latest-releases/drizzle-orm-v0284)[

DrizzleORM v0.28.3 release

Aug 22, 2023

Added SQLite simplified query API, added methods to column builders and to table model type inference. Fixed sqlite-proxy and SQL.js response from '.get()' when the result is empty.

Read more

](/docs/latest-releases/drizzle-orm-v0283)[

DrizzleORM v0.28.2 release

Aug 10, 2023

Added a set of tests for d1, fixed issues in internal documentation, resolved the issue of truncating timestamp milliseconds for MySQL, corrected the type of the '.get()' method for sqlite-based dialects, rectified the sqlite-proxy bug that caused the query to execute twice. Added a support for Typebox package.

Read more

](/docs/latest-releases/drizzle-orm-v0282)[

DrizzleORM v0.28.1 release

Aug 7, 2023

Fixed Postgres array-related issues introduced by 0.28.0.

Read more

](/docs/latest-releases/drizzle-orm-v0281)[

DrizzleORM v0.28.0 release

Aug 6, 2023

Removed support for filtering by nested relations, Added Relational Queries mode config for mysql2 driver, improved IntelliSense performance for large schemas, improved Relational Queries Permormance and Read Usage. Added possibility to insert rows with default values for all columns.

Read more

](/docs/latest-releases/drizzle-orm-v0280)[

DrizzleORM v0.27.2 release

Jul 12, 2023

Added support for unique constraints in PostgreSQL, MySQL, SQLite.

Read more

](/docs/latest-releases/drizzle-orm-v0272)[

DrizzleORM v0.16.2 release

Jan 21, 2023

Drizzle ORM - is an idiomatic TypeScript ORM which can be used as query builder and as an ORM being the source of truth for SQL schema and CLI for automatic migrations generation.

Read more

](/docs/latest-releases/drizzle-orm-v0162)[

DrizzleORM v0.11.0 release

Jul 20, 2022

DrizzleORM - is an open source TypeScript ORM, supports PostgreSQL and about to have MySQL and SQLite support in couple of weeks. We've decided it's time to share it with public.

Read more

](/docs/latest-releases/drizzle-orm-v0110)

Drizzle gotchas
===============

This will be a library of `gotchas` with Drizzle use cases

Drizzle schema
==============

Drizzle lets you define a schema in TypeScript with various models and properties supported by the underlying database. When you define your schema, it serves as the source of truth for future modifications in queries (using Drizzle-ORM) and migrations (using Drizzle-Kit).

If you are using Drizzle-Kit for the migration process, make sure to export all the models defined in your schema files so that Drizzle-Kit can import them and use them in the migration diff process.

Organize your schema files[](#organize-your-schema-files)
---------------------------------------------------------

You can declare your SQL schema directly in TypeScript either in a single `schema.ts` file, or you can spread them around — whichever you prefer, all the freedom!

#### Schema in 1 file[](#schema-in-1-file)

The most common way to declare your schema with Drizzle is to put all your tables into one `schema.ts` file.

> Note: You can name your schema file whatever you like. For example, it could be `models.ts`, or something else.

This approach works well if you don’t have too many table models defined, or if you’re okay with keeping them all in one file

Example:

    📦 <project root>
    └ 📂 src
    └ 📂 db
       └ 📜 schema.ts

In the `drizzle.config.ts` file, you need to specify the path to your schema file. With this configuration, Drizzle will read from the `schema.ts` file and use this information during the migration generation process. For more information about the `drizzle.config.ts` file and migrations with Drizzle, please check: [link](/docs/drizzle-config-file)

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
      schema: './src/db/schema.ts'
    })

#### Schema in multiple files[](#schema-in-multiple-files)

You can place your Drizzle models — such as tables, enums, sequences, etc. — not only in one file but in any file you prefer. The only thing you must ensure is that you export all the models from those files so that the Drizzle kit can import them and use them in migrations.

One use case would be to separate each table into its own file.

    📦 <project root>
     └ 📂 src
        └ 📂 db
           └ 📂 schema
              ├ 📜 users.ts
              ├ 📜 countries.ts
              ├ 📜 cities.ts
              ├ 📜 products.ts
              ├ 📜 clients.ts
              └ 📜 etc.ts

In the `drizzle.config.ts` file, you need to specify the path to your schema folder. With this configuration, Drizzle will read from the `schema` folder and find all the files recursively and get all the drizzle tables from there. For more information about the `drizzle.config.ts` file and migrations with Drizzle, please check: [link](/docs/drizzle-config-file)

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
      schema: './src/db/schema'
    })

You can also group them in any way you like, such as creating groups for user-related tables, messaging-related tables, product-related tables, etc.

    📦 <project root>
     └ 📂 src
        └ 📂 db
           └ 📂 schema
              ├ 📜 users.ts
              ├ 📜 messaging.ts
              └ 📜 products.ts

In the `drizzle.config.ts` file, you need to specify the path to your schema file. With this configuration, Drizzle will read from the `schema.ts` file and use this information during the migration generation process. For more information about the `drizzle.config.ts` file and migrations with Drizzle, please check: [link](/docs/drizzle-config-file)

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
      schema: './src/db/schema'
    })

Shape your data schema[](#shape-your-data-schema)
-------------------------------------------------

Drizzle schema consists of several model types from database you are using. With drizzle you can specify:

*   Tables with columns, constraints, etc.
*   Schemas(PostgreSQL only)
*   Enums
*   Sequences(PostgreSQL only)
*   Views
*   Materialized Views
*   etc.

Let’s go one by one and check how the schema should be defined with drizzle

#### **Tables and columns declaration**[](#tables-and-columns-declaration)

A table in Drizzle should be defined with at least 1 column, the same as it should be done in database. There is one important thing to know, there is no such thing as a common table object in drizzle. You need to choose a dialect you are using, PostgreSQL, MySQL or SQLite

PostgreSQL Table

MySQL Table

SQLite Table

    import { pgTable, integer } from "drizzle-orm/pg-core"
    
    export const users = pgTable('users', {
      id: integer()
    });

    import { mysqlTable, int } from "drizzle-orm/mysql-core"
    
    export const users = mysqlTable('users', {
      id: int()
    });

    import { sqliteTable, integer } from "drizzle-orm/sqlite-core"
    
    export const users = sqliteTable('users', {
      id: integer()
    });

By default, Drizzle will use the TypeScript key names for columns in database queries. Therefore, the schema and query from the example will generate the SQL query shown below

This example uses a db object, whose initialization is not covered in this part of the documentation. To learn how to connect to the database, please refer to the [Connections Docs](/docs/get-started-postgresql)

  
**TypeScript key = database key**

    // schema.ts
    import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
    
    export const users = pgTable('users', {
      id: integer(),
      first_name: varchar()
    })

    // query.ts
    await db.select().from(users);

    SELECT "id", "first_name" from users;

If you want to use different names in your TypeScript code and in the database, you can use column aliases

    // schema.ts
    import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
    
    export const users = pgTable('users', {
      id: integer(),
      firstName: varchar('first_name')
    })

    // query.ts
    await db.select().from(users);

    SELECT "id", "first_name" from users;

### Camel and Snake casing[](#camel-and-snake-casing)

Database model names often use `snake_case` conventions, while in TypeScript, it is common to use `camelCase` for naming models. This can lead to a lot of alias definitions in the schema. To address this, Drizzle provides a way to automatically map `camelCase` from TypeScript to `snake_case` in the database by including one optional parameter during Drizzle database initialization

For such mapping, you can use the `casing` option in the Drizzle DB declaration. This parameter will help you specify the database model naming convention and will attempt to map all JavaScript keys accordingly

    // schema.ts
    import { drizzle } from "drizzle-orm/node-postgres";
    import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
    
    export const users = pgTable('users', {
      id: integer(),
      firstName: varchar()
    })

    // db.ts
    const db = drizzle({ connection: process.env.DATABASE_URL, casing: 'snake_case' })

    // query.ts
    await db.select().from(users);

    SELECT "id", "first_name" from users;

### Advanced[](#advanced)

There are a few tricks you can use with Drizzle ORM. As long as Drizzle is entirely in TypeScript files, you can essentially do anything you would in a simple TypeScript project with your code.

One common feature is to separate columns into different places and then reuse them. For example, consider the `updated_at`, `created_at`, and `deleted_at` columns. Many tables/models may need these three fields to track and analyze the creation, deletion, and updates of entities in a system

We can define those columns in a separate file and then import and spread them across all the table objects you have

    // columns.helpers.ts
    const timestamps = {
      updated_at: timestamp(),
      created_at: timestamp().defaultNow().notNull(),
      deleted_at: timestamp(),
    }

    // users.sql.ts
    export const users = pgTable('users', {
      id: integer(),
      ...timestamps
    })

    // posts.sql.ts
    export const posts = pgTable('posts', {
      id: integer(),
      ...timestamps
    })

#### **Schemas**[](#schemas)

PostgreSQL

MySQL

SQLite

  
In PostgreSQL, there is an entity called a `schema` (which we believe should be called `folders`). This creates a structure in PostgreSQL:

You can manage your PostgreSQL schemas with `pgSchema` and place any other models inside it.

Define the schema you want to manage using Drizzle

    import { pgSchema } from "drizzle-orm/pg-core"
    
    export const customSchema = pgSchema('custom');

Then place the table inside the schema object

    import { integer, pgSchema } from "drizzle-orm/pg-core";
    
    export const customSchema = pgSchema('custom');
    
    export const users = customSchema.table('users', {
      id: integer()
    })

  
In MySQL, there is an entity called `Schema`, but in MySQL terms, this is equivalent to a `Database`.

You can define them with `drizzle-orm` and use them in queries, but they won’t be detected by `drizzle-kit` or included in the migration flow

Define the schema you want to manage using Drizzle

    import { mysqlSchema } from "drizzle-orm/mysql-core"
    
    export const customSchema = mysqlSchema('custom');

Then place the table inside the schema object

    import { int, mysqlSchema } from "drizzle-orm/mysql-core";
    
    export const customSchema = mysqlSchema('custom');
    
    export const users = customSchema.table('users', {
      id: int()
    })

  
In SQLite, there is no concept of a schema, so you can only define tables within a single SQLite file context

### Example[](#example)

Once you know the basics, let’s define a schema example for a real project to get a better view and understanding

> All examples will use `generateUniqueString`. The implementation for it will be provided after all the schema examples

PostgreSQL

MySQL

SQLite

    import { AnyPgColumn } from "drizzle-orm/pg-core";
    import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
    import * as t from "drizzle-orm/pg-core";
    
    export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);
    
    export const users = table(
      "users",
      {
        id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
        firstName: t.varchar("first_name", { length: 256 }),
        lastName: t.varchar("last_name", { length: 256 }),
        email: t.varchar().notNull(),
        invitee: t.integer().references((): AnyPgColumn => users.id),
        role: rolesEnum().default("guest"),
      },
      (table) => [
        t.uniqueIndex("email_idx").on(table.email)
      ]
    );
    
    export const posts = table(
      "posts",
      {
        id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
        slug: t.varchar().$default(() => generateUniqueString(16)),
        title: t.varchar({ length: 256 }),
        ownerId: t.integer("owner_id").references(() => users.id),
      },
      (table) => [
        t.uniqueIndex("slug_idx").on(table.slug),
        t.index("title_idx").on(table.title),
      ]
    );
    
    export const comments = table("comments", {
      id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
      text: t.varchar({ length: 256 }),
      postId: t.integer("post_id").references(() => posts.id),
      ownerId: t.integer("owner_id").references(() => users.id),
    });

    import { mysqlTable as table } from "drizzle-orm/mysql-core";
    import * as t from "drizzle-orm/mysql-core";
    import { AnyMySqlColumn } from "drizzle-orm/mysql-core";
    
    export const users = table(
      "users",
      {
        id: t.int().primaryKey().autoincrement(),
        firstName: t.varchar("first_name", { length: 256 }),
        lastName: t.varchar("last_name", { length: 256 }),
        email: t.varchar({ length: 256 }).notNull(),
        invitee: t.int().references((): AnyMySqlColumn => users.id),
        role: t.mysqlEnum(["guest", "user", "admin"]).default("guest"),
      },
      (table) => [
        t.uniqueIndex("email_idx").on(table.email)
      ]
    );
    
    export const posts = table(
      "posts",
      {
        id: t.int().primaryKey().autoincrement(),
        slug: t.varchar({ length: 256 }).$default(() => generateUniqueString(16)),
        title: t.varchar({ length: 256 }),
        ownerId: t.int("owner_id").references(() => users.id),
      },
      (table) => [
        t.uniqueIndex("slug_idx").on(table.slug),
        t.index("title_idx").on(table.title),
      ]
    );
    
    export const comments = table("comments", {
      id: t.int().primaryKey().autoincrement(),
      text: t.varchar({ length: 256 }),
      postId: t.int("post_id").references(() => posts.id),
      ownerId: t.int("owner_id").references(() => users.id),
    });

    import { sqliteTable as table } from "drizzle-orm/sqlite-core";
    import * as t from "drizzle-orm/sqlite-core";
    import { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
    
    export const users = table(
      "users",
      {
        id: t.int().primaryKey({ autoIncrement: true }),
        firstName: t.text("first_name"),
        lastName: t.text("last_name"),
        email: t.text().notNull(),
        invitee: t.int().references((): AnySQLiteColumn => users.id),
        role: t.text().$type<"guest" | "user" | "admin">().default("guest"),
      },
      (table) => [
        t.uniqueIndex("email_idx").on(table.email)
      ]
    );
    
    export const posts = table(
      "posts",
      {
        id: t.int().primaryKey({ autoIncrement: true }),
        slug: t.text().$default(() => generateUniqueString(16)),
        title: t.text(),
        ownerId: t.int("owner_id").references(() => users.id),
      },
      (table) => [
        t.uniqueIndex("slug_idx").on(table.slug),
        t.index("title_idx").on(table.title),
      ]
    );
    
    export const comments = table("comments", {
      id: t.int().primaryKey({ autoIncrement: true }),
      text: t.text({ length: 256 }),
      postId: t.int("post_id").references(() => posts.id),
      ownerId: t.int("owner_id").references(() => users.id),
    });

**`generateUniqueString` implementation:**

    function generateUniqueString(length: number = 12): string {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let uniqueString = "";
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueString += characters[randomIndex];
      }
    
      return uniqueString;
    }

#### What’s next?[](#whats-next)

  

**Manage schema**

[Column types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Zero to Hero**

[Database connection](/docs/connect-overview) [Data querying](/docs/data-querying) [Migrations](/docs/migrations)

Database connection with Drizzle
================================

Drizzle ORM runs SQL queries on your database via **database drivers**.

index.ts

schema.ts

    import { drizzle } from "drizzle-orm/node-postgres"
    import { users } from "./schema"
    
    const db = drizzle(process.env.DATABASE_URL);
    const usersCount = await db.$count(users);

                            ┌──────────────────────┐
                            │   db.$count(users)   │ <--- drizzle query
                            └──────────────────────┘     
                                │               ʌ
    select count(*) from users -│               │
                                │               │- [{ count: 0 }]
                                v               │
                             ┌─────────────────────┐
                             │    node-postgres    │ <--- database driver
                             └─────────────────────┘
                                │               ʌ
    01101000 01100101 01111001 -│               │
                                │               │- 01110011 01110101 01110000
                                v               │
                             ┌────────────────────┐
                             │      Database      │ 
                             └────────────────────┘

    import { pgTable, integer, text } from "drizzle-orm";
    
    export const users = pgTable("users", {
      id: integer("id").generateAlwaysAsIdentity(),
      name: text("name"),
    })

Under the hood Drizzle will create a **node-postgres** driver instance which you can access via `db.$client` if necessary

    import { drizzle } from "drizzle-orm/node-postgres"
    
    const db = drizzle(process.env.DATABASE_URL);
    const pool = db.$client;

    // above is equivalent to
    import { drizzle } from "drizzle-orm/node-postgres";
    import { Pool } from "pg";
    
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });

Drizzle is by design natively compatible with every **edge** or **serverless** runtime, whenever you’d need access to a serverless database - we’ve got you covered

Neon HTTP

Neon with websockets

Vercel Postgres

PlanetScale HTTP

Cloudflare d1

    import { drizzle } from "drizzle-orm/neon-http";
    
    const db = drizzle(process.env.DATABASE_URL);

    import { drizzle } from "drizzle-orm/neon-serverless";
    
    const db = drizzle(process.env.DATABASE_URL);

    import { drizzle } from "drizzle-orm/vercel-postgres";
    
    const db = drizzle();

    import { drizzle  } from "drizzle-orm/planetscale";
    
    const db = drizzle(process.env.DATABASE_URL);

    import { drizzle  } from "drizzle-orm/d1";
    
    const db = drizzle({ connection: env.DB });

And yes, we do support runtime specific drivers like [Bun SQLite](/docs/connect-bun-sqlite) or [Expo SQLite](/docs/connect-expo-sqlite):

    import { drizzle } from "drizzle-orm/bun-sqlite"
    
    const db = drizzle(); // <--- will create an in-memory db
    const db = drizzle("./sqlite.db");

    import { drizzle } from "drizzle-orm/expo-sqlite";
    import { openDatabaseSync } from "expo-sqlite/next";
    
    const expo = openDatabaseSync("db.db");
    const db = drizzle(expo);

#### Database connection URL[](#database-connection-url)

Just in case if you’re not familiar with database connection URL concept

    postgresql://alex:[email protected]/dbname
                 └──┘ └───────┘ └─────────────────────────────────────────────┘ └────┘
                  ʌ    ʌ          ʌ                                              ʌ
            role -│    │          │- hostname                                    │- database
                       │
                       │- password
    

#### Next steps[](#next-steps)

Feel free to check out per-driver documentations

**PostgreSQL drivers**

[PostgreSQL](/docs/get-started-postgresql) [Neon](/docs/connect-neon) [Vercel Postgres](/docs/connect-vercel-postgres) [Supabase](/docs/connect-supabase) [Xata](/docs/connect-xata) [PGLite](/docs/connect-pglite)

**MySQL drivers**

[MySQL](/docs/get-started-mysql) [PlanetsScale](/docs/connect-planetscale) [TiDB](/docs/connect-tidb)

**SQLite drivers**

[SQLite](/docs/get-started-sqlite) [Turso](/docs/connect-turso) [Cloudflare D1](/docs/connect-cloudflare-d1) [Bun SQLite](/docs/connect-bun-sqlite)

**Native SQLite**

[Expo SQLite](/docs/get-started/expo-new) [OP SQLite](/docs/connect-op-sqlite) [React Native SQLite](/docs/connect-react-native-sqlite)

**Others**

[Drizzle Proxy](/docs/connect-drizzle-proxy)

Drizzle Queries + CRUD
======================

This guide assumes familiarity with:

*   How to define your schema - [Schema Fundamentals](/docs/sql-schema-declaration)
*   How to connect to the database - [Connection Fundamentals](/docs/connect-overview)

Drizzle gives you a few ways for querying you database and it’s up to you to decide which one you’ll need in your next project. It can be either SQL-like syntax or Relational Syntax. Let’s check them:

Why SQL-like?[](#why-sql-like)
------------------------------

  
**If you know SQL, you know Drizzle.**

Other ORMs and data frameworks tend to deviate from or abstract away SQL, leading to a double learning curve: you need to learn both SQL and the framework’s API.

Drizzle is the opposite. We embrace SQL and built Drizzle to be SQL-like at its core, so you have little to no learning curve and full access to the power of SQL.

    // Access your data
    await db
      .select()
    	.from(posts)
    	.leftJoin(comments, eq(posts.id, comments.post_id))
    	.where(eq(posts.id, 10))

    SELECT * 
    FROM posts
    LEFT JOIN comments ON posts.id = comments.post_id
    WHERE posts.id = 10

With SQL-like syntax, you can replicate much of what you can do with pure SQL and know exactly what Drizzle will do and what query will be generated. You can perform a wide range of queries, including select, insert, update, delete, as well as using aliases, WITH clauses, subqueries, prepared statements, and more. Let’s look at more examples

insert

update

delete

    await db.insert(users).values({ email: '[email protected]' })

    INSERT INTO users (email) VALUES ('[email protected]')

    await db.update(users)
            .set({ email: '[email protected]' })
            .where(eq(users.id, 1))

    UPDATE users 
    SET email = '[email protected]'
    WHERE users.id = 1

    await db.delete(users).where(eq(users.id, 1))

    DELETE FROM users WHERE users.id = 1

Why not SQL-like?[](#why-not-sql-like)
--------------------------------------

We’re always striving for a perfectly balanced solution. While SQL-like queries cover 100% of your needs, there are certain common scenarios where data can be queried more efficiently.

We’ve built the Queries API so you can fetch relational, nested data from the database in the most convenient and performant way, without worrying about joins or data mapping.

**Drizzle always outputs exactly one SQL query**. Feel free to use it with serverless databases, and never worry about performance or roundtrip costs!

    const result = await db.query.users.findMany({
    	with: {
    		posts: true
    	},
    });

Advanced[](#advanced)
---------------------

With Drizzle, queries can be composed and partitioned in any way you want. You can compose filters independently from the main query, separate subqueries or conditional statements, and much more. Let’s check a few advanced examples:

#### Compose a WHERE statement and then use it in a query[](#compose-a-where-statement-and-then-use-it-in-a-query)

    async function getProductsBy({
      name,
      category,
      maxPrice,
    }: {
      name?: string;
      category?: string;
      maxPrice?: string;
    }) {
      const filters: SQL[] = [];
    
      if (name) filters.push(ilike(products.name, name));
      if (category) filters.push(eq(products.category, category));
      if (maxPrice) filters.push(lte(products.price, maxPrice));
    
      return db
        .select()
        .from(products)
        .where(and(...filters));
    }

#### Separate subqueries into different variables, and then use them in the main query[](#separate-subqueries-into-different-variables-and-then-use-them-in-the-main-query)

    const subquery = db
    	.select()
    	.from(internalStaff)
    	.leftJoin(customUser, eq(internalStaff.userId, customUser.id))
    	.as('internal_staff');
    
    const mainQuery = await db
    	.select()
    	.from(ticket)
    	.leftJoin(subquery, eq(subquery.internal_staff.userId, ticket.staffId));

#### What’s next?[](#whats-next)

  

**Access your data**

[Query](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

**Zero to Hero**

[Migrations](/docs/migrations)

Drizzle migrations fundamentals
===============================

SQL databases require you to specify a **strict schema** of entities you’re going to store upfront and if (when) you need to change the shape of those entities - you will need to do it via **schema migrations**.

There’re multiple production grade ways of managing database migrations. Drizzle is designed to perfectly suits all of them, regardless of you going **database first** or **codebase first**.

**Database first** is when your database schema is a source of truth. You manage your database schema either directly on the database or via database migration tools and then you pull your database schema to your codebase application level entities.

**Codebase first** is when database schema in your codebase is a source of truth and is under version control. You declare and manage your database schema in JavaScript/TypeScript and then you apply that schema to the database itself either with Drizzle, directly or via external migration tools.

#### How can Drizzle help?[](#how-can-drizzle-help)

We’ve built [**drizzle-kit**](/docs/kit-overview) - CLI app for managing migrations with Drizzle.

    drizzle-kit migrate
    drizzle-kit generate
    drizzle-kit push
    drizzle-kit pull

It is designed to let you choose how to approach migrations based on your current business demands.

It fits in both database and codebase first approaches, it lets you **push your schema** or **generate SQL migration** files or **pull the schema** from database. It is perfect wether you work alone or in a team.

  

* * *

**Now let’s pick the best option for your project:**

**Option 1**

> I manage database schema myself using external migration tools or by running SQL migrations directly on my database. From Drizzle I just need to get current state of the schema from my database and save it as TypeScript schema file.

Expand details

That’s a **database first** approach. You have your database schema as a **source of truth** and Drizzle lets you pull database schema to TypeScript using [`drizzle-kit pull`](/docs/drizzle-kit-pull) command.

                                      ┌────────────────────────┐      ┌─────────────────────────┐ 
                                      │                        │ <---  CREATE TABLE "users" (
    ┌──────────────────────────┐      │                        │        "id" SERIAL PRIMARY KEY,
    │ ~ drizzle-kit pull       │      │                        │        "name" TEXT,
    └─┬────────────────────────┘      │        DATABASE        │        "email" TEXT UNIQUE
      │                               │                        │       );
      └ Pull datatabase schema -----> │                        │
      ┌ Generate Drizzle       <----- │                        │
      │ schema TypeScript file        └────────────────────────┘
      │
      v

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

**Option 2**

> I want to have database schema in my TypeScript codebase, I don’t wanna deal with SQL migration files.  
> I want Drizzle to “push” my schema directly to the database

Expand details

That’s a **codebase first** approach. You have your TypeScript Drizzle schema as a **source of truth** and Drizzle let’s you push schema changes to the database using [`drizzle-kit push`](/docs/drizzle-kit-push) command.

That’s the best approach for rapid prototyping and we’ve seen dozens of teams and solo developers successfully using it as a primary migrations flow in their production applications.

src/schema.ts

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), // <--- added column
    };

    Add column to `users` table                                                                          
    ┌──────────────────────────┐                  
    │ + email: text().unique() │                  
    └─┬────────────────────────┘                  
      │                                           
      v                                           
    ┌──────────────────────────┐                  
    │ ~ drizzle-kit push       │                  
    └─┬────────────────────────┘                  
      │                                           ┌──────────────────────────┐
      └ Pull current datatabase schema ---------> │                          │
                                                  │                          │
      ┌ Generate alternations based on diff <---- │         DATABASE         │
      │                                           │                          │
      └ Apply migrations to the database -------> │                          │
                                           │      └──────────────────────────┘
                                           │
      ┌────────────────────────────────────┴──────────────┐
       ALTER TABLE `users` ADD COLUMN `email` TEXT UNIQUE; 

**Option 3**

> I want to have database schema in my TypeScript codebase, I want Drizzle to generate SQL migration files for me and apply them to my database

Expand details

That’s a **codebase first** approach. You have your TypeScript Drizzle schema as a source of truth and Drizzle let’s you generate SQL migration files based on your schema changes with [`drizzle-kit generate`](/docs/drizzle-kit-generate) and then apply them to the database with [`drizzle-kit migrate`](/docs/drizzle-kit-migrate) commands.

src/schema.ts

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

    ┌────────────────────────┐                  
    │ $ drizzle-kit generate │                  
    └─┬──────────────────────┘                  
      │                                           
      └ 1. read previous migration folders
        2. find diff between current and previous schema
        3. prompt developer for renames if necessary
      ┌ 4. generate SQL migration and persist to file
      │    ┌─┴───────────────────────────────────────┐  
      │      📂 drizzle       
      │      └ 📂 20242409125510_premium_mister_fear
      │        ├ 📜 snapshot.json
      │        └ 📜 migration.sql
      v

    -- drizzle/20242409125510_premium_mister_fear/migration.sql
    
    CREATE TABLE "users" (
     "id" SERIAL PRIMARY KEY,
     "name" TEXT,
     "email" TEXT UNIQUE
    );

    ┌───────────────────────┐                  
    │ $ drizzle-kit migrate │                  
    └─┬─────────────────────┘                  
      │                                                         ┌──────────────────────────┐                                         
      └ 1. read migration.sql files in migrations folder        │                          │
        2. fetch migration history from database -------------> │                          │
      ┌ 3. pick previously unapplied migrations <-------------- │         DATABASE         │
      └ 4. apply new migration to the database ---------------> │                          │
                                                                │                          │
                                                                └──────────────────────────┘
    [✓] done!                                                 

**Option 4**

> I want to have database schema in my TypeScript codebase, I want Drizzle to generate SQL migration files for me and I want Drizzle to apply them during runtime

Expand details

That’s a **codebase first** approach. You have your TypeScript Drizzle schema as a source of truth and Drizzle let’s you generate SQL migration files based on your schema changes with [`drizzle-kit generate`](/docs/drizzle-kit-generate) and then you can apply them to the database during runtime of your application.

This approach is widely used for **monolithic** applications when you apply database migrations during zero downtime deployment and rollback DDL changes if something fails. This is also used in **serverless** deployments with migrations running in **custom resource** once during deployment process.

src/schema.ts

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

    ┌────────────────────────┐                  
    │ $ drizzle-kit generate │                  
    └─┬──────────────────────┘                  
      │                                           
      └ 1. read previous migration folders
        2. find diff between current and previous schema
        3. prompt developer for renames if necessary
      ┌ 4. generate SQL migration and persist to file
      │    ┌─┴───────────────────────────────────────┐  
      │      📂 drizzle       
      │      └ 📂 20242409125510_premium_mister_fear
      │        ├ 📜 snapshot.json
      │        └ 📜 migration.sql
      v

    -- drizzle/20242409125510_premium_mister_fear/migration.sql
    
    CREATE TABLE "users" (
     "id" SERIAL PRIMARY KEY,
     "name" TEXT,
     "email" TEXT UNIQUE
    );

    // index.ts
    import { drizzle } from "drizzle-orm/node-postgres"
    import { migrate } from 'drizzle-orm/node-postgres/migrator';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    await migrate(db);

    ┌───────────────────────┐                  
    │ npx tsx src/index.ts  │                  
    └─┬─────────────────────┘                  
      │                                                      
      ├ 1. init database connection                             ┌──────────────────────────┐                                         
      └ 2. read migration.sql files in migrations folder        │                          │
        3. fetch migration history from database -------------> │                          │
      ┌ 4. pick previously unapplied migrations <-------------- │         DATABASE         │
      └ 5. apply new migration to the database ---------------> │                          │
                                                                │                          │
                                                                └──────────────────────────┘
    [✓] done!                                                 

**Option 5**

> I want to have database schema in my TypeScript codebase, I want Drizzle to generate SQL migration files for me, but I will apply them to my database myself or via external migration tools

Expand details

That’s a **codebase first** approach. You have your TypeScript Drizzle schema as a source of truth and Drizzle let’s you generate SQL migration files based on your schema changes with [`drizzle-kit generate`](/docs/drizzle-kit-generate) and then you can apply them to the database either directly or via external migration tools.

src/schema.ts

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

    ┌────────────────────────┐                  
    │ $ drizzle-kit generate │                  
    └─┬──────────────────────┘                  
      │                                           
      └ 1. read previous migration folders
        2. find diff between current and previous scheama
        3. prompt developer for renames if necessary
      ┌ 4. generate SQL migration and persist to file
      │    ┌─┴───────────────────────────────────────┐  
      │      📂 drizzle       
      │      └ 📂 20242409125510_premium_mister_fear
      │        ├ 📜 snapshot.json
      │        └ 📜 migration.sql
      v

    -- drizzle/20242409125510_premium_mister_fear/migration.sql
    
    CREATE TABLE "users" (
     "id" SERIAL PRIMARY KEY,
     "name" TEXT,
     "email" TEXT UNIQUE
    );

    ┌───────────────────────────────────┐                  
    │ (._.) now you run your migrations │           
    └─┬─────────────────────────────────┘  
      │
     directly to the database
      │                                         ┌────────────────────┐
      ├────────────────────────────────────┬───>│                    │  
      │                                    │    │      Database      │           
     or via external tools                 │    │                    │   
      │                                    │    └────────────────────┘
      │  ┌────────────────────┐            │      
      └──│ Bytebase           ├────────────┘         
         ├────────────────────┤  
         │ Liquibase          │
         ├────────────────────┤ 
         │ Atlas              │
         ├────────────────────┤ 
         │ etc…               │
         └────────────────────┘
    
    [✓] done!                                                 

**Option 6**

> I want to have database schema in my TypeScript codebase, I want Drizzle to output the SQL representation of my Drizzle schema to the console, and I will apply them to my database via [Atlas](https://atlasgo.io/guides/orms/drizzle)

Expand details

That’s a **codebase first** approach. You have your TypeScript Drizzle schema as a source of truth and Drizzle let’s you export SQL statements based on your schema changes with [`drizzle-kit export`](/docs/drizzle-kit-generate) and then you can apply them to the database via [Atlas](https://atlasgo.io/guides/orms/drizzle) or other external SQL migration tools.

src/schema.ts

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

    ┌────────────────────────┐                  
    │ $ drizzle-kit export   │                  
    └─┬──────────────────────┘                  
      │                                           
      └ 1. read your drizzle schema
        2. generated SQL representation of your schema
      ┌ 3. outputs to console
      │    
      │        
      v

    CREATE TABLE "users" (
     "id" SERIAL PRIMARY KEY,
     "name" TEXT,
     "email" TEXT UNIQUE
    );

    ┌───────────────────────────────────┐                  
    │ (._.) now you run your migrations │           
    └─┬─────────────────────────────────┘  
      │
     via Atlas
      │                                    ┌──────────────┐
      │  ┌────────────────────┐            │              │
      └──│ Atlas              ├───────────>│  Database    │      
         └────────────────────┘            │              │       
                                           └──────────────┘
    
    [✓] done!                                                 

Drizzle <> PostgreSQL
=====================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   node-postgres [basics](https://node-postgres.com/)
*   postgres.js [basics](https://github.com/porsager/postgres?tab=readme-ov-file#usage)

Drizzle has native support for PostgreSQL connections with the `node-postgres` and `postgres.js` drivers.

There are a few differences between the `node-postgres` and `postgres.js` drivers that we discovered while using both and integrating them with the Drizzle ORM. For example:

*   With `node-postgres`, you can install `pg-native` to boost the speed of both `node-postgres` and Drizzle by approximately 10%.
*   `node-postgres` supports providing type parsers on a per-query basis without globally patching things. For more details, see [Types Docs](https://node-postgres.com/features/queries#types).
*   `postgres.js` uses prepared statements by default, which you may need to opt out of. This could be a potential issue in AWS environments, among others, so please keep that in mind.
*   If there’s anything else you’d like to contribute, we’d be happy to receive your PRs [here](https://github.com/drizzle-team/drizzle-orm-docs/pulls)

node-postgres[](#node-postgres)
-------------------------------

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm pg
    npm i -D drizzle-kit @types/pg

    yarn add drizzle-orm pg
    yarn add -D drizzle-kit @types/pg

    pnpm add drizzle-orm pg
    pnpm add -D drizzle-kit @types/pg

    bun add drizzle-orm pg
    bun add -D drizzle-kit @types/pg

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

node-postgres

node-postgres with config

    // Make sure to install the 'pg' package 
    import { drizzle } from 'drizzle-orm/node-postgres';
    
    const db = drizzle(process.env.DATABASE_URL);
     
    const result = await db.execute('select 1');

    // Make sure to install the 'pg' package 
    import { drizzle } from 'drizzle-orm/node-postgres';
    
    // You can specify any property from the node-postgres connection options
    const db = drizzle({ 
      connection: { 
        connectionString: process.env.DATABASE_URL,
        ssl: true
      }
    });
     
    const result = await db.execute('select 1');

If you need to provide your existing driver:

    // Make sure to install the 'pg' package 
    import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
    import { drizzle } from "drizzle-orm/node-postgres";
    import { Pool } from "pg";
    
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });
     
    const result = await db.execute('select 1');

postgres.js[](#postgresjs)
--------------------------

#### Step 1 - Install packages[](#step-1---install-packages-1)

npm

yarn

pnpm

bun

    npm i drizzle-orm postgres
    npm i -D drizzle-kit

    yarn add drizzle-orm postgres
    yarn add -D drizzle-kit

    pnpm add drizzle-orm postgres
    pnpm add -D drizzle-kit

    bun add drizzle-orm postgres
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query-1)

postgres.js

postgres.js with config

    import { drizzle } from 'drizzle-orm/postgres-js';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.execute('select 1');

    import { drizzle } from 'drizzle-orm/postgres-js';
    
    // You can specify any property from the postgres-js connection options
    const db = drizzle({ 
      connection: { 
        url: process.env.DATABASE_URL, 
        ssl: true 
      }
    });
    
    const result = await db.execute('select 1');

If you need to provide your existing driver:

    // Make sure to install the 'postgres' package
    import { drizzle } from 'drizzle-orm/postgres-js';
    import postgres from 'postgres';
    
    const queryClient = postgres(process.env.DATABASE_URL);
    const db = drizzle({ client: queryClient });
    
    const result = await db.execute('select 1');

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> PostgreSQL
=====================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   gel-js [basics](https://github.com/geldata/gel-js)

Drizzle has native support for Gel connections with the `gel-js` client.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm gel
    npm i -D drizzle-kit

    yarn add drizzle-orm gel
    yarn add -D drizzle-kit

    pnpm add drizzle-orm gel
    pnpm add -D drizzle-kit

    bun add drizzle-orm gel
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

gel

gel with config

    // Make sure to install the 'gel' package 
    import { drizzle } from 'drizzle-orm/gel';
    
    const db = drizzle(process.env.DATABASE_URL);
     
    const result = await db.execute('select 1');

    // Make sure to install the 'gel' package
    import { drizzle } from "drizzle-orm/gel";
    
    // You can specify any property from the gel connection options
    const db = drizzle({
      connection: {
        dsn: process.env.DATABASE_URL,
        tlsSecurity: "default",
      },
    });
    
    const result = await db.execute("select 1");

If you need to provide your existing driver:

    // Make sure to install the 'gel' package 
    import { drizzle } from "drizzle-orm/gel";
    import { createClient } from "gel";
    
    const gelClient = createClient();
    const db = drizzle({ client: gelClient });
    
    const result = await db.execute('select 1');

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> MySQL
================

To use Drizzle with a MySQL database, you should use the `mysql2` driver

According to the **[official website](https://github.com/sidorares/node-mysql2)**, `mysql2` is a MySQL client for Node.js with focus on performance.

Drizzle ORM natively supports `mysql2` with `drizzle-orm/mysql2` package.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm mysql2
    npm i -D drizzle-kit

    yarn add drizzle-orm mysql2
    yarn add -D drizzle-kit

    pnpm add drizzle-orm mysql2
    pnpm add -D drizzle-kit

    bun add drizzle-orm mysql2
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

mysql2

mysql with config

    import { drizzle } from "drizzle-orm/mysql2";
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const response = await db.select().from(...)

    import { drizzle } from "drizzle-orm/mysql2";
    
    // You can specify any property from the mysql2 connection options
    const db = drizzle({ connection:{ uri: process.env.DATABASE_URL }});
    
    const response = await db.select().from(...)

If you need to provide your existing driver:

Client connection

Pool connection

    import { drizzle } from "drizzle-orm/mysql2";
    import mysql from "mysql2/promise";
    
    const connection = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "database",
      ...
    });
    
    const db = drizzle({ client: connection });

    import { drizzle } from "drizzle-orm/mysql2";
    import mysql from "mysql2/promise";
    
    const poolConnection = mysql.createPool({
      host: "host",
      user: "user",
      database: "database",
      ...
    });
    
    const db = drizzle({ client: poolConnection });

IMPORTANT

For the built in `migrate` function with DDL migrations we and drivers strongly encourage you to use single `client` connection.

For querying purposes feel free to use either `client` or `pool` based on your business demands.

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> SQLite
=================

Drizzle has native support for SQLite connections with the `libsql` and `better-sqlite3` drivers.

There are a few differences between the `libsql` and `better-sqlite3` drivers that we discovered while using both and integrating them with the Drizzle ORM. For example:

At the driver level, there may not be many differences between the two, but the main one is that `libSQL` can connect to both SQLite files and `Turso` remote databases. LibSQL is a fork of SQLite that offers a bit more functionality compared to standard SQLite, such as:

*   More ALTER statements are available with the `libSQL` driver, allowing you to manage your schema more easily than with just `better-sqlite3`.
*   You can configure the encryption at rest feature natively.
*   A large set of extensions supported by the SQLite database is also supported by `libSQL`.

libsql[](#libsql)
-----------------

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @libsql/client
    npm i -D drizzle-kit

    yarn add drizzle-orm @libsql/client
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @libsql/client
    pnpm add -D drizzle-kit

    bun add drizzle-orm @libsql/client
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver[](#step-2---initialize-the-driver)

Drizzle has native support for all @libsql/client driver variations:

`@libsql/client`

defaults to `node` import, automatically changes to `web` if `target` or `platform` is set for bundler, e.g. `esbuild --platform=browser`

`@libsql/client/node`

`node` compatible module, supports `:memory:`, `file`, `wss`, `http` and `turso` conneciton protocols

`@libsql/client/web`

module for fullstack web frameworks like `next`, `nuxt`, `astro`, etc.

`@libsql/client/http`

module for `http` and `https` connection protocols

`@libsql/client/ws`

module for `ws` and `wss` conneciton protocols

`@libsql/client/sqlite3`

module for `:memory:` and `file` conneciton protocols

`@libsql/client-wasm`

Separate experimental package for WASM

  

default

node

web

http

web sockets

wasm

    import { drizzle } from 'drizzle-orm/libsql';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/node';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/web';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/http';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/ws';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/wasm';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

#### Step 3 - make a query[](#step-3---make-a-query)

libsql

libsql with config

    import { drizzle } from 'drizzle-orm/libsql';
    
    const db = drizzle(process.env.DATABASE_URL);
     
    const result = await db.execute('select 1');

    import { drizzle } from 'drizzle-orm/libsql';
    
    // You can specify any property from the libsql connection options
    const db = drizzle({ connection: { url:'', authToken: '' }});
     
    const result = await db.execute('select 1');

If you need a synchronous connection, you can use our additional connection API, where you specify a driver connection and pass it to the Drizzle instance.

    import { drizzle } from 'drizzle-orm/libsql';
    import { createClient } from '@libsql/client';
    
    const client = createClient({ url: process.env.DATABASE_URL, authToken: process.env.DATABASE_AUTH_TOKEN });
    const db = drizzle(client);
    
    const result = await db.execute('select 1');

better-sqlite3[](#better-sqlite3)
---------------------------------

#### Step 1 - Install packages[](#step-1---install-packages-1)

npm

yarn

pnpm

bun

    npm i drizzle-orm better-sqlite3
    npm i -D drizzle-kit @types/better-sqlite3

    yarn add drizzle-orm better-sqlite3
    yarn add -D drizzle-kit @types/better-sqlite3

    pnpm add drizzle-orm better-sqlite3
    pnpm add -D drizzle-kit @types/better-sqlite3

    bun add drizzle-orm better-sqlite3
    bun add -D drizzle-kit @types/better-sqlite3

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

better-sqlite3

better-sqlite3 with config

    import { drizzle } from 'drizzle-orm/better-sqlite3';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.execute('select 1');

    import { drizzle } from 'drizzle-orm/better-sqlite3';
    
    // You can specify any property from the better-sqlite3 connection options
    const db =  drizzle({ connection: { source: process.env.DATABASE_URL }});
    
    const result = await db.execute('select 1');

If you need to provide your existing driver:

    import { drizzle } from 'drizzle-orm/better-sqlite3';
    import Database from 'better-sqlite3';
    
    const sqlite = new Database('sqlite.db');
    const db = drizzle({ client: sqlite });
    
    const result = await db.execute('select 1');

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> SingleStore
======================

To use Drizzle with a SingleStore database, you should use the `mysql2` driver

Drizzle ORM natively supports `mysql2` with `drizzle-orm/singlestore` package.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm mysql2
    npm i -D drizzle-kit

    yarn add drizzle-orm mysql2
    yarn add -D drizzle-kit

    pnpm add drizzle-orm mysql2
    pnpm add -D drizzle-kit

    bun add drizzle-orm mysql2
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

mysql2

mysql with config

    import { drizzle } from "drizzle-orm/singlestore";
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const response = await db.select().from(...)

    import { drizzle } from "drizzle-orm/singlestore";
    
    // You can specify any property from the mysql2 connection options
    const db = drizzle({ connection:{ uri: process.env.DATABASE_URL }});
    
    const response = await db.select().from(...)

If you need to provide your existing driver:

Client connection

Pool connection

    import { drizzle } from "drizzle-orm/singlestore";
    import mysql from "mysql2/promise";
    
    const connection = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "database",
      ...
    });
    
    const db = drizzle({ client: connection });

    import { drizzle } from "drizzle-orm/singlestore";
    import mysql from "mysql2/promise";
    
    const poolConnection = mysql.createPool({
      host: "host",
      user: "user",
      database: "database",
      ...
    });
    
    const db = drizzle({ client: poolConnection });

IMPORTANT

For the built in `migrate` function with DDL migrations we and drivers strongly encourage you to use single `client` connection.

For querying purposes feel free to use either `client` or `pool` based on your business demands.

#### Limitations[](#limitations)

Currently, the SingleStore dialect has a set of limitations and features that do not work on the SingleStore database side:

*   SingleStore’s serial column type only ensures the uniqueness of column values.
*   `ORDER BY` and `LIMIT` cannot be chained together.
*   Foreign keys are not supported (check).
*   `INTERSECT ALL` and `EXCEPT ALL` operations are not supported by SingleStore.
*   Nested transactions are not supported by [SingleStore](https://docs.singlestore.com/cloud/reference/sql-reference/procedural-sql-reference/transactions-in-stored-procedures/).
*   SingleStore [only supports](https://docs.singlestore.com/cloud/getting-started-with-singlestore-helios/about-singlestore-helios/singlestore-helios-faqs/durability/) one `isolationLevel`.
*   The FSP option in `DATE`, `TIMESTAMP`, and `DATETIME` is not supported.
*   The relational API is not supported and will be implemented once the SingleStore team develops all the necessary APIs for it.
*   There may be more limitations because SingleStore is not 100% compatible with MySQL.

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Neon Postgres
========================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Neon serverless database - [website](https://neon.tech)
*   Neon serverless driver - [docs](https://neon.tech/docs/serverless/serverless-driver) & [GitHub](https://github.com/neondatabase/serverless)
*   Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

Drizzle has native support for Neon connections with the `neon-http` and `neon-websockets` drivers. These use the **neon-serverless** driver under the hood.

With the `neon-http` and `neon-websockets` drivers, you can access a Neon database from serverless environments over HTTP or WebSockets instead of TCP.  
Querying over HTTP is faster for single, non-interactive transactions.

If you need session or interactive transaction support, or a fully compatible drop-in replacement for the `pg` driver, you can use the WebSocket-based `neon-serverless` driver.  
You can connect to a Neon database directly using [Postgres](/docs/get-started/postgresql-new)

For an example of using Drizzle ORM with the Neon Serverless driver in a Cloudflare Worker, **[see here.](http://driz.link/neon-cf-ex)**  
To use Neon from a serverful environment, you can use the PostgresJS driver, as described in Neon’s **[official Node.js docs](https://neon.tech/docs/guides/node)** — see **[docs](#postgresjs)**.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @neondatabase/serverless
    npm i -D drizzle-kit

    yarn add drizzle-orm @neondatabase/serverless
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @neondatabase/serverless
    pnpm add -D drizzle-kit

    bun add drizzle-orm @neondatabase/serverless
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

Neon HTTP

Neon Websockets

node-postgres

postgres.js

    import { drizzle } from 'drizzle-orm/neon-http';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.execute('select 1');

    import { drizzle } from 'drizzle-orm/neon-serverless';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.execute('select 1');

    // For Node.js - make sure to install the 'ws' and 'bufferutil' packages
    import { drizzle } from 'drizzle-orm/neon-serverless';
    import ws from 'ws';
    
    const db = drizzle({
      connection: process.env.DATABASE_URL,
      ws: ws,
    });
    
    const result = await db.execute('select 1');

IMPORTANT

Additional configuration is required to use WebSockets in environments where the `WebSocket` global is not defined, such as Node.js. Add the `ws` and `bufferutil` packages to your project’s dependencies, and set `ws` in the Drizzle config.

    // Make sure to install the 'pg' package 
    import { drizzle } from 'drizzle-orm/node-postgres';
    
    const db = drizzle(process.env.DATABASE_URL);
     
    const result = await db.execute('select 1');

    // Make sure to install the 'postgres' package
    import { drizzle } from 'drizzle-orm/postgres-js';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.execute('select 1');

If you need to provide your existing drivers:

Neon HTTP

Neon Websockets

node-postgres

postgres.js

    import { neon } from '@neondatabase/serverless';
    import { drizzle } from 'drizzle-orm/neon-http';
    
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle({ client: sql });
    
    const result = await db.execute('select 1');

    import { Pool } from '@neondatabase/serverless';
    import { drizzle } from 'drizzle-orm/neon-serverless';
    
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool })
    
    const result = await db.execute('select 1');

    // For Node.js - make sure to install the 'ws' and 'bufferutil' packages
    import { Pool, neonConfig } from '@neondatabase/serverless';
    import { drizzle } from 'drizzle-orm/neon-serverless';
    
    neonConfig.webSocketConstructor = ws;
    
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool })
    
    const result = await db.execute('select 1');

IMPORTANT

Additional configuration is required to use WebSockets in environments where the `WebSocket` global is not defined, such as Node.js. Add the `ws` and `bufferutil` packages to your project’s dependencies, and set `ws` in the Drizzle config.

    // Make sure to install the 'pg' package 
    import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
    import { drizzle } from "drizzle-orm/node-postgres";
    import { Pool } from "pg";
    
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });
     
    const result = await db.execute('select 1');

    // Make sure to install the 'postgres' package
    import { drizzle } from 'drizzle-orm/postgres-js';
    import postgres from 'postgres';
    
    const queryClient = postgres(process.env.DATABASE_URL);
    const db = drizzle({ client: queryClient });
    
    const result = await db.execute('select 1');

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Vercel Postgres
==========================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Vercel Postgres database - [website](https://vercel.com/docs/storage/vercel-postgres)
*   Vercel Postgres driver - [docs](https://vercel.com/docs/storage/vercel-postgres/sdk) & [GitHub](https://github.com/vercel/storage/tree/main/packages/postgres)
*   Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

According to their **[official website](https://vercel.com/docs/storage/vercel-postgres)**, Vercel Postgres is a serverless SQL database designed to integrate with Vercel Functions.

Drizzle ORM natively supports both **[@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres)** serverless driver with `drizzle-orm/vercel-postgres` package and **[`postgres`](#postgresjs)** or **[`pg`](#node-postgres)** drivers to access Vercel Postgres through `postgesql://`

Check out the official **[Vercel Postgres + Drizzle](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#drizzle)** docs.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @vercel/postgres
    npm i -D drizzle-kit

    yarn add drizzle-orm @vercel/postgres
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @vercel/postgres
    pnpm add -D drizzle-kit

    bun add drizzle-orm @vercel/postgres
    bun add -D drizzle-kit

#### Step 2 - Prepare Vercel Postgres[](#step-2---prepare-vercel-postgres)

Setup a project according to the **[official docs.](https://vercel.com/docs/storage/vercel-postgres/quickstart)**

#### Step 3 - Initialize the driver and make a query[](#step-3---initialize-the-driver-and-make-a-query)

    import { drizzle } from 'drizzle-orm/vercel-postgres';
    
    const db = drizzle();
    
    const result = await db.execute('select 1');

If you need to provide your existing driver:

    import { sql } from '@vercel/postgres';
    import { drizzle } from 'drizzle-orm/vercel-postgres';
    
    const db = drizzle({ client: sql })
    
    const result = await db.execute('select 1');

With **[@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres)** severless package you can access Vercel Postgres from either serverful or serverless environments with no TCP available, like Cloudflare Workers, through websockets.

If you’re about to use Vercel Postgres from a _serverfull_ environment, you can do it either with `@vercel/postgres` or directly access the DB through `postgesql://` with either **[`postgres`](#postgresjs)** or **[`pg`](#node-postgres)**.

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Supabase
===================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

According to the **[official website](https://supabase.com/docs)**, Supabase is an open source Firebase alternative for building secure and performant Postgres backends with minimal configuration.

Checkout official **[Supabase + Drizzle](https://supabase.com/docs/guides/database/connecting-to-postgres#connecting-with-drizzle)** docs.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm postgres
    npm i -D drizzle-kit

    yarn add drizzle-orm postgres
    yarn add -D drizzle-kit

    pnpm add drizzle-orm postgres
    pnpm add -D drizzle-kit

    bun add drizzle-orm postgres
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

index.ts

    import { drizzle } from 'drizzle-orm/postgres-js'
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const allUsers = await db.select().from(...);

If you need to provide your existing driver:

index.ts

    import { drizzle } from 'drizzle-orm/postgres-js'
    import postgres from 'postgres'
    
    const client = postgres(process.env.DATABASE_URL)
    const db = drizzle({ client });
    
    const allUsers = await db.select().from(...);

If you decide to use connection pooling via Supabase (described [here](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler)), and have “Transaction” pool mode enabled, then ensure to turn off prepare, as prepared statements are not supported.

index.ts

    import { drizzle } from 'drizzle-orm/postgres-js'
    import postgres from 'postgres'
    
    // Disable prefetch as it is not supported for "Transaction" pool mode 
    const client = postgres(process.env.DATABASE_URL, { prepare: false })
    const db = drizzle({ client });
    
    const allUsers = await db.select().from(...);

Connect to your database using the Connection Pooler for **serverless environments**, and the Direct Connection for **long-running servers**.

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Xata
===============

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Xata database - [website](https://xata.io/docs)
*   Xata driver - [docs](https://xata.io/docs/sdk/typescript/overview) & [GitHub](https://github.com/xataio/client-ts)
*   Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

According their **[official website](https://xata.io)**, Xata is a Postgres data platform with a focus on reliability, scalability, and developer experience. The Xata Postgres service is currently in beta, please see the [Xata docs](https://xata.io/docs/postgres) on how to enable it in your account.

Drizzle ORM natively supports both the `xata` driver with `drizzle-orm/xata` package and the **[`postgres`](#postgresjs)** or **[`pg`](#node-postgres)** drivers for accessing a Xata Postgres database.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @xata.io/client
    npm i -D drizzle-kit

    yarn add drizzle-orm @xata.io/client
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @xata.io/client
    pnpm add -D drizzle-kit

    bun add drizzle-orm @xata.io/client
    bun add -D drizzle-kit

You can use Drizzle with Xata with a HTTP client or a TCP client. The HTTP client doesn’t create a persistent connection to the Xata server, while the TCP client does and can be used for better performance with a higher number of requests. The HTTP client is usually recommended from serverless environments like Cloudflare Workers or Vercel Edge Functions. The TCP client is typically used from long-running servers like Express.js or Fastify.

The following example use the Xata generated client, which you obtain by running the [xata init](https://xata.io/docs/getting-started/installation) CLI command.

HTTP

TCP

TCP (pool)

    import { drizzle } from 'drizzle-orm/xata-http';
    import { getXataClient } from './xata'; // Generated client
    
    const xata = getXataClient();
    const db = drizzle(xata);
    
    const result = await db.select().from(...);

    import { drizzle } from 'drizzle-orm/node-postgres';
    import { getXataClient } from './xata'; // Generated client
    import { Client } from 'pg';
    
    const xata = getXataClient();
    const client = new Client({ connectionString: xata.sql.connectionString });
    const db = drizzle(client);

    import { drizzle } from 'drizzle-orm/node-postgres';
    import { getXataClient } from './xata'; // Generated client
    import { Pool } from 'pg';
    
    const xata = getXataClient();
    const pool = new Pool({ connectionString: xata.sql.connectionString, max: 10 });
    const db = drizzle(pool);

If you prefer to not use the generated Xata client, it is also possible to use Xata with the **[`postgres`](#postgresjs)** or **[`pg`](#node-postgres)** drivers, in this case you can copy the connection string from the Settings page of your Xata database. For more information, please check our [PostgreSQL connections section](/docs/get-started-postgresql)

For more details about using Drizzle with Xata, see the official [Xata docs](https://xata.io/docs/integrations/drizzle).

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> PGlite
=================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   ElectricSQL - [website](https://electric-sql.com/)
*   PgLite driver - [docs](https://pglite.dev/) & [GitHub](https://github.com/electric-sql/pglite)

According to the **[official repo](https://github.com/electric-sql/pglite)**, PGlite is a WASM Postgres build packaged into a TypeScript client library that enables you to run Postgres in the browser, Node.js and Bun, with no need to install any other dependencies. It is only 2.6mb gzipped.

It can be used as an ephemeral in-memory database, or with persistence either to the file system (Node/Bun) or indexedDB (Browser).

Unlike previous “Postgres in the browser” projects, PGlite does not use a Linux virtual machine - it is simply Postgres in WASM.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @electric-sql/pglite
    npm i -D drizzle-kit

    yarn add drizzle-orm @electric-sql/pglite
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @electric-sql/pglite
    pnpm add -D drizzle-kit

    bun add drizzle-orm @electric-sql/pglite
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

In-Memory

In directory

With extra config options

    import { drizzle } from 'drizzle-orm/pglite';
    
    const db = drizzle();
    
    await db.select().from(...);

    import { drizzle } from 'drizzle-orm/pglite';
    
    const db = drizzle('path-to-dir');
    
    await db.select().from(...);

    import { drizzle } from 'drizzle-orm/pglite';
    
    // connection is a native PGLite configuration
    const db = drizzle({ connection: { dataDir: 'path-to-dir' }});
    
    await db.select().from(...);

If you need to provide your existing driver:

    import { PGlite } from '@electric-sql/pglite';
    import { drizzle } from 'drizzle-orm/pglite';
    
    // In-memory Postgres
    const client = new PGlite();
    const db = drizzle({ client });
    
    await db.select().from(users);

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Nile
===============

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Nile Database - [website](https://thenile.dev)
*   Drizzle PostgreSQL drivers - [docs](/docs/get-started-postgresql)

According to the **[official website](https://thenile.dev)**, Nile is PostgreSQL re-engineered for multi-tenant apps.

Checkout official **[Nile + Drizzle Quickstart](https://www.thenile.dev/docs/getting-started/languages/drizzle)** and **[Migration](https://www.thenile.dev/docs/getting-started/schema_migrations/drizzle)** docs.

You can use Nile with any of Drizzle’s Postgres drivers, we’ll be showing the use of `node-postgres` below.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm postgres
    npm i -D drizzle-kit

    yarn add drizzle-orm postgres
    yarn add -D drizzle-kit

    pnpm add drizzle-orm postgres
    pnpm add -D drizzle-kit

    bun add drizzle-orm postgres
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

index.ts

    // Make sure to install the 'pg' package
    import { drizzle } from 'drizzle-orm/node-postgres'
    
    const db = drizzle(process.env.NILEDB_URL);
    
    const response = await db.select().from(...);

If you need to provide your existing driver:

index.ts

    // Make sure to install the 'pg' package
    import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
    import { drizzle } from "drizzle-orm/node-postgres";
    import { Pool } from "pg";
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });
    
    const response = await db.select().from(...);

#### Connecting to a virtual tenant database[](#connecting-to-a-virtual-tenant-database)

Nile provides virtual tenant databases, when you set the tenant context, Nile will direct your queries to the virtual database for this particular tenant and all queries will apply to that tenant (i.e. `select * from table` will result records only for this tenant).

In order to set the tenant context, we wrap each query in a transaction that sets the appropriate tenant context before running the transaction.

The tenant ID can simply be passed into the wrapper as an argument:

index.ts

    import { drizzle } from 'drizzle-orm/node-postgres';
    import { todosTable, tenants } from "./db/schema";
    import { sql } from 'drizzle-orm';
    import 'dotenv/config';
    
    const db = drizzle(process.env.NILEDB_URL);
    
    function tenantDB<T>(tenantId: string, cb: (tx: any) => T | Promise<T>): Promise<T> {
      return db.transaction(async (tx) => {
        if (tenantId) {
          await tx.execute(sql`set local nile.tenant_id = '${sql.raw(tenantId)}'`);
        }
    
        return cb(tx);
      }) as Promise<T>;
    }
    
    // In a webapp, you'll likely get it from the request path parameters or headers
    const tenantId = '01943e56-16df-754f-a7b6-6234c368b400'
    
    const response = await tenantDB(tenantId, async (tx) => {
        // No need for a "where" clause here
        return await tx.select().from(todosTable);
    });
    
    console.log(response);

If you are using a web framwork that supports it, you can set up [AsyncLocalStorage](https://nodejs.org/api/async_context.html) and use middleware to populate it with the tenant ID. In this case, your Drizzle client setup will be:

    import { drizzle } from 'drizzle-orm/node-postgres';
    import dotenv from "dotenv/config";
    import { sql } from "drizzle-orm";
    import { AsyncLocalStorage } from "async_hooks";
    
    export const db = drizzle(process.env.NILEDB_URL);
    export const tenantContext = new AsyncLocalStorage<string | undefined>();
    
    export function tenantDB<T>(cb: (tx: any) => T | Promise<T>): Promise<T> {
      return db.transaction(async (tx) => {
        const tenantId = tenantContext.getStore();
        console.log("executing query with tenant: " + tenantId);
        // if there's a tenant ID, set it in the transaction context
        if (tenantId) {
          await tx.execute(sql`set local nile.tenant_id = '${sql.raw(tenantId)}'`);
        }
    
        return cb(tx);
      }) as Promise<T>;
    }

And then, configure a middleware to populate the the AsyncLocalStorage and use `tenantDB` method when handling requests:

app.ts

    // Middleware to set tenant context
    app.use("/api/tenants/:tenantId/*", async (c, next) => {
      const tenantId = c.req.param("tenantId");
      console.log("setting context to tenant: " + tenantId);
      return tenantContext.run(tenantId, () => next());
    });
    
    // Route handler
    app.get("/api/tenants/:tenantId/todos", async (c) => {
        const todos = await tenantDB(c, async (tx) => {
          return await tx
            .select({
              id: todoSchema.id,
              tenant_id: todoSchema.tenantId,
              title: todoSchema.title,
              estimate: todoSchema.estimate,
            })
            .from(todoSchema);
        });
        return c.json(todos);
    });

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Bun SQL
==================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Bun - [website](https://bun.sh/docs)
*   Bun SQL - native bindings for working with PostgreSQL databases - [read here](https://bun.sh/docs/api/sql)

According to the **[official website](https://bun.sh/)**, Bun is a fast all-in-one JavaScript runtime.

Drizzle ORM natively supports **[`bun sql`](https://bun.sh/docs/api/sql)** module and it’s crazy fast 🚀

WARNING

In version `1.2.0`, Bun has issues with executing concurrent statements, which may lead to errors if you try to run several queries simultaneously. We’ve created a [github issue](https://github.com/oven-sh/bun/issues/16774) that you can track. Once it’s fixed, you should no longer encounter any such errors on Bun’s SQL side

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm
    npm i -D drizzle-kit

    yarn add drizzle-orm
    yarn add -D drizzle-kit

    pnpm add drizzle-orm
    pnpm add -D drizzle-kit

    bun add drizzle-orm
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

    import 'dotenv/config';
    import { drizzle } from 'drizzle-orm/bun-sql';
    
    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.select().from(...);

If you need to provide your existing driver:

    import 'dotenv/config';
    import { drizzle } from 'drizzle-orm/bun-sql';
    import { SQL } from 'bun';
    
    const client = new SQL(process.env.DATABASE_URL!);
    const db = drizzle({ client });

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> PlanetScale
======================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   PlanetScale database - [website](https://planetscale.com/docs)
*   PlanetScale http driver - [GitHub](https://github.com/planetscale/database-js)
*   Drizzle MySQL drivers - [docs](/docs/get-started-mysql)

According to the **[official website](https://planetscale.com/)**, PlanetScale is the world’s most advanced serverless MySQL platform.

With Drizzle ORM you can access PlanetScale over http through their official **[`database-js`](https://github.com/planetscale/database-js)** driver from serverless and serverfull environments with our `drizzle-orm/planetscale-serverless` package.

You can also access PlanetScale through TCP with `mysql2` driver — **[see here.](/docs/get-started-mysql)**

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @planetscale/database
    npm i -D drizzle-kit

    yarn add drizzle-orm @planetscale/database
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @planetscale/database
    pnpm add -D drizzle-kit

    bun add drizzle-orm @planetscale/database
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

    import { drizzle } from "drizzle-orm/planetscale-serverless";
    
    const db = drizzle({ connection: {
      host: process.env["DATABASE_HOST"],
      username: process.env["DATABASE_USERNAME"],
      password: process.env["DATABASE_PASSWORD"],
    }});
    
    const response = await db.select().from(...)

If you need to provide your existing driver

    import { drizzle } from "drizzle-orm/planetscale-serverless";
    import { Client } from "@planetscale/database";
    
    const client = new Client({
      host: process.env["DATABASE_HOST"],
      username: process.env["DATABASE_USERNAME"],
      password: process.env["DATABASE_PASSWORD"],
    });
    
    const db = drizzle({ client });

Make sure to checkout the PlanetScale official **[MySQL courses](https://planetscale.com/courses/mysql-for-developers/introduction/course-introduction)**, we think they’re outstanding 🙌

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> TiDB Serverless
==========================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   TiDB database - [website](https://docs.pingcap.com/)
*   TiDB HTTP Driver - [website](https://docs.pingcap.com/tidbcloud/serverless-driver)
*   Drizzle MySQL drivers - [docs](/docs/get-started-mysql)

According to the **[official website](https://www.pingcap.com/tidb-serverless/)**, TiDB Serverless is a fully-managed, autonomous DBaaS with split-second cluster provisioning and consumption-based pricing.

TiDB Serverless is compatible with MySQL, so you can use [MySQL connection guide](/docs/get-started-mysql) to connect to it.

TiDB Serverless provides an [HTTP driver](https://docs.pingcap.com/tidbcloud/serverless-driver) for edge environments. It is natively supported by Drizzle ORM via `drizzle-orm/tidb-serverless` package.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @tidbcloud/serverless
    npm i -D drizzle-kit

    yarn add drizzle-orm @tidbcloud/serverless
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @tidbcloud/serverless
    pnpm add -D drizzle-kit

    bun add drizzle-orm @tidbcloud/serverless
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

index.ts

    import { drizzle } from 'drizzle-orm/tidb-serverless';
    
    const db = drizzle({ connection: { url: process.env.TIDB_URL }});
    
    const response = await db.select().from(...)

If you need to provide your existing driver:

    import { connect } from '@tidbcloud/serverless';
    import { drizzle } from 'drizzle-orm/tidb-serverless';
    
    const client = connect({ url: process.env.TIDB_URL });
    const db = drizzle({ client });

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Turso
================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Turso Database - [website](https://docs.turso.tech/introduction)
*   LibSQL driver - [website](https://docs.turso.tech/sdk/ts/reference) & [GitHub](https://github.com/tursodatabase/libsql-client-ts)

According to the **[official website](https://turso.tech/drizzle)**, Turso is a **[libSQL](https://github.com/libsql/libsql)** powered edge SQLite database as a service.

Drizzle ORM natively supports libSQL driver, we embrace SQL dialects and dialect specific drivers and syntax and mirror most popular SQLite-like `all`, `get`, `values` and `run` query methods syntax.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @libsql/client
    npm i -D drizzle-kit

    yarn add drizzle-orm @libsql/client
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @libsql/client
    pnpm add -D drizzle-kit

    bun add drizzle-orm @libsql/client
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver[](#step-2---initialize-the-driver)

Drizzle has native support for all `@libsql/client` driver variations:

`@libsql/client`

defaults to `node` import, automatically changes to `web` if `target` or `platform` is set for bundler, e.g. `esbuild --platform=browser`

`@libsql/client/node`

`node` compatible module, supports `:memory:`, `file`, `wss`, `http` and `turso` conneciton protocols

`@libsql/client/web`

module for fullstack web frameworks like `next`, `nuxt`, `astro`, etc.

`@libsql/client/http`

module for `http` and `https` connection protocols

`@libsql/client/ws`

module for `ws` and `wss` conneciton protocols

`@libsql/client/sqlite3`

module for `:memory:` and `file` conneciton protocols

`@libsql/client-wasm`

Separate experimental package for WASM

  

default

node

web

http

web sockets

wasm

    import { drizzle } from 'drizzle-orm/libsql';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/node';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/web';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/http';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/ws';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

    import { drizzle } from 'drizzle-orm/libsql/wasm';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});

If you need to provide your existing driver:

default

web

    import { drizzle } from 'drizzle-orm/libsql';
    import { createClient } from '@libsql/client';
    
    const client = createClient({ 
      url: process.env.DATABASE_URL,
      authToken: process.env.DATABASE_AUTH_TOKEN
    });
    
    const db = drizzle({ client });
    
    const result = await db.select().from(users).all()

    import { drizzle } from 'drizzle-orm/libsql/web';
    import { createClient } from '@libsql/client/web';
    
    const client = createClient({ 
      url: process.env.DATABASE_URL,
      authToken: process.env.DATABASE_AUTH_TOKEN
    });
    
    const db = drizzle({ client });
    
    const result = await db.select().from(users).all()

#### Step 3 - make a query[](#step-3---make-a-query)

    import { drizzle } from 'drizzle-orm/libsql';
    import * as s from 'drizzle-orm/sqlite-core';
    
    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL, 
      authToken: process.env.DATABASE_AUTH_TOKEN 
    }});
    
    const users = s.sqliteTable("users", {
      id: s.integer(),
      name: s.text(),
    })
    
    const result = await db.select().from(users);

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Cloudflare D1
========================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   D1 Database - [website](https://developers.cloudflare.com/d1/)
*   D1 driver - [website](https://developers.cloudflare.com/d1/build-with-d1/d1-client-api/)

According to the **[official website](https://developers.cloudflare.com/d1/)**, D1 is Cloudflare’s first queryable relational database.

Drizzle ORM fully supports the Cloudflare D1 database and Cloudflare Workers environment. We embrace SQL dialects and dialect specific drivers and syntax and mirror most popular SQLite-like `all`, `get`, `values` and `run` query methods syntax.

To setup project for your Cloudflare D1 please refer to **[official docs.](https://developers.cloudflare.com/d1/)**

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm
    npm i -D drizzle-kit

    yarn add drizzle-orm
    yarn add -D drizzle-kit

    pnpm add drizzle-orm
    pnpm add -D drizzle-kit

    bun add drizzle-orm
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

You would need to have either a `wrangler.json` or a `wrangler.toml` file for D1 database and will look something like this:

wrangler.json

wrangler.toml

    {
        "name": "YOUR_PROJECT_NAME",
        "main": "src/index.ts",
        "compatibility_date": "2024-09-26",
        "compatibility_flags": [
            "nodejs_compat"
        ],
        "d1_databases": [
            {
                "binding": "BINDING_NAME",
                "database_name": "YOUR_DB_NAME",
                "database_id": "YOUR_DB_ID",
                "migrations_dir": "drizzle/migrations"
            }
        ]
    }

    name = "YOUR_PROJECT_NAME"
    main = "src/index.ts"
    compatibility_date = "2022-11-07"
    node_compat = true
    
    [[ d1_databases ]]
    binding = "BINDING_NAME"
    database_name = "YOUR_DB_NAME"
    database_id = "YOUR_DB_ID"
    migrations_dir = "drizzle/migrations"

Make your first D1 query:

    import { drizzle } from 'drizzle-orm/d1';
    
    export interface Env {
      <BINDING_NAME>: D1Database;
    }
    
    export default {
      async fetch(request: Request, env: Env) {
        const db = drizzle(env.<BINDING_NAME>);
        const result = await db.select().from(users).all()
        return Response.json(result);
      },
    };

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Bun SQLite
=====================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   Bun - [website](https://bun.sh/docs)
*   Bun SQLite driver - [docs](https://bun.sh/docs/api/sqlite)

According to the **[official website](https://bun.sh/)**, Bun is a fast all-in-one JavaScript runtime.

Drizzle ORM natively supports **[`bun:sqlite`](https://bun.sh/docs/api/sqlite)** module and it’s crazy fast 🚀

We embraces SQL dialects and dialect specific drivers and syntax and unlike any other ORM, for synchronous drivers like `bun:sqlite` we have both **async** and **sync** APIs and we mirror most popular SQLite-like `all`, `get`, `values` and `run` query methods syntax.

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm
    npm i -D drizzle-kit

    yarn add drizzle-orm
    yarn add -D drizzle-kit

    pnpm add drizzle-orm
    pnpm add -D drizzle-kit

    bun add drizzle-orm
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

    import { drizzle } from 'drizzle-orm/bun-sqlite';
    
    const db = drizzle();
    
    const result = await db.select().from(...);

If you need to provide your existing driver:

    import { drizzle } from 'drizzle-orm/bun-sqlite';
    import { Database } from 'bun:sqlite';
    
    const sqlite = new Database('sqlite.db');
    const db = drizzle({ client: sqlite });
    
    const result = await db.select().from(...);

If you want to use **sync** APIs:

    import { drizzle } from 'drizzle-orm/bun-sqlite';
    import { Database } from 'bun:sqlite';
    
    const sqlite = new Database('sqlite.db');
    const db = drizzle({ client: sqlite });
    
    const result = db.select().from(users).all();
    const result = db.select().from(users).get();
    const result = db.select().from(users).values();
    const result = db.select().from(users).run();

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Cloudflare Durable Objects SQLite
============================================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   **Cloudflare SQLite Durable Objects** - SQLite database embedded within a Durable Object - [read here](https://developers.cloudflare.com/durable-objects/best-practices/access-durable-objects-storage/#sqlite-storage-backend)

Drizzle ORM fully supports the Cloudflare Durable Objects database and Cloudflare Workers environment. We embrace SQL dialects and dialect specific drivers and syntax and mirror most popular SQLite-like `all`, `get`, `values` and `run` query methods syntax.

To setup project for your Cloudflare Durable Objects please refer to **[official docs.](https://developers.cloudflare.com/durable-objects)**

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm
    npm i -D drizzle-kit

    yarn add drizzle-orm
    yarn add -D drizzle-kit

    pnpm add drizzle-orm
    pnpm add -D drizzle-kit

    bun add drizzle-orm
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

You would need to have a `wrangler.toml` file for Durable Objects database and will look something like this:

    #:schema node_modules/wrangler/config-schema.json
    name = "sqlite-durable-objects"
    main = "src/index.ts"
    compatibility_date = "2024-11-12"
    compatibility_flags = [ "nodejs_compat" ]
    
    # Bind a Durable Object. Durable objects are a scale-to-zero compute primitive based on the actor model.
    # Durable Objects can live for as long as needed. Use these when you need a long-running "server", such as in realtime apps.
    # Docs: https://developers.cloudflare.com/workers/wrangler/configuration/#durable-objects
    [[durable_objects.bindings]]
    name = "MY_DURABLE_OBJECT"
    class_name = "MyDurableObject"
    
    # Durable Object migrations.
    # Docs: https://developers.cloudflare.com/workers/wrangler/configuration/#migrations
    [[migrations]]
    tag = "v1"
    new_sqlite_classes = ["MyDurableObject"]
    
    # We need rules so we can import migrations in the next steps
    [[rules]] 
    type = "Text"
    globs = ["**/*.sql"]
    fallthrough = true

Make your first Durable Objects SQLite query:

    /// <reference types="@cloudflare/workers-types" />
    import { drizzle, DrizzleSqliteDODatabase } from 'drizzle-orm/durable-sqlite';
    import { DurableObject } from 'cloudflare:workers'
    import { migrate } from 'drizzle-orm/durable-sqlite/migrator';
    import migrations from '../drizzle/migrations';
    import { usersTable } from './db/schema';
    
    export class MyDurableObject extends DurableObject {
    	storage: DurableObjectStorage;
    	db: DrizzleSqliteDODatabase<any>;
    
    	constructor(ctx: DurableObjectState, env: Env) {
    		super(ctx, env);
    		this.storage = ctx.storage;
    		this.db = drizzle(this.storage, { logger: false });
    
    		// Make sure all migrations complete before accepting queries.
    		// Otherwise you will need to run `this.migrate()` in any function
    		// that accesses the Drizzle database `this.db`.
    		ctx.blockConcurrencyWhile(async () => {
    			await this._migrate();
    		});
    	}
    
    	async insertAndList(user: typeof usersTable.$inferInsert) {
    		await this.insert(user);
    		return this.select();
    	}
    
    	async insert(user: typeof usersTable.$inferInsert) {
    		await this.db.insert(usersTable).values(user);
    	}
    
    	async select() {
    		return this.db.select().from(usersTable);
    	}
    
    	async _migrate() {
    		migrate(this.db, migrations);
    	}
    }
    
    export default {
    	/**
    	 * This is the standard fetch handler for a Cloudflare Worker
    	 *
    	 * @param request - The request submitted to the Worker from the client
    	 * @param env - The interface to reference bindings declared in wrangler.toml
    	 * @param ctx - The execution context of the Worker
    	 * @returns The response to be sent back to the client
    	 */
    	async fetch(request: Request, env: Env): Promise<Response> {
    		const id: DurableObjectId = env.MY_DURABLE_OBJECT.idFromName('durable-object');
    		const stub = env.MY_DURABLE_OBJECT.get(id);
    
    		// Option A - Maximum performance.
    		// Prefer to bundle all the database interaction within a single Durable Object call
    		// for maximum performance, since database access is fast within a DO.
    		const usersAll = await stub.insertAndList({
    			name: 'John',
    			age: 30,
    			email: '[email protected]',
    		});
    		console.log('New user created. Getting all users from the database: ', users);
    
    		// Option B - Slow but maybe useful sometimes for debugging.
    		// You can also directly call individual Drizzle queries if they are exposed
    		// but keep in mind every query is a round-trip to the Durable Object instance.
    		await stub.insert({
    			name: 'John',
    			age: 30,
    			email: '[email protected]',
    		});
    		console.log('New user created!');
    	
    		const users = await stub.select();
    		console.log('Getting all users from the database: ', users);
    
    		return Response.json(users);
    	}
    }

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> Expo SQLite
======================

According to the **[official website](https://expo.dev/)**, Expo is an ecosystem of tools to develop, build and ship applications on React Native. It’s powered by Hermes JavaScript runtime and Metro bundler, Drizzle Expo driver is built to natively support both.

Drizzle ORM has the best in class toolkit for Expo SQLite:

*   Native ORM driver for Expo SQLite ✅
*   [Drizzle Kit](/docs/kit-overview) support for migration generation and bundling in application ✅
*   [Drizzle Studio](https://github.com/drizzle-team/drizzle-studio-expo) dev tools plugin to browse on device database ✅
*   Live Queries ✅

npm

yarn

pnpm

bun

    npm i drizzle-orm expo-sqlite@next
    npm i -D drizzle-kit

    yarn add drizzle-orm expo-sqlite@next
    yarn add -D drizzle-kit

    pnpm add drizzle-orm expo-sqlite@next
    pnpm add -D drizzle-kit

    bun add drizzle-orm expo-sqlite@next
    bun add -D drizzle-kit

    import { drizzle } from "drizzle-orm/expo-sqlite";
    import { openDatabaseSync } from "expo-sqlite/next";
    
    const expo = openDatabaseSync("db.db");
    const db = drizzle(expo);
    
    await db.select().from(users);

#### Live Queries[](#live-queries)

With `useLiveQuery` hook you can make any Drizzle query reactive:

    import { useLiveQuery, drizzle } from 'drizzle-orm/expo-sqlite';
    import { openDatabaseSync } from 'expo-sqlite/next';
    import { Text } from 'react-native';
    import * as schema from './schema';
    
    const expo = openDatabaseSync('db.db', { enableChangeListener: true }); // <-- enable change listeners
    const db = drizzle(expo);
    
    const App = () => {
      // Re-renders automatically when data changes
      const { data } = useLiveQuery(db.select().from(schema.users));
      return <Text>{JSON.stringify(data)}</Text>;
    };
    
    export default App;

#### Expo SQLite migrations with Drizzle Kit[](#expo-sqlite-migrations-with-drizzle-kit)

You can use Drizzle Kit for SQL migration generation.  
Please make sure to check how [Drizzle migrations](/docs/kit-overview) work before proceeding.  
Expo / React Native requires you to have SQL migrations bundled into the app and we’ve got you covered.

#### Install babel plugin[](#install-babel-plugin)

It’s necessary to bundle SQL migration files as string directly to your bundle.

    npm install babel-plugin-inline-import

#### Update config files.[](#update-config-files)

You will need to update `babel.config.js`, `metro.config.js` and `drizzle.config.ts` files

babel.config.js

    module.exports = function(api) {
      api.cache(true);
    
      return {
        presets: ['babel-preset-expo'],
        plugins: [["inline-import", { "extensions": [".sql"] }]] // <-- add this
      };
    };

metro.config.js

    const { getDefaultConfig } = require('expo/metro-config');
    
    /** @type {import('expo/metro-config').MetroConfig} */
    const config = getDefaultConfig(__dirname);
    
    config.resolver.sourceExts.push('sql'); // <--- add this
    
    module.exports = config;

Make sure to have `dialect: 'sqlite'` and `driver: 'expo'` in Drizzle Kit config

drizzle.config.ts

    import type { Config } from 'drizzle-kit';
    
    export default {
    	schema: './db/schema.ts',
    	out: './drizzle',
      dialect: 'sqlite',
    	driver: 'expo', // <--- very important
    } satisfies Config;

#### Generate migrations[](#generate-migrations)

After creating SQL schema file and drizzle.config.ts file, you can generate migrations

    npx drizzle-kit generate

#### Add migrations to your app[](#add-migrations-to-your-app)

Now you need to import `migrations.js` file into your Expo/React Native app from `./drizzle` folder. You can run migrations on application startup using our custom `useMigrations` migrations hook on in `useEffect` hook manually as you want.

App.tsx

    import { drizzle } from "drizzle-orm/expo-sqlite";
    import { openDatabaseSync } from "expo-sqlite/next";
    import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
    import migrations from './drizzle/migrations';
    
    const expoDb = openDatabaseSync("db.db");
    
    const db = drizzle(expoDb);
    
    export default function App() {
      const { success, error } = useMigrations(db, migrations);
    
      if (error) {
        return (
          <View>
            <Text>Migration error: {error.message}</Text>
          </View>
        );
      }
    
      if (!success) {
        return (
          <View>
            <Text>Migration is in progress...</Text>
          </View>
        );
      }
    
      return ...your application component;
    }

Drizzle <> OP SQLite
====================

According to the **[official github page](https://github.com/OP-Engineering/op-sqlite)**, OP-SQLite embeds the latest version of SQLite and provides a low-level API to execute SQL queries.

npm

yarn

pnpm

bun

    npm i drizzle-orm @op-engineering/op-sqlite
    npm i -D drizzle-kit

    yarn add drizzle-orm @op-engineering/op-sqlite
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @op-engineering/op-sqlite
    pnpm add -D drizzle-kit

    bun add drizzle-orm @op-engineering/op-sqlite
    bun add -D drizzle-kit

    import { drizzle } from "drizzle-orm/op-sqlite";
    import { open } from '@op-engineering/op-sqlite';
    
    const opsqlite = open({
      name: 'myDB',
    });
    const db = drizzle(opsqlite);
    
    await db.select().from(users);

You can use Drizzle Kit for SQL migration generation.  
Please make sure to check how [Drizzle Kit migrations](/docs/kit-overview) work before proceeding.  
OP SQLite requires you to have SQL migrations bundled into the app and we’ve got you covered.

#### Install babel plugin[](#install-babel-plugin)

It’s necessary to bundle SQL migration files as string directly to your bundle.

    npm install babel-plugin-inline-import

#### Update config files.[](#update-config-files)

You will need to update `babel.config.js`, `metro.config.js` and `drizzle.config.ts` files

babel.config.js

    module.exports = {
      presets: ['module:@react-native/babel-preset'],
      plugins: [
        [
          'inline-import',
          {
            extensions: ['.sql'],
          },
        ],
      ],
    };

metro.config.js

    const { getDefaultConfig } = require('@react-native/metro-config');
    
    const config = getDefaultConfig(__dirname);
    
    config.resolver.sourceExts.push('sql');
    
    module.exports = config;

Make sure to have `dialect: 'sqlite'` and `driver: 'expo'` in Drizzle Kit config

drizzle.config.ts

    import type { Config } from 'drizzle-kit';
    
    export default {
    	schema: './db/schema.ts',
    	out: './drizzle',
      dialect: 'sqlite',
    	driver: 'expo', // <--- very important
    } satisfies Config;

#### Generate migrations[](#generate-migrations)

After creating SQL schema file and drizzle.config.ts file, you can generate migrations

    npx drizzle-kit generate

#### Add migrations to your app[](#add-migrations-to-your-app)

Now you need to import `migrations.js` file into your Expo/React Native app from `./drizzle` folder. You can run migrations on application startup using our custom `useMigrations` migrations hook on in `useEffect` hook manually as you want.

App.tsx

    import { drizzle } from "drizzle-orm/op-sqlite";
    import { open } from '@op-engineering/op-sqlite';
    import { useMigrations } from 'drizzle-orm/op-sqlite/migrator';
    import migrations from './drizzle/migrations';
    
    const opsqliteDb = open({
      name: 'myDB',
    });
    
    const db = drizzle(opsqliteDb);
    
    export default function App() {
      const { success, error } = useMigrations(db, migrations);
    
      if (error) {
        return (
          <View>
            <Text>Migration error: {error.message}</Text>
          </View>
        );
      }
    
      if (!success) {
        return (
          <View>
            <Text>Migration is in progress...</Text>
          </View>
        );
      }
    
      return ...your application component;
    }

Drizzle <> React Native SQLite
==============================

Please use [`Expo SQLite`](#expo-sqlite) to run Drizzle ORM with React Native apps.  
The only [popular library](https://github.com/andpor/react-native-sqlite-storage) we’ve found does not support new Hermes JavaScript runtime, which is a standard out of the box runtime for React Native and Expo now.

Drizzle <> AWS Data API Postgres
================================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle
*   AWS Data API - [website](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html)
*   AWS SDK - [website](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-rds-data/)

#### Step 1 - Install packages[](#step-1---install-packages)

npm

yarn

pnpm

bun

    npm i drizzle-orm @aws-sdk/client-rds-data
    npm i -D drizzle-kit

    yarn add drizzle-orm @aws-sdk/client-rds-data
    yarn add -D drizzle-kit

    pnpm add drizzle-orm @aws-sdk/client-rds-data
    pnpm add -D drizzle-kit

    bun add drizzle-orm @aws-sdk/client-rds-data
    bun add -D drizzle-kit

#### Step 2 - Initialize the driver and make a query[](#step-2---initialize-the-driver-and-make-a-query)

    import { drizzle } from 'drizzle-orm/aws-data-api-pg';
    
    // These three properties are required. You can also specify
    // any property from the RDSDataClient type inside the connection object.
    const db = drizzle({ connection: {
      database: process.env['DATABASE']!,
      secretArn: process.env['SECRET_ARN']!,
      resourceArn: process.env['RESOURCE_ARN']!,
    }});
    
    await db.select().from(...);

If you need to provide your existing driver:

    import { drizzle } from 'drizzle-orm/aws-data-api/pg';
    import { RDSDataClient } from '@aws-sdk/client-rds-data';
    
    const rdsClient = new RDSDataClient({ region: 'us-east-1' });
    
    const db = drizzle(rdsClient, {
      database: process.env['DATABASE']!,
      secretArn: process.env['SECRET_ARN']!,
      resourceArn: process.env['RESOURCE_ARN']!,
    });
    
    await db.select().from(...);

#### What’s next?[](#whats-next)

**Manage schema**

[Drizzle Schema](/docs/sql-schema-declaration) [PostgreSQL data types](/docs/column-types/pg) [Indexes and Constraints](/docs/indexes-constraints) [Database Views](/docs/views) [Database Schemas](/docs/schemas) [Sequences](/docs/sequences) [Extensions](/docs/extensions/pg)

**Query data**

[Relational Queries](/docs/rqb) [Select](/docs/select) [Insert](/docs/insert) [Update](/docs/update) [Delete](/docs/delete) [Filters](/docs/operators) [Joins](/docs/joins) [sql\`\` operator](/docs/sql)

Drizzle <> AWS Data API MySQL
=============================

Currently AWS Data API for MySQL is not implemented in Drizzle ORM

Drizzle HTTP proxy
==================

This guide assumes familiarity with:

*   Database [connection basics](/docs/connect-overview) with Drizzle

How an HTTP Proxy works and why you might need it

Drizzle Proxy is used when you need to implement your own driver communication with the database. It can be used in several cases, such as adding custom logic at the query stage with existing drivers. The most common use is with an HTTP driver, which sends queries to your server with the database, executes the query on your database, and responds with raw data that Drizzle ORM can then map to results

How it works under the hood?

    ┌───────────────────────────┐                 ┌─────────────────────────────┐              
    │       Drizzle ORM         │                 │  HTTP Server with Database  │             
    └─┬─────────────────────────┘                 └─────────────────────────┬───┘             
      │                                                ^                    │
      │-- 1. Build query         2. Send built query --│                    │
      │                                                │                    │
      │              ┌───────────────────────────┐     │                    │
      └─────────────>│                           │─────┘                    │ 
                     │      HTTP Proxy Driver    │                          │
      ┌──────────────│                           │<─────────────┬───────────┘
      │              └───────────────────────────┘              │
      │                                                  3. Execute a query + send raw results back
      │-- 4. Map data and return        
      │                   
      v

Drizzle ORM also supports simply using asynchronous callback function for executing SQL.

*   `sql` is a query string with placeholders.
*   `params` is an array of parameters.
*   One of the following values will set for `method` depending on the SQL statement - `run`, `all`, `values` or `get`.

Drizzle always waits for `{rows: string[][]}` or `{rows: string[]}` for the return value.

*   When the `method` is `get`, you should return a value as `{rows: string[]}`.
*   Otherwise, you should return `{rows: string[][]}`.

  

PostgreSQL

MySQL

SQLite

    // Example of driver implementation
    import { drizzle } from 'drizzle-orm/pg-proxy';
    
    const db = drizzle(async (sql, params, method) => {
      try {
        const rows = await axios.post('http://localhost:3000/query', { sql, params, method });
    
        return { rows: rows.data };
      } catch (e: any) {
        console.error('Error from pg proxy server: ', e.response.data)
        return { rows: [] };
      }
    });

    // Example of server implementation
    import { Client } from 'pg';
    import express from 'express';
    
    const app = express();
    
    app.use(express.json());
    const port = 3000;
    
    const client = new Client('postgres://postgres:postgres@localhost:5432/postgres');
    
    app.post('/query', async (req, res) => {
      const { sql, params, method } = req.body;
    
      // prevent multiple queries
      const sqlBody = sql.replace(/;/g, '');
    
      try {
        const result = await client.query({
          text: sqlBody,
          values: params,
          rowMode: method === 'all' ? 'array': undefined,
        });
        res.send(result.rows);
      } catch (e: any) {
        res.status(500).json({ error: e });
      }
    
      res.status(500).json({ error: 'Unknown method value' });
    });
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

    // Example of driver implementation
    import { drizzle } from 'drizzle-orm/mysql-proxy';
    
    const db = drizzle(async (sql, params, method) => {
      try {
        const rows = await axios.post('http://localhost:3000/query', { sql, params, method });
    
        return { rows: rows.data };
      } catch (e: any) {
        console.error('Error from mysql proxy server: ', e.response.data)
        return { rows: [] };
      }
    });

    // Example of server implementation
    import * as mysql from 'mysql2/promise';
    import express from 'express';
    
    const app = express();
    
    app.use(express.json());
    const port = 3000;
    
    const main = async () => {
        const connection = await mysql.createConnection('mysql://root:[email protected]:5432/drizzle');
    
        app.post('/query', async (req, res) => {
          const { sql, params, method } = req.body;
    
          // prevent multiple queries
          const sqlBody = sql.replace(/;/g, '');
    
          try {
                const result = await connection.query({
                    sql: sqlBody,
                    values: params,
                    rowsAsArray: method === 'all',
                    typeCast: function(field: any, next: any) {
                        if (field.type === 'TIMESTAMP' || field.type === 'DATETIME' || field.type === 'DATE') {
                            return field.string();
                        }
                        return next();
                    },
                });
          } catch (e: any) {
            res.status(500).json({ error: e });
          }
    
          if (method === 'all') {
            res.send(result[0]);
          } else if (method === 'execute') {
            res.send(result);
          }
          res.status(500).json({ error: 'Unknown method value' });
        });
    
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
        });
    }
    
    main();

    import { drizzle } from 'drizzle-orm/sqlite-proxy';
    
    const db = drizzle(async (sql, params, method) => {
      try {
        const rows = await axios.post('http://localhost:3000/query', { sql, params, method });
    
        return { rows: rows.data };
      } catch (e: any) {
        console.error('Error from sqlite proxy server: ', e.response.data)
        return { rows: [] };
      }
    });

**Batch support**

Sqlite Proxy supports batch requests, the same as it’s done for all other drivers. Check full [docs](/docs/batch-api)

You will need to specify a specific callback for batch queries and handle requests to proxy server:

    import { drizzle } from 'drizzle-orm/sqlite-proxy';
    
    type ResponseType = { rows: any[][] | any[] }[];
    
    const db = drizzle(async (sql, params, method) => {
      // single queries logic. Same as in code above
    }, async (queries: { sql: string, params: any[], method: 'all' | 'run' | 'get' | 'values'}[]) => {
        try {
          const result: ResponseType = await axios.post('http://localhost:3000/batch', { queries });
    
          return result;
        } catch (e: any) {
          console.error('Error from sqlite proxy server:', e);
          throw e;
        }
      });

And then you can use `db.batch([])` method, that will proxy all queries

Response from the batch should be an array of raw values (an array within an array), in the same order as they were sent to the proxy server

Unless you plan on writing every SQL query by hand, a table declaration is helpful:

    import { sql } from "drizzle-orm";
    import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
    
    const users = sqliteTable('users', {
      id: text('id'),
      textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
      intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
    });

For more details about column types, see the **[SQLite column types in Drizzle.](/docs/column-types/sqlite)**

Indexes & Constraints
=====================

Constraints[](#constraints)
---------------------------

SQL constraints are the rules enforced on table columns. They are used to prevent invalid data from being entered into the database.

This ensures the accuracy and reliability of your data in the database.

### Default[](#default)

The `DEFAULT` clause specifies a default value to use for the column if no value provided by the user when doing an `INSERT`. If there is no explicit `DEFAULT` clause attached to a column definition, then the default value of the column is `NULL`.

An explicit `DEFAULT` clause may specify that the default value is `NULL`, a string constant, a blob constant, a signed-number, or any constant expression enclosed in parentheses.

PostgreSQL

MySQL

SQLite

SingleStore

    import { sql } from "drizzle-orm";
    import { integer, uuid, pgTable } from "drizzle-orm/pg-core";
    
    const table = pgTable('table', {
      integer1: integer('integer1').default(42),
      integer2: integer('integer2').default(sql`'42'::integer`),
      uuid1: uuid('uuid1').defaultRandom(),
      uuid2: uuid('uuid2').default(sql`gen_random_uuid()`),
    });

    CREATE TABLE IF NOT EXISTS "table" (
      "integer1" integer DEFAULT 42,
      "integer2" integer DEFAULT '42'::integer,
      "uuid1" uuid DEFAULT gen_random_uuid(),
      "uuid2" uuid DEFAULT gen_random_uuid()
    );

    import { sql } from "drizzle-orm";
    import { int, time, mysqlTable } from "drizzle-orm/mysql-core";
    
    const table = mysqlTable("table", {
      int: int("int").default(42),
      time: time("time").default(sql`cast("14:06:10" AS TIME)`),
    });

    CREATE TABLE `table` (
      `int` int DEFAULT 42,
      `time` time DEFAULT cast("14:06:10" AS TIME)
    );

    import { sql } from "drizzle-orm";
    import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
    
    const table = sqliteTable('table', {
      int1: integer('int1').default(42),
      int2: integer('int2').default(sql`(abs(42))`)
    });
    

    CREATE TABLE `table` (
      `int1` integer DEFAULT 42
      `int2` integer DEFAULT (abs(42))
    );

    import { sql } from "drizzle-orm";
    import { int, time, singlestoreTable } from "drizzle-orm/singlestore-core";
    
    const table = singlestoreTable("table", {
      int: int("int").default(42),
      time: time("time").default(sql`cast("14:06:10" AS TIME)`),
    });

    CREATE TABLE `table` (
      `int` int DEFAULT 42,
      `time` time DEFAULT cast("14:06:10" AS TIME)
    );

### Not null[](#not-null)

By default, a column can hold **NULL** values. The `NOT NULL` constraint enforces a column to **NOT** accept **NULL** values.

This enforces a field to always contain a value, which means that you cannot insert a new record, or update a record without adding a value to this field.

PostgreSQL

MySQL

SQLite

SingleStore

    import { integer, pgTable } from "drizzle-orm/pg-core";
    
    const table = pgTable('table', {
      integer: integer('integer').notNull(),
    });

    CREATE TABLE IF NOT EXISTS "table" (
      "integer" integer NOT NULL
    );

    import { int, mysqlTable } from "drizzle-orm/mysql-core";
    
    const table = mysqlTable('table', {
      int: int('int').notNull(),
    });

    CREATE TABLE `table` (
      `int` int NOT NULL
    );

    const table = sqliteTable('table', { 
      numInt: integer('numInt').notNull() 
    });

    CREATE TABLE table (
      `numInt` integer NOT NULL
    );

    import { int, singlestoreTable } from "drizzle-orm/singlestore-core";
    
    const table = singlestoreTable('table', {
      int: int('int').notNull(),
    });

    CREATE TABLE `table` (
      `int` int NOT NULL
    );

### Unique[](#unique)

The `UNIQUE` constraint ensures that all values in a column are different.

Both the `UNIQUE` and `PRIMARY KEY` constraints provide a guarantee for uniqueness for a column or set of columns.

A `PRIMARY KEY` constraint automatically has a `UNIQUE` constraint.

You can have many `UNIQUE` constraints per table, but only one `PRIMARY KEY` constraint per table.

PostgreSQL

MySQL

SQLite

SingleStore

    import { integer, text, unique, pgTable } from "drizzle-orm/pg-core";
    
    export const user = pgTable('user', {
      id: integer('id').unique(),
    });
    
    export const table = pgTable('table', {
      id: integer('id').unique('custom_name'),
    });
    
    export const composite = pgTable('composite_example', {
      id: integer('id'),
      name: text('name'),
    }, (t) => [
      unique().on(t.id, t.name),
      unique('custom_name').on(t.id, t.name)
    ]);
    
    // In Postgres 15.0+ NULLS NOT DISTINCT is available
    // This example demonstrates both available usages
    export const userNulls = pgTable('user_nulls_example', {
      id: integer('id').unique("custom_name", { nulls: 'not distinct' }),
    }, (t) => [
      unique().on(t.id).nullsNotDistinct()
    ]);

    CREATE TABLE IF NOT EXISTS "composite_example" (
        "id" integer,
      "name" text,
      CONSTRAINT "composite_example_id_name_unique" UNIQUE("id","name"),
      CONSTRAINT "custom_name" UNIQUE("id","name")
    );
    
    CREATE TABLE IF NOT EXISTS "table" (
    	"id" integer,
    	CONSTRAINT "custom_name" UNIQUE("id")
    );
    
    CREATE TABLE IF NOT EXISTS "user" (
    	"id" integer,
    	CONSTRAINT "user_id_unique" UNIQUE("id")
    );
    
    CREATE TABLE IF NOT EXISTS "user_nulls_example" (
      "id" integer,
      CONSTRAINT "custom_name" UNIQUE NULLS NOT DISTINCT("id"),
      CONSTRAINT "user_nulls_example_id_unique" UNIQUE NULLS NOT DISTINCT("id")
    );

    import { int, varchar, unique, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable('user', {
      id: int('id').unique(),
    });
    
    export const table = mysqlTable('table', {
      id: int('id').unique('custom_name'),
    });
    
    export const composite = mysqlTable('composite_example', {
      id: int('id'),
      name: varchar('name', { length: 256 }),
    }, (t) => [
      unique().on(t.id, t.name),
      unique('custom_name').on(t.id, t.name)
    ]);

    CREATE TABLE `user` (
    	`id` int,
    	CONSTRAINT `user_id_unique` UNIQUE(`id`)
    );
    
    CREATE TABLE `table` (
    	`id` int,
    	CONSTRAINT `custom_name` UNIQUE(`id`)
    );
    
    CREATE TABLE `composite_example` (
      `id` int,
      `name` varchar(256),
      CONSTRAINT `composite_example_id_name_unique` UNIQUE(`id`,`name`),
      CONSTRAINT `custom_name` UNIQUE(`id`,`name`)
    );

    import { int, text, unique, sqliteTable } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable('user', {
      id: int('id').unique(),
    });
    
    export const table = sqliteTable('table', {
      id: int('id').unique('custom_name'),
    });
    
    export const composite = sqliteTable('composite_example', {
      id: int('id'),
      name: text('name'),
    }, (t) => [
      unique().on(t.id, t.name),
      unique('custom_name').on(t.id, t.name)
    ]);

    CREATE TABLE `user` (
        `id` integer
    );
    
    CREATE TABLE `table` (
    	`id` integer
    );
    
    CREATE TABLE `composite_example` (
    	`id` integer,
    	`name` text
    );
    
    CREATE UNIQUE INDEX `composite_example_id_name_unique` ON `composite_example` (`id`,`name`);
    CREATE UNIQUE INDEX `custom_name` ON `composite_example` (`id`,`name`);
    CREATE UNIQUE INDEX `custom_name` ON `table` (`id`);
    CREATE UNIQUE INDEX `user_id_unique` ON `user` (`id`);

    import { int, varchar, unique, singlestoreTable } from "drizzle-orm/singlestore-core";
    
    export const user = singlestoreTable('user', {
      id: int('id').unique(),
    });
    
    export const table = singlestoreTable('table', {
      id: int('id').unique('custom_name'),
    });
    
    export const composite = singlestoreTable('composite_example', {
      id: int('id'),
      name: varchar('name', { length: 256 }),
    }, (t) => [
      unique().on(t.id, t.name),
      unique('custom_name').on(t.id, t.name)
    ]);

    CREATE TABLE `user` (
    	`id` int,
    	CONSTRAINT `user_id_unique` UNIQUE(`id`)
    );
    
    CREATE TABLE `table` (
    	`id` int,
    	CONSTRAINT `custom_name` UNIQUE(`id`)
    );
    
    CREATE TABLE `composite_example` (
      `id` int,
      `name` varchar(256),
      CONSTRAINT `composite_example_id_name_unique` UNIQUE(`id`,`name`),
      CONSTRAINT `custom_name` UNIQUE(`id`,`name`)
    );

### Check[](#check)

The `CHECK` constraint is used to limit the value range that can be placed in a column.

If you define a `CHECK` constraint on a column it will allow only certain values for this column.

If you define a `CHECK` constraint on a table it can limit the values in certain columns based on values in other columns in the row.

PostgreSQL

MySQL

SQLite

SingleStore

    import { sql } from "drizzle-orm";
    import { check, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
    
    export const users = pgTable(
      "users",
      {
        id: uuid().defaultRandom().primaryKey(),
        username: text().notNull(),
        age: integer(),
      },
      (table) => [
        check("age_check1", sql`${table.age} > 21`),
      ]
    );

    CREATE TABLE IF NOT EXISTS "users" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
        "username" text NOT NULL,
        "age" integer,
        CONSTRAINT "age_check1" CHECK ("users"."age" > 21)
    );

    import { sql } from "drizzle-orm";
    import { check, int, mysqlTable, text } from "drizzle-orm/mysql-core";
    
    export const users = mysqlTable(
      "users",
      {
        id: int().primaryKey(),
        username: text().notNull(),
        age: int(),
      },
      (table) => [
        check("age_check1", sql`${table.age} > 21`)
      ]
    );

    CREATE TABLE `users` (
        `id` int NOT NULL,
        `username` text NOT NULL,
        `age` int,
        CONSTRAINT `users_id` PRIMARY KEY(`id`),
        CONSTRAINT `age_check1` CHECK(`users`.`age` > 21)
    );

    import { sql } from "drizzle-orm";
    import { check, int, sqliteTable, text } from "drizzle-orm/sqlite-core";
    
    export const users = sqliteTable(
      "users",
      {
        id: int().primaryKey(),
        username: text().notNull(),
        age: int(),
      },
      (table) => [
        check("age_check1", sql`${table.age} > 21`)
      ]
    );

    CREATE TABLE `users` (
        `id` integer PRIMARY KEY NOT NULL,
        `username` text NOT NULL,
        `age` integer,
        CONSTRAINT "age_check1" CHECK("users"."age" > 21)
    );

Currently not supported in SingleStore

### Primary Key[](#primary-key)

The `PRIMARY KEY` constraint uniquely identifies each record in a table.  
Primary keys must contain `UNIQUE` values, and cannot contain `NULL` values.

A table can have only **ONE** primary key; and in the table, this primary key can consist of single or multiple columns (fields).

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, pgTable } from "drizzle-orm/pg-core";
    
    const user = pgTable('user', {
      id: serial('id').primaryKey(),
    });
    
    const table = pgTable('table', {
      id: text('cuid').primaryKey(),
    });

    CREATE TABLE IF NOT EXISTS "user" (
      "id" serial PRIMARY KEY
    );
    
    CREATE TABLE IF NOT EXISTS "table" (
      "cuid" text PRIMARY KEY
    );

    import { int, text, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int("id").autoincrement().primaryKey(),
    })
    
    export const table = mysqlTable("table", {
      cuid: text("cuid").primaryKey(),
    })

    CREATE TABLE `user` (
      `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL
    );
    
    CREATE TABLE `table` (
      `cuid` text PRIMARY KEY NOT NULL
    );

    import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      id: integer("id").primaryKey(),
    })
    
    export const pet = sqliteTable("pet", {
      id: integer("id").primaryKey(),
    })

    CREATE TABLE `user` (
      `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL
    );
    
    CREATE TABLE `pet` (
      `id` integer PRIMARY KEY AUTOINCREMENT
    )

    import { int, text, singlestoreTable } from "drizzle-orm/singlestore-core";
    
    export const user = singlestoreTable("user", {
      id: int("id").autoincrement().primaryKey(),
    })
    
    export const table = singlestoreTable("table", {
      cuid: text("cuid").primaryKey(),
    })

    CREATE TABLE `user` (
      `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL
    );
    
    CREATE TABLE `table` (
      `cuid` text PRIMARY KEY NOT NULL
    );

### Composite Primary Key[](#composite-primary-key)

Just like `PRIMARY KEY`, composite primary key uniquely identifies each record in a table using multiple fields.

Drizzle ORM provides a standalone `primaryKey` operator for that:

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, integer, primaryKey, pgTable } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      id: serial("id").primaryKey(),
      name: text("name"),
    });
    
    export const book = pgTable("book", {
      id: serial("id").primaryKey(),
      name: text("name"),
    });
    
    export const booksToAuthors = pgTable("books_to_authors", {
      authorId: integer("author_id"),
      bookId: integer("book_id"),
    }, (table) => [
      primaryKey({ columns: [table.bookId, table.authorId] }),
      // Or PK with custom name
      primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] }),
    ]);

    ...
    
    CREATE TABLE IF NOT EXISTS "books_to_authors" (
      "author_id" integer,
      "book_id" integer,
      PRIMARY KEY("book_id","author_id")
    );
    
    ALTER TABLE "books_to_authors" ADD CONSTRAINT "custom_name" PRIMARY KEY("book_id","author_id");

    import { int, text, primaryKey, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int("id").autoincrement().primaryKey(),
      name: text("name"),
    });
    
    export const book = mysqlTable("book", {
      id: int("id").autoincrement().primaryKey(),
      name: text("name"),
    });
    
    export const booksToAuthors = mysqlTable("books_to_authors", {
      authorId: int("author_id"),
      bookId: int("book_id"),
    }, (table) => [
      primaryKey({ columns: [table.bookId, table.authorId] }),
      // Or PK with custom name
      primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] })
    ]);

    ...
    
    CREATE TABLE `books_to_authors` (
      `author_id` int,
      `book_id` int,
      PRIMARY KEY(`book_id`,`author_id`)
    );

    import { integer, text, primaryKey, sqliteTable} from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
    });
    
    export const book = sqliteTable("book", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
    });
    
    export const bookToAuthor = sqliteTable("book_to_author", {
      authorId: integer("author_id"),
      bookId: integer("book_id"),
    }, (table) => [
      primaryKey({ columns: [table.bookId, table.authorId] }),
      // Or PK with custom name
      primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] })
    ]);

    ...
    
    CREATE TABLE `book_to_author` (
      `author_id` integer,
      `book_id` integer,
      PRIMARY KEY(`book_id`, `author_id`)
    );

    import { int, text, primaryKey, mysqlTable } from "drizzle-orm/singlestore-core";
    
    export const user = singlestoreTable("user", {
      id: int("id").autoincrement().primaryKey(),
      name: text("name"),
    });
    
    export const book = singlestoreTable("book", {
      id: int("id").autoincrement().primaryKey(),
      name: text("name"),
    });
    
    export const booksToAuthors = singlestoreTable("books_to_authors", {
      authorId: int("author_id"),
      bookId: int("book_id"),
    }, (table) => [
      primaryKey({ columns: [table.bookId, table.authorId] }),
      // Or PK with custom name
      primaryKey({ name: 'custom_name', columns: [table.bookId, table.authorId] }),
    ]);

    ...
    
    CREATE TABLE `books_to_authors` (
      `author_id` int,
      `book_id` int,
      PRIMARY KEY(`book_id`,`author_id`)
    );

### Foreign key[](#foreign-key)

The `FOREIGN KEY` constraint is used to prevent actions that would destroy links between tables. A `FOREIGN KEY` is a field (or collection of fields) in one table, that refers to the `PRIMARY KEY` in another table. The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

Drizzle ORM provides several ways to declare foreign keys. You can declare them in a column declaration statement:

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, integer, pgTable } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      id: serial("id"),
      name: text("name"),
    });
    
    export const book = pgTable("book", {
      id: serial("id"),
      name: text("name"),
      authorId: integer("author_id").references(() => user.id)
    });

    import { int, text, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
    });
    
    export const book = mysqlTable("book", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      authorId: int("author_id").references(() => user.id)
    });

    import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
    });
    
    export const book = sqliteTable("book", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
      authorId: integer("author_id").references(() => user.id)
    });

Currently not supported in SingleStore

If you want to do a self reference, due to a TypeScript limitations you will have to either explicitly set return type for reference callback or use a standalone `foreignKey` operator.

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, integer, foreignKey, pgTable, AnyPgColumn } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      id: serial("id"),
      name: text("name"),
      parentId: integer("parent_id").references((): AnyPgColumn => user.id)
    });
    
    // or
    export const user = pgTable("user", {
      id: serial("id"),
      name: text("name"),
      parentId: integer("parent_id"),
    }, (table) => [
      foreignKey({
        columns: [table.parentId],
        foreignColumns: [table.id],
        name: "custom_fk"
      })
    ]);

    import { int, text, foreignKey, AnyMySqlColumn, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      parentId: int("parent_id").references((): AnyMySqlColumn => user.id),
    });
    
    // or
    export const user = mysqlTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      parentId: int("parent_id")
    }, (table) => [
      foreignKey({
        columns: [table.parentId],
        foreignColumns: [table.id],
        name: "custom_fk"
      })
    ]);

    import { integer, text, foreignKey, sqliteTable, AnySQLiteColumn } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
      parentId: integer("parent_id").references((): AnySQLiteColumn => user.id)
    });
    
    //or
    export const user = sqliteTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
      parentId: integer("parent_id"),
    }, (table) => [
      foreignKey({
        columns: [table.parentId],
        foreignColumns: [table.id],
        name: "custom_fk"
      })
    ]);

Currently not supported in SingleStore

To declare multicolumn foreign keys you can use a dedicated `foreignKey` operator:

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, foreignKey, pgTable, AnyPgColumn } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      firstName: text("firstName"),
      lastName: text("lastName"),
    }, (table) => [
      primaryKey({ columns: [table.firstName, table.lastName]})
    ]);
    
    export const profile = pgTable("profile", {
      id: serial("id").primaryKey(),
      userFirstName: text("user_first_name"),
      userLastName: text("user_last_name"),
    }, (table) => [
      foreignKey({
        columns: [table.userFirstName, table.userLastName],
        foreignColumns: [user.firstName, user.lastName],
        name: "custom_fk"
      })
    ])

    import { int, text, primaryKey, foreignKey, mysqlTable, AnyMySqlColumn } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      firstName: text("firstName"),
      lastName: text("lastName"),
    }, (table) => [
      primaryKey({ columns: [table.firstName, table.lastName]})
    ]);
    
    export const profile = mysqlTable("profile", {
      id: int("id").autoincrement().primaryKey(),
      userFirstName: text("user_first_name"),
      userLastName: text("user_last_name"),
    }, (table) => [
      foreignKey({
        columns: [table.userFirstName, table.userLastName],
        foreignColumns: [user.firstName, user.lastName],
        name: "custom_name"
      })
    ]);

    import { integer, text, primaryKey, foreignKey, sqliteTable, AnySQLiteColumn } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      firstName: text("firstName"),
      lastName: text("lastName"),
    }, (table) => [
      primaryKey({ columns: [table.firstName, table.lastName]})
    ]);
    
    export const profile = sqliteTable("profile", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      userFirstName: text("user_first_name"),
      userLastName: text("user_last_name"),
    }, (table) => [
      foreignKey({
        columns: [table.userFirstName, table.userLastName],
        foreignColumns: [user.firstName, user.lastName],
        name: "custom_name"
      })
    ]);

Currently not supported in SingleStore

Indexes[](#indexes)
-------------------

Drizzle ORM provides API for both `index` and `unique index` declaration:

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, index, uniqueIndex, pgTable } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      id: serial("id").primaryKey(),
      name: text("name"),
      email: text("email"),
    }, (table) => [
      index("name_idx").on(table.name),
      uniqueIndex("email_idx").on(table.email)
    ]);

    CREATE TABLE "user" (
      ...
    );
    
    CREATE INDEX "name_idx" ON "user" ("name");
    CREATE UNIQUE INDEX "email_idx" ON "user" ("email");

IMPORTANT

For versions before `[[email protected]](/cdn-cgi/l/email-protection)` and `[[email protected]](/cdn-cgi/l/email-protection)` `drizzle-kit` only supports index `name` and `on()` param.

After versions `[[email protected]](/cdn-cgi/l/email-protection)` and `[[email protected]](/cdn-cgi/l/email-protection)` all fields are supported in drizzle-kit!

Starting from 0.31.0 a new index api for Drizzle ORM provides set of all params for index creation:

    // First example, with `.on()`
    index('name')
      .on(table.column1.asc(), table.column2.nullsFirst(), ...) or .onOnly(table.column1.desc().nullsLast(), table.column2, ...)
      .concurrently()
      .where(sql``)
      .with({ fillfactor: '70' })
    
    // Second Example, with `.using()`
    index('name')
      .using('btree', table.column1.asc(), sql`lower(${table.column2})`, table.column1.op('text_ops'))
      .where(sql``) // sql expression
      .with({ fillfactor: '70' })

    import { int, text, index, uniqueIndex, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      email: text("email"),
    }, (table) => [
      index("name_idx").on(table.name),
      uniqueIndex("email_idx").on(table.email),
    ]);

    CREATE TABLE `user` (
      ...
    );
    
    CREATE INDEX `name_idx` ON `user` (`name`);
    CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);

IMPORTANT

As of now `drizzle-kit` only supports index `name` and `on()` param.

Drizzle ORM provides set of all params for index creation:

    // Index declaration reference
    index("name")
      .on(table.name)
      .algorythm("default") // "default" | "copy" | "inplace"
      .using("btree") // "btree" | "hash"
      .lock("default") // "none" | "default" | "exclusive" | "shared"

    import { integer, text, index, uniqueIndex, sqliteTable } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
      email: text("email"),
    }, (table) => [
      index("name_idx").on(table.name),
      uniqueIndex("email_idx").on(table.email),
    ]);

    CREATE TABLE `user` (
      ...
    );
    
    CREATE INDEX `name_idx` ON `user` (`name`);
    CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);

Drizzle ORM provides set of all params for index creation:

    // Index declaration reference
    index("name")
      .on(table.name)
      .where(sql`...`)

    import { int, text, index, uniqueIndex, singlestoreTable } from "drizzle-orm/singlestore-core";
    
    export const user = singlestoreTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      email: text("email"),
    }, (table) => [
      index("name_idx").on(table.name),
      uniqueIndex("email_idx").on(table.email),
    ]);

    CREATE TABLE `user` (
      ...
    );
    
    CREATE INDEX `name_idx` ON `user` (`name`);
    CREATE UNIQUE INDEX `email_idx` ON `user` (`email`);

Sequences
=========

To use this feature you would need to have `[[email protected]](/cdn-cgi/l/email-protection)` or higher and `[[email protected]](/cdn-cgi/l/email-protection)` or higher

PostgreSQL

SQLite

MySQL

SingleStore

Sequences in PostgreSQL are special single-row tables created to generate unique identifiers, often used for auto-incrementing primary key values. They provide a thread-safe way to generate unique sequential values across multiple sessions.

  

**Key Features**

*   Creation and Initialization: Use CREATE SEQUENCE to create a new sequence. Parameters such as increment value, start value, min/max values, and cache size can be specified.
    
*   Manipulation Functions
    
    *   `nextval('sequence_name')`: Advances the sequence and returns the next value.
    *   `currval('sequence_name')`: Returns the current value of the sequence for the current session.
    *   `setval('sequence_name', value)`: Sets the sequence’s current value.
    *   `lastval()`: Returns the last value returned by nextval in the current session.
*   Ownership: Sequences can be linked to table columns using the OWNED BY clause. Dropping the table or column will automatically drop the associated sequence.
    
*   Cycling: Sequences can be set to cycle when they reach their maximum or minimum value using the CYCLE option. The default is NO CYCLE.
    
*   Caching: Sequence values can be preallocated using the CACHE option for improved performance.
    

  

**Limitations**

*   Gaps: Sequences are not gapless. Aborted transactions or crashes can lead to gaps in the sequence values.
*   Concurrency: While sequences provide unique values across sessions, the values may be out of order when considering all sessions.
*   No Rollback: Changes to sequences are not rolled back if a transaction fails. This ensures unique values but can lead to gaps.
*   Crash Recovery: Unlogged sequences or sequences modified before a crash might not be properly restored to their previous state.

  

**Practical Use**

*   Default Behavior: By default, sequences increment by 1 and start at 1.
*   Custom Behavior: Custom start points, increments, min/max values, and cycling can be specified.
*   Associations: Commonly associated with table columns for auto-incrementing fields, making management of unique identifiers seamless.

  

**Usage Example**

    import { pgSchema, pgSequence } from "drizzle-orm/pg-core";
    
    // No params specified
    export const customSequence = pgSequence("name");
    
    // Sequence with params
    export const customSequence = pgSequence("name", {
          startWith: 100,
          maxValue: 10000,
          minValue: 100,
          cycle: true,
          cache: 10,
          increment: 2
    });
    
    // Sequence in custom schema
    export const customSchema = pgSchema('custom_schema');
    export const customSequence = customSchema.sequence("name");

Views
=====

PostgreSQL

SQLite

MySQL

SingleStore

There’re several ways you can declare views with Drizzle ORM.

You can declare views that have to be created or you can declare views that already exist in the database.

You can declare views statements with an inline `query builder` syntax, with `standalone query builder` and with raw `sql` operators.

When views are created with either inlined or standalone query builders, view columns schema will be automatically inferred, yet when you use `sql` you have to explicitly declare view columns schema.

### Declaring views[](#declaring-views)

PostgreSQL

MySQL

SQLite

schema.ts

    import { pgTable, pgView, serial, text, timestamp } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      id: serial(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: timestamp("created_at"),
      updatedAt: timestamp("updated_at"),
    });
    
    export const userView = pgView("user_view").as((qb) => qb.select().from(user));
    export const customersView = pgView("customers_view").as((qb) => qb.select().from(user).where(eq(user.role, "customer")));

    CREATE VIEW "user_view" AS SELECT * FROM "user";
    CREATE VIEW "customers_view" AS SELECT * FROM "user" WHERE "role" = 'customer';

schema.ts

    import { text, mysqlTable, mysqlView, int, timestamp } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int().primaryKey().autoincrement(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: timestamp("created_at"),
      updatedAt: timestamp("updated_at"),
    });
    
    export const userView = mysqlView("user_view").as((qb) => qb.select().from(user));
    export const customersView = mysqlView("customers_view").as((qb) => qb.select().from(user).where(eq(user.role, "customer")));

    CREATE VIEW "user_view" AS SELECT * FROM "user";
    CREATE VIEW "customers_view" AS SELECT * FROM "user" WHERE "role" = 'customer';

schema.ts

    import { integer, text, sqliteView, sqliteTable } from "drizzle-orm/sqlite-core";
    
    export const user = sqliteTable("user", {
      id: integer().primaryKey({ autoIncrement: true }),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: integer("created_at"),
      updatedAt: integer("updated_at"),
    });
    
    export const userView = sqliteView("user_view").as((qb) => qb.select().from(user));
    export const customersView = sqliteView("customers_view").as((qb) => qb.select().from(user).where(eq(user.role, "customer")));

    CREATE VIEW "user_view" AS SELECT * FROM "user";
    CREATE VIEW "customers_view" AS SELECT * FROM "user" WHERE "role" = 'customer';

If you need a subset of columns you can use `.select({ ... })` method in query builder, like this:

    export const customersView = pgView("customers_view").as((qb) => {
      return qb
        .select({
          id: user.id,
          name: user.name,
          email: user.email,
        })
        .from(user);
    });

    CREATE VIEW "customers_view" AS SELECT "id", "name", "email" FROM "user" WHERE "role" = 'customer';

You can also declare views using `standalone query builder`, it works exactly the same way:

PostgreSQL

MySQL

SQLite

schema.ts

    import { pgTable, pgView, serial, text, timestamp, QueryBuilder} from "drizzle-orm/pg-core";
    
    const qb = new QueryBuilder();
    
    export const user = pgTable("user", {
      id: serial(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: timestamp("created_at"),
      updatedAt: timestamp("updated_at"),
    });
    
    export const userView = pgView("user_view").as(qb.select().from(user));
    export const customersView = pgView("customers_view").as(qb.select().from(user).where(eq(user.role, "customer")));

    CREATE VIEW "user_view" AS SELECT * FROM "user";
    CREATE VIEW "customers_view" AS SELECT * FROM "user" WHERE "role" = 'customer';

schema.ts

    import { text, mysqlTable, mysqlView, int, timestamp, QueryBuilder } from "drizzle-orm/mysql-core";
    
    const qb = new QueryBuilder();
    
    export const user = mysqlTable("user", {
      id: int().primaryKey().autoincrement(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: timestamp("created_at"),
      updatedAt: timestamp("updated_at"),
    });
    
    export const userView = mysqlView("user_view").as(qb.select().from(user));
    export const customersView = mysqlView("customers_view").as(qb.select().from(user).where(eq(user.role, "customer")));

    CREATE VIEW "user_view" AS SELECT * FROM "user";
    CREATE VIEW "customers_view" AS SELECT * FROM "user" WHERE "role" = 'customer';

schema.ts

    import { integer, text, sqliteView, sqliteTable, QueryBuilder } from "drizzle-orm/sqlite-core";
    
    const qb = new QueryBuilder();
    
    export const user = sqliteTable("user", {
      id: integer().primaryKey({ autoIncrement: true }),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: integer("created_at"),
      updatedAt: integer("updated_at"),
    });
    
    export const userView = sqliteView("user_view").as((qb) => qb.select().from(user));
    export const customerView = sqliteView("customers_view").as((qb) => qb.select().from(user).where(eq(user.role, "customer")));

    CREATE VIEW "user_view" AS SELECT * FROM "user";
    CREATE VIEW "customers_view" AS SELECT * FROM "user" WHERE "role" = 'customer';

### Declaring views with raw SQL[](#declaring-views-with-raw-sql)

Whenever you need to declare view using a syntax that is not supported by the query builder, you can directly use `sql` operator and explicitly specify view columns schema.

    // regular view
    const newYorkers = pgView('new_yorkers', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      cityId: integer('city_id').notNull(),
    }).as(sql`select * from ${users} where ${eq(users.cityId, 1)}`);
    
    // materialized view
    const newYorkers = pgMaterializedView('new_yorkers', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      cityId: integer('city_id').notNull(),
    }).as(sql`select * from ${users} where ${eq(users.cityId, 1)}`);

### Declaring existing views[](#declaring-existing-views)

When you’re provided with a read only access to an existing view in the database you should use `.existing()` view configuration, `drizzle-kit` will ignore and will not generate a `create view` statement in the generated migration.

    export const user = pgTable("user", {
      id: serial(),
      name: text(),
      email: text(),
      password: text(),
      role: text().$type<"admin" | "customer">(),
      createdAt: timestamp("created_at"),
      updatedAt: timestamp("updated_at"),
    });
    
    // regular view
    export const trimmedUser = pgView("trimmed_user", {
      id: serial("id"),
      name: text("name"),
      email: text("email"),
    }).existing();
    
    // materialized view won't make any difference, yet you can use it for consistency
    export const trimmedUser = pgMaterializedView("trimmed_user", {
      id: serial("id"),
      name: text("name"),
      email: text("email"),
    }).existing();

### Materialized views[](#materialized-views)

PostgreSQL

MySQL

SQLite

According to the official docs, PostgreSQL has both **[`regular`](https://www.postgresql.org/docs/current/sql-createview.html)** and **[`materialized`](https://www.postgresql.org/docs/current/sql-creatematerializedview.html)** views.

Materialized views in PostgreSQL use the rule system like views do, but persist the results in a table-like form.

Drizzle ORM natively supports PostgreSQL materialized views:

schema.ts

    const newYorkers = pgMaterializedView('new_yorkers').as((qb) => qb.select().from(users).where(eq(users.cityId, 1)));

    CREATE MATERIALIZED VIEW "new_yorkers" AS SELECT * FROM "users";

You can then refresh materialized views in the application runtime:

    await db.refreshMaterializedView(newYorkers);
    
    await db.refreshMaterializedView(newYorkers).concurrently();
    
    await db.refreshMaterializedView(newYorkers).withNoData();

### Extended example[](#extended-example)

All the parameters inside the query will be inlined, instead of replaced by `$1`, `$2`, etc.

    // regular view
    const newYorkers = pgView('new_yorkers')
      .with({
        checkOption: 'cascaded',
        securityBarrier: true,
        securityInvoker: true,
      })
      .as((qb) => {
        const sq = qb
          .$with('sq')
          .as(
            qb.select({ userId: users.id, cityId: cities.id })
              .from(users)
              .leftJoin(cities, eq(cities.id, users.homeCity))
              .where(sql`${users.age1} > 18`),
          );
        return qb.with(sq).select().from(sq).where(sql`${users.homeCity} = 1`);
      });
    
    // materialized view
    const newYorkers2 = pgMaterializedView('new_yorkers')
      .using('btree')
      .with({
        fillfactor: 90,
        toast_tuple_target: 0.5,
        autovacuum_enabled: true,
        ...
      })
      .tablespace('custom_tablespace')
      .withNoData()
      .as((qb) => {
        const sq = qb
          .$with('sq')
          .as(
            qb.select({ userId: users.id, cityId: cities.id })
              .from(users)
              .leftJoin(cities, eq(cities.id, users.homeCity))
              .where(sql`${users.age1} > 18`),
          );
        return qb.with(sq).select().from(sq).where(sql`${users.homeCity} = 1`);
      });

Table schemas
=============

PostgreSQL

MySQL

SQLite

SingleStore

Drizzle ORM provides you an API for declaring SQL schemas for PostgreSQL and MySQL dialects.

If you declare an entity within a schema, query builder will prepend schema names in queries:  
`select * from "schema"."users"`

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, pgSchema } from "drizzle-orm/pg-core";
    
    export const mySchema = pgSchema("my_schema");
    
    export const colors = mySchema.enum('colors', ['red', 'green', 'blue']);
    
    export const mySchemaUsers = mySchema.table('users', {
      id: serial('id').primaryKey(),
      name: text('name'),
      color: colors('color').default('red'),
    });
    
    

    CREATE SCHEMA "my_schema";
    
    CREATE TYPE "my_schema"."colors" AS ENUM ('red', 'green', 'blue');
    
    CREATE TABLE "my_schema"."users" (
      "id" serial PRIMARY KEY,
      "name" text,
      "color" "my_schema"."colors" DEFAULT 'red'
    );

    import { int, text, mysqlSchema } from "drizzle-orm/mysql-core";
    
    export const mySchema = mysqlSchema("my_schema")
    
    export const mySchemaUsers = mySchema.table("users", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
    });

    CREATE SCHEMA "my_schema";
    
    CREATE TABLE "my_schema"."users" (
      "id" serial PRIMARY KEY,
      "name" text
    );

SQLite does not have support for schemas 😕

    import { int, text, singlestoreSchema } from "drizzle-orm/singlestore-core";
    
    export const mySchema = singlestoreSchema("my_schema")
    
    export const mySchemaUsers = mySchema.table("users", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
    });

    CREATE SCHEMA "my_schema";
    
    CREATE TABLE "my_schema"."users" (
      "id" serial PRIMARY KEY,
      "name" text
    );

Row-Level Security (RLS)
========================

With Drizzle, you can enable Row-Level Security (RLS) for any Postgres table, create policies with various options, and define and manage the roles those policies apply to.

Drizzle supports a raw representation of Postgres policies and roles that can be used in any way you want. This works with popular Postgres database providers such as `Neon` and `Supabase`.

In Drizzle, we have specific predefined RLS roles and functions for RLS with both database providers, but you can also define your own logic.

Enable RLS[](#enable-rls)
-------------------------

If you just want to enable RLS on a table without adding policies, you can use `.enableRLS()`

As mentioned in the PostgreSQL documentation:

> If no policy exists for the table, a default-deny policy is used, meaning that no rows are visible or can be modified. Operations that apply to the whole table, such as TRUNCATE and REFERENCES, are not subject to row security.

    import { integer, pgTable } from 'drizzle-orm/pg-core';
    
    export const users = pgTable('users', {
    	id: integer(),
    }).enableRLS();

important

If you add a policy to a table, RLS will be enabled automatically. So, there’s no need to explicitly enable RLS when adding policies to a table.

Roles[](#roles)
---------------

Currently, Drizzle supports defining roles with a few different options, as shown below. Support for more options will be added in a future release.

    import { pgRole } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin', { createRole: true, createDb: true, inherit: true });

If a role already exists in your database, and you don’t want drizzle-kit to ‘see’ it or include it in migrations, you can mark the role as existing.

    import { pgRole } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin').existing();

Policies[](#policies)
---------------------

To fully leverage RLS, you can define policies within a Drizzle table.

info

In PostgreSQL, policies should be linked to an existing table. Since policies are always associated with a specific table, we decided that policy definitions should be defined as a parameter of `pgTable`

**Example of pgPolicy with all available properties**

    import { sql } from 'drizzle-orm';
    import { integer, pgPolicy, pgRole, pgTable } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin');
    
    export const users = pgTable('users', {
    	id: integer(),
    }, (t) => [
    	pgPolicy('policy', {
    		as: 'permissive',
    		to: admin,
    		for: 'delete',
    		using: sql``,
    		withCheck: sql``,
    	}),
    ]);

**Policy options**

`as`

Possible values are `permissive` or `restrictive`

`to`

Specifies the role to which the policy applies. Possible values include `public`, `current_role`, `current_user`, `session_user`, or any other role name as a string. You can also reference a `pgRole` object.

`for`

Defines the commands this policy will be applied to. Possible values are `all`, `select`, `insert`, `update`, `delete`.

`using`

The SQL statement that will be applied to the `USING` part of the policy creation statement.

`withCheck`

An SQL statement that will be applied to the `WITH CHECK` part of the policy creation statement.

**Link Policy to an existing table**

There are situations where you need to link a policy to an existing table in your database. The most common use case is with database providers like `Neon` or `Supabase`, where you need to add a policy to their existing tables. In this case, you can use the `.link()` API

    import { sql } from "drizzle-orm";
    import { pgPolicy } from "drizzle-orm/pg-core";
    import { authenticatedRole, realtimeMessages } from "drizzle-orm/supabase";
    
    export const policy = pgPolicy("authenticated role insert policy", {
      for: "insert",
      to: authenticatedRole,
      using: sql``,
    }).link(realtimeMessages);

Migrations[](#migrations)
-------------------------

If you are using drizzle-kit to manage your schema and roles, there may be situations where you want to refer to roles that are not defined in your Drizzle schema. In such cases, you may want drizzle-kit to skip managing these roles without having to define each role in your drizzle schema and marking it with `.existing()`.

In these cases, you can use `entities.roles` in `drizzle.config.ts`. For a complete reference, refer to the the [`drizzle.config.ts`](docs/drizzle-config-file) documentation.

By default, `drizzle-kit` does not manage roles for you, so you will need to enable this feature in `drizzle.config.ts`.

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: 'postgresql',
      schema: "./drizzle/schema.ts",
      dbCredentials: {
        url: process.env.DATABASE_URL!
      },
      verbose: true,
      strict: true,
      entities: {
        roles: true
      }
    });

In case you need additional configuration options, let’s take a look at a few more examples.

**You have an `admin` role and want to exclude it from the list of manageable roles**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          exclude: ['admin']
        }
      }
    });

**You have an `admin` role and want to include it in the list of manageable roles**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          include: ['admin']
        }
      }
    });

**If you are using `Neon` and want to exclude Neon-defined roles, you can use the provider option**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          provider: 'neon'
        }
      }
    });

**If you are using `Supabase` and want to exclude Supabase-defined roles, you can use the provider option**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          provider: 'supabase'
        }
      }
    });

important

You may encounter situations where Drizzle is slightly outdated compared to new roles specified by your database provider. In such cases, you can use the `provider` option and `exclude` additional roles:

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          provider: 'supabase',
          exclude: ['new_supabase_role']
        }
      }
    });

RLS on views[](#rls-on-views)
-----------------------------

With Drizzle, you can also specify RLS policies on views. For this, you need to use `security_invoker` in the view’s WITH options. Here is a small example:

    ...
    
    export const roomsUsersProfiles = pgView("rooms_users_profiles")
      .with({
        securityInvoker: true,
      })
      .as((qb) =>
        qb
          .select({
            ...getTableColumns(roomsUsers),
            email: profiles.email,
          })
          .from(roomsUsers)
          .innerJoin(profiles, eq(roomsUsers.userId, profiles.id))
      );

Using with Neon[](#using-with-neon)
-----------------------------------

The Neon Team helped us implement their vision of a wrapper on top of our raw policies API. We defined a specific `/neon` import with the `crudPolicy` function that includes predefined functions and Neon’s default roles.

Here’s an example of how to use the `crudPolicy` function:

    import { crudPolicy } from 'drizzle-orm/neon';
    import { integer, pgRole, pgTable } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin');
    
    export const users = pgTable('users', {
    	id: integer(),
    }, (t) => [
    	crudPolicy({ role: admin, read: true, modify: false }),
    ]);

This policy is equivalent to:

    import { sql } from 'drizzle-orm';
    import { integer, pgPolicy, pgRole, pgTable } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin');
    
    export const users = pgTable('users', {
    	id: integer(),
    }, (t) => [
    	pgPolicy(`crud-${admin.name}-policy-insert`, {
    		for: 'insert',
    		to: admin,
    		withCheck: sql`false`,
    	}),
    	pgPolicy(`crud-${admin.name}-policy-update`, {
    		for: 'update',
    		to: admin,
    		using: sql`false`,
    		withCheck: sql`false`,
    	}),
    	pgPolicy(`crud-${admin.name}-policy-delete`, {
    		for: 'delete',
    		to: admin,
    		using: sql`false`,
    	}),
    	pgPolicy(`crud-${admin.name}-policy-select`, {
    		for: 'select',
    		to: admin,
    		using: sql`true`,
    	}),
    ]);

`Neon` exposes predefined `authenticated` and `anaonymous` roles and related functions. If you are using `Neon` for RLS, you can use these roles, which are marked as existing, and the related functions in your RLS queries.

    // drizzle-orm/neon
    export const authenticatedRole = pgRole('authenticated').existing();
    export const anonymousRole = pgRole('anonymous').existing();
    
    export const authUid = (userIdColumn: AnyPgColumn) => sql`(select auth.user_id() = ${userIdColumn})`;
    
    export const neonIdentitySchema = pgSchema('neon_identity');
    
    export const usersSync = neonIdentitySchema.table('users_sync', {
      rawJson: jsonb('raw_json').notNull(),
      id: text().primaryKey().notNull(),
      name: text(),
      email: text(),
      createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }),
      deletedAt: timestamp('deleted_at', { withTimezone: true, mode: 'string' }),
    });

For example, you can use the `Neon` predefined roles and functions like this:

    import { sql } from 'drizzle-orm';
    import { authenticatedRole } from 'drizzle-orm/neon';
    import { integer, pgPolicy, pgRole, pgTable } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin');
    
    export const users = pgTable('users', {
    	id: integer(),
    }, (t) => [
    	pgPolicy(`policy-insert`, {
    		for: 'insert',
    		to: authenticatedRole,
    		withCheck: sql`false`,
    	}),
    ]);

Using with Supabase[](#using-with-supabase)
-------------------------------------------

We also have a `/supabase` import with a set of predefined roles marked as existing, which you can use in your schema. This import will be extended in a future release with more functions and helpers to make using RLS and `Supabase` simpler.

    // drizzle-orm/supabase
    export const anonRole = pgRole('anon').existing();
    export const authenticatedRole = pgRole('authenticated').existing();
    export const serviceRole = pgRole('service_role').existing();
    export const postgresRole = pgRole('postgres_role').existing();
    export const supabaseAuthAdminRole = pgRole('supabase_auth_admin').existing();

For example, you can use the `Supabase` predefined roles like this:

    import { sql } from 'drizzle-orm';
    import { serviceRole } from 'drizzle-orm/supabase';
    import { integer, pgPolicy, pgRole, pgTable } from 'drizzle-orm/pg-core';
    
    export const admin = pgRole('admin');
    
    export const users = pgTable('users', {
    	id: integer(),
    }, (t) => [
    	pgPolicy(`policy-insert`, {
    		for: 'insert',
    		to: serviceRole,
    		withCheck: sql`false`,
    	}),
    ]);

The `/supabase` import also includes predefined tables and functions that you can use in your application

    // drizzle-orm/supabase
    
    const auth = pgSchema('auth');
    export const authUsers = auth.table('users', {
    	id: uuid().primaryKey().notNull(),
    });
    
    const realtime = pgSchema('realtime');
    export const realtimeMessages = realtime.table(
    	'messages',
    	{
    		id: bigserial({ mode: 'bigint' }).primaryKey(),
    		topic: text().notNull(),
    		extension: text({
    			enum: ['presence', 'broadcast', 'postgres_changes'],
    		}).notNull(),
    	},
    );
    
    export const authUid = sql`(select auth.uid())`;
    export const realtimeTopic = sql`realtime.topic()`;

This allows you to use it in your code, and Drizzle Kit will treat them as existing databases, using them only as information to connect to other entities

    import { foreignKey, pgPolicy, pgTable, text, uuid } from "drizzle-orm/pg-core";
    import { sql } from "drizzle-orm/sql";
    import { authenticatedRole, authUsers } from "drizzle-orm/supabase";
    
    export const profiles = pgTable(
      "profiles",
      {
        id: uuid().primaryKey().notNull(),
        email: text().notNull(),
      },
      (table) => [
        foreignKey({
          columns: [table.id],
    	  // reference to the auth table from Supabase
          foreignColumns: [authUsers.id],
          name: "profiles_id_fk",
        }).onDelete("cascade"),
        pgPolicy("authenticated can view all profiles", {
          for: "select",
    	  // using predefined role from Supabase
          to: authenticatedRole,
          using: sql`true`,
        }),
      ]
    );

Let’s check an example of adding a policy to a table that exists in `Supabase`

    import { sql } from "drizzle-orm";
    import { pgPolicy } from "drizzle-orm/pg-core";
    import { authenticatedRole, realtimeMessages } from "drizzle-orm/supabase";
    
    export const policy = pgPolicy("authenticated role insert policy", {
      for: "insert",
      to: authenticatedRole,
      using: sql``,
    }).link(realtimeMessages);

We also have a great example showcasing how to use Drizzle RLS with Supabase and how to make actual queries with it. It also includes a great wrapper, `createDrizzle`, that can handle all the transactional work with Supabase for you. In upcoming releases, it will be moved to drizzle-orm/supabase, allowing you to use it natively

Please check [Drizzle SupaSecureSlack repo](https://github.com/rphlmr/drizzle-supabase-rls)

Here is an example of an implementation from this repository

    type SupabaseToken = {
      iss?: string;
      sub?: string;
      aud?: string[] | string;
      exp?: number;
      nbf?: number;
      iat?: number;
      jti?: string;
      role?: string;
    };
    
    export function createDrizzle(token: SupabaseToken, { admin, client }: { admin: PgDatabase<any>; client: PgDatabase<any> }) {
      return {
        admin,
        rls: (async (transaction, ...rest) => {
          return await client.transaction(async (tx) => {
            // Supabase exposes auth.uid() and auth.jwt()
            // https://supabase.com/docs/guides/database/postgres/row-level-security#helper-functions
            try {
              await tx.execute(sql`
              -- auth.jwt()
              select set_config('request.jwt.claims', '${sql.raw(
                JSON.stringify(token)
              )}', TRUE);
              -- auth.uid()
              select set_config('request.jwt.claim.sub', '${sql.raw(
                token.sub ?? ""
              )}', TRUE);												
              -- set local role
              set local role ${sql.raw(token.role ?? "anon")};
              `);
              return await transaction(tx);
            } finally {
              await tx.execute(sql`
                -- reset
                select set_config('request.jwt.claims', NULL, TRUE);
                select set_config('request.jwt.claim.sub', NULL, TRUE);
                reset role;
                `);
            }
          }, ...rest);
        }) as typeof client.transaction,
      };
    }

And it can be used as

    // https://github.com/orgs/supabase/discussions/23224
    // Should be secure because we use the access token that is signed, and not the data read directly from the storage
    export async function createDrizzleSupabaseClient() {
      const {
        data: { session },
      } = await createClient().auth.getSession();
      return createDrizzle(decode(session?.access_token ?? ""), { admin, client });
    }
    
    async function getRooms() {
      const db = await createDrizzleSupabaseClient();
      return db.rls((tx) => tx.select().from(rooms));
    }

Drizzle soft relations
======================

The sole purpose of Drizzle relations is to let you query your relational data in the most simple and consise way:

Relational queries

Select with joins

    import * as schema from './schema';
    import { drizzle } from 'drizzle-orm/…';
    
    const db = drizzle(client, { schema });
    
    const result = db.query.users.findMany({
      with: {
        posts: true,
      },
    });

    [{
      id: 10,
      name: "Dan",
      posts: [
        {
          id: 1,
          content: "SQL is awesome",
          authorId: 10,
        },
        {
          id: 2,
          content: "But check relational queries",
          authorId: 10,
        }
      ]
    }]

    import { drizzle } from 'drizzle-orm/…';
    import { eq } from 'drizzle-orm';
    import { posts, users } from './schema';
    
    const db = drizzle(client);
    
    const res = await db.select()
                        .from(users)
                        .leftJoin(posts, eq(posts.authorId, users.id))
                        .orderBy(users.id)
    const mappedResult =  

### One-to-one[](#one-to-one)

Drizzle ORM provides you an API to define `one-to-one` relations between tables with the `relations` operator.

An example of a `one-to-one` relation between users and users, where a user can invite another (this example uses a self reference):

    import { pgTable, serial, text, integer, boolean } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    	invitedBy: integer('invited_by'),
    });
    
    export const usersRelations = relations(users, ({ one }) => ({
    	invitee: one(users, {
    		fields: [users.invitedBy],
    		references: [users.id],
    	}),
    }));

Another example would be a user having a profile information stored in separate table. In this case, because the foreign key is stored in the “profile\_info” table, the user relation have neither fields or references. This tells Typescript that `user.profileInfo` is nullable:

    import { pgTable, serial, text, integer, jsonb } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
    
    export const usersRelations = relations(users, ({ one }) => ({
    	profileInfo: one(profileInfo),
    }));
    
    export const profileInfo = pgTable('profile_info', {
    	id: serial('id').primaryKey(),
    	userId: integer('user_id').references(() => users.id),
    	metadata: jsonb('metadata'),
    });
    
    export const profileInfoRelations = relations(profileInfo, ({ one }) => ({
    	user: one(users, { fields: [profileInfo.userId], references: [users.id] }),
    }));
    
    const user = await queryUserWithProfileInfo();
    //____^? type { id: number, profileInfo: { ... } | null  }

### One-to-many[](#one-to-many)

Drizzle ORM provides you an API to define `one-to-many` relations between tables with `relations` operator.

Example of `one-to-many` relation between users and posts they’ve written:

    import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
    
    export const usersRelations = relations(users, ({ many }) => ({
    	posts: many(posts),
    }));
    
    export const posts = pgTable('posts', {
    	id: serial('id').primaryKey(),
    	content: text('content'),
    	authorId: integer('author_id'),
    });
    
    export const postsRelations = relations(posts, ({ one }) => ({
    	author: one(users, {
    		fields: [posts.authorId],
    		references: [users.id],
    	}),
    }));

Now lets add comments to the posts:

    ...
    
    export const posts = pgTable('posts', {
    	id: serial('id').primaryKey(),
    	content: text('content'),
    	authorId: integer('author_id'),
    });
    
    export const postsRelations = relations(posts, ({ one, many }) => ({
    	author: one(users, {
    		fields: [posts.authorId],
    		references: [users.id],
    	}),
    	comments: many(comments)
    }));
    
    export const comments = pgTable('comments', {
    	id: serial('id').primaryKey(),
    	text: text('text'),
    	authorId: integer('author_id'),
    	postId: integer('post_id'),
    });
    
    export const commentsRelations = relations(comments, ({ one }) => ({
    	post: one(posts, {
    		fields: [comments.postId],
    		references: [posts.id],
    	}),
    }));

### Many-to-many[](#many-to-many)

Drizzle ORM provides you an API to define `many-to-many` relations between tables through so called `junction` or `join` tables, they have to be explicitly defined and store associations between related tables.

Example of `many-to-many` relation between users and groups:

    import { relations } from 'drizzle-orm';
    import { integer, pgTable, primaryKey, serial, text } from 'drizzle-orm/pg-core';
    
    export const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name'),
    });
    
    export const usersRelations = relations(users, ({ many }) => ({
      usersToGroups: many(usersToGroups),
    }));
    
    export const groups = pgTable('groups', {
      id: serial('id').primaryKey(),
      name: text('name'),
    });
    
    export const groupsRelations = relations(groups, ({ many }) => ({
      usersToGroups: many(usersToGroups),
    }));
    
    export const usersToGroups = pgTable(
      'users_to_groups',
      {
        userId: integer('user_id')
          .notNull()
          .references(() => users.id),
        groupId: integer('group_id')
          .notNull()
          .references(() => groups.id),
      },
      (t) => [
    		primaryKey({ columns: [t.userId, t.groupId] })
    	],
    );
    
    export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
      group: one(groups, {
        fields: [usersToGroups.groupId],
        references: [groups.id],
      }),
      user: one(users, {
        fields: [usersToGroups.userId],
        references: [users.id],
      }),
    }));

### Foreign keys[](#foreign-keys)

You might’ve noticed that `relations` look similar to foreign keys — they even have a `references` property. So what’s the difference?

While foreign keys serve a similar purpose, defining relations between tables, they work on a different level compared to `relations`.

Foreign keys are a database level constraint, they are checked on every `insert`/`update`/`delete` operation and throw an error if a constraint is violated. On the other hand, `relations` are a higher level abstraction, they are used to define relations between tables on the application level only. They do not affect the database schema in any way and do not create foreign keys implicitly.

What this means is `relations` and foreign keys can be used together, but they are not dependent on each other. You can define `relations` without using foreign keys (and vice versa), which allows them to be used with databases that do not support foreign keys.

The following two examples will work exactly the same in terms of querying the data using Drizzle relational queries.

schema1.ts

schema2.ts

    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
    
    export const usersRelations = relations(users, ({ one, many }) => ({
    	profileInfo: one(users, {
    		fields: [profileInfo.userId],
    		references: [users.id],
    	}),
    }));
    
    export const profileInfo = pgTable('profile_info', {
    	id: serial('id').primaryKey(),
    	userId: integer("user_id"),
    	metadata: jsonb("metadata"),
    });

    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
    
    export const usersRelations = relations(users, ({ one, many }) => ({
    	profileInfo: one(users, {
    		fields: [profileInfo.userId],
    		references: [users.id],
    	}),
    }));
    
    export const profileInfo = pgTable('profile_info', {
    	id: serial('id').primaryKey(),
    	userId: integer("user_id").references(() => users.id),
    	metadata: jsonb("metadata"),
    });

### Foreign key actions[](#foreign-key-actions)

for more information check [postgres foreign keys docs](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK)

You can specify actions that should occur when the referenced data in the parent table is modified. These actions are known as “foreign key actions.” PostgreSQL provides several options for these actions.

On Delete/ Update Actions

*   `CASCADE`: When a row in the parent table is deleted, all corresponding rows in the child table will also be deleted. This ensures that no orphaned rows exist in the child table.
    
*   `NO ACTION`: This is the default action. It prevents the deletion of a row in the parent table if there are related rows in the child table. The DELETE operation in the parent table will fail.
    
*   `RESTRICT`: Similar to NO ACTION, it prevents the deletion of a parent row if there are dependent rows in the child table. It is essentially the same as NO ACTION and included for compatibility reasons.
    
*   `SET DEFAULT`: If a row in the parent table is deleted, the foreign key column in the child table will be set to its default value if it has one. If it doesn’t have a default value, the DELETE operation will fail.
    
*   `SET NULL`: When a row in the parent table is deleted, the foreign key column in the child table will be set to NULL. This action assumes that the foreign key column in the child table allows NULL values.
    

> Analogous to ON DELETE there is also ON UPDATE which is invoked when a referenced column is changed (updated). The possible actions are the same, except that column lists cannot be specified for SET NULL and SET DEFAULT. In this case, CASCADE means that the updated values of the referenced column(s) should be copied into the referencing row(s). in drizzle you can add foreign key action using `references()` second argument.

type of the actions

    export type UpdateDeleteAction = 'cascade' | 'restrict' | 'no action' | 'set null' | 'set default';
    
    // second argument of references interface
    actions?: {
    		onUpdate?: UpdateDeleteAction;
    		onDelete?: UpdateDeleteAction;
    	} | undefined

In the following example, adding `onDelete: 'cascade'` to the author field on the `posts` schema means that deleting the `user` will also delete all related Post records.

    import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
    
    export const posts = pgTable('posts', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    	author: integer('author').references(() => users.id, {onDelete: 'cascade'}).notNull(),
    });

For constraints specified with the `foreignKey` operator, foreign key actions are defined with the syntax:

    import { foreignKey, pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
    
    export const posts = pgTable('posts', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    	author: integer('author').notNull(),
    }, (table) => [
    	foreignKey({
    		name: "author_fk",
    		columns: [table.author],
    		foreignColumns: [users.id],
    	})
    		.onDelete('cascade')
    		.onUpdate('cascade')
    ]);

### Disambiguating relations[](#disambiguating-relations)

Drizzle also provides the `relationName` option as a way to disambiguate relations when you define multiple of them between the same two tables. For example, if you define a `posts` table that has the `author` and `reviewer` relations.

    import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
     
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name'),
    });
     
    export const usersRelations = relations(users, ({ many }) => ({
    	author: many(posts, { relationName: 'author' }),
    	reviewer: many(posts, { relationName: 'reviewer' }),
    }));
     
    export const posts = pgTable('posts', {
    	id: serial('id').primaryKey(),
    	content: text('content'),
    	authorId: integer('author_id'),
    	reviewerId: integer('reviewer_id'),
    });
     
    export const postsRelations = relations(posts, ({ one }) => ({
    	author: one(users, {
    		fields: [posts.authorId],
    		references: [users.id],
    		relationName: 'author',
    	}),
    	reviewer: one(users, {
    		fields: [posts.reviewerId],
    		references: [users.id],
    		relationName: 'reviewer',
    	}),
    }));

Migrations with Drizzle Kit
===========================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)

**Drizzle Kit** is a CLI tool for managing SQL database migrations with Drizzle.

npm

yarn

pnpm

bun

    npm i drizzle-kit

    yarn add drizzle-kit

    pnpm add drizzle-kit

    bun add drizzle-kit

IMPORTANT

Make sure to first go through Drizzle [get started](/docs/get-started) and [migration foundamentals](/docs/migrations) and pick SQL migration flow that suits your business needs best.

Based on your schema, Drizzle Kit let’s you generate and run SQL migration files, push schema directly to the database, pull schema from database, spin up drizzle studio and has a couple of utility commands.

npm

yarn

pnpm

bun

    npx drizzle-kit generate
    npx drizzle-kit migrate
    npx drizzle-kit push
    npx drizzle-kit pull
    npx drizzle-kit check
    npx drizzle-kit up
    npx drizzle-kit studio

    yarn drizzle-kit generate
    yarn drizzle-kit migrate
    yarn drizzle-kit push
    yarn drizzle-kit pull
    yarn drizzle-kit check
    yarn drizzle-kit up
    yarn drizzle-kit studio

    pnpm drizzle-kit generate
    pnpm drizzle-kit migrate
    pnpm drizzle-kit push
    pnpm drizzle-kit pull
    pnpm drizzle-kit check
    pnpm drizzle-kit up
    pnpm drizzle-kit studio

    bun drizzle-kit generate
    bun drizzle-kit migrate
    bun drizzle-kit push
    bun drizzle-kit pull
    bun drizzle-kit check
    bun drizzle-kit up
    bun drizzle-kit studio

[`drizzle-kit generate`](/docs/drizzle-kit-generate)

lets you generate SQL migration files based on your Drizzle schema either upon declaration or on subsequent changes, [see here](/docs/drizzle-kit-generate).

[`drizzle-kit migrate`](/docs/drizzle-kit-migrate)

lets you apply generated SQL migration files to your database, [see here](/docs/drizzle-kit-migrate).

[`drizzle-kit pull`](/docs/drizzle-kit-pull)

lets you pull(introspect) database schema, convert it to Drizzle schema and save it to your codebase, [see here](/docs/drizzle-kit-pull)

[`drizzle-kit push`](/docs/drizzle-kit-push)

lets you push your Drizzle schema to database either upon declaration or on subsequent schema changes, [see here](/docs/drizzle-kit-push)

[`drizzle-kit studio`](/docs/drizzle-kit-studio)

will connect to your database and spin up proxy server for Drizzle Studio which you can use for convenient database browsing, [see here](/docs/drizzle-kit-studio)

[`drizzle-kit check`](/docs/drizzle-kit-check)

will walk through all generate migrations and check for any race conditions(collisions) of generated migrations, [see here](/docs/drizzle-kit-check)

[`drizzle-kit up`](/docs/drizzle-kit-up)

used to upgrade snapshots of previously generated migrations, [see here](/docs/drizzle-kit-up)

  

Drizzle Kit is configured through [drizzle.config.ts](/docs/drizzle-config-file) configuration file or via CLI params.  
It’s required to at least provide SQL `dialect` and `schema` path for Drizzle Kit to know how to generate migrations.

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle.config.ts  <--- Drizzle config file
     ├ 📜 package.json
     └ 📜 tsconfig.json

simple config

extended config

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
    });

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      out: "./drizzle",
      dialect: "postgresql",
      schema: "./src/schema.ts",
    
      driver: "pglite",
      dbCredentials: {
        url: "./database/",
      },
    
      extensionsFilters: ["postgis"],
      schemaFilter: "public",
      tablesFilter: "*",
    
      introspect: {
        casing: "camel",
      },
    
      migrations: {
        prefix: "timestamp",
        table: "__drizzle_migrations__",
        schema: "public",
      },
    
      breakpoints: true,
      strict: true,
      verbose: true,
    });

You can provide Drizzle Kit config path via CLI param, it’s very useful when you have multiple database stages or multiple databases or different databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit push --config=drizzle-dev.drizzle.config
    npx drizzle-kit push --config=drizzle-prod.drizzle.config

    yarn drizzle-kit push --config=drizzle-dev.drizzle.config
    yarn drizzle-kit push --config=drizzle-prod.drizzle.config

    pnpm drizzle-kit push --config=drizzle-dev.drizzle.config
    pnpm drizzle-kit push --config=drizzle-prod.drizzle.config

    bun drizzle-kit push --config=drizzle-dev.drizzle.config
    bun drizzle-kit push --config=drizzle-prod.drizzle.config

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

`drizzle-kit generate`
======================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)

  

`drizzle-kit generate` lets you generate SQL migrations based on you Drizzle schema upon declaration or on subsequent schema changes.

How it works under the hood?

Drizzle Kit `generate` command triggers a sequence of events:

1.  It will read through your Drizzle schema file(s) and compose a json snapshot of your schema
2.  It will read through your previous migrations folders and compare current json snapshot to the most recent one
3.  Based on json differences it will generate SQL migrations
4.  Save `migration.sql` and `snapshot.json` in migration folder under current timestamp

src/schema.ts

    import * as p from "./drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

    ┌────────────────────────┐                  
    │ $ drizzle-kit generate │                  
    └─┬──────────────────────┘                  
      │                                           
      └ 1. read previous migration folders
        2. find diff between current and previous scheama
        3. prompt developer for renames if necessary
      ┌ 4. generate SQL migration and persist to file
      │    ┌─┴───────────────────────────────────────┐  
      │      📂 drizzle       
      │      ├ 📂 _meta
      │      └ 📜 0000_premium_mister_fear.sql
      v

    -- drizzle/0000_premium_mister_fear.sql
    
    CREATE TABLE "users" (
     "id" SERIAL PRIMARY KEY,
     "name" TEXT,
     "email" TEXT UNIQUE
    );

It’s designed to cover [code first](/docs/migrations) approach of managing Drizzle migrations. You can apply generated migrations using [`drizzle-kit migrate`](/docs/drizzle-kit-migrate), using drizzle-orm’s `migrate()`, using external migration tools like bytebase or running migrations yourself directly on the database.

`drizzle-kit generate` command requires you to provide both `dialect` and `schema` path options, you can set them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options

With config file

As CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
    });

    npx drizzle-kit generate

    npx drizzle-kit generate --dialect=postgresql --schema=./src/schema.ts

### Schema files path[](#schema-files-path)

You can have a single `schema.ts` file or as many schema files as you want spread out across the project. Drizzle Kit requires you to specify path(s) to them as a [glob](https://www.digitalocean.com/community/tools/glob?comments=true&glob=/**/*.js&matches=false&tests=//%20This%20will%20match%20as%20it%20ends%20with%20'.js'&tests=/hello/world.js&tests=//%20This%20won't%20match!&tests=/test/some/globs) via `schema` configuration option.

Example 1

Example 2

Example 3

Example 4

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ ...
     │ ├ 📜 index.ts
     │ └ 📜 schema.ts 
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema.ts",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 user
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ ├ 📂 posts
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/schema.ts",
      //or
      schema: ["./src/user/schema.ts", "./src/posts/schema.ts"]
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 schema
     │ │ ├ 📜 user.ts 
     │ │ ├ 📜 post.ts 
     │ │ └ 📜 comment.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema/*",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📜 userById.ts 
     │ ├ 📜 userByEmail.ts 
     │ ├ 📜 listUsers.ts 
     │ ├ 📜 user.sql.ts 
     │ ├ 📜 postById.ts 
     │ ├ 📜 listPosts.ts 
     │ └ 📜 post.sql.ts 
     │ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/*.sql.ts", // Dax's favourite
    });

### Custom migration file name[](#custom-migration-file-name)

You can set custom migration file names by providing `--name` CLI option

    npx drizzle-kit generate --name=init

    📦 <project root>
     ├ 📂 drizzle
     │ ├ 📂 _meta
     │ └ 📜 0000_init.sql 
     ├ 📂 src
     └ …

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases or different databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit generate --config=drizzle-dev.config.ts
    npx drizzle-kit generate --config=drizzle-prod.config.ts

    yarn drizzle-kit generate --config=drizzle-dev.config.ts
    yarn drizzle-kit generate --config=drizzle-prod.config.ts

    pnpm drizzle-kit generate --config=drizzle-dev.config.ts
    pnpm drizzle-kit generate --config=drizzle-prod.config.ts

    bun drizzle-kit generate --config=drizzle-dev.config.ts
    bun drizzle-kit generate --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Custom migrations[](#custom-migrations)

You can generate empty migration files to write your own custom SQL migrations for DDL alternations currently not supported by Drizzle Kit or data seeding. Extended docs on custom migrations - [see here](/docs/kit-custom-migrations)

    drizzle-kit generate --custom --name=seed-users

    📦 <project root>
     ├ 📂 drizzle
     │ ├ 📂 _meta
     │ ├ 📜 0000_init.sql 
     │ └ 📜 0001_seed-users.sql 
     ├ 📂 src
     └ …

    -- ./drizzle/0001_seed-users.sql
    
    INSERT INTO "users" ("name") VALUES('Dan');
    INSERT INTO "users" ("name") VALUES('Andrew');
    INSERT INTO "users" ("name") VALUES('Dandrew');

### Extended list of available configurations[](#extended-list-of-available-configurations)

`drizzle-kit generate` has a list of cli-only options

`custom`

generate empty SQL for custom migration

`name`

generate migration with custom name

npm

yarn

pnpm

bun

    npx drizzle-kit generate --name=init
    npx drizzle-kit generate --name=seed_users --custom

    yarn drizzle-kit generate --name=init
    yarn drizzle-kit generate --name=seed_users --custom

    pnpm drizzle-kit generate --name=init
    pnpm drizzle-kit generate --name=seed_users --custom

    bun drizzle-kit generate --name=init
    bun drizzle-kit generate --name=seed_users --custom

  

* * *

  

We recommend configuring `drizzle-kit` through [drizzle.config.ts](/docs/drizzle-config-file) file, yet you can provide all configuration options through CLI if necessary, e.g. in CI/CD pipelines, etc.

`dialect`

`required`

Database dialect, one of `postgresql` `mysql` `sqlite` `turso` `singlestore`

`schema`

`required`

Path to typescript schema file(s) or folder(s) with multiple schema files

`out`

Migrations output folder, default is `./drizzle`

`config`

Configuration file path, default is `drizzle.config.ts`

`breakpoints`

SQL statements breakpoints, default is `true`

### Extended example[](#extended-example)

Example of how to create a custom postgresql migration file named `0001_seed-users.sql` with Drizzle schema located in `./src/schema.ts` and migrations folder named `./migrations` instead of default `./drizzle`.

We will also place drizzle config file in the `configs` folder.

Let’s create config file:

    📦 <project root>
     ├ 📂 migrations
     ├ 📂 configs
     │ └ 📜 drizzle.config.ts
     ├ 📂 src
     └ …

drizzle.config.ts

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      out: "./migrations",
    });

Now let’s run

    npx drizzle-kit generate --config=./configs/drizzle.config.ts --name=seed-users --custom

And it will successfully generate

    📦 <project root>
     ├ …
     ├ 📂 migrations
     │ ├ 📂 _meta
     │ ├ 📜 0000_init.sql 
     │ └ 📜 0001_seed-users.sql 
     └ …

    -- ./drizzle/0001_seed-users.sql
    
    INSERT INTO "users" ("name") VALUES('Dan');
    INSERT INTO "users" ("name") VALUES('Andrew');
    INSERT INTO "users" ("name") VALUES('Dandrew');

`drizzle-kit migrate`
=====================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)
*   `drizzle-kit generate` command - [read here](/docs/drizzle-kit-generate)

  

`drizzle-kit migrate` lets you apply SQL migrations generated by [`drizzle-kit generate`](/docs/drizzle-kit-generate). It’s designed to cover [code first(option 3)](/docs/migrations) approach of managing Drizzle migrations.

How it works under the hood?

Drizzle Kit `migrate` command triggers a sequence of events:

1.  Reads through migration folder and read all `.sql` migration files
2.  Connects to the database and fetches entries from drizzle migrations log table
3.  Based on previously applied migrations it will decide which new migrations to run
4.  Runs SQL migrations and logs applied migrations to drizzle migrations table

      ├ 📂 drizzle       
      │ ├ 📂 _meta
      │ ├ 📜 0000_premium_mister_fear.sql
      │ └ 📜 0001_delicate_professor_xavie.sql
      └ …

    ┌───────────────────────┐                  
    │ $ drizzle-kit migrate │                  
    └─┬─────────────────────┘                  
      │                                                         ┌──────────────────────────┐                                         
      └ 1. reads migration.sql files in migrations folder       │                          │
        2. fetch migration history from database -------------> │                          │
      ┌ 3. pick previously unapplied migrations <-------------- │         DATABASE         │
      └ 4. apply new migration to the database ---------------> │                          │
                                                                │                          │
                                                                └──────────────────────────┘
    [✓] done!        

`drizzle-kit migrate` command requires you to specify both `dialect` and database connection credentials, you can provide them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options

With config file

As CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname"
      },
    });

    npx drizzle-kit migrate

    npx drizzle-kit migrate --dialect=postgresql --url=postgresql://user:password@host:port/dbname

### Applied migrations log in the database[](#applied-migrations-log-in-the-database)

Upon running migrations Drizzle Kit will persist records about successfully applied migrations in your database. It will store them in migrations log table named `__drizzle_migrations`.

You can customise both **table** and **schema**(PostgreSQL only) of that table via drizzle config file:

drizzle.config.ts

    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname"
      },
      migrations: {
        table: 'my-migrations-table', // `__drizzle_migrations` by default
        schema: 'public', // used in PostgreSQL only, `drizzle` by default
      },
    });

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit migrate --config=drizzle-dev.config.ts
    npx drizzle-kit migrate --config=drizzle-prod.config.ts

    yarn drizzle-kit migrate --config=drizzle-dev.config.ts
    yarn drizzle-kit migrate --config=drizzle-prod.config.ts

    pnpm drizzle-kit migrate --config=drizzle-dev.config.ts
    pnpm drizzle-kit migrate --config=drizzle-prod.config.ts

    bun drizzle-kit migrate --config=drizzle-dev.config.ts
    bun drizzle-kit migrate --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Extended example[](#extended-example)

Let’s generate SQL migration and apply it to our database using `drizzle-kit generate` and `drizzle-kit migrate` commands

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📜 schema.ts
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ …

drizzle.config.ts

src/schema.ts

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname"
      },
      migrations: {
        table: 'journal', 
        schema: 'drizzle', 
      },
    });

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
    })

Now let’s run

    npx drizzle-kit generate --name=init

it will generate

    📦 <project root>
     ├ …
     ├ 📂 migrations
     │ ├ 📂 _meta
     │ └ 📜 0000_init.sql 
     └ …

    -- ./drizzle/0000_init.sql
    
    CREATE TABLE "users"(
      id serial primary key,
      name text
    )

Now let’s run

    npx drizzle-kit migrate

and our SQL migration is now successfully applied to the database ✅

`drizzle-kit push`
==================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file) docs

`drizzle-kit push` lets you literally push your schema and subsequent schema changes directly to the database while omitting SQL files generation, it’s designed to cover [code first](/docs/migrations) approach of Drizzle migrations.

How it works under the hood?

When you run Drizzle Kit `push` command it will:

1.  Read through your Drizzle schema file(s) and compose a json snapshot of your schema
2.  Pull(introspect) database schema
3.  Based on differences between those two it will generate SQL migrations
4.  Apply SQL migrations to the database

src/schema.ts

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
    };

    ┌─────────────────────┐                  
    │ ~ drizzle-kit push  │                  
    └─┬───────────────────┘                  
      │                                           ┌──────────────────────────┐
      └ Pull current datatabase schema ---------> │                          │
                                                  │                          │
      ┌ Generate alternations based on diff <---- │         DATABASE         │
      │                                           │                          │
      └ Apply migrations to the database -------> │                          │
                                           │      └──────────────────────────┘
                                           │
      ┌────────────────────────────────────┴────────────────┐
       create table users(id serial primary key, name text);

It’s the best approach for rapid prototyping and we’ve seen dozens of teams and solo developers successfully using it as a primary migrations flow in their production applications. It pairs exceptionally well with blue/green deployment strategy and serverless databases like [Planetscale](https://planetscale.com/), [Neon](https://neon.tech/), [Turso](https://turso.tech/drizzle) and others.

  

* * *

  

`drizzle-kit push` requires you to specify `dialect`, path to the `schema` file(s) and either database connection `url` or `user:password@host:port/db` params, you can provide them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options:

With config file

With CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname",
      },
    });

    npx drizzle-kit push

    npx drizzle-kit push --dialect=postgresql --schema=./src/schema.ts --url=postgresql://user:password@host:port/dbname

### Schema files path[](#schema-files-path)

You can have a single `schema.ts` file or as many schema files as you want spread out across the project. Drizzle Kit requires you to specify path(s) to them as a [glob](https://www.digitalocean.com/community/tools/glob?comments=true&glob=/**/*.js&matches=false&tests=//%20This%20will%20match%20as%20it%20ends%20with%20'.js'&tests=/hello/world.js&tests=//%20This%20won't%20match!&tests=/test/some/globs) via `schema` configuration option.

Example 1

Example 2

Example 3

Example 4

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ ...
     │ ├ 📜 index.ts
     │ └ 📜 schema.ts 
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema.ts",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 user
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ ├ 📂 posts
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/schema.ts",
      //or
      schema: ["./src/user/schema.ts", "./src/posts/schema.ts"]
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 schema
     │ │ ├ 📜 user.ts 
     │ │ ├ 📜 post.ts 
     │ │ └ 📜 comment.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema/*",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📜 userById.ts 
     │ ├ 📜 userByEmail.ts 
     │ ├ 📜 listUsers.ts 
     │ ├ 📜 user.sql.ts 
     │ ├ 📜 postById.ts 
     │ ├ 📜 listPosts.ts 
     │ └ 📜 post.sql.ts 
     │ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/*.sql.ts", // Dax's favourite
    });

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases or different databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit push --config=drizzle-dev.config.ts
    npx drizzle-kit push --config=drizzle-prod.config.ts

    yarn drizzle-kit push --config=drizzle-dev.config.ts
    yarn drizzle-kit push --config=drizzle-prod.config.ts

    pnpm drizzle-kit push --config=drizzle-dev.config.ts
    pnpm drizzle-kit push --config=drizzle-prod.config.ts

    bun drizzle-kit push --config=drizzle-dev.config.ts
    bun drizzle-kit push --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Specifying database driver[](#specifying-database-driver)

IMPORTANT

**Expo SQLite** and **OP SQLite** are on-device(per-user) databases, there’s no way to `push` migrations there.  
For embedded databases Drizzle provides **embedded migrations** - check out our [get started](/docs/get-started/expo-new) guide.

Drizzle Kit does not come with a pre-bundled database driver, it will automatically pick available database driver from your current project based on the `dialect` - [see discussion](https://github.com/drizzle-team/drizzle-orm/discussions/2203).

Mostly all drivers of the same dialect share the same set of connection params, as for exceptions like `aws-data-api`, `pglight` and `d1-http` - you will have to explicitly specify `driver` param.

AWS Data API

PGLite

Cloudflare D1 HTTP

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      driver: "aws-data-api",
      dbCredentials: {
        database: "database",
        resourceArn: "resourceArn",
        secretArn: "secretArn",
      },
    };

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      driver: "pglite",
      dbCredentials: {
        // inmemory
        url: ":memory:"
        
        // or database folder
        url: "./database/"
      },
    };

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "sqlite",
      schema: "./src/schema.ts",
      driver: "d1-http",
      dbCredentials: {
        accountId: "accountId",
        databaseId: "databaseId",
        token: "token",
      },
    };

### Including tables, schemas and extensions[](#including-tables-schemas-and-extensions)

`drizzle-kit push` will by default manage all tables in `public` schema. You can configure list of tables, schemas and extensions via `tablesFilters`, `schemaFilter` and `extensionFilters` options.

`tablesFilter`

`glob` based table names filter, e.g. `["users", "user_info"]` or `"user*"`. Default is `"*"`

`schemaFilter`

Schema names filter, e.g. `["public", "drizzle"]`. Default is `["public"]`

`extensionsFilters`

List of installed database extensions, e.g. `["postgis"]`. Default is `[]`

  

Let’s configure drizzle-kit to only operate with **all tables** in **public** schema and let drizzle-kit know that there’s a **postgis** extension installed, which creates it’s own tables in public schema, so drizzle can ignore them.

drizzle.config.ts

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname",
      },
      extensionsFilters: ["postgis"],
      schemaFilter: ["public"],
      tablesFilter: ["*"],
    });

    npx drizzle-kit push

### Extended list of configurations[](#extended-list-of-configurations)

`drizzle-kit push` has a list of cli-only options

`verbose`

print all SQL statements prior to execution

`strict`

always ask for approval before executing SQL statements

`force`

auto-accept all data-loss statements

  

npm

yarn

pnpm

bun

    npx drizzle-kit push --strict --verbose --force

    yarn drizzle-kit push --strict --verbose --force

    pnpm drizzle-kit push --strict --verbose --force

    bun drizzle-kit push --strict --verbose --force

  

* * *

  

We recommend configuring `drizzle-kit` through [drizzle.config.ts](/docs/drizzle-config-file) file, yet you can provide all configuration options through CLI if necessary, e.g. in CI/CD pipelines, etc.

`dialect`

`required`

Database dialect, one of `postgresql` `mysql` `sqlite` `turso` `singlestore`

`schema`

`required`

Path to typescript schema file(s) or folder(s) with multiple schema files

`driver`

Drivers exceptions `aws-data-api` `d1-http` `pglight`

`tablesFilter`

Table name filter

`schemaFilter`

Schema name filter. Default: `["public"]`

`extensionsFilters`

Database extensions internal database filters

`url`

Database connection string

`user`

Database user

`password`

Database password

`host`

Host

`port`

Port

`database`

Database name

`config`

Config file path, default=`drizzle.config.ts`

npm

yarn

pnpm

bun

    npx drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
    npx drizzle-kit push dialect=postgresql schema=src/schema.ts driver=pglite url=database/
    npx drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

    yarn drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
    yarn drizzle-kit push dialect=postgresql schema=src/schema.ts driver=pglite url=database/
    yarn drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

    pnpm drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
    pnpm drizzle-kit push dialect=postgresql schema=src/schema.ts driver=pglite url=database/
    pnpm drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

    bun drizzle-kit push dialect=postgresql schema=src/schema.ts url=postgresql://user:password@host:port/dbname
    bun drizzle-kit push dialect=postgresql schema=src/schema.ts driver=pglite url=database/
    bun drizzle-kit push dialect=postgresql schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

### Extended example[](#extended-example)

Let’s declare drizzle schema in the project and push it to the database via `drizzle-kit push` command

    📦 <project root>
     ├ 📂 src
     │ ├ 📜 schema.ts
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ …

drizzle.config.ts

src/schema.ts

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname"
      },
    });

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
    })

Now let’s run

    npx drizzle-kit push

it will pull existing(empty) schema from the database and generate SQL migration and apply it under the hood

    CREATE TABLE "users"(
      id serial primary key,
      name text
    )

DONE ✅

`drizzle-kit pull`
==================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file) docs

`drizzle-kit pull` lets you literally pull(introspect) your existing database schema and generate `schema.ts` drizzle schema file, it is designed to cover [database first](/docs/migrations) approach of Drizzle migrations.

How it works under the hood?

When you run Drizzle Kit `pull` command it will:

1.  Pull database schema(DDL) from your existing database
2.  Generate `schema.ts` drizzle schema file and save it to `out` folder

                                      ┌────────────────────────┐      ┌─────────────────────────┐ 
                                      │                        │ <---  CREATE TABLE "users" (
    ┌──────────────────────────┐      │                        │        "id" SERIAL PRIMARY KEY,
    │ ~ drizzle-kit pull       │      │                        │        "name" TEXT,
    └─┬────────────────────────┘      │        DATABASE        │        "email" TEXT UNIQUE
      │                               │                        │       );
      └ Pull datatabase schema -----> │                        │
      ┌ Generate Drizzle       <----- │                        │
      │ schema TypeScript file        └────────────────────────┘
      │
      v

    import * as p from "drizzle-orm/pg-core";
    
    export const users = p.pgTable("users", {
      id: p.serial().primaryKey(),
      name: p.text(),
      email: p.text().unique(), 
    };

It is a great approach if you need to manage database schema outside of your TypeScript project or you’re using database, which is managed by somebody else.

  

* * *

  

`drizzle-kit pull` requires you to specify `dialect` and either database connection `url` or `user:password@host:port/db` params, you can provide them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options:

With config file

With CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname",
      },
    });

    npx drizzle-kit pull

    npx drizzle-kit pull --dialect=postgresql --url=postgresql://user:password@host:port/dbname

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases or different databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit pull --config=drizzle-dev.config.ts
    npx drizzle-kit pull --config=drizzle-prod.config.ts

    yarn drizzle-kit pull --config=drizzle-dev.config.ts
    yarn drizzle-kit pull --config=drizzle-prod.config.ts

    pnpm drizzle-kit pull --config=drizzle-dev.config.ts
    pnpm drizzle-kit pull --config=drizzle-prod.config.ts

    bun drizzle-kit pull --config=drizzle-dev.config.ts
    bun drizzle-kit pull --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Specifying database driver[](#specifying-database-driver)

IMPORTANT

**Expo SQLite** and **OP SQLite** are on-device(per-user) databases, there’s no way to `pull` database schema from there.  
For embedded databases Drizzle provides **embedded migrations** - check out our [get started](/docs/get-started/expo-new) guide.

Drizzle Kit does not come with a pre-bundled database driver, it will automatically pick available database driver from your current project based on the `dialect` - [see discussion](https://github.com/drizzle-team/drizzle-orm/discussions/2203).

Mostly all drivers of the same dialect share the same set of connection params, as for exceptions like `aws-data-api`, `pglight` and `d1-http` - you will have to explicitely specify `driver` param.

AWS Data API

PGLite

Cloudflare D1 HTTP

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      driver: "aws-data-api",
      dbCredentials: {
        database: "database",
        resourceArn: "resourceArn",
        secretArn: "secretArn",
      },
    };

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      driver: "pglite",
      dbCredentials: {
        // inmemory
        url: ":memory:"
        
        // or database folder
        url: "./database/"
      },
    };

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "sqlite",
      driver: "d1-http",
      dbCredentials: {
        accountId: "accountId",
        databaseId: "databaseId",
        token: "token",
      },
    };

### Including tables, schemas and extensions[](#including-tables-schemas-and-extensions)

`drizzle-kit push` will by default manage all tables in `public` schema. You can configure list of tables, schemas and extensions via `tablesFilters`, `schemaFilter` and `extensionFilters` options.

`tablesFilter`

`glob` based table names filter, e.g. `["users", "user_info"]` or `"user*"`. Default is `"*"`

`schemaFilter`

Schema names filter, e.g. `["public", "drizzle"]`. Default is `["public"]`

`extensionsFilters`

List of installed database extensions, e.g. `["postgis"]`. Default is `[]`

  

Let’s configure drizzle-kit to only operate with **all tables** in **public** schema and let drizzle-kit know that there’s a **postgis** extension installed, which creates it’s own tables in public schema, so drizzle can ignore them.

drizzle.config.ts

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname",
      },
      extensionsFilters: ["postgis"],
      schemaFilter: ["public"],
      tablesFilter: ["*"],
    });

    npx drizzle-kit push

### Extended list of configurations[](#extended-list-of-configurations)

We recommend configuring `drizzle-kit` through [drizzle.config.ts](/docs/drizzle-config-file) file, yet you can provide all configuration options through CLI if necessary, e.g. in CI/CD pipelines, etc.

`dialect`

`required`

Database dialect, one of `postgresql` `mysql` `sqlite` `turso` `singlestore`

`driver`

Drivers exceptions `aws-data-api` `d1-http` `pglight`

`out`

Migrations output folder path, default is `./drizzle`

`url`

Database connection string

`user`

Database user

`password`

Database password

`host`

Host

`port`

Port

`database`

Database name

`config`

Config file path, default is `drizzle.config.ts`

`introspect-casing`

Strategy for JS keys creation in columns, tables, etc. `preserve` `camel`

`tablesFilter`

Table name filter

`schemaFilter`

Schema name filter. Default: `["public"]`

`extensionsFilters`

Database extensions internal database filters

npm

yarn

pnpm

bun

    npx drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --url=postgresql://user:password@host:port/dbname
    npx drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --driver=pglite url=database/
    npx drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

    yarn drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --url=postgresql://user:password@host:port/dbname
    yarn drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --driver=pglite url=database/
    yarn drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

    pnpm drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --url=postgresql://user:password@host:port/dbname
    pnpm drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --driver=pglite url=database/
    pnpm drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

    bun drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --url=postgresql://user:password@host:port/dbname
    bun drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --driver=pglite url=database/
    bun drizzle-kit pull --dialect=postgresql --schema=src/schema.ts --tablesFilter=‘user*’ --extensionsFilters=postgis url=postgresql://user:password@host:port/dbname

`drizzle-kit export`
====================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)

  

`drizzle-kit export` lets you export SQL representation of Drizzle schema and print in console SQL DDL representation on it.

How it works under the hood?

Drizzle Kit `export` command triggers a sequence of events:

1.  It will read through your Drizzle schema file(s) and compose a json snapshot of your schema
2.  Based on json differences it will generate SQL DDL statements
3.  Output SQL DDL statements to console

It’s designed to cover [codebase first](/docs/migrations) approach of managing Drizzle migrations. You can export the SQL representation of the Drizzle schema, allowing external tools like Atlas to handle all the migrations for you

`drizzle-kit export` command requires you to provide both `dialect` and `schema` path options, you can set them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options

With config file

As CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
    });

    npx drizzle-kit export

    npx drizzle-kit export --dialect=postgresql --schema=./src/schema.ts

### Schema files path[](#schema-files-path)

You can have a single `schema.ts` file or as many schema files as you want spread out across the project. Drizzle Kit requires you to specify path(s) to them as a [glob](https://www.digitalocean.com/community/tools/glob?comments=true&glob=/**/*.js&matches=false&tests=//%20This%20will%20match%20as%20it%20ends%20with%20'.js'&tests=/hello/world.js&tests=//%20This%20won't%20match!&tests=/test/some/globs) via `schema` configuration option.

Example 1

Example 2

Example 3

Example 4

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ ...
     │ ├ 📜 index.ts
     │ └ 📜 schema.ts 
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema.ts",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 user
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ ├ 📂 posts
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/schema.ts",
      //or
      schema: ["./src/user/schema.ts", "./src/posts/schema.ts"]
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 schema
     │ │ ├ 📜 user.ts 
     │ │ ├ 📜 post.ts 
     │ │ └ 📜 comment.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema/*",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📜 userById.ts 
     │ ├ 📜 userByEmail.ts 
     │ ├ 📜 listUsers.ts 
     │ ├ 📜 user.sql.ts 
     │ ├ 📜 postById.ts 
     │ ├ 📜 listPosts.ts 
     │ └ 📜 post.sql.ts 
     │ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/*.sql.ts", // Dax's favourite
    });

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases or different databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit export --config=drizzle-dev.config.ts
    npx drizzle-kit export --config=drizzle-prod.config.ts

    yarn drizzle-kit export --config=drizzle-dev.config.ts
    yarn drizzle-kit export --config=drizzle-prod.config.ts

    pnpm drizzle-kit export --config=drizzle-dev.config.ts
    pnpm drizzle-kit export --config=drizzle-prod.config.ts

    bun drizzle-kit export --config=drizzle-dev.config.ts
    bun drizzle-kit export --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Extended list of available configurations[](#extended-list-of-available-configurations)

`drizzle-kit export` has a list of cli-only options

`--sql`

generating SQL representation of Drizzle Schema

By default, Drizzle Kit outputs SQL files, but in the future, we want to support different formats

npm

yarn

pnpm

bun

    npx drizzle-kit push --name=init
    npx drizzle-kit push --name=seed_users --custom

    yarn drizzle-kit push --name=init
    yarn drizzle-kit push --name=seed_users --custom

    pnpm drizzle-kit push --name=init
    pnpm drizzle-kit push --name=seed_users --custom

    bun drizzle-kit push --name=init
    bun drizzle-kit push --name=seed_users --custom

  

* * *

  

We recommend configuring `drizzle-kit` through [drizzle.config.ts](/docs/drizzle-config-file) file, yet you can provide all configuration options through CLI if necessary, e.g. in CI/CD pipelines, etc.

`dialect`

`required`

Database dialect, one of `postgresql` `mysql` `sqlite` `turso` `singlestore`

`schema`

`required`

Path to typescript schema file(s) or folder(s) with multiple schema files

`config`

Configuration file path, default is `drizzle.config.ts`

### Example[](#example)

Example of how to export drizzle schema to console with Drizzle schema located in `./src/schema.ts`

We will also place drizzle config file in the `configs` folder.

Let’s create config file:

    📦 <project root>
     ├ 📂 configs
     │ └ 📜 drizzle.config.ts
     ├ 📂 src
     │ └ 📜 schema.ts
     └ …

drizzle.config.ts

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
    });

schema.ts

    import { pgTable, serial, text } from 'drizzle-orm/pg-core'
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	email: text('email').notNull(),
    	name: text('name')
    });

Now let’s run

    npx drizzle-kit export --config=./configs/drizzle.config.ts

And it will successfully output SQL representation of drizzle schema

    CREATE TABLE "users" (
            "id" serial PRIMARY KEY NOT NULL,
            "email" text NOT NULL,
            "name" text
    );

`drizzle-kit check`
===================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)
*   `drizzle-kit generate` command - [read here](/docs/drizzle-kit-generate)

`drizzle-kit check` command lets you check consistency of your generated SQL migrations history.

That’s extremely useful when you have multiple developers working on the project and altering database schema on different branches - read more about [migrations for teams](/docs/kit-migrations-for-teams).

  

* * *

  

`drizzle-kit check` command requires you to specify both `dialect` and database connection credentials, you can provide them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options

With config file

As CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
    });

    npx drizzle-kit check

    npx drizzle-kit check --dialect=postgresql

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit migrate --config=drizzle-dev.config.ts
    npx drizzle-kit migrate --config=drizzle-prod.config.ts

    yarn drizzle-kit migrate --config=drizzle-dev.config.ts
    yarn drizzle-kit migrate --config=drizzle-prod.config.ts

    pnpm drizzle-kit migrate --config=drizzle-dev.config.ts
    pnpm drizzle-kit migrate --config=drizzle-prod.config.ts

    bun drizzle-kit migrate --config=drizzle-dev.config.ts
    bun drizzle-kit migrate --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Extended list of configurations[](#extended-list-of-configurations)

We recommend configuring `drizzle-kit` through [drizzle.config.ts](/docs/drizzle-config-file) file, yet you can provide all configuration options through CLI if necessary, e.g. in CI/CD pipelines, etc.

`dialect`

`required`

Database dialect you are using. Can be `postgresql`,`mysql` or `sqlite`

`out`

migrations folder, default=`./drizzle`

`config`

config file path, default=`drizzle.config.ts`

  

npm

yarn

pnpm

bun

    npx drizzle-kit check --dialect=postgresql
    npx drizzle-kit check --dialect=postgresql --out=./migrations-folder

    yarn drizzle-kit check --dialect=postgresql
    yarn drizzle-kit check --dialect=postgresql --out=./migrations-folder

    pnpm drizzle-kit check --dialect=postgresql
    pnpm drizzle-kit check --dialect=postgresql --out=./migrations-folder

    bun drizzle-kit check --dialect=postgresql
    bun drizzle-kit check --dialect=postgresql --out=./migrations-folder

`drizzle-kit up`
================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)
*   `drizzle-kit generate` command - [read here](/docs/drizzle-kit-generate)

`drizzle-kit up` command lets you upgrade drizzle schema snapshots to a newer version. It’s required whenever we introduce breaking changes to the json snapshots of the schema and upgrade the internal version.

  

* * *

  

`drizzle-kit up` command requires you to specify both `dialect` and database connection credentials, you can provide them either via [drizzle.config.ts](/docs/drizzle-config-file) config file or via CLI options

With config file

As CLI options

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
    });

    npx drizzle-kit up

    npx drizzle-kit up --dialect=postgresql

### Multiple configuration files in one project[](#multiple-configuration-files-in-one-project)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit migrate --config=drizzle-dev.config.ts
    npx drizzle-kit migrate --config=drizzle-prod.config.ts

    yarn drizzle-kit migrate --config=drizzle-dev.config.ts
    yarn drizzle-kit migrate --config=drizzle-prod.config.ts

    pnpm drizzle-kit migrate --config=drizzle-dev.config.ts
    pnpm drizzle-kit migrate --config=drizzle-prod.config.ts

    bun drizzle-kit migrate --config=drizzle-dev.config.ts
    bun drizzle-kit migrate --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Extended list of configurations[](#extended-list-of-configurations)

We recommend configuring `drizzle-kit` through [drizzle.config.ts](/docs/drizzle-config-file) file, yet you can provide all configuration options through CLI if necessary, e.g. in CI/CD pipelines, etc.

`dialect`

`required`

Database dialect you are using. Can be `postgresql`,`mysql` or `sqlite`

`out`

migrations folder, default=`./drizzle`

`config`

config file path, default=`drizzle.config.ts`

  

npm

yarn

pnpm

bun

    npx drizzle-kit up --dialect=postgresql
    npx drizzle-kit up --dialect=postgresql --out=./migrations-folder

    yarn drizzle-kit up --dialect=postgresql
    yarn drizzle-kit up --dialect=postgresql --out=./migrations-folder

    pnpm drizzle-kit up --dialect=postgresql
    pnpm drizzle-kit up --dialect=postgresql --out=./migrations-folder

    bun drizzle-kit up --dialect=postgresql
    bun drizzle-kit up --dialect=postgresql --out=./migrations-folder

`drizzle-kit studio`
====================

This guide assumes familiarity with:

*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)
*   Drizzle Studio, our database browser - [read here](/drizzle-studio/overview)

`drizzle-kit studio` command spins up a server for [Drizzle Studio](/drizzle-studio/overview) hosted on [local.drizzle.studio](https://local.drizzle.studio). It requires you to specify database connection credentials via [drizzle.config.ts](/docs/drizzle-config-file) config file.

By default it will start a Drizzle Studio server on `127.0.0.1:4983`

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dbCredentials: {
        url: "postgresql://user:password@host:port/dbname"
      },
    });

    npx drizzle-kit migrate

### Configuring `host` and `port`[](#configuring-host-and-port)

By default Drizzle Studio server starts on `127.0.0.1:4983`, you can config `host` and `port` via CLI options

npm

yarn

pnpm

bun

    npx drizzle-kit studio --port=3000
    npx drizzle-kit studio --host=0.0.0.0
    npx drizzle-kit studio --host=0.0.0.0 --port=3000

    yarn drizzle-kit studio --port=3000
    yarn drizzle-kit studio --host=0.0.0.0
    yarn drizzle-kit studio --host=0.0.0.0 --port=3000

    pnpm drizzle-kit studio --port=3000
    pnpm drizzle-kit studio --host=0.0.0.0
    pnpm drizzle-kit studio --host=0.0.0.0 --port=3000

    bun drizzle-kit studio --port=3000
    bun drizzle-kit studio --host=0.0.0.0
    bun drizzle-kit studio --host=0.0.0.0 --port=3000

### Logging[](#logging)

You can enable logging of every SQL statement by providing `verbose` flag

npm

yarn

pnpm

bun

    npx drizzle-kit studio --verbose

    yarn drizzle-kit studio --verbose

    pnpm drizzle-kit studio --verbose

    bun drizzle-kit studio --verbose

### Safari and Brave support[](#safari-and-brave-support)

Safari and Brave block access to localhost by default. You need to install [mkcert](https://github.com/FiloSottile/mkcert) and generate self-signed certificate:

1.  Follow the mkcert [installation steps](https://github.com/FiloSottile/mkcert#installation)
2.  Run `mkcert -install`
3.  Restart your `drizzle-kit studio`

### Embeddable version of Drizzle Studio[](#embeddable-version-of-drizzle-studio)

While hosted version of Drizzle Studio for local development is free forever and meant to just enrich Drizzle ecosystem, we have a B2B offering of an embeddable version of Drizzle Studio for businesses.

**Drizzle Studio component** - is a pre-bundled framework agnostic web component of Drizzle Studio which you can embed into your UI `React` `Vue` `Svelte` `VanillaJS` etc.

That is an extremely powerful UI element that can elevate your offering if you provide Database as a SaaS or a data centric SaaS solutions based on SQL or for private non-customer facing in-house usage.

Database platforms using Drizzle Studio:

*   [Turso](https://turso.tech/), our first customers since Oct 2023!
*   [Neon](https://neon.tech/), [launch post](https://neon.tech/docs/changelog/2024-05-24)
*   [Hydra](https://www.hydra.so/)

Data centric platforms using Drizzle Studio:

*   [Nuxt Hub](https://hub.nuxt.com/), Sébastien Chopin’s [launch post](https://x.com/Atinux/status/1768663789832929520)
*   [Deco.cx](https://deco.cx/)

You can read a detailed overview [here](https://www.npmjs.com/package/@drizzle-team/studio) and if you’re interested - hit us in DMs on [Twitter](https://x.com/drizzleorm) or in [Discord #drizzle-studio](https://driz.link/discord) channel.

### Drizzle Studio chrome extension[](#drizzle-studio-chrome-extension)

Drizzle Studio [chrome extension](https://chromewebstore.google.com/detail/drizzle-studio/mjkojjodijpaneehkgmeckeljgkimnmd) lets you browse your [PlanetScale](https://planetscale.com), [Cloudflare](https://developers.cloudflare.com/d1/) and [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) serverless databases directly in their vendor admin panels!

### Limitations[](#limitations)

Our hosted version Drizzle Studio is meant to be used for local development and not meant to be used on remote (VPS, etc).

If you want to deploy Drizzle Studio to your VPS - we have an alfa version of Drizzle Studio Gateway, hit us in DMs on [Twitter](https://x.com/drizzleorm) or in [Discord #drizzle-studio](https://driz.link/discord) channel.

### Is it open source?[](#is-it-open-source)

No. Drizzle ORM and Drizzle Kit are fully open sourced, while Studio is not.

Drizzle Studio for local development is free to use forever to enrich Drizzle ecosystem, open sourcing one would’ve break our ability to provide B2B offerings and monetise it, unfortunately.

Migrations with Drizzle Kit
===========================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)
*   `drizzle-kit generate` command - [read here](/docs/drizzle-kit-generate)
*   `drizzle-kit migrate` command - [read here](/docs/drizzle-kit-migrate)

Drizzle lets you generate empty migration files to write your own custom SQL migrations for DDL alternations currently not supported by Drizzle Kit or data seeding, which you can then run with [`drizzle-kit migrate`](/docs/drizzle-kit-migrate) command.

    drizzle-kit generate --custom --name=seed-users

    📦 <project root>
     ├ 📂 drizzle
     │ ├ 📂 _meta
     │ ├ 📜 0000_init.sql 
     │ └ 📜 0001_seed-users.sql 
     ├ 📂 src
     └ …

    -- ./drizzle/0001_seed-users.sql
    
    INSERT INTO "users" ("name") VALUES('Dan');
    INSERT INTO "users" ("name") VALUES('Andrew');
    INSERT INTO "users" ("name") VALUES('Dandrew');

### Running JavaScript and TypeScript migrations[](#running-javascript-and-typescript-migrations)

We will add ability to run custom JavaScript and TypeScript migration/seeding scripts in the upcoming release, you can follow [github discussion](https://github.com/drizzle-team/drizzle-orm/discussions/2832).

Drizzle migrations for teams
============================

This section will be updated right after our release of the next version of migrations folder structure. You can read an extended [github discussion](https://github.com/drizzle-team/drizzle-orm/discussions/2832) and subscribe to the updates!

Drizzle migrations in web and mobile environments
=================================================

This section will be updated in the next release.

For **Expo SQLite**, **OP SQLite** and **React Native** migrations - please refer to our [Get Started](/docs/get-started/expo-new) guide.

Drizzle Kit configuration file
==============================

This guide assumes familiarity with:

*   Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
*   Drizzle schema foundamentals - [read here](/docs/sql-schema-declaration)
*   Database connection basics - [read here](/docs/connect-overview)
*   Drizzle migrations foundamentals - [read here](/docs/migrations)
*   Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)

Drizzle Kit lets you declare configuration options in `TypeScript` or `JavaScript` configuration files.

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

drizzle.config.ts

drizzle.config.js

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      out: "./drizzle",
    });

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      out: "./drizzle",
    });

Example of an extended config file

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      out: "./drizzle",
      dialect: "postgresql",
      schema: "./src/schema.ts",
    
      driver: "pglite",
      dbCredentials: {
        url: "./database/",
      },
    
      extensionsFilters: ["postgis"],
      schemaFilter: "public",
      tablesFilter: "*",
    
      introspect: {
        casing: "camel",
      },
    
      migrations: {
        prefix: "timestamp",
        table: "__drizzle_migrations__",
        schema: "public",
      },
    
      entities: {
        roles: {
          provider: '',
          exclude: [],
          include: []
        }
      }
    
      breakpoints: true,
      strict: true,
      verbose: true,
    });

Expand

### Multiple configuration files[](#multiple-configuration-files)

You can have multiple config files in the project, it’s very useful when you have multiple database stages or multiple databases or different databases on the same project:

npm

yarn

pnpm

bun

    npx drizzle-kit generate --config=drizzle-dev.config.ts
    npx drizzle-kit generate --config=drizzle-prod.config.ts

    yarn drizzle-kit generate --config=drizzle-dev.config.ts
    yarn drizzle-kit generate --config=drizzle-prod.config.ts

    pnpm drizzle-kit generate --config=drizzle-dev.config.ts
    pnpm drizzle-kit generate --config=drizzle-prod.config.ts

    bun drizzle-kit generate --config=drizzle-dev.config.ts
    bun drizzle-kit generate --config=drizzle-prod.config.ts

    📦 <project root>
     ├ 📂 drizzle
     ├ 📂 src
     ├ 📜 .env
     ├ 📜 drizzle-dev.config.ts
     ├ 📜 drizzle-prod.config.ts
     ├ 📜 package.json
     └ 📜 tsconfig.json

### Migrations folder[](#migrations-folder)

`out` param lets you define folder for your migrations, it’s optional and `drizzle` by default.  
It’s very useful since you can have many separate schemas for different databases in the same project and have different migration folders for them.

Migration folder contains `.sql` migration files and `_meta` folder which is used by `drizzle-kit`

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     │ ├ 📂 _meta
     │ ├ 📜 user.ts 
     │ ├ 📜 post.ts 
     │ └ 📜 comment.ts 
     ├ 📂 src
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore"
      schema: "./src/schema/*",
      out: "./drizzle",
    });

\---[](#---)
------------

### `dialect`[](#dialect)

Dialect of the database you’re using

type

`postgresql` `mysql` `sqlite` `turso` `singlestore`

default

—

commands

`generate` `migrate` `push` `pull` `check` `up`

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "mysql", 
    });

### `schema`[](#schema)

[`glob`](https://www.digitalocean.com/community/tools/glob?comments=true&glob=/**/*.js&matches=false&tests=//%20This%20will%20match%20as%20it%20ends%20with%20'.js'&tests=/hello/world.js&tests=//%20This%20won't%20match!&tests=/test/some/globs) based path to drizzle schema file(s) or folder(s) contaning schema files.

type

`string` `string[]`

default

—

commands

`generate` `push`

Example 1

Example 2

Example 3

Example 4

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ ...
     │ ├ 📜 index.ts
     │ └ 📜 schema.ts 
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema.ts",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 user
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ ├ 📂 posts
     │ │ ├ 📜 handler.ts 
     │ │ └ 📜 schema.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/schema.ts",
      //or
      schema: ["./src/user/schema.ts", "./src/posts/schema.ts"]
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📂 schema
     │ │ ├ 📜 user.ts 
     │ │ ├ 📜 post.ts 
     │ │ └ 📜 comment.ts 
     │ └ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema/*",
    });

    📦 <project root>
     ├ ...
     ├ 📂 drizzle
     ├ 📂 src
     │ ├ 📜 userById.ts 
     │ ├ 📜 userByEmail.ts 
     │ ├ 📜 listUsers.ts 
     │ ├ 📜 user.sql.ts 
     │ ├ 📜 postById.ts 
     │ ├ 📜 listPosts.ts 
     │ └ 📜 post.sql.ts 
     │ 📜 index.ts
     ├ 📜 drizzle.config.ts
     └ 📜 package.json

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/**/*.sql.ts", // Dax's favourite
    });

### `out`[](#out)

Defines output folder of your SQL migration files, json snapshots of your schema and `schema.ts` from `drizzle-kit pull` command.

type

`string` `string[]`

default

`drizzle`

commands

`generate` `migrate` `push` `pull` `check` `up`

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      out: "./drizzle", 
    });

### `driver`[](#driver)

Drizzle Kit automatically picks available database driver from your current project based on the provided `dialect`, yet some vendor specific databases require a different subset of connection params.

`driver` option let’s you explicitely pick those exceptions drivers.

type

`aws-data-api` `d1-http` `pglight`

default

—

commands

`migrate` `push` `pull`

AWS Data API

PGLite

Cloudflare D1 HTTP

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      driver: "aws-data-api",
      dbCredentials: {
        database: "database",
        resourceArn: "resourceArn",
        secretArn: "secretArn",
      },
    };

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      driver: "pglite",
      dbCredentials: {
        // inmemory
        url: ":memory:"
        
        // or database folder
        url: "./database/"
      },
    };

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "sqlite",
      schema: "./src/schema.ts",
      driver: "d1-http",
      dbCredentials: {
        accountId: "accountId",
        databaseId: "databaseId",
        token: "token",
      },
    };

\---[](#----1)
--------------

### `dbCredentials`[](#dbcredentials)

Database connection credentials in a form of `url`, `user:password@host:port/db` params or exceptions drivers(`aws-data-api` `d1-http` `pglight` ) specific connection options.

type

union of drivers connection options

default

—

commands

`migrate` `push` `pull`

PostgreSQL

MySQL

SQLite

Turso

Cloudflare D1

AWS Data API

PGLite

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "postgresql",
      dbCredentials: {
        url: "postgres://user:password@host:port/db",
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    // via connection params
    export default defineConfig({
      dialect: "postgresql",
      dbCredentials: {
        host: "host",
        port: 5432,
        user: "user",
        password: "password",
        database: "dbname",
        ssl: true, // can be boolean | "require" | "allow" | "prefer" | "verify-full" | options from node:tls
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "mysql",
      dbCredentials: {
        url: "postgres://user:password@host:port/db",
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    // via connection params
    export default defineConfig({
      dialect: "mysql",
      dbCredentials: {
        host: "host",
        port: 5432,
        user: "user",
        password: "password",
        database: "dbname",
        ssl: "...", // can be: string | SslOptions (ssl options from mysql2 package)
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "sqlite",
      dbCredentials: {
        url: ":memory:", // inmemory database
        // or
        url: "sqlite.db", 
        // or
        url: "file:sqlite.db" // file: prefix is required by libsql
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "turso",
      dbCredentials: {
        url: "libsql://acme.turso.io" // remote Turso database url
        authToken: "...",
    
        // or if you need local db
    
        url: ":memory:", // inmemory database
        // or
        url: "file:sqlite.db", // file: prefix is required by libsql
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "sqlite",
      driver: "d1-http",
      dbCredentials: {
        accountId: "",
        databaseId: "",
        token: "",
      }
    })

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "postgresql",
      driver: "aws-data-api",
      dbCredentials: {
        database: "database",
        resourceArn: "resourceArn",
        secretArn: "secretArn",
      },
    });

    import { defineConfig } from 'drizzle-kit'
    
    export default defineConfig({
      dialect: "postgresql",
      driver: "pglite",
      dbCredentials: {
        url: "./database/", // database folder path
      }
    })

### `migrations`[](#migrations)

When running `drizzle-kit migrate` - drizzle will records about successfully applied migrations in your database in log table named `__drizzle_migrations` in `public` schema(PostgreSQL only).

`migrations` config options lets you change both migrations log `table` name and `schema`.

type

`{ table: string, schema: string }`

default

`{ table: "__drizzle_migrations", schema: "drizzle" }`

commands

`migrate`

    export default defineConfig({
      dialect: "postgresql",
      schema: "./src/schema.ts",
      migrations: {
        table: 'my-migrations-table', // `__drizzle_migrations` by default
        schema: 'public', // used in PostgreSQL only, `drizzle` by default
      },
    });

### `introspect`[](#introspect)

Cofiguration for `drizzle-kit pull` command.

`casing` is responsible for in-code column keys casing

type

`{ casing: "preserve" | "camel" }`

default

`{ casing: "camel" }`

commands

`pull`

camel

preserve

    import * as p from "drizzle-orm/pg-core"
    
    export const users = p.pgTable("users", {
      id: p.serial(),
      firstName: p.text("first-name"),
      lastName: p.text("LastName"),
      email: p.text(),
      phoneNumber: p.text("phone_number"),
    });

    SELECT a.attname AS column_name, format_type(a.atttypid, a.atttypmod) as data_type FROM pg_catalog.pg_attribute a;

     column_name   | data_type        
    ---------------+------------------------
     id            | serial
     first-name    | text
     LastName      | text
     email         | text
     phone_number  | text

    import * as p from "drizzle-orm/pg-core"
    
    export const users = p.pgTable("users", {
      id: p.serial(),
      "first-name": p.text("first-name"),
      LastName: p.text("LastName"),
      email: p.text(),
      phone_number: p.text("phone_number"),
    });

    SELECT a.attname AS column_name, format_type(a.atttypid, a.atttypmod) as data_type FROM pg_catalog.pg_attribute a;

     column_name   | data_type        
    ---------------+------------------------
     id            | serial
     first-name    | text
     LastName      | text
     email         | text
     phone_number  | text

\---[](#----2)
--------------

### `tablesFilter`[](#tablesfilter)

If you want to run multiple projects with one database - check out [our guide](/docs/goodies#multi-project-schema).

`drizzle-kit push` and `drizzle-kit pull` will by default manage all tables in `public` schema. You can configure list of tables, schemas and extensions via `tablesFilters`, `schemaFilter` and `extensionFilters` options.

`tablesFilter` option lets you specify [`glob`](https://www.digitalocean.com/community/tools/glob?comments=true&glob=/**/*.js&matches=false&tests=//%20This%20will%20match%20as%20it%20ends%20with%20'.js'&tests=/hello/world.js&tests=//%20This%20won't%20match!&tests=/test/some/globs) based table names filter, e.g. `["users", "user_info"]` or `"user*"`

type

`string` `string[]`

default

—

commands

`generate` `push` `pull`

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      dialect: "postgresql",
      tablesFilter: ["users", "posts", "project1_*"],
    });

### `schemaFilter`[](#schemafilter)

If you want to run multiple projects with one database - check out [our guide](/docs/goodies#multi-project-schema).

`drizzle-kit push` and `drizzle-kit pull` will by default manage all tables in `public` schema. You can configure list of tables, schemas and extensions via `tablesFilters`, `schemaFilter` and `extensionFilters` options.

`schemaFilter` option lets you specify list of schemas for Drizzle Kit to manage

type

`string[]`

default

`["public"]`

commands

`generate` `push` `pull`

    export default defineConfig({
      dialect: "postgresql",
      schemaFilter: ["public", "schema1", "schema2"],
    });

### `extensionsFilters`[](#extensionsfilters)

Some extensions like [`postgis`](https://postgis.net/), when installed on the database, create its own tables in public schema. Those tables have to be ignored by `drizzle-kit push` or `drizzle-kit pull`.

`extensionsFilters` option lets you declare list of installed extensions for drizzle kit to ignore their tables in the schema.

type

`["postgis"]`

default

`[]`

commands

`push` `pull`

    export default defineConfig({
      dialect: "postgresql",
      extensionsFilters: ["postgis"],
    });

\---[](#----3)
--------------

### `entities`[](#entities)

This configuration is created to set up management settings for specific `entities` in the database.

For now, it only includes `roles`, but eventually all database entities will migrate here, such as `tables`, `schemas`, `extensions`, `functions`, `triggers`, etc

#### `roles`[](#roles)

If you are using Drizzle Kit to manage your schema and especially the defined roles, there may be situations where you have some roles that are not defined in the Drizzle schema. In such cases, you may want Drizzle Kit to skip those `roles` without the need to write each role in your Drizzle schema and mark it with `.existing()`.

The `roles` option lets you:

*   Enable or disable role management with Drizzle Kit.
*   Exclude specific roles from management by Drizzle Kit.
*   Include specific roles for management by Drizzle Kit.
*   Enable modes for providers like `Neon` and `Supabase`, which do not manage their specific roles.
*   Combine all the options above

type

`boolean | { provider: "neon" | "supabase", include: string[], exclude: string[]}`

default

`false`

commands

`push` `pull` `generate`

By default, `drizzle-kit` won’t manage roles for you, so you will need to enable that. in `drizzle.config.ts`

    export default defineConfig({
      dialect: "postgresql",
      extensionsFilters: entities: {
        roles: true
      }
    });

**You have a role `admin` and want to exclude it from the list of manageable roles**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          exclude: ['admin']
        }
      }
    });

**You have a role `admin` and want to include to the list of manageable roles**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          include: ['admin']
        }
      }
    });

**If you are using `Neon` and want to exclude roles defined by `Neon`, you can use the provider option**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          provider: 'neon'
        }
      }
    });

**If you are using `Supabase` and want to exclude roles defined by `Supabase`, you can use the provider option**

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          provider: 'supabase'
        }
      }
    });

important

You may encounter situations where Drizzle is slightly outdated compared to new roles specified by database providers, so you may need to use both the `provider` option and `exclude` additional roles. You can easily do this with Drizzle:

    // drizzle.config.ts
    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      ...
      entities: {
        roles: {
          provider: 'supabase',
          exclude: ['new_supabase_role']
        }
      }
    });

\---[](#----4)
--------------

### `strict`[](#strict)

Prompts confirmation to run printed SQL statements when running `drizzle-kit push` command.

type

`boolean`

default

`false`

commands

`push`

    export default defineConfig({
      dialect: "postgresql",
      strict: false,
    });

### `verbose`[](#verbose)

Print all SQL statements during `drizzle-kit push` command.

type

`boolean`

default

`true`

commands

`generate` `pull`

    export default defineConfig({
      dialect: "postgresql",
      verbose: false,
    });

### `breakpoints`[](#breakpoints)

Drizzle Kit will automatically embed `--> statement-breakpoint` into generated SQL migration files, that’s necessary for databases that do not support multiple DDL alternation statements in one transaction(MySQL and SQLite).

`breakpoints` option flag lets you switch it on and off

type

`boolean`

default

`true`

commands

`generate` `pull`

    export default defineConfig({
      dialect: "postgresql",
      breakpoints: false,
    });

Drizzle Seed
============

PostgreSQL

SQLite

MySQL

SingleStore

IMPORTANT

`drizzle-seed` can only be used with `[[email protected]](/cdn-cgi/l/email-protection)` or higher. Versions lower than this may work at runtime but could have type issues and identity column issues, as this patch was introduced in `[[email protected]](/cdn-cgi/l/email-protection)`

`drizzle-seed` is a TypeScript library that helps you generate deterministic, yet realistic, fake data to populate your database. By leveraging a seedable pseudorandom number generator (pRNG), it ensures that the data you generate is consistent and reproducible across different runs. This is especially useful for testing, development, and debugging purposes.

#### What is Deterministic Data Generation?[](#what-is-deterministic-data-generation)

Deterministic data generation means that the same input will always produce the same output. In the context of `drizzle-seed`, when you initialize the library with the same seed number, it will generate the same sequence of fake data every time. This allows for predictable and repeatable data sets.

#### Pseudorandom Number Generator (pRNG)[](#pseudorandom-number-generator-prng)

A pseudorandom number generator is an algorithm that produces a sequence of numbers that approximates the properties of random numbers. However, because it’s based on an initial value called a seed, you can control its randomness. By using the same seed, the pRNG will produce the same sequence of numbers, making your data generation process reproducible.

#### Benefits of Using a pRNG:[](#benefits-of-using-a-prng)

*   Consistency: Ensures that your tests run on the same data every time.
*   Debugging: Makes it easier to reproduce and fix bugs by providing a consistent data set.
*   Collaboration: Team members can share seed numbers to work with the same data sets.

With drizzle-seed, you get the best of both worlds: the ability to generate realistic fake data and the control to reproduce it whenever needed.

Installation[](#installation)
-----------------------------

npm

yarn

pnpm

bun

    npm i drizzle-seed

    yarn add drizzle-seed

    pnpm add drizzle-seed

    bun add drizzle-seed

Basic Usage[](#basic-usage)
---------------------------

In this example we will create 10 users with random names and ids

    import { pgTable, integer, text } from "drizzle-orm/pg-core";
    import { drizzle } from "drizzle-orm/node-postgres";
    import { seed } from "drizzle-seed";
    
    const users = pgTable("users", {
      id: integer().primaryKey(),
      name: text().notNull(),
    });
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
      await seed(db, { users });
    }
    
    main();

Options[](#options)
-------------------

**`count`**

By default, the `seed` function will create 10 entities. However, if you need more for your tests, you can specify this in the seed options object

    await seed(db, schema, { count: 1000 });

**`seed`**

If you need a seed to generate a different set of values for all subsequent runs, you can define a different number in the `seed` option. Any new number will generate a unique set of values

    await seed(db, schema, { seed: 12345 });

Reset database[](#reset-database)
---------------------------------

With `drizzle-seed`, you can easily reset your database and seed it with new values, for example, in your test suites

    // path to a file with schema you want to reset
    import * as schema from "./schema.ts";
    import { reset } from "drizzle-seed";
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
      await reset(db, schema);
    }
    
    main();

Different dialects will have different strategies for database resetting

PostgreSQL

MySQL

SQLite

For PostgreSQL, the `drizzle-seed` package will generate `TRUNCATE` statements with the `CASCADE` option to ensure that all tables are empty after running the reset function

    TRUNCATE tableName1, tableName2, ... CASCADE;

For MySQL, the `drizzle-seed` package will first disable `FOREIGN_KEY_CHECKS` to ensure the next step won’t fail, and then generate `TRUNCATE` statements to empty the content of all tables

    SET FOREIGN_KEY_CHECKS = 0;
    TRUNCATE tableName1;
    TRUNCATE tableName2;
    ...
    SET FOREIGN_KEY_CHECKS = 1;

For SQLite, the `drizzle-seed` package will first disable the `foreign_keys` pragma to ensure the next step won’t fail, and then generate `DELETE FROM` statements to empty the content of all tables

    PRAGMA foreign_keys = OFF;
    DELETE FROM tableName1;
    DELETE FROM tableName2;
    ...
    PRAGMA foreign_keys = ON;

Refinements[](#refinements)
---------------------------

In case you need to change the behavior of the seed generator functions that `drizzle-seed` uses by default, you can specify your own implementation and even use your own list of values for the seeding process

`.refine` is a callback that receives a list of all available generator functions from `drizzle-seed`. It should return an object with keys representing the tables you want to refine, defining their behavior as needed. Each table can specify several properties to simplify seeding your database:

*   `columns`: Refine the default behavior of each column by specifying the required generator function.
*   `count`: Specify the number of rows to insert into the database. By default, it’s 10. If a global count is defined in the `seed()` options, the count defined here will override it for this specific table.
*   `with`: Define how many referenced entities to create for each parent table if you want to generate associated entities.

info

You can also specify a weighted random distribution for the number of referenced values you want to create. For details on this API, you can refer to [Weighted Random docs](#weighted-random) docs section

**API**

    await seed(db, schema).refine((f) => ({
      users: {
        columns: {},
        count: 10,
        with: {
            posts: 10
        }
      },
    }));

Let’s check a few examples with an explanation of what will happen:

schema.ts

    import { pgTable, integer, text } from "drizzle-orm/pg-core";
    
    export const users = pgTable("users", {
      id: integer().primaryKey(),
      name: text().notNull(),
    });
    
    export const posts = pgTable("posts", {
      id: integer().primaryKey(),
      description: text(),
      userId: integer().references(() => users.id),
    });

**Example 1**: Seed only the `users` table with 20 entities and with refined seed logic for the `name` column

index.ts

    import { drizzle } from "drizzle-orm/node-postgres";
    import { seed } from "drizzle-seed";
    import * as schema from './schema.ts'
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, { users: schema.users }).refine((f) => ({
        users: {
            columns: {
                name: f.fullName(),
            },
            count: 20
        }
      }));
    }
    
    main();

**Example 2**: Seed the `users` table with 20 entities and add 10 `posts` for each `user` by seeding the `posts` table and creating a reference from `posts` to `users`

index.ts

    import { drizzle } from "drizzle-orm/node-postgres";
    import { seed } from "drizzle-seed";
    import * as schema from './schema.ts'
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, schema).refine((f) => ({
        users: {
            count: 20,
            with: {
                posts: 10
            }
        }
      }));
    }
    
    main();

**Example 3**: Seed the `users` table with 5 entities and populate the database with 100 `posts` without connecting them to the `users` entities. Refine `id` generation for `users` so that it will give any int from `10000` to `20000` and remains unique, and refine `posts` to retrieve values from a self-defined array

index.ts

    import { drizzle } from "drizzle-orm/node-postgres";
    import { seed } from "drizzle-seed";
    import * as schema from './schema.ts'
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, schema).refine((f) => ({
        users: {
            count: 5,
            columns: {
                id: f.int({
                  minValue: 10000,
                  maxValue: 20000,
                  isUnique: true,
                }),
            }
        },
        posts: {
            count: 100,
            columns: {
                description: f.valuesFromArray({
                values: [
                    "The sun set behind the mountains, painting the sky in hues of orange and purple", 
                    "I can't believe how good this homemade pizza turned out!", 
                    "Sometimes, all you need is a good book and a quiet corner.", 
                    "Who else thinks rainy days are perfect for binge-watching old movies?", 
                    "Tried a new hiking trail today and found the most amazing waterfall!",
                    // ...
                ],
              })
            }
        }
      }));
    }
    
    main();

IMPORTANT

There are many more possibilities that we will define in these docs, but for now, you can explore a few sections in this documentation. Check the [Generators](#generators) section to get familiar with all the available generator functions you can use.

A particularly great feature is the ability to use weighted randomization, both for generator values created for a column and for determining the number of related entities that can be generated by `drizzle-seed`.

Please check [Weighted Random docs](#weighted-random) for more info.

Weighted Random[](#weighted-random)
-----------------------------------

There may be cases where you need to use multiple datasets with a different priority that should be inserted into your database during the seed stage. For such cases, drizzle-seed provides an API called weighted random

The Drizzle Seed package has a few places where weighted random can be used:

*   Columns inside each table refinements
*   The `with` property, determining the amount of related entities to be created

Let’s check an example for both:

schema.ts

    import { pgTable, integer, text, varchar, doublePrecision } from "drizzle-orm/pg-core";
    
    export const orders = pgTable(
      "orders",
      {
        id: integer().primaryKey(),
        name: text().notNull(),
        quantityPerUnit: varchar().notNull(),
        unitPrice: doublePrecision().notNull(),
        unitsInStock: integer().notNull(),
        unitsOnOrder: integer().notNull(),
        reorderLevel: integer().notNull(),
        discontinued: integer().notNull(),
      }
    );
    
    export const details = pgTable(
      "details",
      {
        unitPrice: doublePrecision().notNull(),
        quantity: integer().notNull(),
        discount: doublePrecision().notNull(),
    
        orderId: integer()
          .notNull()
          .references(() => orders.id, { onDelete: "cascade" }),
      }
    );

**Example 1**: Refine the `unitPrice` generation logic to generate `5000` random prices, with a 30% chance of prices between 10-100 and a 70% chance of prices between 100-300

index.ts

    import { drizzle } from "drizzle-orm/node-postgres";
    import { seed } from "drizzle-seed";
    import * as schema from './schema.ts'
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, schema).refine((f) => ({
        orders: {
           count: 5000,
           columns: {
               unitPrice: f.weightedRandom(
                   [
                       {
                           weight: 0.3,
                           value: funcs.int({ minValue: 10, maxValue: 100 })
                       },
                       {
                           weight: 0.7,
                           value: funcs.number({ minValue: 100, maxValue: 300, precision: 100 })
                       }
                   ]
               ),
           }
        }
      }));
    }
    
    main();

**Example 2**: For each order, generate 1 to 3 details with a 60% chance, 5 to 7 details with a 30% chance, and 8 to 10 details with a 10% chance

index.ts

    import { drizzle } from "drizzle-orm/node-postgres";
    import { seed } from "drizzle-seed";
    import * as schema from './schema.ts'
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, schema).refine((f) => ({
        orders: {
           with: {
               details:
                   [
                       { weight: 0.6, count: [1, 2, 3] },
                       { weight: 0.3, count: [5, 6, 7] },
                       { weight: 0.1, count: [8, 9, 10] },
                   ]
           }
        }
      }));
    }
    
    main();

Complex example[](#complex-example)
-----------------------------------

main.ts

schema.ts

    import { seed } from "drizzle-seed";
    import * as schema from "./schema.ts";
    
    const main = async () => {
        const titlesOfCourtesy = ["Ms.", "Mrs.", "Dr."];
        const unitsOnOrders = [0, 10, 20, 30, 50, 60, 70, 80, 100];
        const reorderLevels = [0, 5, 10, 15, 20, 25, 30];
        const quantityPerUnit = [
            "100 - 100 g pieces",
            "100 - 250 g bags",
            "10 - 200 g glasses",
            "10 - 4 oz boxes",
            "10 - 500 g pkgs.",
            "10 - 500 g pkgs."
        ];
        const discounts = [0.05, 0.15, 0.2, 0.25];
    
        await seed(db, schema).refine((funcs) => ({
            customers: {
                count: 10000,
                columns: {
                    companyName: funcs.companyName(),
                    contactName: funcs.fullName(),
                    contactTitle: funcs.jobTitle(),
                    address: funcs.streetAddress(),
                    city: funcs.city(),
                    postalCode: funcs.postcode(),
                    region: funcs.state(),
                    country: funcs.country(),
                    phone: funcs.phoneNumber({ template: "(###) ###-####" }),
                    fax: funcs.phoneNumber({ template: "(###) ###-####" })
                }
            },
            employees: {
                count: 200,
                columns: {
                    firstName: funcs.firstName(),
                    lastName: funcs.lastName(),
                    title: funcs.jobTitle(),
                    titleOfCourtesy: funcs.valuesFromArray({ values: titlesOfCourtesy }),
                    birthDate: funcs.date({ minDate: "2010-12-31", maxDate: "2010-12-31" }),
                    hireDate: funcs.date({ minDate: "2010-12-31", maxDate: "2024-08-26" }),
                    address: funcs.streetAddress(),
                    city: funcs.city(),
                    postalCode: funcs.postcode(),
                    country: funcs.country(),
                    homePhone: funcs.phoneNumber({ template: "(###) ###-####" }),
                    extension: funcs.int({ minValue: 428, maxValue: 5467 }),
                    notes: funcs.loremIpsum()
                }
            },
            orders: {
                count: 50000,
                columns: {
                    shipVia: funcs.int({ minValue: 1, maxValue: 3 }),
                    freight: funcs.number({ minValue: 0, maxValue: 1000, precision: 100 }),
                    shipName: funcs.streetAddress(),
                    shipCity: funcs.city(),
                    shipRegion: funcs.state(),
                    shipPostalCode: funcs.postcode(),
                    shipCountry: funcs.country()
                },
                with: {
                    details:
                        [
                            { weight: 0.6, count: [1, 2, 3, 4] },
                            { weight: 0.2, count: [5, 6, 7, 8, 9, 10] },
                            { weight: 0.15, count: [11, 12, 13, 14, 15, 16, 17] },
                            { weight: 0.05, count: [18, 19, 20, 21, 22, 23, 24, 25] },
                        ]
                }
            },
            suppliers: {
                count: 1000,
                columns: {
                    companyName: funcs.companyName(),
                    contactName: funcs.fullName(),
                    contactTitle: funcs.jobTitle(),
                    address: funcs.streetAddress(),
                    city: funcs.city(),
                    postalCode: funcs.postcode(),
                    region: funcs.state(),
                    country: funcs.country(),
                    phone: funcs.phoneNumber({ template: "(###) ###-####" })
                }
            },
            products: {
                count: 5000,
                columns: {
                    name: funcs.companyName(),
                    quantityPerUnit: funcs.valuesFromArray({ values: quantityPerUnit }),
                    unitPrice: funcs.weightedRandom(
                        [
                            {
                                weight: 0.5,
                                value: funcs.int({ minValue: 3, maxValue: 300 })
                            },
                            {
                                weight: 0.5,
                                value: funcs.number({ minValue: 3, maxValue: 300, precision: 100 })
                            }
                        ]
                    ),
                    unitsInStock: funcs.int({ minValue: 0, maxValue: 125 }),
                    unitsOnOrder: funcs.valuesFromArray({ values: unitsOnOrders }),
                    reorderLevel: funcs.valuesFromArray({ values: reorderLevels }),
                    discontinued: funcs.int({ minValue: 0, maxValue: 1 })
                }
            },
            details: {
                columns: {
                    unitPrice: funcs.number({ minValue: 10, maxValue: 130 }),
                    quantity: funcs.int({ minValue: 1, maxValue: 130 }),
                    discount: funcs.weightedRandom(
                        [
                            { weight: 0.5, value: funcs.valuesFromArray({ values: discounts }) },
                            { weight: 0.5, value: funcs.default({ defaultValue: 0 }) }
                        ]
                    )
                }
            }
        }));
    }
    
    main();
    

    import type { AnyPgColumn } from "drizzle-orm/pg-core";
    import { integer, numeric, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
    
    export const customers = pgTable('customer', {
    	id: varchar({ length: 256 }).primaryKey(),
    	companyName: text().notNull(),
    	contactName: text().notNull(),
    	contactTitle: text().notNull(),
    	address: text().notNull(),
    	city: text().notNull(),
    	postalCode: text(),
    	region: text(),
    	country: text().notNull(),
    	phone: text().notNull(),
    	fax: text(),
    });
    
    export const employees = pgTable(
    	'employee',
    	{
    		id: integer().primaryKey(),
    		lastName: text().notNull(),
    		firstName: text(),
    		title: text().notNull(),
    		titleOfCourtesy: text().notNull(),
    		birthDate: timestamp().notNull(),
    		hireDate: timestamp().notNull(),
    		address: text().notNull(),
    		city: text().notNull(),
    		postalCode: text().notNull(),
    		country: text().notNull(),
    		homePhone: text().notNull(),
    		extension: integer().notNull(),
    		notes: text().notNull(),
    		reportsTo: integer().references((): AnyPgColumn => employees.id),
    		photoPath: text(),
    	},
    );
    
    export const orders = pgTable('order', {
    	id: integer().primaryKey(),
    	orderDate: timestamp().notNull(),
    	requiredDate: timestamp().notNull(),
    	shippedDate: timestamp(),
    	shipVia: integer().notNull(),
    	freight: numeric().notNull(),
    	shipName: text().notNull(),
    	shipCity: text().notNull(),
    	shipRegion: text(),
    	shipPostalCode: text(),
    	shipCountry: text().notNull(),
    
    	customerId: text().notNull().references(() => customers.id, { onDelete: 'cascade' }),
    
    	employeeId: integer().notNull().references(() => employees.id, { onDelete: 'cascade' }),
    });
    
    export const suppliers = pgTable('supplier', {
    	id: integer().primaryKey(),
    	companyName: text().notNull(),
    	contactName: text().notNull(),
    	contactTitle: text().notNull(),
    	address: text().notNull(),
    	city: text().notNull(),
    	region: text(),
    	postalCode: text().notNull(),
    	country: text().notNull(),
    	phone: text().notNull(),
    });
    
    export const products = pgTable('product', {
    	id: integer().primaryKey(),
    	name: text().notNull(),
    	quantityPerUnit: text().notNull(),
    	unitPrice: numeric().notNull(),
    	unitsInStock: integer().notNull(),
    	unitsOnOrder: integer().notNull(),
    	reorderLevel: integer().notNull(),
    	discontinued: integer().notNull(),
    
    	supplierId: integer().notNull().references(() => suppliers.id, { onDelete: 'cascade' }),
    });
    
    export const details = pgTable('order_detail', {
    	unitPrice: numeric().notNull(),
    	quantity: integer().notNull(),
    	discount: numeric().notNull(),
    
    	orderId: integer().notNull().references(() => orders.id, { onDelete: 'cascade' }),
    
    	productId: integer().notNull().references(() => products.id, { onDelete: 'cascade' }),
    });
    

Limitations[](#limitations)
---------------------------

#### Types limitations for `with`[](#types-limitations-for-with)

Due to certain TypeScript limitations and the current API in Drizzle, it is not possible to properly infer references between tables, especially when circular dependencies between tables exist.

This means the `with` option will display all tables in the schema, and you will need to manually select the one that has a one-to-many relationship

warning

The `with` option works for one-to-many relationships. For example, if you have one `user` and many `posts`, you can use users `with` posts, but you cannot use posts `with` users

#### Type limitations for the third parameter in Drizzle tables:[](#type-limitations-for-the-third-parameter-in-drizzle-tables)

Currently, we do not have type support for the third parameter in Drizzle tables. While it will work at runtime, it will not function correctly at the type level

Generators
==========

warning

For now, specifying `arraySize` along with `isUnique` in generators that support it will result in unique values being generated (not unique arrays), which will then be packed into arrays.

\---[](#---)
------------

### `default`[](#default)

Generates the same given value each time the generator is called.

param

default

type

`defaultValue`

—

`any`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      posts: {
        columns: {
          content: funcs.default({
            // value you want to generate
            defaultValue: "post content",
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `valuesFromArray`[](#valuesfromarray)

Generates values from given array

param

default

type

`values`

—

`any[]` | `{ weight: number; values: any[] }[]`

`isUnique`

database column uniqueness

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      posts: {
        columns: {
          title: funcs.valuesFromArray({
            // Array of values you want to generate (can be an array of weighted values)
            values: ["Title1", "Title2", "Title3", "Title4", "Title5"],
    
            // Property that controls whether the generated values will be unique or not
            isUnique: true,
            
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `intPrimaryKey`[](#intprimarykey)

Generates sequential integers starting from 1.

param

default

type

—

—

—

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      posts: {
        columns: {
          id: funcs.intPrimaryKey(),
        },
      },
    }));
    

### `number`[](#number)

Generates numbers with a floating point within the given range

param

default

type

`isUnique`

database column uniqueness

`boolean`

`precision`

`100`

`number`

`maxValue`

`` `precision * 1000` if isUnique equals false `` `` `precision * count` if isUnique equals true ``

`number`

`minValue`

`-maxValue`

`number`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      products: {
        columns: {
          unitPrice: funcs.number({
            // lower border of range.
            minValue: 10,
    
            // upper border of range.
            maxValue: 120,
            
            // precision of generated number:
            // precision equals 10 means that values will be accurate to one tenth (1.2, 34.6);
            // precision equals 100 means that values will be accurate to one hundredth (1.23, 34.67).
            precision: 100,
    
            // property that controls if generated values gonna be unique or not.
            isUnique: false,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `int`[](#int)

Generates integers within the given range

param

default

type

`isUnique`

database column uniqueness

`boolean`

`maxValue`

`` `1000` if isUnique equals false `` `` `count * 10` if isUnique equals true ``

`number | bigint`

`minValue`

`-maxValue`

`number | bigint`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      products: {
        columns: {
          unitsInStock: funcs.int({
            // lower border of range.
            minValue: 0,
    
            // lower border of range.
            maxValue: 100,
    
            // property that controls if generated values gonna be unique or not.
            isUnique: false,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `boolean`[](#boolean)

Generates boolean values (true or false)

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          isAvailable: funcs.boolean({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `date`[](#date)

Generates a date within the given range

param

default

type

`minDate`

`new Date('2020-05-08')`

`string | Date`

`maxDate`

`new Date('2028-05-08')`

`string | Date`

`arraySize`

—

`number`

IMPORTANT

If only one of the parameters (`minDate` or `maxDate`) is provided, the unspecified parameter will be calculated by adding or subtracting 8 years to/from the specified one

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          birthDate: funcs.date({
            // lower border of range.
            minDate: "1990-01-01",
    
            // upper border of range.
            maxDate: "2010-12-31",
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `time`[](#time)

Generates time in 24-hour format

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          birthTime: funcs.time({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `timestamp`[](#timestamp)

Generates timestamps

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      orders: {
        columns: {
          shippedDate: funcs.timestamp({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `datetime`[](#datetime)

Generates datetime objects

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      orders: {
        columns: {
          shippedDate: funcs.datetime({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `year`[](#year)

Generates years in `YYYY` format

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          birthYear: funcs.year({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `json`[](#json)

Generates JSON objects with a fixed structure

    { email, name, isGraduated, hasJob, salary, startedWorking, visitedCountries}
    
    // or
    
    { email, name, isGraduated, hasJob, visitedCountries }

> The JSON structure will be picked randomly

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          metadata: funcs.json({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `interval`[](#interval)

Generates time intervals.

Example of a generated value: `1 year 12 days 5 minutes`

param

default

type

`isUnique`

column uniqueness

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          timeSpentOnWebsite: funcs.interval({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: true,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `string`[](#string)

Generates random strings

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          hashedPassword: funcs.string({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: false,
            
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `uuid`[](#uuid)

Generates v4 UUID strings

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      products: {
        columns: {
          id: funcs.uuid({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));

### `firstName`[](#firstname)

Generates a person’s first name

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          firstName: funcs.firstName({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: true,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `lastName`[](#lastname)

Generates a person’s last name

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          lastName: funcs.lastName({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: false,
            
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `fullName`[](#fullname)

Generates a person’s full name

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          fullName: funcs.fullName({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: true,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `email`[](#email)

Generates unique email addresses

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          email: funcs.email({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `phoneNumber`[](#phonenumber)

Generates unique phone numbers

param

default

type

`template`

—

`string`

`prefixes`

[Used dataset for prefixes](https://github.com/OleksiiKH0240/drizzle-orm/blob/main/drizzle-seed/src/datasets/phonesInfo.ts)

`string[]`

`generatedDigitsNumbers`

`7` - `if prefixes was defined`

`number | number[]`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    //generate phone number using template property
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          phoneNumber: funcs.phoneNumber({ 
            // `template` - phone number template, where all '#' symbols will be substituted with generated digits.
            template: "+(380) ###-####",
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

    import { seed } from "drizzle-seed";
    
    //generate phone number using prefixes and generatedDigitsNumbers properties
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          phoneNumber: funcs.phoneNumber({
            // `prefixes` - array of any string you want to be your phone number prefixes.(not compatible with `template` property)
            prefixes: ["+380 99", "+380 67"],
    
            // `generatedDigitsNumbers` - number of digits that will be added at the end of prefixes.(not compatible with `template` property)
            generatedDigitsNumbers: 7,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

    import { seed } from "drizzle-seed";
    
    // generate phone number using prefixes and generatedDigitsNumbers properties but with different generatedDigitsNumbers for prefixes
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          phoneNumber: funcs.phoneNumber({
            // `prefixes` - array of any string you want to be your phone number prefixes.(not compatible with `template` property)
            prefixes: ["+380 99", "+380 67", "+1"],
    
            // `generatedDigitsNumbers` - number of digits that will be added at the end of prefixes.(not compatible with `template` property)
            generatedDigitsNumbers: [7, 7, 10],
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `country`[](#country)

Generates country’s names

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          country: funcs.country({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: false,
            
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `city`[](#city)

Generates city’s names

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          city: funcs.city({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: false,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `streetAddress`[](#streetaddress)

Generates street address

param

default

type

`isUnique`

—

`boolean`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          streetAddress: funcs.streetAddress({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: false,
            
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3 
          }),
        },
      },
    }));
    

### `jobTitle`[](#jobtitle)

Generates job titles

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          jobTitle: funcs.jobTitle({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `postcode`[](#postcode)

Generates postal codes

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          postcode: funcs.postcode({
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: true,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `state`[](#state)

Generates US states

param

default

type

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          state: funcs.state({
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `companyName`[](#companyname)

Generates random company’s names

param

default

type

`isUnique`

—

`boolean`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      users: {
        columns: {
          company: funcs.companyName({ 
            // `isUnique` - property that controls whether the generated values will be unique or not
            isUnique: true,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `loremIpsum`[](#loremipsum)

Generates `lorem ipsum` text sentences.

param

default

type

`sentencesCount`

1

`number`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      posts: {
        columns: {
          content: funcs.loremIpsum({
            // `sentencesCount` - number of sentences you want to generate as one generated value(string).
            sentencesCount: 2,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `point`[](#point)

Generates 2D points within specified ranges for x and y coordinates.

param

default

type

`isUnique`

database column uniqueness

`boolean`

`maxXValue`

`` `10 * 1000` if isUnique equals false `` `` `10 * count` if isUnique equals true ``

`number`

`minXValue`

`-maxXValue`

`number`

`maxYValue`

`` `10 * 1000` if isUnique equals false `` `` `10 * count` if isUnique equals true ``

`number`

`minYValue`

`-maxYValue`

`number`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      triangles: {
        columns: {
          pointCoords: funcs.point({
            // `isUnique` - property that controls if generated values gonna be unique or not.
            isUnique: true,
    
            // `minXValue` - lower bound of range for x coordinate.
            minXValue: -5,
    
            // `maxXValue` - upper bound of range for x coordinate.
            maxXValue: 20,
    
            // `minYValue` - lower bound of range for y coordinate.
            minYValue: 0,
    
            // `maxYValue` - upper bound of range for y coordinate.
            maxYValue: 30,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

### `line`[](#line)

Generates 2D lines within specified ranges for a, b and c parameters of line.

    line equation: a*x + b*y + c = 0

param

default

type

`isUnique`

database column uniqueness

`boolean`

`maxAValue`

`` `10 * 1000` if isUnique equals false `` `` `10 * count` if isUnique equals true ``

`number`

`minAValue`

`-maxAValue`

`number`

`maxBValue`

`` `10 * 1000` if isUnique equals false `` `` `10 * count` if isUnique equals true ``

`number`

`minBValue`

`-maxBValue`

`number`

`maxCValue`

`` `10 * 1000` if isUnique equals false `` `` `10 * count` if isUnique equals true ``

`number`

`minCValue`

`-maxCValue`

`number`

`arraySize`

—

`number`

    import { seed } from "drizzle-seed";
    
    await seed(db, schema, { count: 1000 }).refine((funcs) => ({
      lines: {
        columns: {
          lineParams: funcs.point({
            // `isUnique` - property that controls if generated values gonna be unique or not.
            isUnique: true,
    
            // `minAValue` - lower bound of range for a parameter.
            minAValue: -5,
    
            // `maxAValue` - upper bound of range for x parameter.
            maxAValue: 20,
    
            // `minBValue` - lower bound of range for y parameter.
            minBValue: 0,
    
            // `maxBValue` - upper bound of range for y parameter.
            maxBValue: 30,
    
            // `minCValue` - lower bound of range for y parameter.
            minCValue: 0,
    
            // `maxCValue` - upper bound of range for y parameter.
            maxCValue: 10,
    
            // number of elements in each one-dimensional array. 
            // (If specified, arrays will be generated.)
            arraySize: 3
          }),
        },
      },
    }));
    

Versioning
==========

`drizzle-seed` uses versioning to manage outputs for static and dynamic data. To ensure true determinism, ensure that values remain unchanged when using the same `seed` number. If changes are made to static data sources or dynamic data generation logic, the version will be updated, allowing you to choose between sticking with the previous version or using the latest.

You can upgrade to the latest `drizzle-seed` version for new features, such as additional generators, while maintaining deterministic outputs with a previous version if needed. This is particularly useful when you need to rely on existing deterministic data while accessing new functionality.

    await seed(db, schema, { version: '2' });

History[](#history)
-------------------

api version

npm version

Changed generators

`v1`

`0.1.1`

`v2 (LTS)`

`0.2.1`

`string()`, `interval({ isUnique: true })`

How it works under the hood?

> This is not an actual API change; it is just an example of how we will proceed with `drizzle-seed` versioning.

For example, `lastName` generator was changed, and new version, `V2`, of this generator became available.

Later, `firstName` generator was changed, making `V3` version of this generator available.

`V1`

`V2`

`V3(latest)`

**LastNameGen**

`LastNameGenV1`

`LastNameGenV2`

**FirstNameGen**

`FirstNameGenV1`

`FirstNameGenV3`

##### Use the `firstName` generator of version 3 and the `lastName` generator of version 2[](#use-the-firstname-generator-of-version-3-and-the-lastname-generator-of-version-2)

    await seed(db, schema);

If you are not ready to use latest generator version right away, you can specify max version to use

##### Use the `firstName` generator of version 1 and the `lastName` generator of version 2[](#use-the-firstname-generator-of-version-1-and-the-lastname-generator-of-version-2)

    await seed(db, schema, { version: '2' });

##### Use the `firstName` generator of version 1 and the `lastName` generator of version 1.[](#use-the-firstname-generator-of-version-1-and-the-lastname-generator-of-version-1)

    await seed(db, schema, { version: '1' });

Version 2[](#version-2)
-----------------------

#### Unique `interval` generator was changed[](#unique-interval-generator-was-changed)

Reason for upgrade

An older version of the generator could produce intervals like `1 minute 60 seconds` and `2 minutes 0 seconds`, treating them as distinct intervals. However, when the `1 minute 60 seconds` interval is inserted into a PostgreSQL database, it is automatically converted to `2 minutes 0 seconds`. As a result, attempting to insert the `2 minutes 0 seconds` interval into a unique column afterwards will cause an error

You will be affected, if your table includes a unique column of type `interval`:

PostgreSQL

    import { drizzle } from "drizzle-orm/node-postgres";
    import { pgTable, interval } from "drizzle-orm/pg-core";
    import { seed } from "drizzle-seed";
    
    const intervals = pgTable("intervals", {
        interval: interval().unique()
    });
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, { intervals });
    }
    
    main();

You will be affected, if you use the unique `interval` generator in your seeding script, as shown in the script below:

PostgreSQL

MySQL

SQLite

    import { drizzle } from "drizzle-orm/node-postgres";
    import { pgTable, interval, char, varchar, text } from "drizzle-orm/pg-core";
    import { seed } from "drizzle-seed";
    
    const intervals = pgTable("intervals", {
        interval: interval().unique(),
        interval1: interval(),
        interval2: char({ length: 256 }).unique(),
        interval3: char({ length: 256 }),
        interval4: varchar().unique(),
        interval5: varchar(),
        interval6: text().unique(),
        interval7: text(),
    });
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, { intervals }).refine((f) => ({
        intervals: {
            columns: {
                interval: f.interval({ isUnique: true }),
                interval1: f.interval({ isUnique: true }),
                interval2: f.interval({ isUnique: true }),
                interval3: f.interval({ isUnique: true }),
                interval4: f.interval({ isUnique: true }),
                interval5: f.interval({ isUnique: true }),
                interval6: f.interval({ isUnique: true }),
                interval7: f.interval({ isUnique: true }),
            }
        }
      }));
    }
    
    main();

    import { binary, char, mysqlTable, text, varbinary, varchar } from 'drizzle-orm/mysql-core';
    import { drizzle } from 'drizzle-orm/mysql2';
    import { seed } from "drizzle-seed";
    
    const intervals = mysqlTable('intervals', {
    	interval1: char({ length: 255 }).unique(),
    	interval2: char({ length: 255 }),
    	interval3: varchar({ length: 255 }).unique(),
    	interval4: varchar({ length: 255 }),
    	interval5: binary({ length: 255 }).unique(),
    	interval6: binary({ length: 255 }),
    	interval7: varbinary({ length: 255 }).unique(),
    	interval8: varbinary({ length: 255 }),
    	interval9: text(),
    });
    
    async function main() {
    	const db = drizzle(process.env.DATABASE_URL!);
    
    	await seed(db, { intervals }, { version: '2' }).refine((f) => ({
    		intervals: {
    			columns: {
    				interval: f.interval({ isUnique: true }),
    				interval1: f.interval({ isUnique: true }),
    				interval2: f.interval({ isUnique: true }),
    				interval3: f.interval({ isUnique: true }),
    				interval4: f.interval({ isUnique: true }),
    				interval5: f.interval({ isUnique: true }),
    				interval6: f.interval({ isUnique: true }),
    				interval7: f.interval({ isUnique: true }),
    				interval8: f.interval({ isUnique: true }),
    				interval9: f.interval({ isUnique: true }),
    			},
    		},
    	}));
    }
    
    main();
    

    import { blob, sqliteTable, text } from 'drizzle-orm/sqlite-core';
    import { drizzle } from 'drizzle-orm/better-sqlite3';
    import { seed } from 'drizzle-seed';
    
    const intervals = sqliteTable('intervals', {
    	interval1: text().unique(),
    	interval2: text(),
    	interval3: blob().unique(),
    	interval4: blob(),
    });
    
    async function main() {
    	const db = drizzle(process.env.DATABASE_URL!);
    
    	await seed(db, { intervals }).refine((f) => ({
    		intervals: {
    			columns: {
    				interval1: f.interval({ isUnique: true }),
    				interval2: f.interval({ isUnique: true }),
    				interval3: f.interval({ isUnique: true }),
    				interval4: f.interval({ isUnique: true }),
    			},
    		},
    	}));
    }
    
    main();
    

#### `string` generators were changed: both non-unique and unique[](#string-generators-were-changed-both-non-unique-and-unique)

Reason to upgrade

Ability to generate a unique string based on the length of the text column (e.g., `varchar(20)`)

You will be affected, if your table includes a column of a text-like type with a maximum length parameter or a unique column of a text-like type:

PostgreSQL

MySQL

SQLite

    import { drizzle } from "drizzle-orm/node-postgres";
    import { pgTable, char, varchar, text } from "drizzle-orm/pg-core";
    import { seed } from "drizzle-seed";
    
    const strings = pgTable("strings", {
        string2: char({ length: 256 }).unique(),
        string3: char({ length: 256 }),
        string4: varchar().unique(),
        string5: varchar({ length: 256 }).unique(),
        string6: varchar({ length: 256 }),
        string7: text().unique(),
    });
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, { strings });
    }
    
    main();

    import { binary, char, mysqlTable, varbinary, varchar } from 'drizzle-orm/mysql-core';
    import { drizzle } from 'drizzle-orm/mysql2';
    import { seed } from "drizzle-seed";
    
    const strings = mysqlTable('strings', {
    	string1: char({ length: 255 }).unique(),
    	string2: char({ length: 255 }),
    	string3: varchar({ length: 255 }).unique(),
    	string4: varchar({ length: 255 }),
    	string5: binary({ length: 255 }).unique(),
    	string6: binary({ length: 255 }),
    	string7: varbinary({ length: 255 }).unique(),
    	string8: varbinary({ length: 255 }),
    });
    
    async function main() {
    	const db = drizzle(process.env.DATABASE_URL!);
    
    	await seed(db, { strings });
    }
    
    main();
    

    import { drizzle } from 'drizzle-orm/better-sqlite3';
    import { blob, sqliteTable, text } from 'drizzle-orm/sqlite-core';
    import { seed } from "drizzle-seed";
    
    const strings = sqliteTable('strings', {
    	string1: text().unique(),
    	string2: text({ length: 256 }),
    	string3: text({ length: 256 }).unique(),
    	string4: blob().unique(),
    });
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, { strings });
    }
    
    main();

You will be affected, if you use the `string` generator in your seeding script, as shown in the script below:

PostgreSQL

MySQL

SQLite

    import { drizzle } from "drizzle-orm/node-postgres";
    import { pgTable, char, varchar, text } from "drizzle-orm/pg-core";
    import { seed } from "drizzle-seed";
    
    const strings = pgTable("strings", {
        string1: char({ length: 256 }).unique(),
        string2: char({ length: 256 }),
        string3: char({ length: 256 }),
        string4: varchar(),
        string5: varchar().unique(),
        string6: varchar({ length: 256 }).unique(),
        string7: varchar({ length: 256 }),
        string8: varchar({ length: 256 }),
        string9: text().unique(),
        string10: text(),
    });
    
    async function main() {
      const db = drizzle(process.env.DATABASE_URL!);
    
      await seed(db, { strings }).refine((f) => ({
        strings: {
            columns: {
                string1: f.string({ isUnique: true }),
                string2: f.string(),
                string3: f.string({ isUnique: true }),
                string4: f.string({ isUnique: true }),
                string5: f.string({ isUnique: true }),
                string6: f.string({ isUnique: true }),
                string7: f.string(),
                string8: f.string({ isUnique: true }),
                string9: f.string({ isUnique: true }),
                string10: f.string({ isUnique: true }),
            }
        }
      }));
    }
    
    main();

    import { binary, char, mysqlTable, text, varbinary, varchar } from 'drizzle-orm/mysql-core';
    import { drizzle } from 'drizzle-orm/mysql2';
    import { seed } from "drizzle-seed";
    
    const strings = mysqlTable('strings', {
    	string1: char({ length: 255 }).unique(),
    	string2: char({ length: 255 }),
    	string3: char({ length: 255 }),
    	string4: varchar({ length: 255 }).unique(),
    	string5: varchar({ length: 255 }),
    	string6: varchar({ length: 255 }),
    	string7: binary({ length: 255 }).unique(),
    	string8: binary({ length: 255 }),
    	string9: binary({ length: 255 }),
    	string10: varbinary({ length: 255 }).unique(),
    	string11: varbinary({ length: 255 }),
    	string12: varbinary({ length: 255 }),
    	string13: text(),
    });
    
    async function main() {
    	const db = drizzle(process.env.DATABASE_URL!);
    
    	await seed(db, { strings }).refine((f) => ({
    		strings: {
    			columns: {
    				string1: f.string({ isUnique: true }),
    				string2: f.string({ isUnique: true }),
    				string3: f.string(),
    				string4: f.string({ isUnique: true }),
    				string5: f.string({ isUnique: true }),
    				string6: f.string(),
    				string7: f.string({ isUnique: true }),
    				string8: f.string({ isUnique: true }),
    				string9: f.string(),
    				string10: f.string({ isUnique: true }),
    				string11: f.string({ isUnique: true }),
    				string12: f.string(),
    				string13: f.string({ isUnique: true }),
    			},
    		},
    	}));
    }
    
    main();

    import { blob, sqliteTable, text } from 'drizzle-orm/sqlite-core';
    import { drizzle } from 'drizzle-orm/better-sqlite3';
    import { seed } from "drizzle-seed";
    
    const strings = sqliteTable("strings", {
        string1: text().unique(),
    	string2: text(),
    	string3: text({ length: 256 }).unique(),
    	string4: text({ length: 256 }),
    	string5: text({ length: 256 }),
    	string6: blob().unique(),
    	string7: blob(),
    });
    
    async function main() {
    	const db = drizzle(process.env.DATABASE_URL!);
    
    	await seed(db, { strings }).refine((f) => ({
    		strings: {
    			columns: {
    				string1: f.string({ isUnique: true }),
    				string2: f.string({ isUnique: true }),
    				string3: f.string({ isUnique: true }),
    				string4: f.string({ isUnique: true }),
    				string5: f.string(),
    				string6: f.string({ isUnique: true }),
    				string7: f.string({ isUnique: true }),
    			},
    		},
    	}));
    }
    
    main();

Drizzle Queries
===============

PostgreSQL

SQLite

MySQL

SingleStore

Drizzle ORM is designed to be a thin typed layer on top of SQL. We truly believe we’ve designed the best way to operate an SQL database from TypeScript and it’s time to make it better.

Relational queries are meant to provide you with a great developer experience for querying nested relational data from an SQL database, avoiding multiple joins and complex data mappings.

It is an extension to the existing schema definition and query builder. You can opt-in to use it based on your needs. We’ve made sure you have both the best-in-class developer experience and performance.

index.ts

schema.ts

    import * as schema from './schema';
    import { drizzle } from 'drizzle-orm/...';
    
    const db = drizzle({ schema });
    
    const result = await db.query.users.findMany({
    	with: {
    		posts: true			
    	},
    });

    [{
    	id: 10,
    	name: "Dan",
    	posts: [
    		{
    			id: 1,
    			content: "SQL is awesome",
    			authorId: 10,
    		},
    		{
    			id: 2,
    			content: "But check relational queries",
    			authorId: 10,
    		}
    	]
    }]

    import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
    	id: serial('id').primaryKey(),
    	name: text('name').notNull(),
    });
    
    export const usersRelations = relations(users, ({ many }) => ({
    	posts: many(posts),
    }));
    
    export const posts = pgTable('posts', {
    	id: serial('id').primaryKey(),
    	content: text('content').notNull(),
    	authorId: integer('author_id').notNull(),
    });
    
    export const postsRelations = relations(posts, ({ one }) => ({
    	author: one(users, { fields: [posts.authorId], references: [users.id] }),
    }));

⚠️ If you have SQL schema declared in multiple files you can do it like that

index.ts

schema1.ts

schema2.ts

    import * as schema1 from './schema1';
    import * as schema2 from './schema2';
    import { drizzle } from 'drizzle-orm/...';
    
    const db = drizzle({ schema: { ...schema1, ...schema2 } });
    
    const result = await db.query.users.findMany({
    	with: {
    		posts: true			
    	},
    });

    // schema declaration in the first file

    // schema declaration in the second file

Modes[](#modes)
---------------

Drizzle relational queries always generate exactly one SQL statement to run on the database and it has certain caveats. To have best in class support for every database out there we’ve introduced **`modes`**.

Drizzle relational queries use lateral joins of subqueries under the hood and for now PlanetScale does not support them.

When using **mysql2** driver with regular **MySQL** database — you should specify `mode: "default"` When using **mysql2** driver with **PlanetScale** — you need to specify `mode: "planetscale"`

    import * as schema from './schema';
    import { drizzle } from "drizzle-orm/mysql2";
    import mysql from "mysql2/promise";
    
    const connection = await mysql.createConnection({
      uri: process.env.PLANETSCALE_DATABASE_URL,
    });
    
    const db = drizzle({ client: connection, schema, mode: 'planetscale' });

Querying[](#querying)
---------------------

Relational queries are an extension to Drizzle’s original **[query builder](/docs/select)**. You need to provide all `tables` and `relations` from your schema file/files upon `drizzle()` initialization and then just use the `db.query` API.

`drizzle` import path depends on the **[database driver](/docs/connect-overview)** you’re using.

index.ts

schema.ts

    import * as schema from './schema';
    import { drizzle } from 'drizzle-orm/...';
    
    const db = drizzle({ schema });
    
    await db.query.users.findMany(...);

    // if you have schema in multiple files
    import * as schema1 from './schema1';
    import * as schema2 from './schema2';
    import { drizzle } from 'drizzle-orm/...';
    
    const db = drizzle({ schema: { ...schema1, ...schema2 } });
    
    await db.query.users.findMany(...);

    	import { type AnyPgColumn, boolean, integer, pgTable, primaryKey, serial, text, timestamp } from 'drizzle-orm/pg-core';
    
    	import { relations } from 'drizzle-orm';
    
    	export const users = pgTable('users', {
    		id: serial('id').primaryKey(),
    		name: text('name').notNull(),
    		invitedBy: integer('invited_by').references((): AnyPgColumn => users.id),
    	});
    
    	export const usersRelations = relations(users, ({ one, many }) => ({
    		invitee: one(users, { fields: [users.invitedBy], references: [users.id] }),
    		usersToGroups: many(usersToGroups),
    		posts: many(posts),
    	}));
    
    	export const groups = pgTable('groups', {
    		id: serial('id').primaryKey(),
    		name: text('name').notNull(),
    		description: text('description'),
    	});
    
    	export const groupsRelations = relations(groups, ({ many }) => ({
    		usersToGroups: many(usersToGroups),
    	}));
    
    	export const usersToGroups = pgTable('users_to_groups', {
    		id: serial('id').primaryKey(),
    		userId: integer('user_id').notNull().references(() => users.id),
    		groupId: integer('group_id').notNull().references(() => groups.id),
    	}, (t) => [
    		primaryKey(t.userId, t.groupId)
    	]);
    
    	export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
    		group: one(groups, { fields: [usersToGroups.groupId], references: [groups.id] }),
    		user: one(users, { fields: [usersToGroups.userId], references: [users.id] }),
    	}));
    
    	export const posts = pgTable('posts', {
    		id: serial('id').primaryKey(),
    		content: text('content').notNull(),
    		authorId: integer('author_id').references(() => users.id),
    		createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    	});
    
    	export const postsRelations = relations(posts, ({ one, many }) => ({
    		author: one(users, { fields: [posts.authorId], references: [users.id] }),
    		comments: many(comments),
    	}));
    
    	export const comments = pgTable('comments', {
    		id: serial('id').primaryKey(),
    		content: text('content').notNull(),
    		creator: integer('creator').references(() => users.id),
    		postId: integer('post_id').references(() => posts.id),
    		createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    	});
    
    	export const commentsRelations = relations(comments, ({ one, many }) => ({
    		post: one(posts, { fields: [comments.postId], references: [posts.id] }),
    		author: one(users, { fields: [comments.creator], references: [users.id] }),
    		likes: many(commentLikes),
    	}));
    
    	export const commentLikes = pgTable('comment_likes', {
    		id: serial('id').primaryKey(),
    		creator: integer('creator').references(() => users.id),
    		commentId: integer('comment_id').references(() => comments.id),
    		createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    	});
    
    	export const commentLikesRelations = relations(commentLikes, ({ one }) => ({
    		comment: one(comments, { fields: [commentLikes.commentId], references: [comments.id] }),
    		author: one(users, { fields: [commentLikes.creator], references: [users.id] }),
    	}));

Drizzle provides `.findMany()` and `.findFirst()` APIs.

### Find many[](#find-many)

    const users = await db.query.users.findMany();

    // result type
    const result: {
    	id: number;
    	name: string;
    	verified: boolean;
    	invitedBy: number | null;
    }[];

### Find first[](#find-first)

`.findFirst()` will add `limit 1` to the query.

    const user = await db.query.users.findFirst();

    // result type
    const result: {
    	id: number;
    	name: string;
    	verified: boolean;
    	invitedBy: number | null;
    };

### Include relations[](#include-relations)

`With` operator lets you combine data from multiple related tables and properly aggregate results.

**Getting all posts with comments:**

    const posts = await db.query.posts.findMany({
    	with: {
    		comments: true,
    	},
    });

**Getting first post with comments:**

    const post = await db.query.posts.findFirst({
    	with: {
    		comments: true,
    	},
    });

You can chain nested with statements as much as necessary.  
For any nested `with` queries Drizzle will infer types using [Core Type API](/docs/goodies#type-api).

**Get all users with posts. Each post should contain a list of comments:**

    const users = await db.query.users.findMany({
    	with: {
    		posts: {
    			with: {
    				comments: true,
    			},
    		},
    	},
    });

### Partial fields select[](#partial-fields-select)

`columns` parameter lets you include or omit columns you want to get from the database.

Drizzle performs partial selects on the query level, no additional data is transferred from the database.

Keep in mind that **a single SQL statement is outputted by Drizzle.**

**Get all posts with just `id`, `content` and include `comments`:**

    const posts = await db.query.posts.findMany({
    	columns: {
    		id: true,
    		content: true,
    	},
    	with: {
    		comments: true,
    	}
    });

**Get all posts without `content`:**

    const posts = await db.query.posts.findMany({
    	columns: {
    		content: false,
    	},
    });

When both `true` and `false` select options are present, all `false` options are ignored.

If you include the `name` field and exclude the `id` field, `id` exclusion will be redundant, all fields apart from `name` would be excluded anyways.

**Exclude and Include fields in the same query:**

    const users = await db.query.users.findMany({
    	columns: {
    		name: true,
    		id: false //ignored
    	},
    });

    // result type
    const users: {
    	name: string;
    };

**Only include columns from nested relations:**

    const res = await db.query.users.findMany({
    	columns: {},
    	with: {
    		posts: true
    	}
    });

    // result type
    const res: {
    	posts: {
    		id: number,
    		text: string
    	}
    }[];

### Nested partial fields select[](#nested-partial-fields-select)

Just like with **[`partial select`](#partial-select)**, you can include or exclude columns of nested relations:

    const posts = await db.query.posts.findMany({
    	columns: {
    		id: true,
    		content: true,
    	},
    	with: {
    		comments: {
    			columns: {
    				authorId: false
    			}
    		}
    	}
    });

### Select filters[](#select-filters)

Just like in our SQL-like query builder, relational queries API lets you define filters and conditions with the list of our **[`operators`](/docs/operators)**.

You can either import them from `drizzle-orm` or use from the callback syntax:

    import { eq } from 'drizzle-orm';
    
    const users = await db.query.users.findMany({
    	where: eq(users.id, 1)
    })

    const users = await db.query.users.findMany({
    	where: (users, { eq }) => eq(users.id, 1),
    })

Find post with `id=1` and comments that were created before particular date:

    await db.query.posts.findMany({
    	where: (posts, { eq }) => (eq(posts.id, 1)),
    	with: {
    		comments: {
    			where: (comments, { lt }) => lt(comments.createdAt, new Date()),
    		},
    	},
    });

### Limit & Offset[](#limit--offset)

Drizzle ORM provides `limit` & `offset` API for queries and for the nested entities.

**Find 5 posts:**

    await db.query.posts.findMany({
    	limit: 5,
    });

**Find posts and get 3 comments at most:**

    await db.query.posts.findMany({
    	with: {
    		comments: {
    			limit: 3,
    		},
    	},
    });

IMPORTANT

`offset` is only available for top level query.

    await db.query.posts.findMany({
    	limit: 5,
    	offset: 2, // correct ✅
    	with: {
    		comments: {
    			offset: 3, // incorrect ❌
    			limit: 3,
    		},
    	},
    });

Find posts with comments from the 5th to the 10th post:

    await db.query.posts.findMany({
    	limit: 5,
      offset: 5,
    	with: {
    		comments: true,
    	},
    });

### Order By[](#order-by)

Drizzle provides API for ordering in the relational query builder.

You can use same ordering **[core API](/docs/select#order-by)** or use `order by` operator from the callback with no imports.

    import { desc, asc } from 'drizzle-orm';
    
    await db.query.posts.findMany({
    	orderBy: [asc(posts.id)],
    });

    await db.query.posts.findMany({
    	orderBy: (posts, { asc }) => [asc(posts.id)],
    });

**Order by `asc` + `desc`:**

    await db.query.posts.findMany({
    	orderBy: (posts, { asc }) => [asc(posts.id)],
    	with: {
    		comments: {
    			orderBy: (comments, { desc }) => [desc(comments.id)],
    		},
    	},
    });

### Include custom fields[](#include-custom-fields)

Relational query API lets you add custom additional fields. It’s useful when you need to retrieve data and apply additional functions to it.

IMPORTANT

As of now aggregations are not supported in `extras`, please use **[`core queries`](/docs/select)** for that.

    import { sql } from 'drizzle-orm';
    
    await db.query.users.findMany({
    	extras: {
    		loweredName: sql`lower(${users.name})`.as('lowered_name'),
    	},
    })

    await db.query.users.findMany({
    	extras: {
    		loweredName: (users, { sql }) => sql`lower(${users.name})`.as('lowered_name'),
    	},
    })

`lowerName` as a key will be included to all fields in returned object.

IMPORTANT

You have to explicitly specify `.as("<name_for_column>")`

To retrieve all users with groups, but with the fullName field included (which is a concatenation of firstName and lastName), you can use the following query with the Drizzle relational query builder.

    const res = await db.query.users.findMany({
    	extras: {
    		fullName: sql<string>`concat(${users.name}, " ", ${users.name})`.as('full_name'),
    	},
    	with: {
    		usersToGroups: {
    			with: {
    				group: true,
    			},
    		},
    	},
    });

    // result type
    const res: {
    	id: number;
    	name: string;
    	verified: boolean;
    	invitedBy: number | null;
    	fullName: string;
    	usersToGroups: {
    			group: {
    					id: number;
    					name: string;
    					description: string | null;
    			};
    	}[];
    }[];
    

To retrieve all posts with comments and add an additional field to calculate the size of the post content and the size of each comment content:

    const res = await db.query.posts.findMany({
    	extras: (table, { sql }) => ({
    		contentLength: (sql<number>`length(${table.content})`).as('content_length'),
    	}),
    	with: {
    		comments: {
    			extras: {
    				commentSize: sql<number>`length(${comments.content})`.as('comment_size'),
    			},
    		},
    	},
    });

    // result type
    const res: {
    	id: number;
    	createdAt: Date;
    	content: string;
    	authorId: number | null;
    	contentLength: number;
    	comments: {
    			id: number;
    			createdAt: Date;
    			content: string;
    			creator: number | null;
    			postId: number | null;
    			commentSize: number;
    	}[];
    };

### Prepared statements[](#prepared-statements)

Prepared statements are designed to massively improve query performance — [see here.](/docs/perf-queries)

In this section, you can learn how to define placeholders and execute prepared statements using the Drizzle relational query builder.

##### **Placeholder in `where`**[](#placeholder-in-where)

PostgreSQL

MySQL

SQLite

    const prepared = db.query.users.findMany({
    	where: ((users, { eq }) => eq(users.id, placeholder('id'))),
    	with: {
    		posts: {
    			where: ((users, { eq }) => eq(users.id, 1)),
    		},
    	},
    }).prepare('query_name');
    
    const usersWithPosts = await prepared.execute({ id: 1 });

    const prepared = db.query.users.findMany({
    	where: ((users, { eq }) => eq(users.id, placeholder('id'))),
    	with: {
    		posts: {
    			where: ((users, { eq }) => eq(users.id, 1)),
    		},
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ id: 1 });

    const prepared = db.query.users.findMany({
    	where: ((users, { eq }) => eq(users.id, placeholder('id'))),
    	with: {
    		posts: {
    			where: ((users, { eq }) => eq(users.id, 1)),
    		},
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ id: 1 });

##### **Placeholder in `limit`**[](#placeholder-in-limit)

PostgreSQL

MySQL

SQLite

    const prepared = db.query.users.findMany({
    	with: {
    		posts: {
    			limit: placeholder('limit'),
    		},
    	},
    }).prepare('query_name');
    
    const usersWithPosts = await prepared.execute({ limit: 1 });

    const prepared = db.query.users.findMany({
    	with: {
    		posts: {
    			limit: placeholder('limit'),
    		},
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ limit: 1 });

    const prepared = db.query.users.findMany({
    	with: {
    		posts: {
    			limit: placeholder('limit'),
    		},
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ limit: 1 });

##### **Placeholder in `offset`**[](#placeholder-in-offset)

PostgreSQL

MySQL

SQLite

    const prepared = db.query.users.findMany({
    	offset: placeholder('offset'),
    	with: {
    		posts: true,
    	},
    }).prepare('query_name');
    
    const usersWithPosts = await prepared.execute({ offset: 1 });

    const prepared = db.query.users.findMany({
    	offset: placeholder('offset'),
    	with: {
    		posts: true,
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ offset: 1 });

    const prepared = db.query.users.findMany({
    	offset: placeholder('offset'),
    	with: {
    		posts: true,
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ offset: 1 });

##### **Multiple placeholders**[](#multiple-placeholders)

PostgreSQL

MySQL

SQLite

    const prepared = db.query.users.findMany({
    	limit: placeholder('uLimit'),
    	offset: placeholder('uOffset'),
    	where: ((users, { eq, or }) => or(eq(users.id, placeholder('id')), eq(users.id, 3))),
    	with: {
    		posts: {
    			where: ((users, { eq }) => eq(users.id, placeholder('pid'))),
    			limit: placeholder('pLimit'),
    		},
    	},
    }).prepare('query_name');
    
    const usersWithPosts = await prepared.execute({ pLimit: 1, uLimit: 3, uOffset: 1, id: 2, pid: 6 });

    const prepared = db.query.users.findMany({
    	limit: placeholder('uLimit'),
    	offset: placeholder('uOffset'),
    	where: ((users, { eq, or }) => or(eq(users.id, placeholder('id')), eq(users.id, 3))),
    	with: {
    		posts: {
    			where: ((users, { eq }) => eq(users.id, placeholder('pid'))),
    			limit: placeholder('pLimit'),
    		},
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ pLimit: 1, uLimit: 3, uOffset: 1, id: 2, pid: 6 });

    const prepared = db.query.users.findMany({
    	limit: placeholder('uLimit'),
    	offset: placeholder('uOffset'),
    	where: ((users, { eq, or }) => or(eq(users.id, placeholder('id')), eq(users.id, 3))),
    	with: {
    		posts: {
    			where: ((users, { eq }) => eq(users.id, placeholder('pid'))),
    			limit: placeholder('pLimit'),
    		},
    	},
    }).prepare();
    
    const usersWithPosts = await prepared.execute({ pLimit: 1, uLimit: 3, uOffset: 1, id: 2, pid: 6 });

SQL Select
==========

Drizzle provides you the most SQL-like way to fetch data from your database, while remaining type-safe and composable. It natively supports mostly every query feature and capability of every dialect, and whatever it doesn’t support yet, can be added by the user with the powerful [`sql`](/docs/sql) operator.

For the following examples, let’s assume you have a `users` table defined like this:

PostgreSQL

MySQL

SQLite

SingleStore

    import { pgTable, serial, text } from 'drizzle-orm/pg-core';
    
    export const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      age: integer('age'),
    });

    import { mysqlTable, serial, text, int } from 'drizzle-orm/mysql-core';
    
    export const users = mysqlTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      age: int('age'),
    });

    import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
    
    export const users = sqliteTable('users', {
      id: integer('id').primaryKey(),
      name: text('name').notNull(),
      age: integer('age'),
    });

    import { singlestoreTable, serial, text, int } from 'drizzle-orm/singlestore-core';
    
    export const users = singlestoreTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
      age: int('age'),
    });

### Basic select[](#basic-select)

Select all rows from a table including all columns:

    const result = await db.select().from(users);
    /*
      {
        id: number;
        name: string;
        age: number | null;
      }[]
    */

    select "id", "name", "age" from "users";

Notice that the result type is inferred automatically based on the table definition, including columns nullability.

Drizzle always explicitly lists columns in the `select` clause instead of using `select *`.  
This is required internally to guarantee the fields order in the query result, and is also generally considered a good practice.

### Partial select[](#partial-select)

In some cases, you might want to select only a subset of columns from a table. You can do that by providing a selection object to the `.select()` method:

    const result = await db.select({
      field1: users.id,
      field2: users.name,
    }).from(users);
    
    const { field1, field2 } = result[0];

    select "id", "name" from "users";

Like in SQL, you can use arbitrary expressions as selection fields, not just table columns:

    const result = await db.select({
      id: users.id,
      lowerName: sql<string>`lower(${users.name})`,
    }).from(users);

    select "id", lower("name") from "users";

IMPORTANT

By specifying `sql<string>`, you are telling Drizzle that the **expected** type of the field is `string`.  
If you specify it incorrectly (e.g. use `sql<number>` for a field that will be returned as a string), the runtime value won’t match the expected type. Drizzle cannot perform any type casts based on the provided type generic, because that information is not available at runtime.

If you need to apply runtime transformations to the returned value, you can use the [`.mapWith()`](/docs/sql#sqlmapwith) method.

### Conditional select[](#conditional-select)

You can have a dynamic selection object based on some condition:

    async function selectUsers(withName: boolean) {
      return db
        .select({
          id: users.id,
          ...(withName ? { name: users.name } : {}),
        })
        .from(users);
    }
    
    const users = await selectUsers(true);

### Distinct select[](#distinct-select)

You can use `.selectDistinct()` instead of `.select()` to retrieve only unique rows from a dataset:

    await db.selectDistinct().from(users).orderBy(usersTable.id, usersTable.name);
    
    await db.selectDistinct({ id: users.id }).from(users).orderBy(usersTable.id);

    select distinct "id", "name" from "users" order by "id", "name";
    
    select distinct "id" from "users" order by "id";

In PostgreSQL, you can also use the `distinct on` clause to specify how the unique rows are determined:

IMPORTANT

`distinct on` clause is only supported in PostgreSQL.

    await db.selectDistinctOn([users.id]).from(users).orderBy(users.id);
    await db.selectDistinctOn([users.name], { name: users.name }).from(users).orderBy(users.name);

    select distinct on ("id") "id", "name" from "users" order by "id";
    select distinct on ("name") "name" from "users" order by "name";

### Advanced select[](#advanced-select)

Powered by TypeScript, Drizzle APIs let you build your select queries in a variety of flexible ways.

Sneak peek of advanced partial select, for more detailed advaced usage examples - see our [dedicated guide](/docs/guides/include-or-exclude-columns).

example 1

example 2

example 3

example 4

    import { getTableColumns, sql } from 'drizzle-orm';
    
    await db.select({
        ...getTableColumns(posts),
        titleLength: sql<number>`length(${posts.title})`,
      }).from(posts);

    import { getTableColumns } from 'drizzle-orm';
    
    const { content, ...rest } = getTableColumns(posts); // exclude "content" column
    await db.select({ ...rest }).from(posts); // select all other columns

    await db.query.posts.findMany({
      columns: {
        title: true,
      },
    });

    await db.query.posts.findMany({
      columns: {
        content: false,
      },
    });

\---[](#---)
------------

### Filters[](#filters)

You can filter the query results using the [filter operators](/docs/operators) in the `.where()` method:

    import { eq, lt, gte, ne } from 'drizzle-orm';
    
    await db.select().from(users).where(eq(users.id, 42));
    await db.select().from(users).where(lt(users.id, 42));
    await db.select().from(users).where(gte(users.id, 42));
    await db.select().from(users).where(ne(users.id, 42));
    ...

    select "id", "name", "age" from "users" where "id" = 42;
    select "id", "name", "age" from "users" where "id" < 42;
    select "id", "name", "age" from "users" where "id" >= 42;
    select "id", "name", "age" from "users" where "id" <> 42;

All filter operators are implemented using the [`sql`](/docs/sql) function. You can use it yourself to write arbitrary SQL filters, or build your own operators. For inspiration, you can check how the operators provided by Drizzle are [implemented](https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/sql/expressions/conditions.ts).

    import { sql } from 'drizzle-orm';
    
    function equals42(col: Column) {
      return sql`${col} = 42`;
    }
    
    await db.select().from(users).where(sql`${users.id} < 42`);
    await db.select().from(users).where(sql`${users.id} = 42`);
    await db.select().from(users).where(equals42(users.id));
    await db.select().from(users).where(sql`${users.id} >= 42`);
    await db.select().from(users).where(sql`${users.id} <> 42`);
    await db.select().from(users).where(sql`lower(${users.name}) = 'aaron'`);

    select "id", "name", "age" from "users" where 'id' < 42;
    select "id", "name", "age" from "users" where 'id' = 42;
    select "id", "name", "age" from "users" where 'id' = 42;
    select "id", "name", "age" from "users" where 'id' >= 42;
    select "id", "name", "age" from "users" where 'id' <> 42;
    select "id", "name", "age" from "users" where lower("name") = 'aaron';

All the values provided to filter operators and to the `sql` function are parameterized automatically. For example, this query:

    await db.select().from(users).where(eq(users.id, 42));

will be translated to:

    select "id", "name", "age" from "users" where "id" = $1; -- params: [42]

Inverting condition with a `not` operator:

    import { eq, not, sql } from 'drizzle-orm';
    
    await db.select().from(users).where(not(eq(users.id, 42)));
    await db.select().from(users).where(sql`not ${users.id} = 42`);

    select "id", "name", "age" from "users" where not ("id" = 42);
    select "id", "name", "age" from "users" where not ("id" = 42);

You can safely alter schema, rename tables and columns and it will be automatically reflected in your queries because of template interpolation, as opposed to hardcoding column or table names when writing raw SQL.

### Combining filters[](#combining-filters)

You can logically combine filter operators with `and()` and `or()` operators:

    import { eq, and, sql } from 'drizzle-orm';
    
    await db.select().from(users).where(
      and(
        eq(users.id, 42),
        eq(users.name, 'Dan')
      )
    );
    await db.select().from(users).where(sql`${users.id} = 42 and ${users.name} = 'Dan'`);

    select "id", "name", "age" from "users" where "id" = 42 and "name" = 'Dan';
    select "id", "name", "age" from "users" where "id" = 42 and "name" = 'Dan';

    import { eq, or, sql } from 'drizzle-orm';
    
    await db.select().from(users).where(
      or(
        eq(users.id, 42), 
        eq(users.name, 'Dan')
      )
    );
    await db.select().from(users).where(sql`${users.id} = 42 or ${users.name} = 'Dan'`);

    select "id", "name", "age" from "users" where "id" = 42 or "name" = 'Dan';
    select "id", "name", "age" from "users" where "id" = 42 or "name" = 'Dan';

### Advanced filters[](#advanced-filters)

In combination with TypeScript, Drizzle APIs provide you powerful and flexible ways to combine filters in queries.

Sneak peek of conditional filtering, for more detailed advaced usage examples - see our [dedicated guide](/docs/guides/conditional-filters-in-query).

example 1

example 2

    const searchPosts = async (term?: string) => {
      await db
        .select()
        .from(posts)
        .where(term ? ilike(posts.title, term) : undefined);
    };
    await searchPosts();
    await searchPosts('AI');

    const searchPosts = async (filters: SQL[]) => {
      await db
        .select()
        .from(posts)
        .where(and(...filters));
    };
    const filters: SQL[] = [];
    filters.push(ilike(posts.title, 'AI'));
    filters.push(inArray(posts.category, ['Tech', 'Art', 'Science']));
    filters.push(gt(posts.views, 200));
    await searchPosts(filters);

\---[](#----1)
--------------

### Limit & offset[](#limit--offset)

Use `.limit()` and `.offset()` to add `limit` and `offset` clauses to the query - for example, to implement pagination:

    await db.select().from(users).limit(10);
    await db.select().from(users).limit(10).offset(10);

    select "id", "name", "age" from "users" limit 10;
    select "id", "name", "age" from "users" limit 10 offset 10;

### Order By[](#order-by)

Use `.orderBy()` to add `order by` clause to the query, sorting the results by the specified fields:

    import { asc, desc } from 'drizzle-orm';
    
    await db.select().from(users).orderBy(users.name);
    await db.select().from(users).orderBy(desc(users.name));
    
    // order by multiple fields
    await db.select().from(users).orderBy(users.name, users.name2);
    await db.select().from(users).orderBy(asc(users.name), desc(users.name2));

    select "id", "name", "age" from "users" order by "name";
    select "id", "name", "age" from "users" order by "name" desc;
    
    select "id", "name", "age" from "users" order by "name", "name2";
    select "id", "name", "age" from "users" order by "name" asc, "name2" desc;

### Advanced pagination[](#advanced-pagination)

Powered by TypeScript, Drizzle APIs let you implement all possible SQL paginations and sorting approaches.

Sneak peek of advanced pagination, for more detailed advaced usage examples - see our dedicated [limit offset pagination](/docs/guides/limit-offset-pagination) and [cursor pagination](/docs/guides/cursor-based-pagination) guides.

example 1

example 2

example 3

example 4

    await db
      .select()
      .from(users)
      .orderBy(asc(users.id)) // order by is mandatory
      .limit(4) // the number of rows to return
      .offset(4); // the number of rows to skip

    const getUsers = async (page = 1, pageSize = 3) => {
      await db.query.users.findMany({
        orderBy: (users, { asc }) => asc(users.id),
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
    };
    await getUsers();

    const getUsers = async (page = 1, pageSize = 10) => {
       const sq = db
        .select({ id: users.id })
        .from(users)
        .orderBy(users.id)
        .limit(pageSize)
        .offset((page - 1) * pageSize)
        .as('subquery');
       await db.select().from(users).innerJoin(sq, eq(users.id, sq.id)).orderBy(users.id);
    };

    const nextUserPage = async (cursor?: number, pageSize = 3) => {
      await db
        .select()
        .from(users)
        .where(cursor ? gt(users.id, cursor) : undefined) // if cursor is provided, get rows after it
        .limit(pageSize) // the number of rows to return
        .orderBy(asc(users.id)); // ordering
    };
    // pass the cursor of the last row of the previous page (id)
    await nextUserPage(3);

\---[](#----2)
--------------

### WITH clause[](#with-clause)

Check how to use WITH statement with [insert](/docs/insert#with-insert-clause), [update](/docs/update#with-update-clause), [delete](/docs/delete#with-delete-clause)

Using the `with` clause can help you simplify complex queries by splitting them into smaller subqueries called common table expressions (CTEs):

    const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
    
    const result = await db.with(sq).select().from(sq);

    with sq as (select "id", "name", "age" from "users" where "id" = 42)
    select "id", "name", "age" from sq;

You can also provide `insert`, `update` and `delete` statements inside `with`

    const sq = db.$with('sq').as(
        db.insert(users).values({ name: 'John' }).returning(),
    );
    
    const result = await db.with(sq).select().from(sq);

    with "sq" as (insert into "users" ("id", "name") values (default, 'John') returning "id", "name") 
    select "id", "name" from "sq"

    const sq = db.$with('sq').as(
        db.update(users).set({ age: 25 }).where(eq(users.name, 'John')).returning(),
    );
    const result = await db.with(sq).select().from(sq);

    with "sq" as (update "users" set "age" = 25 where "users"."name" = 'John' returning "id", "name", "age") 
    select "id", "name", "age" from "sq"

    const sq = db.$with('sq').as(
      db.delete(users).where(eq(users.name, 'John')).returning(),
    );
    
    const result = await db.with(sq).select().from(sq);

    with "sq" as (delete from "users" where "users"."name" = $1 returning "id", "name", "age") 
    select "id", "name", "age" from "sq"

To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:

    
    const sq = db.$with('sq').as(db.select({ 
      name: sql<string>`upper(${users.name})`.as('name'),
    })
    .from(users));
    
    const result = await db.with(sq).select({ name: sq.name }).from(sq);

If you don’t provide an alias, the field type will become `DrizzleTypeError` and you won’t be able to reference it in other queries. If you ignore the type error and still try to use the field, you will get a runtime error, since there’s no way to reference that field without an alias.

### Select from subquery[](#select-from-subquery)

Just like in SQL, you can embed queries into other queries by using the subquery API:

    const sq = db.select().from(users).where(eq(users.id, 42)).as('sq');
    const result = await db.select().from(sq);

    select "id", "name", "age" from (select "id", "name", "age" from "users" where "id" = 42) "sq";

Subqueries can be used in any place where a table can be used, for example in joins:

    const sq = db.select().from(users).where(eq(users.id, 42)).as('sq');
    const result = await db.select().from(users).leftJoin(sq, eq(users.id, sq.id));

    select "users"."id", "users"."name", "users"."age", "sq"."id", "sq"."name", "sq"."age" from "users"
      left join (select "id", "name", "age" from "users" where "id" = 42) "sq"
        on "users"."id" = "sq"."id";

\---[](#----3)
--------------

### Aggregations[](#aggregations)

With Drizzle, you can do aggregations using functions like `sum`, `count`, `avg`, etc. by grouping and filtering with `.groupBy()` and `.having()` respectfully, same as you would do in raw SQL:

    import { gt } from 'drizzle-orm';
    
    await db.select({
      age: users.age,
      count: sql<number>`cast(count(${users.id}) as int)`,
    })
      .from(users)
      .groupBy(users.age);
    
    await db.select({
      age: users.age,
      count: sql<number>`cast(count(${users.id}) as int)`,
    })
      .from(users)
      .groupBy(users.age)
      .having(({ count }) => gt(count, 1));

    select "age", cast(count("id") as int)
      from "users"
      group by "age";
    
    select "age", cast(count("id") as int)
      from "users"
      group by "age"
      having cast(count("id") as int) > 1;

`cast(... as int)` is necessary because `count()` returns `bigint` in PostgreSQL and `decimal` in MySQL, which are treated as string values instead of numbers. Alternatively, you can use [`.mapWith(Number)`](/docs/sql#sqlmapwith) to cast the value to a number at runtime.

If you need count aggregation - we recommend using our [`$count`](/docs/select#count) API

### Aggregations helpers[](#aggregations-helpers)

Drizzle has a set of wrapped `sql` functions, so you don’t need to write `sql` templates for common cases in your app

Remember, aggregation functions are often used with the GROUP BY clause of the SELECT statement. So if you are selecting using aggregating functions and other columns in one query, be sure to use the `.groupBy` clause

**count**

Returns the number of values in `expression`.

    import { count } from 'drizzle-orm'
    
    await db.select({ value: count() }).from(users);
    await db.select({ value: count(users.id) }).from(users);

    select count("*") from "users";
    select count("id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`count('*'))`.mapWith(Number) 
    }).from(users);
    
    await db.select({ 
      value: sql`count(${users.id})`.mapWith(Number) 
    }).from(users);

**countDistinct**

Returns the number of non-duplicate values in `expression`.

    import { countDistinct } from 'drizzle-orm'
    
    await db.select({ value: countDistinct(users.id) }).from(users);

    select count(distinct "id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`count(${users.id})`.mapWith(Number) 
    }).from(users);

**avg**

Returns the average (arithmetic mean) of all non-null values in `expression`.

    import { avg } from 'drizzle-orm'
    
    await db.select({ value: avg(users.id) }).from(users);

    select avg("id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`avg(${users.id})`.mapWith(String) 
    }).from(users);

**avgDistinct**

Returns the average (arithmetic mean) of all non-null values in `expression`.

    import { avgDistinct } from 'drizzle-orm'
    
    await db.select({ value: avgDistinct(users.id) }).from(users);

    select avg(distinct "id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`avg(distinct ${users.id})`.mapWith(String) 
    }).from(users);

**sum**

Returns the sum of all non-null values in `expression`.

    import { sum } from 'drizzle-orm'
    
    await db.select({ value: sum(users.id) }).from(users);

    select sum("id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`sum(${users.id})`.mapWith(String) 
    }).from(users);

**sumDistinct**

Returns the sum of all non-null and non-duplicate values in `expression`.

    import { sumDistinct } from 'drizzle-orm'
    
    await db.select({ value: sumDistinct(users.id) }).from(users);

    select sum(distinct "id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`sum(distinct ${users.id})`.mapWith(String) 
    }).from(users);

**max**

Returns the maximum value in `expression`.

    import { max } from 'drizzle-orm'
    
    await db.select({ value: max(users.id) }).from(users);

    select max("id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`max(${expression})`.mapWith(users.id) 
    }).from(users);

**min**

Returns the minimum value in `expression`.

    import { min } from 'drizzle-orm'
    
    await db.select({ value: min(users.id) }).from(users);

    select min("id") from "users";

    // It's equivalent to writing
    await db.select({ 
      value: sql`min(${users.id})`.mapWith(users.id) 
    }).from(users);

A more advanced example:

    const orders = sqliteTable('order', {
      id: integer('id').primaryKey(),
      orderDate: integer('order_date', { mode: 'timestamp' }).notNull(),
      requiredDate: integer('required_date', { mode: 'timestamp' }).notNull(),
      shippedDate: integer('shipped_date', { mode: 'timestamp' }),
      shipVia: integer('ship_via').notNull(),
      freight: numeric('freight').notNull(),
      shipName: text('ship_name').notNull(),
      shipCity: text('ship_city').notNull(),
      shipRegion: text('ship_region'),
      shipPostalCode: text('ship_postal_code'),
      shipCountry: text('ship_country').notNull(),
      customerId: text('customer_id').notNull(),
      employeeId: integer('employee_id').notNull(),
    });
    
    const details = sqliteTable('order_detail', {
      unitPrice: numeric('unit_price').notNull(),
      quantity: integer('quantity').notNull(),
      discount: numeric('discount').notNull(),
      orderId: integer('order_id').notNull(),
      productId: integer('product_id').notNull(),
    });
    
    
    db
      .select({
        id: orders.id,
        shippedDate: orders.shippedDate,
        shipName: orders.shipName,
        shipCity: orders.shipCity,
        shipCountry: orders.shipCountry,
        productsCount: sql<number>`cast(count(${details.productId}) as int)`,
        quantitySum: sql<number>`sum(${details.quantity})`,
        totalPrice: sql<number>`sum(${details.quantity} * ${details.unitPrice})`,
      })
      .from(orders)
      .leftJoin(details, eq(orders.id, details.orderId))
      .groupBy(orders.id)
      .orderBy(asc(orders.id))
      .all();

### $count[](#count)

`db.$count()` is a utility wrapper of `count(*)`, it is a very flexible operator which can be used as is or as a subquery, more details in our [GitHub discussion](https://github.com/drizzle-team/drizzle-orm/discussions/3119).

    const count = await db.$count(users);
    //    ^? number
    
    const count = await db.$count(users, eq(users.name, "Dan")); // works with filters

    select count(*) from "users";
    select count(*) from "users" where "name" = 'Dan';

It is exceptionally useful in [subqueries](/docs/select#select-from-subquery):

    const users = await db.select({
      ...users,
      postsCount: db.$count(posts, eq(posts.authorId, users.id)),
    }).from(users);

usage example with [relational queries](/docs/rqb)

    const users = await db.query.users.findMany({
      extras: {
        postsCount: db.$count(posts, eq(posts.authorId, users.id)),
      },
    });

\---[](#----4)
--------------

### Iterator[](#iterator)

MySQL

PostgreSQL\[WIP\]

SQLite\[WIP\]

SingleStore\[WIP\]

If you need to return a very large amount of rows from a query and you don’t want to load them all into memory, you can use `.iterator()` to convert the query into an async iterator:

    const iterator = await db.select().from(users).iterator();
    
    for await (const row of iterator) {
      console.log(row);
    }

It also works with prepared statements:

    const query = await db.select().from(users).prepare();
    const iterator = await query.iterator();
    
    for await (const row of iterator) {
      console.log(row);
    }

\---[](#----5)
--------------

### Use Index[](#use-index)

The `USE INDEX` hint suggests to the optimizer which indexes to consider when processing the query. The optimizer is not forced to use these indexes but will prioritize them if they are suitable.

MySQL

PostgreSQL

SQLite

SingleStore

    export const users = mysqlTable('users', {
    	id: int('id').primaryKey(),
    	name: varchar('name', { length: 100 }).notNull(),
    }, () => [usersTableNameIndex]);
    
    const usersTableNameIndex = index('users_name_index').on(users.name);
    
    await db.select()
      .from(users, { useIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));

You can also use this option on any join you want

    await db.select()
      .from(users)
      .leftJoin(posts, eq(posts.userId, users.id), { useIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));

### Ignore Index[](#ignore-index)

The `IGNORE INDEX` hint tells the optimizer to avoid using specific indexes for the query. MySQL will consider all other indexes (if any) or perform a full table scan if necessary.

MySQL

PostgreSQL

SQLite

SingleStore

    export const users = mysqlTable('users', {
    	id: int('id').primaryKey(),
    	name: varchar('name', { length: 100 }).notNull(),
    }, () => [usersTableNameIndex]);
    
    const usersTableNameIndex = index('users_name_index').on(users.name);
    
    await db.select()
      .from(users, { ignoreIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));

You can also use this option on any join you want

    await db.select()
      .from(users)
      .leftJoin(posts, eq(posts.userId, users.id), { useIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));

### Force Index[](#force-index)

The `FORCE INDEX` hint forces the optimizer to use the specified index(es) for the query. If the specified index cannot be used, MySQL will not fall back to other indexes; it might resort to a full table scan instead.

MySQL

PostgreSQL

SQLite

SingleStore

    export const users = mysqlTable('users', {
    	id: int('id').primaryKey(),
    	name: varchar('name', { length: 100 }).notNull(),
    }, () => [usersTableNameIndex]);
    
    const usersTableNameIndex = index('users_name_index').on(users.name);
    
    await db.select()
      .from(users, { forceIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));

You can also use this option on any join you want

    await db.select()
      .from(users)
      .leftJoin(posts, eq(posts.userId, users.id), { useIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));

SQL Insert
==========

Drizzle ORM provides you the most SQL-like way to insert rows into the database tables.

Insert one row[](#insert-one-row)
---------------------------------

Inserting data with Drizzle is extremely straightforward and sql-like. See for yourself:

    await db.insert(users).values({ name: 'Andrew' });

    insert into "users" ("name") values ("Andrew");

If you need insert type for a particular table you can use `typeof usersTable.$inferInsert` syntax.

    type NewUser = typeof users.$inferInsert;
    
    const insertUser = async (user: NewUser) => {
      return db.insert(users).values(user);
    }
    
    const newUser: NewUser = { name: "Alef" };
    await insertUser(newUser);

Insert returning[](#insert-returning)
-------------------------------------

PostgreSQL

SQLite

MySQL

SingleStore

You can insert a row and get it back in PostgreSQL and SQLite like such:

    await db.insert(users).values({ name: "Dan" }).returning();
    
    // partial return
    await db.insert(users).values({ name: "Partial Dan" }).returning({ insertedId: users.id });

Insert $returningId[](#insert-returningid)
------------------------------------------

PostgreSQL

SQLite

MySQL

SingleStore

MySQL itself doesn’t have native support for `RETURNING` after using `INSERT`. There is only one way to do it for `primary keys` with `autoincrement` (or `serial`) types, where you can access `insertId` and `affectedRows` fields. We’ve prepared an automatic way for you to handle such cases with Drizzle and automatically receive all inserted IDs as separate objects

    import { boolean, int, text, mysqlTable } from 'drizzle-orm/mysql-core';
    
    const usersTable = mysqlTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
      verified: boolean('verified').notNull().default(false),
    });
    
    
    const result = await db.insert(usersTable).values([{ name: 'John' }, { name: 'John1' }]).$returningId();
    //    ^? { id: number }[]

Also with Drizzle, you can specify a `primary key` with `$default` function that will generate custom primary keys at runtime. We will also return those generated keys for you in the `$returningId()` call

    import { varchar, text, mysqlTable } from 'drizzle-orm/mysql-core';
    import { createId } from '@paralleldrive/cuid2';
    
    const usersTableDefFn = mysqlTable('users_default_fn', {
      customId: varchar('id', { length: 256 }).primaryKey().$defaultFn(createId),
      name: text('name').notNull(),
    });
    
    
    const result = await db.insert(usersTableDefFn).values([{ name: 'John' }, { name: 'John1' }]).$returningId();
    //  ^? { customId: string }[]

> If there is no primary keys -> type will be `{}[]` for such queries

Insert multiple rows[](#insert-multiple-rows)
---------------------------------------------

    await db.insert(users).values([{ name: 'Andrew' }, { name: 'Dan' }]);

Upserts and conflicts[](#upserts-and-conflicts)
-----------------------------------------------

Drizzle ORM provides simple interfaces for handling upserts and conflicts.

### On conflict do nothing[](#on-conflict-do-nothing)

PostgreSQL

SQLite

MySQL

SingleStore

`onConflictDoNothing` will cancel the insert if there’s a conflict:

    await db.insert(users)
      .values({ id: 1, name: 'John' })
      .onConflictDoNothing();
    
    // explicitly specify conflict target
    await db.insert(users)
      .values({ id: 1, name: 'John' })
      .onConflictDoNothing({ target: users.id });

### On conflict do update[](#on-conflict-do-update)

PostgreSQL

SQLite

MySQL

`onConflictDoUpdate` will update the row if there’s a conflict:

    await db.insert(users)
      .values({ id: 1, name: 'Dan' })
      .onConflictDoUpdate({ target: users.id, set: { name: 'John' } });

#### `where` clauses[](#where-clauses)

`on conflict do update` can have a `where` clause in two different places - as part of the conflict target (i.e. for partial indexes) or as part of the `update` clause:

    insert into employees (employee_id, name)
    values (123, 'John Doe')
    on conflict (employee_id) where name <> 'John Doe'
    do update set name = excluded.name
    
    insert into employees (employee_id, name)
    values (123, 'John Doe')
    on conflict (employee_id) do update set name = excluded.name
    where name <> 'John Doe';

To specify these conditions in Drizzle, you can use `setWhere` and `targetWhere` clauses:

    await db.insert(employees)
      .values({ employeeId: 123, name: 'John Doe' })
      .onConflictDoUpdate({
        target: employees.employeeId,
        targetWhere: sql`name <> 'John Doe'`,
        set: { name: sql`excluded.name` }
      });
    
    await db.insert(employees)
      .values({ employeeId: 123, name: 'John Doe' })
      .onConflictDoUpdate({
        target: employees.employeeId,
        set: { name: 'John Doe' },
        setWhere: sql`name <> 'John Doe'`
      });

* * *

Upsert with composite indexes, or composite primary keys for `onConflictDoUpdate`:

    await db.insert(users)
      .values({ firstName: 'John', lastName: 'Doe' })
      .onConflictDoUpdate({
        target: [users.firstName, users.lastName],
        set: { firstName: 'John1' }
      });

### On duplicate key update[](#on-duplicate-key-update)

PostgreSQL

SQLite

MySQL

SingleStore

MySQL supports [`ON DUPLICATE KEY UPDATE`](https://dev.mysql.com/doc/refman/8.0/en/insert-on-duplicate.html) instead of `ON CONFLICT` clauses. MySQL will automatically determine the conflict target based on the primary key and unique indexes, and will update the row if _any_ unique index conflicts.

Drizzle supports this through the `onDuplicateKeyUpdate` method:

    // Note that MySQL automatically determines targets based on the primary key and unique indexes
    await db.insert(users)
      .values({ id: 1, name: 'John' })
      .onDuplicateKeyUpdate({ set: { name: 'John' } });

While MySQL does not directly support doing nothing on conflict, you can perform a no-op by setting any column’s value to itself and achieve the same effect:

    import { sql } from 'drizzle-orm';
    
    await db.insert(users)
      .values({ id: 1, name: 'John' })
      .onDuplicateKeyUpdate({ set: { id: sql`id` } });

`with insert` clause[](#with-insert-clause)
-------------------------------------------

Check how to use WITH statement with [select](/docs/select#with-clause), [update](/docs/update#with-update-clause), [delete](/docs/delete#with-delete-clause)

Using the `with` clause can help you simplify complex queries by splitting them into smaller subqueries called common table expressions (CTEs):

    const userCount = db.$with('user_count').as(
    	db.select({ value: sql`count(*)`.as('value') }).from(users)
    );
    
    const result = await db.with(userCount)
    	.insert(users)
    	.values([
    		{ username: 'user1', admin: sql`((select * from ${userCount}) = 0)` }
    	])
    	.returning({
    		admin: users.admin
    	});

    with "user_count" as (select count(*) as "value" from "users") 
    insert into "users" ("username", "admin") 
    values ($1, ((select * from "user_count") = 0)) 
    returning "admin"

Insert into … select[](#insert-into--select)
--------------------------------------------

As the SQLite documentation mentions:

The second form of the INSERT statement contains a SELECT statement instead of a VALUES clause. A new entry is inserted into the table for each row of data returned by executing the SELECT statement. If a column-list is specified, the number of columns in the result of the SELECT must be the same as the number of items in the column-list. Otherwise, if no column-list is specified, the number of columns in the result of the SELECT must be the same as the number of columns in the table. Any SELECT statement, including compound SELECTs and SELECT statements with ORDER BY and/or LIMIT clauses, may be used in an INSERT statement of this form.

IMPORTANT

To avoid a parsing ambiguity, the SELECT statement should always contain a WHERE clause, even if that clause is simply “WHERE true”, if the upsert-clause is present. Without the WHERE clause, the parser does not know if the token “ON” is part of a join constraint on the SELECT, or the beginning of the upsert-clause.

As the PostgreSQL documentation mentions:

A query (SELECT statement) that supplies the rows to be inserted

And as the MySQL documentation mentions:

With INSERT … SELECT, you can quickly insert many rows into a table from the result of a SELECT statement, which can select from one or many tables

Drizzle supports the current syntax for all dialects, and all of them share the same syntax. Let’s review some common scenarios and API usage. There are several ways to use select inside insert statements, allowing you to choose your preferred approach:

*   You can pass a query builder inside the select function.
*   You can use a query builder inside a callback.
*   You can pass an SQL template tag with any custom select query you want to use

Query Builder

Callback

SQL template tag

    const insertedEmployees = await db
      .insert(employees)
      .select(
        db.select({ name: users.name }).from(users).where(eq(users.role, 'employee'))
      )
      .returning({
        id: employees.id,
        name: employees.name
      });

    const qb = new QueryBuilder();
    await db.insert(employees).select(
        qb.select({ name: users.name }).from(users).where(eq(users.role, 'employee'))
    );

    await db.insert(employees).select(
        () => db.select({ name: users.name }).from(users).where(eq(users.role, 'employee'))
    );

    await db.insert(employees).select(
        (qb) => qb.select({ name: users.name }).from(users).where(eq(users.role, 'employee'))
    );

    await db.insert(employees).select(
        sql`select "users"."name" as "name" from "users" where "users"."role" = 'employee'`
    );

    await db.insert(employees).select(
        () => sql`select "users"."name" as "name" from "users" where "users"."role" = 'employee'`
    );

SQL Update
==========

    await db.update(users)
      .set({ name: 'Mr. Dan' })
      .where(eq(users.name, 'Dan'));

The object that you pass to `update` should have keys that match column names in your database schema. Values of `undefined` are ignored in the object: to set a column to `null`, pass `null`. You can pass SQL as a value to be used in the update object, like this:

    await db.update(users)
      .set({ updatedAt: sql`NOW()` })
      .where(eq(users.name, 'Dan'));

### Limit[](#limit)

PostgreSQL

MySQL

SQLite

SingleStore

Use `.limit()` to add `limit` clause to the query - for example:

    await db.update(usersTable).set({ verified: true }).limit(2);

    update "users" set "verified" = $1 limit $2;

### Order By[](#order-by)

Use `.orderBy()` to add `order by` clause to the query, sorting the results by the specified fields:

    import { asc, desc } from 'drizzle-orm';
    
    await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name);
    await db.update(usersTable).set({ verified: true }).orderBy(desc(usersTable.name));
    
    // order by multiple fields
    await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name, usersTable.name2);
    await db.update(usersTable).set({ verified: true }).orderBy(asc(usersTable.name), desc(usersTable.name2));

    update "users" set "verified" = $1 order by "name";
    update "users" set "verified" = $1 order by "name" desc;
    
    update "users" set "verified" = $1 order by "name", "name2";
    update "users" set "verified" = $1 order by "name" asc, "name2" desc;

### Update with returning[](#update-with-returning)

PostgreSQL

SQLite

MySQL

SingleStore

You can update a row and get it back in PostgreSQL and SQLite:

    const updatedUserId: { updatedId: number }[] = await db.update(users)
      .set({ name: 'Mr. Dan' })
      .where(eq(users.name, 'Dan'))
      .returning({ updatedId: users.id });

`with update` clause[](#with-update-clause)
-------------------------------------------

Check how to use WITH statement with [select](/docs/select#with-clause), [insert](/docs/insert#with-insert-clause), [delete](/docs/delete#with-delete-clause)

Using the `with` clause can help you simplify complex queries by splitting them into smaller subqueries called common table expressions (CTEs):

    const averagePrice = db.$with('average_price').as(
            db.select({ value: sql`avg(${products.price})`.as('value') }).from(products)
    );
    
    const result = await db.with(averagePrice)
    		.update(products)
    		.set({
    			cheap: true
    		})
    		.where(lt(products.price, sql`(select * from ${averagePrice})`))
    		.returning({
    			id: products.id
    		});

    with "average_price" as (select avg("price") as "value" from "products") 
    update "products" set "cheap" = $1 
    where "products"."price" < (select * from "average_price") 
    returning "id"

Update … from[](#update--from)
------------------------------

PostgreSQL

MySQL

SQLite

SingleStore

As the SQLite documentation mentions:

> The UPDATE-FROM idea is an extension to SQL that allows an UPDATE statement to be driven by other tables in the database. The “target” table is the specific table that is being updated. With UPDATE-FROM you can join the target table against other tables in the database in order to help compute which rows need updating and what the new values should be on those rows

Similarly, the PostgreSQL documentation states:

> A table expression allowing columns from other tables to appear in the WHERE condition and update expressions

Drizzle also supports this feature starting from version `[[email protected]](/cdn-cgi/l/email-protection)`

    await db
      .update(users)
      .set({ cityId: cities.id })
      .from(cities)
      .where(and(eq(cities.name, 'Seattle'), eq(users.name, 'John')))

    update "users" set "city_id" = "cities"."id" 
    from "cities" 
    where ("cities"."name" = $1 and "users"."name" = $2)
    
    -- params: [ 'Seattle', 'John' ]

You can also alias tables that are joined (in PG, you can also alias the updating table too).

    const c = alias(cities, 'c');
    await db
      .update(users)
      .set({ cityId: c.id })
      .from(c);

    update "users" set "city_id" = "c"."id" 
    from "cities" "c"

PostgreSQL

MySQL

SQLite

SingleStore

In Postgres, you can also return columns from the joined tables.

    const updatedUsers = await db
      .update(users)
      .set({ cityId: cities.id })
      .from(cities)
      .returning({ id: users.id, cityName: cities.name });

    update "users" set "city_id" = "cities"."id" 
    from "cities" 
    returning "users"."id", "cities"."name"

SQL Delete
==========

You can delete all rows in the table:

    await db.delete(users);

And you can delete with filters and conditions:

    await db.delete(users).where(eq(users.name, 'Dan'));

### Limit[](#limit)

PostgreSQL

MySQL

SQLite

SingleStore

Use `.limit()` to add `limit` clause to the query - for example:

    await db.delete(users).where(eq(users.name, 'Dan')).limit(2);

    delete from "users" where "users"."name" = $1 limit $2;

### Order By[](#order-by)

Use `.orderBy()` to add `order by` clause to the query, sorting the results by the specified fields:

    import { asc, desc } from 'drizzle-orm';
    
    await db.delete(users).where(eq(users.name, 'Dan')).orderBy(users.name);
    await db.delete(users).where(eq(users.name, 'Dan')).orderBy(desc(users.name));
    
    // order by multiple fields
    await db.delete(users).where(eq(users.name, 'Dan')).orderBy(users.name, users.name2);
    await db.delete(users).where(eq(users.name, 'Dan')).orderBy(asc(users.name), desc(users.name2));

    delete from "users" where "users"."name" = $1 order by "name";
    delete from "users" where "users"."name" = $1 order by "name" desc;
    
    delete from "users" where "users"."name" = $1 order by "name", "name2";
    delete from "users" where "users"."name" = $1 order by "name" asc, "name2" desc;

### Delete with return[](#delete-with-return)

PostgreSQL

SQLite

MySQL

SingleStore

You can delete a row and get it back in PostgreSQL and SQLite:

    const deletedUser = await db.delete(users)
      .where(eq(users.name, 'Dan'))
      .returning();
    
    // partial return
    const deletedUserIds: { deletedId: number }[] = await db.delete(users)
      .where(eq(users.name, 'Dan'))
      .returning({ deletedId: users.id });

WITH DELETE clause[](#with-delete-clause)
-----------------------------------------

Check how to use WITH statement with [select](/docs/select#with-clause), [insert](/docs/insert#with-insert-clause), [update](/docs/update#with-update-clause)

Using the `with` clause can help you simplify complex queries by splitting them into smaller subqueries called common table expressions (CTEs):

    const averageAmount = db.$with('average_amount').as(
      db.select({ value: sql`avg(${orders.amount})`.as('value') }).from(orders)
    );
    
    const result = await db
    	.with(averageAmount)
    	.delete(orders)
    	.where(gt(orders.amount, sql`(select * from ${averageAmount})`))
    	.returning({
    		id: orders.id
    	});

    with "average_amount" as (select avg("amount") as "value" from "orders") 
    delete from "orders" 
    where "orders"."amount" > (select * from "average_amount") 
    returning "id"

Filter and conditional operators
================================

We natively support all dialect specific filter and conditional operators.

You can import all filter & conditional from `drizzle-orm`:

    import { eq, ne, gt, gte, ... } from "drizzle-orm";

### eq[](#eq)

PostgreSQL

MySQL

SQLite

SingleStore

Value equal to `n`

    import { eq } from "drizzle-orm";
    
    db.select().from(table).where(eq(table.column, 5));

    SELECT * FROM table WHERE table.column = 5

    import { eq } from "drizzle-orm";
    
    db.select().from(table).where(eq(table.column1, table.column2));

    SELECT * FROM table WHERE table.column1 = table.column2

### ne[](#ne)

PostgreSQL

MySQL

SQLite

SingleStore

Value is not equal to `n`

    import { ne } from "drizzle-orm";
    
    db.select().from(table).where(ne(table.column, 5));

    SELECT * FROM table WHERE table.column <> 5

    import { ne } from "drizzle-orm";
    
    db.select().from(table).where(ne(table.column1, table.column2));

    SELECT * FROM table WHERE table.column1 <> table.column2

\---[](#---)
------------

### gt[](#gt)

PostgreSQL

MySQL

SQLite

SingleStore

Value is greater than `n`

    import { gt } from "drizzle-orm";
    
    db.select().from(table).where(gt(table.column, 5));

    SELECT * FROM table WHERE table.column > 5

    import { gt } from "drizzle-orm";
    
    db.select().from(table).where(gt(table.column1, table.column2));

    SELECT * FROM table WHERE table.column1 > table.column2

### gte[](#gte)

PostgreSQL

MySQL

SQLite

SingleStore

Value is greater than or equal to `n`

    import { gte } from "drizzle-orm";
    
    db.select().from(table).where(gte(table.column, 5));

    SELECT * FROM table WHERE table.column >= 5

    import { gte } from "drizzle-orm";
    
    db.select().from(table).where(gte(table.column1, table.column2));

    SELECT * FROM table WHERE table.column1 >= table.column2

### lt[](#lt)

PostgreSQL

MySQL

SQLite

SingleStore

Value is less than `n`

    import { lt } from "drizzle-orm";
    
    db.select().from(table).where(lt(table.column, 5));

    SELECT * FROM table WHERE table.column < 5

    import { lt } from "drizzle-orm";
    
    db.select().from(table).where(lt(table.column1, table.column2));

    SELECT * FROM table WHERE table.column1 < table.column2

### lte[](#lte)

PostgreSQL

MySQL

SQLite

SingleStore

Value is less than or equal to `n`.

    import { lte } from "drizzle-orm";
    
    db.select().from(table).where(lte(table.column, 5));

    SELECT * FROM table WHERE table.column <= 5

    import { lte } from "drizzle-orm";
    
    db.select().from(table).where(lte(table.column1, table.column2));

    SELECT * FROM table WHERE table.column1 <= table.column2

\---[](#----1)
--------------

### exists[](#exists)

PostgreSQL

MySQL

SQLite

SingleStore

Value exists

    import { exists } from "drizzle-orm";
    
    const query = db.select().from(table2)
    db.select().from(table).where(exists(query));

    SELECT * FROM table WHERE EXISTS (SELECT * from table2)

### notExists[](#notexists)

    import { notExists } from "drizzle-orm";
    
    const query = db.select().from(table2)
    db.select().from(table).where(notExists(query));

    SELECT * FROM table WHERE NOT EXISTS (SELECT * from table2)

### isNull[](#isnull)

PostgreSQL

MySQL

SQLite

SingleStore

Value is `null`

    import { isNull } from "drizzle-orm";
    
    db.select().from(table).where(isNull(table.column));

    SELECT * FROM table WHERE table.column IS NULL

### isNotNull[](#isnotnull)

PostgreSQL

MySQL

SQLite

SingleStore

Value is not `null`

    import { isNotNull } from "drizzle-orm";
    
    db.select().from(table).where(isNotNull(table.column));

    SELECT * FROM table WHERE table.column IS NOT NULL

\---[](#----2)
--------------

### inArray[](#inarray)

PostgreSQL

MySQL

SQLite

SingleStore

Value is in array of values

    import { inArray } from "drizzle-orm";
    
    db.select().from(table).where(inArray(table.column, [1, 2, 3, 4]));

    SELECT * FROM table WHERE table.column in (1, 2, 3, 4)

    import { inArray } from "drizzle-orm";
    
    const query = db.select({ data: table2.column }).from(table2);
    db.select().from(table).where(inArray(table.column, query));

    SELECT * FROM table WHERE table.column IN (SELECT table2.column FROM table2)

### notInArray[](#notinarray)

PostgreSQL

MySQL

SQLite

SingleStore

Value is not in array of values

    import { notInArray } from "drizzle-orm";
    
    db.select().from(table).where(notInArray(table.column, [1, 2, 3, 4]));

    SELECT * FROM table WHERE table.column NOT in (1, 2, 3, 4)

    import { notInArray } from "drizzle-orm";
    
    const query = db.select({ data: table2.column }).from(table2);
    db.select().from(table).where(notInArray(table.column, query));

    SELECT * FROM table WHERE table.column NOT IN (SELECT table2.column FROM table2)

\---[](#----3)
--------------

### between[](#between)

PostgreSQL

MySQL

SQLite

SingleStore

Value is between two values

    import { between } from "drizzle-orm";
    
    db.select().from(table).where(between(table.column, 2, 7));

    SELECT * FROM table WHERE table.column BETWEEN 2 AND 7

### notBetween[](#notbetween)

PostgreSQL

MySQL

SQLite

SingleStore

Value is not between two value

    import { notBetween } from "drizzle-orm";
    
    db.select().from(table).where(notBetween(table.column, 2, 7));

    SELECT * FROM table WHERE table.column NOT BETWEEN 2 AND 7

\---[](#----4)
--------------

### like[](#like)

PostgreSQL

MySQL

SQLite

SingleStore

Value is like other value, case sensitive

    import { like } from "drizzle-orm";
    
    db.select().from(table).where(like(table.column, "%llo wor%"));

    SELECT * FROM table  WHERE table.column LIKE '%llo wor%'

### ilike[](#ilike)

PostgreSQL

MySQL

SQLite

SingleStore

Value is like some other value, case insensitive

    import { ilike } from "drizzle-orm";
    
    db.select().from(table).where(ilike(table.column, "%llo wor%"));

    SELECT * FROM table WHERE table.column ILIKE '%llo wor%'

### notIlike[](#notilike)

PostgreSQL

MySQL

SQLite

SingleStore

Value is not like some other value, case insensitive

    import { notIlike } from "drizzle-orm";
    
    db.select().from(table).where(notIlike(table.column, "%llo wor%"));

    SELECT * FROM table WHERE table.column NOT ILIKE '%llo wor%'

\---[](#----5)
--------------

### not[](#not)

PostgreSQL

MySQL

SQLite

SingleStore

All conditions must return `false`.

    import { eq, not } from "drizzle-orm";
    
    db.select().from(table).where(not(eq(table.column, 5)));

    SELECT * FROM table WHERE NOT (table.column = 5)

### and[](#and)

PostgreSQL

MySQL

SQLite

SingleStore

All conditions must return `true`.

    import { gt, lt, and } from "drizzle-orm";
    
    db.select().from(table).where(and(gt(table.column, 5), lt(table.column, 7)));

    SELECT * FROM table WHERE (table.column > 5 AND table.column < 7)

### or[](#or)

PostgreSQL

MySQL

SQLite

SingleStore

One or more conditions must return `true`.

    import { gt, lt, or } from "drizzle-orm";
    
    db.select().from(table).where(or(gt(table.column, 5), lt(table.column, 7)));

    SELECT * FROM table WHERE (table.column > 5 OR table.column < 7)

\---[](#----6)
--------------

### arrayContains[](#arraycontains)

PostgreSQL

MySQL

SQLite

SingleStore

Test that a column or expression contains all elements of the list passed as the second argument

    import { arrayContains } from "drizzle-orm";
    
    const contains = await db.select({ id: posts.id }).from(posts)
      .where(arrayContains(posts.tags, ['Typescript', 'ORM']));
    
    const withSubQuery = await db.select({ id: posts.id }).from(posts)
      .where(arrayContains(
        posts.tags,
        db.select({ tags: posts.tags }).from(posts).where(eq(posts.id, 1)),
      ));

    select "id" from "posts" where "posts"."tags" @> {Typescript,ORM};
    select "id" from "posts" where "posts"."tags" @> (select "tags" from "posts" where "posts"."id" = 1);

### arrayContained[](#arraycontained)

PostgreSQL

MySQL

SQLite

SingleStore

Test that the list passed as the second argument contains all elements of a column or expression

    import { arrayContained } from "drizzle-orm";
    
    const contained = await db.select({ id: posts.id }).from(posts)
      .where(arrayContained(posts.tags, ['Typescript', 'ORM']));

    select "id" from "posts" where "posts"."tags" <@ {Typescript,ORM};

### arrayOverlaps[](#arrayoverlaps)

PostgreSQL

MySQL

SQLite

SingleStore

Test that a column or expression contains any elements of the list passed as the second argument.

    import { arrayOverlaps } from "drizzle-orm";
    
    const overlaps = await db.select({ id: posts.id }).from(posts)
      .where(arrayOverlaps(posts.tags, ['Typescript', 'ORM']));

    select "id" from "posts" where "posts"."tags" && {Typescript,ORM}

Drizzle query utils
===================

### $count[](#count)

`db.$count()` is a utility wrapper of `count(*)`, it is a very flexible operator which can be used as is or as a subquery, more details in our [GitHub discussion](https://github.com/drizzle-team/drizzle-orm/discussions/3119).

    const count = await db.$count(users);
    //    ^? number
    
    const count = await db.$count(users, eq(users.name, "Dan")); // works with filters

    select count(*) from "users";
    select count(*) from "users" where "name" = 'Dan';

It is exceptionally useful in [subqueries](/docs/select#select-from-subquery):

    const users = await db.select({
      ...users,
      postsCount: db.$count(posts, eq(posts.authorId, users.id)),
    }).from(users);

usage example with [relational queries](/docs/rqb)

    const users = await db.query.users.findMany({
      extras: {
        postsCount: db.$count(posts, eq(posts.authorId, users.id)),
      },
    });

Joins \[SQL\]
=============

Join clause in SQL is used to combine 2 or more tables, based on related columns between them. Drizzle ORM joins syntax is a balance between the SQL-likeness and type safety.

Join types[](#join-types)
-------------------------

Drizzle ORM has APIs for `INNER JOIN [LATERAL]`, `FULL JOIN`, `LEFT JOIN [LATERAL]`, `RIGHT JOIN`, `CROSS JOIN [LATERAL]`. Lets have a quick look at examples based on below table schemas:

    export const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    export const pets = pgTable('pets', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      ownerId: integer('owner_id').notNull().references(() => users.id),
    })

### Left Join[](#left-join)

    const result = await db.select().from(users).leftJoin(pets, eq(users.id, pets.ownerId))

    select ... from "users" left join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        };
        pets: {
            id: number;
            name: string;
            ownerId: number;
        } | null;
    }[];

### Left Join Lateral[](#left-join-lateral)

    const subquery = db.select().from(pets).where(gte(users.age, 16)).as('userPets')
    const result = await db.select().from(users).leftJoinLateral(subquery, sql`true`)

    select ... from "users" left join lateral (select ... from "pets" where "users"."age" >= 16) "userPets" on true

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        };
        userPets: {
            id: number;
            name: string;
            ownerId: number;
        } | null;
    }[];

### Right Join[](#right-join)

    const result = await db.select().from(users).rightJoin(pets, eq(users.id, pets.ownerId))

    select ... from "users" right join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        } | null;
        pets: {
            id: number;
            name: string;
            ownerId: number;
        };
    }[];

### Inner Join[](#inner-join)

    const result = await db.select().from(users).innerJoin(pets, eq(users.id, pets.ownerId))

    select ... from "users" inner join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        };
        pets: {
            id: number;
            name: string;
            ownerId: number;
        };
    }[];

### Inner Join Lateral[](#inner-join-lateral)

    const subquery = db.select().from(pets).where(gte(users.age, 16)).as('userPets')
    const result = await db.select().from(users).innerJoinLateral(subquery, sql`true`)

    select ... from "users" inner join lateral (select ... from "pets" where "users"."age" >= 16) "userPets" on true

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        };
        userPets: {
            id: number;
            name: string;
            ownerId: number;
        };
    }[];

### Full Join[](#full-join)

    const result = await db.select().from(users).fullJoin(pets, eq(users.id, pets.ownerId))

    select ... from "users" full join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        } | null;
        pets: {
            id: number;
            name: string;
            ownerId: number;
        } | null;
    }[];

### Cross Join[](#cross-join)

    const result = await db.select().from(users).crossJoin(pets)

    select ... from "users" cross join "pets"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        };
        pets: {
            id: number;
            name: string;
            ownerId: number;
        };
    }[];

### Cross Join Lateral[](#cross-join-lateral)

    const subquery = db.select().from(pets).where(gte(users.age, 16)).as('userPets')
    const result = await db.select().from(users).crossJoinLateral(subquery)

    select ... from "users" cross join lateral (select ... from "pets" where "users"."age" >= 16) "userPets"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
        };
        userPets: {
            id: number;
            name: string;
            ownerId: number;
        };
    }[];

Partial select[](#partial-select)
---------------------------------

If you need to select a particular subset of fields or to have a flat response type, Drizzle ORM supports joins with partial select and will automatically infer return type based on `.select({ ... })` structure.

    await db.select({
      userId: users.id,
      petId: pets.id,
    }).from(user).leftJoin(pets, eq(users.id, pets.ownerId))

    select "users"."id", "pets"."id" from "users" left join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
      userId: number;
      petId: number | null;
    }[];

You might’ve noticed that `petId` can be null now, it’s because we’re left joining and there can be users without a pet.

It’s very important to keep in mind when using `sql` operator for partial selection fields and aggregations when needed, you should to use `sql<type | null>` for proper result type inference, that one is on you!

    const result = await db.select({
      userId: users.id,
      petId: pets.id,
      petName1: sql`upper(${pets.name})`,
      petName2: sql<string | null>`upper(${pets.name})`,
      //˄we should explicitly tell 'string | null' in type, since we're left joining that field
    }).from(user).leftJoin(pets, eq(users.id, pets.ownerId))

    select "users"."id", "pets"."id", upper("pets"."name")... from "users" left join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
      userId: number;
      petId: number | null;
      petName1: unknown;
      petName2: string | null;
    }[];

To avoid plethora of nullable fields when joining tables with lots of columns we can utilise our **nested select object syntax**, our smart type inference will make whole object nullable instead of making all table fields nullable!

    await db.select({
      userId: users.id,
      userName: users.name,
      pet: {
        id: pets.id,
        name: pets.name,
        upperName: sql<string>`upper(${pets.name})`
      }
    }).from(user).fullJoin(pets, eq(users.id, pets.ownerId))

    select ... from "users" full join "pets" on "users"."id" = "pets"."owner_id"

    // result type
    const result: {
        userId: number | null;
        userName: string | null;
        pet: {
            id: number;
            name: string;
            upperName: string;
        } | null;
    }[];

Aliases & Selfjoins[](#aliases--selfjoins)
------------------------------------------

Drizzle ORM supports table aliases which comes really handy when you need to do selfjoins.

Lets say you need to fetch users with their parents:

index.ts

schema.ts

    import { user } from "./schema";
    
    const parent = aliasedTable(user, "parent")
    const result = db
      .select()
      .from(user)
      .leftJoin(parent, eq(parent.id, user.parentId));

    select ... from "user" left join "user" "parent" on "parent"."id" = "user"."parent_id"

    // result type
    const result: {
        user: {
            id: number;
            name: string;
            parentId: number;
        };
        parent: {
            id: number;
            name: string;
            parentId: number;
        } | null;
    }[];

    export const user = pgTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name").notNull(),
      parentId: integer("parent_id").notNull().references((): AnyPgColumn => user.id)
    });

Aggregating results[](#aggregating-results)
-------------------------------------------

Drizzle ORM delivers name-mapped results from the driver without changing the structure.

You’re free to operate with results the way you want, here’s an example of mapping many-one relational data:

    type User = typeof users.$inferSelect;
    type Pet = typeof pets.$inferSelect;
    
    const rows = db.select({
        user: users,
        pet: pets,
      }).from(users).leftJoin(pets, eq(users.id, pets.ownerId)).all();
    
    const result = rows.reduce<Record<number, { user: User; pets: Pet[] }>>(
      (acc, row) => {
        const user = row.user;
        const pet = row.pet;
    
        if (!acc[user.id]) {
          acc[user.id] = { user, pets: [] };
        }
    
        if (pet) {
          acc[user.id].pets.push(pet);
        }
    
        return acc;
      },
      {}
    );
    
    // result type
    const result: Record<number, {
        user: User;
        pets: Pet[];
    }>;

Many-to-one example[](#many-to-one-example)
-------------------------------------------

    import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
    import { drizzle } from 'drizzle-orm/better-sqlite3';
    
    const cities = sqliteTable('cities', {
      id: integer('id').primaryKey(),
      name: text('name'),
    });
    
    const users = sqliteTable('users', {
      id: integer('id').primaryKey(),
      name: text('name'),
      cityId: integer('city_id').references(() => cities.id)
    });
    
    const db = drizzle();
    
    const result = db.select().from(cities).leftJoin(users, eq(cities.id, users.cityId)).all();

Many-to-many example[](#many-to-many-example)
---------------------------------------------

    const users = sqliteTable('users', {
      id: integer('id').primaryKey(),
      name: text('name'),
    });
    
    const chatGroups = sqliteTable('chat_groups', {
      id: integer('id').primaryKey(),
      name: text('name'),
    });
    
    const usersToChatGroups = sqliteTable('usersToChatGroups', {
      userId: integer('user_id').notNull().references(() => users.id),
      groupId: integer('group_id').notNull().references(() => chatGroups.id),
    });
    
    
    // querying user group with id 1 and all the participants(users)
    db.select()
      .from(usersToChatGroups)
      .leftJoin(users, eq(usersToChatGroups.userId, users.id))
      .leftJoin(chatGroups, eq(usersToChatGroups.groupId, chatGroups.id))
      .where(eq(chatGroups.id, 1))
      .all();

Magical `sql` operator 🪄
=========================

When working with an ORM library, there may be cases where you find it challenging to write a specific query using the provided ORM syntax. In such situations, you can resort to using raw queries, which involve constructing a query as a raw string. However, raw queries often lack the benefits of type safety and query parameterization.

To address this, many libraries have introduced the concept of an `sql` template. This template allows you to write more type-safe and parameterized queries, enhancing the overall safety and flexibility of your code. Drizzle, being a powerful ORM library, also supports the sql template.

With Drizzle’s `sql` template, you can go even further in crafting queries. If you encounter difficulties in writing an entire query using the library’s query builder, you can selectively use the `sql` template within specific sections of the Drizzle query. This flexibility enables you to employ the sql template in partial SELECT statements, WHERE clauses, ORDER BY clauses, HAVING clauses, GROUP BY clauses, and even in relational query builders.

By leveraging the capabilities of the sql template in Drizzle, you can maintain the advantages of type safety and query parameterization while achieving the desired query structure and complexity. This empowers you to create more robust and maintainable code within your application.

sql“ template[](#sql-template)
------------------------------

One of the most common usages you may encounter in other ORMs as well is the ability to use `sql` queries as-is for raw queries.

    import { sql } from 'drizzle-orm' 
    
    const id = 69;
    await db.execute(sql`select * from ${usersTable} where ${usersTable.id} = ${id}`)

It will generate the current query

    select * from "users" where "users"."id" = $1; --> [69]

Any tables and columns provided to the sql parameter are automatically mapped to their corresponding SQL syntax with escaped names for tables, and the escaped table names are appended to column names.

Additionally, any dynamic parameters such as `${id}` will be mapped to the $1 placeholder, and the corresponding values will be moved to an array of values that are passed separately to the database.

This approach effectively prevents any potential SQL Injection vulnerabilities.

`sql<T>`[](#sqlt)
-----------------

Please note that `sql<T>` does not perform any runtime mapping. The type you define using `sql<T>` is purely a helper for Drizzle. It is important to understand that there is no feasible way to determine the exact type dynamically, as SQL queries can be highly versatile and customizable.

You can define a custom type in Drizzle to be used in places where fields require a specific type other than `unknown`.

This feature is particularly useful in partial select queries, ensuring consistent typing for selected fields:

    // without sql<T> type defined
    const response: { id: unknown }[] = await db.select({
        lowerName: sql`lower(${usersTable.id})`
    }).from(usersTable);
    
    // with sql<T> type defined
    const response: { id: string }[] = await db.select({
        lowerName: sql<string>`lower(${usersTable.id})`
    }).from(usersTable);

`sql``.mapWith()`[](#sqlmapwith)
--------------------------------

For the cases you need to make a runtime mapping for values passed from database driver to drizzle you can use `.mapWith()`

This function accepts different values, that will map response in runtime.

You can replicate a specific column mapping strategy as long as the interface inside mapWith is the same interface that is implemented by Column.

    const usersTable = pgTable('users', {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
    });
    
    //  at runtime this values will be mapped same as `text` column is mapped in drizzle
    sql`...`.mapWith(usersTable.name);

You can also pass your own implementation for the `DriverValueDecoder` interface:

    sql``.mapWith({
    	mapFromDriverValue: (value: any) => {
    		const mappedValue = value;
    		// mapping you want to apply
    		return mappedValue;
    	},
    });
        
    // or
    sql``.mapWith(Number);

`sql``.as<T>()`[](#sqlast)
--------------------------

In different cases, it can sometimes be challenging to determine how to name a custom field that you want to use. You may encounter situations where you need to explicitly specify an alias for a field that will be selected. This can be particularly useful when dealing with complex queries.

To address these scenarios, we have introduced a helpful `.as('alias_name')` helper, which allows you to define an alias explicitly. By utilizing this feature, you can provide a clear and meaningful name for the field, making your queries more intuitive and readable.

    sql`lower(usersTable.name)`.as('lower_name')

    ... "usersTable"."name" as lower_name ...

`sql.raw()`[](#sqlraw)
----------------------

There are cases where you may not need to create parameterized values from input or map tables/columns to escaped ones. Instead, you might simply want to generate queries as they are. For such situations, we provide the `sql.raw()` function.

The `sql.raw()` function allows you to include raw SQL statements within your queries without any additional processing or escaping. This can be useful when you have pre-constructed SQL statements or when you need to incorporate complex or dynamic SQL code directly into your queries.

    sql.raw(`select * from users where id = ${12}`);
    // vs
    sql`select * from users where id = ${12}`;

    select * from users where id = 12;
    --> vs
    select * from users where id = $1; --> [12]

You can also utilize `sql.raw()` within the sql function, enabling you to include any raw string without escaping it through the main `sql` template function.

By using `sql.raw()` inside the `sql` function, you can incorporate unescaped raw strings directly into your queries. This can be particularly useful when you have specific SQL code or expressions that should remain untouched by the template function’s automatic escaping or modification.

    sql`select * from ${usersTable} where id = ${12}`;
    // vs
    sql`select * from ${usersTable} where id = ${sql.raw(12)}`;

    select * from "users" where id = $1; --> [12]
    --> vs
    select * from "users" where id = 12;

sql.fromList()[](#sqlfromlist)
------------------------------

The `sql` template generates sql chunks, which are arrays of SQL parts that will be concatenated into the query and params after applying the SQL to the database or query in Drizzle.

In certain scenarios, you may need to aggregate these chunks into an array using custom business logic and then concatenate them into a single SQL statement that can be passed to the database or query. For such cases, the fromList function can be quite useful.

The fromList function allows you to combine multiple SQL chunks into a single SQL statement. You can use it to aggregate and concatenate the individual SQL parts according to your specific requirements and then obtain a unified SQL query that can be executed.

    const sqlChunks: SQL[] = [];
    
    sqlChunks.push(sql`select * from users`);
    
    // some logic
    
    sqlChunks.push(sql` where `);
    
    // some logic
    
    for (let i = 0; i < 5; i++) {
    	sqlChunks.push(sql`id = ${i}`);
    
    	if (i === 4) continue;
    	sqlChunks.push(sql` or `);
    }
    
    const finalSql: SQL = sql.fromList(sqlChunks)

    select * from users where id = $1 or id = $2 or id = $3 or id = $4 or id = $5; --> [0, 1, 2, 3, 4]

sql.join()[](#sqljoin)
----------------------

Indeed, the `sql.join` function serves a similar purpose to the fromList helper. However, it provides additional flexibility when it comes to handling spaces between SQL chunks or specifying custom separators for concatenating the SQL chunks.

With `sql.join`, you can concatenate SQL chunks together using a specified separator. This separator can be any string or character that you want to insert between the chunks.

This is particularly useful when you have specific requirements for formatting or delimiting the SQL chunks. By specifying a custom separator, you can achieve the desired structure and formatting in the final SQL query.

    const sqlChunks: SQL[] = [];
    
    sqlChunks.push(sql`select * from users`);
    
    // some logic
    
    sqlChunks.push(sql`where`);
    
    // some logic
    
    for (let i = 0; i < 5; i++) {
    	sqlChunks.push(sql`id = ${i}`);
    
    if (i === 4) continue;
        sqlChunks.push(sql`or`);
    }
    
    const finalSql: SQL = sql.join(sqlChunks, sql.raw(' '));

    select * from users where id = $1 or id = $2 or id = $3 or id = $4 or id = $5; --> [0, 1, 2, 3, 4]

sql.append()[](#sqlappend)
--------------------------

If you have already generated SQL using the `sql` template, you can achieve the same behavior as `fromList` by using the append function to directly add a new chunk to the generated SQL.

By using the append function, you can dynamically add additional SQL chunks to the existing SQL string, effectively concatenating them together. This allows you to incorporate custom logic or business rules for aggregating the chunks into the final SQL query.

    const finalSql = sql`select * from users`;
    
    // some logic
    
    finalSql.append(sql` where `);
    
    // some logic
    
    for (let i = 0; i < 5; i++) {
    	finalSql.append(sql`id = ${i}`);
    
    	if (i === 4) continue;
    	finalSql.append(sql` or `);
    }

    select * from users where id = $1 or id = $2 or id = $3 or id = $4 or id = $5; --> [0, 1, 2, 3, 4]

sql.empty()[](#sqlempty)
------------------------

By using sql.empty(), you can start with a blank SQL object and then dynamically append SQL chunks to it as needed. This allows you to construct the SQL query incrementally, applying custom logic or conditions to determine the contents of each chunk.

Once you have initialized the SQL object using sql.empty(), you can take advantage of the full range of sql template features such as parameterization, composition, and escaping. This empowers you to construct the SQL query in a flexible and controlled manner, adapting it to your specific requirements.

    const finalSql = sql.empty();
    
    // some logic
    
    finalSql.append(sql`select * from users`);
    
    // some logic
    
    finalSql.append(sql` where `);
    
    // some logic
    
    for (let i = 0; i < 5; i++) {
    	finalSql.append(sql`id = ${i}`);
    
    	if (i === 4) continue;
    	finalSql.append(sql` or `);
    }

    select * from users where id = $1 or id = $2 or id = $3 or id = $4 or id = $5; --> [0, 1, 2, 3, 4]

Convert `sql` to string and params[](#convert-sql-to-string-and-params)
-----------------------------------------------------------------------

In all the previous examples, you observed the usage of SQL template syntax in TypeScript along with the generated SQL output.

If you need to obtain the query string and corresponding parameters generated from the SQL template, you must specify the database dialect you intend to generate the query for. Different databases have varying syntax for parameterization and escaping, so selecting the appropriate dialect is crucial.

Once you have chosen the dialect, you can utilize the corresponding implementation’s functionality to convert the SQL template into the desired query string and parameter format. This ensures compatibility with the specific database system you are working with.

PostgreSQL

MySQL

SQLite

    import { PgDialect } from 'drizzle-orm/pg-core';
    
    const pgDialect = new PgDialect();
    pgDialect.sqlToQuery(sql`select * from ${usersTable} where ${usersTable.id} = ${12}`);

    select * from "users" where "users"."id" = $1; --> [ 12 ]

    import { MySqlDialect } from 'drizzle-orm/mysql-core';
    
    const mysqlDialect = new MySqlDialect();
    mysqlDialect.sqlToQuery(sql`select * from ${usersTable} where ${usersTable.id} = ${12}`);

    select * from `users` where `users`.`id` = ?; --> [ 12 ]

    import { SQLiteSyncDialect } from 'drizzle-orm/sqlite-core';
    
    const sqliteDialect = new SQLiteSyncDialect();
    sqliteDialect.sqlToQuery(sql`select * from ${usersTable} where ${usersTable.id} = ${12}`);

    select * from "users" where "users"."id" = ?; --> [ 12 ]

`sql` select[](#sql-select)
---------------------------

You can use the sql functionality in partial select queries as well. Partial select queries allow you to retrieve specific fields or columns from a table rather than fetching the entire row.

For more detailed information about partial select queries, you can refer to the Core API documentation available at **[Core API docs](/docs/select#basic-and-partial-select)**.

**Select different custom fields from table**

Here you can see a usage for **[`sql<T>`](/docs/sql#sqlt)**, **[`sql``.mapWith()`](/docs/sql#sqlmapwith)**, **[`sql``.as<T>()`](/docs/sql#sqlast)**.

    import { sql } from 'drizzle-orm'
    import { usersTable } from 'schema'
    
    await db.select({
        id: usersTable.id,
        lowerName: sql<string>`lower(${usersTable.name})`,
        aliasedName: sql<string>`lower(${usersTable.name})`.as('aliased_column'),
        count: sql<number>`count(*)`.mapWith(Number) 
    }).from(usersTable)

    select `id`, lower(`name`), lower(`name`) as `aliased_column`, count(*) from `users`;

`sql` in where[](#sql-in-where)
-------------------------------

Indeed, Drizzle provides a set of available expressions that you can use within the sql template. However, it is true that databases often have a wider range of expressions available, including those provided through extensions or other means.

To ensure flexibility and enable you to utilize any expressions that are not natively supported by Drizzle, you have the freedom to write the SQL template directly using the sql function. This allows you to leverage the full power of SQL and incorporate any expressions or functionalities specific to your target database.

By using the sql template, you are not restricted to only the predefined expressions in Drizzle. Instead, you can express complex queries and incorporate any supported expressions that the underlying database system provides.

**Filtering by `id` but with sql**

    import { sql } from 'drizzle-orm'
    import { usersTable } from 'schema'
    
    const id = 77
    
    await db.select()
            .from(usersTable)
            .where(sql`${usersTable.id} = ${id}`)

    select * from "users" where "users"."id" = $1; --> [ 77 ]

**Advanced fulltext search where statement**

    import { sql } from 'drizzle-orm'
    import { usersTable } from 'schema'
    
    const searchParam = "Ale"
    
    await db.select()
            .from(usersTable)
            .where(sql`to_tsvector('simple', ${usersTable.name}) @@ to_tsquery('simple', ${searchParam})`)

    select * from "users" where to_tsvector('simple', "users"."name") @@ to_tsquery('simple', '$1'); --> [ "Ale" ]

`sql` in orderBy[](#sql-in-orderby)
-----------------------------------

The `sql` template can indeed be used in the ORDER BY clause when you need specific functionality for ordering that is not available in Drizzle, but you prefer not to resort to raw SQL.

    import { sql } from 'drizzle-orm'
    import { usersTable } from 'schema'
    
    await db.select().from(usersTable).orderBy(sql`${usersTable.id} desc nulls first`)

    select * from "users" order by "users"."id" desc nulls first;

`sql` in having and groupBy[](#sql-in-having-and-groupby)
---------------------------------------------------------

The `sql` template can indeed be used in the HAVING and GROUP BY clauses when you need specific functionality for ordering that is not available in Drizzle, but you prefer not to resort to raw SQL.

    import { sql } from 'drizzle-orm'
    import { usersTable } from 'schema'
    
    await db.select({ 
        projectId: usersTable.projectId,
        count: sql<number>`count(${usersTable.id})`.mapWith(Number)
    }).from(usersTable)
        .groupBy(sql`${usersTable.projectId}`)
        .having(sql`count(${usersTable.id}) > 300`)

    select "project_id", count("users"."id") from users group by "users"."project_id" having count("users"."id") > 300; 

Query performance
=================

When it comes to **Drizzle** — we’re a thin TypeScript layer on top of SQL with almost 0 overhead and to make it actual 0, you can utilise our prepared statements API.

**When you run a query on the database, there are several things that happen:**

*   all the configurations of the query builder got concatenated to the SQL string
*   that string and params are sent to the database driver
*   driver compiles SQL query to the binary SQL executable format and sends it to the database

With prepared statements you do SQL concatenation once on the Drizzle ORM side and then database driver is able to reuse precompiled binary SQL instead of parsing query all the time. It has extreme performance benefits on large SQL queries.

Different database drivers support prepared statements in different ways and sometimes Drizzle ORM you can go [**faster than better-sqlite3 driver.**](https://twitter.com/_alexblokh/status/1593593415907909634)

Prepared statement[](#prepared-statement)
-----------------------------------------

PostgreSQL

MySQL

SQLite

SingleStore

    const db = drizzle(...);
    
    const prepared = db.select().from(customers).prepare("statement_name");
    
    const res1 = await prepared.execute();
    const res2 = await prepared.execute();
    const res3 = await prepared.execute();

    const db = drizzle(...);
    
    const prepared = db.select().from(customers).prepare();
    
    const res1 = await prepared.execute();
    const res2 = await prepared.execute();
    const res3 = await prepared.execute();

    const db = drizzle(...);
    
    const prepared = db.select().from(customers).prepare();
    
    const res1 = prepared.all();
    const res2 = prepared.all();
    const res3 = prepared.all();

    const db = drizzle(...);
    
    const prepared = db.select().from(customers).prepare();
    
    const res1 = await prepared.execute();
    const res2 = await prepared.execute();
    const res3 = await prepared.execute();

Placeholder[](#placeholder)
---------------------------

Whenever you need to embed a dynamic runtime value - you can use the `sql.placeholder(...)` api

PostgreSQL

MySQL

SQLite

SingleStore

    import { sql } from "drizzle-orm";
    
    const p1 = db
      .select()
      .from(customers)
      .where(eq(customers.id, sql.placeholder('id')))
      .prepare("p1")
    
    await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
    await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12
    
    const p2 = db
      .select()
      .from(customers)
      .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
      .prepare("p2");
    
    await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'

    import { sql } from "drizzle-orm";
    
    const p1 = db
      .select()
      .from(customers)
      .where(eq(customers.id, sql.placeholder('id')))
      .prepare()
    
    await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
    await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12
    
    const p2 = db
      .select()
      .from(customers)
      .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
      .prepare();
    
    await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'

    import { sql } from "drizzle-orm";
    
    const p1 = db
      .select()
      .from(customers)
      .where(eq(customers.id, sql.placeholder('id')))
      .prepare()
    
    p1.get({ id: 10 }) // SELECT * FROM customers WHERE id = 10
    p1.get({ id: 12 }) // SELECT * FROM customers WHERE id = 12
    
    const p2 = db
      .select()
      .from(customers)
      .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
      .prepare();
    
    p2.all({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'

    import { sql } from "drizzle-orm";
    
    const p1 = db
      .select()
      .from(customers)
      .where(eq(customers.id, sql.placeholder('id')))
      .prepare()
    
    await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
    await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12
    
    const p2 = db
      .select()
      .from(customers)
      .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
      .prepare();
    
    await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'

Drizzle Serverless performance
==============================

You can get immense benefits with `serverless functions` like AWS Lamba or Vercel Server Functions (they’re AWS Lamba based), since they can live up to 15mins and reuse both database connections and prepared statements.

On the other, hand `edge functions` tend to clean up straight after they’re invoked which leads to little to no performance benefits.

To reuse your database connection and prepared statements you just have to declare them outside of handler scope:

    const databaseConnection = ...;
    const db = drizzle({ client: databaseConnection });
    const prepared = db.select().from(...).prepare();
    
    // AWS handler
    export const handler = async (event: APIGatewayProxyEvent) => {
      return prepared.execute();
    }

Set Operations
==============

SQL set operations combine the results of multiple query blocks into a single result. The SQL standard defines the following three set operations: `UNION`, `INTERSECT`, `EXCEPT`, `UNION ALL`, `INTERSECT ALL`, `EXCEPT ALL`.

### Union[](#union)

Combine all results from two query blocks into a single result, omitting any duplicates.

Get all names from customers and users tables without duplicates.

PostgreSQL

MySQL

SQLite

SingleStore

import-pattern

builder-pattern

schema.ts

    import { union } from 'drizzle-orm/pg-core'
    import { users, customers } from './schema'
    
    const allNamesForUserQuery = db.select({ name: users.name }).from(users);
    
    const result = await union(
    	allNamesForUserQuery,
    	db.select({ name: customers.name }).from(customers)
    ).limit(10);

    (select "name" from "sellers")
    union
    (select "name" from "customers")
    limit $1

    import { users, customers } from './schema'
    
    const result = await db
      .select({ name: users.name })
      .from(users)
      .union(db.select({ name: customers.name }).from(customers))
      .limit(10);

    (select "name" from "sellers")
    union
    (select "name" from "customers")
    limit $1

    import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
    
    const users = pgTable('sellers', {
        id: integer('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        address: text('address'),
    });
    
    const customers = pgTable('customers', {
        id: integer('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        city: text('city'),
        email: varchar('email', { length: 256 }).notNull()
    });

import-pattern

builder-pattern

schema.ts

    import { union } from 'drizzle-orm/mysql-core'
    import { users, customers } from './schema'
    
    const allNamesForUserQuery = db.select({ name: users.name }).from(users);
    
    const result = await union(
    	allNamesForUserQuery,
    	db.select({ name: customers.name }).from(customers)
    ).limit(10);

    (select `name` from `sellers`)
    union
    (select `name` from `customers`)
    limit ?

    import { users, customers } from './schema'
    
    const result = await db
      .select({ name: users.name })
      .from(users)
      .union(db.select({ name: customers.name }).from(customers))
      .limit(10);

    (select `name` from `sellers`)
    union
    (select `name` from `customers`)
    limit ?

    import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
    
    const users = mysqlTable('sellers', {
        id: int('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        address: text('address'),
    });
    
    const customers = mysqlTable('customers', {
        id: int('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        city: text('city'),
        email: varchar('email', { length: 256 }).notNull()
    });

import-pattern

builder-pattern

schema.ts

    import { union } from 'drizzle-orm/sqlite-core'
    import { users, customers } from './schema'
    
    const allNamesForUserQuery = db.select({ name: users.name }).from(users);
    
    const result = await union(
    	allNamesForUserQuery,
    	db.select({ name: customers.name }).from(customers)
    ).limit(10);

    (select "name" from "sellers")
    union 
    (select "name" from "customers")
    limit ?

    import { users, customers } from './schema'
    
    const result = await db
      .select({ name: users.name })
      .from(users)
      .union(db.select({ name: customers.name }).from(customers))
      .limit(10);

    select "name" from "sellers" union select "name" from "customers" limit ?

    import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
    
    const users = sqliteTable('sellers', {
        id: int('id').primaryKey(),
        name: text('name').notNull(),
        address: text('address'),
    });
    
    const customers = sqliteTable('customers', {
        id: int('id').primaryKey(),
        name: text('name').notNull(),
        city: text('city'),
        email: text('email').notNull()
    });

import-pattern

builder-pattern

schema.ts

    import { union } from 'drizzle-orm/singlestore-core'
    import { users, customers } from './schema'
    
    const allNamesForUserQuery = db.select({ name: users.name }).from(users);
    
    const result = await union(
    	allNamesForUserQuery,
    	db.select({ name: customers.name }).from(customers)
    ).limit(10);

    (select `name` from `sellers`)
    union
    (select `name` from `customers`)
    limit ?

    import { users, customers } from './schema'
    
    const result = await db
      .select({ name: users.name })
      .from(users)
      .union(db.select({ name: customers.name }).from(customers))
      .limit(10);

    (select `name` from `sellers`)
    union
    (select `name` from `customers`)
    limit ?

    import { int, mysqlTable, text, varchar } from "drizzle-orm/singlestore-core";
    
    const users = mysqlTable('sellers', {
        id: int('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        address: text('address'),
    });
    
    const customers = mysqlTable('customers', {
        id: int('id').primaryKey(),
        name: varchar('name', { length: 256 }).notNull(),
        city: text('city'),
        email: varchar('email', { length: 256 }).notNull()
    });

### Union All[](#union-all)

Combine all results from two query blocks into a single result, with duplicates.

Let’s consider a scenario where you have two tables, one representing online sales and the other representing in-store sales. In this case, you want to combine the data from both tables into a single result set. Since there might be duplicate transactions, you want to keep all the records and not eliminate duplicates.

PostgreSQL

MySQL

SQLite

SingleStore

import-pattern

builder-pattern

schema.ts

    import { unionAll } from 'drizzle-orm/pg-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);

    select "transaction_id" from "online_sales"
    union all
    select "transaction_id" from "in_store_sales"

    import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
      .from(onlineSales)
      .unionAll(
        db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
      );

    select "transaction_id" from "online_sales"
    union all
    select "transaction_id" from "in_store_sales"

    import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
    
    const onlineSales = pgTable('online_sales', {
        transactionId: integer('transaction_id').primaryKey(),
        productId: integer('product_id').unique(),
        quantitySold: integer('quantity_sold'),
        saleDate: timestamp('sale_date', { mode: 'date' }),
    });
    
    const inStoreSales = pgTable('in_store_sales', {
        transactionId: integer('transaction_id').primaryKey(),
        productId: integer('product_id').unique(),
        quantitySold: integer('quantity_sold'),
        saleDate: timestamp('sale_date', { mode: 'date' }),
    });

import-pattern

builder-pattern

schema.ts

    import { unionAll } from 'drizzle-orm/mysql-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);

    select `transaction_id` from `online_sales`
    union all
    select `transaction_id` from `in_store_sales`

    import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
      .from(onlineSales)
      .unionAll(
        db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
      );

    (select `transaction_id` from `online_sales`)
    union all 
    (select `transaction_id` from `in_store_sales`)

    import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
    
    const onlineSales = mysqlTable('online_sales', {
        transactionId: int('transaction_id').primaryKey(),
        productId: int('product_id').unique(),
        quantitySold: int('quantity_sold'),
        saleDate: timestamp('sale_date', { mode: 'date' }),
    });
    
    const inStoreSales = mysqlTable('in_store_sales', {
        transactionId: int('transaction_id').primaryKey(),
        productId: int('product_id').unique(),
        quantitySold: int('quantity_sold'),
        saleDate: timestamp('sale_date', { mode: 'date' }),
    });

import-pattern

builder-pattern

schema.ts

    import { unionAll } from 'drizzle-orm/sqlite-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);

    select "transaction_id" from "online_sales" 
    union all 
    select "transaction_id" from "in_store_sales"

    import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
      .from(onlineSales)
      .unionAll(
        db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
      );

    select "transaction_id" from "online_sales" 
    union all 
    select "transaction_id" from "in_store_sales"

    import { int, sqliteTable } from "drizzle-orm/sqlite-core";
    
    const onlineSales = sqliteTable('online_sales', {
        transactionId: int('transaction_id').primaryKey(),
        productId: int('product_id').unique(),
        quantitySold: int('quantity_sold'),
        saleDate: int('sale_date', { mode: 'timestamp' }),
    });
    
    const inStoreSales = sqliteTable('in_store_sales', {
        transactionId: int('transaction_id').primaryKey(),
        productId: int('product_id').unique(),
        quantitySold: int('quantity_sold'),
        saleDate: int('sale_date', { mode: 'timestamp' }),
    });

IMPORTANT

UNION ALL with ORDER BY behavior inconsistent with MySQL: SingleStore parses UNION ALL followed by ORDER BY commands differently from MySQL. In SingleStore, the following query is valid. In MySQL, it is invalid.

import-pattern

builder-pattern

schema.ts

    import { unionAll } from 'drizzle-orm/singlestore-core'
    import { onlineSales, inStoreSales } from './schema'
    
    const onlineTransactions = db.select({ transaction: onlineSales.transactionId }).from(onlineSales);
    const inStoreTransactions = db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales);
    
    const result = await unionAll(onlineTransactions, inStoreTransactions);

    select `transaction_id` from `online_sales`
    union all
    select `transaction_id` from `in_store_sales`

    import { onlineSales, inStoreSales } from './schema'
    
    const result = await db
      .select({ transaction: onlineSales.transactionId })
      .from(onlineSales)
      .unionAll(
        db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
      );

    (select `transaction_id` from `online_sales`)
    union all 
    (select `transaction_id` from `in_store_sales`)

    import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/singlestore-core";
    
    const onlineSales = mysqlTable('online_sales', {
        transactionId: int('transaction_id').primaryKey(),
        productId: int('product_id').unique(),
        quantitySold: int('quantity_sold'),
        saleDate: timestamp('sale_date', { mode: 'date' }),
    });
    
    const inStoreSales = mysqlTable('in_store_sales', {
        transactionId: int('transaction_id').primaryKey(),
        productId: int('product_id').unique(),
        quantitySold: int('quantity_sold'),
        saleDate: timestamp('sale_date', { mode: 'date' }),
    });

### Intersect[](#intersect)

Combine only those rows which the results of two query blocks have in common, omitting any duplicates.

Suppose you have two tables that store information about students’ course enrollments. You want to find the courses that are common between two different departments, but you want distinct course names, and you’re not interested in counting multiple enrollments of the same course by the same student.

In this scenario, you want to find courses that are common between the two departments but don’t want to count the same course multiple times even if multiple students from the same department are enrolled in it.

PostgreSQL

MySQL

SQLite

SingleStore

import-pattern

builder-pattern

schema.ts

    import { intersect } from 'drizzle-orm/pg-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.courseName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.courseName }).from(depB);
    
    const result = await intersect(departmentACourses, departmentBCourses);

    select "course_name" from "department_a_courses"
    intersect
    select "course_name" from "department_b_courses"

    import { depA, depB } from './schema'
    
    const result = await db
      .select({ courseName: depA.courseName })
      .from(depA)
      .intersect(db.select({ courseName: depB.courseName }).from(depB));

    select "course_name" from "department_a_courses"
    intersect
    select "course_name" from "department_b_courses"

    import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
    
    const depA = pgTable('department_a_courses', {
        studentId: integer('student_id'),
        courseName: varchar('course_name').notNull(),
    });
    
    const depB = pgTable('department_b_courses', {
        studentId: integer('student_id'),
        courseName: varchar('course_name').notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { intersect } from 'drizzle-orm/mysql-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.courseName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.courseName }).from(depB);
    
    const result = await intersect(departmentACourses, departmentBCourses);

    select `projects_name` from `department_a_projects`
    intersect
    select `projects_name` from `department_b_projects`

    import { depA, depB } from './schema'
    
    const result = await db
      .select({ courseName: depA.courseName })
      .from(depA)
      .intersect(db.select({ courseName: depB.courseName }).from(depB));

    select `projects_name` from `department_a_projects`
    intersect
    select `projects_name` from `department_b_projects`

    import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
    
    const depA = mysqlTable('department_a_courses', {
        studentId: int('student_id'),
        courseName: varchar('course_name', { length: 256 }).notNull(),
    });
    
    const depB = pgTable('department_b_courses', {
        studentId: int('student_id'),
        courseName: varchar('course_name', { length: 256 }).notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { intersect } from 'drizzle-orm/sqlite-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.courseName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.courseName }).from(depB);
    
    const result = await intersect(departmentACourses, departmentBCourses);

    select "course_name" from "department_a_courses"
    intersect
    select "course_name" from "department_b_courses"

    import { depA, depB } from './schema'
    
    const result = await db
      .select({ courseName: depA.courseName })
      .from(depA)
      .intersect(db.select({ courseName: depB.courseName }).from(depB));

    select "course_name" from "department_a_courses" 
    intersect 
    select "course_name" from "department_b_courses"

    import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
    
    const depA = sqliteTable('department_a_courses', {
        studentId: int('student_id'),
        courseName: text('course_name').notNull(),
    });
    
    const depB = sqliteTable('department_b_courses', {
        studentId: int('student_id'),
        courseName: text('course_name').notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { intersect } from 'drizzle-orm/singlestore-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.courseName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.courseName }).from(depB);
    
    const result = await intersect(departmentACourses, departmentBCourses);

    select `projects_name` from `department_a_projects`
    intersect
    select `projects_name` from `department_b_projects`

    import { depA, depB } from './schema'
    
    const result = await db
      .select({ courseName: depA.courseName })
      .from(depA)
      .intersect(db.select({ courseName: depB.courseName }).from(depB));

    select `projects_name` from `department_a_projects`
    intersect
    select `projects_name` from `department_b_projects`

    import { int, mysqlTable, varchar } from "drizzle-orm/singlestore-core";
    
    const depA = mysqlTable('department_a_courses', {
        studentId: int('student_id'),
        courseName: varchar('course_name', { length: 256 }).notNull(),
    });
    
    const depB = pgTable('department_b_courses', {
        studentId: int('student_id'),
        courseName: varchar('course_name', { length: 256 }).notNull(),
    });

### Intersect All[](#intersect-all)

Combine only those rows which the results of two query blocks have in common, with duplicates.

Let’s consider a scenario where you have two tables containing data about customer orders, and you want to identify products that are ordered by both regular customers and VIP customers. In this case, you want to keep track of the quantity of each product, even if it’s ordered multiple times by different customers.

In this scenario, you want to find products that are ordered by both regular customers and VIP customers, but you want to retain the quantity information, even if the same product is ordered multiple times by different customers.

PostgreSQL

MySQL

SingleStore

import-pattern

builder-pattern

schema.ts

    import { intersectAll } from 'drizzle-orm/pg-core'
    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const regularOrders = db.select({ 
        productId: regularCustomerOrders.productId,
        quantityOrdered: regularCustomerOrders.quantityOrdered }
    ).from(regularCustomerOrders);
    
    const vipOrders = db.select({ 
        productId: vipCustomerOrders.productId,
        quantityOrdered: vipCustomerOrders.quantityOrdered }
    ).from(vipCustomerOrders);
    
    const result = await intersectAll(regularOrders, vipOrders);

    select "product_id", "quantity_ordered" from "regular_customer_orders"
    intersect all
    select "product_id", "quantity_ordered" from "vip_customer_orders"

    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const result = await db
        .select({
          productId: regularCustomerOrders.productId,
          quantityOrdered: regularCustomerOrders.quantityOrdered,
        })
        .from(regularCustomerOrders)
        .intersectAll(
          db
            .select({
              productId: vipCustomerOrders.productId,
              quantityOrdered: vipCustomerOrders.quantityOrdered,
            })
            .from(vipCustomerOrders)
        );

    select "product_id", "quantity_ordered" from "regular_customer_orders"
    intersect all
    select "product_id", "quantity_ordered" from "vip_customer_orders"

    import { integer, pgTable } from "drizzle-orm/pg-core";
    
    const regularCustomerOrders = pgTable('regular_customer_orders', {
        customerId: integer('customer_id').primaryKey(),
        productId: integer('product_id').notNull(),
        quantityOrdered: integer('quantity_ordered').notNull(),
    });
    
    const vipCustomerOrders = pgTable('vip_customer_orders', {
        customerId: integer('customer_id').primaryKey(),
        productId: integer('product_id').notNull(),
        quantityOrdered: integer('quantity_ordered').notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { intersectAll } from 'drizzle-orm/mysql-core'
    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const regularOrders = db.select({ 
        productId: regularCustomerOrders.productId,
        quantityOrdered: regularCustomerOrders.quantityOrdered }
    ).from(regularCustomerOrders);
    
    const vipOrders = db.select({ 
        productId: vipCustomerOrders.productId,
        quantityOrdered: vipCustomerOrders.quantityOrdered }
    ).from(vipCustomerOrders);
    
    const result = await intersectAll(regularOrders, vipOrders);

    select `product_id`, `quantity_ordered` from `regular_customer_orders`
    intersect all
    select `product_id`, `quantity_ordered` from `vip_customer_orders`

    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const result = await db
        .select({
          productId: regularCustomerOrders.productId,
          quantityOrdered: regularCustomerOrders.quantityOrdered,
        })
        .from(regularCustomerOrders)
        .intersectAll(
          db
            .select({
              productId: vipCustomerOrders.productId,
              quantityOrdered: vipCustomerOrders.quantityOrdered,
            })
            .from(vipCustomerOrders)
        );

    select `product_id`, `quantity_ordered` from `regular_customer_orders`
    intersect all 
    select `product_id`, `quantity_ordered` from `vip_customer_orders`

    import { int, mysqlTable } from "drizzle-orm/mysql-core";
    
    const regularCustomerOrders = mysqlTable('regular_customer_orders', {
        customerId: int('customer_id').primaryKey(),
        productId: int('product_id').notNull(),
        quantityOrdered: int('quantity_ordered').notNull(),
    });
    
    const vipCustomerOrders = mysqlTable('vip_customer_orders', {
        customerId: int('customer_id').primaryKey(),
        productId: int('product_id').notNull(),
        quantityOrdered: int('quantity_ordered').notNull(),
    });

Not supported by SingleStore

### Except[](#except)

For two query blocks A and B, return all results from A which are not also present in B, omitting any duplicates.

Suppose you have two tables that store information about employees’ project assignments. You want to find the projects that are unique to one department and not shared with another department, excluding duplicates.

In this scenario, you want to identify the projects that are exclusive to one department and not shared with the other department. You don’t want to count the same project multiple times, even if multiple employees from the same department are assigned to it.

PostgreSQL

MySQL

SQLite

SingleStore

import-pattern

builder-pattern

schema.ts

    import { except } from 'drizzle-orm/pg-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.projectsName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.projectsName }).from(depB);
    
    const result = await except(departmentACourses, departmentBCourses);

    select "projects_name" from "department_a_projects"
    except
    select "projects_name" from "department_b_projects"

    import { depA, depB } from './schema'
    
    const result = await db
        .select({ courseName: depA.projectsName })
        .from(depA)
        .except(db.select({ courseName: depB.projectsName }).from(depB));

    select "projects_name" from "department_a_projects"
    except
    select "projects_name" from "department_b_projects"

    import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
    
    const depA = pgTable('department_a_projects', {
        employeeId: integer('employee_id'),
        projectsName: varchar('projects_name').notNull(),
    });
    
    const depB = pgTable('department_b_projects', {
        employeeId: integer('employee_id'),
        projectsName: varchar('projects_name').notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { except } from 'drizzle-orm/mysql-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.projectsName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.projectsName }).from(depB);
    
    const result = await except(departmentACourses, departmentBCourses);

    select `projects_name` from `department_a_projects`
    except
    select `projects_name` from `department_b_projects`

    import { depA, depB } from './schema'
    
    const result = await db
        .select({ courseName: depA.projectsName })
        .from(depA)
        .except(db.select({ courseName: depB.projectsName }).from(depB));

    select `projects_name` from `department_a_projects`
    except
    select `projects_name` from `department_b_projects`

    import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
    
    const depA = mysqlTable('department_a_projects', {
        employeeId: int('employee_id'),
        projectsName: varchar('projects_name', { length: 256 }).notNull(),
    });
    
    const depB = mysqlTable('department_b_projects', {
        employeeId: int('employee_id'),
        projectsName: varchar('projects_name', { length: 256 }).notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { except } from 'drizzle-orm/sqlite-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.projectsName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.projectsName }).from(depB);
    
    const result = await except(departmentACourses, departmentBCourses);

    select "projects_name" from "department_a_projects" 
    except 
    select "projects_name" from "department_b_projects"

    import { depA, depB } from './schema'
    
    const result = await db
        .select({ courseName: depA.projectsName })
        .from(depA)
        .except(db.select({ courseName: depB.projectsName }).from(depB));

    select "projects_name" from "department_a_projects" 
    except 
    select "projects_name" from "department_b_projects"

    import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
    
    const depA = sqliteTable('department_a_projects', {
        employeeId: int('employee_id'),
        projectsName: text('projects_name').notNull(),
    });
    
    const depB = sqliteTable('department_b_projects', {
        employeeId: int('employee_id'),
        projectsName: text('projects_name').notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { except } from 'drizzle-orm/singlestore-core'
    import { depA, depB } from './schema'
    
    const departmentACourses = db.select({ courseName: depA.projectsName }).from(depA);
    const departmentBCourses = db.select({ courseName: depB.projectsName }).from(depB);
    
    const result = await except(departmentACourses, departmentBCourses);

    select `projects_name` from `department_a_projects`
    except
    select `projects_name` from `department_b_projects`

    import { depA, depB } from './schema'
    
    const result = await db
        .select({ courseName: depA.projectsName })
        .from(depA)
        .except(db.select({ courseName: depB.projectsName }).from(depB));

    select `projects_name` from `department_a_projects`
    except
    select `projects_name` from `department_b_projects`

    import { int, mysqlTable, varchar } from "drizzle-orm/singlestore-core";
    
    const depA = mysqlTable('department_a_projects', {
        employeeId: int('employee_id'),
        projectsName: varchar('projects_name', { length: 256 }).notNull(),
    });
    
    const depB = mysqlTable('department_b_projects', {
        employeeId: int('employee_id'),
        projectsName: varchar('projects_name', { length: 256 }).notNull(),
    });

### Except All[](#except-all)

For two query blocks A and B, return all results from A which are not also present in B, with duplicates.

Let’s consider a scenario where you have two tables containing data about customer orders, and you want to identify products that are exclusively ordered by regular customers (without VIP customers). In this case, you want to keep track of the quantity of each product, even if it’s ordered multiple times by different regular customers.

In this scenario, you want to find products that are exclusively ordered by regular customers and not ordered by VIP customers. You want to retain the quantity information, even if the same product is ordered multiple times by different regular customers.

PostgreSQL

MySQL

SingleStore

import-pattern

builder-pattern

schema.ts

    import { exceptAll } from 'drizzle-orm/pg-core'
    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const regularOrders = db.select({ 
        productId: regularCustomerOrders.productId,
        quantityOrdered: regularCustomerOrders.quantityOrdered }
    ).from(regularCustomerOrders);
    
    const vipOrders = db.select({ 
        productId: vipCustomerOrders.productId,
        quantityOrdered: vipCustomerOrders.quantityOrdered }
    ).from(vipCustomerOrders);
    
    const result = await exceptAll(regularOrders, vipOrders);

    select "product_id", "quantity_ordered" from "regular_customer_orders"
    except all
    select "product_id", "quantity_ordered" from "vip_customer_orders"

    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const result = await db
        .select({
          productId: regularCustomerOrders.productId,
          quantityOrdered: regularCustomerOrders.quantityOrdered,
        })
        .from(regularCustomerOrders)
        .exceptAll(
          db
            .select({
              productId: vipCustomerOrders.productId,
              quantityOrdered: vipCustomerOrders.quantityOrdered,
            })
            .from(vipCustomerOrders)
        );

    select "product_id", "quantity_ordered" from "regular_customer_orders"
    except all
    select "product_id", "quantity_ordered" from "vip_customer_orders"

    import { integer, pgTable } from "drizzle-orm/pg-core";
    
    const regularCustomerOrders = pgTable('regular_customer_orders', {
        customerId: integer('customer_id').primaryKey(),
        productId: integer('product_id').notNull(),
        quantityOrdered: integer('quantity_ordered').notNull(),
    });
    
    const vipCustomerOrders = pgTable('vip_customer_orders', {
        customerId: integer('customer_id').primaryKey(),
        productId: integer('product_id').notNull(),
        quantityOrdered: integer('quantity_ordered').notNull(),
    });

import-pattern

builder-pattern

schema.ts

    import { exceptAll } from 'drizzle-orm/mysql-core'
    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const regularOrders = db.select({ 
        productId: regularCustomerOrders.productId,
        quantityOrdered: regularCustomerOrders.quantityOrdered }
    ).from(regularCustomerOrders);
    
    const vipOrders = db.select({ 
        productId: vipCustomerOrders.productId,
        quantityOrdered: vipCustomerOrders.quantityOrdered }
    ).from(vipCustomerOrders);
    
    const result = await exceptAll(regularOrders, vipOrders);

    select `product_id`, `quantity_ordered` from `regular_customer_orders`
    except all
    select `product_id`, `quantity_ordered` from `vip_customer_orders`

    import { regularCustomerOrders, vipCustomerOrders } from './schema'
    
    const result = await db
        .select({
          productId: regularCustomerOrders.productId,
          quantityOrdered: regularCustomerOrders.quantityOrdered,
        })
        .from(regularCustomerOrders)
        .exceptAll(
          db
            .select({
              productId: vipCustomerOrders.productId,
              quantityOrdered: vipCustomerOrders.quantityOrdered,
            })
            .from(vipCustomerOrders)
        );

    select `product_id`, `quantity_ordered` from `regular_customer_orders`
    except all
    select `product_id`, `quantity_ordered` from `vip_customer_orders`

    const regularCustomerOrders = mysqlTable('regular_customer_orders', {
        customerId: int('customer_id').primaryKey(),
        productId: int('product_id').notNull(),
        quantityOrdered: int('quantity_ordered').notNull(),
    });
    
    const vipCustomerOrders = mysqlTable('vip_customer_orders', {
        customerId: int('customer_id').primaryKey(),
        productId: int('product_id').notNull(),
        quantityOrdered: int('quantity_ordered').notNull(),
    });

Not supported by SingleStore

Generated Columns
=================

To use this feature you would need to have `[[email protected]](/cdn-cgi/l/email-protection)` or higher and `[[email protected]](/cdn-cgi/l/email-protection)` or higher

Generated columns in SQL are a feature that allows you to create columns in a table whose values are automatically computed based on expressions involving other columns within the same table. This can help ensure data consistency, simplify database design, and improve query performance.

There are two types of generated columns:

1.  Virtual (or non-persistent) Generated Columns: These columns are computed dynamically whenever they are queried. They do not occupy storage space in the database.
    
2.  Stored (or persistent) Generated Columns: These columns are computed when a row is inserted or updated and their values are stored in the database. This allows them to be indexed and can improve query performance since the values do not need to be recomputed for each query.
    

Generated columns can be especially useful for:

*   Deriving new data from existing columns
*   Automating calculations to avoid manual updates
*   Enforcing data integrity and consistency
*   Simplifying application logic by keeping complex calculations within the database schema

The implementation and usage of generated columns can vary significantly across different SQL databases. PostgreSQL, MySQL, and SQLite each have unique features, capabilities, and limitations when it comes to generated columns. In this section, we will explore these differences in detail to help you understand how to best utilize generated columns in each database system.

PostgreSQL

MySQL

SQLite

SingleStore(WIP)

#### Database side[](#database-side)

**Types**: `STORED` only

**How It Works**

*   Automatically computes values based on other columns during insert or update.

**Capabilities**

*   Simplifies data access by precomputing complex expressions.
*   Enhances query performance with index support on generated columns.

**Limitations**

*   Cannot specify default values.
*   Expressions cannot reference other generated columns or include subqueries.
*   Schema changes required to modify generated column expressions.
*   Cannot directly use in primary keys, foreign keys, or unique constraints

For more info, please check [PostgreSQL](https://www.postgresql.org/docs/current/ddl-generated-columns.html) docs

#### Drizzle side[](#drizzle-side)

In Drizzle you can specify `.generatedAlwaysAs()` function on any column type and add a supported sql query, that will generate this column data for you.

#### Features[](#features)

This function can accept generated expression in 3 ways:

**`string`**

    export const test = pgTable("test", {
        generatedName: text("gen_name").generatedAlwaysAs(`hello world!`),
    });

    CREATE TABLE IF NOT EXISTS "test" (
        "gen_name" text GENERATED ALWAYS AS (hello world!) STORED
    );

**`sql`** tag - if you want drizzle to escape some values for you

    export const test = pgTable("test", {
        generatedName: text("gen_name").generatedAlwaysAs(sql`hello "world"!`),
    });

    CREATE TABLE IF NOT EXISTS "test" (
        "gen_name" text GENERATED ALWAYS AS (hello "world"!) STORED
    );

**`callback`** - if you need to reference columns from a table

    export const test = pgTable("test", {
        name: text("first_name"),
        generatedName: text("gen_name").generatedAlwaysAs(
          (): SQL => sql`hi, ${test.name}!`
        ),
    });

    CREATE TABLE IF NOT EXISTS "test" (
        "first_name" text,
        "gen_name" text GENERATED ALWAYS AS (hi, "test"."first_name"!) STORED
    );

**Example** generated columns with full-text search

schema.ts

    import { SQL, sql } from "drizzle-orm";
    import { customType, index, integer, pgTable, text } from "drizzle-orm/pg-core";
    
    const tsVector = customType<{ data: string }>({
      dataType() {
        return "tsvector";
      },
    });
    
    export const test = pgTable(
      "test",
      {
        id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
        content: text("content"),
        contentSearch: tsVector("content_search", {
          dimensions: 3,
        }).generatedAlwaysAs(
          (): SQL => sql`to_tsvector('english', ${test.content})`
        ),
      },
      (t) => [
        index("idx_content_search").using("gin", t.contentSearch)
      ]
    );

    CREATE TABLE IF NOT EXISTS "test" (
    	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "test_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
    	"content" text,
    	"content_search" "tsvector" GENERATED ALWAYS AS (to_tsvector('english', "test"."content")) STORED
    );
    --> statement-breakpoint
    CREATE INDEX IF NOT EXISTS "idx_content_search" ON "test" USING gin ("content_search");

#### Database side[](#database-side-1)

**Types**: `STORED`, `VIRTUAL`

**How It Works**

*   Defined with an expression in the table schema.
*   Virtual columns are computed during read operations.
*   Stored columns are computed during write operations and stored.

**Capabilities**

*   Used in SELECT, INSERT, UPDATE, and DELETE statements.
*   Can be indexed, both virtual and stored.
*   Can specify NOT NULL and other constraints.

**Limitations**

*   Cannot directly insert or update values in a generated column

For more info, please check [MySQL Alter Generated](https://dev.mysql.com/doc/refman/8.4/en/alter-table-generated-columns.html) docs and [MySQL create generated](https://dev.mysql.com/doc/refman/8.4/en/create-table-generated-columns.html) docs

#### Drizzle side[](#drizzle-side-1)

#### Features[](#features-1)

**`string`**

    export const test = mysqlTable("test", {
        generatedName: text("gen_name").generatedAlwaysAs(`hello world!`),
    });

    CREATE TABLE `test` (
        `gen_name` text GENERATED ALWAYS AS (hello world!) VIRTUAL
    );

**`sql`** tag - if you want drizzle to escape some values for you

    export const test = mysqlTable("test", {
        generatedName: text("gen_name").generatedAlwaysAs(sql`hello "world"!`),
    });

    CREATE TABLE `test` (
        `gen_name` text GENERATED ALWAYS AS (hello "world"!) VIRTUAL
    );

**`callback`** - if you need to reference columns from a table

    export const test = mysqlTable("test", {
        name: text("first_name"),
        generatedName: text("gen_name").generatedAlwaysAs(
          (): SQL => sql`hi, ${test.name}!`
        ),
    });

    CREATE TABLE `test` (
    	`first_name` text,
    	`gen_name` text GENERATED ALWAYS AS (hi, `test`.`first_name`!) VIRTUAL
    );

#### Limitations[](#limitations)

Drizzle Kit will also have limitations for `push` command:

1.  You can’t change the generated constraint expression and type using `push`. Drizzle-kit will ignore this change. To make it work, you would need to `drop the column`, `push`, and then `add a column with a new expression`. This was done due to the complex mapping from the database side, where the schema expression will be modified on the database side and, on introspection, we will get a different string. We can’t be sure if you changed this expression or if it was changed and formatted by the database. As long as these are generated columns and `push` is mostly used for prototyping on a local database, it should be fast to `drop` and `create` generated columns. Since these columns are `generated`, all the data will be restored
2.  `generate` should have no limitations

schema.ts

    export const users = mysqlTable("users", {
        id: int("id"),
        id2: int("id2"),
        name: text("name"),
        storedGenerated: text("stored_gen").generatedAlwaysAs(
          (): SQL => sql`${users.name} || 'hello'`,
          { mode: "stored" }
        ),
        virtualGenerated: text("virtual_gen").generatedAlwaysAs(
          (): SQL => sql`${users.name} || 'hello'`,
          { mode: "virtual" }
        ),
    })

    CREATE TABLE `users` (
        `id` int,
        `id2` int,
        `name` text,
        `stored_gen` text GENERATED ALWAYS AS (`users`.`name` || 'hello') STORED,
        `virtual_gen` text GENERATED ALWAYS AS (`users`.`name` || 'hello') VIRTUAL
    );

#### Database side[](#database-side-2)

**Types**: `STORED`, `VIRTUAL`

**How It Works**

*   Defined with an expression in the table schema.
*   Virtual columns are computed during read operations.
*   Stored columns are computed during write operations and stored.

**Capabilities**

*   Used in SELECT, INSERT, UPDATE, and DELETE statements.
*   Can be indexed, both virtual and stored.
*   Can specify NOT NULL and other constraints.

**Limitations**

*   Cannot directly insert or update values in a generated column

For more info, please check [SQLite](https://www.sqlite.org/gencol.html) docs

#### Drizzle side[](#drizzle-side-2)

#### Features[](#features-2)

**`string`**

    export const test = sqliteTable("test", {
        generatedName: text("gen_name").generatedAlwaysAs(`hello world!`),
    });

    CREATE TABLE `test` (
        `gen_name` text GENERATED ALWAYS AS (hello world!) VIRTUAL
    );

**`sql`** tag - if you want drizzle to escape some values for you

    export const test = sqliteTable("test", {
        generatedName: text("gen_name").generatedAlwaysAs(sql`hello "world"!`),
    });

    CREATE TABLE `test` (
        `gen_name` text GENERATED ALWAYS AS (hello "world"!) VIRTUAL
    );

**`callback`** - if you need to reference columns from a table

    export const test = sqliteTable("test", {
        name: text("first_name"),
        generatedName: text("gen_name").generatedAlwaysAs(
          (): SQL => sql`hi, ${test.name}!`
        ),
    });

    CREATE TABLE `test` (
        `first_name` text,
        `gen_name` text GENERATED ALWAYS AS (hi, "first_name"!) VIRTUAL
    );

#### Limitations[](#limitations-1)

Drizzle Kit will also have limitations for `push` and `generate` command:

1.  You can’t change the generated constraint expression with the stored type in an existing table. You would need to delete this table and create it again. This is due to SQLite limitations for such actions. We will handle this case in future releases (it will involve the creation of a new table with data migration).
2.  You can’t add a `stored` generated expression to an existing column for the same reason as above. However, you can add a `virtual` expression to an existing column.
3.  You can’t change a `stored` generated expression in an existing column for the same reason as above. However, you can change a `virtual` expression.
4.  You can’t change the generated constraint type from `virtual` to `stored` for the same reason as above. However, you can change from `stored` to `virtual`.

index.ts

schema.ts

    export const users = sqliteTable("users", {
      id: int("id"),
      name: text("name"),
      storedGenerated: text("stored_gen").generatedAlwaysAs(
        (): SQL => sql`${users.name} || 'hello'`,
        { mode: "stored" }
      ),
      virtualGenerated: text("virtual_gen").generatedAlwaysAs(
        (): SQL => sql`${users.name} || 'hello'`,
        { mode: "virtual" }
      ),
    });

    CREATE TABLE `users` (
        `id` integer,
        `name` text,
        `stored_gen` text GENERATED ALWAYS AS ("name" || 'hello') STORED,
        `virtual_gen` text GENERATED ALWAYS AS ("name" || 'hello') VIRTUAL
    );

Work in Progress

Transactions
============

SQL transaction is a grouping of one or more SQL statements that interact with a database. A transaction in its entirety can commit to a database as a single logical unit or rollback (become undone) as a single logical unit.

Drizzle ORM provides APIs to run SQL statements in transactions:

    const db = drizzle(...)
    
    await db.transaction(async (tx) => {
      await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
      await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
    });

Drizzle ORM supports `savepoints` with nested transactions API:

    const db = drizzle(...)
    
    await db.transaction(async (tx) => {
      await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
      await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
    
      await tx.transaction(async (tx2) => {
        await tx2.update(users).set({ name: "Mr. Dan" }).where(eq(users.name, "Dan"));
      });
    });

You can embed business logic to the transaction and rollback whenever needed:

    const db = drizzle(...)
    
    await db.transaction(async (tx) => {
      const [account] = await tx.select({ balance: accounts.balance }).from(accounts).where(eq(users.name, 'Dan'));
      if (account.balance < 100) {
        // This throws an exception that rollbacks the transaction.
        tx.rollback()
      }
    
      await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
      await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
    });

You can return values from the transaction:

    const db = drizzle(...)
    
    const newBalance: number = await db.transaction(async (tx) => {
      await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
      await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
    
      const [account] = await tx.select({ balance: accounts.balance }).from(accounts).where(eq(users.name, 'Dan'));
      return account.balance;
    });

You can use transactions with **[relational queries](/docs/rqb)**:

    const db = drizzle({ schema })
    
    await db.transaction(async (tx) => {
      await tx.query.users.findMany({
        with: {
          accounts: true
        }
      });
    });

We provide dialect-specific transaction configuration APIs:

PostgreSQL

MySQL

SQLite

SingleStore

    await db.transaction(
      async (tx) => {
        await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
        await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
      }, {
        isolationLevel: "read committed",
        accessMode: "read write",
        deferrable: true,
      }
    );
    
    interface PgTransactionConfig {
      isolationLevel?:
        | "read uncommitted"
        | "read committed"
        | "repeatable read"
        | "serializable";
      accessMode?: "read only" | "read write";
      deferrable?: boolean;
    }

    await db.transaction(
      async (tx) => {
        await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
        await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
      }, {
        isolationLevel: "read committed",
        accessMode: "read write",
        withConsistentSnapshot: true,
      }
    );
    
    interface MySqlTransactionConfig {
      isolationLevel?:
        | "read uncommitted"
        | "read committed"
        | "repeatable read"
        | "serializable";
      accessMode?: "read only" | "read write";
      withConsistentSnapshot?: boolean;
    }

    await db.transaction(
      async (tx) => {
        await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
        await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
      }, {
        behavior: "deferred",
      }
    );
    
    interface SQLiteTransactionConfig {
        behavior?: 'deferred' | 'immediate' | 'exclusive';
    }

    await db.transaction(
      async (tx) => {
        await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
        await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
      }, {
        isolationLevel: "read committed",
        accessMode: "read write",
        withConsistentSnapshot: true,
      }
    );
    
    interface SingleStoreTransactionConfig {
      isolationLevel?:
        | "read uncommitted"
        | "read committed"
        | "repeatable read"
        | "serializable";
      accessMode?: "read only" | "read write";
      withConsistentSnapshot?: boolean;
    }

Batch API
=========

**LibSQL Batch API explanation**: _[source](https://docs.turso.tech/sdk/ts/reference#batch-transactions)_

> With the libSQL client library, a batch is one or more SQL statements executed in order in an implicit transaction. The transaction is controlled by the libSQL backend. If all of the statements are successful, the transaction is committed. If any of the statements fail, the entire transaction is rolled back and no changes are made.

**D1 Batch API explanation**: _[source](https://developers.cloudflare.com/d1/worker-api/d1-database/#batch)_

> Batching sends multiple SQL statements inside a single call to the database. This can have a huge performance impact as it reduces latency from network round trips to D1. D1 operates in auto-commit. Our implementation guarantees that each statement in the list will execute and commit, sequentially, non-concurrently. Batched statements are SQL transactions. If a statement in the sequence fails, then an error is returned for that specific statement, and it aborts or rolls back the entire sequence.

Drizzle ORM provides APIs to run SQL statements in batch for `LibSQL`, `Neon` and `D1`:

    const batchResponse: BatchResponse = await db.batch([
    	db.insert(usersTable).values({ id: 1, name: 'John' }).returning({ id: usersTable.id }),
    	db.update(usersTable).set({ name: 'Dan' }).where(eq(usersTable.id, 1)),
    	db.query.usersTable.findMany({}),
    	db.select().from(usersTable).where(eq(usersTable.id, 1)),
    	db.select({ id: usersTable.id, invitedBy: usersTable.invitedBy }).from(usersTable),
    ]);

Type for `batchResponse` in this example would be:

libSQL

Neon

D1

    type BatchResponse = [
    	{
    		id: number;
    	}[],
    	ResultSet,
    	{
    		id: number;
    		name: string;
    		verified: number;
    		invitedBy: number | null;
    	}[],
    	{
    		id: number;
    		name: string;
    		verified: number;
    		invitedBy: number | null;
    	}[],
    	{
    		id: number;
    		invitedBy: number | null;
    	}[],
    ]

    type BatchResponse = [
    	{
    		id: number;
    	}[],
    	NeonHttpQueryResult,
    	{
    		id: number;
    		name: string;
    		verified: number;
    		invitedBy: number | null;
    	}[],
    	{
    		id: number;
    		name: string;
    		verified: number;
    		invitedBy: number | null;
    	}[],
    	{
    		id: number;
    		invitedBy: number | null;
    	}[],
    ]

    type BatchResponse = [
      {
        id: number;
      }[],
      D1Result,
      {
        id: number;
        name: string;
        verified: number;
        invitedBy: number | null;
      }[],
      {
        id: number;
        name: string;
        verified: number;
        invitedBy: number | null;
      }[],
      {
        id: number;
        invitedBy: number | null;
      }[],
    ]

All possible builders that can be used inside `db.batch`:

    db.all(),
    db.get(),
    db.values(),
    db.run(),
    db.execute(),
    db.query.<table>.findMany(),
    db.query.<table>.findFirst(),
    db.select()...,
    db.update()...,
    db.delete()...,
    db.insert()...,

Cache
=====

IMPORTANT

Available only on `drizzle-orm@cache` tag

npm

yarn

pnpm

bun

    npm i drizzle-orm@cache

    yarn add drizzle-orm@cache

    pnpm add drizzle-orm@cache

    bun add drizzle-orm@cache

Drizzle sends every query straight to your database by default. There are no hidden actions, no automatic caching or invalidation - you’ll always see exactly what runs. If you want caching, you must opt in.

By default, Drizzle uses a `explicit` caching strategy (i.e. `global: false`), so nothing is ever cached unless you ask. This prevents surprises or hidden performance traps in your application. Alternatively, you can flip on `all` caching (`global: true`) so that every select will look in cache first.

Quickstart[](#quickstart)
-------------------------

### Upstash integration[](#upstash-integration)

Drizzle provides an `upstashCache()` helper out of the box. By default, this uses Upstash Redis with automatic configuration if environment variables are set.

    import { upstashCache } from "drizzle-orm/cache/upstash";
    import { drizzle } from "drizzle-orm/...";
    
    const db = drizzle(process.env.DB_URL!, {
      cache: upstashCache(),
    });

You can also explicitly define your Upstash credentials, enable global caching for all queries by default or pass custom caching options:

    import { upstashCache } from "drizzle-orm/cache/upstash";
    import { drizzle } from "drizzle-orm/...";
    
    const db = drizzle(process.env.DB_URL!, {
      cache: upstashCache({
        // 👇 Redis credentials (optional — can also be pulled from env vars)
        url: '<UPSTASH_URL>',
        token: '<UPSTASH_TOKEN>',
    
        // 👇 Enable caching for all queries by default (optional)
        global: true,
    
        // 👇 Default cache behavior (optional)
        config: { ex: 60 }
      })
    });

Cache config reference[](#cache-config-reference)
-------------------------------------------------

Drizzle supports the following cache config options for Upstash:

    export type CacheConfig = {
      /**
       * Expiration in seconds (positive integer)
       */
      ex?: number;
      /**
       * Set an expiration (TTL or time to live) on one or more fields of a given hash key.
       * Used for HEXPIRE command
       */
      hexOptions?: "NX" | "nx" | "XX" | "xx" | "GT" | "gt" | "LT" | "lt";
    };

Cache usage examples[](#cache-usage-examples)
---------------------------------------------

Once you’ve configured caching, here’s how the cache behaves:

**Case 1: Drizzle with `global: false` (default, opt-in caching)**

    import { upstashCache } from "drizzle-orm/cache/upstash";
    import { drizzle } from "drizzle-orm/...";
    
    const db = drizzle(process.env.DB_URL!, {
      // 👇 `global: true` is not passed, false by default
      cache: upstashCache({ url: "", token: "" }),
    });

In this case, the following query won’t read from cache

    const res = await db.select().from(users);
    
    // Any mutate operation will still trigger the cache's onMutate handler
    // and attempt to invalidate any cached queries that involved the affected tables
    await db.insert(users).value({ email: "[email protected]" });

To make this query read from the cache, call `.$withCache()`

    const res = await db.select().from(users).$withCache();

`.$withCache` has a set of options you can use to manage and configure this specific query strategy

    // rewrite the config for this specific query
    .$withCache({ config: {} })
    
    // give this query a custom cache key (instead of hashing query+params under the hood)
    .$withCache({ tag: 'custom_key' })
    
    // turn off auto-invalidation for this query
    // note: this leads to eventual consistency (explained below)
    .$withCache({ autoInvalidate: false })

**Eventual consistency example**

This example is only relevant if you manually set `autoInvalidate: false`. By default, `autoInvalidate` is enabled.

You might want to turn off `autoInvalidate` if:

*   your data doesn’t change often, and slight staleness is acceptable (e.g. product listings, blog posts)
*   you handle cache invalidation manually

In those cases, turning it off can reduce unnecessary cache invalidation. However, in most cases, we recommend keeping the default enabled.

Example: Imagine you cache the following query on `usersTable` with a 3-second TTL:

    const recent = await db
      .select().from(usersTable)
      .$withCache({ config: { ex: 3 }, autoInvalidate: false });

If someone runs `db.insert(usersTable)...` the cache won’t be invalidated immediately. For up to 3 seconds, you’ll keep seeing the old data until it eventually becomes consistent.

**Case 2: Drizzle with `global: true` option**

    import { upstashCache } from "drizzle-orm/cache/upstash";
    import { drizzle } from "drizzle-orm/...";
    
    const db = drizzle(process.env.DB_URL!, {
      cache: upstashCache({ url: "", token: "", global: true }),
    });

In this case, the following query will read from cache

    const res = await db.select().from(users);

If you want to disable cache for this specific query, call `.$withCache(false)`

    // disable cache for this query
    const res = await db.select().from(users).$withCache(false);

You can also use cache instance from a `db` to invalidate specific tables or tags

    // Invalidate all queries that use the `users` table. You can do this with the Drizzle instance.
    await db.$cache.invalidate({ tables: users });
    // or
    await db.$cache.invalidate({ tables: [users, posts] });
    
    // Invalidate all queries that use the `usersTable`. You can do this by using just the table name.
    await db.$cache.invalidate({ tables: "usersTable" });
    // or
    await db.$cache.invalidate({ tables: ["usersTable", "postsTable"] });
    
    // You can also invalidate custom tags defined in any previously executed select queries.
    await db.$cache.invalidate({ tags: "custom_key" });
    // or
    await db.$cache.invalidate({ tags: ["custom_key", "custom_key1"] });

Custom cache[](#custom-cache)
-----------------------------

This example shows how to plug in a custom `cache` in Drizzle: you provide functions to fetch data from the cache, store results back into cache, and invalidate entries whenever a mutation runs.

Cache extension provides this set of config options

    export type CacheConfig = {
      /** expire time, in seconds */
      ex?: number;
      /** expire time, in milliseconds */
      px?: number;
      /** Unix time (sec) at which the key will expire */
      exat?: number;
      /** Unix time (ms) at which the key will expire */
      pxat?: number;
      /** retain existing TTL when updating a key */
      keepTtl?: boolean;
      /** options for HEXPIRE (hash-field TTL) */
      hexOptions?: 'NX' | 'XX' | 'GT' | 'LT' | 'nx' | 'xx' | 'gt' | 'lt';
    };

    const db = drizzle(process.env.DB_URL!, { cache: new TestGlobalCache() });

    import Keyv from "keyv";
    
    export class TestGlobalCache extends Cache {
      private globalTtl: number = 1000;
      // This object will be used to store which query keys were used
      // for a specific table, so we can later use it for invalidation.
      private usedTablesPerKey: Record<string, string[]> = {};
    
      constructor(private kv: Keyv = new Keyv()) {
        super();
      }
    
      // For the strategy, we have two options:
      // - 'explicit': The cache is used only when .$withCache() is added to a query.
      // - 'all': All queries are cached globally.
      // The default behavior is 'explicit'.
      override strategy(): "explicit" | "all" {
        return "all";
      }
    
      // This function accepts query and parameters that cached into key param,
      // allowing you to retrieve response values for this query from the cache.
      override async get(key: string): Promise<any[] | undefined> {
        const res = (await this.kv.get(key)) ?? undefined;
        return res;
      }
    
      // This function accepts several options to define how cached data will be stored:
      // - 'key': A hashed query and parameters.
      // - 'response': An array of values returned by Drizzle from the database.
      // - 'tables': An array of tables involved in the select queries. This information is needed for cache invalidation.
      //
      // For example, if a query uses the "users" and "posts" tables, you can store this information. Later, when the app executes
      // any mutation statements on these tables, you can remove the corresponding key from the cache.
      // If you're okay with eventual consistency for your queries, you can skip this option.
      override async put(
        key: string,
        response: any,
        tables: string[],
        config?: CacheConfig,
      ): Promise<void> {
        await this.kv.set(key, response, config ? config.ex : this.globalTtl);
        for (const table of tables) {
          const keys = this.usedTablesPerKey[table];
          if (keys === undefined) {
            this.usedTablesPerKey[table] = [key];
          } else {
            keys.push(key);
          }
        }
      }
    
      // This function is called when insert, update, or delete statements are executed.
      // You can either skip this step or invalidate queries that used the affected tables.
      //
      // The function receives an object with two keys:
      // - 'tags': Used for queries labeled with a specific tag, allowing you to invalidate by that tag.
      // - 'tables': The actual tables affected by the insert, update, or delete statements,
      //   helping you track which tables have changed since the last cache update.
      override async onMutate(params: {
        tags: string | string[];
        tables: string | string[] | Table<any> | Table<any>[];
      }): Promise<void> {
        const tagsArray = params.tags
          ? Array.isArray(params.tags)
            ? params.tags
            : [params.tags]
          : [];
        const tablesArray = params.tables
          ? Array.isArray(params.tables)
            ? params.tables
            : [params.tables]
          : [];
    
        const keysToDelete = new Set<string>();
    
        for (const table of tablesArray) {
          const tableName = is(table, Table)
            ? getTableName(table)
            : (table as string);
          const keys = this.usedTablesPerKey[tableName] ?? [];
          for (const key of keys) keysToDelete.add(key);
        }
    
        if (keysToDelete.size > 0 || tagsArray.length > 0) {
          for (const tag of tagsArray) {
            await this.kv.delete(tag);
          }
    
          for (const key of keysToDelete) {
            await this.kv.delete(key);
            for (const table of tablesArray) {
              const tableName = is(table, Table)
                ? getTableName(table)
                : (table as string);
              this.usedTablesPerKey[tableName] = [];
            }
          }
        }
      }
    }

Limitations[](#limitations)
---------------------------

#### Queries that won’t be handled by the `cache` extension:[](#queries-that-wont-be-handled-by-the-cache-extension)

*   Using cache with raw queries, such as:

    db.execute(sql`select 1`);

*   Using cache with `batch` feature in `d1` and `libsql`

    db.batch([
        db.insert(users).values(...),
        db.update(users).set(...).where()
    ])

*   Using cache in transactions

    await db.transaction(async (tx) => {
      await tx.update(accounts).set(...).where(...);
      await tx.update...
    });

#### Limitations that are temporary and will be handled soon:[](#limitations-that-are-temporary-and-will-be-handled-soon)

*   Using cache with Drizzle Relational Queries

    await db.query.users.findMany();

*   Using cache with `better-sqlite3`, `Durable Objects`, `expo sqlite`
*   Using cache with AWS Data API drivers
*   Using cache with views

Dynamic query building
======================

By default, as all the query builders in Drizzle try to conform to SQL as much as possible, you can only invoke most of the methods once. For example, in a `SELECT` statement there might only be one `WHERE` clause, so you can only invoke `.where()` once:

    const query = db
    	.select()
    	.from(users)
    	.where(eq(users.id, 1))
    	.where(eq(users.name, 'John')); // ❌ Type error - where() can only be invoked once

In the previous ORM versions, when such restrictions weren’t implemented, this example in particular was a source of confusion for many users, as they expected the query builder to “merge” multiple `.where()` calls into a single condition.

This behavior is useful for conventional query building, i.e. when you create the whole query at once. However, it becomes a problem when you want to build a query dynamically, i.e. if you have a shared function that takes a query builder and enhances it. To solve this problem, Drizzle provides a special ‘dynamic’ mode for query builders, which removes the restriction of invoking methods only once. To enable it, you need to call `.$dynamic()` on a query builder.

Let’s see how it works by implementing a simple `withPagination` function that adds `LIMIT` and `OFFSET` clauses to a query based on the provided page number and an optional page size:

    function withPagination<T extends PgSelect>(
    	qb: T,
    	page: number = 1,
    	pageSize: number = 10,
    ) {
    	return qb.limit(pageSize).offset((page - 1) * pageSize);
    }
    
    const query = db.select().from(users).where(eq(users.id, 1));
    withPagination(query, 1); // ❌ Type error - the query builder is not in dynamic mode
    
    const dynamicQuery = query.$dynamic();
    withPagination(dynamicQuery, 1); // ✅ OK

Note that the `withPagination` function is generic, which allows you to modify the result type of the query builder inside it, for example by adding a join:

    function withFriends<T extends PgSelect>(qb: T) {
    	return qb.leftJoin(friends, eq(friends.userId, users.id));
    }
    
    let query = db.select().from(users).where(eq(users.id, 1)).$dynamic();
    query = withFriends(query);

This is possible, because `PgSelect` and other similar types are specifically designed to be used in dynamic query building. They can only be used in dynamic mode.

Here is the list of all types that can be used as generic parameters in dynamic query building:

**Dialect**

**Type**

**Query**

**Select**

**Insert**

**Update**

**Delete**

Postgres

`PgSelect`

`PgInsert`

`PgUpdate`

`PgDelete`

`PgSelectQueryBuilder`

MySQL

`MySqlSelect`

`MySqlInsert`

`MySqlUpdate`

`MySqlDelete`

`MySqlSelectQueryBuilder`

SQLite

`SQLiteSelect`

`SQLiteInsert`

`SQLiteUpdate`

`SQLiteDelete`

`SQLiteSelectQueryBuilder`

The `...QueryBuilder` types are for usage with [standalone query builder instances](/docs/goodies#standalone-query-builder). DB query builders are subclasses of them, so you can use them as well.

    	import { QueryBuilder } from 'drizzle-orm/pg-core';
    
    	function withFriends<T extends PgSelectQueryBuilder>(qb: T) {
    		return qb.leftJoin(friends, eq(friends.userId, users.id));
    	}
    
    	const qb = new QueryBuilder();
    	let query = qb.select().from(users).where(eq(users.id, 1)).$dynamic();
    	query = withFriends(query);

Read Replicas
=============

When your project involves a set of read replica instances, and you require a convenient method for managing SELECT queries from read replicas, as well as performing create, delete, and update operations on the primary instance, you can leverage the `withReplicas()` function within Drizzle

PostgreSQL

MySQL

SQLite

SingleStore

    import { sql } from 'drizzle-orm';
    import { drizzle } from 'drizzle-orm/node-postgres';
    import { boolean, jsonb, pgTable, serial, text, timestamp, withReplicas } from 'drizzle-orm/pg-core';
    
    const usersTable = pgTable('users', {
    	id: serial('id' as string).primaryKey(),
    	name: text('name').notNull(),
    	verified: boolean('verified').notNull().default(false),
    	jsonb: jsonb('jsonb').$type<string[]>(),
    	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    });
    
    const primaryDb = drizzle("postgres://user:password@host:port/primary_db");
    const read1 = drizzle("postgres://user:password@host:port/read_replica_1");
    const read2 = drizzle("postgres://user:password@host:port/read_replica_2");
    
    const db = withReplicas(primaryDb, [read1, read2]);

    import { drizzle } from "drizzle-orm/mysql2";
    import mysql from "mysql2/promise";
    import { boolean, mysqlTable, serial, text, withReplicas } from 'drizzle-orm/mysql-core';
    
    const usersTable = mysqlTable('users', {
    	id: serial('id' as string).primaryKey(),
    	name: text('name').notNull(),
    	verified: boolean('verified').notNull().default(false),
    });
    
    const primaryClient = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "primary_db",
    })
    const primaryDb = drizzle({ client: primaryClient });
    
    const read1Client = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "read_1",
    })
    const read1 = drizzle({ client: read1Client });
    
    const read2Client = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "read_2",
    })
    const read2 = drizzle({ client: read2Client });
    
    const db = withReplicas(primaryDb, [read1, read2]);

    import { sql } from 'drizzle-orm';
    import { sqliteTable, int, text, withReplicas } from 'drizzle-orm/sqlite-core';
    import { createClient } from '@libsql/client';
    import { drizzle } from 'drizzle-orm/libsql';
    
    const usersTable = sqliteTable('users', {
    	id: int('id' as string).primaryKey(),
    	name: text('name').notNull(),
    });
    
    const primaryDb = drizzle({ client: createClient({ url: 'DATABASE_URL', authToken: 'DATABASE_AUTH_TOKEN' }) });
    const read1 = drizzle({ client: createClient({ url: 'DATABASE_URL', authToken: 'DATABASE_AUTH_TOKEN' }) });
    const read2 = drizzle({ client: createClient({ url: 'DATABASE_URL', authToken: 'DATABASE_AUTH_TOKEN' }) });
    
    const db = withReplicas(primaryDb, [read1, read2]);

    import { drizzle } from "drizzle-orm/singlestore";
    import mysql from "mysql2/promise";
    import { boolean, singlestoreTable, serial, text, withReplicas } from 'drizzle-orm/singlestore-core';
    
    const usersTable = singlestoreTable('users', {
    	id: serial('id' as string).primaryKey(),
    	name: text('name').notNull(),
    	verified: boolean('verified').notNull().default(false),
    });
    
    const primaryClient = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "primary_db",
    })
    const primaryDb = drizzle({ client: primaryClient });
    
    const read1Client = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "read_1",
    })
    const read1 = drizzle({ client: read1Client });
    
    const read2Client = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "read_2",
    })
    const read2 = drizzle({ client: read2Client });
    
    const db = withReplicas(primaryDb, [read1, read2]);

You can now use the `db` instance the same way you did before. Drizzle will handle the choice between read replica and the primary instance automatically

    // Read from either the read1 connection or the read2 connection
    await db.select().from(usersTable)
    
    // Use the primary database for the delete operation
    await db.delete(usersTable).where(eq(usersTable.id, 1))

You can use the `$primary` key to force using primary instances even for read operations

    // read from primary
    await db.$primary.select().from(usersTable);

With Drizzle, you can also specify custom logic for choosing read replicas. You can make a weighted decision or any other custom selection method for random read replica choice. Here is an implementation example of custom logic for selecting read replicas, where the first replica has a 70% chance of being chosen, and the second replica has a 30% chance of being selected.

Keep in mind that you can implement any type of random selection method for read replicas

    const db = withReplicas(primaryDb, [read1, read2], (replicas) => {
        const weight = [0.7, 0.3];
        let cumulativeProbability = 0;
        const rand = Math.random();
    
        for (const [i, replica] of replicas.entries()) {
          cumulativeProbability += weight[i]!;
          if (rand < cumulativeProbability) return replica;
        }
        return replicas[0]!
    });
    
    await db.select().from(usersTable)

Common way of defining custom types
===================================

Examples[](#examples)
---------------------

The best way to see how `customType` definition is working is to check how existing data types in postgres and mysql could be defined using `customType` function from Drizzle ORM.

Postgres Data Types

MySql Data Types

**Serial**

    import { customType } from 'drizzle-orm/pg-core';
    
    const customSerial = customType<{ data: number; notNull: true; default: true }>(
      {
        dataType() {
          return 'serial';
        },
      },
    );

**Text**

    import { customType } from 'drizzle-orm/pg-core';
    
    const customText = customType<{ data: string }>({
      dataType() {
        return 'text';
      },
    });

**Boolean**

    import { customType } from 'drizzle-orm/pg-core';
    
    const customBoolean = customType<{ data: boolean }>({
      dataType() {
        return 'boolean';
      },
    });

**Jsonb**

    import { customType } from 'drizzle-orm/pg-core';
    
    const customJsonb = <TData>(name: string) =>
      customType<{ data: TData; driverData: string }>({
        dataType() {
          return 'jsonb';
        },
        toDriver(value: TData): string {
          return JSON.stringify(value);
        },
      })(name);

**Timestamp**

    import { customType } from 'drizzle-orm/pg-core';
    
    const customTimestamp = customType<
      {
        data: Date;
        driverData: string;
        config: { withTimezone: boolean; precision?: number };
      }
    >({
      dataType(config) {
        const precision = typeof config.precision !== 'undefined'
          ? ` (${config.precision})`
          : '';
        return `timestamp${precision}${
          config.withTimezone ? ' with time zone' : ''
        }`;
      },
      fromDriver(value: string): Date {
        return new Date(value);
      },
    });

Usage for all types will be same as defined functions in Drizzle ORM. For example:

    const usersTable = pgTable('users', {
      id: customSerial('id').primaryKey(),
      name: customText('name').notNull(),
      verified: customBoolean('verified').notNull().default(false),
      jsonb: customJsonb<string[]>('jsonb'),
      createdAt: customTimestamp('created_at', { withTimezone: true }).notNull()
        .default(sql`now()`),
    });

**Serial**

    import { customType } from 'drizzle-orm/mysql-core';
    
    const customInt = customType<{ data: number; notNull: false; default: false }>(
      {
        dataType() {
          return 'int';
        },
      },
    );

**Text**

    import { customType } from 'drizzle-orm/mysql-core';
    
    const customText = customType<{ data: string }>({
      dataType() {
        return 'text';
      },
    });

**Boolean**

    import { customType } from 'drizzle-orm/mysql-core';
    
    const customBoolean = customType<{ data: boolean }>({
      dataType() {
        return 'boolean';
      },
      fromDriver(value) {
        if (typeof value === 'boolean') {
          return value;
        }
        return value === 1;
      },
    });

**Json**

    import { customType } from 'drizzle-orm/mysql-core';
    
    const customJson = <TData>(name: string) =>
      customType<{ data: TData; driverData: string }>({
        dataType() {
          return 'json';
        },
        toDriver(value: TData): string {
          return JSON.stringify(value);
        },
      })(name);

**Timestamp**

    import { customType } from 'drizzle-orm/mysql-core';
    
    const customTimestamp = customType<
      { data: Date; driverData: string; config: { fsp: number } }
    >({
      dataType(config) {
        const precision = typeof config.fsp !== 'undefined'
          ? ` (${config.fsp})`
          : '';
        return `timestamp${precision}`;
      },
      fromDriver(value: string): Date {
        return new Date(value);
      },
    });

Usage for all types will be same as defined functions in Drizzle ORM. For example:

    const usersTable = mysqlTable('userstest', {
      id: customInt('id').primaryKey(),
      name: customText('name').notNull(),
      verified: customBoolean('verified').notNull().default(false),
      jsonb: customJson<string[]>('jsonb'),
      createdAt: customTimestamp('created_at', { fsp: 2 }).notNull().default(
        sql`now()`,
      ),
    });

TS-doc for type definitions[](#ts-doc-for-type-definitions)
-----------------------------------------------------------

You can check ts-doc for `types` and `param` definition.

    export type CustomTypeValues = {
      /**
       * Required type for custom column, that will infer proper type model
       *
       * Examples:
       *
       * If you want your column to be `string` type after selecting/or on inserting - use `data: string`. Like `text`, `varchar`
       *
       * If you want your column to be `number` type after selecting/or on inserting - use `data: number`. Like `integer`
       */
      data: unknown;
    
      /**
       * Type helper, that represents what type database driver is accepting for specific database data type
       */
      driverData?: unknown;
    
      /**
       * What config type should be used for {@link CustomTypeParams} `dataType` generation
       */
      config?: Record<string, unknown>;
    
      /**
       * If your custom data type should be notNull by default you can use `notNull: true`
       *
       * @example
       * const customSerial = customType<{ data: number, notNull: true, default: true }>({
       *    dataType() {
       *      return 'serial';
       *    },
       * });
       */
      notNull?: boolean;
    
      /**
       * If your custom data type has default you can use `default: true`
       *
       * @example
       * const customSerial = customType<{ data: number, notNull: true, default: true }>({
       *    dataType() {
       *      return 'serial';
       *    },
       * });
       */
      default?: boolean;
    };
    
    export interface CustomTypeParams<T extends CustomTypeValues> {
      /**
       * Database data type string representation, that is used for migrations
       * @example
       * ```
       * `jsonb`, `text`
       * ```
       *
       * If database data type needs additional params you can use them from `config` param
       * @example
       * ```
       * `varchar(256)`, `numeric(2,3)`
       * ```
       *
       * To make `config` be of specific type please use config generic in {@link CustomTypeValues}
       *
       * @example
       * Usage example
       * ```
       *   dataType() {
       *     return 'boolean';
       *   },
       * ```
       * Or
       * ```
       *   dataType(config) {
       *     return typeof config.length !== 'undefined' ? `varchar(${config.length})` : `varchar`;
       *   }
       * ```
       */
      dataType: (config: T['config']) => string;
    
      /**
       * Optional mapping function, between user input and driver
       * @example
       * For example, when using jsonb we need to map JS/TS object to string before writing to database
       * ```
       * toDriver(value: TData): string {
       *   return JSON.stringify(value);
       * }
       * ```
       */
      toDriver?: (value: T['data']) => T['driverData'];
    
      /**
       * Optional mapping function, that is responsible for data mapping from database to JS/TS code
       * @example
       * For example, when using timestamp we need to map string Date representation to JS Date
       * ```
       * fromDriver(value: string): Date {
       *  return new Date(value);
       * },
       * ```
       */
      fromDriver?: (value: T['driverData']) => T['data'];
    }

Type API[](#type-api)
---------------------

To retrieve a type from your table schema for `select` and `insert` queries, you can make use of our type helpers.

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, pgTable } from 'drizzle-orm/pg-core';
    import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'
    
    const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    type SelectUser = typeof users.$inferSelect;
    type InsertUser = typeof users.$inferInsert;
    // or
    type SelectUser = typeof users._.$inferSelect;
    type InsertUser = typeof users._.$inferInsert;
    // or
    type SelectUser = InferSelectModel<typeof users>;
    type InsertUser = InferInsertModel<typeof users>;

    import { int, text, mysqlTable } from 'drizzle-orm/mysql-core';
    import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'
    
    const users = mysqlTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    type SelectUser = typeof users.$inferSelect;
    type InsertUser = typeof users.$inferInsert;
    // or
    type SelectUser = typeof users._.$inferSelect;
    type InsertUser = typeof users._.$inferInsert;
    // or
    type SelectUser = InferSelectModel<typeof users>;
    type InsertUser = InferInsertModel<typeof users>;

    import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core';
    import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'
    
    const users = sqliteTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    type SelectUser = typeof users.$inferSelect;
    type InsertUser = typeof users.$inferInsert;
    // or
    type SelectUser = typeof users._.$inferSelect;
    type InsertUser = typeof users._.$inferInsert;
    // or
    type SelectUser = InferSelectModel<typeof users>;
    type InsertUser = InferInsertModel<typeof users>;

    import { int, text, singlestoreTable } from 'drizzle-orm/singlestore-core';
    import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'
    
    const users = singlestoreTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    type SelectUser = typeof users.$inferSelect;
    type InsertUser = typeof users.$inferInsert;
    // or
    type SelectUser = typeof users._.$inferSelect;
    type InsertUser = typeof users._.$inferInsert;
    // or
    type SelectUser = InferSelectModel<typeof users>;
    type InsertUser = InferInsertModel<typeof users>;

Logging[](#logging)
-------------------

To enable default query logging, just pass `{ logger: true }` to the `drizzle` initialization function:

    import { drizzle } from 'drizzle-orm/...'; // driver specific
    
    const db = drizzle({ logger: true });

You can change the logs destination by creating a `DefaultLogger` instance and providing a custom `writer` to it:

    import { DefaultLogger, LogWriter } from 'drizzle-orm/logger';
    import { drizzle } from 'drizzle-orm/...'; // driver specific
    
    class MyLogWriter implements LogWriter {
      write(message: string) {
        // Write to file, stdout, etc.
      }
    }
    
    const logger = new DefaultLogger({ writer: new MyLogWriter() });
    const db = drizzle({ logger });

You can also create a custom logger:

    import { Logger } from 'drizzle-orm/logger';
    import { drizzle } from 'drizzle-orm/...'; // driver specific
    
    class MyLogger implements Logger {
      logQuery(query: string, params: unknown[]): void {
        console.log({ query, params });
      }
    }
    
    const db = drizzle({ logger: new MyLogger() });

Multi-project schema[](#multi-project-schema)
---------------------------------------------

**Table creator** API lets you define customise table names.  
It’s very useful when you need to keep schemas of different projects in one database.

PostgreSQL

MySQL

SQLite

SingleStore

    import { serial, text, pgTableCreator } from 'drizzle-orm/pg-core';
    
    const pgTable = pgTableCreator((name) => `project1_${name}`);
    
    const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
    });

    import { int, text, mysqlTableCreator } from 'drizzle-orm/mysql-core';
    
    const mysqlTable = mysqlTableCreator((name) => `project1_${name}`);
    
    const users = mysqlTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
    });

    import { int, text, sqliteTableCreator } from 'drizzle-orm/sqlite-core';
    
    const sqliteTable = sqliteTableCreator((name) => `project1_${name}`);
    
    const users = sqliteTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
    });

    import { int, text, singlestoreTableCreator } from 'drizzle-orm/singlestore-core';
    
    const mysqlTable = singlestoreTableCreator((name) => `project1_${name}`);
    
    const users = singlestoreTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
    });

    import { defineConfig } from "drizzle-kit";
    
    export default defineConfig({
      schema: "./src/schema/*",
      out: "./drizzle",
      dialect: "mysql", 
      dbCredentials: {
        url: process.env.DATABASE_URL,
      }
      tablesFilter: ["project1_*"],
    });

You can apply multiple `or` filters:

    tablesFilter: ["project1_*", "project2_*"]

Printing SQL query[](#printing-sql-query)
-----------------------------------------

You can print SQL queries with `db` instance or by using **[`standalone query builder`](#standalone-query-builder)**.

    const query = db
      .select({ id: users.id, name: users.name })
      .from(users)
      .groupBy(users.id)
      .toSQL();
    // query:
    {
      sql: 'select 'id', 'name' from 'users' group by 'users'.'id'',
      params: [],
    }

Raw SQL queries execution[](#raw-sql-queries-execution)
-------------------------------------------------------

If you have some complex queries to execute and `drizzle-orm` can’t handle them yet, you can use the `db.execute` method to execute raw `parametrized` queries.

PostgreSQL

MySQL

SQLite

SingleStore

    const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
    const res: postgres.RowList<Record<string, unknown>[]> = await db.execute(statement)

    import { ..., MySqlQueryResult } from "drizzle-orm/mysql2";
    
    const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
    const res: MySqlRawQueryResult = await db.execute(statement);

    const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
    
    const res: unknown[] = db.all(statement)
    const res: unknown = db.get(statement)
    const res: unknown[][] = db.values(statement)
    const res: Database.RunResult = db.run(statement)

    import { ..., SingleStoreQueryResult } from "drizzle-orm/singlestore";
    
    const statement = sql`select * from ${users} where ${users.id} = ${userId}`;
    const res: SingleStoreRawQueryResult = await db.execute(statement);

Standalone query builder[](#standalone-query-builder)
-----------------------------------------------------

Drizzle ORM provides a standalone query builder that allows you to build queries without creating a database instance and get generated SQL.

PostgreSQL

MySQL

SQLite

SingleStore

    import { QueryBuilder } from 'drizzle-orm/pg-core';
    
    const qb = new QueryBuilder();
    
    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();

    import { QueryBuilder } from 'drizzle-orm/mysql-core';
    
    const qb = new QueryBuilder();
    
    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();

    import { QueryBuilder } from 'drizzle-orm/sqlite-core';
    
    const qb = new QueryBuilder();
    
    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();

    import { QueryBuilder } from 'drizzle-orm/singlestore-core';
    
    const qb = new QueryBuilder();
    
    const query = qb.select().from(users).where(eq(users.name, 'Dan'));
    const { sql, params } = query.toSQL();

Get typed table columns[](#get-typed-table-columns)
---------------------------------------------------

You can get a typed table columns map, very useful when you need to omit certain columns upon selection.

PostgreSQL

MySQL

SQLite

SingleStore

index.ts

schema.ts

    import { getTableColumns } from "drizzle-orm";
    import { user } from "./schema";
    
    const { password, role, ...rest } = getTableColumns(user);
    
    await db.select({ ...rest }).from(users);

    import { serial, text, pgTable } from "drizzle-orm/pg-core";
    
    export const user = pgTable("user", {
      id: serial("id").primaryKey(),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });

index.ts

schema.ts

    import { getTableColumns } from "drizzle-orm";
    import { user } from "./schema";
    
    const { password, role, ...rest } = getTableColumns(user);
    
    await db.select({ ...rest }).from(users);

    import { int, text, mysqlTable } from "drizzle-orm/mysql-core";
    
    export const user = mysqlTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });

index.ts

schema.ts

    import { getTableColumns } from "drizzle-orm";
    import { user } from "./schema";
    
    const { password, role, ...rest } = getTableColumns(user);
    
    await db.select({ ...rest }).from(users);

    import { integer, text, sqliteView } from "drizzle-orm/sqlite-core";
    
    export const user = pgTable("user", {
      id: integer("id").primaryKey({ autoIncrement: true }),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });

index.ts

schema.ts

    import { getTableColumns } from "drizzle-orm";
    import { user } from "./schema";
    
    const { password, role, ...rest } = getTableColumns(user);
    
    await db.select({ ...rest }).from(users);

    import { int, text, mysqlTable } from "drizzle-orm/singlestore-core";
    
    export const user = singlestoreTable("user", {
      id: int("id").primaryKey().autoincrement(),
      name: text("name"),
      email: text("email"),
      password: text("password"),
      role: text("role").$type<"admin" | "customer">(),
    });

Get table information[](#get-table-information)
-----------------------------------------------

PostgreSQL

MySQL

SQLite

SingleStore

    import { getTableConfig, pgTable } from 'drizzle-orm/pg-core';
    
    export const table = pgTable(...);
    
    const {
      columns,
      indexes,
      foreignKeys,
      checks,
      primaryKeys,
      name,
      schema,
    } = getTableConfig(table);

    import { getTableConfig, mysqlTable } from 'drizzle-orm/mysql-core';
    
    export const table = mysqlTable(...);
    
    const {
      columns,
      indexes,
      foreignKeys,
      checks,
      primaryKeys,
      name,
      schema,
    } = getTableConfig(table);

    import { getTableConfig, sqliteTable } from 'drizzle-orm/sqlite-core';
    
    export const table = sqliteTable(...);
    
    const {
      columns,
      indexes,
      foreignKeys,
      checks,
      primaryKeys,
      name,
      schema,
    } = getTableConfig(table);

    import { getTableConfig, mysqlTable } from 'drizzle-orm/singlestore-core';
    
    export const table = singlestoreTable(...);
    
    const {
      columns,
      indexes,
      checks,
      primaryKeys,
      name,
      schema,
    } = getTableConfig(table);

Compare objects types (instanceof alternative)[](#compare-objects-types-instanceof-alternative)
-----------------------------------------------------------------------------------------------

You can check if an object is of a specific Drizzle type using the `is()` function. You can use it with any available type in Drizzle.

IMPORTANT

You should always use `is()` instead of `instanceof`

**Few examples**

    import { Column, is } from 'drizzle-orm';
    
    if (is(value, Column)) {
      // value's type is narrowed to Column
    }

### Mock Driver[](#mock-driver)

This API is a successor to an undefined `drizzle({} as any)` API which we’ve used internally in Drizzle tests and rarely recommended to external developers.

We decided to build and expose a proper API, every `drizzle` driver now has `drizzle.mock()`:

    import { drizzle } from "drizzle-orm/node-postgres";
    
    const db = drizzle.mock();

you can provide schema if necessary for types

    import { drizzle } from "drizzle-orm/node-postgres";
    import * as schema from "./schema"
    
    const db = drizzle.mock({ schema });

Drizzle extension for Prisma
============================

If you have an existing project with Prisma and want to try Drizzle or gradually adopt it, you can use our first-class extension that will add Drizzle API to your Prisma client. It will allow you to use Drizzle alongside your Prisma queries reusing your existing DB connection.

How to use[](#how-to-use)
-------------------------

#### Install dependencies[](#install-dependencies)

You need to install Drizzle itself and a generator package that will create Drizzle schema from the Prisma schema.

npm

yarn

pnpm

bun

    npm i drizzle-orm@latest
    npm i -D drizzle-prisma-generator

    yarn add drizzle-orm@latest
    yarn add -D drizzle-prisma-generator

    pnpm add drizzle-orm@latest
    pnpm add -D drizzle-prisma-generator

    bun add drizzle-orm@latest
    bun add -D drizzle-prisma-generator

#### Update your Prisma schema[](#update-your-prisma-schema)

Add Drizzle generator to your Prisma schema. `output` is the path where generated Drizzle schema TS files will be placed.

schema.prisma

    generator client {
      provider = "prisma-client-js"
    }
    
    generator drizzle {
      provider = "drizzle-prisma-generator"
      output   = "./drizzle" // Where to put generated Drizle tables
    }
    
    // Rest of your Prisma schema
    
    datasource db {
      provider = "postgresql"
      url      = env("DB_URL")
    }
    
    model User {
      id    Int     @id @default(autoincrement())
      email String  @unique
      name  String?
    }
    
    ...

#### Generate Drizzle schema[](#generate-drizzle-schema)

    prisma generate

#### Add Drizzle extension to your Prisma client[](#add-drizzle-extension-to-your-prisma-client)

PostgreSQL

MySQL

SQLite

    import { PrismaClient } from '@prisma/client';
    import { drizzle } from 'drizzle-orm/prisma/pg';
    
    const prisma = new PrismaClient().$extends(drizzle());

    import { PrismaClient } from '@prisma/client';
    import { drizzle } from 'drizzle-orm/prisma/mysql';
    
    const prisma = new PrismaClient().$extends(drizzle());

    import { PrismaClient } from '@prisma/client';
    import { drizzle } from 'drizzle-orm/prisma/sqlite';
    
    const prisma = new PrismaClient().$extends(drizzle());

#### Run Drizzle queries via `prisma.$drizzle` ✨[](#run-drizzle-queries-via-prismadrizzle-)

In order to use Drizzle query builder, you need references to Drizzle tables. You can import them from the output path that you specified in the generator config.

    import { User } from './drizzle';
    
    await prisma.$drizzle.insert().into(User).values({ email: '[email protected]', name: 'Søren' });
    const users = await prisma.$drizzle.select().from(User);

Limitations[](#limitations)
---------------------------

*   [Relational queries](/docs/rqb) are not supported due to a [Prisma driver limitation](https://github.com/prisma/prisma/issues/17576). Because of it, Prisma unable to return query results in array format, which is required for relational queries to work.
*   In SQLite, `.values()` (e.g. `await db.select().from(table).values()`) is not supported, because of the same reason as above.
*   [Prepared statements](/docs/perf-queries#prepared-statement) support is limited - `.prepare()` will only build the SQL query on Drizzle side, because there is no Prisma API for prepared queries.

ESLint Drizzle Plugin
=====================

For cases where it’s impossible to perform type checks for specific scenarios, or where it’s possible but error messages would be challenging to understand, we’ve decided to create an ESLint package with recommended rules. This package aims to assist developers in handling crucial scenarios during development

Install[](#install)
-------------------

npm

yarn

pnpm

bun

    npm i eslint-plugin-drizzle
    npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser

    yarn add eslint-plugin-drizzle
    yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser

    pnpm add eslint-plugin-drizzle
    pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser

    bun add eslint-plugin-drizzle
    bun add @typescript-eslint/eslint-plugin @typescript-eslint/parser

Usage[](#usage)
---------------

**`.eslintrc.yml` example**

    root: true
    parser: '@typescript-eslint/parser'
    parserOptions:
      project: './tsconfig.json'
    plugins:
      - drizzle
    rules:
      'drizzle/enforce-delete-with-where': "error"
      'drizzle/enforce-update-with-where': "error"

**All config**

This plugin exports an `all` that makes use of all rules (except for deprecated ones).

    root: true
    extends:
      - "plugin:drizzle/all"
    parser: '@typescript-eslint/parser'
    parserOptions:
      project: './tsconfig.json'
    plugins:
      - drizzle

**Recommended config**

At the moment, `all` is equivalent to `recommended`

    root: true
    extends:
      - "plugin:drizzle/recommended"
    parser: '@typescript-eslint/parser'
    parserOptions:
      project: './tsconfig.json'
    plugins:
      - drizzle

Rules[](#rules)
---------------

### **enforce-delete-with-where**[](#enforce-delete-with-where)

Enforce using `delete` with the`.where()` clause in the `.delete()` statement. Most of the time, you don’t need to delete all rows in the table and require some kind of `WHERE` statements.

Optionally, you can define a `drizzleObjectName` in the plugin options that accept a `string` or `string[]`. This is useful when you have objects or classes with a delete method that’s not from Drizzle. Such a `delete` method will trigger the ESLint rule. To avoid that, you can define the name of the Drizzle object that you use in your codebase (like db) so that the rule would only trigger if the delete method comes from this object:

Example, config 1:

    rules:
      'drizzle/enforce-delete-with-where': "error"

    class MyClass {
      public delete() {
        return {}
      }
    }
    
    const myClassObj = new MyClass();
    
    // ---> Will be triggered by ESLint Rule
    myClassObj.delete()
    
    const db = drizzle(...)
    // ---> Will be triggered by ESLint Rule
    db.delete()

Example, config 2:

    rules:
      'drizzle/enforce-delete-with-where':
        - "error"
        - "drizzleObjectName": 
          - "db"

    class MyClass {
      public delete() {
        return {}
      }
    }
    
    const myClassObj = new MyClass();
    
    // ---> Will NOT be triggered by ESLint Rule
    myClassObj.delete()
    
    const db = drizzle(...)
    // ---> Will be triggered by ESLint Rule
    db.delete()

### **enforce-update-with-where**:[](#enforce-update-with-where)

Enforce using `update` with the`.where()` clause in the `.update()` statement. Most of the time, you don’t need to update all rows in the table and require some kind of `WHERE` statements.

Optionally, you can define a `drizzleObjectName` in the plugin options that accept a `string` or `string[]`. This is useful when you have objects or classes with a delete method that’s not from Drizzle. Such as `update` method will trigger the ESLint rule. To avoid that, you can define the name of the Drizzle object that you use in your codebase (like db) so that the rule would only trigger if the delete method comes from this object:

Example, config 1:

    rules:
      'drizzle/enforce-update-with-where': "error"

    class MyClass {
      public update() {
        return {}
      }
    }
    
    const myClassObj = new MyClass();
    
    // ---> Will be triggered by ESLint Rule
    myClassObj.update()
    
    const db = drizzle(...)
    // ---> Will be triggered by ESLint Rule
    db.update()

Example, config 2:

    rules:
      'drizzle/enforce-update-with-where':
        - "error"
        - "drizzleObjectName": 
          - "db"

    class MyClass {
      public update() {
        return {}
      }
    }
    
    const myClassObj = new MyClass();
    
    // ---> Will NOT be triggered by ESLint Rule
    myClassObj.update()
    
    const db = drizzle(...)
    // ---> Will be triggered by ESLint Rule
    db.update()

drizzle-zod
===========

`drizzle-zod` is a plugin for **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)** that allows you to generate **[Zod](https://github.com/colinhacks/zod)** schemas from Drizzle ORM schemas.

### Install the dependencies[](#install-the-dependencies)

npm

yarn

pnpm

bun

    npm i drizzle-zod

    yarn add drizzle-zod

    pnpm add drizzle-zod

    bun add drizzle-zod

IMPORTANT

This documentation is for `[[email protected]](/cdn-cgi/l/email-protection)` and higher

You must also have Drizzle ORM v0.36.0 or greater and Zod v3.0.0 or greater installed.

### Select schema[](#select-schema)

Defines the shape of data queried from the database - can be used to validate API responses.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-zod';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userSelectSchema = createSelectSchema(users);
    
    const rows = await db.select({ id: users.id, name: users.name }).from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = userSelectSchema.parse(rows[0]); // Error: `age` is not returned in the above query
    
    const rows = await db.select().from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = userSelectSchema.parse(rows[0]); // Will parse successfully

Views and enums are also supported.

    import { pgEnum } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-zod';
    
    const roles = pgEnum('roles', ['admin', 'basic']);
    const rolesSchema = createSelectSchema(roles);
    const parsed: 'admin' | 'basic' = rolesSchema.parse(...);
    
    const usersView = pgView('users_view').as((qb) => qb.select().from(users).where(gt(users.age, 18)));
    const usersViewSchema = createSelectSchema(usersView);
    const parsed: { id: number; name: string; age: number } = usersViewSchema.parse(...);

### Insert schema[](#insert-schema)

Defines the shape of data to be inserted into the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createInsertSchema } from 'drizzle-zod';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userInsertSchema = createInsertSchema(users);
    
    const user = { name: 'John' };
    const parsed: { name: string, age: number } = userInsertSchema.parse(user); // Error: `age` is not defined
    
    const user = { name: 'Jane', age: 30 };
    const parsed: { name: string, age: number } = userInsertSchema.parse(user); // Will parse successfully
    await db.insert(users).values(parsed);

### Update schema[](#update-schema)

Defines the shape of data to be updated in the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createUpdateSchema } from 'drizzle-zod';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userUpdateSchema = createUpdateSchema(users);
    
    const user = { id: 5, name: 'John' };
    const parsed: { name?: string | undefined, age?: number | undefined } = userUpdateSchema.parse(user); // Error: `id` is a generated column, it can't be updated
    
    const user = { age: 35 };
    const parsed: { name?: string | undefined, age?: number | undefined } = userUpdateSchema.parse(user); // Will parse successfully
    await db.update(users).set(parsed).where(eq(users.name, 'Jane'));

### Refinements[](#refinements)

Each create schema function accepts an additional optional parameter that you can used to extend, modify or completely overwite a field’s schema. Defining a callback function will extend or modify while providing a Zod schema will overwrite it.

    import { pgTable, text, integer, json } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-zod';
    import { z } from 'zod';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      bio: text(),
      preferences: json()
    });
    
    const userSelectSchema = createSelectSchema(users, {
      name: (schema) => schema.max(20), // Extends schema
      bio: (schema) => schema.max(1000), // Extends schema before becoming nullable/optional
      preferences: z.object({ theme: z.string() }) // Overwrites the field, including its nullability
    });
    
    const parsed: {
      id: number;
      name: string,
      bio?: string | undefined;
      preferences: {
        theme: string;
      };
    } = userSelectSchema.parse(...);

### Factory functions[](#factory-functions)

For more advanced use cases, you can use the `createSchemaFactory` function.

**Use case: Using an extended Zod instance**

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createSchemaFactory } from 'drizzle-zod';
    import { z } from '@hono/zod-openapi'; // Extended Zod instance
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const { createInsertSchema } = createSchemaFactory({ zodInstance: z });
    
    const userInsertSchema = createInsertSchema(users, {
      // We can now use the extended instance
      name: (schema) => schema.openapi({ example: 'John' })
    });

**Use case: Type coercion**

    import { pgTable, timestamp } from 'drizzle-orm/pg-core';
    import { createSchemaFactory } from 'drizzle-zod';
    import { z } from 'zod';
    
    const users = pgTable('users', {
      ...,
      createdAt: timestamp().notNull()
    });
    
    const { createInsertSchema } = createSchemaFactory({
      // This configuration will only coerce dates. Set `coerce` to `true` to coerce all data types or specify others
      coerce: {
        date: true
      }
    });
    
    const userInsertSchema = createInsertSchema(users);
    // The above is the same as this:
    const userInsertSchema = z.object({
      ...,
      createdAt: z.coerce.date()
    });

### Data type reference[](#data-type-reference)

    pg.boolean();
    
    mysql.boolean();
    
    sqlite.integer({ mode: 'boolean' });
    
    // Schema
    z.boolean();

    pg.date({ mode: 'date' });
    pg.timestamp({ mode: 'date' });
    
    mysql.date({ mode: 'date' });
    mysql.datetime({ mode: 'date' });
    mysql.timestamp({ mode: 'date' });
    
    sqlite.integer({ mode: 'timestamp' });
    sqlite.integer({ mode: 'timestamp_ms' });
    
    // Schema
    z.date();

    pg.date({ mode: 'string' });
    pg.timestamp({ mode: 'string' });
    pg.cidr();
    pg.inet();
    pg.interval();
    pg.macaddr();
    pg.macaddr8();
    pg.numeric();
    pg.text();
    pg.sparsevec();
    pg.time();
    
    mysql.binary();
    mysql.date({ mode: 'string' });
    mysql.datetime({ mode: 'string' });
    mysql.decimal();
    mysql.time();
    mysql.timestamp({ mode: 'string' });
    mysql.varbinary();
    
    sqlite.numeric();
    sqlite.text({ mode: 'text' });
    
    // Schema
    z.string();

    pg.bit({ dimensions: ... });
    
    // Schema
    z.string().regex(/^[01]+$/).max(dimensions);

    pg.uuid();
    
    // Schema
    z.string().uuid();

    pg.char({ length: ... });
    
    mysql.char({ length: ... });
    
    // Schema
    z.string().length(length);

    pg.varchar({ length: ... });
    
    mysql.varchar({ length: ... });
    
    sqlite.text({ mode: 'text', length: ... });
    
    // Schema
    z.string().max(length);

    mysql.tinytext();
    
    // Schema
    z.string().max(255); // unsigned 8-bit integer limit

    mysql.text();
    
    // Schema
    z.string().max(65_535); // unsigned 16-bit integer limit

    mysql.mediumtext();
    
    // Schema
    z.string().max(16_777_215); // unsigned 24-bit integer limit

    mysql.longtext();
    
    // Schema
    z.string().max(4_294_967_295); // unsigned 32-bit integer limit

    pg.text({ enum: ... });
    pg.char({ enum: ... });
    pg.varchar({ enum: ... });
    
    mysql.tinytext({ enum: ... });
    mysql.mediumtext({ enum: ... });
    mysql.text({ enum: ... });
    mysql.longtext({ enum: ... });
    mysql.char({ enum: ... });
    mysql.varchar({ enum: ... });
    mysql.mysqlEnum(..., ...);
    
    sqlite.text({ mode: 'text', enum: ... });
    
    // Schema
    z.enum(enum);

    mysql.tinyint();
    
    // Schema
    z.number().min(-128).max(127).int(); // 8-bit integer lower and upper limit

    mysql.tinyint({ unsigned: true });
    
    // Schema
    z.number().min(0).max(255).int(); // unsigned 8-bit integer lower and upper limit

    pg.smallint();
    pg.smallserial();
    
    mysql.smallint();
    
    // Schema
    z.number().min(-32_768).max(32_767).int(); // 16-bit integer lower and upper limit

    mysql.smallint({ unsigned: true });
    
    // Schema
    z.number().min(0).max(65_535).int(); // unsigned 16-bit integer lower and upper limit

    pg.real();
    
    mysql.float();
    
    // Schema
    z.number().min(-8_388_608).max(8_388_607); // 24-bit integer lower and upper limit

    mysql.mediumint();
    
    // Schema
    z.number().min(-8_388_608).max(8_388_607).int(); // 24-bit integer lower and upper limit

    mysql.float({ unsigned: true });
    
    // Schema
    z.number().min(0).max(16_777_215); // unsigned 24-bit integer lower and upper limit

    mysql.mediumint({ unsigned: true });
    
    // Schema
    z.number().min(0).max(16_777_215).int(); // unsigned 24-bit integer lower and upper limit

    pg.integer();
    pg.serial();
    
    mysql.int();
    
    // Schema
    z.number().min(-2_147_483_648).max(2_147_483_647).int(); // 32-bit integer lower and upper limit

    mysql.int({ unsigned: true });
    
    // Schema
    z.number().min(0).max(4_294_967_295).int(); // unsgined 32-bit integer lower and upper limit

    pg.doublePrecision();
    
    mysql.double();
    mysql.real();
    
    sqlite.real();
    
    // Schema
    z.number().min(-140_737_488_355_328).max(140_737_488_355_327); // 48-bit integer lower and upper limit

    mysql.double({ unsigned: true });
    
    // Schema
    z.number().min(0).max(281_474_976_710_655); // unsigned 48-bit integer lower and upper limit

    pg.bigint({ mode: 'number' });
    pg.bigserial({ mode: 'number' });
    
    mysql.bigint({ mode: 'number' });
    mysql.bigserial({ mode: 'number' });
    
    sqlite.integer({ mode: 'number' });
    
    // Schema
    z.number().min(-9_007_199_254_740_991).max(9_007_199_254_740_991).int(); // Javascript min. and max. safe integers

    mysql.serial();
    
    // Schema
    z.number().min(0).max(9_007_199_254_740_991).int(); // Javascript max. safe integer

    pg.bigint({ mode: 'bigint' });
    pg.bigserial({ mode: 'bigint' });
    
    mysql.bigint({ mode: 'bigint' });
    
    sqlite.blob({ mode: 'bigint' });
    
    // Schema
    z.bigint().min(-9_223_372_036_854_775_808n).max(9_223_372_036_854_775_807n); // 64-bit integer lower and upper limit

    mysql.bigint({ mode: 'bigint', unsigned: true });
    
    // Schema
    z.bigint().min(0).max(18_446_744_073_709_551_615n); // unsigned 64-bit integer lower and upper limit

    mysql.year();
    
    // Schema
    z.number().min(1_901).max(2_155).int();

    pg.geometry({ type: 'point', mode: 'tuple' });
    pg.point({ mode: 'tuple' });
    
    // Schema
    z.tuple([z.number(), z.number()]);

    pg.geometry({ type: 'point', mode: 'xy' });
    pg.point({ mode: 'xy' });
    
    // Schema
    z.object({ x: z.number(), y: z.number() });

    pg.halfvec({ dimensions: ... });
    pg.vector({ dimensions: ... });
    
    // Schema
    z.array(z.number()).length(dimensions);

    pg.line({ mode: 'abc' });
    
    // Schema
    z.object({ a: z.number(), b: z.number(), c: z.number() });

    pg.line({ mode: 'tuple' });
    
    // Schema
    z.tuple([z.number(), z.number(), z.number()]);

    pg.json();
    pg.jsonb();
    
    mysql.json();
    
    sqlite.blob({ mode: 'json' });
    sqlite.text({ mode: 'json' });
    
    // Schema
    z.union([z.union([z.string(), z.number(), z.boolean(), z.null()]), z.record(z.any()), z.array(z.any())]);

    sqlite.blob({ mode: 'buffer' });
    
    // Schema
    z.custom<Buffer>((v) => v instanceof Buffer);

    pg.dataType().array(...);
    
    // Schema
    z.array(baseDataTypeSchema).length(size);

drizzle-typebox
===============

`drizzle-typebox` is a plugin for **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)** that allows you to generate **[Typebox](https://github.com/sinclairzx81/typebox)** schemas from Drizzle ORM schemas.

### Install the dependencies[](#install-the-dependencies)

npm

yarn

pnpm

bun

    npm i drizzle-typebox

    yarn add drizzle-typebox

    pnpm add drizzle-typebox

    bun add drizzle-typebox

IMPORTANT

This documentation is for `[[email protected]](/cdn-cgi/l/email-protection)` and higher

You must also have Drizzle ORM v0.36.0 or greater and Typebox v0.34.8 or greater installed.

### Select schema[](#select-schema)

Defines the shape of data queried from the database - can be used to validate API responses.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-typebox';
    import { Value } from '@sinclair/typebox/value';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userSelectSchema = createSelectSchema(users);
    
    const rows = await db.select({ id: users.id, name: users.name }).from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = Value.Parse(userSelectSchema, rows[0]); // Error: `age` is not returned in the above query
    
    const rows = await db.select().from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = Value.Parse(userSelectSchema, rows[0]); // Will parse successfully

Views and enums are also supported.

    import { pgEnum } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-typebox';
    import { Value } from '@sinclair/typebox/value';
    
    const roles = pgEnum('roles', ['admin', 'basic']);
    const rolesSchema = createSelectSchema(roles);
    const parsed: 'admin' | 'basic' = Value.Parse(rolesSchema, ...);
    
    const usersView = pgView('users_view').as((qb) => qb.select().from(users).where(gt(users.age, 18)));
    const usersViewSchema = createSelectSchema(usersView);
    const parsed: { id: number; name: string; age: number } = Value.Parse(usersViewSchema, ...);

### Insert schema[](#insert-schema)

Defines the shape of data to be inserted into the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createInsertSchema } from 'drizzle-typebox';
    import { Value } from '@sinclair/typebox/value';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userInsertSchema = createInsertSchema(users);
    
    const user = { name: 'John' };
    const parsed: { name: string, age: number } = Value.Parse(userInsertSchema, user); // Error: `age` is not defined
    
    const user = { name: 'Jane', age: 30 };
    const parsed: { name: string, age: number } = Value.Parse(userInsertSchema, user); // Will parse successfully
    await db.insert(users).values(parsed);

### Update schema[](#update-schema)

Defines the shape of data to be updated in the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createUpdateSchema } from 'drizzle-typebox';
    import { Value } from '@sinclair/typebox/value';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userUpdateSchema = createUpdateSchema(users);
    
    const user = { id: 5, name: 'John' };
    const parsed: { name?: string | undefined, age?: number | undefined } = Value.Parse(userUpdateSchema, user); // Error: `id` is a generated column, it can't be updated
    
    const user = { age: 35 };
    const parsed: { name?: string | undefined, age?: number | undefined } = Value.Parse(userUpdateSchema, user); // Will parse successfully
    await db.update(users).set(parsed).where(eq(users.name, 'Jane'));

### Refinements[](#refinements)

Each create schema function accepts an additional optional parameter that you can used to extend, modify or completely overwite a field’s schema. Defining a callback function will extend or modify while providing a Typebox schema will overwrite it.

    import { pgTable, text, integer, json } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-typebox';
    import { Type } from '@sinclair/typebox';
    import { Value } from '@sinclair/typebox/value';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      bio: text(),
      preferences: json()
    });
    
    const userSelectSchema = createSelectSchema(users, {
      name: (schema) => Type.String({ ...schema, maxLength: 20 }), // Extends schema
      bio: (schema) => Type.String({ ...schema, maxLength: 1000 }), // Extends schema before becoming nullable/optional
      preferences: Type.Object({ theme: Type.String() }) // Overwrites the field, including its nullability
    });
    
    const parsed: {
      id: number;
      name: string,
      bio?: string | undefined;
      preferences: {
        theme: string;
      };
    } = Value.Parse(userSelectSchema, ...);

### Factory functions[](#factory-functions)

For more advanced use cases, you can use the `createSchemaFactory` function.

**Use case: Using an extended Typebox instance**

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createSchemaFactory } from 'drizzle-typebox';
    import { t } from 'elysia'; // Extended Typebox instance
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const { createInsertSchema } = createSchemaFactory({ typeboxInstance: t });
    
    const userInsertSchema = createInsertSchema(users, {
      // We can now use the extended instance
      name: (schema) => t.Number({ ...schema }, { error: '`name` must be a string' })
    });

### Data type reference[](#data-type-reference)

    pg.boolean();
    
    mysql.boolean();
    
    sqlite.integer({ mode: 'boolean' });
    
    // Schema
    Type.Boolean();

    pg.date({ mode: 'date' });
    pg.timestamp({ mode: 'date' });
    
    mysql.date({ mode: 'date' });
    mysql.datetime({ mode: 'date' });
    mysql.timestamp({ mode: 'date' });
    
    sqlite.integer({ mode: 'timestamp' });
    sqlite.integer({ mode: 'timestamp_ms' });
    
    // Schema
    Type.Date();

    pg.date({ mode: 'string' });
    pg.timestamp({ mode: 'string' });
    pg.cidr();
    pg.inet();
    pg.interval();
    pg.macaddr();
    pg.macaddr8();
    pg.numeric();
    pg.text();
    pg.sparsevec();
    pg.time();
    
    mysql.binary();
    mysql.date({ mode: 'string' });
    mysql.datetime({ mode: 'string' });
    mysql.decimal();
    mysql.time();
    mysql.timestamp({ mode: 'string' });
    mysql.varbinary();
    
    sqlite.numeric();
    sqlite.text({ mode: 'text' });
    
    // Schema
    Type.String();

    pg.bit({ dimensions: ... });
    
    // Schema
    t.RegExp(/^[01]+$/, { maxLength: dimensions });

    pg.uuid();
    
    // Schema
    Type.String({ format: 'uuid' });

    pg.char({ length: ... });
    
    mysql.char({ length: ... });
    
    // Schema
    Type.String({ minLength: length, maxLength: length });

    pg.varchar({ length: ... });
    
    mysql.varchar({ length: ... });
    
    sqlite.text({ mode: 'text', length: ... });
    
    // Schema
    Type.String({ maxLength: length });

    mysql.tinytext();
    
    // Schema
    Type.String({ maxLength: 255 }); // unsigned 8-bit integer limit

    mysql.text();
    
    // Schema
    Type.String({ maxLength: 65_535 }); // unsigned 16-bit integer limit

    mysql.mediumtext();
    
    // Schema
    Type.String({ maxLength: 16_777_215 }); // unsigned 24-bit integer limit

    mysql.longtext();
    
    // Schema
    Type.String({ maxLength: 4_294_967_295 }); // unsigned 32-bit integer limit

    pg.text({ enum: ... });
    pg.char({ enum: ... });
    pg.varchar({ enum: ... });
    
    mysql.tinytext({ enum: ... });
    mysql.mediumtext({ enum: ... });
    mysql.text({ enum: ... });
    mysql.longtext({ enum: ... });
    mysql.char({ enum: ... });
    mysql.varchar({ enum: ... });
    mysql.mysqlEnum(..., ...);
    
    sqlite.text({ mode: 'text', enum: ... });
    
    // Schema
    Type.Enum(enum);

    mysql.tinyint();
    
    // Schema
    Type.Integer({ minimum: -128, maximum: 127 }); // 8-bit integer lower and upper limit

    mysql.tinyint({ unsigned: true });
    
    // Schema
    Type.Integer({ minimum: 0, maximum: 255 }); // unsigned 8-bit integer lower and upper limit

    pg.smallint();
    pg.smallserial();
    
    mysql.smallint();
    
    // Schema
    Type.Integer({ minimum: -32_768, maximum: 32_767 }); // 16-bit integer lower and upper limit

    mysql.smallint({ unsigned: true });
    
    // Schema
    Type.Integer({ minimum: 0, maximum: 65_535 }); // unsigned 16-bit integer lower and upper limit

    pg.real();
    
    mysql.float();
    
    // Schema
    Type.Number().min(-8_388_608).max(8_388_607); // 24-bit integer lower and upper limit

    mysql.mediumint();
    
    // Schema
    Type.Integer({ minimum: -8_388_608, maximum: 8_388_607 }); // 24-bit integer lower and upper limit

    mysql.float({ unsigned: true });
    
    // Schema
    Type.Number({ minimum: 0, maximum: 16_777_215 }); // unsigned 24-bit integer lower and upper limit

    mysql.mediumint({ unsigned: true });
    
    // Schema
    Type.Integer({ minimum: 0, maximum: 16_777_215 }); // unsigned 24-bit integer lower and upper limit

    pg.integer();
    pg.serial();
    
    mysql.int();
    
    // Schema
    Type.Integer({ minimum: -2_147_483_648, maximum: 2_147_483_647 }); // 32-bit integer lower and upper limit

    mysql.int({ unsigned: true });
    
    // Schema
    Type.Integer({ minimum: 0, maximum: 4_294_967_295 }); // unsgined 32-bit integer lower and upper limit

    pg.doublePrecision();
    
    mysql.double();
    mysql.real();
    
    sqlite.real();
    
    // Schema
    Type.Number({ minimum: -140_737_488_355_328, maximum: 140_737_488_355_327 }); // 48-bit integer lower and upper limit

    mysql.double({ unsigned: true });
    
    // Schema
    Type.Numer({ minimum: 0, maximum: 281_474_976_710_655 }); // unsigned 48-bit integer lower and upper limit

    pg.bigint({ mode: 'number' });
    pg.bigserial({ mode: 'number' });
    
    mysql.bigint({ mode: 'number' });
    mysql.bigserial({ mode: 'number' });
    
    sqlite.integer({ mode: 'number' });
    
    // Schema
    Type.Integer({ minimum: -9_007_199_254_740_991, maximum: 9_007_199_254_740_991 }); // Javascript min. and max. safe integers

    mysql.serial();
    
    Type.Integer({ minimum: 0, maximum: 9_007_199_254_740_991 }); // Javascript max. safe integer

    pg.bigint({ mode: 'bigint' });
    pg.bigserial({ mode: 'bigint' });
    
    mysql.bigint({ mode: 'bigint' });
    
    sqlite.blob({ mode: 'bigint' });
    
    // Schema
    Type.BigInt({ minimum: -9_223_372_036_854_775_808n, maximum: 9_223_372_036_854_775_807n }); // 64-bit integer lower and upper limit

    mysql.bigint({ mode: 'bigint', unsigned: true });
    
    // Schema
    Type.BigInt({ minimum: 0, maximum: 18_446_744_073_709_551_615n }); // unsigned 64-bit integer lower and upper limit

    mysql.year();
    
    // Schema
    Type.Integer({ minimum: 1_901, maximum: 2_155 });

    pg.geometry({ type: 'point', mode: 'tuple' });
    pg.point({ mode: 'tuple' });
    
    // Schema
    Type.Tuple([Type.Number(), Type.Number()]);

    pg.geometry({ type: 'point', mode: 'xy' });
    pg.point({ mode: 'xy' });
    
    // Schema
    Type.Object({ x: Type.Number(), y: Type.Number() });

    pg.halfvec({ dimensions: ... });
    pg.vector({ dimensions: ... });
    
    // Schema
    Type.Array(Type.Number(), { minItems: dimensions, maxItems: dimensions });

    pg.line({ mode: 'abc' });
    
    // Schema
    Type.Object({ a: Type.Number(), b: Type.Number(), c: Type.Number() });

    pg.line({ mode: 'tuple' });
    
    // Schema
    Type.Tuple([Type.Number(), Type.Number(), Type.Number()]);

    pg.json();
    pg.jsonb();
    
    mysql.json();
    
    sqlite.blob({ mode: 'json' });
    sqlite.text({ mode: 'json' });
    
    // Schema
    Type.Recursive((self) => Type.Union([Type.Union([Type.String(), Type.Number(), Type.Boolean(), Type.Null()]), Type.Array(self), Type.Record(Type.String(), self)]));

    sqlite.blob({ mode: 'buffer' });
    
    // Schema
    t.Union([t.Union([t.String(), t.Number(), t.Boolean(), t.Null()]), t.Array(t.Any()), t.Record(t.String(), t.Any())]);

    pg.dataType().array(...);
    
    // Schema
    Type.Array(baseDataTypeSchema, { minItems: size, maxItems: size });

drizzle-valibot
===============

`drizzle-valibot` is a plugin for **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)** that allows you to generate **[Valibot](https://valibot.dev/)** schemas from Drizzle ORM schemas.

### Install the dependencies[](#install-the-dependencies)

npm

yarn

pnpm

bun

    npm i drizzle-valibot

    yarn add drizzle-valibot

    pnpm add drizzle-valibot

    bun add drizzle-valibot

IMPORTANT

This documentation is for `[[email protected]](/cdn-cgi/l/email-protection)` and higher

You must also have Drizzle ORM v0.36.0 or greater and Valibot v1.0.0-beta.7 or greater installed.

### Select schema[](#select-schema)

Defines the shape of data queried from the database - can be used to validate API responses.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-valibot';
    import { parse } from 'valibot';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userSelectSchema = createSelectSchema(users);
    
    const rows = await db.select({ id: users.id, name: users.name }).from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = parse(userSelectSchema, rows[0]); // Error: `age` is not returned in the above query
    
    const rows = await db.select().from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = parse(userSelectSchema, rows[0]); // Will parse successfully

Views and enums are also supported.

    import { pgEnum } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-valibot';
    import { parse } from 'valibot';
    
    const roles = pgEnum('roles', ['admin', 'basic']);
    const rolesSchema = createSelectSchema(roles);
    const parsed: 'admin' | 'basic' = parse(rolesSchema, ...);
    
    const usersView = pgView('users_view').as((qb) => qb.select().from(users).where(gt(users.age, 18)));
    const usersViewSchema = createSelectSchema(usersView);
    const parsed: { id: number; name: string; age: number } = parse(usersViewSchema, ...);

### Insert schema[](#insert-schema)

Defines the shape of data to be inserted into the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createInsertSchema } from 'drizzle-valibot';
    import { parse } from 'valibot';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userInsertSchema = createInsertSchema(users);
    
    const user = { name: 'John' };
    const parsed: { name: string, age: number } = parse(userInsertSchema, user); // Error: `age` is not defined
    
    const user = { name: 'Jane', age: 30 };
    const parsed: { name: string, age: number } = parse(userInsertSchema, user); // Will parse successfully
    await db.insert(users).values(parsed);

### Update schema[](#update-schema)

Defines the shape of data to be updated in the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createUpdateSchema } from 'drizzle-valibot';
    import { parse } from 'valibot';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userUpdateSchema = createUpdateSchema(users);
    
    const user = { id: 5, name: 'John' };
    const parsed: { name?: string | undefined, age?: number | undefined } = parse(userUpdateSchema, user); // Error: `id` is a generated column, it can't be updated
    
    const user = { age: 35 };
    const parsed: { name?: string | undefined, age?: number | undefined } = parse(userUpdateSchema, user); // Will parse successfully
    await db.update(users).set(parsed).where(eq(users.name, 'Jane'));

### Refinements[](#refinements)

Each create schema function accepts an additional optional parameter that you can used to extend, modify or completely overwite a field’s schema. Defining a callback function will extend or modify while providing a Valibot schema will overwrite it.

    import { pgTable, text, integer, json } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-valibot';
    import { parse, pipe, maxLength, object, string } from 'valibot';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      bio: text(),
      preferences: json()
    });
    
    const userSelectSchema = createSelectSchema(users, {
      name: (schema) => pipe(schema, maxLength(20)), // Extends schema
      bio: (schema) => pipe(schema, maxLength(1000)), // Extends schema before becoming nullable/optional
      preferences: object({ theme: string() }) // Overwrites the field, including its nullability
    });
    
    const parsed: {
      id: number;
      name: string,
      bio?: string | undefined;
      preferences: {
        theme: string;
      };
    } = parse(userSelectSchema, ...);

### Data type reference[](#data-type-reference)

    pg.boolean();
    
    mysql.boolean();
    
    sqlite.integer({ mode: 'boolean' });
    
    // Schema
    boolean();

    pg.date({ mode: 'date' });
    pg.timestamp({ mode: 'date' });
    
    mysql.date({ mode: 'date' });
    mysql.datetime({ mode: 'date' });
    mysql.timestamp({ mode: 'date' });
    
    sqlite.integer({ mode: 'timestamp' });
    sqlite.integer({ mode: 'timestamp_ms' });
    
    // Schema
    date();

    pg.date({ mode: 'string' });
    pg.timestamp({ mode: 'string' });
    pg.cidr();
    pg.inet();
    pg.interval();
    pg.macaddr();
    pg.macaddr8();
    pg.numeric();
    pg.text();
    pg.sparsevec();
    pg.time();
    
    mysql.binary();
    mysql.date({ mode: 'string' });
    mysql.datetime({ mode: 'string' });
    mysql.decimal();
    mysql.time();
    mysql.timestamp({ mode: 'string' });
    mysql.varbinary();
    
    sqlite.numeric();
    sqlite.text({ mode: 'text' });
    
    // Schema
    string();

    pg.bit({ dimensions: ... });
    
    // Schema
    pipe(string(), regex(/^[01]+$/), maxLength(dimensions));

    pg.uuid();
    
    // Schema
    pipe(string(), uuid());

    pg.char({ length: ... });
    
    mysql.char({ length: ... });
    
    // Schema
    pipe(string(), length(length));

    pg.varchar({ length: ... });
    
    mysql.varchar({ length: ... });
    
    sqlite.text({ mode: 'text', length: ... });
    
    // Schema
    pipe(string(), maxLength(length));

    mysql.tinytext();
    
    // Schema
    pipe(string(), maxLength(255)); // unsigned 8-bit integer limit

    mysql.text();
    
    // Schema
    pipe(string(), maxLength(65_535)); // unsigned 16-bit integer limit

    mysql.mediumtext();
    
    // Schema
    pipe(string(), maxLength(16_777_215)); // unsigned 24-bit integer limit

    mysql.longtext();
    
    // Schema
    pipe(string(), maxLength(4_294_967_295)); // unsigned 32-bit integer limit

    pg.text({ enum: ... });
    pg.char({ enum: ... });
    pg.varchar({ enum: ... });
    
    mysql.tinytext({ enum: ... });
    mysql.mediumtext({ enum: ... });
    mysql.text({ enum: ... });
    mysql.longtext({ enum: ... });
    mysql.char({ enum: ... });
    mysql.varchar({ enum: ... });
    mysql.mysqlEnum(..., ...);
    
    sqlite.text({ mode: 'text', enum: ... });
    
    // Schema
    enum(enum);

    mysql.tinyint();
    
    // Schema
    pipe(number(), minValue(-128), maxValue(127), integer()); // 8-bit integer lower and upper limit

    mysql.tinyint({ unsigned: true });
    
    // Schema
    pipe(number(), minValue(0), maxValue(255), integer()); // unsigned 8-bit integer lower and upper limit

    pg.smallint();
    pg.smallserial();
    
    mysql.smallint();
    
    // Schema
    pipe(number(), minValue(-32_768), maxValue(32_767), integer()); // 16-bit integer lower and upper limit

    mysql.smallint({ unsigned: true });
    
    // Schema
    pipe(number(), minValue(0), maxValue(65_535), integer()); // unsigned 16-bit integer lower and upper limit

    pg.real();
    
    mysql.float();
    
    // Schema
    pipe(number(), minValue(-8_388_608), maxValue(8_388_607)); // 24-bit integer lower and upper limit

    mysql.mediumint();
    
    // Schema
    pipe(number(), minValue(-8_388_608), maxValue(8_388_607), integer()); // 24-bit integer lower and upper limit

    mysql.float({ unsigned: true });
    
    // Schema
    pipe(number(), minValue(0), maxValue(16_777_215)); // unsigned 24-bit integer lower and upper limit

    mysql.mediumint({ unsigned: true });
    
    // Schema
    pipe(number(), minValue(0), maxValue(16_777_215), integer()); // unsigned 24-bit integer lower and upper limit

    pg.integer();
    pg.serial();
    
    mysql.int();
    
    // Schema
    pipe(number(), minValue(-2_147_483_648), maxValue(2_147_483_647), integer()); // 32-bit integer lower and upper limit

    mysql.int({ unsigned: true });
    
    // Schema
    pipe(number(), minValue(0), maxValue(4_294_967_295), integer()); // unsgined 32-bit integer lower and upper limit

    pg.doublePrecision();
    
    mysql.double();
    mysql.real();
    
    sqlite.real();
    
    // Schema
    pipe(number(), minValue(-140_737_488_355_328), maxValue(140_737_488_355_327)); // 48-bit integer lower and upper limit

    mysql.double({ unsigned: true });
    
    // Schema
    pipe(number(), minValue(0), maxValue(281_474_976_710_655)); // unsigned 48-bit integer lower and upper limit

    pg.bigint({ mode: 'number' });
    pg.bigserial({ mode: 'number' });
    
    mysql.bigint({ mode: 'number' });
    mysql.bigserial({ mode: 'number' });
    
    sqlite.integer({ mode: 'number' });
    
    // Schema
    pipe(number(), minValue(-9_007_199_254_740_991), maxValue(9_007_199_254_740_991), integer()); // Javascript min. and max. safe integers

    mysql.serial();
    
    // Schema
    pipe(number(), minValue(0), maxValue(9_007_199_254_740_991), integer()); // Javascript max. safe integer

    pg.bigint({ mode: 'bigint' });
    pg.bigserial({ mode: 'bigint' });
    
    mysql.bigint({ mode: 'bigint' });
    
    sqlite.blob({ mode: 'bigint' });
    
    // Schema
    pipe(bigint(), minValue(-9_223_372_036_854_775_808n), maxValue(9_223_372_036_854_775_807n)); // 64-bit integer lower and upper limit

    mysql.bigint({ mode: 'bigint', unsigned: true });
    
    // Schema
    pipe(bigint(), minValue(0n), maxValue(18_446_744_073_709_551_615n)); // unsigned 64-bit integer lower and upper limit

    mysql.year();
    
    // Schema
    pipe(number(), minValue(1_901), maxValue(2_155), integer());

    pg.geometry({ type: 'point', mode: 'tuple' });
    pg.point({ mode: 'tuple' });
    
    // Schema
    tuple([number(), number()]);

    pg.geometry({ type: 'point', mode: 'xy' });
    pg.point({ mode: 'xy' });
    
    // Schema
    object({ x: number(), y: number() });

    pg.halfvec({ dimensions: ... });
    pg.vector({ dimensions: ... });
    
    // Schema
    pipe(array(number()), length(dimensions));

    pg.line({ mode: 'abc' });
    
    // Schema
    object({ a: number(), b: number(), c: number() });

    pg.line({ mode: 'tuple' });
    
    // Schema
    tuple([number(), number(), number()]);

    pg.json();
    pg.jsonb();
    
    mysql.json();
    
    sqlite.blob({ mode: 'json' });
    sqlite.text({ mode: 'json' });
    
    // Schema
    union([union([string(), number(), boolean(), null_()]), array(any()), record(string(), any())]);

    sqlite.blob({ mode: 'buffer' });
    
    // Schema
    custom<Buffer>((v) => v instanceof Buffer);

    pg.dataType().array(...);
    
    // Schema
    pipe(array(baseDataTypeSchema), length(size));

drizzle-arktype
===============

`drizzle-arktype` is a plugin for **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)** that allows you to generate **[Arktype](https://arktype.io/)** schemas from Drizzle ORM schemas.

### Install the dependencies[](#install-the-dependencies)

npm

yarn

pnpm

bun

    npm i drizzle-arktype

    yarn add drizzle-arktype

    pnpm add drizzle-arktype

    bun add drizzle-arktype

IMPORTANT

This documentation is for `[[email protected]](/cdn-cgi/l/email-protection)` and higher

You must also have Drizzle ORM v0.36.0 or greater and Arktype v2.0.0 or greater installed.

### Select schema[](#select-schema)

Defines the shape of data queried from the database - can be used to validate API responses.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-arktype';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userSelectSchema = createSelectSchema(users);
    
    const rows = await db.select({ id: users.id, name: users.name }).from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = userSelectSchema(rows[0]); // Error: `age` is not returned in the above query
    
    const rows = await db.select().from(users).limit(1);
    const parsed: { id: number; name: string; age: number } = userSelectSchema(rows[0]); // Will parse successfully

Views and enums are also supported.

    import { pgEnum } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-arktype';
    
    const roles = pgEnum('roles', ['admin', 'basic']);
    const rolesSchema = createSelectSchema(roles);
    const parsed: 'admin' | 'basic' = rolesSchema(...);
    
    const usersView = pgView('users_view').as((qb) => qb.select().from(users).where(gt(users.age, 18)));
    const usersViewSchema = createSelectSchema(usersView);
    const parsed: { id: number; name: string; age: number } = usersViewSchema(...);

### Insert schema[](#insert-schema)

Defines the shape of data to be inserted into the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createInsertSchema } from 'drizzle-arktype';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userInsertSchema = createInsertSchema(users);
    
    const user = { name: 'John' };
    const parsed: { name: string, age: number } = userInsertSchema(user); // Error: `age` is not defined
    
    const user = { name: 'Jane', age: 30 };
    const parsed: { name: string, age: number } = userInsertSchema(user); // Will parse successfully
    await db.insert(users).values(parsed);

### Update schema[](#update-schema)

Defines the shape of data to be updated in the database - can be used to validate API requests.

    import { pgTable, text, integer } from 'drizzle-orm/pg-core';
    import { createUpdateSchema } from 'drizzle-arktype';
    import { parse } from 'arktype';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      age: integer().notNull()
    });
    
    const userUpdateSchema = createUpdateSchema(users);
    
    const user = { id: 5, name: 'John' };
    const parsed: { name?: string | undefined, age?: number | undefined } = userUpdateSchema(user); // Error: `id` is a generated column, it can't be updated
    
    const user = { age: 35 };
    const parsed: { name?: string | undefined, age?: number | undefined } = userUpdateSchema(user); // Will parse successfully
    await db.update(users).set(parsed).where(eq(users.name, 'Jane'));

### Refinements[](#refinements)

Each create schema function accepts an additional optional parameter that you can used to extend, modify or completely overwite a field’s schema. Defining a callback function will extend or modify while providing a arktype schema will overwrite it.

    import { pgTable, text, integer, json } from 'drizzle-orm/pg-core';
    import { createSelectSchema } from 'drizzle-arktype';
    import { parse, pipe, maxLength, object, string } from 'arktype';
    
    const users = pgTable('users', {
      id: integer().generatedAlwaysAsIdentity().primaryKey(),
      name: text().notNull(),
      bio: text(),
      preferences: json()
    });
    
    const userSelectSchema = createSelectSchema(users, {
      name: (schema) => pipe(schema, maxLength(20)), // Extends schema
      bio: (schema) => pipe(schema, maxLength(1000)), // Extends schema before becoming nullable/optional
      preferences: object({ theme: string() }) // Overwrites the field, including its nullability
    });
    
    const parsed: {
      id: number;
      name: string,
      bio?: string | undefined;
      preferences: {
        theme: string;
      };
    } = userSelectSchema(...);

### Data type reference[](#data-type-reference)

    pg.boolean();
    
    mysql.boolean();
    
    sqlite.integer({ mode: 'boolean' });
    
    // Schema
    type.boolean;

    pg.date({ mode: 'date' });
    pg.timestamp({ mode: 'date' });
    
    mysql.date({ mode: 'date' });
    mysql.datetime({ mode: 'date' });
    mysql.timestamp({ mode: 'date' });
    
    sqlite.integer({ mode: 'timestamp' });
    sqlite.integer({ mode: 'timestamp_ms' });
    
    // Schema
    type.Date;

    pg.date({ mode: 'string' });
    pg.timestamp({ mode: 'string' });
    pg.cidr();
    pg.inet();
    pg.interval();
    pg.macaddr();
    pg.macaddr8();
    pg.numeric();
    pg.text();
    pg.sparsevec();
    pg.time();
    
    mysql.binary();
    mysql.date({ mode: 'string' });
    mysql.datetime({ mode: 'string' });
    mysql.decimal();
    mysql.time();
    mysql.timestamp({ mode: 'string' });
    mysql.varbinary();
    
    sqlite.numeric();
    sqlite.text({ mode: 'text' });
    
    // Schema
    type.string;

    pg.bit({ dimensions: ... });
    
    // Schema
    type(`/^[01]{${column.dimensions}}$/`);

    pg.uuid();
    
    // Schema
    type(/^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu);

    pg.char({ length: ... });
    
    mysql.char({ length: ... });
    
    // Schema
    type.string.exactlyLength(length);

    pg.varchar({ length: ... });
    
    mysql.varchar({ length: ... });
    
    sqlite.text({ mode: 'text', length: ... });
    
    // Schema
    type.string.atMostLength(length);

    mysql.tinytext();
    
    // Schema
    type.string.atMostLength(255); // unsigned 8-bit integer limit

    mysql.text();
    
    // Schema
    type.string.atMostLength(65_535); // unsigned 16-bit integer limit

    mysql.mediumtext();
    
    // Schema
    type.string.atMostLength(16_777_215); // unsigned 24-bit integer limit

    mysql.longtext();
    
    // Schema
    type.string.atMostLength(4_294_967_295); // unsigned 32-bit integer limit

    pg.text({ enum: ... });
    pg.char({ enum: ... });
    pg.varchar({ enum: ... });
    
    mysql.tinytext({ enum: ... });
    mysql.mediumtext({ enum: ... });
    mysql.text({ enum: ... });
    mysql.longtext({ enum: ... });
    mysql.char({ enum: ... });
    mysql.varchar({ enum: ... });
    mysql.mysqlEnum(..., ...);
    
    sqlite.text({ mode: 'text', enum: ... });
    
    // Schema
    type.enumerated(...enum);

    mysql.tinyint();
    
    // Schema
    type.keywords.number.integer.atLeast(-128).atMost(127); // 8-bit integer lower and upper limit

    mysql.tinyint({ unsigned: true });
    
    // Schema
    type.keywords.number.integer.atLeast(0).atMost(255); // unsigned 8-bit integer lower and upper limit

    pg.smallint();
    pg.smallserial();
    
    mysql.smallint();
    
    // Schema
    type.keywords.number.integer.atLeast(-32_768).atMost(32_767); // 16-bit integer lower and upper limit

    mysql.smallint({ unsigned: true });
    
    // Schema
    type.keywords.number.integer.atLeast(0).atMost(65_535); // unsigned 16-bit integer lower and upper limit

    pg.real();
    
    mysql.float();
    
    // Schema
    type.number.atLeast(-8_388_608).atMost(8_388_607); // 24-bit integer lower and upper limit

    mysql.mediumint();
    
    // Schema
    type.keywords.number.integer.atLeast(-8_388_608).atMost(8_388_607); // 24-bit integer lower and upper limit

    mysql.float({ unsigned: true });
    
    // Schema
    type.number.atLeast(0).atMost(16_777_215); // unsigned 24-bit integer lower and upper limit

    mysql.mediumint({ unsigned: true });
    
    // Schema
    type.keywords.number.integer.atLeast(0).atMost(16_777_215); // unsigned 24-bit integer lower and upper limit

    pg.integer();
    pg.serial();
    
    mysql.int();
    
    // Schema
    type.keywords.number.integer.atLeast(-2_147_483_648).atMost(2_147_483_647); // 32-bit integer lower and upper limit

    mysql.int({ unsigned: true });
    
    // Schema
    type.keywords.number.integer.atLeast(0).atMost(4_294_967_295); // unsgined 32-bit integer lower and upper limit

    pg.doublePrecision();
    
    mysql.double();
    mysql.real();
    
    sqlite.real();
    
    // Schema
    type.number.atLeast(-140_737_488_355_328).atMost(140_737_488_355_327); // 48-bit integer lower and upper limit

    mysql.double({ unsigned: true });
    
    // Schema
    type.number.atLeast(0).atMost(281_474_976_710_655); // unsigned 48-bit integer lower and upper limit

    pg.bigint({ mode: 'number' });
    pg.bigserial({ mode: 'number' });
    
    mysql.bigint({ mode: 'number' });
    mysql.bigserial({ mode: 'number' });
    
    sqlite.integer({ mode: 'number' });
    
    // Schema
    type.keywords.number.integer.atLeast(-9_007_199_254_740_991).atMost(9_007_199_254_740_991); // Javascript min. and max. safe integers

    mysql.serial();
    
    // Schema
    type.keywords.number.integer.atLeast(0).atMost(9_007_199_254_740_991); // Javascript max. safe integer

    pg.bigint({ mode: 'bigint' });
    pg.bigserial({ mode: 'bigint' });
    
    mysql.bigint({ mode: 'bigint' });
    
    sqlite.blob({ mode: 'bigint' });
    
    // Schema
    type.bigint.narrow(
      (value, ctx) => value < -9_223_372_036_854_775_808n ? ctx.mustBe('greater than') : value > 9_223_372_036_854_775_807n ? ctx.mustBe('less than') : true
    ); // 64-bit integer lower and upper limit

    mysql.bigint({ mode: 'bigint', unsigned: true });
    
    // Schema
    type.bigint.narrow(
      (value, ctx) => value < 0n ? ctx.mustBe('greater than') : value > 18_446_744_073_709_551_615n ? ctx.mustBe('less than') : true
    ); // unsigned 64-bit integer lower and upper limit

    mysql.year();
    
    // Schema
    type.keywords.number.integer.atLeast(1_901).atMost(2_155);

    pg.geometry({ type: 'point', mode: 'tuple' });
    pg.point({ mode: 'tuple' });
    
    // Schema
    type([type.number, type.number]);

    pg.geometry({ type: 'point', mode: 'xy' });
    pg.point({ mode: 'xy' });
    
    // Schema
    type({ x: type.number, y: type.number });

    pg.halfvec({ dimensions: ... });
    pg.vector({ dimensions: ... });
    
    // Schema
    type.number.array().exactlyLength(dimensions);

    pg.line({ mode: 'abc' });
    
    // Schema
    type({ a: type.number, b: type.number, c: type.number });

    pg.line({ mode: 'tuple' });
    
    // Schema
    type([type.number, type.number, type.number]);

    pg.json();
    pg.jsonb();
    
    mysql.json();
    
    sqlite.blob({ mode: 'json' });
    sqlite.text({ mode: 'json' });
    
    // Schema
    type('string | number | boolean | null').or(type('unknown.any[] | Record<string, unknown.any>'));

    sqlite.blob({ mode: 'buffer' });
    
    // Schema
    type.instanceOf(Buffer);

    pg.dataType().array(...);
    
    // Schema
    baseDataTypeSchema.array().exactlyLength(size);

drizzle-graphql
===============

Create a GraphQL server from a Drizzle schema in one line, and easily enhance it with custom queries and mutations.

Quick start[](#quick-start)
---------------------------

Make sure your `drizzle-orm` version is at least `0.30.9`, and update if needed:

npm

yarn

pnpm

bun

    npm i drizzle-orm@latest

    yarn add drizzle-orm@latest

    pnpm add drizzle-orm@latest

    bun add drizzle-orm@latest

### Apollo Server[](#apollo-server)

npm

yarn

pnpm

bun

    npm i drizzle-graphql @apollo/server graphql

    yarn add drizzle-graphql @apollo/server graphql

    pnpm add drizzle-graphql @apollo/server graphql

    bun add drizzle-graphql @apollo/server graphql

server.ts

schema.ts

    import { buildSchema } from 'drizzle-graphql';
    import { drizzle } from 'drizzle-orm/...';
    import client from './db';
    import { ApolloServer } from '@apollo/server';
    import { startStandaloneServer } from '@apollo/server/standalone';
    
    import * as dbSchema from './schema';
    
    const db = drizzle({ client, schema: dbSchema });
    
    const { schema } = buildSchema(db);
    
    const server = new ApolloServer({ schema });
    const { url } = await startStandaloneServer(server);
    
    console.log(`🚀 Server ready at ${url}`);

    import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    export const usersRelations = relations(users, ({ many }) => ({
      posts: many(posts),
    }));
    
    export const posts = pgTable('posts', {
      id: serial('id').primaryKey(),
      content: text('content').notNull(),
      authorId: integer('author_id').notNull(),
    });
    
    export const postsRelations = relations(posts, ({ one }) => ({
      author: one(users, { fields: [posts.authorId], references: [users.id] }),
    }));

### GraphQL Yoga[](#graphql-yoga)

npm

yarn

pnpm

bun

    npm i drizzle-graphql graphql-yoga graphql

    yarn add drizzle-graphql graphql-yoga graphql

    pnpm add drizzle-graphql graphql-yoga graphql

    bun add drizzle-graphql graphql-yoga graphql

server.ts

schema.ts

    import { buildSchema } from 'drizzle-graphql';
    import { drizzle } from 'drizzle-orm/...';
    import { createYoga } from 'graphql-yoga';
    import { createServer } from 'node:http';
    
    import * as dbSchema from './schema';
    
    const db = drizzle({ schema: dbSchema });
    
    const { schema } = buildSchema(db);
    
    const yoga = createYoga({ schema });
    const server = createServer(yoga);
    
    server.listen(4000, () => {
      console.info('Server is running on http://localhost:4000/graphql');
    });

    import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    export const usersRelations = relations(users, ({ many }) => ({
      posts: many(posts),
    }));
    
    export const posts = pgTable('posts', {
      id: serial('id').primaryKey(),
      content: text('content').notNull(),
      authorId: integer('author_id').notNull(),
    });
    
    export const postsRelations = relations(posts, ({ one }) => ({
      author: one(users, { fields: [posts.authorId], references: [users.id] }),
    }));

Customizing schema[](#customizing-schema)
-----------------------------------------

`buildSchema()` produces schema and types using standard `graphql` SDK, so its output is compatible with any library that supports it.

If you want to customize your schema, you can use `entities` object to build your own new schema:

server.ts

schema.ts

    import { buildSchema } from 'drizzle-graphql';
    import { drizzle } from 'drizzle-orm/...';
    import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } from 'graphql';
    import { createYoga } from 'graphql-yoga';
    import { createServer } from 'node:http';
    
    import * as dbSchema from './schema';
    
    const db = drizzle({ schema: dbSchema });
    
    const { entities } = buildSchema(db);
    
    // You can customize which parts of queries or mutations you want
    const schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: {
          // Select only wanted queries out of all generated
          users: entities.queries.users,
          customer: entities.queries.customersSingle,
    
          // Create a custom one
          customUsers: {
            // You can reuse and customize types from original schema
            type: new GraphQLList(new GraphQLNonNull(entities.types.UsersItem)),
            args: {
              // You can reuse inputs as well
              where: {
                type: entities.inputs.UsersFilters
              },
            },
            resolve: async (source, args, context, info) => {
              // Your custom logic goes here...
              const result = await db.select(schema.users).where()...
    
              return result;
            },
          },
        },
      }),
      // Same rules apply to mutations
      mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: entities.mutations,
      }),
      // In case you need types inside your schema
      types: [...Object.values(entities.types), ...Object.values(entities.inputs)],
    });
    
    const yoga = createYoga({
      schema,
    });
    
    const server = createServer(yoga);
    
    server.listen(4000, () => {
      console.info('Server is running on http://localhost:4000/graphql');
    })

    import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';
    
    export const users = pgTable('users', {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
    });
    
    export const usersRelations = relations(users, ({ many }) => ({
      posts: many(posts),
    }));
    
    export const posts = pgTable('posts', {
      id: serial('id').primaryKey(),
      content: text('content').notNull(),
      authorId: integer('author_id').notNull(),
    });
    
    export const postsRelations = relations(posts, ({ one }) => ({
      author: one(users, { fields: [posts.authorId], references: [users.id] }),
    }));