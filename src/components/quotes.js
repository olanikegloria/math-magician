import './calculator.css';
import { useState, useEffect } from 'react';

function Quotes() {
  const [quote, setquote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'Y4AovPhNanOmDoemBuILsg==Vh1LebLXqqcrnzL3',
            },
          });
        const data = await res.json();
        setquote(data);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setquote, setLoading]);
  if (hasError) return <div className="container-error"> something went wrong</div>;
  if (loading) return <div className="container-loading"> Loading...</div>;

  return (
    <div className="quotes-container">
      {quote.map((item) => (
        <div key={item.quote} className="quote">
          {item.quote}
          <p>
            <span> by </span>
            {item.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
