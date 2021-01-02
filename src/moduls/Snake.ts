class Snake{
      //表示蛇头的元素
      head: HTMLElement;
      // 蛇的身体
      bodies:HTMLCollection;
      //获取蛇的容器
      element:HTMLElement;

      constructor(){
          this.element = document.getElementById('snake')!;
          this.head = document.querySelector('#snake > div') as HTMLElement;
          this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
      }

      //获取蛇的X轴坐标
      get X(){
          return this.head.offsetLeft;
      }
      //获取蛇的Y轴坐标
      get Y(){
          return this.head.offsetTop
      }
      //设置蛇头的坐标
      set X(value){
          //新值和旧值相同，则直接返回不修改
          if(this.X === value){
              return;
          }
          // X 的值合法范围 0-290之间
          if(value < 0 || value > 290){
              //进入判断说明蛇撞墙了
              throw new Error('蛇撞墙了')
          }
          this.moveBody()
          this.head.style.left = value +'px'
      }

      set Y(value){
          //新值和旧值相同，则直接返回不修改
          if(this.Y === value){
              return;
          }
          // Y 的值合法范围 0-290之间
          if(value < 0 || value > 290){
            //进入判断说明蛇撞墙了 抛出一个异常
            throw new Error('蛇撞墙了')
        }
        this.moveBody()
        this.head.style.top = value + 'px'
      }

      //蛇增加身体的方法

      addBody(){
          //向element中添加一个div
          this.element.insertAdjacentHTML("beforeend","<div></div>")
      }

      moveBody(){
        //遍历所有身体
        for(let i =this.bodies.length -1;i>0;i--){
            //获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

}

export default Snake