class SlotMachine extends React.Component{
    render(){
        const {emoji01, emoji02, emoji03} = this.props;
        const isWinner = (emoji01 === emoji02) && (emoji02 === emoji03);
        const size = {fontSize: '50px', bacgroundColor: "purple"};

        return(
            <div className="Machine">

                <h2>Slot Machine</h2>
                <p style={size}>{emoji01} - {emoji02} - {emoji03}</p>
                
                <p className={isWinner ? 'Machine-winner' : 'Machine-Loser'}>
                    {isWinner ? 'Congratulation! You win' : 'Sorry bro :c'}
                </p>
            
            </div>
        );
    }
}