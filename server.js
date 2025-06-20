// server
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());           
app.use(express.json());  

app.post("/diagnose", async (req, res) => {
  const symptoms = req.body.symptoms;

  if (!symptoms || symptoms.trim() === "") {
    return res.status(400).json({ error: "Symptoms are required." });
  }

  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_KEY}`, //fetches api key from hidden file env
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:  //tells the AI how to behave
              "You are a helpful medical assistant. Provide possible causes for symptoms and always recommend consulting a healthcare professional.",
          },
          {
            role: "user",
            content: `My symptoms are: ${symptoms}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI API error:", errText);
      return res.status(response.status).json({ error: "OpenAI API error" });
    }

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      return res
        .status(500)
        .json({ error: "No diagnosis returned from AI service." });
    }

    res.json({ diagnosis: data.choices[0].message.content });
  } catch (error) {
    console.error("Error during diagnosis:", error);
    res.status(500).json({ error: "Failed to get diagnosis." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ MediCure AI server running at http://localhost:${PORT}`);
});
