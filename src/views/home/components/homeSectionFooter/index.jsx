import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Link from '@/components/linked';
import { useTheme } from 'styled-components';

const HomeSectionFooter = memo(props => {
  const linkStyle = { fontSize: '17px', fontWeight: 800 };
  const theme = useTheme();
  props.name && (linkStyle.color = theme.text.highlight);
  return (
    <Link style={linkStyle} to={props.to ?? '/entire'}>
      {props.name ? `查看${props.name}房源` : '查看全部'}
    </Link>
  );
});

HomeSectionFooter.propTypes = {
  city: PropTypes.string,
  to: PropTypes.string
};

export default HomeSectionFooter;
