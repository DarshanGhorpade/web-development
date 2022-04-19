// To add css styles using jQuery

// console.log($("h1").css("color", "green"));

// $("h1").css("font-size", "5rem");

// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

// $("h1").addClass("big-title margin-50");



// Add text to element using jQuery
// $("h1").text("Good Bye");


// Change text in button element
// $("button").html("<em>Hey</em>");



// Manipulating attributes with jQuery
// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");



// Adding eventlisteners with jQuery
// $("h1").click(function() {
//         $("h1").css("color", "purple");
//     });


// This is javascript
// for(var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// and this is jQuery
// $("button").click(function() {
//     $("h1").css("color", "purple");
// });


// $("input").keypress(function(event) {
//     // console.log(event.key);
//     $("h1").text(event.key);
// });


// $("h1").on("mouseover", function() {
//     $("h1").css("color", "green");
// });



// Website animation using jQuery
// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

$("button").on("click", function() {
        $("h1").animate({opacity: 0.5});
    });