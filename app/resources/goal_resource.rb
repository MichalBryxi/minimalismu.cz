class GoalResource < JSONAPI::Resource
  attributes :name, :description, :amount, :order
end
