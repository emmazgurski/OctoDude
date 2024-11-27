console.log("Bonjour");

$("#feed").on("click", function () {
    console.log("clicked on Feed")
    $("#body").addClass("food")
})

$("#hydrate").on("click", function () {
    console.log("clicked on Hydrate")
    $("#body").addClass("water")
})

$("#dress").on("click", function () {
    console.log("clicked on Dress")
    $("#body").addClass("bow")
})

$("#play").on("click", function () {
    console.log("clicked on Play")
    $("#body").addClass("ball")
})

$("#clean").on("click", function () {
    console.log("clicked on Clean")
    $("#body").addClass("shower")
})