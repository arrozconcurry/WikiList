ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "minitest/rails"
require "minitest/reporters"  # for Colorized output

#  For colorful output!
Minitest::Reporters.use!(
  Minitest::Reporters::SpecReporter.new,
  ENV,
  Minitest.backtrace_filter
)

#### COMMENTED OUT FOR CAPSTONE ####
#   # Add Foundation Javascript with Motion-ui this must be run after
#   # rails generate foundation:install, because that command
#   # adds foundation_and_overrides.scss
#   inject_into_file 'app/assets/stylesheets/foundation_and_overrides.scss', after: '// @include motion-ui-animations;' do
#     <<-'RUBY'
#
# @import 'motion-ui/motion-ui';
# @include motion-ui-transitions;
# @include motion-ui-animations;
#### COMMENTED OUT FOR CAPSTONE ####


#### THIS WAS IN .RAILSRC: -d postgresql ####




# To add Capybara feature tests add `gem "minitest-rails-capybara"`
# to the test group in the Gemfile and uncomment the following:
# require "minitest/rails/capybara"

# Uncomment for awesome colorful output
# require "minitest/pride"

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  # Add more helper methods to be used by all tests here...
end
