Rails.application.routes.draw do
  root 'checklists#index'
  resources :checklists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
