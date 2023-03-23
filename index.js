// // //// Function to change the content of t2


// // function modifyText(){




// // const t2 = document.getElementById("t2");
// // const isNodeThree = t2.firstChild.nodeValue === "three";
// // t2.firstChild.nodeValue = isNodeThree ? "two" : "three";    


// // }

// // const el = document.getElementById("outside");
// // el.addEventListener("click", modifyText, false);


// // Add an abortable event listener to table
// const controller = new AbortController();
// const el = document.getElementById("outside");
// el.addEventListener("click", modifyText, { signal: controller.signal });

// // Function to change the content of t2
// function modifyText() {
//   const t2 = document.getElementById("t2");
//   if (t2.firstChild.nodeValue === "three") {
//     t2.firstChild.nodeValue = "two";
//   } else {
//     t2.firstChild.nodeValue = "three";
//     controller.abort(); // remove listener after value reaches "three"
//   }
// }




const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");

const capture = {
  capture: true,
};
const noneCapture = {
  capture: false,
};
const once = {
  once: true,
};
const noneOnce = {
  once: false,
};
const passive = {
  passive: true,
};
const nonePassive = {
  passive: false,
};

outer.addEventListener("click", onceHandler, once);
outer.addEventListener("click", noneOnceHandler, noneOnce);
middle.addEventListener("click", captureHandler, capture);
middle.addEventListener("click", noneCaptureHandler, noneCapture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler, nonePassive);

function onceHandler(event) {
  alert("outer, once");
}
function noneOnceHandler(event) {
  alert("outer, none-once, default");
}
function captureHandler(event) {
  //event.stopImmediatePropagation();
  alert("middle, capture");
}
function noneCaptureHandler(event) {
  alert("middle, none-capture, default");
}
function passiveHandler(event) {
  // Unable to preventDefault inside passive event listener invocation.
  event.preventDefault();
  alert("inner1, passive, open new page");
}
function nonePassiveHandler(event) {
  event.preventDefault();
  //event.stopPropagation();
  alert("inner2, none-passive, default, not open new page");
}
