import * as S from './styles';

type ButtonProps = {
  kind: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function Button({ kind, children }: ButtonProps) {
  return <S.Wrapper kind={kind}>{children}</S.Wrapper>;
}
