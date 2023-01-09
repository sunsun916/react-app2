import React, { useEffect, useRef } from 'react';

// useEffect가 화면에 불러와지면 addEventListener가 실행되라 (resize가 되면 실행되라)
//useRef 를 사용하게 되면 직접 DOM에 접근 가능 따라서 컴포넌트 자체를 재랜더링 호출하지 않고 최적화.
//react는 가상돔을 가지고 변경이 된것만 실제하는 DOM으로 만들어주는것 

function Resize2() {

  console.log('리사이즈');
  const width = useRef('null'); //상단에 useRef가 import 되었는지 확인

  //확인하려고하면 무조건 current값 붙이기
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      width.current = window.innerWidth;
      console.log(width.current);
    })
  },[]);

  return (
    <>
      
    </>
  );
}

export default Resize2;