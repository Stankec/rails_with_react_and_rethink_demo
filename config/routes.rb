Rails.application.routes.draw do
  root 'articles#index'
  
  resources :articles
  get :start, to: 'start#show', as: 'start_show'
end
