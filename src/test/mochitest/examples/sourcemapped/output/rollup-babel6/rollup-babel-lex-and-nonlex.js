var rollupBabel6RollupBabelLexAndNonlex = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function root() {
    function someHelper() {
      console.log("pause here", root, Thing);
    }

    var Thing = function Thing() {
      _classCallCheck(this, Thing);
    };

    someHelper();
  }

  return root;

}());
//# sourceMappingURL=rollup-babel-lex-and-nonlex.js.map
