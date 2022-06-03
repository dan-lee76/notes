# Code Conventions & Maintainable Code
## Code Conventions
Maintainability is a desired property of software. Software maintenance is about responding to change using both current and new software assets.
Complex software can become maintainable when it is understandable, whether through good documentation or through improved code readability

Code conventions appear to support maintainability over a wide range of contexts, and benefit the entire organisation.
- Not all relevant, and aren't always used when in a rush
- Some conventions may seem important to some but others would disagree
- Is normally secondary to compliance with functional specifications
- On avg, the more code was added, more violations appeared. These were mainly commenting and final local variable violations. These accounted for 2/3 of the violations
- Also prevalent were instances of numeric and string literals hard-coded into source code, and missing braces

## Maintainable Code
Allows you to quickly and easily:
- Fix a bug, without introducing a new bug as you do so
- Add new features, without introducing bugs as you do so
- Improve Usability
- Increase performance
- Make a fix that prevents a bug from occurring in future
- Make changes to support new environments, operating systems or tools
- Bring new developers on board your project

Need to make the code understandable, so add comments and make it easy to understand
Making code maintainable is especially useful in open source as can get over people to fix issues and the project can keep going on 

Have code review to ensure its understandable and there are no errors.
Code reviews and pair programming are good uses to help maintainability. Only use them where errors are prone and highest impact on successful function

- Need to be able to understand the code after programming it (after few months)
- Make sure the code is easy to change
- Easy to verify a change
- Can you make a change with only a low risk of breaking existing features, if it does break is it easy to fix?