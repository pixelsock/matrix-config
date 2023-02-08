

// get the data from this url and store it in a variable
// $.ajax({
//     url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLUqThS6n_xjJD9TJAwv6BiUCpXlJSnzrx5VsvELZmn48_Bs03COipaBGnRB6wrrW0MHY3yG_M2adk/pub?gid=1460019984&single=true&output=csv',
//     dataType: 'text',
// }).done(successFunction);

// alternativly lets get the data from #location-data, child element #location-item and store it in a variable
var locationData = document.getElementById("location-data");
var locationItem = locationData.getElementsByClassName("result");
//console.log(locationItem);

// build an array of objects from the data
var locationArray = [];
for (var i = 0; i < locationItem.length; i++) {
    var locationObject = {
        lat: locationItem[i].getElementsByClassName("location-lat")[0].innerHTML,
        lng: locationItem[i].getElementsByClassName("location-lng")[0].innerHTML,
        name: locationItem[i].getElementsByClassName("location-name")[0].innerHTML,
        address: locationItem[i].getElementsByClassName("location-address")[0].innerHTML,
        city: locationItem[i].getElementsByClassName("location-city")[0].innerHTML,
        state: locationItem[i].getElementsByClassName("location-state")[0].innerHTML,
        zip: locationItem[i].getElementsByClassName("location-zip")[0].innerHTML,
        phone: locationItem[i].getElementsByClassName("location-phone")[0].innerHTML,
        type: locationItem[i].getElementsByClassName("location-category")[0].innerHTML,
        website: locationItem[i].getElementsByClassName("location-website")[0].getAttribute("href"),

    };
    locationArray.push(locationObject);
    
};
// console.log(locationArray);



    var data = locationArray;
    var allRows = data.map(function(row) {
        return Object.values(row);
    });
    // console.log(allRows);

    // create a map

    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMa</a>'

    
});

var rep = L.layerGroup();
    var showroom = L.layerGroup();

var map = L.map('map', {
    center: [40, -95],
    zoom: 3.8,
    layers: [osm, rep, showroom]


});








var greenIcon = L.icon({
    iconUrl: 'https://uploads-ssl.webflow.com/638fbc9b6d164e234dc677d7/638fbc9b6d164eb5dac677f3_pin-icon.svg',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
    
    for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
        var rowCells = allRows[singleRow];
        // console.log('row cells', rowCells);
        var marker = L.marker([rowCells[0], rowCells[1]], {icon: greenIcon}).addTo(map);
        // get the href attr value from rowCells[9] and store it in a variable
        var website = rowCells[9].url;
        marker.bindPopup(
            `<div style="text-align:center;"><b>${rowCells[2]}</b><br>${rowCells[3]}<br>${rowCells[4]},${rowCells[5]} ${rowCells[6]}<br>${rowCells[7]}<br><a class="text-style-link" href="${rowCells[9]}" target="_blank">website</a></div>`);



            // zoom the map to the clicked marker
            
            marker.on('click', function(e) {
                map.setView(e.latlng, 8);
            });

            



        // categorize the markers by rowCells[8]
        if (rowCells[8] == "Showroom") {
            marker.addTo(showroom);
            
        }
        if (rowCells[8] == "Rep") {
            marker.addTo(rep);
            
        }



         
    

    }
    // create a layer control that only shows the layers that are currently selected not all of them

    var baseMaps = {
        "Reps & Showrooms": osm
    };
    var overlayMaps = {
        "Showroom": showroom,
        "Rep": rep
    };

    


    // let's add the layer control to another checkbox div outside of the map div. These divs are #reps-filter and #showrooms-filter
    

    // event listener for the checkboxes
    // when the checkbox is checked, add the layer to the map
    // when the checkbox is unchecked, remove the layer from the map
    // when the checkbox is checked, add the layer to the map
    // when the checkbox is unchecked, remove the layer from the map
    $('#reps-filter input').on('change', function(e) {
        map.setView([40,-95], 4);

        var layer = $(this).val();
        if (this.checked) {
            map.addLayer(rep);
            // set view to the center of the united states
            
            

        } else {
            map.removeLayer(rep);
        }
    });
    $('#showrooms-filter input').on('change', function(e) {
        var layer = $(this).val();
        map.setView([40,-95], 4);

        if (this.checked) {
            map.addLayer(showroom);
            // set view to the center of the united states
        } else {
            map.removeLayer(showroom);
        }
    });

    // when a locationItem is clicked, zoom the map to that locationItem and open the popup
    // create a variable with child element of #location-data-filter.location-item 

    $('.filter-result').on('click', function(e) {
        var lat = $(this).find('.location-lat').text();
        var lng = $(this).find('.location-lng').text();
        var name = $(this).find('.location-name').text();
        var address = $(this).find('.location-address').text();
        var city = $(this).find('.location-city').text();
        var state = $(this).find('.location-state').text();
        var zip = $(this).find('.location-zip').text();
        var phone = $(this).find('.location-phone').text();
        var type = $(this).find('.location-category').text();
        var website = $(this).find('.location-website').attr('href');
        var marker = L.marker([lat, lng], {icon: greenIcon}).addTo(map);
        marker.bindPopup(
            `<div style="text-align:center;"><b>${name}</b><br>${address}<br>${city},${state} ${zip}<br>${phone}<br><a class="text-style-link" href="${website}" target="_blank">website</a></div>`);
        map.setView([lat, lng], 8);
        marker.openPopup();
    });


    // hide the default layer control
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo('#reps-filter');
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo('#showrooms-filter');

   
