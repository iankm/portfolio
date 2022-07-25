import styles from '../styles/Home.module.css';

export const helpMenu = () => {
  return <p className={styles.text}>about linkedin parcel clear</p>;
};

export const list = (folder: string) => {
  switch (folder) {
    case '~':
      return <p className={styles.text}>..</p>;
    case '..':
      return <p className={styles.text}>music meme ian</p>;
  }
};

export const redirectPrompt = (dest: string) => {
  return <p className={styles.text}>{`redirecting to ${dest}...`}</p>;
};

export const commandNotFound = (command: string) => {
  return <p className={styles.text}>not sure wtf "{command}" is ong fr fr</p>;
};

export const comingSoon = () => {
  return <p className={styles.text}>Command not ready yet. But it's coming!</p>;
};

export const needArg = () => {
  return (
    <p className={styles.text}>
      yo dawg, i need a destination to perform this command. try cd ..
    </p>
  );
};

const getSpotifyUrl = (command: string) => {
  switch (command) {
    case 'mgk':
      return 'https://open.spotify.com/embed/album/57lgFncHBYu5E3igZnuCJK?utm_source=generator';
  }
};

export const spotify = (command: string) => {
  return (
    <iframe
      style={{
        borderRadius: '12px',
        margin: '0.5rem auto',
      }}
      src={getSpotifyUrl(command)}
      width="100%"
      height="380"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
};

const giphy = {
  baseURL: 'https://api.giphy.com/v1/gifs/',
  apiKey: '0UTRbFtkMxAplrohufYco5IY74U8hOes',
  tag: 'fail',
  type: 'random',
  rating: 'pg-13',
};

const getGif = () => {
  let giphyURL = encodeURI(
    giphy.baseURL +
      giphy.type +
      '?api_key=' +
      giphy.apiKey +
      '&tag=' +
      giphy.tag +
      '&rating=' +
      giphy.rating
  );

  let gifData: any;

  fetch(giphyURL).then((response: any) => {
    const gifText = response.text();
    console.log(gifText);
  });

  // return gifData.data.url;
};

export const meme = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        margin: '0.5rem auto',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("${getGif()}")`,
      }}
    />
  );
};

export const redirect = (dest: string) => {
  setTimeout(() => {
    switch (dest) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/ian-mukherjee/');
        break;
      case 'parcel':
        window.open('https://parcel.so/');
        break;
      case 'ong':
        window.open('https://knowyourmeme.com/memes/on-god');
        break;
      default:
        return;
    }
  }, 400);
};
