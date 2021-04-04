window.addEventListener('load', start);
		function start () {
			var ball = document.getElementById('ball');
			var butt = document.getElementById('StartButt');
			var startMove;
			var speed = 10;
			var	direction = 1;
		
			if (ball) {
				ball.addEventListener('click', startGoing);
				butt.addEventListener('click', stopGoing);

				function startGoing () {
					startMove = setInterval(startMoving, 1000);
					butt.value = 'Stop';
				}

				function stopGoing () {
					clearInterval(startMove);
				}
				//0 120
				function startMoving () {
					var ballLeftPos = ball.offsetLeft;
					var ballRightPos = ballLeftPos + ball.offsetWidth;
					ball.style.left = (ballLeftPos + speed * direction) + 'px';
					if (ballRightPos === document.body.offsetWidth) {
						ball.style.left = 0;
						ball.style.right = 120;
					}
				}
			}
		}