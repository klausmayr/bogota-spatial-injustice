var map = L.map("map").setView([4.643, -74.097], 10);
      var map2 = L.map("map2").setView([4.643, -74.097], 10);

      var osm = new L.tileLayer(
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      ).addTo(map);
      
      var osm = new L.tileLayer(
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      ).addTo(map2);

      
      function getColor(d) {
        return d > 50 ? '#800026' :
               d > 25 ? '#E31A1C' :
               d > 15 ? '#FD8D3C' :
               d > 5 ? '#FD8D00' :
                        '#FFEDA0';       
        
      }
      
      function style(feature) {
        return {
          fillColor: getColor(feature.properties.bogotaData_pestProb),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }

      function getColor2(d) {
        return d > 50 ? '#800026' :
               d > 25 ? '#E31A1C' :
               d > 15 ? '#FD8D3C' :
               d > 5 ? '#FD8D00' :
                        '#FFEDA0';       
        
      }

      function style2(feature) {
        return {
          fillColor: getColor2(feature.properties.airBad),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }

    L.geoJson(bogotaData, {style: style}).addTo(map);

    fetch('/bogotaData.json',{
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        var geojson = L.geoJSON(json, {
            style: function (feature) {
                return {
                    fillOpacity: 0.5 
                };
            }
        }).addTo(map);
    })

    .catch(error => console.log(error.message));