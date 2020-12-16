json.key_format! camelize: :lower
json.extract! user, :id, :first_name, :last_name, :email, :balance, :gold
json.following do
  json.array! user.followed_lists.pluck(:id)
end
