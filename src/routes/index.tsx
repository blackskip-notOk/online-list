import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

async function getTodos() {
  try {
    const response = await fetch('/api/');

    return response
  } catch (error) {
    console.error(`can't get data: ${error}`)

    return null
  }
}

function Index() {
   const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
   console.log({ query })

  return (
    <div>
      <h3>Мои персонажи</h3>
    </div>
  );
}
