import Link from 'next/link';
import { ReactElement } from 'react';

interface PreviewProps {
  preview: boolean;
}

const Preview = ({ preview }: PreviewProps): ReactElement | null => {
  if (!preview) {
    return null;
  }

  return (
    <div className="preview">
      <p>
        This is a page preview. <Link href="/api/exit-preview">Click here</Link> to exit preview
        mode.
      </p>
    </div>
  );
};

export default Preview;
