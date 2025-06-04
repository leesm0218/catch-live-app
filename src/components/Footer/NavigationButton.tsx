import react from 'react';
import { useNavigate } from 'react-router-dom';
import {
  navigationButtonStyle,
  navigationButtonImageStyle,
  navigationButtonTextStyle,
} from '../../constants/styles';

import type { NavigationButtonProps } from '../../types/navigationBar/navigationBarTypes';

export function NavigationButton(props: NavigationButtonProps) {
  const { navigationURL, alt, icon, hoverIcon, labelText } = props;
  const [buttonIcon, setButtonIcon] = react.useState(icon);
  const navigate = useNavigate();

  return (
    <button
      className={navigationButtonStyle}
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
      <img className={navigationButtonImageStyle} src={buttonIcon} alt={alt} />
      <div className={navigationButtonTextStyle}>{labelText}</div>
    </button>
  );
}
