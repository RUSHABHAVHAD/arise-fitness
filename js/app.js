```javascript
function getRank() {

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


function updateUI() {

  const requiredXP =
    player.level * 100;


  document.getElementById(
    "level"
  ).textContent =
    player.level;


  document.getElementById(
    "rank"
  ).textContent =
    getRank();


  document.getElementById(
    "totalXp"
  ).textContent =
    player.totalXp;


  document.getElementById(
    "workouts"
  ).textContent =
    player.workouts;


  document.getElementById(
    "streak"
  ).textContent =
    player.streak;


  document.getElementById(
    "xpText"
  ).textContent =

    player.xp
    + " / "
    + requiredXP;


  const percentage =

    Math.min(

      (player.xp / requiredXP)
      * 100,

      100

    );


  document.getElementById(
    "xpFill"
  ).style.width =
    percentage + "%";

}


function resetProgress() {

  const confirmed =
    confirm(
      "Are you sure you want to reset all progress?"
    );


  if (!confirmed) {

    return;

  }


  resetPlayer();


  document.getElementById(
    "completeBox"
  ).style.display =
    "none";


  updateUI();

  renderWorkout();

}


updateUI();
```
