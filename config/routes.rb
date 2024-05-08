Rails.application.routes.draw do
  resources :users, only: [ :index ]
  resources :carts, only: [ :index, :show, :create, :update ]
  resources :orders, only: [ :index, :create, :update]
  resources :products, only: [ :index ]


  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/user_profile', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'


  post '/add', to: 'carts#add'
  post '/destroy_cart', to: 'carts#destroy'
  get'/user_cart', to: 'carts#user_cart'
  get '/cart_total', to: 'carts#cart_total'
  patch '/update_cart', to: 'carts#update_cart'
  patch '/update_cart_total', to: 'carts#update_cart_total'



    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
    # Can be used by load balancers and uptime monitors to verify that the app is live.
    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }


  # Defines the root path route ("/")
  # root "posts#index"
end
