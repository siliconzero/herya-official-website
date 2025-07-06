import { Routes, Route } from 'react-router-dom';
import { pageConfig } from './config/page-config';
import { LayoutApp } from './components/layout/layout-app';

function App() {
    return (
        <Routes>
            {pageConfig.map((item) => {
                return (
                    <Route
                        path={item.href}
                        element={
                            <LayoutApp
                                navbar={item.layout.navbar}
                                footer={item.layout.footer}
                            >
                                <item.element />
                            </LayoutApp>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
