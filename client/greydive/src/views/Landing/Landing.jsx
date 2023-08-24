import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.div}>
            <h1 className={style.welcome}>Bienvenidos al formulario</h1>
            <h3 className={style.text}>Uno nunca sabe cuando tiene que generar un formulario..</h3>
            <NavLink to="/home">
              <button className={style.home}>Ingreso</button>
          </NavLink>
        </div>
    );
};

export default Landing;