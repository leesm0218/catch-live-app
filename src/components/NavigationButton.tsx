import react from 'react';
import { useNavigate } from 'react-router-dom';

type NavigationButtonProps = {
  navigationURL: string;
  alt: string;
  icon: string;
  hoverIcon: string;
  labelText: string;
};

export function NavigationButton(props: NavigationButtonProps) {
  const { navigationURL, alt, icon, hoverIcon, labelText } = props;
  const [buttonIcon, setButtonIcon] = react.useState(icon);
  const navigate = useNavigate();

  const buttonStyle = 'flex-1 flex flex-col h-full min-h-0';
  const buttonImageStyle = 'flex-[8_0_0%] min-h-0 object-contain';
  const buttonTextStyle = 'flex-1 min-h-0';
  
  return (
    <button
      className={buttonStyle}
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
        className={buttonImageStyle}
        src={buttonIcon}
        alt={alt}
      />
      <div className={buttonTextStyle}>{labelText}</div>
      <div className={buttonTextStyle}></div>
    </button>
  );
}
