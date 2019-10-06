import React from 'react';
import KonamiCode from 'konami-code';
import GlobalStyle from '../styles/global';
import SEO from './SEO';
import ImBatman from '../sounds/im-batman.mp3';
import 'typeface-cantata-one';
import 'typeface-open-sans';

if (typeof document !== 'undefined') {
  new KonamiCode().listen(() => new Audio(ImBatman).play());
}

const Layout = () => (
  <>
    <SEO />
    <GlobalStyle />
  </>
);

export default Layout;
