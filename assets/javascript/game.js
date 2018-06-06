$(document).ready(function() {

// MUSIC PLAYER
    var audioElement = document.createElement('audio');
    audioElement.volume = 0.4;
    audioElement.setAttribute('src', 'assets/sfx/battleOne.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

$("#playMusic").on("click", function() {
    audioElement.play();
    });

$("#pauseMusic").on("click", function() {
    audioElement.pause();
    });


// Set global variables
var oldData = $("#storyBox").html();
var timeout;
var atkFinished = false;
var haveEnemy = false;
var enemy;
var deathMark = 0;

// Var for whether enemy characters are dead
var linkDead = false;
var zedDead = false;
var cloudDead = false;
var yasuoDead = false;
var twobDead = false;
var ekkoDead = false;


var attackNarration = [" dashes forward and slashes, inflicting ", " jumps into the air and slams down, dealing ", " swings in a circle and swipes for ", " lunges forward and pierces for ", " roars bloody murder and then attacks in a frenzy fury for ", " slips, but recovers and stabs for ", " drops the weapon while running, but manages to pick up a rock and throws it for "]

// PLAYER VARIABLES
var eachAtk = 0;
var player = null;

// Restart game button
$("#restartGame").on("click", function() {
    location.reload();
    });


// Set character objects

var yasuo = {
    name: "Yasuo",
    hp: 190,
    atk: function() {
        var atkDmg = 10;
        return atkDmg;
    },
    atkEn: function() {
        var atkDmg = 10;
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
        var atkDmg = 12;
        deathMark+=1;
        return atkDmg;
    },
    atkEn: function() {
        var atkDmg = 12;
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

    specialAttack: function() {
    var spDmg = 12 * deathMark;
    deathMark = 1;
    return spDmg;
    },

    explain: "<strong>Death Mark</strong><br>Zed's basic attack marks his enemy for critial damage. Each stack of Death Mark grants Zed 12 points of damage. After expelling the mark, Zed needs to rebuild the stack.",
}

var link = {
    name: "Link",
    hp: 220,
    atk: function() {
        var atkDmg = 5;
        return atkDmg;
    },
    atkEn: function() {
        var atkDmg = 5;
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

    specialAttack: function() {
    var spDmg = Math.floor(link.hp / 3 + enemy.hp / 3)
    return spDmg;
    },

    explain: "<strong>Triforce of Courage</strong><br>Link taps into the Triforce and deals a massive blow equal to 33% of his current health plus 33% of his target's current health.",
}

var cloud = {
    name: "Cloud",
    hp: 200,
    atk: function() {
        var atkDmg = 7;
        return atkDmg;
    },
    atkEn: function() {
        var atkDmg = 7;
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
    hp: 15500,
    atk: function() {
        var atkDmg = 14;
        return atkDmg;
    },
    atkEn: function() {
        var atkDmg = 14;
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
        var atkDmg = 9;
        return atkDmg;
    },
    atkEn: function() {
        var atkDmg = 9;
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
// console.log(link.specialAttack())


//////////////////////////////////////////


// Set characters for player to choose
var selectLink = $("#link").html("<img src=" + link.icon + ">");
var selectZed = $("#zed").html("<img src=" + zed.icon + ">");
var selectCloud = $("#cloud").html("<img src=" + cloud.icon + ">");
var selectYasuo = $("#yasuo").html("<img src=" + yasuo.icon + ">");
var selectTwob = $("#twob").html("<img src=" + twob.icon + ">");
var selectEkko = $("#ekko").html("<img src=" + ekko.icon + ">");

// Add event listener to characters, PICK A CHARACTER
$(selectLink).on("click", function() {
    player = link;
    linkDead = true;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>")
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>");
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>");
    $("#playerStatsScreen").append("Health: " + player.hp);
    $("#playerNameScreen").html(player.name);

    $("#zedEnemy").append("<img src=" + zed.icon + ">");
    $("#cloudEnemy").append("<img src=" + cloud.icon + ">");
    $("#yasuoEnemy").append("<img src=" + yasuo.icon + ">");
    $("#twobEnemy").append("<img src=" + twob.icon + ">");
    $("#ekkoEnemy").append("<img src=" + ekko.icon + ">");

    $("#specialEx").append(player.explain)
});

$(selectZed).on("click", function() {
    player = zed;
    zedDead = true;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>");
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>");
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>");
    $("#playerStatsScreen").append("Health: " + player.hp);
    $("#playerNameScreen").html(player.name);

    $("#linkEnemy").append("<img src=" + link.icon + ">");
    $("#cloudEnemy").append("<img src=" + cloud.icon + ">");
    $("#yasuoEnemy").append("<img src=" + yasuo.icon + ">");
    $("#twobEnemy").append("<img src=" + twob.icon + ">");
    $("#ekkoEnemy").append("<img src=" + ekko.icon + ">");

    $("#specialEx").append(player.explain)
});

$(selectCloud).on("click", function() {
    player = cloud;
    cloudDead = true;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>");
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>");
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>");
    $("#playerStatsScreen").append("Health: " + player.hp);
    $("#playerNameScreen").html(player.name);

    $("#linkEnemy").append("<img src=" + link.icon + ">");
    $("#zedEnemy").append("<img src=" + zed.icon + ">");
    $("#yasuoEnemy").append("<img src=" + yasuo.icon + ">");
    $("#twobEnemy").append("<img src=" + twob.icon + ">");
    $("#ekkoEnemy").append("<img src=" + ekko.icon + ">");

    $("#specialEx").append(player.explain)
});

$(selectYasuo).on("click", function() {
    player = yasuo;
    yasuoDead = true;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>");
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>");
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>");
    $("#playerStatsScreen").append("Health: " + player.hp);
    $("#playerNameScreen").html(player.name);

    $("#linkEnemy").append("<img src=" + link.icon + ">");
    $("#zedEnemy").append("<img src=" + zed.icon + ">");
    $("#cloudEnemy").append("<img src=" + cloud.icon + ">");
    $("#twobEnemy").append("<img src=" + twob.icon + ">");
    $("#ekkoEnemy").append("<img src=" + ekko.icon + ">");

    $("#specialEx").append(player.explain)
});

$(selectTwob).on("click", function() {
    player = twob;
    twobDead = true;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>");
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>");
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>");
    $("#playerStatsScreen").append("Health: " + player.hp);
    $("#playerNameScreen").html(player.name);

    $("#linkEnemy").append("<img src=" + link.icon + ">");
    $("#zedEnemy").append("<img src=" + zed.icon + ">");
    $("#cloudEnemy").append("<img src=" + cloud.icon + ">");
    $("#yasuoEnemy").append("<img src=" + yasuo.icon + ">");
    $("#ekkoEnemy").append("<img src=" + ekko.icon + ">");

    $("#specialEx").append(player.explain)
});

$(selectEkko).on("click", function() {
    player = ekko;
    ekkoDead = true;
    $("#playerName").html(player.name);
    $("#playerImage").html("<img src=" + player.imgPlayer + ">");
    $("#charBox").hide();
    $("#messageBox").html("You have chosen " + player.name + "!");
    $("#playerStats").append("<img src=" + player.icon + ">");
    $("#playerStats").append("<div>Health: " + player.hp + "</div>");
    $("#playerStats").append("<div>Attack Damage: " + player.atk() + "</div>");
    $("#playerStats").append("<div>Defense: " + player.def() + "</div>");
    $("#playerStatsScreen").append("Health: " + player.hp);
    $("#playerNameScreen").html(player.name);

    $("#linkEnemy").append("<img src=" + link.icon + ">");
    $("#zedEnemy").append("<img src=" + zed.icon + ">");
    $("#cloudEnemy").append("<img src=" + cloud.icon + ">");
    $("#yasuoEnemy").append("<img src=" + yasuo.icon + ">");
    $("#twobEnemy").append("<img src=" + twob.icon + ">");

    $("#specialEx").append(player.explain)
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

// add event listener to enemy icons
var enemyLink = $("#linkEnemy").on("click", function() {
    haveEnemy = true;
    enemy = link;
    $("#enemyName").html(enemy.name);
    $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");
    $("#linkEnemy").hide();
    $("#messageBox").html("You have chosen to fight " + enemy.name + "!");
    $("#enemyStats").html("Health: " + enemy.hp);
    $("#linkEnemy, #zedEnemy, #cloudEnemy, #yasuoEnemy, #twobEnemy, #ekkoEnemy").hide();
});

var enemyZed = $("#zedEnemy").on("click", function() {
    haveEnemy = true;
    enemy = zed;
    $("#enemyName").html(enemy.name);
    $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");
    $("#zedEnemy").hide();
    $("#messageBox").html("You have chosen to fight " + enemy.name + "!");
    $("#enemyStats").html("Health: " + enemy.hp);
    $("#linkEnemy, #zedEnemy, #cloudEnemy, #yasuoEnemy, #twobEnemy, #ekkoEnemy").hide();
});

var enemyCloud = $("#cloudEnemy").on("click", function() {
    haveEnemy = true;
    enemy = cloud;
    $("#enemyName").html(enemy.name);
    $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");
    $("#cloudEnemy").hide();
    $("#messageBox").html("You have chosen to fight " + enemy.name + "!");
    $("#enemyStats").html("Health: " + enemy.hp);
    $("#linkEnemy, #zedEnemy, #cloudEnemy, #yasuoEnemy, #twobEnemy, #ekkoEnemy").hide();
});

var enemyYasuo = $("#yasuoEnemy").on("click", function() {
    haveEnemy = true;
    enemy = yasuo;
    $("#enemyName").html(enemy.name);
    $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");
    $("#yasuoEnemy").hide();
    $("#messageBox").html("You have chosen to fight " + enemy.name + "!");
    $("#enemyStats").html("Health: " + enemy.hp);
    $("#linkEnemy, #zedEnemy, #cloudEnemy, #yasuoEnemy, #twobEnemy, #ekkoEnemy").hide();
});

var enemyTwob = $("#twobEnemy").on("click", function() {
    haveEnemy = true;
    enemy = twob;
    $("#enemyName").html(enemy.name);
    $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");
    $("#twobEnemy").hide();
    $("#messageBox").html("You have chosen to fight " + enemy.name + "!");
    $("#enemyStats").html("Health: " + enemy.hp);
    $("#linkEnemy, #zedEnemy, #cloudEnemy, #yasuoEnemy, #twobEnemy, #ekkoEnemy").hide();
});

var enemyEkko = $("#ekkoEnemy").on("click", function() {
    haveEnemy = true;
    enemy = ekko;
    $("#enemyName").html(enemy.name);
    $("#enemyImage").html("<img src=" + enemy.imgEnemy + ">");
    $("#ekkoEnemy").hide();
    $("#messageBox").html("You have chosen to fight " + enemy.name + "!");
    $("#enemyStats").html("Health: " + enemy.hp);
    $("#linkEnemy, #zedEnemy, #cloudEnemy, #yasuoEnemy, #twobEnemy, #ekkoEnemy").hide();
});

// ATTACK BUTTON
$("#attackBtn").on("click", function() {
    if (haveEnemy == false) {
        $("#messageBox").html("You need to select an enemy to fight!")
    } if (player == null) {
        $("#messageBox").html("You need to select a fighter!")
    } else if (haveEnemy === true && atkFinished === false) {
        $("#messageBox").html(player.name + attackNarration[Math.floor(Math.random() * attackNarration.length)] + player.atk() + " points of damage!")
        enemy.hp = enemy.hp - player.atk();
        $("#enemyStats").html(enemy.hp);
        atkFinished = true;
    } if (enemy.hp <= 0) {
        setTimeout(function(){
            // var victoryShort = document.createElement('audio');
            // victoryShort.volume = 1.0;
            // victoryShort.setAttribute('src', 'assets/sfx/shortVictory.mp3');
            // victoryShort.play();
            // audioElement.play();
            $("#messageBox").html("You have bested " + enemy.name + " in battle! <br> Select a new challenger!");
        }, 1000);
        atkFinished = true;
        showEnemy();
        checkWin()
    } else if (atkFinished === true && enemy.hp >= 1) {
        setTimeout(function(){
        $("#messageBox").html(enemy.name + attackNarration[Math.floor(Math.random() * attackNarration.length)] + enemy.atkEn() + " points of damage!");
        }, 1000);
        player.hp = player.hp - enemy.atkEn();
        $("#playerStatsScreen").html(player.hp);
        atkFinished = false;
    } if (player.hp <= 0 && enemy.hp >= 1) {
        $("#attackBtn").off();
        audioElement.pause();
        var defeatSong = document.createElement('audio');
        defeatSong.volume = 1.0;
        defeatSong.setAttribute('src', 'assets/sfx/gameOverLong.mp3');
        defeatSong.play();
        setTimeout(function(){
            $("#messageBox").html("You have been bested in battle. <br> Click HERE to play again!");
        }, 1000);
        atkFinished = true;
        $("#messageBox").on("click", function() {
        location.reload();
        });
    }
    else if (player.hp <=0 && enemy.hp <= 0) {
        $("#attackBtn").off();
        audioElement.pause();
        var defeatSong = document.createElement('audio');
        defeatSong.volume = 1.0;
        defeatSong.setAttribute('src', 'assets/sfx/gameOverLong.mp3');
        defeatSong.play();
        setTimeout(function(){
            $("#messageBox").html("You have been bested in battle. <br> Click HERE to play again!");
        }, 1000);
        atkFinished = true;
        $("#messageBox").on("click", function() {
        location.reload();
        });
    }
});

// SPECIAL ATTACK
$("#specialBtn").on("click", function() {
    if (haveEnemy == false) {
        $("#messageBox").html("You need to select an enemy to fight!")
    } if (player == null) {
        $("#messageBox").html("You need to select a fighter!")
    } else if (haveEnemy === true && atkFinished === false) {
        $("#messageBox").html(player.name + attackNarration[Math.floor(Math.random() * attackNarration.length)] + player.specialAttack() + " points of damage!")
        enemy.hp = enemy.hp - player.specialAttack();
        $("#enemyStats").html(enemy.hp);
        atkFinished = true;
    } 
    // if (enemy.hp <= 0) {
    //     setTimeout(function(){
    //         // var victoryShort = document.createElement('audio');
    //         // victoryShort.volume = 1.0;
    //         // victoryShort.setAttribute('src', 'assets/sfx/shortVictory.mp3');
    //         // victoryShort.play();
    //         // audioElement.play();
    //         $("#messageBox").html("You have bested " + enemy.name + " in battle! <br> Select a new challenger!");
    //     }, 1000);
    //     atkFinished = true;
    //     showEnemy();
    //     checkWin()
    // } else if (atkFinished === true && enemy.hp >= 1) {
    //     setTimeout(function(){
    //     $("#messageBox").html(enemy.name + attackNarration[Math.floor(Math.random() * attackNarration.length)] + enemy.atk() + " points of damage!");
    //     }, 1000);
    //     player.hp = player.hp - enemy.atk();
    //     $("#playerStatsScreen").html(player.hp);
    //     atkFinished = false;
    //     eachAtk++;
    // } if (player.hp <= 0 && enemy.hp >= 1) {
    //     $("#attackBtn").off();
    //     audioElement.pause();
    //     var defeatSong = document.createElement('audio');
    //     defeatSong.volume = 1.0;
    //     defeatSong.setAttribute('src', 'assets/sfx/gameOverLong.mp3');
    //     defeatSong.play();
    //     setTimeout(function(){
    //         $("#messageBox").html("You have been bested in battle. <br> Click HERE to play again!");
    //     }, 1000);
    //     atkFinished = true;
    //     $("#messageBox").on("click", function() {
    //     location.reload();
    //     });
    // }
    // else if (player.hp <=0 && enemy.hp <= 0) {
    //     $("#attackBtn").off();
    //     audioElement.pause();
    //     var defeatSong = document.createElement('audio');
    //     defeatSong.volume = 1.0;
    //     defeatSong.setAttribute('src', 'assets/sfx/gameOverLong.mp3');
    //     defeatSong.play();
    //     setTimeout(function(){
    //         $("#messageBox").html("You have been bested in battle. <br> Click HERE to play again!");
    //     }, 1000);
    //     atkFinished = true;
    //     $("#messageBox").on("click", function() {
    //     location.reload();
    //     });
    // }
});


function showEnemy() {
        if (link.hp <= 0) {
            $("#linkEnemy").hide();
            linkDead = true;
        } else {
            $("#linkEnemy").show();
        }

        if (zed.hp <= 0) {
            $("#zedEnemy").hide();
            zedDead = true;
        } else {
            $("#zedEnemy").show();
        }

        if (cloud.hp <= 0) {
            $("#cloudEnemy").hide();
            cloudDead = true; 
        } else {
            $("#cloudEnemy").show();
        }

        if (yasuo.hp <= 0) {
            $("#yasuoEnemy").hide();
            yasuoDead = true;
        } else {
            $("#yasuoEnemy").show();
        }

        if (twob.hp <= 0) {
            $("#twobEnemy").hide();
            twobDead = true;
        } else {
            $("twobEnemy").show();
        }

        if (ekko.hp <= 0) {
            $("#ekkoEnemy").hide();
            ekkoDead = true;
        } else {
            $("#ekkoEnemy").show();
        }
}

function checkWin() {
    if (linkDead === true && zedDead === true && cloudDead === true && yasuoDead === true && twobDead === true && ekkoDead === true) {
        setTimeout(function(){
            audioElement.pause();
            var victorySong = document.createElement('audio');
            victorySong.volume = 1.0;
            victorySong.setAttribute('src', 'assets/sfx/gameOver.mp3');
            victorySong.play();
            $("#messageBox").html("You have WON! <br> Click HERE to play again!");
            }, 1000);
            atkFinished = true;
            $("#messageBox").on("click", function() {
            location.reload();
            });
    }
};


}); // DOCUMENT READY CLOSING