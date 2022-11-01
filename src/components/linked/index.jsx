import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LinkWrapper from './style';
export default function Link(props) {
  return (
    <LinkWrapper>
      <RouterLink {...props} />
      <NavigateNextIcon />
    </LinkWrapper>
  );
}
