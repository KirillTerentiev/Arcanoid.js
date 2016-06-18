var _renderer = (function() {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) {
		setTimeout(callback, 1000 / 60);
	};
})();

var _engine = function () {				//функция представляющая игровой цикл
	console.log('игровой цикл не инициализирован');
};
var startGame = function (game) {		//функция для старта игры
	if(typeof game == 'function') {
		_engine = game;
	};
	gameLoop();
};
var setGame = function(game) {			
	if(typeof game == 'function'){
		_engine = game;
	}
};
var gameLoop = function() {				//обрабатывает выполнение игрового цикла
	_engine();							//запуск engine()
	_renderer(gameLoop);				//перезапуск самой-себя(рекурсия)
};
