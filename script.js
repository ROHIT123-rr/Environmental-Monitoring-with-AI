function predictAirQuality() {
  const co2 = parseFloat(document.getElementById("co2").value);
  const pm25 = parseFloat(document.getElementById("pm25").value);
  const temp = parseFloat(document.getElementById("temp").value);
  const humidity = parseFloat(document.getElementById("humidity").value);

  if (isNaN(co2) || isNaN(pm25) || isNaN(temp) || isNaN(humidity)) {
    document.getElementById("result").innerText = "⚠️ Please enter all values.";
    return;
  }

  let quality = "";

  // Simple AI rule-based logic
  if (co2 < 600 && pm25 < 25 && humidity > 40 && humidity < 60) {
    quality = "✅ Good";
  } else if ((co2 < 1000 && pm25 < 60) || (temp > 30 && humidity < 40)) {
    quality = "⚠️ Moderate";
  } else {
    quality = "❌ Unhealthy";
  }

  document.getElementById("result").innerText = "Predicted Air Quality: " + quality;
}
