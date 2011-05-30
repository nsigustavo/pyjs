String.prototype._split = String.prototype.split
String.prototype.split = function(sep, maxsplit){
    var sep = sep||" ";
    var response = this._split(sep);
    if (!maxsplit)
        return response
    else
        return response.slice(0, maxsplit).concat(response.slice(maxsplit).join(sep))
};

String.prototype.endswith = function(suffix){
    return this.slice(this.length - suffix.length, this.length) == suffix;
}
String.prototype.startswith = function(prefix){
    return this.slice(0, prefix.length) == prefix;
}

String.prototype.lower = String.prototype.toLowerCase;
String.prototype.upper = String.prototype.toUpperCase;

String.prototype.join = function(sequence){
    return sequence.join(this)
};

String.prototype.strip = function() {
    return this.replace( /^\s+|\s+$/g, '' )
};


Array.prototype.append = function(element){
    this.push(element);
}

Array.prototype.extend = function(elements){
    this.push.apply(this, elements);
}

Array.prototype.map = function(callback){
    maped = [];
    for (i in this)
        maped.append(callback.call(this, this[i]))
    return maped;
};
Array.prototype.reduce = function(callback){
    var x=this[0];
    for (var i=1;i<this.length; i++)
        x = callback(x, this[i])
    return x
};

Array.prototype.append = function(element){
    this.push(element);
};

Array.prototype.count = function(element){
    var n=0;
    for (i in this)
        if (this[i] == element) n++;
    return n;
};

Array.prototype.index = function(element){
    for (i in this)
        if (this[i] == element)
            return i;
};
Array.prototype.remove = function(element){
    this.splice(this.index(element), 1)
};

Object.prototype.keys = function(){
    var keys = [];
    for (i in this)
        keys.append(i)
    return keys;
};
Object.prototype.values = function(){
    var keys = [];
    for (i in this)
        keys.append(this[i])
    return keys;
};
Object.prototype.items = function(){
    var keys = [];
    for (i in this)
        keys.append([i,this[i]])
    return keys;
    
}
Object.prototype.clear = function(){
    for (i in this)
        delete this[i]
}
Object.prototype.has_key = Object.prototype.hasOwnProperty;

Object.prototype.get = function(key, default_){
    if (this.has_key(key))
        return this[key]
    else
        return default_
}
