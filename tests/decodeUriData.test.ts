import { decodeMigrationUriData } from "../src";

test("Decode otpauth-migration URI", async () => {
    const data = await decodeMigrationUriData("Ch8KBdFBKZJTEgpUZXN0IFRva2VuGgQyRkFTIAEoATACEAEYASAAKIji6ej7/////wE=");
    expect(data).toStrictEqual([{ algorithm: "ALGO_SHA1", digits: 1, issuer: "2FAS", name: "Test Token", secret: "0UEpklM=", secretBase32: "2FASTEST", type: "OTP_TOTP" }]);
});
