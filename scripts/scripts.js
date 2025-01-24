function calculateDayOfWeek(century, year, month, day) {
  return (
    (Math.floor(century / 4) -
      2 * century +
      year +
      Math.floor(year / 4) +
      Math.floor((13 * (month + 1)) / 5) +
      day) %
    7
  );
}

function getAkanName(dayOfWeek, gender) {
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  if (gender === "male") {
    return maleNames[dayOfWeek];
  } else if (gender === "female") {
    return femaleNames[dayOfWeek];
  } else {
    return null;
  }
}

function validateDate(day, month) {
  if (day <= 0 || day > 31) {
    alert("Invalid day! Please enter a valid day.");
    return false;
  }
  if (month <= 0 || month > 12) {
    alert("Invalid month! Please enter a valid month.");
    return false;
  }
  return true;
}

function getAkanNameFromBirthday() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (!validateDate(day, month)) {
    return;
  }

  const century = Math.floor(year / 100);
  const yearDigits = year % 100;
  const dayOfWeek = Math.floor(
    calculateDayOfWeek(century, yearDigits, month, day)
  );

  const akanName = getAkanName(dayOfWeek, gender);
  if (akanName) {
    alert(`Your Akan name is ${akanName}`);
  } else {
    alert("Invalid gender selected.");
  }
}

document
  .getElementById("submit")
  .addEventListener("click", getAkanNameFromBirthday);
