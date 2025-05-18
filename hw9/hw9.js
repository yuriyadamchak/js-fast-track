//Task #1
function getPromise(message, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);
  });

  //Task #2
  function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("Error! Incorrect array!");
        return;
      }
      const product = arr.reduce((acc, val) => {
        if (typeof val === 'number') {
          return acc * val;
        } else {
          reject("Error! Incorrect array!");
          return 1; 
        }
      }, 1);
      resolve(product);
    });
  }
  
  calcArrProduct([3, 4, 5]).then(result => console.log(result));
  calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));

