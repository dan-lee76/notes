# WiFi
## Connecting to UON Internet
1. Go to **WiFi settings** and select '**eduroam**'
2. Username: University **email address** (*abcdl12@nottingham.ac.uk*)
3. Password: Univeristy **password** (*ultraSecurePasw0rd*)
4. Enjoy

### Certificate Security Information
When connecting for the first time, ensure certificate matches.
- Server thumbprint: 80 a4 6b db 14 fa b9 b7 8c a3 50 7d 7f 50 1e d2 a8 a0 1c 39
- Server common name (CN): radius.nottingham.ac.uk
- Issued by: GEANT OV RSA CA 4
- Issued to: The University of Nottingham, NOTTINGHAM, Nottinghamshire, GB
- Valid from: 12 August 2022 01:00:00
- Valid to: 13 August 2023 00:59:59

## Connecting in Halls
**eduroam**: Normal internet access, many devices can connect to this
**UoN-halls**: Devices which cannot access eduroam, such as IoT.
1. Log onto [pass.nottingham.ac.uk/onboard](https://pass.nottingham.ac.uk/onboard)
2. Find your mac address, and add it to the site
3. Connect that device to **UoN-halls** with the password: **Nottingham#1881**

## Connecting to UoN-Guest
1. Connect to WiFi, and sign up for account
2. If page doesn't load, go to [pass.nottingham.ac.uk](https://pass.nottingham.ac.uk)

## Connecting on Andoird
|                                   |                                     |
|-----------------------------------|-------------------------------------|
| SSID                              | eduroam                             |
| Encryption                        | 802.1X, WPA2-Entrerprise            |
| EAP Method                        | PEAP                                |
| Phase 2 Auth                      | MSCHAPv2                            |
| CA Certificate                    | System Certificate                  |
| Domain                            | nottingham.ac.uk                    |
| Username/Identity                 | uni email                           |
| Outer Identity/Anonymous Identity | blank or anonymous@nottingham.ac.uk |
| Password                          | uni password                        |
| Proxy                             | Set to none                         |


## Troubleshoot Connecting
### No auth/no internet access/ not connecting
Due to the upgraded certificate issued on the 12th August, all returning students will have to re-auth. This can easily be done by following these steps below:
This also resolves the majority of WiFi issues
1. Forget network 
   - Windows: Right click on Eduroam, click forget network
   - Mobile: Select Eduroam, press forget network
2. [Log bag into eduroam ](#connecting-to-uon-internet)

### Unable to get certificate
If your unable to recieve the eduroam certificate, download the [cat tool](https://cat.eduroam.org/?idp=1094&profile=1927) to automatically set up eduroam

## Visiting Other Universities
Other institutions allow connections to their internet facilities whilst using their Nottingham credentials. If you are having trouble connecting, forget network or download the cat tool



*Information is extracted from [Nottingham DTS WiFi helpdesk](https://www.nottingham.ac.uk/go/wifi)*