import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import TabsWrapper from './style';

const HeaderTabs = memo(props => {
  const { options, value, changeValue } = props;
  return (
    <TabsWrapper>
      {options.map(tab => (
        <div
          key={tab}
          onClick={() => changeValue(tab)}
          className={classNames('header-tabs__tab', { active: value === tab })}
        >
          {tab}
        </div>
      ))}
    </TabsWrapper>
  );
});

HeaderTabs.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default HeaderTabs;
