//food 类
class Food{
    element: HTMLElement

    constructor(){
        this.element = document.getElementById('food')!;
    }

    //获取X轴的坐标
    get X():number{
        return this.element.offsetLeft
    }
    //获取Y轴的坐标
    get Y():number{
        return this.element.offsetTop
    }

     change(){
        //随机生成一个位置
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';

    }

}

export default Food

//测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y);
