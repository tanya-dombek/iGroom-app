import React, { useState, useEffect } from 'react';
import { getProfile } from '../services/api';
import Header from './Header';
import ProfileMetrics from './ProfileMetrics';
import Status from './Status';
import Actions from './Actions';
import Menu from './Menu';

export const gameCapabilities = [
    'Возможности ИГРУМА',
    'Правила ИГРУМА',
    'Инструкция РУМЕРА',
    'Инструкция МАСТЕРА',
    'Инструкция МЕСТА',
    'Пользовательское соглашение'
]

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await getProfile();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading">Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="error">Ошибка: {error}</div>
      </div>
    );
  }  

  return (
    <div className="profile-container">
        <div className="profile-info">
          <Header data={profileData} />
          <ProfileMetrics data={profileData} />
          <Status data={profileData} />     
        </div>
        <Actions />
        <Menu data={profileData} GAME_CAPABILITIES={gameCapabilities}/>
    </div>
  );
};

export default Profile;