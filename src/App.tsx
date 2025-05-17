import '@mantine/core/styles.css';
import 'csshake/dist/csshake.min.css';
import './global.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <main>
        <Router />
      </main>
    </MantineProvider>
  );
}
