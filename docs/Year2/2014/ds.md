# Things to go over for DS

* Nameserver - Stores the records of a DNS

* Marshalling - Process of converting program data to network form (JSON)

* NAT - Device change the local IP addresses and ports when they pass on packets


* RPC - Pretend remote device is actually local. It is an interface. Call by reference parameter passing is **not** possible. (Must be pass by copy). Typically defined as an interface. Memory is not shared. Much slower and subject to failures
* RMI - Applies RPC to objects.

   ![](https://notes.danlee.uk/assets/images/20230214221906-461b0a1215d5bb10372090163cc37ee0.png)


* REST


* Architectural Models 

  * Proxy - Object/Service presents the same interface as a remote service but more locally, and passes on requests

  * Broker - Common point where service providers can register their existence so that clients can find them

  * Layering - Partitioned into a number of layers, with a given layer making use of the services offered by the layer below

  * Tiered - System divided into distinct layers of tiers, each of which is comprised of specific processes


* Distributed System failures
  * Heterogeneity - Coping with system component variability
  * Failure Handling - Coping with partial failure
  * Concurrency - Correctness and performance with concurrency
* Indirect Communication
  * Space Uncoupling - The sender does not (need to) know the identity of the receiver and vice versa. (Partitions can be replaced, updated, replicated, migrated)

  * Time Uncoupling - The sender(s) and receiver(s) can have independent lifetimes. E.g. in a volatile environment 
* Group Communication
  * Application-level abstraction of multicast communication. e.g. fault-tolerance, reliable distribution to large numbers

  * Open-Group - Non-members can send to closed groups

  * Non-overlapping groups - Each process can be a member of at most one group 

  * Synchronous group communication - Does a sender blocks until all group members have received the message/replied

  * Reliability - Integrity (Message received is same as one sent), Validity (Outgoing msg is eventually delivered); Plus agreement (If the message is delivered to one process, then it is delivered to all processes in the group)
* Publish-Subscribe 
  * Publish info, and services subscribe. e.g. finance info, live feeds

  * Characteristics: Heterogeneity, async, delivery guarantee

  * Centralised event service - Relatively easy to construct, the event service becomes a bottleneck

  * Distributed event service - More complex, but more scalable
* Event routing
  * Flooding - Every event is sent to every event broker

  * Filtering - Event brokers share subs info and forward events to where valid subs exist

  * Rendezvous - There is a way to identify particular event brokers to handle matching events and subs
* Message Queues
  * 1-1 communication

  * Middleware

  * Space uncoupled - Messages are sent via message queues

  * Time uncoupled - message queues exist independently of message producers and consumers

  * Operations

    * Send - Add to queue

    * Receive - Take from queue

    * Poll - Check head of queue

    * Notify - Inform consumer msg is available

  * Usually persistent and reliable
* DSM
  * System emulate shared memory between processes on different computers
* Tuple Spaces
  * Write/read/take(read&delete)

  * Read and take done by pattern matching

  * Both space and time uncoupled