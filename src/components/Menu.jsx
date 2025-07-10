import React from 'react';
import history from '../assets/history.svg';
import adult from '../assets/adult.svg';
import subs from '../assets/subs.svg';
import block from '../assets/block.svg';
import bookmarks from '../assets/bookmarks.svg';
import publicProfile from '../assets/public.svg';
import logout from '../assets/logout.svg';
import arrow from '../assets/arrow.svg';

import { mockProfileData } from '../services/api';

const Menu = ({ data, GAME_CAPABILITIES }) => {
  const {
    is_private,
    age,
    about,
    telegram,
  } = data;


  return (
    <div className="profile-menu">
      <div className="profile-menu__item">
        <img src={history} alt="history" />
        <span>ИСТОРИЯ ВСТРЕЧ</span>
      </div>

      <div className="profile-menu__group">
        <div className="profile-menu__item profile-menu__item--indent public">
          <img src={publicProfile} alt="public" />
          <span>{is_private ? 'Публичный аккаунт' : 'Приватный аккаунт'}</span>
        </div>
        <div className="profile-menu__item profile-menu__item--indent">
          <img src={adult} alt="adult" />
          <span>{age >= 18 ? 'Взрослый' : 'Детский'}</span>
        </div>
      </div>

      <div className="profile-menu__group">
        <div className="profile-menu__item profile-menu__item--indent">
          <img src={subs} alt="subs" />
          <span>Мои подписки</span>
        </div>
        <div className="profile-menu__item profile-menu__item--indent">
          <img src={block} alt="block" />
          <span>Черный список</span>
        </div>
        <div className="profile-menu__item profile-menu__item--indent">
          <img src={bookmarks} alt="bookmarks" />
          <span>Закладки</span>
        </div>
      </div>

      <div className="profile-menu__group">
        <div className="profile-menu__item profile-menu__item--indent profile-menu__description">
          <span className="description-text">{about || mockProfileData.about}</span>
          <img src={arrow} alt="expand" />
        </div>
        <div className="profile-menu__item profile-menu__item--indent profile-menu__description">
          <span>Мой телеграм</span>
          <span>@{telegram || mockProfileData.telegram}</span>
        </div>
      </div>

      <div className="profile-menu__group">
        {GAME_CAPABILITIES.map((item, i) => (
          <div key={i} className="profile-menu__item profile-menu__item--indent profile-menu__capability">
            <div className="dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="profile-menu__item">
        <img src={logout} alt="logout" />
        <span>Выйти из профиля</span>
      </div>
    </div>
  );
};

export default Menu;
