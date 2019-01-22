# Anu

A modern &ndash; and somewhat opinionated &ndash; [_Middleman_](https://middlemanapp.com) template, with an external pipeline handled by [_Gulp_](https://gulpjs.com). :v:

---

## Table of Contents

- [The name](#the-name)
- [How to get started](#how-to-get-started)
  - [Prerequisites](#prerequisites)
    - [Ruby](#ruby)
      - [Ruby version](#ruby-version)
    - [Node.js](#node)
      - [Node version](#node-version)
  - [Installation](#installation)
  - [Basic usage](#basic-usage)
- [What's included](#whats-included)
  - [Middleman & Ruby](#middleman--ruby)
  - [Gulp & JavaScript](#gulp--javascript)
- [To-do](#to-do)
- [License](#license)

---

## The name

In [The Elder Scrolls universe](https://elderscrolls.bethesda.net), one of its most prominent [in-game creation myths](https://en.uesp.net/wiki/Lore:The_Annotated_Anuad) recounts the tale of _[Anu](https://en.uesp.net/wiki/Lore:Anu)_, and how they in a convoluted fashion became a parent of the habitable world of _Creation_, before ultimately banishing themselves and their antagonistic sibling to the spaces beyond _Time_.

So yes, it's a name taken from one of the _creators_ in a creation myth, which I think is appropriate for a web development template. :relaxed:

## How to get started

_Anu_ is built on top _Middleman_ and _Gulp_, which in turn means it is built on top of _Ruby_ and _Node(.js)_, two popular programming languages and enviroments, so first we need to check if they exist on our system, by running these commands in a _command line interface_.

```banishing
# Check if any Ruby version exists
ruby -v

# Check if any Node version exists
node -v
```

If they are both installed – as in, not giving you a sad error message – then you can safely hop along to [the installation section](#installation). If you did get an error message, you should check out [the prerequisites](#prerequisites) for using _Middleman_ and _Anu_. :blush:

### Prerequisites

Because both [_Ruby_](https://www.ruby-lang.org/en/) and [_Node_](https://nodejs.org/en/) are fairly large programming environments, it might be a good idea to consider using a package manager for them, as well as for many other development libraries and helpers. Regardless of your operating system of choice, I would like to recommend [_Homebrew_](https://brew.sh), which is available for _macOS_ as-is, and for _Linux_ and _Windows_ with [_Linuxbrew_](https://docs.brew.sh/Linuxbrew).

Following the guides on _Homebrew's_ website for either version should lead to it being installed on your system – yay! :beer:

#### Ruby

To install and use _Ruby_ well, we'll need to install two little utilies via _Homebrew_: [`rbenv`](https://github.com/rbenv/rbenv) and [`ruby-build`](https://github.com/rbenv/ruby-build). `rbenv` is a version manager for _Ruby_, which is handy if you need to work within multiple _Ruby_ environments that require different contexts; `ruby-build` is the actual worker of the two and lets us actually download, compile, and then install _Ruby_.

To install these two utilities – and later _Ruby_ itself – we can happily follow [`rbenv's` awesome guide](https://github.com/rbenv/rbenv#installation).

##### Ruby version?

_Anu_ is currently set up to work with version `2.4.3` of _Ruby_, which isn't the newest one, but the latest one that is pre-installed on [_Netlify_](https://www.netlify.com), where I like to host many of my _Middleman_ projects. If you need or want another version, that's totally possible, just remember to edit the contents of the [`.ruby-version` file](template/.ruby-version) to maintain order in your project.

#### Node

Just like with _Ruby_, it's a good idea to use a version manager to handle projects and their contexts differently; _Node's_ manager is called [`nvm`](https://github.com/creationix/nvm), and will let us manage all different versions with ease. [`nvm's` guide](https://github.com/creationix/nvm#installation) is a bit more technical, but shouldn't be a problem for you. :blush:

##### Node version?

Unlike with _Ruby_, _Anu_ does not have any &ldquo;strong&rdquo; opinions on what version of _Node_ you use, but I can personally recommend using the latest and most stable version, which should be the default option with _nvm_.

### Installation

With both _Ruby_ and _Node_ installed, we can finally move on to _Middleman_ and _Anu_. First, we need to install _Middleman_:

```bash
gem install middleman
```

Yes, that's it. With _Middleman_ installed, we can now use _Anu_ as a template:

```bash
# Creates a new Middleman project with
# this template in the folder 'my-project'
middleman init 'my-project' -T oscarpalmer/anu
```

Awesome, now we can make cool websites! :sunglasses:

### Basic usage

Alright, with everything installed, it should be as easy as riding a bike, right? Well, almost… :wink:

There's a [README](template/README.md) included with the tempalte which is full of tips and tricks for getting the most out of _Anu_.

Have fun, and don't hesitate to [reach out](https://twitter.com/ohpalmer) if you run into problems. 🤓

## What's included?

The gems and packages listed below are only _Anu_'s direct dependencies, but almost all of them depend on others to make development better and more fun, so thanks to everyone involved! :blush:

### Middleman & Ruby

- [Middleman](https://middlemanapp.com); my favourite static site generator
  - [LiveReload](https://rubygems.org/gems/middleman-livereload); live reloading of assets
  - [Minify HTML](https://rubygems.org/gems/middleman-minify-html); minifies _HTML_ during build
- [Builder](https://rubygems.org/gems/builder); helpful for creating data files _(e.g. XML)_ on the fly
- [Redcarpet](https://rubygems.org/gems/redcarpet); an extensible _Markdown_ parser

### Gulp & JavaScript

- [Gulp](https://gulpjs.com); my preferred build toolkit
  - [Babel](https://www.npmjs.com/package/gulp-babel); _Babel_ integration for _Gulp_
  - [Gzip](https://www.npmjs.com/package/gulp-gzip); compresses text files
  - [If](https://www.npmjs.com/package/gulp-if); allows for conditionals within tasks
  - [ImageMin](https://www.npmjs.com/package/gulp-imagemin); compresses images
  - [PurgeCSS](https://www.npmjs.com/package/gulp-purgecss); searches through both _HTML_ and _CSS_ to remove unused selectors
  - [SASS](https://www.npmjs.com/package/gulp-sass); my preferred _CSS_ preprocessor
  - [Size Report](https://www.npmjs.com/package/gulp-sizereport); displays normal and gzipped file sizes
  - [Uglify](https://www.npmjs.com/package/gulp-uglify); minifies _JavaScript_
- [Babel](https://babeljs.io); my preferred _JavaScript_ compiler
- [Del](https://www.npmjs.com/package/del); delete files and folders with ease
- [JS-YAML](https://www.npmjs.com/package/js-yaml); transform _YAML_ to _JSON_
- [Pump](https://www.npmjs.com/package/pump); helps with streaming of files, which _Gulp_ does
- [Yargs](https://www.npmjs.com/package/yargs); parses _CLI_ arguments

## To-do

- [x] 🛠 &nbsp;&nbsp;Repo created
- [x] 🤓 &nbsp;&nbsp;A way-too-long explanation for the name
- [x] :books:&nbsp;&nbsp;An actual template
  - [x] :green_book:&nbsp;&nbsp;Basic structure
  - [x] :closed_book:&nbsp;&nbsp;Error document and sitemap
  - [x] :blue_book:&nbsp;&nbsp;External pipeline
  - [x] :orange_book:&nbsp;&nbsp;QoL-additions
- [x] :pencil:&nbsp;&nbsp;Details of what's included
- [x] :book:&nbsp;&nbsp;Step-by-step instructions

## License

[MIT licensed](LICENSE); use it, change it, break it… have fun! :wink:
