
// Set character objects

var yasuo = {
    hp: 200,
    atk: function() {
        var atkDmg = 10 * eachAtk;
    },
    def: function() {
        var resistance = 5;
    },
    imgPlayer: function() {
        var yasuoPlayer = Image();
    yasuoPlayer.src = "assets/images/yasuo/yasuo_1.gif"
    },
    imgEnemy: function() {
        var yasuoEnemy = Image();
    yasuoPlayer.src = "assets/images/yasuo/yasuo_2.gif"
    }
}

var zed = {
    hp: 180,
    atk: function() {
        var atkDmg = 12 * eachAtk;
    },
    def: function() {
        var resistance = 4;
    },
    imgPlayer: function() {
        var zedPlayer = Image();
        zedPlayer.src = "assets/images/zed/zed_1.gif"
    },
    imgEnemy: function() {
        var zedEnemy = Image();
        zedPlayer.src = "assets/images/zed/zed_2.gif"
    }
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
    imgPlayer: function() {
        var linkPlayer = Image();
        linkPlayer.src = "assets/images/link/link_1.gif"
    },
    imgEnemy: function() {
        var linkEnemy = Image();
        linkPlayer.src = "assets/images/link/link_2.gif"
    }
}

var cloud = {
    hp: 190,
    atk: function() {
        var atkDmg = 7 * eachAtk;
    },
    def: function() {
        var resistance = 7;
    },
    imgPlayer: function() {
        var cloudPlayer = Image();
        cloudPlayer.src = "assets/images/cloud/cloud_1.gif"
    },
    imgEnemy: function() {
        var cloudEnemy = Image();
        cloudPlayer.src = "assets/images/cloud/cloud_2.gif"
    }
}

// Set global variables
var eachAtk = 1;


// CONSOLE.LOG TEST
var playerDmg = yasuo.atk;
console.log(yasuo.atk);


//////////////////////////////////////////


// Set characters for player to choose
// Add event listener to characters
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


