import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.div}>
            <h1 className={style.welcome}>Welcome to Survey APP</h1>
            <h3 className={style.text}>You never know when you need a form..</h3>
            <NavLink to="/home">
              <button className={style.home}>Access here!</button>
          </NavLink>
        </div>
    );
};

export default Landing;