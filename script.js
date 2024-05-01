
function startGame() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "A little game for when you miss your home! You find yourself standing in front of your childhood home. What do you want to do?";
    choices.innerHTML = "<button onclick='insideHouse()'>Go inside the house</button><button onclick='backDeck()'>Sit on the deck outside your kitchen</button>";
}

function insideHouse() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You step inside the house. Everything looks familiar and you are ecstatic! Where do you want to go?";
    choices.innerHTML = "<button onclick='bedroom()'>Your bedroom</button><button onclick='kitchen()'>The kitchen</button><button onclick='livingRoom()'>The living room</button><button onclick='startGame()'>Back to the start</button>";
}

//deck
function backDeck() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You sit on the back deck, taking in the familiar sights and sounds. Memories come flooding back. What do you want to do?";
    choices.innerHTML = "<button onclick='reflect()'>Reflect on your favorite memories</button><button onclick='writeNote()'>Write a note to your childhood self</button><button onclick='startGame()'>Back to the start</button>";
}
function reflect() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You remember the good and fun times here and get a big smile on your face as your pretty self is soaking in the beautiful sun!!";
    choices.innerHTML = "<button onclick='backDeck()'>Leave</button>";
}
function writeNote() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You are doing great. Don't be too hard on yourself, cherish every moment and move forward with a smile!";
    choices.innerHTML = "<button onclick='backDeck()'>Leave</button>";
}

// Add similar functions for other areas like bedroom, kitchen, living room, etc.

// Example functions for the options in each area:
//bedroom
function bedroom() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You enter your beautiful and cozy bedroom. The walls are adorned with posters and memories. What do you want to do?";
    choices.innerHTML = "<button onclick='lookWindow()'>Look outside the window into the lake</button><button onclick='readJournals()'>Read through your old journals</button><button onclick='watchMovieandSleep()'>Get cozy and watch your favorite movie with the sun shimmering through the sliding door</button><button onclick='insideHouse()'>Return to the hallway</button>";
}

function lookWindow() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You look outside into the gorgeous lake and just think about all the good memories in that house!";
    choices.innerHTML = "<button onclick='bedroom()'>Leave</button>";
}
function readJournals() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You open your favorite book or journal to read and relive all the good things in your moments in that house!";
    choices.innerHTML = "<button onclick='bedroom()'>Leave</button>";
}
function watchMovieandSleep() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "Snuggle up on the couch with a warm blanket and start the movie with your favorite SNACKSSS!";
    choices.innerHTML = "<button onclick='bedroom()'>Leave</button>";
}
//kitchen
function kitchen() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You step into your kitchen, alive with the aroma of freshly prepared pesto pasta and the joyful chatter of your family as they concoct culinary magic. What do you want to do?";
    choices.innerHTML = "<button onclick='playJazz()'>Start playing some jazz music with everyone while the aroma of the food settles in</button><button onclick='helpCook()'>Help set up the table and engage in family conversations!</button><button onclick='enjoyEnvironment()'>Simply enjoy the atmosphere and soak in the warmth of everyone there</button><button onclick='insideHouse()'>Return to the hallway</button>";
}
function playJazz() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "Turn up the volume and let the smooth tunes fill the room while everyone prepares the dishes!";
    choices.innerHTML = "<button onclick='kitchen()'>Leave</button>";
}
function helpCook() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You split the tasks between your family and handle chopping vegetables, spices, and boiling the water!";
    choices.innerHTML = "<button onclick='kitchen()'>Leave</button>";
}
function enjoyEnvironment() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "Sit back and enjoy the company, taking in the laughter and chatter of everyone while eating that amazing pesto pasta!";
    choices.innerHTML = "<button onclick='kitchen()'>Leave</button>";
}

//living room
function livingRoom() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You enter your cozy living room, bathed in the rays of the sun shining through the windows and filled with the comforting hum of family activity. What's your next move?";
    choices.innerHTML = "<button onclick='playBoardGames()'>Gather around for some board games like wizard along with some friendly competition hehe</button> <button onclick='startMovieNight()'>Kick off a cozy movie night with popcorn and blankets!</button>";
}
function playBoardGames() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You are shuffling/dealing the cards with your extravagant technique and everyone is enjoying the moment together!!";
    choices.innerHTML = "<button onclick='startGame()'>Back to the Start</button>";
}
function startMovieNight() {
    var output = document.getElementById('output');
    var choices = document.getElementById('choices');

    output.innerHTML = "You are getting cozy with everyone for a nice movie night with popcorn, sweets (cheesecake), pringles, and a freshly warm blanket straight out of the dryer!";
    choices.innerHTML = "<button onclick='startGame()'>Back to the Start</button>";
}

// Start the game
startGame();
