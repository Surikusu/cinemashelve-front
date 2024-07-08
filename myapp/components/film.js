import styles from '../styles/Film.module.css'

function Film(prop){
    return(
    <div className={styles.filmCont}>
        <div></div>
        <div> {prop.title} </div>
        <div> {prop.duration} </div>
    </div>
    )
}

export default Film;