import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './airbnb-map.html';

Template.airbnbMap.onCreated(function(){
  // We can use the `ready` callback to interact with the map API once the map is ready.
GoogleMaps.ready('exampleMap', function(map) {
  // Add a marker to the map once it's ready
  var marker = new google.maps.Marker({
    position: map.options.center,
    map: map.instance
  });
});
});

Template.airbnbMap.onRendered(function () {
  GoogleMaps.load();
});

Template.airbnbMap.helpers({
  exampleMapOptions: function() {
  // Make sure the maps API has loaded
  if (GoogleMaps.loaded()) {
    // Map initialization options
    return {
      center: new google.maps.LatLng(23.777176, 90.399452),
      zoom: 8
    };
  }
}
});

Template.airbnbMap.events({

});
