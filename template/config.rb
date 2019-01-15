activate :external_pipeline,
  name: :gulp,
  command: "./node_modules/gulp/bin/gulp.js #{build? ? 'build --production' : 'watch'}",
  source: '.tmp/gulp',
  latency: 1

activate :livereload

configure :build do
  activate :asset_hash
  activate :directory_indexes
  activate :gzip
  activate :minify_html
end

ignore '/**/.keep'
ignore '/**/*.{sass,scss}'

page '/*.json',   layout: false
page '/*.txt',    layout: false
page '/*.xml',    layout: false
page '/404.html', directory_index: false

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

set :markdown,
  autolink: true,
  fenced_code_blocks: true,
  footnotes: true,
  highlight: true,
  smartypants: true,
  strikethrough: true,
  tables: true,
  with_toc_data: true

set :markdown_engine, :redcarpet
