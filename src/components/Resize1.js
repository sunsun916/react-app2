import React, { useEffect, useState } from 'react';

// 부라우저 크기가 달라질때마다 출력됨.(현재, 원도우객체사용하기때문에 return에는 작성할게 없음)

//useState라는 훅을 사용하지 않으면 상태변화 감지 못함.
//useEffect 는 윈도우가 변할때 setWidth이 값을 받아서 화면이 렌더링이 되면 거기에 맞춰서 한번 보여주고 재랜더링이 될때마다 보여줄 수 있게끔 해줌.

function Resize1() {
  console.log('리사이즈');

  const [width, setWidth] =useState(null);

  useEffect(()=> {
     window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth)
     })
  },[]);

  useEffect(()=>{
    console.log(width);
  },[width]);

  return (
    <>
    
    </>
  );
}

export default Resize1;