const obj = { name: 'John' };
Object.freeze(obj);
obj.name = 'Jane'; // Error in strict mode or silently fails in non-strict mode
