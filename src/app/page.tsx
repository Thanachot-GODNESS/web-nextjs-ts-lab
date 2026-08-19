import Image from "next/image";

/*export default function Home() {
  const siteName = "CSMJU Website";

  return (
    <div>
      <h1>{siteName}</h1>
      <h2>{20+20+20+7}</h2>
    </div>
  );
}*/
//  ? = if แบบย่อ
export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const courseCount: number = 3;
  const isOpen: boolean = true;
  const topics: string[] = [
    "css",
    "html"
  ]

  return (
    <main>
      <h1>{siteName}</h1>
      <p>จำนวนรายวิชา: {courseCount}</p>
      <p>สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
      <h2>{topics}</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
          </main>
  );
} 


