var player = {
	level : 1,
	hp : 3,
	x : 50,
	y : 460,
	width : 100,
	height : 10,
	color: '#FBAF41',
	speed: 3,
	dx : 0,
	score : 0,

	updScore: function(score) {
		this.score +=score;
		document.getElementById('score').innerHTML = this.score;
	},

	updHp: function(hp){
		this.hp -= hp;
		document.getElementById('hp').innerHTML = this.hp;
	},

	draw: function() {																				//метод для отрисовки объекта игрока
		drawRect(this.x, this.y, this.width, this.height, this.color)								//в функцию из graph.js передаём аргументы из массива player 
	},
	collision : function() {																		//обозначает границы игровой зоны
		if(this.x >= 540){
			this.x = 540;
		};
		if(this.x <= 0){
			this.x = 0;
		};
	},
	move : function() {																				//проверка нажатия клавиш (движение)
		if(isKeyDown('RIGHT')){
			this.x += this.speed;
			this.dx = 1;																		//переопределяем движение шара справа налево
		}else if(isKeyDown('LEFT')){
			this.x -= this.speed;
			this.dx = -1;																			//переопределяем движение шара слева направо
		}else if(isKeyDown('D')){
			this.x += this.speed;
		}else if(isKeyDown('A')){
			this.x -= this.speed;
		}else {
			this.dx = 0;
		}
	},
	init : function(x, w, color) {
		this.x = x;
		this.width = w;
		this.color = color;
	},

};