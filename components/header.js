import Radium from 'radium';

export default function Header() {
  return (
    <div style={styles.base}>
      <div style={styles.content}>
        <a style={styles.link} href="/">
          <h1 style={styles.text}>Richard Kolasa</h1>
        </a>
        <a style={styles.link} href="mailto:hello@richardkolasa.com">
          <div style={styles.email}>hello@richardkolasa.com</div>
        </a>
      </div>
    </div>
  );
}

var styles = {
  base: {
    borderBottom: '0.5px solid rgba(0, 0, 0, 0.397)'
  },

  content: {
    maxWidth: '250px',
    margin: '0 auto'
  },

  link: {
    textDecoration: 'none',
  },

  text: {
    textAlign: 'center',
    fontSize: '2em',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    width: '100%',
    color: 'black',
    marginTop: '10px',
    marginBottom: '10px'
  },

  email: {
    marginTop: '0',
    fontSize: '0.9em',
    textAlign: 'center',
    color: 'rgba(2, 170, 179, 0.808)',
    marginBottom: '10px'
  }
}

Header = Radium(Header);
