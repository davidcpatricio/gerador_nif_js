import GenerateNif from './modules/GenerateNif';

import './assets/css/style.css';

(function() {
  const generate = new GenerateNif();
  const generatedNif = document.querySelector('.generated-nif');
  generatedNif.innerHTML = generate.generateNewNif();
})();