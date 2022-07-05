function setCookie(){
    document.cookie="username = BillY Ollah";

}
function getCookie(){
    if(document.cookie.length!=0){
        alert(document.cookie);
    }
    else{
        alert("cookie not available");
    }

}