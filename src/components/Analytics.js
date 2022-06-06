let Reviews= 1281; 
let AverageRating= 4.6; 
let SentimentAnalysis= [960, 122, 321];

const Analytics = (props) => {
    if (props.whichAnalytics === "Reviews"){
    return (
        <div className="analytics">
        <h4>{props.whichAnalytics}</h4>
        <h3> {Reviews}</h3>
        </div>
)} else if (props.whichAnalytics === "Average Rating"){
    return (
        <div className="analytics">
        <h4>{props.whichAnalytics}</h4>
        <h3>{AverageRating}</h3>
        </div>
        );} else {
            return (
            <div className="analytics">
        <h4>{props.whichAnalytics}</h4>
        <h3>{SentimentAnalysis[0]}</h3>
        <h3>{SentimentAnalysis[1]}</h3>
        <h3>{SentimentAnalysis[2]}</h3>
        </div>
        );};}



export default Analytics;