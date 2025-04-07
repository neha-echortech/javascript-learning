// problem 2
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let stars = '';
//     for (let j = 1; j <= i; j++) {
//         if (j === i) {
//             stars += '*';  
//         } else {
//             stars += '*-';  
//         }
//     }
//     console.log(stars);
// }


//code here
// use only for loops. dont use .repeat() or .trim()


// expected output:
// * * * * *
// * * * *
// * * *
// * *
// *

let n = 5;

for (let i = n; i >= 1; i--) {
    
        
    let stars = '';
    for (let j = 1; j <= i; j++)
         {
            
        if (j === i) {
            stars += '*';  
        } else {
            stars += '* ';  
        }
    }  
        console.log(stars);
}

for(let i=2;i<=n;i++){
    let stars='';
    for(let j=1;j<=i;j++){
        if(j===i){
            stars+='*';  
            } else {  
                stars+='* ';  
                }  
                }  
                console.log(stars);
            }
