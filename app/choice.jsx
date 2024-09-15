import useState from 'react';
import styles from './page.module.css'
export default function Choices() {
  // const [input, setInput] = useState([])
  return (
      <>
      <div style={{ width: '100%', height: '100%', paddingTop: 111, paddingBottom: 229, paddingLeft: 116, paddingRight: 116, background: 'linear-gradient(0deg, #90DBBC 0%, #90DBBC 100%), linear-gradient(160deg, rgba(0, 255, 255, 0) 0%, rgba(113.69, 187.17, 255, 0.18) 35%, rgba(0, 25.50, 255, 0.50) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
        <div style={{ width: 502, height: 737, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
          <div style={{ width: 502, height: 737, position: 'relative' }}/>
            <div style={{ width: 502, height: 737, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 53 }} />
            <div style={{ width: 388, height: 102, left: 56, top: 46, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Instrument Sans', fontWeight: '400', wordWrap: 'break-word' }}>Pick your top choice</div>
          </div>
        </div>
        {/* image */}
        <div style={{ width: 502, height: 737, position: 'relative' }}>
          <form>
            <div style={{ width: 159, height: 88, left: 56, top: 572, position: 'absolute', background: '#526ECF', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="American"/>
            <label for="American">American</label> */}
            <a href="answer/American">American</a>

            <div style={{ width: 159, height: 88, left: 56, top: 292, position: 'absolute', background: '#FFB800', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="Asian"/>
            <label for="Asian">Asian</label> */}
            <a href="answer/Asian">Asian</a>


            <div style={{ width: 159, height: 88, left: 56, top: 435, position: 'absolute', background: '#8ED138', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="European"/> */
            /* <label for="European">European</label> */}
            <a href="answer/European">European</a>

            <div style={{ width: 159, height: 88, left: 56, top: 155, position: 'absolute', background: '#2AC8A2', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="Middle Eastern"/>
            <label for="Middle Eastern">Middle Eastern</label> */}
            <a href="answer/Middle Eastern">Middle Eastern</a>

            <div style={{ width: 159, height: 88, left: 285, top: 155, position: 'absolute', background: '#FF4004', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="Fast Food"/>
            <label for="Fast Food">Fast Food</label> */}
            <a href="answer/Fast Food">Fast Food</a>


            <div style={{ width: 159, height: 88, left: 0, top: 0, position: 'absolute', background: '#0CA21B', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="Healthy"/>
            <label for="Healthy">Healthy</label> */}
            <a href="answer/Healthy">Healthy</a>


            <div style={{ width: 159, height: 88, left: 0, top: 0, position: 'absolute', background: '#2E99BB', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="Vegetarian"/>
            <label for="Vegetarian">Vegetarian</label> */}
            <a href="answer/Vegetarian">Vegetarian</a>


            <div style={{ width: 159, height: 88, left: 0, top: 0, position: 'absolute', background: '#7037A9', borderRadius: 20 }} />
            {/* <input type="radio" name="options" id="Fine Dining"/>
            <label for="Fine Dining">Fine Dining</label> */}
            <a href="answer/Fine Dining">Fine Dining</a>

          </form>
        </div>
      </>
      );
}