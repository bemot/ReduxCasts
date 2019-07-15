# ReduxCasts

Completed code examples from [Modern React with Redux](https://udemy.com/react-redux)

Each example from the course can be found within this repo. You can either look at the files in a completed state, or check out the changes that were made in a particular section by clicking on one of the links below.

https://stackoverflow.com/questions/50698177/use-maxresults-from-youtube-v3-apis-on-react
# Use maxResults from Youtube v3 APIs on React

You should do is going to node-modules folder and find youtube-api-search and just add one line to it:

 var params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video',
    ADDED PART>>>>> maxResults: options.WHATEVERYOUWANT
  };

then you can use it like below:

YTSearch({key: API_KEY, term: 'hello world', WHATEVERYOUWANT: 20}, (data) =>{
   console.log(data);
});

