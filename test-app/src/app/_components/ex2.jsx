export const Courses = (props) => {
    return (
        <div>
        <span>{props.name}: </span> 
        <span>{props.price} </span>→
        <span>{props.discount===true ? props.price*0.9 : ""}  </span>
      
        {/* <span>{props.seatsLeft}- </span> */}
        <span>{props.seatsLeft===0 ? "Бүртгэл дүүссэн": props.seatsLeft < 3 ? "Цөөхөн суудал үлдсэн!" : "" }</span>
        
        </div>
    )
}