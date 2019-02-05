


$(document).ready(function(){
/*couldnt get firebase to initialize properly*/    
    var config = {
        apiKey: "AIzaSyAK9cJZsO-O0byJFhsPO9OFQwYC3qmPx0M",
        authDomain: "ucla-example-8435d.firebaseapp.com",
        databaseURL: "https://ucla-example-8435d.firebaseio.com",
        projectId: "ucla-example-8435d",
        storageBucket: "ucla-example-8435d.appspot.com",
        messagingSenderId: "279686285438"
      };
      firebase.initializeApp(config);

	var trainDatabase = firebase.database();

/*	tried to create variable to hold the firebase data, and input values that way
couldnt get firebase to initialize properly. Probably should have figure that out first

attempted to use firebase with var variableName = new Firebase("firebase link here").
that didnt work. so i followed the instructions on the website and that didnt work either.
i missed the second half of the lecture for this session due to me leaving early to help out my mom
as i do on weekdays. however, i couldnt find the entire lecture online, and prioritized
Project #1 over getting help on this -___-. Will figure out and push changes when solved.

    $("#addButton").on("click", function(){

		var trainName = $("#trainNameVal").val().trim();
		var lineName = $("#lineVal").val().trim();
		var destination = $("#destinationVal").val().trim();
		var trainTimeVal = moment($("#trainTimeVal").val().trim(), "HH:mm").subtract(10, "years").format("X");;
        var frequencyVal = $("#frequencyVal").val().trim();
        
        //create object holding data to push to firebase
        var newTrain = {
			name:  trainName,
			line: lineName,
			destination: destination,
			trainTime: trainTimeVal,
			frequency: frequencyVal,
		}

        trainDatabase.push(newTrain);

		
		$("#trainNameVal").val("");
		$("#lineVal").val("");
		$("#destinationVal").val("");
		$("#trainVal").val("");
		$("#frequencyVal").val("");
                         return false;
    });
    
    //receiving data from database	
    trainDatabase.on("child_added", function(childSnapshot, previousChild){

    //making vars for snapshots
    var firebaseName = childSnapshot.val().name;
    var firebaseLine = childSnapshot.val().line;
    var firebaseDestination = childSnapshot.val().destination;
    var firebaseTrainTimeVal = childSnapshot.val().trainTime;
    var firebaseFrequency = childSnapshot.val().frequency;
    var diffTime = moment().diff(moment.unix(firebaseTrainTimeVal), "minutes");
    var timeRemainder = moment().diff(moment.unix(firebaseTrainTimeVal), "minutes") % firebaseFrequency ;
    var minutes = firebaseFrequency - timeRemainder;
    var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 

    //creating table to host data
		$("#trainDiv > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseLine + "</td><td>"+ firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

	});
*/
    
    
});
