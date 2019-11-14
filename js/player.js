class Player extends Entity {
    initialize() {
        this.idleAnimation = new Animation('resources/images/player-idle.png', 64, 64, 8, 1/10);
        this.runAnimation = new Animation('resources/images/player-run.png', 64, 64, 6, 1/10);
        this.jumpAnimation = new Animation('resources/images/player-jump.png', 64, 64, 20, 1/10);

        this.stepSound = new Audio('resources/sound/step.ogg');
        this.jumpSound = new Audio('resources/sound/jump.ogg');
        this.gameOverSound = new Audio('resources/sound/434465_1992856-lq.ogg');

        this.animation = this.idleAnimation;

        this.originalHeight = this.y;

        this.fallingVelocity = 0;
        this.grounded = true;

        this.right = true;

        this.collidable = true;
        this.collisionRect = {
            x: this.x,
            y: this.y,
        }

        this.alive = true;


        this.cartTimeout = 0;
    }

    transitionAnimation(newAnimation) {
        if (this.animation == newAnimation) {
            return;
        }

        this.animation = newAnimation;
        this.animation.reset();
    }

    collide(other) {
        if (!(other instanceof Enemy)) {
            return;
        }

        if (!scene.gameover) {
            this.gameOverSound.play();
            this.alive = false;
        }

        scene.gameover = true;
    }

    update(dt) {
        if (!this.alive) {
            return;
        }

        this.cartTimeout -= dt;

        scene.score += dt;

        this.animation.setInverted(!this.right);

        this.fallingVelocity += 15 * dt;

        this.y += this.fallingVelocity;


        if (keyboard.isPressed(KEY_RIGHT)) {
            this.x += 200 * dt;

            if (this.x > 900) {
                this.x = 900;
            }

            this.right = true;
        }

        if (keyboard.isPressed(KEY_LEFT)) {
            this.x -= 200 * dt;

            if (this.x < 100) {
                this.x = 100;
            }

            this.right = false;
        }

        if (this.y >= this.originalHeight) {
            this.fallingVelocity = 0;
            this.y = this.originalHeight;
            this.grounded = true;
        } else {
            this.grounded = false;
        }

        if ((keyboard.isPressed(KEY_RIGHT) || keyboard.isPressed(KEY_LEFT)) && this.grounded) {
            this.transitionAnimation(this.runAnimation);
            this.stepSound.play();
        }

        if (!this.grounded) {
            this.transitionAnimation(this.jumpAnimation);
        }

        if (keyboard.isPressed(KEY_UP) && this.grounded) {
            this.fallingVelocity = -10.5;
            this.jumpSound.play();
        }

        if (this.grounded && !keyboard.isPressed(KEY_RIGHT) && !keyboard.isPressed(KEY_LEFT)) {
            this.transitionAnimation(this.idleAnimation);
        }

        if (keyboard.isPressed(KEY_SPACE) && this.cartTimeout < 0) {
            drawables.push(new Cart(this.x + this.width, this.y + this.height - 48, 48, 48));
            this.cartTimeout = 5;
        }

        this.animation.update(dt);
    }

    draw() {
        this.animation.draw(this);
    }
}