var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var player = {
	x: 300,
	y: 200,
	radius: 10,
	color: "#fff"
};

var enemies = [];

function drawPlayer() {
	ctx.beginPath();
	ctx.arc(player.x, player.y, player.radius, 0, 2 * Math.PI);
	ctx.fillStyle = player.color;
	ctx.fill();
}

function drawEnemies() {
	for (var i = 0; i < enemies.length; i++) {
		var enemy = enemies[i];
		ctx.beginPath();
		ctx.arc(enemy.x, enemy.y, enemy.radius, 0, 2 * Math.PI);
		ctx.fillStyle = enemy.color;
		ctx.fill();
	}
}

function updateEnemies() {
	for (var i = 0
        ; i < enemies.length; i++) {
            var enemy = enemies[i];
            enemy.x += enemy.speedX;
            enemy.y += enemy.speedY;
            }
            }
            
            function spawnEnemy() {
            var enemy = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 10,
            color: "#f00",
            speedX: (Math.random() - 0.5) * 5,
            speedY: (Math.random() - 0.5) * 5
            };
            enemies.push(enemy);
            }
            
            function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPlayer();
            drawEnemies();
            updateEnemies();
            if (Math.random() < 0.1) {
            spawnEnemy();
            }
            requestAnimationFrame(gameLoop);
            }
            
            gameLoop();