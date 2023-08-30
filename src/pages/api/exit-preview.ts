import type { NextApiRequest, NextApiResponse } from 'next';

export default function exitPreview(req: NextApiRequest, res: NextApiResponse): void {
  // Exit the current user from preview mode. This function accepts no arguments.
  res.clearPreviewData();

  // Redirect the user back to index page.
  res.writeHead(307, { Location: '/' });
  res.end();
}
