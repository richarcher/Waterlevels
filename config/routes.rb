Rails.application.routes.draw do
  root to: "api/v1/dams#index"
  namespace :api do
    namespace :v1 do
      resources :dams
    end
  end
end
