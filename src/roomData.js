
const data = Array.from({ length: 31 }, (_, i) => ({
  roomNumber: 100 + i,
  name: "",
  type: i < Math.floor(31 / 2) ? "King" : "Queen",
  status: "✅ Available",
  clean: "✅",
}));

export default data



