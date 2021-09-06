type ArticlesProps = {
  id: number;
  title: string;
  content: JSX.Element;
};

type SetArticle = Omit<ArticlesProps, 'id'>;

type SidebarProps = {
  articles: ArticlesProps[];
  setArticle: React.Dispatch<React.SetStateAction<SetArticle>>;
};

export function Sidebar({ articles, setArticle }: SidebarProps) {
  return (
    <aside className='sidebar'>
      {articles.map((article) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          className='article-link'
          href='#'
          key={article.id}
          onClick={() =>
            setArticle({
              title: article.title,
              content: article.content,
            })
          }
        >
          {article.title}
        </a>
      ))}
    </aside>
  );
}
