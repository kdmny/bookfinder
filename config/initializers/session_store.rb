# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_bookfinder_session',
  :secret      => '890ad109e8ff87ff1ee1b688c1bd789c5968f54e93d8b252f30570008b41200af1e97487079b5f2c44ed5c858ca69ed2a905b1f0fd22bc3fdcc8225ceb3e78a9'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
