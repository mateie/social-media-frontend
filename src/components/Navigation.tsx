import "../assets/less/navigation.less";

import { Link } from "react-router-dom";

import { Button } from "primereact/button";

import { FaStar } from "react-icons/fa";
import { ImFeed } from "react-icons/im";

const Navigation = () => {
    return (
        <div className="nav grid">
            <div className="col nav-left">
                <ul>
                    <li>
                        <Link to="/feed">
                            <Button className="p-button-text" icon={<ImFeed color="lightblue" />} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/"><Button className="p-button-text" icon={<FaStar color="orange" />} /></Link>
                    </li>
                </ul>
            </div>
            <div className="col nav-right">
            </div>
        </div>
    );
};

export default Navigation;