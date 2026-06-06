const express = require("express");
const router = express.Router();

const upload = require("../middlewares/uploads");
const { extractTextFromPDF } = require("../services/pdfParser");
const { explainMedicalReport } = require("../services/gemini");

const cloudinary = require("../config/cloudinary");

router.post("/analyze", upload.single("file"), async (req, res) => {
 
  
  try {
  
    
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded" });
    }

  
    const signedUrl = cloudinary.url(req.file.filename, {
      resource_type: "raw",
      type: "upload",
      sign_url: true,
      expires_at: Math.floor(Date.now() / 1000) + 300,
    });

   

    const text = await extractTextFromPDF(signedUrl);
  

    const result = await explainMedicalReport(text);
  

    return res.json({ success: true, extractedText: text, explanation: result });

  } catch (err) {
   
    console.log(String(err));
    return res.status(500).json({ 
      success: false, 
      error: String(err)
    });
  }
});
module.exports = router;