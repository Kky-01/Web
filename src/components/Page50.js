import React, { useState } from "react";
import styls from "./style5051";

const Page50 =()=> {
  const [inputfood1, setInputFood1] = useState("");
  const [inputfood2, setInputFood2] = useState("");
  const [inputfood3, setInputFood3] = useState("");
  const [inputfood4, setInputFood4] = useState("");
  const [inputfood5, setInputFood5] = useState("");
  const [inputfood6, setInputFood6] = useState("");

    const Pass = () => {
        let D1 = touch1 === "시금치 무침" ? 1 : 0;
        let D2 = touch2 ===" 고등어 구이" ? 1 : 0;
        let D3 = touch3 === "현미밥" ? 1 : 0;
        let D4 = touch4 === "호박전" ? 1 : 0;
        let D5 = touch5 === "연어 샐러드 "? 1 : 0;
        let D6 = touch6 === "시금치 된장국" ? 1 : 0;
        if (D1 + D2 + D3 + D4 + D5 + D6 === 6) {
          <div> 정답!</div>
        };
      };
  return (
    <div className="container">
      <img src={styls.Box1} alt="당뇨예방법 기억하기" />
      <p className="subtitle">
        앞서 기억해 둔 <b style={{ color: "red" }}>음식의 이름을 해당하는 자리에 </b>적어보세요
      </p>
      <br/>
        <p style={styls.Box2}>
        1.
        <input
          type="text"
          value={inputfood1}
          onChange={(e) => setInputFood1(e.target.value)}
        />
        3.
        <input
          type="text"
          value={inputfood2}
          onChange={(e) => setInputFood2(e.target.value)}
        />
        5.
        <input
          type="text"
          value={inputfood3}
          onChange={(e) => setInputFood3(e.target.value)}
        />
      </p>
      <p style={styls.Box2}>
        2.
        <input
          type="text"
          value={inputfood4}
          onChange={(e) => setInputFood4(e.target.value)}
        />
        4.
        <input
          type="text"
          value={inputfood5}
          onChange={(e) => setInputFood5(e.target.value)}
        />
        6.
        <input
          type="text"
          value={inputfood6}
          onChange={(e) => setInputFood6(e.target.value)}
        /> 
        </p>
        <Button onClick={Pass} className="cheak">
        정답 확인
        </Button>
    </div>
  );
};

export default Page50;
