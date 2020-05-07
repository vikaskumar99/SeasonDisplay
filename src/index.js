import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
/*const App = () =>
{
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );


    return <div>HEllo!!!!!!!!!!!!</div>;
};
*/
class App extends React.Component
{
    state = {lat: null, error:''};

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude})
            },
            (err) => {
                this.setState({error: err.message});
            }
        );
    }
    render()
    {
        if(this.state.error && !this.state.lat)
            return <ErrorMessage />
        if(!this.state.error && this.state.lat)
            return <SeasonDisplay lat={this.state.lat}/>
        return <Loader />
    }
}



ReactDOM.render(<App/>, document.querySelector('#root'));