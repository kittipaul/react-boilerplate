import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 0.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid white;
  color: white;
  &:hover {
    background: white;
    color: #41addd;
  }
`;
