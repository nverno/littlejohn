require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Littlejohn
  class Application < Rails::Application # rubocop:todo Style/Documentation
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # building assets failing on heroku
    # https://github.com/lautis/uglifier/issues/127#issuecomment-352224986
    config.assets.js_compressor = Uglifier.new(harmony: true)
    # config.assets.js_compressor = :uglifier

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Note: fixed this in lists_controller.rb to default to [] when assets is nil
    # bug httparty converts '[]' to 'nil' on put/patch requests from controller??
    # https://stackoverflow.com/questions/15399423/how-do-i-send-an-empty-array-through-a-put-request-via-httparty
    # config.action_dispatch.perform_deep_munge = false
  end
end
