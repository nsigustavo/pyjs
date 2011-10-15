

describe("String", function() {
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
    expect("bár".upper()).toEqual("BÁR");
  });

  it("should return a string which is the concatenation of the strings in the sequence.  The separator between elements is S.", function() {
    expect(" ".join(["Gustavo", "Rezende"])).toEqual("Gustavo Rezende");
  });


  it("should return a copy of the string S with leading and trailing whitespace removed.", function() {
    expect(" foo   ".strip()).toEqual("foo");
  });
})

describe("list", function(){
  it("should append object to end", function(){
    foo = [1, 2];
    foo.append(3)
    expect(foo).toEqual([1, 2, 3]);
  });

  it("should return a list of the results of applying the function to the items of the argument sequence(s).", function(){
    foo = [1, 2];
    bar = foo.map(function(element){return element+1})
    expect(bar).toContain(2);
    expect(bar).toContain(3);
  });

  it("should apply a function of two arguments cumulatively to the items of a sequence.", function(){
    var sum = function(x, y){return x+y}
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
})

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


