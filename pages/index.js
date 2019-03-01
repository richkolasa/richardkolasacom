import Link from "next/link";
import Header from "../components/header";

var date = new Date();
var dayOfWeek = date.getDay();

var weekdays = new Array(7);
weekdays[0] = '#endSundayScaries';
weekdays[1] = 'It\'s Monday: aspire(and caffeinate)';
weekdays[2] = 'Tuesday- Wednesday\'s Monday';
weekdays[3] = 'it\'s Wednesday, you\'re halfway there!';
weekdays[4] = 'Thursday? You mean Friday-eve.';
weekdays[5] = 'happy Friday!';
weekdays[6] = 'It\'s Saturday, nice!';

export default () => (
  <main>
    <Header />
    <div style={styles.base}>
      <div style={styles.container}>
        <h2 style={styles.dailyMessage}>
          {weekdays[dayOfWeek]}
        </h2>
        <p style={styles.bio}>
          I'm a technologist, a developer, and an advocate for improving workplaces
          through <a style={styles.link} href="/what-matters">shared values</a>.
          <br />
          <br />
          I spend my time writing code, making images,{' '}
          <Link href="/reading-list"><a style={styles.link}>reading</a></Link>,{' '}
          <Link href="https://www.twitter.com/notkoalas"><a style={styles.link}>tweeting</a>
          </Link>, and diving into the latest mobile or web tech. I also love building,{' '}
          <Link href="/archive"><a style={styles.link}>curating</a></Link>, and maintaining my family's photo
          and video archive spanning nearly 100 years.
        </p>
      </div>
    </div>
  </main>
);

var styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
  },

  container: {
    maxWidth: '1080px',
    paddingLeft: '10px',
    paddingRight: '10px'
  },

  dailyMessage: {
    fontSize: '4em',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontWeight: '300',
    letterSpacing: '1px',
    color: 'black',
    marginTop: '20px',
    marginBottom: '40px',
    transition: 'font-size .25s linear'
  },

  bio: {
    fontSize: '2.5em',
    color: 'black',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontWeight: '200',
    paddingRight: '10px',
    marginTop: '-20px',
    transition: 'font-size .25s linear'
  },

  link: {
    textDecoration: 'underline',
    color: 'black'
  }
}