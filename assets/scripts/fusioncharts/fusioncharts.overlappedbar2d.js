(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory()}})(function(){(window["webpackJsonpFusionCharts"]=window["webpackJsonpFusionCharts"]||[]).push([[9],{711:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;exports.OverlapperBar2D=undefined;var _overlappedbar2d=__webpack_require__(712);var _overlappedbar2d2=_interopRequireDefault(_overlappedbar2d);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.OverlapperBar2D=_overlappedbar2d2["default"];exports["default"]={name:"overlappedbar2d",type:"package",requiresFusionCharts:true,extension:function extension(FusionCharts){return FusionCharts.addDep(_overlappedbar2d2["default"])}}},712:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _msbarcartesian=__webpack_require__(369);var _msbarcartesian2=_interopRequireDefault(_msbarcartesian);var _bar2d=__webpack_require__(370);var _bar2d2=_interopRequireDefault(_bar2d);var _multiseriesDataset=__webpack_require__(235);var _multiseriesDataset2=_interopRequireDefault(_multiseriesDataset);var _column=__webpack_require__(713);var _column2=_interopRequireDefault(_column);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defaults(obj,defaults){var keys=Object.getOwnPropertyNames(defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=Object.getOwnPropertyDescriptor(defaults,key);if(value&&value.configurable&&obj[key]===undefined){Object.defineProperty(obj,key,value)}}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):_defaults(subClass,superClass)}var OverlappedBar2D=function(_MSBarCartesian){_inherits(OverlappedBar2D,_MSBarCartesian);function OverlappedBar2D(){_classCallCheck(this,OverlappedBar2D);var _this=_possibleConstructorReturn(this,_MSBarCartesian.call(this));_this.isBar=true;_this.registerFactory("dataset",_multiseriesDataset2["default"],["vCanvas"]);return _this}OverlappedBar2D.prototype.__setDefaultConfig=function __setDefaultConfig(){_MSBarCartesian.prototype.__setDefaultConfig.call(this);var config=this.config;config.friendlyName="Multi-series Bar Chart";config.hasLegend=true;config.defaultDatasetType="bar2d"};OverlappedBar2D.prototype.getName=function getName(){return"OverlappedBar2D"};OverlappedBar2D.getName=function getName(){return"OverlappedBar2D"};OverlappedBar2D.prototype.getDSdef=function getDSdef(){return _bar2d2["default"]};OverlappedBar2D.prototype.getDSGroupdef=function getDSGroupdef(){return _column2["default"]};return OverlappedBar2D}(_msbarcartesian2["default"]);exports["default"]=OverlappedBar2D}}])});
//# sourceMappingURL=fusioncharts.overlappedbar2d.js.map