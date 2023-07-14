// import React, { useState } from "react";

function About(props) {
  // const [myStyle1, setMyStyle1] = useState({
  //     color: "white",
  //     backgroundColor: "rgb(52 53 65)",
  // });

  // const [myStyle, setMyStyle] = useState({
  //     color: "white",
  //     backgroundColor: "rgb(68 70 84)",
  // });

  // const [btntext, setBtntext] = useState("Enable Dark Mode")

  // function toggaleMode() {
  //     console.log('Toggled');
  //     if (myStyle.color === 'white') {
  //         setMyStyle({
  //             color: "black",
  //             backgroundColor: "white",
  //         });
  //         setBtntext("Enable Dark Mode")
  //         setMyStyle1({
  //             color: "black",
  //             backgroundColor: "white",
  //         })

  //     }else
  //     {
  //         setMyStyle({
  //             color: "white",
  //             backgroundColor: "rgb(68 70 84)",
  //         });
  //         setMyStyle1({
  //             color: "white",
  //             backgroundColor: "rgb(52 53 65)",
  //         })
  //         setBtntext("Enable Light Mode")

  //     }
  // }

  return (
    <div className={`container my-3`}>
      <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className={`accordion-header`} style={props.aboutMode}>
            <button
              className={`accordion-button`}
              style={props.aboutMode}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse show`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.aboutMode}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.aboutMode}>
          <h2 className="accordion-header">
            <button
              style={props.aboutMode}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            style={props.aboutMode}
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.aboutMode}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.aboutMode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={props.aboutMode}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            style={props.aboutMode}
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.aboutMode}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-dark my-2 mx-2" onClick={toggaleMode}>{btntext}</button> */}
    </div>
  );
}

export default About;
