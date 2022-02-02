import React, { useEffect, useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  const fetchData = async() => {
    try {
      setQuestions(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return <main>
      <div className="container">
        <h3> Questions and answers about login </h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question}/>
            })

          }
        </section>
      </div>

    </main>
}

export default App;
