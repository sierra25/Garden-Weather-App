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
        
        <div class="card mx-auto mt-5" style="width: 50rem;">
            <div class="card-body justify-content-center">
                <h1 class="card-title">${data.name} - Current Temperature: ${data.main.temp}&#8457</h1>
                <br>
                <h3 class="card-subtitle mb-2 text-muted"> Highs of ${data.main.temp_max}&#8457. Lows of ${data.main.temp_min}&#8457</h3>
                <br>
                <h3 class="card-text ">Weather conditions are described as: ${data.weather[0].description}</h3>
                
            </div>
        </div>
        
        
        `;
  }



  

  populatePlantRatings(data) {
    
  //calculates cool weather vegetable ranges and comments
  function calculateGeneralColdCropTemperatureRange(data){

    //Cool-weather vegetables require average air temperature range of 60° to 85°F/15-29°C (optimal is 70°F/21°C) for sustained growth. The maximum air temperature for cool-weather crop productivity is 86°F (30°C), above this temperature cool-weather crops will bolt—meaning flower and set seed–or quit growing.
    let temperature = data.main.temp;
    let newtemp = parseFloat(temperature);
    let coldWeatherComment ="";
    if(newtemp>=87){
    
      coldWeatherComment = " &#10071 Above optimal range / There is risk of cool weather plants bolting";

    }
    else if(newtemp>=100){
    
      coldWeatherComment = " &#10060 Above optimal range / high risk of plant loss if extreme heat continues for more than  2 days";

    }
    
    else if(newtemp<=32){
      coldWeatherComment = " &#10071 Below optimal range, potential plant damage";
    }
    else{
      coldWeatherComment = " &#10004 Temperature is within an acceptable range";
    }

  return coldWeatherComment;

  }
    


  //calculates cool cold hardy weather vegetable ranges and comments
  function calculateColdHardyCropTemperatureRange(data){

    //Cold Weather temperature range comparison
    //cool weather crops range - 87 -risk of bolting
    //95 - too hot
    //32 will be the below optimal, potential plant damage for the cold weather plants

    let temperature = data.main.temp;
    let newtemp = parseFloat(temperature);
    let coldHardyWeatherComment ="";
    if(newtemp>=87){
    
      coldHardyWeatherComment = " &#10060 Above optimal range / There is risk of cool weather plants bolting";

    }
    else if(newtemp>=95){
    
      coldWeatherComment = " &#10060 Above optimal range / high risk of plant loss if extreme heat continues for more than  2 days";

    }
    else{
      coldHardyWeatherComment = " &#10004 Temperature is within an acceptable range";
    }


  return coldHardyWeatherComment;

  }



  //calculates warm weather vegetable ranges and comments
  function calculateGeneralHotCropTemperatureRange(data){

    //Warm-weather vegetables require average minimum air temperature of 75°F (24°C) for sustained growth. The maximum air temperature for warm-weather crop productivity is 110°F (43°C), above this temperature most warm-weather crops will die, just as they are likely to die at 32°F (0°C).

    //32 will do an exclamation point/ its to cold in red/ plant damage
    //50 min for the warm weather plants- below optimal temperatures, may stunt growth
    //70 for the tender to frost plants
    //110 to warm for the warm weather crops
    
    //cross mark: &#10060
    //check mark: &#10004


    //Warm Weather temperature range comparison
    let temperature = data.main.temp;
    let newtemp = parseFloat(temperature);
    let warmWeatherComment = " ";

    if(newtemp<=32){
      warmWeatherComment = " : &#10060 Below optimal range, potential plant damage";
     
    }
    else if((32<=newtemp) && (newtemp<=45)){

      warmWeatherComment = " : &#10071 Below optimal range, may stunt plant growth";
      
    }
   
    else if(newtemp>=110){
      warmWeatherComment = " : &#10071 Above optimal range / potential plant damage";
      

    }
    else if((45<newtemp) && (newtemp<110)) {
      warmWeatherComment = " : &#10004 Temperature is within an acceptable range";
      
    }
    


    return warmWeatherComment;

  }


//calculates warm weather vegetable ranges and comments
function calculateTenderHotCropTemperatureRange(data){

  //Warm Weather temperature range comparison
  let temperature = data.main.temp;
  let newtemp = parseFloat(temperature);
  let tenderWarmWeatherComment = " ";
  
  if(newtemp<=32){
    
    tenderWarmWeatherComment= " : &#10060 Below optimal range, plant will be damaged";
  }
  else if((32<=newtemp) && (newtemp<45)){
    tenderWarmWeatherComment=" : &#10071 Below optimal range, it is getting too cold for this plant which is sensitive to cold temperatures";
  }
 else if((50<=newtemp) && (newtemp<=70)){
  tenderWarmWeatherComment=" : &#10071 Below optimal range for tender to frost plants";

  }
 
  else if((45<newtemp) && (newtemp<110)) {

    tenderWarmWeatherComment= " : &#10004 Temperature is within an acceptable range";
  }

  else if(newtemp>=110){
    
    tenderWarmWeatherComment= " : &#10060 Above optimal range / potential plant damage";

  }
  return tenderWarmWeatherComment;

}





    
    let tempData = data;
    let warmWeatherComment = calculateGeneralHotCropTemperatureRange(tempData); 

    
    let tenderWarmWeatherComment = calculateTenderHotCropTemperatureRange(tempData);
    
    let coldWeatherComment = calculateGeneralColdCropTemperatureRange(data);
    
    let coldHardyWeatherComment = calculateColdHardyCropTemperatureRange(data);
  
    this.plantRatingContainer.innerHTML = `
     
    <div class="card mx-auto mt-5" style="width: 50rem;">
    <div class="card-body justify-content-center">
    <p><u>Warm-season Crops: </u></p> 
    <p><b>Require average minimum air temperature range of 60°F to 75°F (24°C) for sustained growth. Lower temperatures such as 60°F to 45°F are tolerable but can stunt growth. The maximum air temperature for warm-weather crop productivity is 110°F (43°C), above this temperature most warm-weather crops will die, just as they are likely to die at 32°F(0°C) and below.</b></p>
    <li>Shell beans ${warmWeatherComment}</li>
    <li>Corn ${warmWeatherComment}</li>
    <li>Cowpeas ${warmWeatherComment}</li>
    <li>Malabar spinach ${warmWeatherComment}</li>
    <li>New Zealand spinach ${warmWeatherComment}</li>
    <li>Okra ${warmWeatherComment}</li>
    <li>Soybeans ${warmWeatherComment}</li>
    <li>Sunchokes ${warmWeatherComment}</li>
    <li>Tomatoes ${warmWeatherComment}</li>

    <br>
    <p><u>Warm-season tender crops/cold sensitive crops</u></p>
    <p><b>These crops demand warm temperatures to grow, usually above 70°F (21°C). They can be stunted by temperatures below 50°F (10°C).</b></p>
    <li>Lima beans ${tenderWarmWeatherComment}</li>
    <li>Corn ${tenderWarmWeatherComment}</li>
    <li>Cucumbers ${tenderWarmWeatherComment}</li>
    <li>Eggplant ${tenderWarmWeatherComment}</li>
    <li>Luffa ${tenderWarmWeatherComment}</li>
    <li>Melons ${tenderWarmWeatherComment}</li>
    <li>Peanuts ${tenderWarmWeatherComment}</li>
    <li>Pumpkins ${tenderWarmWeatherComment}</li>
    <li>Peppers ${tenderWarmWeatherComment}</li>
    <li>Sweet potatoes ${tenderWarmWeatherComment}</li>





    </div>
    </div>

    <div class="card mx-auto mt-5" style="width: 50rem;">
        <div class="card-body justify-content-center">
        <p><u>Cold Weather Crops List :</u></p>
        <p><b>Require average air temperature range of 60° to 85°F/15-29°C (optimal is 70°F/21°C) for sustained growth. The maximum air temperature for cool-weather crop productivity is 86°F (30°C), above this temperature cool-weather crops will bolt—meaning flower and set seed–or quit growing. Cool weather crops can take a day or two of extreme heat as long as their root system is kept moist. However, if temperatures stay hot for longer, cool season crops in summer heat can be lost. </b></p>

        <li>Artichokes ${coldWeatherComment}</li>
        <li>Beets ${coldWeatherComment}</li>
        <li>Carrots ${coldWeatherComment}</li>
        <li>Cauliflower ${coldWeatherComment}</li>
        <li>Celery ${coldWeatherComment}</li>
        <li>Chard ${coldWeatherComment}</li>
        <li>Chicory ${coldWeatherComment}</li>
        <li>Chinese Cabbage: ${coldWeatherComment}</li>
        <li>Cresses ${coldWeatherComment}</li>
        <li>Endive ${coldWeatherComment}</li>
        <li>Escarole ${coldWeatherComment}</li>
        <li>Lettuce ${coldWeatherComment}</li>
        <li>Mustard Greens ${coldWeatherComment}</li>
        <li>Parsnips ${coldWeatherComment}</li>
        <li>Potatoes ${coldWeatherComment}</li>
        <li>Radishes ${coldWeatherComment}</li>
        <li>Asparagus:  ${coldWeatherComment}</li>

        <br>
        <p><u>Cold Hardy Crops: </u></p>
        <p><b>Hardy is a gardening term often used to describe a plant’s ability to withstand cold temperatures. Can grow in temperatures below 28°F.</b></p>

        <li>Broccoli: ${coldHardyWeatherComment}</li>
        <li>Brussels sprouts: ${coldHardyWeatherComment}</li>
        <li>Cabbage: ${coldHardyWeatherComment}</li>
        <li>Collards: ${coldHardyWeatherComment}</li>
        <li>Garlic: ${coldHardyWeatherComment}</li>
        <li>Horseradish: ${coldHardyWeatherComment}</li>
        <li>Kale: ${coldHardyWeatherComment}</li>
        <li>Kohlrabi: ${coldHardyWeatherComment}</li>
        <li>Leeks: ${coldHardyWeatherComment}</li>
        <li>Onions: ${coldHardyWeatherComment}</li>
        <li>Parsley: ${coldHardyWeatherComment}</li>
        <li>Peas: ${coldHardyWeatherComment}</li>
        <li>Rhubarb: ${coldHardyWeatherComment}</li>
        <li>Rutabagas: ${coldHardyWeatherComment}</li>
        <li>Spinach: ${coldHardyWeatherComment}</li>
        <li>Turnips: ${coldHardyWeatherComment}</li>
        



        
            
        </div>
    </div>




    
    `;
}









  /*Clears the weather data container*/
  clearUI() {
    plantRatingContainer.innerHTML = "";
    uiContainer.innerHTML = "";
    
  }
  /*Saves the weather data to local storage*/
  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }
  /*Gets data saved in local storage*/ 
  getFromLS() {
    if (localStorage.getItem("city" == null)) 
    {
      return this.defaultCity;
    } 
    else 
    {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  /*Clears the data saved in local storage*/
  clearLS() {
    localStorage.clear();
  }
}
