class MainController < ApplicationController

  def song_id
    begin
        c = Curl::Easy.perform("http://tinysong.com/s/#{CGI.escape params[:q].sub(" ","+")}?format=json&limit=32&key=96a8868b78efe9fdc0c23393f8ef6651") # old key: 186bd60f3a33be26da02d62d334bddf4
    rescue
    end
    parsed_json = ActiveSupport::JSON.decode(c.body_str)
    song_id = []
    parsed_json.each do |song|
      song_id << song['SongID'].to_i
    end

    respond_to do |format|
       format.json { render :json => song_id }
    end
    
  end
  
  def index
  end
  
end
