function generateVodka(response) {
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < response.drinks.length; i++) {
            var result = response.drinks[Math.floor(Math.random() * response.drinks.length)];
        };
        console.log(result)
        var vodkaName = $("<h1>");
        vodkaName.text("Get yourself a " + result.strDrink + "!!");
        $(".name").append(vodkaName);
        var vodkaImg = $("<img height='300' width='300'>");
        vodkaImg.attr('src', result.strDrinkThumb);
        $(".img").append(vodkaImg);
        var vodkaID = $("<p>");
        vodkaID.text("Drink ID: " + result.idDrink);
        $(".id").append(vodkaID);
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + result.strDrink,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var drinkInstructions = response.drinks[0]
            var vodkaIngredients = $("<ul>").appendTo(".ingredients");
            var i = 1
            while (drinkInstructions["strMeasure" + i]) {
                vodkaIngredients.append("<li>" + drinkInstructions["strMeasure" + i] + " " + drinkInstructions["strIngredient" + i] + "</li>");
                i++
            }
            console.log(vodkaIngredients)
            var vodkaInstructions = $("<h2>");
            vodkaInstructions.text(drinkInstructions.strInstructions);
            $(".instructions").append(vodkaInstructions);
            console.log(vodkaInstructions);
        });
    });
};

$("#vodka").click(function (event) {
    $(".vodkaGif").empty();
    $(".name").empty();
    $(".img").empty();
    $(".id").empty();
    $(".ingredients").empty();
    $(".instructions").empty();
    generateVodka()
});

function generateGin(response) {
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (i = 0; i < response.drinks.length; i++) {
            var result = response.drinks[Math.floor(Math.random() * response.drinks.length)];
        };
        console.log(result)
        var ginName = $("<h1>");
        ginName.text("Get yourself a " + result.strDrink + "!!");
        $(".name2").append(ginName);
        var ginImg = $("<img height='300' width='300'>");
        ginImg.attr('src', result.strDrinkThumb);
        $(".img2").append(ginImg);
        var ginID = $("<p>");
        ginID.text("Drink ID: " + result.idDrink);
        $(".id2").append(ginID);
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + result.strDrink,
            method: "GET"
        }).then(function (response) {
        console.log(response);
        var drinkInstructions = response.drinks[0]
        var ginIngredients = $("<ul>").appendTo(".ingredients2");
        var i = 1
        while (drinkInstructions["strMeasure" + i]) {
            ginIngredients.append("<li>" + drinkInstructions["strMeasure" + i] + " " + drinkInstructions["strIngredient" + i] + "</li>");
            i++
        }
        console.log(ginIngredients)
        var ginInstructions = $("<h2>");
        ginInstructions.text(drinkInstructions.strInstructions);
        $(".instructions2").append(ginInstructions);
        console.log(ginInstructions);
        });
    });
};

$("#gin").click(function (event) {
    $(".ginGif").empty();
    $(".name2").empty();
    $(".img2").empty();
    $(".id2").empty();
    $(".ingredients2").empty();
    $(".instructions2").empty();
    generateGin();
});