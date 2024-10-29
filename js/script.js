for(i = 1; i <= 100; i++) {

    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FIZBUSS");
    } else if((i % 3 ===0) && (i % 5 != 0)){
        console.log("FIZ")
    }else if((i % 3 !=0) && (i % 5 === 0)){
        console.log("BUSS")
    }
    
    
    
    
    
    else {
        console.log(i)
    }

}