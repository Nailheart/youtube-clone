import "linkify-plugin-hashtag";
import Linkify from 'linkify-react';
import { FC } from 'common/types/types';

type Props = {
  content: string;
  className?: string;
};

const Content: FC<Props> = ({ content, className }) => {
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
        {content}
      </Linkify>
    </div>
  );
};

export { Content };