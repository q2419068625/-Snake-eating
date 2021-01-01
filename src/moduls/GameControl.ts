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

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init()
    }

    //游戏初始化方法，调用后游戏开始
    init(){
        //绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent){
        console.log(event);
        this.direction = event.key
    }   
}

export default GameControl