// ==========================================
// LEVEL UP - BODY PART WORKOUT SYSTEM
// ==========================================


// ==========================================
// DATE HELPERS
// ==========================================

function getTodayDate() {

  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function getYesterdayDate() {

  const date = new Date();

  date.setDate(date.getDate() - 1);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


// ==========================================
// TRAINING DAYS
// ==========================================

function getTrainingDays() {

  if (!player.completedWorkoutDates) {
    player.completedWorkoutDates = [];
  }

  return player.completedWorkoutDates.length;
}


// ==========================================
// RANK
// ==========================================

function getRankByTrainingDays(days) {

  if (days >= 150) return "SSS";
  if (days >= 90) return "SS";
  if (days >= 45) return "S";
  if (days >= 30) return "A";
  if (days >= 20) return "B";
  if (days >= 10) return "C";
  if (days >= 5) return "D";

  return "E";
}


function getCurrentRank() {

  return getRankByTrainingDays(
    getTrainingDays()
  );
}


function getRank(level) {

  return getCurrentRank();
}


// ==========================================
// XP SYSTEM
// ==========================================

function getRequiredXP(level) {

  if (level < 5) return level * 100;
  if (level < 10) return level * 125;
  if (level < 20) return level * 150;
  if (level < 30) return level * 175;
  if (level < 50) return level * 200;
  if (level < 100) return level * 250;
  if (level < 150) return level * 300;

  return level * 350;
}


// ==========================================
// DIFFICULTY
// ==========================================

function getDifficulty() {

  const rank = getCurrentRank();

  if (rank === "SSS") return "MYTHIC";
  if (rank === "SS") return "EXTREME";
  if (rank === "S") return "HARD";
  if (rank === "A") return "ADVANCED";
  if (rank === "B") return "CHALLENGING";
  if (rank === "C") return "MODERATE";
  if (rank === "D") return "EASY";

  return "BEGINNER";
}


// ==========================================
// BODY PART ROTATION
// ==========================================

const bodyPartRotation = [

  {
    name: "CHEST + TRICEPS + CORE",
    parts: [
      "chest",
      "triceps",
      "core"
    ]
  },

  {
    name: "BACK + BICEPS",
    parts: [
      "back",
      "biceps"
    ]
  },

  {
    name: "LEGS + CALVES",
    parts: [
      "quads",
      "hamstrings",
      "glutes",
      "calves"
    ]
  },

  {
    name: "SHOULDERS + CORE",
    parts: [
      "shoulders",
      "core"
    ]
  },

  {
    name: "CHEST + BACK + ARMS",
    parts: [
      "chest",
      "back",
      "biceps",
      "triceps"
    ]
  },

  {
    name: "LEGS + GLUTES + CORE",
    parts: [
      "quads",
      "hamstrings",
      "glutes",
      "core"
    ]
  }

];


// ==========================================
// GET TODAY'S BODY PARTS
// ==========================================

function getTodayWorkoutRotation() {

  const date = new Date();

  const dayNumber =
    Math.floor(
      date.getTime() /
      (1000 * 60 * 60 * 24)
    );

  return bodyPartRotation[
    dayNumber % bodyPartRotation.length
  ];
}


// ==========================================
// EXERCISE DATABASE
// ==========================================

const exerciseDatabase = {

  // ========================================
  // CHEST
  // ========================================

  chest: {

    none: [
      {
        name: "Push Ups",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Wide Push Ups",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Incline Push Ups",
        sets: 3,
        reps: 12,
        xp: 20
      },
      {
        name: "Decline Push Ups",
        sets: 3,
        reps: 8,
        xp: 35
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Bench Press",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "Dumbbell Floor Press",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Dumbbell Fly",
        sets: 3,
        reps: 12,
        xp: 35
      }
    ]

  },


  // ========================================
  // BACK
  // ========================================

  back: {

    none: [
      {
        name: "Superman",
        sets: 3,
        reps: 12,
        xp: 25
      },
      {
        name: "Reverse Snow Angels",
        sets: 3,
        reps: 12,
        xp: 25
      },
      {
        name: "Prone Y Raises",
        sets: 3,
        reps: 12,
        xp: 25
      },
      {
        name: "Bird Dog",
        sets: 3,
        reps: 10,
        xp: 20
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Row",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "One Arm Dumbbell Row",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "Dumbbell Pullover",
        sets: 3,
        reps: 10,
        xp: 35
      }
    ]

  },


  // ========================================
  // SHOULDERS
  // ========================================

  shoulders: {

    none: [
      {
        name: "Pike Push Ups",
        sets: 3,
        reps: 8,
        xp: 30
      },
      {
        name: "Shoulder Taps",
        sets: 3,
        reps: 16,
        xp: 25
      },
      {
        name: "Wall Handstand Hold",
        sets: 3,
        reps: 20,
        xp: 35
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Shoulder Press",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "Dumbbell Lateral Raise",
        sets: 3,
        reps: 12,
        xp: 30
      },
      {
        name: "Dumbbell Front Raise",
        sets: 3,
        reps: 12,
        xp: 30
      },
      {
        name: "Arnold Press",
        sets: 3,
        reps: 10,
        xp: 40
      }
    ]

  },


  // ========================================
  // BICEPS
  // ========================================

  biceps: {

    none: [
      {
        name: "Towel Bicep Curl",
        sets: 3,
        reps: 12,
        xp: 20
      },
      {
        name: "Self Resisted Curl",
        sets: 3,
        reps: 10,
        xp: 20
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Bicep Curl",
        sets: 3,
        reps: 12,
        xp: 30
      },
      {
        name: "Hammer Curl",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Concentration Curl",
        sets: 3,
        reps: 10,
        xp: 35
      }
    ]

  },


  // ========================================
  // TRICEPS
  // ========================================

  triceps: {

    none: [
      {
        name: "Diamond Push Ups",
        sets: 3,
        reps: 8,
        xp: 30
      },
      {
        name: "Bench Dips",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Close Grip Push Ups",
        sets: 3,
        reps: 10,
        xp: 25
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Overhead Extension",
        sets: 3,
        reps: 12,
        xp: 30
      },
      {
        name: "Dumbbell Kickback",
        sets: 3,
        reps: 12,
        xp: 30
      },
      {
        name: "Dumbbell Skull Crusher",
        sets: 3,
        reps: 10,
        xp: 35
      }
    ]

  },


  // ========================================
  // QUADS
  // ========================================

  quads: {

    none: [
      {
        name: "Bodyweight Squats",
        sets: 3,
        reps: 15,
        xp: 25
      },
      {
        name: "Reverse Lunges",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Jump Squats",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Bulgarian Split Squats",
        sets: 3,
        reps: 8,
        xp: 35
      }
    ],

    dumbbells: [
      {
        name: "Goblet Squat",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "Dumbbell Lunges",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "Dumbbell Bulgarian Split Squat",
        sets: 3,
        reps: 8,
        xp: 40
      }
    ]

  },


  // ========================================
  // HAMSTRINGS
  // ========================================

  hamstrings: {

    none: [
      {
        name: "Glute Bridge",
        sets: 3,
        reps: 15,
        xp: 20
      },
      {
        name: "Single Leg Bridge",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Good Morning",
        sets: 3,
        reps: 12,
        xp: 25
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Romanian Deadlift",
        sets: 3,
        reps: 10,
        xp: 40
      },
      {
        name: "Dumbbell Stiff Leg Deadlift",
        sets: 3,
        reps: 10,
        xp: 40
      }
    ]

  },


  // ========================================
  // GLUTES
  // ========================================

  glutes: {

    none: [
      {
        name: "Glute Bridge",
        sets: 3,
        reps: 15,
        xp: 25
      },
      {
        name: "Single Leg Glute Bridge",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Donkey Kicks",
        sets: 3,
        reps: 12,
        xp: 25
      },
      {
        name: "Fire Hydrants",
        sets: 3,
        reps: 12,
        xp: 25
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Hip Thrust",
        sets: 3,
        reps: 12,
        xp: 40
      },
      {
        name: "Dumbbell Bulgarian Split Squat",
        sets: 3,
        reps: 10,
        xp: 40
      }
    ]

  },


  // ========================================
  // CALVES
  // ========================================

  calves: {

    none: [
      {
        name: "Standing Calf Raises",
        sets: 3,
        reps: 20,
        xp: 20
      },
      {
        name: "Single Leg Calf Raises",
        sets: 3,
        reps: 12,
        xp: 25
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Calf Raises",
        sets: 3,
        reps: 15,
        xp: 30
      },
      {
        name: "Single Leg Dumbbell Calf Raise",
        sets: 3,
        reps: 12,
        xp: 35
      }
    ]

  },


  // ========================================
  // CORE
  // ========================================

  core: {

    none: [
      {
        name: "Plank",
        sets: 3,
        reps: 30,
        xp: 25
      },
      {
        name: "Crunches",
        sets: 3,
        reps: 15,
        xp: 20
      },
      {
        name: "Leg Raises",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Mountain Climbers",
        sets: 3,
        reps: 20,
        xp: 25
      }
    ],

    dumbbells: [
      {
        name: "Weighted Crunch",
        sets: 3,
        reps: 12,
        xp: 30
      },
      {
        name: "Dumbbell Russian Twist",
        sets: 3,
        reps: 16,
        xp: 35
      },
      {
        name: "Weighted Sit Up",
        sets: 3,
        reps: 10,
        xp: 35
      }
    ]

  }

};


// ==========================================
// EQUIPMENT HELPER
// ==========================================

function getEquipmentType() {

  const equipment =
    player.profile.equipment || "none";


  if (
    equipment === "home_gym" ||
    equipment === "full_gym"
  ) {
    return "dumbbells";
  }


  return equipment;
}


// ==========================================
// EXPERIENCE SCALING
// ==========================================

function getExperienceMultiplier() {

  const experience =
    player.profile.experience ||
    "beginner";


  if (experience === "advanced") {
    return 1.25;
  }


  if (experience === "intermediate") {
    return 1.10;
  }


  return 1;
}


// ==========================================
// GET EXERCISES FOR BODY PART
// ==========================================

function getExercisesForPart(part) {

  const equipment =
    getEquipmentType();


  let exercises =
    exerciseDatabase[part]?.[equipment];


  if (!exercises) {

    exercises =
      exerciseDatabase[part]?.none;

  }


  if (!exercises) {
    return [];
  }


  return exercises.map(
    exercise => ({
      ...exercise
    })
  );
}


// ==========================================
// BUILD TODAY'S WORKOUT
// ==========================================

function buildWorkout() {

  const rotation =
    getTodayWorkoutRotation();


  const workout = [];


  const experienceMultiplier =
    getExperienceMultiplier();


  rotation.parts.forEach(
    part => {

      const exercises =
        getExercisesForPart(part);


      if (exercises.length === 0) {
        return;
      }


      // Select one or two exercises
      // from each body part.

      const count =
        rotation.parts.length <= 2
          ? 2
          : 1;


      for (
        let i = 0;
        i < count && i < exercises.length;
        i++
      ) {

        const exercise =
          exercises[i];


        exercise.bodyPart =
          part;


        exercise.xp =
          Math.round(
            exercise.xp *
            experienceMultiplier
          );


        workout.push(
          exercise
        );

      }

    }
  );


  // ========================================
  // GOAL ADJUSTMENTS
  // ========================================

  const goal =
    player.profile.goal;


  workout.forEach(
    exercise => {

      if (goal === "strength") {

        exercise.sets += 1;

        exercise.reps =
          Math.max(
            5,
            exercise.reps - 2
          );

        exercise.xp += 10;
      }


      if (goal === "muscle") {

        exercise.sets += 1;

        exercise.xp += 10;
      }


      if (goal === "fat_loss") {

        exercise.reps += 2;

        exercise.xp += 5;
      }

    }
  );


  // ========================================
  // LEVEL SCALING
  // ========================================

  if (player.level >= 10) {

    workout.forEach(
      exercise => {

        exercise.xp += 5;

      }
    );

  }


  if (player.level >= 20) {

    workout.forEach(
      exercise => {

        exercise.sets += 1;

      }
    );

  }


  if (player.level >= 50) {

    workout.forEach(
      exercise => {

        exercise.xp += 10;

      }
    );

  }


  // ========================================
  // RANK SCALING
  // ========================================

  const rank =
    getCurrentRank();


  if (
    rank === "A" ||
    rank === "S" ||
    rank === "SS" ||
    rank === "SSS"
  ) {

    workout.forEach(
      exercise => {

        exercise.sets += 1;

      }
    );

  }


  if (
    rank === "S" ||
    rank === "SS" ||
    rank === "SSS"
  ) {

    workout.forEach(
      exercise => {

        exercise.reps += 2;

      }
    );

  }


  if (
    rank === "SS" ||
    rank === "SSS"
  ) {

    workout.forEach(
      exercise => {

        exercise.xp += 15;

      }
    );

  }


  // ========================================
  // DURATION
  // ========================================

  const duration =
    Number(
      player.profile.duration || 45
    );


  if (duration <= 20) {

    return workout.slice(0, 4);

  }


  if (duration >= 60) {

    workout.forEach(
      exercise => {

        exercise.sets += 1;
        exercise.xp += 10;

      }
    );

  }


  return workout;
}


// ==========================================
// GET WORKOUT NAME
// ==========================================

function getWorkoutName() {

  return getTodayWorkoutRotation().name;
}


// ==========================================
// REST TIME
// ==========================================

function getRestTime() {

  const rank =
    getCurrentRank();


  if (rank === "SSS") return 150;
  if (rank === "SS") return 135;
  if (rank === "S") return 120;
  if (rank === "A") return 105;
  if (rank === "B") return 90;
  if (rank === "C") return 75;
  if (rank === "D") return 60;

  return 45;
}


// ==========================================
// DAILY QUEST STATUS
// ==========================================

function hasCompletedToday() {

  return (
    player.lastWorkoutDate ===
    getTodayDate()
  );
}


// ==========================================
// RENDER WORKOUT
// ==========================================

function renderWorkout() {

  const container =
    document.getElementById(
      "exerciseList"
    );


  if (!container) {
    return;
  }


  const workout =
    buildWorkout();


  const workoutName =
    getWorkoutName();


  container.innerHTML = `

    <div class="workout-title-card">

      <h2>
        ⚔️ ${workoutName}
      </h2>

      <p>
        Today's recommended workout
      </p>

      ${
        hasCompletedToday()

        ? `
          <div class="daily-completed">
            ✅ Today's workout completed
            <br>
            <small>
              You can still do extra workouts.
            </small>
          </div>
        `

        : `
          <div class="daily-active">
            🎯 Daily Quest Available
          </div>
        `
      }

    </div>

  `;


  workout.forEach(
    (exercise, index) => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "exercise-card";


      const alreadyCompleted =
        player.completedExercises.includes(
          index
        );


      card.innerHTML = `

        <div class="exercise-info">

          <span class="body-part">
            ${exercise.bodyPart.toUpperCase()}
          </span>

          <h3>
            ${exercise.name}
          </h3>

          <p>
            ${exercise.sets}
            sets ×
            ${exercise.reps}
            reps
          </p>

          <small>
            +${exercise.xp} XP
            •
            +5 🪙
          </small>

        </div>


        <button
          class="complete-btn"
          onclick="completeExercise(${index})"
          ${alreadyCompleted ? "disabled" : ""}
        >

          ${
            alreadyCompleted
              ? "COMPLETED"
              : "COMPLETE"
          }

        </button>

      `;


      container.appendChild(card);

    }
  );


  updateCompleteBox();
}


// ==========================================
// XP POPUP
// ==========================================

function showXpPopup(amount) {

  const popup =
    document.createElement(
      "div"
    );


  popup.className =
    "xp-popup";


  popup.textContent =
    `+${amount} XP`;


  document.body.appendChild(
    popup
  );


  setTimeout(
    () => popup.remove(),
    1200
  );
}


// ==========================================
// COIN POPUP
// ==========================================

function showCoinPopup(amount) {

  const popup =
    document.createElement(
      "div"
    );


  popup.className =
    "xp-popup";


  popup.textContent =
    `+${amount} 🪙`;


  document.body.appendChild(
    popup
  );


  setTimeout(
    () => popup.remove(),
    1200
  );
}


// ==========================================
// LEVEL UP
// ==========================================

function showLevelUpPopup(
  oldLevel,
  newLevel
) {

  const popup =
    document.createElement(
      "div"
    );


  popup.className =
    "level-up-popup";


  popup.innerHTML = `

    <div class="level-up-box">

      <h1>
        LEVEL UP!
      </h1>

      <h2>
        ${oldLevel}
        →
        ${newLevel}
      </h2>

      <p>
        Keep training.
        Your power is increasing.
      </p>

      <button
        onclick="closeLevelUpPopup()"
      >
        CONTINUE
      </button>

    </div>

  `;


  document.body.appendChild(
    popup
  );
}


function closeLevelUpPopup() {

  const popup =
    document.querySelector(
      ".level-up-popup"
    );


  if (popup) {
    popup.remove();
  }
}


// ==========================================
// CHECK LEVEL
// ==========================================

function checkLevel() {

  const oldLevel =
    player.level;


  let leveledUp =
    false;


  while (
    player.xp >=
    getRequiredXP(player.level)
  ) {

    player.xp -=
      getRequiredXP(player.level);


    player.level++;


    leveledUp =
      true;

  }


  if (leveledUp) {

    showLevelUpPopup(
      oldLevel,
      player.level
    );

  }


  savePlayer();


  if (
    typeof updateUI ===
    "function"
  ) {

    updateUI();

  }
}


// ==========================================
// COMPLETE EXERCISE
// ==========================================

function completeExercise(index) {

  const workout =
    buildWorkout();


  const exercise =
    workout[index];


  if (!exercise) {
    return;
  }


  if (
    player.completedExercises.includes(
      index
    )
  ) {

    return;

  }


  // ========================================
  // XP
  // ========================================

  player.xp +=
    exercise.xp;


  player.totalXp +=
    exercise.xp;


  // ========================================
  // COINS
  // ========================================

  player.coins += 5;


  player.completedExercises.push(
    index
  );


  savePlayer();


  showXpPopup(
    exercise.xp
  );


  showCoinPopup(5);


  checkLevel();


  renderWorkout();


  checkWorkoutComplete();
}


// ==========================================
// CHECK WORKOUT COMPLETE
// ==========================================

function checkWorkoutComplete() {

  const workout =
    buildWorkout();


  if (
    player.completedExercises.length >=
    workout.length
  ) {

    const box =
      document.getElementById(
        "completeBox"
      );


    if (!box) {
      return;
    }


    box.innerHTML = `

      <div class="complete-message">

        <h3>
          ⚔️ WORKOUT COMPLETE
        </h3>

        <p>
          You completed every exercise.
        </p>


        ${
          hasCompletedToday()

          ? `

            <p>
              ✅ Today's workout
              has already been counted.
            </p>

            <p>
              You can still continue
              training with extra workouts.
            </p>

          `

          : `

            <button
              onclick="finishWorkout()"
            >
              CLAIM DAILY REWARD
            </button>

          `
        }

      </div>

    `;

  }
}


// ==========================================
// COMPLETE BOX
// ==========================================

function updateCompleteBox() {

  const box =
    document.getElementById(
      "completeBox"
    );


  if (!box) {
    return;
  }


  box.innerHTML = `

    <div id="completeMessage">

      Complete all exercises
      to finish today's workout.

    </div>

  `;

}


// ==========================================
// FINISH DAILY WORKOUT
// ==========================================

function finishWorkout() {

  // Already completed today?
  if (hasCompletedToday()) {

    alert(
      "Today's daily reward has already been claimed."
    );

    return;

  }


  const workout =
    buildWorkout();


  if (
    player.completedExercises.length <
    workout.length
  ) {

    alert(
      "Complete all exercises first!"
    );

    return;

  }


  const today =
    getTodayDate();


  const yesterday =
    getYesterdayDate();


  const oldRank =
    getCurrentRank();


  // ========================================
  // TRAINING DAY
  // ========================================

  if (
    !player.completedWorkoutDates.includes(
      today
    )
  ) {

    player.completedWorkoutDates.push(
      today
    );

  }


  player.workouts++;


  // ========================================
  // STREAK
  // ========================================

  if (
    player.lastWorkoutDate ===
    yesterday
  ) {

    player.streak++;

  } else {

    player.streak = 1;

  }


  player.lastWorkoutDate =
    today;


  // ========================================
  // DAILY XP
  // ========================================

  const dailyXP = 50;


  player.xp +=
    dailyXP;


  player.totalXp +=
    dailyXP;


  // ========================================
  // DAILY COINS
  // ========================================

  const dailyCoins = 50;


  player.coins +=
    dailyCoins;


  // ========================================
  // STREAK REWARD
  // ========================================

  let streakCoins = 0;


  if (
    player.streak > 0 &&
    player.streak % 7 === 0
  ) {

    streakCoins = 100;

    player.coins +=
      streakCoins;

  }


  // ========================================
  // RANK REWARD
  // ========================================

  const newRank =
    getCurrentRank();


  let rankCoins = 0;


  if (
    newRank !== oldRank
  ) {

    const rankRewards = {

      D: 250,
      C: 500,
      B: 1000,
      A: 2000,
      S: 5000,
      SS: 10000,
      SSS: 25000

    };


    rankCoins =
      rankRewards[newRank] || 0;


    player.coins +=
      rankCoins;

  }


  // ========================================
  // HISTORY
  // ========================================

  player.history.push({

    date: today,

    type: "daily",

    workout:
      getWorkoutName(),

    xp: dailyXP,

    coins:
      dailyCoins +
      streakCoins +
      rankCoins,

    trainingDays:
      getTrainingDays(),

    streak:
      player.streak,

    level:
      player.level,

    rank:
      newRank

  });


  // ========================================
  // RESET EXERCISES
  // ========================================

  player.completedExercises = [];


  savePlayer();


  checkLevel();


  // ========================================
  // MESSAGE
  // ========================================

  alert(

    `DAILY QUEST COMPLETE!\n\n` +

    `Workout: ${getWorkoutName()}\n` +

    `Training Days: ${getTrainingDays()}\n` +

    `Streak: ${player.streak}\n` +

    `Rank: ${newRank}\n\n` +

    `+${dailyXP} XP\n` +

    `+${dailyCoins} Coins` +

    (
      streakCoins > 0
        ? `\n+${streakCoins} Streak Coins`
        : ""
    ) +

    (
      rankCoins > 0
        ? `\n+${rankCoins} Rank Reward`
        : ""
    )

  );


  // IMPORTANT:
  // We DO NOT lock the workout.

  renderWorkout();


  if (
    typeof updateUI ===
    "function"
  ) {

    updateUI();

  }
}


// ==========================================
// EXTRA WORKOUT
// ==========================================

function newWorkout() {

  // Extra workouts are allowed.
  // They do NOT increase training days.

  player.completedExercises = [];


  savePlayer();


  renderWorkout();

}


// ==========================================
// DIFFICULTY DISPLAY
// ==========================================

function showDifficulty() {

  const element =
    document.getElementById(
      "difficulty"
    );


  if (!element) {
    return;
  }


  element.textContent =
    `Difficulty: ${getDifficulty()} • ${getCurrentRank()}-Rank`;

}


// ==========================================
// REST TIMER
// ==========================================

function startRestTimer() {

  const timer =
    document.getElementById(
      "restTimer"
    );


  const timeDisplay =
    document.getElementById(
      "restTime"
    );


  if (!timer || !timeDisplay) {
    return;
  }


  let seconds =
    getRestTime();


  timer.style.display =
    "block";


  timeDisplay.textContent =
    seconds;


  const interval =
    setInterval(
      () => {

        seconds--;

        timeDisplay.textContent =
          seconds;


        if (seconds <= 0) {

          clearInterval(
            interval
          );

          timer.style.display =
            "none";

        }

      },
      1000
    );

}
