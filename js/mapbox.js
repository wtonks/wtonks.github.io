console.log('mapbox.js ready to roll')

mapboxgl.accessToken = 'pk.eyJ1Ijoid3RvbmtzIiwiYSI6ImNpdmRtY2hpczAwNnEydHBmMmwwdTZjaGwifQ.dc50YMCjQ9S53qQmKZP3gg'

var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/wtonks/civdqtvws00eb2ijzsvtxbrdx',
  // initial position in [long, lat] format
  center: [0.005353, 52.901597],
  // initial zoom
  zoom: 5
})

// empty list to store all the markers
var markers = [] 

function wipeMarkers()
{
  for (var i = 0; i < markers.length; i++) 
  {
    var marker = markers[i]
    marker.remove()
  }
}

function addMarkers(dataList) 
{
  // first wipe previous markers
  wipeMarkers()
  // then add new ones
  for (var i = 0; i < dataList.length; i++) 
  {
    // store the current data item in a variable
    var dataItem = dataList[i]
    // extract the data item coordinates
    var coordinates = new mapboxgl.LngLat(dataItem.longitude, dataItem.latitude)
    // create a div element for the marker
    var div = document.createElement('div')
    // add a class called 'marker' to the div
    div.className = 'marker'
    // create the custom marker
    var marker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map
    // add the marker to the list
    markers.push(marker)  
    
    // popup
    // update details section with data from the selected result
    // hide results section
    // show details section
    var click = '<a onclick="showDetails(resultData, detailsInfo); resultsSection.hide(); detailsSection.show();'
    var popupHTML = '<a onclick="' + click + '">' + dataItem.venueName + '</a>'
    var popup = new mapboxgl.Popup({closeButton:false})
    popup.setHTML(popupHTML)
    marker.setPopup(popup)
  }
}