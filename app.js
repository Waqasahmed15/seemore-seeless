// function foo() {
//   var input = document.getElementById("input").value;
//   if (input.trim() === "") {
//     alert("value requared");
//   } else {
//     console.log(input.trim());
//   }
// }
// function foo() {
//   var cityCode;
//   var zipCode = document.getElementById("zip").value;
//   switch (zipCode) {
//     case "1000":
//       cityCode = "karchi";
//       break;
//     case "2000":
//       cityCode = "lahore";
//       break;
//   }
//   document.getElementById("city").value = cityCode;
// }

//                  seemore

// var lessText = "";

// function seeMore() {
//   var text = document.getElementById("para");
//   var fullText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipit ipsa, sequi cum dolore quaerat distinctio voluptatum ratione exercitationem abillo, repudiandae, eaque consequuntur neque dicta aut tempora dolorum quod alias!";
//   var btn = document.getElementById("btn"); //button
//   if (lessText) {
//     text.innerHTML = lessText;
//     btn.innerHTML = "See More";
//     lessText = "";
//   } else {
//     lessText = text.innerHTML;
//     text.innerHTML = fullText;
//     btn.innerHTML = "See Less";
//   }
// }

//          seemore and seeless text

var lessText;
function nameChange() {
  var text = document.getElementById("para");
  var btn = document.getElementById("btn");
  var fullText = "my name is waqas ahmed qadri attari";
  if (lessText) {
    text.innerHTML = lessText;
    btn.innerHTML = "See More";
    lessText = "";
  } else {
    lessText = text.innerHTML;
    text.innerHTML = fullText;
    btn.innerHTML = "See Less";
  }
}

// function fontSizebara() {
//   var pakistan = document.getElementById("pak");

//   if (pakistan === pakistan.getElementById(pak)) {
//     pakistan = pakistan.style.fontSize = "20px";
//   }
// }
// function fontSizechota() {
//   var pakistan = document.getElementById("pak");
//   pakistan.style.fontSize = "16px";
// }
