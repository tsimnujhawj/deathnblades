$(document).ready(function() {

// Set global variables
var oldData = $("#storyBox").html();
var timeout;

// PLAYER VARIABLES
var eachAtk = 1;
var player;
var enemy;

// Set character objects

var yasuo = {
    name: "Yasuo",
    hp: 190,
    atk: function() {
        var atkDmg = 10 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 5;
        return resistance;
    },
    imgPlayer: "assets/images/yasuo/yasuo_1.gif",
    
    imgEnemy: "assets/images/yasuo/yasuo_2.gif",

    icon: "assets/images/yasuo/yasuoSquare.png",

    bio: "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master’s true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
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
        return resistance;
    },
    imgPlayer: "assets/images/zed/zed_1.gif",
    
    imgEnemy: "assets/images/zed/zed_2.gif",

    icon: "assets/images/zed/zedSquare.png",

    bio: "Zed is the first ninja in 200 years to unlock the ancient, forbidden ways. He defied his clan and master, casting off the balance and discipline that had shackled him all his life. Zed now offers power to those who embrace knowledge of the shadows, and slays those who cling to ignorance.",
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
        return resistance;
    },
    imgPlayer: "assets/images/link/link_1.gif",
    
    imgEnemy: "assets/images/link/link_2.gif",

    icon: "assets/images/link/linkSquare.png",

    bio: "The Hero of Time and the wielder of the Triforce of Courage.",
}

var cloud = {
    name: "Cloud",
    hp: 200,
    atk: function() {
        var atkDmg = 7 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 7;
        return resistance;
    },
    imgPlayer: "assets/images/cloud/cloud_1.gif",

    imgEnemy: "assets/images/cloud/cloud_2.gif",

    icon: "assets/images/cloud/cloudSquare.jpg",

    bio: "An arrogant and proud swordsman at first, Cloud introduces himself to AVALANCHE as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. He later discovers more about his past and, with the help of his friends, learns there is more to being a hero than possessing physical strength and fame, developing compassion for the Planet and people he fights to protect. He fights to protect the Planet against his nemesis, Sephiroth.",
}

var twob = {
    name: "2B",
    hp: 155,
    atk: function() {
        var atkDmg = 14 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 5;
        return resistance;
    },
    imgPlayer: "assets/images/2b/2b_1.gif",
    
    imgEnemy: "assets/images/2b/2b_2.gif",

    icon: "assets/images/2b/2bSquare.png",

    bio: "YoRHa No.2 Type B (Battle) or 2B is a blade of quiet determination. As a combat android, she does not encourage idle chatter on frivolous subjects and is generally reticent towards others. She also has high respect for the chain of command and rarely questions her orders, unlike her partner. However, 2B occasionally expresses a notably sardonic wit in the face of certain situations and can even be hot-headed at times.",
}

var ekko = {
    name: "Ekko",
    hp: 180,
    atk: function() {
        var atkDmg = 9 * eachAtk;
        return atkDmg;
    },
    def: function() {
        var resistance = 8;
        return resistance;
    },
    imgPlayer: "assets/images/ekko/ekko_1.gif",
    
    imgEnemy: "assets/images/ekko/ekko_2.gif",

    icon: "assets/images/ekko/ekkoSquare.png",

    bio: "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there’s a threat to his friends he’ll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.",
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
var selectTwob = $("#twob").html("<img src=" + twob.icon + ">");
var selectEkko = $("#ekko").html("<img src=" + ekko.icon + ">");

// Add event listener to characters
$(selectLink).on("click", function() {
    player = link;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>")
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>")
    // TODO: Need to add custom story? Or would that take too long?
    $("#storyBox").html("Nice pick! " + player.name + " is a strong champion! Now, select a")

    $("#enemyBox").append("<img src=" + zed.icon + ">");
    $("#enemyBox").append("<img src=" + cloud.icon + ">");
    $("#enemyBox").append("<img src=" + yasuo.icon + ">");
    $("#enemyBox").append("<img src=" + twob.icon + ">");
    $("#enemyBox").append("<img src=" + ekko.icon + ">");
    setHero()
});

$(selectZed).on("click", function() {
    player = zed;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>")
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>")

    $("#enemyBox").append("<img src=" + link.icon + ">");
    $("#enemyBox").append("<img src=" + cloud.icon + ">");
    $("#enemyBox").append("<img src=" + yasuo.icon + ">");
    $("#enemyBox").append("<img src=" + twob.icon + ">");
    $("#enemyBox").append("<img src=" + ekko.icon + ">");
    setHero()
});

$(selectCloud).on("click", function() {
    player = cloud;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>")
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>")

    $("#enemyBox").append("<img src=" + link.icon + ">");
    $("#enemyBox").append("<img src=" + zed.icon + ">");
    $("#enemyBox").append("<img src=" + yasuo.icon + ">");
    $("#enemyBox").append("<img src=" + twob.icon + ">");
    $("#enemyBox").append("<img src=" + ekko.icon + ">");
    setHero()
});

$(selectYasuo).on("click", function() {
    player = yasuo;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>")
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>")

    $("#enemyBox").append("<img src=" + link.icon + ">");
    $("#enemyBox").append("<img src=" + zed.icon + ">");
    $("#enemyBox").append("<img src=" + cloud.icon + ">");
    $("#enemyBox").append("<img src=" + twob.icon + ">");
    $("#enemyBox").append("<img src=" + ekko.icon + ">");
    setHero()
});

$(selectTwob).on("click", function() {
    player = twob;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>")
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>")

    $("#enemyBox").append("<img src=" + link.icon + ">");
    $("#enemyBox").append("<img src=" + zed.icon + ">");
    $("#enemyBox").append("<img src=" + cloud.icon + ">");
    $("#enemyBox").append("<img src=" + yasuo.icon + ">");
    $("#enemyBox").append("<img src=" + ekko.icon + ">");
    setHero()
});

$(selectEkko).on("click", function() {
    player = ekko;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>")
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>")

    $("#enemyBox").append("<img src=" + link.icon + ">");
    $("#enemyBox").append("<img src=" + zed.icon + ">");
    $("#enemyBox").append("<img src=" + cloud.icon + ">");
    $("#enemyBox").append("<img src=" + yasuo.icon + ">");
    $("#enemyBox").append("<img src=" + twob.icon + ">");
    setHero()
});

// Add hover on characters to show stats and story
$(selectLink).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(link.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        // $("#storyBox").html(oldData);
});

$(selectZed).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(zed.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        // $("#storyBox").html(oldData);
});

$(selectCloud).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(cloud.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        // $("#storyBox").html(oldData);
});

$(selectYasuo).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(yasuo.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        // $("#storyBox").html(oldData);
});

$(selectTwob).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(twob.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        // $("#storyBox").html(oldData);
});

$(selectEkko).hover(
    function() {
    timeout = setTimeout(function() {
    $("#storyBox").html(ekko.bio);}, 100);
    },
    function() {
        clearTimeout(timeout);
        // $("#storyBox").html(oldData);
});

// If player chooses character x then set special button hover
function setHero(){
    if (player === link) {
        console.log("test link");
    }
    if (player === zed) {
        console.log("test zed")
    }
    if (player === cloud) {
        console.log("test cloud")
    }
    if (player === yasuo) {
        console.log("test yasuo")
    }
    if (player === twob) {
        console.log("test 2b")
    }
    if (player === ekko) {
        console.log("test ekko")
    }
};
// to player's special ability
// add event listener to enemy icons
// display character story in story box
// alert player in message box to pick an enemy
// if player pick enemy x, hide enemy icon and display proper enemy gif
// then function an image rotation for enemy characters
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