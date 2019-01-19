# Anu

A modern &ndash; and somewhat opinionated &ndash; [Middleman](https://middlemanapp.com) template, with an external pipeline handled by [Gulp](https://gulpjs.com). :v:

## Getting started

For now, there's only this:

```bash
# create a new middleman project with
# this template in the folder 'my-folder'

middleman init my-folder -T oscarpalmer/anu
```

Step-by-step instructions are incoming, I promise.

## Included libraries, gems, packages, etc.

The gems and packages listed below are only Anu's direct dependencies, but almost all of them depend on others to make development better and more fun, so thanks to everyone involved! :blush:

### Middleman & Ruby

- [Middleman](https://middlemanapp.com)
  - [LiveReload](https://rubygems.org/gems/middleman-livereload); live reloading of assets
  - [Minify HTML](https://rubygems.org/gems/middleman-minify-html); minifies HTML during build
- [Builder](https://rubygems.org/gems/builder); helpful for creating data files <i>(e.g. XML)</i> on the fly
- [Redcarpet](https://rubygems.org/gems/redcarpet); an extensible Markdown parser

### Gulp & JavaScript

- [Gulp](https://gulpjs.com); my preferred build toolkit
  - [Babel](https://www.npmjs.com/package/gulp-babel); Babel integration for Gulp
  - [Gzip](https://www.npmjs.com/package/gulp-gzip); compresses text files
  - [If](https://www.npmjs.com/package/gulp-if); allows for conditionals within tasks
  - [ImageMin](https://www.npmjs.com/package/gulp-imagemin); compresses images
  - [PurgeCSS](https://www.npmjs.com/package/gulp-purgecss); searches through both HTML and CSS to remove unused selectors
  - [SASS](https://www.npmjs.com/package/gulp-sass); my preferred CSS preprocessor
  - [Size Report](https://www.npmjs.com/package/gulp-sizereport); displays normal and gzipped file sizes
  - [Uglify](https://www.npmjs.com/package/gulp-uglify); minifies javascript
- [Babel](https://babeljs.io); my preferred JavaScript compiler
- [Del](https://www.npmjs.com/package/del); delete files and folders with ease
- [JS-YAML](https://www.npmjs.com/package/js-yaml); transform YAML-content to JSON
- [Pump](https://www.npmjs.com/package/pump); helps with streaming of files, which Gulp does
- [Yargs](https://www.npmjs.com/package/yargs); parses CLI arguments

## The name

In [The Elder Scrolls universe](https://elderscrolls.bethesda.net), [one of its most prominent in-game creation myths](https://en.uesp.net/wiki/Lore:The_Annotated_Anuad) recounts the tale of <i>[Anu](https://en.uesp.net/wiki/Lore:Anu)</i>, and how they in a convoluted fashion became a parent of the habitable world of <i>Creation</i>, before ultimately banishing themselves and their antagonistic sibling to the spaces beyond <i>Time</i>.

So yes, it's a name taken from one of the _creators_ in a creation myth, which I think is appropriate for a web development template. :relaxed:

## To-do

- [x] 🛠 &nbsp;&nbsp;Repo created
- [x] 🤓 &nbsp;&nbsp;A way-too-long explanation for the name
- [x] :books:&nbsp;&nbsp;An actual template
  - [x] :green_book:&nbsp;&nbsp;Basic structure
  - [x] :closed_book:&nbsp;&nbsp;Error document and sitemap
  - [x] :blue_book:&nbsp;&nbsp;External pipeline
  - [x] :orange_book:&nbsp;&nbsp;QoL-additions
- [x] :pencil:&nbsp;&nbsp;Details of what's included
- [ ] :book:&nbsp;&nbsp;Step-by-step instructions

## License

[MIT licensed](LICENSE); use it, change it, break it… have fun! :wink:
