const slowButton = document.getElementById("slow");
const hello = document.getElementById("hello");

slowButton.addEventListener("click", slowOperation);
hello.addEventListener("click", sayHello);

function slowOperation() {
  //   const worker = new Worker("workers.js");
  const worker = new SharedWorker("workers.js");

  worker.port.postMessage([1, 2, 3, 4, 5, 6]);

  worker.port.onmessage = function ({ data }) {
    console.log(data);
  };
}

function sayHello() {
  console.log("hello world");
}
