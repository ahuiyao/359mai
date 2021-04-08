class Login{
  constructor(){
    this.inps = document.querySelectorAll(".o_input");
  
    this.o_dl = document.querySelector("#dl");
    this.arr = [false,false];
    this.o_button = document.querySelector("button");
    this.addEvent();
  }
  addEvent(){
    let that = this;
    this.inps[0].onblur = function(){
      let re = /.{1,}/;
      let str = this.value;
      if(re.test(str)){
        that.arr[0] = true;
      }else{
        that.arr[0] = false
      }
    }
    this.inps[1].onblur = function(){
      let re = /(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
      let str = this.value;
      if(re.test(str)){
        that.arr[1] = true;
      }else{
        that.arr[1] = false;
      }
    }
    this.o_dl.onclick = function(){
        if(that.arr.indexOf(false) === -1){
          let name = that.inps[0].value;
          let pwd = that.inps[1].value;
          let storage = window.localStorage;
          let str_storage = storage.getItem("users") ? storage.getItem("users") : "";
          let obj_storage = that.convertStrToObj(str_storage);
          //判断名字
          if(name in obj_storage){
            //判断密码
            if(pwd === obj_storage[name]){
              location.href = "http://127.0.0.1:5500/dist/index.html";
              return;
            }else{
              alert("密码错误");
            }
          }else{
            alert("用户名不存在！");
          }
          
        }else{
          alert("请完善登录信息！");
        }
    }
    this.o_button.onclick = function(){
      location.href = "Registration.html"
    }


  }


  convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
}
new Login();