import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Certificates() {
  const navigate = useNavigate();

  useEffect(() => {
    // Keep SPA route but load the static certificates portal.
    window.history.replaceState({}, "", "/certificates");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* <div className="sticky top-0 z-10 flex items-center gap-3 border-b bg-white/90 px-4 py-3 backdrop-blur">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
          aria-label="Back to home"
        >
          ← Back
        </button>
        <div className="text-sm font-semibold text-gray-800">Certificates</div>
      </div> */}
      <iframe
        title="Certificates Portal"
        src="/certificates/index.html"
        className="w-full flex-1 border-0"
      />
    </div>
  );
}
