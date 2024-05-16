//5-14-24

//increment operator and decrement operator
    //i = i+1    same as i++  i+=1  (incrementor)

    //i = i-1    same as i--  i-=1  (decrementor)


    function loopy(str){
        for (let i = 0; i < str.length ; i++ ){

            console.log( "i :", i ,"str[i]", str[i] )
        }


    }
console.log(loopy("Hello World"))