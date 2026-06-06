import axios from "axios";

export const analyzeReport = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    "http://localhost:3000/api/report/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};