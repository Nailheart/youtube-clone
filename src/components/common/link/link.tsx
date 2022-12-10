import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';

type Props = {
  to: AppRoute;
  children: ReactNode;
  className?: string;
};

const Link: FC<Props> = ({ to, children, className }) => (
  <NavLink to={to} className={className}>{children}</NavLink>
);

export { Link };
