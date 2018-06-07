const { performance } = require('perf_hooks');
const nullsafe = require('nullsafe');
const _ = require('lodash');
const R = require('ramda');
const Benchmark = require('benchmark');

const pet = {
  "biggest": {
    "kitty": {
      "name": "Missy"
    }
  }
};
const lodashPath   = 'biggest.kitty.name';
const ramdaPath    = ['biggest', 'kitty', 'name'];
const nullsafePath = ['biggest', 'kitty', 'name'];

const suite = new Benchmark.Suite;
// test
suite.add('Lodash', function() {
  _.get(pet, lodashPath);
})
.add('Ramda', function() {
  R.path(ramdaPath, pet);
})
.add('Nullsafe', function() {
  nullsafe(pet, nullsafePath).value;
})
// listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run
.run({ 'async': true });
