function showDescription(label, boxId) {
  const descriptions = {
    "Enable Independence": "Helping with daily tasks, such as schedule appointments, manage medication reminders, or navigate online services. <br>Helping with basic tasks such as grocery ordering, appliances control, etc",
    "Companionship": "Provide companionship and emotional support. <br>Provide sense of connection. <br>Provide empathetic responses.",
    "Healthcare Assistance": "Analyze medical records, monitor vital signs. <br> Provide real-time insights into health markers. <br> Predictive healthcare management and risk management.",
    "Cognitive Engagement": "Interactiv story telling. <br> Adaptive learning module.",
    "Enabling Inclusivity": "Adapt communication style and language to create personalized plans. <br>Voice-based interface.",
    "Privacy": "Protecting patient data confidentiality.",
    "Trust": "Avoiding unfair treatment due to skewed data.",
    "Inclusivity": "Making AI decisions explainable.",
    "Accuracy": "Ensuring responsibility in AI use.",
    "Data Quality": "Ensuring input data is accurate and complete.",
    "Model Robustness": "Making AI perform well across scenarios.",
    "Integration": "Merging AI tools with hospital systems.",
    "Fairness": "Desription text will appear here.",
    "Accountability": "Desription text will appear here.",
    "Data Management": "Robust measures needed to comply HIPAA and GDPR in data handling. <br>Do the patients retain data owndership?"
    "Prompt Injection": "Prompt injection can override safeguards and sysem prompts. <br>Adversary triggers jail-broken LLM to reveal private medical history or provide unsafe suggestions ",
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
