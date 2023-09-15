import Link from 'next/link';
import styles from './navlink.module.css';

const NavLink = ({rota, texto}) => {
    return (
        <div>
            <Link className={styles.textLink}href={rota}>{texto}</Link>
        </div>
    )
}

export default NavLink;