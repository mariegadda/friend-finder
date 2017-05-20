


var friends = [];

  $("#submit").on("click", function(event) {
      event.preventDefault();

      var newFriend = {
        name: $("#name").val().trim(),
        pic: $("#photo").val().trim(),
        score:[
            $("#q1").val().trim(),
            $("#q2").val().trim(),
            $("#q3").val().trim(),
            $("#q4").val().trim(),
            $("#q5").val().trim(),
            $("#q6").val().trim(),
            $("#q7").val().trim(),
            $("#q8").val().trim(),
            $("#q9").val().trim(),
            $("#q10").val().trim()
        ]
  
      };

        friends.push(newFriend); 


      $.post("/api", newFriend)
      .done(function(data) {
        console.log(data);
        alert("Adding friend...");
      });

 });

// array in a backend file   


