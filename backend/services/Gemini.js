const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const explainMedicalReport = async (reportText) => {

  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

 const prompt = `
You are a medical report explanation assistant.

IMPORTANT RULES:
- Do NOT diagnose diseases
- Do NOT assume conditions
- Only explain given values
- Be simple and safe

Output style:
- Use headings
- Use bullet points
- Keep short lines
- Highlight important words (like HIGH, LOW, NORMAL) clearly using bold
- Do NOT use "-" or any dash bullets
- Make it look clean and organized
- Use emojis for better readability and UI-like presentation
Step 1: First check if this is a medical report.
If NOT a medical report, reply exactly:
NOT_MEDICAL_REPORT

If YES, continue.
Do NOT give textbook definitions
- Do NOT over-explain science
- Focus only on THIS report
- Explain only what is normal, low, or high
- Keep language very simple and practical

Output style:
- Use short sentences
- Use simple everyday language
- Focus on what is important for health
- Highlight only abnormal or slightly abnormal values

Step 2: Explain in this format ONLY:

SUMMARY:
- 2 to 3 simple sentences

PARAMETERS:
- Name: value
  Status: Normal / Low / High


NEEDS DOCTOR ATTENTION:
- Yes or No + short reason

DISCLAIMER:
This is only for understanding purposes, not medical advice.

TEXT:
${reportText}
`;
  const result = await model.generateContent(prompt)
  return result.response.text()
}

module.exports = { explainMedicalReport }