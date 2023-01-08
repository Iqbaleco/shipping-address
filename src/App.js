import './App.css';
import countryData from './countryData.json';

function App() {

  const handleCountry = (e) => {
    const getCountryId = e.target.value;
    const getStateData = countryData.find(country => country.country_id === getCountryId);
    console.log(getStateData.states);
  }

  return (
    <div className='max-w-screen-xl mx-auto m-10'>
      <div class="grid grid-cols-2 gap-4">
        <form class="...">
          <h2>Address</h2>
          <div className="relative flex items-center mt-4">
            <select id='countries' className="rounded-md w-3/4 border-2 border-slate-600" type="text" onChange={(e) => handleCountry(e)}>
              <option defaultValue >Select Product Condition</option>
              {
                countryData?.map((getCountry, index) => (
                  <option key={index}
                    value={getCountry.country_id}
                  >{getCountry.country_name}</option>))
              }
            </select>
          </div>
        </form>
        <div class="...">
          <h2>Shipping Address</h2>
          <label for="cars">Choose a car:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
