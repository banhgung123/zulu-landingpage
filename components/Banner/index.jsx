import styles from './Banner.module.scss';

function Banner(props) {
    return (
        <section className={styles.banner}>
            <div className={styles.banner_info}>
                <h1 className={styles.banner_heading}>
                    <span>Make a</span> <span>big impact</span> <span>with exciting</span> videos
                </h1>
                <p className={`${styles.banner_desc} text`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus eum illum nulla exercitationem
                </p>
                <div className={styles.banner_links}>
                    <a className="button button__primary">Get Started</a>
                    <a className="button button__outline">How it works</a>
                </div>
            </div>
            <img src="images/img1.png" alt="" className={styles.banner_image}/>
        </section>
    );
}

export default Banner;