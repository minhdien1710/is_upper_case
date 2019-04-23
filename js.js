function isUpper(str) {
    let regexp = /^[A-Z]/;
    if(regexp.test(str)){
        console.log("ki tu dau tien la chu in hoa");
    }else {
        console.log("ki tu dau tien ko phai chu in hoa");
    }
}