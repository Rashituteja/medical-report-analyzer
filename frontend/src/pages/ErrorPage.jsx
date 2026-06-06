function ErrorPage({ message, onRetry }) {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f8fafc",
      padding: "20px",
    },

    card: {
      width: "100%",
      maxWidth: "500px",
      background: "#fff",
      borderRadius: "20px",
      padding: "32px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },

    icon: {
      fontSize: "64px",
      marginBottom: "16px",
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "12px",
    },

    message: {
      color: "#64748b",
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "24px",
    },

    suggestionBox: {
      background: "#fff7ed",
      border: "1px solid #fed7aa",
      borderRadius: "12px",
      padding: "16px",
      textAlign: "left",
      marginBottom: "24px",
    },

    suggestionTitle: {
      fontWeight: "600",
      marginBottom: "10px",
      color: "#9a3412",
    },

    list: {
      margin: 0,
      paddingLeft: "18px",
      color: "#7c2d12",
    },

    button: {
      background: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "12px 24px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>⚠️</div>

        <h2 style={styles.title}>
          Unable to Analyze Report
        </h2>

        <p style={styles.message}>
          {message}
        </p>

        <div style={styles.suggestionBox}>
          <div style={styles.suggestionTitle}>
            Suggestions
          </div>

          <ul style={styles.list}>
            <li>Upload a valid PDF report</li>
            <li>Ensure the PDF contains readable text</li>
            <li>Try another report if this one is corrupted</li>
          </ul>
        </div>

        <button
          style={styles.button}
          onClick={onRetry}
        >
          Upload Another Report
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;