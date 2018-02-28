# APICIA - API Connect Impact Analysis

Understanding interdependencies between the API Components and the back-end Service is critical for a successful business.
The purpose of this tool is to assess an API Catalog on API Connect and return the dependencies between the APIs, Applications, Products, Plans and Backend Services in a simple and human-readable form.

```
Sandbox
├────>Policy Name operation-switch
│ └────>Policy Version - 1.0.0
│     ├────>API - barcodes : 1.0.1
│     ├────>API - CredToISA : 1.0.0
│     ├────>API - Payment Initiation APIs : v1.0.5
│     ├────>API - ISAMPSD2OauthProxy : 1.0.0
│     └────>API - Account Information APIs BOS : v1.0-rc4
├────>Policy Name gatewayscript
│ └────>Policy Version - 1.0.0
│     ├────>API - AResourceFlow : 1.0.0
│     ├────>API - InvokeURLtoVariable : 1.0.0
│     ├────>API - Analyses : 1.0.0
│     ├────>API - JWKS : 2
│     ├────>API - RegisterAPI : 1.0.0
│     ├────>API - Account Information APIs BOS : v1.0-rc4
│     ├────>API - FakeIntroRersource : 1.0.0
│     └────>API - JWKS : 1.0.0
├────>Policy Name apimockajson
│ └────>Policy Version - 1.0.0
│     ├────>API - AFakeIntrospect : 1.0.0
│     └────>API - FakeIntroSpect : 1.0.0
├────>Invoke Host - http://
│ └────>Invoke ContextRoute - /$(Invoke_URL)
│     └────>API - InvokeURLtoVariable : 1.0.0```
```

Using this tool, you can seamlessly review the back-end services and understand the critical dependencies of your APIs. This is beneficial for at-a-glance assessments and understanding of your APIc estate.
APICIA is a node.js application which interacts with the API Connect via the command line through a series of commands which you run using the interactive interface provided by the application.

##Installation

If you are installing node in Ubuntu:

```
sudo apt install npm
sudo apt install nodejs-legacy
```

Once the repository has been cloned run npm install in the directoy with package.json

```
npm install
```

Then start the tool with

```
 export LANG=en_EN.UTF-8
 node apicia.js
```

This will then provide an interactive interface to configure the tool. If you have already created a configuration file then use the following command.


```
 node apicia.js  --load config.file
```

## Usage


```
node apicia.js [--json] [--load <path>] [--help]
--load <path> 		-	 Load Config from path
--json 			-	 print the response in JSON
--help  		-	 this message

```

## Example Config
Here is an example of the JSON response file structure that can be used to configure the application.
```
~/$ cat .apicia
{
  "tempfolder": "tmp",
  "password": "BASE 64 Password",
  "username": "user@uk.ibm.com",
  "server": "managementserver.host.com",
  "organization": "demo",
  "catalog": {
    "sb": {
      "displayName": "Sandbox",
      "machineName": "sb"
    }
  },
  "displaySchema": [
    "Service - Server / QueueManager",
    "Service - ContextRoute / Queue",
    "API"
  ]
}

```


## Example

 ```
 ~/$ node apicia.js  --load .apicia
✔ Logging in...
Begin downloadYamlForProduct function for sb
✔ Downloading Product sb:prod_methodfront-end:1.0.0 this may take a few minutes...
✔ Downloading Product sb:prod_123rufiyaa:1.0.0 this may take a few minutes...
✔ Downloading Product sb:prod_undefinedobject-based-implemented-handcrafted-cotton-mouse:1.0.0 this may take a few minutes...
Processing Complete for sb

Results of analysis:
───────────────────────────────────────────────────────────────────────────────────────────


Sandbox
└────>company.com
 	├────>/card
 	│	├────>API - Switchable : 1.0.0
 	│	└────>API - Gateway users : 1.0.0
 	├────>/bank
 	│	├────>API - Chicken : 1.0.0
 	│	└────>API - Agent : 1.0.0
 	├────>/core
 	│	├────>API - Auto Loan Account Fantastic Wooden Towels : 1.0.0
 	│	└────>API - supply-chains : 1.0.0
 	└────>/request/soap
 	 	├────>API - supply-chains Optimization : 1.0.0
 	 	└────>API - scalable Concrete Granite : 1.0.0

```
