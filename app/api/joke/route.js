export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const t = searchParams.get("t");

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch joke from external API");
    }
    const joke = await response.json();
    return Response.json(joke);
  } catch (error) {
    return Response.json({ error: "Failed to fetch joke" }, { status: 500 });
  }
}
