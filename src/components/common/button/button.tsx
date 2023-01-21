import { FC, IconName } from 'common/types/types';
import { clsx } from 'helpers/helpers';
import { Icon } from 'components/common/common';
import styles from './styles.module.scss';

type Props = {
  title: string;
  className?: string;
  theme?: 'primary' | 'secondary' | 'text';
  iconName?: IconName;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  title,
  className,
  theme = 'text',
  iconName,
  onClick,
}) => {
  const hasIcon = Boolean(iconName);

  return (
    <button 
      className={clsx(
        styles.button,
        theme && styles[theme],
        className
      )}
      onClick={onClick}
    >
      {hasIcon && <Icon name={iconName as IconName} />}
      {title}
    </button>
  );
};

export { Button };