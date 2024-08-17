function counter() {
    let count = 0;
  
    return {
      increment: () => {
        count++;
      },
      getCount: () => {
        return count;
      },
    };
  }