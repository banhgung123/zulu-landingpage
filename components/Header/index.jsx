import styles from './Header.module.scss';

function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <a href="index.html" className={styles.header_logo}>
                    <img src="images/logo.png" alt="" className={styles.header_logo_image} />
                </a>
                <ul className={styles.header_menu}>
                    <li className={styles.header_menu_item}>
                        <a href="#" className={styles.header_menu_link}>Home</a>
                    </li>
                    <li className={styles.header_menu_item}>
                        <a href="#" className={styles.header_menu_link}>Product</a>
                    </li>
                    <li className={styles.header_menu_item}>
                        <a href="#" className={styles.header_menu_link}>Pricing</a>
                    </li>
                    <li className={styles.header_menu_item}>
                        <a href="#" className={styles.header_menu_link}>About</a>    
                    </li>
                    </ul>
                <div className={styles.header_auth}>
                    <a href="#" className="button">Login</a>
                    <a href="#" className="button button__primary">Sign Up</a>
                </div>
            </header>
        </>
    );
}

export default Header;