
const Düsseldorf = (props) => {
    return ( <>
            <article className="wetter-info">
                <span>{props.weather}</span> in {props.name}
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="icon" />
            </article>
            <article>
                <div><span>Temperatur:</span>  {props.temp} °C</div>
                <div><span>Wind:</span> {props.wind} km/h</div>
            </article>
    </> );
}
 
export default Düsseldorf;