document.addEventListener( "DOMContentLoaded", function () {
  const searchFilter = document.getElementById('search-filter');

  const btnDomaine = document.getElementById('btn-domaine');
  const choiceDomaine = document.getElementById('choice-domaine');

  const btnRythme = document.getElementById('btn-rythme');
  const choiceRythme = document.getElementById('choice-rythme');

  const btnFormation = document.getElementById('btn-formation');
  const choiceFormation = document.getElementById('choice-formation');

  const btnDuration = document.getElementById('btn-duration');
  const choiceDuration = document.getElementById('choice-duration');

  const btnTarget = document.getElementById('btn-target');
  const choiceTarget = document.getElementById('choice-target');


  searchFilter.addEventListener("keyup",
    function (event) {
    if (event.key === 'Enter'){
      const keyword = searchFilter.value.toLowerCase();
      const filterBlock = document.querySelectorAll('.filter-block');

      if (keyword.trim() === ''){
        filterBlock.forEach(function (block) {
          block.style.display = 'none';
        });
      } else if (keyword.trim() !== ''){
        let matched = false;
        filterBlock.forEach(function (option){
          let label = option.textContent.toLowerCase();
          if (label.includes(keyword)){
            matched = true;
            option.style.display = "block";
            let checkbox = option.querySelectorAll('input[type="checkbox"]');
            if (checkbox){
              checkbox.checked = true;
            }
          } else {
            option.style.display = "none";
          }
        });

        if(!matched){
          event.preventDefault();
        }
      }
    }
  });

  btnDomaine.addEventListener("click",
    function () {
      if (choiceDomaine.style.display === "none" || choiceDomaine.style.display === "") {
        choiceDomaine.style.display = "block";
      } else {
        choiceDomaine.style.display = "none";
      }
    });


  btnRythme.addEventListener("click",
    function () {
      if (choiceRythme.style.display === "none" || choiceRythme.style.display === "") {
        choiceRythme.style.display = "block";
      } else {
        choiceRythme.style.display = "none";
      }
    });

  btnFormation.addEventListener("click",
    function (){
      if (choiceFormation.style.display === "none" || choiceFormation.style.display === ""){
        choiceFormation.style.display = "block";
      } else {
        choiceFormation.style.display = "none";
      }
    });

  btnDuration.addEventListener("click",
    function () {
      if (choiceDuration.style.display === "none" || choiceDuration.style.display === ""){
        choiceDuration.style.display = "block";
      } else {
        choiceDuration.style.display = "none";
      }
    });

  btnTarget.addEventListener("click",
    function () {
      if (choiceTarget.style.display === "none" || choiceTarget.style.display === ""){
        choiceTarget.style.display = "block";
      } else {
        choiceTarget.style.display = "none";
      }
  });

});
