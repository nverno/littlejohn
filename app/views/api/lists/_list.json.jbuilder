json.key_format! camelize: :lower
json.extract! list, :id, :name, :public, :created_at, :updated_at
json.assets list.assets.pluck(:symbol)
