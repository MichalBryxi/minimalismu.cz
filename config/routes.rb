Rails.application.routes.draw do
  jsonapi_resources :goals
  jsonapi_resources :donations

  mount_ember_app :frontend, to: "/"
end
