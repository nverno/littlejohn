json.key_format! camelize: :lower
json.extract! transaction, :id, :symbol, :price, :amount, :kind
