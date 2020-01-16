function getRandomNumber()
{
    return Math.floor(Math.random() * 10) + 1;
}

class NumberPicker extends React.Component{
    render(){
        const num = getRandomNumber();
        var message;
        if(num === 7)
        {
            message = <h2>Congratulations!!!</h2>;
        }else
        {
            message = <p>sorry broooo</p>;
        }
        return(
            <div>
                <h1>Your number is: {num}</h1>
                <p>{message}</p>
            </div>
        );
    }
}

ReactDOM.render(<NumberPicker />, document.getElementById('root'));