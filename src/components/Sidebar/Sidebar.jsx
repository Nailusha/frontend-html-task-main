import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isOpened: false
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
    };

    toggleSidebar = () => {
        this.setState((prevState) => ({ isOpened: !prevState.isOpened }));
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        return (
            <div className={classnames('sidebar', { opened: isOpened, closed: !isOpened })}>
                <div className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt="TensorFlow logo"
                        className="logo-image"
                    />
                    <span className={classnames('sidebar-title', { hidden: !isOpened })}>TensorFlow</span>
                    <button className="button" onClick={this.toggleSidebar}>
                        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                    </button>
                </div>

                <div>
                    {
                        routes.map((route) => (
                            <div className="route-item" key={route.title} onClick={() => this.goToRoute(route.path)}>
                                <FontAwesomeIcon icon={route.icon} />
                                <span className={classnames('route-title', { hidden: !isOpened })}>{route.title}</span>
                            </div>
                        ))
                    }
                </div>

                <div>
                    {
                        bottomRoutes.map((route) => (
                            <div className="route-item" key={route.title} onClick={() => this.goToRoute(route.path)}>
                                <FontAwesomeIcon icon={route.icon} />
                                <span className={classnames('route-title', { hidden: !isOpened })}>{route.title}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="profile-section">
                    <img
                        alt="Profile"
                        onClick={this.toggleMenu}
                    />
                    {this.state.isMenuOpen }
                </div>
            </div>
        );
    }

}
