import '../styles/global.css';
import { useReducer } from 'react';
import { UserNameContext, reducer } from '../components/auth';

export default function App({ Component, pageProps }) {
  const [name, dispatch] = useReducer(reducer, '');

  // return (
  //   <UserNameContext.Provider value={{ name, dispatch }}>
  //     <Component {...pageProps} />
  //   </UserNameContext.Provider>
  // );

  return <Component {...pageProps} />;
}
