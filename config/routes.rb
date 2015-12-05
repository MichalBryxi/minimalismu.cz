Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"

  jsonapi_resources :donations
end
