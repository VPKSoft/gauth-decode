import { decodeMigrationUri } from "../src";

test("Decode otpauth-migration URI", async () => {
    const data = await decodeMigrationUri("otpauth-migration://offline?data=Ch8KBdFBKZJTEgpUZXN0IFRva2VuGgQyRkFTIAEoATACEAEYASAAKIji6ej7%2F%2F%2F%2F%2FwE%3D");
    expect(data).toStrictEqual([{ algorithm: "ALGO_SHA1", digits: 1, issuer: "2FAS", name: "Test Token", secret: "0UEpklM=", secretBase32: "2FASTEST", type: "OTP_TOTP" }]);
});
