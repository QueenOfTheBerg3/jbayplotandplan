# jbayplotandplan
J Bay Plot and Plan - as per D's laptop

Welcome to actual modern web frameworks!

I'd recommend reading up on NextJS (https://nextjs.org/), and working your way down the technology tree.
NextJS is what we call an _opinionated_ framework for creating frontend projects.

By "opinionated" it means that the framework likely has a _best practice_ for doing things like adding pages or content. This you'll mostly learn by reading the docs.

The most important thing to know for now is that this is a standard NPM Ecosystem project. You'll need an up-to-date version of NodeJS and NPM installed on your system.

Once you clone the source directory, you'll be wanting to navigate into it from the terminal and run `npm install` to install all dependencies (Everything in `package.json` under the `dependencies` and `devDependencies` keys).

Running `npm run dev` will start a hot-reload capable development server. This is what you
use while working on changes to the system.

Running `npm run build` will build and export a static site into the `/out` directory. The configuration for the NextJS build tool is in `next.config.json` and should be viewed but not fiddled with unless you understand what you're fiddling with.

Anything in the `/public` directory gets copied into the `/out` directory on deploy. We store the public directory separately because `/out` can get completely cleared out on build. The public directory is where you put assets that don't get changed (i.e.: Fonts, images, external scripts that aren't imported normally, favicons, etc). These will get copied into the route of the `/out` folder as-is.

Following the "ideal" workflow, you should be able to safely make changes to the site without breaking anything!

In theory!

## General Hints for working with NextJS

NextJS, being opinionated, has a mechanism for adding new working parts to the website.

Pages are automatically generated from each file present under the `/pages` directory. The file `_app.tsx` is special (see the NextJS documentation) and is used to preconfigure certain things for each page.

Each page (And page in a subdirectory) will result in a static HTML file in the output. For instance, this project currently outputs three pages in the root: `index.html`, `gallery.html` and `contact.html` corresponding directly to `index.tsx`, `gallery.tsx` and `contact.tsx`.

Components that you use to build your pages (Pages themselves are components, technically, but are the "root" components in this case, only containing other components) are added to the components directory. There's quite a variety of them I made up for this project.

## Warning about PHP Contact Form Shenanigans

This is the only black magic you'll have to deal with for this project, and it's a somewhat reusable bit of black magic too.

Under `/public/api` is the ominous `contact.php` script. It exists because it's the easiest way to implement an email contact form on shared hosting. Shared hosts generally only allow backend scripting via PHP (Because they're running really minimal servers). PHP has a few built-in email functions that are quite useful, if annoying.

The alternative to this would be to use a Microservice (i.e.: MailChimp), but those would have to be paid for and that would involve billing more.

This is slightly complicated by the fact that I had to merge it with some backend checks for Captcha verification (don't want spam bots flooding the site with messages).

You'll have to ask me about this if you need to make any modifications. Definitely ask me about it if you want to use it on another site: There are some changes you'll have to make or you'll end up sending emails to the wrong person or fail all Captchas.
