import React from 'react';


class Home extends React.Component {
    render() {
        return (
            <div> 
                <video src="https://introreel.s3.ap-south-1.amazonaws.com/inro/debrie_animation.mp4" autoPlay muted loop className="vid" />
            </div>
        )
    }
}
export default Home;
