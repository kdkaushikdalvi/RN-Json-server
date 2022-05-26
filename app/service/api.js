import axios from 'axios';

const url = 'http://127.0.0.1:3003/songs';

export const getSongList = async id => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};

export const addSone = async user => {
  return await axios.post(url, user);
};

export const editSong = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

export const deleteSong = async id => {
  console.log('deleteSong', id);
  return await axios.delete(`${url}/${id}`);
};
