// eslint-disable-next-line no-unused-vars
let checkLength = function (inputString,maxLength)
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

let isPolindrom = function (inputString)
{
  let newString = inputString;

  newString = newString.replaceAll(' ','');
  newString = newString.toLowerCase();

  let reverseString = '';

  for(let i = newString.length - 1; i >= 0; i--)
  {
    let stringSymbol = newString[i];
    reverseString += stringSymbol;
  }
  return reverseString === newString;
};

const onlyPositiveInt = function(inputString)
{
  let newString = inputString;
  newString = newString.replaceAll(' ','');
  let result = '';

  for(let i = 0; i <= newString.length; i++)
  {
    let temporarySymbol = parseInt(newString[i]);
    if(!isNaN(temporarySymbol))
    {
      result += newString[i];
    }
  }

  if(result.length == 0)
  {
    return NaN;
  }

  else
  {
    return parseInt(result);
  }
};
