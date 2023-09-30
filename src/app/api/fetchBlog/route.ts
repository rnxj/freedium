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
    return new Response(
      `
      <div class="container">
        <h2>Invalid blog site</h2>
        <p>Please enter a valid domain that's using Medium's service (include https://)</p>
      </div>

      <style>
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80vh;
            flex-direction: column;
            gap: 2em;
            max-width: 600px;
        }
        h2 {
            font-size: 2em;
            font-weight: bold;
        }
        p {
            font-size: 1.5em;
            font-weight: 500;
            text-align: center;
        }
      </style>
      `,
      {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      },
    );
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
