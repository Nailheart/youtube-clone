import 'linkify-plugin-hashtag';
import 'linkify-plugin-keyword';
import Linkify from 'linkify-react';
import registerKeywords from 'linkify-plugin-keyword';
import { FC } from 'common/types/types';
import { getSeconds, sanitizeHTML } from 'helpers/helpers';

type Props = {
  content: string;
  className?: string;
};

const Content: FC<Props> = ({ content, className }) => {
  const text = content.replace(/<br\s*\/?>/gi,'\n'); // replace br tag
  const sanitizedContent = sanitizeHTML(text, {
    allowedTags: [],
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
    },
  });

  // time format hh:mm:ss or mm:ss 😐
  const regex = /(([0-9]|[0-9]{2}):[0-9]{2}:[0-9]{2})|(([0-9]|[0-9]{2}):[0-9]{2})/g;
  const timeList = sanitizedContent.match(regex);
  registerKeywords(timeList || []);

  return (
    <div className={className}>
      <Linkify
        options={{
          rel: 'nofollow noreferrer noopener',
          target: '_blank',
          className: {
            keyword: "time-link",
          },
          formatHref: {
            hashtag: (href) => href = "https://www.youtube.com/hashtag/" + href.substring(1),
            keyword: (keyword) => getSeconds(keyword).toString(),
          },
        }}>
        {sanitizedContent}
      </Linkify>
    </div>
  );
};

export { Content };