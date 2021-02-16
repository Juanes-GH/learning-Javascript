const password = 'asaasdas@11d';
if(password.length >= 8 && password.includes(1,2,3,4,5,6,7,8,9,10) && password.includes("@")){
    console.log('this password is the harders');
}else if(password.length >= 8 && password.includes("@")){
    console.log('passwor is harder');
}else if(password.length >= 8){
        console.log('the pass it`s fine');
}else if(password.length <8){
        console.log('the password is to short');
}