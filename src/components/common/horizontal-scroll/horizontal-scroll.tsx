import { FC, ReactNode } from 'common/types/types';
import { useMatchMedia, useRef } from 'hooks/hooks';
import { clsx } from 'helpers/helpers';
import { Icon } from 'components/common/common';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  shift?: number;
}

// 😕
const HorizontalScroll: FC<Props> = ({ children, className, shift = 10 }) => {
  const { xl } = useMatchMedia();
  const ref = useRef<HTMLDivElement>(null);
  let myReq: number;

  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;

      const btnLeft = document.querySelector(`.${styles.scrollBtnLeft}`) as HTMLElement;
      const btnRight = document.querySelector(`.${styles.scrollBtnRight}`) as HTMLElement;
      const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;

      if (ref.current.scrollLeft === 0) {
        btnLeft.classList.add(styles.scrollBtnHide);
      } else {
        btnLeft.classList.remove(styles.scrollBtnHide);
      }
      
      if (ref.current.scrollLeft + 1 >= maxScrollLeft) {
        btnRight.classList.add(styles.scrollBtnHide);
      } else {
        btnRight.classList.remove(styles.scrollBtnHide);
      }
      
      myReq = requestAnimationFrame(() => scroll(scrollOffset));
    }
  }

  const stopScroll = () => {
    cancelAnimationFrame(myReq);
  }

  return (
    <div className={clsx(styles.horizontalScroll, className)}>
      <button
        className={clsx(
          styles.scrollBtn,
          styles.scrollBtnLeft,
          styles.scrollBtnHide,
          xl && styles.scrollBtnHide,
        )}
        onMouseDown={() => scroll(-shift)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
      >
        <Icon className={styles.icon} name="arrow" />
      </button>
      <button
        className={clsx(
          styles.scrollBtn,
          styles.scrollBtnRight,
          xl && styles.scrollBtnHide,
        )}
        onMouseDown={() => scroll(shift)}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
      >
        <Icon className={styles.icon} name="arrow" />
      </button>
      <div ref={ref} className={styles.horizontalScrollContainer}>
        {children}
      </div>
    </div>
  );
};

export { HorizontalScroll };