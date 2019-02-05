$(document).ready(function(){
	
	var trainBase = new Firebase("//add fireBase Link//");

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

        trainBase.push(newTrain);

		
		$("#trainNameVal").val("");
		$("#lineVal").val("");
		$("#destinationVal").val("");
		$("#trainVal").val("");
		$("#frequencyVal").val("");
                         return false;
    });
    
    //receiving data from database	
    trainBase.on("child_added", function(childSnapshot, previousChild){

    console.log(childSnapshot.val());

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

    
    
});
