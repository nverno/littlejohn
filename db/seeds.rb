# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

admin = User.create!(
  first_name: 'admin',
  last_name: 'admin',
  username: 'admin',
  email: 'admin@littlejohnn.io',
  password: 'asdfasdf'
)

# Default user watchlist
first_list = List.create!(
  # user_id: admin.id,
  name: 'My First List',
  public: true
)

%w[AAPL TWTR TSLA NFLX FB MSFT].each do |symbol|
  ListAsset.create!(
    list_id: first_list.id,
    symbol: symbol
  )
end

# Demo user
User.create!(
  first_name: 'guest',
  last_name: 'ipoo',
  username: 'guest',
  email: 'guest@gmail.com',
  password: 'asdfasdf',
  balance: 10_000
)

# Test user
lj = User.create!(
  first_name: 'Little',
  last_name: 'John',
  username: 'lj',
  email: 'test@littlejohn.io',
  password: 'asdfasdf',
  balance: 10_000
)

# Transactions
[
  ['AAPL', 'buy', 2.5, 122.35],
  ['AAPL', 'sell', 1.3, 133.98],
  ['TSLA', 'buy', 2, 623]
].each do |sym, typ, amount, price|
  lj.transactions.create!(
    symbol: sym,
    kind: typ,
    amount: amount,
    price: price
  )
end
