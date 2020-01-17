class Hello extends React.Component{
    render(){
        var exclamation = "!".repeat(this.props.exclamation)
        return (
            <div>
                <h1>Hello {this.props.to} from {this.props.from} {exclamation}</h1>
            </div>
        );
    }
}