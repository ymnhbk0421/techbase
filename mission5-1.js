var display = document.getElementById('display');
      var clearOnNextInput = false;

      function appendValue(value) {
        if (clearOnNextInput) {
          display.value = '';
          clearOnNextInput = false;
        }
        display.value += value;
      }

      function clearDisplay() {
        display.value = '';
        clearOnNextInput = false;
      }

      function calculate() {
        try {
          var result = eval(display.value);
          if (result === Infinity || result === -Infinity) {
            throw new Error('計算エラーが発生しました。');
          }
          display.value = result;
          clearOnNextInput = true;
        } catch (e) {
          alert(e.message);
        }
      }