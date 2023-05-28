import React from 'react';
import zxcvbn from 'zxcvbn';

const Components = ({password}) => {

    const testResult= zxcvbn(password)
    const num= testResult.score * 100/4
    console.log(num)

    const changeWordPassword=()=>{
        switch(testResult.score){
            case 0:
                return "very weak";
            case 1:
                return 'weak';
            case 2:
                return 'noraml';
            case 3: 
                return "good";
            case 4:
                return "perfect";
            default:
                return ''
        }
    }

    let chanePasswordColor=()=>{
        switch(testResult.score){
            case 0:
                return "#999"
            case 1:
                return "#ea1111"
            case 2:
                return '#ffad00'
            case 3:
                return '#9bc158'
            case 4:
                return '#00b500'
            default:
                return "none"
        }
    }

    const increaseWidthPassword=()=>({
        width:`${num}%`,
        background:chanePasswordColor(),
        height:'10px',
        transition:'all .3s ease',
        borderRadius:'3px',
    })

    return (
        <div style={{marginTop:'10px', height:'auto' }} className='widthPassword'>
            <div style={increaseWidthPassword()}>

            </div>
            <p>{changeWordPassword()}</p>
        </div>
    );
};

export default Components;