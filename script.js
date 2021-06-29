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



function getColorFire(d) {
  return d > 50
    ? "#800026"
    : d > 25
    ? "#E31A1C"
    : d > 15
    ? "#FD8D3C"
    : d > 5
    ? "#FD8D00"
    : "#FFEDA0";
}

fetch('/fire-risk.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorFire(feature.properties.riesdo_de_insindio_field_5),
          fillOpacity: 0.8,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.3})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.8})
      })
    }
    }).addTo(map);
  })

function getColorCar(d) {
  return d > 50
    ? "#800026"
    : d > 25
    ? "#E31A1C"
    : d > 15
    ? "#FD8D3C"
    : d > 5
    ? "#FD8D00"
    : "#FFEDA0";
}



fetch('/has-car.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorCar(feature.properties.hasCar),
          fillOpacity: 0.1,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.5})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.1})
      })
    }
    }).addTo(map2);
  })

function getColorPest(d) {
  return d > 50
    ? "#800026"
    : d > 25
    ? "#FD8D3C"
    : d > 5
    ? "#FD8D00"
    : "#FFEDA0";
}

fetch('/pest-problem.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorPest(feature.properties.pestProb),
          fillOpacity: 0.8,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.2})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.8})
      })
    }
    }).addTo(map3);
  })

function getColorFood(d) {
  return d > 50
    ? "#800026"
    : d > 25
    ? "#FD8D3C"
    : d > 5
    ? "#FD8D00"
    : "#FFEDA0";
}

fetch('/without-food.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorFood(feature.properties.withoutFood),
          fillOpacity: 0.8,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.2})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.8})
      })
    }
    }).addTo(map4);
  })

function getColorGate(d) {
  return d > 50
    ? "#800026"
    : d > 25
    ? "#FD8D3C"
    : d > 5
    ? "#FD8D00"
    : "#FFEDA0";
}

fetch('/gated-comm.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorGate(feature.properties.conjunto_encerada_field_5),
          fillOpacity: 0.8,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.2})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.8})
      })
    }
    }).addTo(map5);
  })

fetch('/decreased-air.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorGate(feature.properties.conjunto_encerada_field_5),
          fillOpacity: 0.1,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.5})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.1})
      })
    }
    }).addTo(map6);
  })

fetch('/fact-prox.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorGate(feature.properties.conjunto_encerada_field_5),
          fillOpacity: 0.1,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.5})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.1})
      })
    }
    }).addTo(map7);
  })

fetch('/sewage-prox.json', {
  method: 'GET'
})
  .then(response => response.json())
  .then(json => {
  
    bogotaDataGeojSON = L.geoJSON(json, {
      style: function(feature) {
        return {
          fillColor: getColorGate(feature.properties.conjunto_encerada_field_5),
          fillOpacity: 0.8,
          weight: 0.5
        };
      },
    onEachFeature: function(feature,layer){
      layer.on('mouseover',function() {
        layer.setStyle({fillOpacity: 0.2})
      })
      layer.on('mouseout',function() {
        layer.setStyle({fillOpacity: 0.8})
      })
    }
    }).addTo(map8);
  })




  .catch(error => console.log(error.message));

function getColor(d) {
  return d > 50
    ? "#800026"
    : d > 25
    ? "#E31A1C"
    : d > 15
    ? "#FD8D3C"
    : d > 5
    ? "#FD8D00"
    : "#FFEDA0";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.bogotaData_pestProb),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7
  };
}


$(document).on('change', '#map2-select', function(f){
  var newBogota2 = f.target.value;
  if(newBogota2!=='') {
    bogotaDataGeojSON.eachLayer(function(layer){
      if(layer.feature.properties===f.target.value) { 
      $(layer.setStyle(style));
      $('#map2-info').html(layer.feature.properties.Name+ ' ('+layer.feature.properties.Name+')');
      }
    })
  } else {
    $('#map2-info').html('');
  }
})

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
