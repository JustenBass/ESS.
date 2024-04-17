Rails.application.routes.draw do
  resources :users, only: [ :index ]
  resources :cart, only: [:show, :create, :destroy]
  resources :orderables, only: [ :index ]
  resources :products

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }


  # Defines the root path route ("/")
  # root "posts#index"
end
