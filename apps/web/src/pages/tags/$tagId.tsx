import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/tags/$tagId")({
  params: {
    parse: (params) => ({
      tagId: z.number().int().parse(Number(params.tagId)),
    }),
    stringify: ({ tagId }) => ({ tagId: `${tagId}` }),
  },
  component: Page,
});

function Page() {
  const { tagId } = Route.useParams();

  return <div>tag by id: {tagId}</div>;
}
