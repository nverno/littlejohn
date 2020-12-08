# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Convert snake case to camel case for the frontend
Jbuilder.key_format camelize: :lower
