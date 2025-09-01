# Gemfile for The Book of Joa GitHub Pages
source "https://rubygems.org"

# Jekyll version compatible with GitHub Pages
gem "jekyll", "~> 4.3.0"

# GitHub Pages gem
gem "github-pages", group: :jekyll_plugins

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock JMESPath to version compatible with the AWS SDK
gem "jmespath", "~> 1.6.1" if RUBY_VERSION < "2.6.0"

# http_parser.rb for faster JSON parsing
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
