import {
    Link
} from 'react-router-dom';

export default function layout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="#" className="site_logo">
                            {"< Md.Almas Ali />"}
                        </Link>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tutorials">Tutorials</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {/* <li className="colaps_btn">☰</li> */}
                    </ul>
                </nav>
            </header>

            {/* <div className="bg-color">
                <canvas id="preloader" width="200" height="200"></canvas>
            </div> */}
            <div className="bg-color" id="preloader">
                <div className="location">
                    <div className="loader">
                        <span>L</span>
                        <span>O</span>
                        <span>A</span>
                        <span>D</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                    </div>
                </div>
            </div>
        </>
    )
}
