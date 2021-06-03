function checkType(arg1) {
  if (typeof arg1 !== "string") {
    alert("Аргумент не является строкой");
  } else {
    handelText(arg1);
  }
}

function handelText(text) {
  let newText = text.trim();
  let limitLength = 30;

  if (newText.length > limitLength) {
    newText = newText.substring(0, limitLength) + "...";
    console.log(newText);
  }
}

checkType("   ss123456789012345678901234567890   ");
