import { useDispatch, useSelector } from "react-redux";
import Display from "../components/display";
import { clearData, evaluateFomular, fetchData, fetchError } from "./calculatorSlice.js";
import { evaluate } from "mathjs";

export function Calculator() {
    const input = useSelector((state) => state.calculator.fomular);
    const output = useSelector((state) => state.calculator.output);
    const display = useSelector((state) => state.calculator.display);
    const equal = useSelector((state) => state.calculator.display[state.calculator.display.length - 1]);
    const dispatch = useDispatch();

    const handle = (event) => {
        const number = event.target.innerHTML;
        dispatch(fetchData(number));
    }
    const handleContinue = (event) => {
        const number = event.target.innerHTML;
        if (display.length > 0 && output.length === 0) {
            const number = display[display.length - 1];
            dispatch(fetchData(number));
        }
        if (input !== number) {
            dispatch(fetchData(number));
        }
    }
    const handleClear = () => {
        dispatch(clearData());
    }
    const handleEval = () => {
        try {
            const result = evaluate(output);
            dispatch(evaluateFomular(result));
        } catch (error) {
            dispatch(fetchError("Error!"));
        }

    }
    return (
        <div>
            <Display handleCon={handleContinue} displayEqual={equal} handleEqual={handleEval} handleOnclick={handle} displayOut={output} handleClear={handleClear} displayIn={input} />
        </div>
    )
}

export default Calculator;