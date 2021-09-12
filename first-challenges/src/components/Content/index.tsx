import * as S from './styles';

type ArticleProps = {
  title: string;
  content: React.ReactNode;
};

type ContentProps = {
  article: ArticleProps;
};

export function Content({ article }: ContentProps) {
  return (
    <S.Wrapper>
      <section className='section'>
        <h2>{article.title}</h2>

        {article.content}
      </section>
    </S.Wrapper>
  );
}
