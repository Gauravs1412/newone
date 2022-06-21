//armstrong number is cube of each digit in given number is equal to given particular number.

function print_value(n) {
    let sum = 0
    let r = 0;
    let temp = n;
    
    
    while(n>0) {
        r = n%10;
        n = Math.floor(n/10);
        sum = sum + r*r*r ;
    }
       if(temp === sum) {
           console.log("true")
       }
       else
           console.log('false')


     

    
}
print_value(123)