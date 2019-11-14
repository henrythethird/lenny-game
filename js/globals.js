const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const settings = {
    width: 1000,
    height: 600,
};

const drawer = {
    clear() { 
        context.clearRect(0, 0, settings.width, settings.height); 
    },
    drawText(text, x, y, font = FONT_GAMEARCADE, size = "30px", color = "white", align = "center") {
        context.font = size + "'" + font + "'";
        context.fillStyle = color;
        context.textAlign = align;
        context.fillText(text, x, y);
    },
    drawRect(x, y, w, h) {
        context.fillRect(x, y, w, h);
    },
    drawImage(entity, image) {
        //context.save();

        //context.translate(entity.x + entity.rotationCenter.x, entity.y + entity.rotationCenter.y);
        //context.rotate(entity.rotation);

        context.drawImage(image, entity.x, entity.y, entity.width, entity.height);
        
        //context.restore();
    },
    drawSpriteImage(entity, image, offsetX, offsetY, frameWidth, frameHeight) {
        context.drawImage(image, offsetX, offsetY, frameWidth, frameHeight, entity.x, entity.y, entity.width, entity.height);
    }
};