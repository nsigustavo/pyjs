Object.prototype.keys = function(){
    var keys = [];
    for (var key in this)
		if (this.hasOwnProperty(key))
            keys.append(key);
    return keys;
};

Object.prototype.iterkeys = Object.prototype.keys;

Object.prototype.pop = function(key, default_value){
    if (this.has_key(key)){
        var value = this[key];
        delete this[key]
        return value
    }else{
        return default_value
    }
};

Object.prototype.update = function(dict){
    for (key in dict){
        this[key] = dict[key];
    };
}

Object.prototype.setdefault = function(key, value){
    if (!this.has_key(key)){
        this[key] = value;
    }
};

Object.prototype.popitem = function(){
    var key = this.keys()[0];
    var response = [key, this[key]];
    delete this[key]
    return response
}

Object.prototype.values = function(){
    var keys = [];
    for (var key in this)
        if (this.hasOwnProperty(key))
            keys.append(this[key]);
    return keys;
};
Object.prototype.itervalues = Object.prototype.values
Object.prototype.items = function(){
    var keys = [];
    for (var key in this)
        if (this.hasOwnProperty(key))
            keys.append([key,this[key]]);
    return keys;
    
};

Object.prototype.copy = function(){
    var coping = {};
    for (var key in this)
		if (this.hasOwnProperty(key))
            coping[key] = this[key];
    return coping;
};

Object.prototype.iteritems = Object.items
Object.prototype.clear = function(){
    for (var i in this)
        if (this.hasOwnProperty(i))
            delete this[i];
};
Object.prototype.has_key = Object.prototype.hasOwnProperty;
Object.prototype.get = function(key, default_){
    if (this.has_key(key))
        return this[key];
    else
        return default_;
};

Array.prototype.insert = function(index, object){
    for (var i=0;i<(this.length-index);i++){
        this[this.length-i] = this[this.length-i-1];
    }
    this[index]=object;
};
Array.prototype.pop = function(index){
    var index = (index==undefined)?(this.length-1):index;
    var value = this[index];
    delete this[index];
    for (var i=index;i<this.length-1;i++)
        this[i] = this[i+1]
    this.length = this.length-1;
    return value;
};
Array.prototype.append = function(element){
    this.push(element);
};
Array.prototype.extend = function(elements){
    this.push.apply(this, elements);
};
Array.prototype.map = function(callback){
    maped = [];
    for (var key in this)
        if (this.hasOwnProperty(key))
            maped.append(callback.call(this, this[key]));
    return maped;
};
Array.prototype.reduce = function(callback){
    var x=this[0];
    for (var i=1;i<this.length; i++)
        if (this.hasOwnProperty(i))
            x = callback(x, this[i]);
    return x;
};
Array.prototype.append = function(element){
    this.push(element);
};
Array.prototype.count = function(element){
    var n=0;
    for (var key in this)
        if (this[key] == element) n++;
    return n;
};
Array.prototype.index = function(element){
    for (var key in this)
        if (this[key] == element)
            return key;
};
Array.prototype.remove = function(element){
    this.splice(this.index(element), 1);
};
Array.prototype.each = function(callback){
	for (var i=0;i<this.length; i++){
		callback.call(this, this[i]);
	}
};
Array.prototype.each_with_index = function(callback){
	for (var i=0;i<this.length; i++){
        if (this.hasOwnProperty(key))
    		callback.call(this, i, this[i]);
	}
};

String.prototype._split = String.prototype.split;
String.prototype.split = function(sep, maxsplit){
    sep = sep || " ";
    var response = this._split(sep);
    if (!maxsplit){
        return response;
    }else{
        return response.slice(0, maxsplit).concat(response.slice(maxsplit).join(sep));
	}
};
String.prototype.endswith = function(suffix){
    return this.slice(this.length - suffix.length, this.length) == suffix;
};
String.prototype.startswith = function(prefix){
    return this.slice(0, prefix.length) == prefix;
};
String.prototype.lower = String.prototype.toLowerCase;
String.prototype.upper = String.prototype.toUpperCase;
String.prototype.join = function(sequence){
    return sequence.join(this);
};
String.prototype.strip = function() {
    return this.replace( /^\s+|\s+$/g, '' );
};


True = true;
False = false;
None = undefined;

int = parseInt;
float = parseFloat;
str = String;
abs = Math.abs;


function bool(x){
    if (x.constructor == Array){
        return Boolean(x.length);
    };
    if (x.constructor == Object){
        return Boolean(x.keys().length);
    };
    return Boolean(x);
};

function all(iterable){
    var response = true;
 	for (var i=0;i<iterable.length; i++){
 	    if (!iterable[i])
 	        response = false;
 	}
    return response
}

function any(iterable){
 	for (var i=0;i<iterable.length; i++){
 	    if (iterable[i]) return true
 	}
    return false
}

function apply(callable, args){
    return callable.apply(callable, args)
}

function callable(object){
    return object.constructor === Function;
}

chr = String.fromCharCode;

function cmp(x, y){
    if(x<y) return -1
    if(x==y) return 0
    if(x>y) return 1
}

function delattr(object, attr){
    delete object[attr]
}

function dict(mapping){
    mapping = mapping || {};
    if (mapping.constructor == Array){
        result = {};
        for (var i=0;i<mapping.length;i++)
            result[mapping[i][0]] = mapping[i][1];
        return result;
    }
    return mapping;
}

function dir(object){
    var b=1;
    var keys = [];
    for (var key in (object || window))
            keys.append(key);
    return keys;
}

function enumerate(iterable, n){
    var result = [];
    var n = n || 0;
    for (var i=0; i<iterable.length; i++)
        result.push([i+n, iterable[i]]);
    return result;
}

function filter(func, iterable){
    var result = [];
    for(var i=0; i<iterable.length; i++)
        if (bool(func(iterable[i])))
            result.append(iterable[i]);
    return result;
}

function getattr(object, attr, default_){
    return object.has_key(attr)?object[attr]:default_
}

function globals(){
    return dir(window)
}

function hasattr(object, attr){
    return object.has_key(attr)
}

input = prompt;

function isinstance(object, types){
    types = types.constructor == Array?types:[types]
    return any(types.map(function(type){return object.constructor == type}))
};


function len(object){
    return object.length
};


function map(callable, iterable){
    return iterable.map(callable)
}

function max(iterable, key){
    var result = iterable[0];
    var value = (key)?result[key]:result;
    for(var i=0; i<iterable.length; i++){
        var value_iterable = (key)?iterable[i][key]:iterable[i];
        if (value_iterable>value){
            result = iterable[i];
            value = (key)?result[key]:result;
        }
    }
    return result;
}

function min(iterable, key){
    var result = iterable[0];
    var value = (key)?result[key]:result;
    for(var i=0; i<iterable.length; i++){
        var value_iterable = (key)?iterable[i][key]:iterable[i];
        if (value_iterable<value){
            result = iterable[i];
            value = (key)?result[key]:result;
        }
    }
    return result;
}


pow = Math.pow;
print = console.log;

function range(start, stop, step){
    var n = stop?start:0;
    var f = stop || start;
    var step = step || 1;
    var array = new Array();
    for(var i=0; i<((f-n)/step); i++)
        array[i]=step*i+n;
    return array
}

function reduce(callable, iterable){
    return iterable.reduce(callable)
}

function reversed(iterable){
    var result = new Array();
    for (key in iterable)
        result[key] = iterable[key]
    return result.reverse()
};

round = Math.round;

function setattr(object, attr, value){
    object[attr] = value;
}

function sum(iterable){
    return reduce(function(x, y){return x+y}, iterable) || 0
}


function zip(){
    var result = [];
    var i = 0;
    while(true){
        result[i]=[];
        var stop = false;
        for (var j=0; j<arguments.length; j++){
            result[i].push(arguments[j][i])
            if (len(arguments[j])==i+1){
                stop = true;
            }
        }
        if (stop)
            return result
        i++;
        
    }
}