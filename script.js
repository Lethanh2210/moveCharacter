/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = 50;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }
    this.moveDown = function () {
        this.top += this.speed;

    }
    this.moveUp = function () {
        this.top -= this.speed;
    }
    this.setSpeed = function (Speed) {
        this.speed = Speed;
        return this.speed;
    }
    this.moveLeft = function () {
        this.left -= this.speed;
    }


}

let flag = 'moveDown';

function setFlag() {
  if (hero.top <= 0 && hero.left < window.innerWidth - hero.size) {
    return 'moveRight';
  } else if (hero.left >= window.innerHeight - hero.size && hero.top < window.innerHeight - hero.size) {
    return 'moveDown';
  } else if (hero.top >= window.innerHeight - hero.size && hero.left > 0) {
    return 'moveLeft'
  } else if (hero.left <= 0 && hero.top > 0) {
    return 'moveUp';
  }
}
//   if (hero.top === window.innerHeight - hero.size && hero.left === 0) {
//     flag = 'moveRight'
//     return flag;
//   } else if (hero.left === 0 && hero.top === 0) {
//     flag = 'moveUp'
//     return flag;
//   } else if (hero.top ===  0 && hero.left === window.innerWidth-hero.size) {
//     flag = 'moveLeft'
//     return flag;
//   } else if (hero.left === window.innerWidth - hero.size && hero.top === window.innerHeight - hero.size) {
//     flag = 'moveDown'
//     return flag;
//   }else return flag ;
// }

let hero = new Hero('pikachu.png', 0, 0, 200);

function start() {
    flag = setFlag();
    switch (flag) {
        case 'moveRight':
            hero.moveRight();
            break;
        case 'moveLeft':
            hero.moveLeft();
            break;
        case 'moveUp':
            hero.moveUp();
            break;
        case 'moveDown':
            hero.moveDown();
            break;
    }


    // if(hero.top === window.innerHeight - hero.size   hero.left - hero.size === window.innerWidth ) {
    //   hero.moveBottom();
    // }else if(hero.left <  window.innerWidth - hero.size || hero.left - hero.size === 0) {
    //   hero.moveRight();
    // }
    // }else if(hero.left >= window.innerWidth - hero.size || hero.top - hero.size >= 0){
    //     hero.moveTop();
    //   }else if(hero.top >= window.innerHeight - hero.size || hero.left - hero.size >= 0){
    //     hero.moveRight();
    //   }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 60)
}

start();