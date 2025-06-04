import { navigationButtons } from '../../constants/navigationBar/navigationBarConstants';
import { NavigationButton } from './NavigationButton';
import {
  navigationBackgroundStyle,
  navigationConetentStyle,
} from '../../constants/styles';

export function NavigationBar() {
  return (
    <div className={navigationBackgroundStyle}>
      <div className={navigationConetentStyle}>
        {navigationButtons.map((props) => (
          <NavigationButton key={props.navigationURL} {...props} />
        ))}
      </div>
    </div>
  );
}
