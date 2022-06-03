# TDD & SE Practices
## TDD - Agile Alliance
TDD - Test-driven development
Refers to a style of programming in which three activities are tightly interwoven;
- Coding
- Testing: In the form of writing unit tests
- Design: In the form of refactoring
### Expected Benefits
- Report significant reductions in defect rates,, at the cost of a moderate increase in initial development effort
- Tend to report that these overheads are more than offset by a reduction in effort in projects final phases
- No research, but leaders say there is improved design qualities in the code, and there is a higher degree of internal or technical quality
### Common Pitfalls
Individual mistakes:
- Forgetting to run tests frequently 
- Writing too many tests at once
- Writing tests that are too large
- Writing overly trivial tests
- Writing tests for trivial code

Team mistakes:
- Partial adoption - only a few developers on the team use TDD
- Poor maintenance of the test suite, so becomes inactive and creates a long running time
- Test suite becomes abandoned

### Origins
Not original to the Agile community, constitutes a breakthrough insofar.
By 2006 TDD is a relatively mature discipline which has started encouraging further innovations derived from it.

### Sings of use
- Code coverage is common approach to evidencing the use of TDD. Higher coverage does not guarantee, coverage below 80% is likely to indicate deficiencies in a teams mastery of TDD.
- Version control longs should show that test code is checked in each time product code is checked in. 

## SE Practices
### The Source Repository
Most of Googles code is stored in a single unified source-code repository and is accessible to all software engineers at Google.
Anyone at google is able to edit the source code, and are actively encouraged to find bugs to create a better product.

**Almost all development occurs at the 'head' of the repository**, not on branches. This helps identify integration problems early and minimises the amount of merging work needed. Also makes it easier and faster to push out security fixes.

**Automated systems run tests frequently**, often when there are file changes. Have a traffic like system, which monitors changes and ensures it passes all the tests. Most larger teams have a *build cop* whose responsible for ensuring the tests continue to pass at head, working with the authors and offering quick fixes

**Code ownership**. Each sub-tree of the repo have a file listing user id who owns that sub-tree. Also inherit owners from their parent directories. The owners control write access to that sub-tree. Can have multiple owners, anyone can alter code, but every change has to be reviewed by someone who understands the code.

### The Build System
Has its own build system, and it is typically very simple and quick for any Google engineer to build and test any software in the repository. Create build rules, and is up to the build system to map each build rule to a set of build steps, e.g. steps for compiling each source file and steps for linking, and for determining which compiler and compilation flags to use. Has a build file so its quicker and system doesn't have to compile code to see what libraries it requires.

**Individual build steps must be 'hermetic': they depend only on their declared inputs.**

**Individual build steps are deterministic.** Build system can cache build results. Can be used to retrieve old binaries and safely share between different users.

**The build system is reliable.** Never any need to run the equivalent of `make clean`.

**Build results are cached 'in the cloud'.** Includes intermediate results. If another build request needs the same results, the build system will automatically reuse them rather than rebuilding, even if the request comes from a different user.

**Incremental rebuilds are fast.** Build system stays resident in memory so that for rebuilds it can incrementally analyse just the files that have changed since the last build. 

**Presubmit checks.** Can run checks before code review or synchronously. Results get emailed and displayed on the web-based code review tool.

### Code Review
Have emails which get auto sent and can have code comparison with colours. Similar to gitlabs.

**All changes to the main source code repository MUST be reviewed by at least one other engineer (Has to be one of the owners).** Author is free to choose who the code reviewer is, but there are google tools which automatically suggest reviewers based on how many reviews they have to do, and their activity into that sub-tree. Being free to choose who reviews code can speed up development based on the authors need and the code produced.

**Code review discussions for each project are automatically copied to a mailing list designated by the project maintainers.** Anyone is free to comment on any change, regardless of whether they were named as a reviewer. 

There is also an **'experimental' section of the repository where the normal code review requirements are not enforced.** They are advised to program in the main section of the repository since code review is most effective when done as the code developed rather than afterwards.

**Engineers are encouraged to keep individual changes small**. This is so a reviewer doesn't have to look through a lot of code, and are more likely to suggest changes when the code is smaller.

### Testing
**Unit Testing is strongly encouraged and widely practised at Google**. Code which adds new functionality should also add new tests to cover the new functionality. Integration testing and regression testing are also widely practised.

**Load testing prior to deployment**. Teams are expected to produce a table or graph showing how key metrics (latency, error rate), vary with the rate of incoming requests.strong text

### Bug Tracking
Has its own tracking system called Buganizer. Use labels to targatise bugs in certain releases.

### Programming Languages
Advised to program in one of the five officially approved programming languages at Google: C++, Java, Python, Go or JavaScript.

There are also Google **style guides** for each language to ensure that code all across the company is written with similar style, layout and naming conventions. There is also a company-wide **readability** training process. Each change that adds non-trivial new code in a particular language must be approved by someone who has passed this 'readability' training process in that language

There are also **specialised domain-specific languages** that are used for particular purposes (build language)

Interoperaiton between these different programming languages done using **Protocol Buffers**. Way of encoding structured data in an efficient yet extensible way. Includes domain-specific language for specifying structured data, together with a compiler that takes in such descriptions and generates code is the languages.

**Commonality of process** is key to making development easy. Set of commands to perform all the usual software engineering tasks, and the same commands can be used no matter the project or language.

### Debugging and Profiling tools
In a server crash, a signal handler will automatically dump a stack trace to a log file as well as saving the core file. There are also web interfaces for debugging. These tools greatly increase the overall ease of debugging to the point where it is rare to fire up a traditional debugger.

### Release Engineering
**Releases are done frequently** for most software. Made possible by **automating most of the normal release engineering tasks.** Releasing frequently helps keep engineers motivated.

Once all tests passed, code moved onto release branch which gets rebuilt. Engineer can cherry pick features and patches. As long as it passes all test, gets released.

Once a candidate build has been packaged up, it is typically loaded onto a ***staging*** server for further **integration testing by small set of users**. Usually roll out one or more **canary** servers that are **processing a subset of the live production traffic**.

Once complete, the release can be rolled out to all servers in all data centres. For very high-traffic, high-reliability services, this is done with a **gradual roll-out** over a period of a couple of days, to help reduce the impact of any outages due to newly introduced bugs not caught by any of the previous steps.