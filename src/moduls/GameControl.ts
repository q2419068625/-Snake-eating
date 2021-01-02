import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl{
    //定义三个属性
    snake: Snake;
    //食物
    food: Food;
    //记分牌
    scorePanel: ScorePanel;

    //创建一个属性来存储蛇的存储方向
    direction: string = ''

    //创建一个属性来记录游戏是否结束
    isLive = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init()
    }

    //游戏初始化方法，调用后游戏开始
    init(){
        //绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));

        this.run();
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent){
        this.direction = event.key
    }  


    //创建一个控制蛇移动的方法
    run(){
        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        //根据按键来修改X和Y值
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                //向上移动 top 减少
                Y -= 10;
                break; 
            case "ArrowDown":
            case "Down":
                 //向上移动 top 增加
                 Y += 10;
                break;    
            case "ArrowLeft":
            case "Left":
                 //向左移动 left 减少
                 X -= 10;
                break;  
            case "ArrowRight":
            case "Right":
                //向左移动 left 增加
                X += 10;
                break;         
        }
        
        //检查蛇是否吃到食物
        this.checkEat(X,Y);

        try {
            //修改蛇的X和Y值
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            // 进入到catch 说明出现了异常，游戏结束 弹出一个消息提示框
            alert(error.message+' GAME OVER!');
            //将 isLive 设置为false
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1)*30)
    }

    // 定义一个方法，用来检查是否吃到食物
    checkEat(X: number,Y: number){
        if(X === this.food.X && Y === this.food.Y){
            //食物的位置要进行重置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇要增加一节
            this.snake.addBody();
        }
    }

   

}

export default GameControl