solid-meta version: 0.28.1, last updated: 2025-05-21T10:57:52.443Z

[Overview](/#overview)
======================

Solid is a modern JavaScript framework designed to build responsive and high-performing user interfaces (UI). It prioritizes a simple and predictable development experience, making it a great choice for developers of all skill levels.

* * *

[What is Solid?](/#what-is-solid)
---------------------------------

As a JavaScript framework, Solid embraces reactivity and fine-grained updates.

Reactivity, in programming, refers to an applications' ability to respond to changes in data or user interactions.

Traditionally, when a change occurs, the entire web page would need to reload to display the updated information. In contrast, when using a fine-grained reactive system, updates are only applied to the parts of the page that need to be updated.

Solid adopts the concept of fine-grained reactivity, updating only when the data the application depends on changes. This decreases work and can result in faster load times and a smoother user experience overall.

* * *

[Advantages of using Solid](/#advantages-of-using-solid)
--------------------------------------------------------

*   **Performant**: Fine-grained reactivity allows Solid to update only what has changed, resulting in faster load times and smoother performance overall.
    
*   **Powerful**: Using less memory and processing power, Solid is capable of creating complex applications without compromising on functionality. This also gives developers the flexibility over how and when updates happen.
    
*   **Pragmatic**: Rather than sticking to rigid structures or methods, Solid provides the freedom to choose the strategies and practices that work best for you.
    
*   **Productive**: Regardless of experience level, Solid's clear and predictable API makes developers' work simpler and more efficient.
    

Solid aims to strike a balance between speed, efficiency, power, and flexibility, all while providing a developer-friendly environment. This combination of features makes it a great choice to build responsive and high-performing UIs.

* * *

[Quick links](/#quick-links)
----------------------------

[Tutorial](https://www.solidjs.com/tutorial/introduction_basics)

Learn the basics of Solid through this interactive tutorial.

[Templates](https://github.com/solidjs/templates)

Start your first project with a template that fits your needs.

[Ecosystem](https://www.solidjs.com/ecosystem)

Explore the Solid ecosystem and find useful tools and libraries.

[Contribute](https://github.com/solidjs/solid-docs-next)

Help improve Solid by contributing to the documentation.

_Find our API documentation under the **Reference** tab_

Join the [Solid community on Discord](https://discord.com/invite/solidjs) to share your projects or get help from our community!

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/index.mdx) [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes&labels=improve+documentation%2Cpending+review&projects=&template=CONTENT.yml&title=[Content]:&subject=/index.mdx&page=https://docs.solidjs.com/)

[Overview](/solid-router#overview)
==================================

info

The docs are based on latest Solid Router. To use this version, you need to have Solid v1.8.4 or later installed.

Solid Router is the universal router for Solid which works for rendering on the client or the server. It was inspired by and combines paradigms of [React Router](https://reactrouter.com/en/main) and the [Ember Router](https://guides.emberjs.com/release/routing/).

A router provides a way to change a user's view based on the URL in the browser. This allows a "single-page" application to simulate a traditional multipage site. To use Solid Router, components called Routes that depend on the value of the URL (the "path") are specified, and the router handles the mechanism of swapping them in and out.

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

[Overview](/solid-meta#overview)
================================

Solid Meta offers asynchronous SSR-ready Document Head management for Solid Applications, based on [React Head](https://github.com/tizmagik/react-head)

With Solid Meta, you can define `document.head` tags at any level of your component hierarchy. This helps you to manage tags conveniently, especially when contextual information for specific tags are buried deep within your component hierarchy.

This library has no dependencies and is designed to seamlessly integrate with asynchronous rendering.