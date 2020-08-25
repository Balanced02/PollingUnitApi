import React from "react";
import "./styles.css";

export default function MakingApiCall({ loading }) {
  return (
    <div className="meter">
      <span>{loading ? <span className="progress-bar"></span> : null}</span>
    </div>
  );
}
