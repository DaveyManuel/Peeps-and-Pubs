let userInput = '';

$( document ).ready(function() {
   
        $(".submitBtn").on("click", function(){
            var inputEle = document.querySelector('.form-control');
            userInput = inputEle.value;
            console.log(userInput);
            yelpResults();
        })

function yelpResults() {
    var myurl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${userInput}`;
    $.ajax({
        url: myurl,
        headers: {
         'Authorization':'Bearer 2UfANDN38WBYNZyFL-I3kts8Yujzp1kO47Wq1lz-U4j4dSEq6Bum8zHapdHF6rf7kYJniM87s4785v6sTnd5skp4yHlV91D0_o26wiwFRhDlCxhk2-UNZVAtlbgQYHYx',
     },
        method: 'GET'
     }).then(function(response){
         console.log(response)
        //  $("#results").text(JSON.stringify(response));
        $('#results').empty();
        var name = response.businesses[0].name;
        console.log(name)
        $('#results').append(name);
           }
     )
        
}


})



