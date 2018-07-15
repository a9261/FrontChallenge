import React, {Component} from 'react'
import styles from './Header.scss'
export default class Header extends Component {
    render() {
        return (
            <div className={`${styles.header}`}>
                <ul className={styles['menu-bar']}>
                    <li>
                        <a href='ture'>My Taks</a>
                    </li>
                    <li>
                        <a href='ture'>In Progress</a>
                    </li>
                    <li>
                        <a href='ture'>Completed</a>
                    </li>
                </ul>
            </div>
        )
    }
}
