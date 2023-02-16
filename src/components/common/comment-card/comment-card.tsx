import { FC } from 'common/types/types';
import { clsx, getFormattedDate } from 'helpers/helpers';
import { useState } from 'hooks/hooks';
import { Button, Content } from 'components/common/common';
import styles from './styles.module.scss';

type Props = {
  img: string;
  text: string;
  authorName: string;
  likeCount: number;
  publishTime: string;
  className?: string;
}

const CommentCard: FC<Props> = ({
  img,
  text,
  authorName,
  likeCount,
  publishTime,
  className,
}) => {
  const hasLongText = text.length > 500;
  const [showComment, setShowComment] = useState(hasLongText);

  const toggleComment = () => setShowComment(!showComment);

  return (
    <div className={clsx(styles.commentCard, className)}>
      <img className={styles.img} src={img} alt="Avatar" />
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.authorName}>@{authorName}&nbsp;</h3>
          <span className={styles.date}>{getFormattedDate(publishTime, 'distance')} ago</span>
        </div>
        <Content 
          className={clsx(styles.text, showComment && styles.textHide)}
          content={text}
        />
        {hasLongText && (
          <Button
            className={styles.toggleText}
            title={showComment ? 'Read more' : 'Show less'}
            theme="text"
            onClick={toggleComment}
          />
        )}
        <div className={styles.buttons}>
          <Button
            className={clsx(styles.button, styles.buttonLike)}
            title={likeCount.toString()}
            theme="primary"
            iconName="like"
            isIconBtn={likeCount === 0}
          />
          <Button
            className={clsx(styles.button, styles.buttonDislike)}
            title="Dislike"
            theme="primary"
            iconName="like"
            isIconBtn
          />
        </div>
      </div>
    </div>
  );
};

export { CommentCard };