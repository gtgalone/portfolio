import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="container layoutHeader">
                    <div>
                        Layout
                    </div>
                </div>

                <div className="container portfolio">
                    <a href="http://www.gtgalone.com" target="blank">
                        <div className="portfolio-card">
                            <div className="card-title">
                                <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/14600968_130053644153188_6336648164337840974_n.jpg?oh=4535231d97f864ca20c3f72b29baf1e5&oe=58B40CA0" width="100%" height="100%" />
                            </div>
                            <div className="card-action">
                                <span>CSS3 Flex-box 기반 레이아웃</span>
                            </div>
                        </div>
                    </a>
                    <div className="portfolio-card">
                        <div className="card-title">

                        </div>
                        <div className="card-action">
                            Coming soon
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="card-title">

                        </div>
                        <div className="card-action">
                            Coming soon
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
