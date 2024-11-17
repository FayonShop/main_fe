import { ReactNode } from 'react';
import { Link, LinkProps, useMatch } from 'react-router-dom';
import cLInkStyles from './CNavLink.module.scss';

export type CLinkProps = LinkProps & {
  to: string;
  activeClassName?: string;
  linkClassName?: string;
  children?: ReactNode;
};

export default function CNavLink({
  to,
  activeClassName,
  linkClassName,
  children,
  ...props
}: CLinkProps) {
  const isActive = useMatch(to);
  const classes = [
    linkClassName || cLInkStyles.link,
    isActive ? activeClassName || cLInkStyles.active : '',
  ].join(' ');

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}
