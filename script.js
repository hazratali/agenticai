function showDescription(label) {
  const descriptions = {
    "Diagnostics": "Using AI to identify diseases early.",
    "Treatment": "AI-assisted personalized treatment plans.",
    "Medical Imaging": "AI for analyzing X-rays and MRIs.",
    "Drug Discovery": "AI helps find new potential medicines.",
    "Monitoring": "Real-time health monitoring with AI.",
    "Privacy": "Protecting patient data confidentiality.",
    "Bias": "Avoiding unfair treatment due to skewed data.",
    "Transparency": "Making AI decisions explainable.",
    "Accountability": "Ensuring responsibility in AI use.",
    "Data Quality": "Ensuring input data is accurate and complete.",
    "Model Robustness": "Making AI perform well across scenarios.",
    "Scalability": "Expanding AI systems efficiently.",
    "Integration": "Merging AI tools with hospital systems.",
    "Security": "Preventing attacks on healthcare AI.",
    "Explainability": "Understanding how AI makes decisions."
  };

  const descriptionText = descriptions[label] || "No description available.";

  // Update both boxes if present
  const appBox = document.getElementById("applicationsDescription");
  const chalBox = document.getElementById("challengesDescription");
  const tchalBox = document.getElementById("technicalchallengesDescription");

  if (appBox) appBox.innerHTML = `<p>${descriptionText}</p>`;
  if (chalBox) chalBox.innerHTML = `<p>${descriptionText}</p>`;
  if (tchalBox) tchalBox.innerHTML = `<p>${descriptionText}</p>`;
}
