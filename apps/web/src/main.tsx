import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from '~app/Application'
import { reportWebVitals, type Reporter } from '~shared/metrics/web-vitals'

import '~shared/ui/globals.css'

function bootstrap() {
    const element = document.getElementById('root')

    if (element === null) {
        // Log error
        return
    }

    let reporter: Reporter = console.info;

    if (import.meta.env.PROD) {
        // TODO: Replace with your production logger for vitals
        reporter = console.log;
    }

    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    )

    reportWebVitals(reporter)
}

bootstrap()
