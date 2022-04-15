import { container, containerLogo, logoImg, containerLine, line, containerLinks, secondContainerLinks, noUnderLine, divStyle, spanNum, spanCont } from './Navbar.module.css'
import logo from '../../../../assets/shared/logo.svg'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Navbar = () => {

    return (
        <div className={container}>

            <div className={containerLogo}>
                <img src={logo} className={logoImg} />
            </div>

            <div className={containerLine}>
                <div className={line}></div>
            </div>

            <div className={containerLinks}>
                <div className={secondContainerLinks}>

                    <div className={divStyle}>
                        <Link to="/" className={noUnderLine}>
                            <span className={spanNum}>00</span> <span className={spanCont}> HOME</span>
                        </Link>
                    </div>

                    <div className={divStyle}>
                        <Link to="/destination/Moon" className={noUnderLine}>
                            <span className={spanNum}>01</span> <span className={spanCont}> DESTINATION</span>
                        </Link>
                    </div>

                    <div className={divStyle}>
                        <Link to="/crew" className={noUnderLine}>
                            <span className={spanNum}>02</span> <span className={spanCont}> CREW</span>
                        </Link>
                    </div>

                    <div className={divStyle}>
                        <Link to="/technology" className={noUnderLine}>
                            <span className={spanNum}>03</span> <span className={spanCont}> TECHNOLOGY</span>
                        </Link>
                    </div>
                    
            </div>
            </div>
        </div>
    )
}
export default Navbar;

