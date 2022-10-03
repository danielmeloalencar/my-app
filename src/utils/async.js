async function atraso (stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
  }

  export {atraso}