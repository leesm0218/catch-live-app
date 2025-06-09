import { LOADING_SPINNER_STYLE } from '@/constants/styles';

type LoadingSpinnerProps = { size?: number; color?: string };

const LoadingSpinner = ({
  size = 40,
  color = '#a855f7',
}: LoadingSpinnerProps) => {
  return (
    <div className={LOADING_SPINNER_STYLE.container}>
      <div
        className={LOADING_SPINNER_STYLE.button}
        style={{
          width: size,
          height: size,
          borderTopColor: color,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
