import React from "react";
import styls from "./style5051";

const Page50 =()=> {
    const [inputfood1, cfoodStates1] = useState("");
    const [inputfood2, cfoodStates2] = useState("");
    const [inputfood3, cfoodStates3] = useState("");
    const [inputfood4, cfoodStates4] = useState("");
    const [inputfood5, cfoodStates5] = useState("");
    const [inputfood6, cfoodStates6] = useState("");

    const Pass = () => {
        let D1 = touch1 === "시금치 무침" ? 1 : 0;
        let D2 = touch2 ===" 고등어 구이" ? 1 : 0;
        let D3 = touch3 === "현미밥" ? 1 : 0;
        let D4 = touch4 === "호박전" ? 1 : 0;
        let D5 = touch5 === "연어 샐러드 "? 1 : 0;
        let D6 = touch6 === "시금치 된장국" ? 1 : 0;
        if (D1 + D2 + D3 + D4 + D5 + D6 === 8) {
          return <Page051 />;
        }
        return null;
      };

      const Page46 = ({ navigation }) => {}
  return (
    <div className="container">
      <img src={styls.Box1} alt="당뇨예방법 기억하기" />
      <p className="subtitle">
        앞서 기억해 둔 <b style={{ color: "red" }}>음식의 이름을 해당하는 자리에 </b>적어보세요
      </p>
      <br/>
        <p style={styls.Box2}>
            1.
            <input type="text" value={inputfood1}/>
            3.
            <input type="text" value={inputfood2}/>
            5.
            <input type="text" value={inputfood3}/> 
        </p>
            <p style={styls.Box2}>
        2.
        <input type="text" value={inputfood4}/> 
        4.
        <input type="text" value={inputfood5}/> 
        6.
        <input type="text" value={inputfood6}/> 
        </p>
    </div>
  );
};

export default Page50;