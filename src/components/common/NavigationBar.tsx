import { NAVIGATION_BUTTON_LIST } from '@/constants/navigationBar/navigationBarConstants';
import { NAVIGATION_STYLE as style } from '@/constants/styles';
import NavigationButton from './NavigationButton';

const NavigationBar = () => {
  return (
    <div className={style.BACKGROUND}>
      <div className={style.BUTTON_LIST}>
        {NAVIGATION_BUTTON_LIST.map((props) => (
          <NavigationButton key={props.navigationURL} {...props} />
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
