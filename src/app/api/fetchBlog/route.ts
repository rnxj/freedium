import domainList from "~/lib/domains";

export async function POST(request: Request, response: Response) {
  type Body = {
    url: string;
  };
  const { url: blogUrl } = (await request.json()) as Body;
  let inList = false;
  for (const domain of domainList) {
    if (blogUrl.match(domain)) {
      inList = true;
      break;
    }
  }
  if (!inList) {
    return new Response("Please provide a valid blog site", { status: 404 });
  }
  const url = `http://webcache.googleusercontent.com/search?q=cache:${blogUrl}`;

  const res = await fetch(url);
  const html = await res.text();

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
