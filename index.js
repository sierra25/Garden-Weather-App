//const APIKEY = process.env.APIKEY;
//const myKey = APIKEY;

/*creates classes*/
const ft = new Fetch();
const ui = new UI();

/*selects elements*/
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

/*adds event listener*/
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    /*calls a UI method*/
    ui.populateUI(data);
    ui.populatePlantRatings(data);
    ui.calculateColdCropTemperatureRange(data);


    /*calls saveToLS to save to local storage*/
    ui.saveToLS(data);
  });
});

/*adds event listener for saving successfully to local storage*/
window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
  ui.populatePlantRatings(dataSaved);
  ui.calculateColdCropTemperatureRange(dataSaved);
  
});



