import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/schedules/$scheduleId/copy")({
  params: {
    parse: (params) => ({
      scheduleId: z.number().int().parse(Number(params.scheduleId)),
    }),
    stringify: ({ scheduleId }) => ({ scheduleId: `${scheduleId}` }),
  },
  component: Page,
});

function Page() {
  const { scheduleId } = Route.useParams();

  return <div>copy schedule by id: {scheduleId}</div>;
}
