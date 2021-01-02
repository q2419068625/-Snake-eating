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
          //修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时不能向下掉头，反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

          this.moveBody()
          this.head.style.left = value +'px';
          this.chechHeadBody()
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
        //修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时不能向下掉头，反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }


        this.moveBody()
        this.head.style.top = value + 'px';
        this.chechHeadBody()
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
    //用来检测蛇头撞到身体的方法
    chechHeadBody(){
        //获取所有的身体，检测是否和蛇头的位置坐标发生重叠
        for(let i = 1; i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了')
            }
        }
    }

}

export default Snake