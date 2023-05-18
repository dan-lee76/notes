# Revision

## Random YTube video

```haskell
-- Functor is a TYPECLASS, can think it as an interface
-- functor takes in a function and applies it to a type


-- class Functor f where
--     fmap :: (a -> a) -> f a -> f b

data Maybe2 a = Just2 a | Nothing2 deriving Show

instance Functor Maybe2 where
    fmap f Nothing2 = Nothing2
    fmap f (Just2 a) = Just2 (f a)
    
-- Infix, inbetween <$> <- identical to fmap
-- (+3) <$> (Just 4) = fmap (+3) (Just 4)


data Tree a = Tip a | Branch (Tree a) (Tree a) deriving Show

instance Functor Tree where
    fmap f (Tip a) = Tip (f a)
    fmap f (Branch l r) = Branch (fmap f l) (fmap f r)
    -- could write in branch f' <$> l 


-- class Functor f => Applicative f where
--     pure :: a -> f a
--     (<*>) :: f (a -> b) -> f a -> f b

-- Applicative takes two types and does a function on them. Unwraps them

instance Applicative Maybe2 where
    pure = Just2
    -- Just 2 f <*> (Just2 j) = Just2 (f j)
    Just2 f <*> j = fmap f j -- fmap f (Just2 1)
    Nothing2 <*> _ = Nothing2


instance Applicative Tree where
    pure = Tip
    Tip f <*> t = fmap f t
    Branch l r <*> t = Branch (l <*> t) (r <*> t)

-- Functor adds by taking item wrapped out
-- Applicative, function is inside and doesnt need being wrapped out 

-- Monad, just like a functor and an applicative is a typeclass
-- Monad applies a function (regular function (+3) (*2)) to a wrapped
-- value and returns a wrapped value

-- (>>=) :: m a -> (a -> m b) -> m b

-- class Monad m where
--     -- bind / toilet plunger
--     (>>=) :: m a -> (a -> m b) -> m b
--     -- "m" = monad
--     -- m a = (Just2 4) 

instance Monad Maybe2 where -- will automaticaly return a monad and the type
    Nothing2 >>= f = Nothing2
    Just2 val >>= f = f val

g x | x == 4 = (Tip 99) | otherwise = Branch (Tip (x * 2)) (Tip (x*4))

instance Monad Tree where
    Tip a >>= f = f a
    Branch l r >>= f = Branch (l >>= f) (r >>= f)
```


## Reasoning about programs
### Exercise
```haskell
data Expr a = Var a | Val Int | Add (Expr a) (Expr a)

-- x+1
-- Add (Var 'x') (Val 1) :: Expr Char
-- Can represent the variable as different types, but can represent it as a monad

instance Monad Expr where
	-- return :: a -> Expr a
	return x = Var x
	-- (>>=) :: Exor a -> (a -> Expr b) -> Expr b
	(Var v) >>= f = f v
	(Val n) >>= f = Val n
	(Add x y) >>= f = Add (x >>= f) (y >>= f)

-- Can be used for subsitution

f :: Char -> Expr a
f 'x' = Add (Val 1) (Val 2)
f 'y' = Val 3

Add (Var 'x') (Var 'y') >>= f
= Add (Add (Val 1) (Val 2)) (Val 3)
```

1. How to do proofs about programs
2. How to improve program efficiency
3. Compiler Correctness
### Equational Reasoning
```haskell
double :: Int -> Int
double x = x + x

-- can freely replae x+x with double and vice versa
-- When doing equational reasoning, can replace the leftside with the rightside etc.
-- Can be either applied or unapplied

-- Need to be careful with ones which take in multiple defs

isZero :: Int -> Bool
isZero 0 = True
isZero n = False

-- First one can be used freely, but second one cannot be. Can be proved False = True

False
-- = False can be freely replaced with isZero n
isZero 0
-- = Can freely replace isZero 0 with True
True

-- Order of equations matter, should modify equation so its
isZero n | n /= 0 = False
-- Non as disjoin pattern or non overlapping.
```

## Inductive Case
### Example one
```haskell
P(n) => P(Succ n), i.e

-- Induction hypothesis
add n Zero = n => add (Succ n) Zero  = Succ n
--	(assume this)	(Prove this)       (With this)


add (Succ n) Zero
-- = applying add
Succ (add n Zero)
-- = induction hyp
Succ (n)
```

### Example: Show That
```haskell
add x (add y z) = add (add x y) z

-- x appears in the recurrsion position twice, y z once

P(x) ≡ add x (add y z) = add (add x y) z

-- Base Case:
-- P(Zero) 
add Zero (add y z) = add (add Zero y) z

add Zero (add y z)
-- = appling add
add y z
-- = cant progress, need to work backwards instead
-- = Unapply add
add (add Zero y) z

-- Inductive Case: 
-- P(x) => P(Succ x)
add x (add y z) = add (add x y) z => add (Succ x) (add y z) = add (add (Succ x) y) z

add (Succ x) (add y z)
-- = apply add
Succ (add x (add y z))
-- = apply hyp 
Succ (add (add x y) z)
-- = apply add
add (Succ (add x y)) z
-- = apply add
add (add (Succ x) y) z
```

### Example: Lists
```haskell
rev :: [a] -> [a]
rev [] = []
rev (x:xs) = rev xs ++ [x]
-- show that
rev (rev xs) = xs

-- Base Case:
rev (rev []) 
-- = trivial
rev []
[]

-- Inductive Case:
rev (rev xs) = xs => rev (rev (x:xs)) = x:xs

rev(rev(x:xs))
-- = rev tail etc
rev (rev xs ++ [x])
-- = Need distributivity lemma
rev [x] ++ rev (rev xs)
-- = singleton lemma
[x] ++ rev (rev xs)
-- apply hyp
[x] ++ xs
-- apply def of ++
x:xs

```

#### Distributivity Lemma
```haskell
rev (xs ++ ys) = rev ys ++ rev xs
```

#### Singleton list lemma
```haskell
rev [x] = [x]
```