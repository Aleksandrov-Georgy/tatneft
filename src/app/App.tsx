import { Router } from './routing';
import { GlobalStyles } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/styles';
import { useThemeStore } from '@/app/store';
import ThemeToggle from '@/features/toogle-theme';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { isDark } = useThemeStore();

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <GlobalStyles />
      <ThemeToggle />
      <Router />
      <ToastContainer theme={isDark ? 'dark' : 'light'} />
    </ThemeProvider>
  );
};

export default App;
