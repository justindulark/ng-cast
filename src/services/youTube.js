angular.module('video-player')
.service('youTube', function($http) {
  this.getSearch = function() {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      query: 'dogs',
      type: 'video',
      part: 'snippet',
      maxResults: 5,
      videoEmbeddable: true,
      key: 'insert google youtube API key'
    });
  };
});
