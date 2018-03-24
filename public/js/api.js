$(document).on("click", "#medButton", function(event){

    event.preventDefault
    var search = $(this).val().trim()
    console.log(search)
        $.ajax({
            url: "https://api.fda.gov/drug/label.json?search=openfda.brand_name:"+ search + "&limit=1",
            method: "GET"
          }).done(function(response) { 
            console.log(response.results)
            $(".modal-content").html("Generic Name: " + response.results[0].openfda.generic_name + "<br><br>" + response.results[0].dosage_and_administration[0] + "<br><br>" + response.results[0].indications_and_usage[0] + "<br><br>")
          })
        })

$(document).on("click", "#deactivate", function(event){
  event.preventDefault
  var id = $(this).data("id");
  console.log(id)
  $.ajax({
    method: "DELETE",
    url: "/api/scriptz/" + id
    }).done(function(res){
      console.log(res)
    });
    location.reload()
})





