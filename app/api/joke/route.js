export async function GET() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const joke = await response.json();
  return Response.json(joke);
}
