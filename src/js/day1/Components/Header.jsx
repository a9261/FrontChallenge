import React, {Component} from 'react'
import styles from './Header.scss'
export default class Header extends Component {
    render() {
        return (
            <div className={`${styles.header}`}>
                <ul className={styles['menu-bar']}>
                    <li>
                        <a href>My Taks</a>
                    </li>
                    <li>
                        <a href>In Progress</a>
                    </li>
                    <li>
                        <a href>Completed</a>
                    </li>
                </ul>
            </div>
        )
    }
}
