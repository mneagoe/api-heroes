let heroes = [
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
  res.json(heroes);
}

function getHero(req, res, next) {
  const heroId = parseInt(req.params.id);
  const hero = heroes.filter(hero => hero.id === heroId)[0];
  res.json(hero);
}

function addHero(req, res, next) {
  let hero = req.body;
  hero.id = (heroes[heroes.length - 1].id) + 1;
  heroes.push(hero);
  res.json(hero);
}

function updateHero(req, res, next) {
  const heroData = req.body;
  heroes.filter(hero => hero.id === heroData.id)
    .map(hero => hero.name = heroData.name);

  res.json(heroData);
}

function deleteHero(req, res, next) {
  const heroId = parseInt(req.params.id);
  heroes = heroes.filter(hero => hero.id !== heroId);
}


module.exports = {
  getHeroes: getHeroes,
  getHero: getHero,
  addHero: addHero,
  updateHero: updateHero,
  deleteHero: deleteHero
}
