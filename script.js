function showDescription(name) {
  const descriptions = {
    'Diagnostics': 'AI helps in faster and more accurate diagnostics.',
    'Treatment': 'AI enables personalized treatment plans.',
    'Medical Imaging': 'LLMs assist in interpreting medical scans.',
    'Drug Discovery': 'AI accelerates drug development by analyzing patterns.',
    'Monitoring': 'AI monitors patients in real-time for critical conditions.',
    'Privacy': 'Ensuring patient data remains confidential.',
    'Bias': 'Avoiding biased predictions in healthcare systems.',
    'Transparency': 'Making AI decisions explainable.',
    'Accountability': 'Assigning responsibility for AI outcomes.',
    'Data Quality': 'Ensuring datasets are clean and complete.',
    'Model Robustness': 'Making models reliable under different conditions.',
    'Scalability': 'Deploying models to large healthcare systems.',
    'Integration': 'Merging AI into existing hospital systems.',
    'Security': 'Protecting models and data from breaches.',
    'Explainability': 'Understanding how the AI reached its decision.'
  };

  document.getElementById('descriptionBox').innerHTML = `<p><strong>${name}:</strong> ${descriptions[name] || 'No description available.'}</p>`;
}
