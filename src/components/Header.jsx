import React from 'react';
import arrow from '../assets/arrow.svg';
import share from '../assets/share.svg';
import kotum from '../assets/kotum.svg';
import me from '../assets/me.svg';
import { mockProfileData } from '../services/api';

const Header = ({ data }) => {
  const status = data.account_status || mockProfileData.account_status;

  return (
    <div className="profile-header">
      <button className="profile-header__back">
        <img src={arrow} alt="back button" />
      </button>

      <div className="profile-header__avatar">
        <img src={mockProfileData.avatar} alt="avatar" className="profile-header__image" />
        <div className={`profile-header__status ${status === 'active' ? 'active' : 'unactive'}`}>
          P
        </div>
      </div>

      <div className="profile-header__actions">
        <button className="profile-header__button">
          <img src={share} alt="share" />
        </button>
        <div className="profile-header__info">
          <img src={me} alt="me" />
          <span>Это я</span>
        </div>
        <div className="profile-header__info">
          <img src={kotum} alt="kotum" />
          <span>Котум</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
