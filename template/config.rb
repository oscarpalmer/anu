
# External pipeline for Middleman
activate :external_pipeline,
  name: :gulp,
  command: "./node_modules/gulp/bin/gulp.js #{build? ? 'build --production' : 'watch'}",
  source: '.tmp/gulp',
  latency: 1

# Live reloading of assets (CSS, JS) during development
activate :livereload

# What to do when building
configure :build do
  # Suffixed hashes for assets; useful for caching
  activate :asset_hash
  # Directory indexes for pages (prettier urls); e.g. about.html -> about/index.html
  activate :directory_indexes
  # Compress all files
  activate :gzip
  # Minify HTML
  activate :minify_html
end

# Ignore .keep-files; prevents empty folders in builds
ignore '/**/.keep'
# Ignore Sass-files; Gulp handles the pre-processing
ignore '/**/*.{sass,scss}'

# Ignore layouts for data-files
page '/*.json',   layout: false
page '/*.txt',    layout: false
page '/*.xml',    layout: false
# Ignore a directory index for the error page
page '/404.html', directory_index: false

# Where Middleman will look for assets
set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Tell the Markdown-parser to allow more functionality
set :markdown,
  autolink: true,
  fenced_code_blocks: true,
  footnotes: true,
  highlight: true,
  smartypants: true,
  strikethrough: true,
  tables: true,
  with_toc_data: true

# Set the Markdown engine to Redcarpet
set :markdown_engine, :redcarpet
