Rails.application.routes.draw do
  root to: 'dams#index'
  
  resources :dams, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :dams, only: [:index, :show]
    end
  end
end
