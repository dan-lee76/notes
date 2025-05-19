## Chapter 1 - Basic Static Analysis
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

## Chapter 2 - Basic Dynamic Analysis
Procmon captures a lot of data, however it doesnt capture everything. Misses device driver activity of user-mode component talking to a rootkit via device I/O, UI calls.


## Chapter 4 - Crash course of x86 Disassembly

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

### DLLs
- Advantages to using DLLs to contain the malware
- Contain the functionality needed to interact within the OS. 
- Might use other dlls for the malware

Process = Program being executed by windows. Manages own resources
Threads = What the Windows OS executes. Threads are independent sequences of instructions that are executed by the CPU, without having to wait for other threads.

## Chapter 11 - Malware Behaviour
### Windows Reverse Shells
Two simple malware coding implementations for `cmd.exe` - basic and multithreaded
#### Basic
- Easier to write, works just as well as multithreaded technique. 
- Involves call to CreateProcess and the manipulation of the StartupInfo.
- Socket is opened to connect to remote server
- Socket is then tied to the standard streams. 

#### Multithreaded
- Requires socket, two pipes and two threads. 
- Uses data encoding
- Used to manipulate or encode the data coming in or going out of the socket. 

Remote administration tool - used to manage computer remotely.
Botnets - Collection of compromised hosts, known as zombies, controlled by a single entity.  Goal is to compromise as many hosts as possible in order to create a large network. 
### GINA Interception
Windows XP Graphical Identification and Authentication. Malware users intercept this to steal user credentials. Intended to allow legitimate third parties to customise logon process to allow for auth via 3rd party like RFID. Implemented in a DLL

### Hash Dumping
Popular way to access system credentials. Could be cracked either offline or through a pass-the-hash attack. PSH and Pwdump are open source, so a lot of malware contain these. Most antivirus programs have signatures for the default compiled versions of these tools, so attackers have to compile their own version.
Pwdump works by performing DLL injection inside the Local Security Authority Subsystem Service

### Key Loggers
- Kernel-based loggers are difficult to detect with user-mode applications. Part of a rootkit, that can act as a keyboard drivers to capture keystrokes, bypassing user-space programs and protections.

User-based typically use the Windows API, implemented either by hooking or polling. Hooking uses the API to notify the malware a key is pressed. Polling constantly polls the state of the keys.

### AppInit_DLLs
- Malware gains persistence through special registry location called `AppInit_DLL`.

### SvcHost DLLs
- Malware will typically not create a new group, since it would be easier to detect. Instead, most malware will add itself to a pre-existing group or overwrite a nonvital service.

### Trojanized System Binaries
- Malware patches bytes of a system binary to force the system to execute the malware the next time the binary is run or loaded.
- Normally done by patching the entry function so it jumps to the malicious code
- Malware is added to empty section so does not impact normal operation. Will function no matter what. Will execute malware then jump back to normal location
## Chapter 12 - Covert Malware Launching
### Launchers/Loader
- Contains the actual malware, such as exe or DLL in its own resource section. 
- Does extract an embedded executable or DLL from the resource section
- Uses resource manipulation `FindResource`, `LoadResource`, `SizeofResource`

### Process injection
- `VirtualAllocEx` - allocate space in an external process memory
- `WriteProcessMemory` - can be used to write data to that allocated space
- `LoadLibrary` - Used by DLL injecting

Three common functions found in direct injection - `VirutalAllocEx`, `WriteProcessMemory`, `CreateRemoteThread`.

For process replacement - Key to process replacement is creating a process in a *suspended state*. Process will be in memory, but the primary thread is suspended. 

Hook injection - Malicious code will run whenever a particular message is intercepted, Particular DLL will be loaded in a victims process memory space

Keylogger is the only one to load into all threads.

Most malware authors use Detours to add new DLLs to existing binaries on disk

### APC (Asynchronous Procedure Call)
- Thread creation requires overhead, more efficient to invoke a function on an existing thread.
- APC injection can be done when function call is `WaitForSingleObjectEx`, `WaitForMultipleObjectsEx` and `Sleep`
- APC generated either by user or kernel mode
## Chapter 13 - Data Encoding
Null-preserving single-byte XOR encoding scheme. Two exceptions
- If the plaintext character is NULL or the key itself, then the byte is skipped
- If the plaintext character is neither NULL nor the key, then it is encoded via an XOR with the key

## Chapter 15 - Anti Disassembly
Linear Disassembly - Iterates over a block of code, disassembling one instruction at a time linearly without deviating.  Easiest to defeat because they are unable to distinguish between code and data.

Flow-oriented disassembler - Doesn't blindly iterate over a buffer, assuming the data is nothing but instructions packed neatly together. Examines each instruction and builds a list of locations to disassemble

If appears in red, rather than blue, then anti-disassembly is being used