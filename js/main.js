// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button')
var homeDropdown = $('#home select')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsToggleButton = $('#results .toggle')
var resultsOL = $('#results ol')
var resultsMap = $('#map')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')

// define the resultsList outside of any function
var resultsList = []

// tell the Go button to do something when we click it
homeGoButton.click( function(){
    
    // 1. capture the user chosen option
    var chosenOption = homeDropdown.val()
    console.log("You picked " + chosenOption)
    
    var filters = 
    [
        {
            key: 'venueLocation',
            value: chosenOption
        }
    ]    
    
    
    // 2. filter+sort venues by user selection
    resultsList = filterAndSortList(venuesList, filters);
    console.log(resultsList);
    
    
    
    // 3. show the results in the #results section
    showList(resultsList, resultsOL)
    addMarkers(resultsList)
    
    // 4. what happens when someone clicks on a result?
    $('#results li').click( function() {
            // grab the id from the clicked item
            var resultId = $(this).attr('id')
            // use the id to get the right data
            var resultData = resultsList[resultId]
            console.log(resultData)
            // call the function showDetails()
            showDetails(resultData, detailsInfo)
            // show the details!
            resultsSection.hide()
            detailsSection.show()
        })
    
            function showDetails (data, interfaceElement) 
        {
          var detailsHTML = makeDetailsHTML(data)
          interfaceElement.html(detailsHTML)
        }
    
    // 5. show/hide stuff
    homeSection.hide()
    resultsSection.show()
})

// tell the Back button to do something when we click it
resultsBackButton.click( function (){
    resultsSection.hide()
    homeSection.show()
})

// tell the other back button to do something when we click it
detailsBackButton.click( function(){
    detailsSection.hide()
    resultsSection.show()
})

// button to switch between list and map
resultsToggleButton.click(function() {
    
    console.log('clicked resultsToggleButton')
    
 // find out which element is currently visible
    // is the list visible?
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false
    
    console.log(isListVisible)
    
    // if the list is visible
    if (isListVisible)
        { 
            //        we want to show the map and hide the list
            resultsMap.show()
            map.resize() // get the map to take all the available space
            resultsOL.hide()
            resultsToggleButton.html('List')
            
        }
    else
        {
            //            we want to show the list and hide the map
            resultsOL.show()
            resultsMap.hide()
            resultsToggleButton.html('Map')
        }
    
    
    // change the button to say "Map"
    
    // if the list is hidden, we want to show the list
    
})