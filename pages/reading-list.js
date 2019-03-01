import Radium, { StyleRoot } from 'radium';

import Header from '../components/header';
import Book from '../components/book';

export default function ReadingList() {
  return (
    <StyleRoot>
      <div style={styles.booksWrapper}>
        <Header />
        <div style={styles.booksContainer}>
          <Book
            style={styles.book1}
            imageSource='../static/cause-of-all-nations.jpg'
            altText="The Cause of All Nations by Don H. Doyle"
            url="https://a.co/1XSHWeO"
          />
          <Book
            style={styles.book2}
            imageSource='../static/creativity-inc-book-cover.jpg'
            altText="Creativity, Inc. by Ed Catmull"
            url="https://a.co/2ApOvK8"
          />
          <Book
            style={styles.book5}
            imageSource='../static/open-organization.jpg'
            altText="The Open Organization by Jim Whitehurst"
            url="http://a.co/jlvfQW4"
          />
          <Book
            style={styles.book3}
            imageSource='../static/the-news.jpg'
            altText="The News A User's Manual by Alain de Botton"
            url="https://a.co/0PMTViW"
          />
          <Book
            style={styles.book7}
            imageSource='../static/deadwake.jpg'
            altText="Dead Wake by Erik Larson"
            url="https://a.co/5mTrViu"
          />
          <Book
            style={styles.book6}
            imageSource='../static/1776.jpg'
            altText="1776 by David McCullough"
            url="https://a.co/cw3rE1E"
          />
          <Book
            style={styles.book4}
            imageSource='../static/dying-for-a-paycheck.jpg'
            altText="Dying for a Paycheck by Jeffrey Pfeffer"
            url="https://a.co/53keY7e"
          />
          <Book
            style={styles.book8}
            imageSource='../static/the-subtle-art.jpg'
            altText="The Subtle Art of Not Giving a F*ck by Mark Manson"
            url="https://a.co/d/hFeHJjn"
          />
        </div>
      </div>
    </StyleRoot>
  )
}

var styles = {
  booksWrapper: {
    width: '100%',
    height: '100%',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
  },

  booksContainer: {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25%',
    gridTemplateAreas: '"book1 book2 book3" "book4 book5 book6" "book7 book8 book9"',
    gridRowGap: '30px',
    gridColumnGap: '30px',
    color: 'black',
    paddingBottom: '40px',
    marginTop: '15px',
    justifyContent: 'center',
    justifyItems: 'center',

    '@media screen and (min-width: 1300px)': {
      gridTemplateColumns: '20% 20% 20%'
    },

    '@media screen and (max-width: 920px)': {
      gridTemplateColumns: '40% 40%',
      gridTemplateAreas: '"book1 book2" "book3 book4" "book5 book6" "book7 book8"',
    },

    '@media screen and (max-width: 580px)': {
      gridTemplateColumns: '100%',
      gridTemplateAreas: '"book1" "book2" "book3" "book4" "book5" "book6" "book7" "book8"',
      paddingBottom: '0',
      justifyContent: 'normal',
    }
  },

  links: {
    textDecoration: 'none',
    color: 'black',
  },

  paragraphs: {
    fontSize: '1.2em',
    gridArea: 'heading',
    marginTop: '20px',
    marginBottom: '10px',
    maxWidth: '70%',
    lineHeight: '1.2em',
    fontStyle: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontWeight: '100',

    '@media screen and (max-width: 920px)': {
      maxWidth: '100%',
      fontSize: '1.1em',
    }
  },

  book1: {
    gridArea: 'book1',
  },

  book2: {
    gridArea: 'book2',
  },

  book3: {
    gridArea: 'book3',
  },

  book4: {
    gridArea: 'book4',
  },

  book5: {
    gridArea: 'book5',
  },

  book6: {
    gridArea: 'book6',
  },

  book7: {
    gridArea: 'book7',
  },

  book8: {
    gridArea: 'book8',
  },


}


// @media screen and (max-width: 920px) {
//   .books-container {
//     grid-template-columns: repeat(2, 45%);
//     grid-template-areas:
//       "book1 book2" 
//       "book3 book4"
//       "book5 book6" 
//       "book7 book8";
//   }

//   .books-container p {
//     max-width: 100%;
//     font-size: 1.1em;
//   }
// }

// @media screen and (max-width: 580px) {
//   .books-container {
//     grid-template-columns: 100%;
//     grid-template-areas:
//       "book1" 
//       "book2" 
//       "book3" 
//       "book4" 
//       "book5"
//       "book6" 
//       "book7"
//       "book8";
//     padding-bottom: 0;
//     justify-content: normal;
//   }

//   .books-container p {
//     font-size: 1em;
//   }
// }
