import React from 'react';
import arrow from '../assets/arrow.svg';
import { mockProfileData } from '../services/api';

const Status = ({ data }) => {
  const { calling_limit, going_limit } = data;

  return (
    <div className="profile-status">
      <div className="profile-status__item">
        <div className="profile-status__left">
          <div className="profile-status__indicator green" />
          <span className="profile-status__label">ЗОВЫ</span>
        </div>
        <div className="profile-status__right">
          <span className="profile-status__count">
            {calling_limit ?? mockProfileData.calling_limit}
          </span>
          <img src={arrow} alt="expand" />
        </div>
      </div>

      <div className="profile-status__item">
        <div className="profile-status__left">
          <div className="profile-status__indicator orange" />
          <span className="profile-status__label">ИДУ</span>
        </div>
        <div className="profile-status__right">
          <span className="profile-status__count">
            {going_limit ?? mockProfileData.going_limit}
          </span>
          <img src={arrow} alt="expand" />
        </div>
      </div>
    </div>
  );
};

export default Status;
