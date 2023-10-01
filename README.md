# gauth-decode
A NPM package to decode Google Authenticator export data

Usage:
```typescript
import { decodeMigrationUri } from "../src";

void decodeMigrationUri("otpauth-migration://offline?data=Ch8KBdFBKZJTEgpUZXN0IFRva2VuGgQyRkFTIAEoATACEAEYASAAKIji6ej7%2F%2F%2F%2F%2FwE%3D").then(result = console.log(result));
```

# Thanks to
* [google-authenticator-exporter](https://github.com/krissrex/google-authenticator-exporter) project to which the entire code is based upon.