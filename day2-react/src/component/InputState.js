import React, { useState } from 'react';

function InputState(props) {
    
    // useState 훅으로 정의한 변수는 상태 변수
    const [username,setUsername] = useState('')
    const [nickname,setNickname] = useState('')
    
    //상태 변수username 과 nickname 값이 변경되면 리렌더링
    console.log('리렌더링',username,nickname)
    
    //OK 버튼 이벤트
    const handleOK = () => {
        alert(`${username} : ${nickname}`)
        setUsername('')
        setNickname('')
    }
    
    //닉네임 input
    const handleNickKeydown = (e) => {
        if(e.key ==='Enter')
            handleOK()
    }
    return (
        <div>
            <h3>input 에 state 변수 활용</h3>
            <p>input value 에 상태 변수를 적용하면 onChange 이벤트 꼭 필요합니다.</p>
            <hr/>
            <input type='text'
                    placeholder='사용자 이름 입력하세요.'
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                    />
            <input type='text'
                    placeholder='사용자 닉네임 입력하세요.'
                    value={nickname}
                    onKeyDown={handleNickKeydown}
                    onChange={(e) => setNickname(e.target.value)}
                    />
                    <button onClick={handleOK}>입력완료</button>
        </div>
    );
}

export default InputState;