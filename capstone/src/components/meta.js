import React from "react";
import { Helmet } from "react-helmet";

export default function Meta() {
    return (
        <>
            <Helmet>
                <title>Little Lemon - Mediterranean Restaurant</title>
                <meta name="description" content="A family-owned Mediterranean restaurant with a modern twist." />
                <meta property="og:title" content="Little Lemon - Mediterranean Restaurant" />
                <meta property="og:description" content="A family-owned Mediterranean restaurant with a modern twist." />
                <meta property="og:image" content="/path/to/image.jpg" />
                <meta property="og:url" content="https://www.littlelemon.com" />
            </Helmet>
        </>
    )
}