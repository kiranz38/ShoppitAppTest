import React, { ReactPropTypes } from 'react';
import PropTypes, { string } from "prop-types";
import { SHOPIFY_STORE_URL } from "./constants";

export const formUrl = () => {
    
     let apiKey = process.env["APP_SHOPIFY_API_KEY"];
    let apiSecret = process.env["APP_SHOPIFY_SECRET_KEY"];
    
    return `https://${apiKey}:
    ${apiSecret}@${SHOPIFY_STORE_URL}`
}

