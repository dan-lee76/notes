# Functional language
`++` - Appends list together
`:` - Takes single item(number) and moves it into the list. Can also be used to break apart the list.

# The Standard Prelude
- `head` - Select first number of list
- `tail` - Remove the first element
- `!!` - (Bang) Select the nth element of a list
- `take` - Select the first n elements of a list
- `drop` - Removes the first n elements
- `length` - calculate the length of the list
- `sum` - Calculate the sum of a list of numbers. Returns 0 if list is empty
- `product` - Calculate the product of the list. Returns 1 if list is empty 
- `reverse` - Reverses a list
## Function Application
- Function application is assumed to have higher priority than all other operators
- Means haskell does `(f a) + b` rather than `f(a+b)`
- **Naming Requirements**: Function and argument names must begin with a lowercase. By convention list arguments usually have an *s* suffix on their name.
- **Layout Rule**: Each definition must begin in precisely the same column. Don't have to use specific grouping such as `{}`.

# Types and Classes
Type error - Applying a function to one or more arguments of the wrong type
## Types
- Expression `e` would produce a value of type `t`. `e :: t`
- **Type Interface** - Calculates the type of any expression.
- Have `Bool`, `Char`, `String`, `Int`, `Float`
- **List Types** - `[t]` is the type of lists with elements of type `t`. This says nothing about its length.
- **Heterogeneous** - Can only contain elements of the same type
- **Tuple Types** - Sequence of values of different types. The type of a tuple encodes its size and the components are unrestricted.
- **Function Types** - Mapping from values of one type to values of another type. `even :: Int -> Bool`.
- **Curried Functions** -  Functions with multiple arguments are also possible by returning functions as results. These are functions which take them one at a time (*add* and *add`* are different). More useful than functions on typles.
- **Currying Contentions** - `->` associates to the right. `mult x y z` means `(mul x) y) z`
- **Polymorphic Functions** - (Of many forms) if its type contains or more type variables.
  - Type variables must begin with a lower-case letter, usually named a,b,c
  - *Polymorphic*: This type has a type variable such as 'a'
  - *Instantiate*: Process of making an instance of an object using the class definition
- **Overloaded Functions** - Polymorphic function is called overloaded if its type contains one or more class constraints. 3 Types classes `Num` (Numeric types), `Eq` (Equal types), `Ord` (Ordered types)

# Defining Functions
- **Conditional Expressions** - Must always have an else branch
```haskell
signum :: Int -> Int
signum n = if n < 0 then -1 else
			if n == 0 then 0 else 1
```
- **Guarded Equations** - `|` means such that
 ```haskell
abs n | n >= 0	= n
			| otherwise = n
```
- **Pattern Matching** - `_` is a while card that matches any argument. Patterns are matched in order. Patterns must not repeat variables
```haskell
not :: Bool -> Bool
not False = True
not True = False
```
- **List Patterns** - Patterns must be parenthesised because application has priority over (:). (DOUBLE CHECK THIS)
- **Lambda Expressions** - `\.` Constructed without naming the functions by using lambda expressions. Nameless funciton that takes a number x and returns the result x+x
  - *Usefulness*: Used to give formal mean to functions defined using currying. This can be used to avoid naming functions that are only referenced once.
- **Operator Sections** - An operator written between its two arguments can be converted into a curried function written before its two arguments by using parentheses. (DOUBLE CHECK THIS)


# List Comprehensions
- **Set Comprehensions** - Comprehension notation can be used to construct new sets from old sets. `[x^2 | x <- [1..5]]`. Changing the order of the generators changes the order of the elements in the final list. Multiple generators are like nested loops.
- **Dependant Generators** - Depend on the variables that are introduced by earlier generators
- **Guards** - Use guards to restrict the values produced by earlier generators. Can define a function that maps a positive integer to its list of factors. `[x | x <- [1..10], even x]`.
- **zip function** - Maps two lists to a list of pairs of their corresponding elements. Can define a function that returns the list of all positions of a value in a list. `zip :: [a] -> [b] -> [(a,b)]`
- **String comprehensions** - Any polymorphic function that operates on lists can also be applied to strings. List comprehensions can also work with them.
# Recursive Functions
- **Recursive Functions** - Can also be defined in terms of themselves
- Some are simpler to define in terms of other functions but many can naturally be defined in terms of themselves.
- Use of inductions can be applied to create a function
- Recursion not restricted to numbers, can also be used to define functions on lists.
- Functions with more than one argument can also be defined using recursion

# Higher-Order functions
- Function is higher-order if it takes a function as an argument or returns a function as a result.
- Useful:
	- **Common programming idioms**: Can be encoded as functions within the language itself
	- **Domain specific language**: Can be defined as collections of higher-order functions
	- **Algebraic Properties**: Of higher-order functions can be used to reason about programs.
- `twice`, `map`, `filter`, all examples of higher-order functions 
## Foldr Function
Functions on lists can be defined using the following simple pattern of recursion (primitive recursion).
```haskell
f [] = v
f (x:xs) = x ? f xs
```
 `foldr` (fold right) - encapsulates this simple pattern of recursion with the function ? and the value v as arguments. This takes care of all the recursion.
 - Think `foldr` non-recursively, as simultaneously replaced each (:) in a list by a given function, and [] by a given value. This can be used to define many more functions than might first be expected
 - **Foldr** - Building a function that does the matching and the recursion
 - Why its useful:
	 - Some recursive functions, like sum, are simpler to define using foldr
	 - Functions defined using foldr can be proved using algebraic properties of foldr, such as fusion and the banna split rule? (CHECK THIS)
	 - Advanced optimisations can be simplest if foldr is used in place of explicit recursion
## Other Library Functions
- `.` - returns the composition of two functions as a single function
- `all` - decides if every element of a list satisfies a given predicate
- `any` - decides if at least one element of a list satisfies a predicate
- `takeWhile` - selects elements from a list while a predicate holds all the elements
- `dropWhile` - removes elements while a predicate holds of all the elements
# Declaring Types and Classes
- These can be used to make other types easier to read; `type String = [Char]`
- Like function definitions, can also have parameters;`type Pair a = (a,a)`
- Can be nested but never recursive
## Data Declarations
- Can be defined by specifying its values using a data declaration;  `data Bool = False | True`.
- Values of new types can be used in the same ways as those build in types. Type and constructor names bust always begin with an upper-case letter
- The constructor can also have parameters; `Rect :: Float -> Float -> Shape`
## Recursive Types
- Be declared in terms of themselves; `data Nat = Zero | Succ Nat`
- Using recursion is easier to define functions that convert between values of type Nat and Int. Function can be defined without the need for conversions
## Arithmetic Expressions
- Simple form of expressions build up from integers using addition and multiplication. 
- Many functions on expressions can be defined by replacing the constructors by other functions using a suitable fold function. `eval = folde id (+) (*)`
# Interactive Programming
- Haskell programs have no side effects, however interactive programs have side effects.
- Can be written in Haskell by using types to distinguish pure expressions from impure actions that may involve side effects.
- `IO a` - Returns the value of type a
- `getChar` Adjugate - Reads a character from the keyboard, echos it to screen and returns it as a result
- `putChar c` -  Writes the character c to the screen and returns no result value
- `return v` - Returns the value v without performing any interaction.
- `do` - Combine a sequence of actions
- `getLine` - Reads an entire string, Haskell reads each character one by one, returns it as a list.
- `putStr` - Writes a string to the screen
- `putStrLn` - Writes a string and moves to new line
- Evaluating an action executes its side effects, with the final result value being discarded
# Lazy Evaluation
- Avoids doing unnecessary evaluation. Two main strategies for deciding which reducible expression (redex) to consider next.
- Choose a main redex that is innermost, does not contain another redex
- Choose a redex that is outermost, not contained in another redux.
- Outermost evaluation may give a result when innermost fails to terminate.
- Lazy evaluation = outermost evaluation + sharing of arguments.
- Lazy Evaluation ensures termination whenever possible, but never requires more steps than innermost evaluation, sometimes fewer.
- In general, they are only evaluated as much as required by the context in which they are used.
- **Modular Programming** - Allows us to make programs more modular by separating control from data. Without using this, the control and data parts would need to be combined into one