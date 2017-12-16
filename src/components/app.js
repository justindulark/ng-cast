angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  controller: function() {

    this.alert = (video) => {
      console.log('hi');
      this.currentVideo = video;
    };
  
    this.onClick = (video) => {
      console.log('you will never catch me alive coppers');
      this.currentVideo = video;
    };

    this.searchResults = () => {

    };
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  }
});
