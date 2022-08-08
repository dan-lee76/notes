# Microsoft Azure Fundamentals: Describe cloud concepts
## Cloud Computing
### Shared responsibility model
- Traditional corporate datacenter: Company is responsible for maintaing the physical space, ensuring ecruity and maintaining everything. I.T department responsible for infrastructure and software
- Shared responsibility model: Shared between cloud provider and the consumer.
- IaaS (Infrastrucutre as a Service): Places most responsibility on the consumer, cloud provider responsible for the basics.
- SaaS (Software as a Service): Places responsibility with the cloud provider. 
- PaaS (Platform as a Service): Middle ground of them. Evenly distributes responsibility.


### Cloud Models
#### Private Cloud
Natural evolution from a corporate datacenter. Cloud thats build, controlled and maintained by a single entity. Gives them more control, however comes with greater costs and fewer benefits of public cloud. Can be hosted from on site datacenter, or dedicated offsite. Complete control over resources and secuurity. Hardware must be purchased for startup and maintenance. Organisations are responsible for hardware maintenance and updates.
#### Public Cloud
Built, controlled, and maintained by third-party provider. Anyone who has money can puurchase clouud services and use resoucres. (Like Azure) Pay for what they use. Basically rent what they are using etc.
#### Hybrid Cloud
Uses both private and hybrid in an inter-connected environment. Can be used to allow a private cloud to surge for increased, temporary deband by deploying public cloud resources. Also provide extra layer of security. Able to choose what is in what cloud.
#### Multi-Cloud
Use multiple public cloud providers. Different features from each provider. Or your in progress of migrating. 
#### Azure Arc
Set of technologies that helps manage own cloud environment. 
#### Azure VMware Solution
Run your VMware workloads in Azure with seamless integration and scalability.

### Consumption based model
- CapEx (Capital Expenditure): Usally one-tine, up-front expenditure to purchase resources. 
- OpEx (Operational Expenditure): Spending money on services or products over time. Renting or leasing a company vehicle etc.

Cloud computing falls under OpEx as it operates on a consumption-based model. You just pay for the IT resources you use. Consumption-based model has many benefits:
- No upfront costs
- No need to purchase and manage costly infrastructure that users might not uuse to its fullest potential
- Ability to pay for more resources when they're needed
- Ability to stop paying for resources that are no longer needed.

Only paying for the virtual machines that you use, not the 'extra capacity' the the cloud provider has on hand.

### Pricing models
Cloud computing is pay-as-you-go pricing model. Only pay for what you want, this helps you with:
- Plan and manage your operating costs
- Run your infrastrucutre more efficiently
- Scale as your business needs change

## Benefits of Cloud Computing
### High Availability
Focuses on ensuring maximum availability, regardless of disruptions or events thayt may occur.
Need to account for service availability guarantees, Azure is highly available cloud enviroment with uptime guarantees, these are embedded inside the SLA (Service level agreement)
### Scalability
- The ability to adjust resources to meet demands. Can add more resourcs to better handle the increased demand. 
- Not overpaying for services, only pay for what you use. 
- Verical scaling: Increasing or decreasing the capabilities of resources. Alter hardware specifications due to application needs
- Horizontal scaling: Adding or subtracting the number of resources. Suddenly experience steep jump in demand, automatically or manually scale.

### Reliability 
Ability of a system to recover from failures and continue to function. One of the pillars of the Microsoft Azure Well-Architected Framwork. The cloud has a decentralised design, means its reliable and resilient. Can automatically shift to regions for you.
### Predictability
Move forward with confidence. Focus on either performance predicatbility or cost predicatability. 
- Performance: Predict the resources needed to deliver a positive experience for customers.
- Cost: Focused on predicting or forecasting the cost of the cloud spend. Using cloud analytics and information, can predict future costs and adjusts your resources as needed.

## Security & Governance
- Having templates help ensure that all deployed resources meet corporate standards and government regulatory requirements. Can also update all resources to new standards automatically.
- Cand find a cloud solution that matches security needs.
  - Infastrucutre as a service will provide you with the most resources.
  - Platform as a service/software as a service for maintance and software patches.
- They also provide you with DDoS attacks. 

## Manageability in the cloud
Speaks to managing your cloud resources.
- Automatcially scale resources
- Deploy resources based on templates
- Monitor health of resources
- Recieve automatic alerts on configs
## Management in the cloud
Speaks to how you're able to manage your cloud environment and resources.
- Through a web portal
- Using CLI
- APIs
- PowerShell