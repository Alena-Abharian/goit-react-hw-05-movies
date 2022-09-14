import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.heading};
  font-family: ${p => p.theme.fonts.body};
  padding-right: ${p => p.theme.space[4]}px;

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }

`;
