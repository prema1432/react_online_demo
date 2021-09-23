import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';

const theme = createTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

function DefaultProps() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="secondary" variant="contained">
        Change default props
      </Button>
      <Button color="primary" variant="contained">
        Change default props
      </Button>
      <ButtonGroup variant="outlined" color="secondary">
      <Button color="secondary" variant="contained">
        Change default props
      </Button>
      <Button color="primary" variant="contained">
        Change default props
      </Button>
      </ButtonGroup>
    </ThemeProvider>
  );
}

export default DefaultProps;
