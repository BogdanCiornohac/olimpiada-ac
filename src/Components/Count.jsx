import React from "react";
import Countdown from "react-countdown";
import TimeUnit from "./TimeUnit";
import './count.css'
// const Complete = (props) => <div className="complete">{props.text}</div>;

const renderer1 = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <button onClick={() => window.open("https://forms.gle/1Tyy3CYSva5YiFbQ6", '_blank')} className="registration">Inscrie-te</button>;
    } else {
        return (
            <div className="count-down">
                <div className="time-section">
                    <TimeUnit unit={"DD"} value={days} />
                    <TimeUnit unit={"HH"} value={hours} />
                </div>
                <span style={{fontSize:'60px', color:'white', fontWeight:'700'}}>:</span>
                <div className="time-section">
                    <TimeUnit unit={"MM"} value={minutes} />
                    <TimeUnit unit={"SS"} value={seconds} />
                </div>
            </div>
        );
    }
};

// const renderer2 = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//         return <Complete text={"Maratonul a inceput. Mult noroc!"} />;
//     } else {
//         return (
//             <div className="count-down">
//                 <TimeUnit unit={"Zile"} value={days} />
//                 <TimeUnit unit={"Ore"} value={hours} />
//                 <TimeUnit unit={"Minute"} value={minutes} />
//                 <TimeUnit unit={"Secunde"} value={seconds} />
//             </div>
//         );
//     }
// };

const CountDown = () => {
    return <section className="countdown-section" style={{ color: '#FF2400' }}>
        <div>
            <div className="count">
                <h1 style={{marginBottom:'10px'}}>INSCRIERI</h1>
                <Countdown date={'2023-04-16T17:00:00'} renderer={renderer1}/>
            </div>
            {/* <div className="count">
                <h1>START</h1>
                <Countdown date={'2023-04-16T10:00:00'} renderer={renderer2} />
            </div> */}
        </div>
    </section>
}

export default CountDown;