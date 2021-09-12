import * as S from './styles';

type H1Props = {
  children: React.ReactNode;
};

export function H1({ children }: H1Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
