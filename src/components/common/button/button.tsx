import { FC, IconName } from 'common/types/types';
import { clsx } from 'helpers/helpers';
import { Icon } from 'components/common/common';
import styles from './styles.module.scss';

type Props = {
  title: string;
  className?: string;
  theme?: 'primary' | 'secondary' | 'text';
  iconName?: IconName;
  isIconBtn?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  title,
  className,
  theme = 'text',
  iconName,
  isIconBtn,
  onClick,
}) => {
  const hasIcon = Boolean(iconName);

  return (
    <button 
      className={clsx(
        styles.button,
        theme && styles[theme],
        isIconBtn && styles.icon,
        className
      )}
      onClick={onClick}
      aria-label={isIconBtn ? title : ''}
    >
      {hasIcon && <Icon name={iconName as IconName} />}
      {!isIconBtn && <span>{title}</span>}
    </button>
  );
};

export { Button };