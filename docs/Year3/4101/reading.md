## Chapter 1
ASCII strings use 1 byte per char, unicode 2
0x00 at the end is the NULL terminator

Files can be compressed, a wrapper program will be in the program to decompress the packed file
Can use PEiD program to detect the type of packer or compiler employed

Portable Executable File Format (PE) is used by windows executables. OS loader to manage the wrapped executable code.

Static linking imports linked libraries into the executable, which makes it harder to decode/analyse

`.text` - Contains the instructions which the CPU executes
`.rdata` - Import and export information
`.data` - Programs global data which is accessible from anywhere in the program
`.rsrc` - Resources used by the executable that are not considered part of the executable, icons, imgs, strings etc

## Chapter 2
Procmon captures a lot of data, however it doesnt capture everything. Misses device driver activity of user-mode component talking to a rootkit via device I/O, UI calls.


## Chapter 4

General registers, 32 bits in size, and can be referenced as either 32 or 16 bits in assembly.

`EDX` - Reference the full 32-bit register
`EAX`,`EBX`,`ECX`,`EDX` - Can be referenced as 8-bit values using the lowest 8 bits.

### Flags
`ZF` - Zero flag is set when the result of an operation is = 0
`CF` - Carry flag is set when the result of an operation is too large or too small
`SF` - Sign flag is set when the result of an operation is negative or cleared when the result is positive
`TF` - Trap flag is used for debugging


### The Stack
`ESP` - Stack Pointer
`EBP` - Base pointer


## Chapter 6
Local variables would be stored on the stark, whereas global would be stored in memory.
Conditional statements would use `jnz`
`cmp` is comparison between to vars

### Recognising for loops
- Can be located by the four components
1. Initialisation
2. Comparison
3. Execution instructions
4. Increment/decrement

Items are added right to left

## Chapter 7
`DWORD`/`dw` = 32-bit word
`WORD`/`w` = 16-bit word
`H` = Handles. Reference to an object
`LP` = Long Pointer. Pointer to another type


## Chapter 15
Linear Disassembly - Iterates over a block of code, disassembling one instruction at a time linearly without deviating.  Easiest to defeat because they are unable to distinguish between code and data.

Flow-oriented disassembler - Doesn't blindly iterate over a buffer, assuming the data is nothing but instructions packed neatly together. Examines each instruction and builds a list of locations to disassemble

If appears in red, rather than blue, then anti-disassembly is being used