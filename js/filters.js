import { shuffle } from './utils.js';
import { initThumbnails, destroyThumbnails } from './thumbnails.js';
import { MAX_COUNT_RANDOM_PICTURE, Filter } from './consts.js';

const HIDDEN_CONTAINER_CLASS = 'img-filters--inactive';
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

const filtersContainerElement = document.querySelector('.img-filters');
const filtersFormElement = filtersContainerElement.querySelector('.img-filters__form');

let photos = null;
let activeFilter = Filter.DEFAULT;
let callback = null;

const sortByCommentsCount = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const getDefaultPictures = () => photos.slice();
const getRandomPictures = () => shuffle(photos.slice()).slice(0, MAX_COUNT_RANDOM_PICTURE);
const getDiscussedPictures = () => photos.slice().sort(sortByCommentsCount);

const filterFunction = {
  [Filter.DEFAULT]: getDefaultPictures,
  [Filter.RANDOM]: getRandomPictures,
  [Filter.DISCUSSED]: getDiscussedPictures,
};

const getFilteredPictures = () => filterFunction[activeFilter]();

const onFiltersFormClick = (evt) => {
  const id = evt.target.id;
  if (id && id !== activeFilter) {
    filtersFormElement.querySelector(`#${activeFilter}`).classList.remove(ACTIVE_FILTER_CLASS);
    evt.target.classList.add(ACTIVE_FILTER_CLASS);
    activeFilter = id;

    destroyThumbnails();
    callback(getFilteredPictures());
  }
};

export const initFilters = (data, cb) => {
  photos = data.slice();
  callback = cb;
  filtersContainerElement.classList.remove(HIDDEN_CONTAINER_CLASS);
  filtersFormElement.addEventListener('click', onFiltersFormClick);

  initThumbnails(photos);
};
