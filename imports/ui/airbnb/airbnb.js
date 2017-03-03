import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './airbnb.html';
import './airbnb-map.js';

Template.airbnb.onCreated(function(){
  // We can use the `ready` callback to interact with the map API once the map is ready.
GoogleMaps.ready('exampleMap', function(map) {
  // Add a marker to the map once it's ready
  var marker = new google.maps.Marker({
    position: map.options.center,
    map: map.instance
  });
});
});

Template.airbnb.onRendered(function () {
  $('.airbnb__left').scroll(function() {
    //console.log('scrolling...');
    console.log($('.airbnb__left').scrollTop());
    $('.airbnb__listing__header').addClass('airbnb__listing__header--sticky');
    $('.airbnb__listing__container').addClass('padding-top-72');
    $('.airbnb__listing__header__left').addClass('hide');
    if($('.airbnb__left').scrollTop() === 0) {
      $('.airbnb__listing__header').removeClass('airbnb__listing__header--sticky');
      $('.airbnb__listing__container').removeClass('padding-top-72');
      $('.airbnb__listing__header__left').removeClass('hide');
    }

  })

  GoogleMaps.load();
});

Template.airbnb.helpers({
  exampleMapOptions: function() {
  // Make sure the maps API has loaded
  if (GoogleMaps.loaded()) {
    // Map initialization options
    return {
      center: new google.maps.LatLng(-37.8136, 144.9631),
      zoom: 8
    };
  }
}
});

Template.airbnb.events({

});
