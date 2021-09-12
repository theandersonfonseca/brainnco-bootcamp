import * as S from './styles';

type H6Props = {
  children: React.ReactNode;
};

export function H6({ children }: H6Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
