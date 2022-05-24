import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeFirebase } from '../core/config/app-configuration'
import { wrapper } from '../core/state/root-store/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUid } from '../core/state/user-state/user-state';

function MyApp({ Component, pageProps }: AppProps) {
  initializeFirebase();

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
