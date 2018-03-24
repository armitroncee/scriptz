$(document).on("click", "#deactivate", function(event){
    var id = $(this).data("id");
    console.log(id);
    var newActive = $(this).data("inactive");

    var newActiveState = {
      active: false
    };

    //Send the PUT request
    $.ajax("/api/scriptz/" + id, {
      type: "PUT",
      data: newActiveState
    }).then(function(){
      console.log ("changed active to ", newActiveState);
      
    })
    // Reload the page to get the updated list
      location.reload();
  });

