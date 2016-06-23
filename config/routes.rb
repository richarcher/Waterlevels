Rails.application.routes.draw do
  root to: "dams#index"
  get 'dams' => 'dams#index'
  get 'dams/:id' => 'dams#show', as: 'dam'
end
