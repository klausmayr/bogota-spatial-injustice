var map = L.map("map").setView([4.643, -74.097], 10);
var map2 = L.map("map2").setView([4.643, -74.097], 10);
var map3 = L.map("map3").setView([4.643, -74.097], 10);
var map4 = L.map("map4").setView([4.643, -74.097], 10);
var map5 = L.map("map5").setView([4.643, -74.097], 10);
var map6 = L.map("map6").setView([4.643, -74.097], 10);
var map7 = L.map("map7").setView([4.643, -74.097], 10);
var map8 = L.map("map8").setView([4.643, -74.097], 10);


var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map2
);
var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map3
);
var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map4
);
var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map5
);
var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map6
);
var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map7
);
var osm = new L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(
  map8
);






L.geoJSON(fireRisk, {
      style: function(feature) {
        return {
          fillColor: getColorFire(feature.properties.riesdo_de_insindio_field_5),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,

        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map);





L.geoJSON(hasCar, {
      style: function(feature) {
        return {
          fillColor: getColorCar(feature.properties.hasCar),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map2);


L.geoJSON(pestProb, {
      style: function(feature) {
        return {
          fillColor: getColorCar(feature.properties.pestProb),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map3);



L.geoJSON(withoutFood, {
      style: function(feature) {
        return {
          fillColor: getColorFood(feature.properties.withoutFood),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map4);



L.geoJSON(gatedComm, {
      style: function(feature) {
        return {
          fillColor: getColorGate(feature.properties.conjunto_encerada_field_5),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map5);



L.geoJSON(decreasedAir, {
      style: function(feature) {
        return {
          fillColor: getColorAir(feature.properties.airBad),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map6);



L.geoJSON(factProx, {
      style: function(feature) {
        return {
          fillColor: getColorFact(feature.properties.factProx),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map7);

L.geoJSON(sewageProx, {
      style: function(feature) {
        return {
          fillColor: getColorSewage(feature.properties.sewage_proximityClose),
          fillOpacity: 0.6,
          weight: 0.5,
          color: "#800026",
          opacity: 0.5,
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.6})
      })
    }
    }).addTo(map8);


    map.sync(map2);
    map.sync(map3);
    map.sync(map4);
    map.sync(map5);
    map.sync(map6);
    map.sync(map7);
    map.sync(map8);
    map2.sync(map);
    map2.sync(map3);
    map2.sync(map4);
    map2.sync(map5);
    map2.sync(map6);
    map2.sync(map7);
    map2.sync(map8);
    map3.sync(map);
    map3.sync(map2);
    map3.sync(map4);
    map3.sync(map5);
    map3.sync(map6);
    map3.sync(map7);
    map3.sync(map8);
    map4.sync(map);
    map4.sync(map2);
    map4.sync(map3);
    map4.sync(map5);
    map4.sync(map6);
    map4.sync(map7);
    map4.sync(map8);
    map5.sync(map);
    map5.sync(map2);
    map5.sync(map3);
    map5.sync(map4);
    map5.sync(map6);
    map5.sync(map7);
    map5.sync(map8);
    map6.sync(map);
    map6.sync(map2);
    map6.sync(map3);
    map6.sync(map4);
    map6.sync(map5);
    map6.sync(map7);
    map6.sync(map8);
    map7.sync(map);
    map7.sync(map2);
    map7.sync(map3);
    map7.sync(map4);
    map7.sync(map5);
    map7.sync(map6);
    map7.sync(map8); 
    map8.sync(map);
    map8.sync(map2);
    map8.sync(map3);
    map8.sync(map4);
    map8.sync(map5);
    map8.sync(map6);
    map8.sync(map7);

    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
    
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 1, 2, 3],
            labels = [];
    
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColorFire(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    
    legend.addTo(map);


    var legend2 = L.control({position: 'bottomright'});

    legend2.onAdd = function (map) {
    
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [5, 10, 20, 30],
            labels = [];
    
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColorCar(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    
    legend2.addTo(map2);

    var legend3 = L.control({position: 'bottomright'});

    legend3.onAdd = function (map) {
    
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [10, 20, 30, 50],
            labels = [];
    
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColorPest(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    
    legend3.addTo(map3);

    var legend4 = L.control({position: 'bottomright'});

    legend4.onAdd = function (map) {
    
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0.25, 0.5, 1, 2],
          labels = [];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColorFood(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
  
      return div;
  };
  
  legend4.addTo(map4);

  var legend5 = L.control({position: 'bottomright'});

    legend5.onAdd = function (map) {
    
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [10, 25, 50, 75],
          labels = [];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColorGate(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
  
      return div;
  };
  
  legend5.addTo(map5);

  var legend6 = L.control({position: 'bottomright'});

    legend6.onAdd = function (map) {
    
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [5, 10, 25, 50],
          labels = [];
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColorAir(grades[i] + 1) + '"></i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
  
      return div;
  };
  
  legend6.addTo(map6);

  var legend7 = L.control({position: 'bottomright'});

  legend7.onAdd = function (map) {
  
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0.75, 1.5, 3, 6],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorFact(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend7.addTo(map7);


var legend8 = L.control({position: 'bottomright'});

legend8.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
      grades = [0.5, 1.5, 3, 5],
      labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColorSewage(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend8.addTo(map8);

    function getColorFire(d) {
      return d > 3
        ? "#238b45"
        : d > 2
        ? "#66c2a4"
        : d > 1
        ? "#b2e2e2"
        : d > 0.5
        ? "#edf8fb"
        : "#eeeeee";
    }
    
    function getColorCar(d) {
      return d > 30
        ? "#238b45"
        : d > 20
        ? "#66c2a4"
        : d > 10
        ? "#b2e2e2"
        : d > 5
        ? "#edf8fb"
        : "#eeeeee";
    }
    
    function getColorAir(d) {
      return d > 50
      ? "#238b45"
      : d > 25
      ? "#66c2a4"
      : d > 10
      ? "#b2e2e2"
      : d > 5
      ? "#edf8fb"
      : "#eeeeee";
    }
    
    function getColorPest(d) {
      return d > 50
      ? "#238b45"
      : d > 30
      ? "#66c2a4"
      : d > 20
      ? "#b2e2e2"
      : d > 10
      ? "#edf8fb"
      : "#eeeeee";
    }
    
    function getColorSewage(d) {
      return d > 5
      ? "#238b45"
      : d > 3
      ? "#66c2a4"
      : d > 1.5
      ? "#b2e2e2"
      : d > 0.5
      ? "#edf8fb"
      : "#eeeeee";
    }
    
    function getColorFood(d) {
      return d > 2
      ? "#238b45"
      : d > 1
      ? "#66c2a4"
      : d > 0.5
      ? "#b2e2e2"
      : d > 0.25
      ? "#edf8fb"
      : "#eeeeee";
    }
    
    function getColorFact(d) {
      return d > 6
      ? "#238b45"
      : d > 3
      ? "#66c2a4"
      : d > 1.5
      ? "#b2e2e2"
      : d > 0.75
      ? "#edf8fb"
      : "#eeeeee";
    }
    
    function getColorGate(d) {
      return d > 75
      ? "#238b45"
      : d > 50
      ? "#66c2a4"
      : d > 25
      ? "#b2e2e2"
      : d > 10
      ? "#edf8fb"
      : "#eeeeee";
    }
