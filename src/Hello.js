import React from 'react';


//Hello라는 컴포넌트는 만듦
function Hello({name, color, isSpecial}) {
    return (
        <div style={{color}}>
            {isSpecial ? "스페셜 " : "낫스페셜 "}
            안녕하세요 {name}
        </div>

    )
}

Hello.defaultProps = {
    name:"이름없음"  
};

export default Hello;