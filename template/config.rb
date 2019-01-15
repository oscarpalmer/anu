activate :livereload

configure :build do
  activate :asset_hash
  activate :directory_indexes
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end

ignore '/**/.keep'

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
