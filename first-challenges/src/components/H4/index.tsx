import * as S from './styles';

type H4Props = {
  children: React.ReactNode;
};

export function H4({ children }: H4Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
