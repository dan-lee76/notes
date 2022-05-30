# Fundamental Issues
- **Top-down** approach: pre-processed to do things
- **Bottom-up** approach: simulate brains, learn new behaviours
## Travelling Salesman Problem
Combinatorial Explosion Problem: One of the major unsolved theoretical problems in computer science
- Has to visit a number of cities, must start and end at the same one.
- Need to find the minimum distance/cost solution

Towers of Hanoi - Move 64 gold rings to form a tower, need to move the tower

## Combinatorial Explosion
**- Where the number of problem solutions grows exponentially with its size. An exhaustive search is not an option**
[Insert image]

## The Turing Test
- Work out which candidate is the machine or human, only by asking them questions.
- If the machine can fool the interrogator 30% of the time, the machine is considered intelligent.
- E.g Alexa, Google AI Cloud contact.

## Chinese Room Experiment
- Rule processor happens to be intelligent but has no understanding of the rules

# Machine Learning: ANN
## Machine Learning
- Computer programs that automatically improve their performance through experience.
- Study of computer algorithms that can improve automatically through experience and by the use of data.

**Top-down/Classic**: Model all different functions and wire all these 'agents' together.
**Bottom-up/Deep Learning**: Give the system a lot of data, so it can discover by itself
## Neural Networks
- Signals move between neurons
- Sum of inputs >= threshold, the neuron 'fires'. If theirs a long-term firing pattern, then the AI is learning

Weighted Sum:
$$Y=x_1\times w_1+x_2\times w_2+x_3\times w_3$$
*Neurons connected by directed, weighted paths. 
Positive weight: excitatory, otherwise inhibitory.
**$x_1$** and $x_2$ encourage the neuron to fire.
$x_3$ prevents the neuron from firing*

*Each neuron has a fixed threshold $t$.
Weighted sum input to the neuron $Y >= t$. Then the neuron fires.*
### Training 
Weights are normally randomly assigned
- **Epoch**: Entire training set feed into the neural network. The AND function: an epoch consists of four sets of inputs(patterns) feed into the network
- **Training Value, T**: Value that we require the network to produce
- **Error, Err**: The amount the output by the network O differs from the training value T
- **X_i**: Inputs to Neuron
- **w_i**: Weight from input X_i, to the output 
- **LR (Learning Rate)** How quickly the network converges. It is set by the experimentation, typically 0.1. This is the adjustment amount

```
While epoch produces an error
	Check next inputs(pattern) from epoch
	Err = T - O
	If Err <> 0 then
		w_i = w_i + LR * X_i * Err
	End If
End While
``` 

- **Mean Squared Error**: `[(T-O)^2]/n`. Measures the different between T and O during training.
- **Linearly Separable**: Functions which can be separated. Only these can be represented by a single layer NN

+ **T** is the expected output the learning algorithm it trying to learn.
+ **O** is the output of the ANN with the current set of weights during the training.

If you can separate your inputs and outputs with a straight line then you have found the weights.

> Plot your inputs on a graph
> If you can draw a line such that your inputs that lead to an expected output are on one side of the line and all other inputs are on the other side, then congrats

# Machine Learning: Intro
Program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E.

Three pillars of machine learning:
1) Models and algorithms. Doesn't require knowledge engineers
2) Powerful and cheaper computation
3) Massive data warehouse

## Process
Partition the total datasets into subsets:
- Learning the parameters of the model
- How to generalise the independent data (overfitting)
- **Overfitting**: When a statistical model fits exactly against its training data. When this happens the algorithm cannot perform accurately against unseen data.
- When doing evaluation do 70% training, 30% testing. Multiple runs using different partitions(K-Fold)

## Data Mining
- **Data mining**: Exploration and analysis of large quantities of data to discover valid, novel, useful and understandable patterns in data.
- Machine learning predicts with models whereas data mining explains patterns

# Machine Learning: Techniques
- **Supervised Learning**: From labelled training data, with examples of inputs and desired outputs (Classifications, regression) 
- **Unsupervised Leaning**: A function to describe hidden structure from unlabelled data. (Clustering, association rules)
- **Classification**: Learn to predict to which set a instance belongs to based on pre-labelled instances.
- **Regression**: Estimated relationship between variable Y and variable(s) X. Function is based on the given data to minimise its mean square error to fit the data.
- **Decision Tree**: 
	- Internal Nodes: Decision rules on features (variables/inputs).
	- Leaf Nodes: predicted class label (output)
	- +Quick Training time, handle large features, easy to implement
	- -Only simple decision boundaries, problem with lots of missing data and cannot handle complicated relationship
- **Neural Network**: Set of neurons connected by directed weighted edges
	- +Can lean complicated class boundaries and be more accurate.
	- -Hard to implement, and slow training time. Can overfit the data and hard to interpret

## Supervise Learning Applications
*Handwriting/Pattern Recognition/Translation*
- **Clustering**
	- Given: Un-labeled data set D and similarity/distance metric
	- Goal: Find 'natural' partitioning, or groups of similar data points
	- Application: Divide a market into distinct subsets of customers
- **Association**
	- Correlation between any two or more variables
	- Given: Set of records containing items
	- Goal: Produce dependency rules, to predict occurrence of one variable based on other variables
	- Application: Market basket analysis
- Correlation $\ne$ Causation