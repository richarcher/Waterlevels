# Load DSL and Setup Up Stages
require 'capistrano/setup'
require 'capistrano/deploy'

require 'capistrano/secrets_yml'
# removing /rails, but keeping /bundler and /rails/migrations
# because we don't have assets any more
# require 'capistrano/rails'
require 'capistrano/bundler'
require 'capistrano/rails/migrations'
require 'capistrano/bundler'
require 'capistrano/rvm'
require 'capistrano/puma'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }
