class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    
    maxLevel: number;
    upScore: number;

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore(){
        this.scoreEle.innerText = ++this.score + '';
        //判断分数有多少
        if(this.score % this.upScore === 0){
            
            this.levelUp()
        }
    }
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerText = ++this.level + '';
        }
    }
}

export default ScorePanel

//测试代码
// const score = new ScorePanel()
// for(let i = 0; i<200;i++){
//     score.addScore()
// }