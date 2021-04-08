class Register{
  constructor(){
    this.o_zc = document.querySelector("#o_zc");
    
    this.o_zc1 = document.querySelector("#o_zc1")
    this.inps = document.querySelectorAll(".zc .o_inps");
    this.a8  = document.querySelector(".a8");
    this.o_em = document.querySelector("#o_em");
    this.arr = [false,false,false,false,false,false,false];
    this.addEvent();
  }
  addEvent(){
    let that = this;
    this.inps[0].onblur = function(){
      let re = /0?(13|14|15|17|18|19)[0-9]{9}/;
      let str = this.value;
      if(re.test(str)){
        that.arr[0] = true;
      }else{
        that.arr[0] = false;
        o_em.innerText = "请输入十一位的手机号"
        o_em.style.fontSize = "12px";
        o_em.style.color = "#666666";
        o_em.style.color = "red";
      }
    }
    //密码
    this.inps[1].onblur = function(){
      let re = /(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
      let str = this.value;
      if(re.test(str)){
        that.arr[1] = true;
      }else{
         that.arr[1] = false;
         alert("密码包含 数字,英文,字符中的两种以上，长度6-20");
      }
    }

    //确认密码
    this.inps[2].onblur = function(){
      let re = that.inps[1].value;
      let str = this.value;
      if(re == str){
        that.arr [2] = true;
      }else{
        that.arr[2] = false;
       
      }
    }
    //输入用户名
    this.inps[3].onblur = function(){
      let re = /.{1,}/;
      let str = this.value;
      if(re.test(str)){
        that.arr[3] = true;
      }else{
        that.arr[4] = false;
        alert("请输入最少一个！")
      }
    }
    //输入QQ
    this.inps[4].onblur = function(){
      let re = /\d{5,11}/;
      let str = this.value;
      if(re.test(str)){
         that.arr[4] = true;
      }else{
          that.arr[4] = false;
          alert("请输入正确的QQ")
      }

    }

    //请输入邮箱
    this.inps[5].onblur = function(){
      let re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      let str = this.value;
      if(re.test(str)){
         that.arr[5] = true;
      }else{
          that.arr[5] = false;
          alert("请输入正确的邮箱")
      }

    }
    //请输入验证码
    this.inps[6].onblur = function(){
      let re = /.{4}/;
      let str = this.value;
      if(re.test(str)){
         that.arr[6] = true;
      }else{
          that.arr[6] = false;
          alert("请输入正确的验证码")
      }

    }

    //协议打勾
    // this.a8.onclick = function(){
    //    if(this.a8.checked){
    //      alert(true);
    //    }else{
    //      alert(false);
    //    }
    // }


    //点击事件
    this.o_zc.onclick = function(){
        let name = that.inps[3].value;
        let pwd = that.inps[1].value;
        if(that.arr.indexOf(false) === -1){
          let srt_storage = window.localStorage.getItem("users") ? window.localStorage.getItem("users") : "";
          let obj_storage = that.convertStrToObj(srt_storage);
          if(name in obj_storage){
            alert("用户名已存在");
            return;
          }else{
            obj_storage[name] = pwd;
            window.localStorage.setItem("users",JSON.stringify(obj_storage));
            that.inps.value = "";
            alert("注册成功")
          }

        }else{
          alert("请完善信息");
        }
    }

    this.o_zc1.onclick = function(){
      location.href = "Landing.html";
    }



  }
  //转对象
  convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}

}
new Register();