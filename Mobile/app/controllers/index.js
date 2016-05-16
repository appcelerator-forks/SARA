/*
mapView.setCenterLatLng([30.25,-97.75]);
*/

var mapbox = require("com.polancomedia.mapbox"),
	http = require("http");

var App = {
	Geo: {
		latitude: null,
		longitude: null
	},
	init: function() {
		if(Ti.Geolocation.locationServicesEnabled) {
			Ti.Geolocation.purpose = "Geolocation Tracking";
			Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
			Ti.Geolocation.distanceFilter = 95;
			Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
		}
		
		Ti.Geolocation.addEventListener("location", function(_event) {
			if(_event.error) {
				Ti.API.error(_event.error);
			} else {
				App.Geo = _event.coords;
				
				App.sendTrack();
			}
		});
		
		Ti.Geolocation.getCurrentPosition(function(_event) {
			if(_event.error) {
				Ti.API.error(_event.error);
			} else {
				App.Geo = _event.coords;
				
				App.sendTrack();
			}
		});
	},
	sendTrack: function() {
		http.request({
			type: "POST",
			url: "http://",
			data: App.geo,
			success: function() {
				Ti.API.info("Data Sent");
			},
			failure: function() {
				Ti.API.error("Data Not Sent");
			}
		});
	}
};

App.init();

var mapView = mapbox.createView({
    map: "mcongrove.057j94i6",
    minZoom: 5,
    maxZoom: 12,
    zoom: 9,
    accessToken: "pk.eyJ1IjoibWNvbmdyb3ZlIiwiYSI6ImNpbzlqNWJmajAzMnJ2aWx6bGFrcXY4YmwifQ.CeCazlWXKIh79zYFY13RfQ",
    centerLatLng: [30.25,-97.75],
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    hideAttribution: true,
    userLocation: true
});

mapView.clearTileCache();

var header = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: 60,
	backgroundColor: "#2FA59E",
	top: 0
});

var headerTitle = Ti.UI.createView({
	width: Ti.UI.SIZE,
	height: 60,
	top: 0,
	left: 0,
	layout: "horizontal"
});

var titleSara = Ti.UI.createLabel({
	font: {
		fontFamily: "Avenir",
		fontSize: 18
	},
	color: "#071A18",
	top: 25,
	left: 7,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	text: "SARA"
});

var titleGt = Ti.UI.createLabel({
	font: {
		fontFamily: "Avenir",
		fontSize: 18
	},
	color: "#FFF",
	top: 25,
	left: 2,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	text: "GT"
});

var titleStatus = Ti.UI.createLabel({
	font: {
		fontFamily: "Avenir",
		fontSize: 18
	},
	color: "#FFF",
	top: 25,
	right: 7,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	text: "ENROUTE"
});

var buttons = Ti.UI.createView({
	width: Ti.UI.SIZE,
	height: 31,
	bottom: 15,
	right: 15,
	layout: "horizontal"
});

var buttonZoomIn = Ti.UI.createImageView({
	height: 31,
	width: 31,
	bottom: 0,
	left: 0,
	image: "zoom-in.png"
});

buttonZoomIn.addEventListener("click", function() {
	mapView.setZoom(mapView.zoom + 1);
});

var buttonZoomOut = Ti.UI.createImageView({
	height: 31,
	width: 31,
	bottom: 0,
	left: 15,
	image: "zoom-out.png"
});

buttonZoomOut.addEventListener("click", function() {
	mapView.setZoom(mapView.zoom - 1);
});

headerTitle.add(titleSara);
headerTitle.add(titleGt);
header.add(headerTitle);
header.add(titleStatus);
buttons.add(buttonZoomIn);
buttons.add(buttonZoomOut);

$.Main.add(mapView);
$.Main.add(buttons);
$.Main.add(header);

$.Main.open();