import React from 'react';
import './SeasonDisplay.css';

const seasonConfig ={
    summer : {
        text: "Summer Season",
        iconName: 'sun'
    },
    winter : {
        text: "Winter Season",
        iconName :'snowflake'
    },
    spring : {
        text: "Spring Season",
        iconName : "tree"
    },
    autumn : {
        text: "Autumn Season",
        iconName: "leaf"
    }
}

const getSeason = (lat,month) =>
{
    if(month>2 && month<5)
        return lat >0 ? 'spring' : 'autumn';
    else if(month>5 && month<8)
        return lat> 0 ? 'summer' : 'winter';
    else if(month>8 && month<11)
        return lat > 0 ? 'autumn' : 'spring';
    else
        return lat>0 ? 'winter' : 'summer';
}


const SeasonDisplay = (props) =>
{
    console.log(props);
    const season = getSeason(props.lat,new Date().getMonth());
    console.log(season);
    const {text, iconName} = seasonConfig[season];
    const style = iconName + ' icon';
    return (
    <div className={"Season-display "+season}>
        <i className={'icon-left '+style+' massive'}/>
        <h1>{text}</h1>
        <i className={'icon-right '+style+' massive'}/>
    </div>
    );
};

export default SeasonDisplay;
