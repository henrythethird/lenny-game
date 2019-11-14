class Car extends Entity {
    initialize() {
        super.initialize();

        this.image = new Image;
        this.image.src = 'resources/images/car.png';

        this.defaultRotationCenter = {
            x: this.width / 2,
            y: this.height,
        };

        this.driftCenter = {
            x: this.width / 2,
            y: this.height / 2,
        };

        this.rotationCenter = this.defaultRotationCenter;

        this.acceleration = 0;

        this.rotation = Math.PI / 2;

        this.velocity = {
            x: 0,
            y: 0,
            angular: 0,
        };
    }

    update(dt) {
        const isBreaking = keyboard.isPressed(KEY_SPACE);
        const friction = isBreaking ? 0.9 : 0.95;
        const angularFriction = 0.95;

        if (isBreaking || !(keyboard.isPressed(KEY_UP) || keyboard.isPressed(KEY_DOWN))) {
            this.acceleration = 0;
        } else {
            if (keyboard.isPressed(KEY_UP)) {
                this.acceleration = 10;
            } else if (keyboard.isPressed(KEY_DOWN)) {
                this.acceleration = -5;
            }
        }

        this.velocity.x += this.acceleration * Math.sin(this.rotation);
        this.velocity.y -= this.acceleration * Math.cos(this.rotation);

        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.angular *= angularFriction;
        
        const speed = Math.sqrt(Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2));

        if (keyboard.isPressed(KEY_LEFT)) {
            this.velocity.angular = -1 * speed / 190;
        }

        if (keyboard.isPressed(KEY_RIGHT)) {
            this.velocity.angular = 1 * speed / 190;
        }

        this.x += this.velocity.x * dt;
        this.y += this.velocity.y * dt;
        this.rotation += this.velocity.angular * dt;
    }

    draw() {
        drawer.drawImage(this, this.image);
    }
}