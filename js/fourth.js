let birinchisoz = prompt("1-sozni kiriting");
let ikkinchisoz = prompt("2-sozni kiriting");
let teskari = "";
for (let i = ikkinchisoz.length - 1; i >= 0; i--) {
  teskari += ikkinchisoz[i];
}
if (birinchisoz === teskari) {
  console.log("bu sozlar teskari tartibda yozilgan");
} else {
  console.log("bu sozlar teskari tartibda yozilmagan");
}
