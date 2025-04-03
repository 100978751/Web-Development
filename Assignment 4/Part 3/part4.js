// === Part 1: Canvas Setup ===
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// === Part 2: Utility Functions ===
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }

  // === Part 3: Ball Class Definition ===
class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }
  
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    update() {
      if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
        this.velX = -this.velX;
      }
  
      if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
        this.velY = -this.velY;
      }
  
      this.x += this.velX;
      this.y += this.velY;
    }
  
    collisionDetect() {
      for (const otherBall of balls) {
        if (this !== otherBall) {
          const dx = this.x - otherBall.x;
          const dy = this.y - otherBall.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < this.size + otherBall.size) {
            this.color = otherBall.color = randomRGB();
          }
        }
      }
    }
  }
// === Part 4: Create and Store Balls ===
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}  