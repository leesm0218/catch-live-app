import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_STYLE as style } from '@/constants/styles';

type NavigationButtonProps = {
  navigationURL: string;
  alt: string;
  icon: string;
  hoverIcon: string;
  labelText: string;
};

const NavigationButton = (props: NavigationButtonProps) => {
  const { navigationURL, alt, icon, hoverIcon, labelText } = props;
  const [buttonIcon, setButtonIcon] = React.useState(icon);
  const navigate = useNavigate();

  return (
    <button
      className={style.button}
      onMouseEnter={() => setButtonIcon(hoverIcon)}
      onTouchStart={(ev) => {
        ev.preventDefault();
        setButtonIcon(hoverIcon);
      }}
      onMouseLeave={() => setButtonIcon(icon)}
      onTouchCancel={(ev) => {
        ev.preventDefault();
        setButtonIcon(icon);
      }}
      onClick={() => navigate(navigationURL)}
      onTouchEnd={(ev) => {
        ev.preventDefault();
        navigate(navigationURL);
      }}
    >
      <img className={style.buttonImage} src={buttonIcon} alt={alt} />
      <div className={style.buttonText}>{labelText}</div>
    </button>
  );
};

export default NavigationButton;
