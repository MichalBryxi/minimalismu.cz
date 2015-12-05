Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"

  jsonapi_resources :donations
  jsonapi_resources :goals
end
