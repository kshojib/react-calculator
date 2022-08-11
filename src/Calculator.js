import React from "react";


// create a calculator with react
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        result: 0,
        mathResult: ""
        };
        this.clear = this.clear.bind(this);
    }

    input(number){
        console.log(number);

        var mathNumber = number;


        if(number === '÷'){
            mathNumber = '/';
        }else if(number === 'X'){
            mathNumber = '*';
        } 

        // set result state
        this.setState({
            result: (this.state.result === 0 ? '' : this.state.result) +''+ number,
            mathResult: (this.state.mathResult === 0 ? '' : this.state.mathResult) +''+ mathNumber,
        });

    }

    doCalculation(){
        console.log('do calculation');

        this.setState({
            result: parseFloat(eval(this.state.mathResult).toFixed(8)),
            mathResult: parseFloat(eval(this.state.mathResult).toFixed(8)),
        })
    }
    // clear the calculator
    clear(e) {
        e.preventDefault();
        this.setState({
            result: 0,
            mathResult: 0,
            num2: ""
        });
    }



    render() {
        return (
            <div>
                <div className="calculatorBody">
                    

                    <div className="result">{this.state.result}</div>
                    <div className="calculatoritem clear">
                        <span onClick={this.clear}>C</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(7)}>7</span>
                    </div>
                    <div className="calculatoritem">
                        <span  onClick={() => this.input(8)}>8</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(9)}>9</span>
                    </div>
                    <div className="calculatoritem text-green">
                        <span onClick={() => this.input('÷')}>÷</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(4)}>4</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(5)}>5</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(6)}>6</span>
                    </div>
                    <div className="calculatoritem text-green">
                        <span onClick={() => this.input('X')}>X</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(1)}>1</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(2)}>2</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(3)}>3</span>
                    </div>
                    <div className="calculatoritem text-green">
                        <span onClick={() => this.input('-')}>
                            -
                        </span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input(0)}>0</span>
                    </div>
                    <div className="calculatoritem">
                        <span onClick={() => this.input('.')}>.</span>
                    </div>
                    <div className="calculatoritem equal">
                        <span onClick={() => this.doCalculation()}>=</span>
                    </div>
                    <div className="calculatoritem text-green">
                        <span onClick={() => this.input('+')}>+</span>
                    </div>
                </div>
            </div>
        );
    }
}

// export the calculator
export default Calculator;

