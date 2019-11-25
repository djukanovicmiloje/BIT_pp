let canvas = document.getElementById('screen');
ctx = canvas.getContext('2d');

const GAME_HEIGHT = 1000;
const GAME_WIDTH = 1500;
const CELL_HEIGHT = 20;

class Cell {
    constructor(x, y, height){
        this.position = {
            x,
            y
        };

        this.life = false;
        this.lifeLastGeneration = false;
        this.height = height;
    }
    setLife(life){
        this.life = life;
        this.lifeLastGeneration = life;
    }
    draw(){
        if(!this.life) return;

        let x_distance = this.position.x * this.height;
        let y_distance = this.position.y * this.height;
        
        ctx.fillRect(x_distance, y_distance, this.height, this.height)
    }
    findNeighbours(cells){
        // N  N  N  (x - 1, y -1) (x, y -1) (x + 1, y -1)
        // N  X  N  (x - 1, y) (x + 1, y)
        // N  N  N  (x - 1, y + 1) (x, y + 1) (x + 1, y + 1)
        let positionX = this.position.x;
        let positionY = this.position.y;

        let aliveCount = 0; 

        cells.forEach(function (cell){                     
            
            if(cell.position.y === positionY - 1){
                if(cell.position.x === positionX - 1 || cell.position.x === positionX || cell.position.x === positionX + 1){
                    if(cell.lifeLastGeneration){
                        aliveCount++;
                    }
                }
            }
            if(cell.position.y === positionY){
                if(cell.position.x === positionX - 1  || cell.position.x === positionX + 1){
                    if(cell.lifeLastGeneration){
                        aliveCount++;
                    }
                }
            }
            if(cell.position.y === positionY + 1){
                if(cell.position.x === positionX - 1 || cell.position.x === positionX || cell.position.x === positionX + 1){
                    if(cell.lifeLastGeneration){
                        aliveCount++;
                    }
                }
            }
        })
        return aliveCount;
    }
    updateLife(cells){
        const aliveNeighbours = this.findNeighbours(cells);
        if(this.life){
            if(!(aliveNeighbours == 2 || aliveNeighbours == 3)){                
                this.life = false;                
            }
        } else {
            if(aliveNeighbours === 3){               
                this.life = true;
            }
        }
    }
    updateLifeLastGeneration(){
        this.lifeLastGeneration = this.life;
    }
}

let cells = [];

function createCells(){
    for(let i = 0; i < GAME_WIDTH / CELL_HEIGHT; i++){
        for(let j = 0; j < GAME_HEIGHT/ CELL_HEIGHT; j++){
            let cell = new Cell(i, j, CELL_HEIGHT);            
            cells.push(cell);
        }
    }
}
const lineWidth = 2;
createCells();
drawGrid();

canvas.addEventListener('click', function(event){
    let x = parseInt(event.offsetX / CELL_HEIGHT);
    let y = parseInt(event.offsetY / CELL_HEIGHT);

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    drawGrid();
    cells.forEach(function(cell){
        if(cell.position.x === x && cell.position.y === y){
            cell.setLife(true);
        }
        cell.draw();
    })
})

function drawGrid(){
    for(let i = 0; i < GAME_HEIGHT/CELL_HEIGHT; i++){
        ctx.fillRect(0, i * CELL_HEIGHT, GAME_WIDTH, lineWidth);
    }
    for(let i = 0; i < GAME_WIDTH/CELL_HEIGHT; i++){
        ctx.fillRect( i * CELL_HEIGHT, 0, lineWidth, GAME_HEIGHT);
    }
}

function gameLoop(){    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    drawGrid();
    cells.forEach(function (cell){
        cell.updateLife(cells);
        cell.draw();
    })
    cells.forEach(function (cell){
        cell.updateLifeLastGeneration();
    })    
}

window.addEventListener('keypress',function(){
    setInterval(gameLoop, 500);    
})

