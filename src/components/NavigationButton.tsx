import styles from './NavigationButton.module.css';

type NavigationButtonProps = {
  navigationURL: string;
  alt: string;
  icon: string;
  hoverIcon: string;
  labelText: string;
};

export function NavigationButton(props: NavigationButtonProps) {
  const { navigationURL, alt, icon, hoverIcon, labelText } = props;

  const buttonIcon = icon;

  console.log(navigationURL, hoverIcon);

  return (
    <button className={styles.bottomNavButton}>
      <img className={styles.bottomNavButtonImage} src={buttonIcon} alt={alt} />
      <div className={styles.bottomNavButtonDiv}>{labelText}</div>
      <div className={styles.bottomNavButtonDiv}></div>
    </button>
  );
}
