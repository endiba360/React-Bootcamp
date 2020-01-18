class Hello extends React.Component{
    static defaultProps = {
        from: 'World'
    }
    render(){
        const {name, from} = this.props;
        
        return(
            <div>
                <hi>Hello there {name} from {from} !!!</hi>
            </div>
        );
    }
}