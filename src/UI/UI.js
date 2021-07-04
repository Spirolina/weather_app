import weatherCondition from "../components/weatherCondition";
import createHeader from "../components/header";
import Weather from "../weather/weather";
import createFooter from "../components/footer";

export default class UI {
  static async createWhatherBoard(temp, humidity, pressure, condition) {
    weatherCondition(condition).then(() => {
      const board = document.querySelector('.board');
      const html = `
      <div class="temp"><i class="fas fa-temperature-high"></i> Tempreture: ${parseInt(temp, 10).toFixed(1)}°</div>    
      <div class="temp"><i class="fas fa-tint"></i>Humidity: ${humidity}%</div>
      <div class="temp">Pressure: ${pressure}hpa</div> 
      <div class="temp">Condition: ${condition}</div>     
       `;
      board.innerHTML = html;
      board.classList.add('visible');
    });
  }

  static init() {
    const { body } = document;

    body.innerHTML += createHeader();
    const search = `
   <div class="box"> 
       <div class="searchTitle"> Click search button and serch your city </div>
<div class="search-box">
<button class="btn-search"><i class="fas fa-search"></i></button>
<input type="text" class="input-search" placeholder="Search for a City...">
</div>
   </div>


`;
    const weatherCon = `
<div class="condition"> <img src="">

<div class="board"> 

</div>
    </div>
`;
    body.innerHTML += weatherCon;
    createFooter();
    const condition = document.querySelector('.condition');
    condition.innerHTML += search;
    const input = document.querySelector('.input-search');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.searchHandler();
      }
    });
    weatherCondition('summer');
    UI.btn();
  }

  static btn() {
    const btn = document.querySelector('.btn-search');
    btn.addEventListener('click', () => {
      this.searchHandler();
    });
  }

  static searchHandler() {
    const input = document.querySelector('.input-search');
    const { value } = input;

    Weather.fetchWeather(value).catch(() => {
      input.classList.add('error');
      input.value = 'please enter a valid name';
      input.addEventListener('focus', () => {
        input.classList.remove('error');
      });
    });
  }
}
