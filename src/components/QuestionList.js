import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteItem }) {

  const questionList = questions.map((question) => {
    return (
      <QuestionItem key={question.id} question={question} onDeleteItem={onDeleteItem} />
    )
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionList}
      </ul>
    </section>
  );
}

export default QuestionList;