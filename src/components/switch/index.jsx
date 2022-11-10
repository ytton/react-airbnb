import styled from '@emotion/styled';
import { Switch } from '@mui/material';
export const IOSSwitch = styled(props => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#222222',
          position: 'relative',
          opacity: 1,
          border: 0
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        },
        '.MuiSwitch-thumb': {
          position: 'relative',
          '&::after': {
            content: '"✓"',
            color: '#222',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
          }
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: '#e9e9ea'
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: '200 500'
    }
  })
);
