## Base64 Encoding
- Used in HTTP and XML
- Usually padded out with = to be 
- First byte becomes the MSB
- Decoding in the reverse of encoding

## Cryptography
- If using standard cryptogram, only need to recognise the algorithm but also the key used to decrypt.
- Look for strings that refer to the use of cryptography

## Custom Encodings
- Malware normally uses homegrown encoding schemes
- One mechanism used is to layer simple encoding techniques
- Harder to decode custom encodings

### Cracking
- Encoding routines will be called before the data is output
- Decoding routes will be called after the data is input
- Use this to trace the execution
- `CreateFile()`/`WriteFile()`

## DLL hijacking
- Can be done from the directory it searches from
- Various steps for DLL hijacking (check ppt)

## Disassembly Techniques
- Linear - Add length of first instruction to address of that instruction to give address of the next one
	- Easy to hide after a `jmp` instruction. Best to pick an opcode that consumes several bytes (`0xE8`)
- Flow - Generally better results than linear
	- Aims to improve the detection of instructions (and rejections of data)
	- Follows the flow of the program rather than linearly processing instructions
	- Flow disassembly uses the type of instruction to inform which instruction should be processed next
- Need to force the disassembler to decode the instructions one way, but not the way the CPU would