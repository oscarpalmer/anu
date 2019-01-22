# Anu

Welcome to _Anu_, a modern &ndash; and somewhat opinionated &ndash; [_Middleman_](https://middlemanapp.com) template, with an external pipeline handled by [_Gulp_](https://gulpjs.com). :v:

If you're reading this, you have hopefully set up everything by yourself or with a little help from [the guide](https://github.com/oscarpalmer/anu) on _GitHub_. In any case, let's get started with making awesome websites! :sunglasses:

---

## Directory structure

When you install _Anu_, it will set up a directory _(folder)_ structure as outlined below:

- `my-project` – root directory for your project
  - `source` – directory for all source files
    - `assets` – directory for organising assets
      - `fonts` – custom fonts _(e.g. otf and woff)_
      - `images` – images _(i.e. gif, jpeg, jpg, png, svg)_
      - `javascripts` – _JavaScript_-files _(only .js for now…)_
      - `stylesheets` – _CSS_-files _(i.e. css, sass, scss)_
    - `layouts`
      - Contains all [templates](https://middlemanapp.com/basics/templating-language/) _(i.e. erb, haml, html, markdown, etc.)_…
      - … which can be used for [layouts](https://middlemanapp.com/basics/layouts/)
    - `partials` - [Partial templates](https://middlemanapp.com/basics/partials/) to be included in others

The `source` directory is also the root directory for all your content – e.g. your _HTML_-files – that will be combined together with your templates and other assets during both [development](#local-server-with-middleman) and [production](#building-with-middleman).

## Configuration

The root directory – `my-project` in this example – is also home to many configuration files:

- [`.anu.yml`](.anu.yml)
  - Configuration file for _Anu_
  - Lets you choose a base URL and custom asset directories
- [`config.rb`](config.rb)
  - [_Middleman (and Ruby)_ configuration](https://middlemanapp.com/advanced/configuration/)
  - Allows for enabling, disabling, and extending functionality
- [`gulpfile.js`](gulpfile.js)
  - [Configuration for _Gulp_](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles)
  - Allows for enabling, disabling, and extending functionality

## How to use Middleman

_Middleman_ is run in a _command line interface_ where various commands allow for different actions to be taken with the [source material](source) you can edit, so let's make stuff happen!

### Local server with Middleman

To start a local server with _Middleman_, all we need to do is:

```bash
bundle exec middleman
```

It will also display messages about what it's doing, e.g. what port it's running on and whatever _Gulp_ is doing to help out. And of course, it will make the website available at [http://localhost:4567](http://localhost:4567), so you can do whatever it is you need to do. :blush:

Why `bundle exec`? Because it will run our commands in the context of our bundle, i.e. the `Gemfile` and its specified gems. For more information, there's a [nice explanation](https://bundler.io/v2.0/man/bundle-exec.1.html) by the folks at [_Bundler_](https://bundler.io).

### Building with Middleman

Much like running a local server, building and compiling all of your source code to a nice little website is nice and easy:

```bash
bundle exec middleman build
```

Again, _Middleman_ itself will display nicely formatted messages about what files have been included in the build, while _Gulp_ will display another final message after that, displaying all included text files, along with their normal and compressed file sizes. 🤓

### More Middleman goodness

Those are just two commands – the most important ones, I think – but there are plenty more, along with configurable options for most of them available on [_Middleman's_ website](https://middlemanapp.com), together with in-depth guides and links to other community resources.

## How to use Gulp

Thankfully, _Gulp_ is our _(mostly)_ silent friend who's doing good work in the background while _Middleman_ handles the &ldquo;heavy lifting&rdquo;.

However, _Gulp_ is super-easy to work with and there are tons of good and useful plugins available on [_npm_](https://www.npmjs.com/search?q=keywords:gulpplugin) that should just &ldquo;plug-and-play&rdquo;. If you combine plugins from _npm_, the [current configuration](gulpfile.js), and your know-how, I'm sure you'll make it all much better. :blush:

## What to do if anything breaks?

Good question! :wink:

[DuckDuckGo](https://duckduckgo.com) is your friend; there's a high likelihood that you are not the first to bump into issues and problems with anything code-related, so if you search for whatever error message you receive, I'm certain you will help yourself! :blush:

And if it's difficult or daunting, just [let me know](https://twitter.com/ohpalmer), and I will try to help however I can. :relaxed:
