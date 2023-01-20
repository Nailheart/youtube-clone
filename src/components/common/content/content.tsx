import { FC } from 'common/types/types';
import { sanitizeHTML } from 'helpers/helpers';

type Props = {
  html: string;
  className?: string;
};

const Content: FC<Props> = ({ html, className }) => {
  const sanitizedHTML = sanitizeHTML(html);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export { Content };
