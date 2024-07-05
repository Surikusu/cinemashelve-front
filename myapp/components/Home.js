import styles from '../styles/Home.module.css';
import Film from './film';

function Home() {
  return (
    <div>

      <header className={styles.head}>
      <div className={styles.title}>CinemaShelve</div>
      <input className={styles.inputField} ></input>
      <div className={styles.logo}> LOGO </div>
        
      </header>

      <main className={styles.mainCont}>
          <Film/>
          <Film/>
          <Film/>
          <Film/>
      </main>
    </div>
  );
}

export default Home;
