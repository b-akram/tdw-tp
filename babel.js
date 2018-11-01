"use strict";

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Formation = (function() {
  function Formation(name, volume, price, tax) {
    var currency =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "$";

    _classCallCheck(this, Formation);

    if (!name) throw new Error("Empty formation");
    price = parseFloat(price);
    this.name = name;
    this.price = price;
    this.volume = volume;
    this.tax = parseFloat(tax);
    this.ttc = price + (tax * this.price) / 100;
    this.currency = currency;
  }

  _createClass(Formation, [
    {
      key: "valueOf",
      value: function valueOf() {
        return name;
      }
    },
    {
      key: "equals",
      value: function equals(other) {
        return this === other;
      }
    }
  ]);

  return Formation;
})();

Formation.compareTo = function(x, y) {
  return undefined > other ? 1 : undefined == other ? 0 : -1;
};

var FormationsHolder = (function() {
  function FormationsHolder(adder) {
    for (
      var _len = arguments.length,
        formationsArr = Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      formationsArr[_key - 1] = arguments[_key];
    }

    _classCallCheck(this, FormationsHolder);

    this.formations = [];
    this.adder = adder;
    formationsArr = FormationsHolder.map(formationsArr);
    this.addFormations.apply(this, _toConsumableArray(formationsArr));
  }

  _createClass(FormationsHolder, [
    {
      key: "addFormations",
      value: function addFormations() {
        for (
          var _len2 = arguments.length, formations = Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          formations[_key2] = arguments[_key2];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (
            var _iterator = formations[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
          ) {
            var f = _step.value;

            this.formations[this.formations.length] = f;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (
                var _iterator2 = this.adder[Symbol.iterator](), _step2;
                !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                  .done);
                _iteratorNormalCompletion2 = true
              ) {
                var a = _step2.value;

                a.add(f);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    },
    {
      key: "contains",
      value: function contains(formation) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (
            var _iterator3 = this.formations[Symbol.iterator](), _step3;
            !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
            _iteratorNormalCompletion3 = true
          ) {
            var f = _step3.value;

            if (formation.equals(f)) return f;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return null;
      }
    }
  ]);

  return FormationsHolder;
})();

FormationsHolder.map = function(formations) {
  return formations.map(function(f) {
    return new Formation(f.name, f.volume, f.price, f.tax);
  });
};

var RowAdder = (function() {
  function RowAdder(selector) {
    _classCallCheck(this, RowAdder);

    this.selector = selector;
  }

  _createClass(RowAdder, [
    {
      key: "add",
      value: function add(formation) {
        var row =
          "\n            <tr>\n            <td >" +
          formation.name +
          " </td>\n            <td >" +
          formation.volume +
          " </td>\n            <td>" +
          formation.price +
          '$ </td>\n            <td class="tax">' +
          formation.tax +
          "%</td>\n            <td>" +
          formation.ttc +
          "$</td>\n        </tr>\n            ";
        $(this.selector).append(row);
      }
    }
  ]);

  return RowAdder;
})();

var MenuAdder = (function() {
  function MenuAdder() {
    _classCallCheck(this, MenuAdder);
  }

  _createClass(MenuAdder, [
    {
      key: "add",
      value: function add(formation) {
        var element =
          '\n            <li class="formation" >\n            <h2><a class="lien" href="bureutuque">' +
          formation.name +
          " </a>\n            </h2>\n            <ol>\n                <li>word</li>\n                <li>excel</li>\n                <li>spss</li>\n            </ol>\n        </li>\n        ";
        $(".formations").append(element);
      }
    }
  ]);

  return MenuAdder;
})();

menuAdder = new MenuAdder();
rowAdder = new RowAdder(".formations-table tbody");
addedformations = [];
savedItems = [];
var formations = void 0;
function json() {
  $.getJSON("formations.json", function(res, status, obj) {
    var _formations;

    console.log("loading formations ....");
    $(".formations-table tbody").html("");
    $(".formations").html("");
    formations = new (Function.prototype.bind.apply(
      FormationsHolder,
      [null].concat(
        [[menuAdder, rowAdder]],
        _toConsumableArray(FormationsHolder.map(res.formations))
      )
    ))();
    (_formations = formations).addFormations.apply(
      _formations,
      _toConsumableArray(addedformations)
    );
    setTimeout(json, 5000);
  });
}

{
  json();
  $(".add-formation .col").click(function(ev) {
    $(".add-formation form ,.add-formation .line").toggle();
  });
  $("#add-formation").click(function(event) {
    var name = $("#formation-to-add")
      .val()
      .trim();
    var volume =
      $("#volume")
        .val()
        .trim() || "0";
    var price =
      $("#prix")
        .val()
        .trim() || "0";
    var tax =
      $("#tax")
        .val()
        .trim() || "0";
    var formation = new Formation(name, volume, price, tax);
    if (name) {
      formations.addFormations(formation);
      addedformations.push(formation);
      event.preventDefault();
    }
  });
  $("input#formation-to-add").on("change", function() {
    $(this).val(
      $(this)
        .val()
        .trim()
    );
  });
  $("input#add-file-formation").on("click", function(event) {
    var url = $("#url").val();
    if (url) event.preventDefault();
    else return;
    $.getJSON(url, function(res, status, xhr) {
      var _savedItems;

      var adder = new RowAdder("#file tbody");
      (_savedItems = savedItems).push.apply(
        _savedItems,
        _toConsumableArray(FormationsHolder.map(res.formations))
      );
      var holder = new (Function.prototype.bind.apply(
        FormationsHolder,
        [null].concat(
          [[adder]],
          _toConsumableArray(FormationsHolder.map(res.formations))
        )
      ))();
    });
  });
  $("#apply").click(function(ev) {
    var _addedformations;

    var formations = new (Function.prototype.bind.apply(
      FormationsHolder,
      [null].concat([[menuAdder, rowAdder]], _toConsumableArray(savedItems))
    ))();
    (_addedformations = addedformations).push.apply(
      _addedformations,
      _toConsumableArray(savedItems)
    );
    savedItems.splice(0, savedItems.length);
    $("#file tbody").html("");
    event.preventDefault();
  });
}
