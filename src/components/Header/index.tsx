type HeaderProps = {
  headerTitle: string;
};

const Header = ({ headerTitle }: HeaderProps) => {
  return <h1 className="text-2xl font-bold mb-8">{headerTitle}</h1>;
};

export default Header;
