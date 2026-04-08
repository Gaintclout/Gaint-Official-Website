import React, { useEffect } from "react";

export default function Certificates() {
  useEffect(() => {
    // Keep SPA route but load the static certificates portal.
    window.history.replaceState({}, "", "/certificates");
  }, []);

  return (
    <div className="min-h-screen w-full bg-white pt-24">
      <iframe
        title="Certificates Portal"
        src="/certificates/index.html"
        className="h-[calc(100vh-96px)] w-full border-0"
      />
    </div>
  );
}
