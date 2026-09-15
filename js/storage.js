const STORAGE_KEY = "ariseFitnessPlayer";

let player = JSON.parse(
  localStorage.getItem(STORAGE_KEY)
);

if (!player) {
  player = {
    level: 1,
    xp: 0,
    totalXp: 0,
    workouts: 0,
    streak: 0,
    completedExercises: [],
    history: []
  };
}

function savePlayer() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(player)
  );
}

function resetPlayer() {
  player = {
    level: 1,
    xp: 0,
    totalXp: 0,
    workouts: 0,
    streak: 0,
    completedExercises: [],
    history: []
  };

  savePlayer();
}
