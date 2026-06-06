import { FileText } from "lucide-react";

function UploadCard({
  file,
  setFile,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <div className="border-2 border-dashed rounded-2xl p-10 text-center">

        <FileText
          size={60}
          className="mx-auto mb-4 text-blue-600"
        />

        <h2 className="text-2xl font-bold">
          Upload Medical Report
        </h2>

        <p className="text-gray-500 mt-2">
          Upload PDF medical report
        </p>

        <input
          type="file"
          accept=".pdf"
          className="mt-6"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        {file && (
          <p className="mt-3 font-medium">
            {file.name}
          </p>
        )}

        <button
          disabled={!file || loading}
          onClick={handleAnalyze}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Analyze Report
        </button>
      </div>
    </div>
  );
}

export default UploadCard;