// Reducer
const imageReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'SET_IMAGE_LINK':
      return { ...state, link: action.payload.link };
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
      <img class="image" src={props.image.link} />
      <button
        class="button"
        onClick={() => {
          return store.dispatch({ type: 'INCREMENT_COUNT' });
        }}
      >
        DISPLAY AND COUNT IMAGES FROM UNSPLASH
      </button>
      <div class="result">
        <p class="text"> {props.image.count} 🌇</p>
      </div>
    </div>
  );
};

const { createStore } = Redux;
const store = createStore(imageReducer, { count: 0, link: '' });
const render = () => {
  ReactDOM.render(<App image={store.getState()} />, document.getElementById('root'));
};

store.subscribe(render);
render();
