export function assignTokenId () {
    //Generates random hex code to create unique ID
    const genRanHex = (size) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");

    //const docRef = doc(db, "collection", "document");
    //const 
    let userCode = genRanHex(6);
    return userCode;
    // console.log(genRanHex(8));

  };

