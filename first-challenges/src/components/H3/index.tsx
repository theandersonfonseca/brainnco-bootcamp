import * as S from './styles';

type H3Props = {
  children: React.ReactNode;
};

export function H3({ children }: H3Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
