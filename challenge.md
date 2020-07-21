<!-- @format -->

# Treasury Prime Quiz challenge

Below are 6 questions on the Treasury Prime Technical Quiz.

Please email back when done. Here are the ground rules:

- Try to keep your answers brief.
- The quiz is open book, open internet, but no other collaboration is allowed.
- Please don't post the questions or answers on the public internet - for example, don't put it on a public github repo.
- You may use any programming languages (e.g. C, Ruby, Java, Clojure, etc) you wish to illustrate your answers.
- You can do it all in one language, or many.
- It's important that you answer all the questions correctly.

Good Luck!

1. Given a one dimensional array of data write a function that returns a new array with the data reversed. Don't just use the reverse function that is built into your environment.

2. Write a quick and dirty program (not just a standalone function) to print a count of all the different "words" in a text file. Use any definition of word that makes logical sense or makes your job easy.

The output should be sorted like this:

```
17 a
14 the
9 of
9 in
8 com
7 you
7 that
7 social
6 to
```

For this input file, the word "a" occurred 17 times, "the" 14 times, etc.

3. Write a function that returns M random non-negative integers less than some value N. Each integer must also be unique.

4. Given a one dimensional array of data write a function that return M random elements of that array. Each element must also be from a different position in the array. Don't just use the sample function that is built into your environment.

5. Briefly describe how a DNS server works.

6. Consider a directed graph of small non-negative integers where each integer is less than 60,000 and each integer is unique. In this case, a directed graph is a data structure where a node is represented by a unique integer and each node has zero or more child nodes. As above, don't just use an existing graph library.

- Write a function that creates a node in a graph.
- Write a function that inserts a node as a child of another node.
- These functions should not allow cycles to be created. That is, a node may not directly or indirectly point to itself.
- Write a function to print out a graph

Here is a simple example graph without cycles:

```
1 -> 2, 3, 4
2 -> 5
3 -> 6
4 -> 3, 6
5 -> 6
6 -> No children
```
