import type { AppProps } from 'next/app'; // Importing AppProps type from Next.js
import { Provider } from 'react-redux'; // Importing Provider from React-Redux
import { store } from '../store'; // Importing the Redux store
import GlobalStyle from '../styles/globalStyles'; // Importing global styles

// Custom App component to wrap the application with the Redux provider and global styles
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
