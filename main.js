// let soz = "saergwrgwrglom";
// let a = "";
// for (let i = soz.length - 1; i >= 0; i--) {
//   a += soz[i];
// }
// console.log(a);
// let soz1 = "saergwrgwrglom";
// let ozshash = "g";
// let count = 0;
// for (let i = 0; i <= soz1.length - 1; i++) {
//   console.log(soz1[i]);
//   if (soz1 == ozshash) {
//   }
//   console.log(count + 1);
// }
let a = "24231323";
if (a.length % 2 == 0) {
  b = a.length / 2;
  sum = (parseInt(a[b]) + parseInt(a[(b -= 1)])) / 2;
  console.log(sum);
} else {
  b = Math.floor(a.length / 2);
  console.log(a[b]);
}
