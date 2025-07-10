import axios from 'axios';
import avatar from '../assets/avatar.svg'

const API_BASE_URL = 'https://igroom.ru/api/v2';
const PROFILE_UUID = '5e800be0-088e-41cb-b549-10ebf4a13591';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const mockProfileData = {
  uuid: PROFILE_UUID,
  name: 'Ваня Петькин',
  nickname: 'user6',
  role: 'румер',
  avatar: avatar,
  age: 32,
  is_private: false,
  city: {id: "1", name: "Кореновск"},
  stats: {
    meetings: 15,
    reviews: 350
  },
  about: 'Я профессиональный скуф, обожаю сидеть дома и часто играю в Мафию с друзьями по вечерам в Сицилии и совем всех желающих и разные другие дела',
  telegram: "publicuser_telegram",
  calling_limit: 10,
  going_limit: 10,
  account_status: 'active',
  last_login_at: "2025-07-07T12:29:21.65866Z",
  created_at: "2025-07-07T12:29:21.65866Z",
};

export const getProfile = async (uuid = PROFILE_UUID) => {
  try {
    const response = await api.get(`/profile/${uuid}`);    
    return response.data.data;
  } catch (error) {
    console.warn('API request failed, using mock data:', error.message);
    return mockProfileData;
  }
};

export default api;