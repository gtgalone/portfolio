import React from 'react';
import { Memo } from 'containers';

class Wall extends React.Component {
    render() {
        return (
            <Memo username={this.props.params.username}></Memo>
        );
    }
}


export default Wall;
