import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tags/')({
    component: Page,
})

function Page() {
    return <div>no selected tag</div>
}
