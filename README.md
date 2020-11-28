# Octopusx Sdk

[![Build Status](https://travis-ci.org/op-developer/op-api-javascript-sdk.svg?branch=master)](https://travis-ci.org/op-developer/op-api-javascript-sdk)

## Description

    Simple universal SDK for easy consumption of OctopusX APIs.

## Installation

    npm install  ocx-sdk-js

## Usage

    import Sdk from "ocx-sdk-js";

    const options = {
        headers: {
        
            'client-id': 'your-octopusx-client-id',
            'client-ecret': 'your-octopusx-client-secret',
        }
    }

    const client = new Sdk(options)



You can set request options for client instance, and also for each request function call, which is useful because you can then use global instance of SDK client, with globally defined x-api-key, but still give separate x-authorization header for each user:

const auth = await client.register(userData);




