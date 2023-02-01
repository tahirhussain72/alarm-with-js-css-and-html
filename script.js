const handleClear = () => {
    alarmString = "";
    activeAlarm.style.display = "none";
    createAlarm.style.display = "block";
  };
  
  const clearAlarm = document.getElementById("clear-alarm");
  
  // Trigger handleClear on button click
  clearAlarm.addEventListener("click", handleClear);
  