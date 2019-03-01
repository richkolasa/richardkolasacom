import Radium from 'radium';

import Header from '../components/header';

export default function WhatMatters() {
  return (
    <div style={styles.content}>
      <Header />
      <div style={styles.paragraphContainer}>
        <p style={styles.paragraph}>I believe that every human being should be able to freely pursue
            the improvement of their mental well-being and health. Our fundamental worth is <strong>significant
            and equal</strong>.</p>
        <p style={styles.paragraph}>Our values should be built on this foundation.</p>
      </div>
    </div>
  )
}

var styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
  },

  paragraphContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '80%'
  },

  paragraph: {
    fontSize: '4em',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontWeight: '200',
    transition: 'font - size .25s linear',
  }
}

WhatMatters = Radium(WhatMatters);
