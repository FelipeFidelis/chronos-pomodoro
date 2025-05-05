import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Menu() {

  return (
    <nav className={styles.menu}>
      <a href="http://" className={styles.menuLink}><HouseIcon/></a>
      <a href="http://" className={styles.menuLink}><HistoryIcon/></a>
      <a href="http://" className={styles.menuLink}><SettingsIcon/></a>
      <a href="http://" className={styles.menuLink}><SunIcon/></a>
    </nav>
  )
}
      