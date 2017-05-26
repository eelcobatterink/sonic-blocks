* (paul) FIX BLOCKLY BLOCKFACTORY MISSING STORAGE.JS [this is never going to happen, blockfactory is a dump]
- (???) sonicpi.js cleanup
- (???) Optional params to play and sample blocks (and others) beer task - mutators
	- (biko?) chord block - [BIKO requires mutator blocks for list of inputs]
- (lulu) scale block
- (dna) populate samples
* (???) fix function definition for undefined function
* (paul) Cleanup electron code. it's a giant mess at the moment. Especially platform/build-dependent code sections.
* (paul) Find a way to store tribe archive.
* (paul) Build a script to make tribe archive? is there any point to this?
* (paul) fix color hotpatch for mutators.
* (???) add more examples
* (paul) !!! Optimise packaging process so it doesn't include OSX natives on Win and vice versa


TRIBE.ZIP, UNZIP INSIDE ELECTRON_BUILD
https://gist.github.com/anonymous/af1555422fed9c4277312d4b7dd9c39b


2 minutes video steps
a few minutes demo of the product
    1. Steps to run the product
    2. Show the structure of application
    3. Play DNA video of building blocks + generated sound
        - play 70
        - play C
        - play sleep 1
        - play sleep in a live loop (simple node progression)
        - play synth
        - play a sample (demo mutators)
        - introduce function —> encapsulate sample
        - thread
        - pull out a pre-compiled example