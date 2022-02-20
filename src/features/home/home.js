const Home = () => {
  return (
    <div id="intro">
      <textarea readOnly cols="width" rows={15}>
        Welcome to Behshad's Flashcards. Here, you can create topics and create
        quizzes for your topics. Your quizzes must contain at least one
        flashcard and no flashcard can have an empty side. When you click on
        flashcards, they flip and show the other side.
      </textarea>
    </div>
  );
};

export default Home;
