import { Route, Routes } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import DashboardPage from "./containers/DashboardPage";


function Editor() {
    return (
        <div>

            <Routes>
                <Route path='/admin/*' element={<LoginPage />} />
                <Route path='/dashboard/*' element={<DashboardPage />} />
            </Routes>

        </div>
    );
}

export default Editor;

