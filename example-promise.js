// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City Not Found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })
//

// Challenge Area
function  addPromise (a, b){
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
    reject('You probably didn\'t use 2 numbers.')
    }
  });
}

addPromise(6,7).then(function (temp) {
  console.log("AddPromise = ", temp);
}, function (err){
  console.log("You did something wrong. ", err);
})

addPromise(6,'apple').then(function (temp) {
  console.log("AddPromise = ", temp);
}, function (err){
  console.log("You did something wrong. ", err);
})
