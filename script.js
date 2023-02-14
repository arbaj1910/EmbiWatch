let machine_details = {
  machine_name: "Chemical",
  ip_address: "192.168.1.20",
  subnet: "--",
  getway: "--",
  mqtt_server: "--",
  mqtt_port: "--",
  department_name: "--",
  mac_address: "--",
};

function machineUpdate(machine_details) {
  let inp1 = (document.getElementById("inp1").value =
    machine_details.machine_name);
  let inp2 = (document.getElementById("inp2").value =
    machine_details.ip_address);
  let inp3 = (document.getElementById("inp3").value = machine_details.subnet);
  let inp4 = (document.getElementById("inp4").value = machine_details.getway);
  let inp5 = (document.getElementById("inp5").value =
    machine_details.mqtt_server);
  let inp6 = (document.getElementById("inp6").value =
    machine_details.mqtt_port);
  let inp7 = (document.getElementById("inp7").value =
    machine_details.department_name);
  let inp8 = (document.getElementById("inp8").value =
    machine_details.mac_address);
}

machineUpdate(machine_details);
setInterval(function () {
  let date = new Date();
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const time = (document.getElementById("time").innerHTML =
    date.toLocaleTimeString("en-us", options));
}, 1000);


let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  console.log("button 1");
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  console.log("button 2");
});

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  console.log("button 3");
});

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function () {
  console.log("button 4");
});

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function () {
  console.log("button 5");
});

let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function () {
  console.log("button 6");
});

let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function () {
  console.log("button 7");
});

let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function () {
  console.log("button 8");
});
