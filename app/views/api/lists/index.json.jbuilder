json.array! @lists do |list| 
  json.partial! list, as: :list
end
