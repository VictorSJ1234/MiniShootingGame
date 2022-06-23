//shooting
function shoot(enemy){
    enemy.classList.add("dead");
	
	var output = document.querySelector("#numberOfEnemies");
    output.innerHTML = "REMAINING ENEMIES: "+livingEnemies().length;

    if(!livingEnemies().length) {
		var won = document.querySelector("#won");
	    won.style.display = "block";
	}
}

//enemy attacks
function enemyAttacks(enemy){

    enemy.classList.add("showing");

    setTimeout( ()=> {
        enemyShoots(enemy);
    }, 1000);

    setTimeout( ()=> {
        enemy.classList.remove("showing");
    }, 3000);
}


//enemyShoots
function enemyShoots(enemy){

    if(!enemy.classList.contains("dead")) {

		enemy.classList.add("shooting");
		enemyGunShot.play();
		updateHealthPoints(healthPoints - 20);

		setTimeout(()=> {
			enemy.classList.remove("shooting");
		}, 100);

	}

}

/*determine how many enemies left */
function livingEnemies(){
    return document.querySelectorAll(".enemy:not(.dead)");
}

function randomEnemyAttacks() {

	var randomEnemyNo = Math.random() * livingEnemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = livingEnemies()[randomEnemyNo];

	var randomDelay = Math.random() * 3000 + 2000;

	setTimeout( ()=> {
		enemyAttacks(enemy);
		randomEnemyAttacks();
	}, randomDelay);

}

/*health bar*/
var healthPoints = 100;

function updateHealthPoints(points) {

	healthPoints = points;
	var healthBar = document.querySelector("#healthBar");
	healthBar.style.width = points + "%";

	if(healthPoints < 1) {
		var over = document.querySelector("#over");
	    over.style.display = "block";
	}

}

//new game button
function newGame(){
	music.play();
	var game_button = document.querySelector("#game_button");
	game_button.style.display = "none";
	
	var won = document.querySelector("#won");
	won.style.display = "none";

	var over = document.querySelector("#over");
	over.style.display = "none";


	//to show healthbar after pressing start
	var healthBar = document.querySelector("#healthBar");
	healthBar.style.display = "block";

	//to show number of enemies after pressing start
	var numberOfEnemies = document.querySelector("#numberOfEnemies");
	numberOfEnemies.style.display = "block";
	randomEnemyAttacks();
}

//new game button
function restart(){	
	window.location.reload();

}

//game over
function over(){	
	window.location.reload();

}

//for the gunShot
var gunShot = new Audio("bang.mp3");
var enemyGunShot = new Audio("bang2.mp3");
enemyGunShot.volume = 0.6;

//background music
var music = new Audio("backgroundMusic.mp3");
music.loop = true;
music.volume = 0.5;
