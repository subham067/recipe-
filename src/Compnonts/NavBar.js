import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light border text-light" style={{background: "#f7810a",fontSize:"1.2rem",fontWeight:"bold",color:"#fff"}}>
                <div className="container-fluid container " style={{background: "#f7810a"}}>
                    <a className="navbar-brand "  href="#" style={{color:"#fffff"}}>
                       <h3>Navbar</h3> 
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <form className="d-flex mx-auto ">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Recipe"
                                aria-label="Search"
                            />
                            {/* <button className="btn btn-outline-success" type="submit">
                                Search
                            </button> */}
                        </form>
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                >
                                    Disabled
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavBar
