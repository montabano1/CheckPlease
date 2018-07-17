Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :edit]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :show, :index]
    resources :avails, only: [:create, :show, :index, :destroy]
    resources :reservations, only: [:create, :destroy]
    get '/restaurant/search', to: 'restaurants#search'
  end


end
