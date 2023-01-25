var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  The images in this text were designed and created by the author using TikZ.  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Many colleges and universities are offering courses in quantitative reasoning for all students. One model for a quantitative reasoning course is to provide students with a single cohesive topic. Ideally, such a topic can pique the curiosity of students with wide ranging academic interests and limited mathematical background. This text is intended for use in such a course. Game theory is an excellent topic for a non-majors quantitative course as it develops mathematical models to understand human behavior in social, political, and economic settings. The variety of applications can appeal to a broad range of students. Additionally, students can learn mathematics through playing games, something many choose to do in their spare time!  This text particularly explores the ideas of game theory through the rich context of popular culture. At the end of each chapter is a section on applications of the concepts to popular culture. It suggests films, television shows, and novels with themes from game theory. The questions in each of these sections are intended to serve as essay prompts for writing assignments.   Course Goals    Introduce students to the mathematics of game theory.   Teach students how to use mathematical models to solve problems in social and economic situations.   Build students' quantitative intuition.   Introduce students to the power of mathematics to frame human behavior.   Provide students an opportunity to use algebraic techniques, such as linear models and systems of equations, in game theoretic applications.   Provide students an opportunity to use basic ideas of probability, such as expected value, in game theoretic applications.     Course Format  The material is presented in a discovery format, requiring students to make conjectures frequently. Each section is structured as a class activity. Any introduction material can be read by the students, and the numbered problems or questions are to be out in class and as homework, depending on how far a particular student progresses through the section. Most sections require students to attempt to solve the problem before they have been provided much framework. The sections then build the necessary tools to solve the problem or understand the key ideas. Being able to compare their original solutions and ideas to the more sophisticated mathematical ones helps build their mathematical intuition and helps them to understand the power of using mathematics in situations where their intuition falls short.    Suggestions for Use  This text is primarily for use in a college-level quantitative reasoning course. It can also be used for an introductory course in game theory for the social sciences. It approaches the subject matter through an inquiry-based format. Most of the topics can be introduced by providing the students with the activity to work through during class, followed by a discussion. Almost all of the activities are intended to work through the concepts without additional lecture or introduction. Students with even a rudimentary background in algebra will find the material accessible. Any necessary mathematical background can be introduced as needed.   "
},
{
  "id": "S_intro",
  "level": "1",
  "url": "S_intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Players and Strategies",
  "body": " Players and Strategies   In this book most of the games will be played by two players player . Each player must decide how he or she will play the game. In order to study games mathematically, we need to make some assumptions about how the players should play the game. This allows us to be able to better predict what our players should do. The following example illustrates the characteristics we will assume about our players.    Example: Cake Division   Cake Division   How can two children fairly divide a cake? One classic solution is to have one child cut the cake and have the other child choose a piece.  Why does this work? In other words, why should both children feel they received a fair share of the cake?  What are the underlying assumptions that make this process work?  The goal of each player is to get the largest piece. We can think of this as each player acting in his or her self-interest self-interest .  Both players know that the other player has the same goal, and will act to further this goal. Thus, we know that each player is rational rational . Even more, each player knows the other player is rational.    We need both (1) and (2) to reach the solution that the cake is divided evenly and both children receive equal sized pieces.  The idea that players are self-interested is crucial to game theory. There are lots of other ways to play games, and those might be worth exploring. But to get started with game theory, we must make specific assumptions and develop the mathematical context from these assumptions.   Assumption 1: assumptions Players are self-interested. The goal is to win the most or lose the least. But what does it mean to win?  A player's payoff payoff is the amount (points, money, or anything a player values) a player receives for a particular outcome of a game. We say that the player's goal is to maximize his or her payoff. We should note that the maximum payoff for a player might even be negative, in which case the player wants the least negative (or closest to 0) payoff.  It is important to recognize the difference between having the goal of maximizing the payoff and having the goal of simply winning. Here are some examples.  If two players were racing, a player wouldn't just want to finish first, she would want to finish by as large a margin as possible.  If two teams were playing basketball, the team wouldn't want to just have the higher score, they would want to win by the largest number of points. In other words, a team would prefer to win by 10 points rather than by 1 point.  In an election poll, a candidate doesn't just want to be ahead of her opponent, she wants lead by as large a margin as possible, (especially if she needs to account for error in the polls).    It is important to keep in mind the the goal of each player is to win the most (or lose the least). It will be tempting to look for strategies which simply assure a player of a positive payoff, but we need to make sure a player can't do even better with a different strategy.   Assumption 2: assumptions Players are perfectly logical. A Player will always take into account all available information and make the decision which maximizes his payoff. This includes knowing that his opponent is also making the best decision for herself. For example, in the cake cutting game a player wouldn't cut one large piece hoping that his opponent will by chance pick the smaller piece. A player must assume that her opponent will always choose the larger piece.  Now you may be wondering what these assumptions have to do with reality. After all, no one's perfect. But we often study ideal situations (especially in math!). For example, you've all studied geometry. Can anyone here draw a perfectly straight line? Yet, you've all studied such an object!   Our Goal: Develop strategies for our perfectly logical, self-interested players.     Developing Strategies: Tic Tac Toe   Tic Tac Toe   Play the game  Play several games of Tic TacToe with an opponent. Make sure you take turns being the first player and the second player. Develop a strategy for winning Tic Tac Toe. You may have a different strategy for the first player and for the second player. Be as specific as possible. You may need to consider several possibilities which depend on what your opponent does.  Who wins? Player 1 or Player 2?  What must each player do in order to have the best possible outcome?  How did you develop your strategy?  How do you know it will always work?     Let us note some characteristics of Tic Tac Toe.  There are two players.  Players have perfect information perfect information . This means each player knows what all of his or her own options are, what all of his or her opponent's options are, and both players know what the outcome of each option is. Additionally, players know that both players have all of this information.  This game has a solution solution . A solution for a game consists of a strategy for each player and the outcome of the game when each player plays his or her strategy. In Tic Tac Toe, if both players play their best, the game will always end in a tie.  The game is finite finite game . This means the game must end after a finite number of moves of turns. In other words, the game cannot go on forever. A game that is not finite is called infinite infinite game . Note, an infinite game may end after a finite number of turns, but there is no maximum number of turns or process to ensure the game ends. In Tic Tac Toe, the game must end after 9 or fewer turns.    Perfect information, more examples  Can you think of another example of a game with perfect information? What is an example of a game that does not have perfect information?   Finite and infinite, more examples  Give some examples of finite games and infinite games.     A strategy for a player is a complete way to play the game regardless of what the other player does.    The choice of what a player does may depend on the opponent, but that choice is predetermined before game play. For example, in the cake cutting game, it doesn't matter which piece the chooser will pick, the cutter will always cut evenly. Similarly, it doesn't matter how the cutter cuts, the chooser will always pick the largest piece. In Tic Tac Toe, Player 2's strategy should determine his first move no matter what Player 1 plays first. For example, if Player 1 plays the center square, where should Player 2 play? If Player 1 plays a corner, where should Player 2 play?  Describe your favorite game  What is your favorite game?  Give a brief description of the game, including what it means to win or lose the game.  How many players do you need?  Do the players have perfect information for the game?  Is the game finite or can it go on forever?  Give some possible strategies for the player(s). Note, depending on the game, these strategies may not always result in a definite win, but they should suggest a way to increase a player's chances of winning (or not losing).     We have established a few assumptions and looked at how to describe strategies in some familiar games. Not all games easily fit into the context we will be using throughout this text. But you might keep in mind some of your favorite games and see how well the strategies and solutions can be applied to them. In the next section we develop some useful notation for describing most of the games we will study.   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "S_intro.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "Play the game.",
  "body": "Play the game  Play several games of Tic TacToe with an opponent. Make sure you take turns being the first player and the second player. Develop a strategy for winning Tic Tac Toe. You may have a different strategy for the first player and for the second player. Be as specific as possible. You may need to consider several possibilities which depend on what your opponent does.  Who wins? Player 1 or Player 2?  What must each player do in order to have the best possible outcome?  How did you develop your strategy?  How do you know it will always work?    "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "S_intro.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Perfect information, more examples.",
  "body": "Perfect information, more examples  Can you think of another example of a game with perfect information? What is an example of a game that does not have perfect information?  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "S_intro.html#exercise-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "Finite and infinite, more examples.",
  "body": "Finite and infinite, more examples  Give some examples of finite games and infinite games.  "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "S_intro.html#definition-1",
  "type": "Definition",
  "number": "1.1.4",
  "title": "",
  "body": "  A strategy for a player is a complete way to play the game regardless of what the other player does.   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "S_intro.html#exercise-4",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "Describe your favorite game.",
  "body": "Describe your favorite game  What is your favorite game?  Give a brief description of the game, including what it means to win or lose the game.  How many players do you need?  Do the players have perfect information for the game?  Is the game finite or can it go on forever?  Give some possible strategies for the player(s). Note, depending on the game, these strategies may not always result in a definite win, but they should suggest a way to increase a player's chances of winning (or not losing).    "
},
{
  "id": "S_IntroMatrices",
  "level": "1",
  "url": "S_IntroMatrices.html",
  "type": "Section",
  "number": "1.2",
  "title": "Game Matrices and Payoff Vectors",
  "body": " Game Matrices and Payoff Vectors   We need a way to describe the possible choices for the players and the outcomes of those choices. For now, we will stick with games that have only two players. We will call them Player 1 and Player 2.    Example: Matching Pennies   Matching Pennies   Suppose each player has two choices: Heads (H) or Tails (T). If they choose the same letter, then Player 1 wins $1 from Player 2. If they don't match, then Player 1 loses $1 to Player 2. We can represent all the possible outcomes of the game with a matrix game matrix .  Player 1's options will always correspond to the rows of the matrix, and Player 2's options will correspond to the columns. See .   A game matrix showing the strategies for each player      Player 2      Head  Tail    Player 1  Head       Tail         A payoff payoff is the amount a player receives for given outcome of the game.    Now we can fill in the matrix with each player's payoff. Since the payoffs to each player are different, we will use ordered pairs where the first number is Player 1's payoff and the second number is Player 2's payoff. The ordered pair is called the payoff vector payoff vector . For example, if both players choose H, then Player 1's payoff is $1 and Player 2's payoff is -$1 (since he loses to Player 1). Thus the payoff vector associated with the outcome H, H is .  We fill in the matrix with the appropriate payoff vectors in    A game matrix showing the payoff vectors      Player 2      H  T    Player 1  H       T       It is useful to think about different ways to quantify winning and losing. What are some possible measures of value? For example, we could use money, chips, counters, votes, points, amount of cake, etc.  Remember, a player always prefers to win the MOST points (money, chips, votes, cake), not just more than her opponent. If you want to study a game where players simply win or lose (such as Tic Tac Toe), we could just use 1 for a win and -1 for a loss.    Understanding the Players  Recall that we said there are two major assumptions we must make about our players:  Our players are self-interested self-interested . This means they will always prefer the largest possible payoff. They will choose a strategy which maximizes their payoff.  Our players are perfectly logical perfectly logical . This means they will use all the information available and make the wisest choice for themselves.    It is important to note that each player also knows that his or her opponent is also self-interested and perfectly logical!  Preferred payoffs   Which payoff does the player prefer: 0, 2, or -2?  Which payoff does the player prefer: -2, -5, or -10?  Which payoff does the player prefer: -1, -3, or 0?    It may be strightforward to decide the best payoff for a player out of a list of values, and it would be great if a player could just determine the biggest value in the table and choose that strategy. However, when there are two players a player may have to choose a strategy more carefully, since Player 1 can only choose the row, and Player 2 can only choose the column. Thus, the outcome of the game depends on BOTH players.   A Game   Suppose two players are playing a game in which they can choose A or B with the payoffs given in the game matrix in .   Payoff matrix for      Player 2      A  B    Player 1  A       B       In the following exercise, we will try to determine what each player should do.    Finding strategies   Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?     A Game   Suppose there are two players with the game matrix given in .   Payoff matrix for      Player 2      X  Y  Z     A       Player 1  B        C        In the following exercise, we will try to determine what each player should do.    More practice finding strategies   Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?    This chapter has introduced you to who the players are and how to organize strategies and payoffs into a matrix. In the next chapter we will study some methods for how a player can determine his or her best strategy.   "
},
{
  "id": "T_template",
  "level": "2",
  "url": "S_IntroMatrices.html#T_template",
  "type": "Table",
  "number": "1.2.1",
  "title": "",
  "body": " A game matrix showing the strategies for each player      Player 2      Head  Tail    Player 1  Head       Tail      "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "S_IntroMatrices.html#definition-2",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  A payoff payoff is the amount a player receives for given outcome of the game.   "
},
{
  "id": "T_matchpennies",
  "level": "2",
  "url": "S_IntroMatrices.html#T_matchpennies",
  "type": "Table",
  "number": "1.2.3",
  "title": "",
  "body": " A game matrix showing the payoff vectors      Player 2      H  T    Player 1  H       T      "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "S_IntroMatrices.html#exercise-5",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "Preferred payoffs.",
  "body": "Preferred payoffs   Which payoff does the player prefer: 0, 2, or -2?  Which payoff does the player prefer: -2, -5, or -10?  Which payoff does the player prefer: -1, -3, or 0?   "
},
{
  "id": "E_Sec2_2small",
  "level": "2",
  "url": "S_IntroMatrices.html#E_Sec2_2small",
  "type": "Example",
  "number": "1.2.5",
  "title": "A <span class=\"process-math\">\\(2\\times 2\\)<\/span> Game.",
  "body": " A Game   Suppose two players are playing a game in which they can choose A or B with the payoffs given in the game matrix in .   Payoff matrix for      Player 2      A  B    Player 1  A       B       In the following exercise, we will try to determine what each player should do.   "
},
{
  "id": "E_SolveSec2_2small",
  "level": "2",
  "url": "S_IntroMatrices.html#E_SolveSec2_2small",
  "type": "Exercise",
  "number": "1.2.7",
  "title": "Finding strategies.",
  "body": "Finding strategies   Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?   "
},
{
  "id": "E_Sec2_2large",
  "level": "2",
  "url": "S_IntroMatrices.html#E_Sec2_2large",
  "type": "Example",
  "number": "1.2.8",
  "title": "A <span class=\"process-math\">\\(3\\times 3\\)<\/span> Game.",
  "body": " A Game   Suppose there are two players with the game matrix given in .   Payoff matrix for      Player 2      X  Y  Z     A       Player 1  B        C        In the following exercise, we will try to determine what each player should do.   "
},
{
  "id": "E_SolveSec2_2large",
  "level": "2",
  "url": "S_IntroMatrices.html#E_SolveSec2_2large",
  "type": "Exercise",
  "number": "1.2.10",
  "title": "More practice finding strategies.",
  "body": "More practice finding strategies   Just by quickly looking at the matrix, which player appears to be able to win more than the other player? Does one player seem to have an advantage? Explain.  Determine what each player should do. Explain your answer.  Compare your answer in (b) to your answer in (a). Did the player you suggested in (a) actually win more than the other player?  According to your answer in (b), does Player 1 end up with the largest possible payoff (for Player 1) in the matrix?  According to your answer in (b), does Player 2 end up with the largest possible payoff (for Player 2) in the matrix?  Do you still think a player has an advantage in this game? Is it the same answer as in (a)?   "
},
{
  "id": "S_IntroZeroSum",
  "level": "1",
  "url": "S_IntroZeroSum.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Two-Person Zero-Sum Games",
  "body": " Introduction to Two-Person Zero-Sum Games    zero-sum game   In all of the examples from the last section, whatever one player won, the other player lost.    A two player game is called a zero-sum zero-sum game game if the sum of the payoffs to each player is constant for all possible outcomes of the game. More specifically, the terms (or coordinates) in each payoff vector must add up to the same value for each payoff vector. Such games are sometimes called constant-sum constant-sum game games instead.    We can always think of zero-sum games as being games in which one player's win is the other player's loss.   Zero-sum in Poker   Consider a poker game in which each player comes to the game with $100. If there are five players, then the sum of money for all five players is always $500. At any give time during the game, a particular player may have more than $100, but then another player must have less than $100. One player's win is another player's loss.     Zero-sum in Cake Division   Consider the cake division game. Determine the payoff matrix for this game. It is important to determine what each player's options are first: how can the cutter cut the cake? How can the chooser pick her piece? The payoff matrix is given in .   Payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly  (half, half)  (half, half)     Cut Unvenly  (small piece, large piece)  (large piece, small piece)     In order to better see that this game is zero-sum (or constant-sum), we could give values for the amount of cake each player gets. For example, half the cake would be 50%, a small piece might be 40%. Then we can rewrite the matrix with the percentage values in    Payoff matrix, in percent of cake, for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       In each outcome, the payoffs to each player add up to 100 (or 100%). In more mathematical terms, the coordinates of each payoff vector add up to 100. Thus the sum is the same, or constant, for each outcome.    It is probably simple to see from the matrix in that Player 2 will always choose the large piece, thus Player 1 does best to cut the cake evenly. The outcome of the game is the strategy pair strategy pair denoted [Cut Evenly, Larger Piece], with resulting payoff vector .  But why are we going to call these games zero-sum rather than constant-sum ? We can convert any zero-sum game to a game where the payoffs actually sum to zero.   Poker Payoffs Revisited   Consider the above poker game where each player begins the game with $100. Suppose at some point in the game the five players have the following amounts of money: $50, $200, $140, $100. $10. Then we could think of their gain as -$50, $100, $40, $0, -$90. What do these five numbers add up to?     Converting to Payoffs that Sum to Zero   Convert the cake division payoffs so that the payoff vectors sum to zero (rather than 100).  The solution is given in .   Zero-sum payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       But let's make sure we understand what these numbers mean. For example, a payoff of does not mean each player gets no cake, it means they don't get any more cake than the other player. In this example, each player gets half the cake (50%) plus the payoff.    In the form of , it is easy to recognize a zero-sum game since each payoff vector has the form (or ).    Example: An Election Campaign Game  Two candidates, Arnold and Bainbridge, are facing each other in a state election. They have three choices regarding the issue of the speed limit on I-5: They can support raising the speed limit to 70 MPH, they can support keeping the current speed limit, or they can dodge the issue entirely. The next three examples present three different payoff matrices for Arnold and Bainbridge.   The Speed Limit Issue   The candidates have the information given in about how they would likely fare in the election based on how they stand on the speed limit.   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge          Anaylsis of the election game  For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .   Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice. And remember, a player doesn't just want to win, he wants to get THE MOST votes for example, you could assume these are polling numbers and that there is some margin of error, thus a candidate prefers to have a larger margin over his opponent!  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies is in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies is in order to decide on his own strategy? Explain your answer.     A New Scenario   Bainbridge's mother is injured in a highway accident caused by speeding. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge          Anaysis of the second scenario  For the following questions, assume Arnold and Bainbridge have the payoff matrix given in . .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies is in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies is in order to decide on his own strategy? Explain your answer.     A Third Scenario   Bainbridge begins giving election speeches at college campuses and monster truck rallies. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge          Analyis of the third scenario  For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .   Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies is in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies is in order to decide on his own strategy? Explain your answer.    Changing the strategy  In each of the above scenarios, is there any reason for Arnold or Bainbridge to change his strategy? If there is, explain under what circumstances it makes sense to change strategy. If not, explain why it never makes sense to change strategy.     Equilibrium Pairs  Chances are, in each of the exercises above, you were able to determine what each player should do. In particular, if both players play your suggested strategies, there is no reason for either player to change to a different strategy.     equilibrium pair A pair of strategies is an equilibrium pair if neither player gains by changing strategies.    For example, consider the game matrix from , .   Payoff matrix for .      Player 2      X  Y    Player 1  A       B       You determined that Player 2 should choose to play Y, and thus, Player 1 should play B (i.e., we have the strategy pair [B, Y]). Why is this an equilibrium pair? If Player 2 plays Y, does Player 1 have any reason to change to strategy A? No, she would lose 10 instead of 1! If Player 1 plays B, does Player 2 have any reason to change to strategy X? No, she would gain 0 instead of 1! Thus neither player benefits from changing strategy, and so we say [B, Y] is an equilibrium pair.  For now, we can use a guess and check method for finding equilibrium pairs. Take each outcome and decide whether either player would prefer to switch. Remember, Player 1 can only choose a different row, and Player 2 can only choose a different column. In our above example there are four outcomes to check: [A, X], [A, Y], [B, X], and [B, Y]. We already know [B, Y] is an equilibrium pair, but let's check the rest. Suppose the players play [A, X]. Does Player 1 want to switch to B? No, she'd rather get 100 than 0. Does player 2 want to switch to Y? Yes! She'd rather get 10 than -100. So [A, X] is NOT an equilibrium pair since a player wants to switch. Now check that for [A, Y] Player 1 would want to switch, and for [B, X] both players would want to switch. Thus [A, Y] and [B, X] are NOT equilibrium pairs. Now you can try to find equilibrium pairs in any matrix game by just checking each payoff vector to see if one of the players would have wanted to switch to a different strategy.  Checking equilibrium pairs  Are the strategy pairs you determined in the three election scenarios equilibrium pairs? In other words, would either player prefer to change strategies? (You don't need to check whether any other strategies are equilibrium pairs.)   Using guess and check  Use the guess and check method to determine any equilibrium pairs for the following payoff matrices.              After trying the above examples, do you think every game has an equilibrium pair? Can games have multiple equilibrium pairs?  Existence of equilibrium pairs  Do all games have equilibrium pairs?   Multiple equilibrium pairs  Can a game have more than one equilibrium pair?   The last three exercises give you a few more games to practice with.  Rock, paper, scissors  Consider the game ROCK, PAPER, SCISSORS Rock-Paper-Scissors (Rock beats Scissors, Scissors beat Paper, Paper beats Rock). Construct the payoff matrix for this game. Does it have an equilibrium pair? Explain your answer.   Battle of the networks  Two television networks are battling for viewers for 7 pm Monday night. They each need to decide if they are going to show a sitcom or a sporting event. gives the payoffs as percent of viewers.   Payoff matrix for Battle of the Networks.      Network 2      Sitcom  Sports    Network 1  Sitcom       Sports        Explain why this is a zero-sum game.  Does this game have an equilibrium pair? If so, find it and explain what each network should do.  Convert this game to one in which the payoffs actually sum to zero. Hint: if a network wins 60% of the viewers, how much more than 50% of the viewers does it have?    Competitive advantage  This game is an example of what economists call Competitive Advantage Competitive Advantage . Two competing firms need to decide whether or not to adopt a new type of technology. The payoff matrix is in . The variable is a positive number representing the economic advantage a firm will gain if it is the first to adopt the new technology.   Payoff matrix for Competitive Advantage.      Firm A      Adopt New Tech  Stay Put    Firm B  Adopt New Tech       Stay Put           Explain the payoff vector for each strategy pair. For example, why should the pair [Adopt New Tech, Stay Put] have the payoff ?  Explain what each firm should do.  Give a real life example of Competitive Advantage.    We've seen how to describe a zero-sum game and how to find equilibrium pairs. We've tried to decide what each player's strategy should be. Each player may need to consider the strategy of the other player in order to determine his or her best strategy. But we need to be careful, although our intuition can be useful in deciding the best strategy, we'd like to be able to be more precise about finding strategies for each player. We'll learn some of these tools in the next section.   "
},
{
  "id": "D_zerosum",
  "level": "2",
  "url": "S_IntroZeroSum.html#D_zerosum",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A two player game is called a zero-sum zero-sum game game if the sum of the payoffs to each player is constant for all possible outcomes of the game. More specifically, the terms (or coordinates) in each payoff vector must add up to the same value for each payoff vector. Such games are sometimes called constant-sum constant-sum game games instead.   "
},
{
  "id": "poker",
  "level": "2",
  "url": "S_IntroZeroSum.html#poker",
  "type": "Example",
  "number": "2.1.2",
  "title": "Zero-sum in Poker.",
  "body": " Zero-sum in Poker   Consider a poker game in which each player comes to the game with $100. If there are five players, then the sum of money for all five players is always $500. At any give time during the game, a particular player may have more than $100, but then another player must have less than $100. One player's win is another player's loss.   "
},
{
  "id": "E_cakecutting2",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_cakecutting2",
  "type": "Example",
  "number": "2.1.3",
  "title": "Zero-sum in Cake Division.",
  "body": " Zero-sum in Cake Division   Consider the cake division game. Determine the payoff matrix for this game. It is important to determine what each player's options are first: how can the cutter cut the cake? How can the chooser pick her piece? The payoff matrix is given in .   Payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly  (half, half)  (half, half)     Cut Unvenly  (small piece, large piece)  (large piece, small piece)     In order to better see that this game is zero-sum (or constant-sum), we could give values for the amount of cake each player gets. For example, half the cake would be 50%, a small piece might be 40%. Then we can rewrite the matrix with the percentage values in    Payoff matrix, in percent of cake, for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       In each outcome, the payoffs to each player add up to 100 (or 100%). In more mathematical terms, the coordinates of each payoff vector add up to 100. Thus the sum is the same, or constant, for each outcome.   "
},
{
  "id": "E_pokerzero",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_pokerzero",
  "type": "Example",
  "number": "2.1.6",
  "title": "Poker Payoffs Revisited.",
  "body": " Poker Payoffs Revisited   Consider the above poker game where each player begins the game with $100. Suppose at some point in the game the five players have the following amounts of money: $50, $200, $140, $100. $10. Then we could think of their gain as -$50, $100, $40, $0, -$90. What do these five numbers add up to?   "
},
{
  "id": "E_cakecuttingzero",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_cakecuttingzero",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " Converting to Payoffs that Sum to Zero   Convert the cake division payoffs so that the payoff vectors sum to zero (rather than 100).  The solution is given in .   Zero-sum payoff matrix for Cake Cutting game.      Chooser      Larger Piece  Smaller Piece    Cutter  Cut Evenly       Cut Unvenly       But let's make sure we understand what these numbers mean. For example, a payoff of does not mean each player gets no cake, it means they don't get any more cake than the other player. In this example, each player gets half the cake (50%) plus the payoff.   "
},
{
  "id": "Ex_election1",
  "level": "2",
  "url": "S_IntroZeroSum.html#Ex_election1",
  "type": "Example",
  "number": "2.1.9",
  "title": "The Speed Limit Issue.",
  "body": " The Speed Limit Issue   The candidates have the information given in about how they would likely fare in the election based on how they stand on the speed limit.   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge         "
},
{
  "id": "E_election1",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_election1",
  "type": "Exercise",
  "number": "2.1.11",
  "title": "Anaylsis of the election game.",
  "body": "Anaylsis of the election game  For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .   Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice. And remember, a player doesn't just want to win, he wants to get THE MOST votes for example, you could assume these are polling numbers and that there is some margin of error, thus a candidate prefers to have a larger margin over his opponent!  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies is in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies is in order to decide on his own strategy? Explain your answer.   "
},
{
  "id": "Ex_election2",
  "level": "2",
  "url": "S_IntroZeroSum.html#Ex_election2",
  "type": "Example",
  "number": "2.1.12",
  "title": "A New Scenario.",
  "body": " A New Scenario   Bainbridge's mother is injured in a highway accident caused by speeding. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge         "
},
{
  "id": "E_election2",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_election2",
  "type": "Exercise",
  "number": "2.1.14",
  "title": "Anaysis of the second scenario.",
  "body": "Anaysis of the second scenario  For the following questions, assume Arnold and Bainbridge have the payoff matrix given in . .  Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies is in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies is in order to decide on his own strategy? Explain your answer.   "
},
{
  "id": "Ex_election3",
  "level": "2",
  "url": "S_IntroZeroSum.html#Ex_election3",
  "type": "Example",
  "number": "2.1.15",
  "title": "A Third Scenario.",
  "body": " A Third Scenario   Bainbridge begins giving election speeches at college campuses and monster truck rallies. The new payoff matrix is given in .   Percentage of the vote for .      Bainbridge      Raise Limit  Keep Limit  Dodge     Raise Limit       Arnold  Keep Limit        Dodge         "
},
{
  "id": "E_election3",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_election3",
  "type": "Exercise",
  "number": "2.1.17",
  "title": "Analyis of the third scenario.",
  "body": "Analyis of the third scenario  For the following questions, assume Arnold and Bainbridge have the payoff matrix given in .   Explain why is a zero-sum game.  What should Arnold choose to do? What should Bainbridge choose to do? Be sure to explain each candidate's choice.  What is the outcome of the election?  Does Arnold need to consider Bainbridge's strategies is in order to decide on his own strategy? Does Bainbridge need to consider Arnold's strategies is in order to decide on his own strategy? Explain your answer.   "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "S_IntroZeroSum.html#exercise-11",
  "type": "Exercise",
  "number": "2.1.18",
  "title": "Changing the strategy.",
  "body": "Changing the strategy  In each of the above scenarios, is there any reason for Arnold or Bainbridge to change his strategy? If there is, explain under what circumstances it makes sense to change strategy. If not, explain why it never makes sense to change strategy.  "
},
{
  "id": "D_equilpair",
  "level": "2",
  "url": "S_IntroZeroSum.html#D_equilpair",
  "type": "Definition",
  "number": "2.1.19",
  "title": "",
  "body": "   equilibrium pair A pair of strategies is an equilibrium pair if neither player gains by changing strategies.   "
},
{
  "id": "table-11",
  "level": "2",
  "url": "S_IntroZeroSum.html#table-11",
  "type": "Table",
  "number": "2.1.20",
  "title": "",
  "body": " Payoff matrix for .      Player 2      X  Y    Player 1  A       B      "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "S_IntroZeroSum.html#exercise-12",
  "type": "Exercise",
  "number": "2.1.21",
  "title": "Checking equilibrium pairs.",
  "body": "Checking equilibrium pairs  Are the strategy pairs you determined in the three election scenarios equilibrium pairs? In other words, would either player prefer to change strategies? (You don't need to check whether any other strategies are equilibrium pairs.)  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "S_IntroZeroSum.html#exercise-13",
  "type": "Exercise",
  "number": "2.1.22",
  "title": "Using “guess and check”.",
  "body": "Using guess and check  Use the guess and check method to determine any equilibrium pairs for the following payoff matrices.             "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "S_IntroZeroSum.html#exercise-14",
  "type": "Exercise",
  "number": "2.1.23",
  "title": "Existence of equilibrium pairs.",
  "body": "Existence of equilibrium pairs  Do all games have equilibrium pairs?  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "S_IntroZeroSum.html#exercise-15",
  "type": "Exercise",
  "number": "2.1.24",
  "title": "Multiple equilibrium pairs.",
  "body": "Multiple equilibrium pairs  Can a game have more than one equilibrium pair?  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "S_IntroZeroSum.html#exercise-16",
  "type": "Exercise",
  "number": "2.1.25",
  "title": "Rock, paper, scissors.",
  "body": "Rock, paper, scissors  Consider the game ROCK, PAPER, SCISSORS Rock-Paper-Scissors (Rock beats Scissors, Scissors beat Paper, Paper beats Rock). Construct the payoff matrix for this game. Does it have an equilibrium pair? Explain your answer.  "
},
{
  "id": "E_network",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_network",
  "type": "Exercise",
  "number": "2.1.26",
  "title": "Battle of the networks.",
  "body": "Battle of the networks  Two television networks are battling for viewers for 7 pm Monday night. They each need to decide if they are going to show a sitcom or a sporting event. gives the payoffs as percent of viewers.   Payoff matrix for Battle of the Networks.      Network 2      Sitcom  Sports    Network 1  Sitcom       Sports        Explain why this is a zero-sum game.  Does this game have an equilibrium pair? If so, find it and explain what each network should do.  Convert this game to one in which the payoffs actually sum to zero. Hint: if a network wins 60% of the viewers, how much more than 50% of the viewers does it have?   "
},
{
  "id": "E_compadvantage",
  "level": "2",
  "url": "S_IntroZeroSum.html#E_compadvantage",
  "type": "Exercise",
  "number": "2.1.28",
  "title": "Competitive advantage.",
  "body": "Competitive advantage  This game is an example of what economists call Competitive Advantage Competitive Advantage . Two competing firms need to decide whether or not to adopt a new type of technology. The payoff matrix is in . The variable is a positive number representing the economic advantage a firm will gain if it is the first to adopt the new technology.   Payoff matrix for Competitive Advantage.      Firm A      Adopt New Tech  Stay Put    Firm B  Adopt New Tech       Stay Put           Explain the payoff vector for each strategy pair. For example, why should the pair [Adopt New Tech, Stay Put] have the payoff ?  Explain what each firm should do.  Give a real life example of Competitive Advantage.   "
},
{
  "id": "S_DominatedStrategies",
  "level": "1",
  "url": "S_DominatedStrategies.html",
  "type": "Section",
  "number": "2.2",
  "title": "Dominated Strategies",
  "body": " Dominated Strategies  Recall that in a zero-sum game, we know that one player's win is the other player's loss. Furthermore, we know we can rewrite any zero-sum game so that the player's payoffs are in the form . Note, this works even if is negative; in which case, is positive.   A Simpler Payoff Matrix   Consider the zero-sum game with payoff matrix in . Note that for simplicity our payoff matrix contains only the payoffs and not the strategy names; but Player 1 still chooses a row and Player 2 still chooses a column.   The payoff matrix for .     Player 2    Player 1            If we know we are playing a zero-sum game, then the use of ordered pairs seems somewhat redundant: If Player 1 wins 1, then we know that Player 2 must lose 1 (win ). Thus, if we KNOW we are playing a zero-sum game, we can simplify our notation by just using Player 1's payoffs. The above matrix in can be simplified as in .   The payoff matrix for using only Player 1's payoffs.     Player 2    Player 1  1  0     -1  -2       When simplifying, keep a few things in mind:  You MUST know that the game is zero-sum.  If it is not otherwise specified, the payoffs represent Player 1's payoffs.  You can always give a similar matrix representing Player 2's payoffs. However, due to (2), you should indicate that the matrix is for Player 2. For example, Player 2's payoff matrix would be given by .  The payoff matrix for using only Player 2's payoffs.     Player 2    Player 1  -1  0     1  2      Both players can make strategy decisions by considering only Player 1's payoff matrix. (Why?) Just to test this out, by looking only at the matrix in determine which strategy each player should choose.  Player 1's payoffs in .     Player 2    Player 1  1  0     -1  -2        In this last example, it should be clear that Player 1 is looking for rows which give her the largest payoff. This is nothing new. However, Player 2 is now looking for columns which give Player 1 the SMALLEST payoff. (Why?)  Now that we have simplified our notation for zero-sum games, let's try to find a way to determine the best strategy for each player.   A Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  2     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?     Another Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  3     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?    In , no matter what Player 2 does, Player 1 would always choose Row 1, since every payoff in Row 1 is greater than or equal to the corresponding payoff in Row 2 ( , , ). In , this is not the case: if Player 2 were to choose Column 3, then Player 1 would prefer Row 2. In we would say that Row 1 dominates dominates Row 2.    A strategy  dominates dominates a strategy if every entry for is greater than or equal to the corresponding entry for . In this case, we say is dominated by dominated by  .  If strategy dominates stratgy , we can write .    In mathematical notation, let be the value in the row and column. Similarly, is the value in the row and column. The row dominates the row if for all , and for at least one .  This definition can also be used for Player 2: we consider columns instead of rows. If we are looking at Player 1's payoffs, then Player 2 prefers smaller payoffs. Thus one column dominates another column if all the entries in are smaller than or equal to the corresponding entries in .  Here is the great thing: we can always eliminate dominated strategies! (Why?) Thus, in , we can eliminate Row 2, as in .    Row 2 is dominated by Row 1.      Now it is easy to see what Player 2 should do.  In , we cannot eliminate Row 2 since it is not dominated by Row 1. However, it should be clear that Column 2 dominates Column 3 (remember, Player 2 prefers SMALLER values). Thus we can eliminate Column 3 as in .    Column 3 is dominated by Column 2.      AFTER eliminating Column 3, Row 1 dominates Row 2. Now, in we can eliminate Row 2.    After eliminating Column 3, Row 2 is dominated by Row 1.      Again, now it is easy to determine what each player should do.  Check equilibrium pairs  Check that the strategy pairs we determined in and are, in fact, equilibrium pairs.   Now, look back at the election examples from and apply the process of eliminating dominated strategies.  Eliminating dominated strategies  Use the idea of eliminating dominated strategies to determine what each player should do in the Arnold\/ Bainbridge examples in , , and . Do you get the same strategy pairs as you determined in the related exercises ( , , )?   The next three exercises provide more practice in using dominated strategies to find equilibrium pairs.  More practice with dominated strategies  Use the idea of eliminating dominated strategies to determine any equilibrium pairs in the zero-sum game given in . Note, since it is a zero-sum game we need only show Player 1's payoffs. Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  0  0  10    Player 1  B  -1  0  -2  9     C  1  1  1  8     D  -2  0  0  7      Determine equilibrium pairs  Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  2  3  4    Player 1  B  0  -1  -0  5     C  -1  3  2  4     D  0  1  -1  1      Practice finding equilibrium pairs  Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -3  0     C  10  -10  -1  1     D  0  0  10  15      A more challenging example  Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -5  -3     C  10  -10  -1  1     D  0  0  10  8      Chances are you had trouble determining an equilibrium pair for the game in . Does this mean there isn't an equilibrium pair? Not necessarily, but we are stuck if we try to use only the idea of eliminating dominated strategies. So we need a new method.  We might think of our next method as the worst case scenario, or extremely defensive play. The idea is that we want to assume our opponent is the best player to ever live. In fact, we might assume our opponent is telepathic. So no matter what we do, our opponent will always guess what we are going to choose.   Playing Against the Best   Assume you are Player 1, and you are playing against this infinitely smart Player 2. Consider the game in . If you pick row A, what will Player 2 do? Player 2 will pick column X or Y. Try this for each of the rows. Which row is your best choice? If you pick A, you will get ; if you pick B, you will get ; if you pick C, you will get ; and if you pick D you will get . Thus, your best choice is to choose C and get . Now assume you are Player 2, and Player 1 is infinitely smart. Which column is your best choice? If you pick W, Player 1 will get (you will get ); if you pick X, Player 1 will get ; if you pick Y, Player 1 will get ; and if you pick Z, you will get . Thus, you can choose W, X, or Y (since you want Player 1 to win the least) and get .    A new method  Using the method described in , determine what each player should do in the game in .   More practice with the new method  Using the method described in , determine what each player should do in the game in .   After working through a few examples can you describe more generally the process used in ? What is Player 1 looking for in each row? Then how does she choose which row to play? What is Player 2 looking for in each column? How does he choose which column to play?  Generalizing the new method  Generalize the method described in . In other words, give a general rule for how Player 1 should determine his or her best move. Do the same for Player 2.   The new method and equlibrium points  What do you notice about using this method on the games in Tables , , and ? Is the solution an equilibrium pair?   The new method on the challenging example  Now try this method on the elusive payoff matrix in Table . What should each player do? Do you think we get an equilibrium pair? Explain.   The strategies we found using the above method have a more official name. Player 1's strategy is called the maximin maximin strategy strategy. Player 1 is maximizing the minimum values from each row. Player 2's strategy is called the minimax minimax strategy. Player 2 is minimizing the maximum values from each column. Notice, we can find the maximin and minimax strategies for any zero-sum game. But do our players always want to use these strategies? Will they always result in an equilibrium pair? The next five exercises explore these questions.  Look for dominated strategies  Let's consider another game matrix, given in . Explain why you cannot use dominated strategies to find an equilibrium pair. Do you think there is an equilibrium pair for this game (why or why not)?   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  2  -3  0     C  10  -10  -1  1     D  0  0  10  15      Find the maximin\/minimax strategy  If both players use the maximin\/ minimax strategy, what is the outcome of the game in ?   Predicting a maximin strategy  In the game in , if Player 1's opponent can guess that Player 1 will choose to use a maximin strategy, is Player 1 better off not using the maximin strategy?   Deviating from the maxinmin\/minimax strategy  Suppose both players initially decide to use the minimax\/ maximin strategy in the game in . Is Player 1 better off choosing a different strategy? If Player 2 guesses a change, is Player 2 better off changing strategies? Continue this line of reasoning for several iterations. What strategies do each of the players choose? Is at least one player always better off switching strategies? Can we conclude that the maximin\/ minimax strategy does not lead to an equilibrium pair?   Comparing examples  Compare your answers in to what happens in , , and . Can you identify any key differences between the games in and , , and ?   Given a zero-sum matrix game, we can find equilibruim pairs (if they exist) by the guess and check method, by eliminating dominated strategies, and by looking for the minimax\/maximin strategies. You should be able to apply all three methods and think about which method might be the most appropriate for a given matrix game. For example, although guess and check should always find an equilibrium point if it exists, it may be very tedious to apply to a really large matrix. The maximin\/minimax method might be much faster.  "
},
{
  "id": "E_domstrat1",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstrat1",
  "type": "Example",
  "number": "2.2.1",
  "title": "A Simpler Payoff Matrix.",
  "body": " A Simpler Payoff Matrix   Consider the zero-sum game with payoff matrix in . Note that for simplicity our payoff matrix contains only the payoffs and not the strategy names; but Player 1 still chooses a row and Player 2 still chooses a column.   The payoff matrix for .     Player 2    Player 1            If we know we are playing a zero-sum game, then the use of ordered pairs seems somewhat redundant: If Player 1 wins 1, then we know that Player 2 must lose 1 (win ). Thus, if we KNOW we are playing a zero-sum game, we can simplify our notation by just using Player 1's payoffs. The above matrix in can be simplified as in .   The payoff matrix for using only Player 1's payoffs.     Player 2    Player 1  1  0     -1  -2      "
},
{
  "id": "T_smallexampleP2",
  "level": "2",
  "url": "S_DominatedStrategies.html#T_smallexampleP2",
  "type": "Table",
  "number": "2.2.4",
  "title": "",
  "body": " The payoff matrix for using only Player 2's payoffs.     Player 2    Player 1  -1  0     1  2    "
},
{
  "id": "table-17",
  "level": "2",
  "url": "S_DominatedStrategies.html#table-17",
  "type": "Table",
  "number": "2.2.5",
  "title": "",
  "body": " Player 1's payoffs in .     Player 2    Player 1  1  0     -1  -2    "
},
{
  "id": "E_domstrat2",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstrat2",
  "type": "Example",
  "number": "2.2.6",
  "title": "A <span class=\"process-math\">\\(2\\times 3\\)<\/span> Game.",
  "body": " A Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  2     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?   "
},
{
  "id": "E_domstrat3",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstrat3",
  "type": "Example",
  "number": "2.2.8",
  "title": "Another <span class=\"process-math\">\\(2 \\times 3\\)<\/span> Game.",
  "body": " Another Game   Consider the zero-sum game given in .   Payoff matrix for .     Player 2    Player 1  1  0  2     -1  -2  3     Determine which row Player 1 should choose. Is there any situation in which Player 1 would choose the other row?   "
},
{
  "id": "definition-5",
  "level": "2",
  "url": "S_DominatedStrategies.html#definition-5",
  "type": "Definition",
  "number": "2.2.10",
  "title": "",
  "body": "  A strategy  dominates dominates a strategy if every entry for is greater than or equal to the corresponding entry for . In this case, we say is dominated by dominated by  .  If strategy dominates stratgy , we can write .   "
},
{
  "id": "F_strikerow2Ex2",
  "level": "2",
  "url": "S_DominatedStrategies.html#F_strikerow2Ex2",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " Row 2 is dominated by Row 1.     "
},
{
  "id": "F_strikecol3Ex3",
  "level": "2",
  "url": "S_DominatedStrategies.html#F_strikecol3Ex3",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " Column 3 is dominated by Column 2.     "
},
{
  "id": "F_strikerow2Ex3",
  "level": "2",
  "url": "S_DominatedStrategies.html#F_strikerow2Ex3",
  "type": "Figure",
  "number": "2.2.13",
  "title": "",
  "body": " After eliminating Column 3, Row 2 is dominated by Row 1.     "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-19",
  "type": "Exercise",
  "number": "2.2.14",
  "title": "Check equilibrium pairs.",
  "body": "Check equilibrium pairs  Check that the strategy pairs we determined in and are, in fact, equilibrium pairs.  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-20",
  "type": "Exercise",
  "number": "2.2.15",
  "title": "Eliminating dominated strategies.",
  "body": "Eliminating dominated strategies  Use the idea of eliminating dominated strategies to determine what each player should do in the Arnold\/ Bainbridge examples in , , and . Do you get the same strategy pairs as you determined in the related exercises ( , , )?  "
},
{
  "id": "E_domstratpractice1",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstratpractice1",
  "type": "Exercise",
  "number": "2.2.16",
  "title": "More practice with dominated strategies.",
  "body": "More practice with dominated strategies  Use the idea of eliminating dominated strategies to determine any equilibrium pairs in the zero-sum game given in . Note, since it is a zero-sum game we need only show Player 1's payoffs. Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  0  0  10    Player 1  B  -1  0  -2  9     C  1  1  1  8     D  -2  0  0  7     "
},
{
  "id": "E_domstratpractice2",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstratpractice2",
  "type": "Exercise",
  "number": "2.2.18",
  "title": "Determine equilibrium pairs.",
  "body": "Determine equilibrium pairs  Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  1  2  3  4    Player 1  B  0  -1  -0  5     C  -1  3  2  4     D  0  1  -1  1     "
},
{
  "id": "E_domstratpractice3",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstratpractice3",
  "type": "Exercise",
  "number": "2.2.20",
  "title": "Practice finding equilibrium pairs.",
  "body": "Practice finding equilibrium pairs  Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -3  0     C  10  -10  -1  1     D  0  0  10  15     "
},
{
  "id": "E_domstratpractice4",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstratpractice4",
  "type": "Exercise",
  "number": "2.2.22",
  "title": "A more challenging example.",
  "body": "A more challenging example  Determine any equilibrium pairs in the zero-sum game given in . Explain all the steps in your solution. If you are unable to find an equilibrium pair, explain what goes wrong.   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  -2  -5  -3     C  10  -10  -1  1     D  0  0  10  8     "
},
{
  "id": "E_intromaxmin",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_intromaxmin",
  "type": "Example",
  "number": "2.2.24",
  "title": "Playing Against the Best.",
  "body": " Playing Against the Best   Assume you are Player 1, and you are playing against this infinitely smart Player 2. Consider the game in . If you pick row A, what will Player 2 do? Player 2 will pick column X or Y. Try this for each of the rows. Which row is your best choice? If you pick A, you will get ; if you pick B, you will get ; if you pick C, you will get ; and if you pick D you will get . Thus, your best choice is to choose C and get . Now assume you are Player 2, and Player 1 is infinitely smart. Which column is your best choice? If you pick W, Player 1 will get (you will get ); if you pick X, Player 1 will get ; if you pick Y, Player 1 will get ; and if you pick Z, you will get . Thus, you can choose W, X, or Y (since you want Player 1 to win the least) and get .   "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-25",
  "type": "Exercise",
  "number": "2.2.25",
  "title": "A new method.",
  "body": "A new method  Using the method described in , determine what each player should do in the game in .  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-26",
  "type": "Exercise",
  "number": "2.2.26",
  "title": "More practice with the new method.",
  "body": "More practice with the new method  Using the method described in , determine what each player should do in the game in .  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-27",
  "type": "Exercise",
  "number": "2.2.27",
  "title": "Generalizing the new method.",
  "body": "Generalizing the new method  Generalize the method described in . In other words, give a general rule for how Player 1 should determine his or her best move. Do the same for Player 2.  "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-28",
  "type": "Exercise",
  "number": "2.2.28",
  "title": "The new method and equlibrium points.",
  "body": "The new method and equlibrium points  What do you notice about using this method on the games in Tables , , and ? Is the solution an equilibrium pair?  "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-29",
  "type": "Exercise",
  "number": "2.2.29",
  "title": "The new method on the challenging example.",
  "body": "The new method on the challenging example  Now try this method on the elusive payoff matrix in Table . What should each player do? Do you think we get an equilibrium pair? Explain.  "
},
{
  "id": "E_domstratpractice5",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_domstratpractice5",
  "type": "Exercise",
  "number": "2.2.30",
  "title": "Look for dominated strategies.",
  "body": "Look for dominated strategies  Let's consider another game matrix, given in . Explain why you cannot use dominated strategies to find an equilibrium pair. Do you think there is an equilibrium pair for this game (why or why not)?   Payoff matrix for .      Player 2      W  X  Y  Z     A  -2  0  3  20    Player 1  B  1  2  -3  0     C  10  -10  -1  1     D  0  0  10  15     "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-31",
  "type": "Exercise",
  "number": "2.2.32",
  "title": "Find the maximin\/minimax strategy.",
  "body": "Find the maximin\/minimax strategy  If both players use the maximin\/ minimax strategy, what is the outcome of the game in ?  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-32",
  "type": "Exercise",
  "number": "2.2.33",
  "title": "Predicting a maximin strategy.",
  "body": "Predicting a maximin strategy  In the game in , if Player 1's opponent can guess that Player 1 will choose to use a maximin strategy, is Player 1 better off not using the maximin strategy?  "
},
{
  "id": "E_iterate5",
  "level": "2",
  "url": "S_DominatedStrategies.html#E_iterate5",
  "type": "Exercise",
  "number": "2.2.34",
  "title": "Deviating from the maxinmin\/minimax strategy.",
  "body": "Deviating from the maxinmin\/minimax strategy  Suppose both players initially decide to use the minimax\/ maximin strategy in the game in . Is Player 1 better off choosing a different strategy? If Player 2 guesses a change, is Player 2 better off changing strategies? Continue this line of reasoning for several iterations. What strategies do each of the players choose? Is at least one player always better off switching strategies? Can we conclude that the maximin\/ minimax strategy does not lead to an equilibrium pair?  "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "S_DominatedStrategies.html#exercise-34",
  "type": "Exercise",
  "number": "2.2.35",
  "title": "Comparing examples.",
  "body": "Comparing examples  Compare your answers in to what happens in , , and . Can you identify any key differences between the games in and , , and ?  "
},
{
  "id": "S_Probability",
  "level": "1",
  "url": "S_Probability.html",
  "type": "Section",
  "number": "2.3",
  "title": "Probability and Expected Value",
  "body": " Probability and Expected Value   Many games have an element of chance. In order to model such games and determine strategies, we should understand how mathematicians use probability to represent chance.    Some Basic Probability   probability   You are probably a little bit familiar with the idea of probability. People often talk about the chance of some event happening. For example, a weather forecast might say there is a 20% chance of rain. Now determining the chance of rain can be difficult, so we will stick with some easier examples.  Consider a standard deck of 52 playing cards. What is the chance of drawing a red card? What is the probability of drawing a red card? Is there a difference between chance and probability? Yes! The probability of an event has a very specific meaning in mathematics.  The probability probability of an event is the number of different outcomes resulting in divided by the total number of equally likely outcomes. In mathematical symbols,   Notice that the probability of will always be a number between 0 and 1. An impossible event will have probability 0; an event that always occurs will have probability 1.  Thus, the probability of drawing a red card is , not 50%. Although we can convert between probability and percent (since converted to percent is ), it is important to answer a question about probability with a probability, not a percent.   Drawing a Particular Suit   Given a standard deck of playing cards, what is the probability of drawing a heart?   Answer: You might say since there are four suits, and one of the suits is hearts, you have a probability of . You'd be correct, but be careful with this reasoning. This works because each suit has the same number of cards, so each suit is equally likely equally likely events . Another way the calculate the probability is to count the number of hearts (13) divided by the number of cards (52). Thus, we get a probability of .     A Card is Missing   Now suppose the ace of spades is missing from the deck. What is the probability of drawing a heart?   Answer: As before, there are still four suits in the deck, so it might be tempting to say the probability is still . But we'd be wrong! Each suit is no longer equally likely since, it is slightly less likely that we draw a spade. Each individual card is still equally likely, though. So now   As you can see, it is now slightly more likely that we draw a heart if the ace of spades is removed from the deck.    Now try to compute some probabilities on your own.  Probability with a single die  Consider rolling a single die. List the possible outcomes. Assuming that it is a fair die, are all the outcomes equally likely? What is the probability of rolling a 2? What is the probability of rolling an even number?   Probability with red and green dice  Now consider rolling two fair dice, say a red die and a green die.  How many equally likely outcomes are there? List them.  What is the probability that you get a two on the red die and a four on the green die?  What is the probability that you roll a three on the red die?  What is the probability that you roll a two and a four?  What is the probability that you roll a three?  Compare your answers in (b) and (c) with your answers in (d) and (e). Are they the same or different? Explain.     Probability with two of the same dice  Again consider rolling two fair dice, but now we don't care what color they are.  Does this change the number of equally likely outcomes from ? Why or why not? It may be helpful to list the possible outcomes.  What is the probability that you get snake eyes (two ones)?  What is the probability that you roll a two and a four?  What is the probability that you roll a three?  What is the probability that you roll a two OR a four?     Sums of dice  Suppose we roll two dice and add them.  List the possible sums.  What is the probability that you get a total of seven on the two dice?  What is the probability that you get a total of four when you roll two dice?  Are the events of getting a total of seven and getting a total of four equally likely? Explain.     It is important to note that just because you can list all of the possible outcomes, they may not be equally likely. As we see from , although there are 11 possible sums, the probability of getting any particular sum (such as seven) is not  .    Expected Value   expected value     The expected value expected value of a game of chance is the average net gain or loss that we would expect per game if we played the game many times. We compute the expected value by multiplying the value of each outcome by its probability of occurring and then add up all of the products.    For example, suppose you toss a fair coin: Heads, you win 25 cents, Tails, you lose 25 cents. The probability of getting Heads is , as is the probability of getting Tails. The expected value of the game is   Thus, you would expect an average payoff of $0, if you were to play the game several times. Note, the expected value is not necessarily the actual value of playing the game.  Expected value and a two-coin game  Consider a game where you toss two coins. If you get two Heads, you win $2. If you get a Head and a Tail, you win $1, if you get two Tails, you lose $4. Find the expected value of the game. (Caution: first you need to find the probability of each event think about equally likely events.)   Play the two-coin game  Now play the game in the indicated number of times. Give your actual payoff and compare it to the expected value.  One time.  Ten times.  Twenty-five times.  Is there a single possible outcome where you would actually win or lose the exact amount computed for the expected value? If not, why do we call it the expected value?     Expected value of roulette  A standard roulette wheel has 38 numbered slots for a small ball to land in: 36 are marked from 1 to 36, with half of those black and half red; two green slots are numbered 0 and 00. An allowable bet is to bet on either red of black. This bet is an even money bet, which means if you win you receive twice what you bet. Many people think that betting black or red is a fair game. What is the expected value of betting $1000 on red? Is this a fair game? Explain.   Another roulette example  Considering again the roulette wheel, if you bet $100 on a particular number and the ball lands on that number, you win $3600. What is the expected value of betting $100 on Red 4?   After finding the expected value of the games in the above exercises, what do you think the expected value can tell us about a game? Can you use it to decide whether you should play that game of chance or not? When will a game be advantageous for the player? We often care whether a game is fair. Can the expected value help you determine if a game is fair?  Expected value and fairness  Use the idea of expected value to explain fairness in a game of chance.   The last exercise is a good challenge for exploring expected value.  A betting game with two dice  You place a bet and roll two fair dice. If you roll a 7 or an 11, you receive your bet back (you break even). If you roll a 2, a 3, or a 12, then you lose your bet. If you roll anything else, you receive half of the sum you rolled in dollars. How much should you bet to make this a fair game?  It might be helpful to begin with a table showing the possible sums, their probability, and the payoff for each.  In the next section we use the ideas of probability and expected value to understand how set up a payoff matrix for a game of chance.   "
},
{
  "id": "E_drawheart",
  "level": "2",
  "url": "S_Probability.html#E_drawheart",
  "type": "Example",
  "number": "2.3.1",
  "title": "Drawing a Particular Suit.",
  "body": " Drawing a Particular Suit   Given a standard deck of playing cards, what is the probability of drawing a heart?   Answer: You might say since there are four suits, and one of the suits is hearts, you have a probability of . You'd be correct, but be careful with this reasoning. This works because each suit has the same number of cards, so each suit is equally likely equally likely events . Another way the calculate the probability is to count the number of hearts (13) divided by the number of cards (52). Thus, we get a probability of .   "
},
{
  "id": "E_takeawayspade",
  "level": "2",
  "url": "S_Probability.html#E_takeawayspade",
  "type": "Example",
  "number": "2.3.2",
  "title": "A Card is Missing.",
  "body": " A Card is Missing   Now suppose the ace of spades is missing from the deck. What is the probability of drawing a heart?   Answer: As before, there are still four suits in the deck, so it might be tempting to say the probability is still . But we'd be wrong! Each suit is no longer equally likely since, it is slightly less likely that we draw a spade. Each individual card is still equally likely, though. So now   As you can see, it is now slightly more likely that we draw a heart if the ace of spades is removed from the deck.   "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "S_Probability.html#exercise-35",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "Probability with a single die.",
  "body": "Probability with a single die  Consider rolling a single die. List the possible outcomes. Assuming that it is a fair die, are all the outcomes equally likely? What is the probability of rolling a 2? What is the probability of rolling an even number?  "
},
{
  "id": "E_redgreendice",
  "level": "2",
  "url": "S_Probability.html#E_redgreendice",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "Probability with red and green dice.",
  "body": "Probability with red and green dice  Now consider rolling two fair dice, say a red die and a green die.  How many equally likely outcomes are there? List them.  What is the probability that you get a two on the red die and a four on the green die?  What is the probability that you roll a three on the red die?  What is the probability that you roll a two and a four?  What is the probability that you roll a three?  Compare your answers in (b) and (c) with your answers in (d) and (e). Are they the same or different? Explain.    "
},
{
  "id": "E_twodice",
  "level": "2",
  "url": "S_Probability.html#E_twodice",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "Probability with two of the same dice.",
  "body": "Probability with two of the same dice  Again consider rolling two fair dice, but now we don't care what color they are.  Does this change the number of equally likely outcomes from ? Why or why not? It may be helpful to list the possible outcomes.  What is the probability that you get snake eyes (two ones)?  What is the probability that you roll a two and a four?  What is the probability that you roll a three?  What is the probability that you roll a two OR a four?    "
},
{
  "id": "E_sumdice",
  "level": "2",
  "url": "S_Probability.html#E_sumdice",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "Sums of dice.",
  "body": "Sums of dice  Suppose we roll two dice and add them.  List the possible sums.  What is the probability that you get a total of seven on the two dice?  What is the probability that you get a total of four when you roll two dice?  Are the events of getting a total of seven and getting a total of four equally likely? Explain.    "
},
{
  "id": "D_expectedvalue",
  "level": "2",
  "url": "S_Probability.html#D_expectedvalue",
  "type": "Definition",
  "number": "2.3.7",
  "title": "",
  "body": "  The expected value expected value of a game of chance is the average net gain or loss that we would expect per game if we played the game many times. We compute the expected value by multiplying the value of each outcome by its probability of occurring and then add up all of the products.   "
},
{
  "id": "E_Toss2coins",
  "level": "2",
  "url": "S_Probability.html#E_Toss2coins",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "Expected value and a two-coin game.",
  "body": "Expected value and a two-coin game  Consider a game where you toss two coins. If you get two Heads, you win $2. If you get a Head and a Tail, you win $1, if you get two Tails, you lose $4. Find the expected value of the game. (Caution: first you need to find the probability of each event think about equally likely events.)  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "S_Probability.html#exercise-40",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "Play the two-coin game.",
  "body": "Play the two-coin game  Now play the game in the indicated number of times. Give your actual payoff and compare it to the expected value.  One time.  Ten times.  Twenty-five times.  Is there a single possible outcome where you would actually win or lose the exact amount computed for the expected value? If not, why do we call it the expected value?    "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "S_Probability.html#exercise-41",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "Expected value of roulette.",
  "body": "Expected value of roulette  A standard roulette wheel has 38 numbered slots for a small ball to land in: 36 are marked from 1 to 36, with half of those black and half red; two green slots are numbered 0 and 00. An allowable bet is to bet on either red of black. This bet is an even money bet, which means if you win you receive twice what you bet. Many people think that betting black or red is a fair game. What is the expected value of betting $1000 on red? Is this a fair game? Explain.  "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "S_Probability.html#exercise-42",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "Another roulette example.",
  "body": "Another roulette example  Considering again the roulette wheel, if you bet $100 on a particular number and the ball lands on that number, you win $3600. What is the expected value of betting $100 on Red 4?  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "S_Probability.html#exercise-43",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "Expected value and fairness.",
  "body": "Expected value and fairness  Use the idea of expected value to explain fairness in a game of chance.  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "S_Probability.html#exercise-44",
  "type": "Exercise",
  "number": "2.3.13",
  "title": "A betting game with two dice.",
  "body": "A betting game with two dice  You place a bet and roll two fair dice. If you roll a 7 or an 11, you receive your bet back (you break even). If you roll a 2, a 3, or a 12, then you lose your bet. If you roll anything else, you receive half of the sum you rolled in dollars. How much should you bet to make this a fair game?  It might be helpful to begin with a table showing the possible sums, their probability, and the payoff for each. "
},
{
  "id": "S_OneCardStud",
  "level": "1",
  "url": "S_OneCardStud.html",
  "type": "Section",
  "number": "2.4",
  "title": "A Game of Chance",
  "body": " A Game of Chance  Now that we have worked with expected value, we can begin to analyze some simple games that involve an element of chance.   One-Card Stud Poker One-Card Stud Poker   We begin with a deck of cards in which 50% are Aces (you can use Red cards for Aces) and 50% are Kings (you can use Black cards for Kings). There are two players and one dealer. The play begins by each player putting in the ante (1 chip). Each player is dealt one card face down. WITHOUT LOOKING AT HIS OR HER CARD, the players decide to Bet (say, 1 chip) or Fold. Players secretly show the dealer their choice. If one player bet and the other folded, then the player who bet wins. If both bet or both fold, then Ace beats King (or Red beats Black); winner takes the pot (all the chips from the ante and any bets). If there is a tie, they split the pot.    Play One-Card Stud Poker  Play the game several times with two other people (so you have two players and a dealer), keeping track of the strategy choices of the players and the resulting payoffs.   Guess a strategy  Based on playing the game, determine a possible winning strategy.   Check if zero-sum  Is this a zero-sum game? Why or why not?   Relationship between the deal and the strategy  Does the actual deal affect the choice of strategy?   Strategy choices  On any given deal, what strategy choices does a player have?   Before moving on, you should attempt to determine the payoff matrix. The remainder of this section will be more meaningful if you have given some thought to what the payoff matrix should be. It is OK to be wrong at this point, it is not OK to not try.  Determine a possible payoff matrix  Write down a possible payoff matrix for this game.   Now let's work through creating the payoff matrix for One-Card Stud Poker.  Payoff for [Bet, Fold]  If Player 1 Bets and Player 2 Folds, does it matter which cards were dealt? How much does Player 1 win? How much does Player 2 lose? What is the payoff vector for [Bet, Fold]? (Keep in mind your answer to .)   Payoff for [Fold, Bet]  If Player 1 Folds and Player 2 Bets, does it matter which cards were dealt? What is the payoff vector for [Fold, Bet]?   Payoff and the actual deal  If both players Bet, does the payoff depend on which cards were dealt?   To determine the payoff vector for [Bet, Bet] and [Fold, Fold] we will need to consider which cards were dealt. We can use some probability to determine the remaining payoff vectors.  Probability of each deal  There are four possible outcomes of the deal list them. What is the probability that each occurs? (Remember: the probability of an event is a number between 0 and 1.)   Payoff for each deal with [Bet, Bet]  Consider the pair of strategies [Bet, Bet]. For each possible deal, determine the payoff vector. For example, if the players are each dealt an Ace (Red), how much does each player win? (Again, keep in mind your answer to .)   In order to calculate the payoff for [Bet, Bet], we need to take a weighted average of the possible payoff vectors in . In particular, we will weight a payoff by the probability that it occurs. Recall that this is the expected value expected value . We will calculate the expected value separately for each player.  Player 1's expected value for [Bet, Bet]  Find the expected value for [Bet, Bet] for Player 1.   Player 2's expected value for [Bet, Bet]  Find the expected value for [Bet, Bet] for Player 2.   The pair of expected values from and is the payoff vector for [Bet, Bet].  Justify using expected value as the payoff  Explain why it should make sense to use the expected values for the payoffs in the matrix for the strategy pair [Bet, Bet].  Think about what a player needs to know to choose a strategy in a game of chance.  We can use a similar process to find the payoff vector for [Fold, Fold].  Repeat for [Fold, Fold]  Repeat , , and for the pair of strategies [Fold, Fold].   Complete payoff matrix  Summarize the above work by giving the completed payoff matrix for One-Card Stud Poker.   Now that you have done all the hard work of finding the payoff matrix for One-Card Stud Poker, we can analyze our two-player zero-sum game using the techniques we learned in the previous sections. It is also important to see how the mathematical solution compares to our conjectured solution from .  Best strategy for One-Card Stud  Use the payoff matrix to determine the best strategy for each player. If each player uses their best strategy, what will be the outcome of the game?   Compare strategies  Compare the strategy you found in to your suggested strategy in . In particular, discuss how knowing the payoff matrix might have changed your strategy. Also compare the payoff that results from the strategy in to the payoff that results from your original strategy in .   Since One-Card Stud Poker has an element of chance, we should see what happens if we play the game several times using the strategy from .  Payoff for repeated One-Card Stud  Use the payoff matrix to predict what the payoff to each player would be if the game is played ten times.   Play repeated One-Card Stud  Play the game ten times using the best strategy. How much has each player won or lost after ten hands of One-Card Stud Poker? Compare your answer to your prediction in . Does the actual payoff differ from the theoretical payoff? If so, why do you think this might be?   Fair game  Explain why this game is considered fair.    Generalized One-Card Stud Poker Generalized One-Card Stud Poker   In One-Card Stud Poker we anted one chip and bet one chip. Now, suppose we let players ante a different amount and bet a different amount (although players will still ante and bet the same amount as each other). Suppose a player antes and bets . How might this change the game?    Payoff matrix for Generalized One-Card Stud  Use the method outlined for One-Card Stud Poker to determine the payoff matrix for Generalized One-Card Stud Poker.   Strategy for Generalized One-Card Stud  Does the strategy change for the generalized version of the game? Explain.   Now that we have analyzed several zero-sum games, we can see how important is is to find any equilibrium pairs. In the next section we explore equilibrium strategies in more detail.  "
},
{
  "id": "E_onecardstud",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardstud",
  "type": "Example",
  "number": "2.4.1",
  "title": "One-Card Stud Poker.",
  "body": " One-Card Stud Poker One-Card Stud Poker   We begin with a deck of cards in which 50% are Aces (you can use Red cards for Aces) and 50% are Kings (you can use Black cards for Kings). There are two players and one dealer. The play begins by each player putting in the ante (1 chip). Each player is dealt one card face down. WITHOUT LOOKING AT HIS OR HER CARD, the players decide to Bet (say, 1 chip) or Fold. Players secretly show the dealer their choice. If one player bet and the other folded, then the player who bet wins. If both bet or both fold, then Ace beats King (or Red beats Black); winner takes the pot (all the chips from the ante and any bets). If there is a tie, they split the pot.   "
},
{
  "id": "E_playonecard",
  "level": "2",
  "url": "S_OneCardStud.html#E_playonecard",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "Play One-Card Stud Poker.",
  "body": "Play One-Card Stud Poker  Play the game several times with two other people (so you have two players and a dealer), keeping track of the strategy choices of the players and the resulting payoffs.  "
},
{
  "id": "E_onecardconjecturestrat",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardconjecturestrat",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "Guess a strategy.",
  "body": "Guess a strategy  Based on playing the game, determine a possible winning strategy.  "
},
{
  "id": "E_onecardzerosum",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardzerosum",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "Check if zero-sum.",
  "body": "Check if zero-sum  Is this a zero-sum game? Why or why not?  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "S_OneCardStud.html#exercise-48",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "Relationship between the deal and the strategy.",
  "body": "Relationship between the deal and the strategy  Does the actual deal affect the choice of strategy?  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "S_OneCardStud.html#exercise-49",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "Strategy choices.",
  "body": "Strategy choices  On any given deal, what strategy choices does a player have?  "
},
{
  "id": "E_possiblematrix",
  "level": "2",
  "url": "S_OneCardStud.html#E_possiblematrix",
  "type": "Exercise",
  "number": "2.4.7",
  "title": "Determine a possible payoff matrix.",
  "body": "Determine a possible payoff matrix  Write down a possible payoff matrix for this game.  "
},
{
  "id": "E_payoffBF",
  "level": "2",
  "url": "S_OneCardStud.html#E_payoffBF",
  "type": "Exercise",
  "number": "2.4.8",
  "title": "Payoff for [Bet, Fold].",
  "body": "Payoff for [Bet, Fold]  If Player 1 Bets and Player 2 Folds, does it matter which cards were dealt? How much does Player 1 win? How much does Player 2 lose? What is the payoff vector for [Bet, Fold]? (Keep in mind your answer to .)  "
},
{
  "id": "E_payoffFB",
  "level": "2",
  "url": "S_OneCardStud.html#E_payoffFB",
  "type": "Exercise",
  "number": "2.4.9",
  "title": "Payoff for [Fold, Bet].",
  "body": "Payoff for [Fold, Bet]  If Player 1 Folds and Player 2 Bets, does it matter which cards were dealt? What is the payoff vector for [Fold, Bet]?  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "S_OneCardStud.html#exercise-53",
  "type": "Exercise",
  "number": "2.4.10",
  "title": "Payoff and the actual deal.",
  "body": "Payoff and the actual deal  If both players Bet, does the payoff depend on which cards were dealt?  "
},
{
  "id": "E_probofdeal",
  "level": "2",
  "url": "S_OneCardStud.html#E_probofdeal",
  "type": "Exercise",
  "number": "2.4.11",
  "title": "Probability of each deal.",
  "body": "Probability of each deal  There are four possible outcomes of the deal list them. What is the probability that each occurs? (Remember: the probability of an event is a number between 0 and 1.)  "
},
{
  "id": "E_BBpayoffperdeal",
  "level": "2",
  "url": "S_OneCardStud.html#E_BBpayoffperdeal",
  "type": "Exercise",
  "number": "2.4.12",
  "title": "Payoff for each deal with [Bet, Bet].",
  "body": "Payoff for each deal with [Bet, Bet]  Consider the pair of strategies [Bet, Bet]. For each possible deal, determine the payoff vector. For example, if the players are each dealt an Ace (Red), how much does each player win? (Again, keep in mind your answer to .)  "
},
{
  "id": "E_BBev1",
  "level": "2",
  "url": "S_OneCardStud.html#E_BBev1",
  "type": "Exercise",
  "number": "2.4.13",
  "title": "Player 1's expected value for [Bet, Bet].",
  "body": "Player 1's expected value for [Bet, Bet]  Find the expected value for [Bet, Bet] for Player 1.  "
},
{
  "id": "E_BBev2",
  "level": "2",
  "url": "S_OneCardStud.html#E_BBev2",
  "type": "Exercise",
  "number": "2.4.14",
  "title": "Player 2's expected value for [Bet, Bet].",
  "body": "Player 2's expected value for [Bet, Bet]  Find the expected value for [Bet, Bet] for Player 2.  "
},
{
  "id": "E_BBexplain",
  "level": "2",
  "url": "S_OneCardStud.html#E_BBexplain",
  "type": "Exercise",
  "number": "2.4.15",
  "title": "Justify using expected value as the payoff.",
  "body": "Justify using expected value as the payoff  Explain why it should make sense to use the expected values for the payoffs in the matrix for the strategy pair [Bet, Bet].  Think about what a player needs to know to choose a strategy in a game of chance. "
},
{
  "id": "E_FF",
  "level": "2",
  "url": "S_OneCardStud.html#E_FF",
  "type": "Exercise",
  "number": "2.4.16",
  "title": "Repeat for [Fold, Fold].",
  "body": "Repeat for [Fold, Fold]  Repeat , , and for the pair of strategies [Fold, Fold].  "
},
{
  "id": "E_onecardmatrix",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardmatrix",
  "type": "Exercise",
  "number": "2.4.17",
  "title": "Complete payoff matrix.",
  "body": "Complete payoff matrix  Summarize the above work by giving the completed payoff matrix for One-Card Stud Poker.  "
},
{
  "id": "E_onecardstrategy",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardstrategy",
  "type": "Exercise",
  "number": "2.4.18",
  "title": "Best strategy for One-Card Stud.",
  "body": "Best strategy for One-Card Stud  Use the payoff matrix to determine the best strategy for each player. If each player uses their best strategy, what will be the outcome of the game?  "
},
{
  "id": "E_onecardcompare",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardcompare",
  "type": "Exercise",
  "number": "2.4.19",
  "title": "Compare strategies.",
  "body": "Compare strategies  Compare the strategy you found in to your suggested strategy in . In particular, discuss how knowing the payoff matrix might have changed your strategy. Also compare the payoff that results from the strategy in to the payoff that results from your original strategy in .  "
},
{
  "id": "E_onecardlongrun",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardlongrun",
  "type": "Exercise",
  "number": "2.4.20",
  "title": "Payoff for repeated One-Card Stud.",
  "body": "Payoff for repeated One-Card Stud  Use the payoff matrix to predict what the payoff to each player would be if the game is played ten times.  "
},
{
  "id": "E_onecardtrials",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardtrials",
  "type": "Exercise",
  "number": "2.4.21",
  "title": "Play repeated One-Card Stud.",
  "body": "Play repeated One-Card Stud  Play the game ten times using the best strategy. How much has each player won or lost after ten hands of One-Card Stud Poker? Compare your answer to your prediction in . Does the actual payoff differ from the theoretical payoff? If so, why do you think this might be?  "
},
{
  "id": "E_onecardfair",
  "level": "2",
  "url": "S_OneCardStud.html#E_onecardfair",
  "type": "Exercise",
  "number": "2.4.22",
  "title": "Fair game.",
  "body": "Fair game  Explain why this game is considered fair.  "
},
{
  "id": "E_genonecardstud",
  "level": "2",
  "url": "S_OneCardStud.html#E_genonecardstud",
  "type": "Example",
  "number": "2.4.23",
  "title": "Generalized One-Card Stud Poker.",
  "body": " Generalized One-Card Stud Poker Generalized One-Card Stud Poker   In One-Card Stud Poker we anted one chip and bet one chip. Now, suppose we let players ante a different amount and bet a different amount (although players will still ante and bet the same amount as each other). Suppose a player antes and bets . How might this change the game?   "
},
{
  "id": "E_genonecard",
  "level": "2",
  "url": "S_OneCardStud.html#E_genonecard",
  "type": "Exercise",
  "number": "2.4.24",
  "title": "Payoff matrix for Generalized One-Card Stud.",
  "body": "Payoff matrix for Generalized One-Card Stud  Use the method outlined for One-Card Stud Poker to determine the payoff matrix for Generalized One-Card Stud Poker.  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "S_OneCardStud.html#exercise-67",
  "type": "Exercise",
  "number": "2.4.25",
  "title": "Strategy for Generalized One-Card Stud.",
  "body": "Strategy for Generalized One-Card Stud  Does the strategy change for the generalized version of the game? Explain.  "
},
{
  "id": "S_EquilibPoints",
  "level": "1",
  "url": "S_EquilibPoints.html",
  "type": "Section",
  "number": "2.5",
  "title": "Equilibrium Points",
  "body": " Equilibrium Points  In this section, we will try to gain a greater understanding of equilibrium strategies in a game. In general, we call the pair of equilibrium strategies an equilibrium pair equilibrium pair , while we call the specific payoff vector associated with an equilibrium pair an equilibrium point equilibrium point .  Find equilibrium points  Determine the equilibrium point(s) for the following games.           An observation about equilibrium points  What do you notice about the values of the equilibrium points of the games in ?   The big question we want to answer is Can two equilibrium points for a two-player zero-sum game have different values? By experimenting with some examples, try to create an example of a game with two equilibrium points where those points have different values for one of the players. If you can successfully create such an example, you will have answered the question. But just because you can't find an example, that doesn't mean one doesn't exist!  After trying several examples, you might be beginning to believe that the answer to the above question is no. Now you are ready to try to prove the following theorem:   Solution Theorem for Zero-Sum Games   Solution Theorem for Zero-Sum Games Every equilibrium point of a two-person zero-sum game has the same value.   Let's start with the case. We will use a proof by contradiction proof by contradiction . We will assume the theorem is false and show that we get a logical contradiction. Once we reach a logical contradiction (a statement that is both true and false), we can conclude we were wrong to assume the theorem was false; hence, the theorem must be true. Make sure you are comfortable with the logic of this before moving on.  Since we want to assume the theorem is false, we assume we have a two-player zero-sum game with two different equilibrium values. Since we don't have a specific example of such a game, we want to represent the game in a general form. In particular, we can represent the general game   Note that if is negative, then is positive; thus, every possible set of values is represented by this matrix. We want to look at the possible cases for equilibria.  Equilibria in Column 1  Explain what goes wrong if and are equilibria with .  Think about the different cases, such as , .  Equilibria in the same column\/row  Generalize you answer to to explain what goes wrong if the two equilibria are in the same column. Similarly, explain what happens if the two equilibria are in the same row.   Diagonal equilibria  Does the same explanation hold if the two equilibria are diagonal from each other? (Explain your answer!)   From your last answer, you should see that we need to do more work to figure out what happens if the equilibria are diagonal. So let's assume that the two equilibria are and with . It might be helpful to draw the payoff matrix and circle the equilibria.  A player prefers the value of an equilibrium  Construct a system of inequalities using the fact that a player prefers an equilibrium point to another choice. For example, Player 1 prefers to . Thus, . List all four inequalities you can get using this fact. You should get two for each player remember that Player 1 can only compare values in the same column since he has no ability to switch columns. If necessary, convert all inequalities to ones without negatives. (Algebra review: means !)   Create strings of inequalities  Now string your inequalities together. For example, if and then we can write . (Be careful, the inequalities must face the same way; we cannot write !)   You now have a contradiction  Explain why you now have a contradiction (a statement that must be false). We can now conclude that our assumption that was wrong.   Diagonal case for and  Repeat the above argument ( , , and ) for the case that the two equilibria are and with .   Summarize conclusion  Explain why you can conclude that all equilibria in a two-player zero-sum game have the same value.   We just worked through the proof, step-by-step, but now you need to put all the ideas together for yourself.  The complete proof  Write up the complete proof for the case in your own words.   Generalizing to a larger game  Can you see how you might generalize to a larger game matrix? You do not need to write up a proof of the general case, just explain how the key ideas from the case would apply to a bigger game matrix.  Think about equilibria in (a) the same row, (b) in the same column, or (c) in a different row and column.  We've seen that any two equlibrium points must have the same value. However, it is important to note that just because an outcome has the same value as an equilibrium point, that does not mean it is also an equilibrium point.  Equal values may not be equilibria  Give a specific example of a game matrix with two outcomes that are , where one is an equilibrium point and the other is not.   Working through the steps of a mathematical proof can be challenging. As you think about what we did in this section, first make sure you understand the argument for each step. Then work on understanding how the steps fit together to create the larger argument.  The next section summarizes all our work with finding equilibrium points for zero-sum games.  "
},
{
  "id": "E_matrixexamples",
  "level": "2",
  "url": "S_EquilibPoints.html#E_matrixexamples",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "Find equilibrium points.",
  "body": "Find equilibrium points  Determine the equilibrium point(s) for the following games.          "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "S_EquilibPoints.html#exercise-69",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "An observation about equilibrium points.",
  "body": "An observation about equilibrium points  What do you notice about the values of the equilibrium points of the games in ?  "
},
{
  "id": "E_col1neq",
  "level": "2",
  "url": "S_EquilibPoints.html#E_col1neq",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "Equilibria in Column 1.",
  "body": "Equilibria in Column 1  Explain what goes wrong if and are equilibria with .  Think about the different cases, such as , . "
},
{
  "id": "E_gencolneq",
  "level": "2",
  "url": "S_EquilibPoints.html#E_gencolneq",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "Equilibria in the same column\/row.",
  "body": "Equilibria in the same column\/row  Generalize you answer to to explain what goes wrong if the two equilibria are in the same column. Similarly, explain what happens if the two equilibria are in the same row.  "
},
{
  "id": "E_diag",
  "level": "2",
  "url": "S_EquilibPoints.html#E_diag",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "Diagonal equilibria.",
  "body": "Diagonal equilibria  Does the same explanation hold if the two equilibria are diagonal from each other? (Explain your answer!)  "
},
{
  "id": "E_4ineq1",
  "level": "2",
  "url": "S_EquilibPoints.html#E_4ineq1",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "A player prefers the value of an equilibrium.",
  "body": "A player prefers the value of an equilibrium  Construct a system of inequalities using the fact that a player prefers an equilibrium point to another choice. For example, Player 1 prefers to . Thus, . List all four inequalities you can get using this fact. You should get two for each player remember that Player 1 can only compare values in the same column since he has no ability to switch columns. If necessary, convert all inequalities to ones without negatives. (Algebra review: means !)  "
},
{
  "id": "E_string1",
  "level": "2",
  "url": "S_EquilibPoints.html#E_string1",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "Create strings of inequalities.",
  "body": "Create strings of inequalities  Now string your inequalities together. For example, if and then we can write . (Be careful, the inequalities must face the same way; we cannot write !)  "
},
{
  "id": "E_contra1",
  "level": "2",
  "url": "S_EquilibPoints.html#E_contra1",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "You now have a contradiction.",
  "body": "You now have a contradiction  Explain why you now have a contradiction (a statement that must be false). We can now conclude that our assumption that was wrong.  "
},
{
  "id": "E_repeatineq",
  "level": "2",
  "url": "S_EquilibPoints.html#E_repeatineq",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "Diagonal case for <span class=\"process-math\">\\(c\\)<\/span> and <span class=\"process-math\">\\(d\\)<\/span>.",
  "body": "Diagonal case for and  Repeat the above argument ( , , and ) for the case that the two equilibria are and with .  "
},
{
  "id": "E_concl2x2",
  "level": "2",
  "url": "S_EquilibPoints.html#E_concl2x2",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "Summarize conclusion.",
  "body": "Summarize conclusion  Explain why you can conclude that all equilibria in a two-player zero-sum game have the same value.  "
},
{
  "id": "E_2x2proof",
  "level": "2",
  "url": "S_EquilibPoints.html#E_2x2proof",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "The complete proof.",
  "body": "The complete proof  Write up the complete proof for the case in your own words.  "
},
{
  "id": "E_nxn",
  "level": "2",
  "url": "S_EquilibPoints.html#E_nxn",
  "type": "Exercise",
  "number": "2.5.12",
  "title": "Generalizing to a larger game.",
  "body": "Generalizing to a larger game  Can you see how you might generalize to a larger game matrix? You do not need to write up a proof of the general case, just explain how the key ideas from the case would apply to a bigger game matrix.  Think about equilibria in (a) the same row, (b) in the same column, or (c) in a different row and column. "
},
{
  "id": "E_nonequil",
  "level": "2",
  "url": "S_EquilibPoints.html#E_nonequil",
  "type": "Exercise",
  "number": "2.5.13",
  "title": "Equal values may not be equilibria.",
  "body": "Equal values may not be equilibria  Give a specific example of a game matrix with two outcomes that are , where one is an equilibrium point and the other is not.  "
},
{
  "id": "S_ZeroSumStrategySummary",
  "level": "1",
  "url": "S_ZeroSumStrategySummary.html",
  "type": "Section",
  "number": "2.6",
  "title": "Strategies for Zero-Sum Games and Equilibrium Points",
  "body": " Strategies for Zero-Sum Games and Equilibrium Points  Throughout this chapter, we have been trying to find solutions for two player zero-sum games by deciding what two rational players should do. In this section, we will try to understand where we are with solving two-player zero-sum games. The exercises in this section are intended to review the concepts of dominated strategies, equlibrium points, and the maximin\/minimax strategies. By working through your own examples, we hope to tie these concepts together and ask some bigger questions about equilibrium points. For example, should a player always play an equilibrium strategy? Will the maximin\/minimax strategy always find an equilibrium point if one exists? What should a player do if no equlibrium exists? Although the formal answers to some of these questions are outside the scope of this book, you should be able to make some good conjectures about equilibrium points and rational solutions to two-player zero-sum games.  Random matrix  Write down a random payoff (zero-sum) matrix with two strategy choices for each player.   Random matrix  Write down a random payoff (zero-sum) matrix with three strategy choices for each player.   Random matrix  Write down a random payoff (zero-sum) matrix with four strategy choices for each player.   Analyze several examples  Exchange your list of matrices with another student in the class. For each matrix you have been given  try to determine any dominated strategies, if they exist.  try to determine any equilibrium points, if they exist.  determine the maximin and minimax strategies for Player 1 and Player 2, respectively. Can you always find these?     Classify examples  Now combine all the examples of payoff matrices in a group of 3 or 4 students. Make a list of the examples with equilibrium points and a list of examples without equilibrium points. If you have only one list, try creating examples for the other list. Based on your lists, do you think random payoff matrices are likely to have equilibrium points?   We want to use lists of matrices as experimental examples to try to answer some of the remaining questions we have about finding rational solutions for games and equilibrium points. If you don't feel you have enough examples, you are welcome to create more or gather more from your classmates.  Playing an equilibrium strategy  If a matrix has an equilibrium point, can a player ever do better to not play an equilibrium strategy? Explain.   Equilibia and maximin\/minimax  If a matrix has an equilibrium point, does the maximin\/minimax strategy always find it? Explain.   No equilibria and maximin\/minimax  If a matrix does NOT have an equilibrium point, should a player always play the maximin\/minimax strategy? Explain.   Strategy and games with no equilibria  If a matrix does NOT have an equilibrium point is there an ideal strategy for each player? Explain.   Summarize the connections  Write a brief summary of the connections you have observed between finding a rational solution for a game and equilibrium points.   Now you should have an understanding of how to find equilibrium strategies in two-player zero-sum games. The main advantage of equilibrium strategies is that if both players play them, neither player would have gained by playing a different strategy. Thus, we can think of the equilibrium strategies as the solution to the game for two rational players. But what should our players do if the game has no equilibrium point? We will look more closely at games with no equilibrium point in the next chapter.  "
},
{
  "id": "E_random2",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#E_random2",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "Random <span class=\"process-math\">\\(2\\times 2\\)<\/span> matrix.",
  "body": "Random matrix  Write down a random payoff (zero-sum) matrix with two strategy choices for each player.  "
},
{
  "id": "E_random3",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#E_random3",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "Random <span class=\"process-math\">\\(3\\times 3\\)<\/span> matrix.",
  "body": "Random matrix  Write down a random payoff (zero-sum) matrix with three strategy choices for each player.  "
},
{
  "id": "E_random4",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#E_random4",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "Random <span class=\"process-math\">\\(4\\times 4\\)<\/span> matrix.",
  "body": "Random matrix  Write down a random payoff (zero-sum) matrix with four strategy choices for each player.  "
},
{
  "id": "E_exchangematrices",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#E_exchangematrices",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "Analyze several examples.",
  "body": "Analyze several examples  Exchange your list of matrices with another student in the class. For each matrix you have been given  try to determine any dominated strategies, if they exist.  try to determine any equilibrium points, if they exist.  determine the maximin and minimax strategies for Player 1 and Player 2, respectively. Can you always find these?    "
},
{
  "id": "E_makelists",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#E_makelists",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "Classify examples.",
  "body": "Classify examples  Now combine all the examples of payoff matrices in a group of 3 or 4 students. Make a list of the examples with equilibrium points and a list of examples without equilibrium points. If you have only one list, try creating examples for the other list. Based on your lists, do you think random payoff matrices are likely to have equilibrium points?  "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#exercise-86",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "Playing an equilibrium strategy.",
  "body": "Playing an equilibrium strategy  If a matrix has an equilibrium point, can a player ever do better to not play an equilibrium strategy? Explain.  "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#exercise-87",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "Equilibia and maximin\/minimax.",
  "body": "Equilibia and maximin\/minimax  If a matrix has an equilibrium point, does the maximin\/minimax strategy always find it? Explain.  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#exercise-88",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "No equilibria and maximin\/minimax.",
  "body": "No equilibria and maximin\/minimax  If a matrix does NOT have an equilibrium point, should a player always play the maximin\/minimax strategy? Explain.  "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#exercise-89",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "Strategy and games with no equilibria.",
  "body": "Strategy and games with no equilibria  If a matrix does NOT have an equilibrium point is there an ideal strategy for each player? Explain.  "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "S_ZeroSumStrategySummary.html#exercise-90",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "Summarize the connections.",
  "body": "Summarize the connections  Write a brief summary of the connections you have observed between finding a rational solution for a game and equilibrium points.  "
},
{
  "id": "S_PopRationality",
  "level": "1",
  "url": "S_PopRationality.html",
  "type": "Section",
  "number": "2.7",
  "title": "Popular Culture: Rationality and Perfect Information",
  "body": " Popular Culture: Rationality and Perfect Information   popular culture   In this section, we will look at applications of rationality rationality and perfect information perfect information in popular culture. We present films with connections to game theory and suggest some related questions for essays or class discussion.  The movie Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb Dr. Strangelove (1964) depicts the cold war era with the USA and the Soviet Union on the brink of atomic war.   Society would generally consider General Jack Ripper to be irrational. What is his goal or his optimal payoff? Give evidence that he is, in fact, acting rationally in light of his goal.    Explain how the Soviet's Doomsday Machine is supposed to be the ultimate deterrent to nuclear war. How does the lack of perfect information impact the effectiveness of the Doomsday Machine?   In the movie The Princess Bride The Princess Bride (1987) the Dread Pirate Roberts and kidnapper Vizzini engage in a battle of wits in which Vizzini is to deduce which goblet contain a lethal poison.   In your own words describe how the poison scene demonstrates that knowing that both players have the same knowledge can help one deduce additional information. In other words, just knowing that one player has all the information is not enough; that player, must also know that the other player has the same knowledge.    Of course, in the poison scene, both players break the rules. How does this impact the players' ability to use perfect information?   Now try to apply the ideas of rationality and perfect information to your own popular culture examples.   Consider a game-theoretic scenario in a novel or film of your choice. Are the players rational? What are the players' goals, and are they making choices which will maximize their payoff? Explain.    Consider the statement One of the main differences between horror films and suspense films is that in horror films characters behave irrationally while in suspense films they behave rationally. Do you agree or disagree with this statement? Give an example of a suspense film and a horror film with evidence from the films that supports your position.    Think of other films where two characters engage in a game. What are the assumptions of the players? Do they have have perfect information? Does the amount of information a player has give him or her an advantage? Explain.    Give an example from a film, current events, or your own life where if one player breaks the rules, while the other player assumes perfect knowledge (both players know the possible strategies and outcomes), it will change the outcome of the game.    "
},
{
  "id": "question-1",
  "level": "2",
  "url": "S_PopRationality.html#question-1",
  "type": "Question",
  "number": "2.7.1",
  "title": "",
  "body": " Society would generally consider General Jack Ripper to be irrational. What is his goal or his optimal payoff? Give evidence that he is, in fact, acting rationally in light of his goal.  "
},
{
  "id": "question-2",
  "level": "2",
  "url": "S_PopRationality.html#question-2",
  "type": "Question",
  "number": "2.7.2",
  "title": "",
  "body": " Explain how the Soviet's Doomsday Machine is supposed to be the ultimate deterrent to nuclear war. How does the lack of perfect information impact the effectiveness of the Doomsday Machine?  "
},
{
  "id": "question-3",
  "level": "2",
  "url": "S_PopRationality.html#question-3",
  "type": "Question",
  "number": "2.7.3",
  "title": "",
  "body": " In your own words describe how the poison scene demonstrates that knowing that both players have the same knowledge can help one deduce additional information. In other words, just knowing that one player has all the information is not enough; that player, must also know that the other player has the same knowledge.  "
},
{
  "id": "question-4",
  "level": "2",
  "url": "S_PopRationality.html#question-4",
  "type": "Question",
  "number": "2.7.4",
  "title": "",
  "body": " Of course, in the poison scene, both players break the rules. How does this impact the players' ability to use perfect information?  "
},
{
  "id": "question-5",
  "level": "2",
  "url": "S_PopRationality.html#question-5",
  "type": "Question",
  "number": "2.7.5",
  "title": "",
  "body": " Consider a game-theoretic scenario in a novel or film of your choice. Are the players rational? What are the players' goals, and are they making choices which will maximize their payoff? Explain.  "
},
{
  "id": "question-6",
  "level": "2",
  "url": "S_PopRationality.html#question-6",
  "type": "Question",
  "number": "2.7.6",
  "title": "",
  "body": " Consider the statement One of the main differences between horror films and suspense films is that in horror films characters behave irrationally while in suspense films they behave rationally. Do you agree or disagree with this statement? Give an example of a suspense film and a horror film with evidence from the films that supports your position.  "
},
{
  "id": "question-7",
  "level": "2",
  "url": "S_PopRationality.html#question-7",
  "type": "Question",
  "number": "2.7.7",
  "title": "",
  "body": " Think of other films where two characters engage in a game. What are the assumptions of the players? Do they have have perfect information? Does the amount of information a player has give him or her an advantage? Explain.  "
},
{
  "id": "question-8",
  "level": "2",
  "url": "S_PopRationality.html#question-8",
  "type": "Question",
  "number": "2.7.8",
  "title": "",
  "body": " Give an example from a film, current events, or your own life where if one player breaks the rules, while the other player assumes perfect knowledge (both players know the possible strategies and outcomes), it will change the outcome of the game.   "
},
{
  "id": "S_IntroRepeated",
  "level": "1",
  "url": "S_IntroRepeated.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Repeated Games",
  "body": " Introduction to Repeated Games  Now that we are experts at finding equilibrium pairs, what happens when a game doesn't have any equilibrium pairs? What should our players do?   A Repeated Game   Consider the following zero-sum game   Does this game have an equilibrium pair? Play this game with an opponent 10 times. Tally your wins and losses. Describe how you chose which strategy to play. Describe how your opponent chose which strategy to play.    When playing the game several times, does it make sense for either player to play the same strategy all the time? Why or why not?  Although we use the term strategy to mean which row (or column) a player chooses to play, we will also refer to how a player plays a repeated game as the player's strategy strategy, repeated game . In order to avoid confusion, in repeated games we will define some specific strategies.    In a repeated game, if a player always plays the same row (or column), we say that she is playing a pure strategy . pure strategy strategy, pure     For example, if Player 1 always plays Row A, we say she is playing pure strategy A .    If a player varies which row (or column) he plays, then we say he is playing a mixed strategy . mixed strategy strategy, mixed     For example, if a player plays Row A 40% of the time and Row B 60% of the time, we will say he is playing a (.4, .6) strategy, as we generally use the probability rather than the percent. The probabilities of each strategy will be listed in the same order as the strategies in the matrix.  It is not enough just to determine how often to play a strategy. Suppose Player 1 just alternates rows in . Can Player 2 out-guess Player 1? What might be a better way for Player 1 to play?  We'd really like to find a way to determine the best mixed strategy for each player in repeated games. Let's start with what we already know: games with equilibrium points. If a game has an equilibrium pair, would a player want to play a mixed strategy? Recall that a strategy pair is an equilibrium pair if neither player gains by switching strategy.   Repeating a Game with an Equilibrium   Consider the following zero-sum game   This game has an equilibrium pair. Convince yourself that if this game is played repeatedly, each player should choose to play a pure strategy.    Thus, if the game has an equilibrium we know that players will play the pure strategies determined by the equilibrium pairs. So let's get back to thinking about games without equilibrium pairs. If we play such a game once, can we predict the outcome? What about if we repeat the game several times can we predict the outcome? Think about tossing a coin. If you toss it once, can you predict the outcome? What if you toss it 100 times can you predict the outcome? Not exactly, but we can say what we expect : if we toss a coin 100 times we expect to have half of the coins turn up heads and half turn up tails. This may not be the actual outcome, but it is a reasonable prediction. Now is a good time to remind yourself about finding the expected value expected value !!  Recall the familiar game Rock-Paper-Scissors Rock-Paper-Scissors : ROCK beats SCISSORS, SCISSORS beat PAPER, and PAPER beats ROCK. Using the payoff matrix and experimentation, we will try to determine the best strategy for this game.  RPS payoff matrix  Construct a game matrix for Rock-Paper-Scissors.   RPS and equilibrium points  Is Rock-Paper-Scissors a zero-sum game? Does it have an equilibrium point? Explain.   Play RPS  We want to look at what happens if we repeat Rock-Paper-Scissors. Play the game ten times with an opponent. Record the results (list strategy pairs and payoffs for each player).   Conjecture a strategy  Describe any strategy you used in .   Strengths and weaknesses of your strategy  Reflect on your chosen strategy. Does it guarantee you a win ? What should it mean to win in a repeated game? What are the strengths and weaknesses of your strategy?   Share your strategy  Discuss your strategy with someone else in the class (it can be your opponent). After sharing your ideas for a strategy, can you improve your previous strategy?   Although you may have come up with a good strategy, let's see if we can't decide what the best strategy should be for Rock-Paper-Scissors. Let's assume we are playing Rock-Paper-Scissors against the smartest player to ever live. We will call such an opponent the perfect player.  The weakness of a pure strategy  Explain why it is not a good idea to play a pure strategy; i.e., to play only ROCK, only PAPER, or only SCISSORS.   An uneven strategy  Does it make sense to play one option more often than another (for example, ROCK more often than PAPER)? Explain.   Frequency of R, P, S  How often should you play each option?   Playing a pattern  Do you want to play in a predictable pattern or randomly? What are some advantages and disadvantages of a pattern? What are some advantages and disadvantages of a random strategy?   Hopefully, you concluded that the best strategy against our perfect player would be to play ROCK, PAPER, SCISSORS 1\/3 of the time each, and to play randomly. We can say that our strategy is to play each option randomly with a probability of 1\/3, and call this the Random(1\/3, 1\/3, 1\/3) strategy.  Long-term payoff  Using this best strategy, what do you predict the long term payoff will be for Player 1? For Player 2?   Testing the Random(1\/3, 1\/3, 1\/3) strategy  Let's check our prediction. Using a die, let 1 and 2 represent ROCK, 3 and 4 represent PAPER, and 5 and 6 represent SCISSORS. Play the game 20 times with someone in class where each player rolls to determine the choice of ROCK, PAPER, or SCISSORS. Keep track of the strategy pairs and payoffs. What was the total payoff for each player? (At this point, if you still feel that you have a better strategy, try your strategy against the random one see what happens!)   Compare to your prediction  How did the actual outcome compare to your predicted outcome? What do you expect would happen if you play the game 100 times? (Or more?)   Using ideas about probability and expected value we can more precisely answer .  Probabiliies when both players play the random strategy  Assume both players are using the Random(1\/3, 1\/3, 1\/3) strategy. List all the possible outcomes for a single game (recall the outcome is the strategy pair and the payoff, for example [R, P], ). What is the probability that any particular pair of strategies will be played? Are the strategy pairs equally likely?   Expected value  Using the probabilities and payoffs from calculate the expected value of the game for each player.   Strategy for the repeated game  Now consider the matrix from above:   See if you can determine how often Player 1 should play each row, and how often Player 2 should play each column. Try testing your proposed strategy (you may be able to use a variation on the dice as we saw in ). Write up any conjectured strategies and the results from playing the game with your strategy. Do you think you have come up with the best strategy? Explain.   You may have had an idea about the best way to play Rock-Paper-Scissors before working through this section, but how can we find solutions to other games, such as the one in ? We don't want to just use a guess and check method. Especially since there are infinitely many possible mixed strategies to try! The rest of the chapter will develop mathematical methods for solving repeated games with no equilibrium point.  "
},
{
  "id": "E_smallrepeat",
  "level": "2",
  "url": "S_IntroRepeated.html#E_smallrepeat",
  "type": "Example",
  "number": "3.1.1",
  "title": "A <span class=\"process-math\">\\(2\\times 2\\)<\/span> Repeated Game.",
  "body": " A Repeated Game   Consider the following zero-sum game   Does this game have an equilibrium pair? Play this game with an opponent 10 times. Tally your wins and losses. Describe how you chose which strategy to play. Describe how your opponent chose which strategy to play.   "
},
{
  "id": "definition-7",
  "level": "2",
  "url": "S_IntroRepeated.html#definition-7",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  In a repeated game, if a player always plays the same row (or column), we say that she is playing a pure strategy . pure strategy strategy, pure    "
},
{
  "id": "definition-8",
  "level": "2",
  "url": "S_IntroRepeated.html#definition-8",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  If a player varies which row (or column) he plays, then we say he is playing a mixed strategy . mixed strategy strategy, mixed    "
},
{
  "id": "E_repeatequil",
  "level": "2",
  "url": "S_IntroRepeated.html#E_repeatequil",
  "type": "Example",
  "number": "3.1.4",
  "title": "Repeating a Game with an Equilibrium.",
  "body": " Repeating a Game with an Equilibrium   Consider the following zero-sum game   This game has an equilibrium pair. Convince yourself that if this game is played repeatedly, each player should choose to play a pure strategy.   "
},
{
  "id": "E_RPSmatrix",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSmatrix",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "RPS payoff matrix.",
  "body": "RPS payoff matrix  Construct a game matrix for Rock-Paper-Scissors.  "
},
{
  "id": "E_RPSzs",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSzs",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "RPS and equilibrium points.",
  "body": "RPS and equilibrium points  Is Rock-Paper-Scissors a zero-sum game? Does it have an equilibrium point? Explain.  "
},
{
  "id": "E_RPSplay",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSplay",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "Play RPS.",
  "body": "Play RPS  We want to look at what happens if we repeat Rock-Paper-Scissors. Play the game ten times with an opponent. Record the results (list strategy pairs and payoffs for each player).  "
},
{
  "id": "E_RPSconjstrat",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSconjstrat",
  "type": "Exercise",
  "number": "3.1.8",
  "title": "Conjecture a strategy.",
  "body": "Conjecture a strategy  Describe any strategy you used in .  "
},
{
  "id": "E_RPSreflect",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSreflect",
  "type": "Exercise",
  "number": "3.1.9",
  "title": "Strengths and weaknesses of your strategy.",
  "body": "Strengths and weaknesses of your strategy  Reflect on your chosen strategy. Does it guarantee you a win ? What should it mean to win in a repeated game? What are the strengths and weaknesses of your strategy?  "
},
{
  "id": "E_RPSshare",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSshare",
  "type": "Exercise",
  "number": "3.1.10",
  "title": "Share your strategy.",
  "body": "Share your strategy  Discuss your strategy with someone else in the class (it can be your opponent). After sharing your ideas for a strategy, can you improve your previous strategy?  "
},
{
  "id": "E_RPSpure",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSpure",
  "type": "Exercise",
  "number": "3.1.11",
  "title": "The weakness of a pure strategy.",
  "body": "The weakness of a pure strategy  Explain why it is not a good idea to play a pure strategy; i.e., to play only ROCK, only PAPER, or only SCISSORS.  "
},
{
  "id": "E_RPSuneven",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSuneven",
  "type": "Exercise",
  "number": "3.1.12",
  "title": "An uneven strategy.",
  "body": "An uneven strategy  Does it make sense to play one option more often than another (for example, ROCK more often than PAPER)? Explain.  "
},
{
  "id": "E_RPSstratbest",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSstratbest",
  "type": "Exercise",
  "number": "3.1.13",
  "title": "Frequency of R, P, S.",
  "body": "Frequency of R, P, S  How often should you play each option?  "
},
{
  "id": "E_RPSpattern",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSpattern",
  "type": "Exercise",
  "number": "3.1.14",
  "title": "Playing a pattern.",
  "body": "Playing a pattern  Do you want to play in a predictable pattern or randomly? What are some advantages and disadvantages of a pattern? What are some advantages and disadvantages of a random strategy?  "
},
{
  "id": "E_RPSltpayoff",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSltpayoff",
  "type": "Exercise",
  "number": "3.1.15",
  "title": "Long-term payoff.",
  "body": "Long-term payoff  Using this best strategy, what do you predict the long term payoff will be for Player 1? For Player 2?  "
},
{
  "id": "E_RPSdice",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSdice",
  "type": "Exercise",
  "number": "3.1.16",
  "title": "Testing the Random(1\/3, 1\/3, 1\/3) strategy.",
  "body": "Testing the Random(1\/3, 1\/3, 1\/3) strategy  Let's check our prediction. Using a die, let 1 and 2 represent ROCK, 3 and 4 represent PAPER, and 5 and 6 represent SCISSORS. Play the game 20 times with someone in class where each player rolls to determine the choice of ROCK, PAPER, or SCISSORS. Keep track of the strategy pairs and payoffs. What was the total payoff for each player? (At this point, if you still feel that you have a better strategy, try your strategy against the random one see what happens!)  "
},
{
  "id": "E_RPSdicecompare",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSdicecompare",
  "type": "Exercise",
  "number": "3.1.17",
  "title": "Compare to your prediction.",
  "body": "Compare to your prediction  How did the actual outcome compare to your predicted outcome? What do you expect would happen if you play the game 100 times? (Or more?)  "
},
{
  "id": "E_RPSproboutcomes",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSproboutcomes",
  "type": "Exercise",
  "number": "3.1.18",
  "title": "Probabiliies when both players play the random strategy.",
  "body": "Probabiliies when both players play the random strategy  Assume both players are using the Random(1\/3, 1\/3, 1\/3) strategy. List all the possible outcomes for a single game (recall the outcome is the strategy pair and the payoff, for example [R, P], ). What is the probability that any particular pair of strategies will be played? Are the strategy pairs equally likely?  "
},
{
  "id": "E_RPSexpval",
  "level": "2",
  "url": "S_IntroRepeated.html#E_RPSexpval",
  "type": "Exercise",
  "number": "3.1.19",
  "title": "Expected value.",
  "body": "Expected value  Using the probabilities and payoffs from calculate the expected value of the game for each player.  "
},
{
  "id": "E_smallrepeatstrat",
  "level": "2",
  "url": "S_IntroRepeated.html#E_smallrepeatstrat",
  "type": "Exercise",
  "number": "3.1.20",
  "title": "Strategy for the repeated <span class=\"process-math\">\\(2\\times 2\\)<\/span> game.",
  "body": "Strategy for the repeated game  Now consider the matrix from above:   See if you can determine how often Player 1 should play each row, and how often Player 2 should play each column. Try testing your proposed strategy (you may be able to use a variation on the dice as we saw in ). Write up any conjectured strategies and the results from playing the game with your strategy. Do you think you have come up with the best strategy? Explain.  "
},
{
  "id": "S_MixStratGraph",
  "level": "1",
  "url": "S_MixStratGraph.html",
  "type": "Section",
  "number": "3.2",
  "title": "Mixed Strategies: Graphical Solution",
  "body": " Mixed Strategies: Graphical Solution  graphical solution  solution to two player game graphical  mixed strategy graphical solution  maximin strategy graphical solution  In this section we will learn a method for finding the maximin solution for a repeated game using a graph.  Let's continue to consider the game given in by   In order to make our analysis easier, let's name the row and column strategies as in .   with named strategies.     C  D    A  1  0    B  -1  2     We want to determine how often Player 1 should play A and how often she should play B.  Conjecture a strategy  First it is good to test your instinct. Do you think she should play one of the strategies more often than the other? If so, which strategy should she play the most?   What we are really trying to find is the probability with which Player 1 plays A (or B). Since we know that the probabilities sum to one, if we can find one probability, then we know the other.  Here is one way to do this. Let be the probability that Player 1 plays B. Let be the payoff to Player 1. Since we are trying to find a mixed strategy for Player 1, we will pick a strategy for Player 2 and try to determine the possible payoffs for Player 1.  Let us determine some pairs .    Step 1.  Assume Player 2 plays pure strategy C .    Step 1a.  Find the probability ( ) and payoff ( ) if Player 1 always plays A . If Player 1 plays pure strategy A, then she never plays B. Thus the probability she plays B is 0. Hence, . In the case where Player 1 plays A and Player 2 plays C, what is the payoff to Player 1? This is , so . Thus, for the strategy pair we get for . It is important to note that is not a payoff vector. This is common notation for any ordered pair. With payoff vectors, the ordered pair represents the payoff to each player. Here the ordered pair represents a probability of playing B and the payoff to Player 1.   Step 1b.  Find the probability ( ) and payoff ( ) if Player 1 always plays B . If Player 1 plays pure strategy B, then what is the probability that she plays B? Since she always plays B, . In the case where Player 1 plays B and Player 2 plays C, what is the payoff to Player 1? . Thus, for the strategy pair we get for .   Step 1c.  Now we want to know what Player 1's payoff will be as she varies the probability, , with which she plays B . We can draw a graph where the -axis represents to probability with which she plays B ( ) and the -axis represents the expected payoff ( ). See .  Labeled axes.     Thus, when Player 1 plays only A, she is playing B with probability 0; when Player 1 plays only B, she is playing B with probability 1. It might be easier to remember if you label your graph as in .   Step 1d.  Now we can plot the points we determined in Step 1a and Step 1b. We will connect them with a line representing Player 2's pure strategy C . See .  Player 2's strategy C .        Before moving on, let's make sure we understand what this line represents. Any point on it represents the expected payoff to Player 1 as she varies her strategy, assuming Player 2 only plays C . In this case, we can see that as she plays B more often, her expected payoff goes down.  Now let's do the same thing, assuming Player 2 plays only D.    Step 2.  Assume Player 2 plays pure strategy D .    Step 2a.  Find the probability ( ) and payoff ( ) if Player 1 always plays A . If Player 1 plays pure strategy A , then what is the probability that she plays B? . What is the payoff to Player 1? . Thus, for the strategy pair we get for .   Step 2b.  Find the probability ( ) and payoff ( ) if Player 1 always plays B . If Player 1 plays pure strategy B, then what is the probability that she plays B? . What is the payoff to Player 1? . Thus, for the strategy pair we get for .   Step 2c.  Now, on our same graph from Step 1, we can plot the points we determined in Step 2a and Step 2b. We will connect them with a line representing Player 2's pure strategy D. See .  Player 2's strategy D .     Now we can see that if Player 2 plays only D, then Player 1 does best by playing only B.   So we have this nice graph, but what does it really tell us? Although we drew lines representing each of Player 2's pure strategies, Player 1 doesn't know what Player 2 will do. Suppose Player 1 only played A, while Player 2 plays an unknown mixed strategy. Then the possible payoffs for Player 1 are 1 or 0. The more often Player 2 plays C, the more often Player 1 gets 1. So the expected payoff expected payoff per game for a repeated game varies between 0 and 1. We can see the possible expected values as the red line on the graph in .   of the expected payoffs for Player 1 playing only A .      Since we want to understand mixed strategies for Player 1, what would happen if Player 1 played A half the time and B half the time? In other words, what happens if ? Although we may not easily be able to see the exact values, we can represent the possible expected values on the graph in .   The expected payoffs for Player 1 playing B half the time.      Hopefully, you've begun to see that for each choice of , the top line represents the highest expected value for Player 1; the bottom line represents the lowest expected value for Player 1; the area between the lines represents the possible expected values for Player 1. As we did with non-repeated games, let's look at the worst case scenario for Player 1. In other words, let's assume that Player 2 can figure out Player 1's strategy. Then Player 1 would want to maximize the minimum expected value . Aha! This is just looking for the maximin strategy maximin strategy repeated games !  Now the minimum expected value for each choice of is given by the bottom lines on the graph, shown in red in .   The minimum expected payoffs for Player 1.      It should be easy to see that the maximum of the minimum expected payoffs occurs at the intersection of the two lines.    Step 3.  Find the intersection of the two lines.    Step 3a.  Find the equation for Line C. This is the line passing through the points and . It has slope and -intercept 1. Thus, it has equation . [Although the -axis represents probability and the -axis represents expected payoff , you are probably more comfortable solving equations at least for the moment in and .]   Step 3b.  Find the equation for Line D. This is the line passing through the points and . It has slope and -intercept 0. Thus, it has equation .   Step 3c.  Use substitution to find the point of intersection. Substituting back in to either original equation, say , gives us . Thus, the point of intersection is .   Step 4.  Determine Player 1's maximin mixed strategy maximin mixed strategy . Recalling that the first coordinate is , the probability that Player 1 plays B , we know that Player 1 will play B with probability 1\/4, and thus, play A with probability 3\/4 [ ]. The expected payoff for Player 1 is 1\/2. It is important to check back to your original intuition about the game from . Did it seem as though Player 1 should play A more often than B?   Let's make a few important observations. First, it should be clear from the graph that Player 1 expects a payoff of 1\/2 NO MATTER WHAT PLAYER 2 DOES. Furthermore, since this is a zero-sum game, we know that Player 2's expected payoff is . It is important to note that this graph does not give us any information about an optimal strategy for Player 2. We will see how to find a strategy for Player 2 in the following exercises. Can you think of how you might do this?  We can use the graphical method to find the maximin and minimax mixed strategies for repeated two-person zero-sum games.  Using the same game matrix as above: we will continue to label Player 1's strategies by and , and Player 2's strategies by and . We now want to determine the minimax strategy for Player 2. Keep in mind the payoffs are still the payoffs to Player 1, so Player 2 wants the payoff to be as small as possible.  Sketch the graph  Sketch the graph for Player 1 that we drew above. Be sure to label the endpoints of each line. Also label each line according to which strategy they represent.   Indicate the minimax strategy  Describe the minimax strategy minimax strategy repeated games and show it on the graph. (You do not need to find the actual mixed strategy for Player 2.)   Payoff vectors  Are the payoff vectors for the maximin and minimax strategies the same?   For non-repeated games we have seen that if the maximin value is the same as the minimax value, then the game has a pure strategy equilibrium. The same idea applies to mixed strategy games. If the value of the maximin strategy is the same as the value of the minimax strategy, then the corresponding mixed strategies will be an equilibrium point mixed strategy equilibrium equilibrium mixed strategy . Thus, your answer to should tell you this game has a mixed strategy equilibrium point consisting of the maximin\/ minimax strategy.  We now know that Player 2 wants to play the minimax strategy in response to Player 1's maximin strategy, so we need to find the actual mixed strategy for Player 2 to employ. Since we are minimizing Player 1's maximum expected payoff, we will continue to use the matrix representing Player 1's payoff. We will repeat the process we used for Player 1, except the -axis now represents the probability that Player 2 will play , and the lines will represent Player 1's strategies and . The -axis continues to represent Player 1's payoff.  Draw the axes for Player 2's strategy  First sketch the axes. (Recall, the -axis only goes from 0 to 1.)   Player 1 plays  Assume Player 1 only plays .  If Player 2 only plays , what is the payoff to Player 1? Recall we called this . What is the probability that Player 2 plays ? Recall we called this . On your graph, plot the point ( , ).  If Player 2 plays only , find and . Plot on the graph.  Now sketch the line through your two points. This line represents Player 1's pure strategy and the expected payoff (to Player 1) for Player 2's mixed strategies. Label it .     Player 1 plays  Now assume Player 1 plays only . Repeat the steps in , using instead of , to find the line representing Player 1's pure strategy . (Label it!)   The graph for Player 2  It is important to keep in mind that although the -axis refers to how often Player 2 will play and , the -axis represents the payoff to Player 1 .  Explain why we are looking for the minimax strategy for Player 2.  Show on the graph the maximum payoff that Player 1 can expect for each of Player 2's possible mixed strategies.  Show the point on the graph that represents the minimax strategy.     Equations for the lines  Find the equations of the lines you drew in and .   The point of intersection  Using the equations from , find the point of intersection of the two lines.   Player 2's mixed strategy  How often should Player 2 play ? How often should he play ? What is Player 1's expected payoff? And hence, what is Player 2's expected payoff?   Equilibrium strategies  Explain why each player should play the maximin\/ minimax mixed strategy. In other words, explain why neither player benefits by changing his or her strategy.   Think about playing defensively and assuming the other player is the perfect player.   Now it may have occurred to you that since this is a zero-sum game, we could have just converted our matrix to the payoff matrix for Player 2, and found Player 2's maximin strategy. But it is important to understand the relationship between the maximin and the minimax strategies. So for the sake of practice and a little more insight, find Player 2's maximin strategy by writing the payoff matrix for Player 2 and repeating the process that we did for Player 1. Keep in mind that Player 2 is finding the probability of playing and rather than and .  Finding the maximin using Player 2's payoffs  Convert the payoff matrix above into the payoff matrix for Player 2. Find the maximin strategy for Player 2 using the graphical method. Be sure to include a sketch of the graph (labeled!!), the equations for the lines, the probability that Player 2 will play and , and the expected payoff for Player 2.   Compare the solutions  Compare your answer in to your answer in .   Fairness  Is this game fair? Explain.   Expected payoff  We saw above that the expected payoff for Player 1 was 1\/2. Explain what this means for a repeated game.   Is it actually possible for a player to win 1\/2 in a given game?  Now you are ready to try to analyze some more games!  Practice finding mixed strategies  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).     More practice finding mixed strategies  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).     Although it is worth working through examples by hand in order to understand the algebraic process, in the next section we will see how technology can help us solve systems of equations.  "
},
{
  "id": "T_smallrepeat",
  "level": "2",
  "url": "S_MixStratGraph.html#T_smallrepeat",
  "type": "Table",
  "number": "3.2.1",
  "title": "",
  "body": " with named strategies.     C  D    A  1  0    B  -1  2    "
},
{
  "id": "E_linearconjecture",
  "level": "2",
  "url": "S_MixStratGraph.html#E_linearconjecture",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "Conjecture a strategy.",
  "body": "Conjecture a strategy  First it is good to test your instinct. Do you think she should play one of the strategies more often than the other? If so, which strategy should she play the most?  "
},
{
  "id": "F_MixedStrategyAxes",
  "level": "2",
  "url": "S_MixStratGraph.html#F_MixedStrategyAxes",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Labeled axes.     "
},
{
  "id": "F_MixedStrategyOneLine",
  "level": "2",
  "url": "S_MixStratGraph.html#F_MixedStrategyOneLine",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " Player 2's strategy C .     "
},
{
  "id": "F_Player_2_s_pure_strategy_D",
  "level": "2",
  "url": "S_MixStratGraph.html#F_Player_2_s_pure_strategy_D",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " Player 2's strategy D .     "
},
{
  "id": "F_BoldA",
  "level": "2",
  "url": "S_MixStratGraph.html#F_BoldA",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " of the expected payoffs for Player 1 playing only A .     "
},
{
  "id": "F_BoldHalf",
  "level": "2",
  "url": "S_MixStratGraph.html#F_BoldHalf",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " The expected payoffs for Player 1 playing B half the time.     "
},
{
  "id": "F_BoldMin",
  "level": "2",
  "url": "S_MixStratGraph.html#F_BoldMin",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " The minimum expected payoffs for Player 1.     "
},
{
  "id": "E_sketchgraphagain",
  "level": "2",
  "url": "S_MixStratGraph.html#E_sketchgraphagain",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "Sketch the graph.",
  "body": "Sketch the graph  Sketch the graph for Player 1 that we drew above. Be sure to label the endpoints of each line. Also label each line according to which strategy they represent.  "
},
{
  "id": "E_showminimax",
  "level": "2",
  "url": "S_MixStratGraph.html#E_showminimax",
  "type": "Exercise",
  "number": "3.2.10",
  "title": "Indicate the minimax strategy.",
  "body": "Indicate the minimax strategy  Describe the minimax strategy minimax strategy repeated games and show it on the graph. (You do not need to find the actual mixed strategy for Player 2.)  "
},
{
  "id": "E_payoffssame",
  "level": "2",
  "url": "S_MixStratGraph.html#E_payoffssame",
  "type": "Exercise",
  "number": "3.2.11",
  "title": "Payoff vectors.",
  "body": "Payoff vectors  Are the payoff vectors for the maximin and minimax strategies the same?  "
},
{
  "id": "E_graphStep0",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphStep0",
  "type": "Exercise",
  "number": "3.2.12",
  "title": "Draw the axes for Player 2's strategy.",
  "body": "Draw the axes for Player 2's strategy  First sketch the axes. (Recall, the -axis only goes from 0 to 1.)  "
},
{
  "id": "E_graphP1A",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphP1A",
  "type": "Exercise",
  "number": "3.2.13",
  "title": "Player 1 plays <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": "Player 1 plays  Assume Player 1 only plays .  If Player 2 only plays , what is the payoff to Player 1? Recall we called this . What is the probability that Player 2 plays ? Recall we called this . On your graph, plot the point ( , ).  If Player 2 plays only , find and . Plot on the graph.  Now sketch the line through your two points. This line represents Player 1's pure strategy and the expected payoff (to Player 1) for Player 2's mixed strategies. Label it .    "
},
{
  "id": "E_graphP1B",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphP1B",
  "type": "Exercise",
  "number": "3.2.14",
  "title": "Player 1 plays <span class=\"process-math\">\\(B\\)<\/span>.",
  "body": "Player 1 plays  Now assume Player 1 plays only . Repeat the steps in , using instead of , to find the line representing Player 1's pure strategy . (Label it!)  "
},
{
  "id": "E_graphminimax",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphminimax",
  "type": "Exercise",
  "number": "3.2.15",
  "title": "The graph for Player 2.",
  "body": "The graph for Player 2  It is important to keep in mind that although the -axis refers to how often Player 2 will play and , the -axis represents the payoff to Player 1 .  Explain why we are looking for the minimax strategy for Player 2.  Show on the graph the maximum payoff that Player 1 can expect for each of Player 2's possible mixed strategies.  Show the point on the graph that represents the minimax strategy.    "
},
{
  "id": "E_graphFindEquations",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphFindEquations",
  "type": "Exercise",
  "number": "3.2.16",
  "title": "Equations for the lines.",
  "body": "Equations for the lines  Find the equations of the lines you drew in and .  "
},
{
  "id": "E_graphFindIntersection",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphFindIntersection",
  "type": "Exercise",
  "number": "3.2.17",
  "title": "The point of intersection.",
  "body": "The point of intersection  Using the equations from , find the point of intersection of the two lines.  "
},
{
  "id": "E_graphSolution",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphSolution",
  "type": "Exercise",
  "number": "3.2.18",
  "title": "Player 2's mixed strategy.",
  "body": "Player 2's mixed strategy  How often should Player 2 play ? How often should he play ? What is Player 1's expected payoff? And hence, what is Player 2's expected payoff?  "
},
{
  "id": "E_whyequil",
  "level": "2",
  "url": "S_MixStratGraph.html#E_whyequil",
  "type": "Exercise",
  "number": "3.2.19",
  "title": "Equilibrium strategies.",
  "body": "Equilibrium strategies  Explain why each player should play the maximin\/ minimax mixed strategy. In other words, explain why neither player benefits by changing his or her strategy.   Think about playing defensively and assuming the other player is the perfect player.  "
},
{
  "id": "E_graphconvert",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphconvert",
  "type": "Exercise",
  "number": "3.2.20",
  "title": "Finding the maximin using Player 2's payoffs.",
  "body": "Finding the maximin using Player 2's payoffs  Convert the payoff matrix above into the payoff matrix for Player 2. Find the maximin strategy for Player 2 using the graphical method. Be sure to include a sketch of the graph (labeled!!), the equations for the lines, the probability that Player 2 will play and , and the expected payoff for Player 2.  "
},
{
  "id": "E_graphcompareapproaches",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphcompareapproaches",
  "type": "Exercise",
  "number": "3.2.21",
  "title": "Compare the solutions.",
  "body": "Compare the solutions  Compare your answer in to your answer in .  "
},
{
  "id": "graphfair",
  "level": "2",
  "url": "S_MixStratGraph.html#graphfair",
  "type": "Exercise",
  "number": "3.2.22",
  "title": "Fairness.",
  "body": "Fairness  Is this game fair? Explain.  "
},
{
  "id": "E_graphexplainEV",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graphexplainEV",
  "type": "Exercise",
  "number": "3.2.23",
  "title": "Expected payoff.",
  "body": "Expected payoff  We saw above that the expected payoff for Player 1 was 1\/2. Explain what this means for a repeated game.   Is it actually possible for a player to win 1\/2 in a given game? "
},
{
  "id": "E_graph2practice",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graph2practice",
  "type": "Exercise",
  "number": "3.2.24",
  "title": "Practice finding mixed strategies.",
  "body": "Practice finding mixed strategies  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).    "
},
{
  "id": "E_graph3practice",
  "level": "2",
  "url": "S_MixStratGraph.html#E_graph3practice",
  "type": "Exercise",
  "number": "3.2.25",
  "title": "More practice finding mixed strategies.",
  "body": "More practice finding mixed strategies  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Sketch (and label!) the appropriate graph for this game.  Use you graph to determine if there is a mixed strategy equilibrium point. If there is, how often should Player 1 play each strategy? What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).    "
},
{
  "id": "S_solvingeq",
  "level": "1",
  "url": "S_solvingeq.html",
  "type": "Section",
  "number": "3.3",
  "title": "Using Sage to Graph Lines and Solve Equations",
  "body": " Using Sage to Graph Lines and Solve Equations Sage  In this section we will use technology to graph lines and solve for the intersection point. In particular, we will use an open online resource called Sage Sage .  Let's continue to consider the game given in by  Game from .          1  0     -1  2      Recall, our goal is to determine how often Player 1 should play A and how often she should play B.  We will follow the same steps as in . Let be the probability that Player 1 plays B. Let be the payoff to Player 1. Since we are trying to find a mixed strategy for Player 1, we will pick a strategy for Player 2 and try to determine the possible payoffs for Player 1.  Let us determine some pairs .    Step 1.  Assume Player 2 plays pure strategy .    Step 1a.  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 never plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 1b.  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 always plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 1c.  Now we want to know what Player 1's payoff will be as she varies the probability, , with which she plays . We can draw a graph where the -axis represents to probability with which she plays B ( ) and the -axis represents the expected payoff ( ). Thus, when Player 1 plays only , she is playing with probability 0; when Player 1 plays only B, she is playing B with probability 1. It might be easier to remember if you label your graph as in .   Step 1d.  Now we can use Sage to plot the points we determined in Step 1a and Step 1b and the line between them. This line represents Player 2's pure strategy . See . Click on the Evaluate (Sage) button to plot the line between the points and .    Before moving on, let's again, make sure we understand what this line represents. Any point on it represents the expected payoff to Player 1 as she varies her strategy, assuming Player 2 only plays . In this case, we can see that as she plays more often, her expected payoff goes down. You can now use this Sage cell to plot any line for Player 2's pure strategy . Just edit the values for the points and . Go ahead and try it! (Don't worry the original values will reset when you refresh the page.)  Now let's do the same thing, assuming Player 2 plays only .    Step 2.  Assume Player 2 plays pure strategy .    Step 2a.  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 never plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 2b.  If Player 1 always plays , then we are considering the strategy pair . Since Player 1 always plays , . The payoff to Player 1 for is . Thus, for the strategy pair we get .   Step 2c.  Now, on our same graph from Step 1, we can plot the points we determined in Step 2a and Step 2b. We will connect them with a line representing Player 2's pure strategy . See .   Now we can see that if Player 2 plays only , then Player 1 does best by playing only . Again, you can use this Sage cell to plot both Player 2's pure strategies. Points and are for strategy , while points and are for strategy .   As we saw in , for each choice of , the top line represents the highest expected value for Player 1; the bottom line represents the lowest expected value for Player 1; the area between the lines represents the possible expected values for Player 1. Thus, Player 1 wants to maximize the minimum expected value, which means she wants to find the maximin strategy maximin strategy, repeated games . And, as we saw in , the maximin strategy occurs at the intersection of the two lines.    Step 3.  Find the intersection of the two lines.    Step 3a.  Find the equation for Line C. This is the line passing through the points and . It has slope and -intercept 1. Thus, it has equation . (Recall the -axis represents probability and the -axis represents expected payoff .)   Step 3b.  Find the equation for Line D. This is the line passing through the points and . It has slope and -intercept 0. Thus, it has equation .   Step 3c.  Now we can use technology to help us solve the equations.   The solution for Player 1 is . Where is the probability Player 1 plays B, and is the expected payoff to Player 1.  We can use this Sage cell to solve for and for any game by editing the equations .    Step 4.  Determine Player 1's maximin mixed strategy maximin mixed strategy . Recalling that is the probability that Player 1 plays , we know that Player 1 will play with probability 1\/4, and thus, play A with probability 3\/4. The expected payoff for Player 1, , is 1\/2. It is important to check the algebraic solution with where the intersection point appears on the graph. Although we are using technology to help us graph and solve for the intersection point, we need to be able to catch any errors we make entering the information into Sage.    We have seen that we can use the same matrix with Player 1's payoffs to find the strategy for Player 2. Using the same game matrix as above: and continuing to label Player 1's strategies by and , and Player 2's strategies by and , we can graph lines for Player 1's pure strategies and . We now let the --axis represent the probability that Player 2 plays . In the Sage applet below, for and enter the coordinates of two points that determine the line for when Player 1 plays , then the two points for and that determine the line for when Player 1 plays . We will then have Sage graph the lines. You can enter new values for if you would like to draw the graph for a different matrix.    Now determine and enter the equations of the two lines and have Sage solve for the intersection point.    You can now use these last two Sage cells to solve any 2 2 game with a mixed strategy equilibrium. You can also take some time to experiment with what happens if the game has a pure strategy equilibrium.  Now use the Sage cells to help you analyze some more games!  Use Sage to find a mixed strategy equilibrium  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).     More practice with Sage  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).     "
},
{
  "id": "table-26",
  "level": "2",
  "url": "S_solvingeq.html#table-26",
  "type": "Table",
  "number": "3.3.1",
  "title": "",
  "body": " Game from .          1  0     -1  2    "
},
{
  "id": "E_graph2practiceSage",
  "level": "2",
  "url": "S_solvingeq.html#E_graph2practiceSage",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "Use Sage to find a mixed strategy equilibrium.",
  "body": "Use Sage to find a mixed strategy equilibrium  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).    "
},
{
  "id": "E_graph3practiceSage",
  "level": "2",
  "url": "S_solvingeq.html#E_graph3practiceSage",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "More practice with Sage.",
  "body": "More practice with Sage  Consider the zero-sum game   Does this game have a pure strategy equilibrium?  Just by looking at the matrix, do you think this game will be fair? (Would you rather be Player 1 or Player 2?)  Use Sage to draw the appropriate graph for this game. Which pure strategy does the blue line represent? Which pure strategy does the red line represent?  Use your graph to determine if there is a mixed strategy equilibrium point. If there is, use Sage to determine how often Player 1 should play each strategy. What is the expected payoff to each player?  Is this game fair? Explain. Compare your answer to (b).    "
},
{
  "id": "S_MixStratEV",
  "level": "1",
  "url": "S_MixStratEV.html",
  "type": "Section",
  "number": "3.4",
  "title": "Mixed Strategies: Expected Value Solution",
  "body": " Mixed Strategies: Expected Value Solution   mixed strategies, expected value solution expected value   In this section, we will use the idea of expected value to find the equilibrium mixed strategies for repeated two-person zero-sum games.  One of the significant drawbacks of the graphical solution from the previous sections is that it can only solve 2 X 2 matrix games. If each player has 3 options, we would need to graph in three dimensions. Technically this is possible, but rather complicated. If each player has more than 3 options, since we can't graph in four or more dimensions, we are at a complete loss. So we need to think about an alternate way to solve for the mixed strategies. Although we will begin with 2 X 2 games, this method will easily generalize to larger games.   Matching Pennies Game Matching Pennies    Consider the game in which each player can choose HEADS (H) or TAILS (T); if the two players match, Player 1 wins; if the two players differ, Player 2 wins. What strategy should each player play?    Payoff matrix  Determine the payoff matrix for the Matching Pennies game.   Pure strategy equilibria  Explain why the Matching Pennies game has no pure strategy equilibrium point.   Conjecture a mixed strategy  Since we know that there is no pure strategy equilibrium point, we need to look for a mixed strategy equilibrium point. Just by looking at the payoff matrix for Matching Pennies, what do you think an ideal strategy for each player would be? Explain your choice.   Expected value of conjecture  Suppose both players play your ideal strategy in the Matching Pennies game, what should the expected value of the game be?   We could use our previous graphical method to determine the expected value of the game (you might quickly try this just to verify your prediction). However, as we have noted, a major drawback of the graphical solution is that if our players have 3 (or more) options, then we would need to graph an equation in 3 (or more!) variables; which, I hope you agree, we don't want to do. Although we will continue to focus on games, we will develop a new method which can more easily be used to solve to larger games.  We will need a little notation. Let Also, we will let be the expected value for Player 1 playing pure strategy H against a given strategy for Player 2. Similarly, will be Player 2's expected value for playing pure strategy H.  The strategy for Player 2  Suppose Player 2 plays H 60% of the time and T 40% of the time.  What are and ?  What do you think Player 1 should do? Does this differ from your ideal mixed strategy in ? Explain.  We can use expected value to compute what Player 1 should do in response to Player 2's 60\/40 strategy. First, consider a pure strategy for Player 1. Compute the expected value for Player 1 if she only plays H while Player 2 plays H with probability .6 and T with probability .4. This expected value is , above.  Similarly, compute the expected value for Player 1 if she plays only T (call it ).  Which pure strategy has a higher expected value for Player 1? If Player 1 plays this pure strategy, will she do better than your predicted value of the game?     The strategy is not ideal for Player 2  Hopefully, you concluded that in a pure strategy is good for Player 1. Explain why this means the 60\/40 strategy is bad for Player 2.   When to play H  For any particular mixed (or pure) strategy of Player 2, we could find and . Explain why if , Player 1 should always play H.   When to play T  Similarly, explain why if , Player 1 should always play T.   Player 2 is unhappy when Player 1's expected values are unequal  Explain why the situations in and are bad for Player 2.   Equal expected values are better  Use your answers from , , and to explain why the situation in which is the best for Player 2.   From we now know that Player 2 wants , we can use a little algebra to compute the best defensive strategy for Player 2. Remember, we want to assume that Player 1 will always be able to chose the strategy that will be best for her, and thus Player 2 wants to protect himself. Let's find the probabilities with which Player 2 should play H and T.  Equations for Player 1's expected values  Let and be the probabilities that Player 2 plays H and T respectively. Find equations for and in terms of and for the game of Matching Pennies. Since we want , set your two equations equal to each other. This gives you one equation in terms of and .   The sum equation  Explain why we must also have .   So in general, to solve for Player 2's strategy, we want to write an equation for each of Player 1's pure strategy expected values in terms of Player 2's probabilities. For example, and in terms of variables and . We then set the expected values equal to each other. We now have an equation just in terms of Player 2's probabilities.  In order to solve for the probabilities, we also need to use the fact that Player 2's probabilities sum to 1. For example, . For a game, you now have 2 equations with 2 unknowns ( and ). Use an algebraic method such as substitution or elimination to solve the system of equations.  Solve for Player 2's probabilities  Using the equations from and , solve for and . You now have the equilibrium mixed strategy for Player 2. Does this match the mixed strategy you determined in ?   Now can you use a similar process to find Player 1's strategy? Whose expected values should you use? Whose probabliities?  Find Player 1's probabilities  Set up and solve the analogous equations from and for Player 1. Does this match the mixed strategy from ?  We should have an equation for and one for . Since we are looking for the probabilities of each of Player 1's options, the equations should involve and .  We now have a new method for finding the best mixed strategies for Players 1 and 2, assuming that each player is playing defensively against an ideal player. But how can we find the value of the game? For Player 2, we assumed . In other words, we found the situation in which Player 1's expected value is the same no matter which pure strategy she plays. Thus, Player 1 is indifferent to which pure strategy she plays. If she were not indifferent, then she would play the strategy with a higher expected value. But, as we saw, this would be bad for Player 2. So Player 1 can assume that Player 2 will play the equilibrium mixed strategy. Thus, as long as Player 1 plays a mixed strategy, it doesn't matter whether at any given time, she plays H or T (this is the idea that she is indifferent to them). Hence, the expected value of the game for Player 1 is the same as , which is the same as . Similarly, we find that the expected value of the game for Player 2 is (or ). This is a pretty complicated idea. You may need to think about it for a while. In the meantime, use the probabilities you found for each player and the equations for and to find the value of the game for each player.  Find Player 1's expected value of the game  Use the probabilities you calculated in to find , and hence the expected value of the game for Player 1. How does this compare to your prediction for the value of the game that you gave in ?   Find Player 2's expected value of the game  Use the probabilities you calculated in to find , and hence the expected value of the game for Player 2. How does this compare to your prediction for the value of the game that you gave in ?   Keep practicing with the expected value method on some other games!  Solve a repeated game using expected values  Apply this method of using expected value to (which we solved using the graphical method in the previous section) to find the equilibrium mixed strategies for each player and the value of the game for each player:    Expected value solution for Rock-Paper-Scissors  As we noted in this section, this method can be used to solve bigger games. We just have more equations. Use the expected value method to find the equilibrium mixed strategy for Rock-Paper-Scissors Rock-Paper-Scissors for Player 2.  You will need to set and ; solve for ; etc. It should be very similar to what you did for Matching Pennies, but there will be three equations and three unknowns.  If you found this last exercise to be algebraically arduous, don't worry, we will eventually use technology to help us solve problems with several variables.  "
},
{
  "id": "G_matching_pennies",
  "level": "2",
  "url": "S_MixStratEV.html#G_matching_pennies",
  "type": "Example",
  "number": "3.4.1",
  "title": "Matching Pennies Game.",
  "body": " Matching Pennies Game Matching Pennies    Consider the game in which each player can choose HEADS (H) or TAILS (T); if the two players match, Player 1 wins; if the two players differ, Player 2 wins. What strategy should each player play?   "
},
{
  "id": "E_mpmatrix",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpmatrix",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "Payoff matrix.",
  "body": "Payoff matrix  Determine the payoff matrix for the Matching Pennies game.  "
},
{
  "id": "E_mpnoequil",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpnoequil",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "Pure strategy equilibria.",
  "body": "Pure strategy equilibria  Explain why the Matching Pennies game has no pure strategy equilibrium point.  "
},
{
  "id": "E_mpguess",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpguess",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "Conjecture a mixed strategy.",
  "body": "Conjecture a mixed strategy  Since we know that there is no pure strategy equilibrium point, we need to look for a mixed strategy equilibrium point. Just by looking at the payoff matrix for Matching Pennies, what do you think an ideal strategy for each player would be? Explain your choice.  "
},
{
  "id": "E_mpguessev",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpguessev",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "Expected value of conjecture.",
  "body": "Expected value of conjecture  Suppose both players play your ideal strategy in the Matching Pennies game, what should the expected value of the game be?  "
},
{
  "id": "E_mpP2_60_40",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpP2_60_40",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "The <span class=\"process-math\">\\((60, 40)\\)<\/span> strategy for Player 2.",
  "body": "The strategy for Player 2  Suppose Player 2 plays H 60% of the time and T 40% of the time.  What are and ?  What do you think Player 1 should do? Does this differ from your ideal mixed strategy in ? Explain.  We can use expected value to compute what Player 1 should do in response to Player 2's 60\/40 strategy. First, consider a pure strategy for Player 1. Compute the expected value for Player 1 if she only plays H while Player 2 plays H with probability .6 and T with probability .4. This expected value is , above.  Similarly, compute the expected value for Player 1 if she plays only T (call it ).  Which pure strategy has a higher expected value for Player 1? If Player 1 plays this pure strategy, will she do better than your predicted value of the game?    "
},
{
  "id": "E_mp60_40badP2",
  "level": "2",
  "url": "S_MixStratEV.html#E_mp60_40badP2",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "The <span class=\"process-math\">\\((60, 40)\\)<\/span> strategy is not ideal for Player 2.",
  "body": "The strategy is not ideal for Player 2  Hopefully, you concluded that in a pure strategy is good for Player 1. Explain why this means the 60\/40 strategy is bad for Player 2.  "
},
{
  "id": "E_mpPlayH",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpPlayH",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "When to play H.",
  "body": "When to play H  For any particular mixed (or pure) strategy of Player 2, we could find and . Explain why if , Player 1 should always play H.  "
},
{
  "id": "E_mpPlayT",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpPlayT",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "When to play T.",
  "body": "When to play T  Similarly, explain why if , Player 1 should always play T.  "
},
{
  "id": "E_mpuneqbad",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpuneqbad",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "Player 2 is unhappy when Player 1's expected values are unequal.",
  "body": "Player 2 is unhappy when Player 1's expected values are unequal  Explain why the situations in and are bad for Player 2.  "
},
{
  "id": "E_eqgood",
  "level": "2",
  "url": "S_MixStratEV.html#E_eqgood",
  "type": "Exercise",
  "number": "3.4.11",
  "title": "Equal expected values are better.",
  "body": "Equal expected values are better  Use your answers from , , and to explain why the situation in which is the best for Player 2.  "
},
{
  "id": "E_mpequations",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpequations",
  "type": "Exercise",
  "number": "3.4.12",
  "title": "Equations for Player 1's expected values.",
  "body": "Equations for Player 1's expected values  Let and be the probabilities that Player 2 plays H and T respectively. Find equations for and in terms of and for the game of Matching Pennies. Since we want , set your two equations equal to each other. This gives you one equation in terms of and .  "
},
{
  "id": "E_explainprobeq",
  "level": "2",
  "url": "S_MixStratEV.html#E_explainprobeq",
  "type": "Exercise",
  "number": "3.4.13",
  "title": "The sum equation.",
  "body": "The sum equation  Explain why we must also have .  "
},
{
  "id": "E_mpsolve",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpsolve",
  "type": "Exercise",
  "number": "3.4.14",
  "title": "Solve for Player 2's probabilities.",
  "body": "Solve for Player 2's probabilities  Using the equations from and , solve for and . You now have the equilibrium mixed strategy for Player 2. Does this match the mixed strategy you determined in ?  "
},
{
  "id": "E_mpP1sol",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpP1sol",
  "type": "Exercise",
  "number": "3.4.15",
  "title": "Find Player 1's probabilities.",
  "body": "Find Player 1's probabilities  Set up and solve the analogous equations from and for Player 1. Does this match the mixed strategy from ?  We should have an equation for and one for . Since we are looking for the probabilities of each of Player 1's options, the equations should involve and . "
},
{
  "id": "E_mpEVP1",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpEVP1",
  "type": "Exercise",
  "number": "3.4.16",
  "title": "Find Player 1's expected value of the game.",
  "body": "Find Player 1's expected value of the game  Use the probabilities you calculated in to find , and hence the expected value of the game for Player 1. How does this compare to your prediction for the value of the game that you gave in ?  "
},
{
  "id": "E_mpEVP2",
  "level": "2",
  "url": "S_MixStratEV.html#E_mpEVP2",
  "type": "Exercise",
  "number": "3.4.17",
  "title": "Find Player 2's expected value of the game.",
  "body": "Find Player 2's expected value of the game  Use the probabilities you calculated in to find , and hence the expected value of the game for Player 2. How does this compare to your prediction for the value of the game that you gave in ?  "
},
{
  "id": "E_smallrepeatEV",
  "level": "2",
  "url": "S_MixStratEV.html#E_smallrepeatEV",
  "type": "Exercise",
  "number": "3.4.18",
  "title": "Solve a <span class=\"process-math\">\\(2\\times 2\\)<\/span> repeated game using expected values.",
  "body": "Solve a repeated game using expected values  Apply this method of using expected value to (which we solved using the graphical method in the previous section) to find the equilibrium mixed strategies for each player and the value of the game for each player:   "
},
{
  "id": "E_RPSEVsol",
  "level": "2",
  "url": "S_MixStratEV.html#E_RPSEVsol",
  "type": "Exercise",
  "number": "3.4.19",
  "title": "Expected value solution for Rock-Paper-Scissors.",
  "body": "Expected value solution for Rock-Paper-Scissors  As we noted in this section, this method can be used to solve bigger games. We just have more equations. Use the expected value method to find the equilibrium mixed strategy for Rock-Paper-Scissors Rock-Paper-Scissors for Player 2.  You will need to set and ; solve for ; etc. It should be very similar to what you did for Matching Pennies, but there will be three equations and three unknowns. "
},
{
  "id": "S_LiarsPoker",
  "level": "1",
  "url": "S_LiarsPoker.html",
  "type": "Section",
  "number": "3.5",
  "title": "Liar's Poker",
  "body": " Liar's Poker  In this section, we will continue to explore the ideas of a mixed strategy equilibrium. We have seen several examples of finding an equilibrium. We began with games which had a pure strategy equilibrium and then moved to games with mixed strategy equilibrium. We saw two different methods for finding an equilibrium. The first employed graphs in order to understand and find the maximin and minimax strategies, and hence the equilibrium mixed strategy. The second method employed the ideas of expected value to find the equilibrium strategy. We will continue to solidify these ideas with another game, a simplified variation of poker.   Liar's Poker Liar's Poker   We begin with a deck of cards which has 50% aces (A) and 50% kings (K). Aces rank higher than kings. Player 1 is dealt one card, face down. Player 1 can look at the card, but does not show the card to Player 2. Player 1 then says ace or king depending on what his card is. Player 1 can either tell the truth and say what the card is (T), or he can bluff and say that he has a higher ranking card (B). Note that if Player 1 has an ace, he must tell the truth since there are no higher ranking cards. However, if he is dealt a king, he can bluff, by saying he has an ace. If Player 1 says king the game ends and both players break even. If Player 1 says ace then Player 2 can either call (C) or fold (F). If Player 2 folds, then Player 1 wins $0.50. If Player 2 calls and Player 1 does not have an ace, then Player 2 wins $1. If Player 2 calls and Player 1 does have an ace, then Player 1 wins $1.    Play Liar's Poker  Choose an opponent and play Liar's Poker several times. Be sure to play the game as Player 1 and as Player 2. This is important for understanding the game. Keep track of the outcomes.   Conjecture a strategy  Just from playing Liar's Poker several times, can you suggest a strategy for Player 1? What about for Player 2? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.   Try to find the payoff matrix  In order to formally analyze Liar's Poker, we should find the payoff matrix. Do your best to find the payoff matrix. In a single hand of Liar's Poker, what are the possible strategies for Player 1? What are the possible strategies for Player 2? Determine any payoffs that you can.   Finding the payoff matrix in is probably more challenging than it appears. Eventually we want to employ the same method for finding the payoff matrix that we used in One-Card Stud Poker from in Chapter 2, but first we need to understand each player's strategies, and the resulting payoffs. We begin with the fact that Player 1 can be dealt an ace or a king.  Player 1 has an Ace  Assume Player 1 is dealt an ace. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?   Player 1 has a King  Assume Player 1 is dealt a king. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?   Since Player 1 must say ace when dealt an ace, he only has a choice of strategy when dealt a king. So we can define his strategy independent of the deal. One strategy is to say ace when dealt an ace and say ace when dealt a king; call this the bluffing strategy (B). The other strategy is to say ace when dealt an ace and say king when dealt a king; call this the truth strategy (T). Recall that the only time Player 2 has a choice is when Player 1 says ace. In this case Player 2 can call (C) or fold (F). Since we need to determine the payoff matrix, we first need to determine the payoffs for pure strategies. This is similar to what we did for the One-Card Stud game.  Expected value of [B, C]  Consider Player 1's pure strategy of always bluffing when dealt a king (B) and Player 2's pure strategy of always calling (C). Determine the expected value for Player 1. What is Player 2's expected value?  You need to consider each possible deal.  Expected value of [B, F]  Similarly, determine the expected value for Player 1 for the pure strategy pair [B, F]. What is Player 2's expected value?   Expected value of [T, C]  Determine the expected value for Player 1 for the pure strategy pair [T, C]. What is Player 2's expected value?   Expected value of [T, F]  Determine the expected value for Player 1 for the pure strategy pair [T, F]. What is Player 2's expected value?   Payoff matrix for Liar's Poker  Using the expected values you calculated in , , , and , set up the payoff matrix for Liar's Poker.   Once you have determined the payoff matrix for Liar's Poker, you can use either the graphical method or expected value method to solve the game. But before using either of these methods always check for a pure strategy equilibrium!  Pure strategy equilibrium  Using the payoff matrix you found in , does Liar's Poker have a pure strategy equilibrium? Explain.   Mixed strategy equilibrium  Use any method you have learned to find a mixed strategy equilibrium for Liar's Poker. Give the mixed strategy for Player 1 and the mixed strategy for Player 2.   Compare strategies  Compare your solution from to your conjectured strategy from .   Expected value of the game  What is the expected value of the game for each player? How much would Player 1 expect to win if she played 15 games using the equilibrium mixed strategy?   Fairness  Is this game fair? Explain. Again, compare your answer to your conjecture in .   Congratualtions! You can now set up matrices for simple games of chance and solve for a mixed strategy equilibrium. Before solving a more complicated game, let's get the help of technology for solving larger matrix games.  "
},
{
  "id": "liarspoker",
  "level": "2",
  "url": "S_LiarsPoker.html#liarspoker",
  "type": "Example",
  "number": "3.5.1",
  "title": "Liar's Poker.",
  "body": " Liar's Poker Liar's Poker   We begin with a deck of cards which has 50% aces (A) and 50% kings (K). Aces rank higher than kings. Player 1 is dealt one card, face down. Player 1 can look at the card, but does not show the card to Player 2. Player 1 then says ace or king depending on what his card is. Player 1 can either tell the truth and say what the card is (T), or he can bluff and say that he has a higher ranking card (B). Note that if Player 1 has an ace, he must tell the truth since there are no higher ranking cards. However, if he is dealt a king, he can bluff, by saying he has an ace. If Player 1 says king the game ends and both players break even. If Player 1 says ace then Player 2 can either call (C) or fold (F). If Player 2 folds, then Player 1 wins $0.50. If Player 2 calls and Player 1 does not have an ace, then Player 2 wins $1. If Player 2 calls and Player 1 does have an ace, then Player 1 wins $1.   "
},
{
  "id": "E_PlayLP",
  "level": "2",
  "url": "S_LiarsPoker.html#E_PlayLP",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "Play Liar's Poker.",
  "body": "Play Liar's Poker  Choose an opponent and play Liar's Poker several times. Be sure to play the game as Player 1 and as Player 2. This is important for understanding the game. Keep track of the outcomes.  "
},
{
  "id": "E_LPguessstrat",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPguessstrat",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "Conjecture a strategy.",
  "body": "Conjecture a strategy  Just from playing Liar's Poker several times, can you suggest a strategy for Player 1? What about for Player 2? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.  "
},
{
  "id": "E_LPguessmatrix",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPguessmatrix",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "Try to find the payoff matrix.",
  "body": "Try to find the payoff matrix  In order to formally analyze Liar's Poker, we should find the payoff matrix. Do your best to find the payoff matrix. In a single hand of Liar's Poker, what are the possible strategies for Player 1? What are the possible strategies for Player 2? Determine any payoffs that you can.  "
},
{
  "id": "E_LPP1Ace",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPP1Ace",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "Player 1 has an Ace.",
  "body": "Player 1 has an Ace  Assume Player 1 is dealt an ace. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?  "
},
{
  "id": "E_LPP1King",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPP1King",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "Player 1 has a King.",
  "body": "Player 1 has a King  Assume Player 1 is dealt a king. What can Player 1 do? What can Player 2 do? What is the payoff for each situation?  "
},
{
  "id": "p-540",
  "level": "2",
  "url": "S_LiarsPoker.html#p-540",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bluffing strategy truth strategy "
},
{
  "id": "E_LPBC",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPBC",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "Expected value of [B, C].",
  "body": "Expected value of [B, C]  Consider Player 1's pure strategy of always bluffing when dealt a king (B) and Player 2's pure strategy of always calling (C). Determine the expected value for Player 1. What is Player 2's expected value?  You need to consider each possible deal. "
},
{
  "id": "E_LPBF",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPBF",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "Expected value of [B, F].",
  "body": "Expected value of [B, F]  Similarly, determine the expected value for Player 1 for the pure strategy pair [B, F]. What is Player 2's expected value?  "
},
{
  "id": "E_LPTC",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPTC",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "Expected value of [T, C].",
  "body": "Expected value of [T, C]  Determine the expected value for Player 1 for the pure strategy pair [T, C]. What is Player 2's expected value?  "
},
{
  "id": "E_LPTF",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPTF",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "Expected value of [T, F].",
  "body": "Expected value of [T, F]  Determine the expected value for Player 1 for the pure strategy pair [T, F]. What is Player 2's expected value?  "
},
{
  "id": "E_LPmatrix",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPmatrix",
  "type": "Exercise",
  "number": "3.5.11",
  "title": "Payoff matrix for Liar's Poker.",
  "body": "Payoff matrix for Liar's Poker  Using the expected values you calculated in , , , and , set up the payoff matrix for Liar's Poker.  "
},
{
  "id": "E_LPpureequil",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPpureequil",
  "type": "Exercise",
  "number": "3.5.12",
  "title": "Pure strategy equilibrium.",
  "body": "Pure strategy equilibrium  Using the payoff matrix you found in , does Liar's Poker have a pure strategy equilibrium? Explain.  "
},
{
  "id": "E_LPmixedequil",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPmixedequil",
  "type": "Exercise",
  "number": "3.5.13",
  "title": "Mixed strategy equilibrium.",
  "body": "Mixed strategy equilibrium  Use any method you have learned to find a mixed strategy equilibrium for Liar's Poker. Give the mixed strategy for Player 1 and the mixed strategy for Player 2.  "
},
{
  "id": "E_LPcompare",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPcompare",
  "type": "Exercise",
  "number": "3.5.14",
  "title": "Compare strategies.",
  "body": "Compare strategies  Compare your solution from to your conjectured strategy from .  "
},
{
  "id": "E_LPexpectedvalue",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPexpectedvalue",
  "type": "Exercise",
  "number": "3.5.15",
  "title": "Expected value of the game.",
  "body": "Expected value of the game  What is the expected value of the game for each player? How much would Player 1 expect to win if she played 15 games using the equilibrium mixed strategy?  "
},
{
  "id": "E_LPfair",
  "level": "2",
  "url": "S_LiarsPoker.html#E_LPfair",
  "type": "Exercise",
  "number": "3.5.16",
  "title": "Fairness.",
  "body": "Fairness  Is this game fair? Explain. Again, compare your answer to your conjecture in .  "
},
{
  "id": "S_AugMatrices",
  "level": "1",
  "url": "S_AugMatrices.html",
  "type": "Section",
  "number": "3.6",
  "title": "Augmented Matrices",
  "body": " Augmented Matrices   augmented matrix   In this section, we will see how to use matrices to solve systems of equations systems of equations . In both the graphical method and the expected value method, you have had to solve a system of equations. In the graphical method you had systems consisting of two lines such as .   Two Equations   An example of a system of two lines:     In the expected value method we had systems of three equations such as .   Three Equations   An example of a system of three equations where the variables are :     In , even after setting so that there were only 2 variables, the algebra began to get cumbersome. What if we wanted to solve a much larger game, such as a 5 X 5 game?  We've used matrices to represent our games, but now we want to use them as a mathematical tool to help us solve systems of equations. In order to use matrices to solve our systems of equations, we want to write all our equations in the same form: we will have all the variable terms on the left of the equals sign and all constants on the right.  Thus, in we can write the system as   In fact, we can simplify the first equation by multiplying both sides by 5:   We can use the coefficients and constants to create a matrix:   In this matrix you have a column for the coefficients of each variable. So the coefficients of are in the first column, the coefficients of are in the second. The constant terms are always in the last column. Each row corresponds to one equation. This matrix is called an augmented matrix augmented matrix . It is really just a matrix, but we call it augmented if we include information from both sides of the equation (the coefficients and the constants).  The algebraic method for solving the system of equations (finding the and values that satisfy both equations) is called row reduction . It is based on the elimination method that you may have seen in a precalculus or college algebra course. We won't go through the algebra here, as we really don't need it. Since our goal is to be able to easily solve larger systems of equations, we will rely on technology to do the algebra.  Computer algebra systems such as Sage , Mathematica , and Maple , as well as graphing calculators, can easily do the row reduction for us.  On a graphing calculator, use the matrix function to enter the matrix. Then use the rref function (this stands for reduced row echelon form ). The result will be the following matrix:   We can solve this even more directly using Sage .   Recall that the first column is for and the second is for . Each row represents an equation. So translating each row back to equations, we have the following system of equations: or   By plugging these values back into the original equations, you can verify that this is in fact the solution.  Since the technology does all the algebra for us, our job is to translate the equations into an appropriate matrix and then translate the final matrix back into the solution to the system of equations. Remember, when using a matrix to solve a game, the matrix is only a tool, it is not the solution to the game.  Now, let's try the equations for the expected value method using . As presented, how many variables does the system have?   It has 4: and . But when we solved these equations, we set the expected values equal. This gives us the two equations   Now if we put these into the form with all variables on the left and constants on the right, we get   Putting these equations into an augmented matrix, gives us where the first column corresponds to and the second column corresponds to .   Using row reduction, we get   Thus, recalling Column 1 is for and Column 2 is for , our solution is , and .  Here are some more systems of equations to practice solving using augmented matrices. If you want to use the above Sage cells just edit the values for each row in the cell.  Solve a system of 2 equations  Solve the system of equations.      Solve another system of 2 equations  Solve the system of equations.      For larger matrices, you can edit the Sage cell by adding additional terms in each row, and adding more rows. For example, you can replace with .  Solve a system of 3 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.     Solve another system of 3 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.     Even more practice with 3 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.     Now, a sytem with 5 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.     Now we are ready to apply everything we have learned about solving repeated zero-sum games to a much more challenging game in the next section!  "
},
{
  "id": "E_twoeq",
  "level": "2",
  "url": "S_AugMatrices.html#E_twoeq",
  "type": "Example",
  "number": "3.6.1",
  "title": "Two Equations.",
  "body": " Two Equations   An example of a system of two lines:    "
},
{
  "id": "E_threeeq",
  "level": "2",
  "url": "S_AugMatrices.html#E_threeeq",
  "type": "Example",
  "number": "3.6.2",
  "title": "Three Equations.",
  "body": " Three Equations   An example of a system of three equations where the variables are :    "
},
{
  "id": "exercise-160",
  "level": "2",
  "url": "S_AugMatrices.html#exercise-160",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "Solve a system of 2 equations.",
  "body": "Solve a system of 2 equations  Solve the system of equations.     "
},
{
  "id": "exercise-161",
  "level": "2",
  "url": "S_AugMatrices.html#exercise-161",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "Solve another system of 2 equations.",
  "body": "Solve another system of 2 equations  Solve the system of equations.     "
},
{
  "id": "exercise-162",
  "level": "2",
  "url": "S_AugMatrices.html#exercise-162",
  "type": "Exercise",
  "number": "3.6.5",
  "title": "Solve a system of 3 equations.",
  "body": "Solve a system of 3 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.    "
},
{
  "id": "exercise-163",
  "level": "2",
  "url": "S_AugMatrices.html#exercise-163",
  "type": "Exercise",
  "number": "3.6.6",
  "title": "Solve another system of 3 equations.",
  "body": "Solve another system of 3 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.    "
},
{
  "id": "exercise-164",
  "level": "2",
  "url": "S_AugMatrices.html#exercise-164",
  "type": "Exercise",
  "number": "3.6.7",
  "title": "Even more practice with 3 equations.",
  "body": "Even more practice with 3 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.    "
},
{
  "id": "exercise-165",
  "level": "2",
  "url": "S_AugMatrices.html#exercise-165",
  "type": "Exercise",
  "number": "3.6.8",
  "title": "Now, a sytem with 5 equations.",
  "body": "Now, a sytem with 5 equations  Consider the system of equations     Set up the augmented matrix for this system.  Use row reduction to find the solution.    "
},
{
  "id": "S_Undercut",
  "level": "1",
  "url": "S_Undercut.html",
  "type": "Section",
  "number": "3.7",
  "title": "Undercut",
  "body": " Undercut  This section requires you to be able to solve large systems of equations. You will be using the matrix techniques from . You are encouraged to use technology such as a graphing calculator or Sage.  As we saw in , an important part of game theory is the process of translating a game to a form that we can analyze.   Undercut Undercut   Each player chooses a number 1-5. If the two numbers don't differ by 1, then each player adds their own number to their score. If the two numbers differ by 1, then the player with the lower number adds both numbers to his or her score; the player with the higher number gets nothing. (From Douglas Hofstadter's Metamagical Themas .)  For example, suppose in round one Player 1 chooses 4; Player 2 chooses 4. Each player keeps their own number. The score is now 4-4. In the next round, Player 1 chooses 2, Player 2 chooses 5. The score would now be 6-9. In the third round Player 1 chooses 4, Player 2 chooses 5. Now Player 1 gets both numbers, making the score 15-9.    Play Undercut  Choose an opponent and play Undercut several times. Keep track of the outcomes.   After playing Undercut with an opponent, try to devise a good strategy.  Conjecture a strategy  Just from playing Undercut several times, can you suggest a strategy for Player 1? What about for Player 2? For example, what number(s) should you play most often\/ least often, or does it matter? Are there numbers you should never play? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.   As we've seen before, a payoff matrix can help with analyzing a game.  Payoff matrix  Create a payoff matrix for Undercut. Note that your payoffs should have a score for each player.   Zero-sum  Is this a zero-sum game? Explain.   Pure strategy equilibrium  Does there appear to be a pure strategy equilibrium for this game? Explain.   Let's assume we are going to play Undercut repeatedly. By the time you and your opponent are done playing, what should it mean to win the game?  Long-run winner  How might we determine a winner for Undercut after playing several times?   Most likely, you said that someone will win the game if they have the most points. In fact, we probably don't care if the final score is 10-12 or 110-112. In either case, Player 2 wins. Since we will play this game several times, we do care about the point difference. For example, a score of 5-1 would be better for Player 1 than 5-3. So let's think about the game in terms of the point difference between the players in a given game. This is called the net gain net gain . For example, with score of 5-1, Player 1 would have a net gain of 4.  Net gain  Calculate the net gain for Player 1 for each of the three rounds in in the beginning of this section.   Net gain payoff matrix  Create a new payoff matrix for Undercut which uses the players' net gain for the payoff vectors.   Zero-sum  Is this now a zero-sum game? Explain.   The method of using net gain to describe the payoffs to each player should be familiar from some of the really early examples where we turned constant-sum payoff vectors into zero-sum vectors. But note that the original form of this game wasn't even a constant-sum game! What we are really doing here is thinking about our payoffs not as points, but a win or loss relative to our opponent. Now that we have reframed Undercut as a zero-sum game, we can apply our methods for solving the game that we have seen in this chapter.  Pure strategy equilibrium  Is there a pure strategy equilibrium for this game? Explain.  Rather than looking at each option, you could compare the values for the pure maximin\/ minimax strategies.  This game has one additional property that will help simplify our analysis. This game is symmetric symmetric game , meaning the game looks the same to Players 1 and 2.  Symmetric games  Give an example of another game which is symmetric. Give an example of a game which is not symmetric.   Expected payoff for a symmetric game  What is the expected payoff for a symmetric game? Explain your answer.  You might think about whether it is possible for a player to have an advantage in a symmetric game.  Hopefully, you determined that there is not a pure strategy equilibrium for Undercut. Thus, we would like to find a mixed strategy equilibrium. Since this is a game, we cannot use our graphical solution. We will need to rely on our expected value solution. We want to decide with what probability we should play each number. Let be the probabilities with which Player 2 plays 1-5, respectively. For example, if Player 1 plays a pure strategy of 2, then the expected value for Player 1, , is .  Equations for Player 1's expected value  Write down the five equations that give Player 1's expected value for each of Player 1's pure strategies.   Expected value of a symmetric game  In , you should have determined that since this is a symmetric game, the expected value for each Player should be 0. Modify your equations to include this piece of information. It is important to recognize that this step greatly simplifies our work for the expected value method since we don't need to set the expected values equal to each other. HOWEVER, we can ONLY do this since we know the game is symmetric!   If we use that the game is symmetric, and hence the expected value of the game for each player must be 0 since neither player can have an advantage over the other, we do not need to set the equations equal to each other. We could not use this method earlier since we had no way of knowing the expected value of a general game.  We now have five equations and five unknowns. There is a sixth equation: we know that the probabilities must add up to 1. We can now solve for the equilibrium strategy!  Solve the system of equations  Use matrices to solve the resulting system of six equations. Give the mixed strategy equilibrium for Player 2. What is the mixed strategy for Player 1?  Should it be different than the strategy for Player 2?  Summary  Based on your answer to , which number(s) should you play the most often? Which should you play the least? Are there any numbers that you should never play? Compare the mathematical solution to your conjectured solution for . Is there an advantage to knowing the mathematical solution?   You have now solved a rather complex two-person game. Try playing it with your friends and family. It may be difficult (or even impossible) to play randomly with the exact probabilties. It is also unlikely that your opponent will also be playing the equilibrium strategy, but can you use the solution to assure an advantage, or at least assure that your opponent doensn't have an advantage? Can you see the difference between an exact theoretical solution to a game, and a practical strategy for playing the game? In the next chapter we will see even more differences between theoretical and practical solutions to a game.  "
},
{
  "id": "Undercut",
  "level": "2",
  "url": "S_Undercut.html#Undercut",
  "type": "Example",
  "number": "3.7.1",
  "title": "Undercut.",
  "body": " Undercut Undercut   Each player chooses a number 1-5. If the two numbers don't differ by 1, then each player adds their own number to their score. If the two numbers differ by 1, then the player with the lower number adds both numbers to his or her score; the player with the higher number gets nothing. (From Douglas Hofstadter's Metamagical Themas .)  For example, suppose in round one Player 1 chooses 4; Player 2 chooses 4. Each player keeps their own number. The score is now 4-4. In the next round, Player 1 chooses 2, Player 2 chooses 5. The score would now be 6-9. In the third round Player 1 chooses 4, Player 2 chooses 5. Now Player 1 gets both numbers, making the score 15-9.   "
},
{
  "id": "E_Uplay",
  "level": "2",
  "url": "S_Undercut.html#E_Uplay",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "Play Undercut.",
  "body": "Play Undercut  Choose an opponent and play Undercut several times. Keep track of the outcomes.  "
},
{
  "id": "E_Uguessstrat",
  "level": "2",
  "url": "S_Undercut.html#E_Uguessstrat",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "Conjecture a strategy.",
  "body": "Conjecture a strategy  Just from playing Undercut several times, can you suggest a strategy for Player 1? What about for Player 2? For example, what number(s) should you play most often\/ least often, or does it matter? Are there numbers you should never play? Does this game seem fair, or does one of the players seem to have an advantage? Explain your answers.  "
},
{
  "id": "E_Upayoff",
  "level": "2",
  "url": "S_Undercut.html#E_Upayoff",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "Payoff matrix.",
  "body": "Payoff matrix  Create a payoff matrix for Undercut. Note that your payoffs should have a score for each player.  "
},
{
  "id": "E_Unotzerosum",
  "level": "2",
  "url": "S_Undercut.html#E_Unotzerosum",
  "type": "Exercise",
  "number": "3.7.5",
  "title": "Zero-sum.",
  "body": "Zero-sum  Is this a zero-sum game? Explain.  "
},
{
  "id": "E_Upureeq",
  "level": "2",
  "url": "S_Undercut.html#E_Upureeq",
  "type": "Exercise",
  "number": "3.7.6",
  "title": "Pure strategy equilibrium.",
  "body": "Pure strategy equilibrium  Does there appear to be a pure strategy equilibrium for this game? Explain.  "
},
{
  "id": "E_Uwinner",
  "level": "2",
  "url": "S_Undercut.html#E_Uwinner",
  "type": "Exercise",
  "number": "3.7.7",
  "title": "Long-run winner.",
  "body": "Long-run winner  How might we determine a winner for Undercut after playing several times?  "
},
{
  "id": "E_Unetgainex",
  "level": "2",
  "url": "S_Undercut.html#E_Unetgainex",
  "type": "Exercise",
  "number": "3.7.8",
  "title": "Net gain.",
  "body": "Net gain  Calculate the net gain for Player 1 for each of the three rounds in in the beginning of this section.  "
},
{
  "id": "E_Unetmatrix",
  "level": "2",
  "url": "S_Undercut.html#E_Unetmatrix",
  "type": "Exercise",
  "number": "3.7.9",
  "title": "Net gain payoff matrix.",
  "body": "Net gain payoff matrix  Create a new payoff matrix for Undercut which uses the players' net gain for the payoff vectors.  "
},
{
  "id": "E_Uzerosum",
  "level": "2",
  "url": "S_Undercut.html#E_Uzerosum",
  "type": "Exercise",
  "number": "3.7.10",
  "title": "Zero-sum.",
  "body": "Zero-sum  Is this now a zero-sum game? Explain.  "
},
{
  "id": "E_Unetpureeq",
  "level": "2",
  "url": "S_Undercut.html#E_Unetpureeq",
  "type": "Exercise",
  "number": "3.7.11",
  "title": "Pure strategy equilibrium.",
  "body": "Pure strategy equilibrium  Is there a pure strategy equilibrium for this game? Explain.  Rather than looking at each option, you could compare the values for the pure maximin\/ minimax strategies. "
},
{
  "id": "E_Usymmetric",
  "level": "2",
  "url": "S_Undercut.html#E_Usymmetric",
  "type": "Exercise",
  "number": "3.7.12",
  "title": "Symmetric games.",
  "body": "Symmetric games  Give an example of another game which is symmetric. Give an example of a game which is not symmetric.  "
},
{
  "id": "E_symmetricpayoff",
  "level": "2",
  "url": "S_Undercut.html#E_symmetricpayoff",
  "type": "Exercise",
  "number": "3.7.13",
  "title": "Expected payoff for a symmetric game.",
  "body": "Expected payoff for a symmetric game  What is the expected payoff for a symmetric game? Explain your answer.  You might think about whether it is possible for a player to have an advantage in a symmetric game. "
},
{
  "id": "E_Uequations",
  "level": "2",
  "url": "S_Undercut.html#E_Uequations",
  "type": "Exercise",
  "number": "3.7.14",
  "title": "Equations for Player 1's expected value.",
  "body": "Equations for Player 1's expected value  Write down the five equations that give Player 1's expected value for each of Player 1's pure strategies.  "
},
{
  "id": "E_Uevzero",
  "level": "2",
  "url": "S_Undercut.html#E_Uevzero",
  "type": "Exercise",
  "number": "3.7.15",
  "title": "Expected value of a symmetric game.",
  "body": "Expected value of a symmetric game  In , you should have determined that since this is a symmetric game, the expected value for each Player should be 0. Modify your equations to include this piece of information. It is important to recognize that this step greatly simplifies our work for the expected value method since we don't need to set the expected values equal to each other. HOWEVER, we can ONLY do this since we know the game is symmetric!  "
},
{
  "id": "E_Usolve",
  "level": "2",
  "url": "S_Undercut.html#E_Usolve",
  "type": "Exercise",
  "number": "3.7.16",
  "title": "Solve the system of equations.",
  "body": "Solve the system of equations  Use matrices to solve the resulting system of six equations. Give the mixed strategy equilibrium for Player 2. What is the mixed strategy for Player 1?  Should it be different than the strategy for Player 2? "
},
{
  "id": "E_Usummary",
  "level": "2",
  "url": "S_Undercut.html#E_Usummary",
  "type": "Exercise",
  "number": "3.7.17",
  "title": "Summary.",
  "body": "Summary  Based on your answer to , which number(s) should you play the most often? Which should you play the least? Are there any numbers that you should never play? Compare the mathematical solution to your conjectured solution for . Is there an advantage to knowing the mathematical solution?  "
},
{
  "id": "Intrononzero",
  "level": "1",
  "url": "Intrononzero.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Two-Player Non-Zero-Sum Games",
  "body": " Introduction to Two-Player Non-Zero-Sum Games  In this section we introduce non-zero-sum games. In a non-zero-sum game non-zero-sum game the players' payoffs no longer need to sum to a constant value. Now it is possible for both players to gain or both players to lose.  Compare properties  What are some properties of a zero-sum game that may no longer hold for a non-zero-sum game? For example, in a zero-sum game is it ever advantageous to inform your opponent of your strategy? Is it advantageous to communicate prior to game play and determine a joint plan of action? Would you still want to minimize your opponents payoff?   Let's build an understanding of non-zero-sum games by looking at an example.   Battle of the Sexes Battle of the Sexes   Alice and Bob want to go out to a movie. Bob wants to see an action movie, Alice wants to see a comedy. Both prefer to go to a movie together rather than to go alone. We can represent the situation with the payoff matrix in :   Battle of the Sexes      Alice      Action  Comedy    Bob  Action       Comedy         Not zero-sum  Explain why this is not a zero-sum game.   In zero-sum games it is never advantageous to let your opponent know you strategy. Does that property still apply for games like Battle of the Sexes?  Announcing a strategy  Could it be advantageous for a player to announce his or her strategy? Could it be harmful to announce his or her strategy? If possible, describe a scenario in which it would be advantageous to announce a strategy. If possible, describe a scenario in which it would be harmful to announce a strategy.   We might first try to analyze Battle of the Sexes using the same techniques as we used for zero-sum games. For example, we might start as we would in zero-sum games by looking for any equilibrium points.  Equilibrium points  Since our main goal in analyzing games has been to find equilibrium points, let's find any equilibrium points for Battle of teh Sexes. Are there any strategy pairs where players would not want to switch?  There are two!  Values of equilibrium points  Are the equilibrium points the same (in other words, does each player get the same payoff at each equilibrium point)? Compare this to what must happen for zero-sum games.   Now that we know Battle of the Sexes has two equilibrium points, we should try to find actual strategies for Alice and Bob. Is there a good strategy for each if they play the game only once? What if they repeat the game? Recall that with zero-sum games, if there was an equilibrium, rational players always want to play it, even if the game is repeated. Does that still seem to work here? Also, how might the ability to communicate change what the players do?  Repeating the game  Suppose the game is played repeatedly. For example, Alice and Bob have movie night once a month. Suggest a strategy for Alice and for Bob. Feel free to play the game with someone from class. Try a playing several times without communicating about your strategy before each game.   Communication  How could communication affect the choice of strategy? Now play several times where you are allowed to communicate about your strategy. Does this change your strategy?   Mixed strategy equilibrium  In either case, communicating and not communicating, do you think your strategies for Alice and Bob represent a mixed strategy equilibrium?   Compare to zero-sum  In a zero-sum game, if there is a pure strategy equilibrium, then what happens when you repeat a game? If you repeat Battle of the Sexes, does the game always result in an equilibrium pair?   Hopefully, you are beginning to see some of the challenges for analyzing non-zero-sum games. We know there are equilibrium points in Battle of the Sexes, but even rational play may not result in an equilibrium. For the remainder of this section, let's assume that players are not allowed to communicate about strategy prior to play. Such games are called non-cooperative non-cooperative games games. Before moving on, let's try to find the maximin strategies for our players using the graphical method, as we did with zero-sum games.  Bob's payoff matrix  Consider Battle of the Sexes from Bob's point of view. We know that Bob wants to maximize his payoff (that has not changed). So Bob doesn't care what Alice's payoff's are. Write down Bob's payoff matrix.   Graphical method on Bob's matrix  Recall that the graphical method represents Bob's expected payoff depending on how often he plays each of his options. Sketch the graph associated with Bob's payoff matrix.   Bob's maximin mixed strategy  The area between the two lines still represents the possible expected values for Bob, depending on how often Alice plays each of her strategies. So as before, the bottom lines represent the least Bob can expect as he varies his strategy. Thus, the point of intersection will represent the biggest of these smallest values (the maximin strategy). Find this point of intersection. How often should Bob play each option? What is his expected payoff?   So no matter what Alice does, Bob can expect that over the long run he wins at least the value you found in . Make sure you understand this before moving on.  Alice's maximin mixed strategy  Now consider Battle of the Sexes from Alice's point of view. Write down her payoff matrix and use the graphical method to find the probability with which she should play each option and her expected payoff.   Now, from and you have the minimum payoff each player should expect. Note that since this is not a zero-sum game, both players can expect a positive payoff. But now we want to see how this pair of mixed strategies really works for the players.  Alice's expected value when Bob plays his maximin strategy  Assume Bob plays the mixed strategy from . Calculate Alice's expected value for each of her pure strategies ( (Comedy) and (Action)).   Alice's preference  Are Alice's expected values equal? If not, which strategy does she prefer when Bob plays the mixed strategy from ? Does Alice want to deviate from her mixed strategy?   Mixed strategy equilibrium  Now if Alice plays a pure strategy, does Bob want to change his strategy? So is the mixed strategy pair for Bob and Alice from and an equilibrium? In fact, if Bob changes his strategy, how does his expected value compare to the expected value for his mixed strategy?   Downside of the graphical method  What goes wrong with the graphical method in the case of a non-zero-sum game?  Is it important for Alice to consider the minimax strategy? Does Alice have any reason to minimize Bob's payoff?  As we can see by the above example, the methods used to analyze zero-sum games may not be too helpful for non-zero-sum games. Part of the problem is that in solving zero-sum games we take into consideration that one player wants to minimize the payoff to the other player. This is no longer the case. Changing strategies may allow BOTH players to do better. A player no longer has any reason to prevent the other player from doing better.  Response to the mixed strategy  So we know the mixed strategy won't give us an equilibrium. But suppose we start there. In other words, suppose Bob plans to play the mixed strategy from . Which pure strategy should Alice play? In response, which pure strategy should Bob play? What is the outcome? Do you end up at an equilibrium?   Bos's expected value when Alice plays her maximin strategy  Now suppose Alice plans to play the mixed strategy from . Calculate the expected value for Bob for each of his pure strategies. Which pure strategy does Bob prefer to play? How will Alice respond to Bob's pure strategy? What is the outcome? Do you end up at an equilibrium?   Out-guessing the mixed strategy  Suppose Bob thinks Alice will try the mixed strategy and Alice thinks Bob will try the mixed strategy. Which pure strategy will each play? What is the outcome? Do you end up at an equilibrium?   Playing the maximin mixed strategy  Considering , , and , is it in a player's best interest to even consider playing the mixed strategy from or ?   We've seen the limitations of the graphical method, but what about the expected value method?  Expected value solution  Try applying the expected value method to Battle of the Sexes. What mixed strategies do you get? Explain why this method will also not result in an equilibrium. You might want to consider whether it is important for one player to minimize the expected value for the other player.   Now that we have seen how the methods that allowed us to solve zero-sum games don't work for non-zero-sum games, we will need to find new ways to approach non-zero-sum games.  "
},
{
  "id": "E_propertiesnonzero",
  "level": "2",
  "url": "Intrononzero.html#E_propertiesnonzero",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "Compare properties.",
  "body": "Compare properties  What are some properties of a zero-sum game that may no longer hold for a non-zero-sum game? For example, in a zero-sum game is it ever advantageous to inform your opponent of your strategy? Is it advantageous to communicate prior to game play and determine a joint plan of action? Would you still want to minimize your opponents payoff?  "
},
{
  "id": "E_battle_of_sexes",
  "level": "2",
  "url": "Intrononzero.html#E_battle_of_sexes",
  "type": "Example",
  "number": "4.1.2",
  "title": "Battle of the Sexes.",
  "body": " Battle of the Sexes Battle of the Sexes   Alice and Bob want to go out to a movie. Bob wants to see an action movie, Alice wants to see a comedy. Both prefer to go to a movie together rather than to go alone. We can represent the situation with the payoff matrix in :   Battle of the Sexes      Alice      Action  Comedy    Bob  Action       Comedy        "
},
{
  "id": "E_BoSnotzerosum",
  "level": "2",
  "url": "Intrononzero.html#E_BoSnotzerosum",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "Not zero-sum.",
  "body": "Not zero-sum  Explain why this is not a zero-sum game.  "
},
{
  "id": "E_BoSannounce",
  "level": "2",
  "url": "Intrononzero.html#E_BoSannounce",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "Announcing a strategy.",
  "body": "Announcing a strategy  Could it be advantageous for a player to announce his or her strategy? Could it be harmful to announce his or her strategy? If possible, describe a scenario in which it would be advantageous to announce a strategy. If possible, describe a scenario in which it would be harmful to announce a strategy.  "
},
{
  "id": "E_BoSequilpoints",
  "level": "2",
  "url": "Intrononzero.html#E_BoSequilpoints",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "Equilibrium points.",
  "body": "Equilibrium points  Since our main goal in analyzing games has been to find equilibrium points, let's find any equilibrium points for Battle of teh Sexes. Are there any strategy pairs where players would not want to switch?  There are two! "
},
{
  "id": "E_BoSunequal",
  "level": "2",
  "url": "Intrononzero.html#E_BoSunequal",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "Values of equilibrium points.",
  "body": "Values of equilibrium points  Are the equilibrium points the same (in other words, does each player get the same payoff at each equilibrium point)? Compare this to what must happen for zero-sum games.  "
},
{
  "id": "E_BoSrepeat",
  "level": "2",
  "url": "Intrononzero.html#E_BoSrepeat",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "Repeating the game.",
  "body": "Repeating the game  Suppose the game is played repeatedly. For example, Alice and Bob have movie night once a month. Suggest a strategy for Alice and for Bob. Feel free to play the game with someone from class. Try a playing several times without communicating about your strategy before each game.  "
},
{
  "id": "E_BoScommunication",
  "level": "2",
  "url": "Intrononzero.html#E_BoScommunication",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "Communication.",
  "body": "Communication  How could communication affect the choice of strategy? Now play several times where you are allowed to communicate about your strategy. Does this change your strategy?  "
},
{
  "id": "E_BoSmixedequil",
  "level": "2",
  "url": "Intrononzero.html#E_BoSmixedequil",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "Mixed strategy equilibrium.",
  "body": "Mixed strategy equilibrium  In either case, communicating and not communicating, do you think your strategies for Alice and Bob represent a mixed strategy equilibrium?  "
},
{
  "id": "E_BoScomparezerosum",
  "level": "2",
  "url": "Intrononzero.html#E_BoScomparezerosum",
  "type": "Exercise",
  "number": "4.1.11",
  "title": "Compare to zero-sum.",
  "body": "Compare to zero-sum  In a zero-sum game, if there is a pure strategy equilibrium, then what happens when you repeat a game? If you repeat Battle of the Sexes, does the game always result in an equilibrium pair?  "
},
{
  "id": "E_BoSBobsmatrix",
  "level": "2",
  "url": "Intrononzero.html#E_BoSBobsmatrix",
  "type": "Exercise",
  "number": "4.1.12",
  "title": "Bob's payoff matrix.",
  "body": "Bob's payoff matrix  Consider Battle of the Sexes from Bob's point of view. We know that Bob wants to maximize his payoff (that has not changed). So Bob doesn't care what Alice's payoff's are. Write down Bob's payoff matrix.  "
},
{
  "id": "E_BoSBobgraph",
  "level": "2",
  "url": "Intrononzero.html#E_BoSBobgraph",
  "type": "Exercise",
  "number": "4.1.13",
  "title": "Graphical method on Bob's matrix.",
  "body": "Graphical method on Bob's matrix  Recall that the graphical method represents Bob's expected payoff depending on how often he plays each of his options. Sketch the graph associated with Bob's payoff matrix.  "
},
{
  "id": "E_BoSBobintersection",
  "level": "2",
  "url": "Intrononzero.html#E_BoSBobintersection",
  "type": "Exercise",
  "number": "4.1.14",
  "title": "Bob's maximin mixed strategy.",
  "body": "Bob's maximin mixed strategy  The area between the two lines still represents the possible expected values for Bob, depending on how often Alice plays each of her strategies. So as before, the bottom lines represent the least Bob can expect as he varies his strategy. Thus, the point of intersection will represent the biggest of these smallest values (the maximin strategy). Find this point of intersection. How often should Bob play each option? What is his expected payoff?  "
},
{
  "id": "E_BoSAlicematrix",
  "level": "2",
  "url": "Intrononzero.html#E_BoSAlicematrix",
  "type": "Exercise",
  "number": "4.1.15",
  "title": "Alice's maximin mixed strategy.",
  "body": "Alice's maximin mixed strategy  Now consider Battle of the Sexes from Alice's point of view. Write down her payoff matrix and use the graphical method to find the probability with which she should play each option and her expected payoff.  "
},
{
  "id": "E_BoSBobsmaximin",
  "level": "2",
  "url": "Intrononzero.html#E_BoSBobsmaximin",
  "type": "Exercise",
  "number": "4.1.16",
  "title": "Alice's expected value when Bob plays his maximin strategy.",
  "body": "Alice's expected value when Bob plays his maximin strategy  Assume Bob plays the mixed strategy from . Calculate Alice's expected value for each of her pure strategies ( (Comedy) and (Action)).  "
},
{
  "id": "E_BoSAlicepref",
  "level": "2",
  "url": "Intrononzero.html#E_BoSAlicepref",
  "type": "Exercise",
  "number": "4.1.17",
  "title": "Alice's preference.",
  "body": "Alice's preference  Are Alice's expected values equal? If not, which strategy does she prefer when Bob plays the mixed strategy from ? Does Alice want to deviate from her mixed strategy?  "
},
{
  "id": "E_BoSBobchange",
  "level": "2",
  "url": "Intrononzero.html#E_BoSBobchange",
  "type": "Exercise",
  "number": "4.1.18",
  "title": "Mixed strategy equilibrium.",
  "body": "Mixed strategy equilibrium  Now if Alice plays a pure strategy, does Bob want to change his strategy? So is the mixed strategy pair for Bob and Alice from and an equilibrium? In fact, if Bob changes his strategy, how does his expected value compare to the expected value for his mixed strategy?  "
},
{
  "id": "E_BoSgraphwrong",
  "level": "2",
  "url": "Intrononzero.html#E_BoSgraphwrong",
  "type": "Exercise",
  "number": "4.1.19",
  "title": "Downside of the graphical method.",
  "body": "Downside of the graphical method  What goes wrong with the graphical method in the case of a non-zero-sum game?  Is it important for Alice to consider the minimax strategy? Does Alice have any reason to minimize Bob's payoff? "
},
{
  "id": "E_BoSstartBmixed",
  "level": "2",
  "url": "Intrononzero.html#E_BoSstartBmixed",
  "type": "Exercise",
  "number": "4.1.20",
  "title": "Response to the mixed strategy.",
  "body": "Response to the mixed strategy  So we know the mixed strategy won't give us an equilibrium. But suppose we start there. In other words, suppose Bob plans to play the mixed strategy from . Which pure strategy should Alice play? In response, which pure strategy should Bob play? What is the outcome? Do you end up at an equilibrium?  "
},
{
  "id": "E_BoSstartAmixed",
  "level": "2",
  "url": "Intrononzero.html#E_BoSstartAmixed",
  "type": "Exercise",
  "number": "4.1.21",
  "title": "Bos's expected value when Alice plays her maximin strategy.",
  "body": "Bos's expected value when Alice plays her maximin strategy  Now suppose Alice plans to play the mixed strategy from . Calculate the expected value for Bob for each of his pure strategies. Which pure strategy does Bob prefer to play? How will Alice respond to Bob's pure strategy? What is the outcome? Do you end up at an equilibrium?  "
},
{
  "id": "E_BoSoutguess",
  "level": "2",
  "url": "Intrononzero.html#E_BoSoutguess",
  "type": "Exercise",
  "number": "4.1.22",
  "title": "Out-guessing the mixed strategy.",
  "body": "Out-guessing the mixed strategy  Suppose Bob thinks Alice will try the mixed strategy and Alice thinks Bob will try the mixed strategy. Which pure strategy will each play? What is the outcome? Do you end up at an equilibrium?  "
},
{
  "id": "E_BoSeverplaymixed",
  "level": "2",
  "url": "Intrononzero.html#E_BoSeverplaymixed",
  "type": "Exercise",
  "number": "4.1.23",
  "title": "Playing the maximin mixed strategy.",
  "body": "Playing the maximin mixed strategy  Considering , , and , is it in a player's best interest to even consider playing the mixed strategy from or ?  "
},
{
  "id": "E_BoSevsol",
  "level": "2",
  "url": "Intrononzero.html#E_BoSevsol",
  "type": "Exercise",
  "number": "4.1.24",
  "title": "Expected value solution.",
  "body": "Expected value solution  Try applying the expected value method to Battle of the Sexes. What mixed strategies do you get? Explain why this method will also not result in an equilibrium. You might want to consider whether it is important for one player to minimize the expected value for the other player.  "
},
{
  "id": "pdandchicken",
  "level": "1",
  "url": "pdandchicken.html",
  "type": "Section",
  "number": "4.2",
  "title": "Prisoner's Dilemma and Chicken",
  "body": " Prisoner's Dilemma and Chicken  Before getting any further into non-zero-sum games, let's recall some key ideas about zero-sum games.  If a zero-sum game has an equilibrium point, then repeating the game does not affect how the players will play.  If a zero-sum game has more that one equilibrium point then the values of the equilibrium points are the same.  In a zero-sum game, we can find mixed strategy equilibrium points using the graphical method or the expected value method.  In a zero-sum game, a player never benefits from communicating her strategy to her opponent.    Hopefully, in the last section you saw that non-zero-sum games can differ on all of the above!   A Non-Zero Sum Game   Let's consider the game given by .   A non-zero sum example     C  D    A  (0, 0)  (10, 5)    B  (5, 10)  (0, 0)       Not zero-sum  Check that this is NOT a zero-sum game.   Even with non-zero-sum games, it is helpful to start by finding any equilibrium points.  Equilibrium points  Using the guess and check method for finding equilibria, you should be able to determine that has two equilibrium points. What are they?   Preference between equilibria  As we saw in , the equilibrium points in non-zero-sum games need not have the same values. Does Player 1 prefer one of the equilibria from over the other?   Since it is now possible for BOTH players to benefit at the same time, it might be a good idea for players to communicate with each other. For example, if Player 1 says that she will choose A no matter what, then it is in Player 2's best interest to choose D. If communication is allowed in the game, then we say the non-zero-sum game is cooperative cooperative game . If no communication is allowed, we say it is non-cooperative non-cooperative game .  We saw in , that our methods for analyzing zero-sum games do not work very well on non-zero-sum games. Let's look a little closer at this.  If we apply the graphical method for Player 1 to the above game, we get that Player 1 should play a (1\/3, 2\/3) mixed strategy for an expected payoff of 10\/3. Similarly we can determine that Player 2 should play a (2\/3, 1\/3) mixed strategy for an expected payoff of 10\/3. Recall we developed this strategy as a super defensive strategy. But are our players motivated to play as defensively in a non-zero-sum game? Not necessarily! It is no longer true that Player 2 needs to keep Player 1 from gaining!  Now suppose, Player 1 plays the (1\/3, 2\/3) strategy. Then the expected payoff to Player 2 for playing pure strategy C, , is 20\/3; and the expected payoff to Player 2 for playing pure strategy D, , is 5\/3. Thus Player 2 prefers C over D. But if Player 2 plays only C, then Player 1 should abandon her (1\/3, 2\/3) strategy and just play B! This results in the payoff vector (5, 10). Notice, that now the expected value for Player 1 is 5, which is better than 10\/3! Again, since Player 2 is not trying to keep Player 1 from gaining, there is no reason to apply the maximin strategy to non-zero-sum games. Similarly, we don't want to apply the expected value solution since Player 1 does not care if Player 2's expected values are equal. Each player only cares about his or her own payoff, not the payoff of the other player.  OK, so now, how do we analyze these games?  Conjecture a strategy  What are some possible strategies for each player? Might some strategies depend on what a player knows about her opponent?   Can you see that some of the analysis might be better understood with psychology than with mathematics?  In order to better understand non-zero-sum games we look at two classic games.   Prisoner's Dilemma Prisoner's Dilemma   Two partners in crime are arrested for burglary and sent to separate rooms. They are each offered a deal: if they confess and rat on their partner, they will receive a reduced sentence. So if one confesses and the other doesn't, the confessor only gets 3 months in prison, while the partner serves 10 years. If both confess, then they each get 8 years. However, if neither confess, there isn't enough evidence, and each gets just one year. We can represent the situation with the matrix in .   The Prisoner's Dilemma (years in prison).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess         Since this game, as presented, is probably only playerd once, we can begin by looking for dominated strategies and equilibrium points.  Dominated strategies  Does the matrix in have any dominated strategies for Player 1? Does it have any dominated strategies for Player 2? Keep in mind that a prisoner prefers smaller numbers since prison time is bad.   If you were to be one of the prisoners, what would you do? Do you think everyone would do that, too? What would our perfectly rational player do? Would your strategy change if you are allowed to communicate? We examine some of these questions in the next few exercises.  A prisoner's strategy  Suppose you are Prisoner 1. What should you do? Why? Suppose you are Prisoner 2. What should you do? Why? Does your choice of strategies result in an equilibrium pair?   The best outcome  Looking at the game as an outsider, what strategy pair is the best option for both prisoners.   Two rational prisoners  Now suppose both prisoners are perfectly rational, so that any decision Prisoner 1 makes would also be the decision Prisoner 2 makes. Further, suppose both prisoners know that their opponent is perfectly rational. What should each prisoner do?   A crazy prisoner  Suppose Prisoner 2 is crazy and is likely to confess with 50\/50 chance. What should Prisoner 1 do? Does it change if he confesses with a 75% chance? What if he confesses with a 25% chance.   Communication between prisoners  Suppose the prisoners are able to communicate about their strategy. How might this affect what they choose to do?   The dilemma  Explain why this is a dilemma for the prisoners. Is it likely they will chose a strategy which leads to the best outcome for both? You might want to consider whether there are dominated strategies.   You should now have some idea about why we call this game a dilemma, since the players may in fact have difficulty deciding on whether to confess or not. Even two perfectly rational players may not be able to get the best payoff.  We now turn to another classic example. We can ask similar qustions about Chicken that we ask about Prisoner's Dilemma.   Chicken Chicken   Two drivers drive towards each other. If one driver swerves, he is considered a chicken. If a driver doesn't swerve (drives straight), he is considered the winner. Of course if neither swerves, they crash and neither wins. A possible payoff matrix for this game is given in .   The game of Chicken.      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight         Again, since this game as presented is probably only playerd once, we can begin by looking for dominated strategies and equilibrium points.  Dominated strategies  Does the Chicken game in have any dominated strategies?   The best outcome  What strategy results in the best outcome for Driver 1? What strategy results in the best outcome for Driver 2? What happens if they both choose that strategy?   Equilibrium points  Consider the strategy pair with outcome . Does Driver 1 have any regrets about his choice? What about Driver 2? Is this an equilibrium point? Are there any other points in which neither driver would regret his or her choice?   If you were to be one of the drivers, what would you do? Do you think everyone would do that, too? What would our perfectly rational player do? Would your strategy change if you are allowed to communicate? We examine some of these questions in the next few exercises.  A driver's strategy  Can you determine what each driver should do in Chicken? If so, does this result in an equilibrium pair?   Two rational drivers  Now suppose both drivers in the game of Chicken are perfectly rational, so that any decision Driver 1 makes would also be the decision Driver 2 makes. Further, suppose both drivers know that their opponent is perfectly rational. What should each driver do?   A remote control driver  Suppose Driver 2 is a remote control dummy and will swerve or drive straight with a 50\/50 chance. What should Driver 1 do? Does it change if the remote contro dummy swerves with 75% chance?   Communication between drivers  Can it benefit drivers in the game of Chicken to communicate about their strategy? Explain.   Compare games  Compare Prisoner's Dilemma and Chicken. Are there dominated strategies in both games? Are there equilibrium pairs? Are players likely to reach the optimal payoff for one player, both players, or neither player? Does a player's choice depend on what he knows about his opponent (perfectly rational or perfectly random)?   Both Prisoner's Dilemma and Chicken are models of games where we describe the choice of strategy as Cooperate and Defect . In Prisoner's Dilemma, we think of cooperating as cooperating with the other player, and defecting as turning against the other player. So if both players cooperate (with each other, not the police), they will get the higher payoff of only one year in prison. They defect by ratting on each other. In Chicken, players cooperate by swerving and defect by driving straight. Using the examples of Prisoner's Dilemma and Chicken, think about how these games can model other everyday interactions where you could describe your choices as cooperating and defecting. The remainder of the chapter looks more closely at situations where players can cooperate or defect.  "
},
{
  "id": "E_simplenonzero",
  "level": "2",
  "url": "pdandchicken.html#E_simplenonzero",
  "type": "Example",
  "number": "4.2.1",
  "title": "A <span class=\"process-math\">\\(2\\times 2\\)<\/span> Non-Zero Sum Game.",
  "body": " A Non-Zero Sum Game   Let's consider the game given by .   A non-zero sum example     C  D    A  (0, 0)  (10, 5)    B  (5, 10)  (0, 0)      "
},
{
  "id": "E_simplenzero",
  "level": "2",
  "url": "pdandchicken.html#E_simplenzero",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "Not zero-sum.",
  "body": "Not zero-sum  Check that this is NOT a zero-sum game.  "
},
{
  "id": "E_simplefindequil",
  "level": "2",
  "url": "pdandchicken.html#E_simplefindequil",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "Equilibrium points.",
  "body": "Equilibrium points  Using the guess and check method for finding equilibria, you should be able to determine that has two equilibrium points. What are they?  "
},
{
  "id": "E_simpleprefer",
  "level": "2",
  "url": "pdandchicken.html#E_simpleprefer",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "Preference between equilibria.",
  "body": "Preference between equilibria  As we saw in , the equilibrium points in non-zero-sum games need not have the same values. Does Player 1 prefer one of the equilibria from over the other?  "
},
{
  "id": "E_conjgeneralstrat",
  "level": "2",
  "url": "pdandchicken.html#E_conjgeneralstrat",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "Conjecture a strategy.",
  "body": "Conjecture a strategy  What are some possible strategies for each player? Might some strategies depend on what a player knows about her opponent?  "
},
{
  "id": "E_PrisonersDilemma",
  "level": "2",
  "url": "pdandchicken.html#E_PrisonersDilemma",
  "type": "Example",
  "number": "4.2.7",
  "title": "Prisoner's Dilemma.",
  "body": " Prisoner's Dilemma Prisoner's Dilemma   Two partners in crime are arrested for burglary and sent to separate rooms. They are each offered a deal: if they confess and rat on their partner, they will receive a reduced sentence. So if one confesses and the other doesn't, the confessor only gets 3 months in prison, while the partner serves 10 years. If both confess, then they each get 8 years. However, if neither confess, there isn't enough evidence, and each gets just one year. We can represent the situation with the matrix in .   The Prisoner's Dilemma (years in prison).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess        "
},
{
  "id": "E_PDdomstrat",
  "level": "2",
  "url": "pdandchicken.html#E_PDdomstrat",
  "type": "Exercise",
  "number": "4.2.9",
  "title": "Dominated strategies.",
  "body": "Dominated strategies  Does the matrix in have any dominated strategies for Player 1? Does it have any dominated strategies for Player 2? Keep in mind that a prisoner prefers smaller numbers since prison time is bad.  "
},
{
  "id": "E_PDbeststrat",
  "level": "2",
  "url": "pdandchicken.html#E_PDbeststrat",
  "type": "Exercise",
  "number": "4.2.10",
  "title": "A prisoner's strategy.",
  "body": "A prisoner's strategy  Suppose you are Prisoner 1. What should you do? Why? Suppose you are Prisoner 2. What should you do? Why? Does your choice of strategies result in an equilibrium pair?  "
},
{
  "id": "E_PDbestforall",
  "level": "2",
  "url": "pdandchicken.html#E_PDbestforall",
  "type": "Exercise",
  "number": "4.2.11",
  "title": "The best outcome.",
  "body": "The best outcome  Looking at the game as an outsider, what strategy pair is the best option for both prisoners.  "
},
{
  "id": "E_PDsamedecision",
  "level": "2",
  "url": "pdandchicken.html#E_PDsamedecision",
  "type": "Exercise",
  "number": "4.2.12",
  "title": "Two rational prisoners.",
  "body": "Two rational prisoners  Now suppose both prisoners are perfectly rational, so that any decision Prisoner 1 makes would also be the decision Prisoner 2 makes. Further, suppose both prisoners know that their opponent is perfectly rational. What should each prisoner do?  "
},
{
  "id": "E_PDrandomP2",
  "level": "2",
  "url": "pdandchicken.html#E_PDrandomP2",
  "type": "Exercise",
  "number": "4.2.13",
  "title": "A crazy prisoner.",
  "body": "A crazy prisoner  Suppose Prisoner 2 is crazy and is likely to confess with 50\/50 chance. What should Prisoner 1 do? Does it change if he confesses with a 75% chance? What if he confesses with a 25% chance.  "
},
{
  "id": "E_PDcommunicate",
  "level": "2",
  "url": "pdandchicken.html#E_PDcommunicate",
  "type": "Exercise",
  "number": "4.2.14",
  "title": "Communication between prisoners.",
  "body": "Communication between prisoners  Suppose the prisoners are able to communicate about their strategy. How might this affect what they choose to do?  "
},
{
  "id": "E_PDdilemma",
  "level": "2",
  "url": "pdandchicken.html#E_PDdilemma",
  "type": "Exercise",
  "number": "4.2.15",
  "title": "The dilemma.",
  "body": "The dilemma  Explain why this is a dilemma for the prisoners. Is it likely they will chose a strategy which leads to the best outcome for both? You might want to consider whether there are dominated strategies.  "
},
{
  "id": "E_Chicken",
  "level": "2",
  "url": "pdandchicken.html#E_Chicken",
  "type": "Example",
  "number": "4.2.16",
  "title": "Chicken.",
  "body": " Chicken Chicken   Two drivers drive towards each other. If one driver swerves, he is considered a chicken. If a driver doesn't swerve (drives straight), he is considered the winner. Of course if neither swerves, they crash and neither wins. A possible payoff matrix for this game is given in .   The game of Chicken.      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight        "
},
{
  "id": "E_Cdomstrat",
  "level": "2",
  "url": "pdandchicken.html#E_Cdomstrat",
  "type": "Exercise",
  "number": "4.2.18",
  "title": "Dominated strategies.",
  "body": "Dominated strategies  Does the Chicken game in have any dominated strategies?  "
},
{
  "id": "E_Cbestoutcome",
  "level": "2",
  "url": "pdandchicken.html#E_Cbestoutcome",
  "type": "Exercise",
  "number": "4.2.19",
  "title": "The best outcome.",
  "body": "The best outcome  What strategy results in the best outcome for Driver 1? What strategy results in the best outcome for Driver 2? What happens if they both choose that strategy?  "
},
{
  "id": "E_Cequilpairs",
  "level": "2",
  "url": "pdandchicken.html#E_Cequilpairs",
  "type": "Exercise",
  "number": "4.2.20",
  "title": "Equilibrium points.",
  "body": "Equilibrium points  Consider the strategy pair with outcome . Does Driver 1 have any regrets about his choice? What about Driver 2? Is this an equilibrium point? Are there any other points in which neither driver would regret his or her choice?  "
},
{
  "id": "E_Cbeststrat",
  "level": "2",
  "url": "pdandchicken.html#E_Cbeststrat",
  "type": "Exercise",
  "number": "4.2.21",
  "title": "A driver's strategy.",
  "body": "A driver's strategy  Can you determine what each driver should do in Chicken? If so, does this result in an equilibrium pair?  "
},
{
  "id": "E_Csamestrat",
  "level": "2",
  "url": "pdandchicken.html#E_Csamestrat",
  "type": "Exercise",
  "number": "4.2.22",
  "title": "Two rational drivers.",
  "body": "Two rational drivers  Now suppose both drivers in the game of Chicken are perfectly rational, so that any decision Driver 1 makes would also be the decision Driver 2 makes. Further, suppose both drivers know that their opponent is perfectly rational. What should each driver do?  "
},
{
  "id": "E_Crandom",
  "level": "2",
  "url": "pdandchicken.html#E_Crandom",
  "type": "Exercise",
  "number": "4.2.23",
  "title": "A remote control driver.",
  "body": "A remote control driver  Suppose Driver 2 is a remote control dummy and will swerve or drive straight with a 50\/50 chance. What should Driver 1 do? Does it change if the remote contro dummy swerves with 75% chance?  "
},
{
  "id": "E_Ccommunicate",
  "level": "2",
  "url": "pdandchicken.html#E_Ccommunicate",
  "type": "Exercise",
  "number": "4.2.24",
  "title": "Communication between drivers.",
  "body": "Communication between drivers  Can it benefit drivers in the game of Chicken to communicate about their strategy? Explain.  "
},
{
  "id": "E_comparePDC",
  "level": "2",
  "url": "pdandchicken.html#E_comparePDC",
  "type": "Exercise",
  "number": "4.2.25",
  "title": "Compare games.",
  "body": "Compare games  Compare Prisoner's Dilemma and Chicken. Are there dominated strategies in both games? Are there equilibrium pairs? Are players likely to reach the optimal payoff for one player, both players, or neither player? Does a player's choice depend on what he knows about his opponent (perfectly rational or perfectly random)?  "
},
{
  "id": "S_CWPD",
  "level": "1",
  "url": "S_CWPD.html",
  "type": "Section",
  "number": "4.3",
  "title": "A Class-Wide Experiment",
  "body": " A Class-Wide Experiment   Class-Wide Prisoner's Dilemma   We are going to look at a class-wide game.  Each member of the class secretly chooses a single letter: C or D, standing for cooperate cooperate or defect. defect This will be used as your strategy choice in the following game with each of the other players in the class. Here is how it works for each pair of players: if they both cooperate, they get each get 3 points. If they both defect, they each get 1 point. If one cooperates and one defects, the cooperator gets nothing, but the defector gets 5 points. Your one choice of C or D will be used to play the game with all the other players in the class.  Thus, if everyone chooses C, everyone will get 3 points per person (not counting yourself). If everyone chooses D, everyone will get 1 point per person (not counting yourself). You can't lose! And of course, anyone chooses D will get at least as much as everyone else will. If, for example in a class of 20 poeple, 11 people choose C and 9 choose D, then the 11 C-ers will get 3 points apiece from the other C-ers (making 30 points), and zero from the D-ers. So C-ers will get 30 points each. The D-ers, by contrast, will pick up 5 points apiece from each of the C-ers, making 55 points, and 1 point from each of the other D-ers, making 8 points, for a grand total of 63 points. No matter what the distribution is, D-ers always do better than C-ers. Of course, the more C-ers there are, the better everyone will do!  By the way, I should make it clear that in making your choice, you should not aim to be the winner, but simply to get as many points for yourself as possible. Thus you should be happier to get 30 points (as a result of saying C along with 10 others, even though the 9 D-sayers get more than you) than to get 19 points (by saying D along with everybody else, so nobody beats you).  Of course, your hope is to be the only defector, thus really cleaning up: with 19 C-ers, you'll get 95 points, and they'll each get 18 times 3, namely 54 points! But why am I doing the multiplication or any of this figuring for you? You've been studying game theory. So have all of you! You are all equally versed in game theory and understand about making rational choices. Therefore, I hardly need to tell you that you are to make what you consider to be your maximally rational choice. In particular, feelings of morality, guilt, apathy, and so on, are to be disregarded. Reasoning alone (of course including reasoning about others' reasoning) should be the basis of your decision.  So all you need to do is make your choice. Write it down.  It is to be understood (it almost goes without saying, but not quite) that you are not to discuss your answer with anyone else from the class. The purpose is to see what people do on their own, in isolation. Along with your answer you should include a short explanation for why you made your particular choice.  Adapted from Douglas Hofstadter, Metamagical Themas , p. 740.     Once everyone in class has made his or her choice, share your answers with the class. Then answer the following questions about the class's responses.  Summary of responses    How many C's were there?  How many D's were there?  What was the payoff to each C?  What was the payoff to each D?     Payoff matrix  Determine the payoff matrix for class-wide Prisoner's Dilemma.  Although you played this game with each other person in the class, this is still a 2 person game!  Reasons for choice  What are some reasons people chose C? What are some reasons people chose D?   Although we can now see what everyone chose, we might not agree that everyone made the most rational choice. How might perfectly rational players play the game?  The rational choice  Thinking about the idea of rationality , what appears to be the most rational choice, C or D? If everyone is equally rational, then what would everyone do? If everyone is equally rational, should everyone choose the same thing?   Everyone is rational  Now suppose everyone is equally (and perfectly) rational. AND everyone knows that everyone else is equally (and perfectly) rational. What should everyone choose?  If everyone knows that everyone will choose the same answer, what should everyone choose to do?  The next two exercises look at two more examples of games where players can Cooperate or Defect . How does changing the payoffs change the players' incentive to cooperate or defect?  A game of cooperation and defection  Consider the game in    Matrix for     C  D    C  (3, 3)  (0, 50)    D  (50, 0)  (.01, .01)     What would you do? Why? What seems to be the most rational thing to do? Why?   Another game of cooperation and defection  Consider the game in    Matrix for     C  D    C  (1000, 1000)  (0, 100)    D  (100, 0)  (100, 100)     What would you do? Why? What seems to be the most rational thing to do? Why?   Motivation to cooperate or defect  Looking at all three of the above games, can you think of what sort of payoffs you would need in order to cooperate (C)? What about to defect (D)?   Not every game where player's cooperate or defect is a Prisoner's Dilemma, or even a dilemma. You can certainly change the payoffs in the above matrices so that it is very clear what each player should do. But as you've seen with this section's experiment, there is something special about the Prisoner's Dilemma. Everyone does better if they all cooperate, but any one player does better to defect. The next section will look more specifically at what makes a game a Prisoner's Dilemma.  "
},
{
  "id": "E_CWPDsummary",
  "level": "2",
  "url": "S_CWPD.html#E_CWPDsummary",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "Summary of responses.",
  "body": "Summary of responses    How many C's were there?  How many D's were there?  What was the payoff to each C?  What was the payoff to each D?    "
},
{
  "id": "E_CWPDmatrix",
  "level": "2",
  "url": "S_CWPD.html#E_CWPDmatrix",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "Payoff matrix.",
  "body": "Payoff matrix  Determine the payoff matrix for class-wide Prisoner's Dilemma.  Although you played this game with each other person in the class, this is still a 2 person game! "
},
{
  "id": "E_CWPDreasons",
  "level": "2",
  "url": "S_CWPD.html#E_CWPDreasons",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "Reasons for choice.",
  "body": "Reasons for choice  What are some reasons people chose C? What are some reasons people chose D?  "
},
{
  "id": "E_CWPDrational",
  "level": "2",
  "url": "S_CWPD.html#E_CWPDrational",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "The rational choice.",
  "body": "The rational choice  Thinking about the idea of rationality , what appears to be the most rational choice, C or D? If everyone is equally rational, then what would everyone do? If everyone is equally rational, should everyone choose the same thing?  "
},
{
  "id": "E_CWPDsame",
  "level": "2",
  "url": "S_CWPD.html#E_CWPDsame",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "Everyone is rational.",
  "body": "Everyone is rational  Now suppose everyone is equally (and perfectly) rational. AND everyone knows that everyone else is equally (and perfectly) rational. What should everyone choose?  If everyone knows that everyone will choose the same answer, what should everyone choose to do? "
},
{
  "id": "E_PDvariant1",
  "level": "2",
  "url": "S_CWPD.html#E_PDvariant1",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "A game of cooperation and defection.",
  "body": "A game of cooperation and defection  Consider the game in    Matrix for     C  D    C  (3, 3)  (0, 50)    D  (50, 0)  (.01, .01)     What would you do? Why? What seems to be the most rational thing to do? Why?  "
},
{
  "id": "E_PDvariant2",
  "level": "2",
  "url": "S_CWPD.html#E_PDvariant2",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "Another game of cooperation and defection.",
  "body": "Another game of cooperation and defection  Consider the game in    Matrix for     C  D    C  (1000, 1000)  (0, 100)    D  (100, 0)  (100, 100)     What would you do? Why? What seems to be the most rational thing to do? Why?  "
},
{
  "id": "E_CWPDpayoffs",
  "level": "2",
  "url": "S_CWPD.html#E_CWPDpayoffs",
  "type": "Exercise",
  "number": "4.3.10",
  "title": "Motivation to cooperate or defect.",
  "body": "Motivation to cooperate or defect  Looking at all three of the above games, can you think of what sort of payoffs you would need in order to cooperate (C)? What about to defect (D)?  "
},
{
  "id": "S_PDconditions",
  "level": "1",
  "url": "S_PDconditions.html",
  "type": "Section",
  "number": "4.4",
  "title": "What Makes a Prisoner's Dilemma?",
  "body": " What Makes a Prisoner's Dilemma?  In this section we give a mathematical description of Prisoner's Dilemma and compare it to some similar games.  The Class-wide Prisoner's Dilemma game we played in has the payoff matrix given in for each pair of players.   A Class-wide Prisoner's Dilemma.      Player 2      Cooperate  Defect    Player 1  Cooperate       Defect       We can classify each of the values for the payoffs as follows:  Reward for Mutual Cooperation:   Punishment for Defecting:   Temptation to Defect:   Sucker's Payoff:     In order for a game to be a variation of Prisoner's Dilemma it must satisfy two conditions:          Let's apply this description of Prisoner's Dilemma to a few games we've seen. We can use the conditions to check if a game is really a Prisoner's Dilemma.  Description of conditions  Describe each of the conditions (A) and (B) in words.   is the average of and .  The conditions for Classwide Prisoner's Dilemma  Show that the two conditions hold for the Class-wide Prisoner's Dilemma.   The conditions for Prisoner's Dilemma  Recall the matrix for Prisoner's Dilemma from .   Prisoner's Dilemma (again).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess       Determine and for this game. Be careful: think about what cooperating versus defecting should mean. Show the conditions for Prisoner's Dilemma are satisfied.  Time in jail is bad, so the bigger the number, the worse you do; thus, it might be helpful to think of the payoffs as negatives.  The conditions for Chicken  Recall the matrix for Chicken from .   Chicken (again).      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight       Determine and for this game. Again, think about what cooperating and defecting mean in this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?   The conditions on another game  Consider the game:   Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?   A little more practice  Consider the game:   Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?   Compare the games  The games in , , and are not true Prisoner's Dilemmas. For each game, how do the changes in payoffs affect how you play? In particular, in Prisoner's Dilemma, a player will generally choose to defect. This results in a non-optimal payoff for each player. Is this still true in , , and ? If possible, use the changes in the conditions (A) and (B) to help explain any differences in how one should play.   We can now define defection defection as the idea that if everyone did it, things would be worse for everyone. Yet, if only one (or a small) number did it, life would be sweeter for that individual. We can define cooperation cooperation as the act of resisting temptation for the betterment of all players.  Example from real life  Give an example of defection and cooperation from real life.   "
},
{
  "id": "T_CWPD",
  "level": "2",
  "url": "S_PDconditions.html#T_CWPD",
  "type": "Table",
  "number": "4.4.1",
  "title": "",
  "body": " A Class-wide Prisoner's Dilemma.      Player 2      Cooperate  Defect    Player 1  Cooperate       Defect      "
},
{
  "id": "E_describeconditions",
  "level": "2",
  "url": "S_PDconditions.html#E_describeconditions",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "Description of conditions.",
  "body": "Description of conditions  Describe each of the conditions (A) and (B) in words.   is the average of and . "
},
{
  "id": "E_CWPDshow",
  "level": "2",
  "url": "S_PDconditions.html#E_CWPDshow",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "The conditions for Classwide Prisoner's Dilemma.",
  "body": "The conditions for Classwide Prisoner's Dilemma  Show that the two conditions hold for the Class-wide Prisoner's Dilemma.  "
},
{
  "id": "E_PDshow",
  "level": "2",
  "url": "S_PDconditions.html#E_PDshow",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "The conditions for Prisoner's Dilemma.",
  "body": "The conditions for Prisoner's Dilemma  Recall the matrix for Prisoner's Dilemma from .   Prisoner's Dilemma (again).      Prisoner 2      Confess  Don't Confess    Prisoner 1  Confess       Don't Confess       Determine and for this game. Be careful: think about what cooperating versus defecting should mean. Show the conditions for Prisoner's Dilemma are satisfied.  Time in jail is bad, so the bigger the number, the worse you do; thus, it might be helpful to think of the payoffs as negatives. "
},
{
  "id": "E_chickenshow",
  "level": "2",
  "url": "S_PDconditions.html#E_chickenshow",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "The conditions for Chicken.",
  "body": "The conditions for Chicken  Recall the matrix for Chicken from .   Chicken (again).      Driver 2      Swerve  Straight    Driver 1  Swerve       Straight       Determine and for this game. Again, think about what cooperating and defecting mean in this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?  "
},
{
  "id": "E_conditionspractice1",
  "level": "2",
  "url": "S_PDconditions.html#E_conditionspractice1",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "The conditions on another game.",
  "body": "The conditions on another game  Consider the game:   Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?  "
},
{
  "id": "E_conditionspractice2",
  "level": "2",
  "url": "S_PDconditions.html#E_conditionspractice2",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "A little more practice.",
  "body": "A little more practice  Consider the game:   Determine and for this game. Determine if the conditions for Prisoner's Dilemma are satisfied. If not, which condition(s) fail?  "
},
{
  "id": "E_conditionscompare",
  "level": "2",
  "url": "S_PDconditions.html#E_conditionscompare",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "Compare the games.",
  "body": "Compare the games  The games in , , and are not true Prisoner's Dilemmas. For each game, how do the changes in payoffs affect how you play? In particular, in Prisoner's Dilemma, a player will generally choose to defect. This results in a non-optimal payoff for each player. Is this still true in , , and ? If possible, use the changes in the conditions (A) and (B) to help explain any differences in how one should play.  "
},
{
  "id": "E_reallifeex",
  "level": "2",
  "url": "S_PDconditions.html#E_reallifeex",
  "type": "Exercise",
  "number": "4.4.11",
  "title": "Example from real life.",
  "body": "Example from real life  Give an example of defection and cooperation from real life.  "
},
{
  "id": "VDexperiment",
  "level": "1",
  "url": "VDexperiment.html",
  "type": "Section",
  "number": "4.5",
  "title": "Another Multiplayer Experiment",
  "body": " Another Multiplayer Experiment  This activity needs to be played as a class. All players need to be able to respond without being able to see the responses of others. Answers may be revealed before moving on to the next question.  Without sharing your answers with others, select your answer to the following questions. Try to be as honest about your answer as possible. Make sure you have a reason for each answer.   The lights go out in the neighborhood. Someone needs to call the power company. If someone calls, everyone's lights go on.   Call  Don't call    The same as in (1), but now you have to wait on hold for 5 minutes.  Call  Don't call    The same as in (1), but now you have to wait on hold for 30 minutes.  Call  Don't call    The same as in (1), but now you have to pay a $.50 service fee.  Call  Don't call    The same as in (1), but now you have to pay a $2.50 service fee.  Call  Don't call    The phone lines go down in your small mountain community. You have to hike 3 miles in the snow to notify the power company.  Hike to notify the phone company  Stay home and let someone else do the hiking    Everyone in your class cheats on an exam. The professor says if someone confesses they receive an F. If no one confesses, everyone fails.  Confess  Don't confess    Evil Dr. No captures the class and puts you in all in a shark tank separated so you can't communicate. If one person volunteers to be eaten then the rest go free. If no one volunteers after 10 minutes all get eaten by sharks.  Volunteer  Don't volunteer    Evil Dr. No captures your family and puts you in all in a shark tank separated so you can't communicate. If one person volunteers to be eaten then the rest go free. If no one volunteers after 10 minutes all get eaten by sharks.  Volunteer  Don't volunteer    For any Big Brother fans. Choose to eat all your favorite foods for a week or nasty slop for a week. If at least three people say slop, everyone gets what they asked for. Otherwise everyone is on slop.  Favorite foods  Slop    OK, now let's get serious about this. Answer 5 points or 1 point. If at least one person says 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  5 points  1 point    Answer 20 points or 1 point. If at least one person says 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  20 points  1 point    Answer 6 points or 5 points. If at least one person says 5 points, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  6 points  5 points    Answer 20 points or 1 point. If at least five people say 1 point, everyone gets the number of points they chose. Otherwise, everyone gets 0 points.  20 points  1 point      -  After answering the above questions and seeing the reponses from your classmates, think about how you responded. Did this differ from how your classmates responded? Try to give reasons for how you chose your responses to the above questions. Ask classmates for their reasons for responding as they did. It can be particularly useful to share your answers with someone who chose a different response from you. You can summarize the various reasons for voluteering and not volunteering in the exercises below.  Volunteer or not  After answering the questions, were you likely to volunteer or unlikely to volunteer? For example, were you likely to be the one to call the power company or get eaten by sharks, or were you generally hoping someone else would do it? If it depended on the situation, explain under what circumstances you were likely to volunteer.   Always a volunteer  After sharing your answers as a class, did each situation have a volunteer? In other words, was there always someone willing to call the power company or take fewer points? If there was a question with no volunteer, can you suggest why?   Unlikely to volunteer  For which questions was it unlikely that there would be very many volunteers? Did you take that into consideration when deciding if you were going to volunteer?   Reasons to volunteer  What are some reasons for volunteering? What are some reasons for not to volunteer?   "
},
{
  "id": "exercise-239",
  "level": "2",
  "url": "VDexperiment.html#exercise-239",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "Volunteer or not.",
  "body": "Volunteer or not  After answering the questions, were you likely to volunteer or unlikely to volunteer? For example, were you likely to be the one to call the power company or get eaten by sharks, or were you generally hoping someone else would do it? If it depended on the situation, explain under what circumstances you were likely to volunteer.  "
},
{
  "id": "exercise-240",
  "level": "2",
  "url": "VDexperiment.html#exercise-240",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "Always a volunteer.",
  "body": "Always a volunteer  After sharing your answers as a class, did each situation have a volunteer? In other words, was there always someone willing to call the power company or take fewer points? If there was a question with no volunteer, can you suggest why?  "
},
{
  "id": "exercise-241",
  "level": "2",
  "url": "VDexperiment.html#exercise-241",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "Unlikely to volunteer.",
  "body": "Unlikely to volunteer  For which questions was it unlikely that there would be very many volunteers? Did you take that into consideration when deciding if you were going to volunteer?  "
},
{
  "id": "exercise-242",
  "level": "2",
  "url": "VDexperiment.html#exercise-242",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "Reasons to volunteer.",
  "body": "Reasons to volunteer  What are some reasons for volunteering? What are some reasons for not to volunteer?  "
},
{
  "id": "S_VolunteerDil",
  "level": "1",
  "url": "S_VolunteerDil.html",
  "type": "Section",
  "number": "4.6",
  "title": "Volunteer's Dilemma",
  "body": " Volunteer's Dilemma  In we played a game called Volunteer's Dilemma Volunteer's Dilemma .   A Volunteer's Dilemma   One example of a Volunteer's Dilemma is the game where everyone chooses 1 point or 5 points. If at least one person writes down 1 point, then everyone gets the number of points they wrote down. If no one chooses 1 point, then everyone gets 0 points. Choosing 1 point is considered volunteering or cooperating. Choosing to not volunteer and take 5 points is defecting.  You should note that it is difficult to put this game into a matrix form since payoffs depend on whether there is at least one volunteer or cooperator.    In this section we will compare Class-wide Prisoner's Dilemma with Volunteer's Dilemma. In particular, we want to think about the effect cooperating and defecting have on the group of players. How does one player's choice affect everyone else? What happens to the group if there is a single cooperator or a single defector? What happens if everyone cooperates or everyone defects? We will use the payoffs for Prisoner's Dilemma from , given again in .   Class-wide Prisoner's Dilemma (again).      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect       Effect of a single defector in Class-wide Prisoner's Dilemma  In Class-wide Prisoner's Dilemma what effect does one defector have on the group? In other words, if a single player defects, how many points does he cost each of the other players?   Effect of everyone's defection in Class-wide Prisoner's Dilemma  In Class-wide Prisoner's Dilemma what effect does everyone's defection have on the group? In other words, what is the most points lost by the group if everyone defects?   Effect of your defection in Class-wide Prisoner's Dilemma  In Class-wide Prisoner's Dilemma what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?   Effect of a single defector in Volunteer's Dilemma  In Volunteer's Dilemma , with the payoffs given in , what effect does one defector have on the group? In other words, if there is a single defector, how many points do each of the other players lose?   Effect of everyone's defection in Volunteer's Dilemma  In Volunteer's Dilemma , with the payoffs given in , what effect does everyone's defection have on the group? In other words, if everyone defects, how many points does the group lose?   Effect of your defection in Volunteer's Dilemma  In Volunteer's Dilemma , with the payoffs given in , what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?   Now that we've considered how an individual decision can affect the group, we can think about what the most rational strategy is in a multiplayer Prisoner's Dilemma or a Volunteer's Dilemma.  Rationality in Class-wide Prisoner's Dilemma  Considering your answers above and to previous work with Prisoner's Dilemma, in Class-wide Prisoner's Dilemma , which is more rational to be a cooperator or a defector? Why?   Everyone is rational in Class-wide Prisoner's Dilemma  Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?   Rationality in Volunteer's Dilemma  Considering your answers above, in Volunteer's Dilemma , which is more rational to be a cooperator (volunteer) or a defector? Why?   Everyone is rational in Volunteer's Dilemma  Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?   Class-wide Chicken  Volunteer's Dilemma can also be called Class-wide Chicken. Try to describe this class-wide game in terms of swerving and going straight. How do the payoffs for Volunteer's Dilemma relate to the payoffs for Chicken?   Even though the Class-wide Prisoner's Dilemma and the Volunteer's Dilemma games were played with multiple players, each game was only played once. In the next section we look at what might happen if we repeatedly play Prisoner's Dilemma with the same opponent.  "
},
{
  "id": "E_VDpoints",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDpoints",
  "type": "Example",
  "number": "4.6.1",
  "title": "A Volunteer's Dilemma.",
  "body": " A Volunteer's Dilemma   One example of a Volunteer's Dilemma is the game where everyone chooses 1 point or 5 points. If at least one person writes down 1 point, then everyone gets the number of points they wrote down. If no one chooses 1 point, then everyone gets 0 points. Choosing 1 point is considered volunteering or cooperating. Choosing to not volunteer and take 5 points is defecting.  You should note that it is difficult to put this game into a matrix form since payoffs depend on whether there is at least one volunteer or cooperator.   "
},
{
  "id": "T_CWPD2",
  "level": "2",
  "url": "S_VolunteerDil.html#T_CWPD2",
  "type": "Table",
  "number": "4.6.2",
  "title": "",
  "body": " Class-wide Prisoner's Dilemma (again).      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect      "
},
{
  "id": "E_CWPDdefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_CWPDdefecteffect",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "Effect of a single defector in Class-wide Prisoner's Dilemma.",
  "body": "Effect of a single defector in Class-wide Prisoner's Dilemma  In Class-wide Prisoner's Dilemma what effect does one defector have on the group? In other words, if a single player defects, how many points does he cost each of the other players?  "
},
{
  "id": "E_CWPDalldefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_CWPDalldefecteffect",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "Effect of everyone's defection in Class-wide Prisoner's Dilemma.",
  "body": "Effect of everyone's defection in Class-wide Prisoner's Dilemma  In Class-wide Prisoner's Dilemma what effect does everyone's defection have on the group? In other words, what is the most points lost by the group if everyone defects?  "
},
{
  "id": "E_CWPDowndefect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_CWPDowndefect",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "Effect of your defection in Class-wide Prisoner's Dilemma.",
  "body": "Effect of your defection in Class-wide Prisoner's Dilemma  In Class-wide Prisoner's Dilemma what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?  "
},
{
  "id": "E_VDdefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDdefecteffect",
  "type": "Exercise",
  "number": "4.6.6",
  "title": "Effect of a single defector in Volunteer's Dilemma.",
  "body": "Effect of a single defector in Volunteer's Dilemma  In Volunteer's Dilemma , with the payoffs given in , what effect does one defector have on the group? In other words, if there is a single defector, how many points do each of the other players lose?  "
},
{
  "id": "E_VDalldefecteffect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDalldefecteffect",
  "type": "Exercise",
  "number": "4.6.7",
  "title": "Effect of everyone's defection in Volunteer's Dilemma.",
  "body": "Effect of everyone's defection in Volunteer's Dilemma  In Volunteer's Dilemma , with the payoffs given in , what effect does everyone's defection have on the group? In other words, if everyone defects, how many points does the group lose?  "
},
{
  "id": "E_VDowndefect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDowndefect",
  "type": "Exercise",
  "number": "4.6.8",
  "title": "Effect of your defection in Volunteer's Dilemma.",
  "body": "Effect of your defection in Volunteer's Dilemma  In Volunteer's Dilemma , with the payoffs given in , what effect could your own defection have on the group? In other words, how many points does the group lose if you defect instead of cooperate? You may need to consider different cases depending on how many cooperators there are. For example what if there are no cooperators? What if there are no defectors? What if there are some of each?  "
},
{
  "id": "E_CWPDcoopordefect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_CWPDcoopordefect",
  "type": "Exercise",
  "number": "4.6.9",
  "title": "Rationality in Class-wide Prisoner's Dilemma.",
  "body": "Rationality in Class-wide Prisoner's Dilemma  Considering your answers above and to previous work with Prisoner's Dilemma, in Class-wide Prisoner's Dilemma , which is more rational to be a cooperator or a defector? Why?  "
},
{
  "id": "E_CWPDallrational",
  "level": "2",
  "url": "S_VolunteerDil.html#E_CWPDallrational",
  "type": "Exercise",
  "number": "4.6.10",
  "title": "Everyone is rational in Class-wide Prisoner's Dilemma.",
  "body": "Everyone is rational in Class-wide Prisoner's Dilemma  Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?  "
},
{
  "id": "E_VDcoopordefect",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDcoopordefect",
  "type": "Exercise",
  "number": "4.6.11",
  "title": "Rationality in Volunteer's Dilemma.",
  "body": "Rationality in Volunteer's Dilemma  Considering your answers above, in Volunteer's Dilemma , which is more rational to be a cooperator (volunteer) or a defector? Why?  "
},
{
  "id": "E_VDallrational",
  "level": "2",
  "url": "S_VolunteerDil.html#E_VDallrational",
  "type": "Exercise",
  "number": "4.6.12",
  "title": "Everyone is rational in Volunteer's Dilemma.",
  "body": "Everyone is rational in Volunteer's Dilemma  Whichever strategy you chose in , explain what would happen if everyone was the most rational. Is it now more rational to do the opposite?  "
},
{
  "id": "E_classchicken",
  "level": "2",
  "url": "S_VolunteerDil.html#E_classchicken",
  "type": "Exercise",
  "number": "4.6.13",
  "title": "Class-wide Chicken.",
  "body": "Class-wide Chicken  Volunteer's Dilemma can also be called Class-wide Chicken. Try to describe this class-wide game in terms of swerving and going straight. How do the payoffs for Volunteer's Dilemma relate to the payoffs for Chicken?  "
},
{
  "id": "S_RepeatPD",
  "level": "1",
  "url": "S_RepeatPD.html",
  "type": "Section",
  "number": "4.7",
  "title": "Repeated Prisoner's Dilemma",
  "body": " Repeated Prisoner's Dilemma  In this section we look at two players playing Prisoner's Dilemma repeatedly. We call this game an iterated Prisoner's Dilemma iterated Prisoner's Dilemma . Recall the general Prisoner's Dilemma matrix from previous sections, given again in .   A Prisoner's Dilemma matrix.      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect       Before playing the iterated version, think about how you would play the above game if you only play it once with an opponent. But let's also give the game some context as in the following exercise.  A single internet purcase  Suppose the above matrix represents the situation of purchasing an item (say, a used textbook) on the internet where both parties are untraceable. You agree to send the money at the same time that the seller agrees to send the book. Then we can think of Cooperating as each of you sending money\/ book, and Defecting as not sending money\/ book. Why might a player Cooperate? Why might a player Defect?   Repeated internet purchases  Now suppose you wish to continue to do business with the other party. For example, instead of buying a used textbook, maybe you are buying music downloads. Why might a player cooperate? Why might a player defect? Do these resons differ from your reasons in ?   It is possible that your answers to the above questions depended on the context, so let's go back to just thinking about the game as a simple matrix game. Think about how you played the Class-wide Prisoner's Dilemma, but now think about repeating the game several times with the same player. Do you think your strategy would change? Remember, if we repeat the game we are not restricted to playing a pure strategy.  Strategy for repeated Prisoner's Dilemma  Suggest a strategy for playing the Prisoner's Dilemma in repeatedly. DON'T SHARE YOUR STRATEGY WITH ANYONE YET!   Now let's see how your strategy works by actually playing the game several times.  Play Prisoner's Dilemma repeatedly  Play 10 rounds of Prisoner's Dilemma with someone in class. Use your suggested strategy. Keep track of the payoffs. Did your strategy seem effective? What should it mean to have an effective strategy?   We are now going to play a Prisoner's Dilemma Tournament! Several strategies are suggested below. Choose one of the strategies below (or keep playing with your own strategy). You are to play your strategy against everyone else in the class. Keep a running total of your score. Don't tell your opponents your strategy.  Some possible strategies:  Strategy: Defection. Your strategy is to always choose DEFECT (D).  Strategy: Cooperation. Your strategy is to always choose COOPERATE (C).  Strategy: Tit for Tat. Tit for Tat strategy Your strategy is to play whatever your opponent just played. Your first move is to COOPERATE (C), but then you need to repeat your opponent's last move.  Strategy: Tit for Two Tats. Your strategy is to COOPERATE (C) unless your opponent DEFECTS twice in a row. After two D's you respond with D.  Strategy: Random (1\/2, 1\/2). Your strategy is to COOPERATE (C) randomly 50% of the time and DEFECT (D) 50% of the time. [Note: it will be hard to be truly random, but try to play each option approximately the same amount.]  Strategy: Random (3\/4, 1\/4). Your strategy is to COOPERATE (C) randomly 75% of the time and DEFECT (D) 25% of the time. [Note: it will be hard to be truly random, but try to play C more often than D.]  Strategy: Random (1\/4, 3\/4). Your strategy is to COOPERATE (C) randomly 25% of the time and DEFECT (D) 75% of the time. [Note: it will be hard to be truly random, but try to play D more often than C.]  Strategy: Tit for Tat with Occasional Surprise D. Your strategy is to play whatever your opponent just played. Your first move is to COOPERATE (C), but then you need to repeat your opponent's last move. Occasionally, you will deviate from this strategy by playing D.    A Prisoner's Dilemma tournament  WITHOUT SHARING YOUR STRATEGY, play Prisoner's Dilemma 10 times with each of the other members of the class. Keep track of the payoffs for each game and your total score.   After playing Repeated Prisoner's Dilemma as a class, can you determine who used which strategy? At this point you may share your strategy with others. Was your strategy more effective with some strategies than with others? If some of the above strategies were not used, can you guess how your strategy would have done against them?  Effectiveness of your strategy  Describe which opponents' strategies seemed to give you more points, which seemed to give you fewer?   Winning strategies  Describe the strategy or strategies that had the highest scores in the tournament. Does this seem surprising? Why or why not? How do the winning strategies compare to the strategy you suggested in ?   What strategies seem the most rational? Are pure strategies the most rational? Does it depend on what sort of strategy your opponent is playing?  Rationality in repeated Prisoner's Dilemma  How does Repeated Prisoner's Dilemma differ from the one-time Prisoner's Dilemma? Try to think in terms of rational strategies.   As suggests we can think of real-life interactions that can be modeled as a Prisoner's Dilemma.  Example of Repeated Prisoner's Dilemma in real life  Describe a situation from real life that resembles a Repeated Prisoner's Dilemma.   Repeated or Iterated Prisoner's Dilemma has applications to biology and sociology. If you think of higher point totals as success as a species in biology or success of a society in sociology, we can try to determine which strategies seem the most effective or successful. Individuals do not need the highest point total to be successful, but low point totals will not succeed. Just like grades in a course, you don't need the highest score to pass a class, but very bad scores will fail. In order to model the situation of a society, think about what happens to defectors in a society of cooperators or cooperators in a society of defectors. Who will be able to succeed?  Only a few defectors  How do a few defectors fare in a society of mostly cooperators? How do the cooperators fare? (In other words, who will be more successful?) Keep in mind that everyone is playing with lots of cooperators and only a few defectors. Who will have the most points, cooperators or defectors?   Only a few cooperators  How do a few cooperators fare in a society of mostly defectors? How do the defectors fare? (In other words, who will be more successful?) Keep in mind that everyone is playing with lots of defectors and only a few cooperators. Who will have the most points, cooperators or defectors?   After thinking about individuals in a society playing pure strategies, what happens to individiuals who are playing some of the mixed strategies listed above?  A society of TIT-FOR-TATers  Now consider a society of mostly TIT-FOR-TATers. How do a few defectors fare in a society of mostly TIT-FOR-TATers? How do the TIT-FOR-TATers fare? How would a few cooperators fare with the TIT-FOR-TATers? Would the evolution of such a society favor cooperation or defection?   The TIT-FOR-TAT strategy is particularly interesting in an iterated Prisoner's Dilemma. It has a few special characteristics that lead to success. First it is responsive in that it responds to the strategy of the other player. If the other player is cooperating, the TIT-FOR-TAT strategy will be able to gain the 3 points on each round. If the other player is defecting, it will defect so as to not keep getting the sucker's payoff of 0. The random strategies and pure strategies, for example, are not responsive. They do not respond to how the other player is playing. Chances are when you played in the tournament, you wanted to be able to adapt your strategy to respond to how your opponent was playing.  The TIT-FOR-TAT strategy is also nice in that it starts by cooperating. If it meets another cooperator it will continue to cooperate. If the opponent at some point begins cooperating, it will, too. However, it is also unexploitable . This means that a defector cannot take advantage of the niceness. It punishes any defection with an in-kind defection.  The TIT-FOR-TAT behavior has been observed in some animal populations, but you also might be able to think of situations in your own life where you or your friends have employed such a strategy with each other! Has it been effective for you?  "
},
{
  "id": "T_CWPD3",
  "level": "2",
  "url": "S_RepeatPD.html#T_CWPD3",
  "type": "Table",
  "number": "4.7.1",
  "title": "",
  "body": " A Prisoner's Dilemma matrix.      Player 2      Cooperate  Defect    Driver 1  Cooperate       Defect      "
},
{
  "id": "E_internetpurchaseonce",
  "level": "2",
  "url": "S_RepeatPD.html#E_internetpurchaseonce",
  "type": "Exercise",
  "number": "4.7.2",
  "title": "A single internet purcase.",
  "body": "A single internet purcase  Suppose the above matrix represents the situation of purchasing an item (say, a used textbook) on the internet where both parties are untraceable. You agree to send the money at the same time that the seller agrees to send the book. Then we can think of Cooperating as each of you sending money\/ book, and Defecting as not sending money\/ book. Why might a player Cooperate? Why might a player Defect?  "
},
{
  "id": "E_internetpurchaserepeat",
  "level": "2",
  "url": "S_RepeatPD.html#E_internetpurchaserepeat",
  "type": "Exercise",
  "number": "4.7.3",
  "title": "Repeated internet purchases.",
  "body": "Repeated internet purchases  Now suppose you wish to continue to do business with the other party. For example, instead of buying a used textbook, maybe you are buying music downloads. Why might a player cooperate? Why might a player defect? Do these resons differ from your reasons in ?  "
},
{
  "id": "E_RPDstrategy",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDstrategy",
  "type": "Exercise",
  "number": "4.7.4",
  "title": "Strategy for repeated Prisoner's Dilemma.",
  "body": "Strategy for repeated Prisoner's Dilemma  Suggest a strategy for playing the Prisoner's Dilemma in repeatedly. DON'T SHARE YOUR STRATEGY WITH ANYONE YET!  "
},
{
  "id": "E_RPDplay",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDplay",
  "type": "Exercise",
  "number": "4.7.5",
  "title": "Play Prisoner's Dilemma repeatedly.",
  "body": "Play Prisoner's Dilemma repeatedly  Play 10 rounds of Prisoner's Dilemma with someone in class. Use your suggested strategy. Keep track of the payoffs. Did your strategy seem effective? What should it mean to have an effective strategy?  "
},
{
  "id": "p-847",
  "level": "2",
  "url": "S_RepeatPD.html#p-847",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Defection. Cooperation. Tit for Tat. Tit for Two Tats. Random (1\/2, 1\/2). Random (3\/4, 1\/4). Random (1\/4, 3\/4). Tit for Tat with Occasional Surprise D. "
},
{
  "id": "E_RPDplaytournament",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDplaytournament",
  "type": "Exercise",
  "number": "4.7.6",
  "title": "A Prisoner's Dilemma tournament.",
  "body": "A Prisoner's Dilemma tournament  WITHOUT SHARING YOUR STRATEGY, play Prisoner's Dilemma 10 times with each of the other members of the class. Keep track of the payoffs for each game and your total score.  "
},
{
  "id": "E_RPDeffectivestrategies",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDeffectivestrategies",
  "type": "Exercise",
  "number": "4.7.7",
  "title": "Effectiveness of your strategy.",
  "body": "Effectiveness of your strategy  Describe which opponents' strategies seemed to give you more points, which seemed to give you fewer?  "
},
{
  "id": "E_RPDbeststrategies",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDbeststrategies",
  "type": "Exercise",
  "number": "4.7.8",
  "title": "Winning strategies.",
  "body": "Winning strategies  Describe the strategy or strategies that had the highest scores in the tournament. Does this seem surprising? Why or why not? How do the winning strategies compare to the strategy you suggested in ?  "
},
{
  "id": "E_RPDcompare",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDcompare",
  "type": "Exercise",
  "number": "4.7.9",
  "title": "Rationality in repeated Prisoner's Dilemma.",
  "body": "Rationality in repeated Prisoner's Dilemma  How does Repeated Prisoner's Dilemma differ from the one-time Prisoner's Dilemma? Try to think in terms of rational strategies.  "
},
{
  "id": "E_RPDreallife",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDreallife",
  "type": "Exercise",
  "number": "4.7.10",
  "title": "Example of Repeated Prisoner's Dilemma in real life.",
  "body": "Example of Repeated Prisoner's Dilemma in real life  Describe a situation from real life that resembles a Repeated Prisoner's Dilemma.  "
},
{
  "id": "E_RPDfewdefect",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDfewdefect",
  "type": "Exercise",
  "number": "4.7.11",
  "title": "Only a few defectors.",
  "body": "Only a few defectors  How do a few defectors fare in a society of mostly cooperators? How do the cooperators fare? (In other words, who will be more successful?) Keep in mind that everyone is playing with lots of cooperators and only a few defectors. Who will have the most points, cooperators or defectors?  "
},
{
  "id": "E_RPDfewcoop",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDfewcoop",
  "type": "Exercise",
  "number": "4.7.12",
  "title": "Only a few cooperators.",
  "body": "Only a few cooperators  How do a few cooperators fare in a society of mostly defectors? How do the defectors fare? (In other words, who will be more successful?) Keep in mind that everyone is playing with lots of defectors and only a few cooperators. Who will have the most points, cooperators or defectors?  "
},
{
  "id": "E_RPDtft",
  "level": "2",
  "url": "S_RepeatPD.html#E_RPDtft",
  "type": "Exercise",
  "number": "4.7.13",
  "title": "A society of TIT-FOR-TATers.",
  "body": "A society of TIT-FOR-TATers  Now consider a society of mostly TIT-FOR-TATers. How do a few defectors fare in a society of mostly TIT-FOR-TATers? How do the TIT-FOR-TATers fare? How would a few cooperators fare with the TIT-FOR-TATers? Would the evolution of such a society favor cooperation or defection?  "
},
{
  "id": "S_PopPD",
  "level": "1",
  "url": "S_PopPD.html",
  "type": "Section",
  "number": "4.8",
  "title": "Popular Culture: Prisoner's Dilemma and Chicken",
  "body": " Popular Culture: Prisoner's Dilemma and Chicken   popular culture   In this section, we will look at applications of Prisoner's Dilemma Prisoner's Dilemma and Chicken Chicken in popular culture.  The movie Return to Paradise Return to Paradise (1998) explores a Prisoner's Dilemma throughout the film. The two main characters, Tony and Sheriff, must decide if they will cooperate by returning to Malaysia to serve time in prison, or defect by not returning to Malaysia. If both defect, their friend will die in prison. If both cooperate, their friend will be released and they will each serve short sentences.   Give a payoff matrix to model the Prisoner's Dilemma in the film. By the end of the film have the payoffs changed? Is it still a Prisoner's Dilemma? Explain.    In the classic Prisoner's Dilemma, communication is not allowed between the players. In the film, Tony and Sheriff can communicate all they want. How does this communication impact the Prisoner's Dilemma. Does it help or hinder their choice of strategy? Explain.   The movie Rebel Without a Cause Rebel Without a Cause (1955) contains an iconic Chicken scene, in which the two characters race towards a cliff. The last one to jump out of his car is declared the winner.   Does Jim win or lose the game of Chicken? Explain your answer.    The movie Footloose Footloose (1984) also has a Chicken scene (this time with tractors). Compare the Chicken scenes in Rebel and Footloose . Is the Chicken game used similarly in each? In both scenes, one player has no choice of strategy. Why might the writer have made this choice in each of these films?   Now try to apply the ideas of rationality and perfect information to your own popular culture examples.   Suppose players are allowed to communicate in a Prisoner's Dilemma. Explain the relationship between trust and communication in a Prisoner's Dilemma. Give an example from a film demonstrating the relationship.    Why might a writer include a Chicken scene in a film? What key attributes might the director be trying to display about the winner of Chicken and the loser? Use an example from popular culture to demonstrate your answer.    One of the interesting comparisons between Prisoner's Dilemma ad Chicken is that in a Prisoner's Dilemma is with their equilibrium points. Players in a Prisoner's Dilemma can reach an equilibrium point if they play the same way. Players in a Chicken game can reach an equilibrium if they choose different strategies. Find examples of how these games are used in popular culture to emphasize differences between characters.   "
},
{
  "id": "question-9",
  "level": "2",
  "url": "S_PopPD.html#question-9",
  "type": "Question",
  "number": "4.8.1",
  "title": "",
  "body": " Give a payoff matrix to model the Prisoner's Dilemma in the film. By the end of the film have the payoffs changed? Is it still a Prisoner's Dilemma? Explain.  "
},
{
  "id": "question-10",
  "level": "2",
  "url": "S_PopPD.html#question-10",
  "type": "Question",
  "number": "4.8.2",
  "title": "",
  "body": " In the classic Prisoner's Dilemma, communication is not allowed between the players. In the film, Tony and Sheriff can communicate all they want. How does this communication impact the Prisoner's Dilemma. Does it help or hinder their choice of strategy? Explain.  "
},
{
  "id": "question-11",
  "level": "2",
  "url": "S_PopPD.html#question-11",
  "type": "Question",
  "number": "4.8.3",
  "title": "",
  "body": " Does Jim win or lose the game of Chicken? Explain your answer.  "
},
{
  "id": "question-12",
  "level": "2",
  "url": "S_PopPD.html#question-12",
  "type": "Question",
  "number": "4.8.4",
  "title": "",
  "body": " The movie Footloose Footloose (1984) also has a Chicken scene (this time with tractors). Compare the Chicken scenes in Rebel and Footloose . Is the Chicken game used similarly in each? In both scenes, one player has no choice of strategy. Why might the writer have made this choice in each of these films?  "
},
{
  "id": "question-13",
  "level": "2",
  "url": "S_PopPD.html#question-13",
  "type": "Question",
  "number": "4.8.5",
  "title": "",
  "body": " Suppose players are allowed to communicate in a Prisoner's Dilemma. Explain the relationship between trust and communication in a Prisoner's Dilemma. Give an example from a film demonstrating the relationship.  "
},
{
  "id": "question-14",
  "level": "2",
  "url": "S_PopPD.html#question-14",
  "type": "Question",
  "number": "4.8.6",
  "title": "",
  "body": " Why might a writer include a Chicken scene in a film? What key attributes might the director be trying to display about the winner of Chicken and the loser? Use an example from popular culture to demonstrate your answer.  "
},
{
  "id": "question-15",
  "level": "2",
  "url": "S_PopPD.html#question-15",
  "type": "Question",
  "number": "4.8.7",
  "title": "",
  "body": " One of the interesting comparisons between Prisoner's Dilemma ad Chicken is that in a Prisoner's Dilemma is with their equilibrium points. Players in a Prisoner's Dilemma can reach an equilibrium point if they play the same way. Players in a Chicken game can reach an equilibrium if they choose different strategies. Find examples of how these games are used in popular culture to emphasize differences between characters.  "
},
{
  "id": "references-1",
  "level": "1",
  "url": "references-1.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Roy Gardner, Games for Business and Economics , Wiley, 2003.  Douglas Hofstadter, Metamagical Themas: Questing for the Essence of Mind and Pattern , Basic Books, 1985.  Jennifer Nordstrom, Battles of Wits and Matters of Trust: Game Theory in Popular Culture , Mathematics and Popular Culture: Essays on Appearances in Film, Fiction, Games, Television and Other Media , eds. E. Sklar and J. Sklar, McFarland, 2012, pp. 86-98.  William Poundstone, Prisoner's Dilemma: John von Neumann, Game Theory, and the Puzzle of the Bomb , Anchor Books, 1993.  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This text was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
