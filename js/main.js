// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button')
var homeDropdown = $('#home select')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsOL = $('#results ol')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #venues')

// tell the Go button to do something when we click it
homeGoButton.click( function(){
    
    // 1. capture the user chosen option
    var chosenOption = homeDropdown.val()
    console.log("You picked" + chosenOption)
    
    
    // 2. filter+sort venues by user selection
    var resultsList = filterAndSortList(venuesList, chosenOption);
    console.log(resultsList);
    
    
    
    // 3. show the results in the #results section
    showList(resultsList, resultsOL)
    
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
