import {produce} from 'immer'
import Button from '../components/Button';
import { useReducer } from "react";
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SETVALUETOCHANGE =  'changeValueToAdd';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
switch (action.type) {
  case INCREMENT_COUNT:
   state.count= state.count+1
  return
  case SETVALUETOCHANGE:
   state.valueToAdd=action.payload;
  return
  case DECREMENT_COUNT:
   state.count= state.count-1
  return
  case ADD_VALUE_TO_COUNT:
   state.count= state.count + state.valueToAdd;
   state.valueToAdd =0;
  return
  default:
  return;
  }

  // if(action.type === INCREMENT_COUNT){
    // return {
    //   ...state,
    //   count: state.count+1,
    // }
  // }
  // if(action.type ===SETVALUETOCHANGE){
  // return {
  //   ...state,
  //   valueToAdd: action.payload,
  // }
  // }

  // return state;
}

function CounterPage({initialCount}) {

 const [state, dispatch]= useReducer( produce(reducer) ,{
  count: initialCount,
  valueToAdd: 0,
 }) ;

// const [count, setCount] = useState(initialCount);
// const [valueToAdd, setValueToAdd] = useState(0);

const handleChange = (event) => {
const value = parseInt( event.target.value) || 0;
// setValueToAdd(value);
// console.log(value);
dispatch({
  type: SETVALUETOCHANGE,
  payload: value
});

};

const handleSubmit = (event) => {
event.preventDefault();

// setCount(count + valueToAdd);
// setValueToAdd(0);
dispatch({
  type:ADD_VALUE_TO_COUNT,
});
};


const decrementHandle = () => {
// setCount(count-1);
dispatch({
  type:DECREMENT_COUNT
})
}

const incrementHandle = () => {
  // setCount(count+1);
  dispatch({
    type:INCREMENT_COUNT
  });

}

  return (
    <Panel className='m-3'>
        <h1 className='text-lg'>count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={incrementHandle}>
         Increment
        </Button>
        <Button onClick={decrementHandle}>
         Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div>add a lot!</div>
        <input
         value={state.valueToAdd || ''}
         onChange={handleChange}
         type='number' 
         className='p-1 m-3 bg-gray-50 border border-gray-500'/>
        <Button>add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage;