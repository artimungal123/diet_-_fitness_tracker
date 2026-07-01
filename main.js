// Save menu items and update history
// Save menu items and update history
function saveMenu() {
  const messMenu = document.getElementById("messMenu").value;
  const extraFood = document.getElementById("extraFood").value;
  const historyList = document.getElementById("historyList");

  if (!messMenu && !extraFood) {
    alert("Please enter at least one food item.");
    return;
  }

  // const li = document.createElement("li");
  // li.textContent = Mess Menu: ${messMenu || "None"}, Extra Food: ${extraFood || "None"};

  if (historyList.children[0].textContent === "No history yet.") {
    historyList.innerHTML = ""; // clear default text
  }
//  if (historyList.children.length>0 && historyList.children[0].textContent === "No history yet.") {
//     historyList.innerHTML = ""; // clear default text
//   }
  historyList.appendChild(li);

  // clear input fields
  document.getElementById("messMenu").value = "";
  document.getElementById("extraFood").value = "";
}

// Suggest exercise (simple random recommendation)
function suggestExercise() {
  const exercises = [
    "30 min walking",
    "15 min yoga",
    "20 push-ups + 20 squats",
    "Cycling for 25 min",
    "Stretching for 10 min"
  ];
  const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
  document.getElementById("exerciseText").textContent = randomExercise;
}

// Feedback button action
document.getElementById("feedbackBtn").addEventListener("click", () => {
  alert("Thank you for using HealthFit! Please share your feedback with us.");
});