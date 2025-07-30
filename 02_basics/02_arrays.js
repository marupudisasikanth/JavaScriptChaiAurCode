const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
// marvel_heros.push(dc)
const club = marvel_heros.concat(dc)

console.log(marvel_heros);
console.log(club);

const fruits =['Apple','Banana','Grapes']

const nested_nums=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flat_nums= nested_nums.flat(2)

console.log(flat_nums);

console.log(Array.isArray('Hitesh'))
console.log(Array.from('Hitesh'))
const obj ={nam:'sas'}
console.log(Array.from(obj.nam))


