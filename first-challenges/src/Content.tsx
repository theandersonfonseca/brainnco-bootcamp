type ArticleProps = {
  title: string;
  content: React.ReactNode;
};

type ContentProps = {
  article: ArticleProps;
};

export function Content({ article }: ContentProps) {
  return (
    <main className='content'>
      <section className='section'>
        <h2>{article.title}</h2>

        {article.content}
      </section>
    </main>
  );
}
