$(document).ready(function() {
// Set global variables

// PLAYER VARIABLES
var eachAtk = 1;
var player;
var enemy;

// Set character objects

var yasuo = {
    hp: 200,
    atk: function() {
        var atkDmg = 10 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 5;
    },
    imgPlayer: "assets/images/yasuo/yasuo_1.gif",
    
    imgEnemy: "assets/images/yasuo/yasuo_2.gif",

    icon: "assets/images/yasuo/yasuoSquare.png"
}

var zed = {
    hp: 180,
    atk: function() {
        var atkDmg = 12 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 4;
    },
    imgPlayer: "assets/images/zed/zed_1.gif",
    
    imgEnemy: "assets/images/zed/zed_2.gif",

    icon: "assets/images/zed/zedSquare.png",
}

var link = {
    hp: 220,
    atk: function() {
        var atkDmg = 5 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 10;
    },
    imgPlayer: "assets/images/link/link_1.gif",
    
    imgEnemy: "assets/images/link/link_2.gif",

    icon: "assets/images/link/linkSquare.png",

    bio: "Tempor ground round kielbasa, ball tip ut in sed. Capicola ut boudin eiusmod anim spare ribs sirloin quis. Pork loin pork tenderloin landjaeger turkey boudin. Ham ham hock occaecat bresaola brisket turkey bacon porchetta. Pariatur ut chuck irure. Est hamburger laboris picanha ea, in ribeye fugiat pariatur exercitation ut nisi laborum.",
}

var cloud = {
    hp: 190,
    atk: function() {
        var atkDmg = 7 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 7;
    },
    imgPlayer: "assets/images/cloud/cloud_1.gif",

    imgEnemy: "assets/images/cloud/cloud_2.gif",

    icon: "assets/images/cloud/cloudSquare.jpg",
}


// CONSOLE.LOG TEST ///////////////////////

player = zed;
enemy = link;

$("#playerImage").append("<img src=" + player.imgPlayer + ">");
$("#enemyImage").append("<img src=" + enemy.imgEnemy + ">");

//////////////////////////////////////////


// Set characters for player to choose
var selectLink = $("#link").append("<img src=" + link.icon + ">");
var selectZed = $("#zed").append("<img src=" + zed.icon + ">");
var selectCloud = $("#cloud").append("<img src=" + cloud.icon + ">");
var selectYasuo = $("#yasuo").append("<img src=" + yasuo.icon + ">");

// Add event listener to characters
$(selectLink).click(function() {
    alert("You picked Link!");
});
$(selectZed).click(function() {
    alert("You picked Zed!");
});
$(selectCloud).on("click", function() {
    alert("You picked Cloud!");
});
$(selectYasuo).on("click", function() {
    alert("You picked Yasuo!");
});

var oldData = $("#storyBox").html();
var timeout;
// Add hover on characters to show stats and story
$(selectLink).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(link.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        $("#storyBox").html(oldData);
});

$(selectZed).click(function() {
    alert("You picked Zed!");
});
$(selectCloud).on("click", function() {
    alert("You picked Cloud!");
});
$(selectYasuo).on("click", function() {
    alert("You picked Yasuo!");
});

// If player chooses character x then appendTo player box
// then appendTo the other characters to enemy box
// then function an image rotation for enemy characters
// disable event listener to player's character
// add new event listener to enemy characters
// if player clicks on enemy x
// check if enemy exist in defend box, if true print enemy already exist
// else if no enemy exist in defend box, appendTo defend box

// add event listener to attack button
// upon press, if enemy exist in defend box
// take player atkDmg and sub it from enemy hp
// print attack narration to message screen using array and randomly gen index
// return new hp and atkDmg
// check if enemy hp is below 0, if true remove enemy
// else if any more enemy exist, if true print pick new enemy
// else if no more enemy exist and player's hp is above 1, player wins
// else if, player hp is above 1 and enemy exist,
// take enemy atkDmg and sub it from player hp
// print attack narration to message screen using array and randomly gen index
// return new hp
// check if player hp is below 0, if true player loses
// if player loses, print death narration and print press play again


}); // DOCUMENT READY CLOSING