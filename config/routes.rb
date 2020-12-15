Rails.application.routes.draw do
  # For details on the DSL available within this file, see
  # http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create update destroy]

    resources :users, only: %i[create update destroy show] do
      resources :holdings, only: %i[index]
      resources :transactions, only: %i[index create update show]
      resources :watchlists, only: %i[index create update delete show]
    end

    resources :lists, only: %i[index show create update delete]
  end
end
