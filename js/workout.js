// ==========================================
// LEVEL UP - WORKOUT SYSTEM
// ==========================================


// ==========================================
// DATE HELPERS
// ==========================================

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function getYesterdayDate() {
  const yesterday = new Date();

  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const day = String(yesterday.getDate()).padStart(2, "0");

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
// RANK BASED ON TRAINING DAYS
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


// ==========================================
// CURRENT RANK
// ==========================================

function getCurrentRank() {
  return getRankByTrainingDays(
    getTrainingDays()
  );
}


// ==========================================
// OLD RANK FUNCTION
// Kept for compatibility with app.js
// ==========================================

function getRank(level) {

  return getCurrentRank();
}


// ==========================================
// XP REQUIRED FOR LEVEL
// ==========================================

function getRequiredXP(level) {

  if (level < 5) {
    return level * 100;
  }

  if (level < 10) {
    return level * 125;
  }

  if (level < 20) {
    return level * 150;
  }

  if (level < 30) {
    return level * 175;
  }

  if (level < 50) {
    return level * 200;
  }

  if (level < 100) {
    return level * 250;
  }

  if (level < 150) {
    return level * 300;
  }

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
// EXERCISE DATABASE
// ==========================================

const workoutDatabase = {

  beginner: {

    none: [
      {
        name: "Bodyweight Squats",
        sets: 3,
        reps: 12,
        xp: 25
      },
      {
        name: "Push Ups",
        sets: 3,
        reps: 8,
        xp: 25
      },
      {
        name: "Lunges",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Plank",
        sets: 3,
        reps: 30,
        xp: 25
      },
      {
        name: "Mountain Climbers",
        sets: 3,
        reps: 15,
        xp: 25
      }
    ],

    dumbbells: [
      {
        name: "Goblet Squat",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Dumbbell Press",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Dumbbell Row",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Dumbbell Lunges",
        sets: 3,
        reps: 10,
        xp: 30
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 3,
        reps: 10,
        xp: 30
      }
    ]
  },


  intermediate: {

    none: [
      {
        name: "Diamond Push Ups",
        sets: 4,
        reps: 10,
        xp: 40
      },
      {
        name: "Bulgarian Split Squats",
        sets: 4,
        reps: 10,
        xp: 40
      },
      {
        name: "Pike Push Ups",
        sets: 4,
        reps: 8,
        xp: 40
      },
      {
        name: "Jump Squats",
        sets: 4,
        reps: 12,
        xp: 40
      },
      {
        name: "Plank Shoulder Taps",
        sets: 4,
        reps: 20,
        xp: 40
      }
    ],

    dumbbells: [
      {
        name: "Dumbbell Squat",
        sets: 4,
        reps: 10,
        xp: 45
      },
      {
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 10,
        xp: 45
      },
      {
        name: "Dumbbell Row",
        sets: 4,
        reps: 10,
        xp: 45
      },
      {
        name: "Romanian Deadlift",
        sets: 4,
        reps: 10,
        xp: 45
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 4,
        reps: 10,
        xp: 45
      }
    ]
  },


  advanced: {

    none: [
      {
        name: "Archer Push Ups",
        sets: 4,
        reps: 10,
        xp: 55
      },
      {
        name: "Pistol Squats",
        sets: 4,
        reps: 8,
        xp: 55
      },
      {
        name: "Decline Push Ups",
        sets: 4,
        reps: 12,
        xp: 55
      },
      {
        name: "Jump Lunges",
        sets: 4,
        reps: 12,
        xp: 55
      },
      {
        name: "Hollow Body Hold",
        sets: 4,
        reps: 30,
        xp: 55
      }
    ],

    dumbbells: [
      {
        name: "Heavy Goblet Squat",
        sets: 4,
        reps: 8,
        xp: 60
      },
      {
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 8,
        xp: 60
      },
      {
        name: "Heavy Dumbbell Row",
        sets: 4,
        reps: 8,
        xp: 60
      },
      {
        name: "Dumbbell Romanian Deadlift",
        sets: 4,
        reps: 8,
        xp: 60
      },
      {
        name: "Arnold Press",
        sets: 4,
        reps: 8,
        xp: 60
      }
    ]
  }
};


// ==========================================
// GET USER WORKOUT
// ==========================================

function getWorkout() {

  const experience =
    player.profile.experience || "beginner";

  let equipment =
    player.profile.equipment || "none";


  // Home gym and full gym currently use
  // dumbbell-style workouts until those
  // exercise libraries are expanded.

  if (
    equipment === "home_gym" ||
    equipment === "full_gym"
  ) {
    equipment = "dumbbells";
  }


  if (
    !workoutDatabase[experience]
  ) {
    return workoutDatabase.beginner.none;
  }


  if (
    !workoutDatabase[experience][equipment]
  ) {
    return workoutDatabase[experience].none;
  }


  return workoutDatabase[experience][equipment];
}


// ==========================================
// BUILD WORKOUT
// ==========================================

function buildWorkout() {

  let workout = getWorkout().map(
    exercise => ({
      ...exercise
    })
  );


  const goal = player.profile.goal;
  const level = player.level;
  const rank = getCurrentRank();


  // ----------------------------------------
  // GOAL ADJUSTMENTS
  // ----------------------------------------

  workout.forEach(exercise => {

    if (goal === "strength") {

      exercise.sets += 1;
      exercise.reps = Math.max(
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

  });


  // ----------------------------------------
  // LEVEL SCALING
  // ----------------------------------------

  if (level >= 10) {

    workout.forEach(exercise => {
      exercise.xp += 5;
    });

  }


  if (level >= 20) {

    workout.forEach(exercise => {
      exercise.sets += 1;
      exercise.xp += 5;
    });

  }


  if (level >= 50) {

    workout.forEach(exercise => {
      exercise.xp += 10;
    });

  }


  // ----------------------------------------
  // RANK SCALING
  // ----------------------------------------

  if (
    rank === "A" ||
    rank === "S" ||
    rank === "SS" ||
    rank === "SSS"
  ) {

    workout.forEach(exercise => {
      exercise.sets += 1;
    });

  }


  if (
    rank === "S" ||
    rank === "SS" ||
    rank === "SSS"
  ) {

    workout.forEach(exercise => {
      exercise.reps += 2;
    });

  }


  if (
    rank === "SS" ||
    rank === "SSS"
  ) {

    workout.forEach(exercise => {
      exercise.xp += 15;
    });

  }


  // ----------------------------------------
  // SESSION DURATION
  // ----------------------------------------

  const duration =
    Number(player.profile.duration || 45);


  if (duration <= 20) {

    workout = workout.slice(0, 3);

  }


  if (duration >= 60) {

    workout.forEach(exercise => {
      exercise.sets += 1;
      exercise.xp += 10;
    });

  }


  return workout;
}


// ==========================================
// REST TIME
// ==========================================

function getRestTime() {

  const rank = getCurrentRank();

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
// DAILY LOCK
// ==========================================

function hasCompletedToday() {

  const today = getTodayDate();

  return (
    player.lastWorkoutDate === today
  );
}


// ==========================================
// SHOW DAILY LOCK
// ==========================================

function showDailyLock() {

  const completeBox =
    document.getElementById("completeBox");

  if (!completeBox) return;


  completeBox.innerHTML = `
    <div class="daily-lock">
      <h3>⚔️ DAILY QUEST COMPLETE</h3>

      <p>
        You have completed today's workout.
      </p>

      <p>
        Come back tomorrow for your next quest.
      </p>

      <strong>
        Training Days: ${getTrainingDays()}
      </strong>
    </div>
  `;
}


// ==========================================
// RENDER WORKOUT
// ==========================================

function renderWorkout() {

  const container =
    document.getElementById("exerciseList");

  if (!container) return;


  if (hasCompletedToday()) {

    container.innerHTML = `
      <div class="daily-lock">
        <h2>🔒 DAILY QUEST LOCKED</h2>

        <p>
          Today's workout has already been completed.
        </p>

        <p>
          Return tomorrow for a new workout.
        </p>
      </div>
    `;

    showDailyLock();

    return;
  }


  const workout =
    buildWorkout();


  container.innerHTML = "";


  workout.forEach(
    (exercise, index) => {

      const card =
        document.createElement("div");

      card.className = "exercise-card";


      card.innerHTML = `
        <div class="exercise-info">

          <h3>
            ${exercise.name}
          </h3>

          <p>
            ${exercise.sets} sets ×
            ${exercise.reps} reps
          </p>

          <small>
            +${exercise.xp} XP
            &nbsp; • &nbsp;
            +5 🪙
          </small>

        </div>

        <button
          class="complete-btn"
          onclick="completeExercise(${index})"
        >
          COMPLETE
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
    document.createElement("div");

  popup.className = "xp-popup";

  popup.textContent =
    `+${amount} XP`;

  document.body.appendChild(popup);


  setTimeout(() => {

    popup.remove();

  }, 1200);
}


// ==========================================
// COIN POPUP
// ==========================================

function showCoinPopup(amount) {

  const popup =
    document.createElement("div");

  popup.className = "xp-popup";

  popup.textContent =
    `+${amount} 🪙`;

  document.body.appendChild(popup);


  setTimeout(() => {

    popup.remove();

  }, 1200);
}


// ==========================================
// LEVEL UP POPUP
// ==========================================

function showLevelUpPopup(
  oldLevel,
  newLevel
) {

  const reward =
    getLevelReward(newLevel);


  const popup =
    document.createElement("div");

  popup.className =
    "level-up-popup";


  popup.innerHTML = `
    <div class="level-up-box">

      <h1>LEVEL UP!</h1>

      <h2>
        ${oldLevel}
        →
        ${newLevel}
      </h2>

      <p>
        ${reward}
      </p>

      <button
        onclick="closeLevelUpPopup()"
      >
        CONTINUE
      </button>

    </div>
  `;


  document.body.appendChild(popup);
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
// LEVEL REWARDS
// ==========================================

function getLevelReward(level) {

  const rewards = {

    2: "Beginner Quest Unlocked",

    3: "Training Streak Unlocked",

    5: "RANK D JOURNEY BEGINS",

    10: "RANK C JOURNEY BEGINS",

    20: "RANK B JOURNEY BEGINS",

    30: "RANK A JOURNEY BEGINS",

    50: "RANK S JOURNEY BEGINS",

    100: "RANK SS JOURNEY BEGINS",

    150: "RANK SSS JOURNEY BEGINS"

  };


  return (
    rewards[level] ||
    "Keep training. Your next milestone awaits."
  );
}


// ==========================================
// RANK REWARDS
// ==========================================

function getRankReward(rank) {

  const rewards = {

    D: 250,

    C: 500,

    B: 1000,

    A: 2000,

    S: 5000,

    SS: 10000,

    SSS: 25000

  };


  return rewards[rank] || 0;
}


// ==========================================
// RANK NAME
// ==========================================

function getRankName(rank) {

  const names = {

    E: "E-RANK",
    D: "D-RANK",
    C: "C-RANK",
    B: "B-RANK",
    A: "A-RANK",
    S: "S-RANK",
    SS: "SS-RANK",
    SSS: "SSS-RANK"

  };


  return names[rank] || "E-RANK";
}


// ==========================================
// CHECK LEVEL
// ==========================================

function checkLevel() {

  let leveledUp = false;

  const oldLevel =
    player.level;


  while (
    player.xp >=
    getRequiredXP(player.level)
  ) {

    player.xp -=
      getRequiredXP(player.level);

    player.level++;

    leveledUp = true;
  }


  if (leveledUp) {

    showLevelUpPopup(
      oldLevel,
      player.level
    );

  }


  savePlayer();

  if (typeof updateUI === "function") {
    updateUI();
  }
}


// ==========================================
// COMPLETE EXERCISE
// ==========================================

function completeExercise(index) {

  // Daily lock
  if (hasCompletedToday()) {

    alert(
      "Today's workout is already complete. Come back tomorrow!"
    );

    return;
  }


  if (
    player.completedExercises.includes(index)
  ) {
    return;
  }


  const workout =
    buildWorkout();


  const exercise =
    workout[index];


  if (!exercise) return;


  // XP
  player.xp += exercise.xp;

  player.totalXp += exercise.xp;


  // Coins
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


  updateCompleteBox();


  // Mark button complete
  const buttons =
    document.querySelectorAll(
      ".complete-btn"
    );


  if (buttons[index]) {

    buttons[index].textContent =
      "COMPLETED";

    buttons[index].disabled =
      true;

  }


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


    if (box) {

      box.style.display =
        "block";

      box.innerHTML = `
        <div class="complete-message">

          <h3>
            ⚔️ QUEST READY
          </h3>

          <p>
            You completed every exercise.
          </p>

          <button
            onclick="finishWorkout()"
          >
            CLAIM DAILY REWARD
          </button>

        </div>
      `;

    }

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


  if (!box) return;


  if (hasCompletedToday()) {

    showDailyLock();

    return;
  }


  box.style.display =
    "block";


  box.innerHTML = `
    <div id="completeMessage">
      Complete all exercises
      to finish today's quest.
    </div>
  `;
}


// ==========================================
// FINISH WORKOUT
// ==========================================

function finishWorkout() {

  // Prevent second completion
  if (hasCompletedToday()) {

    alert(
      "Today's workout has already been completed."
    );

    return;
  }


  const workout =
    buildWorkout();


  // Make sure all exercises are complete
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


  // ----------------------------------------
  // DAILY TRAINING
  // ----------------------------------------

  if (
    !player.completedWorkoutDates.includes(
      today
    )
  ) {

    player.completedWorkoutDates.push(
      today
    );

  }


  // ----------------------------------------
  // WORKOUT COUNT
  // ----------------------------------------

  player.workouts++;


  // ----------------------------------------
  // STREAK
  // ----------------------------------------

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


  // ----------------------------------------
  // DAILY COMPLETION XP
  // ----------------------------------------

  const completionXP = 50;

  player.xp += completionXP;

  player.totalXp += completionXP;


  // ----------------------------------------
  // DAILY COMPLETION COINS
  // ----------------------------------------

  const completionCoins = 50;

  player.coins += completionCoins;


  // ----------------------------------------
  // STREAK REWARD
  // ----------------------------------------

  let streakCoins = 0;


  if (
    player.streak > 0 &&
    player.streak % 7 === 0
  ) {

    streakCoins = 100;

    player.coins += streakCoins;

  }


  // ----------------------------------------
  // NEW RANK
  // ----------------------------------------

  const newRank =
    getCurrentRank();


  let rankCoins = 0;


  if (
    newRank !== oldRank
  ) {

    rankCoins =
      getRankReward(newRank);

    player.coins +=
      rankCoins;

  }


  // ----------------------------------------
  // HISTORY
  // ----------------------------------------

  player.history.push({

    date: today,

    xp: completionXP,

    coins:
      completionCoins +
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


  // ----------------------------------------
  // RESET CURRENT EXERCISES
  // ----------------------------------------

  player.completedExercises =
    [];


  savePlayer();


  // ----------------------------------------
  // CHECK LEVEL
  // ----------------------------------------

  checkLevel();


  // ----------------------------------------
  // SHOW REWARDS
  // ----------------------------------------

  let rewardText =
    `+${completionXP} XP<br>
     +${completionCoins} 🪙`;


  if (streakCoins > 0) {

    rewardText +=
      `<br>🔥 7-Day Streak +${streakCoins} 🪙`;

  }


  if (rankCoins > 0) {

    rewardText +=
      `<br>🏆 ${newRank}-Rank Reward +${rankCoins} 🪙`;

  }


  alert(
    `QUEST COMPLETE!\n\n` +
    `Training Days: ${getTrainingDays()}\n` +
    `Streak: ${player.streak}\n` +
    `Rank: ${newRank}\n\n` +
    `XP: +${completionXP}\n` +
    `Coins: +${
      completionCoins +
      streakCoins +
      rankCoins
    }`
  );


  // ----------------------------------------
  // LOCK TODAY'S WORKOUT
  // ----------------------------------------

  renderWorkout();


  if (typeof updateUI === "function") {
    updateUI();
  }
}


// ==========================================
// NEW WORKOUT
// ==========================================

function newWorkout() {

  if (hasCompletedToday()) {

    alert(
      "Today's quest is already complete. Come back tomorrow!"
    );

    return;
  }


  player.completedExercises =
    [];

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


  if (!element) return;


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
    setInterval(() => {

      seconds--;

      timeDisplay.textContent =
        seconds;


      if (seconds <= 0) {

        clearInterval(interval);

        timer.style.display =
          "none";

      }

    }, 1000);
}
