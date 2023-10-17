// eslint-disable-next-line no-unused-vars
const checkLength = function (inputString,maxLength)
{
  if (inputString.length <= maxLength)
  {
    return true;
  }
  else
  {
    return false;
  }
};

// eslint-disable-next-line no-unused-vars
const isPolindrom = function (inputString)
{
  let newString = inputString;

  newString = newString.replaceAll(' ','');
  newString = newString.toLowerCase();

  let reverseString = '';

  for(let i = newString.length - 1; i >= 0; i--)
  {
    const stringSymbol = newString[i];
    reverseString += stringSymbol;
  }
  return reverseString === newString;
};

// eslint-disable-next-line no-unused-vars
const onlyPositiveInt = function(inputString)
{
  let newString = inputString;
  newString = newString.replaceAll(' ','');
  let result = '';

  for(let i = 0; i <= newString.length; i++)
  {
    const temporarySymbol = parseInt(newString[i], 10);
    if(!isNaN(temporarySymbol))
    {
      result += newString[i];
    }
  }

  if(result.length === 0)
  {
    return NaN;
  }

  else
  {
    return parseInt(result, 10);
  }
};
