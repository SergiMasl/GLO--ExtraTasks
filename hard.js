function a1(arg1, callback) {
  console.log(typeof arg1);
  if (typeof arg1 !== "string") {
    alert("Аргумент не является строкой");
  } else {
    callback(arg1);
  }
}

a1("   ss123456789012345678901234567890   ", function (arg1) {
  let newArg = arg1.trim();
  if (newArg.length > 30) {
    newArg = newArg.substring(0, 30) + "...";
  }
});
