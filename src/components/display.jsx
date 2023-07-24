function display({ displayIn, handleCon, displayEqual, handleEqual, handleOnclick, handleClear, displayOut }) {
    return (
        <div className="container d-flex justify align-items-center" style={{ minHeight: "100vh" }}>
            <div className="text-center shadow-sm bg-body-tertiary bg-opacity-25 container border border-2 rounded-4 border-dark border-opacity-10" style={{ width: "200px" }}>
                < div className="row-2" >
                    <div className="col bg-white bg-opacity-75 my-2 rounded-3 p-2 text-end text-align-center">{displayOut}<br /> {displayIn} <br />{displayEqual}</div>
                </div >
                <div className="row gap-2 my-2">
                    <button onClick={handleClear} className="col-5 btn btn-primary btn p-2 ms-2 rounded-2 bg" >Clear</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >9</button>
                    <button onClick={handleCon} className="col btn btn-primary p-2 me-2 rounded-2 bg" >+</button>
                </div>
                <div className="row gap-2 ">
                    <button onClick={handleOnclick} className="col  bg-white btn p-2  rounded-2 bg ms-2" >6</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >7</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >8</button>
                    <button onClick={handleCon} className="col btn btn-primary p-2 me-2 rounded-2 bg" >-</button>

                </div>
                <div className="row gap-2 my-2">
                    <button onClick={handleOnclick} className="col bg-white btn p-2 ms-2 rounded-2 bg" >3</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >4</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >5</button>
                    <button onClick={handleCon} className="col btn btn-primary p-2 me-2 rounded-2 bg border" >*</button>
                </div>
                <div className="row gap-2 my-2">
                    <button onClick={handleOnclick} className="col bg-white btn p-2 ms-2 rounded-2 bg" >0</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >1</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >2</button>
                    <button onClick={handleCon} className="col btn btn-primary p-2 me-2 rounded-2 bg border" >/</button>
                </div>
                <div className="row gap-2 my-2">
                    <button onClick={handleOnclick} className="col bg-white btn p-2 ms-2 rounded-2 bg" >(</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >)</button>
                    <button onClick={handleOnclick} className="col bg-white btn p-2  rounded-2 bg" >.</button>
                    <button onClick={handleEqual} className="col btn btn-primary p-2 me-2 rounded-2 bg border" >=</button>
                </div>
            </div >
        </div >
    )
}

export default display;