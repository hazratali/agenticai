// function showDescription(label) {
//   const descriptions = {
//     "Diagnostics": "Using AI to identify diseases early.",
//     "Treatment": "AI-assisted personalized treatment plans.",
//     "Medical Imaging": "AI for analyzing X-rays and MRIs.",
//     "Drug Discovery": "AI helps find new potential medicines.",
//     "Monitoring": "Real-time health monitoring with AI.",
//     "Privacy": "Protecting patient data confidentiality.",
//     "Bias": "Avoiding unfair treatment due to skewed data.",
//     "Transparency": "Making AI decisions explainable.",
//     "Accountability": "Ensuring responsibility in AI use.",
//     "Data Quality": "Ensuring input data is accurate and complete.",
//     "Model Robustness": "Making AI perform well across scenarios.",
//     "Scalability": "Expanding AI systems efficiently.",
//     "Integration": "Merging AI tools with hospital systems.",
//     "Security": "Preventing attacks on healthcare AI.",
//     "Explainability": "Understanding how AI makes decisions."
//   };

//   const descriptionText = descriptions[label] || "No description available.";

//   // Update both boxes if present
//   const appBox = document.getElementById("applicationsDescription");
//   const chalBox = document.getElementById("challengesDescription");
//   const tchalBox = document.getElementById("technicalchallengesDescription");

//   if (appBox) appBox.innerHTML = `<p>${descriptionText}</p>`;
//   if (chalBox) chalBox.innerHTML = `<p>${descriptionText}</p>`;
//   if (tchalBox) tchalBox.innerHTML = `<p>${descriptionText}</p>`;
// }
function showDescription(label, boxId) {
  const descriptions = {
    "Diagnostics": "Using AI to identify diseases early.",
    "Treatment": "AI-assisted personalized treatment plans.",
    "Medical Imaging": "AI for analyzing X-rays and MRIs.",
    "Drug Discovery": "AI helps find new potential medicines.",
    "Monitoring": "Real-time health monitoring with AI.",
    "Privacy": "Protecting patient data confidentiality.",
    "Trust": "Avoiding unfair treatment due to skewed data.",
    "Inclusivity": "Making AI decisions explainable.",
    "Accuracy": "Ensuring responsibility in AI use.",
    "Data Quality": "Ensuring input data is accurate and complete.",
    "Model Robustness": "Making AI perform well across scenarios.",
    "Integration": "Merging AI tools with hospital systems.",
    "Fairness": "Desription text will appear here.",
    "Accountability": "Desription text will appear here.",
    "Data Management": "Desription text will appear here.",

  };

  const descriptionText = descriptions[label] || "No description available.";

  // Clear all boxes
  const allBoxes = [
    "applicationsDescription",
    "challengesDescription",
    "technicalchallengesDescription"
  ];

  allBoxes.forEach(id => {
    const box = document.getElementById(id);
    if (box) {
      box.innerHTML = "<p>Click any icon to see the description here.</p>";
    }
  });

  // Show description only in the target box
  const targetBox = document.getElementById(boxId);
  if (targetBox) {
    targetBox.innerHTML = `<p>${descriptionText}</p>`;
  }
}
