import React from 'react';
import PropTypes from 'prop-types';

const LogicalTest = props => {
    // props,title이 없으면 undefined ==> 거짓. 값이 있으면 참.
    return props.title && (
        <div>
            <h3>and or 를 사용하는 단축평가 예시; - {props.title}</h3>
        </div>
    );
};

LogicalTest.propTypes = {
    
};

export default LogicalTest;