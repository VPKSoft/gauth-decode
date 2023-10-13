# gauth-decode
A NPM package to decode Google Authenticator export data

## Usage
```typescript
import { decodeMigrationUri } from "gauth-decode";

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

## Sample data
A sample [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) QR code from [2FAS](https://2fas.com/check-token/):

![image](https://github.com/VPKSoft/gauth-decode/assets/40712699/54a05400-0284-46d0-828e-cbd902b12b85)

Contained URI data: `otpauth://totp/Test%20Token?secret=2FASTEST&issuer=2FAS`

The same sample data exported from Google authenticator:

![image](https://github.com/VPKSoft/gauth-decode/assets/40712699/2aa815fc-5578-4c28-abb4-26d1f5b416d1)

Contained URI data: `otpauth-migration://offline?data=Ch8KBdFBKZJTEgpUZXN0IFRva2VuGgQyRkFTIAEoATACEAEYASAAKIji6ej7%2F%2F%2F%2F%2FwE%3D` and this can be decoded using this [package](#usage).


## Thanks to
* [google-authenticator-exporter](https://github.com/krissrex/google-authenticator-exporter) project to which the entire code is based upon.
* [TypeScript NPM Package Publishing: A Beginner’s Guide](https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c)
