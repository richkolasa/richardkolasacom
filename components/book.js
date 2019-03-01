import Radium from 'radium';

export default function Book(props) {
  return (
    <div style={props.style}>
      <a href={props.url}>
        <img style={styles.images} src={props.imageSource} alt={props.altText} />
      </a>
    </div>
  );
}

var styles = {
  images: {
    boxShadow: '-5px 5px 10px #888888',
    maxWidth: '100%',

    // '@media screen and (max-width: 920px)': {
    //   maxWidth: '200px'
    // },

    '@media screen and (max-width: 580px)': {

    }
  }
}

Book = Radium(Book);