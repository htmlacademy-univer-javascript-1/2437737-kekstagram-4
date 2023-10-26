const AMOUNT_OF_IMAGES = 6;
const AMOUNT_OF_POSTS = 25;
const MIN_LIKE = 15;
const MAX_LIKE = 200;
const VARIETY_OF_MESSAGES =
[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const VARIETY_OF_DESCRIPTION =
[
  'Ауф...',
  'Как вам?',
  'Не перебивай волка, пока он молчит...',
  'Если стучат в дверь - я её не открою',
  'Жизнь - театр, а мы в ней актёры'
];

const varietyOfNames =
[
  'Артём',
  'Сабина',
  'Еламан',
  'Арсений',
  'Дмитрий',
  'Мария',
  'Владислав',
  'Владимир',
  'Алексей'
];
const generateArrayOfUniqUrl = () => Array.from ({ length: 25}, (_, index) => index+1);
const arrayOfUniqUrl = generateArrayOfUniqUrl();

const getRandomInt = (min,max) =>
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateArrayOfComments = (count) =>
{
  const arrayOfComments = [];

  for(let commentId = 1; commentId <= count; commentId++){
    const avatar = `img/avatar-${getRandomInt(1,AMOUNT_OF_IMAGES)}.svg`;
    const comment = {
      id : commentId,
      avatar : avatar,
      message : VARIETY_OF_MESSAGES[getRandomInt(0,VARIETY_OF_MESSAGES.length -1)],
      name : varietyOfNames[getRandomInt(0,varietyOfNames.length -1)],
    };

    arrayOfComments.push(comment);
  }

  return arrayOfComments;
};

const createArrayOfPosts = (count) =>
{
  const arrayOfPosts = [];
  for(let userId =1; userId <= count; userId++){
    const localUrl = getRandomInt(0,arrayOfUniqUrl.length-1);
    const post =
  {
    id: userId,
    url: `photos/${arrayOfUniqUrl[localUrl]}.png`,
    description: VARIETY_OF_DESCRIPTION[getRandomInt(0,VARIETY_OF_DESCRIPTION.length -1)],
    likes: getRandomInt(MIN_LIKE,MAX_LIKE),
    comments: generateArrayOfComments(getRandomInt(0,30)),
  };
    arrayOfUniqUrl.splice(localUrl,1);
    arrayOfPosts.push(post);
  }
  return arrayOfPosts;
};
// eslint-disable-next-line no-unused-vars
const listOfPosts = createArrayOfPosts(AMOUNT_OF_POSTS);
