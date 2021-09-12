import * as S from './styles';

type H5Props = {
  children: React.ReactNode;
};

export function H5({ children }: H5Props) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
