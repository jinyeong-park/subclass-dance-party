
var spinDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<img src="src/asset/background1.jpeg" class="spin">');
  this.$node.addClass('spin');


};
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

spinDancer.prototype = Object.create(makeDancer.prototype);
// call the old version of step at the beginning of any call to this new version of step
spinDancer.prototype.constructor = spinDancer;


spinDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  //console.log(this);




  // this.$node.animate({
  //   left: '1000px',
  //   // opacity: '0.5',
  //   // height: '30px',
  //   // width: '70px'
  // // }, 'fast');
  // });
  // this.$node.toggle();
};


// spinDancer.prototype.expand = function () {
//   this.$node.animate ({
//     width: '40px',
//     height: '40px',
//   }, 2000);

// };
