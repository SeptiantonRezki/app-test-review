exports.convertBinarytoDecimal = (req, res, next) => {
  let dec = 0;
  let num = req.body.value.toString();
  for (let i = 0; i < num.length; i++) {
    if (num[num.length - (i + 1)] === "1") {
      dec += 2 ** i;
    }
  }
  res.status(201).json({
    status: "success",
    data: dec,
  });
};
exports.convertDecimaltoBinary = (req, res, next) => {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (req.body.value != 0) {
    rem = req.body.value % 2;

    req.body.value = parseInt(req.body.value / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  res.status(201).json({
    status: "success",
    data: bin,
  });
};
exports.getPalindrome = (req, res, next) => {
  let str = req.body.value.toString().toLowerCase().split(" ").join("");
  let strBiasa = str.split("");
  let strReverse = str.split("").reverse();
  console.log(strBiasa);
  console.log(strReverse);
  let strResult = [];
  for (let i = 0; i < strBiasa.length; i++) {
    //   console.log(strBiasa[i]);
    //   console.log(strReverse[strBiasa.length - i]);
    //
    for (let j = 0; j < strReverse.length; j++) {
        const element = strReverse[j];
        
    }
    if (strReverse[i] === strBiasa[i]) {
      strResult.push(strBiasa[i]);
    }
  }
  //   if()
  // 1. dikecilkan semua terlebih dahulu
  // 2. dipisahkan satu per satu hurufnya
  // 3. buat string biasa dan reverse
  // 4. hasil reverse == string biasa
  // 5. cari dimana kata tersebut sama, pada index berapa
  console.log(strResult);
  res.status(201).json({
    status: "success",
    data: strResult,
  });
};
