console.log("firebase.js ready to be lit")

// connect to the Firebase db (database)
  var config = {
    apiKey: "AIzaSyCGwpaRU6Ht3_loD8OGMLKaGnYc_5P23b4",
    databaseURL: "https://app-database-2b917.firebaseio.com"
  };
  firebase.initializeApp(config);

// this is the whole database
var database = firebase.database();

// we want to grab only the "people" part of the database
var venuesData = database.ref('venues');

// create a list of people
var venuesList = []; // empty list, for now

// load all the children of "people"
// keep listening for new children
peopleData.on('child_added', function(childData){
    // run these instructiion for each child
    console.table(childData.val());
    var person = childData.val(); //extract data about the person
    peopleList.push( childData.val() ); //add the peron to the peopleList
 })