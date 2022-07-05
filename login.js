function formvalidation(){
    let name = document.login.name.value
    let pwd = document.login.pwd.value
    let pwd2 = document.login.pwd2.value
    let x =  document.login.email.value
    let atposition  = x.indexOf("@");
    let dotposition = x.lastIndexOf(".")


    if (name == null || name==""){
        document.write("input your name")
        return false;

    }else if(pwd.length < 8 ) {
        document.write("password must be 8 characters long")
        return false
    }
     else if (pwd2 == pwd){
        return true;
    }
    else {
        document.write("password does not match")
     return false;
    }
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
        return false;
    }

}
