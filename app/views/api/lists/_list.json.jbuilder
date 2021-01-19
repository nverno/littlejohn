json.key_format! camelize: :lower
json.extract! list, :id, :name, :public, :created_at, :updated_at, :size, :index
assets = list.assets.pluck(:symbol, :index)
             .sort_by { |a, b| a[1] <=> b[1] }
             .map { |s, _| s }
json.assets assets
