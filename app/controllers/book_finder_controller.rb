class BookFinderController < ApplicationController
  
  def search
    respond_to do |format|
      @search_phrase = params[:s]
      format.js{}
    end
  end
  
end