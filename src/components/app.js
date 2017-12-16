angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function() {

    this.onClick = (video) => {
      this.currentVideo = video;
    };

    this.searchResults = () => {

    };
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  }
});
