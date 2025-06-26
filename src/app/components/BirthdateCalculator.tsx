'use client';

import { useState } from 'react';

export default function BirthdateCalculator() {
  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [refYear, setRefYear] = useState<number>(new Date().getFullYear());
  const [result, setResult] = useState<string>('');

  const computeBirthdate = () => {
    const today = new Date();
    const dt = new Date(refYear, today.getMonth(), 1);
    dt.setFullYear(dt.getFullYear() - years);
    dt.setMonth(dt.getMonth() - months);

    const monthNumber = dt.getMonth() + 1;
    const year = dt.getFullYear();
    const monthNameAr = dt.toLocaleString('ar-EG', { month: 'long' });
    const monthAbbrAr = dt.toLocaleString('ar-EG', { month: 'short' });
    const monthNameEn = dt.toLocaleString('en-US', { month: 'long' });
    const monthAbbrEn = dt.toLocaleString('en-US', { month: 'short' });

    setResult(
      `المولود في: ${monthNameAr} (${monthNumber}, ${monthAbbrAr}) ${year} / Born in: ${monthNameEn} (${monthNumber}, ${monthAbbrEn}) ${year}`
    );
  };

  return (
    <>
      <div className="card">
        <h2>حاسبة تاريخ الميلاد</h2>

        <label>العمر (بالسنوات):</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(+e.target.value)}
          min={0}
          placeholder="مثال: 25"
        />

        <label>العمر (بالشهور):</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(+e.target.value)}
          min={0}
          max={11}
          placeholder="مثال: 3"
        />

        <label>السنة المرجعية:</label>
        <input
          type="number"
          value={refYear}
          onChange={(e) => setRefYear(+e.target.value)}
          min={1900}
          placeholder={new Date().getFullYear().toString()}
        />

        <button onClick={computeBirthdate}>احسب تاريخ الميلاد</button>

        {result && <div className="result">{result}</div>}
      </div>

      <style jsx>{`
        .card {
          max-width: 320px;
          width: 100%;
          margin: 4rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          direction: rtl;
          text-align: right;
        }
        h2 {
          margin: 0 0 1rem;
          font-size: 1.5rem;
          text-align: center;
        }
        label {
          display: block;
          margin-top: 1rem;
          font-weight: 500;
        }
        input {
          width: 100%;
          padding: 0.6rem;
          margin-top: 0.3rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        button {
          width: 100%;
          margin-top: 1.5rem;
          padding: 0.75rem;
          background: #4a90e2;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          background: #407ec9;
        }
        .result {
          margin-top: 1.5rem;
          padding: 0.75rem;
          background: #e6f4ea;
          color: #2d862d;
          border-radius: 4px;
          font-weight: 600;
          text-align: center;
          direction: ltr;
        }
      `}</style>
    </>
  );
}
