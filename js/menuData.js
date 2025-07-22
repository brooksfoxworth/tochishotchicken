/**
 * Menu Data Configuration for Tochi's Hot Chicken
 * Nashville-Style Hot Chicken in Myrtle Beach
 */
const MenuData = {
  // Heat Levels
  heatLevels: [
    { 
      id: 'no-spice', 
      name: 'No Spice', 
      description: 'Mild and flavorful',
      scoville: '0 SHU'
    },
    { 
      id: 'mild', 
      name: 'Mild', 
      description: 'A little kick',
      scoville: '1,000-2,500 SHU'
    },
    { 
      id: 'medium', 
      name: 'Medium', 
      description: 'Noticeable heat, but not overwhelming',
      scoville: '2,500-10,000 SHU',
      popular: true
    },
    { 
      id: 'hot', 
      name: 'Hot', 
      description: 'For spice lovers',
      scoville: '10,000-25,000 SHU'
    },
    { 
      id: 'nashville-hot', 
      name: 'Nashville Hot', 
      description: 'Traditional Nashville-style heat',
      scoville: '25,000-50,000 SHU',
      warning: 'Very hot!'
    },
    { 
      id: 'extreme', 
      name: 'Extreme', 
      description: 'For true heat seekers only',
      scoville: '50,000-100,000 SHU',
      warning: 'Extremely hot! Sign a waiver required.'
    }
  ],

  // Main Dishes
  combos: [
    {
      id: 'tochis-1',
      name: 'Tochi\'s #1',
      description: 'Two Tenders with Fries\nServed with sliced bread, pickles and Tochi sauce.',
      price: 11.99,
      popular: true,
      addons: [
        { name: 'Add Tender', price: 4.69 }
      ]
    },
    {
      id: 'tochis-2',
      name: 'Tochi\'s #2',
      description: 'Two Sliders with Fries\nServed with coleslaw, pickles and Tochi sauce.',
      price: 13.99,
      popular: true,
      addons: [
        { name: 'Add Tender', price: 4.69 },
        { name: 'Add Cheese (per slider)', price: 0.99 }
      ]
    },
    {
      id: 'tochis-3',
      name: 'Tochi\'s #3',
      description: 'One Tender + 1 Slider w/fries\nTender served with sliced bread, pickles and Tochi Sauce.\nSlider served with coleslaw, pickles and Tochi Sauce.',
      price: 12.99,
      addons: [
        { name: 'Add Tender', price: 4.69 },
        { name: 'Add Slider', price: 6.69 },
        { name: 'Add Cheese (per slider)', price: 0.99 }
      ]
    },
    {
      id: 'tochis-4',
      name: 'Tochi\'s #4',
      description: 'One Slider with Fries\nServed with coleslaw, pickles and Tochi sauce.',
      price: 9.99,
      addons: [
        { name: 'Add Cheese (per slider)', price: 0.99 }
      ]
    }
  ],

  // Sides
  sides: [
    {
      id: 'fries',
      name: 'Fries',
      description: 'Crispy golden fries',
      price: 3.49
    },
    {
      id: 'cheese-fries',
      name: 'Cheese Fries',
      description: 'Fries smothered in melted cheese',
      price: 4.99,
      popular: true
    },
    {
      id: 'mac-cheese',
      name: 'Mac & Cheese',
      description: 'Creamy macaroni and cheese',
      price: 3.49,
      popular: true
    },
    {
      id: 'coleslaw',
      name: 'Coleslaw',
      description: 'Classic creamy coleslaw',
      price: 3.49
    },
    {
      id: 'single-slider',
      name: 'Single Slider',
      description: 'One slider with coleslaw, pickles and Tochi sauce',
      price: 6.69
    },
    {
      id: 'single-tender',
      name: 'Single Tender',
      description: 'One tender with sliced bread, pickles and Tochi sauce',
      price: 4.69
    },
    {
      id: 'tochis-ranch',
      name: 'Tochi\'s Ranch',
      description: 'House-made ranch dressing',
      price: 0.50
    },
    {
      id: 'tochis-sauce',
      name: 'Tochi Sauce',
      description: 'Signature Tochi\'s hot sauce',
      price: 0.50
    }
  ],

  // Kids Menu
  kids: [
    {
      id: 'kids-tenders',
      name: 'Chicken Tenders',
      description: 'Two chicken tenders with one side',
      price: 6.99,
      image: 'images/menu/kids-tenders.jpg',
      heatLevels: ['Mild', 'No Spice']
    },
    {
      id: 'kids-grilled-cheese',
      name: 'Grilled Cheese',
      description: 'Classic grilled cheese with one side',
      price: 5.99,
      image: 'images/menu/grilled-cheese.jpg'
    },
    {
      id: 'kids-mac',
      name: 'Mac & Cheese',
      description: 'Classic macaroni and cheese',
      price: 5.99,
      image: 'images/menu/kids-mac.jpg'
    }
  ],

  // Drinks
  drinks: [
    {
      id: 'soft-drink',
      name: 'Soft Drink (REG)',
      description: 'Fountain drink - free refills',
      price: 3.99,
      popular: true
    },
    {
      id: 'bottled-water',
      name: 'Bottled Water',
      description: 'Purified bottled water',
      price: 3.99
    },
    {
      id: 'unsweet-tea',
      name: 'Unsweet Tea',
      description: 'Freshly brewed unsweetened tea',
      price: 2.99
    },
    {
      id: 'soda',
      name: 'Fountain Soda',
      description: 'Coca-Cola products',
      price: 2.99
    },
    {
      id: 'lemonade',
      name: 'Fresh Lemonade',
      description: 'Homemade lemonade',
      price: 3.49,
      popular: true
    }
  ]
};

// Export the MenuData object for use in other modules
export { MenuData };
