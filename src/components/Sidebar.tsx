import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

import capa from '../assets/capa.png'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} alt="Capa" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/lumoura0.png" />
                <strong>Luis Fernando</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}