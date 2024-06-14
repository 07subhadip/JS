function outer(){
    let username = "subha"
    // console.log(inUser)
    function inner(){
        console.log("innerAccess : ",username);
        let inUser = 1
    }

    function innerTwo(){
        console.log("innerAccessTwo : ",username);
        // console.log(inUser);
    }
    inner()
    innerTwo()
}

outer()