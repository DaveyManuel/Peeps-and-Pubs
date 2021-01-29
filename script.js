$( document ).ready(function() {

    //Functionality for drinking buddies form on Welcome Page 

    let input = $("#input")
    let emptyUnorderedList = $("#emptyList")


    input.val(localStorage.getItem('drinkingbuddy'))

    console.log(input.val())

    $("#submitBtn").on("click", function(){

       localStorage.setItem('drinkingbuddy', input.val())

       let value = input.val()
       emptyUnorderedList.append('<li id="liValue">' + value + '</li>');

       input.val('');

    })

    $("#clearBtn").on("click", function(){

        emptyUnorderedList.empty();

    })

    // End

})
