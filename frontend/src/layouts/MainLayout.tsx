import Header from '../components/Header';

type Props = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
