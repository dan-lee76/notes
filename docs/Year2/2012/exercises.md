# Exercises

## 2.1
### Question
Let the alphabet $\Sigma=\{3,5,7,9\}$, and let the language L = {w | w ∈ Σ∗, 1 ≤ |w| ≤ 2}. (If w is a word, |w| denotes the length of that word. If X is a finite set, like an alphabet or finite language, |X| denotes the number of elements in that set, its cardinality.) Answer the following questions:  
1. Describe L in plain English.  
2. Enumerate all the words in L.  
3. In general, for an arbitrary alphabet Σ1 and 0 ≤ m ≤ n, how many words are there in the language L1 = {w | w ∈ Σ∗ 1, m ≤ |w| ≤ n}? That is, write down an expression for |L1|.  
4. How many words would there be in L1 if Σ1 = Σ, m = 3, and n = 7?
### Answer
1. For all words in which the length of the word is greater or equal to 1, and less than or equal to 2.
2. empty
3. $|L|=|\Sigma^1|+|\Sigma^2|$ <- Size of the given alphabet. $|L_1| = |\Sigma^m|+|\Sigma^{m+1}|+|\Sigma^{m+2}|+...+|\Sigma^{n}|$
4. 

## 2.2
### Question
Let the alphabet Σ = {a, b, c} and let L1 = {ε, b, ac} and L2 = {a, b, ca} be  
two languages over Σ. Enumerate the words in the following languages, showing  
your calculations in some detail:  
1. L3 = L1 ∪ L2  
2. L4 = L1{ε}(L2 ∩ L1)  
3. L5 = L3∅L4

### Answer
1. $L_3 = \{\in, b, ac, a, b, ca \}$
2. $L_4 = \{\in,b,ac\}\{\in\}(\{a,b,ca\}\cap\{\in,b,ac\})$ $\to$ $L_4 = \{\in,b,ac\}\{b\} = \{b,bb,acb\}$
3. $L_5 = \{\}$ -- Any language concatenated with the empty language will become the empty language

## 2.3
### Question
Let the alphabet Σ = {a, b, c} and let L1 = {ε, b, bb} and L2 = {a, ab, abc} be two languages over Σ. Enumerate the words in the following languages, showing your calculations in some detail:  
1. L3 = L1 ∩ L2  
2. L4 = (L2{ε}L1) ∩ Σ∗  
3. L5 = L3∅ ∩ L4

### Answer
1. $L_3 = \{L_1+L_2\} \to L_3 = \{\}$ -- Empty set as nothing is shared
2. $L_4 = (L_2L_1) \cap \Sigma^*$ $\to$ $L_3 = \{a,ab,abc,ab,abb,abcb,..., abcbb\}$
3. Empty set

## 2.4
### Quesiton
Let the alphabet Σ = {a, b, c}. Enumerate the words in  
L = {w | w ∈ {ε, a, b, bc}∗, |w| ≤ 3}

### Answer
Find all combinations up to the length 3
$\in, a,b,c,aa,ab,ac,ba,bb,bc,ca,cb,cc,aaa,aab,aac,aba,...,ccc$