class Scene extends Entity {
    initialize() {
        this.background = new Image;
        this.background.src = 'resources/images/background.png';

        this.foliage = new Image;
        this.foliage.src = 'resources/images/trees.png';

        this.distantFoliage = new Image;
        this.distantFoliage.src = 'resources/images/distant_trees.png';

        this.ground = new Image;
        this.ground.src = 'resources/images/ground.png';

        this.gameover = false;
        this.score = 0;
    }

    draw(dt) {
        drawer.drawImage(this, this.background);

        drawer.drawImage(this, this.distantFoliage);
        
        drawer.drawImage(this, this.foliage);

        drawer.drawImage(this, this.ground);

        drawer.drawText(Math.floor(this.score * 10)+'', 100, 100, 'Arial', '50px', 'black', 'left');
	    
	if (this.gameover) {
            drawer.drawText('Game Over!', 100, 400, 'Arial', '70px', 'black', 'left');
        }
    }
}
