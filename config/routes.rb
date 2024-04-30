Rails.application.routes.draw do
  resources :users, only: [ :index, :show ]
  resources :carts, only: [ :index, :show, :create, :update ]
  resources :orders, only: [ :index, :create ]
  resources :products, only: [ :index ]


  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/user_profile', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'


  post '/add', to: 'carts#add'
  post '/destroy_cart', to: 'carts#destroy'
  get'/my_cart', to: 'carts#my_cart'
  get '/visit_count', to: 'products#visit_count'



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }


  # Defines the root path route ("/")
  # root "posts#index"
end
