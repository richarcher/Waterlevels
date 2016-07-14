source 'https://rubygems.org'

ruby '2.2.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '>= 5.0.0.rc2', '< 5.1'
gem 'pg'
gem 'jbuilder', '~> 2.0'
gem 'active_model_serializers'

group :production do
  gem 'puma'
end

group :development, :test do
  gem 'rails-controller-testing'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'fakeweb'
  gem 'capistrano',         require: false
  gem 'capistrano-rvm',     require: false
  gem 'capistrano-rails',   require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano3-puma',   require: false
  gem 'capistrano-secrets-yml', require: false
end

group :development do
  gem 'spring'
  gem 'annotate', require: false
end
