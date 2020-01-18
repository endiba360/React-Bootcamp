class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <SlotMachine emoji01="👾" emoji02="👽" emoji03="👻"/>
                <SlotMachine emoji01="👾" emoji02="👽" emoji03="👻"/>
                <SlotMachine emoji01="👾" emoji02="👽" emoji03="👻"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));