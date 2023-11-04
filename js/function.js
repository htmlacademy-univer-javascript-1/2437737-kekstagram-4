const convertToMinutes = (inputString) => {
  inputString = inputString.split(':');
  const minutes = Number(inputString[0])*60 + Number(inputString[1]);
  return minutes;
};

// eslint-disable-next-line no-unused-vars
const meetIsPossible  = (WORK_DAY_START , WORK_DAY_END, MEET_START, TIME_OF_MEET) =>
{
  WORK_DAY_START = convertToMinutes(WORK_DAY_START);
  WORK_DAY_END = convertToMinutes(WORK_DAY_END);
  MEET_START = convertToMinutes(MEET_START);
  if ((MEET_START - WORK_DAY_START ) >= 0)
  {
    if ( (WORK_DAY_END - MEET_START) >= TIME_OF_MEET ){return true;}
    else{return false;}
  }
  else{return false;}
};
