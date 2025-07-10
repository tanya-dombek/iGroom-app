import React from 'react';
import TimeDisplay from './TimeDisplay';
import CreatedAtAgo from './CreatedAtAgo';
import { mockProfileData } from '../services/api';

const ProfileMetrics = ({ data }) => {
  const {
    nickname,
    name,
    role,
    last_login_at,
    created_at,
    stats,
  } = data;

  return (
    <div className="profile-stats-section">
      <div className="profile-stats-section__name">
        <span>{role === 'roomer' ? 'румер' : mockProfileData.role}: </span>
        <span>{name || mockProfileData.name}</span>
      </div>

      <div className="profile-stats-section__meta">
        <span>@{nickname || mockProfileData.nickname}</span>
        <TimeDisplay isoDate={last_login_at || mockProfileData.last_login_at} />
      </div>

      <div className="profile-stats-section__grid">
        <div className="stat">
          <CreatedAtAgo isoDate={created_at || mockProfileData.created_at} />
          <div className="stat__label">в игруме</div>
        </div>
        <div className="stat">
          <span className="stat__value">{stats?.meetings || mockProfileData.stats.meetings}</span>
          <div className="stat__label">встреч</div>
        </div>
        <div className="stat">
          <span className="stat__value">{stats?.reviews || mockProfileData.stats.reviews}</span>
          <div className="stat__label">румеров</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMetrics;
