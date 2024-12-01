import type { NextConfig } from "next";

const {withNextVideo} = require('next-video/process');

/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withNextVideo(nextConfig);
