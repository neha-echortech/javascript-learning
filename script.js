// function printRightAlignedPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let line = "";
    
//     for (let s = 1; s <= n - i; s++) {
//       line += " ";
//     }
    
//     for (let star = 1; star <= i; star++) {
//       line += "*";
//     }
//     console.log(line);
//   }
// }

// const n = 5; 

printRightAlignedPattern(n);


function printLeftAlignedPattern(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
      console.log(line);
    }
  }
  const n = parseInt(process.argv[2], 10) || 5;
  printLeftAlignedPattern(n);




  function printCenteredIncreasingTriangle(n) {
    for (let i = 1; i <= n; i++) {
      
      const spaces = ' '.repeat(n - i);
      
      const stars  = '* '.repeat(i).trim();
      console.log(spaces + stars);
    }
  }
  
  printCenteredIncreasingTriangle(5);
  
  




  
  
  