import styles from './Home.module.scss';

const Home = () => {
    return (
        <>
            <div>
                <h1 className={styles.title}>Allight Title</h1>
                <p>Allight에 오신 것을 환영합니다.</p>
            </div>
        </>
    )
}

export default Home;