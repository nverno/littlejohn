json.array! @transactions do |trans|
  json.partial! trans, as: :transaction
end
