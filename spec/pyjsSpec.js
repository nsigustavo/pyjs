
describe("list", function(){
  it("should append object to end", function(){
    foo = [1, 2];
    foo.append(3);
    expect(foo).toEqual([1, 2, 3]);
  });

  it("should return a list of the results of applying the function to the items of the argument sequence(s).", function(){
    foo = [1, 2];
    bar = foo.map(function(element){return element+1;});
    expect(bar).toContain(2);
    expect(bar).toContain(3);
  });

  it("should apply a function of two arguments cumulatively to the items of a sequence.", function(){
    var sum = function(x, y){return x+y;};
    expect([1, 2].reduce(sum)).toEqual(3);
    expect([1, 2, 3, 4].reduce(sum)).toEqual(10);
  });


  it("should return number of occurrences of value.", function() {
    expect([1,2,3,3].count(3)).toEqual(2);
  });

  it("should extend list by appending elements from the iterable.", function(){
    var foo = [1, 2];
    foo.extend([3, 4]);
    expect(foo).toEqual([1, 2, 3, 4]);
  });

  it("should return first index of value.", function(){
    expect([0,1,2,3].index(3)).toEqual('3');//todo:string é sacanagem
  });

  it("should remove first occurrence of value.", function(){
    var list = [5, 3];
    list.remove(5);
    expect(list).toEqual([3]);
  });

});


describe("dict", function(){

  it("should return list of D's keys", function(){
    var D = {1:'one', 2:'two'};
    expect(D.keys()).toContain('1');
    expect(D.keys()).toContain('2');
  });
    
  it("should return list of D's values", function(){
    var D = {1:'one', 2:'two'};
    expect(['one', 'two']).toEqual(D.values());
  });

  it("should return list of D's [key, value] pairs", function(){
    var D = {1:'one', 2:'two'};
    expect(D.items()).toContain(['1','one']);
    expect(D.items()).toContain(['2','two']);
  });

  it("should remove all items from D.", function(){
    var D = {1:'one', 2:'two'};
    D.clear();
    expect(D).toEqual({});
  });

  it("D.get(k[,d]) -> D[k] if k in D, else d.  d defaults to None.", function(){
    var D = {1:'one', 2:'two'};
    expect(D.get(1)).toEqual('one');
    expect(D.get(2, 'default')).toEqual('two');
    expect(D.get(3, 'default')).toEqual('default');
  });

  it("D.get(k[,d]) -> D[k] if k in D, else d.  d defaults to None.", function(){
    var D = {1:'one', 2:'two'};
    expect(D.get(1)).toEqual('one');
    expect(D.get(2, 'default')).toEqual('two');
    expect(D.get(3, 'default')).toEqual('default');
  });

});

describe('bool', function(){

    it("The builtins True and False are the only two instances of the class Boolean", function(){
        expect(bool(true).constructor).toEqual(Boolean);
        expect(bool(false).constructor).toEqual(Boolean);
    });

    it("The builtins True and False are the only two alias of the class Boolean", function(){
        expect(True).toEqual(true);
        expect(False).toEqual(false);
    });

    it("Returns True when the argument x is true, False otherwise.", function(){
        expect(bool(true)).toEqual(true);
        expect(bool(false)).toEqual(false);
    });

    it("Returns True when the argument x is integer != 0", function(){
        expect(bool(1)).toEqual(true);
        expect(bool(-1)).toEqual(true);
    });

    it("Returns False when the argument x is 0", function(){
        expect(bool(0)).toEqual(false);
    });

    it("Returns False when the argument x is 0", function(){
        expect(bool(0)).toEqual(false);
    });

    it("Returns False when the argument x is empty string", function(){
        expect(bool('')).toEqual(false);
    });

    it("Returns True when the argument x not is empty string", function(){
        expect(bool('foo')).toEqual(true);
    });

    it("Returns True when the argument x not is empty Array", function(){
        expect(bool([0,1,2,3])).toEqual(true);
    });

    it("Returns False when the argument x is empty Array", function(){
        expect(bool([])).toEqual(false);
    });

    it("Returns Fasle when the argument x is empty Dict", function(){
        expect(bool({})).toEqual(false);
    });

    it("Returns True when the argument x not is empty Dict", function(){
        expect(bool({1:1})).toEqual(true);
    });

    it("Returns True when the argument x is Object", function(){
        expect(bool(function(){})).toEqual(true);
    });

});


describe("None", function(){

    it("The builtin None is the only alias of the undefined", function(){
      expect(None).toEqual(undefined);
    });

});


describe("int", function(){

    it("The builtin int is the only instances of the class Boolean", function(){
      expect(int(1).constructor).toEqual(Number);
    });

    it("Convert a number to an integer", function(){
      expect(int(1.1)).toEqual(1);
    });

    it("Convert a String to an integer", function(){
      expect(int('1')).toEqual(1);
    });

});

describe("str", function() {

    it("should return a list of the words in the string S, using sep as the delimiter string.", function() {
        expect("foo bar".split(" ")).toEqual(["foo", "bar"]);
    });

    it("If maxsplit is given, at most maxsplit splits are done.", function() {
        expect("foo bar foo".split(" ", 1)).toEqual(["foo", "bar foo"]);
    });

    it("If maxsplit is given, at most maxsplit splits are done.", function() {
        expect("foo bar foo".split(" ", 1)).toEqual(["foo", "bar foo"]);
    });

    it("If sep is not specified or is None, any whitespace string is a separator and empty strings are removed from the result.", function() {
        expect("foo bar foo".split()).toEqual(["foo", "bar", "foo"]);
    });

    it("should return true if S ends with the specified suffix, False otherwise.", function() {
        expect("foo bar foo".endswith('foo')).toEqual(true);
        expect("foo bar foo".endswith('bar')).toEqual(false);
    });

    it("should return true if S starts with the specified prefix, False otherwise.", function() {
        expect("foo bar foo".startswith('foo')).toEqual(true);
        expect("foo bar foo".startswith('bar')).toEqual(false);
    });

    it("should return a copy of the string S converted to lowercase.", function() {
        expect("FOO".lower()).toEqual("foo");
    });

    it("should return a copy of the string S converted to uppercase.", function() {
        expect("foo".upper()).toEqual("FOO");
    });

    it("should return a string which is the concatenation of the strings in the sequence.  The separator between elements is S.", function() {
        expect(" ".join(["Gustavo", "Rezende"])).toEqual("Gustavo Rezende");
    });

    it("should return a copy of the string S with leading and trailing whitespace removed.", function() {
        expect(" foo   ".strip()).toEqual("foo");
    });

    it("should return a nice string representation of the object.", function() {
        expect(str(1)).toEqual("1");
    });
  
});


describe("abs", function(){

    it("Return the absolute value of the argument.", function(){
       expect(abs(-1.2)).toEqual(1.2); 
    });

});


describe("all", function(){

    it("Return True if bool(x) is True for all values x in the iterable.", function(){
        expect(all([true, true, 1, true])).toEqual(true);
    });

    it("Return False if bool(x) is False for one values x in the iterable.", function(){
        expect(all([true, false, 1, true])).toEqual(false);
    });

});


describe("any", function(){

    it("Return True if bool(x) is True for any x in the iterable.", function(){
        expect(any([false, 0, 1, true])).toEqual(true);
    });

    it("Return False if bool(x) is False for all values x in the iterable.", function(){
        expect(any([false, false, 0, false])).toEqual(false);
    });

});


describe("apply", function(){

    it("Call a callable object with positional arguments taken from the tuple args.", function(){
        var test = function(a, b){return a+b;};
        expect(apply(test, [1, 1])).toEqual(2);
        expect(apply(test, [1, 2])).toEqual(3);
    });

});


describe("callable", function(){

    it("Return whether the object is callable", function(){
        expect(callable(function(){})).toEqual(true);
    });

    it("Return whether the object not is callable", function(){
        expect(callable({})).toEqual(false);
    });

});


describe("chr", function(){

    it("Return a string of one character with ordinal i; 0 <= i < 256.", function(){
        expect(chr(85)).toEqual("U");
    });

});


describe("cmp", function(){

    it("Return negative if x<y", function(){
        expect(cmp(1, 3)).toEqual(-1);
    });

    it("Return zero if x==y", function(){
        expect(cmp(1, 1)).toEqual(0);
    });

    it("Return positive if x>y", function(){
        expect(cmp(2, 1)).toEqual(1);
    });

});


describe("delattr", function(){

    it("Delete a named attribute on an object; delattr(x, 'y') is equivalent to delete x['y']", function(){
        var foo={"bar":23};
        delattr(foo, 'bar');
        expect(foo.bar).toEqual(undefined);
    });

});


describe("dict", function(){

    it("dict() -> new empty dictionary.", function(){
        expect(dict()).toEqual({});  
    });

    it("dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs.", function(){
        expect(dict({1:1})).toEqual({1:1});
    });

    it("dict(seq) -> new dictionary initialized as if via: d = {} for(k, v in seq){d[k] = v}", function(){
        expect(dict([[1,1]])).toEqual({1:1});
    });

});


describe("dir", function(){

    it("return an alphabetized list of names comprising (some of) the attributes of the given object, and of attributes reachable from it.", function(){
        expect(dir({})).toEqual([ 'keys', 'values', 'items', 'clear', 'has_key', 'get']);
    });

    it("If called without an argument, return the names in the current scope.", function(){
        expect(dir()).toEqual(dir(window));  
    });

});


describe("enumerate", function(){

    it("enumerate(iterable) -> iterator for index, value of iterable", function(){
        expect(enumerate(["zero", "one"])).toEqual([[0, "zero"], [1, "one"]]);
    });

    it("The enumerate object yields pairs containing a count (from zero) and a value yielded by the iterable argument.", function(){
        expect(enumerate(["zero", "one"], 1)).toEqual([[1, "zero"], [2, "one"]]);
    });

});


describe("filter", function(){

    it("Return those items of sequence for which function(item) is true.", function(){
        var odd = function(x){return x%2;};
        expect(filter(odd, [1,2,3,4])).toEqual([1,3]);
    });

});


describe("float", function(){

    it("Convert a string or number to a floating point number", function(){
        expect(float(1)).toEqual(1.0);
    });

});

// TODO: format  -  format(value[, format_spec]) -> string
// frozenset  -  frozenset(iterable) --> frozenset object
// Build an immutable unordered collection of unique elements.


describe("getattr", function(){

    it("Get a named attribute from an object; getattr(x, 'y') is equivalent to x.y.", function(){
        expect(getattr({1:2}, 1)).toEqual(2);
    });

    it("Get a named attribute from an object; When a default argument is given, it is returned when the attribute doesn't exist", function(){
        expect(getattr({1:2}, 'nop', "doesn't exist")).toEqual("doesn't exist");
    });

});


describe("globals", function(){

    it("Return the dictionary containing the current scope's global variables.", function(){
        expect(globals()).toEqual(dir(window));
    });

});


describe("hasattr", function(){

    it("Return whether the object has an attribute with the given name.", function(){
        expect(hasattr({1:1}, 1)).toEqual(true);
        expect(hasattr({1:1}, 2)).toEqual(false);
    });

});


describe("input", function(){

   it("input is alias to prompt", function(){
       expect(input).toEqual(prompt);
   });

});

describe("isinstance", function(){

   it("Return whether an object is an instance of a constructors.", function(){
       expect(isinstance("", String)).toEqual(true);
   });

   it("Return whether an object is an instance of one or more constructors.", function(){
       var Test = function(){};
       var test = new Test();
       expect(isinstance(test, [String, Test])).toEqual(true);
   });

   it("Return false whether an object not is an instance of a constructors.", function(){
       expect(isinstance("", Number)).toEqual(false);
   });

});


describe("len", function(){

   it("Return the number of items of a sequence or mapping.", function(){
       expect(len([1,2])).toEqual(2);
   });

});


describe("len", function(){

   it("Return the number of items of a sequence or mapping.", function(){
       expect(len([1,2])).toEqual(2);
   });

});


describe("map", function(){

    it("should return a list of the results of applying the function to the items of the argument sequence(s).", function(){
        foo = [1, 2];
        bar = map(function(element){return element+1;}, foo);
        expect(bar).toEqual([2, 3]);
    });

});


describe("max", function(){

    it("With a single iterable argument, return its largest item.", function(){
        expect(max([1,5,2])).toEqual(5);
    });

    it("With two arguments, return the largest argument.", function(){
        expect(max([{'foo':1},{'foo':5},{'foo':3}], 'foo')).toEqual({'foo':5});
    });

});


describe("min", function(){

    it("With a single iterable argument, return its smallest item.", function(){
        expect(min([1,0,2])).toEqual(0);
    });

    it("With two arguments, return the smallest argument.", function(){
        expect(min([{'foo':1},{'foo':0},{'foo':3}], 'foo')).toEqual({'foo':0});
    });

});


describe("pow", function(){
   it("With two arguments, equivalent to x**y", function(){
       expect(pow(2, 2)).toEqual(4);
   });
});


describe("print", function(){

   it("print alias to console.log", function(){
       expect(print).toEqual(console.log);
   });

});


describe("range", function(){

   it("Return a list containing an arithmetic progression of integers.", function(){
       expect(range(10)).toEqual([0,1,2,3,4,5,6,7,8,9]);
   });
   it("range(i, j) returns [i, i+1, i+2, ..., j-1]; start (!) defaults to 0.", function(){
       expect(range(3, 10)).toEqual([3,4,5,6,7,8,9]);
   });
   it(" step is given, it specifies the increment (or decrement).", function(){
       expect(range(3, 10, 2)).toEqual([3, 5, 7, 9]);
   });

});


describe("range", function(){

   it("Apply a function of two arguments cumulatively to the items of a sequence, from left to right, so as to reduce the sequence to a single value.", function(){
        var sum = function(x, y){return x+y;};
        expect(reduce(sum, [1, 2])).toEqual(3);
        expect(reduce(sum, [1, 2, 3, 4])).toEqual(10);
   });

});


describe("reversed", function(){

   it("Return a reverse iterator", function(){
        var iterator = [1, 2, 4];
        expect(reversed(iterator)).toEqual([4,2,1]);
        expect(iterator).toEqual([1, 2, 4]);
   });

});


describe("round", function(){

   it("round alias to Math.round", function(){
        expect(round).toEqual(Math.round);
   });

});

// set  -  set(iterable) --> set object
// Build an unordered collection of unique elements.


describe("setattr", function(){

    it("Set a named attribute on an object; setattr(x, 'y', v) is equivalent to ``x.y = v''.", function(){
        var foo = {};
        setattr(foo, 'name', 'value');
        expect(foo.name).toEqual('value');
    });

});


describe("sum", function(){

    it("Returns the sum of a sequence of numbers plus the value", function(){
        expect(sum([1,2,3,4])).toEqual(10);
    });

});


describe("zip", function(){

    it("Return a list of tuples, where each tuple contains the i-th element from each of the argument sequences.", function(){
        expect(zip([1,2,3], ['one', 'two', 'tree'])).toEqual([[1, 'one'], [2, 'two'], [3, 'tree']]);
    });

    it("returned list is truncated in length to the length of the shortest argument sequence.", function(){
        expect(zip([1,2], ['one', 'two', 'tree'])).toEqual([[1, 'one'], [2, 'two']]);
    });

});
