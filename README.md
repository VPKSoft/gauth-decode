# gauth-decode
A NPM package to decode Google Authenticator export data

Usage:
```typescript
import { decodeMigrationUri } from "../src";

void decodeMigrationUri("otpauth-migration://offline?data=Ch8KBdFBKZJTEgpUZXN0IFRva2VuGgQyRkFTIAEoATACEAEYASAAKIji6ej7%2F%2F%2F%2F%2FwE%3D").then(result = console.log(result));
```
output:

```javascript
[
    {
        algorithm: "ALGO_SHA1",
        digits: 1,
        issuer: "2FAS",
        name: "Test Token",
        secret: "0UEpklM=",
        secretBase32: "2FASTEST",
        type: "OTP_TOTP"
    }
]
```

# Thanks to
* [google-authenticator-exporter](https://github.com/krissrex/google-authenticator-exporter) project to which the entire code is based upon.
* [TypeScript NPM Package Publishing: A Beginner’s Guide](https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c)
