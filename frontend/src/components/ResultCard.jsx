function ResultCard({ result }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Analysis Result
      </h2>

      <div className="bg-slate-50 p-5 rounded-xl">
        <pre className="whitespace-pre-wrap text-sm">
          {result.explanation}
        </pre>
      </div>
    </div>
  );
}

export default ResultCard;