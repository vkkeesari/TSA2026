export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
  }

  const message = String(req.body?.message || "").trim();
  const context = String(req.body?.context || "").trim();

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const systemPrompt = [
    "You are a website assistant for a community resource hub for Weddington and Waxhaw.",
    "Answer only with information related to this website context and local resources.",
    "Handle misspellings and imperfect grammar naturally.",
    "If the user asks for something not in context, say you are not sure and suggest checking references or official websites.",
    "For safety, if message contains self-harm crisis intent, prioritize directing user to call/text 988 and emergency services."
  ].join(" ");

  const userPrompt = [
    "Website context:",
    context,
    "",
    "User message:",
    message
  ].join("\n");

  try {
    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content: [{ type: "input_text", text: systemPrompt }]
          },
          {
            role: "user",
            content: [{ type: "input_text", text: userPrompt }]
          }
        ]
      })
    });

    if (!openAiResponse.ok) {
      const details = await openAiResponse.text();
      return res.status(502).json({ error: "OpenAI request failed", details });
    }

    const data = await openAiResponse.json();
    const answer = (data.output_text || "").trim();

    if (!answer) {
      return res.status(502).json({ error: "Empty response from OpenAI" });
    }

    return res.status(200).json({ answer });
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: String(error?.message || error) });
  }
}
