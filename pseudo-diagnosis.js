document.getElementById("diagnosisForm").addEventListener("submit", function (e) { //function to diganose through AI
    e.preventDefault();

    const symptoms = document.getElementById("symptoms").value.trim();
    const output = document.getElementById("pseudo-diagnosis");

    output.innerHTML = "🧠 Processing symptoms...";

    fetch("http://localhost:3000/diagnose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms })
    })
    .then(res => res.json())
    .then(data => {
      if (data.diagnosis) {
        output.innerHTML = `<strong>AI Diagnosis:</strong><p>${data.diagnosis}</p>`;
      } else {
        output.innerHTML = "⚠️ Unable to get diagnosis."; //this displays if the ai is unreachable ornetwork issues
      }
    })
    .catch(err => {
      console.error(err);
      output.innerHTML = "❌ Server error. Try again later."; //displays error message if server is not found(server.js)
    });
  });