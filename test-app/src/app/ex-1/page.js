import { Students } from "../_components/ex1";


  export default function Home() {
    const students = [
  { name: "Батаа: ", score: 78 },
  { name: "Сараа: ", score: 55 },
  { name: "Нараа: ", score: 92 },
  { name: "Тэмүүлэн: ", score: 43 },
  { name: "Оюунаа: ", score: 60 },
];
  
    return (
      <div>
       <div>Students score</div>
       <div>
        { students.map((student, index) => {
            return < Students key={index} name={student.name} score= {student.score} />
        })}
       </div>
      </div>
    );
  }
  ;
