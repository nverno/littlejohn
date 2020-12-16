# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
List.destroy_all

admin = User.create!( # rubocop:todo Lint/UselessAssignment
  first_name: 'admin',
  last_name: 'admin',
  username: 'admin',
  email: 'admin@littlejohnn.io',
  password: 'asdfasdf'
)

# Public Lists
popular_list = List.create!(
  name: 'Most Popular',
  public: true
)
popular_list.assets = %w[AAPL TSLA F MSFT AAL PFE NIO DIS AMZN DAL ACB GE]

earnings = List.create!(name: 'Upcoming Earnings', public: true)
earnings.assets = %w[NKE ACN FDX GIS LEN CCL HEI DRI FDS]

# Demo user
demo = User.create!( # rubocop:todo Lint/UselessAssignment
  first_name: 'guest',
  last_name: 'ipoo',
  username: 'guest',
  email: 'guest@gmail.com',
  password: 'asdfasdf',
  balance: 10_000
)
# demo.follow(popular_list.id)
# demo.follow(earnings.id)

# Test user
lj = User.create!(
  first_name: 'Little',
  last_name: 'John',
  username: 'lj',
  email: 'test@littlejohn.io',
  password: 'asdfasdf',
  balance: 10_000
)
# lj.follow(popular_list.id)
# demo.follow(earnings.id)

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
