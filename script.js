let energy = 100;
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

  // Keep values within bounds
  if (energy > 100) energy = 100;
  if (mood > 100) mood = 100;
  
  weekDay++;
  
  // Update displays
  document.getElementById("energy").textContent = energy;
  document.getElementById("mood").textContent = mood;
  
  // Check for game over conditions
  if (energy <= 0 || mood <= 0) {
    message = "💀 You burned out! Starting a new week...";
    weekDay = 7;
  }
  
  if (weekDay > 7) {
    if (energy > 0 && mood > 0) {
      message = "🎉 Week survived! You made it!";
    }
    weekDay = 7;
  }

  document.getElementById("status").innerText = `Day ${weekDay}/7 | Energy: ${energy} | Mood: ${mood}\n${message}`;
}

function startNewWeek() {
  energy = 100;
  mood = 100;
  weekDay = 1;
  document.getElementById("energy").textContent = energy;
  document.getElementById("mood").textContent = mood;
  document.getElementById("status").innerText = "New week started. Try to survive!";
}

