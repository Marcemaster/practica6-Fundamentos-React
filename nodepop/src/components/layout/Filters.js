import "./Filters.css";
import Button from "../common/Button";
import SliderComp from "../common/SliderComp.js";

function Filters() {
  return (
    <div>
      <h2>Filters</h2>
      <div className='wrapper'>
        <form /*onSubmit={console.log("Submiteando")}*/>
          <input
            type='text'
            id='name'
            placeholder='Filter by name'
            name='name'
          ></input>

          <label htmlFor='true'>On Sale</label>
          <input type='radio' id='true' value={true} name='sale'></input>
          <label htmlFor='false'>Searching</label>
          <input type='radio' id='false' value={false} name='sale'></input>
          <label htmlFor='both'>Both</label>
          <input type='radio' id='both' name='sale'></input>

          <div>
            Price Range
            <SliderComp />
          </div>

          <input
            type='number'
            id='price-min'
            name='price-min'
            label='price-min'
            placeholder='price-min'
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
