function showDescription(blockName) {
  const descriptions = {
    "Data Source": "This block represents the origin of raw data (e.g., databases, files, APIs).",
    "Processor": "Processes or transforms the data before analysis.",
    "Analyzer": "Applies analytics or ML models to generate insights.",
    "Dashboard": "Visual interface that displays metrics, graphs, and results."
  };

  document.getElementById("descriptionText").innerText = descriptions[blockName];
}
