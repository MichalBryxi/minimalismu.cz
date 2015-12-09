Rails.application.routes.draw do
  jsonapi_resources :goals
  jsonapi_resources :donations
  jsonapi_resources :questions

  mount_ember_app :frontend, to: "/"
end
