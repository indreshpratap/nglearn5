class Counter {

    count = 0;


    increment() {
        return ++this.count;
    }

    setStart(start) {
        this.count = start;
    }

   
}

class IDGenerator {
    prefix;

    couter = new Counter();

    constructor(prefix) {
        this.prefix = prefix;
    }

    generate() {
        return this.prefix + (this.couter.increment());
    }

}

class IDGeneratorWithStart {

    idGenerator: IDGenerator;
    
    constructor(prefix, start) {
        console.log('hello here');
        this.idGenerator = new IDGenerator(prefix);
        this.idGenerator.couter.setStart(start);
    }
    generate() {
        return this.idGenerator.generate();
    }
}

// Counter c1 = new Counter();
// console.log(c1.increment());
// console.log(c1.increment());

var gen1 = new IDGenerator('item-');
console.log(gen1.generate());
console.log(gen1.generate());

var genstart = new IDGeneratorWithStart('product-', 10);
console.log(genstart.generate());
console.log(genstart.generate());
console.log(genstart.generate());
console.log(genstart.generate());
