let energy = 100;
const energyDisplay = document.getElementById("energy");

function makeChoice(action) {
  if (action === "study") {
    energy -= 30;
    alert("You studied hard for midterms... 🧠📖");
  } else if (action === "sleep") {
    energy += 20;
    alert("You feel refreshed after a good nap 😴");
  } else if (action === "boba") {
    energy += 10;
    alert("That boba hit the spot! 🧋✨");
  } else if (action === "canvas") {
    energy -= 15;
    alert("Canvas dropped a surprise quiz 😵‍💫");
  }

  if (energy > 100) energy = 100;
  if (energy <= 0) {
    alert("You burned out! Try again next week...");
    energy = 100;
  }

  energyDisplay.textContent = energy;
}

let mood = 100;
let weekDay = 1;

function makeChoice(choice) {
  let message = "";

  switch (choice) {
    case 'study':
      energy -= 20;
      mood -= 10;
      message = "You studied hard. GPA↑ Mood↓";
      break;
    case 'sleep':
      energy += 20;
      mood += 10;
      message = "You slept well. Mood↑ Energy↑";
      break;
    case 'boba':
      energy += 10;
      mood += 20;
      message = "You went for boba at UTC. Sweet!";
      break;
    case 'canvas':
      energy -= 5;
      mood -= 5;
      message = "Canvas alert: Quiz due in 2 minutes!";
      break;
  }

  weekDay++;
  if (weekDay > 7) {
    message += " 🎉 Week over!";
  }

  document.getElementById("status").innerText = `Day ${weekDay}/7 | Energy: ${energy} | Mood: ${mood}\n${message}`;
}

function startNewWeek() {
  energy = 100;
  mood = 100;
  weekDay = 1;
  document.getElementById("status").innerText = "New week started. Try to survive!";
}

