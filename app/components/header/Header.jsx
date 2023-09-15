import styles from './Header.module.css';
import NavLink from '../navlink/NavLink';

export const Header = () => {
    return (
        <div className={styles.header}>
            <p>Octopus</p>
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