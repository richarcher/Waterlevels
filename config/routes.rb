Rails.application.routes.draw do
  root to: "pages#index"

  resources :pages, only: :index

  namespace :api do
    namespace :v1 do
      resources :dams, only: [:index, :show]
    end
  end
end
