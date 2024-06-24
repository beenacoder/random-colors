import { useEffect, useState } from "react"


function Random() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#ccc');

    const makeRandom = (lenght) => {
        return Math.floor(Math.random() * lenght);
    }

    const handleHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[makeRandom(hex.length)];
        }
        setColor(hexColor);
    }

    const handleRgbColor = () => {
        const r = makeRandom(256);
        const g = makeRandom(256);
        const b = makeRandom(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === 'rgb') handleRgbColor();
        else handleHexColor();
    }, [typeOfColor])

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color
        }}>
            <div className="buttons">
                <button onClick={() => { setTypeOfColor('hex') }} >Hexadecimal</button>
                <button onClick={() => { setTypeOfColor('rgb') }}>RGB</button>
                <button onClick={typeOfColor === 'hex' ? handleHexColor :
                    typeOfColor === 'rgb' && handleRgbColor}
                >Generar color</button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '60px',
            }}>
                <h3>{typeOfColor.toUpperCase()}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default Random