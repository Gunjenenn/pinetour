import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import {Courses} from "../_components/ex2"

export default function Home() {

    const courses = [
      { name: "React Fundamentals", price: 450000, discount: true, seatsLeft: 2 },
      { name: "Next.js Mastery", price: 600000, discount: false, seatsLeft: 8 },
      { name: "TypeScript Deep Dive", price: 500000, discount: true, seatsLeft: 0 },
      { name: "Cloudflare Workers", price: 550000, discount: false, seatsLeft: 1 },
    ];

    return (
        <div>
            <div>Course Info</div>
            <div>
                { courses.map((course,index) => {
                    return <Courses key={index} name={course.name} price={course.price} discount={course.discount} seatsLeft={course.seatsLeft} />
                })
                }
            </div>
        </div>

    )
}