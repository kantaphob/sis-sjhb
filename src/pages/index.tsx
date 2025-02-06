// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebook, FaEnvelope, FaLine, FaPhone, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

interface PersonalInfo {
  name: string;
  studentId: string;
  facebookUrl: string;
  instaramUrl: string;
  email: string;
  major: string;
}

const personalInfoList: PersonalInfo[] = [
  {
    name: "นายวงศกร เสมูล",
    studentId: "64143151",
    facebookUrl: "https://www.facebook.com/profile.php?id=100006534248058",
    instaramUrl: "https://www.instagram.com/deww_wongsakorn/",
    email: "64143151@cmru.ac.th",
    major: "วิทยาการคอมพิวเตอร์"
  },
  {
    name: "นายศุภกิจ ธะรงค์",
    studentId: "64143203",
    facebookUrl: "https://www.facebook.com/ohmspk.namtharong",
    instaramUrl: "https://www.instagram.com/ohmspk.namtharong",
    email: "64143203@cmru.ac.th",
    major: "วิทยาการคอมพิวเตอร์"
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>POS SaiJaiHomBar</title>
        <meta name="description" content="Welcome to POS SaiJaiHomBar" />
      </Head>

      {/* Header with animation */}
      <header className="bg-amber-800 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 hover:bg-amber-700">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold transform hover:scale-105 transition-transform duration-300">
              SaiJaiHomBar
            </Link>
            <div className="hidden md:flex space-x-6">
              {['หน้าหลัก', 'เกี่ยวกับเรา', 'ติดต่อ'].map((item, index) => (
                <Link
                  key={item}
                  href={`#${['home', 'about', 'contact'][index]}`}
                  className="relative hover:text-amber-200 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="pt-4 space-y-3">
              {['หน้าหลัก', 'เกี่ยวกับเรา', 'ติดต่อ'].map((item, index) => (
                <Link
                  key={item}
                  href={`#${['home', 'about', 'contact'][index]}`}
                  className="block py-2 hover:text-amber-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section with animation */}
          <section id="home" className="text-center mb-16 transform hover:scale-105 transition-all duration-500">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4 animate-fadeIn">
              Welcome to POS SaiJaiHomBar
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 transform hover:scale-x-150 transition-transform duration-300"></div>
          </section>

          {/* Abstract Section */}
          <section id="about" className="bg-white rounded-lg shadow-lg p-8 mb-16 transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              เกี่ยวกับร้านใส่ใจ ฮอมบาร์
            </h2>
            <div className="prose prose-amber max-w-none">
              <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                ร้านใส่ใจ ฮอมบาร์ (Sai Jai Hom Bar) เป็นร้านกาแฟริมทางเป็นธุรกิจขนาดเล็กที่ใช้พื้นที่น้อยและอุปกรณ์ไม่มาก
                นอกจากนี้ยังมีสินค้าที่หลากหลาย เช่น ชา กาแฟ ขนมหวาน ขนมพื้นบ้าน รวมถึงการรับฝากขายสินค้าจากเพื่อนบ้าน
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 hover:text-gray-900 transition-colors duration-300">
                ร้านเปิดให้บริการตั้งแต่ 08:00 ถึง 16:00 น. ทุกวัน โดยสินค้าที่นิยมมากที่สุดคือน้ำมะพร้าว
                ซึ่งสามารถนำมาปรับแต่งเป็นเมนูซิกเนเจอร์ของร้านได้ เช่น น้ำมะพร้าวปั่นนมสด น้ำมะพร้าวนมสดคาราเมล
                และน้ำมะพร้าวเอสเพรสโซ่
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 hover:text-gray-900 transition-colors duration-300">
                ร้านยังให้บริการขายทั้งปลีกและส่งแก่ร้านค้าอื่น ๆ โดยลูกค้าส่วนใหญ่เป็นชาวบ้านในท้องถิ่นที่เข้ามาซื้อสินค้า
                หรือสั่งซื้อเพื่อใช้ในกิจกรรมหมู่บ้าน หรือส่งไปยังสถานที่ราชการ โดยใช้แอปพลิเคชันไลน์ (Line)
                เป็นช่องทางหลักในการสั่งซื้อ
              </p>
            </div>
          </section>

          {/* Personal Info Section */}
          <section id="contact" className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              ข้อมูลส่วนตัว
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {personalInfoList.map((info, index) => (
                <div
                  key={info.studentId}
                  className="space-y-4 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center border-b border-gray-200 py-3">
                    <span className="text-gray-600 w-32">ชื่อ:</span>
                    <span className="text-gray-800 font-medium">{info.name}</span>
                  </div>
                  <div className="flex items-center border-b border-gray-200 py-3">
                    <span className="text-gray-600 w-32">รหัสนักศึกษา:</span>
                    <span className="text-gray-800 font-medium">{info.studentId}</span>
                  </div>
                  <div className="flex items-center border-b border-gray-200 py-3">
                    <span className="text-gray-600 w-32">สาขา:</span>
                    <span className="text-gray-800 font-medium">{info.major}</span>
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={info.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-all duration-300"
                    >
                      <FaFacebook className="w-6 h-6 mr-2" />
                      Facebook
                    </a>
                    <a
                      href={info.instaramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-all duration-300"
                    >
                      <FaInstagram className="w-6 h-6 mr-2" />
                      Instagram
                    </a>
                    <a
                      href={`mailto:${info.email}`}
                      className="flex items-center text-red-600 hover:text-red-700 transform hover:scale-110 transition-all duration-300"
                    >
                      <FaEnvelope className="w-6 h-6 mr-2" />
                      Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer with hover effects */}
      <footer className="bg-amber-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">เวลาทำการ</h3>
              <p>เปิดทุกวัน</p>
              <p>08:00 - 16:00 น.</p>
            </div>
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center hover:text-amber-200 transition-colors duration-300">
                  <FaPhone className="mr-2 animate-bounce" /> 099-XXX-XXXX
                </a>
                <a href="#" className="flex items-center hover:text-amber-200 transition-colors duration-300">
                  <FaLine className="mr-2 animate-bounce" /> @saijaibar
                </a>
                <a href="#" className="flex items-center hover:text-amber-200 transition-colors duration-300">
                  <FaFacebook className="mr-2 animate-bounce" /> SaiJaiHomBar
                </a>
              </div>
            </div>
            <div className="transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">ที่อยู่</h3>
              <p>ร้านใส่ใจ ฮอมบาร์</p>
              <p>ถนนXXX ตำบลXXX</p>
              <p>อำเภอXXX จังหวัดXXX</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-amber-700 text-center">
            <p className="hover:text-amber-200 transition-colors duration-300">
              &copy; {new Date().getFullYear()} SaiJaiHomBar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}