addEventListener("connect", (event) => {
  const port = event.ports[0];
  for (let index = 0; index < 3000000000; index++) {
    1 + 2;
  }
  port.postMessage("slow operation finished");

  port.onmessage = function (event) {
    console.log(event.data);
  };
});
