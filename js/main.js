$(document).ready(function(){
  $('.pie_progress').asPieProgress('start');

  $(document).ready(function(){
    namespace: '',
    classes: {
      svg: 'pie_progress__svg',
      element: 'pie_progress',
      number: 'pie_progress__number',
      content: 'pie_progress__content'
    },
    min: 0,
    max: 100,
    goal: 100,
    size: 160,
    speed: 15, // speed of 1/100
    barcolor: '#ef1e25',
    barsize: '4',
    trackcolor: '#f2f2f2',
    fillcolor: 'none',
    easing: 'ease',
    numberCallback: function numberCallback(n) {
      'use strict';
    
      var percentage = Math.round(this.getPercentage(n));
    
      return percentage + '%';
    },
    
    contentCallback: null
 });
});