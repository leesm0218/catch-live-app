import react from 'react';
import {useNavigate} from 'react-router-dom';

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

  return (
    <button
      className="flex-1 flex flex-col h-full min-h-0"
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
      <img className="flex-[8_0_0%] min-h-0 object-contain" src={buttonIcon} alt={alt} />
      <div className="flex-1 min-h-0">{labelText}</div>
      <div className="flex-1 min-h-0"></div>
    </button>
  );
}
