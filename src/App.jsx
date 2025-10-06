import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center p-6">
      <img
        src="/logo.png"
        alt="Tali Graphic Designer Logo"
        className="w-40 mb-6 animate-fadeIn"
      />
      <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
        ברוכים הבאים ל־TALI GRAPHIC
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        עיצוב גרפי ברמה הגבוהה ביותר — עיצובים ייחודיים, מודרניים ומדויקים.
      </p>
      <a
        href="tel:0523941832"
        className="px-8 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition-all duration-300"
      >
        התקשרו עכשיו: 052-3941832
      </a>
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 TALI GRAPHIC. כל הזכויות שמורות.
      </footer>
    </div>
  );
}

export default App;
