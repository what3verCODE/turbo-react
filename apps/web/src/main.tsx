import React from "react";
import ReactDOM from "react-dom/client";
import Application from "@app/Application";
import { reportWebVitals } from "@shared/metrics/web-vitals";

import '@repo/ui/index.css';
import "./index.css"

function bootstrap() {
  const element = document.getElementById("root");

  if (element === null) {
    // Log error
    return;
  }

  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <Application />
    </React.StrictMode>,
  );
}

bootstrap();

reportWebVitals(console.info);
