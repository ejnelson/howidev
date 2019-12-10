# :computer: How I Dev

## About

I was in need of some inspiration one day and thought some of my fellow
developers might be too. You could get inspiration from this project by

1. being able to contribute to an open source project (Pull requests welcome)
2. being able to contribute to the blog (best way to contribute is to actually
   make a pull request with your blog entry, I will take email-entries though as
   well hello@howidev.com)
3. reading the blog posts of other developers

I'm using netlify to deploy to the howidev.com domain from github. Any time the master branch
of this github repo updates, netlify triggers a new build automagically and
deploys to my domain hosted on google domains! (I'm paying 12\$ a year for this
website)

[![Netlify Status](https://api.netlify.com/api/v1/badges/92ca3dfb-e5c1-4715-880f-39ef318821e3/deploy-status)](https://app.netlify.com/sites/howidev/deploys)

Also, my inspiration for starting this was my own lack of inspiration, along with lifehacker.com's ['This is how I work'](https://lifehacker.com/c/how-i-work) series. This idea is almost a direct rip-off of that so check that out too!

I'm stealing much of this readme template from the original gatsby starter
readme that came with the project when i used the gatsby cli tool to start the
project using the
[gatsby starter blog project](https://github.com/gatsbyjs/gatsby-starter-blog#readme)

## 🚀 Quick start

1.  **Fork the repo, then clone to your machine**

    Use Github to fork a version of the repo, then clone that version so you can
    make changes! (TBH I've never done this, I think you fork first, but I am
    not sure)

1.  **Start developing.**

    Navigate into the howidev directory and start it up. (must have ['node'](https://github.com/nvm-sh/nvm) and gatsby-cli ```shell npm install -g gatsby-cli```)

    ```shell
    cd howidev/
    npm i
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    This is a tool you can use to experiment with querying your data. Learn more
    about using this tool in the
    [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `howidev` directory in your code editor of choice and edit
    `src/pages/index.js`. Save your changes and the browser will update in real
    time!

1.  **Contribute to the code or to the blog**

    The code of the site could use a few touch ups or new features I'm sure, so
    if you have an idea, make it known or feel free to code it up yourself! If
    you'd rather just contribute to the blog, feel free to email me at
    erik@ejnelson.com with your interview answers (see the template in the
    repo) Or the better way is to PR your blog entry through github! That way
    you can say you've contributed to open source AND you are a blogger! ✍️

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby
project.

    .
    ├── .cache
    ├── config
    ├── node_modules
    ├── public
    ├── src
    ├── static
    ├── .gitignore
    ├── .eslintrc.json
    ├── .prettier.config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/.cache`**: I have no idea what this is or where it came from

2.  **`/config`**: Where I am keeping config type files, right now just the
    theme (that i'm not really using _yet_ __maybe__)

3.  **`/node_modules`**: This directory contains all of the modules of code that
    your project depends on (npm packages) are automatically installed.

4.  **`/public`**: This directory contains the result of running gatsby build

5.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of your site (what you see in the browser) such as
    your site header or a page template. `src` is a convention for “source
    code”.

6.  **`/static`**: static assets (also, not quite sure)

7.  **`.gitignore`**: This file tells git which files it should not track / not
    maintain a version history for.

8.  **`.eslintrc.json`**: These are editor linting rules to help make sure your
    code doesn't suck

9.  **`prettier.config.js`**: This is a configuration file for
    [Prettier](https://prettier.io/). Prettier is a tool to help keep the
    formatting of your code consistent.

10. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser.

11. **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where you can specify information about your site (metadata)
    like the site title and description, which Gatsby plugins you’d like to
    include, etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).

12. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any).
    These allow customization/extension of default Gatsby settings affecting
    pieces of the site build process.

13. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the
    [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
    (if any). These allow customization of default Gatsby settings affecting
    server-side rendering.

14. **`LICENSE`**: Gatsby is licensed under the MIT license.

15. **`package-lock.json`** (See `package.json` below, first). This is an
    automatically generated file based on the exact versions of your npm
    dependencies that were installed for your project. **(You won’t change this
    file directly).**

16. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how
    npm knows which packages to install for your project.

17. **`README.md`**: A text file containing useful reference information about
    your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives
[on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our
  [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).**
  It starts with zero assumptions about your level of ability and walks through
  every step of the process.

- **To dive straight into code samples, head
  [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check
  out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the
  sidebar.
