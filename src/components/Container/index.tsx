type ContainerProps = {
  children: React.ReactNode;
}

import styles from "./styles.module.css"

export function Container ({ children }: ContainerProps) {

  return (

    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>

  );

}