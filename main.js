let name = 'Victoria';
    const age = 19;
    let logic = true; // false
    console.log('Здравствуй, путник.', { name, age, logic });

    let apple = { 
      color: "Red", 
      size: "Large", 
      type: "Macintoch", 
      year: 1998, 
    } 
     
    let apple2 = apple; 
    let appleSize = apple.size; 
    apple2.size = "Small"; 
     
    console.log('-> apple =', appleSize, apple.size);

    const fruits = ['apple', 'orange', 'pear', 'grape', 'kiwi'];

    console.log ('-> fruits =', fruits); 
    console.log('-> fruits 1 =', fruits[0]);
    console.log('-> fruits.length =', fruits.length);

    for (let index = 0; index < fruits.length; index++) {
      outputFruitsInDocument("You have a fruit: ", index);
    }
    function outputFruitsInDocument(prefix, index) {
       const fruit = fruits[index];
       const text = prefix + fruit;
      console.log(text);
      const node = document.createElement('div'); 
     node.innerText = text;
      document.body.appendChild(node);
    }