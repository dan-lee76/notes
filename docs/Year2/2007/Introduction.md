# Introduction to Operating systems and concurrency
_03/10/22_
## Goals
- Introduction to the fundamental concepts, key principles and internals of (old and new) operating systems and concurrency
- Better understanding on how application programs interact with the OS
- Basic understanding of writing concurrent/parallel code and OS principles related to concurrency

50% Coursework 20 Credits

## Defining Operating Systems
- **File Systems**: Where is the file physically written on the disk and how is it retrieved
- **Abstraction**: Why looks the instruciton the same independent of the device?
- **Concurrency**: What if multiple programs access the same file simultaneously?
- **Security**: Why is the access denied?


An operating system is a layer of indirection on top of the hardware.
- It provides **abstractions** for applicaiton programs.
- Provides a cleaner and easier interface to the hardware and hides the complexity of 'bare metal'
- Also allows the programmer to be lazy and use common routines

Many modern OS use **multi-programming** to **improve ux** and **maximise resource utilisation**. However this creates important consequences


The OS must allocate/share resources fairly and safely between competing processes
The execution of multiple programs (processes) needs to be interleaved with one another.
(This requires **context switches** and **process scheduling**)