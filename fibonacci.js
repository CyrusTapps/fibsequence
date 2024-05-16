function fibsequence(n) {
    let x = 0, y = 1, resultant = 0;
    for (let i = 0; i < n; i++) {
      resultant = x + y;
      x = y;
      y = resultant;
    }
    return resultant;
    
  }
  console.log (fibsequence(6))
console.log (85/58 ,"super-golden ratio", 3.141592, "⫪")
