<!-- @format -->

# how a DNS works

When a user needs to communicate with another computer, might request some specific resource form the internet, there is a location which identifies the computer (any electronic device) the user is trying to communicate. This location is a human-friendly name designed specially to be readable for humans, called domain names. But computers do not understand the domain names instead, computers locate each other with a sequence of numbers called IP addresses. So before each computer communicates, there is a service that converts the human-friendly names into IP addresses and vice versa. The next description is a brief example of how DNS words when a user requests a resource from the internet:
1. The user opens up a web browser (Brave, for example) and types http://my-website.com into the address bar.
2. The user computer asks the DNS servers for the specific IP address and waits until the some DNS servers get the answer
3. Once the DNS server found the IP address, for example, 190.120.292.60, it responds to the user computers.
4. The browser opens a connection to the server using the IP address provided and retrieves the page from the site requested, in this case for http://my-website.com
