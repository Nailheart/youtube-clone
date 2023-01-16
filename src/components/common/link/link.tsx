import { NavLink, NavLinkProps } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { FC, ReactNode } from 'common/types/types';

type Props = {
  to: AppRoute;
  children: ReactNode;
};

type LinkProps = Props & Omit<NavLinkProps, keyof Props>;

const Link: FC<LinkProps> = ({ to, children, ...otherProps }) => (
  <NavLink to={to} {...otherProps}>{children}</NavLink>
);

export { Link };
