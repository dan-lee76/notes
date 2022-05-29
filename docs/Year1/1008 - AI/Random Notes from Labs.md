Supervised learning is a type of machine learning tasks to learn a function that maps the input to the expected output based on given data. Two types of supervised learning:
**Regression**: The output is continuous
**Classification**: The output is discrete

Dataset is usually partitioned into training and testing datasets:
- The training dataset is used to built and tune the model
- Testing dataset (out-of-sample-data), should not be used in training. Its used to assess the model performance of new data observations

Linear regression is a widely used machine learning model. Fast to train and easy to use. Also easy to interpret compared to ANN. Training aims to learn the coefficients(intercept: $b_0$; coefficient: $b_i$) in the below function, with the minimum Mean Squared Error (MSE), that maps input x (features) to output y (label) in the training data.