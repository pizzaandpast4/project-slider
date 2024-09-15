/* eslint-disable react/prop-types */

export function SliderComponent({ inputValue, handleInputChange, backgroundColor, textColor }) {

const inputStyle = {
    appearance: "none",
    width: "150px",
    height: `25px`,
    cursor: "pointer",
    background: "lightGray"
}

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "100px"
        }}>

            <input type="range" min={0} max={100} onInput={handleInputChange} value={inputValue} style={inputStyle}/>
            <div className="circle" style={{
    
    color: !textColor ? "black" : textColor,
    background: !backgroundColor ? "lightgray" : backgroundColor,
    height: `${inputValue}px`,
    width: `${inputValue}px`,
    borderRadius: "50%"
}}>
    <span>{inputValue}</span>
</div>

        </div>
    )
}

export default SliderComponent