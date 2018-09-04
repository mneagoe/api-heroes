const heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
  { id: 21, name: 'Boldy Cape Saitama' },
  { id: 22, name: 'Pscycho Cyborg Genos' },
];


function getHeroes(req, res, next) {
  res.json(heroes)
}


module.exports = {
  getHeroes: getHeroes
}
