// pages/index.tsx
import Head from 'next/head'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'

interface PersonalInfo {
  name: string;
  studentId: string;
  facebookUrl: string;
  email: string;
  major: string;
}

const personalInfo: PersonalInfo = {
  name: "Your Name",
  studentId: "Your Student ID",
  facebookUrl: "https://facebook.com/yourprofile",
  email: "your.email@example.com",
  major: "Your Major"
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <Head>
        <title>POS SaiJaiHomBar</title>
        <meta name="description" content="Welcome to POS SaiJaiHomBar" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4">
            Welcome to POS SaiJaiHomBar
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </section>

        {/* Abstract Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">
            เกี่ยวกับร้านใส่ใจ ฮอมบาร์
          </h2>
          <div className="prose prose-amber max-w-none">
            <p className="text-gray-700 leading-relaxed">
              ร้านใส่ใจ ฮอมบาร์ (Sai Jai Hom Bar) เป็นร้านกาแฟริมทางเป็นธุรกิจขนาดเล็กที่ใช้พื้นที่น้อยและอุปกรณ์ไม่มาก 
              นอกจากนี้ยังมีสินค้าที่หลากหลาย เช่น ชา กาแฟ ขนมหวาน ขนมพื้นบ้าน รวมถึงการรับฝากขายสินค้าจากเพื่อนบ้าน
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              ร้านเปิดให้บริการตั้งแต่ 08:00 ถึง 16:00 น. ทุกวัน โดยสินค้าที่นิยมมากที่สุดคือน้ำมะพร้าว 
              ซึ่งสามารถนำมาปรับแต่งเป็นเมนูซิกเนเจอร์ของร้านได้ เช่น น้ำมะพร้าวปั่นนมสด น้ำมะพร้าวนมสดคาราเมล 
              และน้ำมะพร้าวเอสเพรสโซ่
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              ร้านยังให้บริการขายทั้งปลีกและส่งแก่ร้านค้าอื่น ๆ โดยลูกค้าส่วนใหญ่เป็นชาวบ้านในท้องถิ่นที่เข้ามาซื้อสินค้า
              หรือสั่งซื้อเพื่อใช้ในกิจกรรมหมู่บ้าน หรือส่งไปยังสถานที่ราชการ โดยใช้แอปพลิเคชันไลน์ (Line) 
              เป็นช่องทางหลักในการสั่งซื้อ
            </p>
          </div>
        </section>

        {/* Personal Info Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">
            ข้อมูลส่วนตัว
          </h2>
          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-200 py-3">
              <span className="text-gray-600 w-32">ชื่อ:</span>
              <span className="text-gray-800 font-medium">{personalInfo.name}</span>
            </div>
            <div className="flex items-center border-b border-gray-200 py-3">
              <span className="text-gray-600 w-32">รหัสนักศึกษา:</span>
              <span className="text-gray-800 font-medium">{personalInfo.studentId}</span>
            </div>
            <div className="flex items-center border-b border-gray-200 py-3">
              <span className="text-gray-600 w-32">สาขา:</span>
              <span className="text-gray-800 font-medium">{personalInfo.major}</span>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                <FaFacebook className="w-6 h-6 mr-2" />
                Facebook
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-red-600 hover:text-red-700"
              >
                <FaEnvelope className="w-6 h-6 mr-2" />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}