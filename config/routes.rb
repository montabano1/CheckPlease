Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :edit]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :show, :index]
    resources :avails, only: [:create, :show, :index, :update, :destroy]
    resources :reservations, only: [:create, :destroy]
    resources :reviews, only: [:create ]
    get '/restaurant/search', to: 'restaurants#search'
  end


end
