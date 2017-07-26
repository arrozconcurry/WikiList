Rails.application.routes.draw do
  root 'checklists#index'
  concern :paginatable do
    get '(page/:page)', action: :index, on: :collection, as: ''
  end

  resources :checklists, concerns: :paginatable
end
