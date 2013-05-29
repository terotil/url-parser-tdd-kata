URL Parser TDD Kata
===================

Starting point for
[TDD](http://en.wikipedia.org/wiki/Test-driven_development)
[Code Kata](http://en.wikipedia.org/wiki/Kata_\(programming\)).

Dependencies
------------

* Node.js >= 0.10 http://nodejs.org/
* Mocha (install globally for convenience) `sudo npm install -g mocha`
* This repo `git clone https://github.com/epeli/url-parser-tdd-kata`

The Kata
--------

1. Tell Mocha to watch and run tests after every change `mocha -w test.js`
2. Aim for green!

Once done with the pre-written tests, just continue on your own

1. Pick a feature
2. Write a test for main usecase
3. Write just enough implementation to pass the test
4. If needed, refactor the implementation for readability while keeping tests green
5. Do you trust the implemetation to handle the whole feature?
   * No: Write a test for an aspect you don't trust and goto step 3.
   * Yes: Goto step 1.

With 2+ people participating, take turns.  One drives and others act
as observers ([pairing](http://en.wikipedia.org/wiki/Pair_programming)
with a gang).  Driver first greens tests then writes a new test and
leaves the failing test for next driver.

Origin
------

This "Kata template" is influenced by

* https://github.com/epeli/streams-dojo
* https://github.com/tkareine/game_of_life
* https://gist.github.com/zouppen/5574547
