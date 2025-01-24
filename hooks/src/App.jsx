// import logo from './logo.svg';
import './App.css';
import { State } from './State';
// import { Effect } from './Effect';
// для Context
// import { ContextMy } from './Context';
// import { Books } from './components/Books';

// import { LayoutEffect } from './LayoutEffect';
// import { DualCounter } from './Callback_Memo';
// import { ParentComponent } from './ImperativeHandle';
// import { Reducer } from './Reducer';
import { CustomHooks } from './CustomsHooks';

function App() {

  return (
    <div className="App">
      {/* <State /> */}
      {/* <Effect /> */}

      {/*Обернем все приложение в наш кастомный Contex и внутри него будем что-либо использовать]  */}
      {/* <ContextMy >
        <Books />
      </ContextMy> */}

      {/* <LayoutEffect /> */}
      {/* <DualCounter /> */}
      {/* <ParentComponent /> */}
      {/* <Reducer /> */}
      {/* собственные хуки */}
      <CustomHooks />
    </div>
  );
}

export default App;
