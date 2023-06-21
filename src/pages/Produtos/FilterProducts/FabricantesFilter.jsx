import React from "react";

import "./FabricantesFilter.css";

function FabricantesFilter() {
  return (
    <details>
      <summary>
        Fabricantes
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </summary>

      <div className="em-construcao">
        <h5> EM CONSTRUÇÃO</h5>
      </div>
    </details>
  );
}

export default FabricantesFilter;
