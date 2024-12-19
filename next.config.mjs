import intlPlugin from "next-intl/plugin";

const withIntl = intlPlugin("./src/config/intl.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withIntl(nextConfig);
