
var dancer1 = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dancer1');
  this.expand();
};


dancer1.prototype = Object.create(makeDancer.prototype);
dancer1.prototype.constructor = dancer1;


dancer1.prototype.expand = function () {
  this.$node.animate ({
    width: '40px',
    height: '40px',
  }, 200);

};







// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

// call the old version of step at the beginning of any call to this new version of step

// call the old version of step at the beginning of any call to this new version of step

// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.