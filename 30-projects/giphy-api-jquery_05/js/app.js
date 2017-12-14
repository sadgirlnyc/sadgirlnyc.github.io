/*
http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY
public_api_key: dc6zaTOxFJmzC
end_point: v1/gifs/search

var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=9A2w9upuffhPL47gwpjGCwiXTtrn6NpL";
var query = "&q=rainbow";


1 function for submitting text input when you click
2 function to place the text input in a defined jquery var
3 j query ajax call
4 display results
*/

$(function(){
  $('#form').submit(function() {
         alert('Form is submitting');
         return true;
        });
  });
