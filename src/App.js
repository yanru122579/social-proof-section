import React from "react";

function Title() {
  return <h1>10,000+ of our users love our products.</h1>;
}

function Description() {
  return (
    <p>
      We only provide great products combined with excellent customer service.
      See what our satisfied customers are saying about our services.
    </p>
  );
}

function Rate() {
  return (
    <div>
      <ul>
        <li>start</li>
        <li>start</li>
        <li>start</li>
        <li>start</li>
        <li>start</li>
      </ul>
      <strong>Rated 5 Stars in Reviews</strong>
    </div>
  );
}

function Comment() {
  /**
   * -header
   *  --avatar
   *  --username
   *  --verfied
   * --comment
   */
  return (
    <div>
      <header>
        <div>avatar</div>
        <div>
          <strong>Colton smith</strong>
          <span>Verfied Buyer</span>
        </div>
      </header>
      <p>
        “ We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original order, but we also received
        it in time. Excellent! ”
      </p>
    </div>
  );
}

function App() {
  /**
   * -header
   *  -title
   *  -description
   *
   * -list of Rate Cards
   *
   * -list of Comments
   */
  return (
    <main>
      <header>
        <Title />
        <Description />
      </header>
      <ul>
        <li>
          <Rate />
        </li>
        <li>
          <Rate />
        </li>
        <li>
          <Rate />
        </li>
      </ul>
      <ul>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
      </ul>
    </main>
  );
}

export default App;
