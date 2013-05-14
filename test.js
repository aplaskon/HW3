
var kitten = createKitten('April', 'I wanna live');

kitten.name; // 'April'

kitten.die(); // logs 'I wanna live'

var stupidKitten = createKitten('Nyasha', 'meow');

bag.put(kitten);

bag.put(stupidKitten);

bag.getKitten('April') === kitten; // true

bag.getKitten('notExistedKitten') === null; // true

bag.sink(); // logs 'I wanna live' 'meow'
