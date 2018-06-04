$(document).ready(function() {
// Set global variables

// PLAYER VARIABLES
var eachAtk = 1;
var player;
var enemy;

// Set character objects

var yasuo = {
    name: "Yasuo",
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

    icon: "assets/images/yasuo/yasuoSquare.png",

    bio: "Spicy jalapeno bacon ipsum dolor amet t-bone tail hamburger pancetta. Buffalo burgdoggen turkey, turducken pastrami alcatra porchetta jowl. Short loin cupim beef ribs porchetta kielbasa filet mignon kevin salami t-bone. Tail turducken shoulder pancetta. Jowl cupim pancetta ribeye kevin swine beef spare ribs capicola tenderloin bacon frankfurter prosciutto fatback meatball. Short loin porchetta kevin, tongue tri-tip bresaola swine t-bone salami. Corned beef fatback sirloin pork loin shank meatloaf pastrami pork belly filet mignon bacon alcatra beef cupim pork.",
}

var zed = {
    name: "Zed",
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

    bio: "Bresaola capicola strip steak salami corned beef, jerky spare ribs. Tongue shankle andouille, biltong brisket ham hock venison spare ribs turkey drumstick pork belly t-bone strip steak kielbasa. Filet mignon ground round tenderloin jowl sirloin tri-tip spare ribs meatloaf tail picanha. Spare ribs ham ground round pork belly flank, kielbasa tenderloin pastrami cow. Flank short ribs andouille porchetta, bacon buffalo jowl. Chicken tri-tip brisket hamburger, capicola frankfurter t-bone andouille.",
}

var link = {
    name: "Link",
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
    name: "Cloud",
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

    bio: "Pastrami porchetta ham short ribs, frankfurter chicken shoulder ball tip beef capicola rump pork chop chuck. Picanha andouille short loin, strip steak meatball filet mignon hamburger beef sausage pork belly salami tri-tip pastrami venison. Flank hamburger rump fatback beef ribs ground round sirloin pork loin shank capicola prosciutto salami ball tip pastrami. Cow pig short loin prosciutto, shankle sirloin pork chop frankfurter pork. Ground round boudin hamburger, t-bone meatball sirloin chuck pig picanha burgdoggen tenderloin shankle cupim turducken fatback.",
}


// CONSOLE.LOG TEST ///////////////////////

// enemy = link;

// $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");

//////////////////////////////////////////


// Set characters for player to choose
var selectLink = $("#link").html("<img src=" + link.icon + ">");
var selectZed = $("#zed").html("<img src=" + zed.icon + ">");
var selectCloud = $("#cloud").html("<img src=" + cloud.icon + ">");
var selectYasuo = $("#yasuo").html("<img src=" + yasuo.icon + ">");

// Add event listener to characters
$(selectLink).on("click", function() {
    player = link;
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
});

$(selectZed).on("click", function() {
    player = zed;
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
});

$(selectCloud).on("click", function() {
    player = cloud;
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
});

$(selectYasuo).on("click", function() {
    player = yasuo;
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
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

$(selectZed).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(zed.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        $("#storyBox").html(oldData);
});

$(selectCloud).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(cloud.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        $("#storyBox").html(oldData);
});

$(selectYasuo).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(yasuo.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        $("#storyBox").html(oldData);
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