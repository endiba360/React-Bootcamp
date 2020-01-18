class App extends React.Component{
    render(){
        return(
            <div>
                <Hello name="Jhon"/>
                <Hello name="Ringo" from="Mr.President"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));