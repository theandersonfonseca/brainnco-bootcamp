type ButtonProps = {
  kind: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function Button({ kind, children }: ButtonProps) {
  return <button className={`btn  btn__${kind}`}>{children}</button>;
}
