import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: 16px;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const ListItem = styled.li`
  margin-top: 10px;
  padding: 0;
`;
