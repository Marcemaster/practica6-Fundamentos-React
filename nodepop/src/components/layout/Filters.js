import "./Filters.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "../common/Button";

function Filters() {
  return (
    <div>
      <h2>Filters</h2>
      <div className="wrapper">
        <form /*onSubmit={console.log("Submiteando")}*/>
          <input type='text' id='name' placeholder='name' name='name'></input>
          <label htmlFor='true'>On Sale</label>
          <input type='radio' id='true' name='sale'></input>
          <label htmlFor='false'>Searching</label>
          <input type='radio' id='false' name='sale'></input>
          <label htmlFor='both'>Both</label>
          <input type='radio' id='both' name='both'></input>

          <input
            type='number'
            id='price-min'
            placeholder='price-min'
            name='price-min'
          ></input>
          <input
            type='number'
            id='price-max'
            placeholder='price-max'
            name='price-max'
          ></input>

          <label htmlFor='tags'>Choose tags</label>
          <select name='tags' id='tags' multiple>
            <option value='lifestyle'>lifestyle</option>
            <option value='mobile'>mobile</option>
            <option value='motor'>motor</option>
            <option value='work'>work</option>
          </select>

          <Button type='submit' className='filters-submit' variant='primary'>
            Filter
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Filters;
