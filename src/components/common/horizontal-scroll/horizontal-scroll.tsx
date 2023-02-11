import { FC, ReactNode } from 'common/types/types';
import { useEffect, useRef, useState } from 'hooks/hooks';
import { clsx, debounce } from 'helpers/helpers';
import { Icon } from 'components/common/common';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  shift?: number;
}

const HorizontalScroll: FC<Props> = ({ children, className, shift = 10 }) => {
  const [hideArrow, setHideArrow] = useState<boolean>(false);
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

  const hideScrollArrow = () => {
    const horizontalScrollContainer = document.querySelector(`.${styles.horizontalScrollContainer}`) as HTMLElement;
    const children = horizontalScrollContainer.children;
    let childrenWidth = 0;

    for (let i = 0; i < children.length; i++) {
      childrenWidth += (children[i] as HTMLElement).offsetWidth;
    }

    setHideArrow(horizontalScrollContainer.offsetWidth > childrenWidth);
  }

  useEffect(() => {
    hideScrollArrow();
    
    const debouncedHandleResize = debounce(hideScrollArrow, 1000);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  });

  return (
    <div className={clsx(styles.horizontalScroll, className)}>
      <button
        className={clsx(
          styles.scrollBtn,
          styles.scrollBtnLeft,
          styles.scrollBtnHide,
          hideArrow && styles.scrollBtnHide,
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
          hideArrow && styles.scrollBtnHide,
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