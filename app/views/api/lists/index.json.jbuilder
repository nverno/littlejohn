@lists.each do |list|
  json.set! list.id do
    json.partial! list, as: :list
  end
end
