import CourseCard from "../../components/CourseCard";
import { courses } from "@/data/coursedata";

export default function Coursespage() {
    return (
        <div>
            <h1>รายวิชาทั้งหมด</h1>
            <section className="courseGrid">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
            </section>
        </div>

    );
} 