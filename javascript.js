let sounds = [];

function addItem(link, sound, goTo, hidin) {
  sounds.push(sound);
  let inputt = document.getElementById("imgs-input");
  const node = document.createElement("img");
  node.src = link;
  node.classList.add("img");

  inputt.appendChild(node);
  var audio = new Audio(sound);
  audio.play();
  document.getElementById(hidin).style.display = "none";
  document.getElementById(goTo).style.display = "flex";
}

function deleteAll() {
  document.getElementById("imgs-input").innerHTML = "";
  console.log(sounds);
  sounds = [];
  console.log(sounds);
}

function deleteItem() {
  let inputt = document.getElementById("imgs-input");
  inputt.removeChild(inputt.lastElementChild);
  sounds.pop();
}
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
async function speak() {
  for (i of sounds) {
    var audio = new Audio(i);
    audio.play();
    await sleep(1100);
  }
}

async function soundOn(sound, goTo, hidin) {
  var audio = new Audio(sound);
  audio.play();
  if (
    goTo.includes("Daily") ||
    goTo.includes("trees") ||
    goTo.includes("farming") ||
    goTo.includes("sub") ||
    goTo.includes("verb") ||
    goTo.includes("obj") ||
    goTo.includes("cor") ||
    goTo.includes("sen")
  )
    await sleep(2000);
  else await sleep(1000);

  document.getElementById(hidin).style.display = "none";
  document.getElementById(goTo).style.display = "block";

  // window.location.href = goTo;
}
