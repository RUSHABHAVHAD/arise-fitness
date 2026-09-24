// ==========================================
// LEVEL UP - MAIN APP
// ==========================================


// ==========================================
// RANK
// ==========================================

function getRank(level) {
  return getCurrentRank();
}


// ==========================================
// GENERATE PLAN
// ==========================================

function generatePlan() {

  const goal =
    document.querySelector(
      'input[name="goal"]:checked'
    )?.value;

  const age =
    document.getElementById("age")?.value;

  const weight =
    document.getElementById("weight")?.value;

  const height =
    document.getElementById("height")?.value;

  const waist =
    document.getElementById("waist")?.value;

  const experience =
    document.getElementById("experience")?.value ||
    document.querySelector(
      'input[name="experience"]:checked'
    )?.value;

  const equipment =
    document.getElementById("equipment")?.value ||
    document.querySelector(
      'input[name="equipment"]:checked'
    )?.value;

  const trainingDays =
    document.getElementById("trainingDays")?.value;

  const duration =
    document.getElementById("duration")?.value;


  // ========================================
  // VALIDATION
  // ========================================

  if (!goal) {
    alert("Please select your main goal.");
    return;
  }

  if (!age || !weight || !height) {
    alert(
      "Please enter your age, weight and height."
    );
    return;
  }

  if (!experience) {
    alert("Please select your experience.");
    return;
  }

  if (!equipment) {
    alert("Please select your equipment.");
    return;
  }

  if (!trainingDays) {
    alert("Please select training days.");
    return;
  }

  if (!duration) {
    alert("Please select workout duration.");
    return;
  }


  // ========================================
  // SAVE PROFILE
  // ========================================

  player.profile = {

    goal: goal,

    age: age,

    weight: weight,

    height: height,

    waist: waist || "",

    experience: experience,

    equipment: equipment,

    trainingDays: trainingDays,

    duration: duration

  };


  player.planGenerated = true;

  player.completedExercises = [];


  savePlayer();


  // ========================================
  // SHOW APP
  // ========================================

  const onboarding =
    document.getElementById(
      "onboarding"
    );

  const mainApp =
    document.getElementById(
      "mainApp"
    );


  if (onboarding) {
    onboarding.style.display = "none";
  }

  if (mainApp) {
    mainApp.style.display = "block";
  }


  renderWorkout();

  updateUI();
}


// ==========================================
// UPDATE UI
// ==========================================

function updateUI() {

  // ----------------------------------------
  // LEVEL
  // ----------------------------------------

  const levelElement =
    document.getElementById("level");

  if (levelElement) {
    levelElement.textContent =
      player.level;
  }


  const workoutLevel =
    document.getElementById(
      "workoutLevel"
    );

  if (workoutLevel) {

    workoutLevel.textContent =
      `LEVEL ${player.level}`;

  }


  // ----------------------------------------
  // RANK
  // ----------------------------------------

  const rankElement =
    document.getElementById("rank");

  if (rankElement) {

    rankElement.textContent =
      getCurrentRank();

  }


  // ----------------------------------------
  // XP
  // ----------------------------------------

  const totalXpElement =
    document.getElementById("totalXp");

  if (totalXpElement) {

    totalXpElement.textContent =
      player.totalXp;

  }


  const xpText =
    document.getElementById("xpText");

  if (xpText) {

    const requiredXP =
      getRequiredXP(player.level);

    xpText.textContent =
      `${player.xp} / ${requiredXP} XP`;

  }


  const xpFill =
    document.getElementById("xpFill");

  if (xpFill) {

    const requiredXP =
      getRequiredXP(player.level);

    const percentage =
      Math.min(
        100,
        (player.xp / requiredXP) * 100
      );

    xpFill.style.width =
      `${percentage}%`;

  }


  // ----------------------------------------
  // COINS
  // ----------------------------------------

  const coinsElement =
    document.getElementById("coins");

  if (coinsElement) {

    coinsElement.textContent =
      player.coins;

  }


  // ----------------------------------------
  // WORKOUTS
  // ----------------------------------------

  const workoutsElement =
    document.getElementById("workouts");

  if (workoutsElement) {

    workoutsElement.textContent =
      player.workouts;

  }


  // ----------------------------------------
  // TRAINING DAYS
  // ----------------------------------------

  const trainingDaysElement =
    document.getElementById(
      "trainingDaysCount"
    );

  if (trainingDaysElement) {

    trainingDaysElement.textContent =
      getTrainingDays();

  }


  // ----------------------------------------
  // STREAK
  // ----------------------------------------

  const streakElement =
    document.getElementById("streak");

  if (streakElement) {

    streakElement.textContent =
      player.streak;

  }


  // ----------------------------------------
  // DIFFICULTY
  // ----------------------------------------

  if (
    typeof showDifficulty ===
    "function"
  ) {

    showDifficulty();

  }


  // ----------------------------------------
  // DAILY LOCK
  // ----------------------------------------

  if (
    typeof hasCompletedToday ===
    "function" &&
    hasCompletedToday()
  ) {

    if (
      typeof renderWorkout ===
      "function"
    ) {

      renderWorkout();

    }

  }
}


// ==========================================
// RESET PROGRESS
// ==========================================

function resetProgress() {

  const confirmed =
    confirm(
      "Are you sure you want to reset all your progress?"
    );


  if (!confirmed) {
    return;
  }


  resetPlayer();


  const onboarding =
    document.getElementById(
      "onboarding"
    );

  const mainApp =
    document.getElementById(
      "mainApp"
    );


  if (onboarding) {

    onboarding.style.display =
      "block";

  }


  if (mainApp) {

    mainApp.style.display =
      "none";

  }


  const form =
    document.querySelector(
      "#onboarding form"
    );


  if (form) {
    form.reset();
  }


  updateUI();
}


// ==========================================
// LEVEL UP MESSAGE
// ==========================================

function showLevelUpMessage() {

  alert(
    `LEVEL UP!\n\nYou reached Level ${player.level}!`
  );

}


// ==========================================
// WORKOUT COMPLETE
// ==========================================

function handleWorkoutComplete() {

  updateUI();

}


// ==========================================
// SECTION NAVIGATION
// ==========================================

function showSection(section) {

  if (
    section === "home" ||
    section === "workout"
  ) {

    const target =
      document.getElementById(
        section === "home"
          ? "mainApp"
          : "workout"
      );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

    return;
  }


  alert(
    `${section.toUpperCase()} section coming soon!`
  );
}


// ==========================================
// LOAD APP
// ==========================================

function loadApp() {

  if (player.planGenerated) {

    const onboarding =
      document.getElementById(
        "onboarding"
      );

    const mainApp =
      document.getElementById(
        "mainApp"
      );


    if (onboarding) {

      onboarding.style.display =
        "none";

    }


    if (mainApp) {

      mainApp.style.display =
        "block";

    }


    updateUI();

    renderWorkout();

  } else {

    const onboarding =
      document.getElementById(
        "onboarding"
      );

    const mainApp =
      document.getElementById(
        "mainApp"
      );


    if (onboarding) {

      onboarding.style.display =
        "block";

    }


    if (mainApp) {

      mainApp.style.display =
        "none";

    }

  }
}


// ==========================================
// START APP
// ==========================================

loadApp();
