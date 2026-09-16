/* =========================================
   LEVEL UP — WORKOUT SYSTEM
   ========================================= */

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


/* =========================================
   WORKOUT GENERATOR
   ========================================= */

function getCurrentWorkout() {

  const profile = player.profile || {};

  const experience = profile.experience;
  const equipment = profile.equipment;
  const goal = profile.goal;
  const duration = Number(profile.duration);

  let workout = [];


  /* =========================================
     BEGINNER — NO EQUIPMENT
     ========================================= */

  if (experience === "beginner" && equipment === "none") {

    workout = [
      {
        name: "Bodyweight Squats",
        sets: 3,
        reps: 12,
        xp: 20
      },
      {
        name: "Push Ups",
        sets: 3,
        reps: 8,
        xp: 20
      },
      {
        name: "Glute Bridges",
        sets: 3,
        reps: 12,
        xp: 15
      },
      {
        name: "Plank",
        sets: 3,
        reps: "30 sec",
        xp: 20
      },
      {
        name: "Mountain Climbers",
        sets: 3,
        reps: 20,
        xp: 20
      }
    ];
  }


  /* =========================================
     BEGINNER — DUMBBELLS
     ========================================= */

  else if (experience === "beginner" && equipment === "dumbbells") {

    workout = [
      {
        name: "Goblet Squat",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Dumbbell Chest Press",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Dumbbell Row",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 3,
        reps: 10,
        xp: 25
      },
      {
        name: "Dumbbell Romanian Deadlift",
        sets: 3,
        reps: 10,
        xp: 25
      }
    ];
  }


  /* =========================================
     INTERMEDIATE — NO EQUIPMENT
     ========================================= */

  else if (experience === "intermediate" && equipment === "none") {

    workout = [
      {
        name: "Jump Squats",
        sets: 4,
        reps: 12,
        xp: 35
      },
      {
        name: "Diamond Push Ups",
        sets: 4,
        reps: 10,
        xp: 35
      },
      {
        name: "Reverse Lunges",
        sets: 4,
        reps: 12,
        xp: 30
      },
      {
        name: "Pike Push Ups",
        sets: 3,
        reps: 10,
        xp: 35
      },
      {
        name: "Plank",
        sets: 3,
        reps: "45 sec",
        xp: 30
      }
    ];
  }


  /* =========================================
     INTERMEDIATE — DUMBBELLS
     ========================================= */

  else if (experience === "intermediate" && equipment === "dumbbells") {

    workout = [
      {
        name: "Dumbbell Squat",
        sets: 4,
        reps: 10,
        xp: 40
      },
      {
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 10,
        xp: 40
      },
      {
        name: "One Arm Dumbbell Row",
        sets: 4,
        reps: 10,
        xp: 40
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 4,
        reps: 10,
        xp: 35
      },
      {
        name: "Dumbbell Romanian Deadlift",
        sets: 4,
        reps: 10,
        xp: 40
      }
    ];
  }


  /* =========================================
     ADVANCED
     ========================================= */

  else if (experience === "advanced") {

    workout = [
      {
        name: "Bulgarian Split Squat",
        sets: 4,
        reps: 10,
        xp: 55
      },
      {
        name: "Advanced Push Ups",
        sets: 4,
        reps: 12,
        xp: 50
      },
      {
        name: "Single Leg Romanian Deadlift",
        sets: 4,
        reps: 10,
        xp: 55
      },
      {
        name: "Pike Push Up",
        sets: 4,
        reps: 12,
        xp: 50
      },
      {
        name: "Hollow Body Hold",
        sets: 4,
        reps: "40 sec",
        xp: 50
      }
    ];
  }


  /* =========================================
     DEFAULT WORKOUT
     ========================================= */

  else {

    workout = [
      {
        name: "Bodyweight Squats",
        sets: 3,
        reps: 12,
        xp: 20
      },
      {
        name: "Push Ups",
        sets: 3,
        reps: 8,
        xp: 20
      },
      {
        name: "Lunges",
        sets: 3,
        reps: 10,
        xp: 20
      }
    ];
  }


  /* =========================================
     GOAL ADJUSTMENTS
     ========================================= */

  if (goal === "strength") {

    workout = workout.map(exercise => ({
      ...exercise,
      sets: exercise.sets + 1,
      xp: exercise.xp + 10
    }));
  }


  if (goal === "muscle") {

    workout = workout.map(exercise => ({
      ...exercise,
      xp: exercise.xp + 10
    }));
  }


  if (goal === "fat_loss") {

    workout = workout.map(exercise => ({
      ...exercise,
      reps:
        typeof exercise.reps === "number"
          ? exercise.reps + 2
          : exercise.reps,
      xp: exercise.xp + 5
    }));
  }


  /* =========================================
     DURATION
     ========================================= */

  if (duration <= 20) {

    workout = workout.slice(0, 3);
  }


  if (duration >= 60) {

    workout = workout.map(exercise => ({
      ...exercise,
      sets: exercise.sets + 1,
      xp: exercise.xp + 10
    }));
  }


  return workout;
}


/* =========================================
   REST TIME
   ========================================= */

function getRestTime() {

  const difficulty = getDifficulty();

  if (difficulty === "E") return 60;
  if (difficulty === "D") return 60;
  if (difficulty === "C") return 60;
  if (difficulty === "B") return 75;
  if (difficulty === "A") return 90;
  if (difficulty === "S") return 120;
  if (difficulty === "SS") return 150;

  return 180;
}


/* =========================================
   RENDER WORKOUT
   ========================================= */

function renderWorkout() {

  const workout = getCurrentWorkout();

  const exerciseList =
    document.getElementById("exerciseList");

  if (!exerciseList) return;

  exerciseList.innerHTML = "";

  workout.forEach((exercise, index) => {

    const completed =
      player.completedExercises.includes(index);

    const card =
      document.createElement("div");

    card.className =
      completed
        ? "exercise-card completed"
        : "exercise-card";


    card.innerHTML = `

      <div class="exercise-top">

        <h3 class="exercise-name">
          ${exercise.name}
        </h3>

        <span class="exercise-xp">
          +${exercise.xp} XP
        </span>

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

        ${completed ? "✓ COMPLETED" : "COMPLETE"}

      </button>

    `;

    exerciseList.appendChild(card);

  });


  checkWorkoutComplete();
}


/* =========================================
   COMPLETE EXERCISE
   ========================================= */

function completeExercise(index) {

  if (player.completedExercises.includes(index)) {
    return;
  }

  const workout = getCurrentWorkout();

  const exercise = workout[index];

  if (!exercise) return;


  /* Add exercise */

  player.completedExercises.push(index);


  /* Give XP */

  player.xp += exercise.xp;

  player.totalXp += exercise.xp;


  /* Save */

  savePlayer();


  /* Check level */

  checkLevel();


  /* Refresh */

  renderWorkout();

  updateUI();

}


/* =========================================
   CHECK WORKOUT COMPLETE
   ========================================= */

function checkWorkoutComplete() {

  const workout = getCurrentWorkout();

  const completeBox =
    document.getElementById("completeBox");

  if (!completeBox) return;


  if (
    workout.length > 0 &&
    player.completedExercises.length >= workout.length
  ) {

    completeBox.style.display = "block";

  } else {

    completeBox.style.display = "none";

  }

}


/* =========================================
   FINISH WORKOUT
   ========================================= */

function finishWorkout() {

  const workout = getCurrentWorkout();

  if (
    player.completedExercises.length < workout.length
  ) {
    return;
  }


  player.workouts += 1;

  player.streak += 1;


  player.history.push({

    date: new Date().toISOString(),

    xp: player.totalXp,

    workouts: player.workouts

  });


  player.completedExercises = [];


  savePlayer();


  renderWorkout();

  updateUI();

}


/* =========================================
   LEVEL SYSTEM
   ========================================= */

function checkLevel() {

  let requiredXP =
    player.level * 100;


  while (player.xp >= requiredXP) {

    player.xp -= requiredXP;

    player.level += 1;

    requiredXP =
      player.level * 100;

    alert(
      "⚔️ LEVEL UP!\n\nYou reached Level " +
      player.level +
      "!"
    );

  }


  savePlayer();

}


/* =========================================
   START NEW WORKOUT
   ========================================= */

function newWorkout() {

  player.completedExercises = [];

  savePlayer();

  renderWorkout();

  updateUI();

}


/* =========================================
   SHOW DIFFICULTY
   ========================================= */

function showDifficulty() {

  const difficulty =
    getDifficulty();

  const difficultyElement =
    document.querySelector(".difficulty");

  if (difficultyElement) {

    difficultyElement.textContent =
      difficulty + "-RANK DIFFICULTY";

  }

}
