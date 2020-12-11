import { useState } from "react";

import NiceBox from "./NiceBox";

const App = () => {
  const [dogImages, setDogImages] = useState([
    "https://www.petsworld.in/blog/wp-content/uploads/2015/03/How-To-Make-Your-Puppy-Gain-Weight.jpg",
    "https://images.adoptapet.com/images/public/search/PuppyPage.png",
    "https://445095-1394060-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/05/Happyoodles.com-How-to-Find-a-Reputable-Dog-Breeder-Labradoodle-Puppy-2.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFp1cOoqov5SLUJVDcTR_hz4KAXUyH4AHTQ&usqp=CAU",
  ]);

  console.log(dogImages);

  return (
    <div id="app-element">
      <NiceBox imageUrls={dogImages} />
    </div>
  );
};

export default App;
