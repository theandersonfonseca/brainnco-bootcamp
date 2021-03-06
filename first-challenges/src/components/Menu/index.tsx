import * as S from './styles';

export function Menu() {
  return (
    <S.Wrapper>
      <ul className='menu__list'>
        <li className='menu__item'>
          <a className='menu__link' href='https://google.com'>
            Home
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='https://google.com'>
            About
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='https://google.com'>
            Contact
          </a>
        </li>
      </ul>
    </S.Wrapper>
  );
}
