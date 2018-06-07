# Nullsafe Benchmark
Benchmark for the [Nullsafe libary](https://github.com/jkeam/nullsafe).

## Performance Numbers

* Lodash v4.17.10
* Ramda v0.25.0
* Nullsafe v2.0.0

Run on:
* MacBook Pro (15-inch, 2016)
* macOS High Sierra 10.13.4 (17E202)
* Processor 2.6 GHz Intel Core i7
* Memory 16 GB 2133 MHz LPDDR3

Run 1
Lodash#get x 4,441,751 ops/sec ±1.81% (86 runs sampled)
Ramda#path x 20,833,571 ops/sec ±0.99% (88 runs sampled)
Nullsafe#value x 20,645,980 ops/sec ±1.57% (88 runs sampled)
Nullsafe#rawValue x 21,255,783 ops/sec ±0.44% (87 runs sampled)
Fastest is Nullsafe#rawValue,Nullsafe#value

Run 2
Lodash#get x 4,682,527 ops/sec ±0.62% (87 runs sampled)
Ramda#path x 21,520,063 ops/sec ±0.38% (90 runs sampled)
Nullsafe#value x 21,259,640 ops/sec ±0.47% (87 runs sampled)
Nullsafe#rawValue x 21,387,415 ops/sec ±0.42% (88 runs sampled)
Fastest is Ramda#path,Nullsafe#rawValue

Run 3
Lodash#get x 4,874,402 ops/sec ±0.50% (90 runs sampled)
Ramda#path x 22,170,331 ops/sec ±0.99% (90 runs sampled)
Nullsafe#value x 22,024,121 ops/sec ±0.30% (94 runs sampled)
Nullsafe#rawValue x 21,847,978 ops/sec ±0.45% (91 runs sampled)
Fastest is Nullsafe#value

Run 4
Lodash#get x 4,742,099 ops/sec ±1.35% (89 runs sampled)
Ramda#path x 20,826,201 ops/sec ±0.87% (87 runs sampled)
Nullsafe#value x 21,104,319 ops/sec ±0.46% (91 runs sampled)
Nullsafe#rawValue x 21,083,639 ops/sec ±0.59% (87 runs sampled)
Fastest is Nullsafe#value,Nullsafe#rawValue,Ramda#path

Run 5
Lodash#get x 4,493,394 ops/sec ±1.40% (87 runs sampled)
Ramda#path x 20,715,977 ops/sec ±1.12% (88 runs sampled)
Nullsafe#value x 20,703,644 ops/sec ±1.23% (85 runs sampled)
Nullsafe#rawValue x 20,277,368 ops/sec ±1.89% (86 runs sampled)
Fastest is Ramda#path,Nullsafe#value,Nullsafe#rawValue
