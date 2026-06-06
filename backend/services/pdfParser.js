const pdf = require("pdf-parse");
const axios = require("axios");

const extractTextFromPDF = async (filePath) => {
  try {
    console.log("=== PDF PARSER ===");
    console.log("FilePath:", filePath);
    
    let dataBuffer;

    if (filePath.startsWith("http://") || filePath.startsWith("https://")) {
      console.log("=== Downloading from Cloudinary URL ===");
      const response = await axios.get(filePath, {
        responseType: "arraybuffer",
      });
      console.log("=== Download success, size:", response.data.byteLength);
      dataBuffer = Buffer.from(response.data);
    } else {
      console.log("=== Reading local file ===");
      const fs = require("fs");
      if (!fs.existsSync(filePath)) {
        throw new Error("File not found");
      }
      dataBuffer = fs.readFileSync(filePath);
    }

    const data = await pdf(dataBuffer);
    const text = data.text || "";
    console.log("=== Extracted text length:", text.length);

    if (text.trim().length === 0) {
      throw new Error("No readable text found in PDF");
    }

    return text;

  } catch (error) {
    console.log("PDF PARSE ERROR:", error.message);
    throw new Error("Failed to extract text from PDF");
  }
};

module.exports = { extractTextFromPDF };