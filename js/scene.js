class Scene extends Entity {
    initialize() {
        this.background = new Image;
        this.background.src = 'resources/images/_11_background.png';

        this.foliage = new Image;
        this.foliage.src = 'resources/images/_02_trees and bushes.png';

        this.distantFoliage = new Image;
        this.distantFoliage.src = 'resources/images/_03_distant_trees.png';

        this.ground = new Image;
        this.ground.src = 'resources/images/_01_ground.png';

        this.gameover = false;
        this.score = 0;
    }

    draw(dt) {
        if (this.gameover) {
            drawer.drawText('Game Over!', 100, 400, 'Arial', '70px', 'black', 'left');

            drawer.drawText(Math.floor(this.score * 10)+'', 100, 100, 'Arial', '50px', 'black', 'left');

            return;
        }

        drawer.drawImage(this, this.background);

        drawer.drawImage(this, this.distantFoliage);
        
        drawer.drawImage(this, this.foliage);

        drawer.drawImage(this, this.ground);

        drawer.drawText(Math.floor(this.score * 10)+'', 100, 100, 'Arial', '50px', 'black', 'left');
    }
}