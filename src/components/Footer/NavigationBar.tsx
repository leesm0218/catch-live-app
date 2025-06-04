import { NAVIGATION_BUTTON_LIST } from '../../constants/navigationBar/navigationBarConstants';
import { NavigationButton } from './NavigationButton';
import {
  NAVIGATION_BACKGROUND_STYLE,
  NAVIGATION_CONTENT_STYLE,
} from '../../constants/styles';

export function NavigationBar() {
  return (
    <div className={NAVIGATION_BACKGROUND_STYLE}>
      <div className={NAVIGATION_CONTENT_STYLE}>
        {NAVIGATION_BUTTON_LIST.map((props) => (
          <NavigationButton key={props.navigationURL} {...props} />
        ))}
      </div>
    </div>
  );
}
