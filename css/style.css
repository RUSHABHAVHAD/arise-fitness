// =========================
// LEVEL UP — APP CONTROLLER
// =========================


// =========================
// RANK SYSTEM
// =========================

function getRank(level) {

  if (level >= 150) return "SSS";
  if (level >= 100) return "SS";
  if (level >= 50) return "S";
  if (level >= 30) return "A";
  if (level >= 20) return "B";
  if (level >= 10) return "C";
  if (level >= 5) return "D";

  return "E";
}


// =========================
// GENERATE PLAN
// =========================

function generatePlan() {

  const goal =
    document.querySelector(
      'input[name="goal"]:checked'
    );

  const experience =
    document.querySelector(
      'input[name="experience"]:checked'
    );

  const equipment =
    document.querySelector(
      'input[name="equipment"]:checked'
    );

  const age =
    document.getElementById("age").value;

  const weight =
    document.getElementById("weight").value;

  const height =
    document.getElementById("height").value;

  const waist =
    document.getElementById("waist").value;

  const trainingDays =
    document.getElementById("trainingDays").value;

  const duration =
    document.getElementById("duration").value;


  // =========================
  // VALIDATION
  // =========================

  if (!goal) {
    alert("Please select your goal.");
    return;
  }

  if (!age || !weight || !height) {
    alert("Please enter your age, weight and height.");
    return;
  }

  if (!experience) {
    alert("Please select your experience level.");
    return;
  }

  if (!equipment) {
    alert("Please select your equipment.");
    return;
  }

  if (!trainingDays) {
    alert("Please select your training days.");
    return;
  }

  if (!duration) {
    alert("Please select your workout duration.");
    return;
  }


  // =========================
  // SAVE PROFILE
  // =========================

  player.profile.goal = goal.value;

  player.profile.age = age;

  player.profile.weight = weight;

  player.profile.height = height;

  player.profile.waist = waist;

  player.profile.experience =
    experience.value;

  player.profile.equipment =
    equipment.value;

  player.profile.trainingDays =
    trainingDays;

  player.profile.duration =
    duration;

  player.planGenerated = true;


  // Reset current workout progress
  player.completedExercises = [];


  savePlayer();


  // =========================
  // SHOW APP
  // =========================

  document.getElementById(
    "onboarding"
  ).style.display = "none";

  document.getElementById(
    "mainApp"
  ).style.display = "block";


  // Render everything
  renderWorkout();

  updateUI();
}


// =========================
// UPDATE UI
// =========================

function updateUI() {

  const levelElement =
    document.getElementById("level");

  const workoutLevelElement =
    document.getElementById("workoutLevel");

  const rankElement =
    document.getElementById("rank");

  const totalXpElement =
    document.getElementById("totalXp");

  const workoutsElement =
    document.getElementById("workouts");

  const streakElement =
    document.getElementById("streak");

  const xpTextElement =
    document.getElementById("xpText");

  const xpFillElement =
    document.getElementById("xpFill");


  // =========================
  // LEVEL
  // =========================

  if (levelElement) {
    levelElement.textContent =
      player.level;
  }

  if (workoutLevelElement) {
    workoutLevelElement.textContent =
      player.level;
  }


  // =========================
  // RANK
  // =========================

  const rank =
    getRank(player.level);

  if (rankElement) {
    rankElement.textContent =
      rank + "-RANK";
  }


  // =========================
  // STATS
  // =========================

  if (totalXpElement) {
    totalXpElement.textContent =
      player.totalXp;
  }

  if (workoutsElement) {
    workoutsElement.textContent =
      player.workouts;
  }

  if (streakElement) {
    streakElement.textContent =
      player.streak;
  }


  // =========================
  // XP BAR
  // =========================

  const requiredXP =
    player.level * 100;

  const currentXP =
    player.xp;

  const percentage =
    Math.min(
      (currentXP / requiredXP) * 100,
      100
    );


  if (xpTextElement) {

    xpTextElement.textContent =
      currentXP +
      " / " +
      requiredXP;

  }


  if (xpFillElement) {

    xpFillElement.style.width =
      percentage + "%";

  }


  // =========================
  // DIFFICULTY
  // =========================

  if (
    typeof showDifficulty ===
    "function"
  ) {
    showDifficulty();
  }
}


// =========================
// RESET PROGRESS
// =========================

function resetProgress() {

  const confirmed =
    confirm(
      "Are you sure you want to reset all your progress?"
    );

  if (!confirmed) {
    return;
  }


  resetPlayer();


  document.getElementById(
    "mainApp"
  ).style.display = "none";

  document.getElementById(
    "onboarding"
  ).style.display = "block";


  // Clear form selections
  document.querySelectorAll(
    'input[type="radio"]'
  ).forEach(function(input) {

    input.checked = false;

  });


  document.getElementById(
    "age"
  ).value = "";

  document.getElementById(
    "weight"
  ).value = "";

  document.getElementById(
    "height"
  ).value = "";

  document.getElementById(
    "waist"
  ).value = "";

  document.getElementById(
    "trainingDays"
  ).value = "";

  document.getElementById(
    "duration"
  ).value = "";
}


// =========================
// LEVEL UP MESSAGE
// =========================

function showLevelUpMessage(
  oldLevel,
  newLevel
) {

  if (newLevel <= oldLevel) {
    return;
  }


  const oldRank =
    getRank(oldLevel);

  const newRank =
    getRank(newLevel);


  let message =
    "LEVEL UP!\n\n" +
    "You reached Level " +
    newLevel +
    "!";


  if (newRank !== oldRank) {

    message +=
      "\n\nRANK UP!\n" +
      oldRank +
      " → " +
      newRank;

  }


  alert(message);
}


// =========================
// WORKOUT COMPLETE
// =========================

function handleWorkoutComplete() {

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


  const totalExercises =
    workout.length;


  const completed =
    player.completedExercises.length;


  if (
    completed >= totalExercises &&
    totalExercises > 0
  ) {

    completeBox.style.display =
      "block";


    if (completeMessage) {

      completeMessage.textContent =
        "All " +
        totalExercises +
        " exercises completed. Claim your reward!";

    }

  } else {

    completeBox.style.display =
      "none";

  }
}


// =========================
// SECTION NAVIGATION
// =========================

function showSection(section) {

  if (section === "workout") {

    const workoutSection =
      document.getElementById(
        "workoutSection"
      );

    if (workoutSection) {

      workoutSection.scrollIntoView({
        behavior: "smooth"
      });

    }

    return;
  }


  if (section === "home") {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  // Future sections
  alert(
    "This section is coming soon."
  );
}


// =========================
// APP START
// =========================

function loadApp() {

  if (
    player.planGenerated &&
    player.profile &&
    player.profile.goal
  ) {

    document.getElementById(
      "onboarding"
    ).style.display = "none";

    document.getElementById(
      "mainApp"
    ).style.display = "block";


    renderWorkout();

    updateUI();

  } else {

    document.getElementById(
      "onboarding"
    ).style.display = "block";

    document.getElementById(
      "mainApp"
    ).style.display = "none";

  }
}


// =========================
// START APP
// =========================

loadApp();
