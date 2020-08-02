import React, { ReactPropTypes } from 'react';
import PropTypes, { string } from "prop-types";
import { SHOPIFY_STORE_URL } from "./constants";

export const formUrl = () => {
    
    // let apiKey = process.env["APP_SHOPIFY_API_KEY"];
    // let apiSecret = process.env["APP_SHOPIFY_SECRET_KEY"];
    
    return `https://b4ae10a58cdad4e4107e31ba83a455b5:
    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@${SHOPIFY_STORE_URL}`
}

