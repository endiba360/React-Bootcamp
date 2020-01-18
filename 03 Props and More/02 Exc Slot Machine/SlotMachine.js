class SlotMachine extends React.Component{
    render(){
        const {emoji01, emoji02, emoji03} = this.props;
        const isWinner = (emoji01 === emoji02) && (emoji02 === emoji03);

        return(
            <div>
                <h2>Slot Machine</h2>
                <p>{emoji01} - {emoji02} - {emoji03}</p>
                <p>{isWinner ? 'Congratulation! You win' : 'Sorry bro :c'}</p>
            </div>
        );
    }
}