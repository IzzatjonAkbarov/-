let soz = prompt(
  "raqam va soz aralashtirib kiriting bz sizga raqamlar yigindisini aytamiz"
);
let a = "";
for (let i = 0; i <= soz.length - 1; i++) {
  if (soz[i] / 1) {
    a -= parseInt(soz[i]);
  } else {
  }
}
console.log(Math.abs(a));
