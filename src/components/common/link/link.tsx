import { NavLink, NavLinkProps } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { FC, ReactNode } from 'common/types/types';

type Props = {
  to: AppRoute;
  children: ReactNode;
  className?: string;
};

type LinkProps = Props & Omit<NavLinkProps, keyof Props>;

const Link: FC<LinkProps> = ({ to, children, className, ...otherProps }) => (
  <NavLink to={to} className={className} {...otherProps}>{children}</NavLink>
);

export { Link };
