const STORAGE_KEY = "levelUpPlayer";

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
    history: [],

    // Hunter Profile
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

    // Plan information
    planGenerated: false
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
    history: [],

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

    planGenerated: false
  };

  savePlayer();
}
