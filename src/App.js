import {Provider} from 'react-redux';
import SiteRouter from './components/SiteRouter';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './reduxstore/store';
import 'neuicons';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SiteRouter/>
            </PersistGate>
        </Provider>
    );
}

export default App;
