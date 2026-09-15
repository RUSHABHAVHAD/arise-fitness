```javascript
/*
====================================================
ARISE FITNESS
PROGRESSIVE WORKOUT SYSTEM
====================================================

The workout automatically becomes harder
as the player's level increases.

Level 1-4   = E Rank
Level 5-9   = D Rank
Level 10-19 = C Rank
Level 20-29 = B Rank
Level 30-49 = A Rank
Level 50+   = S Rank
*/


function getDifficulty() {

  if (player.level >= 50) {
    return "S";
  }

  if (player.level >= 30) {
    return "A";
  }

  if (player.level >= 20) {
    return "B";
  }

  if (player.level >= 10) {
    return "C";
  }

  if (player.level >= 5) {
    return "D";
  }

  return "E";
}


/*
====================================================
WORKOUT DATA
====================================================
*/

const workoutLevels = {

  E: [

    {
      id: 1,
      name: "Push Ups",
      sets: 3,
      reps: 12,
      xp: 25
    },

    {
      id: 2,
      name: "Bodyweight Squats",
      sets: 3,
      reps: 15,
      xp: 25
    },

    {
      id: 3,
      name: "Reverse Lunges",
      sets: 3,
      reps: 10,
      xp: 25
    },

    {
      id: 4,
      name: "Plank",
      sets: 3,
      reps: 40,
      xp: 25
    }

  ],


  D: [

    {
      id: 1,
      name: "Push Ups",
      sets: 4,
      reps: 15,
      xp: 30
    },

    {
      id: 2,
      name: "Bodyweight Squats",
      sets: 4,
      reps: 18,
      xp: 30
    },

    {
      id: 3,
      name: "Walking Lunges",
      sets: 4,
      reps: 12,
      xp: 30
    },

    {
      id: 4,
      name: "Plank",
      sets: 4,
      reps: 45,
      xp: 30
    }

  ],


  C: [

    {
      id: 1,
      name: "Decline Push Ups",
      sets: 4,
      reps: 15,
      xp: 40
    },

    {
      id: 2,
      name: "Jump Squats",
      sets: 4,
      reps: 18,
      xp: 40
    },

    {
      id: 3,
      name: "Walking Lunges",
      sets: 4,
      reps: 15,
      xp: 40
    },

    {
      id: 4,
      name: "Plank",
      sets: 4,
      reps: 60,
      xp: 40
    }

  ],


  B: [

    {
      id: 1,
      name: "Diamond Push Ups",
      sets: 5,
      reps: 15,
      xp: 50
    },

    {
      id: 2,
      name: "Bulgarian Split Squats",
      sets: 5,
      reps: 12,
      xp: 50
    },

    {
      id: 3,
      name: "Jump Lunges",
      sets: 5,
      reps: 12,
      xp: 50
    },

    {
      id: 4,
      name: "Side Plank",
      sets: 4,
      reps: 60,
      xp: 50
    }

  ],


  A: [

    {
      id: 1,
      name: "Diamond Push Ups",
      sets: 5,
      reps: 20,
      xp: 65
    },

    {
      id: 2,
      name: "Bulgarian Split Squats",
      sets: 5,
      reps: 15,
      xp: 65
    },

    {
      id: 3,
      name: "Jump Lunges",
      sets: 5,
      reps: 15,
      xp: 65
    },

    {
      id: 4,
      name: "Plank Shoulder Taps",
      sets: 5,
      reps: 20,
      xp: 65
    }

  ],


  S: [

    {
      id: 1,
      name: "Archer Push Ups",
      sets: 5,
      reps: 12,
      xp: 80
    },

    {
      id: 2,
      name: "Bulgarian Split Squats",
      sets: 5,
      reps: 20,
      xp: 80
    },

    {
      id: 3,
      name: "Explosive Jump Lunges",
      sets: 5,
      reps: 15,
      xp: 80
    },

    {
      id: 4,
      name: "Plank Shoulder Taps",
      sets: 5,
      reps: 25,
      xp: 80
    }

  ]

};


/*
====================================================
GET CURRENT WORKOUT
====================================================
*/

function getCurrentWorkout() {

  const difficulty =
    getDifficulty();

  return workoutLevels[difficulty];

}


/*
====================================================
REST TIME
====================================================
*/

function getRestTime() {

  if (player.level >= 50) {
    return 30;
  }

  if (player.level >= 30) {
    return 35;
  }

  if (player.level >= 20) {
    return 40;
  }

  if (player.level >= 10) {
    return 45;
  }

  if (player.level >= 5) {
    return 50;
  }

  return 60;

}


/*
====================================================
RENDER WORKOUT
====================================================
*/

function renderWorkout() {

  const list =
    document.getElementById(
      "exerciseList"
    );

  list.innerHTML = "";


  const workout =
    getCurrentWorkout();


  workout.forEach(
    exercise => {

      const completed =
        player.completedExercises
          .includes(exercise.id);


      const card =
        document.createElement("div");


      card.className =
        "exercise";


      card.innerHTML = `

        <div class="exercise-name">

          ${exercise.name}

        </div>


        <div class="exercise-details">

          ${exercise.sets}
          sets ×
          ${exercise.reps}
          reps

          •

          +${exercise.xp} XP

        </div>


        <div class="inputs">

          <input

            type="number"

            id="sets-${exercise.id}"

            placeholder="Sets"

            min="1"

            value="${exercise.sets}"

          >


          <input

            type="number"

            id="reps-${exercise.id}"

            placeholder="Reps"

            min="1"

            value="${exercise.reps}"

          >


          <input

            type="number"

            id="weight-${exercise.id}"

            placeholder="Weight kg"

            min="0"

          >

        </div>


        <button

          onclick="
            completeExercise(${exercise.id})
          "

          ${completed ? "disabled" : ""}

        >

          ${
            completed
              ? "COMPLETED ✓"
              : "COMPLETE EXERCISE"
          }

        </button>

      `;


      list.appendChild(card);

    }

  );


  showDifficulty();

}


/*
====================================================
SHOW DIFFICULTY
====================================================
*/

function showDifficulty() {

  const difficulty =
    getDifficulty();


  const rest =
    getRestTime();


  const heading =
    document.querySelector(
      "section h2"
    );


  if (heading) {

    heading.innerHTML =

      `TODAY'S WORKOUT

       <span style="
         font-size:12px;
         color:#888;
         margin-left:8px;
       ">

       ${difficulty}-RANK •
       REST ${rest}s

       </span>`;

  }

}


/*
====================================================
COMPLETE EXERCISE
====================================================
*/

function completeExercise(id) {

  if (
    player.completedExercises
      .includes(id)
  ) {

    return;

  }


  const workout =
    getCurrentWorkout();


  const exercise =
    workout.find(
      item => item.id === id
    );


  if (!exercise) {

    return;

  }


  const sets =
    document.getElementById(
      `sets-${id}`
    ).value;


  const reps =
    document.getElementById(
      `reps-${id}`
    ).value;


  const weight =
    document.getElementById(
      `weight-${id}`
    ).value || 0;


  if (!sets || !reps) {

    alert(
      "Please enter your sets and reps."
    );

    return;

  }


  player.completedExercises
    .push(id);


  player.xp += exercise.xp;

  player.totalXp += exercise.xp;


  player.history.push({

    exercise:
      exercise.name,

    sets:
      Number(sets),

    reps:
      Number(reps),

    weight:
      Number(weight),

    xp:
      exercise.xp,

    difficulty:
      getDifficulty(),

    date:
      new Date().toISOString()

  });


  checkLevel();


  savePlayer();

  updateUI();

  renderWorkout();


  const currentWorkout =
    getCurrentWorkout();


  if (
    player.completedExercises.length
      === currentWorkout.length
  ) {

    finishWorkout();

  }

}


/*
====================================================
LEVEL UP
====================================================
*/

function checkLevel() {

  let requiredXP =
    player.level * 100;


  while (
    player.xp >= requiredXP
  ) {

    player.xp -= requiredXP;

    player.level++;


    alert(

      "⚔ LEVEL UP! ⚔\n\n" +

      "You reached Level " +
      player.level +

      "\n\n" +

      "Your workout difficulty has increased!"

    );


    requiredXP =
      player.level * 100;

  }

}


/*
====================================================
FINISH WORKOUT
====================================================
*/

function finishWorkout() {

  player.workouts++;

  player.streak++;


  const workout =
    getCurrentWorkout();


  const reward =
    workout.reduce(

      (total, exercise) =>

        total + exercise.xp,

      0

    );


  document.getElementById(
    "rewardXp"
  ).textContent =
    reward;


  document.getElementById(
    "completeBox"
  ).style.display =
    "block";


  savePlayer();

  updateUI();

}


/*
====================================================
NEW WORKOUT
====================================================
*/

function newWorkout() {

  player.completedExercises =
    [];


  savePlayer();


  document.getElementById(
    "completeBox"
  ).style.display =
    "none";


  renderWorkout();

}


/*
====================================================
START
====================================================
*/

renderWorkout();
```
