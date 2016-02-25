var map = L.map('map').setView([30, -90], 4);


var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	{
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map)

var Flashfloods = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
			    layers: '0',
			    format: 'image/png',
			    transparent: true,
			    attribution: "NOAA"
			}).addTo(map);

var Tornadoes = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
		    layers: '2',
		    format: 'image/png',
		    transparent: true,
		    attribution: "NOAA"
		}).addTo(map);

var HazardousAirQuality = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer/WMSServer", {
		    layers: '42',
		    format: 'image/png',
		    transparent: true,
		    attribution: "NOAA"
		}).addTo(map);

var baseLayers = {
    "Streets": streets,

};

var overlays = {
    "Flashfloods": Flashfloods,
    "Tornadoes": Tornadoes,
		"HazardousAirQuality": HazardousAirQuality
};

L.control.layers(baseLayers, overlays).addTo(map);
