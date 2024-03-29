# Continuous Integration
Development practice where members of a team integrate their work frequently, usually daily. Verified by an automated build (including tests) to detect any errors.

Originated from Extreme Programming development process.

Program off from the mainline. Builds on local machine and run tests, then commits and builds/tests on an integration server. Only then, when it passes all the tests, is the code complete and ready to be merged into mainline. If it doesn't pass the integration server, then the developer can quickly fix the issue and see what caused it (what new sections of code). Similar to how we did the coursework

## Practices of Continuous Integration

### Maintain a single source repository

Repos and source control arent part of all projects. Everything should be inside the repository, including tests scripts, properties files, database schema, install scripts, and third part libraries. Everything required for a build and sometimes an IDE config, so people can share the same IDE setups.
### Automate the Build
Make use of build environments such as `make` and `ant` for Java.
> Everyone should be able to bring in a virgin machine, check the sources out of the repository, issue a single command, and have a running system on their machine.

Have it so the build tool checks the object files to see if they need to be re compiled depending on if they were edited etc. Can have an IDE build the code on the developers machine but must have a separate one on the main server such as `make` or `ant`.
### Make your build self-testing
Should include automated tests in the build process.
For it to be self-testing, the build should fail if one of the tests fails. Should be able to check large portions of the code for any bugs.
Imperfect tests, run frequently, are much better than perfect tests that are never written at all.
### Everyone commits to the mainline every day
Need to update their code with the mainline, build, if it passes then they can commit to the mainline. With commits happening every few hours, a conflict can be detected quickly and not much data would be lost. Because there is only a few hours between commits, there's only so many places where the problem could be hiding.

Developers should commit at least once a day, and regularly to find the bugs. This will create less conflicts down the line. This breaks down their work and create a sense they have completed some work.
### Every commit should build the mainline on an integration machine
Developer should do a build on the mainline and fix any bugs, then their commit would be classed as complete. Shouldn't go home until the mainline build has passed. Nightly builds take too long to find bugs as it can be a whole day before anyone discovers them, and a lot of code to go through to find whats caused it.
### Fix broken builds immediately
If mainline fails, fix immediately. Point of CI, is to always have a stable build.
### Keep the builds fast
Create multiple pipelines.
**Commit Build** - Is the build that is needed when someone commits to the mainline. Needs to be quick. Once complete other people can work on the code with confidence.
Can run parallel tests on separate machines. Have it so there are two test stages, a 10 min one and a thorough one. This ensures the mainline is in a safe stage, if the 10 min one fails, should be fixed immediately with high importance, whereas the thorough one isn't a drop all scenario.
### Test in a clone of the production environment
Should duplicate the production environment as much as possible and to understand the risks you are accepting for every difference between tests and production.  Have an artificial environment for commit tests so they're quick. Secondary testing would have the production clone.
### Make it easy for anyone to get the latest executable
Make sure there is a well known place where people can find the latest executable. 
### Everyone can see whats happening
Have it so there's lights to know the current state of a build, or even a web page.
### Automate deployment
Need to have scripts which allow the moving of executable around multiple environments. Need to have automated rollback feature. Also seen it where they roll out build to different nodes or users, seeing how they interact and gradually rolling it out.
## Benefits of continuous integration
Most wide ranging benefit of continuous integration is the reduced risk. CI completely removes the long integration blind spot. At all times know where you are. CI also makes it dramatically easier to find bugs and remove them. Since there is only a small amount of code which as been committed, its fresh in memory and can use diff debugging. 
This results in frequent development which results in users getting new features more rapidly.
## Introducing continuous integration
One of the first steps is to get the build automated. Having a CI build of a few hours is better than nothing. Getting it down to the 10 min mark is best and ideal. Keep an eye on build times and take action as soon as you start going slower than 10 mins. 