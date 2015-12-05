Rails.application.routes.draw do
  jsonapi_resources :donations
  jsonapi_resources :goals

  mount_ember_app :frontend, to: "/"
end
