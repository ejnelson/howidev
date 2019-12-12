# :computer: How I Dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/92ca3dfb-e5c1-4715-880f-39ef318821e3/deploy-status)](https://app.netlify.com/sites/howidev/deploys)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com/)
[![GitHub](https://img.shields.io/github/license/ejnelson/howidev?style=flat-square)](https://github.com/ejnelson/howidev/blob/master/LICENSE)

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


Also, my inspiration for starting this was my own lack of inspiration, along with lifehacker.com's ['This is how I work'](https://lifehacker.com/c/how-i-work) series. This idea is almost a direct rip-off of that so check that out too!

I'm stealing much of this readme template from the original gatsby starter
readme that came with the project when i used the gatsby cli tool to start the
project using the
[gatsby starter blog project](https://github.com/gatsbyjs/gatsby-starter-blog#readme)

## 🎁 Contribute to the code or to the blog

    The code of the site could use a few touch ups or new features I'm sure, so
    if you have an idea, make it known or feel free to code it up yourself! Also check out the [contributing](https://github.com/ejnelson/howidev/blob/master/CONTRIBUTING.md) instructions. If
    you'd rather just contribute to the blog, feel free to email me at
    erik@ejnelson.com with your interview answers (see the template in the
    repo) Or the better way is to PR your blog entry through github! That way
    you can say you've contributed to open source AND you are a blogger! ✍️

## 🚀 Quick start

1.  **Fork the repo, then clone to your machine**

    Use Github to fork a version of the repo, then clone that version so you can
    make changes!

1.  **Start developing.**

    Navigate into the howidev directory and start it up. (must have [node](https://github.com/nvm-sh/nvm) and [gatsby-cli](https://www.npmjs.com/package/gatsby-cli))

    ```shell
    cd howidev/
    npm i
    gatsby develop
    ```

## 🚀 Alternate Quick start

1.  **Fork the repo on CodeSandbox**

    Use the sandbox [here](https://codesandbox.io/s/github/ejnelson/howidev/)  
    
     _this feature is in beta because I have never done this but if you are better than me at codesandbox you sure can!_  

1. **Start developing**

     Once you fork the sandbox there you can make changes and see the result without ever having to run locally!
      
      
## 🏁 Quick Finish

1. **Open a PR**

    Once you are done you can open a PR through github or through codesandbox. I will look over the PR and add you to the contributors using the [All-Contributors bot](https://allcontributors.org/). 




## 🛠 Tooling

- Gatsby stuff bootstrapped using [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)  Included gatsby plug-ins for google-analytics, markdown formating and parsing, SEO, image optimization, typography. Also, comes with Prettier. 
- [Emotion](https://emotion.sh/docs/introduction): using Emotion to get some exposure to these fancy CSS-in-JS libs
- [ESlint](https://eslint.org/): First line of defense against bugs
- [Netlify](https://www.netlify.com/): Any time the master branch
of this github repo updates, netlify triggers a new build automagically and
deploys to my domain hosted on google domains! (I'm paying 12\$ a year for this
website)


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby
project.

    .
    ├── .cache
    ├── config
    ├── content
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
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/.cache`**: I have no idea what this is or where it came from

1.  **`/config`**: Where I am keeping config type files, right now just the
    theme (that i'm not really using _yet_ __maybe__)

1.    **`/content`**: This is where you can add a blog post about you! Easiest way to start is to clone the blog-template folder in the /content/blog folder and rename to firstname-lastname and start blogging!

1.  **`/node_modules`**: This directory contains all of the modules of code that
    your project depends on (npm packages) are automatically installed.

1.  **`/public`**: This directory contains the result of running gatsby build

1.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of your site (what you see in the browser) such as
    your site header or a page template. `src` is a convention for “source
    code”.

1.  **`/static`**: static assets (also, not quite sure)

1.  **`.gitignore`**: This file tells git which files it should not track / not
    maintain a version history for.

1.  **`.eslintrc.json`**: These are editor linting rules to help make sure your
    code doesn't suck

1.  **`prettier.config.js`**: This is a configuration file for
    [Prettier](https://prettier.io/). Prettier is a tool to help keep the
    formatting of your code consistent.

1. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser.

1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where you can specify information about your site (metadata)
    like the site title and description, which Gatsby plugins you’d like to
    include, etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).

1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any).
    These allow customization/extension of default Gatsby settings affecting
    pieces of the site build process.

1. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of
    the
    [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
    (if any). These allow customization of default Gatsby settings affecting
    server-side rendering.

1.   **`CONTRIBUTING.md`**: This contains some instructions on how to contribute. 

1. **`LICENSE`**: This project is licensed under the MIT license.

1. **`package-lock.json`** (See `package.json` below, first). This is an
    automatically generated file based on the exact versions of your npm
    dependencies that were installed for your project. **(You won’t change this
    file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how
    npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about
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


[license]: https://github.com/ejnelson/howidev/blob/master/LICENSE
