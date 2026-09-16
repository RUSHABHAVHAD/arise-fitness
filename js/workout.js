/* =========================================================
   LEVEL UP — WORKOUT SYSTEM
========================================================= */


/* =========================================================
   DIFFICULTY
========================================================= */

function getDifficulty() {

  const level = player.level;

  if (level < 5) return "E-RANK";
  if (level < 10) return "D-RANK";
  if (level < 20) return "C-RANK";
  if (level < 30) return "B-RANK";
  if (level < 50) return "A-RANK";
  if (level < 100) return "S-RANK";
  if (level < 150) return "SS-RANK";

  return "SSS-RANK";
}


/* =========================================================
   RANK
========================================================= */

function getRank(level) {

  if (level < 5) return "E";
  if (level < 10) return "D";
  if (level < 20) return "C";
  if (level < 30) return "B";
  if (level < 50) return "A";
  if (level < 100) return "S";
  if (level < 150) return "SS";

  return "SSS";
}


/* =========================================================
   XP REQUIRED FOR NEXT LEVEL
========================================================= */

function getRequiredXP(level) {

  /*
    XP requirement increases as the player becomes stronger.

    Early game:
    Level 1 → 100 XP

    Later ranks require progressively more XP.
  */

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


/* =========================================================
   LEVEL REWARDS
========================================================= */

function getLevelReward(level) {

  const rewards = {

    2: "Unlocked: Beginner Quest",
    3: "Unlocked: Training Streak",
    5: "RANK D UNLOCKED",
    10: "RANK C UNLOCKED",
    20: "RANK B UNLOCKED",
    30: "RANK A UNLOCKED",
    50: "RANK S UNLOCKED",
    100: "RANK SS UNLOCKED",
    150: "RANK SSS UNLOCKED"

  };

  return rewards[level] || "Keep training to unlock new rewards";
}


/* =========================================================
   WORKOUT DATABASE
========================================================= */

const workoutDatabase = {

  beginner: {

    none: [

      {
        name: "Bodyweight Squat",
        sets: 3,
        reps: 10,
        xp: 30
      },

      {
        name: "Incline Push-Up",
        sets: 3,
        reps: 8,
        xp: 30
      },

      {
        name: "Glute Bridge",
        sets: 3,
        reps: 12,
        xp: 25
      },

      {
        name: "Bird Dog",
        sets: 2,
        reps: 10,
        xp: 20
      },

      {
        name: "Plank",
        sets: 2,
        reps: 20,
        xp: 25
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
        name: "Dumbbell Floor Press",
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
        name: "Dumbbell Romanian Deadlift",
        sets: 3,
        reps: 10,
        xp: 35
      },

      {
        name: "Plank",
        sets: 2,
        reps: 25,
        xp: 25
      }

    ]

  },


  /* =======================================================
     INTERMEDIATE
  ======================================================= */

  intermediate: {

    none: [

      {
        name: "Push-Up",
        sets: 4,
        reps: 12,
        xp: 45
      },

      {
        name: "Bulgarian Split Squat",
        sets: 3,
        reps: 10,
        xp: 45
      },

      {
        name: "Pike Push-Up",
        sets: 3,
        reps: 8,
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
        reps: 40,
        xp: 35
      }

    ],

    dumbbells: [

      {
        name: "Dumbbell Squat",
        sets: 4,
        reps: 10,
        xp: 50
      },

      {
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 10,
        xp: 50
      },

      {
        name: "One-Arm Dumbbell Row",
        sets: 4,
        reps: 10,
        xp: 50
      },

      {
        name: "Dumbbell Romanian Deadlift",
        sets: 4,
        reps: 10,
        xp: 50
      },

      {
        name: "Dumbbell Shoulder Press",
        sets: 3,
        reps: 10,
        xp: 45
      }

    ]

  },


  /* =======================================================
     ADVANCED
  ======================================================= */

  advanced: {

    none: [

      {
        name: "Diamond Push-Up",
        sets: 4,
        reps: 12,
        xp: 60
      },

      {
        name: "Bulgarian Split Squat",
        sets: 4,
        reps: 12,
        xp: 60
      },

      {
        name: "Decline Push-Up",
        sets: 4,
        reps: 10,
        xp: 60
      },

      {
        name: "Single-Leg Romanian Deadlift",
        sets: 3,
        reps: 12,
        xp: 55
      },

      {
        name: "Hollow Body Hold",
        sets: 3,
        reps: 30,
        xp: 50
      }

    ],

    dumbbells: [

      {
        name: "Heavy Goblet Squat",
        sets: 4,
        reps: 8,
        xp: 70
      },

      {
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 8,
        xp: 70
      },

      {
        name: "Heavy Dumbbell Row",
        sets: 4,
        reps: 8,
        xp: 70
      },

      {
        name: "Dumbbell Romanian Deadlift",
        sets: 4,
        reps: 8,
        xp: 70
      },

      {
        name: "Dumbbell Shoulder Press",
        sets: 4,
        reps: 8,
        xp: 65
      }

    ]

  }

};


/* =========================================================
   GET PLAYER EXPERIENCE
========================================================= */

function getExperienceLevel() {

  const experience = player.profile.experience;

  if (experience === "intermediate") {
    return "intermediate";
  }

  if (experience === "advanced") {
    return "advanced";
  }

  return "beginner";
}


/* =========================================================
   GET EQUIPMENT
========================================================= */

function getEquipmentLevel() {

  const equipment = player.profile.equipment;

  if (equipment === "dumbbells") {
    return "dumbbells";
  }

  /*
    Home gym / full gym currently use
    bodyweight fallback until gym exercise
    database is added.
  */

  return "none";
}


/* =========================================================
   CREATE WORKOUT
========================================================= */

function getCurrentWorkout() {

  const experience = getExperienceLevel();
  const equipment = getEquipmentLevel();

  let baseWorkout =
    workoutDatabase[experience][equipment];

  /*
    Clone exercises so the original database
    is never modified.
  */

  let workout = baseWorkout.map(function(exercise) {

    return {
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      xp: exercise.xp
    };

  });


  /* =======================================================
     GOAL ADJUSTMENTS
  ======================================================= */

  const goal = player.profile.goal;


  if (goal === "strength") {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        sets: exercise.sets + 1,
        reps: Math.max(5, exercise.reps - 2),
        xp: exercise.xp + 10
      };

    });

  }


  if (goal === "muscle") {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        sets: exercise.sets + 1,
        xp: exercise.xp + 10
      };

    });

  }


  if (goal === "fat_loss") {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        reps: exercise.reps + 2,
        xp: exercise.xp + 5
      };

    });

  }


  /* =======================================================
     LEVEL SCALING
  ======================================================= */

  const level = player.level;


  if (level >= 10) {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        xp: exercise.xp + 5
      };

    });

  }


  if (level >= 20) {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        sets: exercise.sets + 1,
        xp: exercise.xp + 5
      };

    });

  }


  if (level >= 50) {

    workout = workout.map(function(exercise) {

      return {
        ...exercise,
        xp: exercise.xp + 10
      };

    });

  }


  /* =======================================================
     SESSION DURATION
  ======================================================= */

  const duration =
    Number(player.profile.duration);


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


/* =========================================================
   REST TIME
========================================================= */

function getRestTime() {

  const rank = getRank(player.level);

  switch (rank) {

    case "E":
    case "D":
    case "C":
      return 60;

    case "B":
      return 75;

    case "A":
      return 90;

    case "S":
      return 120;

    case "SS":
      return 150;

    case "SSS":
      return 180;

    default:
      return 60;
  }
}


/* =========================================================
   RENDER WORKOUT
========================================================= */

function renderWorkout() {

  const workout = getCurrentWorkout();

  const exerciseList =
    document.getElementById("exerciseList");

  if (!exerciseList) {
    return;
  }


  exerciseList.innerHTML = "";


  workout.forEach(function(exercise, index) {

    const completed =
      player.completedExercises.includes(index);


    const card =
      document.createElement("div");

    card.className =
      "exercise-card" +
      (completed ? " completed" : "");


    card.innerHTML = `

      <div class="exercise-number">
        ${index + 1}
      </div>

      <div class="exercise-info">

        <h3>
          ${exercise.name}
        </h3>

        <p>
          ${exercise.sets} SETS × ${exercise.reps} REPS
        </p>

        <span class="exercise-rest">
          REST ${getRestTime()} SEC
        </span>

      </div>

      <div class="exercise-xp">
        +${exercise.xp} XP
      </div>

      <button
        class="complete-exercise"
        onclick="completeExercise(${index})"
        ${completed ? "disabled" : ""}
      >

        ${completed ? "✓ COMPLETED" : "COMPLETE"}

      </button>

    `;


    exerciseList.appendChild(card);

  });


  updateCompleteBox();
}


/* =========================================================
   XP POPUP
========================================================= */

function showXpPopup(amount) {

  const popup =
    document.createElement("div");

  popup.className =
    "xp-popup";

  popup.textContent =
    "+" + amount + " XP";


  document.body.appendChild(popup);


  /*
    Force browser reflow so animation
    always starts correctly.
  */

  void popup.offsetWidth;


  popup.style.animation =
    "xpPopup 1.5s ease forwards";


  setTimeout(function() {

    if (popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }

  }, 1600);
}


/* =========================================================
   LEVEL-UP POPUP
========================================================= */

function showLevelUpPopup(oldLevel, newLevel) {

  const oldRank =
    getRank(oldLevel);

  const newRank =
    getRank(newLevel);

  const rankUp =
    oldRank !== newRank;


  const overlay =
    document.createElement("div");

  overlay.className =
    "level-up-overlay";


  overlay.innerHTML = `

    <div class="level-up-card">

      <div class="level-icon">
        ⚔️
      </div>

      <div class="level-label">
        LEVEL UP
      </div>

      <div class="level-number">
        ${newLevel}
      </div>

      <div class="level-message">
        YOUR POWER HAS INCREASED
      </div>

      <div class="reward-card">

        <div class="reward-title">
          REWARD UNLOCKED
        </div>

        <div class="reward-text">
          ${getLevelReward(newLevel)}
        </div>

      </div>

      ${
        rankUp
          ? `
            <div class="rank-up">
              RANK UP<br>
              ${oldRank} → ${newRank}
            </div>
          `
          : ""
      }

      <button
        class="level-up-close"
        onclick="closeLevelUpPopup()"
      >
        CONTINUE
      </button>

    </div>

  `;


  document.body.appendChild(overlay);


  void overlay.offsetWidth;


  requestAnimationFrame(function() {

    overlay.classList.add("show");

  });

}


/* =========================================================
   CLOSE LEVEL-UP POPUP
========================================================= */

function closeLevelUpPopup() {

  const overlay =
    document.querySelector(".level-up-overlay");

  if (!overlay) {
    return;
  }


  overlay.classList.remove("show");


  setTimeout(function() {

    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }

  }, 300);
}


/* =========================================================
   CHECK LEVEL
========================================================= */

function checkLevel() {

  let leveledUp = false;

  let oldLevel =
    player.level;


  /*
    Player can potentially gain enough XP
    for multiple levels at once.
  */

  while (
    player.xp >=
    getRequiredXP(player.level)
  ) {

    player.xp -=
      getRequiredXP(player.level);

    player.level++;

    leveledUp = true;
  }


  if (!leveledUp) {
    return;
  }


  const newLevel =
    player.level;


  savePlayer();


  updateUI();


  showLevelUpPopup(
    oldLevel,
    newLevel
  );
}


/* =========================================================
   COMPLETE EXERCISE
========================================================= */

function completeExercise(index) {

  const workout =
    getCurrentWorkout();

  const exercise =
    workout[index];


  if (!exercise) {
    return;
  }


  /*
    Prevent duplicate XP.
  */

  if (
    player.completedExercises.includes(index)
  ) {

    return;

  }


  /*
    Mark exercise complete.
  */

  player.completedExercises.push(index);


  /*
    Add XP.
  */

  player.xp +=
    exercise.xp;

  player.totalXp +=
    exercise.xp;


  savePlayer();


  /*
    Update interface.
  */

  renderWorkout();

  updateUI();


  /*
    XP animation.
  */

  setTimeout(function() {

    showXpPopup(
      exercise.xp
    );

  }, 100);


  /*
    Level check.
  */

  setTimeout(function() {

    checkLevel();

  }, 500);


  /*
    Check whether entire workout
    has been completed.
  */

  setTimeout(function() {

    checkWorkoutComplete();

  }, 800);
}


/* =========================================================
   CHECK WORKOUT COMPLETION
========================================================= */

function checkWorkoutComplete() {

  const workout =
    getCurrentWorkout();


  if (
    player.completedExercises.length >=
    workout.length
  ) {

    const box =
      document.getElementById("completeBox");

    if (box) {

      box.classList.add("ready");

    }

  }

}


/* =========================================================
   COMPLETE BOX
========================================================= */

function updateCompleteBox() {

  const workout =
    getCurrentWorkout();

  const box =
    document.getElementById("completeBox");

  const message =
    document.getElementById("completeMessage");


  if (!box) {
    return;
  }


  const completed =
    player.completedExercises.length;


  const total =
    workout.length;


  if (completed >= total && total > 0) {

    box.style.display =
      "block";

    box.classList.add("ready");


    if (message) {

      message.textContent =
        "ALL EXERCISES COMPLETE — CLAIM YOUR REWARD";

    }

  } else {

    box.classList.remove("ready");


    if (message) {

      message.textContent =
        completed +
        " / " +
        total +
        " EXERCISES COMPLETE";

    }

  }

}


/* =========================================================
   FINISH WORKOUT
========================================================= */

function finishWorkout() {

  const workout =
    getCurrentWorkout();


  const total =
    workout.length;


  const completed =
    player.completedExercises.length;


  if (
    completed < total
  ) {

    alert(
      "Complete all exercises before claiming your reward."
    );

    return;
  }


  /*
    Calculate XP earned in this workout.
  */

  let workoutXp = 0;


  player.completedExercises.forEach(
    function(index) {

      if (workout[index]) {

        workoutXp +=
          workout[index].xp;

      }

    }
  );


  /*
    Workout statistics.
  */

  player.workouts++;

  player.streak++;


  /*
    Save workout history.
  */

  player.history.push({

    date:
      new Date().toISOString(),

    xp:
      workoutXp,

    exercises:
      completed,

    level:
      player.level,

    rank:
      getRank(player.level)

  });


  /*
    Clear current workout.
  */

  player.completedExercises =
    [];


  savePlayer();


  /*
    Update UI.
  */

  renderWorkout();

  updateUI();


  /*
    Completion message.
  */

  alert(
    "QUEST COMPLETE!\n\n" +
    "+" + workoutXp + " XP EARNED\n\n" +
    "Workout completed successfully."
  );

}


/* =========================================================
   NEW WORKOUT
========================================================= */

function newWorkout() {

  player.completedExercises =
    [];

  savePlayer();

  renderWorkout();

  updateUI();

}


/* =========================================================
   SHOW DIFFICULTY
========================================================= */

function showDifficulty() {

  const difficulty =
    document.getElementById("difficulty");


  if (!difficulty) {
    return;
  }


  difficulty.textContent =
    getDifficulty();

}


/* =========================================================
   START REST TIMER
========================================================= */

let restInterval = null;


function startRestTimer() {

  const restTime =
    getRestTime();


  let remaining =
    restTime;


  const timer =
    document.getElementById("restTimer");

  const timeDisplay =
    document.getElementById("restTime");


  if (!timer || !timeDisplay) {
    return;
  }


  clearInterval(
    restInterval
  );


  timer.style.display =
    "block";


  timeDisplay.textContent =
    remaining;


  restInterval =
    setInterval(function() {

      remaining--;

      timeDisplay.textContent =
        remaining;


      if (remaining <= 0) {

        clearInterval(
          restInterval
        );

        timeDisplay.textContent =
          "READY";

      }

    }, 1000);

}


/* =========================================================
   END WORKOUT SYSTEM
========================================================= */
