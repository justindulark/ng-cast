angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = (videos) => {
      this.videos = videos;
      this.selectVideo(videos[0]);
    };

    this.submit = (query) => {
      youTube.getSearch(query, this.searchResults.bind(this));
    };
    this.videos = window.exampleVideoData;
    // this.videos = youtube.getSearch('aoa', this.searchResults.bind(this));
    //youtube.getSearch('aoa', this.searchResults.bind(this));
    this.currentVideo = this.videos[0];
  }
});
