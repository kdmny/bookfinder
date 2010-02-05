class BookFinderController < ApplicationController
  
  def search
    respond_to do |format|
      # format.html{}
      format.js{}
    end
  end
  
end