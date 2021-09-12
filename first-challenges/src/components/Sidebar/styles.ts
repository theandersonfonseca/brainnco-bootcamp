import styled from 'styled-components';

export const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30rem;
  flex-direction: column;

  .article-link {
    text-decoration: none;
    color: #000000;
    transition: 0.3s;
  }

  .article-link:not(:first-child) {
    margin-top: 3rem;
  }

  .article-link:hover {
    color: #8257e5;
  }
`;
