let userInput = '';
let businessResults = [];

$(document).ready(function () {
    $(".myaccordionDiv").children().hide();

    $(".submitBtn").on("click", function () {
        var inputEle = document.querySelector('.form-control');
        userInput = inputEle.value;
        console.log(userInput);
        yelpResults();
        $(".myaccordionDiv").children().show();
        $('.accordion-button').empty(Text)
        $('.accordion-body').empty(Text)

    })

    function yelpResults() {
        var myurl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${userInput}`;
        $.ajax({
            url: myurl,
            headers: {
                'Authorization': 'Bearer 2UfANDN38WBYNZyFL-I3kts8Yujzp1kO47Wq1lz-U4j4dSEq6Bum8zHapdHF6rf7kYJniM87s4785v6sTnd5skp4yHlV91D0_o26wiwFRhDlCxhk2-UNZVAtlbgQYHYx',
            },
            method: 'GET'
        }).then(function (response) {
            console.log(response)
            let myBuinesses = response.businesses;

            for (let i = 0; i < 3; i++) {
                businessResults.push(myBuinesses[Math.floor(Math.random() * myBuinesses.length)]);
            }
            console.log(businessResults);

            for (let i = 0; i < businessResults.length; i++) {
                var name = businessResults[i].name
                var image = $('<img>').attr("src", businessResults[i].image_url);
                var site = $('<a>');
                var siteLink = $(site).attr("href", businessResults[i].url).text('Visit this restaurant on Yelp!');

                if (i === 0) {
                    $("#btnOne").append(name);
                    $('#one').append(image);
                    $('#one').append(siteLink);

                } else if (i === 1) {
                    $("#btnTwo").append(name);
                    $('#two').append(image);
                    $('#two').append(siteLink);

                } else {
                    $("#btnThree").append(name);
                    $('#three').append(image);
                    $('#three').append(siteLink);
                }
            }
        })
    }
})



