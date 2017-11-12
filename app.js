// Reducer
const counterCatReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_CAT':
      return state + 1;
    default:
      return state;
  }
};

//UI
const App = props => {
  return (
    <div class="app">
      <div class="header">
        <p class="title">BEST OF WEB 2018</p>
        <div class="techno-container">
          <p class="techno1">#react</p>
          <p class="techno2">#redux</p>
          <p class="techno3">#redux-saga</p>
        </div>
      </div>
      <div class="counters-container">
        <CounterCat {...props} />
      </div>
      <div class="footer">
        <img class="twitter-logo" src="twitter.png" />
        <p class="twitter-pseudo">@AuroreMa27</p>
        <img class="twitter-logo" src="twitter.png" />
        <p class="twitter-pseudo">@bam_lab</p>
      </div>
    </div>
  );
};

const CounterCat = props => {
  return (
    <div class="counter-container">
      <img class="animal" src="cat.png" />
      <button
        class="button"
        onClick={() => {
          return store.dispatch({ type: 'ADD_CAT' });
        }}
      >
        ADD ONE CAT
      </button>
      <div class="result">
        <p class="text"> {props.count}</p>
        <img class="small-animal" src="cat.png" />
      </div>
    </div>
  );
};

const { createStore } = Redux;
const store = createStore(counterCatReducer, 0);
const render = () => {
  ReactDOM.render(<App count={store.getState()} />, document.getElementById('root'));
};

store.subscribe(render);
render();