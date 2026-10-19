export const Info = (props) => {

    return(
        <div style={{ display: "flex", gap: "10px",  }}>
        <span>{props.name} </span> 
        <span>{props.price} </span>
        <span>{props.quantity}</span>
      <button onClick={() => props.add(props.id)}>
        Sagsand nemeh
      </button>
        </div>
    )

}