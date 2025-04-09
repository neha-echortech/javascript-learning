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
// problem 3
// let n = 5;

// for (let i = n; i >= 1; i--) {


//     let stars = '';
//     for (let j = 1; j <= i; j++)
//          {

//         if (j === i) {
//             stars += '*';  
//         } else {
//             stars += '* ';  
//         }
//     }  
//         console.log(stars);
// }

// for(let i=2;i<=n;i++){
//     let stars='';
//     for(let j=1;j<=i;j++){
//         if(j===i){
//             stars+='*';  
//             } else {  
//                 stars+='* ';  
//                 }  
//                 }  
//                 console.log(stars);
//             }




// problem 4,5
// let n = 5;
// for (let i = 1; i <= n; i++) {

//   let stars ='';
//   for (let j = 1; j <= n - i; j++) {
//     stars += '  ';
//   }
//   for (let k = 1; k <= i; k++) {
//     stars += ' *';
//   }
//   console.log(stars);
// }


// for(let i = n; i >= 1; i--){
// let stars ='';

// for(let j = 1; j <= n - i; j++){
//    stars += '  ';  
// }
// for(let k = 1;k <= i;k++){
//    stars += '* ';
// }
// console.log(stars);
// }

// //problem 6
// // let n = 5;

// for(let i = n; i >= 1; i--){
// let stars ='';

// for(let j = 1; j <= n - i; j++){
//    stars += '  ';  
// }
// for(let k = 1;k <= i;k++){
//    stars += '* ';
// }
// console.log(stars);
// }

// for(let i=2;i<=n;i++){
//     let stars='';
//     for(let j = 1; j <= n - i; j++){
//            stars += '  ';  
//         }
//         for(let k = 1;k <= i;k++){
//            stars += '* ';
//     }

//                 console.log(stars);
//             }

// //problem 7 
// // let n = 5;

// for(let i = n; i >=1; i--){
//     let stars=' ';

//     for(let j = i; j <= n; j++){
//         stars += ' ';  
//     }
//     for(let k = 1;k <= i;k++){

//         if(k==i) {
//             stars += '*';
//          }else {
//              stars +='*-'
//          }}
//     console.log(stars);
// }

// for(let i=2;i<=n;i++){
//     let stars='  ';
//     for(let j = 1; j <= n-i ; j++){
//            stars += ' ';  
//         }
//         for(let k = 1;k <= i;k++){
//             if(k==i) {
//                 stars += '*';
//              }else {
//                  stars +='*-'
//              }}


//                 console.log(stars);
//             }

// //problem 8
// //let n = 5;
// for (let i = 1; i <= n; i++) {
//   let stars =' ';
//   for (let j = 1; j <= n - i; j++) {
//     stars += ' ';
//   }
//   for (let k = 1; k <= i; k++) {
//     stars += '* ';
//   }
//   console.log(stars);
// }
// for(let i = 4; i >= 1; i--){
// let stars =' ';
// for(let j =1; j<=n-i; j++){
//    stars += ' ';
// }
// for(let k = 1;k <= i;k++){
//    stars += '* ';
// }
// console.log(stars);
// }
// //problem 9
// // let n = 5;
// for (let i = 1; i <= n; i++) {
//   let stars = '';
// for (let j = 1; j <= n - i; j++) {
//     stars += '  ';
// }
// for (let k = 1; k <= i; k++) {
//     if (k > 1) {
//       stars += ' '; 
//     }
//     stars += '*';
//   }
//  console.log(stars);
// }
// for (let i = 4; i >= 1; i--) {
//   let stars = '';
// for (let j = 1; j <= n - i; j++) {
//     stars += '  ';
//   }
// for (let k = 1; k <= i; k++) {
//     if (k > 1) {
//       stars += ' '; 
//     }
//     stars += '*';
//   }
// console.log(stars);
// }
// //problem10
// // let n = 5;
// for (let i = 1; i <=n; i++) {

//   let stars = ' ';
//   for (let j = 1; j <= i; j++) {

//   }
//   for (let k = 1; k <= i; k++) {
//     if(k==i) {
//         stars += '*';
//      }else {
//          stars +='*-'
//      }
//   }
//   console.log(stars);
// }
// for(let i = 4; i >= 1; i--){
// let stars =' ';

// for(let j = 1; j <= n; j++){

// }
// for(let k = 1;k <= i;k++){
//     if(k==i) {
//    stars += '*';
// }else {
//     stars +='*-'

// }}
// console.log(stars);
// }





//  09-04-2025
//Right: Downward-facing equilateral triangle
let n = 5
for (let i = n; i >= 1; i--) {
  let stars = ' ';
  for (let j = 1; j <= n - i; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= i; k++) {
    // stars += '* '
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }
  }
  console.log(stars)
}
//Right: Right-angled triangle
for (let i = n; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= n; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= i; k++) {
    // stars += '* '
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }
  }
  console.log(stars)
}
//Left: Left-angled triangle


for (let i = 1; i <= n; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    // stars += '* '
    if (j === i) {
      stars += '*';
    } else {
      stars += '*-'
    }
  }
  console.log(stars)
}
//pyramid
for (let i = 1; i <= n; i++) {
  let stars = '';
  for (j = 1; j <= n - i; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= i; k++) {
    // stars += ' *'
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }
  }
  console.log(stars)
}
//right aligned increasing triangle
for (let i = 1; i <= n; i++) {
  let stars = '';
  for (j = 1; j <= n - i; j++) {
    stars += '  ';
  }
  for (k = 1; k <= i; k++) {
    //stars += '* '
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }

  }
  console.log(stars)
}
//right aligned decreasing triangle
for (let i = n; i >= 1; i--) {
  let stars = '';
  for (j = 1; j <= n - i; j++) {
    stars += '  ';
  }
  for (k = 1; k <= i; k++) {
    // stars += '-*'
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }

  }
  console.log(stars)
}

for (let i = n; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= n - i; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= i; k++) {
    // stars+='* ';
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }
  }
  console.log(stars)
}
for (let i = 2; i <= n; i++) {
  let stars = '';
  for (let j = 1; j <= n - i; j++) {
    stars += ' ';
  }
  for (let k = 1; k <= i; k++) {
    // stars+='* ';
    if (k === i) {
      stars += '*';
    } else {
      stars += '*-'
    }
  }
  console.log(stars)
}

