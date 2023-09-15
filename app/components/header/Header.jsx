import styles from './Header.module.css';
import NavLink from '../navlink/NavLink';
import Image from 'next/image';
export const Header = () => {
    return (

        <div className={styles.header}>
            <Image className={styles.img} src={'/logo.png'} alt={'Octopus'} width={65} height={65} />   
            <div className={styles.links}>
                <NavLink rota={'/'} texto={'Index'} />
                <NavLink rota={'/'} texto={'Sobre Nós'} />
                <NavLink rota={'/'} texto={'Contato'} />
                <NavLink rota={'/teste'} texto={'Feedback'} />
            </div>
        </div>
    );
}
export default Header;