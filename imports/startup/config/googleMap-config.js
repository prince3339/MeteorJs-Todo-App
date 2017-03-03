if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ v: '3', key: 'AIzaSyCtaJqubXVrDiZxqpEvIj225wfvg9ipogQ', libraries: 'geometry,places' });
  });
}
