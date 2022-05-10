import "./App.css"
import {Main} from "./component/Main";
import MainDash from "./component/MainDash/MainDash";

function App() {
    return (
        <div className="App">
            <div className="AppGlass">
                <Main/>
                <MainDash/>
            </div>
        </div>
    );
}

export default App;
