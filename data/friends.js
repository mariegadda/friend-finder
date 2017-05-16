<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>


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


//console.log(newFriend);

friends.push(newFriend);
console.log(friends)

    //   $.post("/api/new", newFriend)
    //   .done(function(data) {
    //     console.log(data);
    //     alert("Adding friend...");
    //   });

    });