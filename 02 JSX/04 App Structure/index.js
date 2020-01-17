class App extends React.component{
    render(){
        return(
            <div>
                <Hello/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));