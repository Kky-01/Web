import React, { useState } from "react";
import style1 from "./style5051";
const Page51 =()=> {
  const [touch1, setTouch1] = useState(0); 
  const [touch2, setTouch2] = useState(0);
  const [touch3, setTouch3] = useState(0);
  const [touch4, setTouch4] = useState(0); 
  const [touch5, setTouch5] = useState(0); 
  const [touch6, setTouch6] = useState(0);
  const [touch7, setTouch7] = useState(0);
  const [touch8, setTouch8] = useState(0);
  const [touch9, setTouch9] = useState(0);
  const [touch10, setTouch10] = useState(0);
  const Pass = () => {
    let D1 = touch1 === 2 ? 1 : 0;
    let D2 = touch2 === 2 ? 1 : 0;
    let D3 = touch3 === 2 ? 1 : 0;
    let D4 = touch4 === 1 ? 1 : 0;
    let D5 = touch5 === 1 ? 1 : 0;
    let D6 = touch6 === 2 ? 1 : 0;
    let D7 = touch7 === 1 ? 1 : 0;
    let D8 = touch8 === 1 ? 1 : 0;
    let D9 = touch9 === 1 ? 1 : 0;
    let D10 = touch10 === 1 ? 1 : 0;
    if (D1 + D2 + D3 + D4 + D5 + D6 + D7 + D8 +D9+D10 === 8) {
    }
    return <p> 정답!</p>
  };
      const hClick1 = () => {
    setTouch1((prevTouch) => (prevTouch + 1) % 2);
    };
      const getIS1 = (base) => {
    switch (touch1) {
      case 0:
        return base;
      case 1:
        return "https://imgur.com/4BbTpHD.png";
     
      default:
        return base;
     }};
      const hClick2 = () => {
      setTouch2((prevTouch) => (prevTouch + 1) % 2);
    };
      const getIS2 = (base) => {
      switch (touch2) {
        case 0:
          return base;
        case 1:
          return "https://imgur.com/4BbTpHD.png";
        default:
          return base;
      }};
    const hClick3 = () => {
      setTouch3((prevTouch) => (prevTouch + 1) % 2);
    };
        const getIS3 = (base) => {
      switch (touch3) {
        case 0:
          return base;
        case 1:
          return "https://imgur.com/4BbTpHD.png";
        default:
          return base;
       }};
       const hClick4 = () => {
        setTouch4((prevTouch) => (prevTouch + 1) % 2);
    };
          const getIS4 = (base) => {
        switch (touch4) {
          case 0:
            return base;
          case 1:
            return "https://imgur.com/4BbTpHD.png";
          default:
            return base;
         }};
         const hClick5 = () => {
          setTouch5((prevTouch) => (prevTouch + 1) % 2);
        };
            const getIS5 = (base) => {
          switch (touch5) {
            case 0:
              return base;
            case 1:
              return "https://imgur.com/4BbTpHD.png";
            default:
              return base;
           }}
           const hClick6 = () => {
            setTouch6((prevTouch) => (prevTouch + 1) % 2);
        };
              const getIS6 = (base) => {
            switch (touch6) {
              case 0:
                return base;
              case 1:
                return "https://imgur.com/4BbTpHD.png";
              default:
                return base;
             }};
             const hClick7 = () => {
              setTouch7((prevTouch) => (prevTouch + 1) % 2);
            };
                const getIS7 = (base) => {
              switch (touch7) {
                case 0:
                  return base;
                case 1:
                  return "https://imgur.com/4BbTpHD.png";
                default:
                  return base;
               }};

               const hClick8 = () => {
                setTouch8((prevTouch) => (prevTouch + 1) % 2);
            };
                  const getIS8 = (base) => {
                switch (touch8) {
                  case 0:
                    return base;
                  case 1:
                    return "https://imgur.com/4BbTpHD.png";
                  default:
                    return base;
                 }}; 
                 const hClick9 = () => {
                    setTouch9((prevTouch) => (prevTouch + 1) % 2);
                 };
                 
                  const getIS9 = (base) => {
                switch (touch9) {
                  case 0:
                    return base;
                  case 1:
                    return "https://imgur.com/4BbTpHD.png";
                  default:
                    return base;
                 }}; 

                 const hClick10 = () => {setTouch10((prevTouch) => (prevTouch + 1) % 2)

                 };
                    const getIS10 = (base) => {
                switch (touch10) {
                  case 0:
                    return base;
                  case 1:
                    return "https://imgur.com/4BbTpHD.png";
                  default:
                    return base;
                 }}; 

               return (
    <div style={style1.Box4}>
      당뇨 예방법 기억하기
      <header style={style1.Box3}>
       앞서 기억해둔 당뇨 예방법 음식을 찾아아 동그라미 하세요.
      <p style={style1.Box2}>
        <p style={style1.Box1}>
        <button onClick={hClick1} style={style1.dButtom}>
          <img 
              style={style1.dButtom}
              src={getIS1("https://imgur.com/VA573W1.png")} 
           />
         </button>

         <button onClick={hClick2} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS2("https://imgur.com/EXd5RkZ.png")}/>
           </button>
           <button onClick={hClick3} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS3("https://imgur.com/OoyCcMd.png")}/>
           </button>
          <button onClick={hClick4} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS4("https://imgur.com/d4AuK8M.png")}/>
           </button>  
        </p> 
        <p style={style1.Box1}>
        <button onClick={hClick5} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS5("https://imgur.com/cW42vW1.png")}/>
        </button>
          <button onClick={hClick6} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS6("https://imgur.com/q19GBX1.png")}/>
           </button>
           <button onClick={hClick7} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS7("https://imgur.com/rBxiA9d.png")}/>
        </button> 
              <button onClick={hClick8} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS8("https://imgur.com/6SalYZU.png")}/>
           </button> 

           <button onClick={hClick9} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS9("https://imgur.com/RSpgVta.png")}/>
           </button> 

           <button onClick={hClick10} style={style1.dButtom}>
          <img
              style={style1.dButtom}
              src={getIS10("https://imgur.com/1Uoe7St.png")}/>
           </button>            
        </p>
      </p>
      </header>
    </div>
  );
};

export default Page51;
