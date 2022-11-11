import React from "react";

import "./style.css";

export const Spinner: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div className="spinner-wrap mx-auto">
        <div className="spinner-content">
          <div></div>
        </div>
      </div>
    </section>
  );
}