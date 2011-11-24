class MainController < ApplicationController

  def song_id
    begin
    c = Curl::Easy.perform("http://tinysong.com/b/#{CGI.escape params[:q].sub(" ","+")}?format=json&key=186bd60f3a33be26da02d62d334bddf4")
    rescue
    end
    parsed_json = ActiveSupport::JSON.decode(c.body_str)
    song_id = parsed_json['SongID']
      
    respond_to do |format|
       format.json { render :json => song_id }
    end
    
  end
  
  def index
  end
  
end
