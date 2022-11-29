# Class Test Revision

## Summary of basic tactics
|             |             | How to prove   | How to use?         |
| ----------- | ----------- | -------------- | ------------------- |
| Conjunction | $P\wedge Q$ | `constructor,` | `cases h with p q,` |
| Disjunction | $P\vee Q$   | `right`/`left`     | `cases h with p q,` |
| Implication | $P\rightarrow Q$        | `assume h,`       | `apply h,`          |
| Falsum      | $false$       | x              | `cases h,`          |
| Vemum       | $true$        | `constructor,`    | x                   |


## Classical/Excluded Middle
Bit like `have` but better! Every propersision is either true or false ($P \vee ¬P$). Use `em (P)` with cases. Have the ability to 'spawn' in variables.

### Example 1
```lean
have pnp: P ∨ ¬P,
apply em,
cases pnp with p np,
exact p,
```
### Example 2
```lean
cases (em P) with p np,
exact p
```

### DeMorgan
```lean
theorem deMorgan1 : ¬ (P ∨ Q) ↔ ¬ P ∧ ¬ Q :=
begin
  constructor,
  assume npq,
  constructor,
  assume p,
  apply npq,
  left,
  exact p,
  
  assume q,
  apply npq,
  right,
  exact q,

  assume npq,
  cases npq with np nq,
  assume pq,
  cases pq with p q,
  apply np,
  exact p,

  apply nq,
  exact q,
end

theorem dMorgan2 : ¬(P ∧ Q) ↔ ¬ P ∨ ¬ Q :=
begin
  constructor,
  assume npq,
  have pnp : P ∨ ¬ P,
  apply em,
  cases pnp with p np,
  right,
  assume q,
  apply npq,
  constructor,
  exact p,
  exact q,

  left,
  exact np,

  assume h,
  cases h,
  assume pq,
  cases pq with p q,
  apply h,
  exact p,
  assume pq,
  cases pq with p q,
  apply h,
  exact q,

end
```

## Predicate Logic
### RAA
Turns something true to something which is not not true. It can be very useful :)
```lean
theorem raa : ¬¬P → P :=
  begin
    assume nnp,
    cases em(P) with p np,
    exact p,
    have f: false,
    apply nnp,
    exact np,
    cases f,
  end
```

### DeMorgan (Predicate Edition)
```lean
theorem dm1_pred : ¬ (∃ x : A, PP x) ↔ ∀ x : A, ¬ PP x :=
begin
  constructor,
  assume h x p,
  apply h,
  existsi x,
  exact p,
  assume h p,
  cases p with a pa,
  apply h,
  exact pa,
end

theorem dm2_pred : ¬ (∀ x : A, PP x) ↔ ∃ x : A, ¬ PP x :=
begin
  constructor,
  assume h,
  apply raa,
  assume ne,
  apply h,
  assume a,
  apply raa,
  assume np,
  apply ne,
  existsi a,
  exact np,
  assume h na,
  cases h with a np,
  apply np,
  apply na,
end

```


### Summary of Tactics
|             | How to prove | How to use          |
| ----------- | ------------ | ------------------- |
| ∀ x:A, PP x | assume y,    | apply h             |
| ∃ x:A, PP   | exists a,    | cases h with x ppx, |
| P → Q       | assume h,    | apply h,            |
| P ∧ Q       | constructor, | cases with p q,     |
| a = b       | reflectivity, | rewrite h,                    |


## Boolean
- Have uses of `bnot`, `bor`, `band`, `bxor` etc.
- Would need to apply `tt` or `ff`
- This is where you would be using `dsimp[...]`
- Can also use the option of `change` and `rewrite`
- Have the ability to use `reflextivity`, `contradiction`


## Natural Numbers
- Have the uses of `change` 
- The one where you have to use induction -> `induction n with n' ih,`
  - Should try and use induction only once. The fewer the better
- Sometimes ending the proof can be achieved by using `rewrite` or `reflextivity`
- May have to use `existi` for when it is `∃`