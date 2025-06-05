import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NAVIGATION_BUTTON_STYLE,
  NAVIGATION_BUTTON_IMAGE_STYLE,
  NAVIGATION_BUTTON_TEXT_STYLE,
} from '@/constants/styles';

import type { NavigationButtonProps } from '@/types/navigationBar/navigationBarTypes';

export const NavigationButton = (props: NavigationButtonProps) => {
  const { navigationURL, alt, icon, hoverIcon, labelText } = props;
  const [buttonIcon, setButtonIcon] = useState(icon);
  const navigate = useNavigate();

  return (
    <button
      className={NAVIGATION_BUTTON_STYLE}
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
      <img
        className={NAVIGATION_BUTTON_IMAGE_STYLE}
        src={buttonIcon}
        alt={alt}
      />
      <div className={NAVIGATION_BUTTON_TEXT_STYLE}>{labelText}</div>
    </button>
  );
};
