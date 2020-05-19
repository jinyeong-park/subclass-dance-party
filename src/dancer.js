// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //already pointed to this, no need to use .call
  this.time = 300;
  this.step();
  this.setPosition(top, left);
};


makeDancer.prototype.step = function() {
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step

  //using .bind
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

  // // //using .call : to use .call over bind, need to set this as a current this (current currentThis) cuz setTimeout fn invokes functions as free function invocation so this will be global***
  // var currentThis = this; //  makeBlinkyDancer when called

  // setTimeout(function() {
  //   currentThis.step.call(currentThis);
  // }, currentThis.timeBetweenSteps);
  //
};

// dancer.step();
makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);


};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

makeDancer.prototype.lineUp = function() {
  // this.$node.css({'left': $('body').width() / 2});
  //align left
  //this.$node.animate ( { 'left': '200px'}, 400);
  //align middle
  this.$node.animate ( { 'top': '50%'}, 400);
};

makeDancer.prototype.lineUpV = function() {

  this.$node.animate ( { 'left': '50%'}, 400);
};










// //original
// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };