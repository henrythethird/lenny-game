class Enemy extends Entity {
    initialize() {
        this.move = false;
        this.speed = 100;

        // Sceleton
        if (Math.random() > 0.5) {
            this.animation = new Animation('resources/images/sceleton.png', 74, 72, 8, 1/10);

        // Bug
        } else {
            this.y -= 100 + Math.random() * 200;

            this.speed = 200;
            this.animation = new Animation('resources/images/bug.png', 64, 64, 6, 1/10);
            this.move = true;
        }

        this.collidable = true;
        this.totalTime = 0;

        this.originalY = this.y;
        this.down = true;
        this.alive = true;
    }

    update(dt) {
        if (!this.alive) {
            return;
        }

        this.animation.update(dt);

        this.x -= dt * this.speed;
        this.totalTime += dt;

        if (this.move) {
            const direction = this.down ? 1 : -1;

            this.y += direction * 50 * dt;


            if (this.y > this.originalY + 100) {
                this.down = false;
            }

            if (this.y < this.originalY - 100) {
                this.down = true;
            }
        }
    }

    draw() {
        if (!this.alive) {
            return;
        }

        this.animation.draw(this);
    }

    collide(other) {
        if (other instanceof Cart) {
            this.alive = false;
            other.alive = false;
        }
    }
}