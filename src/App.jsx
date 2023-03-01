// import reactLogo from './assets/react.svg';
// import './App.css';

import LayoutComponent from './components/Layout/Layout.component';
import RouterComponent from './Router';
function App() {
    return (
        <>
            <LayoutComponent>
                <RouterComponent />
            </LayoutComponent>
        </>
    );
}

export default App;
