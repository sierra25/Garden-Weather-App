/*Dynamically renders the data in the User Interface*/
class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.plantRatingContainer = document.getElementById("ratings");
    this.city;
    this.defaultCity = "London";
  }

  /*Displays the UI on the screen with data*/
  populateUI(data) {
    
    
    
    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h4 class="card-title">${data.name} </h4>
                <br>
                <h6 class="card-subtitle mb-2 text-muted"> Current Temperature: ${data.main.temp}&#8457 </h6>
                <br>
                <h6 class="card-subtitle mb-2 text-muted"> Highs of ${data.main.temp_max}&#8457. Lows of ${data.main.temp_min}&#8457</h6>
                <br>
                <h6 class="card-text ">Weather conditions are described as: ${data.weather[0].description}</h6>
                
            </div>
        </div>
        
        
        `;
  }


//calculates warm weather vegetable ranges and comments
calculateHotCropTemperatureRange(data){

  //Warm-weather vegetables require average minimum air temperature of 75°F (24°C) for sustained growth. The maximum air temperature for warm-weather crop productivity is 110°F (43°C), above this temperature most warm-weather crops will die, just as they are likely to die at 32°F (0°C).

  //32 will do an exclamation point/ its to cold in red/ plant damage
  //50 min for the warm weather plants- below optimal temperatures, may stunt growth
  //70 for the tender to frost plants
  //110 to warm for the warm weather crops


  //Warm Weather temperature range comparison

  let warmWeatherComment = "";
  if(data.main.temp<32){
   
    warmWeatherComment = "Its too cold outside/potential plant damage"

  }
  else if(data.main.temp<=50){

    warmWeatherComment = "Below optimal temperatures, may stunt plant growth"
  }
  /*else if(data.main.temp<=69){
    let warmWeatherComment ="below optimal for the tender to frost plants"

  }
  */
  else if(data.main.temp<=110){
    warmWeatherComment = "Its too hot outside/potential plant damage"

  }

 
return warmWeatherComment;

}





//calculates cool weather vegetable ranges and comments
calculateColdCropTemperatureRange(data){

  //Cool-weather vegetables require average air temperature range of 60° to 85°F/15-29°C (optimal is 70°F/21°C) for sustained growth. The maximum air temperature for cool-weather crop productivity is 86°F (30°C), above this temperature cool-weather crops will bolt—meaning flower and set seed–or quit growing.

  let coldWeatherComment ="";
  if(data.main.temp<=86){
   
     coldWeatherComment = "Above optimal temperatures / There is risk of cool weather plants bolting"

  }
  else if(data.main.temp<=32){
    coldWeatherComment = "Below optimal, potential plant damage"
  }
  //Cold Weather temperature range comparison

  //cool weather crops range - 86 -risk of bolting
  //60 50°F
  //32 will be the below optimal, potential plant damage for the cold weather plants

return coldWeatherComment;

}















  populatePlantRatings(data) {
    
    warmWeatherComment = calculateHotCropTemperatureRange(data); 
    coldWeatherComment = calculateColdCropTemperatureRange(data); 

    this.plantRatingContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h4 class="card-title">
                <ul> <h4> Cool Season Crops: </h4>
                <br>
                <h6>Cold Hardy Vegetables </h6>
                <br>
                <p>Here is a list of hardy vegetables. (“Hardy” is a gardening term often used to describe a plant’s ability to withstand cold temperatures.) These crops can be planted—seeds sown or transplants set in the garden—two to four weeks before the average last frost date.</p>
                

                
                <li>Asparagus ${coldWeatherComment}</li>
                <li>Broccoli ${coldWeatherComment}</li>
                <li>Brussels sprouts ${coldWeatherComment}</li>
                <li>Cabbage ${coldWeatherComment}</li>
                <li>Chinese cabbage ${coldWeatherComment}</li>
                <li>Collards ${coldWeatherComment}</li>
                <li>Garlic ${coldWeatherComment}</li>
                <li>Horseradish ${coldWeatherComment}</li>
                <li>Kale ${coldWeatherComment}</li>
                <li>Kohlrabi ${coldWeatherComment}</li>
                <li>Leeks ${coldWeatherComment}</li>
                <li>Onions ${coldWeatherComment}</li>
                <li>Parsley ${coldWeatherComment}</li>
                <li>Peas ${coldWeatherComment}</li>
                <li>Rhubarb ${coldWeatherComment}</li>
                <li>Rutabagas ${coldWeatherComment}</li>
                <li>Spinach ${coldWeatherComment}</li>
                <li>Turnips ${coldWeatherComment}</li>
                

                <h6>Cool-season half-hardy vegetables</h6>
                <p>Half-hardy vegetables can tolerate only light freezes–that is short-term exposure to subfreezing temperatures. Half-hardy crops should be planted around the date of the last spring frost.

                Here is a list of half-hardy vegetables. Sow the seeds of these crops or set out transplants near the average date of the last frost in your area. Half-hardy crops include:</p>

                <li>Artichokes ${coldWeatherComment}</li>
                <li>Beets ${coldWeatherComment}</li>
                <li>Carrots ${coldWeatherComment}</li>
                <li>Cauliflower ${coldWeatherComment}</li>
                <li>Celery ${coldWeatherComment}</li>
                <li>Chard ${coldWeatherComment}</li>
                <li>Chicory ${coldWeatherComment}</li>
                <li>Cresses ${coldWeatherComment}</li>
                <li>Endive ${coldWeatherComment}</li>
                <li>Escarole ${coldWeatherComment}</li>
                <li>Lettuce ${coldWeatherComment}</li>
                <li>Mustard Greens ${coldWeatherComment}</li>
                <li>Parsnips ${coldWeatherComment}</li>
                <li>Potatoes ${coldWeatherComment}</li>
                <li>Radishes ${coldWeatherComment}</li>
                <li>Turnips ${coldWeatherComment}</li>


                <h4> Warm Season Crops: </h4>
                <h6>Warm-season tender vegetables</h6>
                <p>Tender vegetables are best planted one to two weeks after the last frost. (“Tender” is a gardening term for plants that can not withstand cold temperatures.) The fruit and leaves of these crops can be injured by a light frost if planted too early. Tender vegetables include:</p>
                <li>Shell beans ${warmWeatherComment}</li>
                <li>Corn ${warmWeatherComment}</li>
                <li>Cowpeas ${warmWeatherComment}</li>
                <li>Malabar spinach ${warmWeatherComment}</li>
                <li>New Zealand spinach ${warmWeatherComment}</li>
                <li>Okra ${warmWeatherComment}</li>
                <li>Soybeans ${warmWeatherComment}</li>
                <li>Sunchokes ${warmWeatherComment}</li>
                <li>Tomatoes ${warmWeatherComment}</li>

                <h6>Warm-season very tender vegetables</h6>
                <p>Very tender vegetables should not be planted until at least three weeks after the last frost in spring. These crops demand warm temperatures to grow, usually above 70°F (21°C). They can be stunted by temperatures below 50°F (10°C).Very tender vegetables include:  </p>

                <li>Lima beans ${warmWeatherComment}</li>
                <li>Corn ${warmWeatherComment}</li>
                <li>Cucumbers ${warmWeatherComment}</li>
                <li>Eggplant ${warmWeatherComment}</li>
                <li>Luffa ${warmWeatherComment}</li>
                <li>Melons ${warmWeatherComment}</li>
                <li>Peanuts ${warmWeatherComment}</li>
                <li>Pumpkins ${warmWeatherComment}</li>
                <li>Peppers ${warmWeatherComment}</li>
                <li>Sweet potatoes ${warmWeatherComment}</li>

                


      




                
                
                
                
                </ul>
       
                
                
                </h4>
                
                
            </div>
        </div>
        
        
        `;
  }




  /*Clears the weather data container*/
  clearUI() {
    uiContainer.innerHTML = "";
  }
  /*Saves the weather data to local storage*/
  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }
  /*Gets data saved in local storage*/ 
  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  /*Clears the data saved in local storage*/
  clearLS() {
    localStorage.clear();
  }
}
