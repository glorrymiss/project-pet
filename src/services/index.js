const { addFavoriteNotices } = require('./addFavoriteNotices');
const { addNotices } = require('./addNotices');
const { addPet } = require('./addPet');
const { getFavoriteNotices } = require('./getFavoriteNotices');
const { getNotices } = require('./getNotices');
const { getUserNotices } = require('./getUserNotises');

module.exports = {
  addPet,
  addNotices,
  getNotices,
  getFavoriteNotices,
  addFavoriteNotices,
  getUserNotices,
};
