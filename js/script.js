// JSON DATA
var data = {
        "bruhathkayosaurus": {
            "appeared": -70000000,
            "height": 25,
            "length": 44,
            "order": "saurischia",
            "vanished": -70000000,
            "weight": 135000
        },

        "lambeosaurus": {
            "appeared": -76000000,
            "height": 2.1,
            "length": 12.5,
            "order": "ornithischia",
            "vanished": -75000000,
            "weight": 5000
        },

        "linhenykus": {
            "appeared1": -85000000,
            "height": 0.6,
            "length": 1,
            "order": "theropoda",
            "vanished": -75000000,
            "weight": 3
        },

        "pterodactyl": {
            "appeared": -150000000,
            "height": 0.6,
            "length": 0.8,
            "order": "pterosauria",
            "vanished": -148500000,
            "weight": 2
        },


        "stegosaurus": {
            "appeared": -155000000,
            "height": 4,
            "length": 9,
            "order": "ornithischia",
            "vanished": -150000000,
            "weight": 2500
        },

        "triceratops": {
            "appeared": -68000000,
            "height": 3,
            "length": 8,
            "order": "ornithischia",
            "vanished": -66000000,
            "weight": 11000
        }

    }
    //jquery code starts here
$(document).ready(function() {

    var i = 1;
    //for loop to extract json data 
    for (var key in data) {
        var para = "<p class=leftdata id=data" + i + ">" + key + "</p>";
        i++;
        $("#datal").append(para);
    }
});
// jquery for click function
$(document).on('click', '.leftdata', function() {


    $("#tablelist").empty();
    var content = $(this).attr('id');
    console.log(content);
    //for loop to check the key value
    for (var key in data) {
        console.log($("#" + content).html());
        if ($("#" + content).html() == key) {
            var obj = data[key];

            $("#tablelist").append("<th>" + key + "</th>");
            //for loop to display details
            for (var prop in obj) {
                $("#tablelist").append("<tr><td>" + prop + "</td><td>" + obj[prop] + "</td></tr><br>");
            }
            display();

        }
        // if
    }
    // for
});
// function display starts here 
function display() {

        var width = screen.width;
        if (width < 415)

            displaymobile();

        else
            displaytab();
    }
    // function display ends here
    //function displaymobile starts here
function displaymobile() {

        $("#list").removeClass("left");
        $("#list").addClass("leftmobile");
        //$("#right").removeClass("tabright");
        //$("#right").addClass("rightmobile");
        $("#tablelist").removeClass("mobright");
        $("#tablelist").addClass("rightmobile");
        $("#close").removeClass("butright");
        $("#close").addClass("back");

    }
    //function mobile ends here
    //function displaytab starts here
function displaytab() {
        $("#list").removeClass("leftmobile");
        $("list").addClass("left");
        //$("#right").removeClass("rightmobile");
        //$("right").addClass("tabright");
    }
    //function displaytab ends here
    //function for button
$(document).on('click', '.clickbut', function() {

    $("#list").removeClass("leftmobile");
    $("#list").addClass("left");
    //$("#right").removeClass("rightmobile");
    //$("#right").addClass("mobright");
    $("#tablelist").removeClass("rightmobile");
    $("#tablelist").addClass("mobright");
    $("#close").removeClass("back");
    $("#close").addClass("butright");
});
//code for refresh the page
$(window).on('resize', function(event) {
    location.reload();

});
//jquery code ends here