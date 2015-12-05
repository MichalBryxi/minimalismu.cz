class Goal < ActiveRecord::Base
  default_scope { order(order: :asc) }
end
