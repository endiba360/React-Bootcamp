class App extends React.Component{
    render(){
        return(
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul"
                    exclamation={5}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));