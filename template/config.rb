activate :livereload

configure :build do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
end

page '/*.json', layout: false
page '/*.txt',  layout: false
page '/*.xml',  layout: false

set :css_dir,    'assets/css'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/img'
set :js_dir,     'assets/js'

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
