function doSomething(callback: () => void) {
    callback();
  }
  
  doSomething(() => {
    console.log('Callback function!');
  });
  
  export {};
  