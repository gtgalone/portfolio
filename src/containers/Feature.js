import React from 'react';
import { Link } from 'react-router';

class Feature extends React.Component {
    render() {
        return (
            <div>
                <div className="container featureHeader">
                    Feature
                </div>
                <div className="container portfolio">
                    <Link to="/memo">
                        <div className="portfolio-card">
                            <div className="card-title">
                                <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/15578569_130073714151181_2009657027554066505_n.jpg?oh=b6f355e5dbaf3aa3c745b7b8bc827ee5&oe=58E8CF2B" width="100%" height="100%" />
                            </div>
                            <div className="card-action">
                                Reactjs, MaterializeCSS, Mongodb <br />기반 무한 스크롤 메모장
                            </div>
                        </div>
                    </Link>
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

export default Feature;
