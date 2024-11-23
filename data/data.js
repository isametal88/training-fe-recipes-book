const RECIPES = [
  {
    name: "Spaghetti alla Carbonara",
    difficulty: "Media",
    preparation_time: "20 minuti",
    preparation: [
      "Cuocere gli spaghetti.",
      "In una ciotola, mescolare uova e formaggio.",
      "Friggere la pancetta.",
      "Unire tutti gli ingredienti.",
    ],
    ingredients: [
      {
        name: "Spaghetti",
        quantity: "100g",
      },
      {
        name: "Uova",
        quantity: "1",
      },
      {
        name: "Pecorino",
        quantity: "50g",
      },
      {
        name: "Pancetta",
        quantity: "50g",
      },
      {
        name: "Pepe",
        quantity: "q.b.",
      },
    ],
  },
  {
    name: "Pizza Margherita",
    difficulty: "Facile",
    preparation_time: "30 minuti",
    preparation: [
      "Preparare l'impasto.",
      "Stendere la salsa di pomodoro.",
      "Aggiungere mozzarella e basilico.",
      "Cuocere in forno.",
    ],
    ingredients: [
      {
        name: "Farina",
        quantity: "200g",
      },
      {
        name: "Acqua",
        quantity: "100ml",
      },
      {
        name: "Lievito",
        quantity: "5g",
      },
      {
        name: "Sale",
        quantity: "q.b.",
      },
      {
        name: "Salsa di Pomodoro",
        quantity: "100g",
      },
      {
        name: "Mozzarella",
        quantity: "100g",
      },
      {
        name: "Basilico",
        quantity: "q.b.",
      },
    ],
  },
  {
    name: "Pollo al Curry",
    difficulty: "Difficile",
    preparation_time: "45 minuti",
    preparation: [
      "Cuocere il pollo.",
      "Preparare la salsa al curry con le spezie.",
      "Unire il pollo e la salsa.",
      "Cuocere a fuoco basso fino a cottura ultimata.",
    ],
    ingredients: [
      {
        name: "Pollo",
        quantity: "200g",
      },
      {
        name: "Cipolla",
        quantity: "1",
      },
      {
        name: "Aglio",
        quantity: "1 spicchio",
      },
      {
        name: "Zenzero",
        quantity: "10g",
      },
      {
        name: "Spezie",
        quantity: "q.b.",
      },
      {
        name: "Latte di Cocco",
        quantity: "100ml",
      },
      {
        name: "Olio",
        quantity: "q.b.",
      },
    ],
  },
  {
    name: "Insalata Caesar",
    difficulty: "Facile",
    preparation_time: "15 minuti",
    preparation: [
      "Preparare la lattuga.",
      "Aggiungere crostini e parmigiano.",
      "Condire con salsa Caesar.",
    ],
    ingredients: [
      {
        name: "Lattuga",
        quantity: "100g",
      },
      {
        name: "Crostini",
        quantity: "50g",
      },
      {
        name: "Parmigiano",
        quantity: "30g",
      },
      {
        name: "Salsa Caesar",
        quantity: "50ml",
      },
    ],
  },
  {
    name: "Manzo alla Stroganoff",
    difficulty: "Media",
    preparation_time: "40 minuti",
    preparation: [
      "Cuocere il manzo.",
      "Preparare la salsa con panna acida e funghi.",
      "Unire il manzo e la salsa.",
      "Cuocere fino a cottura ultimata.",
    ],
    ingredients: [
      {
        name: "Manzo",
        quantity: "200g",
      },
      {
        name: "Funghi",
        quantity: "100g",
      },
      {
        name: "Cipolla",
        quantity: "1",
      },
      {
        name: "Panna Acida",
        quantity: "100ml",
      },
      {
        name: "Olio",
        quantity: "q.b.",
      },
      {
        name: "Sale",
        quantity: "q.b.",
      },
      {
        name: "Pepe",
        quantity: "q.b.",
      },
    ],
  },
  {
    name: "Verdure Saltate",
    difficulty: "Facile",
    preparation_time: "25 minuti",
    preparation: [
      "Tagliare le verdure.",
      "Saltare in padella con olio e salsa di soia.",
      "Cuocere fino a cottura ultimata.",
    ],
    ingredients: [
      {
        name: "Verdure Miste",
        quantity: "200g",
      },
      {
        name: "Olio",
        quantity: "q.b.",
      },
      {
        name: "Salsa di Soia",
        quantity: "30ml",
      },
    ],
  },
  {
    name: "Crostata al Limone",
    difficulty: "Media",
    preparation_time: "50 minuti",
    preparation: [
      "Preparare la base della crostata.",
      "Preparare la crema al limone.",
      "Versare la crema sulla base.",
      "Cuocere in forno.",
    ],
    ingredients: [
      {
        name: "Farina",
        quantity: "200g",
      },
      {
        name: "Burro",
        quantity: "100g",
      },
      {
        name: "Zucchero",
        quantity: "100g",
      },
      {
        name: "Uova",
        quantity: "2",
      },
      {
        name: "Limoni",
        quantity: "2",
      },
      {
        name: "Latte",
        quantity: "100ml",
      },
    ],
  },
  {
    name: "Torta al Cioccolato",
    difficulty: "Difficile",
    preparation_time: "60 minuti",
    preparation: [
      "Preparare l'impasto della torta.",
      "Cuocere in forno.",
      "Preparare la glassa al cioccolato.",
      "Ricoprire la torta con la glassa.",
    ],
    ingredients: [
      {
        name: "Farina",
        quantity: "200g",
      },
      {
        name: "Zucchero",
        quantity: "150g",
      },
      {
        name: "Uova",
        quantity: "3",
      },
      {
        name: "Burro",
        quantity: "100g",
      },
      {
        name: "Cioccolato",
        quantity: "200g",
      },
      {
        name: "Lievito",
        quantity: "10g",
      },
    ],
  },
];
