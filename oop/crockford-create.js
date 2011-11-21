// Douglas Crockford (senior JavaScript architect at Yahoo!) uses this bit of sugar...

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
newObject = Object.create(oldObject);