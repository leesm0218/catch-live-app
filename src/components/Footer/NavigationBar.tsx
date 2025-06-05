import { NAVIGATION_BUTTON_LIST } from '@/constants/navigationBar/navigationBarConstants';
import { NavigationButton } from '@/components/Footer/NavigationButton';
import { NAVIGATION_STYLE as style } from '@/constants/styles';

export const NavigationBar = () => {
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
