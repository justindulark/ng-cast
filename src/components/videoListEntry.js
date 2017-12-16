angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  controller: function videoListEntryController() {
    this.alert = () => {
      console.log(this.selectVideo);
    };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
