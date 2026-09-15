function getRank() {
  if (player.level >= 50) return "S-RANK HUNTER";
  if (player.level >= 30) return "A-RANK HUNTER";
  if (player.level >= 20) return "B-RANK HUNTER";
  if (player.level >= 10) return "C-RANK HUNTER";
  if (player.level >= 5) return "D-RANK HUNTER";
  return "E-RANK HUNTER";
}

function updateUI() {
  const levelElement = document.getElementById("level");
  const rankElement = document.getElementById("rank");
  const totalXpElement = document.getElementById("totalXp");
  const workoutsElement = document.getElementById("workouts");
  const streakElement = document.getElementById("streak");
  const xpTextElement = document.getElementById("xpText");
  const xpFillElement = document.getElementById("xpFill");

  if (!levelElement) return;

  const requiredXP = player.level * 100;

  levelElement.textContent = player.level;
  rankElement.textContent = getRank();

  totalXpElement.textContent = player.totalXp;
  workoutsElement.textContent = player.workouts;
  streakElement.textContent = player.streak;

  xpTextElement.textContent =
    player.xp + " / " + requiredXP + " XP";

  const percentage =
    Math.min((player.xp / requiredXP) * 100, 100);

  xpFillElement.style.width =
    percentage + "%";
}

function resetProgress() {
  const confirmed = confirm(
    "Are you sure you want to reset all progress?"
  );

  if (!confirmed) return;

  resetPlayer();

  const completeBox =
    document.getElementById("completeBox");

  if (completeBox) {
    completeBox.style.display = "none";
  }

  updateUI();
  renderWorkout();
}

updateUI();
