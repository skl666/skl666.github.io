// 		document.addEventListener('plusready', function(){
// 			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
// 			
// 		});
//点击开始游戏,startpage消失
//随机出现食物,出现三节蛇开始运动
//上下左右 ,根据方向改变方向运动
//判断是否吃到食物,食物消失,蛇加一
//判断游戏结束,弹出框
var startBtn = document.getElementById('startBtn');
var startP = document.getElementById('startP');
var startPage = document.getElementById('startPage');
var lose = document.getElementById('lose');
var loserScore = document.getElementById('loserScore');
var close = document.getElementById('close');
var content = document.getElementById('content');
var startPage = document.getElementById('startPage');
var fxmk = document.getElementById('fxmk');
var fxup=document.getElementById('fxup');
var fxdown=document.getElementById('fxdown');
var fxleft=document.getElementById('fxleft');
var fxright=document.getElementById('fxright');
var snakeMove;
speed = 400;
var startGameBool = true;
var startPaushBool = true;
init();

function init() {
	//	地图
	this.mapW = parseInt(getComputedStyle(content).width);
	this.mapH = parseInt(getComputedStyle(content).height);
	this.mapDiv = content;
	//  食物
	this.foodW = 20;
	this.foodH = 20;
	this.foodX = 0;
	this.foodY = 0;
	//  蛇
	this.snakeW = 20;
	this.snakeH = 20;
	this.snakeBody = [
		[4, 2, 'head'],
		[3, 2, 'body'],
		[2, 2, 'body']
	];
	//  游戏属性
	this.direct = 'right';
	this.left = false;
	this.right = false;
	this.up = true;
	this.down = true;
	this.score = 0;
	bindEvent();
}

function startGame() {
	startPage.style.display = 'none';
	startP.style.display = 'block';
	food();
	snake();
}

function food() {
	var food = document.createElement('div');
	food.style.width = this.foodW + 'px';
	food.style.height = this.foodH + 'px';
	food.style.position = 'absolute';
	this.foodX = Math.floor(Math.random() * (this.mapW / 20));
	this.foodY = Math.floor(Math.random() * (this.mapH / 20));
	food.style.left = this.foodX * 20 + 'px';
	food.style.top = this.foodY * 20 + 'px';
	this.mapDiv.appendChild(food).setAttribute('class', 'food');
}

function snake() {
	for(var i = 0; i < this.snakeBody.length; i++) {
		var snake = document.createElement('div');
		snake.style.width = this.snakeW + 'px';
		snake.style.height = this.snakeH + 'px';
		snake.style.position = 'absolute';
		snake.style.left = this.snakeBody[i][0] * 20 + 'px';
		snake.style.top = this.snakeBody[i][1] * 20 + 'px';
		snake.classList.add(this.snakeBody[i][2]);
		this.mapDiv.appendChild(snake).classList.add('snake');
//		switch(this.direct) {
//			case 'right':
//				break;
//			case 'up':
//				snake.style.transform = 'rotate(270deg)';
//				break;
//			case 'left':
//				snake.style.transform = 'rotate(180deg)';
//				break;
//			case 'down':
//				snake.style.transform = 'rotate(90deg)';
//				break;
//			default:
//				break;
//		}
	}
}

function move() {
	for(var i = this.snakeBody.length - 1; i > 0; i--) {
		this.snakeBody[i][0] = this.snakeBody[i - 1][0];
		this.snakeBody[i][1] = this.snakeBody[i - 1][1];
	}
	switch(this.direct) {
		case 'right':
			this.snakeBody[0][0] += 1;
			break;
		case 'up':
			this.snakeBody[0][1] -= 1;
			break;
		case 'left':
			this.snakeBody[0][0] -= 1;
			break;
		case 'down':
			this.snakeBody[0][1] += 1;
			break;
		default:
			break;
	}
	removeClass('snake');
	snake();
	if(this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
		var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
		var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
		switch(this.direct) {
			case 'right':
				this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body'])
				break;
			case 'up':
				this.snakeBody.push([snakeEndX, snakeEndY - 1, 'body'])
				break;
			case 'left':
				this.snakeBody.push([snakeEndX - 1, snakeEndY, 'body'])
				break;
			case 'down':
				this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body'])
				break;
			default:
				break;
		}
		this.score += 1;
		removeClass('food');
		food();
	}
	//	判断出边距
	if(this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {
		relodGame();
	}
	if(this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
		relodGame();
	}
	var snakeHX = this.snakeBody[0][0];
	var snakeHY = this.snakeBody[0][1];
	for(var i = 1; i < this.snakeBody.length; i++) {
		if(snakeHX == this.snakeBody[i][0] && snakeHY == this.snakeBody[i][1]) {
			relodGame();
		}
	}
}

function relodGame() {
	removeClass('snake');
	removeClass('food');
	clearInterval(snakeMove);
	this.snakeBody = [
		[4, 2, 'head'],
		[3, 2, 'body'],
		[2, 2, 'body']
	];
	this.direct = 'right';
	this.left = false;
	this.right = false;
	this.up = true;
	this.down = true;

	lose.style.display = 'block';
	loserScore.innerHTML = "得分" + ":" + this.score;
	this.score = 0;
	startGameBool = true;
	startPaushBool = true;
	startP.setAttribute('src', 'img/ks.png');
}

function removeClass(className) {
	var ele = document.getElementsByClassName(className);
	while(ele.length > 0) {
		ele[0].parentNode.removeChild(ele[0]);
	}
}

function setDerict(code) {
	switch(code) {
		case 37:
			if(this.left) {
				this.direct = 'left';
				this.left = false;
				this.right = false;
				this.up = true;
				this.down = true;
			}
			break;
		case 38:
			if(this.up) {
				this.direct = 'up';
				this.left = true;
				this.right = true;
				this.up = false;
				this.down = false;
			}
			break;
		case 39:
			if(this.right) {
				this.direct = 'right';
				this.left = false;
				this.right = false;
				this.up = true;
				this.down = true;
			}
			break;
		case 40:
			if(this.down) {
				this.direct = 'down';
				this.left = true;
				this.right = true;
				this.up = false;
				this.down = false;
			}
			break;
		default:
			break;
	}
}

function bindEvent() {
	close.onclick = function() {
		lose.style.display = 'none';
	}
	startBtn.onclick = function() {
		startAndPaush();
	}
	startP.onclick = function() {
		startAndPaush();
	}
}

function startAndPaush() {
	lose.style.display = 'none';
	if(startPaushBool) {
		if(startGameBool) {
			startGame();
			fxmk.style.display = 'block';
			startPaushBool = false;
		}
		startP.setAttribute('src', 'img/zt.png');
		document.onkeydown = function(e) {
			var code = e.keyCode
			setDerict(code);
		}
        fxleft.onclick=function(){
        	var code=37;
        	
        	setDerict(code);
        }
        fxup.onclick=function(){
        	var code=38;
        	setDerict(code);
        }
        fxright.onclick=function(){
        	var code=39;
        	setDerict(code);
        }
        fxdown.onclick=function(){
        	var code=40;
        	setDerict(code);
        }
        
		snakeMove = setInterval(function() {
			move();
		}, speed);
		startPaushBool = false;
		startGameBool = false;
	} else {
		startP.setAttribute('src', 'img/ks.png');
		clearInterval(snakeMove);
		document.onkeydown = function(e) {
			e.returnValue = false;
			return false;
		}
		startPaushBool = true;
	}
}