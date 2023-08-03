import React, { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Tweet from "./components/Tweet";
import { updateContent } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App: React.FC = () => {
  // Players holding lottery tickets
  const [tweetFeed ,  setTweetFeed] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [tweet , setTweet] = useState<string>("")

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    const fetchData = async () => {

      const storage = await fetchStorage();
      console.log("test 4, fetch data");
      const data = storage.author.map(function (authors : string, i : number) {
        return {
          authors,
          entry: storage.entries[i],
          date: new Date(storage.dates[i])
        }
      })
      console.log("test 5, fetch data " + data[0].entry);
      setTweetFeed(data.values());
    };

    fetchData();
  }, [loading]);
  
  function tweet_content(props : string)
  {
    setTweet(props);
  }
  // TODO 7.a - Complete onBuyTicket function
  const onUpdate_content = async () => {
    try{
      setLoading(true);
      await updateContent(tweet);
      alert("Tweet submitted");

    }
    catch (error){
      throw error;
    }
    setLoading(false);
    
  };

  return (
    <div className="h-100">
      <Navbar />
      <Tweet tweet_content = {tweet_content}/>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {/* Ticket remaining display */}
        {/* Action Buttons */}
        
          <button onClick={onUpdate_content} className="btn btn-primary btn-lg">
            {/* TODO 7.b - Call onUpdateContent on click */}
            {/* TODO 7.c - Show "loading..." when buying operation is pending */}
            {loading ? "Loading .. " : " Submit"}
          </button>
        {/* List of Players */}
        <div className="mt-2">
          {/* {tweetFeed} */}
          {
            tweetFeed.map((tweet,i)=> (
              <div>
                {tweet}
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
