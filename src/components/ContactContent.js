import React from 'react';
import './ContactContent.css'

function ContactContent(props) {
  return (
    <>
      <div className='contact__content'>
        <div className='contact__content__info'>
        <h1 className='contact__content__h1'>{props.h1}</h1>
        <p className='contact__content__p'>{props.text}</p>
        <br></br>
        <h1 className='contact__content__h1'>{props.h11}</h1>
        <hr></hr>
        <h2 className='contact__content__h2'>{props.h2}</h2>
        <h3 className='contact__content__h3'>{props.h3}</h3>
        <hr></hr>
        <br></br>
        <p className='contact__content__p'>{props.text1}</p>
        <br></br>
        <ul>
        <li> <p className='contact__content__p'>{props.text2}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text3}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text4}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text5}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text6}</p></li>
        </ul>
        <br></br>
        <br></br>
        <hr></hr>
        <h2 className='contact__content__h2'>{props.h21}</h2>
        <h3 className='contact__content__h3'>{props.h31}</h3>
        <hr></hr>
        <br></br>
        <p className='contact__content__p'>{props.text7}</p>
        <br></br>
        <ul>
        <li> <p className='contact__content__p'>{props.text8}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text9}</p></li>
        <br></br>
        </ul>
        <br></br>
        <br></br>
        <h1 className='contact__content__h1'>{props.h13}</h1>
        <br></br>
        <div id="myProgress">
            <div id="myBar1">6/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text10}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar2">5/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text11}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar3">5/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text12}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar4">8/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text13}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar5">8/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text14}</p>
        </div>
      </div>
    </>
  );
}

export default ContactContent;