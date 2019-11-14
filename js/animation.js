class Animation {
    constructor(imageUrl, frameWidth, frameHeight, nFrames, frameLag) {
        this.image = new Image;
        this.image.src = imageUrl;

        this.frameTime = 0;
        this.frameCounter = 0;
        this.nFrames = nFrames;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.frameLag = frameLag;

        this.inverted = false;
    }

    setInverted(inverted) {
        this.inverted = inverted;
    }

    reset() {
        this.frameTime = 0;
        this.frameCounter = 0;
    }

    update(dt) {
        this.frameTime += dt;

        this.frameCounter = Math.floor(this.frameTime / this.frameLag) % this.nFrames;
    }

    draw(entity) {
        drawer.drawSpriteImage(entity, this.image, this.frameCounter * this.frameWidth, 0, this.frameWidth, this.frameHeight, this.inverted);
    }
}