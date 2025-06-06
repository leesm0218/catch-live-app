import { HEADER_STYLE } from '@/constants/styles';

type HeaderProps = {
  headerTitle: string;
};

const Header = ({ headerTitle }: HeaderProps) => {
  return <h1 className={HEADER_STYLE.title}>{headerTitle}</h1>;
};

export default Header;
