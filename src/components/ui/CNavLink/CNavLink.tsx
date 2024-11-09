import {useMatch, Link, LinkProps} from "react-router-dom";
import cLInkStyles from "./CNavLink.module.scss";
import {ReactNode} from "react";

export type CLinkProps = LinkProps & {
  to: string;
  activeClassName?: string;
  linkClassName?: string;
  children?: ReactNode;
}

export default function CNavLink(
  {to, activeClassName, linkClassName, children, ...props}: CLinkProps
) {
  const isActive = useMatch(to);
  const classes = [
    linkClassName || cLInkStyles.link,
    isActive ? activeClassName || cLInkStyles.active : ''
  ].join(' ');

  return (
    <Link
      to={to}
      className={classes}
      {...props}
    >
      {children}
    </Link>
  );
}
