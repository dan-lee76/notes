"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[6319],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>v});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),v=r,f=u["".concat(o,".").concat(v)]||u[v]||c[v]||s;return a?t.createElement(f,l(l({ref:n},d),{},{components:a})):t.createElement(f,l({ref:n},d))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22909:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const s={},l="Revision",i={unversionedId:"Year2/2003/revision",id:"Year2/2003/revision",title:"Revision",description:"Random YTube video",source:"@site/docs/Year2/2003/revision.md",sourceDirName:"Year2/2003",slug:"/Year2/2003/revision",permalink:"/Year2/2003/revision",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"13.  Making Append Vanish (2)",permalink:"/Year2/2003/13"},next:{title:"0.  Introduction",permalink:"/Year2/2006/00"}},o={},p=[{value:"Random YTube video",id:"random-ytube-video",level:2},{value:"Reasoning about programs",id:"reasoning-about-programs",level:2},{value:"Exercise",id:"exercise",level:3},{value:"Equational Reasoning",id:"equational-reasoning",level:3},{value:"Inductive Case",id:"inductive-case",level:2},{value:"Example one",id:"example-one",level:3},{value:"Example: Show That",id:"example-show-that",level:3},{value:"Example: Lists",id:"example-lists",level:3},{value:"Distributivity Lemma",id:"distributivity-lemma",level:4},{value:"Singleton list lemma",id:"singleton-list-lemma",level:4},{value:"Making Append Vanish - Fast Reverse",id:"making-append-vanish---fast-reverse",level:2},{value:"Example 2",id:"example-2",level:3}],d={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"revision"},"Revision"),(0,r.kt)("h2",{id:"random-ytube-video"},"Random YTube video"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- Functor is a TYPECLASS, can think it as an interface\n-- functor takes in a function and applies it to a type\n\n\n-- class Functor f where\n--     fmap :: (a -> a) -> f a -> f b\n\ndata Maybe2 a = Just2 a | Nothing2 deriving Show\n\ninstance Functor Maybe2 where\n    fmap f Nothing2 = Nothing2\n    fmap f (Just2 a) = Just2 (f a)\n    \n-- Infix, inbetween <$> <- identical to fmap\n-- (+3) <$> (Just 4) = fmap (+3) (Just 4)\n\n\ndata Tree a = Tip a | Branch (Tree a) (Tree a) deriving Show\n\ninstance Functor Tree where\n    fmap f (Tip a) = Tip (f a)\n    fmap f (Branch l r) = Branch (fmap f l) (fmap f r)\n    -- could write in branch f\' <$> l \n\n\n-- class Functor f => Applicative f where\n--     pure :: a -> f a\n--     (<*>) :: f (a -> b) -> f a -> f b\n\n-- Applicative takes two types and does a function on them. Unwraps them\n\ninstance Applicative Maybe2 where\n    pure = Just2\n    -- Just 2 f <*> (Just2 j) = Just2 (f j)\n    Just2 f <*> j = fmap f j -- fmap f (Just2 1)\n    Nothing2 <*> _ = Nothing2\n\n\ninstance Applicative Tree where\n    pure = Tip\n    Tip f <*> t = fmap f t\n    Branch l r <*> t = Branch (l <*> t) (r <*> t)\n\n-- Functor adds by taking item wrapped out\n-- Applicative, function is inside and doesnt need being wrapped out \n\n-- Monad, just like a functor and an applicative is a typeclass\n-- Monad applies a function (regular function (+3) (*2)) to a wrapped\n-- value and returns a wrapped value\n\n-- (>>=) :: m a -> (a -> m b) -> m b\n\n-- class Monad m where\n--     -- bind / toilet plunger\n--     (>>=) :: m a -> (a -> m b) -> m b\n--     -- "m" = monad\n--     -- m a = (Just2 4) \n\ninstance Monad Maybe2 where -- will automaticaly return a monad and the type\n    Nothing2 >>= f = Nothing2\n    Just2 val >>= f = f val\n\ng x | x == 4 = (Tip 99) | otherwise = Branch (Tip (x * 2)) (Tip (x*4))\n\ninstance Monad Tree where\n    Tip a >>= f = f a\n    Branch l r >>= f = Branch (l >>= f) (r >>= f)\n')),(0,r.kt)("h2",{id:"reasoning-about-programs"},"Reasoning about programs"),(0,r.kt)("h3",{id:"exercise"},"Exercise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Expr a = Var a | Val Int | Add (Expr a) (Expr a)\n\n-- x+1\n-- Add (Var 'x') (Val 1) :: Expr Char\n-- Can represent the variable as different types, but can represent it as a monad\n\ninstance Monad Expr where\n    -- return :: a -> Expr a\n    return x = Var x\n    -- (>>=) :: Exor a -> (a -> Expr b) -> Expr b\n    (Var v) >>= f = f v\n    (Val n) >>= f = Val n\n    (Add x y) >>= f = Add (x >>= f) (y >>= f)\n\n-- Can be used for subsitution\n\nf :: Char -> Expr a\nf 'x' = Add (Val 1) (Val 2)\nf 'y' = Val 3\n\nAdd (Var 'x') (Var 'y') >>= f\n= Add (Add (Val 1) (Val 2)) (Val 3)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How to do proofs about programs"),(0,r.kt)("li",{parentName:"ol"},"How to improve program efficiency"),(0,r.kt)("li",{parentName:"ol"},"Compiler Correctness")),(0,r.kt)("h3",{id:"equational-reasoning"},"Equational Reasoning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"double :: Int -> Int\ndouble x = x + x\n\n-- can freely replae x+x with double and vice versa\n-- When doing equational reasoning, can replace the leftside with the rightside etc.\n-- Can be either applied or unapplied\n\n-- Need to be careful with ones which take in multiple defs\n\nisZero :: Int -> Bool\nisZero 0 = True\nisZero n = False\n\n-- First one can be used freely, but second one cannot be. Can be proved False = True\n\nFalse\n-- = False can be freely replaced with isZero n\nisZero 0\n-- = Can freely replace isZero 0 with True\nTrue\n\n-- Order of equations matter, should modify equation so its\nisZero n | n /= 0 = False\n-- Non as disjoin pattern or non overlapping.\n")),(0,r.kt)("h2",{id:"inductive-case"},"Inductive Case"),(0,r.kt)("h3",{id:"example-one"},"Example one"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"P(n) => P(Succ n), i.e\n\n-- Induction hypothesis\nadd n Zero = n => add (Succ n) Zero  = Succ n\n--  (assume this)   (Prove this)       (With this)\n\n\nadd (Succ n) Zero\n-- = applying add\nSucc (add n Zero)\n-- = induction hyp\nSucc (n)\n")),(0,r.kt)("h3",{id:"example-show-that"},"Example: Show That"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"add x (add y z) = add (add x y) z\n\n-- x appears in the recurrsion position twice, y z once\n\nP(x) \u2261 add x (add y z) = add (add x y) z\n\n-- Base Case:\n-- P(Zero) \nadd Zero (add y z) = add (add Zero y) z\n\nadd Zero (add y z)\n-- = appling add\nadd y z\n-- = cant progress, need to work backwards instead\n-- = Unapply add\nadd (add Zero y) z\n\n-- Inductive Case: \n-- P(x) => P(Succ x)\nadd x (add y z) = add (add x y) z => add (Succ x) (add y z) = add (add (Succ x) y) z\n\nadd (Succ x) (add y z)\n-- = apply add\nSucc (add x (add y z))\n-- = apply hyp \nSucc (add (add x y) z)\n-- = apply add\nadd (Succ (add x y)) z\n-- = apply add\nadd (add (Succ x) y) z\n")),(0,r.kt)("h3",{id:"example-lists"},"Example: Lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev :: [a] -> [a]\nrev [] = []\nrev (x:xs) = rev xs ++ [x]\n-- show that\nrev (rev xs) = xs\n\n-- Base Case:\nrev (rev []) \n-- = trivial\nrev []\n[]\n\n-- Inductive Case:\nrev (rev xs) = xs => rev (rev (x:xs)) = x:xs\n\nrev(rev(x:xs))\n-- = rev tail etc\nrev (rev xs ++ [x])\n-- = Need distributivity lemma\nrev [x] ++ rev (rev xs)\n-- = singleton lemma\n[x] ++ rev (rev xs)\n-- apply hyp\n[x] ++ xs\n-- apply def of ++\nx:xs\n\n")),(0,r.kt)("h4",{id:"distributivity-lemma"},"Distributivity Lemma"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev (xs ++ ys) = rev ys ++ rev xs\n")),(0,r.kt)("h4",{id:"singleton-list-lemma"},"Singleton list lemma"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"rev [x] = [x]\n")),(0,r.kt)("h2",{id:"making-append-vanish---fast-reverse"},"Making Append Vanish - Fast Reverse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"(++) :: [a] -> [a] -> [a]\n[] ++ ys = ys\n(x:xs) ++ ys = x:(xs++ys)\n\nreverse : [a] -> [a]\nreverse [] = []\nreverse (x:xs) = reverse xs ++ [x]\n-- Reverse is a recursive function with using the append operator\n")),(0,r.kt)("p",null,"How many steps does an arbitrary append take?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- xs = [1,2]\n-- ys = [3]\n\n[1,2] ++ [3]\n1 : ([2]++[3])\n1:(2:([]++[3]))\n-- Base case applies\n1:2:[3]\n-- This ends up taking 3 steps\n\nxs ++ ys -- takes length xs +1 steps\n")),(0,r.kt)("p",null,"How many evaluation steps does reverse xs take?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"reverse [1,2]\n-- reverse tail of the list\nreverse [2] ++ [1]\n(reverse [] ++ [2]) ++ [1]\n-- Know how to reverse the base case\n([] ++ [2]) ++ [1]\n-- Reverse takes 3 evaluation steps\n-- Then takes 1 step for first appens, and 2 steps for the second append\n\nreverse xs -- takes steps, 1+2+(n+1) where n = length xs \n")),(0,r.kt)("p",null,"reverse with append take quadratic time."),(0,r.kt)("p",null,"Uses equational reasoning/ constructive induction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"reverse' xs ys = (reverse xs) ++ ys\n-- Specification for reverse'\n-- Has same effect has reverseing reverse xs and appending ys on it\n\n\n-- base case\nreverse' [] ys\n-- = apply specificaiton\n(reverse []) ++ ys\n-- = apply reverse\n[] ++ ys\n-- = apply ++\nys\n-- Base case for the recursive function of reverse'\n\nreverse' [] ys = ys\n\n-- inductive case\nreverse' (x:xs) ys\nreverse (x:xs) ++ ys\n-- = apply def of reverse\n(reverse xs ++ [x]) ++ ys\n-- = When got ++, exploit that its assciative\nreverse xs ++ ([x] ++ ys)\nreverse xs ++ (x:ys)\n-- = Apply induction hyp\nreverse' xs (x:ys)\n\nreverse' (x:xs) ys = reverse' xs (x:ys)\n\nreverse' :: [a] -> [a] -> [a]\nreverse' [] ys = ys\nreverse' (x:xs) ys = reverse' xs (x:ys)\n\nreverse :: -> [a] -> [a]\nreverse xs = reverse' xs []\n")),(0,r.kt)("p",null,"What will happen with the new def of reverse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"reverse [1,2,3]\nreverse' [1,2,3] []\nreverse' [2,3] [1]\nreverse' [3] [2,1]\nreverse' [] [3,2,1]\n[3,2,1]\n")),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Tree = Leaf Int | Node Tree Tree\nflatten :: Tree [Int]\nflatten (Leaf n) = [n]\nflatten (Node l r) = flatten l ++ flatten r\n\nflatten' t ns = flatten t ++ ns\n-- Specification\n\n-- Base Case\nflatten' (Leaf n) ns\n-- = apply specification\nflatten'(Leaf n) ++ ns\n[n] ++ ns\nn : ns\n\nflatten' (Leaf n) ns = n:ns\n\n-- Inductive Case\nflatten' (Node l r) ns\nflatten (Node l r) ++ ns\n(flatten l ++ flatten r) ++ ns\nflatten l ++ (flatten r ++ ns)\n-- apply hyp\nflatten l ++ (flatten' r ns)\n-- assume from hyp\nflatten' l (flatten' r ns)\n\n-- Answer\nflatten' :: Tree -> [Int] -> [Int]\nflatten' (Leaf n) ns = n:ns\nflatten' (Node l r) ns = flatten' l (flatten' r ns)\n")))}c.isMDXComponent=!0}}]);