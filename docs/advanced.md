---
id: advanced
title: advanced
sidebar_label: advanced
---

## Advanced utilisation and customisation

**INIT** being built to be flexible means you can remove/add tasks or functionalities to your project, if needed.

### BrowserSync proxy

If you work locally on your project but also need to serve your files on a distant server, you might need to activate BrowserSync proxy to enjoy hot reload and others.

To do so, comment out the server element for the proxy option in /gulp/base/connect.js :

```
var  serverConfig  =  {
	//server:  {
	//	baseDir:  path.to.destination
	//},
	proxy: 'http://site.com'
	port:  9000,
	open:  false
};
```

### Serve output to a distant server

You might need to upload your styling or scripts on a distant server, in combination with the BrowserSync proxy configuration.

To do so, you will need to edit the paths in /gulp/paths.js and in the relative tasks.
