Rails.application.routes.draw do
  # For details on the DSL available within this file, see
  # http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :user, only: %i[create update destroy show]
    resource :session, only: %i[create update destroy]
    resources :assets, only: %i[index create update destroy]
    resources :transactions, only: %i[index create update]
    resources :lists, only: %i[index show create update delete]
  end
end
