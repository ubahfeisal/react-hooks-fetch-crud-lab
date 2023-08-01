import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  function handleDeleteItem(deletedItemId) {
    setQuestions(questions.filter((question) => question.id !== deletedItemId));
  }
  function handleAddItem(newItem) {
    setQuestions([...questions, newItem]);
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={handleAddItem} /> : <QuestionList questions={questions} onDeleteItem={handleDeleteItem} />}
    </main>
  );
}

export default App;