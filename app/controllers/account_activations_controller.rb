class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user
      # Success => Signup
      user.activate
      log_in user
      flash[:success] = "Account activated!"
      redirect_to user
    else
      # Failure
      flash[:danger] = "Invalid activation link"
      redirect_to root_url
    end
  end
end
