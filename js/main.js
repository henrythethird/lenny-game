
var drawables = [];
var time = (new Date()).getTime();

var scene = new Scene(0, 0, 1000, 600);

var lastSpawn = 0;

function draw() {
    var newTime = (new Date()).getTime();
    var delta = (newTime - time) / 1000.0;

    if ((newTime - lastSpawn) / 1000 > 4) {
        drawables.push(new Enemy(1000, 400, 100, 100));
        lastSpawn = newTime;
    }

    drawables.forEach(function (drawable1) {
        drawables.forEach(function (drawable2) {
            if (drawable1 === drawable2) {
                return;
            }

            if (!drawable1.collidable || !drawable2.collidable) {
                return;
            }

            if (!drawable1.alive || !drawable2.alive) {
                return;
            }

            const xCollides = drawable2.x >= drawable1.x && drawable2.x <= (drawable1.x + drawable1.width);
            const yCollides = drawable2.y >= drawable1.y && drawable2.y <= (drawable1.y + drawable1.height);

            if (xCollides && yCollides) {
                drawable1.collide(drawable2);
                drawable2.collide(drawable1);
            }
        })
    })

    drawables.forEach((drawable) => {
        drawable.update(delta);
    });

    drawer.clear();

    drawables.forEach((drawable) => {
        drawable.draw();
    });

    time = newTime;
}

drawables.push(scene);
drawables.push(new Player(100, 400, 100, 100));

setInterval(draw, 1000 / 60);


/*

+-----+
| 1 +-----+
+---|  2  |
    +-----+





*/