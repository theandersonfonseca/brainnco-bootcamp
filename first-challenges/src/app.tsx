import { useState } from 'react';

import GlobalStyles from './styles/global';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const articles = [
  {
    id: 1,
    title: 'Messi no PSG',
    content: (
      <div>
        <h3>Entenda como a chegada de Lionel Messi muda o vestiário do PSG</h3>
        <p>
          Segundo o "L'Equipe", o argentino tem impressionado diversos membros
          do clube em apenas uma semana de treinamentos. Há, inclusive, atletas
          que duvidavam sobre uma permanência no clube e que atualmente
          acreditam na conquista da Champions League.
        </p>

        <Button kind='primary'>Saiba mais</Button>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Bolo de Cenoura',
    content: (
      <div>
        <ul>
          <li>1/2 xícara (chá) de óleo</li>
          <li>3 cenouras médias raladas</li>
          <li>4 ovos</li>
          <li>2 xícaras (chá) de açúcar</li>
          <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
          <li>1 colher (sopa) de fermento em pó</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Apenas uma ferrrari',
    content: (
      <div>
        <img
          src='https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt='Ferrari'
        />
      </div>
    ),
  },
];

export function App() {
  const [article, setArticle] = useState({
    title: articles[0].title,
    content: articles[0].content,
  });

  return (
    <>
      <Header />
      <Menu />

      <div style={{ display: 'flex' }}>
        <Sidebar articles={articles} setArticle={setArticle} />
        <Content article={article} />
      </div>

      <Footer />
      <GlobalStyles />
    </>
  );
}
