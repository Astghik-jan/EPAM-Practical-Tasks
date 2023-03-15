//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error('let must be declared before use');
  } else {
    console.error(error);
  }
}

  try {
    const result = 1/0;
    if (isNaN(result)) {
      throw new Error('cannot be divided by zero');
    }
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  

