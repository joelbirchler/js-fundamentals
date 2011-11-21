var Gilberto = {
  //
  // Mammal
  //
  make_mammal: function(spec, obj) {
    var that = obj || {};

    that.get_name = function() {
      return spec.name;
    }

    that.says = function() {
      return spec.saying || '';
    }

    return that;
  },


  //
  // Cat
  //
  make_cat: function(spec, obj) {
    var that = Gilberto.make_mammal(spec, obj);

    that.meow = function() {
      return "meow."
    }

    return that;
  },

  //
  // Super-powered mixin
  //
  has_super_powers: function(obj) {
    obj.kapow = function () {
      return "ka-POW!";
    }

    return obj;
  },


  //
  // Super cat
  //
  make_super_cat: function(spec, obj) {
    var that = Gilberto.make_cat(spec, obj);
    that = Gilberto.has_super_powers(that);

    return that;
  }
}