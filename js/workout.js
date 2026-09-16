// =========================================================
// LEVEL UP — WORKOUT SYSTEM
// =========================================================


// =========================================================
// RANK / DIFFICULTY
// =========================================================

function getDifficulty() {

  if (player.level >= 150) return "SSS";
  if (player.level >= 100) return "SS";
  if (player.level >= 50) return "S";
  if (player.level >= 30) return "A";
  if (player.level >= 20) return "B";
  if (player.level >= 10) return "C";
  if (player.level >= 5) return "D";

  return "E";
}


// =========================================================
// REWARD SYSTEM
// =========================================================

function getLevelReward(level) {

  const rewards = {

    2: {
      name: "First Awakening",
      description: "You have officially begun your Hunter journey."
    },

    3: {
      name: "Iron Will",
      description: "Consistency is becoming your weapon."
    },

    5: {
      name: "D-Rank Hunter",
      description: "You have entered the next Hunter rank."
    },

    10: {
      name: "C-Rank Hunter",
      description: "Your training power is increasing."
    },

    20: {
      name: "B-Rank Hunter",
      description: "You are becoming a serious Hunter."
    },

    30: {
      name: "A-Rank Hunter",
      description: "Elite-level progression unlocked."
    },

    50: {
      name: "S-Rank Hunter",
      description: "You have reached S-Rank."
    },

    100: {
      name: "SS-Rank Hunter",
      description: "Very few Hunters reach this level."
    },

    150: {
      name: "SSS-Rank Hunter",
      description: "The highest Hunter rank has been reached."
    }

  };


  if (rewards[level]) {
    return rewards[level];
  }


  return {
    name: "Hunter Level " + level,
    description: "Keep training to unlock your next reward."
  };
}


// =========================================================
// GET CURRENT WORKOUT
// =========================================================

function getCurrentWorkout() {

  const profile = player.profile || {};

  const experience =
    profile.experience || "beginner";

  const equipment =
    profile.equipment || "none";

  const goal =
    profile.goal || "fitness";

  const duration =
    Number(profile.duration) || 30;


  let workout;


  // =======================================================
  // BEGINNER
  // =======================================================

  if (experience === "beginner") {

    if (equipment === "dumbbells") {

      workout = [

        {
          name: "Goblet Squat",
          sets: 3,
          reps: 10,
          xp: 35
        },

        {
          name: "Dumbbell Row",
          sets: 3,
          reps: 10,
          xp: 35
        },

        {
          name: "Dumbbell Shoulder Press",
          sets: 3,
          reps: 10,
          xp: 35
        },

        {
          name: "Dumbbell Romanian Deadlift",
          sets: 3,
          reps: 10,
          xp: 40
        },

        {
          name: "Dumbbell Curl",
          sets: 2,
          reps: 12,
          xp: 25
        }

      ];

    } else {

      workout = [

        {
          name: "Bodyweight Squat",
          sets: 3,
          reps: 12,
          xp: 30
        },

        {
          name: "Push-Up",
          sets: 3,
          reps: 8,
          xp: 30
        },

        {
          name: "Glute Bridge",
          sets: 3,
          reps: 12,
          xp: 30
        },

        {
          name: "Plank",
          sets: 3,
          reps: 30,
          xp: 30
        },

        {
          name: "Mountain Climber",
          sets: 2,
          reps: 20,
          xp: 25
        }

      ];

    }

  }


  // =======================================================
  // INTERMEDIATE
  // =======================================================

  else if (experience === "intermediate") {

    if (equipment === "dumbbells") {

      workout = [

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
          name: "Dumbbell Romanian Deadlift",
          sets: 3,
          reps: 10,
          xp: 45
        },

        {
          name: "Dumbbell Shoulder Press",
          sets: 3,
          reps: 10,
          xp: 40
        }

      ];

    } else {

      workout = [

        {
          name: "Bulgarian Split Squat",
          sets: 3,
          reps: 10,
          xp: 45
        },

        {
          name: "Push-Up",
          sets: 4,
          reps: 12,
          xp: 40
        },

        {
          name: "Pike Push-Up",
          sets: 3,
          reps: 10,
          xp: 40
        },

        {
          name: "Single-Leg Glute Bridge",
          sets: 3,
          reps: 12,
          xp: 40
        },

        {
          name: "Plank",
          sets: 3,
          reps: 45,
          xp: 35
        }

      ];

    }

  }


  // =======================================================
  // ADVANCED
  // =======================================================

  else {

    workout = [

      {
        name: "Jump Squat",
        sets: 4,
        reps: 12,
        xp: 55
      },

      {
        name: "Decline Push-Up",
        sets: 4,
        reps: 12,
        xp: 55
      },

      {
        name: "Pike Push-Up",
        sets: 4,
        reps: 12,
        xp: 50
      },

      {
        name: "Single-Leg Romanian Deadlift",
        sets: 4,
        reps: 10,
        xp: 55
      },

      {
        name: "Hollow Body Hold",
        sets: 3,
        reps: 45,
        xp: 45
      }

    ];

  }


  // =======================================================
  // GOAL ADJUSTMENTS
  // =======================================================

  workout = workout.map(function(exercise) {

    const updated = {
      ...exercise
    };


    if (goal === "strength") {

      updated.sets += 1;
      updated.xp += 10;

    }


    if (goal === "muscle") {

      updated.xp += 10;

    }


    if (goal === "fat_loss") {

      updated.reps += 2;
      updated.xp += 5;

    }


    return updated;

  });


  // =======================================================
  // DURATION ADJUSTMENT
  // =======================================================

  if (duration <= 20) {

    workout = workout.slice(0, 3);

  }


  if (duration >= 60) {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        sets: exercise.sets + 1,
        xp: exercise.xp + 10
      };

    });

  }


  return workout;
}


// =========================================================
// REST TIME
// =========================================================

function getRestTime() {

  const difficulty =
    getDifficulty();


  if (
    difficulty === "E" ||
    difficulty === "D" ||
    difficulty === "C"
  ) {
    return 60;
  }


  if (difficulty === "B") {
    return 75;
  }


  if (difficulty === "A") {
    return 90;
  }


  if (difficulty === "S") {
    return 120;
  }


  if (difficulty === "SS") {
    return 150;
  }


  return 180;
}


// =========================================================
// RENDER WORKOUT
// =========================================================

function renderWorkout() {

  const exerciseList =
    document.getElementById(
      "exerciseList"
    );


  if (!exerciseList) {
    return;
  }


  const workout =
    getCurrentWorkout();


  exerciseList.innerHTML = "";


  workout.forEach(function(
    exercise,
    index
  ) {

    const completed =
      player.completedExercises.includes(
        index
      );


    const card =
      document.createElement("div");


    card.className =
      "exercise-card" +
      (completed
        ? " completed"
        : "");


    card.innerHTML = `

      <div class="exercise-top">

        <div class="exercise-name">
          ${exercise.name}
        </div>

        <div class="exercise-xp">
          +${exercise.xp} XP
        </div>

      </div>

      <div class="exercise-details">

        <span>
          ${exercise.sets} Sets
        </span>

        <span>
          ${exercise.reps} Reps
        </span>

        <span>
          Rest ${getRestTime()}s
        </span>

      </div>

      <button
        class="complete-btn"
        onclick="completeExercise(${index})"
        ${completed ? "disabled" : ""}
      >
        ${
          completed
            ? "✓ COMPLETED"
            : "COMPLETE"
        }
      </button>

    `;


    exerciseList.appendChild(card);

  });


  checkWorkoutComplete();
}


// =========================================================
// XP POPUP
// =========================================================

function showXpPopup(amount) {

  const popup =
    document.createElement("div");


  popup.className =
    "xp-popup";


  popup.textContent =
    "+" + amount + " XP";


  document.body.appendChild(
    popup
  );


  setTimeout(function() {

    popup.remove();

  }, 1300);
}


// =========================================================
// LEVEL NUMBER ANIMATION
// =========================================================

function animateLevelChange() {

  const levelNumber =
    document.querySelector(
      ".level-number"
    );


  const xpBar =
    document.querySelector(
      ".xp-bar"
    );


  if (levelNumber) {

    levelNumber.classList.remove(
      "level-change"
    );


    void levelNumber.offsetWidth;


    levelNumber.classList.add(
      "level-change"
    );

  }


  if (xpBar) {

    xpBar.classList.remove(
      "level-change"
    );


    void xpBar.offsetWidth;


    xpBar.classList.add(
      "level-change"
    );

  }

}


// =========================================================
// LEVEL UP POPUP
// =========================================================

function showLevelUpPopup(
  oldLevel,
  newLevel
) {

  const oldRank =
    getRank(oldLevel);

  const newRank =
    getRank(newLevel);


  const reward =
    getLevelReward(newLevel);


  const overlay =
    document.createElement("div");


  overlay.className =
    "level-up-overlay";


  let rankHTML = "";


  if (newRank !== oldRank) {

    rankHTML = `

      <div class="rank-up">

        <span>
          RANK UP
        </span>

        <strong>
          ${oldRank}-RANK → ${newRank}-RANK
        </strong>

      </div>

    `;

  }


  overlay.innerHTML = `

    <div class="level-up-card">

      <div class="level-up-icon">
        ⚔️
      </div>

      <div class="level-up-title">
        LEVEL UP!
      </div>

      <div class="level-up-level">
        LEVEL ${newLevel}
      </div>

      <div class="level-up-message">
        Your Hunter power has increased.
      </div>


      <div class="reward-card">

        <div class="reward-label">
          REWARD UNLOCKED
        </div>

        <div class="reward-name">
          🎁 ${reward.name}
        </div>

        <div class="reward-description">
          ${reward.description}
        </div>

      </div>

      ${rankHTML}


      <button
        class="level-up-close"
        onclick="closeLevelUpPopup()"
      >
        CONTINUE
      </button>

    </div>

  `;


  document.body.appendChild(
    overlay
  );


  animateLevelChange();
}


// =========================================================
// CLOSE LEVEL UP POPUP
// =========================================================

function closeLevelUpPopup() {

  const popup =
    document.querySelector(
      ".level-up-overlay"
    );


  if (popup) {

    popup.remove();

  }

}


// =========================================================
// CHECK LEVEL
// =========================================================

function checkLevel() {

  let leveledUp = false;

  const oldLevel =
    player.level;


  while (
    player.xp >=
    player.level * 100
  ) {

    const requiredXP =
      player.level * 100;


    player.xp -=
      requiredXP;


    player.level++;

    leveledUp = true;

  }


  if (leveledUp) {

    savePlayer();

    updateUI();

    showLevelUpPopup(
      oldLevel,
      player.level
    );

  }

}


// =========================================================
// COMPLETE EXERCISE
// =========================================================

function completeExercise(index) {

  const workout =
    getCurrentWorkout();


  const exercise =
    workout[index];


  if (!exercise) {
    return;
  }


  // Prevent duplicate completion
  if (
    player.completedExercises.includes(
      index
    )
  ) {
    return;
  }


  // Mark completed
  player.completedExercises.push(
    index
  );


  // Add XP
  player.xp +=
    exercise.xp;


  player.totalXp +=
    exercise.xp;


  savePlayer();


  // Show XP popup
  showXpPopup(
    exercise.xp
  );


  // Update screen
  renderWorkout();

  updateUI();


  // Check level
  checkLevel();


  // Check workout completion
  checkWorkoutComplete();


  // Scroll slightly toward next exercise
  setTimeout(function() {

    const cards =
      document.querySelectorAll(
        ".exercise-card"
      );


    if (
      cards[index + 1]
    ) {

      cards[index + 1].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  }, 250);
}


// =========================================================
// CHECK WORKOUT COMPLETE
// =========================================================

function checkWorkoutComplete() {

  const completeBox =
    document.getElementById(
      "completeBox"
    );


  const completeMessage =
    document.getElementById(
      "completeMessage"
    );


  if (!completeBox) {
    return;
  }


  const workout =
    getCurrentWorkout();


  const completed =
    player.completedExercises.length;


  const total =
    workout.length;


  if (
    completed >= total &&
    total > 0
  ) {

    completeBox.style.display =
      "block";


    if (completeMessage) {

      completeMessage.textContent =
        "⚔️ All " +
        total +
        " exercises completed. Claim your reward!";

    }

  } else {

    completeBox.style.display =
      "none";

  }

}


// =========================================================
// FINISH WORKOUT
// =========================================================

function finishWorkout() {

  const workout =
    getCurrentWorkout();


  if (
    player.completedExercises.length <
    workout.length
  ) {

    alert(
      "Complete all exercises first."
    );

    return;
  }


  // Calculate XP earned in this workout
  let workoutXp = 0;


  player.completedExercises.forEach(
    function(index) {

      if (workout[index]) {

        workoutXp +=
          workout[index].xp;

      }

    }
  );


  // Increase workout count
  player.workouts++;


  // Increase streak
  player.streak++;


  // Save history
  player.history.push({

    date:
      new Date().toISOString(),

    xp:
      workoutXp,

    workouts:
      player.workouts

  });


  // Reset exercise completion
  player.completedExercises = [];


  savePlayer();


  // Hide completion box
  const completeBox =
    document.getElementById(
      "completeBox"
    );


  if (completeBox) {

    completeBox.style.display =
      "none";

  }


  renderWorkout();

  updateUI();


  alert(
    "⚔️ QUEST COMPLETE!\n\n+" +
    workoutXp +
    " XP earned!"
  );

}


// =========================================================
// NEW WORKOUT
// =========================================================

function newWorkout() {

  player.completedExercises = [];

  savePlayer();

  renderWorkout();

  updateUI();

}


// =========================================================
// SHOW DIFFICULTY
// =========================================================

function showDifficulty() {

  const difficultyElement =
    document.getElementById(
      "difficulty"
    );


  if (!difficultyElement) {
    return;
  }


  difficultyElement.textContent =
    getDifficulty() +
    "-RANK";
}
