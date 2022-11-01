import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ScrollView from '../scrollView';
import TabsWrapper from './style';

const Tabs = memo(props => {
  const { list, value, change } = props;
  return (
    <TabsWrapper>
      <ScrollView>
        {list.map(tab => (
          <span
            key={tab.name}
            onClick={() => change(tab.name)}
            className={classNames('tab', { active: value === tab.name })}
          >
            {tab.name}
          </span>
        ))}
      </ScrollView>
    </TabsWrapper>
  );
});

Tabs.propTypes = {
  value: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  change: PropTypes.func.isRequired
};

export default Tabs;
