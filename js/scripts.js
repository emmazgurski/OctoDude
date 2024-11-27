console.log("Bonjour");

$("#feed").on("click", function () {
    console.log("clicked on Feed")
    $("#body").addClass("food")
    $("#body").removeClass("shower")
    $("#body").removeClass("water")
    $("#body").removeClass("bow")
    $("#body").removeClass("ball")
})

$("#hydrate").on("click", function () {
    console.log("clicked on Hydrate")
    $("#body").addClass("water")
    $("#body").removeClass("food")
    $("#body").removeClass("shower")
    $("#body").removeClass("bow")
    $("#body").removeClass("ball")
})

$("#dress").on("click", function () {
    console.log("clicked on Dress")
    $("#body").addClass("bow")
    $("#body").removeClass("food")
    $("#body").removeClass("water")
    $("#body").removeClass("shower")
    $("#body").removeClass("ball")
})

$("#play").on("click", function () {
    console.log("clicked on Play")
    $("#body").addClass("ball")
    $("#body").removeClass("food")
    $("#body").removeClass("water")
    $("#body").removeClass("bow")
    $("#body").removeClass("shower")
})

$("#clean").on("click", function () {
    console.log("clicked on Clean")
    $("#body").addClass("shower")
    $("#body").removeClass("food")
    $("#body").removeClass("water")
    $("#body").removeClass("bow")
    $("#body").removeClass("ball")
})