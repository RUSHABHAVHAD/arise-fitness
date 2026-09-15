
          function getDifficulty() {
  if (player.level >= 50) return "S";
  if (player.level >= 30) return "A";
  if (player.level >= 20) return "B";
  if (player.level >= 10) return "C";
  if (player.level >= 5) return "D";
  return "E";
}

const workouts = {
  E: [
    {
      id: "pushups",
      name: "Push Ups",
      sets: 3,
      reps: 12,
      xp: 25
    },
    {
      id: "squats",
      name: "Bodyweight Squats",
      sets: 3,
      reps: 15,
      xp: 25
    },
    {
      id: "lunges",
      name: "Reverse Lunges",
      sets: 3,
      reps: 10,
      xp: 25
    },
    {
      id: "plank",
      name: "Plank",
      sets: 3,
      reps: 40,
      unit: "sec",
      xp: 25
    }
  ],

  D: [
    {
      id: "pushups",
      name: "Push Ups",
      sets: 4,
      reps: 15,
      xp: 30
    },
    {
      id: "squats",
      name: "Bodyweight Squats",
      sets: 4,
      reps: 18,
      xp: 30
    },
    {
      id: "lunges",
      name: "Walking Lunges",
      sets: 4,
      reps: 12,
      xp: 30
    },
    {
      id: "plank",
      name: "Plank",
      sets: 4,
      reps: 45,
      unit: "sec",
      xp: 30
    }
  ],

  C: [
    {
      id: "decline-pushups",
      name: "Decline Push Ups",
      sets: 4,
      reps: 15,
      xp: 40
    },
    {
      id: "jump-squats",
      name: "Jump Squats",
      sets: 4,
      reps: 18,
      xp: 40
    },
    {
      id: "lunges",
      name: "Walking Lunges",
      sets: 4,
      reps: 15,
      xp: 40
    },
    {
      id: "plank",
      name: "Plank",
      sets: 4,
      reps: 60,
      unit: "sec",
      xp: 40
    }
  ],

  B: [
    {
      id: "diamond-pushups",
      name: "Diamond Push Ups",
      sets: 5,
      reps: 15,
      xp: 50
    },
    {
      id: "bulgarian-squats",
      name: "Bulgarian Split Squats",
      sets: 5,
      reps: 12,
      xp: 50
    },
    {
      id: "jump-lunges",
      name: "Jump Lunges",
      sets: 5,
      reps: 12,
      xp: 50
    },
    {
      id: "side-plank",
      name: "Side Plank",
      sets: 4,
      reps: 60,
      unit: "sec",
      xp: 50
    }
  ],

  A: [
    {
      id: "diamond-pushups",
      name: "Diamond Push Ups",
      sets: 5,
      reps: 20,
      xp: 65
    },
    {
      id: "bulgarian-squats",
      name: "Bulgarian Split Squats",
      sets: 5,
      reps: 15,
      xp: 65
    },
    {
      id: "jump-lunges",
      name: "Jump Lunges",
      sets: 5,
      reps: 15,
      xp: 65
    },
    {
      id: "shoulder-taps",
      name: "Plank Shoulder Taps",
      sets: 5,
      reps: 20,
      xp: 65
    }
  ],

  S: [
    {
      id: "archer-pushups",
      name: "Archer Push Ups",
      sets: 5,
      reps: 12,
      xp: 80
    },
    {
      id: "bulgarian-squats",
      name: "Bulgarian Split Squats",
      sets: 5,
      reps: 20,
      xp: 80
    },
    {
      id: "explosive-lunges",
      name: "Explosive Jump Lunges",
      sets: 5,
      reps: 15,
      xp: 80
    },
    {
      id: "shoulder-taps",
      name: "Plank Shoulder Taps",
      sets: 5,
      reps: 25,
      xp: 80
    }
  ]
};

const restTimes = {
  E: 60,
  D: 50,
  C: 45,
  B: 40,
  A: 35,
  S: 30
};

function getCurrentWorkout() {
  const rank = getDifficulty();
  return workouts[rank];
}

function getRestTime() {
  return restTimes[getDifficulty()];
}

function renderWorkout() {
  const list = document.getElementById("exerciseList");

  if (!list) return;

  const rank = getDifficulty();
  const workout = workouts[rank];

  list.innerHTML = "";

  workout.forEach((exercise, index) => {
    const card = document.createElement("div");

    card.className = "exercise-card";

    const unit = exercise.unit || "reps";

    card.innerHTML = `
      <div class="exercise-header">
        <h3>${index + 1}. ${exercise.name}</h3>
        <span class="exercise-xp">+${exercise.xp} XP</span>
      </div>

      <p class="exercise-info">
        ${exercise.sets} sets × ${exercise.reps} ${unit}
      </p>

      <div class="exercise-inputs">
        <input
          type="number"
          min="0"
          placeholder="Weight (kg)"
          id="weight-${exercise.id}"
        >
      </div>

      <button
        onclick="completeExercise('${exercise.id}')"
        class="complete"
        id="button-${exercise.id}"
      >
        Complete Exercise
      </button>
    `;

    list.appendChild(card);
  });

  showDifficulty(rank);
}

function showDifficulty(rank) {
  const sectionTitle = document.querySelector("section h2");

  if (sectionTitle) {
    sectionTitle.textContent =
      `Today's Workout — ${rank}-Rank`;
  }
}

function completeExercise(id) {
  const workout = getCurrentWorkout();

  const exercise = workout.find(item => item.id === id);

  if (!exercise) return;

  if (player.completedExercises.includes(id)) {
    alert("Exercise already completed!");
    return;
  }

  player.xp += exercise.xp;
  player.totalXp += exercise.xp;

  player.completedExercises.push(id);

  savePlayer();

  const button = document.getElementById(`button-${id}`);

  if (button) {
    button.textContent = "✓ Completed";
    button.disabled = true;
  }

  checkLevel();
  updateUI();

  if (player.completedExercises.length === workout.length) {
    finishWorkout();
  }
}

function checkLevel() {
  let requiredXP = player.level * 100;

  while (player.xp >= requiredXP) {
    player.xp -= requiredXP;
    player.level++;

    alert(
      `⚔️ LEVEL UP!\n\nYou reached Level ${player.level}!`
    );

    requiredXP = player.level * 100;
  }

  savePlayer();
}

function finishWorkout() {
  player.workouts++;
  player.streak++;

  player.history.push({
    date: new Date().toLocaleDateString(),
    xp: player.totalXp,
    level: player.level
  });

  savePlayer();

  const completeBox =
    document.getElementById("completeBox");

  if (completeBox) {
    completeBox.style.display = "block";
  }

  updateUI();
}

function newWorkout() {
  player.completedExercises = [];

  savePlayer();

  const completeBox =
    document.getElementById("completeBox");

  if (completeBox) {
    completeBox.style.display = "none";
  }

  renderWorkout();
  updateUI();
}

renderWorkout();
