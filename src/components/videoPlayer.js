angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function videoPlayerController() {
    //this.fullURL = 'https://www.youtube.com/embed/' + this.video.id.videoId;
  }
});
