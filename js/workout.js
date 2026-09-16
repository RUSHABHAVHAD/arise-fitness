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


function getCurrentWorkout() {

  const profile = player.profile;

  const goal = profile.goal;
  const experience = profile.experience;
  const equipment = profile.equipment;
  const duration = Number(profile.duration);

  let workout = [];


  // ==========================================
  // BEGINNER / NO EQUIPMENT
  // ==========================================

  if (
    experience === "beginner" &&
    equipment === "none"
  ) {

    workout = [
      {
        id: "pushups",
        name: "Push Ups",
        sets: 3,
        reps: 10,
        xp: 30
      },

      {
        id: "squats",
        name: "Bodyweight Squats",
        sets: 3,
        reps: 15,
        xp: 30
      },

      {
        id: "lunges",
        name: "Reverse Lunges",
        sets: 3,
        reps: 10,
        xp: 30
      },

      {
        id: "plank",
        name: "Plank",
        sets: 3,
        reps: 30,
        unit: "sec",
        xp: 30
      }
    ];
  }


  // ==========================================
  // BEGINNER / DUMBBELLS
  // ==========================================

  else if (
    experience === "beginner" &&
    equipment === "dumbbells"
  ) {

    workout = [
      {
        id: "db_press",
        name: "Dumbbell Floor Press",
        sets: 3,
        reps: 10,
        xp: 35
      },

      {
        id: "db_squat",
        name: "Dumbbell Goblet Squat",
        sets: 3,
        reps: 12,
        xp: 35
      },

      {
        id: "db_row",
        name: "Dumbbell Row",
        sets: 3,
        reps: 10,
        xp: 35
      },

      {
        id: "db_rdl",
        name: "Dumbbell Romanian Deadlift",
        sets: 3,
        reps: 10,
        xp: 35
      }
    ];
  }


  // ==========================================
  // INTERMEDIATE / NO EQUIPMENT
  // ==========================================

  else if (
    experience === "intermediate" &&
    equipment === "none"
  ) {

    workout = [
      {
        id: "decline_pushups",
        name: "Decline Push Ups",
        sets: 4,
        reps: 12,
        xp: 50
      },

      {
        id: "split_squat",
        name: "Bulgarian Split Squat",
        sets: 3,
        reps: 12,
        xp: 50
      },

      {
        id: "diamond_pushups",
        name: "Diamond Push Ups",
        sets: 3,
        reps: 10,
        xp: 50
      },

      {
        id: "plank_taps",
        name: "Plank Shoulder Taps",
        sets: 3,
        reps: 16,
        xp: 50
      }
    ];
  }


  // ==========================================
  // INTERMEDIATE / DUMBBELLS
  // ==========================================

  else if (
    experience === "intermediate" &&
    equipment === "dumbbells"
  ) {

    workout = [
      {
        id: "db_bench",
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 10,
        xp: 60
      },

      {
        id: "db_row",
        name: "One Arm Dumbbell Row",
        sets: 4,
        reps: 10,
        xp: 60
      },

      {
        id: "db_lunge",
        name: "Dumbbell Walking Lunges",
        sets: 3,
        reps: 12,
        xp: 60
      },

      {
        id: "db_ohp",
        name: "Dumbbell Shoulder Press",
        sets: 3,
        reps: 10,
        xp: 60
      }
    ];
  }


  // ==========================================
  // ADVANCED
  // ==========================================

  else if (experience === "advanced") {

    workout = [
      {
        id: "advanced_push",
        name: "Archer Push Ups",
        sets: 4,
        reps: 10,
        xp: 80
      },

      {
        id: "advanced_split",
        name: "Bulgarian Split Squat",
        sets: 4,
        reps: 15,
        xp: 80
      },

      {
        id: "advanced_lunge",
        name: "Explosive Jump Lunges",
        sets: 4,
        reps: 12,
        xp: 80
      },

      {
        id: "advanced_core",
        name: "Plank Shoulder Taps",
        sets: 4,
        reps: 20,
        xp: 80
      }
    ];
  }


  // ==========================================
  // DEFAULT
  // ==========================================

  else {

    workout = [
      {
        id: "pushups",
        name: "Push Ups",
        sets: 3,
        reps: 10,
        xp: 30
      },

      {
        id: "squats",
        name: "Bodyweight Squats",
        sets: 3,
        reps: 15,
        xp: 30
      },

      {
        id: "lunges",
        name: "Reverse Lunges",
        sets: 3,
        reps: 10,
        xp: 30
      },

      {
        id: "plank",
        name: "Plank",
        sets: 3,
        reps: 30,
        unit: "sec",
        xp: 30
      }
    ];
  }


  // ==========================================
  // GOAL ADJUSTMENT
  // ==========================================

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
      reps: exercise.reps + 2,
      xp: exercise.xp + 5
    }));

  }


  // ==========================================
  // DURATION ADJUSTMENT
  // ==========================================

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


function getRestTime() {

  const difficulty = getDifficulty();

  const restTimes = {

    E: 60,
    D: 60,
    C: 60,
    B: 75,
    A: 90,
    S: 120,
    SS: 150,
    SSS: 180

  };

  return restTimes[difficulty] || 60;
}


function renderWorkout() {

  const exerciseList =
    document.getElementById("exerciseList");

  if (!exerciseList) return;

  const workout =
    getCurrentWorkout();

  exerciseList.innerHTML = "";

  workout.forEach((exercise, index) => {

    const card =
      document.createElement("div");

    card.className = "exercise-card";

    card.innerHTML = `

      <h3>
        ${index + 1}. ${exercise.name}
      </h3>

      <p>
        ${exercise.sets} sets ×
        ${exercise.reps}
        ${exercise.unit || "reps"}
      </p>

      <p>
        ⭐ ${exercise.xp} XP
      </p>

      <button
        onclick="completeExercise('${exercise.id}', ${exercise.xp})"
      >
        COMPLETE
      </button>

    `;

    exerciseList.appendChild(card);

  });

}


function showDifficulty() {

  const difficulty =
    getDifficulty();

  alert(
    "Current Rank: " +
    difficulty +
    "\n\n" +
    "Training difficulty adapts to your profile and level."
  );

}


function completeExercise(id, xp) {

  if (
    player.completedExercises.includes(id)
  ) {

    return;

  }


  player.completedExercises.push(id);

  player.xp += xp;

  player.totalXp += xp;


  checkLevel();

  savePlayer();

  updateUI();


  const workout =
    getCurrentWorkout();

  if (
    player.completedExercises.length >=
    workout.length
  ) {

    finishWorkout();

  }


  renderWorkout();

}


function checkLevel() {

  let requiredXP =
    player.level * 100;


  while (
    player.xp >= requiredXP
  ) {

    player.xp -= requiredXP;

    player.level++;

    requiredXP =
      player.level * 100;

    alert(
      "⚔️ LEVEL UP!\n\n" +
      "You reached Level " +
      player.level +
      "!"
    );

  }

}


function finishWorkout() {

  player.workouts++;

  player.streak++;

  player.history.push({

    date: new Date().toISOString(),

    level: player.level,

    xp: player.totalXp

  });


  player.completedExercises = [];

  savePlayer();

  const completeBox =
    document.getElementById("completeBox");

  if (completeBox) {

    completeBox.style.display =
      "block";

  }

}


function newWorkout() {

  player.completedExercises = [];

  savePlayer();

  renderWorkout();

}
