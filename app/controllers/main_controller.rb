class MainController < ApplicationController

  def song_id
    begin
        c = Curl::Easy.perform("http://tinysong.com/s/#{CGI.escape params[:q].sub(" ","+")}?format=json&limit=32&key=6ac3d5b1d6d3cd0af4a54e32961edd58") # old key: 186bd60f3a33be26da02d62d334bddf4
    rescue
    end
    parsed_json = ActiveSupport::JSON.decode(c.body_str)
    song_id = []
    parsed_json.each do |song|
      song_id << song['SongID']
    end

    respond_to do |format|
       format.json { render :json => song_id }
    end
    
  end
  
  def index
  end
  
end
