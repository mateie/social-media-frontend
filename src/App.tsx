import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./assets/less/app.less";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Fresh from "./pages/post/Fresh";

const App = () => {
    return (
        <>
            <Navigation />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Fresh />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
