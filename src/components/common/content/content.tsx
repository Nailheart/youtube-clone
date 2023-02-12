import 'linkify-plugin-hashtag';
import Linkify from 'linkify-react';
import { FC } from 'common/types/types';
import { sanitizeHTML } from 'helpers/helpers';

type Props = {
  content: string;
  className?: string;
};

const Content: FC<Props> = ({ content, className }) => {
  const replacedContent = content.replace(/<br\s*\/?>/gi,'\n'); // replace br tag

  return (
    <div className={className}>
      <Linkify
        options={{
          target: "_blank",
          formatHref: function (href, type) {
            if (type === "hashtag") {
              href = "https://www.youtube.com/hashtag/" + href.substring(1);
            }
            return href;
          },
        }}>
        {sanitizeHTML(replacedContent, {
          allowedTags: [],
          allowedAttributes: {
            a: [ 'href', 'name', 'target' ],
          },
        })}
      </Linkify>
    </div>
  );
};

export { Content };