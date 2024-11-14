import React from "react";
import useFetch from "./useFetch";

function DataComponent() {
  const { data, loading, error } = useFetch("https://api.example.com/data");

  if (loading)
    return <p style={{ color: "blue", fontSize: "18px" }}>Loading...</p>;
  if (error)
    return <p style={{ color: "red", fontSize: "18px" }}>Error: {error}</p>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>
        Data:
      </h1>
      <pre
        style={{
          backgroundColor: "#e9ecef",
          padding: "15px",
          borderRadius: "4px",
          overflow: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default DataComponent;
