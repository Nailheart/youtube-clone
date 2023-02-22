import { FC, ReactNode } from 'common/types/types';
import { createRef, useEffect, useRef } from 'hooks/hooks';

type Props = {
  children: ReactNode;
  hasMore: boolean;
  className?: string;
  getData: () => void;
}

const InfiniteScroll: FC<Props> = ({ children, hasMore, className, getData }) => {
  const getDataHandler = () => getData();

  const lastItem = createRef<HTMLDivElement>();
  const observerLoader = useRef<IntersectionObserver>();

  const actionInSight = (entries: IntersectionObserverEntry[]) => {
    if (hasMore && entries[0].isIntersecting) {
      getDataHandler();
    }
  };

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight);
    if (lastItem.current) {
      observerLoader.current.observe(lastItem.current);
    }
  }, [lastItem]);

  return (
    <div className={className}>
      {children}
      {hasMore && <div ref={lastItem}/>}
    </div>
  );
};

export { InfiniteScroll };