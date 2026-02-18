// data/mockData.js

export const sites = [
  {
    id: 1,
    name: "Central Plaza",
    location: "NYC",
    capacity: 1200,
    status: "Active",
  },
];

export const energyRecords = [
  { date: "2026-01-01", value: 320 },
  { date: "2026-01-02", value: 410 },
  { date: "2026-01-03", value: 380 },
];

export const utilizationRecords = [{ siteId: 1, utilization: 72 }];

export const recommendations = [{ siteId: 1, suggestion: "Increase IoT distribution by 10%" }];

export const users = [
  { id: 1, username: "admin", role: "Admin" },
  { id: 2, username: "analyst", role: "Analyst" },
  { id: 3, username: "viewer", role: "Viewer" },
];
