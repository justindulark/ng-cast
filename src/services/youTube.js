angular.module('video-player')
.service('youTube', function($http) {
  this.getSearch = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      }
    }).then( function(response) {
      callback(response.data.items);
      return (response.data.items);
    }, function() {
      console.log('fudge');
    });
  };
});
