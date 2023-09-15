import styles from './Header.module.css';
import NavLink from '../navlink/NavLink';
import Image from 'next/image';
export const Header = () => {
    return (

        <div className={styles.header}>
            <Image className={styles.img} src={'/logo.png'} alt={'Octopus'} width={75} height={75} />   
            <div className={styles.links}>
                <NavLink rota={'/'} texto={'Home'} />
                <NavLink rota={'/'} texto={'About'} />
                <NavLink rota={'/teste'} texto={'Feedback'} />
            </div>
        </div>
    );
}
export default Header;