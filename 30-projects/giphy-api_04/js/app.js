/*

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=9A2w9upuffhPL47gwpjGCwiXTtrn6NpL";

var query = "&q=rainbow";

function setup(){
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

*/

class Giphy{
    constructor(keyword){
      this.keyword = keyword;
      this.endpoint = "http://api.giphy.com/v1/gifs";
      this.api_key = "dc6zaTOxFJmzC";
    }

    getGifUrl(callback){
      var xhr = new XMLHttpRequest();

      xhr.open('GET', this.endpoint+"/translate?api_key="+this.api_key+"&s="+this.keyword);

      xhr.responseType = "json";

      xhr.onload = function(){
        callback(this.response.data.images.original.mp4)
      }

      xhr.send('search = keyword');
      }


static getUrlAsync(keyword, callback){
  return new Giphy(keyword).getGifUrl(callback);
  }
}
