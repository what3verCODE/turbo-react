import { createFileRoute, Navigate } from '@tanstack/react-router'
import { useMemo } from 'react'
import { z } from 'zod'

export const Route = createFileRoute('/schedules/$scheduleId')({
    params: {
        parse: (params) => ({
            scheduleId: z.number().int().parse(Number(params.scheduleId)),
        }),
        stringify: ({ scheduleId }) => ({ scheduleId: `${scheduleId}` }),
    },
    component: Page,
})

const mock = [{ id: 100 }]

function Page() {
    const { scheduleId } = Route.useParams()

    const currentSchedule = useMemo(() => {
        return mock.find((x) => x.id === scheduleId)
    }, [scheduleId])

    if (currentSchedule === undefined) {
        return <Navigate to="/schedules" />
    }

    return <div>schedules by id: {scheduleId}</div>
}
