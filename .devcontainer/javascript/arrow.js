const user = {
    username:"riya",
    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)

    }
}
user.welcomemessage()
user.username ="sam"
user.welcomemessage()
