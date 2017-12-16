angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<',
  },
  controller: function videoListEntryController() {

  },
  templateUrl: 'src/templates/videoListEntry.html'
});
