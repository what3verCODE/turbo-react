import { CatchBoundary, NotFoundError, Outlet, createLazyFileRoute } from '@tanstack/react-router'
import { ErrorInfo } from 'react'

export const Route = createLazyFileRoute('/tags')({
    component: Page,
})

function Page() {
    return (
        <div>
            main page
            <CatchBoundary getResetKey={() => 'reset'} onCatch={catchHandler} errorComponent={NotFoundFallback}>
                <Outlet />
            </CatchBoundary>
        </div>
    )
}

function catchHandler(error: Error, info: ErrorInfo) {
    console.info('Error happened:', error.message.replace('\n', ''))
    console.info('Detailed error info:', info)
}

function NotFoundFallback(error: NotFoundError) {
    return <div>No Data</div>
}
