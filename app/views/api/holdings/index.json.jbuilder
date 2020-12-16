@holdings.each do |holding|
  json.set! holding.symbol.upcase do
    json.key_format! camelize: :lower
    json.extract! holding, :id, :amount, :avg_price, :created_at, :updated_at
  end
end
