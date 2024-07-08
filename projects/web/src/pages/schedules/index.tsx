import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/schedules/')({
    component: Page,
})

function Page() {
    return <div>no selected schedule</div>
}
