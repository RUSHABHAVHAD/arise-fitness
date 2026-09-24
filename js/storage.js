const STORAGE_KEY = "levelUpPlayer";

let player = JSON.parse(
  localStorage.getItem(STORAGE_KEY)
);

function createNewPlayer() {
  return {
    level: 1,

    // XP SYSTEM
    xp: 0,
    totalXp: 0,

    // REWARDS
    coins: 0,

    // WORKOUT PROGRESS
    workouts: 0,
    streak: 0,

    // DAILY TRAINING
    completedWorkoutDates: [],
    lastWorkoutDate: "",

    // EXERCISE PROGRESS
    completedExercises: [],

    // HISTORY
    history: [],

    // USER PROFILE
    profile: {
      goal: "",
      age: "",
      weight: "",
      height: "",
      waist: "",
      experience: "",
      equipment: "",
      trainingDays: "",
      duration: ""
    },

    // PLAN
    planGenerated: false
  };
}


// Create player if none exists
if (!player) {
  player = createNewPlayer();
}


// SAFETY FOR EXISTING PLAYERS
// These allow older saved data to continue working.

if (typeof player.coins !== "number") {
  player.coins = 0;
}

if (!player.completedWorkoutDates) {
  player.completedWorkoutDates = [];
}

if (!player.lastWorkoutDate) {
  player.lastWorkoutDate = "";
}

if (!player.history) {
  player.history = [];
}

if (!player.completedExercises) {
  player.completedExercises = [];
}

if (typeof player.workouts !== "number") {
  player.workouts = 0;
}

if (typeof player.streak !== "number") {
  player.streak = 0;
}

if (typeof player.xp !== "number") {
  player.xp = 0;
}

if (typeof player.totalXp !== "number") {
  player.totalXp = 0;
}

if (typeof player.level !== "number") {
  player.level = 1;
}


// SAVE PLAYER
function savePlayer() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(player)
  );
}


// RESET PLAYER
function resetPlayer() {
  player = createNewPlayer();

  savePlayer();
}
