const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let place = 0;
  for(let i = 0; i < vegetables.length; i++){

  if(vegetables[i][metric] > max) {
    max = vegetables[i][metric];
    place = i
  }
   } return console.log(vegetables[place].submitter);
  }
  
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Rob pat',
    redness: 5,
    plumpness: 9
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)