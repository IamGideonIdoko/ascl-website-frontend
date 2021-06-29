
import { Provider } from 'react-redux';
import store from './reduxstore/store';
import SiteRouter from './components/SiteRouter';

function App() {
    return (
        <Provider store={store}>
            <SiteRouter />
        </Provider>
    );
}

export default App;
