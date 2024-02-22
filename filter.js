document.addEventListener( "DOMContentLoaded", function () {
  const searchFilter = document.getElementById('search-filter');

  const arrowFin = document.getElementById('arrow-financement');
  const arrowSitu = document.getElementById('arrow-situation');
  const arrowThematic = document.getElementById('arrow-thematic');
  const arrowCertify = document.getElementById('arrow-certify');
  const arrowLieu = document.getElementById('arrow-lieu');
  const arrowNiveau = document.getElementById('arrow-niveau');
  const arrowForma = document.getElementById('arrow-formation');

  const btnFinance = document.getElementById('btn-financement');
  const choiceFinance = document.getElementById('choice-financement');

  const btnSituation = document.getElementById('btn-situation');
  const choiceSituation = document.getElementById('choice-situation');

  const btnThematic = document.getElementById('btn-thematic');
  const choiceThematic = document.getElementById('choice-thematic');

  const btnNiveau = document.getElementById('btn-niveau');
  const choiceNiveau = document.getElementById('choice-niveau');

  const btnFormation = document.getElementById('btn-formation');
  const choiceFormation = document.getElementById('choice-formation');

  const btnCertify = document.getElementById('btn-certify');
  const choiceCertify = document.getElementById('choice-certify');

  const btnLieu = document.getElementById('btn-lieu');
  const choiceLieu = document.getElementById('choice-lieu');

  const btnFilter = document.getElementById('btn-filter-mobile');
  const filter = document.getElementById('filter');

  const hiddenBtnFilter = document.getElementById('activate-filter');
  const exitFilter = document.getElementById('exit-filter');

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

  btnFinance.addEventListener("click",
    function () {
      if (choiceFinance.style.display === "none" || choiceFinance.style.display === "") {
        choiceFinance.style.display = "block";
        arrowFin.classList.add('rotated');
      } else {
        choiceFinance.style.display = "none";
        arrowFin.classList.remove("rotated")
      }
    });


  btnSituation.addEventListener("click",
    function () {
      if (choiceSituation.style.display === "none" || choiceSituation.style.display === "") {
        choiceSituation.style.display = "block";
        arrowSitu.classList.add('rotated');
      } else {
        choiceSituation.style.display = "none";
        arrowSitu.classList.remove('rotated');
      }
    });

  btnThematic.addEventListener("click",
    function (){
      if (choiceThematic.style.display === "none" || choiceThematic.style.display === ""){
        choiceThematic.style.display = "block";
        arrowThematic.classList.add('rotated');
      } else {
        choiceThematic.style.display = "none";
        arrowThematic.classList.remove('rotated');
      }
    });

  btnNiveau.addEventListener("click",
    function () {
      if (choiceNiveau.style.display === "none" || choiceNiveau.style.display === ""){
        choiceNiveau.style.display = "block";
        arrowNiveau.classList.add('rotated');
      } else {
        choiceNiveau.style.display = "none";
        arrowNiveau.classList.remove('rotated');
      }
    });

  btnFormation.addEventListener("click",
    function () {
      if (choiceFormation.style.display === "none" || choiceFormation.style.display === ""){
        choiceFormation.style.display = "block";
        arrowForma.classList.add('rotated');
      } else {
        choiceFormation.style.display = "none";
        arrowForma.classList.remove('rotated');
      }
    });

  btnLieu.addEventListener("click",
    function () {
      if (choiceLieu.style.display === "none" || choiceLieu.style.display === ""){
        choiceLieu.style.display = "block";
        arrowLieu.classList.add('rotated');
      } else {
        choiceLieu.style.display = "none";
        arrowLieu.classList.remove('rotated');
      }
    });

  btnCertify.addEventListener("click",
    function () {
      if (choiceCertify.style.display === "none" || choiceCertify.style.display === ""){
        choiceCertify.style.display = "block";
        arrowCertify.classList.add('rotated');
      }else {
        choiceCertify.style.display = "none";
        arrowCertify.classList.remove('rotated');
      }
    });
  btnFilter.addEventListener("click", function () {
    if (filter.style.display === "none" || filter.style.display === ""){
      filter.style.display = "block";
      hiddenBtnFilter.style.display = "none";
      exitFilter.style.display = "block";

    } else {
      filter.style.display = "none";
      hiddenBtnFilter.style.display = "none";
      exitFilter.style.display = "none";
    }
  });

  exitFilter.addEventListener("click", function () {
    if (filter.style.display === "block"){
      filter.style.display = "none";
      hiddenBtnFilter.style.display = "block";
      exitFilter.style.display = "none";
    } else {
      filter.style.display = "block";
      hiddenBtnFilter.style.display = "none";
      exitFilter.style.display = "block";
    }
  })
});
