import styles from './Intro.module.scss';

function Intro(props) {
    return (
        <section className={styles.intro}>
            <div className={styles.intro_content}>
                <span className="block_caption block_caption__left">Walk Through</span>
                <h2 className="block_heading">
                    <span>From our</span> <span>studio to your</span> <span>screen</span>
                </h2>
                <p className={`text ${styles.intro_desc}`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ea consequuntur soluta earum repudiandae veniam eum nemo distinctio ipsum quaerat ex magni, numquam odio dolorem molestiae sint consequatur ab doloremque.
                </p>
                <a href="" className="button button__primary">Explore more</a>
            </div>
            <img src="images/img5.png" alt="" className={styles.intro_image}/>
        </section>
    );
}

export default Intro;