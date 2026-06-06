import { useState } from "react";
import { motion } from "framer-motion";

import UploadCard from "../components/UploadCard";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

import { analyzeReport } from "../services/api";

function Home() {
  const [file, setFile] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const data =
        await analyzeReport(file);
 console.log("TYPE:", typeof data);
console.log("DATA:", data);
      setResult(data);
     
 
    } catch (err) {
       console.log(err);
      alert(
        err.response?.data?.error ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto p-8"
      >

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold">
            AI Medical Report Analyzer
          </h1>

          <p className="text-gray-600 mt-4">
            Upload your medical report and
            understand it instantly using AI
          </p>

        </div>

        <UploadCard
          file={file}
          setFile={setFile}
          handleAnalyze={handleAnalyze}
          loading={loading}
        />

        {loading && <Loader />}

        {result && (
          <ResultCard result={result} />
        )}

      </motion.div>
    </div>
  );
}

export default Home;