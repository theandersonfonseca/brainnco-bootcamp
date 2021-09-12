import * as S from './styles';

type H2Props = {
  children: React.ReactNode;
};

export function H2({ children }: H2Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
