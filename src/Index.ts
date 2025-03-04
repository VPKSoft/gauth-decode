import { decode } from "./AuthExporter";

/**
 * Decodes the URI search parameter `data` base64 value.
 * @param {String} uriData The base64 data to decode.
 * @returns A promise to the decoded TOTP-authentication data.
 */
const decodeMigrationUriData = (uriData: string) => {
    return decode(uriData);
};

/**
 * Decodes the data from the specified `otpauth-migration://` URI.
 * @param {String} otpauthMigration otpauth-migration://` URI
 * @returns A promise to the decoded TOTP-authentication data.
 */
const decodeMigrationUri = (otpauthMigration: string) => {
    const queryParams = new URL(otpauthMigration).search;
    const data = new URLSearchParams(queryParams).get("data");
    if (data) {
        return decodeMigrationUriData(data);
    }

    return Promise.reject("The URL search parameter 'data' is missing.");
};

export { decodeMigrationUriData, decodeMigrationUri };

export { makeOtpAuthKey } from "./AuthExporter";
