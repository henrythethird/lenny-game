class Cart extends Entity {
    initialize() {
        this.animation = new Animation('resources/images/cart.png', 48, 48, 4, 1/8);
        this.collidable = true;
        this.alive = true;
    }

    update(dt) {
        if (!this.alive) {
            return;
        }

        this.animation.update(dt)

        this.x += 100 * dt;
    }

    draw() {
        if (!this.alive) {
            return;
        }

        this.animation.draw(this);
    }

    collide(other) {
        console.log('collide', other);
    }
}