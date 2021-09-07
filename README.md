# Word Search API with vanilla JavaScript frontend
API was created using Spring Boot with Spring Web 
Frontend was created using vanilla JavaScript, HTML5, and CSS3

# Frontend
You can view and play the word search game on Heroku at 
https://mahmoud-wordsearch-api.herokuapp.com/

# API 
You can make calls to the API using the following format 
```
https://mahmoud-wordsearch-api.herokuapp.com/wordgrid?gridSize={size-integer}&wordList={comma-separated-list-ofwords}
```
Example:
https://mahmoud-wordsearch-api.herokuapp.com/wordgrid?gridSize=10&wordList=SPRING,BOOT,WORD,SEARCH,API,IS,COOL

This call returns a plain text response with the following format:

```
H Z H R A E J Q Y E 
D E C V B O N E M V 
A V Y K F E R G N F 
O Z C S M L J X L R 
X X K T E R Y T Q C 
Y R U H P K D I E D 
O I N E W V S S X H 
N O I R C T T V E Y 
R D C E N U Z M S V 
H H R E J M F Y S L 
```

Each line is terminated with a \r\n.
