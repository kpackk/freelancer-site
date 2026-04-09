module.exports = {
  apps: [
    {
      name: "freelancer-site",
      cwd: "/root/freelancer-site",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3002",
      interpreter: "node",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: "3002",
      },
    },
  ],
};
