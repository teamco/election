Rails.application.routes.draw do
  resources :personal_infos
  resources :entities do
    resources :personal_infos
  end
end
