import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 6rem;
  border-bottom: solid 0.1rem #333333;

  .menu__list {
    display: flex;
    list-style: none;
  }

  .menu__item:not(:first-child) {
    margin-left: 1.5rem;
  }

  .menu__link {
    text-decoration: none;
    color: #000;
  }
`;
