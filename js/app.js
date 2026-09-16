/* =========================================
   LEVEL UP — APP CONTROLLER
   ========================================= */


/* =========================================
   RANK SYSTEM
   ========================================= */

function getRank() {

  if (player.level >= 150) {
    return "SSS-RANK HUNTER";
  }

  if (player.level >= 100) {
    return "SS-RANK HUNTER";
  }

  if (player.level >= 50) {
    return "S-RANK HUNTER";
  }

  if (player.level >= 30) {
    return "A-RANK HUNTER";
  }

  if (player.level >= 20) {
    return "B-RANK HUNTER";
  }

  if (player.level >= 10) {
    return "C-RANK HUNTER";
  }

  if (player.level >= 5) {
    return "D-RANK HUNTER";
  }

  return "E-RANK HUNTER";
}


/* =========================================
   GENERATE PERSONAL PLAN
   ========================================= */

function generatePlan() {

  const goalElement =
    document.querySelector(
      'input[name="goal"]:checked'
    );

  const experienceElement =
    document.querySelector(
      'input[name="experience"]:checked'
    );

  const equipmentElement =
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


  /* Validation */

  if (!goalElement) {
    alert("Please select your main goal.");
    return;
  }

  if (!age || !weight || !height) {
    alert(
      "Please enter your age, weight and height."
    );
    return;
  }

  if (!experienceElement) {
    alert(
      "Please select your training experience."
    );
    return;
  }

  if (!equipmentElement) {
    alert(
      "Please select your available equipment."
    );
    return;
  }

  if (!trainingDays) {
    alert(
      "Please select how many days you can train."
    );
    return;
  }

  if (!duration) {
    alert(
      "Please select your workout duration."
    );
    return;
  }


  /* Save profile */

  player.profile = {

    goal: goalElement.value,

    age: age,

    weight: weight,

    height: height,

    waist: waist,

    experience:
      experienceElement.value,

    equipment:
      equipmentElement.value,

    trainingDays: trainingDays,

    duration: duration

  };


  player.planGenerated = true;

  player.completedExercises = [];


  savePlayer();


  /* Switch screens */

  const onboarding =
    document.getElementById("onboarding");

  const mainApp =
    document.getElementById("mainApp");


  if (onboarding) {

    onboarding.style.display = "none";

  }


  if (mainApp) {

    mainApp.style.display = "block";

  }


  /* Load workout */

  renderWorkout();

  updateUI();

}


/* =========================================
   UPDATE PLAYER UI
   ========================================= */

function updateUI() {

  const levelElement =
    document.getElementById("level");

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


  if (!levelElement) {
    return;
  }


  const requiredXP =
    player.level * 100;


  levelElement.textContent =
    player.level;


  rankElement.textContent =
    getRank();


  totalXpElement.textContent =
    player.totalXp;


  workoutsElement.textContent =
    player.workouts;


  streakElement.textContent =
    player.streak;


  xpTextElement.textContent =
    player.xp +
    " / " +
    requiredXP +
    " XP";


  const percentage =
    Math.min(
      (player.xp / requiredXP) * 100,
      100
    );


  xpFillElement.style.width =
    percentage + "%";


  /* Update difficulty text */

  if (typeof showDifficulty === "function") {

    showDifficulty();

  }

}


/* =========================================
   RESET PROGRESS
   ========================================= */

function resetProgress() {

  const confirmed =
    confirm(
      "Are you sure you want to reset all LEVEL UP progress?"
    );


  if (!confirmed) {
    return;
  }


  resetPlayer();


  const completeBox =
    document.getElementById("completeBox");


  if (completeBox) {

    completeBox.style.display = "none";

  }


  const onboarding =
    document.getElementById("onboarding");

  const mainApp =
    document.getElementById("mainApp");


  if (onboarding) {

    onboarding.style.display = "block";

  }


  if (mainApp) {

    mainApp.style.display = "none";

  }


  updateUI();

}


/* =========================================
   LEVEL UP MESSAGE
   ========================================= */

function showLevelUpMessage() {

  const rank =
    getRank();


  alert(
    "⚔️ LEVEL UP!\n\n" +
    "You reached Level " +
    player.level +
    "!\n\n" +
    rank
  );

}


/* =========================================
   WORKOUT COMPLETE
   ========================================= */

function handleWorkoutComplete() {

  if (
    typeof finishWorkout ===
    "function"
  ) {

    finishWorkout();

  }

}


/* =========================================
   LOAD APPLICATION
   ========================================= */

function loadApp() {

  if (player.planGenerated) {

    const onboarding =
      document.getElementById("onboarding");

    const mainApp =
      document.getElementById("mainApp");


    if (onboarding) {

      onboarding.style.display =
        "none";

    }


    if (mainApp) {

      mainApp.style.display =
        "block";

    }


    renderWorkout();

  }


  updateUI();

}


/* =========================================
   START APP
   ========================================= */

loadApp();
