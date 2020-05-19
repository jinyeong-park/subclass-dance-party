
var expandingDancer = function(top, left, timeBetweenSteps) {


  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('expand');
  this.expand();

};


expandingDancer.prototype = Object.create(makeDancer.prototype);
expandingDancer.prototype.constructor = expandingDancer;


expandingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};


expandingDancer.prototype.expand = function () {
  this.$node.animate ({

    width: '150px',
    height: '150px',
    // border: '1px solid red',



  }, 500);
};


// var spinDancer = function (top, left, timeBetweenSteps) {

//   makeDancer.call(this, top, left, timeBetweenSteps);

// };


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

// call the old version of step at the beginning of any call to this new version of step

// call the old version of step at the beginning of any call to this new version of step

// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.