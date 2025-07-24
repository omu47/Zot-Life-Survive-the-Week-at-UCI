let energy = 100;
let mood = 50;

function makeChoice(choice) {
  const story = document.getElementById("story");
  const status = document.getElementById("status");

  if (choice === 'study') {
    energy -= 20;
    mood -= 10;
    story.textContent = "You studied hard... but you're tired.";
  } else if (choice === 'sleep') {
    energy += 20;
    mood += 10;
    story.textContent = "You slept well, but skipped class!";
  } else if (choice === 'boba') {
    mood += 20;
    story.textContent = "Boba is happiness!";
  }

  status.textContent = `Energy: ${energy}, Mood: ${mood}`;

  if (energy <= 0 || mood <= 0) {
    story.textContent = "You burned out 😵. Try again!";
    document.querySelector('.choices').style.display = 'none';
  }
}
