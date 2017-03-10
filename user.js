var user = {
  name: 'nathan',
  location: 'slc',
  occupations: ['analyst','product manager'],
  hobbies: [
    {
      name: 'internet',
      type: 'lazy'
    },
    {
      name: 'working out',
      type: 'sport'
    },
    {
      name: 'biking',
      type: 'cycling'
    }
  ],
  family: [
    {
      name: 'rick',
      relation: 'father',
      gender: 'male'
    },
    {
      name: 'laura',
      relation: 'mother',
      gender: 'female'
    },{
      name: 'conner',
      relation: 'brother' ,
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'olive garden',
      type: 'sitdown',
      rating: 3
    },
    {
      name: 'in-n-out',
      type: 'fast food',
      rating: 4
    },
    {
      name: 'melting pot',
      type: 'fancy',
      rating: 5
    }
  ]
};

module.exports = user;
