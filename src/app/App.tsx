import { Router } from './routing';
import { GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/styles';

const App = () => (
  <>
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </>
);

export default App;
