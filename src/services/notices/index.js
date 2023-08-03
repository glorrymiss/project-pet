const { addFavoriteNotices } = require('./addFavoriteNotices');
const { addNotices } = require('./addNotices');
const { addPet } = require('./addPet');
const { getFavoriteNotices } = require('./getFavoriteNotices');
const { getNotices } = require('./getNotices');
const { getUserNotices } = require('./getUserNotises');
const { removeNotices } = require('./removeNotices');
const { removeNoticesToFavorite } = require('./removeNoticesToFavorite');

module.exports = {
  addPet,
  addNotices,
  getNotices,
  getFavoriteNotices,
  addFavoriteNotices,
  getUserNotices,
  removeNotices,
  removeNoticesToFavorite,
};
