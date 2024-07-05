import {
    CatchBoundary,
    Outlet,
    createLazyFileRoute,
} from "@tanstack/react-router";
import { Button } from "@repo/ui";
import { ErrorInfo } from "react";

export const Route = createLazyFileRoute("/schedules")({
    component: Page,
});

function Page() {
    return (
        <div>
            main page
            <CatchBoundary
                getResetKey={() => "reset"}
                onCatch={catchHandler}
                errorComponent={NotFoundFallback}
            >
                <Button className="text-red-500">
                    click
                    </Button>
                <Outlet />
            </CatchBoundary>
        </div>
    );
}

function catchHandler(error: Error, info: ErrorInfo) {
    console.info("Error happened:", error.message.replace("\n", ""));
    console.info("Detailed error info:", info);
}

function NotFoundFallback() {
    return <div>No Data</div>;
}
