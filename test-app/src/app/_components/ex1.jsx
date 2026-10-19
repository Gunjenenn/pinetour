export const Students = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.score}</span>
            <span>{props.score > 60 ? "-Тэнцсэн" : "-Тэнцээгүй"}</span>
        </div>
    )



}