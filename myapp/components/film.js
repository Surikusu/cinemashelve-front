import styles from '../styles/Film.module.css'

function Film(prop){
    return(
    <div className={styles.filmCont}>
        <div></div>
        <div className={styles.title}> {prop.title} </div>
        <div className={styles.duration}> {prop.duration} </div>
    </div>
    )
}

export default Film;