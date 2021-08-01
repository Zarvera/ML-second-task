/* const dropdown = function(options) {
  $('.dropdown__menu, dropdown__expand-icon').on('click', function() {
      $(this).siblings('.dropdown__menu-option').toggleClass('dropdown__menu-option_open');
  });

  $('.button_increment').on('click', function() {
      let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
      value++;
      $(this).siblings('.menu-option__stepper-result').text(value);
      updateValue($(this));
  });

  $('.button_decrement').on('click', function() {
      let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
      if(value>0) {
          value--;
          $(this).siblings('.menu-option__stepper-result').text(value);
          updateValue($(this));
      };
  });

  let updateValue = function(context) {
      let output = [];
      let allOptions = context.closest('.dropdown').find('.menu-option__stepper-result');
      let checkValue = function(index) {
          let stepValue = parseInt($(this).text());
          let stepIndex = $(this).attr('data-index');
          if(stepValue > 4) {
              output.push(stepValue + ' ' + options[stepIndex][2]);
          } else if(stepValue > 1 && stepValue < 5) {
              output.push(stepValue + ' ' + options[stepIndex][1]);
          } else if(stepValue === 1) {
              output.push(stepValue + ' ' + options[stepIndex][0]);
          }
      };
      allOptions.map(checkValue);
      context.closest('.dropdown').find('input').val(output.join(', '));
  };
};

dropdown([['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']]);
*/

/* (function($) {
  $.fn.dropdownStepper = function(options) {
    var defaults = {
      declension: false,
      declensionArr: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']]
    };

    $(this).on('click', function() {
      $(this).siblings('.dropdown__menu-option').toggleClass('dropdown__menu-option_open');
    });

    $('.button_increment').on('click', function() {
      let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
      value++;
      $(this).siblings('.menu-option__stepper-result').text(value);
      updateValue($(this));
    });

    $('.button_decrement').on('click', function() {
      let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
      if(value>0) {
        value--;
        $(this).siblings('.menu-option__stepper-result').text(value);
        updateValue($(this));
      };
    });

    let updateValue = function(context) {
      let output = [];
      let allOptions = context.closest('.dropdown').find('.menu-option__stepper-result');
      let checkValue = function(index) {
        let stepValue = parseInt($(this).text());
        let stepIndex = $(this).attr('data-index');
        if(stepValue > 4) {
          output.push(stepValue + ' ' + defaults.declensionArr[stepIndex][2]);
          } else if(stepValue > 1 && stepValue < 5) {
            output.push(stepValue + ' ' + defaults.declensionArr[stepIndex][1]);
          } else if(stepValue === 1) {
            output.push(stepValue + ' ' + defaults.declensionArr[stepIndex][0]);
          }
      };
      allOptions.map(checkValue);
      context.closest('.dropdown').find('input').val(output.join(', '));
    };
  
  };
})(jQuery);
*/
(function($) {
  $.widget('zrv.dropdownstepper', {
    options: {
      pronounces: ['гость', 'гостя', 'гостей'],
      declension: false
    },
    _create: function() {
      this.btn_Inc = this.element.siblings('.dropdown__menu-option').find('.button_increment');
      this.btn_Dec = this.element.siblings('.dropdown__menu-option').find('.button_decrement');
      this._on(this.element, {
        click: 'open'
      });
      this._on(this.btn_Inc, {
        click: 'increment'
      });
      this._on(this.btn_Dec, {
        click: 'decrement'
      });
    },
    open: function() {
      this.element.siblings('.dropdown__menu-option').toggleClass('dropdown__menu-option_open');
    },
    increment: function(elem) {
      let value = parseInt(elem.target.previousSibling.innerHTML);
      value++;
      elem.target.previousSibling.innerHTML = value;
      this.updateValue();
    },
    decrement: function(elem) {
      let value = parseInt(elem.target.nextSibling.innerHTML);
      value--;
      elem.target.nextSibling.innerHTML = value;
      this.updateValue();
    },
    updateValue: function() {
      let output = [];
      let options = this.options;
      let allValues = this.element.parent().find('.menu-option__stepper-result');
      let checkValue = function() {
        let stepValue = parseInt($(this).text());
        let stepIndex = $(this).attr('data-index');
          if(stepValue > 4) {
            output.push(stepValue + ' ' + options.pronounces[stepIndex][2]);
            } else if(stepValue > 1 && stepValue < 5) {
              output.push(stepValue + ' ' + options.pronounces[stepIndex][1]);
            } else if(stepValue === 1) {
              output.push(stepValue + ' ' + options.pronounces[stepIndex][0]);
          }
        };
      if(options.declension) {
        allValues.map(checkValue);
        this.element.val(output.join(', '));
      }
      if(!options.declension) {
        let numArr = [];
        let retrieve = function() { numArr.push(parseInt($(this).text()));}
        allValues.map(retrieve);;
        let result = numArr.reduce((acc, cV) => acc + cV);
        if(result > 4) {
          this.element.val(result + ' ' + options.pronounces[2]);
        } else if(result > 1 && result < 5) {
          this.element.val(result + ' ' + options.pronounces[1]);
        } else if(result === 1) {
          this.element.val(result + ' ' + options.pronounces[0]);
        }
      }
    },
    _setOption: function( key, value ) {
      if ( key === "pronounces" ) {
        this.element.pronounces( value );
      }
      if ( key === "declension" ) {
        this.element.declension( value );
      }
      this._super( key, value );
    }
  });
})(jQuery);